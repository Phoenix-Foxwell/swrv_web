import { faCoins, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";


import Stripe from "stripe";

const stripe = new Stripe(
  "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",
  { apiVersion: "2022-11-15" }
);

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
    // currency: cookie.user.currency.code,
    currency: "USD",
    name: camp.data.data[0].campaignName,
  });
};

enum UserDetailsType {
  insights,
  payments,
  camapaign,
  schedule
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
          <div
            onClick={() => {
              setUserDetails(UserDetailsType.schedule);
            }}
          >
            <CusButton
              text="Schedule"
              background={`${userDetails == UserDetailsType.schedule
                ? "bg-[#01FFF4]"
                : "bg-gray-100"
                }`}
              fontwidth="font-bold"
              textColor={`${userDetails == UserDetailsType.schedule
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
            <UserPaymentRequest
              userid={userId}
              campaingid={campaignId}
              currency={currency}
              draft={draftId}
            ></UserPaymentRequest>
          </>
        ) : (
          <></>
        )}

        {userDetails == UserDetailsType.schedule ? (
          <Schedule draftid={draftId}></Schedule>
        ) : (
          //   <Insights insights={userinsights}></Insights>
          <></>
        )}
      </div>
    </>
  );
};

export default PaymentRequest;


type UserPaymentRequestProps = {
  campaingid: string;
  userid: string;
  currency: string;
  draft: string;
};

const UserPaymentRequest = (props: UserPaymentRequestProps) => {
  const [respayment, setRequestPayment] = useState<any[]>([]);

  const [acceptbox, setAcceptbox] = useState<boolean>(false);
  const [rejectbox, setrejectbox] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

  const init = async () => {
    let req = {
      search: {
        campaigndraft: props.draft,
        campaign: props.campaingid,
        influencer: props.userid,
      },
    };
    const responseData = await axios.post(`${BaseUrl}/api/get-req-pay`, req);
    if (responseData.data.status == true) {
      setRequestPayment(responseData.data.data);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const acceptRequest = async () => {
    let req = {
      id: id,
      status: "2",
      refNo: `${new Date().toLocaleDateString()}_${props.userid}_${props.campaingid
        }`,
    };
    const responseData = await axios.post(`${BaseUrl}/api/update-payment`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    setAcceptbox(false);
    window.location.reload();
  };

  const rejectRequest = async () => {
    let req = { id: id, status: "3" };
    const responseData = await axios.post(`${BaseUrl}/api/update-payment`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    setrejectbox(false);
    window.location.reload();
  };

  const handlepayment = async () => {
    // stripe.customers
    //   .create({
    //     email: "customer@example.com",
    //   })
    //   .then((customer) => console.log(customer))
    //   .catch((error) => console.error(error));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Example Product",
              images: [
                "https://plus.unsplash.com/premium_photo-1684952849219-5a0d76012ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
              ],
            },
            unit_amount: 4200, // Amount in cents
          },
          quantity: 1,
        },
      ],
      success_url: "https://your-website.com/success",
      cancel_url: "https://your-website.com/cancel",
    });
    window.location.assign(session.url == null ? "" : session.url);
    // navigator(session.url == null ? "" : session.url);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"
          }`}
      >
        <div className="bg-white w-72 shadow-lg p-4 rounded-lg">
          <p className="text-center font-medium text-2xl">Accept</p>
          <div className="w-full bg-gray-400 h-[1px] my-2"></div>
          <p className="text-center font-medium text-gray-800">
            Are you sure you want to accept this payment?
          </p>
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
          <div className="flex mt-2">
            <button
              onClick={() => {
                setAcceptbox(false);
              }}
              className="bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"
            >
              <FontAwesomeIcon
                className="mx-2"
                icon={faThumbsDown}
              ></FontAwesomeIcon>
              Cancel
            </button>
            <div className="grow"></div>
            <button
              onClick={handlepayment}
              className="bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"
            >
              <FontAwesomeIcon
                className="mx-2"
                icon={faThumbsUp}
              ></FontAwesomeIcon>
              Accept
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${rejectbox ? "grid" : "hidden"
          }`}
      >
        <div className="bg-white w-72 shadow-lg p-4 rounded-lg">
          <p className="text-center font-medium text-2xl">Reject</p>
          <p className="text-center font-medium text-gray-800">
            Are you sure you want to reject this payment?
          </p>
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
          <div className="flex mt-2">
            <button
              onClick={() => {
                setrejectbox(false);
              }}
              className="bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"
            >
              <FontAwesomeIcon
                className="mx-2"
                icon={faThumbsDown}
              ></FontAwesomeIcon>
              Cancel
            </button>
            <div className="grow"></div>
            <button
              onClick={rejectRequest}
              className="bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"
            >
              <FontAwesomeIcon
                className="mx-2"
                icon={faThumbsUp}
              ></FontAwesomeIcon>
              Reject
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-xl shadow-xl bg-white w-full">
        {respayment.length == 0 ? (
          <>
            <div>No payment request is pending</div>
          </>
        ) : (
          <div>
            <p className="text-md font-medium">Requested Payment</p>
            <div className="w-full bg-gray-400 h-[1px] my-2"></div>
            <div className="flex flex-wrap gap-6">
              {respayment.map((val: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-lg w-72"
                  >
                    <p className="mt-2 text-md font-medium">Requested by</p>
                    <div className="w-full h-[2px] bg-gray-700"></div>
                    <div className="flex mt-4">
                      <img
                        src={val.influencer.pic}
                        alt="influencer pic"
                        className="w-10 h-10 shrink-0 rounded-md object-center object-cover"
                      />
                      <div className="ml-2">
                        <p className="text-md font-medium">
                          {val.influencer.name.split("@")[0]}
                        </p>
                        <p className="text-sm font-medium">
                          {val.influencer.email}
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-md font-medium">Amount</p>
                    <p className="text-sm font-medium">
                      {val.amount.toString().split(".")[0]} {props.currency}
                    </p>
                    {parseInt(val.status.code) == 2 ? (
                      <p className="py-1 px-4 text-center text-white bg-green-500 rounded-md my-2">
                        Accepted
                      </p>
                    ) : parseInt(val.status.code) == 3 ? (
                      <p className="py-1 px-4 text-center text-white bg-red-500 rounded-md my-2">
                        Rejected
                      </p>
                    ) : (
                      <div className="flex gap-4 mt-2">
                        <button
                          onClick={() => {
                            setId(val.id);
                            setAcceptbox(true);
                          }}
                          className="bg-white  text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"
                        >
                          <FontAwesomeIcon
                            className="mx-2"
                            icon={faThumbsUp}
                          ></FontAwesomeIcon>
                          Accept
                        </button>
                        <button
                          onClick={() => {
                            setId(val.id);
                            setrejectbox(true);
                          }}
                          className="bg-white  text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"
                        >
                          <FontAwesomeIcon
                            className="mx-2"
                            icon={faThumbsDown}
                          ></FontAwesomeIcon>
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

interface ScheduleProps {
  draftid: string;
}

const Schedule: React.FC<ScheduleProps> = (props: ScheduleProps): JSX.Element => {

  const type = useRef<HTMLInputElement>(null);
  const [react, setReact] = useState<number>();
  const handelreact = (e: any) => {
    setReact(e.target.value.replace(/\D/g, ""));
  };

  const time = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<String | null>(null);
  const [sus, setSus] = useState<String | null>(null);
  const submit = async () => {
    setError(null);
    if (
      type.current?.value == null ||
      type.current?.value == undefined ||
      type.current?.value == ""
    ) {
      setError("Fill the publication type");
    }
    else if (
      react == null ||
      react == undefined ||
      react == 0
    ) {
      setError("Fill the target reach");
    }
    else if (
      time.current?.value == null ||
      time.current?.value == undefined ||
      time.current?.value == ""
    ) {
      setError("Fill the Publication time");
    }
    else if (
      date.current?.value == null ||
      date.current?.value == undefined ||
      date.current?.value == ""
    ) {
      setError("Fill the publication date");
    } else {

      const responseData = await axios.post(`${BaseUrl}/api/update-draft`, {
        id: props.draftid,
        publication_type: type.current?.value,
        target_react: react,
        publication_time: time.current?.value,
        draft_approval: date.current?.value
      });
      if (!responseData.data.status) {
        setError(responseData.data.message);
      } else {
        setSus("Schedule is updated.");
        window.location.reload();
      }

    }
  }


  return (
    <>
      <div className="p-4 rounded-xl shadow-xl bg-white w-full">
        <div className="flex gap-4 flex-wrap">
          <div>
            <p className="text-lg font-semibold text-primary">Publcation Type</p>
            <input
              ref={type}
              type="text"
              className="w-80 outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-primary">Target reach</p>
            <input
              onChange={handelreact}
              value={react}
              type="text"
              className="w-80 outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400"
            />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap mt-4">
          <div>
            <p className="text-lg font-semibold text-primary">Publication time</p>
            <input
              ref={time}
              type="time"
              className="w-80 outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-primary">Publication Date</p>
            <input
              ref={date}
              type="date"
              className="w-80 outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400"
            />
          </div>
        </div>
        <div></div>
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
        <button
          onClick={submit}
          className="mt-4 text-md w-80 text-black font-semibold bg-[#fbca8e] rounded-md shadow-lg py-1"
        >
          Submit
        </button>
      </div>
    </>
  );
}