import {
  sidebar_default
} from "/build/_shared/chunk-L4EYGIH2.js";
import {
  faDraft2digital
} from "/build/_shared/chunk-COPH3TPG.js";
import {
  create
} from "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faBars,
  faBell,
  faBinoculars,
  faChevronLeft,
  faChevronRight,
  faCircleQuestion,
  faEnvelopeOpen,
  faFolder,
  faHandHoldingDollar,
  faHeart,
  faHome,
  faRemove,
  faRightFromBracket,
  faUserGroup
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/components/home/footer/homefooter.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var HomeFooter = () => {
  const year = new Date().getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex py-6 px-8 flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: [
      "\xA9 ",
      year,
      " SWRV Licensing AB - All rights reserved."
    ] }, void 0, true, {
      fileName: "app/components/home/footer/homefooter.tsx",
      lineNumber: 9,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/components/home/footer/homefooter.tsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center my-2 md:my-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tos", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }, void 0, false, {
        fileName: "app/components/home/footer/homefooter.tsx",
        lineNumber: 12,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/pp", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }, void 0, false, {
        fileName: "app/components/home/footer/homefooter.tsx",
        lineNumber: 13,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/footer/homefooter.tsx",
      lineNumber: 11,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/footer/homefooter.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/footer/homefooter.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
};

// app/state/home/sidebarstate.ts
var SideBarStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var sidebarstate_default = SideBarStore;

// app/components/home/sidebar/sidebar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var SideBar = (props) => {
  const currentPage = sidebar_default((state) => state.currentIndex);
  const sidebar = sidebar_default((state) => state.changeTab);
  const isOpen = sidebarstate_default((state) => state.isOpen);
  const changeSidebar = sidebarstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      className: ` ${isOpen ? "w-60" : "w-20"} h-screen p-2 fixed top-0 left-0 md:block hidden`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col py-8 px-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            onClick: () => {
              changeSidebar(!isOpen);
            },
            className: "w-full flex cursor-pointer",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
                fileName: "app/components/home/sidebar/sidebar.tsx",
                lineNumber: 45,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: `w-10 h-10 rounded-xl grid place-items-center text-white text-lg font-bold my-1 bg-[#053497] `,
                  children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      FontAwesomeIcon,
                      {
                        icon: isOpen ? faChevronLeft : faChevronRight
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/home/sidebar/sidebar.tsx",
                        lineNumber: 50,
                        columnNumber: 15
                      },
                      this
                    ),
                    " "
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/home/sidebar/sidebar.tsx",
                  lineNumber: 46,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/home/sidebar/sidebar.tsx",
            lineNumber: 39,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          {
            to: "/home/mycampaings",
            onClick: () => {
              sidebar(1 /* MyCampaigns */);
              changeSidebar(false);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              NavTab,
              {
                title: "My campaigns",
                isOpen,
                isActive: currentPage === 1 /* MyCampaigns */,
                icon: faFolder
              },
              void 0,
              false,
              {
                fileName: "app/components/home/sidebar/sidebar.tsx",
                lineNumber: 62,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/home/sidebar/sidebar.tsx",
            lineNumber: 55,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          {
            to: "/home/findcampaign",
            onClick: () => {
              sidebar(2 /* FindCampaigns */);
              changeSidebar(false);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              NavTab,
              {
                title: "Find campaigns",
                isOpen,
                isActive: currentPage === 2 /* FindCampaigns */,
                icon: faBinoculars
              },
              void 0,
              false,
              {
                fileName: "app/components/home/sidebar/sidebar.tsx",
                lineNumber: 76,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/home/sidebar/sidebar.tsx",
            lineNumber: 69,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          {
            to: "/home/inbox",
            onClick: () => {
              sidebar(3 /* Inbox */);
              changeSidebar(false);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              NavTab,
              {
                title: "Inbox",
                isOpen,
                isActive: currentPage === 3 /* Inbox */,
                icon: faEnvelopeOpen
              },
              void 0,
              false,
              {
                fileName: "app/components/home/sidebar/sidebar.tsx",
                lineNumber: 90,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/home/sidebar/sidebar.tsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        ),
        props.isBrand ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Link,
            {
              to: "/home/revenues",
              onClick: () => {
                sidebar(4 /* MyEarnings */);
                changeSidebar(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                NavTab,
                {
                  title: "My earnings",
                  isOpen,
                  isActive: currentPage === 4 /* MyEarnings */,
                  icon: faHandHoldingDollar
                },
                void 0,
                false,
                {
                  fileName: "app/components/home/sidebar/sidebar.tsx",
                  lineNumber: 108,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/home/sidebar/sidebar.tsx",
              lineNumber: 101,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Link,
            {
              to: "/home/drafts",
              onClick: () => {
                sidebar(5 /* Drafts */);
                changeSidebar(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                NavTab,
                {
                  title: "Drafts",
                  isOpen,
                  isActive: currentPage === 5 /* Drafts */,
                  icon: faDraft2digital
                },
                void 0,
                false,
                {
                  fileName: "app/components/home/sidebar/sidebar.tsx",
                  lineNumber: 122,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/home/sidebar/sidebar.tsx",
              lineNumber: 115,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Link,
            {
              to: "/home/favourite",
              onClick: () => {
                sidebar(6 /* Favourite */);
                changeSidebar(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                NavTab,
                {
                  title: "Favourite",
                  isOpen,
                  isActive: currentPage === 6 /* Favourite */,
                  icon: faHeart
                },
                void 0,
                false,
                {
                  fileName: "app/components/home/sidebar/sidebar.tsx",
                  lineNumber: 136,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/home/sidebar/sidebar.tsx",
              lineNumber: 129,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/home/sidebar/sidebar.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          {
            to: "/home/invite",
            onClick: () => {
              sidebar(7 /* Invite */);
              changeSidebar(false);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              NavTab,
              {
                title: "Invite",
                isOpen,
                isActive: currentPage === 7 /* Invite */,
                icon: faUserGroup
              },
              void 0,
              false,
              {
                fileName: "app/components/home/sidebar/sidebar.tsx",
                lineNumber: 153,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/home/sidebar/sidebar.tsx",
            lineNumber: 146,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/components/home/sidebar/sidebar.tsx",
          lineNumber: 160,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          {
            to: "/home/help",
            onClick: () => {
              sidebar(8 /* Help */);
              changeSidebar(false);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              NavTab,
              {
                title: "Help",
                isOpen,
                isActive: currentPage === 8 /* Help */,
                icon: faCircleQuestion
              },
              void 0,
              false,
              {
                fileName: "app/components/home/sidebar/sidebar.tsx",
                lineNumber: 168,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/home/sidebar/sidebar.tsx",
            lineNumber: 161,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          NavTab,
          {
            title: "Logout",
            isOpen,
            isActive: currentPage === 0 /* None */,
            icon: faRightFromBracket
          },
          void 0,
          false,
          {
            fileName: "app/components/home/sidebar/sidebar.tsx",
            lineNumber: 176,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/home/sidebar/sidebar.tsx",
          lineNumber: 175,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/sidebar/sidebar.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 33,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};
var NavTab = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      className: `${props.isOpen ? "w-full" : "w-10"} h-10 rounded-xl ${props.isOpen ? "flex items-center " : "grid place-items-center"}  text-white text-lg font-bold my-1 ${props.isActive ? "bg-[#053497]" : ""} ${props.isOpen ? "px-4" : ""}`,
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: props.icon }, void 0, false, {
          fileName: "app/components/home/sidebar/sidebar.tsx",
          lineNumber: 208,
          columnNumber: 9
        }, this),
        " ",
        props.isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "ml-4 font-normal text-md", children: props.title }, void 0, false, {
          fileName: "app/components/home/sidebar/sidebar.tsx",
          lineNumber: 210,
          columnNumber: 11
        }, this) : null,
        " "
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 200,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 199,
    columnNumber: 5
  }, this);
};

// app/state/home/mobilenavstate.ts
var MobileNavStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var mobilenavstate_default = MobileNavStore;

// app/state/home/notification.ts
var NotificationStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var notification_default = NotificationStore;

// app/components/home/notification.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Notification = () => {
  const open = notification_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${open ? "block" : "hidden"} absolute w-72 h-80 top-0 right-0 translate-y-16 p-4 bg-white rounded-xl shadow-xl`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NotificationTab, {}, void 0, false, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 8,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
};
var notification_default2 = Notification;
var NotificationTab = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full border-b-2 border-gray-400 flex py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "w-14 h-14 rounded-lg" }, void 0, false, {
      fileName: "app/components/home/notification.tsx",
      lineNumber: 22,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/home/notification.tsx",
      lineNumber: 21,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-500 font-semibold text-sm leading-normal w-40", children: "Adidas have created a campaign for you would you like to accept?" }, void 0, false, {
      fileName: "app/components/home/notification.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this);
};

// app/components/home/navbar/mainnavbar.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var MainNavBar = (props) => {
  const navigator = useNavigate();
  const currentPage = sidebar_default((state) => state.currentIndex);
  const sidebar = sidebar_default((state) => state.changeTab);
  const isOpen = mobilenavstate_default((state) => state.isOpen);
  const changMenu = mobilenavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white w-full shadow-xl rounded-2xl ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full  flex px-4 items-center py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "mr-4 md:hidden cursor-pointer",
          onClick: () => {
            changMenu(!isOpen);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            FontAwesomeIcon,
            {
              className: "text-lg text-primary text-center font-bold",
              icon: isOpen ? faRemove : faBars
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 53,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 47,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex place-items-center rounded-xl items-end mr-6 w-60 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/home/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "img",
          {
            src: "/images/swrvlogo.png",
            className: "w-28 inline-block rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/components/home/navbar/mainnavbar.tsx",
            lineNumber: 61,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-primary text-xs font-normal", children: props.role[0].toUpperCase() + props.role.slice(1).toLowerCase() }, void 0, false, {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        MainNavRight,
        {
          avatar: props.avatar,
          role: props.role,
          name: props.name
        },
        void 0,
        false,
        {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 72,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "md:hidden block cursor-pointer",
          onClick: () => {
            sidebar(0 /* None */);
            navigator("/home");
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            FontAwesomeIcon,
            {
              className: "text-primary text-xl",
              icon: faHome
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 84,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 77,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: `w-full p-2 transition-all md:hidden ${isOpen ? "" : "hidden"} `,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col items-center  py-8 px-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Link,
            {
              to: "/home/mycampaings",
              onClick: () => {
                sidebar(1 /* MyCampaigns */);
                changMenu(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                NavTab,
                {
                  title: "My campaigns",
                  isOpen: true,
                  isActive: currentPage == 1 /* MyCampaigns */,
                  icon: faFolder
                },
                void 0,
                false,
                {
                  fileName: "app/components/home/navbar/mainnavbar.tsx",
                  lineNumber: 104,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 97,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Link,
            {
              to: "/home/findcampaign",
              onClick: () => {
                sidebar(2 /* FindCampaigns */);
                changMenu(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                NavTab,
                {
                  title: "Find campaigns",
                  isOpen: true,
                  isActive: currentPage == 2 /* FindCampaigns */,
                  icon: faBinoculars
                },
                void 0,
                false,
                {
                  fileName: "app/components/home/navbar/mainnavbar.tsx",
                  lineNumber: 118,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 111,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Link,
            {
              to: "/home/inbox",
              onClick: () => {
                sidebar(3 /* Inbox */);
                changMenu(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                NavTab,
                {
                  title: "Inbox",
                  isOpen: true,
                  isActive: currentPage == 3 /* Inbox */,
                  icon: faEnvelopeOpen
                },
                void 0,
                false,
                {
                  fileName: "app/components/home/navbar/mainnavbar.tsx",
                  lineNumber: 132,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 125,
              columnNumber: 15
            },
            this
          ),
          props.isBrand ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Link,
              {
                to: "/home/revenues",
                onClick: () => {
                  sidebar(4 /* MyEarnings */);
                  changMenu(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  NavTab,
                  {
                    title: "My earnings",
                    isOpen: true,
                    isActive: currentPage == 4 /* MyEarnings */,
                    icon: faHandHoldingDollar
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/home/navbar/mainnavbar.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/home/navbar/mainnavbar.tsx",
                lineNumber: 141,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Link,
              {
                to: "/home/drafts",
                onClick: () => {
                  sidebar(5 /* Drafts */);
                  changMenu(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  NavTab,
                  {
                    title: "Drafts",
                    isOpen: true,
                    isActive: currentPage == 5 /* Drafts */,
                    icon: faDraft2digital
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/home/navbar/mainnavbar.tsx",
                    lineNumber: 162,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/home/navbar/mainnavbar.tsx",
                lineNumber: 155,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Link,
              {
                to: "/home/favourite",
                onClick: () => {
                  sidebar(6 /* Favourite */);
                  changMenu(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  NavTab,
                  {
                    title: "Favourite",
                    isOpen: true,
                    isActive: currentPage == 6 /* Favourite */,
                    icon: faHeart
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/home/navbar/mainnavbar.tsx",
                    lineNumber: 176,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/home/navbar/mainnavbar.tsx",
                lineNumber: 169,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/home/navbar/mainnavbar.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Link,
            {
              to: "/home/invite",
              onClick: () => {
                sidebar(7 /* Invite */);
                changMenu(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                NavTab,
                {
                  title: "Invite",
                  isOpen: true,
                  isActive: currentPage == 7 /* Invite */,
                  icon: faUserGroup
                },
                void 0,
                false,
                {
                  fileName: "app/components/home/navbar/mainnavbar.tsx",
                  lineNumber: 192,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 185,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Link,
            {
              to: "/home/help",
              onClick: () => {
                sidebar(8 /* Help */);
                changMenu(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                NavTab,
                {
                  title: "Help",
                  isOpen: true,
                  isActive: currentPage == 8 /* Help */,
                  icon: faCircleQuestion
                },
                void 0,
                false,
                {
                  fileName: "app/components/home/navbar/mainnavbar.tsx",
                  lineNumber: 206,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 199,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            NavTab,
            {
              title: "Logout",
              isOpen: true,
              isActive: currentPage == 0 /* None */,
              icon: faRightFromBracket
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 214,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/home/navbar/mainnavbar.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 91,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
};
var MainNavRight = (props) => {
  const navigator = useNavigate();
  const sidebar = sidebar_default((state) => state.changeTab);
  const open = notification_default((state) => state.isOpen);
  const changeNotification = notification_default((state) => state.change);
  const role = props.role == "BRAND" ? "Admin" : "";
  const name = props.name.split("@")[0];
  const avatar = props.avatar == "0" || props.avatar == null || props.avatar == void 0 || props.avatar == "" ? "/images/avatar/user.png" : props.avatar;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "md:flex hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid place-items-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: "cursor-pointer",
        onClick: () => {
          sidebar(0 /* None */);
          navigator("/home");
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-primary text-xl",
            icon: faHome
          },
          void 0,
          false,
          {
            fileName: "app/components/home/navbar/mainnavbar.tsx",
            lineNumber: 262,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 255,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 254,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-4" }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 268,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid place-items-center relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          onClick: () => changeNotification(!open),
          className: "cursor-pointer",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            FontAwesomeIcon,
            {
              className: "text-primary text-xl",
              icon: faBell
            },
            void 0,
            false,
            {
              fileName: "app/components/home/navbar/mainnavbar.tsx",
              lineNumber: 274,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 270,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(notification_default2, {}, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 279,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 269,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-8 mx-4 bg-primary w-[2px]", children: " " }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 281,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-left text-md text-black font-normal", children: name }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 283,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 282,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        src: avatar,
        alt: "user avatar",
        className: "w-10 h-10 rounded object-cover"
      },
      void 0,
      false,
      {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 287,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 286,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 253,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 252,
    columnNumber: 5
  }, this);
};

// app/routes/home.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var HomePage = () => {
  const userdata = useLoaderData();
  const isbrand = userdata.user.role.code != 10;
  const isOpen = sidebarstate_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex md:relative bg-background", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SideBar, { isBrand: isbrand }, void 0, false, {
      fileName: "app/routes/home.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "div",
      {
        className: `w-full transition-all  md:relative ${isOpen ? "md:ml-60" : "md:ml-20"}  p-2 pr-4`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            MainNavBar,
            {
              isBrand: isbrand,
              name: userdata.user.userName,
              role: userdata.user.role.name,
              avatar: userdata.user.pic
            },
            void 0,
            false,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 30,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/routes/home.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HomeFooter, {}, void 0, false, {
            fileName: "app/routes/home.tsx",
            lineNumber: 37,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/home.tsx",
        lineNumber: 25,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};
var home_default = HomePage;
export {
  home_default as default
};
//# sourceMappingURL=/build/routes/home-HIO5B67D.js.map
