import {
  MyNavBar
} from "/build/_shared/chunk-W6EQCWRQ.js";
import "/build/_shared/chunk-7OVYVV3T.js";
import {
  BigBlogCard,
  BlogsCard
} from "/build/_shared/chunk-T3YHJEX5.js";
import {
  Footer
} from "/build/_shared/chunk-BFRQ7FUC.js";
import "/build/_shared/chunk-N6I4VE4T.js";
import "/build/_shared/chunk-ZTDX66IZ.js";
import "/build/_shared/chunk-ESAEJTTP.js";
import "/build/_shared/chunk-NEYQYD5R.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-ZUW3WGBY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6U7EOCF3.js";

// app/components/blogpage/blogspage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BlogsIntro = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-6 sm:px-16 relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " absolute w-full h-screen box-border left-0 px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " bg-[#EFEFEF] box-border w-full h-screen rounded-xl" }, void 0, false, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10 relative pt-8 px-6 mdLpx-0", children: [
      props.blogdata.slice(2, 4).map((val, index) => {
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
            fileName: "app/components/blogpage/blogspage.tsx",
            lineNumber: 20,
            columnNumber: 19
          },
          this
        ) }, index, false, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this) }, index, false, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 18,
          columnNumber: 15
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center mt-32 gap-y-8", children: props.blogdata.map((val, index) => {
        return index < 6 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/bloginfo/${val.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          BlogsCard,
          {
            title: `${val.shortDesc.toString().substring(0, 50)}...`,
            time: val.dateTime,
            imageUrl: val.imageUrl
          },
          void 0,
          false,
          {
            fileName: "app/components/blogpage/blogspage.tsx",
            lineNumber: 34,
            columnNumber: 19
          },
          this
        ) }, index, false, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, index, false, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      props.blogdata.slice(4, 6).map((val, index) => {
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
            fileName: "app/components/blogpage/blogspage.tsx",
            lineNumber: 50,
            columnNumber: 19
          },
          this
        ) }, index, false, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this) }, index, false, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap justify-center my-10 gap-8", children: props.blogdata.map((val, index) => {
        return index < 6 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/bloginfo/${val.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          BlogsCard,
          {
            title: `${val.shortDesc.toString().substring(0, 50)}...`,
            time: val.dateTime,
            imageUrl: val.imageUrl
          },
          void 0,
          false,
          {
            fileName: "app/components/blogpage/blogspage.tsx",
            lineNumber: 64,
            columnNumber: 19
          },
          this
        ) }, index, false, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, index, false, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/blogpage/blogspage.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/blogpage/blogspage.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};
var blogspage_default = BlogsIntro;

// app/routes/blogs/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var blogs = () => {
  let blogdata = useLoaderData().blog[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MyNavBar, {}, void 0, false, {
      fileName: "app/routes/blogs/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(blogspage_default, { blogdata }, void 0, false, {
      fileName: "app/routes/blogs/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/blogs/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blogs/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
var blogs_default = blogs;
export {
  blogs_default as default
};
//# sourceMappingURL=/build/routes/blogs/index-BN25JDA5.js.map
