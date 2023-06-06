import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import MyRating from "~/components/utils/raiting";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";


export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const camId = props.params.camId;
  const draftId = props.params.draftId;
  const brandId = props.params.brandId;

  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);

  const camp = await axios({
    method: "post",
    url: `${BaseUrl}/api/campaign-search`,
    data: { id: camId },
  });

  return json({
    campaignId: camId,
    userId: cookie.user.id,
    draftId: draftId,
    brandId: brandId,
    cpp: camp.data.data[0].costPerPost,
    currency: cookie.user.currency.code,
    name: camp.data.data[0].campaignName,
  });
};

enum UserDetailsType {
  insights,
  payments,
  camapaign,
}

const PaymentRequest: React.FC = (): JSX.Element => {
  const loaderdata = useLoaderData();
  const brandId = loaderdata.brandId;
  const campaignId = loaderdata.campaignId;
  const userId = loaderdata.userId;
  const draftId = loaderdata.draftId;
  const cpp = loaderdata.cpp;
  const currency = loaderdata.currency;
  const campaignName = loaderdata.name;

  const [submit, setSubmit] = useState<boolean>(false);

  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    UserDetailsType.insights
  );

  const init = async () => {
    const req = {
      search: {
        type: "3",
        campaign: campaignId,
        brand: brandId,
        influencer: userId,
      },
    };
    const apireq = await axios({
      method: "post",
      url: `${BaseUrl}/api/search-review`,
      data: req,
    });
    if (apireq.data.data.length > 0) {
      setSubmit(true);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
        <div className="flex mx-4 gap-4">
          <div
            onClick={() => {
              setUserDetails(UserDetailsType.insights);
            }}
          >
            <CusButton
              text="Insights"
              background={`${userDetails == UserDetailsType.insights
                ? "bg-[#01FFF4]"
                : "bg-gray-100"
                }`}
              fontwidth="font-bold"
              textColor={`${userDetails == UserDetailsType.insights
                ? "text-black"
                : "text-gray-600"
                }`}
            ></CusButton>
          </div>
          <div
            onClick={() => {
              setUserDetails(UserDetailsType.payments);
            }}
          >
            <CusButton
              text="Payments"
              background={`${userDetails == UserDetailsType.payments
                ? "bg-[#01FFF4]"
                : "bg-gray-100"
                }`}
              fontwidth="font-bold"
              textColor={`${userDetails == UserDetailsType.payments
                ? "text-black"
                : "text-gray-600"
                }`}
            ></CusButton>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-6">
        {userDetails == UserDetailsType.insights ? (
          <div></div>
        ) : (
          //   <Insights insights={userinsights}></Insights>
          <></>
        )}
        {userDetails == UserDetailsType.payments ? (
          <>
            <Payments
              brandId={brandId}
              userId={userId}
              campaignId={campaignId}
              draftId={draftId}
              cpp={cpp}
              currency={currency}
              campname={campaignName}
            ></Payments>
            {!submit ? (
              <div>
                <p className="text-md text-primary font-semibold py-1">
                  Rating
                </p>
                <div className="w-full h-[1px] bg-slate-300"></div>
                <MyRating
                  campaignId={campaignId}
                  brandId={brandId}
                  influencerId={userId}
                  reviewType="3"
                ></MyRating>
              </div>
            ) : null}
            <Dispute
              brandId={brandId}
              userId={userId}
              campaignId={campaignId}
            ></Dispute>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default PaymentRequest;

interface PaymentProps {
  campaignId: string;
  userId: string;
  draftId: string;
  brandId: string;
  cpp: string;
  currency: string;
  campname: string;
}

const Payments: React.FC<PaymentProps> = (props: PaymentProps): JSX.Element => {
  const [paymentBox, setPaymentBox] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState<String>("");
  const paymentRef = useRef<HTMLInputElement>(null);
  const [recived, setRecived] = useState<number>(0);
  const [requested, serRequested] = useState<number>(0);
  const init = async () => {
    const reqdata = await axios.post(`${BaseUrl}/api/get-received-payment`, {
      userId: props.userId,
      draftId: props.draftId,
    });

    if (reqdata.data.status) {
      setRecived(
        parseInt(reqdata.data.data.totalAmtReq.toString().split(".")[0])
      );
    } else {
      setRecived(0);
    }
    const reqdata1 = await axios.post(`${BaseUrl}/api/get-pending-payment`, {
      userId: props.userId,
      draftId: props.draftId,
    });

    if (reqdata1.data.status) {
      serRequested(
        parseInt(reqdata1.data.data.totalAmtReq.toString().split(".")[0])
      );
    } else {
      serRequested(0);
    }
  };
  useEffect(() => {
    init();
  }, []);




  const sendpayment = async () => {
    if (
      paymentRef.current?.value == null ||
      paymentRef.current?.value == undefined ||
      paymentRef.current?.value == ""
    ) {
      setPaymentError("Enter the amount");
    } else if (
      parseInt(paymentRef.current?.value) >
      parseInt(props.cpp) - requested
    ) {
      setPaymentError(
        "Your requested is higher then pending amount."
      );
    } else {
      let req = {
        userId: props.userId,
        campaignId: props.campaignId,
        amtReq: paymentRef.current?.value,
        draftId: props.draftId,
        brandId: props.brandId,
        paymentType: "1",
      };
      const paymentdata = await axios.post(
        `${BaseUrl}/api/new-pay-request`,
        req
      );
      if (!paymentdata.data.status)
        setPaymentError(paymentdata.data.message);
      else {
        setPaymentError("");
        paymentRef.current.value = "";
      }
      setPaymentBox(false);
    }
    window.location.reload();
  }

  return (
    <>
      <div>
        <p className="text-md text-primary font-semibold py-1">Payments</p>
        <div className="w-full h-[1px] bg-slate-300"></div>
        <div className="rounded-xl shadow-xl bg-white p-4 mt-2 w-96">
          <div className="flex">
            <FontAwesomeIcon
              icon={faCoins}
              className="text-xl text-primary"
            ></FontAwesomeIcon>
            <h2 className="text-xl text-primary font-medium px-4">Budget</h2>
            <div className="grow"></div>
            <p className="text-md font-bold text-black">
              {props.cpp.toString().split(".")[0]} {props.currency}
            </p>
          </div>
          <div className="h-[1px] bg-gray-500 w-full my-2 "></div>
          <div className="flex my-2">
            <p className="text-md text-primary">Received</p>
            <div className="grow"></div>
            <p className="text-md font-normal text-black">
              {recived} {props.currency}
            </p>
          </div>
          <div className="flex my-2">
            <p className="text-md text-primary">Pending</p>
            <div className="grow"></div>
            <p className="text-md font-normal text-black">
              {parseInt(props.cpp.toString().split(".")[0]) - recived}{" "}
              {props.currency}
            </p>
          </div>
        </div>
        <div className="p-4 bg-white mt-2 rounded-md w-96">
          <p className="text-normal font-semibold py-1 text-primary text-lg">
            Payment request
          </p>
          <button
            onClick={() => {
              setPaymentBox(true);
            }}
            className={`text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2 ${paymentBox ? "hidden" : ""
              }`}
          >
            Request
          </button>
          <div className={`${paymentBox ? "" : "hidden"}`}>
            <div className="flex gap-x-4">
              <p>Enter Amount : </p>{" "}
              <div>
                <input
                  ref={paymentRef}
                  type="number"
                  className="text-black outline-none border-none rounded-md py-1 px-2 bg-gray-300 w-full"
                />
              </div>
            </div>
            {paymentError == "" ||
              paymentError == null ||
              paymentError == undefined ? null : (
              <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
                {paymentError}
              </div>
            )}
            <button
              onClick={sendpayment}
              className={`text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2`}
            >
              Request Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface DisputeProps {
  userId: string;
  brandId: string;
  campaignId: string;
}
const Dispute: React.FC<DisputeProps> = (props: DisputeProps): JSX.Element => {
  
  const [error, setError] = useState<String | null>(null);
  const [sus, setSus] = useState<String | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const reasonRef = useRef<HTMLSelectElement | null>(null);
  const submit = async () => {
    if (
      messageRef.current?.value == null ||
      messageRef.current?.value == undefined ||
      messageRef.current?.value == ""
    ) {
      setError("Fill the message.");
    } else if (
      reasonRef.current?.value == null ||
      reasonRef.current?.value == undefined ||
      reasonRef.current?.value == "" ||
      reasonRef.current?.value == "0"
    ) {
      setError("Select one reason.");
    } else {
      
      const req = {
        type: reasonRef.current?.value,
        userId: props.userId,
        brandId: props.brandId,
        campaignId: props.campaignId,
        isBrand: 0,
        message: messageRef.current?.value,
      };

      const data = await axios({
        method: "post",
        url: `${BaseUrl}/api/add-dispute`,
        data: req,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*",
        },
      });
      if (data.data.status == false) {
        return setError(data.data.message);
      } else {
        setError(null);
        setSus("Message sent!");
        reasonRef!.current!.value = "";
        messageRef!.current!.value = "";
      }
    }
  };
  return (
    <>
      <div>
        <p className="text-md text-primary font-semibold py-1">Dispute</p>
        <div className="w-full h-[1px] bg-slate-300"></div>
        <div className="rounded-xl shadow-xl bg-white p-4 mt-2 w-96">
          <select
            ref={reasonRef}
            name="reason"
            id="reason"
            className="w-full rounded-md border-none outline-none bg-gray-100 py-2 my-2 px-2"
          >
            <option value="1">This is bad</option>
            <option value="2">This is so bad</option>
            <option value="3">This is extrimily bad</option>
            <option value="4">I just don't want it</option>
          </select>
          <textarea
            ref={messageRef}
            className="p-4 w-full h-40 outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md resize-none"
            placeholder="Your message"
          ></textarea>
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
          {sus == "" || sus == null || sus == undefined ? null : (
            <div className="bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4">
              {sus}
            </div>
          )}
          <div onClick={submit}>
            <CusButton text="Send Message" background="bg-primary"></CusButton>
          </div>
        </div>
      </div>
    </>
  );
};
