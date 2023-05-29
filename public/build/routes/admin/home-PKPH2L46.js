import {
  faBandcamp,
  faFacebook
} from "/build/_shared/chunk-ZBD7TGKE.js";
import {
  create
} from "/build/_shared/chunk-ZTDX66IZ.js";
import {
  FontAwesomeIcon,
  faBarChart,
  faBars,
  faBlog,
  faChartPie,
  faCity,
  faDollarSign,
  faFlag,
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
} from "/build/_shared/chunk-ESAEJTTP.js";
import "/build/_shared/chunk-NEYQYD5R.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-ZUW3WGBY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6U7EOCF3.js";

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
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-bold", children: "ADMIN PANEL" }, void 0, false, {
              fileName: "app/routes/admin/home.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin/home.tsx",
            lineNumber: 76,
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
                    lineNumber: 85,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 81,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/brand/",
                onClick: () => {
                  achangeindex(12 /* BRAND */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faBandcamp,
                    title: "BRAND",
                    active: asideindex === 12 /* BRAND */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 100,
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
                to: "/admin/home/campaign/",
                onClick: () => {
                  achangeindex(14 /* CAMPAIGN */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faFlag,
                    title: "CAMPAIGN",
                    active: asideindex === 14 /* CAMPAIGN */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 106,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/user/",
                onClick: () => {
                  achangeindex(13 /* USER */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faUser,
                    title: "USER",
                    active: asideindex === 13 /* USER */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 119,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/category/",
                onClick: () => {
                  achangeindex(2 /* CATEGORY */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faChartPie,
                    title: "CATEGORY",
                    active: asideindex === 2 /* CATEGORY */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 134,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/market/",
                onClick: () => {
                  achangeindex(4 /* MARKET */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faShop,
                    title: "MARKET",
                    active: asideindex === 4 /* MARKET */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 154,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 147,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/team/",
                onClick: () => {
                  achangeindex(10 /* TEAM */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faPeopleGroup,
                    title: "TEAM",
                    active: asideindex === 10 /* TEAM */
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
                to: "/admin/home/blognews/",
                onClick: () => {
                  achangeindex(11 /* BLOGNEWS */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faBlog,
                    title: "BLOG NEWS EVENT",
                    active: asideindex === 11 /* BLOGNEWS */
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
                to: "/admin/home/country/",
                onClick: () => {
                  achangeindex(3 /* COUNTRY */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faMap,
                    title: "COUNTRY",
                    active: asideindex === 3 /* COUNTRY */
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
                to: "/admin/home/state/",
                onClick: () => {
                  achangeindex(5 /* STATE */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faLocationPin,
                    title: "STATE",
                    active: asideindex === 5 /* STATE */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 202,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/city/",
                onClick: () => {
                  achangeindex(1 /* CITY */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faCity,
                    title: "CITY",
                    active: asideindex === 1 /* CITY */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 222,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 215,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/language/",
                onClick: () => {
                  achangeindex(6 /* LANGUAGES */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faLanguage,
                    title: "LANGUAGES",
                    active: asideindex === 6 /* LANGUAGES */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 235,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 228,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/currency/",
                onClick: () => {
                  achangeindex(7 /* CURRENCY */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faDollarSign,
                    title: "CURRENCY",
                    active: asideindex === 7 /* CURRENCY */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 248,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 241,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/platforms/",
                onClick: () => {
                  achangeindex(8 /* PLATFORMS */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faFacebook,
                    title: "PLATFORMS",
                    active: asideindex === 8 /* PLATFORMS */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 261,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 254,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/campaigntype/",
                onClick: () => {
                  achangeindex(9 /* CAMPAIGNTYPE */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faBars,
                    title: "CAMPAIGN TYPE",
                    active: asideindex === 9 /* CAMPAIGNTYPE */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 274,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 267,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/contact/",
                onClick: () => {
                  achangeindex(16 /* CONTACT */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faPhone,
                    title: "CONTACT",
                    active: asideindex === 16 /* CONTACT */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 287,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 280,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/admin/home/dispute/",
                onClick: () => {
                  achangeindex(15 /* DISPUTE */);
                  changeMobile(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  SidebarTab,
                  {
                    icon: faTasks,
                    title: "DISPUTE",
                    active: asideindex === 15 /* DISPUTE */
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 300,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 293,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/admin/home.tsx",
              lineNumber: 306,
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
                lineNumber: 308,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/admin/home.tsx",
              lineNumber: 307,
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
                      lineNumber: 318,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home.tsx",
                    lineNumber: 322,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home.tsx",
                lineNumber: 314,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home.tsx",
          lineNumber: 75,
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
        lineNumber: 328,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/admin/home.tsx",
        lineNumber: 329,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/admin/home.tsx",
        lineNumber: 330,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 327,
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
          lineNumber: 353,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: props.title }, void 0, false, {
          fileName: "app/routes/admin/home.tsx",
          lineNumber: 354,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 346,
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
      lineNumber: 371,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 369,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faHome }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 374,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 373,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center hidden md:block", children: "Home" }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 376,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 377,
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
        lineNumber: 391,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 390,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white font-medium text-lg text-center", children: props.name }, void 0, false, {
      fileName: "app/routes/admin/home.tsx",
      lineNumber: 397,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home.tsx",
    lineNumber: 368,
    columnNumber: 5
  }, this);
};
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-10 bg-[#1b2028] rounded-md text-center grid place-items-center text-white font-medium text-lg", children: "SWRV ADMIN PANEL" }, void 0, false, {
    fileName: "app/routes/admin/home.tsx",
    lineNumber: 406,
    columnNumber: 5
  }, this);
};
export {
  home_default as default
};
//# sourceMappingURL=/build/routes/admin/home-PKPH2L46.js.map
