import {
  create
} from "/build/_shared/chunk-MWIY3DQR.js";
import {
  FontAwesomeIcon,
  faRightToBracket
} from "/build/_shared/chunk-XG566DYW.js";
import {
  NavLink
} from "/build/_shared/chunk-LXJMA5PD.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KG56QLKG.js";

// app/state/home/intronavstate.ts
var IntroNavStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var intronavstate_default = IntroNavStore;

// app/components/home/navbar/navbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var NavLinks = () => {
  const changMenu = intronavstate_default((state) => state.change);
  const closeMenu = () => {
    changMenu(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center my-4 md:my-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `flex flex-col items-center gap-y-4 md:flex-row text-primary font-semibold text-sm`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          NavLink,
          {
            onClick: () => closeMenu,
            to: "/whatyouget",
            className: "px-2",
            children: "What you get"
          },
          void 0,
          false,
          {
            fileName: "app/components/home/navbar/navbar.tsx",
            lineNumber: 40,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          NavLink,
          {
            onClick: () => closeMenu,
            to: "/howitworks",
            className: "px-2",
            children: "How it works"
          },
          void 0,
          false,
          {
            fileName: "app/components/home/navbar/navbar.tsx",
            lineNumber: 47,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { onClick: () => closeMenu, to: "/about", className: "px-2", children: "About" }, void 0, false, {
          fileName: "app/components/home/navbar/navbar.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { onClick: () => closeMenu, to: "/contact", className: "px-2", children: "Contact" }, void 0, false, {
          fileName: "app/components/home/navbar/navbar.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { onClick: () => closeMenu, to: "/blogs", className: "px-2", children: "Blogs" }, void 0, false, {
          fileName: "app/components/home/navbar/navbar.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 37,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};
var LoginButton = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center bg-primary py-2 px-4 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-white text-md font-normar cursor-pointer`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faRightToBracket }, void 0, false, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    " Login"
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 73,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 72,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
};
var LoginButton1 = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center py-4 lg:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-black text-md font-normar cursor-pointer`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faRightToBracket }, void 0, false, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this),
    " Login"
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 84,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
};

export {
  intronavstate_default,
  NavLinks,
  LoginButton,
  LoginButton1
};
//# sourceMappingURL=/build/_shared/chunk-VS62I6XO.js.map
