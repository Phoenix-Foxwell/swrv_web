import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  FontAwesomeIcon,
  faStar
} from "/build/_shared/chunk-UBTZ3VBL.js";
import {
  Link
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/components/utils/influencercard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var InfluencerCard = (props) => {
  const Star = () => {
    const fullStars = Math.floor(props.star);
    const fractionalStar = props.star - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-pink-500",
            icon: faStar
          },
          i,
          false,
          {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 21,
            columnNumber: 9
          },
          this
        )
      );
    }
    if (fractionalStar > 0) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-pink-500",
            icon: faStar,
            style: { width: `${fractionalStar * 100}%` }
          },
          fullStars,
          false,
          {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 31,
            columnNumber: 9
          },
          this
        )
      );
    }
    for (let i = 0; i < 5 - fullStars; i++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-gray-300",
            icon: faStar
          },
          5 + i,
          false,
          {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 42,
            columnNumber: 9
          },
          this
        )
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: stars }, void 0, false, {
      fileName: "app/components/utils/influencercard.tsx",
      lineNumber: 50,
      columnNumber: 12
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: props.image,
        alt: "error",
        className: "w-full h-40 object-cover rounded-t-md"
      },
      void 0,
      false,
      {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 55,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-lg text-left", children: props.name == void 0 || props.name == null ? "" : props.name.split("@")[0] }, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-sm text-left mt-2", children: props.bio }, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/myuser/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CusButton,
        {
          text: "View Profile",
          textColor: "text-black",
          background: "bg-[#01FFF4]",
          width: "w-full",
          margin: "my-2",
          fontwidth: "font-bold"
        },
        void 0,
        false,
        {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 79,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/influencercard.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/utils/influencercard.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/utils/influencercard.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
};
var influencercard_default = InfluencerCard;

export {
  influencercard_default
};
//# sourceMappingURL=/build/_shared/chunk-DHCF2GG3.js.map
