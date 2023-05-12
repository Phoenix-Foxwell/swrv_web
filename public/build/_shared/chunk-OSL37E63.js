import {
  CusButton
} from "/build/_shared/chunk-HT3EAJMF.js";
import {
  FontAwesomeIcon,
  faStar
} from "/build/_shared/chunk-XG566DYW.js";
import {
  Link
} from "/build/_shared/chunk-LXJMA5PD.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KG56QLKG.js";

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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-1 -translate-y-5 pl-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border p-1 bg-white border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: "/images/media/instagram.png",
          alt: "error",
          className: "w-6 h-6 rounded-full"
        },
        void 0,
        false,
        {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 62,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border p-1 border-blue-500 bg-white rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: "/images/media/youtube.png",
          alt: "error",
          className: "w-6 h-6 rounded-full"
        },
        void 0,
        false,
        {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 69,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/influencercard.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-lg text-left", children: props.name.split("@")[0] }, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-sm text-left mt-2", children: props.bio }, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 77,
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
          lineNumber: 94,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/influencercard.tsx",
      lineNumber: 76,
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
//# sourceMappingURL=/build/_shared/chunk-OSL37E63.js.map
