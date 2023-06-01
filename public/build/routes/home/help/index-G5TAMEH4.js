import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/help/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Help = () => {
  const name = useLoaderData().user.userName.split("@")[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full rounded-xl shadow-xl bg-[#10BCE2] flex my-4 p-10 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-5xl text-primary font-bold", children: [
        "Hi ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white", children: [
          " @",
          name,
          ","
        ] }, void 0, true, {
          fileName: "app/routes/home/help/index.tsx",
          lineNumber: 17,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/home/help/index.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        " How can we help?"
      ] }, void 0, true, {
        fileName: "app/routes/home/help/index.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow grid place-items-center md:p-10 my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          className: "placeholder:text-black bg-white opacity-30  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
          placeholder: "search"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/help/index.tsx",
          lineNumber: 21,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/help/index.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/help/index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full rounded-xl shadow-xl bg-white flex my-4 p-10 md:flex-row flex-col md:gap-x-10 gap-y-6 md:gap-y-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-black font-bold", children: "Using SWRV" }, void 0, false, {
          fileName: "app/routes/home/help/index.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/home/help/manage_your_account",
            className: "block text-xl text-gray-400 font-bold mt-2",
            children: "Manage your account"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/help/index.tsx",
            lineNumber: 31,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/home/help/campaigns",
            className: "block text-xl text-gray-400 font-bold mt-2",
            children: "Campaigns"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/help/index.tsx",
            lineNumber: 37,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/home/help/safety_and_security",
            className: "block text-xl text-gray-400 font-bold mt-2",
            children: "Safety and security"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/help/index.tsx",
            lineNumber: 43,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/home/help/rules_and_policies",
            className: "block text-xl text-gray-400 font-bold mt-2",
            children: "Rules and policies"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/help/index.tsx",
            lineNumber: 49,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/help/index.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-black font-medium", children: "Everything you need to know so you can use SWRV like a pro" }, void 0, false, {
          fileName: "app/routes/home/help/index.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex md:gap-x-16 gap-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/home/help/registration",
                className: "block text-cyan-500 mt-2",
                children: "Registration"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/help/index.tsx",
                lineNumber: 62,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/home/help/verificaiton",
                className: "block text-cyan-500 mt-2",
                children: "Verification"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/help/index.tsx",
                lineNumber: 68,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/home/help/social_media_accounts",
                className: "block text-cyan-500 mt-2",
                children: "Social Media accounts"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/help/index.tsx",
                lineNumber: 74,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/home/help/analytics",
                className: "block text-cyan-500 mt-2",
                children: "Analytics"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/help/index.tsx",
                lineNumber: 80,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/home/help/brands",
                className: "block text-cyan-500 mt-2",
                children: "Brands"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/help/index.tsx",
                lineNumber: 86,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/help/index.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/home/help/campaign",
                className: "block text-cyan-500 mt-2",
                children: "Campaign"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/help/index.tsx",
                lineNumber: 94,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/home/help/payments",
                className: "block text-cyan-500 mt-2",
                children: "Payments"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/help/index.tsx",
                lineNumber: 100,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/help/index.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/help/index.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/help/index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/help/index.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/help/index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/help/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};
var help_default = Help;
export {
  help_default as default
};
//# sourceMappingURL=/build/routes/home/help/index-G5TAMEH4.js.map
