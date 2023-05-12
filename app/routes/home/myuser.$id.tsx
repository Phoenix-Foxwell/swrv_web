import {
  faCalendar,
  faHandshake,
  faHeart,
  faNetworkWired,
  faRemove,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import isbot from "isbot";
import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Rating } from "react-simple-star-rating";
import { format } from "timeago.js";
import useLocalStorageState from "use-local-storage-state";
import { CusButton } from "~/components/utils/buttont";
import MyRating from "~/components/utils/raiting";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";

enum UserDetailsType {
  insights,
  payments,
  camapaign,
  channels,
  personalInfo,
  pastAssociations,
  reviews,
  dispute,
}

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const id = props.params.id;

  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);

  const userdata = await axios.post(`${BaseUrl}/api/getuser`, { id: id });

  const apidata = await axios({
    method: "post",
    url: `${BaseUrl}/api/get-my-campaigns`,
    data: { id: cookie.user.id },
  });

  return json({
    user: userdata.data.data[0],
    curUser: cookie.user,
    campaign: apidata.data.data.campaigns,
  });
};

const BrandPage = () => {
  const user = useLoaderData().user;
  const curUser = useLoaderData().curUser;

  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    UserDetailsType.insights
  );

  const avatar =
    user["pic"] == "0" ||
    user["pic"] == null ||
    user["pic"] == undefined ||
    user["pic"] == ""
      ? "/images/avatar/user.png"
      : user["pic"];

  const [error, setError] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [connectBox, setConnectBox] = useState<boolean>(false);
  const [inviteBox, setInviteBox] = useState<boolean>(false);

  const [submit, setSubmit] = useState<boolean>(false);

  const campaign = useLoaderData().campaign;

  const isBrand = curUser.role.code == "50" ? true : false;
  const invitetocamp = async (id: number) => {
    let req1 = {
      search: {
        campaign: id.toString(),
        brand: curUser.brand.id,
        influencer: user.id,
      },
    };
    const responseData = await axios.post(`${BaseUrl}/api/search-invite`, req1);

    if (responseData.data.data.length > 0) {
      return setError("Already Invited.");
    } else {
      let req = {
        campaignId: id.toString(),
        influencerId: user.id,
        fromUserId: curUser.id,
        toUserId: user.id,
        inviteMessage: "A brand invited you to there campaign.",
      };

      const data = await axios.post(`${BaseUrl}/api/add-invite`, req);
      if (data.data.status == false) {
        setError(data.data.message);
      } else {
        messageRef!.current!.value = "";
        setInviteBox(false);
      }
    }
  };

  const init = async () => {
    const req = {
      search: {
        type: "1",
        brand: curUser.brand.id,
        influencer: user.id,
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
      {/* invite box */}
      <div
        className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${
          inviteBox ? "fixed" : "hidden"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="p-6 bg-white rounded-xl shadow-xl w-96 h-80 min-h-min flex flex-col">
          <div className="flex">
            <div className="grow"></div>
            <div
              onClick={() => {
                setInviteBox(false);
              }}
            >
              <FontAwesomeIcon
                icon={faRemove}
                className="font-bold text-2xl text-center text-primary"
              ></FontAwesomeIcon>
            </div>
          </div>
          <h1 className="text-primary text-lg font-bold text-left">
            Your Campaigns
          </h1>
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2">
              {error}
            </div>
          )}
          {campaign.length == 0 ? (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2">
              You don't have any campaign
            </div>
          ) : null}
          <div className="overflow-y-scroll no-scrollbar">
            {campaign.map((val: any, index: number) => {
              return (
                <div key={index} className="flex gap-2 my-4 items-center">
                  <p className="text-gray-600 font-semibold text-xl">
                    {index + 1}.
                  </p>
                  <p className="text-gray-600 font-semibold text-lg">
                    {val.name}
                  </p>
                  <div className="grow"></div>
                  <button
                    className="text-white rounded-md py-1 px-4 bg-secondary font-semibold"
                    onClick={() => invitetocamp(val.id)}
                  >
                    INVITE
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* message box end */}
      {/* connnection box start */}
      <div
        className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${
          connectBox ? "fixed" : "hidden"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="p-6 bg-white rounded-xl shadow-xl w-96">
          <div className="flex">
            <div className="grow"></div>
            <div
              onClick={() => {
                setConnectBox(false);
              }}
            >
              <FontAwesomeIcon
                icon={faRemove}
                className="font-bold text-2xl text-center text-primary"
              ></FontAwesomeIcon>
            </div>
          </div>
          <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
          <textarea
            ref={messageRef}
            className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4"
            placeholder="message"
          ></textarea>
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
          <div className="flex">
            <div className="grow"></div>
            <div
              onClick={async () => {
                if (
                  messageRef.current?.value == null ||
                  messageRef.current?.value == undefined ||
                  messageRef.current?.value == ""
                )
                  return setError("Message can't be blank");
                let req = {
                  campaignDraftId: "0",
                  fromUserId: curUser.id,
                  toUserId: user.id,
                  comment: messageRef.current?.value,
                };
                const data = await axios({
                  method: "post",
                  url: `${BaseUrl}/api/add-chat`,
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
                if (!data.data.status) return setError(data.data.message);
                return setConnectBox(false);
              }}
            >
              <CusButton
                text="send"
                background="bg-primary"
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* connnection box end */}
      <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
        <img
          src="/images/products/shoe1.jpg"
          alt="error"
          className="w-full h-60 object-cover rounded-t-xl"
        />
        <div className="flex flex-col lg:flex-row">
          <div className="p-8 flex flex-row gap-x-3 lg:flex-col">
            <div>
              <img
                src={avatar}
                alt="user avatar"
                className="w-32 h-32 rounded-md object-cover object-center"
              />
            </div>
            <div>
              <h1 className="text-black text-lg font-medium my-2">
                {user.userName}
              </h1>
              <h1 className="text-gray-600 text-sm font-medium my-2">
                {user.knownAs}
              </h1>
              <p className="text-gray-800 text-md font-normal">{user.email}</p>
              <div
                onClick={() => {
                  setConnectBox(true);
                }}
              >
                <CusButton
                  text="Message"
                  background="bg-secondary"
                  fontwidth="font-bold"
                ></CusButton>
              </div>
              {isBrand ? (
                <div
                  onClick={() => {
                    setInviteBox(true);
                  }}
                >
                  <CusButton
                    text="Invite"
                    background="bg-secondary"
                    fontwidth="font-bold"
                  ></CusButton>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="h-72 w-[2px] bg-gray-300 hidden lg:block mt-8"></div>
          <div className="p-8">
            <div className="flex gap-x-4 flex-col md:flex-row gap-y-2"></div>
            <h1 className="text-primary text-lg font-medium mt-4 mb-2">
              User Bio
            </h1>
            <p className="text-black text-sm font-normal">{user.bio}</p>
          </div>
        </div>
      </div>
      {/* tabs start here */}
      <div className="w-full mt-4 shadow-xl bg-white rounded-xl flex gap-4 overflow-x-scroll px-4">
        <UserPageTabs
          text="Insights"
          currentTab={userDetails}
          tab={UserDetailsType.insights}
          click={() => {
            setUserDetails(UserDetailsType.insights);
          }}
        ></UserPageTabs>

        <UserPageTabs
          text="Payments"
          currentTab={userDetails}
          tab={UserDetailsType.payments}
          click={() => {
            setUserDetails(UserDetailsType.payments);
          }}
        ></UserPageTabs>

        <UserPageTabs
          text="Channels"
          currentTab={userDetails}
          tab={UserDetailsType.channels}
          click={() => {
            setUserDetails(UserDetailsType.channels);
          }}
        ></UserPageTabs>

        <UserPageTabs
          text="Personal Info"
          currentTab={userDetails}
          tab={UserDetailsType.personalInfo}
          click={() => {
            setUserDetails(UserDetailsType.personalInfo);
          }}
        ></UserPageTabs>

        <UserPageTabs
          text="Past Associations"
          currentTab={userDetails}
          tab={UserDetailsType.pastAssociations}
          click={() => {
            setUserDetails(UserDetailsType.pastAssociations);
          }}
        ></UserPageTabs>

        <UserPageTabs
          text="Reviews"
          currentTab={userDetails}
          tab={UserDetailsType.reviews}
          click={() => {
            setUserDetails(UserDetailsType.reviews);
          }}
        ></UserPageTabs>
        <UserPageTabs
          text="Dispute"
          currentTab={userDetails}
          tab={UserDetailsType.dispute}
          click={() => {
            setUserDetails(UserDetailsType.dispute);
          }}
        ></UserPageTabs>
      </div>
      {/* tabs end here */}

      {/* tab details start herer */}
      <div>
        {userDetails == UserDetailsType.payments ? (
          <div>
            <Payment userId={user.id}></Payment>
          </div>
        ) : null}
      </div>

      {userDetails == UserDetailsType.channels ? (
        <Channels userId={user.id}></Channels>
      ) : null}
      {userDetails == UserDetailsType.personalInfo ? (
        <PersonalInfo
          name={user.userName.toString().split("@")[0]}
          bio={user.bio}
          career={user.careerHistory}
          personal={user.personalHistory}
          external={user.externalLinks}
        ></PersonalInfo>
      ) : null}

      {userDetails == UserDetailsType.pastAssociations ? (
        <PastBrandAssociation
          userId={user.id}
          brandId={curUser.brand.id}
        ></PastBrandAssociation>
      ) : null}
      {userDetails == UserDetailsType.reviews ? (
        <>
          {!submit ? (
            <>
              <p className="text-md text-primary font-semibold py-1">Rating</p>
              <div className="w-full h-[1px] bg-slate-300"></div>

              <MyRating
                campaignId="0"
                brandId={curUser.brand.id}
                influencerId={user.id}
                reviewType="1"
              ></MyRating>
            </>
          ) : null}

          <p className="text-md text-primary font-semibold py-1">
            Your Reviews
          </p>
          <div className="w-full h-[1px] bg-slate-300"></div>
          <Review userId={user.id} brandId={curUser.brand.id}></Review>
        </>
      ) : null}

      {userDetails == UserDetailsType.dispute ? (
        <Dispute brandId={curUser.brand.id} userId={user.id}></Dispute>
      ) : null}
      {/* tab detals end here */}
    </>
  );
};

export default BrandPage;

interface UserPageTabsProps {
  tab: UserDetailsType;
  currentTab: UserDetailsType;
  text: string;
  click: () => void;
}
const UserPageTabs: React.FC<UserPageTabsProps> = (
  props: UserPageTabsProps
): JSX.Element => {
  return (
    <>
      <div onClick={props.click}>
        <CusButton
          text={props.text}
          background={`${
            props.currentTab == props.tab ? "bg-[#01FFF4]" : "bg-gray-100"
          }`}
          fontwidth="font-bold"
          textColor={`${
            props.currentTab == props.tab ? "text-black" : "text-gray-600"
          }`}
        ></CusButton>
      </div>
    </>
  );
};

interface ChannelsProps {
  userId: string;
}

const Channels: React.FC<ChannelsProps> = (
  props: ChannelsProps
): JSX.Element => {
  const [handles, setHandles] = useState<any[]>([]);

  const init = async () => {
    const datahandles = await axios.post(
      `${BaseUrl}/api/get-user-handles`,
      { userId: props.userId },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*",
        },
      }
    );

    setHandles((val) => datahandles.data.data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="bg-white p-4 w-full mt-4 flex flex-wrap gap-4 rounded-xl">
        <table className="md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]">
          <thead className="w-full bg-gray-100 rounded-xl p-2">
            <tr>
              <th scope="col" className="mt-2 font-normal p-2 text-left">
                Media
              </th>
              <th scope="col" className="mt-2 font-normal p-2 text-left">
                Platform Name
              </th>
              <th scope="col" className="mt-2 font-normal p-2 text-left">
                Account
              </th>
              <th scope="col" className="mt-2 font-normal p-2 text-left">
                Followers
              </th>
            </tr>
          </thead>
          <tbody className="gap-y-4">
            {handles.map((val: any, index: number) => (
              <tr key={index}>
                <td>
                  <img
                    src={val.platformLogoUrl}
                    alt="error"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>
                <td>{val.platformName}</td>
                <td>{val.handleName}</td>
                <td>{val.follower.toString().split(".")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

interface PersonalInfoProps {
  name: string;
  bio: string;
  personal: string;
  career: string;
  external: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = (
  props: PersonalInfoProps
): JSX.Element => {
  const bio =
    props.bio == null || props.bio == undefined || props.bio == ""
      ? "User bio is empty."
      : props.bio;
  const personal =
    props.personal == null ||
    props.personal == undefined ||
    props.personal == ""
      ? "User personal history is empty."
      : props.personal;
  const career =
    props.career == null || props.career == undefined || props.career == ""
      ? "User career history is empty."
      : props.career;
  const external =
    props.external == null ||
    props.external == undefined ||
    props.external == ""
      ? "User external links is empty."
      : props.external;
  return (
    <>
      <div className="bg-white p-4 w-full mt-4 rounded-xl">
        <h3 className="text-primary text-xl font-semibold mt-4">
          {props.name}
        </h3>
        <p className="text-left font-normal text-gray-700">{bio}</p>
        <h3 className="text-primary text-xl font-semibold mt-4">
          Personal Life
        </h3>
        <p className="text-left font-normal text-gray-700">{personal}</p>
        <h3 className="text-primary text-xl font-semibold mt-4">Career</h3>
        <p className="text-left font-normal text-gray-700">{career}</p>
        <h3 className="text-primary text-xl font-semibold mt-4">
          External Links
        </h3>
        <p className="text-left font-normal text-gray-700">{external}</p>
      </div>
    </>
  );
};

interface PastBrandAssociationProps {
  brandId: string;
  userId: string;
}
const PastBrandAssociation: React.FC<PastBrandAssociationProps> = (
  props: PastBrandAssociationProps
): JSX.Element => {
  const [resDarft, setResDarft] = useState<any[]>([]);

  const init = async () => {
    let req = {
      search: {
        fromUser: props.userId,
        influencer: props.userId,
        brand: props.brandId,
      },
    };

    const responseData = await axios.post(`${BaseUrl}/api/search-draft`, req);

    if (responseData.data.status == true) {
      setResDarft(responseData.data.data);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="bg-white p-4 w-full mt-4 rounded-xl">
        {resDarft.length == 0 ? (
          <div className="text-center w-full px-4 py-8 text-2xl text-gray-600 font-semibold ">
            This brand have no past associations with you.
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 pb-8 pt-6">
            {resDarft.map((val: any, index: number) => {
              let image =
                val["brand"].length == 0 ||
                val["brand"] == undefined ||
                val["brand"] == null ||
                val["brand"] == ""
                  ? "/images/avatar/user.png"
                  : val["brand"]["logo"] == "0" ||
                    val["brand"]["logo"] == undefined ||
                    val["brand"]["logo"] == null ||
                    val["brand"]["logo"] == ""
                  ? "/images/avatar/user.png"
                  : val["brand"]["logo"];
              return (
                <div
                  key={index}
                  className="my-2 p-4 bg-white rounded-lg shadow-lg w-60"
                >
                  <div className="flex">
                    <img
                      src={image}
                      alt="influencer pic"
                      className="w-10 h-10 shrink-0 rounded-md"
                    />
                    <div className="ml-2">
                      <p className="text-md font-medium">{val.brand.name}</p>
                      <p className="text-sm font-medium">{val.brand.email}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-md font-medium">Description</p>
                  <p className="text-sm font-medium">{val.description}</p>
                  <p className="mt-2 text-md font-medium">Attachment</p>
                  <a
                    target="_blank"
                    className="mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500"
                    href={val.attach01}
                  >
                    View pdf
                  </a>
                  <p className="mt-2 text-md font-medium">Status</p>
                  <p
                    className={`mt-2 text-md text-white font-medium text-center rounded-md ${
                      val.status.name == "ACCEPTED"
                        ? "bg-green-500"
                        : val.status.name == "PENDING"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {val.status.name}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
interface RreviewProps {
  brandId: string;
  userId: string;
}
const Review: React.FC<RreviewProps> = (props: RreviewProps): JSX.Element => {
  const [review, setReview] = useState<any[]>([]);

  const init = async () => {
    const datareview = await axios.post(
      `${BaseUrl}/api/get-user-review`,
      { userId: props.userId },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*",
        },
      }
    );

    setReview((val) => datareview.data.data);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div className="bg-white p-4 w-full mt-4 rounded-xl flex-wrap flex gap-6">
        {review.map((val: any, index: number) => {
          return (
            <div className="rounded-md shadow-lg p-6 w-80" key={index}>
              <div className="flex gap-4">
                <img
                  src={val.brandLogoUrl}
                  alt="brand logo"
                  className="w-20 h-20 rounded-md object-cover object-center"
                />
                <div className="h-full">
                  <p className="text-xl font-medium">{val.brandName}</p>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-600 font-medium mt-4">
                  Campaign Rating
                </p>
                <Rating
                  initialValue={Math.floor(
                    (Number(val.avg_rating1) +
                      Number(val.avg_rating2) +
                      Number(val.avg_rating3)) /
                      3
                  )}
                  size={35}
                ></Rating>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

interface PaymentProps {
  userId: string;
}

const Payment: React.FC<PaymentProps> = (props: PaymentProps): JSX.Element => {
  const [status, setStatus] = useState<any[]>([]);

  const init = async () => {
    const status = await axios.post(
      `${BaseUrl}/api/payment-status`,
      { userId: props.userId },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*",
        },
      }
    );

    setStatus((val) => status.data.data);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div>
        <div className="bg-white py-2 rounded-md p-6 mt-10 overflow-x-scroll">
          <p className="text-left font-semibold text-2xl text-gray-800 my-4">
            Brand wise revenue
          </p>
          {status.length == 0 ? (
            <p className="text-center font-semibold text-gray-600 text-2xl">
              There is nothing to show
            </p>
          ) : (
            <table className="md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]">
              <thead className="w-full bg-gray-100 rounded-xl p-2">
                <tr>
                  <th scope="col" className="mt-2 font-normal p-2 text-left">
                    Brand
                  </th>
                  <th scope="col" className="mt-2 font-normal p-2 text-left">
                    Campaign Name
                  </th>
                  <th scope="col" className="mt-2 font-normal p-2 text-left">
                    Earning
                  </th>
                  <th scope="col" className="mt-2 font-normal p-2 text-left">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="gap-y-4">
                {status.map((val: any, index: number) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={val.brandLogoUrl}
                        alt="error"
                        className="w-12 h-12 rounded-md object-cover"
                      />
                    </td>
                    <td>{val.campaign_name}</td>
                    <td>
                      {" "}
                      {val.total_amount_requested.toString().split(".")[0]}
                    </td>
                    <td>
                      {format(
                        new Date(
                          Date.now() -
                            val.days_since_payment_made * 24 * 60 * 60 * 1000
                        )
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

interface DisputeProps {
  userId: string;
  brandId: string;
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
