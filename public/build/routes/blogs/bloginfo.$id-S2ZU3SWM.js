import {
  MyNavBar
} from "/build/_shared/chunk-W6EQCWRQ.js";
import "/build/_shared/chunk-7OVYVV3T.js";
import {
  bloginfo_default
} from "/build/_shared/chunk-XEUMH3V4.js";
import "/build/_shared/chunk-T3YHJEX5.js";
import {
  Footer
} from "/build/_shared/chunk-BFRQ7FUC.js";
import "/build/_shared/chunk-N6I4VE4T.js";
import "/build/_shared/chunk-ZTDX66IZ.js";
import "/build/_shared/chunk-ESAEJTTP.js";
import "/build/_shared/chunk-NEYQYD5R.js";
import {
  useLoaderData
} from "/build/_shared/chunk-ZUW3WGBY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6U7EOCF3.js";

// app/routes/blogs/bloginfo.$id.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var blogs = () => {
  let data = useLoaderData();
  const blog = useLoaderData().blog[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyNavBar, {}, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 31,
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
        lineNumber: 32,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/blogs/bloginfo.$id.tsx",
      lineNumber: 42,
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
//# sourceMappingURL=/build/routes/blogs/bloginfo.$id-S2ZU3SWM.js.map
