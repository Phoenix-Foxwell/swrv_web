import {
  BigBlogCard,
  BlogsCard
} from "/build/_shared/chunk-F2BJPLVR.js";
import {
  Link
} from "/build/_shared/chunk-LXJMA5PD.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KG56QLKG.js";

// app/components/blogpage/bloginfo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BlogsInfo = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-6 sm:px-16", children: [
    props.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "border-2 border-rose-500 border-l-4 w-full text-center rounded-md text-2xl font-semibold  bg-rose-500 bg-opacity-10 text-rose-500", children: "Error 404 Post not found" }, void 0, false, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:h-[550px] w-full relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: props.image,
            alt: "error",
            className: "h-full w-full rounded-lg inline-block relative object-cover object-top"
          },
          void 0,
          false,
          {
            fileName: "app/components/blogpage/bloginfo.tsx",
            lineNumber: 29,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mx-auto absolute bottom-0 hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto  pt-8 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-2xl font-semibold md:w-96 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]", children: props.title }, void 0, false, {
            fileName: "app/components/blogpage/bloginfo.tsx",
            lineNumber: 37,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-lg font-semibold md:w-96 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]", children: props.date.toString().split(" ")[0] }, void 0, false, {
            fileName: "app/components/blogpage/bloginfo.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold text-white py-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]", children: props.shorttitle }, void 0, false, {
            fileName: "app/components/blogpage/bloginfo.tsx",
            lineNumber: 43,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blogpage/bloginfo.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/blogpage/bloginfo.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold text-primary py-10", children: props.description }, void 0, false, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 50,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "Top picks" }, void 0, false, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }, void 0, false, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      props.relatedArtical.slice(2, 4).map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/bloginfo/${val.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          BigBlogCard,
          {
            title: `${val.shortDesc.toString().substring(0, 50)}...`,
            time: val.dateTime,
            imageUrl: val.imageUrl
          },
          void 0,
          false,
          {
            fileName: "app/components/blogpage/bloginfo.tsx",
            lineNumber: 65,
            columnNumber: 21
          },
          this
        ) }, index, false, {
          fileName: "app/components/blogpage/bloginfo.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this) }, index, false, {
          fileName: "app/components/blogpage/bloginfo.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "Related article" }, void 0, false, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }, void 0, false, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 justify-center flex-wrap", children: props.relatedArtical.splice(0, 3).map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/bloginfo/${val.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          BlogsCard,
          {
            title: `${val.shortDesc.toString().substring(0, 50)}...`,
            time: val.dateTime,
            imageUrl: val.imageUrl
          },
          void 0,
          false,
          {
            fileName: "app/components/blogpage/bloginfo.tsx",
            lineNumber: 86,
            columnNumber: 23
          },
          this
        ) }, index, false, {
          fileName: "app/components/blogpage/bloginfo.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, this) }, index, false, {
          fileName: "app/components/blogpage/bloginfo.tsx",
          lineNumber: 84,
          columnNumber: 19
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/blogpage/bloginfo.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/blogpage/bloginfo.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};
var bloginfo_default = BlogsInfo;

export {
  bloginfo_default
};
//# sourceMappingURL=/build/_shared/chunk-2O2M6ZBX.js.map
