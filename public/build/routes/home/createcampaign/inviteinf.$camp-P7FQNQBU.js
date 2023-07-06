import {
  es_default
} from "/build/_shared/chunk-2QADXOD2.js";
import {
  require_react_switch
} from "/build/_shared/chunk-IUMXW2I4.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  FontAwesomeIcon,
  faAdd,
  faSearch,
  faSortDown,
  faStar,
  faTrash
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-Z6G3P7XF.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/createcampaign/inviteinf.$camp.tsx
var import_react2 = __toESM(require_react());
var import_react_switch = __toESM(require_react_switch());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var InviteInfluencer = () => {
  const user = useLoaderData();
  const brandUserId = user.user.id;
  const campId = user.campid;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    InfluencerSearch,
    {
      platform: user.platform,
      country: user.country,
      category: user.category,
      brandUserId,
      campaignId: campId
    },
    void 0,
    false,
    {
      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};
var inviteinf_camp_default = InviteInfluencer;
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
      country: selCountry[0]["id"],
      platform: selPlatform.join(","),
      category: selcategory[0]["id"],
      active: active ? "1" : "0",
      role: 10
    };
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full my-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/home/mycampaings", className: "rounded-lg py-1 px-2 text-white bg-secondary text-lg", children: "Skip This Step" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl shadow-xl p-6 bg-white mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex px-2 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-black text-xl text-left font-bold", children: "Filter" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 184,
          columnNumber: 13
        }, this),
        searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 188,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: `w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${filterName ? "" : "hidden"}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-sm text-slate-900 font-semibold my-2", children: "Filter name" }, void 0, false, {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 200,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "input",
                    {
                      ref: nameFilterRef,
                      type: "text",
                      className: "bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                      lineNumber: 203,
                      columnNumber: 21
                    },
                    this
                  ),
                  nameError == "" || nameError == null || nameError == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: nameError }, void 0, false, {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 211,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                      lineNumber: 215,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                      lineNumber: 223,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 196,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 233,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",
                onClick: () => {
                  setFilter(!showFilter);
                },
                children: [
                  "Saved filter",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 242,
                    columnNumber: 21
                  }, this),
                  " "
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 235,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: `w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${showFilter ? "" : "hidden"}`,
                children: localFilter.map((val, index) => {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                      lineNumber: 250,
                      columnNumber: 25
                    },
                    this
                  );
                })
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 244,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 234,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this),
      searchType == 0 /* TextSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-start lg:place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-md py-1 px-4 w-full flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            FontAwesomeIcon,
            {
              className: "text-gray-600",
              icon: faSearch
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 271,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: champTextSearch,
              type: "text",
              className: "bg-transparent w-full outline-none py-1 px-2"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 275,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 270,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 269,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 282,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "text-primary text-sm font-semibold cursor-pointer",
              onClick: () => {
                setSearchType(1 /* AdvanceSearch */);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                  fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                  lineNumber: 290,
                  columnNumber: 19
                }, this),
                " Advanced filter"
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 284,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 293,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            FontAwesomeIcon,
            {
              onClick: delsearch,
              className: "text-primary text-2xl mx-2",
              icon: faTrash
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 294,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 299,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              onClick: () => {
                camptextsearch(champTextSearch.current.value);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                  fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                  lineNumber: 305,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 300,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 283,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 268,
        columnNumber: 13
      }, this) : null,
      searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Category" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 322,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcategory.map((value, i) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["categoryName"]} - [${value["categoryCode"]}]` }, void 0, false, {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 331,
                    columnNumber: 27
                  }, this)
                },
                i,
                false,
                {
                  fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                  lineNumber: 327,
                  columnNumber: 25
                },
                this
              );
            }) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 324,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 338,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
                onClick: () => {
                  setcat(true);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
                  fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                  lineNumber: 345,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 339,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 323,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cat ? "" : "hidden"} grid place-items-center`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-md cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 w-80 overflow-y-scroll no-scrollbar", children: [
                category.map((val, i) => {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                      lineNumber: 357,
                      columnNumber: 27
                    },
                    this
                  );
                }),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    onClick: () => setcat(false),
                    className: "w-full border-red-500 border-2 rounded-md text-center text-rose-500 text-xl py bg-rose-500 bg-opacity-20",
                    children: "Close"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 379,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 354,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 353,
                columnNumber: 19
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 349,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 387,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary font-bold text-ld ml-2", children: "Show only active influecner" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 394,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 386,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 320,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Platforms" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 400,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-4", children: platform.map((val, i) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    src: platform[i]["platformLogoUrl"],
                    alt: "error",
                    className: "object-cover rounded-full w-full h-full inline-block"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 421,
                    columnNumber: 25
                  },
                  this
                )
              },
              i,
              false,
              {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 404,
                columnNumber: 23
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 401,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 399,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-left font-bold text-lg", children: "Country" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 433,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selCountry.map((value, i) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["name"]} - [${value["code"]}]` }, void 0, false, {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 444,
                    columnNumber: 27
                  }, this)
                },
                i,
                false,
                {
                  fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                  lineNumber: 440,
                  columnNumber: 25
                },
                this
              );
            }) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 437,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 451,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
                onClick: () => {
                  setcon(true);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
                  fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                  lineNumber: 458,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 452,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 436,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"} grid place-items-center`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 cursor-pointer rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80 h-[400px]", children: [
                country.map((val, i) => {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                      lineNumber: 469,
                      columnNumber: 27
                    },
                    this
                  );
                }),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    onClick: () => setcon(false),
                    className: "w-full border-red-500 border-2 rounded-md text-center text-rose-500 text-xl py bg-rose-500 bg-opacity-20",
                    children: "Close"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 492,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 466,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 465,
                columnNumber: 19
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 461,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-4 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "text-primary text-md font-semibold cursor-pointer",
                onClick: () => {
                  setSearchType(0 /* TextSearch */);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                    lineNumber: 506,
                    columnNumber: 21
                  }, this),
                  " Text search",
                  " "
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 500,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 509,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              FontAwesomeIcon,
              {
                onClick: delsearch,
                className: "text-primary text-2xl",
                icon: faTrash
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 510,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 515,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: campadvancesearch, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
                lineNumber: 517,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
              lineNumber: 516,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 499,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 431,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 319,
        columnNumber: 13
      }, this) : null,
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 530,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this),
    camSearchResult.length != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      SearchedInfluencer,
      {
        campaignId: props.campaignId,
        brandUserId: props.brandUserId,
        data: camSearchResult
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 536,
        columnNumber: 11
      },
      this
    ) : null
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
    lineNumber: 176,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
};
var SearchedInfluencer = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: [
      "Found: ",
      props.data.length,
      " Influencer",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
      lineNumber: 557,
      columnNumber: 9
    }, this),
    props.data.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
      lineNumber: 561,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: props.data.map((val, index) => {
      const avatar = val["pic"] == "0" || val["pic"] == null || val["pic"] == void 0 || val["pic"] == "" ? "/images/inf/inf14.png" : val["pic"];
      const name = val["userName"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        InfluencerCard,
        {
          id: val["id"],
          image: avatar,
          name,
          star: parseInt(val.rating),
          bio: val.bio,
          campaignId: props.campaignId,
          brandUserId: props.brandUserId
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 577,
          columnNumber: 19
        },
        this
      ) }, index, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 576,
        columnNumber: 17
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
      lineNumber: 565,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
    lineNumber: 556,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
    lineNumber: 555,
    columnNumber: 5
  }, this);
};
var InfluencerCard = (props) => {
  const [error, setError] = (0, import_react2.useState)(null);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const Star = () => {
    const fullStars = Math.floor(props.star);
    const fractionalStar = props.star - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-pink-500",
            icon: faStar
          },
          i,
          false,
          {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 616,
            columnNumber: 9
          },
          this
        )
      );
    }
    if (fractionalStar > 0) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-pink-500",
            icon: faStar,
            style: { width: `${fractionalStar * 100}%` }
          },
          fullStars,
          false,
          {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 626,
            columnNumber: 9
          },
          this
        )
      );
    }
    for (let i = 0; i < 5 - fullStars; i++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-gray-300",
            icon: faStar
          },
          5 + i,
          false,
          {
            fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
            lineNumber: 637,
            columnNumber: 9
          },
          this
        )
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: stars }, void 0, false, {
      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
      lineNumber: 645,
      columnNumber: 12
    }, this);
  };
  const invite = async () => {
    const search_invite = await axios_default.post(`${BaseUrl}/api/search-invite`, {
      search: {
        status: "1",
        campaign: props.campaignId,
        influencer: props.id
      }
    });
    if (search_invite.data.status) {
      setError("Invite already sent.");
    } else {
      let req = {
        campaignId: props.campaignId,
        influencerId: props.id,
        fromUserId: props.brandUserId,
        toUserId: props.id,
        inviteMessage: "A brand invited you to there campaign."
      };
      const data = await axios_default.post(`${BaseUrl}/api/add-invite`, req);
      if (data.data.status == false) {
        setError(data.data.message);
      } else {
        setSus("Request has been sent.");
      }
    }
  };
  function truncateText(text) {
    if (text.length > 100) {
      return text.substring(0, 100) + "...";
    }
    return text;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: props.image,
        alt: "error",
        className: "w-full h-40 object-cover rounded-t-md"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 687,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-lg text-left", children: props.name.toString().split("@")[0] }, void 0, false, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 695,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-sm text-left mt-2", children: truncateText(props.bio) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 698,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 702,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 701,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 694,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 693,
        columnNumber: 11
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 707,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: invite, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CusButton,
        {
          text: "Invite",
          textColor: "text-white",
          background: "bg-secondary",
          width: "w-full",
          margin: "my-2",
          fontwidth: "font-bold"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 712,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 711,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/myuser/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CusButton,
        {
          text: "View Profile",
          textColor: "text-black",
          background: "bg-[#01FFF4]",
          width: "w-full",
          margin: "my-2",
          fontwidth: "font-bold"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
          lineNumber: 722,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 721,
        columnNumber: 11
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
        lineNumber: 732,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
      lineNumber: 692,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
    lineNumber: 686,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/inviteinf.$camp.tsx",
    lineNumber: 685,
    columnNumber: 5
  }, this);
};
export {
  inviteinf_camp_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/inviteinf.$camp-P7FQNQBU.js.map
