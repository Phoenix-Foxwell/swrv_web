import {
  ReactToastify_default
} from "/build/_shared/chunk-5SSIYQM7.js";
import "/build/_shared/chunk-Z6G3P7XF.js";
import {
  FontAwesomeIcon,
  faEye,
  faEyeSlash,
  faUser
} from "/build/_shared/chunk-4NSQR6PB.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/adminlogin.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: ReactToastify_default }];
}
var AdminLogin = () => {
  const [pass, setPass] = (0, import_react2.useState)(false);
  const handelPassword = (value) => {
    setPass((val) => value);
  };
  const retdata = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen w-full grid place-items-center bg-[#1b2028]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-2xl font-medium my-3 text-center", children: "SWRV ADMIN" }, void 0, false, {
      fileName: "app/routes/adminlogin.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 bg-[#31353f] rounded-lg p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-xl font-medium my-3 text-center", children: "Login" }, void 0, false, {
        fileName: "app/routes/adminlogin.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white flex gap-4 my-4 items-center border-2 border-gray-400 rounded-md py-1 px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faUser }, void 0, false, {
            fileName: "app/routes/adminlogin.tsx",
            lineNumber: 45,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "username", className: "w-full bg-transparent outline-none focus:bg-transparent fill-none border-none", placeholder: "Enter the username..", autoComplete: "off" }, void 0, false, {
            fileName: "app/routes/adminlogin.tsx",
            lineNumber: 46,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/adminlogin.tsx",
          lineNumber: 44,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white flex gap-4 my-4 items-center border-2 border-gray-400 rounded-md py-1 px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor-pointer", onClick: () => handelPassword(!pass), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: pass ? faEyeSlash : faEye }, void 0, false, {
            fileName: "app/routes/adminlogin.tsx",
            lineNumber: 50,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/adminlogin.tsx",
            lineNumber: 49,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: pass ? "text" : "password", name: "password", className: "w-full bg-transparent outline-none focus:bg-transparent", placeholder: "Enter the password..", autoComplete: "off" }, void 0, false, {
            fileName: "app/routes/adminlogin.tsx",
            lineNumber: 52,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/adminlogin.tsx",
          lineNumber: 48,
          columnNumber: 29
        }, this),
        (retdata == null ? void 0 : retdata.message) == "" || (retdata == null ? void 0 : retdata.message) == null || (retdata == null ? void 0 : retdata.message) == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: retdata.message }, void 0, false, {
          fileName: "app/routes/adminlogin.tsx",
          lineNumber: 55,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-center text-white font-bold w-full py-1 border-2 border-gray-300 hover:bg-gray-300 hover:text-[#222239]", type: "submit", children: "SUBMIT" }, void 0, false, {
          fileName: "app/routes/adminlogin.tsx",
          lineNumber: 58,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/adminlogin.tsx",
          lineNumber: 57,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/adminlogin.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/adminlogin.tsx",
      lineNumber: 41,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/adminlogin.tsx",
    lineNumber: 39,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/adminlogin.tsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/adminlogin.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this);
};
var adminlogin_default = AdminLogin;
export {
  adminlogin_default as default,
  links
};
//# sourceMappingURL=/build/routes/adminlogin-CK4UXE75.js.map
