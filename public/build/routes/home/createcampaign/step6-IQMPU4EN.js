import {
  createcampaign_default
} from "/build/_shared/chunk-OGSCUSLT.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  UploadFile
} from "/build/_shared/chunk-52ZY7WVI.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-G6FD4XLU.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faAdd,
  faCheck,
  faPaperclip,
  faRemove
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/createcampaign/step6.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step6 = () => {
  const userdata = useLoaderData();
  const userId = userdata.userdata.id;
  const barndId = userdata.userdata.brandId;
  const navigator = useNavigate();
  const dosdata = createcampaign_default((state) => state.dos);
  const dontsdata = createcampaign_default((state) => state.donts);
  const pdfFile = createcampaign_default((state) => state.pdffile);
  const image = createcampaign_default((state) => state.image);
  const platform = createcampaign_default((state) => state.platform).join();
  const campaignTypeId = createcampaign_default((state) => state.campaignTypeId);
  const media = createcampaign_default((state) => state.media);
  const campaignInfo = createcampaign_default((state) => state.campaignInfo);
  const approval = createcampaign_default((state) => state.approval) ? "1" : "0";
  const discoutCoupon = createcampaign_default((state) => state.discoutCoupon);
  const affiliatedLinks = createcampaign_default((state) => state.affiliatedLinks);
  const target = createcampaign_default((state) => state.target).toString();
  const minTarget = createcampaign_default((state) => state.minTarget).toString();
  const rating = createcampaign_default((state) => state.rating).toString();
  const mendtion = createcampaign_default((state) => state.mendtion).join();
  const hashtag = createcampaign_default((state) => state.hashtag).join();
  const dos = createcampaign_default((state) => state.dos).join();
  const donts = createcampaign_default((state) => state.donts).join();
  const audience = createcampaign_default((state) => state.audience).join();
  const infLocation = createcampaign_default((state) => state.infLocation).id;
  const tilldate = createcampaign_default((state) => state.tilldate);
  const maxInf = createcampaign_default((state) => state.maxInf).toString();
  const remuneration = createcampaign_default((state) => state.remuneration);
  const remunerationType = createcampaign_default(
    (state) => state.remunerationType
  );
  const campaignName = createcampaign_default((state) => state.campaignName);
  const planedBudget = createcampaign_default(
    (state) => state.planedBudget
  ).toString();
  const costPerPost = createcampaign_default(
    (state) => state.costPerPost
  ).toString();
  const startDate = createcampaign_default((state) => state.startDate);
  const endDate = createcampaign_default((state) => state.endDate);
  const minReach = createcampaign_default((state) => state.minReach).toString();
  const maxReact = createcampaign_default((state) => state.maxReact).toString();
  const publicGlobally = createcampaign_default((state) => state.publicGlobally) ? "1" : "2";
  const brandinfo = createcampaign_default((state) => state.brandinfo);
  const campaginPurpose = createcampaign_default((state) => state.campaginPurpose);
  const lat = createcampaign_default((state) => state.lat);
  const long = createcampaign_default((state) => state.long);
  const [error, setError] = (0, import_react2.useState)(null);
  async function createCampagin() {
    const req = {
      userId,
      brandUserId: userId,
      brandId: barndId,
      cityId: "1",
      campaignTypeId,
      campaignName,
      campaignInfo,
      startAt: startDate,
      endAt: endDate,
      minReach,
      maxReach: maxReact,
      costPerPost,
      totalBudget: planedBudget,
      minEligibleRating: rating,
      currencyId: "1",
      categories: infLocation,
      platforms: platform,
      mentions: mendtion,
      hashtags: hashtag,
      dos,
      donts,
      totalParticipants: maxInf,
      remuneration: remunerationType,
      geoLat: lat.toString(),
      geoLng: long.toString(),
      geoRadiusKm: "10",
      postApproval: approval,
      audienceLocations: audience,
      inviteStartAt: startDate,
      inviteEndAt: tilldate,
      purpose: campaginPurpose,
      isPublic: publicGlobally
    };
    if (remunerationType == "1") {
      req["remunerationCash"] = remuneration;
    }
    if (remunerationType == "2") {
      req["remunerationProductDetail"] = remuneration;
    }
    if (remunerationType == "3") {
      req["remunerationRevenuePer"] = remuneration;
    }
    if (remunerationType == "4") {
      req["dicountCoupon"] = remuneration;
    }
    if (campaignTypeId == "4") {
      req["minTarget"] = minTarget;
      req["maxTarget"] = target;
    }
    const data = await axios_default({
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
        Accept: "*"
      }
    });
    if (data.data.status == false) {
      return setError(data.data.message);
    }
    const id = data.data.data.campaign.id;
    const pdfurl = await UploadFile(pdfFile[0]);
    if (pdfurl.status) {
      const pdfref = {
        campaignId: id,
        title: `attachemtn${id}`,
        url: pdfurl.data
      };
      await axios_default({
        method: "post",
        url: `${BaseUrl}/api/add-campaign-attachment`,
        data: pdfref,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*"
        }
      });
      for (let i = 0; i < image.length; i++) {
        const imgurl = await UploadFile(image[i]);
        if (imgurl.status) {
          const imgref = {
            campaignId: id,
            title: `moodboard${id}${i}`,
            url: imgurl.data
          };
          await axios_default({
            method: "post",
            url: `${BaseUrl}/api/add-campaign-attachment`,
            data: imgref,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Options": "*",
              "Access-Control-Allow-Methods": "*",
              "X-Content-Type-Options": "*",
              "Content-Type": "application/json",
              Accept: "*"
            }
          });
        } else {
          setError(imgurl.data);
        }
      }
      return navigator(
        `/home/createcampaign/inviteinf/${data.data.data.campaign.id}`
      );
    } else {
      setError(pdfurl.data);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: "/images/brand/adidas.jpg",
            alt: "error",
            className: "object-cover w-16 h-16 rounded"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step6.tsx",
            lineNumber: 240,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 239,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg", children: userdata.userdata.brand.name }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg mt-2 font-semibold", children: campaignName }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left mt-4", children: "Info" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 249,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: brandinfo }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left mt-4", children: "campaign Information" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this),
      campaignInfo,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 257,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left mt-4", children: "Mood boards" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 259,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]", children: image.map((value, i) => {
        var url = URL.createObjectURL(value);
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "top-0 left-0 absolute h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: url,
            alt: "error",
            className: "w-full h-full rounded-xl object-cover"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step6.tsx",
            lineNumber: 269,
            columnNumber: 23
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 268,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 267,
          columnNumber: 19
        }, this) }, i, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 266,
          columnNumber: 17
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 262,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Attachments" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 280,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-semibold  text-md", children: pdfFile.length == 0 ? "" : pdfFile[0].name }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 284,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faPaperclip }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 289,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 288,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 283,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "You should" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 292,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-green-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCheck }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 300,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 299,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-lg text-left font-medium", children: "Do" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 303,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 302,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 307,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 309,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 308,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step6.tsx",
            lineNumber: 298,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: dosdata.map((value, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
              value,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: " " }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step6.tsx",
                lineNumber: 318,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 316,
              columnNumber: 23
            }, this) }, i, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 315,
              columnNumber: 21
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step6.tsx",
            lineNumber: 312,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 297,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 326,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-red-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faRemove }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 331,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 330,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-lg text-left font-medium", children: "Don't" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 334,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 333,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 338,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 340,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 339,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step6.tsx",
            lineNumber: 329,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: dontsdata.map((value, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
              value,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: " " }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step6.tsx",
                lineNumber: 350,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 348,
              columnNumber: 23
            }, this) }, i, false, {
              fileName: "app/routes/home/createcampaign/step6.tsx",
              lineNumber: 347,
              columnNumber: 21
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step6.tsx",
            lineNumber: 344,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 328,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 295,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step6.tsx",
      lineNumber: 237,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 363,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left mt-4", children: "Congratulations" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 366,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: campaignInfo }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 369,
        columnNumber: 13
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 373,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full mt-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            onClick: () => {
              navigator(-1);
            },
            className: "w-full",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Back",
                textColor: "text-black",
                background: "bg-gray-100",
                width: "w-full",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/step6.tsx",
                lineNumber: 384,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step6.tsx",
            lineNumber: 378,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step6.tsx",
          lineNumber: 392,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: () => {
              createCampagin();
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Create",
                textColor: "text-white",
                background: "bg-secondary",
                width: "w-full",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/step6.tsx",
                lineNumber: 399,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step6.tsx",
            lineNumber: 393,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step6.tsx",
        lineNumber: 377,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step6.tsx",
      lineNumber: 362,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step6.tsx",
      lineNumber: 361,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step6.tsx",
    lineNumber: 236,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/step6.tsx",
    lineNumber: 235,
    columnNumber: 5
  }, this);
};
var step6_default = Step6;
export {
  step6_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step6-IQMPU4EN.js.map
