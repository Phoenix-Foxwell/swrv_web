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
} from "/build/_shared/chunk-7NI3P3WC.js";
import {
  FontAwesomeIcon,
  faEdit,
  faEye,
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

// app/routes/admin/home/user.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: ReactToastify_default }];
}
var User = () => {
  const user = useLoaderData().user;
  const [viewBox, setViewBox] = (0, import_react2.useState)(false);
  const [viewDate, setViewData] = (0, import_react2.useState)({});
  const [editBox, setEditBox] = (0, import_react2.useState)(false);
  const nameRef = (0, import_react2.useRef)(null);
  const codeRef = (0, import_react2.useRef)(null);
  const [delBox, setDelBox] = (0, import_react2.useState)(false);
  const [delDate, setDelData] = (0, import_react2.useState)({});
  const status = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/user-search`,
      data: { "id": id }
    });
    setDelBox((val) => true);
    setDelData((val) => view2.data.data[0]);
  };
  const statusButton = async (id, status2) => {
    const res = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/status-user`,
      data: { "id": id, "status": status2 == 1 ? 0 : 1 }
    });
    if (res.data.status) {
      Q.success("Successfully updated.", { theme: "dark" });
    } else {
      Q.error(res.data.message, { theme: "dark" });
    }
    setDelBox((val) => false);
    window.location.reload();
  };
  const view = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/user-search`,
      data: { "id": id }
    });
    setViewBox((val) => true);
    setViewData((val) => view2.data.data[0]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center py-20 overflow-x-scroll ${viewBox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: viewDate.pic == void 0 || viewDate.pic == void 0 || viewDate.pic == "" || viewDate.pic == "0" ? "/images/avatar/user.png" : viewDate.pic, alt: "avatar", className: "w-40 h-40 object-cover object-center rounded-md" }, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 87,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "ID : ",
            viewDate.id
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 91,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Name : ",
            viewDate.userName,
            " "
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 92,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Nick Name : ",
            viewDate.nickName,
            " "
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 93,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Code : ",
            viewDate.bio
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 94,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Address : ",
            viewDate.address
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 95,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "contact : ",
            viewDate.contact
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 96,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Date of Birth : ",
            new Date(viewDate.dob).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 97,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Email : ",
            viewDate.email
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 103,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Bio : ",
            viewDate.bio
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 104,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Career History : ",
            viewDate.careerHistory
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 105,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Rating : ",
            Number(viewDate.rating).toString().split(".")[0]
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 106,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 90,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 108,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setViewBox(false), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 111,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 112,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 110,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 109,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 89,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/user.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/user.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${delBox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Are you Sure you want to change the status of ",
        delDate.userName,
        " user?"
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 123,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 122,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 125,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setDelBox(false), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 128,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 129,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 127,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => statusButton(delDate.id, delDate.status.code), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEdit, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 132,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CHANGE" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 133,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 131,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 126,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/user.tsx",
      lineNumber: 121,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/user.tsx",
      lineNumber: 120,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/user.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "User" }, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 140,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 141,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: "Id" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 144,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 145,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-44", children: "Name" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 146,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 147,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: "Status" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 148,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 149,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: "Action" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 150,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 143,
          columnNumber: 21
        }, this),
        user.map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: val.id }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 156,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 157,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-44", children: val.userName }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 158,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 159,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: Number(val.userStatus) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium", children: "ACTIVE" }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 161,
              columnNumber: 67
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 py-1 text-white text-xs bg-rose-500 text-center rounded-md font-medium", children: "INACTIVE" }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 161,
              columnNumber: 176
            }, this) }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 160,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 163,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 flex text-bold text-md gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-emerald-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEye, onClick: () => view(val.id) }, void 0, false, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 166,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 165,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-cyan-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEdit, onClick: () => status(val.id) }, void 0, false, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 169,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 168,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 164,
              columnNumber: 37
            }, this)
          ] }, index, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 155,
            columnNumber: 33
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 142,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, {}, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 178,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/user.tsx",
      lineNumber: 139,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/user.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this);
};
var user_default = User;
export {
  user_default as default,
  links
};
//# sourceMappingURL=/build/routes/admin/home/user-M6XNEPRY.js.map
