import {
  createcampaign_default
} from "/build/_shared/chunk-WZNTS5FP.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-Z6G3P7XF.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/createcampaign/spbd.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Spbd = () => {
  const [backbox, setBackBox] = (0, import_react2.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-screen w-full grid place-items-center bg-black bg-opacity-25 fixed top-0 left-0 ${backbox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 bg-white rounded-xl shadow-xl p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-xl font-semibold", children: "Are you sure you want to go back." }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          navigator(-1);
        }, className: "bg-green-500 py-2 px-4 text-xl font-medium rounded-md text-white", children: "Yes" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setBackBox(false), className: "bg-red-500 py-2 px-4 text-xl font-medium rounded-md text-white", children: "NO" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/spbd.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/spbd.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4 grow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-black tect-xl font-medium text-left my-4", children: campaginType == "5" ? "Single post" : "Bidding" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 85,
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
                  lineNumber: 101,
                  columnNumber: 19
                },
                this
              )
            },
            i,
            false,
            {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 91,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 88,
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
              lineNumber: 113,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
          "Campaign name ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 127,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 126,
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
            lineNumber: 129,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
          "Campaign info ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 136,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 135,
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
            lineNumber: 138,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
              "Start date ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
                fileName: "app/routes/home/createcampaign/spbd.tsx",
                lineNumber: 145,
                columnNumber: 28
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 144,
              columnNumber: 15
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
                lineNumber: 147,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 154,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
              "End date ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
                fileName: "app/routes/home/createcampaign/spbd.tsx",
                lineNumber: 157,
                columnNumber: 26
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 156,
              columnNumber: 15
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
                lineNumber: 159,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 155,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
            "Cost per post ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 169,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 168,
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
              lineNumber: 171,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this),
        error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Campaign name" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: cn == "" ? "--------" : cn }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Cost per post" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: cpp == "" ? "--------" : cpp }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        campaginType == "6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Start date" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 207,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 208,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: sd == "" ? "--------" : new Date(sd).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric"
            }) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 209,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "End date" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 221,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: ed == "" ? "--------" : new Date(ed).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric"
            }) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 223,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 205,
          columnNumber: 15
        }, this) : null,
        error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: error }, void 0, false, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 237,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              onClick: () => {
                setBackBox(false);
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
                  lineNumber: 248,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 242,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/spbd.tsx",
            lineNumber: 256,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "w-full",
              onClick: async () => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
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
                      currencyId: "3",
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
                        await axios_default({
                          method: "post",
                          url: `http://bluelemontech.in:5563/notification/send`,
                          data: {
                            title: "New Campaign Created",
                            body: (_w = CampaignName.current) == null ? void 0 : _w.value,
                            to: "/topics/influencer"
                          }
                        });
                        return navigator(
                          `/home/createcampaign/inviteinf/${data2.data.data.campaign.id}`
                        );
                      }
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
                  lineNumber: 399,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/spbd.tsx",
              lineNumber: 257,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/spbd.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/spbd.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/spbd.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/spbd.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
};
var spbd_default = Spbd;
export {
  spbd_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/spbd-F2EFSP6D.js.map
