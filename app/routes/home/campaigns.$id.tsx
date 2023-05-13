import {
  faCoins,
  faPaperclip,
  faRemove,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { Completed, Connection, Rating } from "./brand.$id";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import axios from "axios";
import { BaseUrl } from "~/const";
import { Link, useLoaderData } from "@remix-run/react";
import { UploadFile, getCampaignType } from "~/utils";
import { userPrefs } from "~/cookies";
import { pdf } from "remix-utils";

enum AcceptRequest {
  None,
  Panding,
  Accepted,
  Rejected,
}

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const platform = await axios.post(`${BaseUrl}/api/getplatform`);
  const id = props.params.id;

  const campaigndata = await axios.post(
    `${BaseUrl}/api/campaign-search`,
    { id: id },
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

  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);

  return json({
    campaign: campaigndata.data.data[0],
    user: cookie.user,
    platform: platform.data.data,
  });
};

const Campaigns = () => {
  const champaign = useLoaderData().campaign;
  const user = useLoaderData().user;
  const isbrand = user.role.code != 10;
  const data = useLoaderData();
  const [sum, setSum] = useState({
    rowCount: 0,
    constCount: 3,
    rate: 0,
  });

  const userId = user.id;
  const brandimage =
    champaign.brand == null ||
    champaign.brand.length == 0 ||
    champaign.brand == undefined ||
    champaign.brand == ""
      ? "/images/avatar/user.png"
      : champaign.brand.logo == "" ||
        champaign.brand.logo == null ||
        champaign.brand.logo == "0" ||
        champaign.brand.logo == undefined
      ? "/images/avatar/user.png"
      : champaign.brand.logo;
  const brandname = champaign.brand.name;
  const [category, setCategory] = useState<string>("");
  const [acceptreq, setAcceptreq] = useState<AcceptRequest>(AcceptRequest.None);

  const [requestdata, setRequestdata] = useState<any[]>([]);

  const [brandConnection, setBarndConnection] = useState<number>(0);
  const [brandComCam, setBarndComCam] = useState<number>(0);

  const [aprovedBid, setApprovedBid] = useState<any>(null);

  const init = async () => {
    setCategory(await getCampaignType(champaign.campaignTypeId));

    let req = {
      search: {
        campaign: champaign.id,
        influencer: userId,
        fromUser: userId,
      },
    };
    const reqdata = await axios.post(`${BaseUrl}/api/search-invite`, req);
    if (reqdata.data.status == true) {
      if (reqdata.data.data[0].status.code == "1")
        setAcceptreq(AcceptRequest.Panding);
      if (reqdata.data.data[0].status.code == "3")
        setAcceptreq(AcceptRequest.Accepted);
      if (reqdata.data.data[0].status.code == "5")
        setAcceptreq(AcceptRequest.Rejected);
      setRequestdata(reqdata.data.data);
    } else {
      setAcceptreq(AcceptRequest.None);
    }

    //brand connection
    const reqdata1 = await axios.post(`${BaseUrl}/api/get-brand-connection`, {
      brandId: champaign.brand.id,
    });
    if (reqdata.data.status) {
      setBarndConnection(reqdata1.data.data.influencer_count);
    } else {
      setBarndConnection(0);
    }

    //brand completed compaign
    const reqdata2 = await axios.post(`${BaseUrl}/api/get-brand-com-cam`, {
      brandId: champaign.brand.id,
    });
    if (reqdata2.data.status) {
      setBarndComCam(reqdata2.data.data.completed_campaign);
    } else {
      setBarndComCam(0);
    }

    const req1 = {
      search: {
        type: "3",
        brand: champaign.brand.id,
      },
    };
    const apireq = await axios({
      method: "post",
      url: `${BaseUrl}/api/search-review`,
      data: req1,
    });
    let myrate: number = 0;
    for (let i: number = 0; i < apireq.data.data.length; i++) {
      myrate +=
        parseInt(apireq.data.data[i].rating1) +
        parseInt(apireq.data.data[i].rating2) +
        parseInt(apireq.data.data[i].rating3);
    }
    setSum((val) => ({
      rowCount: apireq.data.data.length,
      rate: myrate,
      constCount: 3,
    }));

    //get approved bid
    const bidreq = await axios.post(`${BaseUrl}/api/get-approved-bid`, {
      campaignId: champaign.id,
    });

    if (bidreq.data.status) {
      setApprovedBid((val: any) => bidreq.data.data[0]);
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="grid gap-y-4 lg:gap-4 grid-cols-1 lg:grid-cols-7 mt-4 justify-start align-top content-start place-items-start place-content-start">
        <BrandInfo
          logo={brandimage}
          name={brandname}
          website={champaign.brand.website}
          info={champaign.brand.info}
          rate={
            isNaN(Math.round(sum.rate / sum.rowCount / sum.constCount))
              ? "0"
              : Math.round(sum.rate / sum.rowCount / sum.constCount).toString()
          }
          connection={brandConnection.toString()}
          completed={brandComCam.toString()}
        ></BrandInfo>
        <CampaignsInfo
          title={champaign.campaignName}
          dont={champaign.donts}
          dos={champaign.dos}
          hastag={champaign.hashtags}
          mendtion={champaign.mentions}
          platform={champaign.platforms}
          moddboard={champaign.moodBoards}
          info={champaign.campaignInfo}
          name={brandname}
          image={brandimage}
          website={champaign.brand.website}
          category={category}
        ></CampaignsInfo>
        <div className="lg:col-start-6 lg:col-end-8 grid gap-y-4 w-full">
          <Budget
            currecny={champaign.currency.code}
            costperpost={champaign.costPerPost}
            totalbudget={champaign.totalBudget.split(".")[0]}
          ></Budget>
          <Target
            audienceloaction={champaign.audienceLocations}
            minreach={champaign.minReach}
            maxreach={champaign.maxReach}
            startdate={champaign.startAt}
            enddate={champaign.endAt}
          ></Target>
          {isbrand ? null : (
            <>
              {acceptreq == AcceptRequest.None ? (
                <Apply
                  champaignId={champaign.id}
                  touserId={champaign.brandUserId}
                  userId={userId}
                  influencerId={userId}
                  fromuserId={userId}
                ></Apply>
              ) : null}
              {acceptreq == AcceptRequest.Panding ? <Panding></Panding> : null}
              {acceptreq == AcceptRequest.Rejected ? (
                <Rejected
                  reason={requestdata[0].status.message}
                  champaignId={champaign.id}
                  touserId={champaign.brandUserId}
                  userId={userId}
                  influencerId={userId}
                  fromuserId={userId}
                ></Rejected>
              ) : null}
            </>
          )}
        </div>
      </div>

      {acceptreq == AcceptRequest.Accepted ? (
        <>
          <div className="flex gap-6 flex-col lg:flex-row mt-8 flex-wrap justify-evenly">
            {champaign.campaignTypeId != "6" ? (
              <>
                <div className="shrink-0 w-96">
                  <CreateDraft
                    influencerId={userId}
                    champaingId={champaign.id}
                    platforms={data.platform}
                  ></CreateDraft>
                </div>
                <div className="w-96 shrink-0">
                  <p className="text-md text-primary font-semibold py-1">
                    Live campaigns
                  </p>
                  <div className="w-full h-[1px] bg-slate-300"></div>
                  <div>
                    <LinkCampaign
                      userId={userId}
                      campaingid={champaign.id}
                      brandId={champaign.brand.id}
                      cpp={champaign.costPerPost}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className=" shrink-0">
                {aprovedBid == null || aprovedBid == undefined ? (
                  <Bidding
                    CostPerPost={champaign.costPerPost}
                    userId={userId}
                    campaignId={champaign.id}
                    brandId={champaign.brand.id}
                  ></Bidding>
                ) : aprovedBid.userId == userId ? (
                  <>
                    <div className="shrink-0 w-96">
                      <CreateDraft
                        influencerId={userId}
                        champaingId={champaign.id}
                        platforms={data.platform}
                      ></CreateDraft>
                    </div>
                    <div className="w-96 shrink-0">
                      <p className="text-md text-primary font-semibold py-1">
                        Live campaigns
                      </p>
                      <div className="w-full h-[1px] bg-slate-300"></div>
                      <div>
                        <LinkCampaign
                          userId={userId}
                          campaingid={champaign.id}
                          brandId={champaign.brand.id}
                          cpp={champaign.costPerPost}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full bg-rose-500 py-4 px-10 text-white font-semibold text-2xl rounded-lg">
                    Your bid is not accepted
                  </div>
                )}
              </div>
            )}
          </div>
          <UserCreatedDrafts userId={userId} campaingid={champaign.id} />
        </>
      ) : null}

      <div className="my-6">
        {isbrand ? (
          <>
            <ChampaingAcceptRequest
              userId={userId}
              campaingid={champaign.id}
            ></ChampaingAcceptRequest>
            <div className="h-4"></div>
            <DraftAcceptRequest
              userId={userId}
              campaingid={champaign.id}
            ></DraftAcceptRequest>
            <div className="h-4"></div>
            <ChampaingPaymentRequest
              userid={user.id}
              campaingid={champaign.id}
              currency={user.currency.code}
            ></ChampaingPaymentRequest>

            {champaign.campaignTypeId == "6" ? (
              <ChampaingBidRequest
                userid={user.id}
                campaingid={champaign.id}
              ></ChampaingBidRequest>
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Campaigns;

type BrandInfoProps = {
  logo: string;
  name: string;
  website: string;
  info: string;
  rate: string;
  connection: string;
  completed: string;
};

const BrandInfo = (props: BrandInfoProps) => {
  return (
    <>
      <div className="col-span-2 rounded-xl shadow-xl bg-white p-4 w-full">
        <div className="flex items-end gap-x-3">
          <div>
            <img
              src={props.logo}
              alt="brand logo"
              className="object-cover w-16 h-16 rounded object-center"
            />
          </div>
          <p className="text-black font-semibold text-xl content-end text-left">
            {props.name}
          </p>
        </div>
        <p className="text-black font-semibold text-xs text-left mt-2">
          Category : Consumer Electronics
        </p>
        <p className="text-black font-semibold text-xs text-left">
          {props.website}
        </p>
        <h3 className="text-black font-bold text-md text-left">Brand info</h3>
        <p className="text-black font-semibold text-xs text-left">
          {props.info}
        </p>
        <div className="h-4"></div>
        <Rating rate={props.rate} />
        <div className="h-4"></div>
        <Connection connection={props.connection} />
        <div className="h-4"></div>
        <Completed completed={props.completed} />
      </div>
    </>
  );
};

type CampaignsInfoProps = {
  name: string;
  image: string;
  category: string;
  website: string;
  info: string;
  moddboard: any;
  platform: any;
  dos: string;
  dont: string;
  mendtion: string;
  hastag: string;
  title: string;
};

const CampaignsInfo = (props: CampaignsInfoProps) => {
  return (
    <>
      <div className="col-span-3 rounded-xl shadow-xl bg-white p-4 w-full">
        <div className="flex items-end gap-x-3">
          <div>
            <img
              src={props.image}
              alt="error"
              className="object-cover w-16 h-16 rounded object-center"
            />
          </div>
          <p className="text-black font-semibold text-xl content-end text-left">
            {props.name}
          </p>
        </div>

        <p className="text-black font-semibold text-xl text-left my-4">
          {props.title}
        </p>
        <p className="text-black font-semibold text-xs text-left mt-4">
          Category : {props.category}
        </p>
        <p className="text-black font-semibold text-xs text-left">
          {props.website}
        </p>
        <h3 className="text-black font-bold text-md text-left">
          Campaign info
        </h3>
        <p className="text-black font-semibold text-xs text-left">
          {props.info}
        </p>
        <div>
          <p className="text-black text-left text-md font-medium mt-2">
            Moodboard
          </p>
          <div className="flex gap-x-4 overflow-x-scroll no-scrollbar">
            {props.moddboard.map((val: any, index: number) => {
              return (
                <div className="shrink-0" key={index}>
                  <img
                    src={val.url}
                    alt="error"
                    className="h-14 w-14 object-cover rounded-md object-center"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-black text-left text-md font-medium mt-2">
          Platforms
        </p>
        <div className="flex items-center w-32 overflow-x-scroll no-scrollbar">
          {props.platform.map((val: any, index: number) => {
            return (
              <div key={index} className="p-1 shrink-0 mx-1 ">
                <img
                  src={val["platformLogoUrl"]}
                  alt="error"
                  className="rounded-lg w-8 h-8 object-center object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className="bg-gray-200  rounded-md py-2 flex justify-around w-72 mt-6">
          <div>
            <p className="text-sm font-semibold">Do's</p>
            {props.dos.split(",").map((val: any, index: number) => {
              return (
                <p key={index} className="text-md font-normal">
                  {val}
                </p>
              );
            })}
          </div>
          <div className="h-10 w-[1px] bg-slate-900"></div>
          <div>
            <p className="text-sm font-semibold">Dont's</p>
            {props.dont.split(",").map((val: any, index: number) => {
              return (
                <p key={index} className="text-md font-normal">
                  {val}
                </p>
              );
            })}
          </div>
        </div>
        <p className="text-sm font-semibold mt-4">Hashtags</p>
        <div className="flex flex-nowrap gap-2 my-4">
          {props.hastag.split(",").map((val: any, index: number) => {
            return (
              <p
                key={index}
                className="text-md font-normal rounded-md bg-gray-300 py-1 px-4"
              >
                #{val}
              </p>
            );
          })}
        </div>
        <p className="text-sm font-semibold mt-4">Mentions</p>
        <div className="flex flex-nowrap gap-2 my-4">
          {props.mendtion.split(",").map((val: any, index: number) => {
            return (
              <p
                key={index}
                className="text-md font-normal rounded-md bg-gray-300 py-1 px-4"
              >
                @{val}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

type TargetProps = {
  audienceloaction: string;
  minreach: string;
  maxreach: string;
  startdate: string;
  enddate: string;
};

const Target = (props: TargetProps) => {
  return (
    <>
      <div className="rounded-xl shadow-xl bg-white p-4 w-full">
        <div className="flex">
          <FontAwesomeIcon
            icon={faCoins}
            className="text-xl text-primary"
          ></FontAwesomeIcon>
          <h2 className="text-xl text-primary font-medium px-4">Target</h2>
        </div>
        <div className="h-[1px] bg-gray-500 w-full my-2"></div>
        <div className="flex my-2">
          <p className="text-md text-primary">Audience Location</p>
          <div className="grow"></div>
          <p className="text-md font-bold text-primary">
            {props.audienceloaction}
          </p>
        </div>
        <div className="flex my-2">
          <p className="text-md text-primary">Min Reach</p>
          <div className="grow"></div>
          <p className="text-md font-bold text-black">{props.minreach}</p>
        </div>
        <div className="flex my-2">
          <p className="text-md text-primary">Max Reach</p>
          <div className="grow"></div>
          <p className="text-md font-bold text-black">{props.maxreach}</p>
        </div>
        <div className="flex my-2">
          <p className="text-md text-primary">Start Date</p>
          <div className="grow"></div>
          <p className="text-md font-bold text-black">
            {props.startdate.toString().split(" ")[0]}
          </p>
        </div>
        <div className="flex my-2">
          <p className="text-md text-primary">End date</p>
          <div className="grow"></div>
          <p className="text-md font-bold text-black">
            {props.enddate.toString().split(" ")[0]}
          </p>
        </div>
      </div>
    </>
  );
};

type ApplyProps = {
  userId: string;
  influencerId: string;
  fromuserId: string;
  touserId: string;
  champaignId: string;
};

const Apply = (props: ApplyProps) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [error, setError] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const applyChampaign = async () => {
    if (
      messageRef.current?.value == null ||
      messageRef.current?.value == undefined ||
      messageRef.current?.value == ""
    )
      return setError("Message can't be blank");
    let req = {
      campaignId: props.champaignId,
      influencerId: props.influencerId,
      fromUserId: props.fromuserId,
      toUserId: props.touserId,
      inviteMessage: messageRef.current?.value,
    };

    const data = await axios.post(`${BaseUrl}/api/add-invite`, req);
    if (data.data.status == false) {
      setError(data.data.message);
    } else {
      messageRef!.current!.value = "";
      onCloseModal();
    }
    window.location.reload();
  };
  return (
    <>
      <div className="p-4 rounded-xl shadow-xl bg-primary">
        <h1 className="text-white text-xl text-left font-normal">
          Would you like to participate in this campaign?
        </h1>
        <div className="w-full grid place-items-center" onClick={onOpenModal}>
          <CusButton
            text="Apply"
            textColor={"text-white"}
            background={"bg-secondary"}
          ></CusButton>
        </div>
      </div>
      <div
        className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${
          open ? "fixed" : "hidden"
        } `}
      >
        <div className="p-6 bg-white rounded-xl shadow-xl w-96">
          <div className="flex">
            <div className="grow"></div>
            <div onClick={onCloseModal}>
              <FontAwesomeIcon
                icon={faRemove}
                className="font-bold text-2xl text-center text-primary"
              ></FontAwesomeIcon>
            </div>
          </div>
          <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
          <p className="text-lg font-normal">Subject : Apply for campaign</p>
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
            <div onClick={applyChampaign}>
              <CusButton
                text="send"
                background="bg-primary"
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type BudgetProps = {
  costperpost: string;
  totalbudget: string;
  currecny: string;
};

const Budget = (props: BudgetProps) => {
  return (
    <>
      <div className="rounded-xl shadow-xl bg-white p-4 w-full">
        <div className="flex">
          <FontAwesomeIcon
            icon={faCoins}
            className="text-xl text-primary"
          ></FontAwesomeIcon>
          <h2 className="text-xl text-primary font-medium px-4">Budget</h2>
        </div>
        <div className="h-[1px] bg-gray-500 w-full my-2 "></div>
        <div className="flex my-2">
          <p className="text-md text-primary">Cost per post</p>
          <div className="grow"></div>
          <p className="text-md font-bold text-primary">
            {props.costperpost.toString().split(".")[0]} {props.currecny}
          </p>
        </div>
        <div className="flex my-2">
          <p className="text-md text-primary">Total budget</p>
          <div className="grow"></div>
          <p className="text-md font-bold text-black">
            {props.totalbudget} {props.currecny}
          </p>
        </div>
      </div>
    </>
  );
};

const Panding = () => {
  return (
    <>
      <div className="p-4 rounded-xl shadow-xl bg-primary">
        <h1 className="text-white text-xl text-left font-normal">
          Your request in progress..
        </h1>
      </div>
    </>
  );
};

type ChampaingAcceptRequestProps = {
  campaingid: string;
  userId: string;
};

const ChampaingAcceptRequest = (props: ChampaingAcceptRequestProps) => {
  const [resinvite, setRequestinvite] = useState<any[]>([]);
  const [acceptbox, setAcceptbox] = useState<boolean>(false);
  const [rejectbox, setrejectbox] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const rejectiontextRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState<string | null>(null);

  const init = async () => {
    let req = {
      search: {
        status: "1",
        campaign: props.campaingid,
      },
    };
    const responseData = await axios.post(`${BaseUrl}/api/search-invite`, req);
    if (responseData.data.status == true) {
      setRequestinvite(responseData.data.data);
    }
  };

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

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${
          acceptbox ? "grid" : "hidden"
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
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${
          rejectbox ? "grid" : "hidden"
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
      <div className="p-4 rounded-xl shadow-xl bg-white">
        {resinvite.length == 0 ? (
          <div>No Invite request is pending</div>
        ) : (
          <div>
            <p className="text-md font-medium">Requested Invites</p>
            <div className="w-full bg-gray-400 h-[1px] my-2"></div>
            <div className="flex flex-wrap gap-6">
              {resinvite.map((val: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-lg"
                  >
                    <div className="flex">
                      <img
                        src={val.influencer.pic}
                        alt="influencer pic"
                        className="w-10 h-10 shrink-0 rounded-md object-center object-cover"
                      />
                      <div className="ml-2">
                        <p className="text-md font-medium">
                          {val.influencer.name.toString().split("@")[0]}
                        </p>
                        <p className="text-sm font-medium">
                          {val.influencer.email}
                        </p>
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
                    <div></div>
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

type DraftAcceptRequestProps = {
  campaingid: string;
  userId: string;
};

const DraftAcceptRequest = (props: DraftAcceptRequestProps) => {
  const [resinvite, setRequestinvite] = useState<any[]>([]);

  const [acceptbox, setAcceptbox] = useState<boolean>(false);
  const [rejectbox, setrejectbox] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const rejectiontextRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState<string | null>(null);

  const init = async () => {
    let req = {
      search: {
        status: "1",
        campaign: props.campaingid,
        toUser: props.userId,
      },
    };
    const responseData = await axios.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setRequestinvite(responseData.data.data);
    }
  };

  const acceptRequest = async () => {
    let req = { id: id, status: "3" };
    const responseData = await axios.post(`${BaseUrl}/api/update-draft`, req);
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
    const responseData = await axios.post(`${BaseUrl}/api/update-draft`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    rejectiontextRef.current!.value == "";
    setrejectbox(false);
    window.location.reload();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${
          acceptbox ? "grid" : "hidden"
        }`}
      >
        <div className="bg-white w-72 shadow-lg p-4 rounded-lg">
          <p className="text-center font-medium text-2xl">Accept</p>
          <div className="w-full bg-gray-400 h-[1px] my-2"></div>
          <p className="text-center font-medium text-gray-800">
            Are you sure you want to accept this draft?
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
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${
          rejectbox ? "grid" : "hidden"
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
      <div className="p-4 rounded-xl shadow-xl bg-white">
        {resinvite.length == 0 ? (
          <div>No draft request is pending</div>
        ) : (
          <div>
            <p className="text-md font-medium">Requested drafts</p>
            <div className="w-full bg-gray-400 h-[1px] my-2"></div>
            <div className="flex flex-wrap gap-6">
              {resinvite.map((val: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-lg"
                  >
                    <div className="flex">
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
                    <div></div>
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

type RejectedProps = {
  userId: string;
  influencerId: string;
  fromuserId: string;
  touserId: string;
  champaignId: string;
  reason: string;
};

const Rejected = (props: RejectedProps) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [error, setError] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const applyChampaign = async () => {
    if (
      messageRef.current?.value == null ||
      messageRef.current?.value == undefined ||
      messageRef.current?.value == ""
    )
      return setError("Message can't be blank");
    let req = {
      campaignId: props.champaignId,
      influencerId: props.influencerId,
      fromUserId: props.fromuserId,
      toUserId: props.touserId,
      inviteMessage: messageRef.current?.value,
    };

    const data = await axios.post(`${BaseUrl}/api/add-invite`, req);
    if (data.data.status == false) {
      setError(data.data.message);
    } else {
      messageRef!.current!.value = "";
      onCloseModal();
    }
    window.location.reload();
  };
  return (
    <>
      <div className="p-4 rounded-xl shadow-xl bg-primary">
        <h1 className="text-white text-xl text-left font-normal">
          Your request has been rejected..
        </h1>
        <p className="text-white font-normal text-md">
          Reason : {props.reason}
        </p>
        <div className="w-full grid place-items-center" onClick={onOpenModal}>
          <CusButton
            text="Apply again!"
            textColor={"text-white"}
            background={"bg-secondary"}
          ></CusButton>
        </div>
      </div>
      <div
        className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${
          open ? "fixed" : "hidden"
        } `}
      >
        <div className="p-6 bg-white rounded-xl shadow-xl w-96">
          <div className="flex">
            <div className="grow"></div>
            <div onClick={onCloseModal}>
              <FontAwesomeIcon
                icon={faRemove}
                className="font-bold text-2xl text-center text-primary"
              ></FontAwesomeIcon>
            </div>
          </div>
          <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
          <p className="text-lg font-normal">Subject : Aplay for campaign</p>
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
            <div onClick={applyChampaign}>
              <CusButton
                text="send"
                background="bg-primary"
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type CreateDraftProps = {
  platforms: any[];
  influencerId: string;
  champaingId: string;
};

const CreateDraft = (props: CreateDraftProps) => {
  const datepicker = useRef<HTMLInputElement | null>(null);
  const inputFile = useRef<HTMLInputElement | null>(null);
  const descraption = useRef<HTMLTextAreaElement | null>(null);
  const [pdfFile, setPdfFile] = useState<File>();
  const [platform, setPlatform] = useState<any>(null);
  const [createbox, setCreatebox] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <>
      <p className="text-md text-primary font-semibold py-1">Campaign draft</p>
      <div className="w-full h-[1px] bg-slate-300"></div>
      {createbox ? (
        <>
          <div className="p-4 bg-white mt-2 rounded-md">
            <p className="text-sm text-normal font-semibold py-1 text-primary">
              Create campaign draft
            </p>
            <div className="flex gap-2 mt-2 overflow-x-scroll no-scrollbar py-4">
              {props.platforms.map((val: any, i: number) => {
                return (
                  <div
                    key={i}
                    className={`shrink-0  p-2 rounded-lg ${
                      platform == val.id ? "bg-white shadow-xl " : "bg-gray-200"
                    } `}
                    onClick={() => {
                      setPlatform(val.id);
                    }}
                  >
                    <img
                      src={props.platforms[i]["platformLogoUrl"]}
                      alt="error"
                      className="w-10 h-10 object-center object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4">
              <h3 className="text-black font-semibold  text-md">
                {pdfFile == null ? "" : pdfFile.name}
              </h3>
              <div className="grow"></div>
              <div
                className="grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full"
                onClick={() => {
                  inputFile!.current!.click();
                }}
              >
                <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
              </div>
            </div>
            <div className="hidden">
              <input
                ref={inputFile}
                type="file"
                accept="application/pdf"
                onChange={(value) => {
                  let file_size = parseInt(
                    (value!.target.files![0].size / 1024 / 1024).toString()
                  );
                  if (file_size < 2) {
                    setError(null);
                    setPdfFile(value!.target.files![0]);
                  } else {
                    setError("Pdf file size must be less then 4 mb");
                  }
                }}
              />
            </div>
            <input
              type={"date"}
              ref={datepicker}
              className="bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2"
            ></input>
            <textarea
              ref={descraption}
              className="focus:border-none focus:outline-none mt-4 p-4 w-full h-20 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
              placeholder="description..."
            ></textarea>
            {error == "" || error == null || error == undefined ? null : (
              <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
                {error}
              </div>
            )}
            <button
              onClick={async () => {
                if (
                  platform == null ||
                  platform == undefined ||
                  platform == 0 ||
                  platform == ""
                ) {
                  setError("Select the platform.");
                } else if (pdfFile == null || pdfFile == undefined) {
                  setError("Select the pdf file.");
                } else if (
                  datepicker.current?.value == null ||
                  datepicker.current?.value == undefined ||
                  datepicker.current?.value == ""
                ) {
                  setError("Select the date.");
                } else if (
                  descraption.current?.value == null ||
                  descraption.current?.value == undefined ||
                  descraption.current?.value == ""
                ) {
                  setError("Write the description.");
                }
                const pdfurl = await UploadFile(pdfFile!);
                if (pdfurl.status) {
                  let req = {
                    campaignId: props.champaingId,
                    influencerId: props.influencerId,
                    handleId: platform,
                    publishAt: datepicker.current?.value,
                    attach01: pdfurl.data,
                    description: descraption.current?.value,
                  };
                  const data = await axios({
                    method: "post",
                    url: `${BaseUrl}/api/add-draft`,
                    data: req,
                  });
                  if (data.data.status == false) {
                    return setError(data.data.message);
                  } else {
                    setError(null);
                    return setCreatebox(false);
                  }
                } else {
                  setError(pdfurl.data);
                }
              }}
              className="text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2"
            >
              Submit
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 bg-white mt-2 rounded-md">
            <p className="text-sm text-normal font-semibold py-1 text-primary">
              Create campaign draft
            </p>
            <button
              onClick={() => {
                setCreatebox(true);
              }}
              className="text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2"
            >
              Create
            </button>
          </div>
        </>
      )}
    </>
  );
};

type ChampaingPaymentRequestProps = {
  campaingid: string;
  userid: string;
  currency: string;
};

const ChampaingPaymentRequest = (props: ChampaingPaymentRequestProps) => {
  const [respayment, setRequestPayment] = useState<any[]>([]);

  const [acceptbox, setAcceptbox] = useState<boolean>(false);
  const [rejectbox, setrejectbox] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

  const init = async () => {
    let req = {
      search: {
        campaign: props.campaingid,
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
      refNo: `${new Date().toLocaleDateString()}_${props.userid}_${
        props.campaingid
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

  return (
    <>
      <div
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${
          acceptbox ? "grid" : "hidden"
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
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${
          rejectbox ? "grid" : "hidden"
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
      <div className="p-4 rounded-xl shadow-xl bg-white">
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

type UserCreatedDraftsProps = {
  campaingid: string;
  userId: string;
};

const UserCreatedDrafts = (props: UserCreatedDraftsProps) => {
  const [resDarft, setResDarft] = useState<any[]>([]);

  const init = async () => {
    let req = {
      search: {
        fromUser: props.userId,
        campaign: props.campaingid,
        influencer: props.userId,
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
      <div className="p-4 rounded-xl shadow-xl bg-white my-4">
        {resDarft.length == 0 ? (
          <div>You haven't created any drafts yet.</div>
        ) : (
          <div>
            <p className="text-md font-medium">User Created draft</p>
            <div className="w-full bg-gray-400 h-[1px] my-2"></div>
            <div className="flex flex-wrap gap-6">
              {resDarft.map((val: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="my-2 p-4 bg-white rounded-lg shadow-lg w-80"
                  >
                    <div className="flex">
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
          </div>
        )}
      </div>
    </>
  );
};

type LinkCampaignProps = {
  campaingid: string;
  userId: string;
  brandId: string;
  cpp: string;
};

const LinkCampaign: React.FC<LinkCampaignProps> = (
  props: LinkCampaignProps
): JSX.Element => {
  const [resDarft, setResDarft] = useState<any[]>([]);
  const [linkBox, setLinkBox] = useState<boolean[]>([]);
  const [errors, setError] = useState<string[]>([]);
  const [linkValue, setLinkValue] = useState<string[]>(
    Array(resDarft.length).fill("")
  );

  const init = async () => {
    let req = {
      search: {
        fromUser: props.userId,
        campaign: props.campaingid,
        influencer: props.userId,
        status: 3,
      },
    };
    const responseData = await axios.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setResDarft(responseData.data.data);
    }
    setLinkBox(Array(responseData.data.data.length).fill(false));
    setError(Array(responseData.data.data.length).fill(""));
    setLinkValue(Array(responseData.data.data.length).fill(""));
  };

  const upadteLinkBox = (value: boolean, index: number) => {
    const updatedLinkBox = [...linkBox];
    updatedLinkBox[index] = value;
    setLinkBox(updatedLinkBox);
  };

  const updateLink = async (index: number) => {
    const link = linkValue[index];
    if (link == null || link == undefined || link == "") {
      const updatedErrors = [...errors];
      updatedErrors[index] = "Please enter the link";
      setError(updatedErrors);
    } else {
      const responseData = await axios.post(`${BaseUrl}/api/update-draft`, {
        id: resDarft[index].id,
        linkCampaign: link,
      });
      if (!responseData.data.status) {
        const updatedErrors = [...errors];
        updatedErrors[index] = responseData.data.message;
        setError(updatedErrors);
      } else {
        window.location.reload();
      }
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedLinkValue = [...linkValue];
    updatedLinkValue[index] = value;
    setLinkValue(updatedLinkValue);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      {resDarft.length == 0 ? (
        <div className="bg-white rounded-md p-4 mt-2">
          <h1 className="text-center font-semibold text-lg">
            NO Draft are created
          </h1>
        </div>
      ) : null}
      {resDarft.map((val: any, index: number) => {
        return (
          <div className="bg-white rounded-md p-4 mt-2" key={index}>
            <div className="flex">
              <img
                src={val.handle.platform.logo}
                alt="error"
                className="h-10 w-10 shrink-0"
              />
              <div className="ml-4">
                <p className="text-primary text-sm font-semibold text-left">
                  {val.handle.name}
                </p>
              </div>
            </div>
            {val.linkCampaign == null ||
            val.linkCampaign == "" ||
            val.linkCampaign == undefined ? (
              linkBox[index] ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter the link"
                    className="w-full outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400 mt-4"
                    value={linkValue[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  {errors[index] == "" ||
                  errors[index] == null ||
                  errors[index] == undefined ? null : (
                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2">
                      {errors[index]}
                    </div>
                  )}
                  <button
                    onClick={async () => {
                      await updateLink(index);
                    }}
                    className="mt-4 text-md w-full text-black font-semibold bg-[#fbca8e] rounded-md shadow-lg py-1"
                  >
                    Link
                  </button>
                </>
              ) : (
                <button
                  className="mt-4 text-md w-full text-black font-semibold bg-[#fbca8e] rounded-md shadow-lg py-1"
                  onClick={() => upadteLinkBox(true, index)}
                >
                  Link campaign
                </button>
              )
            ) : (
              <Link
                to={`/home/paymentreq/${props.brandId}/${props.campaingid}/${val.id}`}
                className="text-center inline-block mt-4 text-md w-full text-black font-semibold bg-[#fbca8e] rounded-md shadow-lg py-1"
                onClick={() => upadteLinkBox(true, index)}
              >
                View insight
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
};

interface BiddingProps {
  CostPerPost: string;
  campaignId: string;
  brandId: string;
  userId: string;
}

const Bidding: React.FC<BiddingProps> = (props: BiddingProps): JSX.Element => {
  const [error, setError] = useState<String>("");
  const [amount, setAmount] = useState<number>(0);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [bidamount, setBidamount] = useState<number>(0);
  const handelcontent = (e: any) => {
    setBidamount(e.target.value.replace(/\D/g, ""));
  };

  const init = async () => {
    const camp = await axios({
      method: "post",
      url: `${BaseUrl}/api/get-campaign-last-bid`,
      data: { campaignId: props.campaignId },
    });
    if (camp.data.status == false) {
      setAmount(0);
    } else {
      setAmount(camp.data.data[0].bidamount);
    }
  };
  useEffect(() => {
    init();
  }, []);

  const submit = async () => {
    if (bidamount == undefined || bidamount == null) {
      setError("Fill the Bid amount.");
    } else if (Number(bidamount) % 100 !== 0) {
      setError("Bid amount must be a multiple of 100.");
    } else if (amount < Number(bidamount)) {
      setError("Bid amount must be less then current bid amount.");
    } else if (
      messageRef.current?.value == null ||
      messageRef.current?.value == undefined ||
      messageRef.current?.value == ""
    ) {
      setError("Fill the remark.");
    } else {
      const req = {
        brandId: props.brandId,
        userId: props.userId,
        campaignId: props.campaignId,
        remark: messageRef.current?.value,
        bidamount: Number(bidamount),
      };

      const data = await axios({
        method: "post",
        url: `${BaseUrl}/api/add-bid`,
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
        setError(data.data.message);
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <>
      <p className="text-md text-primary font-semibold py-1">Bidding</p>
      <div className="w-full h-[1px] bg-slate-300"></div>
      <div className="p-4 bg-white mt-2 rounded-md">
        <p className="font-semibold text-xl  text-gray-800">
          Starting price : {props.CostPerPost.split(".")[0]}
        </p>
        <p className="font-semibold text-xl  text-gray-800 mt-2">
          Current price : {amount.toString().split(".")[0]}
        </p>
        <p className="font-semibold text-xl  text-gray-700 my-2">
          Min Bid : 100
        </p>
        <div className="flex gap-x-4">
          <p className="font-semibold text-xl text-gray-700">Enter Amount : </p>
          <div>
            <input
              onChange={handelcontent}
              value={bidamount}
              type={"text"}
              maxLength={10}
              className="text-black outline-none border-none rounded-md py-1 px-2 bg-[#EEEEEE] w-full"
            />
          </div>
        </div>
        <textarea
          ref={messageRef}
          className="p-4 w-full h-32 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4"
          placeholder="Remark"
        ></textarea>
        {error == "" || error == null || error == undefined ? null : (
          <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
            {error}
          </div>
        )}
        <button
          onClick={submit}
          className={`text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2`}
        >
          Bid Now
        </button>
      </div>
    </>
  );
};

type ChampaingBidRequestProps = {
  campaingid: string;
  userid: string;
};

const ChampaingBidRequest = (props: ChampaingBidRequestProps) => {
  const [resbid, setResbid] = useState<any[]>([]);

  const [acceptbox, setAcceptbox] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

  const init = async () => {
    let req = {
      campaignId: props.campaingid,
    };
    const responseData = await axios.post(
      `${BaseUrl}/api/get-campaign-bid`,
      req
    );
    if (responseData.data.status) {
      setResbid(responseData.data.data);
    } else {
      setError(responseData.data.message);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const acceptRequest = async () => {
    let req = {
      id: id,
    };
    const responseData = await axios.post(`${BaseUrl}/api/approve-bid`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    setAcceptbox(false);
    window.location.reload();
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${
          acceptbox ? "grid" : "hidden"
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

      <div className="p-4 rounded-xl shadow-xl bg-white mt-4">
        {resbid.length == 0 ? (
          <>
            <div>No bid request is pending</div>
          </>
        ) : (
          <div>
            <p className="text-md font-medium">Requested Bid</p>
            <div className="w-full bg-gray-400 h-[1px] my-2"></div>
            <div className="flex flex-wrap gap-6">
              {resbid.map((val: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-lg"
                  >
                    <p className="mt-2 text-md font-medium">Requested by</p>
                    <div className="w-full h-[2px] bg-gray-700"></div>
                    <div className="flex mt-4">
                      <img
                        src={val.userPicUrl}
                        alt="influencer pic"
                        className="w-10 h-10 shrink-0 rounded-md object-center object-cover"
                      />
                      <div className="ml-2">
                        <p className="text-md font-medium">
                          {val.userName.split("@")[0]}
                        </p>
                        <p className="text-sm font-medium">{val.userEmail}</p>
                      </div>
                    </div>
                    <p className="text-lg font-medium">Amount</p>
                    <p className="text-md font-semibold">{val.bidamount}</p>
                    <p className="text-lg font-medium mt-2">Remark</p>
                    <p className="text-md font-semibold">{val.remark}</p>
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {error == "" || error == null || error == undefined ? null : (
          <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
            {error}
          </div>
        )}
      </div>
    </>
  );
};
