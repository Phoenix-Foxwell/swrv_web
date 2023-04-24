import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
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

  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    UserDetailsType.insights
  );

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
              background={`${
                userDetails == UserDetailsType.insights
                  ? "bg-[#01FFF4]"
                  : "bg-gray-100"
              }`}
              fontwidth="font-bold"
              textColor={`${
                userDetails == UserDetailsType.insights
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
              background={`${
                userDetails == UserDetailsType.payments
                  ? "bg-[#01FFF4]"
                  : "bg-gray-100"
              }`}
              fontwidth="font-bold"
              textColor={`${
                userDetails == UserDetailsType.payments
                  ? "text-black"
                  : "text-gray-600"
              }`}
            ></CusButton>
          </div>
        </div>
      </div>
      <div>
        {userDetails == UserDetailsType.insights ? (
          <div></div>
        ) : (
          //   <Insights insights={userinsights}></Insights>
          <></>
        )}
        {userDetails == UserDetailsType.payments ? (
          <Payments
            brandId={brandId}
            userId={userId}
            campaignId={campaignId}
            draftId={draftId}
            cpp={cpp}
            currency={currency}
          ></Payments>
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
  return (
    <>
      <div className="grow flex-1">
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
            className={`text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2 ${
              paymentBox ? "hidden" : ""
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
              onClick={async () => {
                console.log(requested);
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
                    return setPaymentError(paymentdata.data.message);
                  else {
                    setPaymentError("");
                    paymentRef.current.value = "";
                  }
                  return setPaymentBox(false);
                }
              }}
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
