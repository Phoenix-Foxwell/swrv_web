import {
  Q,
  k
} from "/build/_shared/chunk-LKQBX72W.js";
import {
  ReactToastify_default
} from "/build/_shared/chunk-5SSIYQM7.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-7OVYVV3T.js";
import {
  FontAwesomeIcon,
  faEdit,
  faEye,
  faFill,
  faTrash,
  faXmark
} from "/build/_shared/chunk-ESAEJTTP.js";
import "/build/_shared/chunk-NEYQYD5R.js";
import {
  useLoaderData
} from "/build/_shared/chunk-ZUW3WGBY.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6U7EOCF3.js";

// app/routes/admin/home/market.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: ReactToastify_default }];
}
var Market = () => {
  var _a, _b;
  const market = useLoaderData().market;
  const [viewBox, setViewBox] = (0, import_react2.useState)(false);
  const [viewDate, setViewData] = (0, import_react2.useState)({});
  const [editBox, setEditBox] = (0, import_react2.useState)(false);
  const nameRef = (0, import_react2.useRef)(null);
  const codeRef = (0, import_react2.useRef)(null);
  const [editDate, setEditData] = (0, import_react2.useState)({
    name: ((_a = nameRef.current) == null ? void 0 : _a.value) || "",
    code: ((_b = codeRef.current) == null ? void 0 : _b.value) || ""
  });
  const [error, setError] = (0, import_react2.useState)("");
  const edit = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-market-byid`,
      data: { "id": id }
    });
    setEditBox((val) => true);
    setEditData((val) => view2.data.data[0]);
  };
  const [delBox, setDelBox] = (0, import_react2.useState)(false);
  const [delDate, setDelData] = (0, import_react2.useState)({});
  const del = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-market-byid`,
      data: { "id": id }
    });
    setDelBox((val) => true);
    setDelData((val) => view2.data.data[0]);
  };
  const delButton = async (id) => {
    const res = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/del-market`,
      data: { "id": id }
    });
    if (res.data.status) {
      Q.success("Successfully Deleted.", { theme: "dark" });
    } else {
      Q.error(res.data.message, { theme: "dark" });
    }
    setDelBox((val) => false);
    window.location.reload();
  };
  const view = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-market-byid`,
      data: { "id": id }
    });
    setViewBox((val) => true);
    setViewData((val) => view2.data.data[0]);
  };
  const submit = async (id) => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    if (((_a2 = nameRef.current) == null ? void 0 : _a2.value) == null || ((_b2 = nameRef.current) == null ? void 0 : _b2.value) == void 0 || ((_c = nameRef.current) == null ? void 0 : _c.value) == "") {
      setError("Enter the name.");
    } else if (((_d = codeRef.current) == null ? void 0 : _d.value) == null || ((_e = codeRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = codeRef.current) == null ? void 0 : _f.value) == "") {
      setError("Enter the code.");
    } else {
      const res = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/upd-market`,
        data: { "marketName": (_g = nameRef.current) == null ? void 0 : _g.value, "marketCode": (_h = codeRef.current) == null ? void 0 : _h.value, "id": id }
      });
      if (res.data.status) {
        Q.success("Successfully Updated.", { theme: "dark" });
      } else {
        Q.error(res.data.message, { theme: "dark" });
      }
      setEditBox((val) => false);
      window.location.reload();
    }
  };
  const [newBox, setNewBox] = (0, import_react2.useState)(false);
  const nameNewRef = (0, import_react2.useRef)(null);
  const codeNewRef = (0, import_react2.useRef)(null);
  const submitNew = async () => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    if (((_a2 = nameNewRef.current) == null ? void 0 : _a2.value) == null || ((_b2 = nameNewRef.current) == null ? void 0 : _b2.value) == void 0 || ((_c = nameNewRef.current) == null ? void 0 : _c.value) == "") {
      setError("Enter the name.");
    } else if (((_d = codeNewRef.current) == null ? void 0 : _d.value) == null || ((_e = codeNewRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = codeNewRef.current) == null ? void 0 : _f.value) == "") {
      setError("Enter the code.");
    } else {
      const res = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/add-market`,
        data: { "marketName": (_g = nameNewRef.current) == null ? void 0 : _g.value, "marketCode": (_h = codeNewRef.current) == null ? void 0 : _h.value }
      });
      if (res.data.status) {
        Q.success("Successfully added.", { theme: "dark" });
      } else {
        Q.error(res.data.message, { theme: "dark" });
      }
      setNewBox((val) => false);
      window.location.reload();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${viewBox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "ID : ",
          viewDate.id
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 157,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Name : ",
          viewDate.name,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 158,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Code : ",
          viewDate.code
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 159,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 156,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 161,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setViewBox(false), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 163,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 164,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 162,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 155,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 154,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 153,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${delBox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Are you Sure you want to delete ",
        delDate.name,
        "?"
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 174,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 173,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 176,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setDelBox(false), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 179,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 180,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 178,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => delButton(delDate.id), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faTrash, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 183,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Delete" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 184,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 182,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 177,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 172,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 171,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 170,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${editBox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: nameRef, type: "text", name: "name", className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none", placeholder: "Enter the name..", autoComplete: "off", value: editDate.name, onChange: (e) => setEditData((data) => ({ ...data, name: e.target.value })) }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 195,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: codeRef, type: "text", name: "code", className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none", placeholder: "Enter the code..", autoComplete: "off", value: editDate.code, onChange: (e) => setEditData((data) => ({ ...data, code: e.target.value })) }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 196,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 194,
        columnNumber: 25
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 199,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 201,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setEditBox(false), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 204,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 205,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 203,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => submit(editDate.id), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faFill, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 208,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SUBMIT" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 209,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 207,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 202,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 193,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 192,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 191,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${newBox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: nameNewRef, type: "text", name: "name", className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none", placeholder: "Enter the name..", autoComplete: "off" }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 220,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: codeNewRef, type: "text", name: "code", className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none", placeholder: "Enter the code..", autoComplete: "off" }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 221,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 219,
        columnNumber: 25
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 224,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 226,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setNewBox(false), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 229,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 230,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 228,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: submitNew, className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faFill, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 233,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SUBMIT" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 234,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 232,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 227,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 218,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 217,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 216,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Market" }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 242,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 243,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setNewBox(true), className: "bg-green-600 py-1 px-2 text-sm text-white rounded-md", children: "ADD NEW" }, void 0, false, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 244,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 241,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 246,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: "Id" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 249,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 250,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: "Title" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 251,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 252,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: "Action" }, void 0, false, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 253,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/market.tsx",
          lineNumber: 248,
          columnNumber: 21
        }, this),
        market.map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: val.id }, void 0, false, {
              fileName: "app/routes/admin/home/market.tsx",
              lineNumber: 259,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/admin/home/market.tsx",
              lineNumber: 260,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: val.name }, void 0, false, {
              fileName: "app/routes/admin/home/market.tsx",
              lineNumber: 261,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/admin/home/market.tsx",
              lineNumber: 262,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 flex text-bold text-md gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-cyan-500 cursor-pointer", onClick: () => edit(val.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEdit }, void 0, false, {
                fileName: "app/routes/admin/home/market.tsx",
                lineNumber: 265,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/admin/home/market.tsx",
                lineNumber: 264,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-emerald-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEye, onClick: () => view(val.id) }, void 0, false, {
                fileName: "app/routes/admin/home/market.tsx",
                lineNumber: 268,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/admin/home/market.tsx",
                lineNumber: 267,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-rose-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faTrash, onClick: () => del(val.id) }, void 0, false, {
                fileName: "app/routes/admin/home/market.tsx",
                lineNumber: 271,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/admin/home/market.tsx",
                lineNumber: 270,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/market.tsx",
              lineNumber: 263,
              columnNumber: 37
            }, this)
          ] }, index, true, {
            fileName: "app/routes/admin/home/market.tsx",
            lineNumber: 258,
            columnNumber: 33
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 247,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, {}, void 0, false, {
        fileName: "app/routes/admin/home/market.tsx",
        lineNumber: 280,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/market.tsx",
      lineNumber: 240,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/market.tsx",
    lineNumber: 151,
    columnNumber: 9
  }, this);
};
var market_default = Market;
export {
  market_default as default,
  links
};
//# sourceMappingURL=/build/routes/admin/home/market-3ZXMOPBE.js.map
