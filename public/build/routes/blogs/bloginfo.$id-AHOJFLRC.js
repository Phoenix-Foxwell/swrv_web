import {
  bloginfo_default
} from "/build/_shared/chunk-UQPKXHCM.js";
import "/build/_shared/chunk-YG3AGZIF.js";
import {
  MyNavBar
} from "/build/_shared/chunk-ZNAHR6JM.js";
import {
  Footer
} from "/build/_shared/chunk-527BM5RX.js";
import "/build/_shared/chunk-3F3TBTM2.js";
import "/build/_shared/chunk-CNTCBH2R.js";
import "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  useLoaderData
} from "/build/_shared/chunk-5CHSURAX.js";
import "/build/_shared/chunk-Z6G3P7XF.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/blogs/bloginfo.$id.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var blogs = () => {
  let data = useLoaderData();
  const blog = useLoaderData().blog[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed top-0 left-0 w-full z-50 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyNavBar, {}, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-16" }, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      bloginfo_default,
      {
        error: data.error,
        image: data.nebdata.imageUrl,
        title: data.nebdata.title,
        shorttitle: data.nebdata.titleDesc,
        description: data.nebdata.description,
        date: data.nebdata.dateTime,
        type: data.nebdata.type,
        relatedArtical: blog
      },
      void 0,
      false,
      {
        fileName: "app/routes/blogs/bloginfo.$id.tsx",
        lineNumber: 35,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blogs/bloginfo.$id.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
var bloginfo_id_default = blogs;
export {
  bloginfo_id_default as default
};
//# sourceMappingURL=/build/routes/blogs/bloginfo.$id-AHOJFLRC.js.map
