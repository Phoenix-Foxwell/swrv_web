import {
  MyNavBar
} from "/build/_shared/chunk-YSY4TTMO.js";
import "/build/_shared/chunk-DMMPWIAR.js";
import {
  bloginfo_default
} from "/build/_shared/chunk-2O2M6ZBX.js";
import "/build/_shared/chunk-F2BJPLVR.js";
import {
  Footer
} from "/build/_shared/chunk-SZOPYLGR.js";
import "/build/_shared/chunk-VS62I6XO.js";
import "/build/_shared/chunk-MWIY3DQR.js";
import "/build/_shared/chunk-XG566DYW.js";
import "/build/_shared/chunk-55KEKCTE.js";
import {
  useLoaderData
} from "/build/_shared/chunk-LXJMA5PD.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KG56QLKG.js";

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
//# sourceMappingURL=/build/routes/blogs/bloginfo.$id-AI6AZJRE.js.map
