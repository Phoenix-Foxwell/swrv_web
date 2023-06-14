import {
  firstinput_default
} from "/build/_shared/chunk-RAFJ3YWD.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  Outlet,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/profilecomplete.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UserEditBox = () => {
  const userdata = useLoaderData();
  const isBrand = userdata.user.role["code"] == "50" ? true : false;
  const index = firstinput_default((state) => state.index);
  const [img, setImg] = (0, import_react2.useState)("/images/avatar/profile1.png");
  const navigator = useLocation();
  (0, import_react2.useEffect)(() => {
    if (navigator.pathname == "/home/profilecomplete/" || navigator.pathname == "/home/profilecomplete") {
      setImg("/images/avatar/profile1.png");
    } else if (navigator.pathname == "/home/profilecomplete/secondpage/" || navigator.pathname == "/home/profilecomplete/secondpage") {
      setImg("/images/avatar/profile2.png");
    } else if (navigator.pathname == "/home/profilecomplete/thirdpage/" || navigator.pathname == "/home/profilecomplete/thirdpage") {
      setImg("/images/avatar/profile3.png");
    } else if (navigator.pathname == "/home/profilecomplete/forthpage/" || navigator.pathname == "/home/profilecomplete/forthpage") {
      setImg("/images/avatar/profile4.png");
    } else if (navigator.pathname == "/home/profilecomplete/fifthpage/" || navigator.pathname == "/home/profilecomplete/fifthpage") {
      setImg("/images/avatar/profile5.png");
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white rounded-xl p-4 shadow-xl mt-6", children: [
    index == 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full  rounded-lg text-center shadow-lg my-4 text-lg font-medium p-2 ", children: "0% Completed" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this) : isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full  rounded-lg flex shadow-lg my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `text-lg text-center font-medium p-2 bg-secondary text-white  ${index == 1 ? "w-0" : ""} ${index == 2 ? "w-1/5" : ""} ${index == 3 ? "w-2/5" : ""} ${index == 4 ? "w-3/5" : ""} ${index == 5 ? "w-4/5" : ""} ${index == 6 ? "w-full" : ""} rounded-xl`,
        children: [
          index == 2 ? "20% Completed" : "",
          index == 3 ? "40% Completed" : "",
          index == 4 ? "60% Completed" : "",
          index == 5 ? "80% Completed" : "",
          index == 6 ? "100% Completed" : ""
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 66,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 65,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full  rounded-lg flex shadow-lg my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `text-lg text-center font-medium p-2 bg-secondary text-white  ${index == 1 ? "w-0" : ""} ${index == 2 ? "w-1/4" : ""} ${index == 3 ? "w-2/4" : ""} ${index == 4 ? "w-3/4" : ""} ${index == 5 ? "w-full" : ""} rounded-xl`,
        children: [
          index == 2 ? "25% Completed" : "",
          index == 3 ? "50% Completed" : "",
          index == 4 ? "75% Completed" : "",
          index == 5 ? "100% Completed" : ""
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 81,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 80,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6  w-full hidden md:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden place-items-center lg:grid ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: img, alt: "error", className: "h-[400px]" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "pt-4 text-3xl text-primary text-left font-semibold", children: "Welcome" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pt-2 text-black text-xl font-normal", children: "Thank you for the confirmation, Login with your account and start searching for the brands." }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl px-2 py-4 flex flex-row items-center lg:flex-col justify-between overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProfileCompleteBox,
          {
            isActive: index == 1 ? true : false,
            positionumber: "01",
            title: "Info"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete.tsx",
            lineNumber: 110,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProfileCompleteBox,
          {
            isActive: index == 2 ? true : false,
            positionumber: "02",
            title: "Audience"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete.tsx",
            lineNumber: 115,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProfileCompleteBox,
          {
            isActive: index == 3 ? true : false,
            positionumber: "03",
            title: "Social"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete.tsx",
            lineNumber: 120,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProfileCompleteBox,
          {
            isActive: index == 4 ? true : false,
            positionumber: "04",
            title: "Document"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete.tsx",
            lineNumber: 125,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProfileCompleteBox,
          {
            isActive: index == 5 ? true : false,
            positionumber: "05",
            title: "Contact"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete.tsx",
            lineNumber: 130,
            columnNumber: 15
          },
          this
        ),
        isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProfileCompleteBox,
          {
            isActive: index == 6 ? true : false,
            positionumber: "06",
            title: "Users"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete.tsx",
            lineNumber: 136,
            columnNumber: 17
          },
          this
        ) : null
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
};
var profilecomplete_default = UserEditBox;
var ProfileCompleteBox = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-3 py-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `grid place-items-center h-16 w-16 shadow-md rounded-md ${props.isActive ? "bg-secondary" : "bg-gray-200"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "p",
          {
            className: `font-medium text-xl ${props.isActive ? "text-white" : "text-black"}`,
            children: props.positionumber
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete.tsx",
            lineNumber: 166,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 162,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "h4",
      {
        className: `text-sm text-center ${props.isActive ? "text-black" : "text-gray-500"} mt-2`,
        children: props.title
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 173,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 161,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 160,
    columnNumber: 5
  }, this);
};
export {
  profilecomplete_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete-OOJJWTKP.js.map
