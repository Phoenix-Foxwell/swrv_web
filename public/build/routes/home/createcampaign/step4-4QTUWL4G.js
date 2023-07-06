import {
  require_react_switch
} from "/build/_shared/chunk-IUMXW2I4.js";
import {
  createcampaign_default
} from "/build/_shared/chunk-WZNTS5FP.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import "/build/_shared/chunk-WML2SMV7.js";
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

// app/routes/home/createcampaign/step4.tsx
var import_react2 = __toESM(require_react());
var import_react_switch = __toESM(require_react_switch());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step4 = () => {
  const brand_name = useLoaderData().user;
  const [bn, setbn] = (0, import_react2.useState)("");
  const [cn, setcn] = (0, import_react2.useState)("");
  const [pb, setpb] = (0, import_react2.useState)("");
  const [cpp, setcpp] = (0, import_react2.useState)("");
  const [sd, setsd] = (0, import_react2.useState)("");
  const [ed, seted] = (0, import_react2.useState)("");
  const [minr, setminr] = (0, import_react2.useState)("");
  const [maxr, setmaxr] = (0, import_react2.useState)("");
  const navigator = useNavigate();
  const [active, setActive] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const CampaignName = (0, import_react2.useRef)(null);
  const campaignName = createcampaign_default((state) => state.campaignName);
  const setCampaignName = createcampaign_default((state) => state.setCampaignName);
  const PlanedBudget = (0, import_react2.useRef)(null);
  const planedBudget = createcampaign_default((state) => state.planedBudget);
  const setPlanedBudget = createcampaign_default((state) => state.setPlanedBudget);
  const CostPerPost = (0, import_react2.useRef)(null);
  const costPerPost = createcampaign_default((state) => state.costPerPost);
  const setCostPerPost = createcampaign_default((state) => state.setCostPerPost);
  const StartDate = (0, import_react2.useRef)(null);
  const startDate = createcampaign_default((state) => state.startDate);
  const setStartDate = createcampaign_default((state) => state.setStartDate);
  const EndDate = (0, import_react2.useRef)(null);
  const endDate = createcampaign_default((state) => state.endDate);
  const setEndDate = createcampaign_default((state) => state.setEndDate);
  const MinReach = (0, import_react2.useRef)(null);
  const minReach = createcampaign_default((state) => state.minReach);
  const setMinReach = createcampaign_default((state) => state.setMinReach);
  const MaxReact = (0, import_react2.useRef)(null);
  const maxReact = createcampaign_default((state) => state.maxReact);
  const setMaxReact = createcampaign_default((state) => state.setMaxReact);
  const publicGlobally = createcampaign_default((state) => state.publicGlobally);
  const setPublicGlobally = createcampaign_default(
    (state) => state.setPublicGlobally
  );
  (0, import_react2.useEffect)(() => {
    var _a, _b, _c, _d, _e, _f, _g;
    setbn(brand_name.brand.name);
    if (((_a = CampaignName.current) == null ? void 0 : _a.value) != null) {
      CampaignName.current.value = campaignName;
    }
    if (((_b = PlanedBudget.current) == null ? void 0 : _b.value) != null) {
      PlanedBudget.current.value = planedBudget.toString();
    }
    if (((_c = CostPerPost.current) == null ? void 0 : _c.value) != null) {
      CostPerPost.current.value = costPerPost.toString();
    }
    if (((_d = StartDate.current) == null ? void 0 : _d.value) != null) {
      StartDate.current.value = startDate;
    }
    if (((_e = EndDate.current) == null ? void 0 : _e.value) != null) {
      EndDate.current.value = endDate;
    }
    if (((_f = MinReach.current) == null ? void 0 : _f.value) != null) {
      MinReach.current.value = minReach.toString();
    }
    if (((_g = MaxReact.current) == null ? void 0 : _g.value) != null) {
      MaxReact.current.value = maxReact.toString();
    }
    setActive(publicGlobally);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Create campaign" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
        "Campaign name  ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 107,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 106,
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
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 109,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
            "Planed budget  ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 119,
              columnNumber: 32
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: PlanedBudget,
              type: "number",
              className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2  lg:w-72",
              onChange: (val) => setpb(val.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 121,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
            "Cost per post  ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 131,
              columnNumber: 32
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: CostPerPost,
              type: "number",
              className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72",
              onChange: (val) => setcpp(val.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 133,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
            "Start date  ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 144,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "date",
              ref: StartDate,
              className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 w-full p-2 lg:w-72",
              onChange: (val) => setsd(val.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 146,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
            "End date  ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 156,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: EndDate,
              type: "date",
              className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72",
              onChange: (val) => seted(val.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 158,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
            "Min reach  ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 169,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: MinReach,
              type: "number",
              className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72",
              onChange: (val) => setminr(val.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 171,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: [
            "Max reach  ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 181,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: MaxReact,
              type: "number",
              className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72",
              onChange: (val) => setmaxr(val.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step4.tsx",
              lineNumber: 183,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react_switch.default,
          {
            onChange: () => setActive(!active),
            checked: active,
            checkedIcon: false,
            uncheckedIcon: false,
            onColor: "#03125E"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 192,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Publish Globally" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step4.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 213,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Brand name" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 217,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 218,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: bn }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Campaign name" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 223,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: cn == "" ? "--------" : cn }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 224,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Planed budget" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: pb == "" ? "--------" : pb }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 231,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 228,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Cost per post" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 237,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: cpp == "" ? "--------" : cpp }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 238,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 235,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Start date" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 243,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 244,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: sd == "" ? "--------" : new Date(sd).toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric"
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 245,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 242,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "End date" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 257,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 258,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: ed == "" ? "--------" : new Date(ed).toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric"
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 259,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 256,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Min reach" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 271,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 272,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: minr == "" ? "--------" : minr }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 273,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 270,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Max reach" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 278,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 279,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: maxr == "" ? "--------" : maxr }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 280,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 277,
        columnNumber: 13
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 285,
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
                fileName: "app/routes/home/createcampaign/step4.tsx",
                lineNumber: 296,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 290,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 304,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: () => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
              const x = new Date(StartDate.current.value);
              const y = new Date(EndDate.current.value);
              const pass_date = x > y;
              if (((_a = CampaignName.current) == null ? void 0 : _a.value) == null || ((_b = CampaignName.current) == null ? void 0 : _b.value) == void 0 || ((_c = CampaignName.current) == null ? void 0 : _c.value) == "") {
                setError("Enter campaign name");
              } else if (((_d = CampaignName.current) == null ? void 0 : _d.value.length) < 4) {
                setError("Campaign should be more then 3 character.");
              } else if (((_e = PlanedBudget.current) == null ? void 0 : _e.value) == null || ((_f = PlanedBudget.current) == null ? void 0 : _f.value) == void 0 || ((_g = PlanedBudget.current) == null ? void 0 : _g.value) == "" || parseInt((_h = PlanedBudget.current) == null ? void 0 : _h.value) == 0) {
                setError("Enter planned budget");
              } else if (((_i = CostPerPost.current) == null ? void 0 : _i.value) == null || ((_j = CostPerPost.current) == null ? void 0 : _j.value) == void 0 || ((_k = CostPerPost.current) == null ? void 0 : _k.value) == "" || parseInt((_l = CostPerPost.current) == null ? void 0 : _l.value) == 0) {
                setError("Enter planned cost per post");
              } else if (((_m = StartDate.current) == null ? void 0 : _m.value) == null || ((_n = StartDate.current) == null ? void 0 : _n.value) == void 0 || ((_o = StartDate.current) == null ? void 0 : _o.value) == "") {
                setError("Enter planned starting date");
              } else if (((_p = EndDate.current) == null ? void 0 : _p.value) == null || ((_q = EndDate.current) == null ? void 0 : _q.value) == void 0 || ((_r = EndDate.current) == null ? void 0 : _r.value) == "") {
                setError("Enter planned end date");
              } else if (((_s = MinReach.current) == null ? void 0 : _s.value) == null || ((_t = MinReach.current) == null ? void 0 : _t.value) == void 0 || ((_u = MinReach.current) == null ? void 0 : _u.value) == "" || parseInt((_v = MinReach.current) == null ? void 0 : _v.value) == 0) {
                setError("Enter planned min reach");
              } else if (((_w = MaxReact.current) == null ? void 0 : _w.value) == null || ((_x = MaxReact.current) == null ? void 0 : _x.value) == void 0 || ((_y = MaxReact.current) == null ? void 0 : _y.value) == "" || parseInt((_z = MaxReact.current) == null ? void 0 : _z.value) == 0) {
                setError("Enter planned max reach");
              } else if (parseInt((_A = MinReach.current) == null ? void 0 : _A.value) > parseInt((_B = MaxReact.current) == null ? void 0 : _B.value)) {
                setError("Max react should be greater than min reach");
              } else if (pass_date) {
                setError("Start date should be less then end date");
              } else {
                setCampaignName(CampaignName.current.value);
                setPlanedBudget(parseInt(CostPerPost.current.value));
                setCostPerPost(parseInt(CostPerPost.current.value));
                setStartDate(StartDate.current.value);
                setEndDate(EndDate.current.value);
                setMinReach(parseInt((_C = MinReach.current) == null ? void 0 : _C.value));
                setMaxReact(parseInt((_D = MaxReact.current) == null ? void 0 : _D.value));
                setPublicGlobally(active);
                navigator("/home/createcampaign/step5");
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Next",
                textColor: "text-white",
                background: "bg-secondary",
                width: "w-full",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/step4.tsx",
                lineNumber: 379,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 305,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 289,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step4.tsx",
      lineNumber: 212,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step4.tsx",
      lineNumber: 211,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step4.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/step4.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
};
var step4_default = Step4;
export {
  step4_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step4-4QTUWL4G.js.map
