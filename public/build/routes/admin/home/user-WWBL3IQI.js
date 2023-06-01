import {
  Q,
  k
} from "/build/_shared/chunk-3ZBFQDQ5.js";
import {
  ReactToastify_default
} from "/build/_shared/chunk-5SSIYQM7.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-75EXHREH.js";
import {
  FontAwesomeIcon,
  faEdit,
  faEye,
  faXmark
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

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
      data: { id }
    });
    setDelBox((val) => true);
    setDelData((val) => view2.data.data[0]);
  };
  const statusButton = async (id, status2) => {
    const res = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/status-user`,
      data: { id, status: status2 == 1 ? 0 : 1 }
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
      data: { id }
    });
    setViewBox((val) => true);
    setViewData((val) => view2.data.data[0]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center py-20 overflow-x-scroll ${viewBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: viewDate.pic == void 0 || viewDate.pic == void 0 || viewDate.pic == "" || viewDate.pic == "0" ? "/images/avatar/user.png" : viewDate.pic,
              alt: "avatar",
              className: "w-40 h-40 object-cover object-center rounded-md"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 88,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "ID : ",
                viewDate.id
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 103,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Name : ",
                viewDate.userName,
                " "
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 104,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Nick Name : ",
                viewDate.nickName,
                " "
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 105,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Code : ",
                viewDate.bio
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 106,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Address : ",
                viewDate.address
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 107,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "contact : ",
                viewDate.contact
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 108,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Date of Birth :",
                " ",
                new Date(viewDate.dob).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 109,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Email : ",
                viewDate.email
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 118,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Bio : ",
                viewDate.bio
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 119,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Career History : ",
                viewDate.careerHistory
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 120,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Rating : ",
                Number(viewDate.rating).toString().split(".")[0]
              ] }, void 0, true, {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 121,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: `/admin/home/userhandel/${viewDate.id}`,
                className: "py-2 px-6 rounded-md border border-green-400 bg-green-500 bg-opacity-10 text-green-500 cursor-pointer",
                children: "View Insights"
              },
              void 0,
              false,
              {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 124,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 123,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 131,
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
                      fileName: "app/routes/admin/home/user.tsx",
                      lineNumber: 137,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/user.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 133,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 132,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 101,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 81,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${delBox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Are you Sure you want to change the status of ",
            delDate.userName,
            " ",
            "user?"
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 155,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 161,
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
                      fileName: "app/routes/admin/home/user.tsx",
                      lineNumber: 167,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
                    fileName: "app/routes/admin/home/user.tsx",
                    lineNumber: 171,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 163,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => statusButton(delDate.id, delDate.status.code),
                className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faEdit,
                      className: "w-6"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/user.tsx",
                      lineNumber: 177,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CHANGE" }, void 0, false, {
                    fileName: "app/routes/admin/home/user.tsx",
                    lineNumber: 181,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/admin/home/user.tsx",
                lineNumber: 173,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 162,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 153,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 148,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "User" }, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: "Id" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 192,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 193,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-44", children: "Name" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 194,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 195,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: "Status" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: "Action" }, void 0, false, {
            fileName: "app/routes/admin/home/user.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/user.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        user.map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: val.id }, void 0, false, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 206,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 207,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-44", children: val.userName }, void 0, false, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 208,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 209,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: Number(val.userStatus) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium", children: "ACTIVE" }, void 0, false, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 212,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 py-1 text-white text-xs bg-rose-500 text-center rounded-md font-medium", children: "INACTIVE" }, void 0, false, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 216,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 210,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 221,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 flex text-bold text-md gap-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-emerald-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faEye,
                      onClick: () => view(val.id)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/user.tsx",
                      lineNumber: 224,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/admin/home/user.tsx",
                    lineNumber: 223,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-cyan-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      icon: faEdit,
                      onClick: () => status(val.id)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/admin/home/user.tsx",
                      lineNumber: 230,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/admin/home/user.tsx",
                    lineNumber: 229,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin/home/user.tsx",
                  lineNumber: 222,
                  columnNumber: 17
                }, this)
              ]
            },
            index,
            true,
            {
              fileName: "app/routes/admin/home/user.tsx",
              lineNumber: 202,
              columnNumber: 15
            },
            this
          );
        })
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, {}, void 0, false, {
        fileName: "app/routes/admin/home/user.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/user.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/user.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
};
var user_default = User;
export {
  user_default as default,
  links
};
//# sourceMappingURL=/build/routes/admin/home/user-WWBL3IQI.js.map
