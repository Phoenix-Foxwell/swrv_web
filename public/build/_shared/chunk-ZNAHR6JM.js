import {
  LoginButton1,
  NavLinks,
  intronavstate_default
} from "/build/_shared/chunk-3F3TBTM2.js";
import {
  FontAwesomeIcon,
  faBars,
  faRemove
} from "/build/_shared/chunk-UBTZ3VBL.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/components/home/navbar/mynavbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MyNavBar = () => {
  const isOpen = intronavstate_default((state) => state.isOpen);
  const changMenu = intronavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center px-6 sm:px-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-4/5 lg:w-4/6 flex flex-row  my-4", children: [
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
              fileName: "app/components/home/navbar/mynavbar.tsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/home/navbar/mynavbar.tsx",
          lineNumber: 14,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center mr-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/swrvlogo.png", className: "w-32 lg:w-38" }, void 0, false, {
        fileName: "app/components/home/navbar/mynavbar.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mynavbar.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "place-content-center hidden md:grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLinks, {}, void 0, false, {
        fileName: "app/components/home/navbar/mynavbar.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mynavbar.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/home/navbar/mynavbar.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoginButton1, {}, void 0, false, {
        fileName: "app/components/home/navbar/mynavbar.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/navbar/mynavbar.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${isOpen ? "block" : "hidden"} md:hidden `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLinks, {}, void 0, false, {
      fileName: "app/components/home/navbar/mynavbar.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/home/navbar/mynavbar.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/mynavbar.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/mynavbar.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

export {
  MyNavBar
};
//# sourceMappingURL=/build/_shared/chunk-ZNAHR6JM.js.map
