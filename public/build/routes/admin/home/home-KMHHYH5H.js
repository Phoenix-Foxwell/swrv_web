import {
  useLoaderData
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

// app/routes/admin/home/home.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Home = () => {
  const home = useLoaderData().home[0];
  const [error, setError] = (0, import_react2.useState)("");
  const home1Ref = (0, import_react2.useRef)(null);
  const home2Ref = (0, import_react2.useRef)(null);
  const home3Ref = (0, import_react2.useRef)(null);
  const home4Ref = (0, import_react2.useRef)(null);
  const home5Ref = (0, import_react2.useRef)(null);
  const home6Ref = (0, import_react2.useRef)(null);
  const home7Ref = (0, import_react2.useRef)(null);
  const home8Ref = (0, import_react2.useRef)(null);
  const home9Ref = (0, import_react2.useRef)(null);
  const home10Ref = (0, import_react2.useRef)(null);
  const home11Ref = (0, import_react2.useRef)(null);
  const home12Ref = (0, import_react2.useRef)(null);
  const home13Ref = (0, import_react2.useRef)(null);
  const home14Ref = (0, import_react2.useRef)(null);
  const home15Ref = (0, import_react2.useRef)(null);
  const home16Ref = (0, import_react2.useRef)(null);
  const home17Ref = (0, import_react2.useRef)(null);
  const home18Ref = (0, import_react2.useRef)(null);
  const home19Ref = (0, import_react2.useRef)(null);
  const home20Ref = (0, import_react2.useRef)(null);
  const home21Ref = (0, import_react2.useRef)(null);
  const home22Ref = (0, import_react2.useRef)(null);
  const home23Ref = (0, import_react2.useRef)(null);
  const home24Ref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    home1Ref.current.value = home["text_1"];
    home2Ref.current.value = home["text_2"];
    home3Ref.current.value = home["text_3"];
    home4Ref.current.value = home["text_4"];
    home5Ref.current.value = home["text_5"];
    home6Ref.current.value = home["text_6"];
    home7Ref.current.value = home["text_7"];
    home8Ref.current.value = home["text_8"];
    home9Ref.current.value = home["text_9"];
    home10Ref.current.value = home["text_10"];
    home11Ref.current.value = home["text_11"];
    home12Ref.current.value = home["text_12"];
    home13Ref.current.value = home["text_13"];
    home14Ref.current.value = home["text_14"];
    home15Ref.current.value = home["text_15"];
    home16Ref.current.value = home["text_16"];
    home17Ref.current.value = home["text_17"];
    home18Ref.current.value = home["text_18"];
    home19Ref.current.value = home["text_19"];
    home20Ref.current.value = home["text_20"];
    home21Ref.current.value = home["text_21"];
    home22Ref.current.value = home["text_22"];
    home23Ref.current.value = home["text_23"];
    home24Ref.current.value = home["text_24"];
  }, []);
  const submit = async () => {
    const userdata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/edit-home`,
      data: {
        update: {
          text_1: home1Ref.current.value,
          text_2: home2Ref.current.value,
          text_3: home3Ref.current.value,
          text_4: home4Ref.current.value,
          text_5: home5Ref.current.value,
          text_6: home6Ref.current.value,
          text_7: home7Ref.current.value,
          text_8: home8Ref.current.value,
          text_9: home9Ref.current.value,
          text_10: home10Ref.current.value,
          text_11: home11Ref.current.value,
          text_12: home12Ref.current.value,
          text_13: home13Ref.current.value,
          text_14: home14Ref.current.value,
          text_15: home15Ref.current.value,
          text_16: home16Ref.current.value,
          text_17: home17Ref.current.value,
          text_18: home18Ref.current.value,
          text_19: home19Ref.current.value,
          text_20: home20Ref.current.value,
          text_21: home21Ref.current.value,
          text_22: home22Ref.current.value,
          text_23: home23Ref.current.value,
          text_24: home24Ref.current.value
        }
      }
    });
    if (userdata.data.status == false) {
      setError(userdata.data.message);
    } else {
      window.location.reload();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Edit Home Page" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: home1Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 114,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home2Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 118,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Edit relationships" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 123,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: home3Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 124,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: home4Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 128,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home5Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 132,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Edit marketing platform" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home6Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 139,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home7Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 143,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home8Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 147,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home9Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 151,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home10Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 155,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Edit explore by category" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 160,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home11Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 161,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home12Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 165,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home13Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 169,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home14Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 173,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home15Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 177,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home16Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 181,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home17Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 185,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home18Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 189,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Edit influencer marketing" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 193,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 194,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: home19Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 195,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: home20Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 199,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home21Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 203,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home22Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 207,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home23Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 211,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: home24Ref,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/home.tsx",
        lineNumber: 215,
        columnNumber: 13
      },
      this
    ),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 221,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white py-2 px-4 rounded-md bg-cyan-500 w-96 text-center", onClick: submit, children: "UPDATE" }, void 0, false, {
      fileName: "app/routes/admin/home/home.tsx",
      lineNumber: 225,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/home.tsx",
    lineNumber: 111,
    columnNumber: 9
  }, this);
};
var home_default = Home;
export {
  home_default as default
};
//# sourceMappingURL=/build/routes/admin/home/home-KMHHYH5H.js.map
