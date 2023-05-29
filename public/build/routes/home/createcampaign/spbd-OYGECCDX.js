import {
  createcampaign_default
} from "/build/_shared/chunk-2IBSJO5J.js";
import {
  CusButton
} from "/build/_shared/chunk-GMW45GHR.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-7OVYVV3T.js";
import "/build/_shared/chunk-ZTDX66IZ.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-ZUW3WGBY.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6U7EOCF3.js";

// app/routes/home/createcampaign/spbd.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Spbd = () => {
  const userdata = useLoaderData();
  const userId = userdata.userdata.id;
  const brandId = userdata.userdata.brandId;
  const mediatype = ["Post", "Story", "Reel", "Video", "Audio"];
  const data = useLoaderData();
  const navigator = useNavigate();
  const campaginType = createcampaign_default((state) => state.campaignTypeId);
  const [error, setError] = (0, import_react2.useState)(null);
  const platform = createcampaign_default((state) => state.platform);
  const setPlatform = createcampaign_default((state) => state.setPlatform);
  const media = createcampaign_default((state) => state.media);
  const setMedia = createcampaign_default((state) => state.setMedia);
  const CampaignName = (0, import_react2.useRef)(null);
  const campinfo = (0, import_react2.useRef)(null);
  const StartDate = (0, import_react2.useRef)(null);
  const EndDate = (0, import_react2.useRef)(null);
  const [sd, setsd] = (0, import_react2.useState)("");
  const [ed, seted] = (0, import_react2.useState)("");
  const [cn, setcn] = (0, import_react2.useState)("");
  const campaignTypeId = createcampaign_default((state) => state.campaignTypeId);
  const CostPerPost = (0, import_react2.useRef)(null);
  const [cpp, setcpp] = (0, import_react2.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4 grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-black tect-xl font-medium text-left my-4", children: campaginType == "5" ? "Single post" : "Bidding" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: data.platform.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: ` p-2 rounded-lg shrink-0 ${platform.includes(val.id) ? "bg-white shadow-xl " : "bg-gray-200"} `,
            onClick: () => {
              setPlatform(val.id);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: data.platform[i]["platformLogoUrl"],
                alt: "error",
                className: "w-10 h-10"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/spbd.tsx",
                lineNumber: 90,
                columnNumber: 19
              },
              this
            )
          },
          i,
          false,
          {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 79,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap my-6", children: mediatype.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: `shrink-0 cursor-pointer text-primary text-lg text-center font-normal w-28 py-1  rounded-xl ${val == media ? "bg-white shadow-xl" : "bg-gray-100"}`,
            onClick: () => {
              setMedia(val);
            },
            children: val
          },
          i,
          false,
          {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 102,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign name" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          ref: CampaignName,
          type: "text",
          className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
          onChange: (val) => setcn(val.target.value)
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 119,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign info" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "textarea",
        {
          ref: campinfo,
          className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 128,
          columnNumber: 11
        },
        this
      ),
      campaginType == "6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Start date" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 135,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "date",
              ref: StartDate,
              className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 w-full p-2",
              onChange: (val) => setsd(val.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 138,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "End date" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: EndDate,
              type: "date",
              className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
              onChange: (val) => seted(val.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 150,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Cost per post" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: CostPerPost,
            type: "number",
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
            onChange: (val) => setcpp(val.target.value)
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 163,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 172,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/spbd.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Campaign name" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: cn == "" ? "--------" : cn }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 185,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Cost per post" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 191,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: cpp == "" ? "--------" : cpp }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this),
      campaginType == "6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Start date" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 199,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 200,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: sd == "" ? "--------" : new Date(sd).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 201,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 198,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "End date" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 214,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: ed == "" ? "--------" : new Date(ed).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 215,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 212,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 197,
        columnNumber: 15
      }, this) : null,
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 229,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
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
                fileName: "app/routes/home/createcampaign/spbd.tsx",
                lineNumber: 240,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 234,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 248,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: async () => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
              if (platform == null || platform.length == 0 || platform == void 0) {
                setError("Select a platform");
              } else if (media == null || media == "" || media == void 0) {
                setError("Select a media");
              } else if (((_a = CampaignName.current) == null ? void 0 : _a.value) == null || ((_b = CampaignName.current) == null ? void 0 : _b.value) == void 0 || ((_c = CampaignName.current) == null ? void 0 : _c.value) == "") {
                setError("Enter campaign name");
              } else if (((_d = CampaignName.current) == null ? void 0 : _d.value.length) < 4) {
                setError("Campaign should be more then 3 character.");
              } else if (((_e = campinfo.current) == null ? void 0 : _e.value) == null || ((_f = campinfo.current) == null ? void 0 : _f.value) == void 0 || ((_g = campinfo.current) == null ? void 0 : _g.value) == "") {
                setError("Add campaign info");
              } else if (((_h = CostPerPost.current) == null ? void 0 : _h.value) == null || ((_i = CostPerPost.current) == null ? void 0 : _i.value) == void 0 || ((_j = CostPerPost.current) == null ? void 0 : _j.value) == "") {
                setError("Fill the cost per post");
              } else {
                if (campaginType == "6") {
                  const x = new Date(StartDate.current.value);
                  const y = new Date(EndDate.current.value);
                  const pass_date = x > y;
                  if (((_k = StartDate.current) == null ? void 0 : _k.value) == null || ((_l = StartDate.current) == null ? void 0 : _l.value) == void 0 || ((_m = StartDate.current) == null ? void 0 : _m.value) == "") {
                    setError("Enter planed starting date");
                  } else if (pass_date) {
                    setError("Start date should be less then end date");
                  } else if (((_n = EndDate.current) == null ? void 0 : _n.value) == null || ((_o = EndDate.current) == null ? void 0 : _o.value) == void 0 || ((_p = EndDate.current) == null ? void 0 : _p.value) == "") {
                    setError("Enter planed end date");
                  } else {
                    const req = {
                      userId,
                      brandUserId: userId,
                      brandId,
                      cityId: "0",
                      currencyId: "0",
                      categories: "0",
                      minEligibleRating: "0",
                      maxEligibleRating: "0",
                      minReach: "0",
                      maxReach: "0",
                      costPerPost: (_q = CostPerPost.current) == null ? void 0 : _q.value,
                      totalBudget: "0",
                      dos: "0",
                      donts: "0",
                      mentions: "0",
                      hashtags: "0",
                      campaignTypeId,
                      campaignName: (_r = CampaignName.current) == null ? void 0 : _r.value,
                      campaignInfo: (_s = campinfo.current) == null ? void 0 : _s.value,
                      platforms: platform.join(),
                      startAt: (_t = StartDate.current) == null ? void 0 : _t.value,
                      endAt: (_u = EndDate.current) == null ? void 0 : _u.value
                    };
                    const data2 = await axios_default({
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
                    if (data2.data.status == false) {
                      setError(data2.data.message);
                    } else {
                      const req1 = {
                        brandId,
                        campaignId: data2.data.data.campaign.id,
                        remark: "init bid",
                        bidamount: (_v = CostPerPost.current) == null ? void 0 : _v.value
                      };
                      const data1 = await axios_default({
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
                          Accept: "*"
                        }
                      });
                      if (data1.data.status == false) {
                        setError(data1.data.message);
                      } else {
                        return navigator(
                          `/home/createcampaign/inviteinf/${data2.data.data.campaign.id}`
                        );
                      }
                    }
                  }
                } else {
                  const req = {
                    userId,
                    brandUserId: userId,
                    brandId,
                    cityId: "0",
                    currencyId: "0",
                    categories: "0",
                    minEligibleRating: "0",
                    maxEligibleRating: "0",
                    minReach: "0",
                    maxReach: "0",
                    costPerPost: (_w = CostPerPost.current) == null ? void 0 : _w.value,
                    totalBudget: "0",
                    dos: "0",
                    donts: "0",
                    mentions: "0",
                    hashtags: "0",
                    campaignTypeId,
                    campaignName: (_x = CampaignName.current) == null ? void 0 : _x.value,
                    campaignInfo: (_y = campinfo.current) == null ? void 0 : _y.value,
                    platforms: platform.join(),
                    startAt: new Date().toLocaleDateString(),
                    endAt: new Date().toLocaleDateString()
                  };
                  const data2 = await axios_default({
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
                  if (data2.data.status == false) {
                    setError(data2.data.message);
                  } else {
                    return navigator(
                      `/home/createcampaign/inviteinf/${data2.data.data.campaign.id}`
                    );
                  }
                }
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Create",
                textColor: "text-white",
                background: "bg-primary",
                width: "w-full"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/spbd.tsx",
                lineNumber: 427,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 249,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 233,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/spbd.tsx",
      lineNumber: 178,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/spbd.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/spbd.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/spbd.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
};
var spbd_default = Spbd;
export {
  spbd_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/spbd-OYGECCDX.js.map
