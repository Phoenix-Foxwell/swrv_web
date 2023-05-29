import {
  LoginButton,
  NavLinks,
  intronavstate_default
} from "/build/_shared/chunk-N6I4VE4T.js";
import {
  FontAwesomeIcon,
  faBars,
  faRemove
} from "/build/_shared/chunk-ESAEJTTP.js";
import {
  Link
} from "/build/_shared/chunk-ZUW3WGBY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6U7EOCF3.js";

// app/components/home/navbar/intronavbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var IntroNavBar = () => {
  const isOpen = intronavstate_default((state) => state.isOpen);
  const changMenu = intronavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center px-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full m-2 flex flex-row bg-white rounded-md p-2 px-6 shadow-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "mr-4 grid place-items-center md:hidden cursor-pointer",
          onClick: () => {
            changMenu(!isOpen);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            FontAwesomeIcon,
            {
              className: "text-lg text-primary text-center font-bold",
              icon: isOpen ? faRemove : faBars
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/intronavbar.tsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/home/navbar/intronavbar.tsx",
          lineNumber: 14,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center mr-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/swrvlogo.png", className: "w-32 lg:w-38" }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "place-content-center hidden md:grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLinks, {}, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoginButton, {}, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/navbar/intronavbar.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${isOpen ? "block" : "hidden"} md:hidden `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLinks, {}, void 0, false, {
      fileName: "app/components/home/navbar/intronavbar.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/home/navbar/intronavbar.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

export {
  IntroNavBar
};
//# sourceMappingURL=/build/_shared/chunk-2IOE7VD6.js.map
