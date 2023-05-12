import {
  CampaginCard
} from "/build/_shared/chunk-CLNQ4HVA.js";
import {
  CusButton
} from "/build/_shared/chunk-HT3EAJMF.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-CCYXSUJZ.js";
import {
  FontAwesomeIcon,
  faIdBadge,
  faThumbsDown,
  faThumbsUp
} from "/build/_shared/chunk-XG566DYW.js";
import "/build/_shared/chunk-55KEKCTE.js";
import {
  Link,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-LXJMA5PD.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-KG56QLKG.js";

// app/routes/home/mycampaings.tsx
var import_react2 = __toESM(require_react());

// app/components/utils/pastbrandcard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var PastBrandCard = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-16 h-16 rounded" }, void 0, false, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 10,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 9,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: "Adidas Cases" }, void 0, false, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 12,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/pastbrandcard.tsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }, void 0, false, {
      fileName: "app/components/utils/pastbrandcard.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center gap-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/facebook.png", alt: "error", className: "w-6 h-6 grow" }, void 0, false, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-sm font-bold text-black", children: "POST" }, void 0, false, {
          fileName: "app/components/utils/pastbrandcard.tsx",
          lineNumber: 18,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-normal text-black", children: "Category: Consumer Electronics" }, void 0, false, {
          fileName: "app/components/utils/pastbrandcard.tsx",
          lineNumber: 19,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-sm text-left my-4", children: "61K Reach" }, void 0, false, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/pastbrandcard.tsx",
      lineNumber: 15,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center gap-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-6 h-6 grow" }, void 0, false, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 24,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-sm font-bold text-black", children: "POST" }, void 0, false, {
          fileName: "app/components/utils/pastbrandcard.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-normal text-black", children: "Category: Consumer Electronics" }, void 0, false, {
          fileName: "app/components/utils/pastbrandcard.tsx",
          lineNumber: 27,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 25,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-sm text-left my-4", children: "61K Reach" }, void 0, false, {
        fileName: "app/components/utils/pastbrandcard.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/pastbrandcard.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }, void 0, false, {
      fileName: "app/components/utils/pastbrandcard.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/utils/pastbrandcard.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/utils/pastbrandcard.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
};
var pastbrandcard_default = PastBrandCard;

// app/routes/home/mycampaings.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var MyCampaigns = () => {
  const [completed, setCompleted] = (0, import_react2.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "My campaigns" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block md:grow" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-black text-center font-bold text-2xl", children: "Would you like to collaborate ?" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full text-center bg-red", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: handelclick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
          lineNumber: 109,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 108,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-rose-500 bg-opacity-10 border-2 text-center border-rose-500 rounded-md text-rose-500 text-lg font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 117,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) : null,
    isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: completed ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CompletedCampaigns, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 126,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ActiveCampaign, { camp: campdata }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 128,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 124,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserDrafts, { userid: userdata.userdata.id }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RequestedInvite, { userId: userdata.userdata.id }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
};
var mycampaings_default = MyCampaigns;
var ActiveCampaign = (props) => {
  const campdata = props.camp;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        FontAwesomeIcon,
        {
          icon: faIdBadge,
          className: "text-md text-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 155,
          columnNumber: 11
        },
        this
      ),
      " ",
      "Your Campaign",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this),
    campdata.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-black font-medium text-xl text-center", children: "Here is no campaign created.." }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-6 flex-wrap", children: campdata.map((val, i) => {
      const platforms = [];
      for (let i2 = 0; i2 < val.platforms.length; i2++) {
        platforms.push(val.platforms[i2]["platformLogoUrl"]);
      }
      let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        CampaginCard,
        {
          id: val.id,
          currency: val.currency.code,
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
          lineNumber: 186,
          columnNumber: 17
        },
        this
      ) }, i, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 185,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 152,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 151,
    columnNumber: 5
  }, this);
};
var CompletedCampaigns = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(pastbrandcard_default, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 211,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(pastbrandcard_default, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 212,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 210,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 209,
    columnNumber: 5
  }, this);
};
var UserDrafts = (props) => {
  const [userDraft, setUserDraft] = (0, import_react2.useState)([]);
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
    setUserDraft(apidata.data.data);
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        FontAwesomeIcon,
        {
          icon: faIdBadge,
          className: "text-md text-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 256,
          columnNumber: 9
        },
        this
      ),
      " ",
      "Active Campaign",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 254,
      columnNumber: 7
    }, this),
    userDraft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-black font-medium text-xl text-center", children: "You haven't collaborated in any campaign." }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 263,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: userDraft.map((val, i) => {
      let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2 h-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-end gap-x-3 h-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                  lineNumber: 288,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 287,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: val.brand.name }, void 0, false, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 294,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 286,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-700 font-semibold text-xl text-left mt-2", children: val.campaign.name }, void 0, false, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 298,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: [
              "email : ",
              val.brand.email
            ] }, void 0, true, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 301,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/home/campaigns/${val.campaign.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                lineNumber: 305,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 304,
              columnNumber: 15
            }, this)
          ]
        },
        i,
        true,
        {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 282,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 267,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 253,
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
        influencer: props.userId
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center font-medium text-2xl", children: "Accept" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 392,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 393,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this?" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 394,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 398,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                onClick: () => {
                  setAcceptbox(false);
                },
                className: "bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsDown
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 409,
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
                lineNumber: 403,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 415,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                onClick: acceptRequest,
                className: "bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsUp
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 420,
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
                lineNumber: 416,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 402,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 391,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 386,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${rejectbox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center font-medium text-2xl", children: "Reject" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 435,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 436,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              lineNumber: 437,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 444,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                onClick: () => {
                  setrejectbox(false);
                },
                className: "bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsDown
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 455,
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
                lineNumber: 449,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 461,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                onClick: rejectRequest,
                className: "bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsUp
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 466,
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
                lineNumber: 462,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 448,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 434,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 429,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 rounded-xl text-xl font-bold text-black p-2 my-4", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          FontAwesomeIcon,
          {
            icon: faIdBadge,
            className: "text-md text-secondary"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 478,
            columnNumber: 11
          },
          this
        ),
        " ",
        "Your Campaign",
        " "
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 476,
        columnNumber: 9
      }, this),
      userInvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-black font-medium text-xl text-center", children: "You haven't got any request from the campaign." }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 485,
        columnNumber: 11
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: userInvite.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 bg-white rounded-lg shadow-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                lineNumber: 495,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-md font-medium", children: val.brand.name.toString().split("@")[0] }, void 0, false, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 501,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium", children: val.brand.email }, void 0, false, {
                fileName: "app/routes/home/mycampaings.tsx",
                lineNumber: 504,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/mycampaings.tsx",
              lineNumber: 500,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 494,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Message" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 507,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium", children: val.inviteMessage }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 508,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                onClick: () => {
                  setId(val.id);
                  setAcceptbox(true);
                },
                className: "bg-white  text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsUp
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 517,
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
                lineNumber: 510,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                onClick: () => {
                  setId(val.id);
                  setrejectbox(true);
                },
                className: "bg-white  text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "mx-2",
                      icon: faThumbsDown
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/mycampaings.tsx",
                      lineNumber: 530,
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
                lineNumber: 523,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 509,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 537,
            columnNumber: 17
          }, this)
        ] }, index, true, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 493,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 490,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 475,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 385,
    columnNumber: 5
  }, this);
};
export {
  mycampaings_default as default
};
//# sourceMappingURL=/build/routes/home/mycampaings-RFR4ZJ6U.js.map
