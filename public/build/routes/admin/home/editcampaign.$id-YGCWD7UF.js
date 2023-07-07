import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-5CHSURAX.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-Z6G3P7XF.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/admin/home/editcampaign.$id.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Home = () => {
  const camapaign = useLoaderData().camapaign;
  const id = useLoaderData().id;
  const [error, setError] = (0, import_react2.useState)("");
  const campaignNameRef = (0, import_react2.useRef)(null);
  const campaignInfoRef = (0, import_react2.useRef)(null);
  const minEligibleRatingRef = (0, import_react2.useRef)(null);
  const minReachRef = (0, import_react2.useRef)(null);
  const maxReachRef = (0, import_react2.useRef)(null);
  const costPerPostRef = (0, import_react2.useRef)(null);
  const plannedBudgetRef = (0, import_react2.useRef)(null);
  const minTargetRef = (0, import_react2.useRef)(null);
  const totalTargetRef = (0, import_react2.useRef)(null);
  const totalBudgetRef = (0, import_react2.useRef)(null);
  const navigator = useNavigate();
  (0, import_react2.useEffect)(() => {
    campaignNameRef.current.value = camapaign["name"];
    campaignInfoRef.current.value = camapaign["info"];
    minEligibleRatingRef.current.value = camapaign["minEligibleRating"];
    minReachRef.current.value = camapaign["minReach"];
    maxReachRef.current.value = camapaign["maxReach"];
    costPerPostRef.current.value = camapaign["costPerPost"];
    plannedBudgetRef.current.value = camapaign["plannedBudget"];
    minTargetRef.current.value = camapaign["minTarget"];
    totalTargetRef.current.value = camapaign["totalTarget"];
    totalBudgetRef.current.value = camapaign["totalBudget"];
  }, []);
  const submit = async () => {
    const userdata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/edit-campaign`,
      data: {
        id,
        update: {
          campaignName: campaignNameRef.current.value,
          campaignInfo: campaignInfoRef.current.value,
          minEligibleRating: minEligibleRatingRef.current.value,
          minReach: minReachRef.current.value,
          maxReach: maxReachRef.current.value,
          costPerPost: costPerPostRef.current.value,
          plannedBudget: plannedBudgetRef.current.value,
          minTarget: minTargetRef.current.value,
          totalTarget: totalTargetRef.current.value,
          totalBudget: totalBudgetRef.current.value
        }
      }
    });
    if (userdata.data.status == false) {
      setError(userdata.data.message);
    } else {
      navigator(-1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Edit Campaign" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Name" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: campaignNameRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 80,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Name" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: campaignInfoRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 85,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Info" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: minEligibleRatingRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 90,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Min Reach" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: minReachRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 96,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Max Reach" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: maxReachRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 101,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Cost per Post" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 105,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: costPerPostRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 106,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Planned Budget" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 110,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: plannedBudgetRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 111,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Min Target" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: minTargetRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 116,
        columnNumber: 13
      },
      this
    ),
    ".",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Total Target" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: totalTargetRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 121,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Campaign Total Budget" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 125,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: totalBudgetRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editcampaign.$id.tsx",
        lineNumber: 126,
        columnNumber: 13
      },
      this
    ),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 133,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white py-2 px-4 rounded-md bg-cyan-500 w-96 text-center", onClick: submit, children: "UPDATE" }, void 0, false, {
      fileName: "app/routes/admin/home/editcampaign.$id.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/editcampaign.$id.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this);
};
var editcampaign_id_default = Home;
export {
  editcampaign_id_default as default
};
//# sourceMappingURL=/build/routes/admin/home/editcampaign.$id-YGCWD7UF.js.map
