import {
  CampaginCard
} from "/build/_shared/chunk-XVO7H6KS.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  FontAwesomeIcon,
  faIdBadge,
  faThumbsDown,
  faThumbsUp
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Link,
  useLoaderData,
  useNavigate
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

// app/routes/home/mycampaings.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MyCampaigns = () => {
  const userdata = useLoaderData();
  const isBrand = userdata.userdata.role["code"] == "50" ? true : false;
  const campdata = userdata.camp.campaigns;
  const isProfileCompleted = userdata.userdata.profileCompleteness == 1 || userdata.userdata.profileCompleteness == "1" ? true : false;
  const [error, setError] = (0, import_react2.useState)(null);
  const navigation = useNavigate();
  const handelclick = () => {
    if (isProfileCompleted) {
      setError(null);
      navigation("/home/createcampaign");
    } else {
      setError("Complete your profile first.");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActiveCampaign, { camp: campdata }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserDrafts, { userid: userdata.userdata.id }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequestedInvite, { userId: userdata.userdata.id }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this),
    isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-center font-bold text-2xl", children: "Would you like to create new campaign ?" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center bg-red", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: handelclick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CusButton,
        {
          text: "Create Campaign",
          textColor: "text-white",
          background: "bg-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 121,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 120,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 119,
        columnNumber: 15
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-rose-500 bg-opacity-10 border-2 text-center border-rose-500 rounded-md text-rose-500 text-lg font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 129,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
};
var mycampaings_default = MyCampaigns;
var ActiveCampaign = (props) => {
  const campdata = props.camp;
  const [campaign, setCampaign] = (0, import_react2.useState)([]);
  const [isActive, setIsActive] = (0, import_react2.useState)(true);
  const init = async () => {
    if (isActive) {
      let data = campdata.filter((val) => new Date(val["endAt"]) > new Date());
      setCampaign((val) => data);
    } else {
      let data = campdata.filter((val) => new Date(val["endAt"]) < new Date());
      setCampaign((val) => data);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, [isActive]);
  const setActive = () => {
    setIsActive(true);
  };
  const setInactive = () => {
    setIsActive(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col flex-wrap items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "My campaigns" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: setActive,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                width: "w-60",
                text: "Active campaigns",
                background: `${isActive ? "bg-[#bdff80]" : "bg-white"}`,
                textColor: "text-black",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 190,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 186,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: setInactive,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                width: "w-60",
                text: "Finished campaigns",
                textColor: "text-black",
                background: `${isActive ? "bg-white" : "bg-[#bdff80]"}`,
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 203,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 199,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 rounded-xl text-xl font-bold text-black p-2 my-4", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            icon: faIdBadge,
            className: "text-md text-secondary"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 216,
            columnNumber: 11
          },
          this
        ),
        " ",
        "Your Campaign",
        " "
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, this),
      campaign.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black font-medium text-xl text-center", children: "You haven't created any campaign yet." }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 flex-wrap", children: campaign.map((val, i) => {
        const platforms = [];
        for (let i2 = 0; i2 < val.platforms.length; i2++) {
          platforms.push(val.platforms[i2]["platformLogoUrl"]);
        }
        let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          CampaginCard,
          {
            id: val.id,
            currency: "USD",
            platforms,
            maxval: val.costPerPost.split(".")[0],
            weburl: val.brand.webUrl,
            category: val.type.name,
            image,
            name: val.brand.name,
            title: val.name,
            btntext: "View"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 250,
            columnNumber: 17
          },
          this
        ) }, i, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 249,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 173,
    columnNumber: 5
  }, this);
};
var UserDrafts = (props) => {
  const [userDraft, setUserDraft] = (0, import_react2.useState)([]);
  const [isActive, setIsActive] = (0, import_react2.useState)(true);
  const init = async () => {
    let req = {
      search: {
        status: "3",
        influencer: props.userid
      }
    };
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-invite`,
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
    if (isActive) {
      let data = apidata.data.data.filter((val) => new Date(val["campaign"]["endAt"]) > new Date());
      setUserDraft((val) => data);
    } else {
      let data = apidata.data.data.filter((val) => new Date(val["campaign"]["endAt"]) < new Date());
      setUserDraft((val) => data);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, [isActive]);
  const setActive = () => {
    setIsActive(true);
  };
  const setInactive = () => {
    setIsActive(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col flex-wrap items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "My campaigns" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 330,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 333,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 329,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 338,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: setActive,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                width: "w-60",
                text: "Active campaigns",
                background: `${isActive ? "bg-[#bdff80]" : "bg-white"}`,
                textColor: "text-black",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 344,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 340,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 352,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: setInactive,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                width: "w-60",
                text: "Finished campaigns",
                textColor: "text-black",
                background: `${isActive ? "bg-white" : "bg-[#bdff80]"}`,
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 357,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 353,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 339,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 328,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 rounded-xl text-xl font-bold text-black p-2 my-4", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            icon: faIdBadge,
            className: "text-md text-secondary"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 370,
            columnNumber: 11
          },
          this
        ),
        " ",
        "Active Campaign",
        " "
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 368,
        columnNumber: 9
      }, this),
      userDraft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black font-medium text-xl text-center", children: "You haven't collaborated in any campaign." }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 377,
        columnNumber: 11
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6 items-stretch", children: userDraft.map((val, i) => {
        let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "rounded-xl shadow-xl p-4 w-72 my-2 h-full bg-white ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3 h-full", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    src: image,
                    alt: "error",
                    className: "object-cover w-16 h-16 rounded"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/mycampaings.tsx",
                    lineNumber: 402,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/home/mycampaings.tsx",
                  lineNumber: 401,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: val.brand.name }, void 0, false, {
                  fileName: "app/routes/home/mycampaings.tsx",
                  lineNumber: 408,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 400,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 font-semibold text-xl text-left mt-2", children: val.campaign.name }, void 0, false, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 412,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: [
                "email : ",
                val.brand.email
              ] }, void 0, true, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 415,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/campaigns/${val.campaign.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                CusButton,
                {
                  text: "View",
                  textColor: "text-black",
                  background: "bg-[#01FFF4]",
                  width: "w-full",
                  margin: "my-2",
                  fontwidth: "font-bold"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/mycampaings.tsx",
                  lineNumber: 419,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 418,
                columnNumber: 17
              }, this)
            ]
          },
          i,
          true,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 396,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 381,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 367,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 327,
    columnNumber: 5
  }, this);
};
var RequestedInvite = (props) => {
  const [userInvite, setInvite] = (0, import_react2.useState)([]);
  const [acceptbox, setAcceptbox] = (0, import_react2.useState)(false);
  const [rejectbox, setrejectbox] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const rejectiontextRef = (0, import_react2.useRef)(null);
  const [id, setId] = (0, import_react2.useState)(null);
  const init = async () => {
    let req = {
      search: {
        status: "1",
        influencer: props.userId,
        toUser: props.userId
      }
    };
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-invite`,
      data: req
    });
    setInvite(apidata.data.data);
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  const acceptRequest = async () => {
    let req = { id, status: "3" };
    const responseData = await axios_default.post(`${BaseUrl}/api/update-invite`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    setAcceptbox(false);
    window.location.reload();
  };
  const rejectRequest = async () => {
    var _a, _b, _c, _d;
    if (((_a = rejectiontextRef.current) == null ? void 0 : _a.value) == null || ((_b = rejectiontextRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = rejectiontextRef.current) == null ? void 0 : _c.value) == "")
      return setError("Fell the reason.");
    let req = {
      id,
      status: "5",
      rejectReason: (_d = rejectiontextRef.current) == null ? void 0 : _d.value
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/update-invite`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    rejectiontextRef.current.value == "";
    setrejectbox(false);
    window.location.reload();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-2xl", children: "Accept" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 507,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 508,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this?" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 509,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 513,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: () => {
                  setAcceptbox(false);
                },
                className: "bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsDown
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 524,
                      columnNumber: 15
                    },
                    this
                  ),
                  "Cancel"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 518,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 530,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: acceptRequest,
                className: "bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsUp
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 535,
                      columnNumber: 15
                    },
                    this
                  ),
                  "Accept"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 531,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 517,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 506,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 502,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${rejectbox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-2xl", children: "Reject" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 549,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 550,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: rejectiontextRef,
              type: "text",
              className: "w-full bg-gray-200 rounded-lg  px-2 py-1 my-2 outline-none",
              placeholder: "Enter the reason of rejection."
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 551,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 558,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: () => {
                  setrejectbox(false);
                },
                className: "bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsDown
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 569,
                      columnNumber: 15
                    },
                    this
                  ),
                  "Cancel"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 563,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 575,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: rejectRequest,
                className: "bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsUp
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 580,
                      columnNumber: 15
                    },
                    this
                  ),
                  "Reject"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 576,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 562,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: rejectRequest,
              className: "bg-white inline-block mt-4 rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",
              children: "View campaign"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 588,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 548,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 544,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-4 shadow-xl p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " rounded-xl text-xl font-bold text-black p-2 my-4", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            icon: faIdBadge,
            className: "text-md text-secondary"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 601,
            columnNumber: 11
          },
          this
        ),
        " ",
        "Requested brand campaign"
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 599,
        columnNumber: 9
      }, this),
      userInvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black font-medium text-xl text-center", children: "You haven't got any request from the campaign." }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 608,
        columnNumber: 11
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: userInvite.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white rounded-lg shadow-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: val.brand.logo,
                alt: "influencer pic",
                className: "w-10 h-10 shrink-0 rounded-md object-center object-cover"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 618,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.brand.name.toString().split("@")[0] }, void 0, false, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 624,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.brand.email }, void 0, false, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 627,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 623,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 617,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Message" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 630,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.inviteMessage }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 631,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: () => {
                  setId(val.id);
                  setAcceptbox(true);
                },
                className: "bg-white  text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsUp
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 640,
                      columnNumber: 21
                    },
                    this
                  ),
                  "Accept"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 633,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: () => {
                  setId(val.id);
                  setrejectbox(true);
                },
                className: "bg-white  text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsDown
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 653,
                      columnNumber: 21
                    },
                    this
                  ),
                  "Reject"
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 646,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 632,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 660,
            columnNumber: 17
          }, this)
        ] }, index, true, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 616,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 613,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 598,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 501,
    columnNumber: 5
  }, this);
};
export {
  mycampaings_default as default
};
//# sourceMappingURL=/build/routes/home/mycampaings-PL32MJW7.js.map
