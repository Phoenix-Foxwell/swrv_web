import {
  faIdBadge,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { CampaginCard } from "~/components/utils/campagincard";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";

export const loader = async ({ request }: LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);
  const userid = cookie.user.id;

  const campdata = await axios({
    method: "post",
    url: `${BaseUrl}/api/get-my-campaigns`,
    data: { id: userid },
  });

  // const req1 = { id: userid };

  // const campdata = await axios({
  //   method: "post",
  //   url: `${BaseUrl}/api/get-my-campaigns`,
  //   data: req1,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "*",
  //     "Access-Control-Allow-Options": "*",
  //     "Access-Control-Allow-Methods": "*",
  //     "X-Content-Type-Options": "*",
  //     "Content-Type": "application/json",
  //     Accept: "*",
  //   },
  // });

  let req = {
    search: {
      status: "3",
      influencer: userid,
      fromUser: userid,
    },
  };


  const usercamp = await axios({
    method: "post",
    url: `${BaseUrl}/api/search-invite`,
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

  return json({
    userdata: cookie.user,
    camp: campdata.data.data,
    usercamp: usercamp.data.data,
  });
};

const MyCampaigns = () => {
  const userdata = useLoaderData();
  const isBrand = userdata.userdata.role["code"] == "50" ? true : false;
  const campdata = userdata.camp.campaigns;

  const isProfileCompleted =
    userdata.userdata.profileCompleteness == 1 ||
      userdata.userdata.profileCompleteness == "1"
      ? true
      : false;
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigate();

  const handelclick = () => {
    if (isProfileCompleted) {
      setError(null);
      navigation("/home/createcampaign");
    } else {
      setError("Complete your profile first.");
    }
  };
  return (
    <>
      <div>
        {isBrand ? (
          <div>

            <ActiveCampaign camp={campdata}></ActiveCampaign>
          </div>
        ) : (
          <>
            <UserDrafts userid={userdata.userdata.id}></UserDrafts>
            <RequestedInvite userId={userdata.userdata.id}></RequestedInvite>
          </>
        )}

        {/* create a new campaign only from brand */}
        {isBrand ? (
          <>
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h1 className="text-black text-center font-bold text-2xl">
                Would you like to create new campaign ?
              </h1>
              <div className="w-full text-center bg-red">
                <div onClick={handelclick}>
                  <CusButton
                    text="Create Campaign"
                    textColor={"text-white"}
                    background="bg-secondary"
                  ></CusButton>
                </div>
              </div>
              {error == "" || error == null || error == undefined ? null : (
                <div className="bg-rose-500 bg-opacity-10 border-2 text-center border-rose-500 rounded-md text-rose-500 text-lg font-normal text-md my-4">
                  {error}
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default MyCampaigns;

type ActiveCampaignProps = {
  camp: object[];
};

const ActiveCampaign = (props: ActiveCampaignProps) => {
  const campdata = props.camp;

  const [campaign, setCampaign] = useState<any[]>([]);
  const [isActive, setIsActive] = useState<boolean>(true);

  const init = async () => {
    if (isActive) {
      let data = campdata.filter((val: any) => new Date(val["endAt"]) > new Date());
      setCampaign((val) => data);
    } else {
      let data = campdata.filter((val: any) => new Date(val["endAt"]) < new Date());
      setCampaign((val) => data);
    }
  }

  useEffect(() => { init(); }, [isActive]);

  const setActive = () => {
    setIsActive(true);
  }
  const setInactive = () => {
    setIsActive(false);
  }

  return (
    <>
      <div className="flex my-6 md:flex-row flex-col flex-wrap items-center">
        <div>
          <h1 className="text-2xl font-bold text-black text-left mt-4">
            My campaigns
          </h1>
          <p className="text-md font-normal text-black text-left">
            Here you can manage all the campaigns that you are participating
            in.
          </p>
        </div>
        <div className="grow"></div>
        <div className="flex">
          <div
            className="w-full"
            onClick={setActive}
          >
            <CusButton
              width={"w-60"}
              text="Active campaigns"
              background={`${isActive ? "bg-[#bdff80]" : "bg-white"}`}
              textColor={"text-black"}
              fontwidth="font-bold"
            ></CusButton>
          </div>
          <div className="w-6"></div>
          <div
            className="w-full"
            onClick={setInactive}
          >
            <CusButton
              width={"w-60"}
              text="Finished campaigns"
              textColor={"text-black"}
              background={`${isActive ? "bg-white" : "bg-[#bdff80]"}`}
              fontwidth="font-bold"
            ></CusButton>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl my-3 shadow-xl p-4">
        <div className="w-60 rounded-xl text-xl font-bold text-black p-2 my-4">
          {" "}
          <FontAwesomeIcon
            icon={faIdBadge}
            className="text-md text-secondary"
          ></FontAwesomeIcon>{" "}
          Your Campaign{" "}
        </div>
        {campaign.length == 0 ? (
          <h1 className="text-black font-medium text-xl text-center">
            You haven't created any campaign yet.
          </h1>
        ) : null}
        <div className="flex gap-6 flex-wrap">
          {campaign.map((val: any, i: number) => {
            const platforms: string[] = [];
            for (let i: number = 0; i < val.platforms.length; i++) {
              platforms.push(val.platforms[i]["platformLogoUrl"]);
            }

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
              <div key={i}>
                <CampaginCard
                  id={val.id}
                  // currency={val.currency.code}
                  currency={"USD"}
                  platforms={platforms}
                  maxval={val.costPerPost.split(".")[0]}
                  weburl={val.brand.webUrl}
                  category={val.type.name}
                  image={image}
                  name={val.brand.name}
                  title={val.name}
                  btntext="View"
                ></CampaginCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


type UserDraftsProps = {
  userid: string;
};

const UserDrafts = (props: UserDraftsProps) => {
  const [userDraft, setUserDraft] = useState<any[]>([]);

  const [isActive, setIsActive] = useState<boolean>(true);

  const init = async () => {
    let req = {
      search: {
        status: "3",
        influencer: props.userid,
      },
    };
    const apidata = await axios({
      method: "post",
      url: `${BaseUrl}/api/search-invite`,
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

    if (isActive) {
      let data = apidata.data.data.filter((val: any) => new Date(val["campaign"]["endAt"]) > new Date());
      setUserDraft((val) => data);
    } else {
      let data = apidata.data.data.filter((val: any) => new Date(val["campaign"]["endAt"]) < new Date());
      setUserDraft((val) => data);
    }
  };

  useEffect(() => {
    init();
  }, [isActive]);


  const setActive = () => {
    setIsActive(true);
  }
  const setInactive = () => {
    setIsActive(false);
  }

  return (

    <>
      <div className="flex my-6 md:flex-row flex-col flex-wrap items-center">
        <div>
          <h1 className="text-2xl font-bold text-black text-left mt-4">
            My campaigns
          </h1>
          <p className="text-md font-normal text-black text-left">
            Here you can manage all the campaigns that you are participating
            in.
          </p>
        </div>
        <div className="grow"></div>
        <div className="flex">
          <div
            className="w-full"
            onClick={setActive}
          >
            <CusButton
              width={"w-60"}
              text="Active campaigns"
              background={`${isActive ? "bg-[#bdff80]" : "bg-white"}`}
              textColor={"text-black"}
              fontwidth="font-bold"
            ></CusButton>
          </div>
          <div className="w-6"></div>
          <div
            className="w-full"
            onClick={setInactive}
          >
            <CusButton
              width={"w-60"}
              text="Finished campaigns"
              textColor={"text-black"}
              background={`${isActive ? "bg-white" : "bg-[#bdff80]"}`}
              fontwidth="font-bold"
            ></CusButton>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl my-3 shadow-xl p-4">
        <div className="w-60 rounded-xl text-xl font-bold text-black p-2 my-4">
          {" "}
          <FontAwesomeIcon
            icon={faIdBadge}
            className="text-md text-secondary"
          ></FontAwesomeIcon>{" "}
          Active Campaign{" "}
        </div>
        {userDraft.length == 0 ? (
          <h1 className="text-black font-medium text-xl text-center">
            You haven't collaborated in any campaign.
          </h1>
        ) : null}
        <div className="flex flex-wrap gap-6 items-stretch">
          {userDraft.map((val: any, i: number) => {
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
                className="rounded-xl shadow-xl p-4 w-72 my-2 h-full bg-white "
                key={i}
              >
                <div className="flex items-end gap-x-3 h-full">
                  <div>
                    <img
                      src={image}
                      alt="error"
                      className="object-cover w-16 h-16 rounded"
                    />
                  </div>
                  <p className="text-black font-semibold text-xl content-end text-left">
                    {val.brand.name}
                  </p>
                </div>
                <p className="text-gray-700 font-semibold text-xl text-left mt-2">
                  {val.campaign.name}
                </p>
                <p className="text-black font-semibold text-xs text-left mt-2">
                  email : {val.brand.email}
                </p>
                <Link to={`/home/campaigns/${val.campaign.id}`}>
                  <CusButton
                    text="View"
                    textColor={"text-black"}
                    background={"bg-[#01FFF4]"}
                    width={"w-full"}
                    margin={"my-2"}
                    fontwidth={"font-bold"}
                  ></CusButton>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

interface RequestedInviteProps {
  userId: string;
}
const RequestedInvite: React.FC<RequestedInviteProps> = (
  props: RequestedInviteProps
): JSX.Element => {

  const [userInvite, setInvite] = useState<any[]>([]);
  const [acceptbox, setAcceptbox] = useState<boolean>(false);
  const [rejectbox, setrejectbox] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const rejectiontextRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState<string | null>(null);

  const init = async () => {
    let req = {
      search: {
        status: "1",
        influencer: props.userId,
        toUser: props.userId
      },
    };
    const apidata = await axios({
      method: "post",
      url: `${BaseUrl}/api/search-invite`,
      data: req,
    });
    setInvite(apidata.data.data);
  };

  useEffect(() => {
    init();
  }, []);

  const acceptRequest = async () => {
    let req = { id: id, status: "3" };
    const responseData = await axios.post(`${BaseUrl}/api/update-invite`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    setAcceptbox(false);
    window.location.reload();
  };

  const rejectRequest = async () => {
    if (
      rejectiontextRef.current?.value == null ||
      rejectiontextRef.current?.value == undefined ||
      rejectiontextRef.current?.value == ""
    )
      return setError("Fell the reason.");
    let req = {
      id: id,
      status: "5",
      rejectReason: rejectiontextRef.current?.value,
    };
    const responseData = await axios.post(`${BaseUrl}/api/update-invite`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    rejectiontextRef.current!.value == "";
    setrejectbox(false);
    window.location.reload();
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
            Are you sure you want to accept this?
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
              onClick={acceptRequest}
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
          <div className="w-full bg-gray-400 h-[1px] my-2"></div>
          <input
            ref={rejectiontextRef}
            type="text"
            className="w-full bg-gray-200 rounded-lg  px-2 py-1 my-2 outline-none"
            placeholder="Enter the reason of rejection."
          />
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
      <div className="bg-white rounded-2xl my-4 shadow-xl p-4">
        <div className=" rounded-xl text-xl font-bold text-black p-2 my-4">
          {" "}
          <FontAwesomeIcon
            icon={faIdBadge}
            className="text-md text-secondary"
          ></FontAwesomeIcon>{" "}
          Requested brand campaign
        </div>
        {userInvite.length == 0 ? (
          <h1 className="text-black font-medium text-xl text-center">
            You haven't got any request from the campaign.
          </h1>
        ) : null}

        <div className="flex flex-wrap gap-6">
          {userInvite.map((val: any, index: number) => {
            return (
              <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <img
                    src={val.brand.logo}
                    alt="influencer pic"
                    className="w-10 h-10 shrink-0 rounded-md object-center object-cover"
                  />
                  <div className="ml-2">
                    <p className="text-md font-medium">
                      {val.brand.name.toString().split("@")[0]}
                    </p>
                    <p className="text-sm font-medium">{val.brand.email}</p>
                  </div>
                </div>
                <p className="mt-2 text-md font-medium">Message</p>
                <p className="text-sm font-medium">{val.inviteMessage}</p>
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
                <Link
                  to={`/home/campaigns/${val.id}`}
                  className="inline-block mt-4 rounded-md  text-xl font-semibold text-center text-cyan-500 bg-cyan-500 bg-opacity-10 border-cyan-500 border-2 py-1 px-2 w-full"
                >
                  View campaign
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
