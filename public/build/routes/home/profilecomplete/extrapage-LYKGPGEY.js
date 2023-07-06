import {
  firstinput_default
} from "/build/_shared/chunk-RAFJ3YWD.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  UploadFile
} from "/build/_shared/chunk-F6W2H234.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faCirclePlus
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  BaseUrl
} from "/build/_shared/chunk-6KUPMBEH.js";
import {
  axios_default
} from "/build/_shared/chunk-MMEUTQTO.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/profilecomplete/extrapage.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ExtraPage = () => {
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const isBrand = userdata.user.role.code == "50" ? true : false;
  const [error, setError] = (0, import_react2.useState)(null);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const setIndex = firstinput_default((state) => state.setIndex);
  const nextButton = (0, import_react2.useRef)(null);
  const bankName = (0, import_react2.useRef)(null);
  const branchName = (0, import_react2.useRef)(null);
  const ifsc = (0, import_react2.useRef)(null);
  const accountNumber = (0, import_react2.useRef)(null);
  const doc1 = (0, import_react2.useRef)(null);
  const doc2 = (0, import_react2.useRef)(null);
  const doc3 = (0, import_react2.useRef)(null);
  const [files1, setFiles1] = (0, import_react2.useState)();
  const [files2, setFiles2] = (0, import_react2.useState)();
  const [files3, setFiles3] = (0, import_react2.useState)();
  const handleNumberInput = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    e.target.value = numericValue;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Documents" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "file",
            accept: "*/*",
            ref: doc1,
            onChange: (value) => {
              let file_size = parseInt(
                (value.target.files[0].size / 1024 / 1024).toString()
              );
              if (file_size < 4) {
                setError(null);
                setFiles1((val) => value.target.files[0]);
              } else {
                setError("File size must be less then 4 mb");
              }
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/extrapage.tsx",
            lineNumber: 65,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "file",
            accept: "*/*",
            ref: doc2,
            onChange: (value) => {
              let file_size = parseInt(
                (value.target.files[0].size / 1024 / 1024).toString()
              );
              if (file_size < 4) {
                setError(null);
                setFiles2((val) => value.target.files[0]);
              } else {
                setError("File size must be less then 4 mb");
              }
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/extrapage.tsx",
            lineNumber: 81,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "file",
            accept: "*/*",
            ref: doc3,
            onChange: (value) => {
              let file_size = parseInt(
                (value.target.files[0].size / 1024 / 1024).toString()
              );
              if (file_size < 4) {
                setError(null);
                setFiles3((val) => value.target.files[0]);
              } else {
                setError("File size must be less then 4 mb");
              }
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/extrapage.tsx",
            lineNumber: 97,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer", onClick: () => {
          var _a;
          return (_a = doc1.current) == null ? void 0 : _a.click();
        }, children: files1 == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          "Add Doc ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "mx-2", icon: faCirclePlus }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/extrapage.tsx",
            lineNumber: 118,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/extrapage.tsx",
          lineNumber: 117,
          columnNumber: 47
        }, this) : files1.name.length < 25 ? files1.name : `${files1.name.toString().slice(0, 25)}...` }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/extrapage.tsx",
          lineNumber: 116,
          columnNumber: 25
        }, this),
        files1 != null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: URL.createObjectURL(files1), className: "text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500  py-2", children: "VIEW" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/extrapage.tsx",
          lineNumber: 124,
          columnNumber: 29
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 115,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer",
            onClick: () => {
              var _a;
              return (_a = doc2.current) == null ? void 0 : _a.click();
            },
            children: files2 == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              "Add Doc ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "mx-2", icon: faCirclePlus }, void 0, false, {
                fileName: "app/routes/home/profilecomplete/extrapage.tsx",
                lineNumber: 134,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/profilecomplete/extrapage.tsx",
              lineNumber: 133,
              columnNumber: 47
            }, this) : files2.name.length < 25 ? files2.name : `${files2.name.toString().slice(0, 25)}...`
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/extrapage.tsx",
            lineNumber: 130,
            columnNumber: 25
          },
          this
        ),
        files2 != null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: URL.createObjectURL(files2), className: "text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500  py-2", children: "VIEW" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/extrapage.tsx",
          lineNumber: 141,
          columnNumber: 29
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 129,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer",
            onClick: () => {
              var _a;
              return (_a = doc3.current) == null ? void 0 : _a.click();
            },
            children: files3 == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              "Add Doc ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "mx-2", icon: faCirclePlus }, void 0, false, {
                fileName: "app/routes/home/profilecomplete/extrapage.tsx",
                lineNumber: 150,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/profilecomplete/extrapage.tsx",
              lineNumber: 149,
              columnNumber: 47
            }, this) : files3.name.length < 25 ? files3.name : `${files3.name.toString().slice(0, 25)}...`
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/extrapage.tsx",
            lineNumber: 147,
            columnNumber: 25
          },
          this
        ),
        files3 != null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: URL.createObjectURL(files3), className: "text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500 py-2", children: "VIEW" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/extrapage.tsx",
          lineNumber: 156,
          columnNumber: 29
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 146,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-400 my-4" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 160,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Bank Information" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 162,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
      "Bank Name ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 165,
        columnNumber: 31
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 164,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: bankName,
        type: "text",
        className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 167,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
      "Branch Name ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 173,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 172,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: branchName,
        type: "text",
        className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 175,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
      "IFSC/SWIFT/RTN CODE ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 181,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 180,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: ifsc,
        type: "text",
        className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 183,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
      "Account Number ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 189,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 188,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: accountNumber,
        type: "text",
        className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
        onInput: handleNumberInput
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 191,
        columnNumber: 17
      },
      this
    ),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 198,
      columnNumber: 21
    }, this),
    sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 201,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: async () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      if (((_a = bankName.current) == null ? void 0 : _a.value) == null || ((_b = bankName.current) == null ? void 0 : _b.value) == void 0 || ((_c = bankName.current) == null ? void 0 : _c.value) == "") {
        setError("Enter Bank name.");
      } else if (((_d = branchName.current) == null ? void 0 : _d.value) == null || ((_e = branchName.current) == null ? void 0 : _e.value) == void 0 || ((_f = branchName.current) == null ? void 0 : _f.value) == "") {
        setError("Enter Branch name.");
      } else if (((_g = ifsc.current) == null ? void 0 : _g.value) == null || ((_h = ifsc.current) == null ? void 0 : _h.value) == void 0 || ((_i = ifsc.current) == null ? void 0 : _i.value) == "") {
        setError("Enter IFSC code.");
      } else if (((_j = accountNumber.current) == null ? void 0 : _j.value) == null || ((_k = accountNumber.current) == null ? void 0 : _k.value) == void 0 || ((_l = accountNumber.current) == null ? void 0 : _l.value) == "") {
        setError("Enter Account Number.");
      } else {
        const updoc1 = await UploadFile(files1);
        const updoc2 = await UploadFile(files2);
        const updoc3 = await UploadFile(files3);
        let req = {
          id: userId,
          bankName: (_m = bankName.current) == null ? void 0 : _m.value,
          branchName: (_n = branchName.current) == null ? void 0 : _n.value,
          ifsc: (_o = ifsc.current) == null ? void 0 : _o.value,
          acNo: (_p = accountNumber.current) == null ? void 0 : _p.value
        };
        if (updoc1.status) {
          req["doc1"] = updoc1.data;
        }
        if (updoc2.status) {
          req["doc2"] = updoc2.data;
        }
        if (updoc3.status) {
          req["doc3"] = updoc3.data;
        }
        const data = await axios_default({
          method: "post",
          url: `${BaseUrl}/api/updateuser`,
          data: req,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Options": "*",
            "Access-Control-Allow-Methods": "*",
            "X-Content-Type-Options": "*",
            "Content-Type": "application/json",
            Accept: "*"
          }
        });
        if (data.data.status == false) {
          return setError(data.data.message);
        }
        setIndex(5);
        nextButton.current.click();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 273,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 204,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userId.toString() }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 276,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/extrapage.tsx",
        lineNumber: 277,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/extrapage.tsx",
      lineNumber: 275,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/extrapage.tsx",
    lineNumber: 60,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete/extrapage.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, this);
};
var extrapage_default = ExtraPage;
export {
  extrapage_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/extrapage-LYKGPGEY.js.map
