import {
  faAdd,
  faCheck,
  faCircleXmark,
  faPaperclip,
  faRemove,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import CreateCampaignStore from "~/state/campaign/createcampaign";
import { useEffect, useRef, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { userPrefs } from "~/cookies";
import Brand from "~/routes/admin/home/brand";

export const loader = async ({ request }: LoaderArgs) => {
  const platform = await axios.post(`${BaseUrl}/api/getplatform`);

  const cookieHeader = request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);
  return json({ platform: platform.data.data, userdata: cookie.user });
};

const Spbd = () => {
  const [backbox, setBackBox] = useState<boolean>(false);

  const userdata = useLoaderData();
  const userId: string = userdata.userdata.id;
  const brandId: string = userdata.userdata.brandId;

  const mediatype = ["Post", "Story", "Reel", "Video", "Audio"];

  const data = useLoaderData();
  const navigator = useNavigate();

  const campaginType = CreateCampaignStore((state) => state.campaignTypeId);
  const [error, setError] = useState<string | null>(null);

  const platform = CreateCampaignStore((state) => state.platform);
  const setPlatform = CreateCampaignStore((state) => state.setPlatform);

  const media = CreateCampaignStore((state) => state.media);
  const setMedia = CreateCampaignStore((state) => state.setMedia);

  const CampaignName = useRef<HTMLInputElement | null>(null);

  const campinfo = useRef<HTMLTextAreaElement | null>(null);

  const StartDate = useRef<HTMLInputElement | null>(null);

  const EndDate = useRef<HTMLInputElement | null>(null);

  //start date
  const [sd, setsd] = useState<string>("");
  // end date
  const [ed, seted] = useState<string>("");

  // campaign name
  const [cn, setcn] = useState<string>("");

  const campaignTypeId = CreateCampaignStore((state) => state.campaignTypeId);
  const CostPerPost = useRef<HTMLInputElement | null>(null);

  //cost per post
  const [cpp, setcpp] = useState<string>("");
  return (
    <>

      <div className={`h-screen w-full grid place-items-center bg-black bg-opacity-25 fixed top-0 left-0 ${backbox ? "grid" : "hidden"}`}>
        <div className="w-80 bg-white rounded-xl shadow-xl p-4">
          <h1 className="text-center text-xl font-semibold">Are you sure you want to go back.</h1>
          <div className="flex justify-around">
            <button onClick={() => { navigator(-1) }} className="bg-green-500 py-2 px-4 text-xl font-medium rounded-md text-white">Yes</button>
            <button onClick={() => setBackBox(false)} className="bg-red-500 py-2 px-4 text-xl font-medium rounded-md text-white">NO</button>
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 flex-col lg:flex-row">
        <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4 grow">
          <h2 className="text-black tect-xl font-medium text-left my-4">
            {campaginType == "5" ? "Single post" : "Bidding"}
          </h2>
          <div className="flex gap-4 flex-wrap">
            {data.platform.map((val: any, i: number) => {
              return (
                <div
                  key={i}
                  className={` p-2 rounded-lg shrink-0 ${platform.includes(val.id)
                    ? "bg-white shadow-xl "
                    : "bg-gray-200"
                    } `}
                  onClick={() => {
                    setPlatform(val.id);
                  }}
                >
                  <img
                    src={data.platform[i]["platformLogoUrl"]}
                    alt="error"
                    className="w-10 h-10"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 flex-wrap my-6">
            {mediatype.map((val: string, i: number) => {
              return (
                <div
                  key={i}
                  className={`shrink-0 cursor-pointer text-primary text-lg text-center font-normal w-28 py-1  rounded-xl ${val == media ? "bg-white shadow-xl" : "bg-gray-100"
                    }`}
                  onClick={() => {
                    setMedia(val);
                  }}
                >
                  {val}
                </div>
              );
            })}
          </div>
          <h2 className="text-primary tect-xl font-medium text-left my-1">
            Campaign name
          </h2>
          <input
            ref={CampaignName}
            type={"text"}
            className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
            onChange={(val) => setcn(val.target.value)}
          />
          <h2 className="text-primary tect-xl font-medium text-left my-1">
            Campaign info
          </h2>
          <textarea
            ref={campinfo}
            className="p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          ></textarea>
          {campaginType == "6" ? (
            <div className="flex flex-col lg:flex-row">
              <div className="grow">
                <h2 className="text-primary tect-xl font-medium text-left my-1">
                  Start date
                </h2>
                <input
                  type={"date"}
                  ref={StartDate}
                  className="bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 w-full p-2"
                  onChange={(val) => setsd(val.target.value)}
                ></input>
              </div>
              <div className="w-8"></div>
              <div className="grow">
                <h2 className="text-primary tect-xl font-medium text-left my-1">
                  End date
                </h2>
                <input
                  ref={EndDate}
                  type={"date"}
                  className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
                  onChange={(val) => seted(val.target.value)}
                />
              </div>
            </div>
          ) : null}
          <div>
            <h2 className="text-primary tect-xl font-medium text-left my-1">
              Cost per post
            </h2>
            <input
              ref={CostPerPost}
              type={"number"}
              className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
              onChange={(val) => setcpp(val.target.value)}
            />
          </div>

          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
        </div>
        <div>
          <div className="lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4">
            <h1 className="text-primary text-lg font-medium">
              Campaign Summary
            </h1>
            <div className="flex my-4">
              <p className="text-sm text-primary font-normal">Campaign name</p>
              <div className="grow"></div>
              <p className="text-sm text-primary font-medium">
                {cn == "" ? "--------" : cn}
              </p>
            </div>
            <div className="flex my-4">
              <p className="text-sm text-primary font-normal">Cost per post</p>
              <div className="grow"></div>
              <p className="text-sm text-primary font-medium">
                {cpp == "" ? "--------" : cpp}
              </p>
            </div>
            {campaginType == "6" ? (
              <>
                <div className="flex my-4">
                  <p className="text-sm text-primary font-normal">Start date</p>
                  <div className="grow"></div>
                  <p className="text-sm text-primary font-medium">
                    {sd == ""
                      ? "--------"
                      : new Date(sd).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </p>
                </div>
                <div className="flex my-4">
                  <p className="text-sm text-primary font-normal">End date</p>
                  <div className="grow"></div>
                  <p className="text-sm text-primary font-medium">
                    {ed == ""
                      ? "--------"
                      : new Date(ed).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </p>
                </div>
              </>
            ) : null}
            {error == "" || error == null || error == undefined ? null : (
              <div className="my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md">
                {error}
              </div>
            )}
            <div className="flex w-full">
              <div
                onClick={() => {
                  setBackBox(false);
                }}
                className="w-full"
              >
                <CusButton
                  text="Back"
                  textColor={"text-black"}
                  background="bg-gray-100"
                  width={"w-full"}
                  fontwidth={"font-bold"}
                ></CusButton>
              </div>
              <div className="w-10"></div>
              <div
                className="w-full"
                onClick={async () => {
                  if (
                    platform == null ||
                    platform.length == 0 ||
                    platform == undefined
                  ) {
                    setError("Select a platform");
                  } else if (
                    media == null ||
                    media == "" ||
                    media == undefined
                  ) {
                    setError("Select a media");
                  } else if (
                    CampaignName.current?.value == null ||
                    CampaignName.current?.value == undefined ||
                    CampaignName.current?.value == ""
                  ) {
                    setError("Enter campaign name");
                  } else if (CampaignName.current?.value.length < 4) {
                    setError("Campaign should be more then 3 character.");
                  } else if (
                    campinfo.current?.value == null ||
                    campinfo.current?.value == undefined ||
                    campinfo.current?.value == ""
                  ) {
                    setError("Add campaign info");
                  } else if (
                    CostPerPost.current?.value == null ||
                    CostPerPost.current?.value == undefined ||
                    CostPerPost.current?.value == ""
                  ) {
                    setError("Fill the cost per post");
                  } else {
                    if (campaginType == "6") {
                      const x = new Date(StartDate!.current!.value);
                      const y = new Date(EndDate!.current!.value);
                      const pass_date: boolean = x > y;
                      if (
                        StartDate.current?.value == null ||
                        StartDate.current?.value == undefined ||
                        StartDate.current?.value == ""
                      ) {
                        setError("Enter planed starting date");
                      } else if (pass_date) {
                        setError("Start date should be less then end date");
                      } else if (
                        EndDate.current?.value == null ||
                        EndDate.current?.value == undefined ||
                        EndDate.current?.value == ""
                      ) {
                        setError("Enter planed end date");
                      } else {
                        const req = {
                          userId: userId,
                          brandUserId: userId,
                          brandId: brandId,
                          cityId: "0",
                          currencyId: "0",
                          categories: "0",
                          minEligibleRating: "0",
                          maxEligibleRating: "0",
                          minReach: "0",
                          maxReach: "0",
                          costPerPost: CostPerPost.current?.value,
                          totalBudget: "0",
                          dos: "0",
                          donts: "0",
                          mentions: "0",
                          hashtags: "0",
                          campaignTypeId: campaignTypeId,
                          campaignName: CampaignName.current?.value,
                          campaignInfo: campinfo.current?.value,
                          platforms: platform.join(),
                          startAt: StartDate.current?.value,
                          endAt: EndDate.current?.value,
                        };

                        const data = await axios({
                          method: "post",
                          url: `${BaseUrl}/api/add-campaign`,
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
                          const req1 = {
                            brandId: brandId,
                            campaignId: data.data.data.campaign.id,
                            remark: "init bid",
                            bidamount: CostPerPost.current?.value,
                          };

                          const data1 = await axios({
                            method: "post",
                            url: `${BaseUrl}/api/add-bid`,
                            data: req1,
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

                          if (data1.data.status == false) {
                            setError(data1.data.message);
                          } else {
                            return navigator(
                              `/home/createcampaign/inviteinf/${data.data.data.campaign.id}`
                            );
                          }
                        }
                      }
                    } else {
                      const req = {
                        userId: userId,
                        brandUserId: userId,
                        brandId: brandId,
                        cityId: "0",
                        currencyId: "0",
                        categories: "0",
                        minEligibleRating: "0",
                        maxEligibleRating: "0",
                        minReach: "0",
                        maxReach: "0",
                        costPerPost: CostPerPost.current?.value,
                        totalBudget: "0",
                        dos: "0",
                        donts: "0",
                        mentions: "0",
                        hashtags: "0",
                        campaignTypeId: campaignTypeId,
                        campaignName: CampaignName.current?.value,
                        campaignInfo: campinfo.current?.value,
                        platforms: platform.join(),
                        startAt: new Date().toLocaleDateString(),
                        endAt: new Date().toLocaleDateString(),
                      };
                      const data = await axios({
                        method: "post",
                        url: `${BaseUrl}/api/add-campaign`,
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
                        return navigator(
                          `/home/createcampaign/inviteinf/${data.data.data.campaign.id}`
                        );
                      }
                    }
                  }
                }}
              >
                <CusButton
                  text="Create"
                  textColor={"text-white"}
                  background="bg-primary"
                  width={"w-full"}
                ></CusButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Spbd;
