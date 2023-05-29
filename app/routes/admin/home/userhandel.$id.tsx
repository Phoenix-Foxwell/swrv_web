import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "~/const";
import { adminUser, userPrefs } from "~/cookies";

export const loader: LoaderFunction = async ({
  request,
  params,
}: LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await adminUser.parse(cookieHeader);
  const id = params.id;
  const userdata = await axios.post(`${BaseUrl}/api/get-user-handles`, {
    userId: id,
  });

  return json({
    userplatformdata: userdata.data.data,
    user: cookie.user,
  });
};

const UserHandel = (): JSX.Element => {
  const platformdata = useLoaderData().userplatformdata;
  const userId = useLoaderData().user.id;

  const [platformData, setPlatformData] = useState<{ [key: string]: any }>();

  const getPlatform = async (handle_id: string) => {
    const userdata = await axios.post(`${BaseUrl}/api/get-insta-handel-byid`, {
      userId: userId,
      handleId: handle_id,
    });
    setPlatformData((val) => userdata.data.data[0]);
  };

  const handeladdupdate = async (handle_id: string) => {
    const modashdata = await axios({
      method: "get",
      url: `https://api.modash.io/v1/instagram/profile/nusr_et/report?access_token=8PVJbSqOpTYwQ90B3sMMji0u05vhpOhN`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer 8PVJbSqOpTYwQ90B3sMMji0u05vhpOhN",
        Accept: "*",
      },
    });

    console.log(modashdata.data);

    const data = modashdata.data;
    if (!data.error) {
      const userdata = await axios.post(`${BaseUrl}/api/add-insta-handel`, {
        userId: userId,
        handleId: handle_id,
        userName: data.profile.profile.username,
        followers: data.profile.profile.followers,
        pictureurl: data.profile.profile.picture,
        postsCount: data.profile.postsCount,
        engagementRate: data.profile.profile.engagementRate,
        engagements: data.profile.profile.engagements,
        city: data.profile.city,
        country: data.profile.country,
        language: data.profile.langauage.name,
        isVerified: data.profile.isVerified,
        isPrivate: data.profile.isPrivate,
        avgReelsPlays: data.profile.avgReelsPlays,
        avgLikes: data.profile.avgLikes,
        avgComments: data.profile.avgComments,
        avgViews: data.profile.avgViews,
        paidPostPerformance: data.profile.paidPostPerformance,
        genderMale: data.profile.genders[1].weight,
        genderFemale: data.profile.genders[0].weight,
        geoCities1: data.profile.geoCities[0].name,
        geoCities2: data.profile.geoCities[1].name,
        geoCities3: data.profile.geoCities[2].name,
        geoCities4: data.profile.geoCities[3].name,
        geoCities5: data.profile.geoCities[4].name,
        geoCountries1: data.profile.geoCountries[0].name,
        geoCountries2: data.profile.geoCountries[1].name,
        geoCountries3: data.profile.geoCountries[2].name,
        geoCountries4: data.profile.geoCountries[3].name,
        geoCountries5: data.profile.geoCountries[4].name,
        ages13_17: data.profile.ages[0].weight,
        ages18_24: data.profile.ages[1].weight,
        ages25_34: data.profile.ages[2].weight,
        ages35_44: data.profile.ages[3].weight,
        ages45_64: data.profile.ages[4].weight,
        ages65_: data.profile.ages[5].weight,
        likedPost1Url: data.profile.popularPosts[0].url,
        likedPost1CreatedAt: data.profile.popularPosts[0].created,
        likedPost1Likes: data.profile.popularPosts[0].likes,
        likedPost1Comments: data.profile.popularPosts[0].comments,
        liked1Post1Image: data.profile.popularPosts[0].thumbnail,
        likedPost2Url: data.profile.popularPosts[1].url,
        likedPost2CreatedAt: data.profile.popularPosts[1].created,
        likedPost2Likes: data.profile.popularPosts[1].likes,
        likedPost2Comments: data.profile.popularPosts[1].comments,
        likedPost2Image: data.profile.popularPosts[1].thumbnail,
        likedPost3Url: data.profile.popularPosts[2].url,
        likedPost3CreatedAt: data.profile.popularPosts[2].created,
        likedPost3Likes: data.profile.popularPosts[2].likes,
        likedPost3Comments: data.profile.popularPosts[2].comments,
        likedPost3Image: data.profile.popularPosts[2].thumbnail,
        recentPost1Url: data.profile.recentPosts[0].url,
        recentPost1CreatedAt: data.profile.recentPosts[0].created,
        recentPost1Like: data.profile.recentPosts[0].likes,
        recentPost1Comments: data.profile.recentPosts[0].comments,
        recentPost2Url: data.profile.recentPosts[1].url,
        recentPost2CreatedAt: data.profile.recentPosts[1].created,
        recentPost2Like: data.profile.recentPosts[1].likes,
        recentPost2Comments: data.profile.recentPosts[1].comments,
        recentPost3Url: data.profile.recentPosts[2].url,
        recentPost3CreatedAt: data.profile.recentPosts[2].created,
        recentPost3Like: data.profile.recentPosts[2].likes,
        recentPost3Comments: data.profile.recentPosts[2].comments,
        oneMonthagoFollower: data.profile.statHistory[7].followers,
        oneMonthagoAvgLike: data.profile.statHistory[7].avgLikes,
        oneMonthAgoFollowing: data.profile.statHistory[7].following,
        twoMonthagoFollower: data.profile.statHistory[6].followers,
        twoMonthagoAvgLike: data.profile.statHistory[6].avgLikes,
        twoMonthAgoFollowing: data.profile.statHistory[6].following,
        threeMonthagoFollower: data.profile.statHistory[5].followers,
        threeMonthagoAvgLike: data.profile.statHistory[5].avgLikes,
        threeMonthAgoFollowing: data.profile.statHistory[5].following,
        fourMonthagoFollower: data.profile.statHistory[4].followers,
        fourMonthagoAvgLike: data.profile.statHistory[4].avgLikes,
        fourMonthAgoFollowing: data.profile.statHistory[4].following,
        fiveMonthagoFollower: data.profile.statHistory[3].followers,
        fiveMonthagoAvgLike: data.profile.statHistory[3].avgLikes,
        fiveMonthAgoFollowing: data.profile.statHistory[3].following,
      });
    } else {
    }
  };

  return (
    <>
      <div className="grow bg-[#1b2028] my-2 rounded-md p-4 w-full">
        <h1 className="text-white font-medium text-xl">User State</h1>
        <div className="w-full bg-slate-400 h-[1px] my-2"></div>
        {platformdata.length == 0 ||
        platformdata == null ||
        platformdata == undefined ? (
          <div
            className={`my-6 flex gap-2 items-center b  py-1 px-2 rounded-md border border-rose-400 bg-rose-500 bg-opacity-10 text-rose-500 cursor-pointer text-center text-xl`}
          >
            <p>User does not have any channel</p>
          </div>
        ) : (
          <div className="flex gap-4 flex-wrap">
            {platformdata.map((val: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-60"
                >
                  <div className="flex gap-4 w-full">
                    <img
                      src={val.platformLogoUrl}
                      alt="platform logo"
                      className="w-14 h-14 rounded-md"
                    />
                    <div>
                      <div className="text-xl">{val.platformName}</div>
                      <div className="text-md">{val.handleName}</div>
                    </div>
                    <div className="grow"></div>
                  </div>
                  <div
                    onClick={() => getPlatform(val.handle_id)}
                    className={`mt-6 flex gap-2 items-center py-1 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl`}
                  >
                    View Info
                  </div>
                  {val.lastUpdatedAt == null ||
                  val.lastUpdatedAt == undefined ||
                  val.lastUpdatedAt == "" ? (
                    <p className="mt-2 py-1 px-2 rounded-md border border-rose-400 bg-rose-500 bg-opacity-10 text-rose-500 cursor-pointer text-center text-sm">
                      There is no record
                    </p>
                  ) : (
                    <p className="mt-2 py-1 px-2 rounded-md border border-green-400 bg-green-500 bg-opacity-10 text-green-500 cursor-pointer text-center text-sm">
                      Last Update : {val.lastUpdatedAt.toString().split(" ")[0]}
                    </p>
                  )}
                  <button
                    onClick={() => handeladdupdate(val.handle_id)}
                    className="w-full mt-2 py-1 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-sm"
                  >
                    ADD/UPDATE
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <div className="bg-gray-400 w-full h-[2px] my-4"></div>
        {platformData == null || platformData == undefined ? (
          <p className="my-2 py-1 px-2 rounded-md border border-rose-400 bg-rose-500 bg-opacity-10 text-rose-500 cursor-pointer text-center text-sm">
            There is no data from this platform
          </p>
        ) : (
          <div className="flex flex-wrap gap-6">
            <div className="bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80">
              <p className="text-lg text-center font-semibold">User Info</p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <div className="mx-auto">
                <img
                  src={platformData.picUrl}
                  alt="avatar"
                  className="rounded-md w-20 h-20 object-cover object-center"
                />
              </div>
              <p className="text-lg text-left font-normal">
                User Name : {platformData.userName}
              </p>
              <p className="text-lg text-left font-normal">
                Language : {platformData.language}
              </p>
              <p className="text-lg text-left font-normal">
                Verified : {platformData.isVerified ? "Yes" : "No"}
              </p>
              <p className="text-lg text-left font-normal">
                Private : {platformData.isPrivate ? "Yes" : "No"}
              </p>
              <p className="text-lg text-left font-normal">
                City : {platformData.city}
              </p>
              <p className="text-lg text-left font-normal">
                Country : {platformData.country}
              </p>
              <p className="text-lg text-left font-normal">
                Followers :{" "}
                {Number(platformData.followers).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Post Count :{" "}
                {Number(platformData.postCount).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Engagement Rate : {platformData.engagementRate}
              </p>
              <p className="text-lg text-left font-normal">
                Engagements: {platformData.engagements}
              </p>
              <p className="text-lg text-left font-normal">
                Paid Post : {platformData.paidPostPerformance}
              </p>
            </div>
            <div className="bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80">
              <p className="text-lg text-center font-semibold">
                User Average Info
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                Average Reels Play :{" "}
                {Number(platformData.avgReelsPlays).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Average Likes :{" "}
                {Number(platformData.avgLikes).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Average Views :{" "}
                {Number(platformData.avgViews).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Average Comments :{" "}
                {Number(platformData.avgComments).toLocaleString("en-US")}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-center font-semibold">User interest</p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                Male : {(Number(platformData.genderMale) * 100).toFixed(2)} %
              </p>
              <p className="text-lg text-left font-normal">
                Female : {(Number(platformData.genderFemale) * 100).toFixed(2)}{" "}
                %
              </p>
            </div>
            <div className="bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80">
              <p className="text-lg text-center font-semibold">
                User Location Info
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                City 1 : {platformData.geoCities1}
              </p>
              <p className="text-lg text-left font-normal">
                City 2 : {platformData.geoCities2}
              </p>
              <p className="text-lg text-left font-normal">
                City 3 : {platformData.geoCities3}
              </p>
              <p className="text-lg text-left font-normal">
                City 4 : {platformData.geoCities4}
              </p>
              <p className="text-lg text-left font-normal">
                City 5 : {platformData.geoCities5}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>

              <p className="text-lg text-left font-normal">
                Country 1 : {platformData.geoCountries1}
              </p>
              <p className="text-lg text-left font-normal">
                Country 2 : {platformData.geoCountries2}
              </p>
              <p className="text-lg text-left font-normal">
                Country 3 : {platformData.geoCountries3}
              </p>
              <p className="text-lg text-left font-normal">
                Country 4 : {platformData.geoCountries4}
              </p>
              <p className="text-lg text-left font-normal">
                Country 5 : {platformData.geoCountries5}
              </p>
            </div>
            <div className="bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80">
              <p className="text-lg text-center font-semibold">
                Age base interest
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                Age 13-17 : {(Number(platformData.ages13_17) * 100).toFixed(2)}{" "}
                %
              </p>
              <p className="text-lg text-left font-normal">
                Age 18-24 : {(Number(platformData.ages18_24) * 100).toFixed(2)}{" "}
                %
              </p>
              <p className="text-lg text-left font-normal">
                Age 25-34 : {(Number(platformData.ages25_34) * 100).toFixed(2)}{" "}
                %
              </p>
              <p className="text-lg text-left font-normal">
                Age 35-44 : {(Number(platformData.ages35_44) * 100).toFixed(2)}{" "}
                %
              </p>
              <p className="text-lg text-left font-normal">
                Age 45-64 : {(Number(platformData.ages45_64) * 100).toFixed(2)}{" "}
                %
              </p>
              <p className="text-lg text-left font-normal">
                Age 65+ : {(Number(platformData.ages65_) * 100).toFixed(2)} %
              </p>
            </div>
            <div className="bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80">
              <p className="text-lg text-center font-semibold">
                User Likes first post details
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <div className="mx-auto">
                <img
                  src={platformData.liked1Post1Image}
                  alt="avatar"
                  className="rounded-md w-20 h-20 object-cover object-ce
                "
                />
              </div>
              <a
                className="inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl"
                href={platformData.likedPost1Url}
                target="_blank"
              >
                Visit
              </a>
              <p className="text-lg text-left font-normal">
                Liked Post date :{" "}
                {new Date(platformData.likedPost1CreatedAt).toLocaleString()}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Likes :{" "}
                {Number(platformData.likedPost1Likes).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Comments :{" "}
                {Number(platformData.likedPost1Comments).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-center font-semibold">
                User Likes second post details
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>

              <div className="mx-auto">
                <img
                  src={platformData.likedPost2Image}
                  alt="avatar"
                  className="rounded-md w-20 h-20 object-cover object-ce
                "
                />
              </div>
              <a
                className="inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl"
                href={platformData.likedPost2Url}
                target="_blank"
              >
                Visit
              </a>
              <p className="text-lg text-left font-normal">
                Liked Post date :{" "}
                {new Date(platformData.likedPost2CreatedAt).toLocaleString()}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Likes :{" "}
                {Number(platformData.likedPost2Likes).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Comments :{" "}
                {Number(platformData.likedPost2Comments).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-center font-semibold">
                User Likes Third post details
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>

              <div className="mx-auto">
                <img
                  src={platformData.likedPost3Image}
                  alt="avatar"
                  className="rounded-md w-20 h-20 object-cover object-ce
                "
                />
              </div>
              <a
                className="inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl"
                href={platformData.likedPost3Url}
                target="_blank"
              >
                Visit
              </a>
              <p className="text-lg text-left font-normal">
                Liked Post date :{" "}
                {new Date(platformData.likedPost3CreatedAt).toLocaleString()}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Likes :{" "}
                {Number(platformData.likedPost3Likes).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Comments :{" "}
                {Number(platformData.likedPost3Comments).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>

              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
            </div>
            <div className="bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80">
              <p className="text-lg text-center font-semibold">
                Recent Post One
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <a
                className="inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl"
                href={platformData.recentPost1Url}
                target="_blank"
              >
                Visit
              </a>
              <p className="text-lg text-left font-normal">
                Liked Post date :{" "}
                {new Date(platformData.recentPost1CreatedAt).toLocaleString()}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Likes :{" "}
                {Number(platformData.recentPost1Likes).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Comments :{" "}
                {Number(platformData.recentPost1Comments).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-center font-semibold">
                Recent Post Second
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <a
                className="inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl"
                href={platformData.recentPost2Url}
                target="_blank"
              >
                Visit
              </a>
              <p className="text-lg text-left font-normal">
                Liked Post date :{" "}
                {new Date(platformData.recentPost2CreatedAt).toLocaleString()}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Likes :{" "}
                {Number(platformData.recentPost2Likes).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Comments :{" "}
                {Number(platformData.recentPost2Comments).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>

              <p className="text-lg text-center font-semibold">
                Recent Post Three
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <a
                className="inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl"
                href={platformData.recentPost3Url}
                target="_blank"
              >
                Visit
              </a>
              <p className="text-lg text-left font-normal">
                Liked Post date :{" "}
                {new Date(platformData.recentPost3CreatedAt).toLocaleString()}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Likes :{" "}
                {Number(platformData.recentPost3Likes).toLocaleString("en-US")}
              </p>
              <p className="text-lg text-left font-normal">
                Liked Post Comments :{" "}
                {Number(platformData.recentPost3Comments).toLocaleString(
                  "en-US"
                )}
              </p>
            </div>
            <div className="bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80">
              <p className="text-lg text-center font-semibold">
                Month wise user details
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                First Month Follower :{" "}
                {Number(platformData.oneMonthAgoFollower).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                First Month Average Likes :{" "}
                {Number(platformData.oneMonthAgoAvgLike).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                First Month Following :{" "}
                {Number(platformData.oneMonthAgoFollowing).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                Second Month Follower :{" "}
                {Number(platformData.twoMonthAgoFollower).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                Second Month Average Likes :{" "}
                {Number(platformData.twoMonthAgoAvgLike).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                Second Month Following :{" "}
                {Number(platformData.twoMonthAgoFollowing).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                Third Month Follower :{" "}
                {Number(platformData.threeMonthAgoFollower).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                Third Month Average Likes :{" "}
                {Number(platformData.threeMonthAgoAvgLike).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                Third Month Following :{" "}
                {Number(platformData.threeMonthAgoFollowing).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                Fourth Month Follower :{" "}
                {Number(platformData.fourMonthAgoFollower).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                Fourth Month Average Likes :{" "}
                {Number(platformData.fourMonthAgoAvgLike).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                Fourth Month Following :{" "}
                {Number(platformData.fourMonthAgoFollowing).toLocaleString(
                  "en-US"
                )}
              </p>
              <div className="bg-gray-400 w-full h-[2px] my-4"></div>
              <p className="text-lg text-left font-normal">
                Five Month Follower :{" "}
                {Number(platformData.fiveMonthAgoFollower).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                Five Month Average Likes :{" "}
                {Number(platformData.fiveMonthAgoAvgLike).toLocaleString(
                  "en-US"
                )}
              </p>
              <p className="text-lg text-left font-normal">
                Five Month Following :{" "}
                {Number(platformData.fiveMonthAgoFollowing).toLocaleString(
                  "en-US"
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserHandel;