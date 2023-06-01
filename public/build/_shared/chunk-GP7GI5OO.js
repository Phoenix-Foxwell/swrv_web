import {
  influencercard_default
} from "/build/_shared/chunk-VH6VKIDI.js";
import {
  CampaginCard
} from "/build/_shared/chunk-SMFAEXAS.js";
import {
  require_react_switch
} from "/build/_shared/chunk-IUMXW2I4.js";
import {
  es_default
} from "/build/_shared/chunk-2QADXOD2.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  getCampaignType
} from "/build/_shared/chunk-52ZY7WVI.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-G6FD4XLU.js";
import {
  FontAwesomeIcon,
  faAdd,
  faSearch,
  faSortDown,
  faTrash,
  faXmark
} from "/build/_shared/chunk-KLMIUVT5.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/findcampaign.tsx
var import_react_switch = __toESM(require_react_switch());
var import_react2 = __toESM(require_react());

// app/components/utils/brandcard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BrandCard = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }, void 0, false, {
        fileName: "app/components/utils/brandcard.tsx",
        lineNumber: 19,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/utils/brandcard.tsx",
        lineNumber: 18,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/components/utils/brandcard.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/brandcard.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: [
      "email : ",
      props.email
    ] }, void 0, true, {
      fileName: "app/components/utils/brandcard.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: [
      "Website : ",
      props.website
    ] }, void 0, true, {
      fileName: "app/components/utils/brandcard.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/brand/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }, void 0, false, {
      fileName: "app/components/utils/brandcard.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/utils/brandcard.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/utils/brandcard.tsx",
    lineNumber: 16,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/utils/brandcard.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
};

// app/routes/home/findcampaign.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var FindCampaign = () => {
  const loader = useLoaderData();
  const isbrand = loader.user.role.code != 10;
  const [searchBrand, setSearchBrand] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: isbrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Find Influencer" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the influecner." }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 50,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      InfluencerSearch,
      {
        platform: loader.platform,
        country: loader.country,
        category: loader.category
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 60,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 48,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: [
          "Find ",
          searchBrand ? "brand" : "campaign"
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: [
          "Here you can search manage all the",
          " ",
          searchBrand ? "brand" : "campaign",
          " that you are participating in."
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block md:grow" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 83,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            onClick: () => {
              setSearchBrand(false);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              CusButton,
              {
                height: "h-12",
                text: "Campaign",
                fontwidth: "font-bold",
                background: searchBrand ? "bg-gray-300" : "bg-cyan-300",
                textColor: searchBrand ? "text-gray-600" : "text-black"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 90,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 85,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            onClick: () => {
              setSearchBrand(true);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              CusButton,
              {
                height: "h-12",
                text: "Brand",
                fontwidth: "font-bold",
                background: searchBrand ? "bg-cyan-300" : "bg-gray-300",
                textColor: searchBrand ? "text-black" : "text-gray-600"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 104,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 99,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    searchBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BrandSearch, {}, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 115,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      CampaignSearch,
      {
        platform: loader.platform,
        country: loader.country,
        category: loader.category
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 117,
        columnNumber: 15
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 71,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};
var findcampaign_default = FindCampaign;
var CampaignSearch = (props) => {
  const country = props.country;
  const platform = props.platform;
  const category = props.category;
  const [searchType, setSearchType] = (0, import_react2.useState)(
    0 /* TextSearch */
  );
  const [active, setActive] = (0, import_react2.useState)(false);
  const [camSearchResult, setCamSearchResult] = (0, import_react2.useState)([]);
  const champTextSearch = (0, import_react2.useRef)(null);
  const [selCountry, setSelCountry] = (0, import_react2.useState)([]);
  const [con, setcon] = (0, import_react2.useState)(false);
  const [selPlatform, setSelectedPlatform] = (0, import_react2.useState)([]);
  const [selcategory, setSelcategory] = (0, import_react2.useState)([]);
  const [cat, setcat] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const minReachSearch = (0, import_react2.useRef)(null);
  const maxReachSearch = (0, import_react2.useRef)(null);
  const cppSearch = (0, import_react2.useRef)(null);
  const minTargetSearch = (0, import_react2.useRef)(null);
  const totalTargetSearch = (0, import_react2.useRef)(null);
  const camptextsearch = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    setError(null);
    let req = {
      active: active ? "1" : "0"
    };
    if (champTextSearch.current.value != null && champTextSearch.current.value != void 0 && champTextSearch.current.value != "")
      req.name = champTextSearch.current.value;
    if (((_a = minReachSearch.current) == null ? void 0 : _a.value) != null && ((_b = minReachSearch.current) == null ? void 0 : _b.value) != void 0 && ((_c = minReachSearch.current) == null ? void 0 : _c.value) != "")
      req.minReach = (_d = minReachSearch.current) == null ? void 0 : _d.value;
    if (((_e = maxReachSearch.current) == null ? void 0 : _e.value) != null && ((_f = maxReachSearch.current) == null ? void 0 : _f.value) != void 0 && ((_g = maxReachSearch.current) == null ? void 0 : _g.value) != "")
      req.maxReach = (_h = maxReachSearch.current) == null ? void 0 : _h.value;
    if (((_i = cppSearch.current) == null ? void 0 : _i.value) != null && ((_j = cppSearch.current) == null ? void 0 : _j.value) != void 0 && ((_k = cppSearch.current) == null ? void 0 : _k.value) != "")
      req.costPerPost = (_l = cppSearch.current) == null ? void 0 : _l.value;
    if (((_m = minTargetSearch.current) == null ? void 0 : _m.value) != null && ((_n = minTargetSearch.current) == null ? void 0 : _n.value) != void 0 && ((_o = minTargetSearch.current) == null ? void 0 : _o.value) != "")
      req.minTarget = (_p = minTargetSearch.current) == null ? void 0 : _p.value;
    if (((_q = totalTargetSearch.current) == null ? void 0 : _q.value) != null && ((_r = totalTargetSearch.current) == null ? void 0 : _r.value) != void 0 && ((_s = totalTargetSearch.current) == null ? void 0 : _s.value) != "")
      req.totalTarget = (_t = totalTargetSearch.current) == null ? void 0 : _t.value;
    const data = await axios_default.post(`${BaseUrl}/api/campaign-search`, req);
    if (data.data.status == false)
      return setError(data.data.message);
    setCamSearchResult(data.data.data);
  };
  const campadvancesearch = async () => {
    setError(null);
    let req = {
      active: active ? "1" : "0"
    };
    if (selcategory.length != 0)
      req.category = selcategory[0]["id"];
    if (selPlatform.length != 0)
      req.platform = selPlatform.join(",");
    if (selCountry.length != 0)
      req.country = selCountry[0]["id"];
    const data = await axios_default.post(`${BaseUrl}/api/campaign-search`, req);
    if (data.data.status == false)
      return setError(data.data.message);
    setCamSearchResult(data.data.data);
  };
  const delsearch = () => {
    setCamSearchResult([]);
  };
  const [showFilter, setFilter] = (0, import_react2.useState)(false);
  const [filterName, setFilterName] = (0, import_react2.useState)(false);
  const [nameError, setNameError] = (0, import_react2.useState)(null);
  const [localFilter, setLocalFilter] = es_default(
    "CampaignSearch",
    {
      defaultValue: []
    }
  );
  const nameFilterRef = (0, import_react2.useRef)(null);
  const saveFilter = (name) => {
    if (name == "" || name == null || name == void 0)
      return setNameError("Enter the Filter name");
    if (selcategory.length == 0)
      return setNameError("Select the category");
    if (selPlatform.length == 0)
      return setNameError("Select the platform");
    if (selCountry.length == 0)
      return setNameError("Select the country");
    for (let i = 0; i < localFilter.length; i++) {
      if (name == localFilter[i]["name"]) {
        return setNameError("Filter name already exist.");
      }
    }
    const filter = {
      name,
      country: selCountry,
      platform: selPlatform,
      category: selcategory,
      active
    };
    setLocalFilter([...localFilter, filter]);
    nameFilterRef.current.value = "";
    setFilterName(false);
  };
  const loadFilter = (filterdata) => {
    setSelcategory(filterdata["category"]);
    setSelectedPlatform(filterdata["platform"]);
    setSelCountry(filterdata["country"]);
    setActive(filterdata["active"]);
    setFilter(false);
  };
  function handleKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9\b]*$/;
    if (!regex.test(keyValue)) {
      event.preventDefault();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-xl shadow-xl p-6 bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex px-2 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-black text-xl text-left font-bold", children: "Filter" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 310,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 311,
          columnNumber: 13
        }, this),
        searchType == 0 /* TextSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",
                onClick: () => {
                  setFilterName(!filterName);
                },
                children: "Save filter"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 315,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: `w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${filterName ? "" : "hidden"}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center text-sm text-slate-900 font-semibold my-2", children: "Filter name" }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 327,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "input",
                    {
                      ref: nameFilterRef,
                      type: "text",
                      className: "bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 330,
                      columnNumber: 21
                    },
                    this
                  ),
                  nameError == "" || nameError == null || nameError == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: nameError }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 338,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "button",
                    {
                      onClick: () => {
                        saveFilter(nameFilterRef.current.value);
                      },
                      className: "text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500",
                      children: "SAVE"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 342,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "button",
                    {
                      onClick: () => {
                        setFilterName(false);
                      },
                      className: "text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1",
                      children: "Close"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 350,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 323,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 314,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-6" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 360,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",
                onClick: () => {
                  setFilter(!showFilter);
                },
                children: [
                  "Saved filter",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 369,
                    columnNumber: 21
                  }, this),
                  " "
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 362,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: `w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${showFilter ? "" : "hidden"}`,
                children: localFilter.map((val, index) => {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "div",
                    {
                      className: "w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer",
                      onClick: () => {
                        loadFilter(val);
                      },
                      children: val["name"]
                    },
                    index,
                    false,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 377,
                      columnNumber: 25
                    },
                    this
                  );
                })
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 371,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 361,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 313,
          columnNumber: 15
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 309,
        columnNumber: 11
      }, this),
      searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex flex-wrap gap-6 justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-80", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl font-semibold text-primary", children: "Search" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 399,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                ref: champTextSearch,
                type: "text",
                className: "bg-transparent w-full outline-none py-1 px-2",
                placeholder: "Start typing to search.."
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 401,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 400,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 398,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-80", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl font-semibold text-primary", children: "Min Reach" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 410,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                ref: minReachSearch,
                type: "text",
                className: "bg-transparent w-full outline-none py-1 px-2",
                placeholder: "Min Reach",
                onKeyDown: handleKeyPress
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 414,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 413,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 409,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-80", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl font-semibold text-primary", children: "Max Reach" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 424,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                ref: maxReachSearch,
                type: "text",
                className: "bg-transparent w-full outline-none py-1 px-2",
                placeholder: "Max Reach",
                onKeyDown: handleKeyPress
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 428,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 427,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 423,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-80", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl font-semibold text-primary", children: "Cost Per Post" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 438,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                ref: cppSearch,
                type: "text",
                className: "bg-transparent w-full outline-none py-1 px-2",
                placeholder: "Cost Per Post",
                onKeyDown: handleKeyPress
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 442,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 441,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 437,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-80", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl font-semibold text-primary", children: "Min Target" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 452,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                ref: minTargetSearch,
                type: "text",
                className: "bg-transparent w-full outline-none py-1 px-2",
                placeholder: "Min Target",
                onKeyDown: handleKeyPress
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 456,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 455,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 451,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-80", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl font-semibold text-primary", children: "Total target" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 466,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                ref: totalTargetSearch,
                type: "text",
                className: "bg-transparent w-full outline-none py-1 px-2",
                placeholder: "Total Target",
                onKeyDown: handleKeyPress
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 470,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 469,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 465,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 397,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react_switch.default,
              {
                onChange: () => setActive(!active),
                checked: active,
                checkedIcon: false,
                uncheckedIcon: false,
                onColor: "#03125E"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 484,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary font-bold text-ld ml-2", children: "Show only active campaigns" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 491,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 483,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 495,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "text-primary text-sm font-semibold cursor-pointer",
              onClick: () => {
                setSearchType(0 /* TextSearch */);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 502,
                  columnNumber: 19
                }, this),
                " Normal filter"
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 496,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-10" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 505,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            FontAwesomeIcon,
            {
              onClick: delsearch,
              className: "text-primary text-2xl mx-2",
              icon: faTrash
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 506,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-4" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 511,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              onClick: () => {
                camptextsearch();
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                CusButton,
                {
                  text: "Search",
                  textColor: "text-white",
                  background: "bg-primary",
                  fontwidth: "font-bold",
                  width: "w-32"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 517,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 512,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 482,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 395,
        columnNumber: 13
      }, this) : null,
      searchType == 0 /* TextSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Category" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 534,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 w-full relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcategory.map((value, i) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["categoryName"]} - [${value["categoryCode"]}]` }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 543,
                    columnNumber: 27
                  }, this)
                },
                i,
                false,
                {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 539,
                  columnNumber: 25
                },
                this
              );
            }) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 536,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 550,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
                onClick: () => {
                  setcat(!cat);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  FontAwesomeIcon,
                  {
                    icon: cat ? faXmark : faAdd
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 557,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 551,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: `bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg ${cat ? "" : "hidden"}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-80 w-full p-4 overflow-y-scroll no-scrollbar", children: [
                  category.map((val, i) => {
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "h1",
                      {
                        onClick: () => {
                          if (selcategory.includes(val)) {
                            let addcur = selcategory.filter(
                              (data) => data != val
                            );
                            setSelcategory(addcur);
                          } else {
                            setSelcategory([val]);
                          }
                          setcat(false);
                        },
                        className: `text-lg text-left text-gray-600 font-semibold cursor-pointer w-full my-2 border-b-2 ${selcategory.includes(val) ? "border-green-500 text-green-500" : "border-gray-500 text-black"}  no-scrollbar`,
                        children: [
                          val["categoryCode"],
                          " - ",
                          val["categoryName"],
                          " "
                        ]
                      },
                      i,
                      true,
                      {
                        fileName: "app/routes/home/findcampaign.tsx",
                        lineNumber: 568,
                        columnNumber: 27
                      },
                      this
                    );
                  }),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => setcat(false), className: "text-rose-500 text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20", children: "Close" }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 590,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 565,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 561,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 535,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react_switch.default,
              {
                onChange: () => setActive(!active),
                checked: active,
                checkedIcon: false,
                uncheckedIcon: false,
                onColor: "#03125E"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 596,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary font-bold text-ld ml-2", children: "Show only active campaigns" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 603,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 595,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 532,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Platforms" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 609,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-4", children: platform.map((val, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: `shrink-0 p-1 w-10 h-10 shadow-lg rounded-full ${selPlatform.includes(val.id) ? "border-2 border-blue-500" : ""} `,
                onClick: () => {
                  if (selPlatform.includes(val.id)) {
                    let setdata = selPlatform.filter(
                      (platdata) => platdata != val.id
                    );
                    setSelectedPlatform(setdata);
                  } else {
                    setSelectedPlatform([...selPlatform, val.id]);
                  }
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: platform[i]["platformLogoUrl"],
                    alt: "error",
                    className: "object-cover rounded-full w-full h-full inline-block"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 630,
                    columnNumber: 25
                  },
                  this
                )
              },
              i,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 613,
                columnNumber: 23
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 610,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 608,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary text-left font-bold text-lg", children: "Country" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 642,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selCountry.map((value, i) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["name"]} - [${value["code"]}]` }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 653,
                    columnNumber: 27
                  }, this)
                },
                i,
                false,
                {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 649,
                  columnNumber: 25
                },
                this
              );
            }) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 646,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 660,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
                onClick: () => {
                  setcon(!con);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  FontAwesomeIcon,
                  {
                    icon: con ? faXmark : faAdd
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 667,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 661,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: `bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg p-4 ${con ? "" : "hidden"}`,
                children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar", children: country.map((val, i) => {
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "h1",
                      {
                        onClick: () => {
                          if (selCountry.includes(val)) {
                            let addcur = selCountry.filter(
                              (data) => data != val
                            );
                            setSelCountry(addcur);
                          } else {
                            setSelCountry([val]);
                          }
                          setcon(false);
                        },
                        className: `text-lg text-gray-600 text-left font-semibold  w-full my-2 border-b-2 ${selCountry.includes(val) ? "border-green-500 text-green-500" : "border-gray-400 text-black"}  no-scrollbar`,
                        children: [
                          val["code"],
                          " - ",
                          val["name"]
                        ]
                      },
                      i,
                      true,
                      {
                        fileName: "app/routes/home/findcampaign.tsx",
                        lineNumber: 679,
                        columnNumber: 27
                      },
                      this
                    );
                  }) }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 676,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 671,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 645,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex mt-4 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "text-primary text-md font-semibold cursor-pointer",
                onClick: () => {
                  setSearchType(1 /* AdvanceSearch */);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 712,
                    columnNumber: 21
                  }, this),
                  " ",
                  "Advanced filter"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 706,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 715,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              FontAwesomeIcon,
              {
                onClick: delsearch,
                className: "text-primary text-2xl",
                icon: faTrash
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 716,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-4" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 721,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: campadvancesearch, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              CusButton,
              {
                text: "Search",
                textColor: "text-white",
                background: "bg-primary",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 723,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 722,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 705,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 640,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 531,
        columnNumber: 13
      }, this) : null,
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 736,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 308,
      columnNumber: 9
    }, this),
    camSearchResult.length != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchedCampaign, { data: camSearchResult }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 742,
      columnNumber: 11
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 307,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 306,
    columnNumber: 5
  }, this);
};
var InfluencerSearch = (props) => {
  const country = props.country;
  const platform = props.platform;
  const category = props.category;
  const [searchType, setSearchType] = (0, import_react2.useState)(
    1 /* AdvanceSearch */
  );
  const [active, setActive] = (0, import_react2.useState)(false);
  const [camSearchResult, setCamSearchResult] = (0, import_react2.useState)([]);
  const champTextSearch = (0, import_react2.useRef)(null);
  const [selCountry, setSelCountry] = (0, import_react2.useState)([]);
  const [con, setcon] = (0, import_react2.useState)(false);
  const [selPlatform, setSelectedPlatform] = (0, import_react2.useState)([]);
  const [selcategory, setSelcategory] = (0, import_react2.useState)([]);
  const [cat, setcat] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const camptextsearch = async (searchtext) => {
    setError(null);
    champTextSearch.current.value = "";
    if (searchtext == "" || searchtext == null || searchtext == void 0)
      return setError("Fill the field to start searching");
    let req = { search: searchtext, role: 10 };
    const data = await axios_default.post(`${BaseUrl}/api/user-search`, req);
    if (data.data.status == false) {
      setCamSearchResult([]);
      return setError(data.data.message);
    }
    setCamSearchResult(data.data.data);
  };
  const campadvancesearch = async () => {
    setError(null);
    if (selcategory.length == 0) {
      setCamSearchResult([]);
      return setError("Select the category");
    }
    if (selPlatform.length == 0) {
      setCamSearchResult([]);
      return setError("Select the platform");
    }
    if (selCountry.length == 0) {
      setCamSearchResult([]);
      return setError("Select the country");
    }
    let req = {
      active: active ? "1" : "0",
      role: 10
    };
    if (selcategory.length != 0)
      req.category = selcategory[0]["id"];
    if (selPlatform.length != 0)
      req.platform = selPlatform.join(",");
    if (selCountry.length != 0)
      req.country = selCountry[0]["id"];
    const data = await axios_default.post(`${BaseUrl}/api/user-search`, req);
    if (data.data.status == false)
      return setError(data.data.message);
    setCamSearchResult(data.data.data);
  };
  const delsearch = () => {
    setCamSearchResult([]);
  };
  const [showFilter, setFilter] = (0, import_react2.useState)(false);
  const [filterName, setFilterName] = (0, import_react2.useState)(false);
  const [nameError, setNameError] = (0, import_react2.useState)(null);
  const [localFilter, setLocalFilter] = es_default(
    "InfluencerSearch",
    {
      defaultValue: []
    }
  );
  const nameFilterRef = (0, import_react2.useRef)(null);
  const saveFilter = (name) => {
    if (name == "" || name == null || name == void 0)
      return setNameError("Enter the Filter name");
    if (selcategory.length == 0)
      return setNameError("Select the category");
    if (selPlatform.length == 0)
      return setNameError("Select the platform");
    if (selCountry.length == 0)
      return setNameError("Select the country");
    for (let i = 0; i < localFilter.length; i++) {
      if (name == localFilter[i]["name"]) {
        return setNameError("Filter name already exist.");
      }
    }
    const filter = {
      name,
      country: selCountry,
      platform: selPlatform,
      category: selcategory,
      active
    };
    setLocalFilter([...localFilter, filter]);
    nameFilterRef.current.value = "";
    setFilterName(false);
  };
  const loadFilter = (filterdata) => {
    setSelcategory(filterdata["category"]);
    setSelectedPlatform(filterdata["platform"]);
    setSelCountry(filterdata["country"]);
    setActive(filterdata["active"]);
    setFilter(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-xl shadow-xl p-6 bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex px-2 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-black text-xl text-left font-bold", children: "Filter" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 890,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 891,
          columnNumber: 13
        }, this),
        searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",
                onClick: () => {
                  setFilterName(!filterName);
                },
                children: "Save filter"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 895,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: `w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${filterName ? "" : "hidden"}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center text-sm text-slate-900 font-semibold my-2", children: "Filter name" }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 907,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "input",
                    {
                      ref: nameFilterRef,
                      type: "text",
                      className: "bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 910,
                      columnNumber: 21
                    },
                    this
                  ),
                  nameError == "" || nameError == null || nameError == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: nameError }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 918,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "button",
                    {
                      onClick: () => {
                        saveFilter(nameFilterRef.current.value);
                      },
                      className: "text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500",
                      children: "SAVE"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 922,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "button",
                    {
                      onClick: () => {
                        setFilterName(false);
                      },
                      className: "text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1",
                      children: "Close"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 930,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 903,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 894,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-6" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 940,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",
                onClick: () => {
                  setFilter(!showFilter);
                },
                children: [
                  "Saved filter",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 949,
                    columnNumber: 21
                  }, this),
                  " "
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 942,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: `w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${showFilter ? "" : "hidden"}`,
                children: localFilter.map((val, index) => {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "div",
                    {
                      className: "w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer",
                      onClick: () => {
                        loadFilter(val);
                      },
                      children: val["name"]
                    },
                    index,
                    false,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 957,
                      columnNumber: 25
                    },
                    this
                  );
                })
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 951,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 941,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 893,
          columnNumber: 15
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 889,
        columnNumber: 11
      }, this),
      searchType == 0 /* TextSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-start lg:place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 w-full flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            FontAwesomeIcon,
            {
              className: "text-gray-600",
              icon: faSearch
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 978,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "input",
            {
              ref: champTextSearch,
              type: "text",
              className: "bg-transparent w-full outline-none py-1 px-2"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 982,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 977,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 976,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 989,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "text-primary text-sm font-semibold cursor-pointer",
              onClick: () => {
                setSearchType(1 /* AdvanceSearch */);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 997,
                  columnNumber: 19
                }, this),
                " Advanced filter"
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 991,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1e3,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            FontAwesomeIcon,
            {
              onClick: delsearch,
              className: "text-primary text-2xl mx-2",
              icon: faTrash
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1001,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-4" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1006,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              onClick: () => {
                camptextsearch(champTextSearch.current.value);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                CusButton,
                {
                  text: "Search",
                  textColor: "text-white",
                  background: "bg-primary",
                  fontwidth: "font-bold",
                  width: "w-32"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 1012,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1007,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 990,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 975,
        columnNumber: 13
      }, this) : null,
      searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Category" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1029,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcategory.map((value, i) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["categoryName"]} - [${value["categoryCode"]}]` }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 1038,
                    columnNumber: 27
                  }, this)
                },
                i,
                false,
                {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 1034,
                  columnNumber: 25
                },
                this
              );
            }) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1031,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1045,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
                onClick: () => {
                  setcat(true);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 1052,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1046,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1030,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cat ? "" : "hidden"} grid place-items-center`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-80 w-80 overflow-y-scroll no-scrollbar", children: [
                category.map((val, i) => {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "h1",
                    {
                      onClick: () => {
                        if (selcategory.includes(val)) {
                          let addcur = selcategory.filter(
                            (data) => data != val
                          );
                          setSelcategory(addcur);
                        } else {
                          setSelcategory([val]);
                        }
                        setcat(false);
                      },
                      className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcategory.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`,
                      children: [
                        val["categoryCode"],
                        " - ",
                        val["categoryName"],
                        " "
                      ]
                    },
                    i,
                    true,
                    {
                      fileName: "app/routes/home/findcampaign.tsx",
                      lineNumber: 1064,
                      columnNumber: 27
                    },
                    this
                  );
                }),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => setcat(false), className: "text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20 text-rose-500", children: "Close" }, void 0, false, {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 1086,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1061,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1060,
                columnNumber: 19
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1056,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react_switch.default,
              {
                onChange: () => setActive(!active),
                checked: active,
                checkedIcon: false,
                uncheckedIcon: false,
                onColor: "#03125E"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1092,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary font-bold text-ld ml-2", children: "Show only active influecner" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1099,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1091,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1027,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Platforms" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1105,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-2", children: platform.map((val, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: `p-1 shrink-0 w-10 h-10 rounded-full  ${selPlatform.includes(val.id) ? " border-2 border-blue-500" : ""} `,
                onClick: () => {
                  if (selPlatform.includes(val.id)) {
                    let setdata = selPlatform.filter(
                      (platdata) => platdata != val.id
                    );
                    setSelectedPlatform(setdata);
                  } else {
                    setSelectedPlatform([...selPlatform, val.id]);
                  }
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: platform[i]["platformLogoUrl"],
                    alt: "error",
                    className: "object-cover w-full h-full inline-block rounded-full"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 1126,
                    columnNumber: 25
                  },
                  this
                )
              },
              i,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1109,
                columnNumber: 23
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1106,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary text-left font-bold text-lg", children: "Country" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1138,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selCountry.map((value, i) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["name"]} - [${value["code"]}]` }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 1149,
                    columnNumber: 27
                  }, this)
                },
                i,
                false,
                {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 1145,
                  columnNumber: 25
                },
                this
              );
            }) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1142,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1156,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
                onClick: () => {
                  setcon(true);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 1163,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1157,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1141,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"} grid place-items-center`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: country.map((val, i) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "h1",
                  {
                    onClick: () => {
                      if (selCountry.includes(val)) {
                        let addcur = selCountry.filter(
                          (data) => data != val
                        );
                        setSelCountry(addcur);
                      } else {
                        setSelCountry([val]);
                      }
                      setcon(false);
                    },
                    className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selCountry.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`,
                    children: [
                      val["code"],
                      " - ",
                      val["name"]
                    ]
                  },
                  i,
                  true,
                  {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 1174,
                    columnNumber: 27
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1171,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1170,
                columnNumber: 19
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1166,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex mt-4 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "text-primary text-md font-semibold cursor-pointer",
                onClick: () => {
                  setSearchType(0 /* TextSearch */);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                    fileName: "app/routes/home/findcampaign.tsx",
                    lineNumber: 1207,
                    columnNumber: 21
                  }, this),
                  " Text search",
                  " "
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1201,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1210,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              FontAwesomeIcon,
              {
                onClick: delsearch,
                className: "text-primary text-2xl",
                icon: faTrash
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1211,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-4" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: campadvancesearch, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              CusButton,
              {
                text: "Search",
                textColor: "text-white",
                background: "bg-primary",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 1218,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1217,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1200,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1136,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 1026,
        columnNumber: 13
      }, this) : null,
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 1231,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 888,
      columnNumber: 9
    }, this),
    camSearchResult.length != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchedInfluencer, { data: camSearchResult }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1237,
      columnNumber: 11
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 887,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 886,
    columnNumber: 5
  }, this);
};
var BrandSearch = () => {
  const [brandSearchResult, setBrandSearchResult] = (0, import_react2.useState)([]);
  const [error, setError] = (0, import_react2.useState)(null);
  const delsearch = () => {
    setBrandSearchResult([]);
  };
  const brandTextSearch = (0, import_react2.useRef)(null);
  const brandtextsearch = async (searchtext) => {
    setError(null);
    brandTextSearch.current.value = "";
    if (searchtext == "" || searchtext == null || searchtext == void 0)
      return setError("Fill the field to start searching");
    let req = { search: searchtext };
    const data = await axios_default.post(`${BaseUrl}/api/search-brand`, req);
    if (data.data.status == false)
      return setError(data.data.message);
    setBrandSearchResult(data.data.data);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-xl shadow-xl p-6 bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-black text-xl text-left font-bold mt-2", children: "Filter" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 1267,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-start lg:place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 w-full flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            FontAwesomeIcon,
            {
              className: "text-gray-600",
              icon: faSearch
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1274,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "input",
            {
              ref: brandTextSearch,
              type: "text",
              className: "bg-transparent w-full outline-none py-1 px-2"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1278,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1273,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1272,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1285,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1287,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            FontAwesomeIcon,
            {
              onClick: delsearch,
              className: "text-primary text-2xl mx-2",
              icon: faTrash
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1288,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-4" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1293,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              onClick: () => {
                brandtextsearch(brandTextSearch.current.value);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                CusButton,
                {
                  text: "Search",
                  textColor: "text-white",
                  background: "bg-primary",
                  fontwidth: "font-bold",
                  width: "w-32"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/findcampaign.tsx",
                  lineNumber: 1299,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1294,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1286,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 1271,
        columnNumber: 11
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 1311,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1266,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1265,
      columnNumber: 7
    }, this),
    brandSearchResult.length != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchedBrand, { data: brandSearchResult }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1318,
      columnNumber: 9
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 1264,
    columnNumber: 5
  }, this);
};
var SearchedCampaign = (props) => {
  const [campaignCards, setCampaignCards] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
    const resolveCampaignCards = async () => {
      const resolvedCampaignCards = await Promise.all(
        props.data.map(async (val, index) => {
          let platforms = [];
          for (let i = 0; i < val["platforms"].length; i++) {
            platforms.push(val["platforms"][i]["platformLogoUrl"]);
          }
          let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
          let campaignType = await getCampaignType(val["campaignTypeId"]);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            CampaginCard,
            {
              id: val["id"],
              title: val.campaignName,
              weburl: val["brand"]["webUrl"],
              platforms,
              maxval: val.costPerPost.split(".")[0],
              category: campaignType,
              image,
              name: val.brand.name,
              currency: val["currency"]["code"],
              btntext: "Learn More & Apply"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 1353,
              columnNumber: 15
            },
            this
          ) }, val["id"], false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 1352,
            columnNumber: 13
          }, this);
        })
      );
      setCampaignCards(resolvedCampaignCards);
    };
    resolveCampaignCards();
  }, [props.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: [
      "Found: ",
      props.data.length,
      " Campaigns",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1378,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap gap-x-6 gap-y-6", children: campaignCards }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1381,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 1377,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 1376,
    columnNumber: 5
  }, this);
};
var SearchedBrand = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: [
      "Found: ",
      props.data.length,
      " Brand",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1395,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-6 flex-wrap", children: props.data.map((val, index) => {
      const avatar = val["logo"];
      const name = val["name"];
      const email = val["email"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        BrandCard,
        {
          id: val.id,
          image: avatar,
          name,
          email,
          website: val.webUrl
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1405,
          columnNumber: 17
        },
        this
      ) }, index, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 1404,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1398,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 1394,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 1393,
    columnNumber: 5
  }, this);
};
var SearchedInfluencer = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: [
      "Found: ",
      props.data.length,
      " Influencer",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1429,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: props.data.map((val, index) => {
      const avatar = val["pic"] == "0" || val["pic"] == null || val["pic"] == void 0 || val["pic"] == "" ? "/images/inf/inf14.png" : val["pic"];
      const name = val["userName"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        influencercard_default,
        {
          id: val["id"],
          image: avatar,
          name,
          star: parseInt(val.rating),
          bio: val.bio
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 1444,
          columnNumber: 17
        },
        this
      ) }, index, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 1443,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 1432,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 1428,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 1427,
    columnNumber: 5
  }, this);
};

export {
  BrandCard,
  findcampaign_default,
  InfluencerSearch
};
//# sourceMappingURL=/build/_shared/chunk-GP7GI5OO.js.map
