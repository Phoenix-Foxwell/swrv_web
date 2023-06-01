import {
  Q,
  k
} from "/build/_shared/chunk-3ZBFQDQ5.js";
import {
  ReactToastify_default
} from "/build/_shared/chunk-5SSIYQM7.js";
import {
  UploadFile
} from "/build/_shared/chunk-52ZY7WVI.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-G6FD4XLU.js";
import {
  FontAwesomeIcon,
  faEdit,
  faEye,
  faFill,
  faTrash,
  faXmark
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/admin/home/blognews.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: ReactToastify_default }];
}
var NEWSEVENTBLOG = () => {
  var _a, _b, _c, _d, _e, _f, _g;
  const neb = useLoaderData().neb;
  const [img, setImale] = (0, import_react2.useState)(null);
  let imgref = (0, import_react2.useRef)(null);
  const [imgerror, setImgerror] = (0, import_react2.useState)(null);
  const [viewBox, setViewBox] = (0, import_react2.useState)(false);
  const [viewDate, setViewData] = (0, import_react2.useState)({});
  const [editBox, setEditBox] = (0, import_react2.useState)(false);
  const titleRef = (0, import_react2.useRef)(null);
  const titleDescRef = (0, import_react2.useRef)(null);
  const descriptionRef = (0, import_react2.useRef)(null);
  const shortDescRef = (0, import_react2.useRef)(null);
  const imageUrlRef = (0, import_react2.useRef)(null);
  const typeRef = (0, import_react2.useRef)(null);
  const dateRef = (0, import_react2.useRef)(null);
  const [editDate, setEditData] = (0, import_react2.useState)({
    title: ((_a = titleRef.current) == null ? void 0 : _a.value) || "",
    titleDesc: ((_b = titleDescRef.current) == null ? void 0 : _b.value) || "",
    description: ((_c = descriptionRef.current) == null ? void 0 : _c.value) || "",
    shortDesc: ((_d = shortDescRef.current) == null ? void 0 : _d.value) || "",
    imageUrl: ((_e = imageUrlRef.current) == null ? void 0 : _e.value) || "",
    type: ((_f = typeRef.current) == null ? void 0 : _f.value) || "",
    dateTime: ((_g = dateRef.current) == null ? void 0 : _g.value) || ""
  });
  const [error, setError] = (0, import_react2.useState)("");
  const edit = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-neb-byid`,
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
      url: `${BaseUrl}/api/get-neb-byid`,
      data: { id }
    });
    setDelBox((val) => true);
    setDelData((val) => view2.data.data[0]);
  };
  const delButton = async (id) => {
    const res = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/del-neb`,
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
      url: `${BaseUrl}/api/get-neb-byid`,
      data: { id }
    });
    setViewBox((val) => true);
    setViewData((val) => view2.data.data[0]);
  };
  const submit = async (id) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    if (((_a2 = titleRef.current) == null ? void 0 : _a2.value) == null || ((_b2 = titleRef.current) == null ? void 0 : _b2.value) == void 0 || ((_c2 = titleRef.current) == null ? void 0 : _c2.value) == "") {
      setError("Enter the title.");
    } else if (((_d2 = titleDescRef.current) == null ? void 0 : _d2.value) == null || ((_e2 = titleDescRef.current) == null ? void 0 : _e2.value) == void 0 || ((_f2 = titleDescRef.current) == null ? void 0 : _f2.value) == "") {
      setError("Enter the title description.");
    } else if (((_g2 = shortDescRef.current) == null ? void 0 : _g2.value) == null || ((_h = shortDescRef.current) == null ? void 0 : _h.value) == void 0 || ((_i = shortDescRef.current) == null ? void 0 : _i.value) == "") {
      setError("Enter the short description.");
    } else if (((_j = descriptionRef.current) == null ? void 0 : _j.value) == null || ((_k = descriptionRef.current) == null ? void 0 : _k.value) == void 0 || ((_l = descriptionRef.current) == null ? void 0 : _l.value) == "") {
      setError("Enter the description.");
    } else if (((_m = typeRef.current) == null ? void 0 : _m.value) == null || ((_n = typeRef.current) == null ? void 0 : _n.value) == void 0 || ((_o = typeRef.current) == null ? void 0 : _o.value) == "") {
      setError("Enter the type.");
    } else if (((_p = dateRef.current) == null ? void 0 : _p.value) == null || ((_q = dateRef.current) == null ? void 0 : _q.value) == void 0 || ((_r = dateRef.current) == null ? void 0 : _r.value) == "") {
      setError("Enter the date.");
    } else {
      let sendata = {
        title: (_s = titleRef.current) == null ? void 0 : _s.value,
        titleDesc: (_t = titleDescRef.current) == null ? void 0 : _t.value,
        shortDesc: (_u = shortDescRef.current) == null ? void 0 : _u.value,
        dateTime: (_v = dateRef.current) == null ? void 0 : _v.value,
        description: (_w = descriptionRef.current) == null ? void 0 : _w.value,
        type: (_x = typeRef.current) == null ? void 0 : _x.value,
        id
      };
      if (img == null) {
        sendata["imageUrl"] = editDate.imageUrl;
      } else {
        const imageurl = await UploadFile(img);
        if (imageurl.status) {
          sendata["imageUrl"] = imageurl.data;
        } else {
          return setError(imageurl.data);
        }
      }
      const res = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/upd-neb`,
        data: sendata
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
  const titleNewRef = (0, import_react2.useRef)(null);
  const titleDescNewRef = (0, import_react2.useRef)(null);
  const descriptionNewRef = (0, import_react2.useRef)(null);
  const shortDescNewRef = (0, import_react2.useRef)(null);
  const typeNewRef = (0, import_react2.useRef)(null);
  const dateNewRef = (0, import_react2.useRef)(null);
  const submitNew = async () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    if (((_a2 = titleNewRef.current) == null ? void 0 : _a2.value) == null || ((_b2 = titleNewRef.current) == null ? void 0 : _b2.value) == void 0 || ((_c2 = titleNewRef.current) == null ? void 0 : _c2.value) == "") {
      setError("Enter the title.");
    } else if (((_d2 = titleDescNewRef.current) == null ? void 0 : _d2.value) == null || ((_e2 = titleDescNewRef.current) == null ? void 0 : _e2.value) == void 0 || ((_f2 = titleDescNewRef.current) == null ? void 0 : _f2.value) == "") {
      setError("Enter the title description.");
    } else if (((_g2 = shortDescNewRef.current) == null ? void 0 : _g2.value) == null || ((_h = shortDescNewRef.current) == null ? void 0 : _h.value) == void 0 || ((_i = shortDescNewRef.current) == null ? void 0 : _i.value) == "") {
      setError("Enter the short description.");
    } else if (((_j = descriptionNewRef.current) == null ? void 0 : _j.value) == null || ((_k = descriptionNewRef.current) == null ? void 0 : _k.value) == void 0 || ((_l = descriptionNewRef.current) == null ? void 0 : _l.value) == "") {
      setError("Enter the description.");
    } else if (((_m = typeNewRef.current) == null ? void 0 : _m.value) == null || ((_n = typeNewRef.current) == null ? void 0 : _n.value) == void 0 || ((_o = typeNewRef.current) == null ? void 0 : _o.value) == "") {
      setError("Enter the type.");
    } else if (((_p = dateNewRef.current) == null ? void 0 : _p.value) == null || ((_q = dateNewRef.current) == null ? void 0 : _q.value) == void 0 || ((_r = dateNewRef.current) == null ? void 0 : _r.value) == "") {
      setError("Enter the date.");
    } else if (img == null || img == void 0) {
      setError("Select the image..");
    } else {
      const imageurl = await UploadFile(img);
      if (imageurl.status) {
        let sendata = {
          title: (_s = titleNewRef.current) == null ? void 0 : _s.value,
          titleDesc: (_t = titleDescNewRef.current) == null ? void 0 : _t.value,
          shortDesc: (_u = shortDescNewRef.current) == null ? void 0 : _u.value,
          dateTime: (_v = dateNewRef.current) == null ? void 0 : _v.value,
          description: (_w = descriptionNewRef.current) == null ? void 0 : _w.value,
          type: (_x = typeNewRef.current) == null ? void 0 : _x.value,
          imageUrl: imageurl.data
        };
        const res = await axios_default({
          method: "post",
          url: `${BaseUrl}/api/add-neb`,
          data: sendata
        });
        if (res.data.status) {
          Q.success("Successfully added.", { theme: "dark" });
        } else {
          Q.error(res.data.message, { theme: "dark" });
        }
        setNewBox((val) => false);
        window.location.reload();
      } else {
        setError(imageurl.data);
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center overflow-y-scroll py-20 ${viewBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-96 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: viewDate.imageUrl,
              alt: "avatar",
              className: "w-56 h-56 object-cover object-center rounded-md"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 271,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 270,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white grid place-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              viewDate.title,
              " "
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 278,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: new Date(viewDate.dateTime).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            }) }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 279,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: viewDate.titleDesc }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 287,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 288,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: viewDate.shortDesc }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 289,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 290,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: viewDate.description }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 291,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 277,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 293,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              onClick: () => setViewBox(false),
              className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`,
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
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 299,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 303,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 295,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 294,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 269,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 268,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/blognews.tsx",
        lineNumber: 263,
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
            delDate.title,
            "?"
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 318,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 317,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 320,
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
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 326,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 330,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 322,
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
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 336,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Delete" }, void 0, false, {
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 340,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 332,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 321,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 316,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 315,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/blognews.tsx",
        lineNumber: 310,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center overflow-y-scroll py-20 ${editBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: img == null ? editDate.imageUrl : URL.createObjectURL(img),
              alt: "avatar",
              className: "w-40 h-40 object-cover object-center rounded-md"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 355,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 354,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "file",
              accept: "image/*",
              ref: imgref,
              onChange: (value) => {
                let file_size = parseInt(
                  (value.target.files[0].size / 1024 / 1024).toString()
                );
                if (file_size < 4) {
                  setImgerror(null);
                  setImale(value.target.files[0]);
                } else {
                  setImgerror("Image file size must be less then 4 mb");
                }
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 362,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 361,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
            imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 383,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: () => {
                  var _a2;
                  (_a2 = imgref.current) == null ? void 0 : _a2.click();
                },
                className: "text-white bg-green-600 rounded-md py-1 px-2 mx-auto text-sm",
                children: "UPLOAD IMAGE"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 388,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 387,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Title" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 397,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: titleRef,
                type: "text",
                name: "name",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the name..",
                autoComplete: "off",
                value: editDate.title,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  title: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 400,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Title Description" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 415,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: titleDescRef,
                className: "h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the number..",
                autoComplete: "off",
                value: editDate.titleDesc,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  titleDesc: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 418,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Short Description" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 431,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: shortDescRef,
                className: "h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the position..",
                autoComplete: "off",
                value: editDate.shortDesc,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  shortDesc: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 434,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Description" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 448,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: descriptionRef,
                className: "h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the position..",
                autoComplete: "off",
                value: editDate.description,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  description: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 451,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Date" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 464,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: dateRef,
                type: "date",
                name: "dob\r\n                            ",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the dob..",
                autoComplete: "off",
                value: editDate.dateTime.substring(0, 10),
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  dateTime: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 465,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Type" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 481,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "select",
              {
                ref: typeRef,
                name: "type",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "option",
                    {
                      selected: editDate.type == 1 ? true : false,
                      value: "1",
                      className: "bg-[#31353f]",
                      children: "BLOG"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 487,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "option",
                    {
                      selected: editDate.type == 2 ? true : false,
                      value: "2",
                      className: "bg-[#31353f]",
                      children: "NEWS"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 494,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "option",
                    {
                      selected: editDate.type == 3 ? true : false,
                      value: "3",
                      className: "bg-[#31353f]",
                      children: "EVENT"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 501,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 482,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 379,
            columnNumber: 13
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 511,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 515,
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
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 521,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 525,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 517,
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
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 531,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SUBMIT" }, void 0, false, {
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 535,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 527,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 516,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 353,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 352,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/blognews.tsx",
        lineNumber: 347,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center py-20 overflow-x-scroll ${newBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: `${img == null ? "hidden" : ""} w-full grid place-items-center mb-4`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: img == null ? "/images/avatar/user.png" : URL.createObjectURL(img),
                  alt: "avatar",
                  className: "w-40 h-40 object-cover object-center rounded-md"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 554,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 549,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "file",
              accept: "image/*",
              ref: imgref,
              onChange: (value) => {
                let file_size = parseInt(
                  (value.target.files[0].size / 1024 / 1024).toString()
                );
                if (file_size < 4) {
                  setImgerror(null);
                  setImale(value.target.files[0]);
                } else {
                  setImgerror("Image file size must be less then 4 mb");
                }
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 565,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 564,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
            imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 586,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: () => {
                  var _a2;
                  (_a2 = imgref.current) == null ? void 0 : _a2.click();
                },
                className: "text-white bg-green-600 rounded-md py-1 px-2 mx-auto text-sm",
                children: "UPLOAD IMAGE"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 591,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 590,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Title" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 600,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: titleNewRef,
                type: "text",
                name: "name",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the name..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 603,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Title Description" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 611,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: titleDescNewRef,
                className: "h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the number..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 614,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Short Description" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 620,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: shortDescNewRef,
                className: "h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the position..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 623,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Description" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 630,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: descriptionNewRef,
                className: "h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the position..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 633,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Date" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 639,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: dateNewRef,
                type: "date",
                name: "dob\r\n                            ",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the dob..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 640,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm font-semibold text-left", children: "Type" }, void 0, false, {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 649,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "select",
              {
                ref: typeNewRef,
                name: "type",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "option",
                    {
                      selected: editDate.type == 1 ? true : false,
                      value: "1",
                      className: "bg-[#31353f]",
                      children: "BLOG"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 655,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "option",
                    {
                      selected: editDate.type == 2 ? true : false,
                      value: "2",
                      className: "bg-[#31353f]",
                      children: "NEWS"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 662,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "option",
                    {
                      selected: editDate.type == 3 ? true : false,
                      value: "3",
                      className: "bg-[#31353f]",
                      children: "EVENT"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 669,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 650,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 582,
            columnNumber: 13
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 679,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 683,
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
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 689,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 693,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 685,
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
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 699,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SUBMIT" }, void 0, false, {
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 703,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/blognews.tsx",
                lineNumber: 695,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 684,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 548,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 547,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/blognews.tsx",
        lineNumber: 542,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "NEWS EVENT BLOG" }, void 0, false, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 711,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 712,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            onClick: () => setNewBox(true),
            className: "bg-green-600 py-1 px-2 text-sm text-white rounded-md",
            children: "ADD NEW"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 713,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/blognews.tsx",
        lineNumber: 710,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/blognews.tsx",
        lineNumber: 720,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: "Id" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 723,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 724,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: "Name" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 725,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 726,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: "Type" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 727,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 728,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: "Action" }, void 0, false, {
            fileName: "app/routes/admin/home/blognews.tsx",
            lineNumber: 729,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/blognews.tsx",
          lineNumber: 722,
          columnNumber: 11
        }, this),
        neb.map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: val.id }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 737,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 738,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: val.title }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 739,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 740,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: val.type == 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14 py-1 text-white text-xs bg-red-500 text-center rounded-md font-medium", children: "BLOG" }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 743,
                  columnNumber: 21
                }, this) : val.type == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium", children: "NEWS" }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 747,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14 py-1 text-white text-xs bg-blue-500 text-center rounded-md font-medium", children: "EVENT" }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 751,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 741,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 756,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 flex text-bold text-md gap-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                      className: "text-cyan-500 cursor-pointer",
                      onClick: () => edit(val.id),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEdit }, void 0, false, {
                        fileName: "app/routes/admin/home/blognews.tsx",
                        lineNumber: 762,
                        columnNumber: 21
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 758,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-emerald-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faEye,
                      onClick: () => view(val.id)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 765,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 764,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-rose-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faTrash,
                      onClick: () => del(val.id)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/blognews.tsx",
                      lineNumber: 771,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/admin/home/blognews.tsx",
                    lineNumber: 770,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin/home/blognews.tsx",
                  lineNumber: 757,
                  columnNumber: 17
                }, this)
              ]
            },
            index,
            true,
            {
              fileName: "app/routes/admin/home/blognews.tsx",
              lineNumber: 733,
              columnNumber: 15
            },
            this
          );
        })
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/blognews.tsx",
        lineNumber: 721,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, {}, void 0, false, {
        fileName: "app/routes/admin/home/blognews.tsx",
        lineNumber: 781,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/blognews.tsx",
      lineNumber: 709,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/blognews.tsx",
    lineNumber: 261,
    columnNumber: 5
  }, this);
};
var blognews_default = NEWSEVENTBLOG;
export {
  blognews_default as default,
  links
};
//# sourceMappingURL=/build/routes/admin/home/blognews-HA7RD2YO.js.map
