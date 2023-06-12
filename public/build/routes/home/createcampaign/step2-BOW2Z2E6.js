import {
  createcampaign_default
} from "/build/_shared/chunk-WZNTS5FP.js";
import {
  require_dist
} from "/build/_shared/chunk-7HWNPYKE.js";
import "/build/_shared/chunk-C3FEWCCA.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import "/build/_shared/chunk-Z6G3P7XF.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faAdd,
  faCheck,
  faCircleXmark,
  faPaperclip,
  faRemove
} from "/build/_shared/chunk-4NSQR6PB.js";
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

// app/routes/home/createcampaign/step2.tsx
var import_react2 = __toESM(require_react());
var import_react_simple_star_rating = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step2 = () => {
  const [backbox, setBackBox] = (0, import_react2.useState)(false);
  const mediatype = ["Post", "Story", "Reel", "Video", "Audio"];
  const data = useLoaderData();
  const navigator = useNavigate();
  const campaginType = createcampaign_default((state) => state.campaignTypeId);
  const [error, setError] = (0, import_react2.useState)(null);
  const mendtionText = (0, import_react2.useRef)(null);
  const [menerror, setMenError] = (0, import_react2.useState)(null);
  const [addmendtion, setAddMendtion] = (0, import_react2.useState)(false);
  const mendtion = createcampaign_default((state) => state.mendtion);
  const removeMendtion = createcampaign_default((state) => state.removeMeddtion);
  const clearMendtion = createcampaign_default((state) => state.clearMendtion);
  const addMendtion = createcampaign_default((state) => state.addMendtion);
  const hashtagText = (0, import_react2.useRef)(null);
  const [hasherror, setHashError] = (0, import_react2.useState)(null);
  const [addhashtag, setAddHashtag] = (0, import_react2.useState)(false);
  const hashtag = createcampaign_default((state) => state.hashtag);
  const removeHashtag = createcampaign_default((state) => state.removeHashtag);
  const clearHashtag = createcampaign_default((state) => state.clearHashtag);
  const addHashtag = createcampaign_default((state) => state.addHashtag);
  const dosText = (0, import_react2.useRef)(null);
  const [doserror, setDosError] = (0, import_react2.useState)(null);
  const [adddos, setAddDos] = (0, import_react2.useState)(false);
  const dos = createcampaign_default((state) => state.dos);
  const removeDos = createcampaign_default((state) => state.removeDos);
  const addDos = createcampaign_default((state) => state.addDos);
  const dontsText = (0, import_react2.useRef)(null);
  const [dontserror, setDontsError] = (0, import_react2.useState)(null);
  const [adddonts, setAddDonts] = (0, import_react2.useState)(false);
  const donts = createcampaign_default((state) => state.donts);
  const removeDonts = createcampaign_default((state) => state.removeDonts);
  const addDonts = createcampaign_default((state) => state.addDonts);
  const inputFile = (0, import_react2.useRef)(null);
  const [pdferror, setPdferror] = (0, import_react2.useState)(null);
  const pdfFile = createcampaign_default((state) => state.pdffile);
  const addPdfFile = createcampaign_default((state) => state.addPdfFile);
  const platform = createcampaign_default((state) => state.platform);
  const setPlatform = createcampaign_default((state) => state.setPlatform);
  const media = createcampaign_default((state) => state.media);
  const setMedia = createcampaign_default((state) => state.setMedia);
  const campinfo = (0, import_react2.useRef)(null);
  const campaignInfo = createcampaign_default((state) => state.campaignInfo);
  const setCampaignInfo = createcampaign_default((state) => state.setCampaignInfo);
  const affLink = (0, import_react2.useRef)(null);
  const affiliatedLinks = createcampaign_default((state) => state.affiliatedLinks);
  const setAffiliatedLinks = createcampaign_default((state) => state.setAffiliatedLinks);
  const discCopon = (0, import_react2.useRef)(null);
  const discoutCoupon = createcampaign_default((state) => state.discoutCoupon);
  const setDiscoutCoupon = createcampaign_default((state) => state.setDiscoutCoupon);
  const tar = (0, import_react2.useRef)(null);
  const target = createcampaign_default((state) => state.target);
  const setTarget = createcampaign_default((state) => state.setTarget);
  const mintar = (0, import_react2.useRef)(null);
  const mintarget = createcampaign_default((state) => state.minTarget);
  const setMintarget = createcampaign_default((state) => state.setMinTarget);
  const [rating, setRating] = (0, import_react2.useState)(0);
  const getrating = createcampaign_default((state) => state.rating);
  const setrating = createcampaign_default((state) => state.setRating);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const [approval, setApproval] = (0, import_react2.useState)(null);
  const getapproval = createcampaign_default((state) => state.approval);
  const setapproval = createcampaign_default((state) => state.setApproval);
  (0, import_react2.useEffect)(() => {
    var _a, _b, _c, _d;
    campinfo.current.value = campaignInfo;
    setApproval(getapproval);
    setRating(getrating);
    if (((_a = affLink.current) == null ? void 0 : _a.value) != null) {
      affLink.current.value = affiliatedLinks;
    }
    if (((_b = discCopon.current) == null ? void 0 : _b.value) != null) {
      discCopon.current.value = discoutCoupon;
    }
    if (((_c = tar.current) == null ? void 0 : _c.value) != null) {
      tar.current.value = target.toString();
    }
    if (((_d = mintar.current) == null ? void 0 : _d.value) != null) {
      mintar.current.value = mintarget.toString();
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-screen w-full grid place-items-center bg-black bg-opacity-25 fixed top-0 left-0 ${backbox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 bg-white rounded-xl shadow-xl p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-xl font-semibold", children: "Are you sure you want to go back." }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 136,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          navigator(-1);
        }, className: "bg-green-500 py-2 px-4 text-xl font-medium rounded-md text-white", children: "Yes" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 138,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setBackBox(false), className: "bg-red-500 py-2 px-4 text-xl font-medium rounded-md text-white", children: "NO" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 139,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 137,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 135,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 134,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-black tect-xl font-medium text-left", children: campaginType == "1" ? "Unboxing post" : campaginType == "2" ? "Sponsored post" : campaginType == "3" ? "Discount and Affiliated post" : "Review post" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 144,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:flex gap-2 mt-2 grid place-items-center grid-cols-4", children: data.platform.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` p-2 rounded-lg ${platform.includes(val.id) ? "bg-white shadow-xl " : "bg-gray-200"} `, onClick: () => {
          setPlatform(val.id);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: data.platform[i]["platformLogoUrl"], alt: "error", className: "w-10 h-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 153,
          columnNumber: 33
        }, this) }, i, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 150,
          columnNumber: 29
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 147,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:flex gap-4 mt-4 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4", children: mediatype.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `cursor-pointer text-primary text-lg text-center font-normal w-28 py-1  rounded-xl ${val == media ? "bg-white shadow-xl" : "bg-gray-100"}`, onClick: () => {
          setMedia(val);
        }, children: val }, i, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 161,
          columnNumber: 29
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 158,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Mentions" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 170,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: mendtion.map((value, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-black font-semibold ", children: `@${value}` }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 177,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center cursor-pointer", onClick: () => removeMendtion(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 181,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 180,
                columnNumber: 41
              }, this)
            ] }, i, true, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 176,
              columnNumber: 37
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 173,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 187,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddMendtion(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 189,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 188,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 172,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer", onClick: clearMendtion, children: "clear all" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 193,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 192,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 171,
        columnNumber: 17
      }, this),
      addmendtion ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: mendtionText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Mention" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 200,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 199,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 202,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          if (mendtionText.current.value == "" || mendtionText.current.value == null || mendtionText.current.value == void 0) {
            setMenError("Mention can't be empty!");
          } else if (mendtion.includes(mendtionText.current.value)) {
            setMenError("Mention already exist add a diffrent one");
          } else if (mendtionText.current.value.indexOf(" ") >= 0) {
            setMenError("Mention cannot containt space");
          } else {
            addMendtion(mendtionText.current.value);
            mendtionText.current.value = "";
            setAddMendtion(false);
            setMenError(null);
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 219,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 203,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 198,
        columnNumber: 25
      }, this) : null,
      menerror == "" || menerror == null || menerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: menerror }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 225,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Hashtag" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 229,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: hashtag.map((value, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-black font-semibold ", children: `#${value}` }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 236,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center cursor-pointer", onClick: () => removeHashtag(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 240,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 239,
                columnNumber: 41
              }, this)
            ] }, i, true, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 235,
              columnNumber: 37
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 232,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 246,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddHashtag(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 248,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 247,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 231,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer", onClick: clearHashtag, children: "clear all" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 252,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 251,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 230,
        columnNumber: 17
      }, this),
      addhashtag ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: hashtagText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Hashtag" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 259,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 258,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 261,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          if (hashtagText.current.value == "" || hashtagText.current.value == null || hashtagText.current.value == void 0) {
            setHashError("Hashtag can't be empty!");
          } else if (hashtag.includes(hashtagText.current.value)) {
            setHashError("Hashtag already exist add a diffrent one");
          } else if (hashtagText.current.value.indexOf(" ") >= 0) {
            setHashError("Hashtag cannot containt space");
          } else {
            addHashtag(hashtagText.current.value);
            hashtagText.current.value = "";
            setAddHashtag(false);
            setHashError(null);
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 277,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 262,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 257,
        columnNumber: 25
      }, this) : null,
      hasherror == "" || hasherror == null || hasherror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: hasherror }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 283,
        columnNumber: 21
      }, this),
      campaginType == "2" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Minimum rating required" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 289,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react_simple_star_rating.Rating,
          {
            initialValue: rating,
            onClick: handleRating
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 291,
            columnNumber: 33
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 290,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 288,
        columnNumber: 25
      }, this) : null,
      campaginType == "3" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Affiliated links (optional)" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 301,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: affLink, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 302,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Discount coupons" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 303,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: discCopon, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 304,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 300,
        columnNumber: 25
      }, this) : null,
      campaginType == "4" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Target" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 313,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: tar, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 314,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 312,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 316,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Min target" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 318,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: mintar, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 319,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 317,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 311,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 310,
        columnNumber: 25
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign info" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 325,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: campinfo, className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 326,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Attachments" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 327,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-semibold  text-md", children: pdfFile.length == 0 ? "" : pdfFile[0].name }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 329,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 330,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full", onClick: () => {
          inputFile.current.click();
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faPaperclip }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 332,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 331,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 328,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: inputFile, type: "file", accept: "application/pdf", onChange: (value) => {
        let file_size = parseInt((value.target.files[0].size / 1024 / 1024).toString());
        if (file_size < 4) {
          setPdferror(null);
          addPdfFile(value.target.files[0]);
        } else {
          setPdferror("Pdf file size must be less then 4 mb");
        }
      } }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 336,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 335,
        columnNumber: 17
      }, this),
      pdferror == "" || pdferror == null || pdferror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: pdferror }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 347,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "You should" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 350,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-green-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCheck }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 356,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 355,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-lg text-left font-medium", children: "Do" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 359,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 358,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 361,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddDos(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 363,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 362,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 354,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: dos.map((value, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
              value,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: " " }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 372,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center ml-2 cursor-pointer", onClick: () => removeDos(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 374,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 373,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 370,
              columnNumber: 41
            }, this) }, i, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 369,
              columnNumber: 37
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 366,
            columnNumber: 25
          }, this),
          adddos ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: dosText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Do's" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 385,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 384,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 387,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
              if (dosText.current.value == "" || dosText.current.value == null || dosText.current.value == void 0) {
                setDosError("Dos can't be empty!");
              } else if (dos.includes(dosText.current.value)) {
                setDosError("Dos already exist add a diffrent one");
              } else {
                addDos(dosText.current.value);
                dosText.current.value = "";
                setAddDos(false);
                setDosError(null);
              }
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 401,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 388,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 383,
            columnNumber: 33
          }, this) : null,
          doserror == "" || doserror == null || doserror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: doserror }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 407,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 353,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 411,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-red-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faRemove }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 416,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 415,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-lg text-left font-medium", children: "Don't" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 419,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 418,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 421,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddDonts(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 423,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 422,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 414,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: donts.map((value, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
              value,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: " " }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 433,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center ml-2 cursor-pointer", onClick: () => removeDonts(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 435,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/home/createcampaign/step2.tsx",
                lineNumber: 434,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 431,
              columnNumber: 41
            }, this) }, i, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 430,
              columnNumber: 37
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 427,
            columnNumber: 25
          }, this),
          adddonts ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: dontsText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Dont's" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 446,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 445,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 448,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
              if (dontsText.current.value == "" || dontsText.current.value == null || dontsText.current.value == void 0) {
                setDontsError("Donts can't be empty!");
              } else if (donts.includes(dontsText.current.value)) {
                setDontsError("Donts already exist add a diffrent one");
              } else {
                addDonts(dontsText.current.value);
                dontsText.current.value = "";
                setAddDonts(false);
                setDontsError(null);
              }
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 462,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 449,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 444,
            columnNumber: 33
          }, this) : null,
          dontserror == "" || dontserror == null || dontserror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: dontserror }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 468,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 413,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 351,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row items-center mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Does the influencer need to seek an approval of the post before posting" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 474,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 477,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
            setApproval(true);
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Yes", textColor: approval ? "text-white" : "text-primary", background: approval ? "bg-primary" : "bg-gray-100", width: "w-20" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 480,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 479,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 482,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
            setApproval(false);
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "No", textColor: approval == false ? "text-white" : "text-primary", background: approval == false ? "bg-primary" : "bg-gray-100", width: "w-20" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 484,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 483,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 478,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 473,
        columnNumber: 17
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 489,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setBackBox(true);
        }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 494,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 493,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 496,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
          if (platform == null || platform.length == 0 || platform == void 0) {
            setError("Select a platform");
          } else if (media == null || media == "" || media == void 0) {
            setError("Select a media");
          } else if (mendtion.length == 0) {
            setError("please add at least one mendtion");
          } else if (hashtag.length == 0) {
            setError("please add at least one hashtag");
          } else if (((_a = campinfo.current) == null ? void 0 : _a.value) == null || ((_b = campinfo.current) == null ? void 0 : _b.value) == void 0 || ((_c = campinfo.current) == null ? void 0 : _c.value) == "") {
            setError("Add campaign info");
          } else if (dos.length == 0) {
            setError("please add at least one dos");
          } else if (donts.length == 0) {
            setError("please add at least one don't");
          } else if (pdfFile.length == 0) {
            setError("please add your attachment");
          } else if (approval == null) {
            setError("Dose influencer need to seek an approval of the post before posting?");
          } else {
            setCampaignInfo((_d = campinfo.current) == null ? void 0 : _d.value);
            setapproval(approval);
            if (campaginType == "2") {
              if (rating == 0) {
                setError("Select minimun rating");
              } else {
                setrating(rating);
                navigator("/home/createcampaign/step3");
              }
            } else if (campaginType == "3") {
              if (((_e = discCopon.current) == null ? void 0 : _e.value) == null || ((_f = discCopon.current) == null ? void 0 : _f.value) == void 0 || ((_g = discCopon.current) == null ? void 0 : _g.value) == "") {
                setError("Add Discount coupons");
              } else {
                setDiscoutCoupon((_h = discCopon.current) == null ? void 0 : _h.value);
                setAffiliatedLinks((_j = (_i = affLink.current) == null ? void 0 : _i.value) != null ? _j : "");
                navigator("/home/createcampaign/step3");
              }
            } else if (campaginType == "4") {
              if (((_k = tar.current) == null ? void 0 : _k.value) == null || ((_l = tar.current) == null ? void 0 : _l.value) == void 0 || parseInt((_m = tar.current) == null ? void 0 : _m.value) == 0 || ((_n = tar.current) == null ? void 0 : _n.value) == "") {
                setError("Enter target");
              } else if (((_o = mintar.current) == null ? void 0 : _o.value) == null || ((_p = mintar.current) == null ? void 0 : _p.value) == void 0 || parseInt((_q = mintar.current) == null ? void 0 : _q.value) == 0 || ((_r = mintar.current) == null ? void 0 : _r.value) == "") {
                setError("Enter min target");
              } else if (parseInt((_s = mintar.current) == null ? void 0 : _s.value) > parseInt((_t = tar.current) == null ? void 0 : _t.value)) {
                setError("Target must be gretter then min target.");
              } else {
                setMintarget(parseInt((_u = mintar.current) == null ? void 0 : _u.value));
                setTarget(parseInt((_v = tar.current) == null ? void 0 : _v.value));
                navigator("/home/createcampaign/step3");
              }
            } else {
              navigator("/home/createcampaign/step3");
            }
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", width: "w-full" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 562,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 497,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 492,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 143,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step2.tsx",
    lineNumber: 133,
    columnNumber: 9
  }, this);
};
var step2_default = Step2;
export {
  step2_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step2-BOW2Z2E6.js.map
