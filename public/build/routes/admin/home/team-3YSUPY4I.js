import {
  Q,
  k
} from "/build/_shared/chunk-3ZBFQDQ5.js";
import {
  ReactToastify_default
} from "/build/_shared/chunk-5SSIYQM7.js";
import {
  UploadFile
} from "/build/_shared/chunk-F6W2H234.js";
import {
  FontAwesomeIcon,
  faEdit,
  faEye,
  faFill,
  faTrash,
  faXmark
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
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

// app/routes/admin/home/team.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: ReactToastify_default }];
}
var Team = () => {
  var _a, _b, _c, _d, _e, _f;
  const team = useLoaderData().team;
  const [img, setImale] = (0, import_react2.useState)(null);
  let imgref = (0, import_react2.useRef)(null);
  const [imgerror, setImgerror] = (0, import_react2.useState)(null);
  const [viewBox, setViewBox] = (0, import_react2.useState)(false);
  const [viewDate, setViewData] = (0, import_react2.useState)({});
  const [editBox, setEditBox] = (0, import_react2.useState)(false);
  const nameRef = (0, import_react2.useRef)(null);
  const numberRef = (0, import_react2.useRef)(null);
  const descriptionRef = (0, import_react2.useRef)(null);
  const dobRef = (0, import_react2.useRef)(null);
  const imageUrlRef = (0, import_react2.useRef)(null);
  const positonRef = (0, import_react2.useRef)(null);
  const [editDate, setEditData] = (0, import_react2.useState)({
    name: ((_a = nameRef.current) == null ? void 0 : _a.value) || "",
    description: ((_b = descriptionRef.current) == null ? void 0 : _b.value) || "",
    dob: ((_c = dobRef.current) == null ? void 0 : _c.value) || "",
    imageUrl: ((_d = imageUrlRef.current) == null ? void 0 : _d.value) || "",
    number: ((_e = numberRef.current) == null ? void 0 : _e.value) || "",
    positon: ((_f = positonRef.current) == null ? void 0 : _f.value) || ""
  });
  const [error, setError] = (0, import_react2.useState)("");
  const edit = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-team-byid`,
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
      url: `${BaseUrl}/api/get-team-byid`,
      data: { id }
    });
    setDelBox((val) => true);
    setDelData((val) => view2.data.data[0]);
  };
  const delButton = async (id) => {
    const res = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/del-team`,
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
      url: `${BaseUrl}/api/get-team-byid`,
      data: { id }
    });
    setViewBox((val) => true);
    setViewData((val) => view2.data.data[0]);
  };
  const submit = async (id) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    if (((_a2 = nameRef.current) == null ? void 0 : _a2.value) == null || ((_b2 = nameRef.current) == null ? void 0 : _b2.value) == void 0 || ((_c2 = nameRef.current) == null ? void 0 : _c2.value) == "") {
      setError("Enter the name.");
    } else if (((_d2 = dobRef.current) == null ? void 0 : _d2.value) == null || ((_e2 = dobRef.current) == null ? void 0 : _e2.value) == void 0 || ((_f2 = dobRef.current) == null ? void 0 : _f2.value) == "") {
      setError("Enter the date.");
    } else if (((_g = numberRef.current) == null ? void 0 : _g.value) == null || ((_h = numberRef.current) == null ? void 0 : _h.value) == void 0 || ((_i = numberRef.current) == null ? void 0 : _i.value) == "") {
      setError("Enter the number.");
    } else if (((_j = positonRef.current) == null ? void 0 : _j.value) == null || ((_k = positonRef.current) == null ? void 0 : _k.value) == void 0 || ((_l = positonRef.current) == null ? void 0 : _l.value) == "") {
      setError("Enter the position.");
    } else if (((_m = descriptionRef.current) == null ? void 0 : _m.value) == null || ((_n = descriptionRef.current) == null ? void 0 : _n.value) == void 0 || ((_o = descriptionRef.current) == null ? void 0 : _o.value) == "") {
      setError("Enter the description.");
    } else {
      let sendata = {
        name: (_p = nameRef.current) == null ? void 0 : _p.value,
        number: (_q = numberRef.current) == null ? void 0 : _q.value,
        positon: (_r = positonRef.current) == null ? void 0 : _r.value,
        dob: (_s = dobRef.current) == null ? void 0 : _s.value,
        description: (_t = descriptionRef.current) == null ? void 0 : _t.value,
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
        url: `${BaseUrl}/api/upd-team`,
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
  const nameNewRef = (0, import_react2.useRef)(null);
  const numberNewRef = (0, import_react2.useRef)(null);
  const descriptionNewRef = (0, import_react2.useRef)(null);
  const dobNewRef = (0, import_react2.useRef)(null);
  const positonNewRef = (0, import_react2.useRef)(null);
  const submitNew = async () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    if (((_a2 = nameNewRef.current) == null ? void 0 : _a2.value) == null || ((_b2 = nameNewRef.current) == null ? void 0 : _b2.value) == void 0 || ((_c2 = nameNewRef.current) == null ? void 0 : _c2.value) == "") {
      setError("Enter the name.");
    } else if (((_d2 = dobNewRef.current) == null ? void 0 : _d2.value) == null || ((_e2 = dobNewRef.current) == null ? void 0 : _e2.value) == void 0 || ((_f2 = dobNewRef.current) == null ? void 0 : _f2.value) == "") {
      setError("Enter the date.");
    } else if (((_g = numberNewRef.current) == null ? void 0 : _g.value) == null || ((_h = numberNewRef.current) == null ? void 0 : _h.value) == void 0 || ((_i = numberNewRef.current) == null ? void 0 : _i.value) == "") {
      setError("Enter the number.");
    } else if (((_j = positonNewRef.current) == null ? void 0 : _j.value) == null || ((_k = positonNewRef.current) == null ? void 0 : _k.value) == void 0 || ((_l = positonNewRef.current) == null ? void 0 : _l.value) == "") {
      setError("Enter the positon.");
    } else if (((_m = descriptionNewRef.current) == null ? void 0 : _m.value) == null || ((_n = descriptionNewRef.current) == null ? void 0 : _n.value) == void 0 || ((_o = descriptionNewRef.current) == null ? void 0 : _o.value) == "") {
      setError("Enter the description.");
    } else if (img == null || img == void 0) {
      setError("Select the image..");
    } else {
      const imageurl = await UploadFile(img);
      if (imageurl.status) {
        let sendata = {
          name: (_p = nameNewRef.current) == null ? void 0 : _p.value,
          number: (_q = numberNewRef.current) == null ? void 0 : _q.value,
          positon: (_r = positonNewRef.current) == null ? void 0 : _r.value,
          dob: (_s = dobNewRef.current) == null ? void 0 : _s.value,
          description: (_t = descriptionNewRef.current) == null ? void 0 : _t.value,
          imageUrl: imageurl.data
        };
        const res = await axios_default({
          method: "post",
          url: `${BaseUrl}/api/add-team`,
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
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${viewBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
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
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 252,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 251,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white grid place-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              viewDate.name,
              " "
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 259,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: viewDate.positon }, void 0, false, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 260,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: viewDate.number }, void 0, false, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 261,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: viewDate.description }, void 0, false, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 262,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: new Date(viewDate.dob).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            }) }, void 0, false, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 263,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 258,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 272,
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
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 278,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 282,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 274,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 273,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 250,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 249,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/team.tsx",
        lineNumber: 244,
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
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 297,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 296,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 299,
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
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 305,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 309,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 301,
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
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 315,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Delete" }, void 0, false, {
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 319,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 311,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 294,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/team.tsx",
        lineNumber: 289,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${editBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
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
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 334,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 333,
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
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 341,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 340,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
            imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 362,
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
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 367,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 366,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: nameRef,
                type: "text",
                name: "name",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the name..",
                autoComplete: "off",
                value: editDate.name,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  name: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 376,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: numberRef,
                type: "number",
                name: "number",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the number..",
                autoComplete: "off",
                value: editDate.number,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  number: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 391,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: positonRef,
                type: "text",
                name: "positon",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the position..",
                autoComplete: "off",
                value: editDate.positon,
                onChange: (e) => setEditData((data) => ({
                  ...data,
                  positon: e.target.value
                }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 406,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: dobRef,
                type: "date",
                name: "dob",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the dob..",
                autoComplete: "off",
                value: editDate.dob.substring(0, 10),
                onChange: (e) => setEditData((data) => ({ ...data, dob: e.target.value }))
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 421,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: descriptionRef,
                name: "description",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the description..",
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
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 433,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 358,
            columnNumber: 13
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 449,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 453,
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
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 459,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 463,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 455,
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
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 469,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SUBMIT" }, void 0, false, {
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 473,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 465,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 454,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 332,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 331,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/team.tsx",
        lineNumber: 326,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${newBox ? "grid" : "hidden"}`,
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
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 492,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 487,
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
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 503,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 502,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
            imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 524,
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
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 529,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 528,
              columnNumber: 15
            }, this),
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
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 538,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: numberNewRef,
                type: "number",
                name: "number",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the number..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 546,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: positonNewRef,
                type: "text",
                name: "positon",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the position..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 554,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: dobNewRef,
                type: "date",
                name: "dob",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the dob..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 562,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: descriptionNewRef,
                name: "description",
                className: "py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",
                placeholder: "Enter the description..",
                autoComplete: "off"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 570,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 520,
            columnNumber: 13
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 579,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 583,
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
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 589,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 593,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 585,
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
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 599,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SUBMIT" }, void 0, false, {
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 603,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/team.tsx",
                lineNumber: 595,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 584,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 486,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 485,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/team.tsx",
        lineNumber: 480,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Team" }, void 0, false, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 611,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 612,
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
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 613,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/team.tsx",
        lineNumber: 610,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/team.tsx",
        lineNumber: 620,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: "Id" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 623,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 624,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: "Name" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 625,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 626,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: "Position" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 627,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 628,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: "Action" }, void 0, false, {
            fileName: "app/routes/admin/home/team.tsx",
            lineNumber: 629,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/team.tsx",
          lineNumber: 622,
          columnNumber: 11
        }, this),
        team.map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: val.id }, void 0, false, {
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 637,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 638,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: val.name }, void 0, false, {
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 639,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 640,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: val.positon }, void 0, false, {
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 641,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 642,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 flex text-bold text-md gap-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                      className: "text-cyan-500 cursor-pointer",
                      onClick: () => edit(val.id),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEdit }, void 0, false, {
                        fileName: "app/routes/admin/home/team.tsx",
                        lineNumber: 648,
                        columnNumber: 21
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 644,
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
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 651,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 650,
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
                      fileName: "app/routes/admin/home/team.tsx",
                      lineNumber: 657,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/admin/home/team.tsx",
                    lineNumber: 656,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin/home/team.tsx",
                  lineNumber: 643,
                  columnNumber: 17
                }, this)
              ]
            },
            index,
            true,
            {
              fileName: "app/routes/admin/home/team.tsx",
              lineNumber: 633,
              columnNumber: 15
            },
            this
          );
        })
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/team.tsx",
        lineNumber: 621,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, {}, void 0, false, {
        fileName: "app/routes/admin/home/team.tsx",
        lineNumber: 667,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/team.tsx",
      lineNumber: 609,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/team.tsx",
    lineNumber: 242,
    columnNumber: 5
  }, this);
};
var team_default = Team;
export {
  team_default as default,
  links
};
//# sourceMappingURL=/build/routes/admin/home/team-3YSUPY4I.js.map
