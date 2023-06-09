import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  Link
} from "/build/_shared/chunk-5CHSURAX.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/components/utils/campagincard.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CampaginCard = (props) => {
  const [color, setColor] = (0, import_react2.useState)("text-cyan-500");
  (0, import_react2.useEffect)(() => {
    if (props.category == "Unboxing") {
      setColor("text-cyan-500");
    } else if (props.category == "Paid Promotion") {
      setColor("text-rose-500");
    } else if (props.category == "Revealing") {
      setColor("text-green-500");
    } else if (props.category == "Sponsored") {
      setColor("text-indigo-500");
    } else if (props.category == "Campaign") {
      setColor("text-yellow-500");
    } else if (props.category == "Bidding") {
      setColor("text-blue-500");
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2 h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-stretch gap-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: props.image,
          alt: "error",
          className: "object-cover w-16 h-16 rounded"
        },
        void 0,
        false,
        {
          fileName: "app/components/utils/campagincard.tsx",
          lineNumber: 40,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/components/utils/campagincard.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `font-semibold text-left ${color}`, children: props.category }, void 0, false, {
            fileName: "app/components/utils/campagincard.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/utils/campagincard.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
          fileName: "app/components/utils/campagincard.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
          fileName: "app/components/utils/campagincard.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-md text-left my-4", children: props.title }, void 0, false, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-black font-semibold text-xs text-left mt-4`, children: [
      "Category : ",
      props.category
    ] }, void 0, true, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.weburl }, void 0, false, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-black my-2" }, void 0, false, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "Budget" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center w-32 overflow-x-scroll no-scrollbar", children: props.platforms.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "p-1 shrink-0 mx-1 border-2 border-blue-500 rounded-full",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val, alt: "error", className: "rounded-full w-8 h-8" }, void 0, false, {
              fileName: "app/components/utils/campagincard.tsx",
              lineNumber: 82,
              columnNumber: 19
            }, this)
          },
          index,
          false,
          {
            fileName: "app/components/utils/campagincard.tsx",
            lineNumber: 78,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-bold  text-md text-right my-4", children: [
        props.maxval,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/utils/campagincard.tsx",
          lineNumber: 90,
          columnNumber: 30
        }, this),
        props.currency,
        " / post"
      ] }, void 0, true, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/campaigns/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      CusButton,
      {
        text: props.btntext,
        textColor: "text-black",
        background: "bg-[#fbca8e]",
        width: "w-full",
        margin: "my-0",
        fontwidth: "font-bold"
      },
      void 0,
      false,
      {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 96,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
};

export {
  CampaginCard
};
//# sourceMappingURL=/build/_shared/chunk-VYXXCYSJ.js.map
