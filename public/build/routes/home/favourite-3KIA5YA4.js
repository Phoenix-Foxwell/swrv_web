import {
  es_default
} from "/build/_shared/chunk-2QADXOD2.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  Link
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/favourite.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Favourite = () => {
  const [myfavBrand, setMyfavBrand] = es_default("favbrand", {
    defaultValue: []
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Favourite brands" }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    myfavBrand.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-slate-900", children: "You have no favorite brands." }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white rounded-xl shadow-xl p-6 my-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-slate-900", children: [
          "Found : ",
          myfavBrand.length
        ] }, void 0, true, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "text-lg text-center bg-red-500 py-1 px-2 text-white font-bold rounded-md",
            onClick: () => {
              setMyfavBrand([]);
            },
            children: "Clear All"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/favourite.tsx",
            lineNumber: 38,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: myfavBrand.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FavBrandCard,
          {
            id: val.id,
            name: val.name,
            image: val.logo,
            website: val.website,
            email: val.email
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/favourite.tsx",
            lineNumber: 52,
            columnNumber: 21
          },
          this
        ) }, index, false, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 51,
          columnNumber: 19
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/favourite.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/favourite.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};
var favourite_default = Favourite;
var FavBrandCard = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: props.image,
          alt: "error",
          className: "object-cover w-16 h-16 rounded"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 86,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left my-2", children: props.name }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-md content-end text-left", children: [
      "Website: ",
      props.website
    ] }, void 0, true, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-md content-end text-left", children: [
      "Email: ",
      props.email
    ] }, void 0, true, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/brand/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      CusButton,
      {
        text: "Learn More & Connect",
        textColor: "text-black",
        background: "bg-[#01FFF4]",
        width: "w-full",
        margin: "my-2",
        fontwidth: "font-bold"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 103,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/favourite.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/favourite.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
};
export {
  favourite_default as default
};
//# sourceMappingURL=/build/routes/home/favourite-3KIA5YA4.js.map
