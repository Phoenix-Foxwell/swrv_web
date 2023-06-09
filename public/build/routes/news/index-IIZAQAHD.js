import {
  BigBlogCard,
  BlogsCard
} from "/build/_shared/chunk-YG3AGZIF.js";
import {
  IntroNavBar
} from "/build/_shared/chunk-OBK3AXB3.js";
import {
  Footer
} from "/build/_shared/chunk-527BM5RX.js";
import "/build/_shared/chunk-3F3TBTM2.js";
import "/build/_shared/chunk-CNTCBH2R.js";
import "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-5CHSURAX.js";
import "/build/_shared/chunk-Z6G3P7XF.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/components/newsevents/newsevents.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var NewsIntro = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-6 sm:px-16 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10 relative pt-8 px-6 mdLpx-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "May 26, 2022", imageUrl: "/images/blogs/blog4.png" }, void 0, false, {
      fileName: "app/components/newsevents/newsevents.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "May 26, 2022", imageUrl: "/images/blogs/blog5.png" }, void 0, false, {
      fileName: "app/components/newsevents/newsevents.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center mt-32", children: props.newsevent.map((val, index) => {
      return index < 6 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/bloginfo/${val.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogsCard, { title: `${val.shortDesc.toString().substring(0, 50)}...`, time: val.dateTime, imageUrl: val.imageUrl }, void 0, false, {
        fileName: "app/components/newsevents/newsevents.tsx",
        lineNumber: 24,
        columnNumber: 45
      }, this) }, index, false, {
        fileName: "app/components/newsevents/newsevents.tsx",
        lineNumber: 23,
        columnNumber: 41
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, index, false, {
        fileName: "app/components/newsevents/newsevents.tsx",
        lineNumber: 26,
        columnNumber: 41
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/newsevents/newsevents.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", background: "bg-[#ADADAD]", time: "May 26, 2022", imageUrl: "/images/blogs/blog6.png", textColor: "text-white" }, void 0, false, {
      fileName: "app/components/newsevents/newsevents.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", background: "bg-[#ADADAD]", time: "May 26, 2022", imageUrl: "/images/blogs/blog7.png", textColor: "text-white" }, void 0, false, {
      fileName: "app/components/newsevents/newsevents.tsx",
      lineNumber: 33,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center my-10", children: props.newsevent.map((val, index) => {
      return index < 6 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/bloginfo/${val.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogsCard, { title: `${val.shortDesc.toString().substring(0, 50)}...`, time: val.dateTime, imageUrl: val.imageUrl }, void 0, false, {
        fileName: "app/components/newsevents/newsevents.tsx",
        lineNumber: 42,
        columnNumber: 45
      }, this) }, index, false, {
        fileName: "app/components/newsevents/newsevents.tsx",
        lineNumber: 41,
        columnNumber: 41
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, index, false, {
        fileName: "app/components/newsevents/newsevents.tsx",
        lineNumber: 44,
        columnNumber: 41
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/newsevents/newsevents.tsx",
      lineNumber: 36,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/newsevents/newsevents.tsx",
    lineNumber: 13,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/newsevents/newsevents.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/newsevents/newsevents.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};
var newsevents_default = NewsIntro;

// app/routes/news/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var blogs = () => {
  let newsevent = useLoaderData().newsevent[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IntroNavBar, {}, void 0, false, {
      fileName: "app/routes/news/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(newsevents_default, { newsevent }, void 0, false, {
      fileName: "app/routes/news/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/news/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var news_default = blogs;
export {
  news_default as default
};
//# sourceMappingURL=/build/routes/news/index-IIZAQAHD.js.map
