import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-5CHSURAX.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-Z6G3P7XF.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/admin/home/editbrand.$id.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EditBrand = () => {
  const brand = useLoaderData().brand;
  const id = useLoaderData().id;
  const [error, setError] = (0, import_react2.useState)("");
  const brandCodeRef = (0, import_react2.useRef)(null);
  const brandNameRef = (0, import_react2.useRef)(null);
  const brandFullRegisteredAddressRef = (0, import_react2.useRef)(null);
  const brandWebUrlRef = (0, import_react2.useRef)(null);
  const brandSupportEmailRef = (0, import_react2.useRef)(null);
  const brandSupportContactRef = (0, import_react2.useRef)(null);
  const brandBioInfoRef = (0, import_react2.useRef)(null);
  const comapnyBioRef = (0, import_react2.useRef)(null);
  const bannerRef = (0, import_react2.useRef)(null);
  const navigator = useNavigate();
  (0, import_react2.useEffect)(() => {
    brandCodeRef.current.value = brand["code"];
    brandNameRef.current.value = brand["name"];
    brandFullRegisteredAddressRef.current.value = brand["address"];
    brandWebUrlRef.current.value = brand["webUrl"];
    brandSupportEmailRef.current.value = brand["email"];
    brandSupportContactRef.current.value = brand["contact"];
    brandBioInfoRef.current.value = brand["info"];
    comapnyBioRef.current.value = brand["companyinfo"];
    bannerRef.current.value = brand["banner"];
  }, []);
  const submit = async () => {
    const req = {
      id,
      update: {
        brandCode: brandCodeRef.current.value,
        brandName: brandNameRef.current.value,
        brandFullRegisteredAddress: brandFullRegisteredAddressRef.current.value,
        brandWebUrl: brandWebUrlRef.current.value,
        brandSupportEmail: brandSupportEmailRef.current.value,
        brandSupportContact: brandSupportContactRef.current.value,
        brandBioInfo: brandBioInfoRef.current.value,
        comapnyBio: comapnyBioRef.current.value,
        banner: bannerRef.current.value
      }
    };
    const branddata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/edit-brand`,
      data: req
    });
    if (branddata.data.status == false) {
      setError(branddata.data.message);
    } else {
      navigator(-1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Edit brand" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand Code" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: brandCodeRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 79,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand Name" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: brandNameRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 84,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand Address" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 88,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: brandFullRegisteredAddressRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 89,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand Website url" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: brandWebUrlRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 94,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand Support Email" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: brandSupportEmailRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 99,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand Support Contact" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: brandSupportContactRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 104,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand Bio" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: brandBioInfoRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 109,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand company bio" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: comapnyBioRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md resize-none h-32"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 114,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-semibold text-xl", children: "Brand banner url" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 123,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: bannerRef,
        className: "p-2 w-96 outline-none bg-transparent text-white border-2 border-white block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/editbrand.$id.tsx",
        lineNumber: 124,
        columnNumber: 13
      },
      this
    ),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 131,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white py-2 px-4 rounded-md bg-cyan-500 w-96 text-center", onClick: submit, children: "UPDATE" }, void 0, false, {
      fileName: "app/routes/admin/home/editbrand.$id.tsx",
      lineNumber: 135,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/editbrand.$id.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this);
};
var editbrand_id_default = EditBrand;
export {
  editbrand_id_default as default
};
//# sourceMappingURL=/build/routes/admin/home/editbrand.$id-O2MMRB5B.js.map
