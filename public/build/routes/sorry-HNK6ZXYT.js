import {
  Link,
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

// app/routes/sorry.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Sorry = () => {
  const userid = useLoaderData().userid;
  const [error, setError] = (0, import_react2.useState)(null);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const sendmain = async () => {
    setError((val) => null);
    setSus((val) => null);
    const sendverificationmail = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/send-otp`,
      data: { userId: userid },
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
    if (sendverificationmail.data.status) {
      setSus((val) => "E-mail sent successfully.");
    } else {
      setError((val) => sendverificationmail.data.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#eeeeee] min-h-screen p-6 grid place-items-center w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white rounded-lg shadow-lg p-10 mt-6 relative ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-center text-[100px] font-black text-stroke text-white  absolute translate-y-40 grid place-items-center top-0 left-0 translate-x-52", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Sorry !!" }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 50,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 49,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-content-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/avatar/sorry.png", alt: "error", className: "h-[300px]" }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 55,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 54,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-normal text-gray-500 text-left w-96", children: "Your email is not verified kindly verify your email before proceeding" }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 58,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 57,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 w-full justify-center mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: sendmain,
          className: "text-white text-lg bg-primary rounded-md py-1 px-2",
          children: "Resend E-Mail"
        },
        void 0,
        false,
        {
          fileName: "app/routes/sorry.tsx",
          lineNumber: 63,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/contact", className: "text-white text-lg bg-primary rounded-md py-1 px-2", children: "Contact-US" }, void 0, false, {
        fileName: "app/routes/sorry.tsx",
        lineNumber: 66,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 62,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/logout", className: "text-white text-xl bg-secondary rounded-md py-1 px-2", children: "Login" }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 69,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 68,
      columnNumber: 21
    }, this),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 73,
      columnNumber: 25
    }, this),
    sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
      fileName: "app/routes/sorry.tsx",
      lineNumber: 79,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sorry.tsx",
    lineNumber: 48,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/sorry.tsx",
    lineNumber: 47,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/sorry.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this);
};
var sorry_default = Sorry;
export {
  sorry_default as default
};
//# sourceMappingURL=/build/routes/sorry-HNK6ZXYT.js.map
