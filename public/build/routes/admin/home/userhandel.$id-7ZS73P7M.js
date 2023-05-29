import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-7OVYVV3T.js";
import {
  useLoaderData
} from "/build/_shared/chunk-ZUW3WGBY.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6U7EOCF3.js";

// app/routes/admin/home/userhandel.$id.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UserHandel = () => {
  const platformdata = useLoaderData().userplatformdata;
  const userId = useLoaderData().user.id;
  const [platformData, setPlatformData] = (0, import_react2.useState)();
  const getPlatform = async (handle_id) => {
    const userdata = await axios_default.post(`${BaseUrl}/api/get-insta-handel-byid`, {
      userId,
      handleId: handle_id
    });
    setPlatformData((val) => userdata.data.data[0]);
  };
  const handeladdupdate = async (handle_id) => {
    const modashdata = await axios_default({
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
        Accept: "*"
      }
    });
    console.log(modashdata.data);
    const data = modashdata.data;
    if (!data.error) {
      const userdata = await axios_default.post(`${BaseUrl}/api/add-insta-handel`, {
        userId,
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
        fiveMonthAgoFollowing: data.profile.statHistory[3].following
      });
    } else {
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "User State" }, void 0, false, {
      fileName: "app/routes/admin/home/userhandel.$id.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/admin/home/userhandel.$id.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, this),
    platformdata.length == 0 || platformdata == null || platformdata == void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `my-6 flex gap-2 items-center b  py-1 px-2 rounded-md border border-rose-400 bg-rose-500 bg-opacity-10 text-rose-500 cursor-pointer text-center text-xl`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "User does not have any channel" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/userhandel.$id.tsx",
        lineNumber: 151,
        columnNumber: 11
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: platformdata.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-60",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: val.platformLogoUrl,
                  alt: "platform logo",
                  className: "w-14 h-14 rounded-md"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/admin/home/userhandel.$id.tsx",
                  lineNumber: 165,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xl", children: val.platformName }, void 0, false, {
                  fileName: "app/routes/admin/home/userhandel.$id.tsx",
                  lineNumber: 171,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-md", children: val.handleName }, void 0, false, {
                  fileName: "app/routes/admin/home/userhandel.$id.tsx",
                  lineNumber: 172,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/userhandel.$id.tsx",
                lineNumber: 170,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                fileName: "app/routes/admin/home/userhandel.$id.tsx",
                lineNumber: 174,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/userhandel.$id.tsx",
              lineNumber: 164,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => getPlatform(val.handle_id),
                className: `mt-6 flex gap-2 items-center py-1 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl`,
                children: "View Info"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/userhandel.$id.tsx",
                lineNumber: 176,
                columnNumber: 19
              },
              this
            ),
            val.lastUpdatedAt == null || val.lastUpdatedAt == void 0 || val.lastUpdatedAt == "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 py-1 px-2 rounded-md border border-rose-400 bg-rose-500 bg-opacity-10 text-rose-500 cursor-pointer text-center text-sm", children: "There is no record" }, void 0, false, {
              fileName: "app/routes/admin/home/userhandel.$id.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 py-1 px-2 rounded-md border border-green-400 bg-green-500 bg-opacity-10 text-green-500 cursor-pointer text-center text-sm", children: [
              "Last Update : ",
              val.lastUpdatedAt.toString().split(" ")[0]
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/userhandel.$id.tsx",
              lineNumber: 189,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: () => handeladdupdate(val.handle_id),
                className: "w-full mt-2 py-1 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-sm",
                children: "ADD/UPDATE"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/userhandel.$id.tsx",
                lineNumber: 193,
                columnNumber: 19
              },
              this
            )
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 160,
          columnNumber: 17
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/admin/home/userhandel.$id.tsx",
      lineNumber: 157,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
      fileName: "app/routes/admin/home/userhandel.$id.tsx",
      lineNumber: 204,
      columnNumber: 9
    }, this),
    platformData == null || platformData == void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-2 py-1 px-2 rounded-md border border-rose-400 bg-rose-500 bg-opacity-10 text-rose-500 cursor-pointer text-center text-sm", children: "There is no data from this platform" }, void 0, false, {
      fileName: "app/routes/admin/home/userhandel.$id.tsx",
      lineNumber: 206,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Info" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 212,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 213,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: platformData.picUrl,
            alt: "avatar",
            className: "rounded-md w-20 h-20 object-cover object-center"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 215,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 214,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "User Name : ",
          platformData.userName
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 221,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Language : ",
          platformData.language
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 224,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Verified : ",
          platformData.isVerified ? "Yes" : "No"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Private : ",
          platformData.isPrivate ? "Yes" : "No"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City : ",
          platformData.city
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 233,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country : ",
          platformData.country
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Followers :",
          " ",
          Number(platformData.followers).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 239,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Post Count :",
          " ",
          Number(platformData.postCount).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 243,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Engagement Rate : ",
          platformData.engagementRate
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 247,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Engagements: ",
          platformData.engagements
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Paid Post : ",
          platformData.paidPostPerformance
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 253,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/userhandel.$id.tsx",
        lineNumber: 211,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Average Info" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 258,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 261,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Average Reels Play :",
          " ",
          Number(platformData.avgReelsPlays).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 262,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Average Likes :",
          " ",
          Number(platformData.avgLikes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 266,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Average Views :",
          " ",
          Number(platformData.avgViews).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 270,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Average Comments :",
          " ",
          Number(platformData.avgComments).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 274,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 278,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User interest" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 279,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 280,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Male : ",
          (Number(platformData.genderMale) * 100).toFixed(2),
          " %"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 281,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Female : ",
          (Number(platformData.genderFemale) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 284,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/userhandel.$id.tsx",
        lineNumber: 257,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Location Info" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 290,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 293,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 1 : ",
          platformData.geoCities1
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 294,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 2 : ",
          platformData.geoCities2
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 297,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 3 : ",
          platformData.geoCities3
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 300,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 4 : ",
          platformData.geoCities4
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 303,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 5 : ",
          platformData.geoCities5
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 306,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 309,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 1 : ",
          platformData.geoCountries1
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 311,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 2 : ",
          platformData.geoCountries2
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 314,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 3 : ",
          platformData.geoCountries3
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 317,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 4 : ",
          platformData.geoCountries4
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 320,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 5 : ",
          platformData.geoCountries5
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 323,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/userhandel.$id.tsx",
        lineNumber: 289,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Age base interest" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 328,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 331,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 13-17 : ",
          (Number(platformData.ages13_17) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 332,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 18-24 : ",
          (Number(platformData.ages18_24) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 336,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 25-34 : ",
          (Number(platformData.ages25_34) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 340,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 35-44 : ",
          (Number(platformData.ages35_44) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 344,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 45-64 : ",
          (Number(platformData.ages45_64) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 348,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 65+ : ",
          (Number(platformData.ages65_) * 100).toFixed(2),
          " %"
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 352,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/userhandel.$id.tsx",
        lineNumber: 327,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Likes first post details" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 357,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 360,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: platformData.liked1Post1Image,
            alt: "avatar",
            className: "rounded-md w-20 h-20 object-cover object-ce\r\n                "
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 362,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 361,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.likedPost1Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 369,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.likedPost1CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 376,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.likedPost1Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 380,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.likedPost1Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 384,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 390,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Likes second post details" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 391,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 394,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: platformData.likedPost2Image,
            alt: "avatar",
            className: "rounded-md w-20 h-20 object-cover object-ce\r\n                "
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 397,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 396,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.likedPost2Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 404,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.likedPost2CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 411,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.likedPost2Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 415,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.likedPost2Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 419,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 425,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Likes Third post details" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 426,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 429,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: platformData.likedPost3Image,
            alt: "avatar",
            className: "rounded-md w-20 h-20 object-cover object-ce\r\n                "
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 432,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 431,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.likedPost3Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 439,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.likedPost3CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 446,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.likedPost3Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 450,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.likedPost3Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 454,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 460,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 462,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/userhandel.$id.tsx",
        lineNumber: 356,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Recent Post One" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 465,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 468,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.recentPost1Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 469,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.recentPost1CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 476,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.recentPost1Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 480,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.recentPost1Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 484,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 490,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Recent Post Second" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 491,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 494,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.recentPost2Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 495,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.recentPost2CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 502,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.recentPost2Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 506,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.recentPost2Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 510,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 516,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Recent Post Three" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 518,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 521,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.recentPost3Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/userhandel.$id.tsx",
            lineNumber: 522,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.recentPost3CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 529,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.recentPost3Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 533,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.recentPost3Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 537,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/userhandel.$id.tsx",
        lineNumber: 464,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Month wise user details" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 545,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 548,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "First Month Follower :",
          " ",
          Number(platformData.oneMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 549,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "First Month Average Likes :",
          " ",
          Number(platformData.oneMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 555,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "First Month Following :",
          " ",
          Number(platformData.oneMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 561,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 567,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Second Month Follower :",
          " ",
          Number(platformData.twoMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 568,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Second Month Average Likes :",
          " ",
          Number(platformData.twoMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 574,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Second Month Following :",
          " ",
          Number(platformData.twoMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 580,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 586,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Third Month Follower :",
          " ",
          Number(platformData.threeMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 587,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Third Month Average Likes :",
          " ",
          Number(platformData.threeMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 593,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Third Month Following :",
          " ",
          Number(platformData.threeMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 599,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 605,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Fourth Month Follower :",
          " ",
          Number(platformData.fourMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 606,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Fourth Month Average Likes :",
          " ",
          Number(platformData.fourMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 612,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Fourth Month Following :",
          " ",
          Number(platformData.fourMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 618,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 624,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Five Month Follower :",
          " ",
          Number(platformData.fiveMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 625,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Five Month Average Likes :",
          " ",
          Number(platformData.fiveMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 631,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Five Month Following :",
          " ",
          Number(platformData.fiveMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/userhandel.$id.tsx",
          lineNumber: 637,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/userhandel.$id.tsx",
        lineNumber: 544,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/userhandel.$id.tsx",
      lineNumber: 210,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/userhandel.$id.tsx",
    lineNumber: 145,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin/home/userhandel.$id.tsx",
    lineNumber: 144,
    columnNumber: 5
  }, this);
};
var userhandel_id_default = UserHandel;
export {
  userhandel_id_default as default
};
//# sourceMappingURL=/build/routes/admin/home/userhandel.$id-7ZS73P7M.js.map
