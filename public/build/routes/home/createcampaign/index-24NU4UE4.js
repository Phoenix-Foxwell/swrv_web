import {
  createcampaign_default
} from "/build/_shared/chunk-OGSCUSLT.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import "/build/_shared/chunk-G6FD4XLU.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faInfoCircle
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

// app/routes/home/createcampaign/index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step1 = () => {
  const navigate = useNavigate();
  const [error, setError] = (0, import_react2.useState)(false);
  const data = useLoaderData();
  const catdata = data.data;
  const campaginType = createcampaign_default((state) => state.campaignTypeId);
  const setCampaginType = createcampaign_default(
    (state) => state.setCampaignTypeId
  );
  const [camptype, setCamptype] = (0, import_react2.useState)("0");
  const platform = createcampaign_default((state) => state.platform);
  const setPlatform = createcampaign_default((state) => state.setPlatform);
  const nextpage = () => {
    if (camptype === "0") {
      setError(true);
    } else if (camptype === "5" || camptype === "6") {
      setCampaginType(camptype);
      return navigate("/home/createcampaign/spbd");
    } else {
      setCampaginType(camptype);
      return navigate("/home/createcampaign/step2");
    }
  };
  (0, import_react2.useEffect)(() => {
    setCamptype(campaginType);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 p-2 border-red-500 border rounded-xl flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        FontAwesomeIcon,
        {
          className: "text-red-500",
          icon: faInfoCircle
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/index.tsx",
          lineNumber: 52,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/index.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-red-500 text-lg font-normal text-center", children: "Please select at least one category." }, void 0, false, {
        fileName: "app/routes/home/createcampaign/index.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/index.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black font-normal text-lg text-center", children: "Select one below" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/index.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => nextpage(), children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          CusButton,
          {
            text: "Next",
            textColor: "text-white",
            background: "bg-primary",
            fontwidth: "font-bold"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/index.tsx",
            lineNumber: 69,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/index.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-4", children: catdata.map((val, i) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: `shadow-xl rounded-xl w-72 bg-white my-4 ${camptype == catdata[i]["id"] ? "border-2 border-gray-400" : ""} h-[350px]`,
          onClick: () => setCamptype(catdata[i]["id"]),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: catdata[i]["categoryPicUrl"],
                alt: "error",
                className: "rounded-t-xl w-full h-40"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/index.tsx",
                lineNumber: 87,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-left font-medium text-lg", children: catdata[i]["categoryName"] }, void 0, false, {
                fileName: "app/routes/home/createcampaign/index.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-400 font-normal text-left", children: catdata[i]["categoryDescription"] }, void 0, false, {
                fileName: "app/routes/home/createcampaign/index.tsx",
                lineNumber: 96,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/createcampaign/index.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this)
          ]
        },
        i,
        true,
        {
          fileName: "app/routes/home/createcampaign/index.tsx",
          lineNumber: 80,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/index.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/index.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
};
var createcampaign_default2 = Step1;
export {
  createcampaign_default2 as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/index-24NU4UE4.js.map
