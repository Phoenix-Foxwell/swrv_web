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

// app/routes/admin/home/campaign.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: ReactToastify_default }];
}
var Campaign = () => {
  const campaign = useLoaderData().campaign;
  const [viewBox, setViewBox] = (0, import_react2.useState)(false);
  const [viewDate, setViewData] = (0, import_react2.useState)({});
  const [delBox, setDelBox] = (0, import_react2.useState)(false);
  const [delDate, setDelData] = (0, import_react2.useState)({});
  const status = async (id) => {
    const view2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/campaign-search`,
      data: { "id": id }
    });
    setDelBox((val) => true);
    setDelData((val) => view2.data.data[0]);
  };
  const statusButton = async (id, status2) => {
    const res = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/status-campaign`,
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
      url: `${BaseUrl}/api/campaign-search`,
      data: { "id": id }
    });
    setViewBox((val) => true);
    setViewData((val) => view2.data.data[0]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center py-20 overflow-y-scroll ${viewBox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "ID : ",
          viewDate.id
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 80,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Name : ",
          viewDate.campaignName,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 81,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Info : ",
          viewDate.campaignInfo,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 82,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Cost Per Post : ",
          viewDate.costPerPost,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 83,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Hashtag : ",
          viewDate.hashtags,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 84,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Hashtag : ",
          viewDate.mentions,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 85,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Dont's : ",
          viewDate.donts
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 86,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Do's : ",
          viewDate.dos
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 87,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Min Target  : ",
          viewDate.minTarget
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 88,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Max Target : ",
          viewDate.maxTarget
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Min Reach : ",
          viewDate.minReach
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Max Reach : ",
          viewDate.maxReach
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 91,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Start At : ",
          new Date(viewDate.startAt).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 92,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "End At : ",
          new Date(viewDate.endAt).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 98,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 79,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 105,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setViewBox(false), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 108,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 109,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 107,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 106,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/campaign.tsx",
      lineNumber: 78,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/campaign.tsx",
      lineNumber: 77,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/campaign.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${delBox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] rounded-lg p-4 w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Are you Sure you want to change the status of ",
        delDate.campaignName,
        " champaign?"
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 120,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 119,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-gray-300 my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 122,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setDelBox(false), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faXmark, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 125,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CLOSE" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 126,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 124,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => statusButton(delDate.id, delDate.campaignStatus), className: `text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEdit, className: "w-6" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 129,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "CHANGE" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 130,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 128,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 123,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/campaign.tsx",
      lineNumber: 118,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/campaign.tsx",
      lineNumber: 117,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/home/campaign.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-[#1b2028] my-2 rounded-md p-4 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "Campaign" }, void 0, false, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: "Id" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 141,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 142,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-44", children: "Name" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 143,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 144,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: "Status" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 145,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 146,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32", children: "Action" }, void 0, false, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 147,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/home/campaign.tsx",
          lineNumber: 140,
          columnNumber: 21
        }, this),
        campaign.map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14", children: val.id }, void 0, false, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 153,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 154,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-44", children: val.campaignName }, void 0, false, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 155,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 156,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: Number(val.campaignStatus) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium", children: "ACTIVE" }, void 0, false, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 158,
              columnNumber: 71
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 py-1 text-white text-xs bg-rose-500 text-center rounded-md font-medium", children: "INACTIVE" }, void 0, false, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 158,
              columnNumber: 180
            }, this) }, void 0, false, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 157,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 160,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 flex text-bold text-md gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-emerald-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEye, onClick: () => view(val.id) }, void 0, false, {
                fileName: "app/routes/admin/home/campaign.tsx",
                lineNumber: 163,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/admin/home/campaign.tsx",
                lineNumber: 162,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-cyan-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faEdit, onClick: () => status(val.id) }, void 0, false, {
                fileName: "app/routes/admin/home/campaign.tsx",
                lineNumber: 166,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/admin/home/campaign.tsx",
                lineNumber: 165,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin/home/campaign.tsx",
              lineNumber: 161,
              columnNumber: 37
            }, this)
          ] }, index, true, {
            fileName: "app/routes/admin/home/campaign.tsx",
            lineNumber: 152,
            columnNumber: 33
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 139,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, {}, void 0, false, {
        fileName: "app/routes/admin/home/campaign.tsx",
        lineNumber: 175,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/home/campaign.tsx",
      lineNumber: 136,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/home/campaign.tsx",
    lineNumber: 74,
    columnNumber: 9
  }, this);
};
var campaign_default = Campaign;
export {
  campaign_default as default,
  links
};
//# sourceMappingURL=/build/routes/admin/home/campaign-AO2MIFVU.js.map
