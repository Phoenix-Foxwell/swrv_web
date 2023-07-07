import {
  faBandcamp,
  faFacebook
} from "/build/_shared/chunk-COPH3TPG.js";
import {
  create
} from "/build/_shared/chunk-CNTCBH2R.js";
import {
  FontAwesomeIcon,
  faBarChart,
  faBars,
  faBlog,
  faChartPie,
  faCity,
  faDollarSign,
  faFlag,
  faHandsHelping,
  faHome,
  faLanguage,
  faLocationPin,
  faMap,
  faPeopleGroup,
  faPhone,
  faRightToBracket,
  faShop,
  faTasks,
  faUser,
  faXmark
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-5CHSURAX.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/state/siderbar.ts
var AsideBarStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value })),
  currentIndex: 0 /* None */,
  changeTab: (value) => set((state) => ({ currentIndex: value }))
}));
var siderbar_default = AsideBarStore;

// app/routes/admin/home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DashBoard = () => {
  const userData = useLoaderData().user;
  const isMobile = siderbar_default((state) => state.isOpen);
  const changeMobile = siderbar_default((state) => state.change);
  const useravatar = userData.userPicUrl == null || userData.userPicUrl == void 0 || userData.userPicUrl == "" || userData.userPicUrl == "0" ? "/images/avatar/user.png" : userData.userPicUrl;
  const asideindex = siderbar_default((state) => state.currentIndex);
  const achangeindex = siderbar_default((state) => state.changeTab);
  const navigator = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full p-4 bg-[#31353f] min-h-screen gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `w-full md:w-60 bg-[#1b2028] rounded-md p-2 md:flex flex-col absolute top-0 left-0 min-h-full md:h-auto md:relative ${isMobile ? "grid place-items-center" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:flex flex-col md:h-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-3xl", children: "SWRV" }, void 0, false, {
              fileName: "app/routes/admin/home.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-bold", children: "ADMIN PANEL" }, void 0, false, {
              fileName: "app/routes/admin/home.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin/home.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col grow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home",
                onClick: () => achangeindex(0 /* None */),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faBarChart,
                    title: "DASHBOARD",
                    active: asideindex === 0 /* None */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 82,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/home",
                onClick: () => achangeindex(1 /* HOME */),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faHome,
                    title: "HOME",
                    active: asideindex === 1 /* HOME */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 93,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/brand/",
                onClick: () => {
                  achangeindex(13 /* BRAND */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faBandcamp,
                    title: "BRAND",
                    active: asideindex === 13 /* BRAND */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 107,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/campaign/",
                onClick: () => {
                  achangeindex(15 /* CAMPAIGN */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faFlag,
                    title: "CAMPAIGN",
                    active: asideindex === 15 /* CAMPAIGN */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 120,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/user/",
                onClick: () => {
                  achangeindex(14 /* USER */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faUser,
                    title: "USER",
                    active: asideindex === 14 /* USER */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 133,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/category/",
                onClick: () => {
                  achangeindex(3 /* CATEGORY */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faChartPie,
                    title: "CATEGORY",
                    active: asideindex === 3 /* CATEGORY */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 148,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/market/",
                onClick: () => {
                  achangeindex(5 /* MARKET */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faShop,
                    title: "MARKET",
                    active: asideindex === 5 /* MARKET */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 161,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/team/",
                onClick: () => {
                  achangeindex(11 /* TEAM */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faPeopleGroup,
                    title: "TEAM",
                    active: asideindex === 11 /* TEAM */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 175,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/blognews/",
                onClick: () => {
                  achangeindex(12 /* BLOGNEWS */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faBlog,
                    title: "BLOG NEWS EVENT",
                    active: asideindex === 12 /* BLOGNEWS */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 196,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 189,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/country/",
                onClick: () => {
                  achangeindex(4 /* COUNTRY */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faMap,
                    title: "COUNTRY",
                    active: asideindex === 4 /* COUNTRY */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 210,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 203,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/state/",
                onClick: () => {
                  achangeindex(6 /* STATE */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faLocationPin,
                    title: "STATE",
                    active: asideindex === 6 /* STATE */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 223,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 216,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/city/",
                onClick: () => {
                  achangeindex(2 /* CITY */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faCity,
                    title: "CITY",
                    active: asideindex === 2 /* CITY */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 236,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 229,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/language/",
                onClick: () => {
                  achangeindex(7 /* LANGUAGES */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faLanguage,
                    title: "LANGUAGES",
                    active: asideindex === 7 /* LANGUAGES */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 249,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 242,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/currency/",
                onClick: () => {
                  achangeindex(8 /* CURRENCY */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faDollarSign,
                    title: "CURRENCY",
                    active: asideindex === 8 /* CURRENCY */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 262,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 255,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/platforms/",
                onClick: () => {
                  achangeindex(9 /* PLATFORMS */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faFacebook,
                    title: "PLATFORMS",
                    active: asideindex === 9 /* PLATFORMS */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 275,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 268,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/campaigntype/",
                onClick: () => {
                  achangeindex(10 /* CAMPAIGNTYPE */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faBars,
                    title: "CAMPAIGN TYPE",
                    active: asideindex === 10 /* CAMPAIGNTYPE */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 288,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 281,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/support/",
                onClick: () => {
                  achangeindex(17 /* SUPPORT */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faHandsHelping,
                    title: "SUPPORT",
                    active: asideindex === 17 /* SUPPORT */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 301,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 294,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/contact/",
                onClick: () => {
                  achangeindex(18 /* CONTACT */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faPhone,
                    title: "CONTACT",
                    active: asideindex === 18 /* CONTACT */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 314,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 307,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/dispute/",
                onClick: () => {
                  achangeindex(16 /* DISPUTE */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faTasks,
                    title: "DISPUTE",
                    active: asideindex === 16 /* DISPUTE */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 327,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 320,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/admin/home.tsx",
              lineNumber: 333,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/adminlogout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              SidebarTab,
              {
                icon: faRightToBracket,
                title: "LOGOUT",
                active: false
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 335,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/admin/home.tsx",
              lineNumber: 334,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => changeMobile(false),
                className: `md:hidden flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faXmark,
                      className: "w-6"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home.tsx",
                      lineNumber: 345,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 349,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 341,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-full grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TopNavBar, { name: userData.userName, pic: useravatar }, void 0, false, {
        fileName: "app/routes/admin/home.tsx",
        lineNumber: 355,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/admin/home.tsx",
        lineNumber: 356,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/admin/home.tsx",
        lineNumber: 357,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 354,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin/home.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
};
var home_default = DashBoard;
var SidebarTab = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `w-60 md:w-auto flex gap-2 items-center my-1 b  py-1 px-2 rounded-md text-sm cursor-pointer ${props.active ? "border border-green-400 g-green-500 bg-opacity-10 text-green-500 " : "text-gray-300 hover:bg-[#31353f] "}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: props.icon, className: "w-6" }, void 0, false, {
          fileName: "app/routes/admin/home.tsx",
          lineNumber: 379,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: props.title }, void 0, false, {
          fileName: "app/routes/admin/home.tsx",
          lineNumber: 380,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 373,
      columnNumber: 5
    },
    this
  );
};
var TopNavBar = (props) => {
  const isMobile = siderbar_default((state) => state.isOpen);
  const changeMobile = siderbar_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#1b2028] text-xl w-full text-center text-white rounded-md py-2 font-medium flex px-2 gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px md:hidden", onClick: () => changeMobile(!isMobile), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faBars }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 397,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 395,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faHome }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 400,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 399,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center hidden md:block", children: "Home" }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 402,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 403,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: props.pic,
        alt: "avatar",
        className: "w-6 h-6 rounded-md object-cover object-center"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home.tsx",
        lineNumber: 417,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 416,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white font-medium text-lg text-center", children: props.name }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 423,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home.tsx",
    lineNumber: 394,
    columnNumber: 5
  }, this);
};
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-10 bg-[#1b2028] rounded-md text-center grid place-items-center text-white font-medium text-lg", children: "SWRV ADMIN PANEL" }, void 0, false, {
    fileName: "app/routes/admin/home.tsx",
    lineNumber: 432,
    columnNumber: 5
  }, this);
};
export {
  home_default as default
};
//# sourceMappingURL=/build/routes/admin/home-2M374JBO.js.map
