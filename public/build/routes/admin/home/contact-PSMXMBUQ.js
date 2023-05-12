import {
  Q,
  k
} from "/build/_shared/chunk-LOB7Z3FT.js";
import {
  ReactToastify_default
} from "/build/_shared/chunk-CK3DXGRB.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-CCYXSUJZ.js";
import {
  FontAwesomeIcon,
  faFill,
  faTrash,
  faXmark
} from "/build/_shared/chunk-XG566DYW.js";
import "/build/_shared/chunk-55KEKCTE.js";
import {
  useLoaderData
} from "/build/_shared/chunk-LXJMA5PD.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-KG56QLKG.js";

// app/routes/admin/home/contact.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: ReactToastify_default }];
}
var Contact = () => {
  var _a, _b;
  const contactus = useLoaderData().contactus;
  const [viewBox, setViewBox] = (0, import_react2.useState)(false);
  const [viewDate, setViewData] = (0, import_react2.useState)({});
  const [editBox, setEditBox] = (0, import_react2.useState)(false);
  const nameRef = (0, import_react2.useRef)(null);
  const codeRef = (0, import_react2.useRef)(null);
  const [editDate, setEditData] = (0, import_react2.useState)({
    categoryName: ((_a = nameRef.current) == null ? void 0 : _a.value) || "",
    categoryCode: ((_b = codeRef.current) == null ? void 0 : _b.value) || ""
  });
  const [error, setError] = (0, import_react2.useState)("");
  const edit = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-category-byid`,
      data: { id }
    });
    setEditBox((val) => true);
    setEditData((val) => view2.data.data[0]);
  };
  const [delBox, setDelBox] = (0, import_react2.useState)(false);
  const [delDate, setDelData] = (0, import_react2.useState)({});
  const del = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-category-byid`,
      data: { id }
    });
    setDelBox((val) => true);
    setDelData((val) => view2.data.data[0]);
  };
  const delButton = async (id) => {
    const res = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/del-category`,
      data: { id }
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
      url: `${BaseUrl}/api/get-category-byid`,
      data: { id }
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
        url: `${BaseUrl}/api/upd-category`,
        data: {
          categoryName: (_g = nameRef.current) == null ? void 0 : _g.value,
          categoryCode: (_h = codeRef.current) == null ? void 0 : _h.value,
          id
        }
      });
      if (res.data.status) {
        Q.success("Successfully updated.", { theme: "dark" });
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
        url: `${BaseUrl}/api/add-category`,
        data: {
          categoryName: (_g = nameNewRef.current) == null ? void 0 : _g.value,
          categoryCode: (_h = codeNewRef.current) == null ? void 0 : _h.value
        }
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${viewBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "ID : ",
              viewDate.id
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/contact.tsx",
              lineNumber: 173,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Name : ",
              viewDate.categoryName,
              " "
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/contact.tsx",
              lineNumber: 174,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Code : ",
              viewDate.categoryCode
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/contact.tsx",
              lineNumber: 175,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              onClick: () => setViewBox(false),
              className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
                  fileName: "app/routes/admin/home/contact.tsx",
                  lineNumber: 182,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                  fileName: "app/routes/admin/home/contact.tsx",
                  lineNumber: 183,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/admin/home/contact.tsx",
              lineNumber: 178,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 170,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/contact.tsx",
        lineNumber: 165,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${delBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Are you Sure you want to delete ",
            delDate.name,
            "?"
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 199,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => setDelBox(false),
                className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faXmark,
                      className: "w-6"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/contact.tsx",
                      lineNumber: 205,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/contact.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 201,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => delButton(delDate.id),
                className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faTrash,
                      className: "w-6"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/contact.tsx",
                      lineNumber: 215,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Delete" }, void 0, false, {
                    fileName: "app/routes/admin/home/contact.tsx",
                    lineNumber: 219,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 211,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 200,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 194,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/contact.tsx",
        lineNumber: 189,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${editBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: nameRef,
                type: "text",
                name: "name",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the name..",
                autoComplete: "off",
                value: editDate.categoryName,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  categoryName: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 234,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: codeRef,
                type: "text",
                name: "code",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the code..",
                autoComplete: "off",
                value: editDate.categoryCode,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  categoryCode: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 249,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 233,
            columnNumber: 13
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 270,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => setEditBox(false),
                className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faXmark,
                      className: "w-6"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/contact.tsx",
                      lineNumber: 276,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/contact.tsx",
                    lineNumber: 280,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 272,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => submit(editDate.id),
                className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faFill,
                      className: "w-6"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/contact.tsx",
                      lineNumber: 286,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SUBMIT" }, void 0, false, {
                    fileName: "app/routes/admin/home/contact.tsx",
                    lineNumber: 290,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 282,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 271,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 232,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 231,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/contact.tsx",
        lineNumber: 226,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${newBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: nameNewRef,
                type: "text",
                name: "name",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the name..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 305,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: codeNewRef,
                type: "text",
                name: "code",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the code..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 313,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 304,
            columnNumber: 13
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 323,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 327,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => setNewBox(false),
                className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faXmark,
                      className: "w-6"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/contact.tsx",
                      lineNumber: 333,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/contact.tsx",
                    lineNumber: 337,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 329,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: submitNew,
                className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faFill,
                      className: "w-6"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/contact.tsx",
                      lineNumber: 343,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SUBMIT" }, void 0, false, {
                    fileName: "app/routes/admin/home/contact.tsx",
                    lineNumber: 347,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 339,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 328,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 303,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 302,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/contact.tsx",
        lineNumber: 297,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Campaign Type" }, void 0, false, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 355,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/admin/home/contact.tsx",
          lineNumber: 356,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/contact.tsx",
        lineNumber: 354,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/contact.tsx",
        lineNumber: 359,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: contactus.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-60",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 w-full", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  val.id,
                  "."
                ] }, void 0, true, {
                  fileName: "app/routes/admin/home/contact.tsx",
                  lineNumber: 368,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: val.name }, void 0, false, {
                  fileName: "app/routes/admin/home/contact.tsx",
                  lineNumber: 369,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/contact.tsx",
                  lineNumber: 370,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: Number(val.isbrand) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium", children: "Influencer" }, void 0, false, {
                  fileName: "app/routes/admin/home/contact.tsx",
                  lineNumber: 373,
                  columnNumber: 23
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 py-1 text-white text-xs bg-rose-500 text-center rounded-md font-medium", children: "Brand" }, void 0, false, {
                  fileName: "app/routes/admin/home/contact.tsx",
                  lineNumber: 377,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/admin/home/contact.tsx",
                  lineNumber: 371,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 367,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: val.number }, void 0, false, {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 383,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
                "Message : ",
                val.message
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/contact.tsx",
                lineNumber: 384,
                columnNumber: 17
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/admin/home/contact.tsx",
            lineNumber: 363,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/admin/home/contact.tsx",
        lineNumber: 360,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, {}, void 0, false, {
        fileName: "app/routes/admin/home/contact.tsx",
        lineNumber: 389,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/contact.tsx",
      lineNumber: 353,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/contact.tsx",
    lineNumber: 163,
    columnNumber: 5
  }, this);
};
var contact_default = Contact;
export {
  contact_default as default,
  links
};
//# sourceMappingURL=/build/routes/admin/home/contact-PSMXMBUQ.js.map
