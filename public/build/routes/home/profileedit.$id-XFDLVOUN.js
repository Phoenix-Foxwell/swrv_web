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

// app/routes/home/profileedit.$id.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProfileEdit = () => {
  const user = useLoaderData().user[0];
  const id = useLoaderData().id;
  const isbrand = useLoaderData().user[0].role.code != 10;
  const [error, setError] = (0, import_react2.useState)("");
  const [barnd, serBrand] = (0, import_react2.useState)(null);
  const userNameRef = (0, import_react2.useRef)(null);
  const userKnownAsRef = (0, import_react2.useRef)(null);
  const userWebUrlRef = (0, import_react2.useRef)(null);
  const userFullPostalAddressRef = (0, import_react2.useRef)(null);
  const userBioInfoRef = (0, import_react2.useRef)(null);
  const personalHistoryRef = (0, import_react2.useRef)(null);
  const careerHistoryRef = (0, import_react2.useRef)(null);
  const ifscRef = (0, import_react2.useRef)(null);
  const acNoRef = (0, import_react2.useRef)(null);
  const navigator = useNavigate();
  (0, import_react2.useEffect)(() => {
    if (isbrand) {
      navigator(`/home/brandedit/${user.brand.id}`);
    }
    userNameRef.current.value = user["userName"];
    userKnownAsRef.current.value = user["knownAs"];
    userWebUrlRef.current.value = user["website"];
    userFullPostalAddressRef.current.value = user["address"];
    userBioInfoRef.current.value = user["bio"];
    personalHistoryRef.current.value = user["personalHistory"];
    careerHistoryRef.current.value = user["careerHistory"];
    ifscRef.current.value = user["ifsc"];
    acNoRef.current.value = user["acNo"];
  }, []);
  const submit = async () => {
    const userdata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/edit-user`,
      data: {
        id,
        update: {
          userName: userNameRef.current.value,
          userKnownAs: userKnownAsRef.current.value,
          userWebUrl: userWebUrlRef.current.value,
          userFullPostalAddress: userFullPostalAddressRef.current.value,
          userBioInfo: userBioInfoRef.current.value,
          personalHistory: personalHistoryRef.current.value,
          careerHistory: careerHistoryRef.current.value,
          ifsc: ifscRef.current.value,
          acNo: acNoRef.current.value
        }
      }
    });
    if (userdata.data.status == false) {
      setError(userdata.data.message);
    } else {
      navigator(-1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-6 bg-white rounded-lg shadow-xl px-6 py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black font-medium text-xl", children: "Edit User" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 87,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-800 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 88,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "User Name" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 89,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: userNameRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 90,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "User Known As" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: userKnownAsRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md resize-none"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 95,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "User Web Page" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 99,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: userWebUrlRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 100,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "User Full Address" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 104,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: userFullPostalAddressRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md h-32 resize-none"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 105,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "User Bio Info" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 114,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: userBioInfoRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md h-32 resize-none"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 115,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "User Personal History" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 119,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: personalHistoryRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md h-32 resize-none"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 120,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "User Career History" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 124,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        ref: careerHistoryRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md h-32 resize-none"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 125,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "Bank Swift/Routing/Ifsc No." }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 129,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: ifscRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 130,
        columnNumber: 17
      },
      this
    ),
    ".",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl", children: "Bank AC No." }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 135,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: acNoRef,
        className: "p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profileedit.$id.tsx",
        lineNumber: 136,
        columnNumber: 17
      },
      this
    ),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 141,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white py-2 px-4 rounded-md bg-cyan-500 w-96 text-center", onClick: submit, children: "UPDATE" }, void 0, false, {
      fileName: "app/routes/home/profileedit.$id.tsx",
      lineNumber: 145,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profileedit.$id.tsx",
    lineNumber: 86,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profileedit.$id.tsx",
    lineNumber: 85,
    columnNumber: 9
  }, this);
};
var profileedit_id_default = ProfileEdit;
export {
  profileedit_id_default as default
};
//# sourceMappingURL=/build/routes/home/profileedit.$id-XFDLVOUN.js.map
