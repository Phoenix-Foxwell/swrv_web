import {
  require_dist
} from "/build/_shared/chunk-7HWNPYKE.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-R3MWT2S5.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/components/utils/raiting.tsx
var import_react = __toESM(require_react());
var import_react_simple_star_rating = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MyRating = (props) => {
  const [crating, setCRating] = (0, import_react.useState)(0);
  const [arating, setARating] = (0, import_react.useState)(0);
  const [prating, setPRating] = (0, import_react.useState)(0);
  const [error, setError] = (0, import_react.useState)(null);
  const handlecReset = (rate) => {
    setCRating(rate);
  };
  const handleaReset = (rate) => {
    setARating(rate);
  };
  const handlepReset = (rate) => {
    setPRating(rate);
  };
  const submit = async () => {
    if (crating == 0) {
      setError("Communication rating should be more then 0.");
    } else if (arating == 0) {
      setError("Approvals rating should be more then 0.");
    } else if (prating == 0) {
      setError("Payments rating should be more then 0.");
    } else {
      setError(null);
      const req = {
        influencerId: props.influencerId,
        brandId: props.brandId,
        campaignId: props.campaignId,
        rating1: crating.toString(),
        rating2: arating.toString(),
        rating3: prating.toString(),
        reviewType: props.reviewType,
        remark: "User To Brand"
      };
      const apireq = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/add-review`,
        data: req
      });
      if (apireq.data.status == false) {
        setError(apireq.data.message);
      } else {
        window.location.reload();
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 bg-white rounded-md my-2 px-6 py-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-800 text-center font-semibold", children: "Rate your Experience" }, void 0, false, {
      fileName: "app/components/utils/raiting.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[2px] bg-gray-400 w-full my-2" }, void 0, false, {
      fileName: "app/components/utils/raiting.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-gray-600", children: "Communication" }, void 0, false, {
      fileName: "app/components/utils/raiting.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react_simple_star_rating.Rating,
      {
        initialValue: crating,
        onClick: handlecReset,
        size: 35
      },
      void 0,
      false,
      {
        fileName: "app/components/utils/raiting.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-gray-600", children: "Approvals" }, void 0, false, {
      fileName: "app/components/utils/raiting.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react_simple_star_rating.Rating,
      {
        initialValue: arating,
        onClick: handleaReset,
        size: 35
      },
      void 0,
      false,
      {
        fileName: "app/components/utils/raiting.tsx",
        lineNumber: 76,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-gray-600", children: "Payments" }, void 0, false, {
      fileName: "app/components/utils/raiting.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react_simple_star_rating.Rating,
      {
        initialValue: prating,
        onClick: handlepReset,
        size: 35
      },
      void 0,
      false,
      {
        fileName: "app/components/utils/raiting.tsx",
        lineNumber: 82,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-6" }, void 0, false, {
      fileName: "app/components/utils/raiting.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-rose-500 bg-opacity-10 border-2 text-center border-rose-500 rounded-md text-rose-500 text-lg font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/components/utils/raiting.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "text-white bg-secondary rounded-md py-1 px-4 text-xl",
        onClick: submit,
        children: "SUBMIT"
      },
      void 0,
      false,
      {
        fileName: "app/components/utils/raiting.tsx",
        lineNumber: 93,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/utils/raiting.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/utils/raiting.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
};
var raiting_default = MyRating;

export {
  raiting_default
};
//# sourceMappingURL=/build/_shared/chunk-5F6QS5MW.js.map
