import {
  format
} from "/build/_shared/chunk-Z5KJWFQJ.js";
import {
  raiting_default
} from "/build/_shared/chunk-HVB5MBA7.js";
import {
  require_dist
} from "/build/_shared/chunk-BVHAJD74.js";
import "/build/_shared/chunk-D7BH45K3.js";
import {
  CusButton
} from "/build/_shared/chunk-HT3EAJMF.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-7NI3P3WC.js";
import {
  FontAwesomeIcon,
  faRemove
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

// app/routes/home/myuser.$id.tsx
var import_react2 = __toESM(require_react());
var import_react_simple_star_rating = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BrandPage = () => {
  const user = useLoaderData().user;
  const curUser = useLoaderData().curUser;
  const [userDetails, setUserDetails] = (0, import_react2.useState)(
    0 /* insights */
  );
  const avatar = user["pic"] == "0" || user["pic"] == null || user["pic"] == void 0 || user["pic"] == "" ? "/images/avatar/user.png" : user["pic"];
  const [error, setError] = (0, import_react2.useState)(null);
  const messageRef = (0, import_react2.useRef)(null);
  const [connectBox, setConnectBox] = (0, import_react2.useState)(false);
  const [inviteBox, setInviteBox] = (0, import_react2.useState)(false);
  const [submit, setSubmit] = (0, import_react2.useState)(false);
  const campaign = useLoaderData().campaign;
  const isBrand = curUser.role.code == "50" ? true : false;
  const invitetocamp = async (id) => {
    let req1 = {
      search: {
        campaign: id.toString(),
        brand: curUser.brand.id,
        influencer: user.id
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-invite`, req1);
    if (responseData.data.data.length > 0) {
      return setError("Already Invited.");
    } else {
      let req = {
        campaignId: id.toString(),
        influencerId: user.id,
        fromUserId: curUser.id,
        toUserId: user.id,
        inviteMessage: "A brand invited you to there campaign."
      };
      const data = await axios_default.post(`${BaseUrl}/api/add-invite`, req);
      if (data.data.status == false) {
        setError(data.data.message);
      } else {
        messageRef.current.value = "";
        setInviteBox(false);
      }
    }
  };
  const init = async () => {
    const req = {
      search: {
        type: "1",
        brand: curUser.brand.id,
        influencer: user.id
      }
    };
    const apireq = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-review`,
      data: req
    });
    if (apireq.data.data.length > 0) {
      setSubmit(true);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${inviteBox ? "fixed" : "hidden"}`,
        style: { zIndex: 100 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96 h-80 min-h-min flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 148,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setInviteBox(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  FontAwesomeIcon,
                  {
                    icon: faRemove,
                    className: "font-bold text-2xl text-center text-primary"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/myuser.$id.tsx",
                    lineNumber: 154,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 149,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 147,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Your Campaigns" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 160,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: error }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, this),
          campaign.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: "You don't have any campaign" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 169,
            columnNumber: 13
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-scroll no-scrollbar", children: campaign.map((val, index) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 my-4 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 font-semibold text-xl", children: [
                index + 1,
                "."
              ] }, void 0, true, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 177,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 font-semibold text-lg", children: val.name }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 180,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 183,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  className: "text-white rounded-md py-1 px-4 bg-secondary font-semibold",
                  onClick: () => invitetocamp(val.id),
                  children: "INVITE"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/myuser.$id.tsx",
                  lineNumber: 184,
                  columnNumber: 19
                },
                this
              )
            ] }, index, true, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 176,
              columnNumber: 17
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 173,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 146,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 140,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${connectBox ? "fixed" : "hidden"}`,
        style: { zIndex: 100 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 206,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setConnectBox(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  FontAwesomeIcon,
                  {
                    icon: faRemove,
                    className: "font-bold text-2xl text-center text-primary"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/myuser.$id.tsx",
                    lineNumber: 212,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 207,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 205,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 218,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              ref: messageRef,
              className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4",
              placeholder: "message"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 219,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 230,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: async () => {
                  var _a, _b, _c, _d;
                  if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = messageRef.current) == null ? void 0 : _c.value) == "")
                    return setError("Message can't be blank");
                  let req = {
                    campaignDraftId: "0",
                    fromUserId: curUser.id,
                    toUserId: user.id,
                    comment: (_d = messageRef.current) == null ? void 0 : _d.value
                  };
                  const data = await axios_default({
                    method: "post",
                    url: `${BaseUrl}/api/add-chat`,
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
                  if (!data.data.status)
                    return setError(data.data.message);
                  return setConnectBox(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  CusButton,
                  {
                    text: "send",
                    background: "bg-primary",
                    textColor: "text-white"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/myuser.$id.tsx",
                    lineNumber: 263,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 231,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 229,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 204,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 198,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: "/images/products/shoe1.jpg",
          alt: "error",
          className: "w-full h-60 object-cover rounded-t-xl"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 274,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 flex flex-row gap-x-3 lg:flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: avatar,
              alt: "user avatar",
              className: "w-32 h-32 rounded-md object-cover object-center"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 282,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-lg font-medium my-2", children: user.userName }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 289,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-gray-600 text-sm font-medium my-2", children: user.knownAs }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 292,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-800 text-md font-normal", children: user.email }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 295,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setConnectBox(true);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  CusButton,
                  {
                    text: "Message",
                    background: "bg-secondary",
                    fontwidth: "font-bold"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/myuser.$id.tsx",
                    lineNumber: 301,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 296,
                columnNumber: 15
              },
              this
            ),
            isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setInviteBox(true);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  CusButton,
                  {
                    text: "Invite",
                    background: "bg-secondary",
                    fontwidth: "font-bold"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/myuser.$id.tsx",
                    lineNumber: 313,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 308,
                columnNumber: 17
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 320,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 280,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-72 w-[2px] bg-gray-300 hidden lg:block mt-8" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 324,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col md:flex-row gap-y-2" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 326,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium mt-4 mb-2", children: "User Bio" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 327,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-sm font-normal", children: user.bio }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 330,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 325,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 279,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 273,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl flex gap-4 overflow-x-scroll px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserPageTabs,
        {
          text: "Insights",
          currentTab: userDetails,
          tab: 0 /* insights */,
          click: () => {
            setUserDetails(0 /* insights */);
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 336,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserPageTabs,
        {
          text: "Payments",
          currentTab: userDetails,
          tab: 1 /* payments */,
          click: () => {
            setUserDetails(1 /* payments */);
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 345,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserPageTabs,
        {
          text: "Channels",
          currentTab: userDetails,
          tab: 3 /* channels */,
          click: () => {
            setUserDetails(3 /* channels */);
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 354,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserPageTabs,
        {
          text: "Personal Info",
          currentTab: userDetails,
          tab: 4 /* personalInfo */,
          click: () => {
            setUserDetails(4 /* personalInfo */);
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 363,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserPageTabs,
        {
          text: "Past Associations",
          currentTab: userDetails,
          tab: 5 /* pastAssociations */,
          click: () => {
            setUserDetails(5 /* pastAssociations */);
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 372,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserPageTabs,
        {
          text: "Reviews",
          currentTab: userDetails,
          tab: 6 /* reviews */,
          click: () => {
            setUserDetails(6 /* reviews */);
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 381,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserPageTabs,
        {
          text: "Dispute",
          currentTab: userDetails,
          tab: 7 /* dispute */,
          click: () => {
            setUserDetails(7 /* dispute */);
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 389,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 335,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: userDetails == 1 /* payments */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Payment, { userId: user.id }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 404,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 403,
      columnNumber: 11
    }, this) : null }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 401,
      columnNumber: 7
    }, this),
    userDetails == 3 /* channels */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Channels, { userId: user.id }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 410,
      columnNumber: 9
    }, this) : null,
    userDetails == 4 /* personalInfo */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      PersonalInfo,
      {
        name: user.userName.toString().split("@")[0],
        bio: user.bio,
        career: user.careerHistory,
        personal: user.personalHistory,
        external: user.externalLinks
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 413,
        columnNumber: 9
      },
      this
    ) : null,
    userDetails == 5 /* pastAssociations */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      PastBrandAssociation,
      {
        userId: user.id,
        brandId: curUser.brand.id
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 423,
        columnNumber: 9
      },
      this
    ) : null,
    userDetails == 6 /* reviews */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      !submit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Rating" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 432,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 433,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          raiting_default,
          {
            campaignId: "0",
            brandId: curUser.brand.id,
            influencerId: user.id,
            reviewType: "1"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 435,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 431,
        columnNumber: 13
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Your Reviews" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 444,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 447,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Review, { userId: user.id, brandId: curUser.brand.id }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 448,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 429,
      columnNumber: 9
    }, this) : null,
    userDetails == 7 /* dispute */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dispute, { brandId: curUser.brand.id, userId: user.id }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 453,
      columnNumber: 9
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 138,
    columnNumber: 5
  }, this);
};
var myuser_id_default = BrandPage;
var UserPageTabs = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: props.click, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    CusButton,
    {
      text: props.text,
      background: `${props.currentTab == props.tab ? "bg-[#01FFF4]" : "bg-gray-100"}`,
      fontwidth: "font-bold",
      textColor: `${props.currentTab == props.tab ? "text-black" : "text-gray-600"}`
    },
    void 0,
    false,
    {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 474,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 473,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 472,
    columnNumber: 5
  }, this);
};
var Channels = (props) => {
  const [handles, setHandles] = (0, import_react2.useState)([]);
  const init = async () => {
    const datahandles = await axios_default.post(
      `${BaseUrl}/api/get-user-handles`,
      { userId: props.userId },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*"
        }
      }
    );
    setHandles((val) => datahandles.data.data);
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-4 w-full mt-4 flex flex-wrap gap-4 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "w-full bg-gray-100 rounded-xl p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Media" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 528,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Platform Name" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 531,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Account" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 534,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Followers" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 537,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 527,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 526,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "gap-y-4", children: handles.map((val, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: val.platformLogoUrl,
          alt: "error",
          className: "w-12 h-12 rounded-md object-cover"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 546,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 545,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.platformName }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 552,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.handleName }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 553,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.follower.toString().split(".")[0] }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 554,
        columnNumber: 17
      }, this)
    ] }, index, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 544,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 542,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 525,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 524,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 523,
    columnNumber: 5
  }, this);
};
var PersonalInfo = (props) => {
  const bio = props.bio == null || props.bio == void 0 || props.bio == "" ? "User bio is empty." : props.bio;
  const personal = props.personal == null || props.personal == void 0 || props.personal == "" ? "User personal history is empty." : props.personal;
  const career = props.career == null || props.career == void 0 || props.career == "" ? "User career history is empty." : props.career;
  const external = props.external == null || props.external == void 0 || props.external == "" ? "User external links is empty." : props.external;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-4 w-full mt-4 rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-semibold mt-4", children: props.name }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 598,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-gray-700", children: bio }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 601,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-semibold mt-4", children: "Personal Life" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 602,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-gray-700", children: personal }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 605,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-semibold mt-4", children: "Career" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 606,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-gray-700", children: career }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 607,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-semibold mt-4", children: "External Links" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 608,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-gray-700", children: external }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 611,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 597,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 596,
    columnNumber: 5
  }, this);
};
var PastBrandAssociation = (props) => {
  const [resDarft, setResDarft] = (0, import_react2.useState)([]);
  const init = async () => {
    let req = {
      search: {
        fromUser: props.userId,
        influencer: props.userId,
        brand: props.brandId
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setResDarft(responseData.data.data);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-4 w-full mt-4 rounded-xl", children: resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center w-full px-4 py-8 text-2xl text-gray-600 font-semibold ", children: "This brand have no past associations with you." }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 650,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6 pb-8 pt-6", children: resDarft.map((val, index) => {
    let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "my-2 p-4 bg-white rounded-lg shadow-lg w-60",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: image,
                alt: "influencer pic",
                className: "w-10 h-10 shrink-0 rounded-md"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 674,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.brand.name }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 680,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.brand.email }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 681,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 679,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 673,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 684,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 685,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 686,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              target: "_blank",
              className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500",
              href: val.attach01,
              children: "View pdf"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 687,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 694,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "p",
            {
              className: `mt-2 text-md text-white font-medium text-center rounded-md ${val.status.name == "ACCEPTED" ? "bg-green-500" : val.status.name == "PENDING" ? "bg-yellow-500" : "bg-red-500"}`,
              children: val.status.name
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 695,
              columnNumber: 19
            },
            this
          )
        ]
      },
      index,
      true,
      {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 669,
        columnNumber: 17
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 654,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 648,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 647,
    columnNumber: 5
  }, this);
};
var Review = (props) => {
  const [review, setReview] = (0, import_react2.useState)([]);
  const init = async () => {
    const datareview = await axios_default.post(
      `${BaseUrl}/api/get-user-review`,
      { userId: props.userId },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*"
        }
      }
    );
    setReview((val) => datareview.data.data);
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-4 w-full mt-4 rounded-xl flex-wrap flex gap-6", children: review.map((val, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md shadow-lg p-6 w-80", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: val.brandLogoUrl,
            alt: "brand logo",
            className: "w-20 h-20 rounded-md object-cover object-center"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 752,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-medium", children: val.brandName }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 758,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 757,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 751,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-600 font-medium mt-4", children: "Campaign Rating" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 762,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react_simple_star_rating.Rating,
          {
            initialValue: Math.floor(
              (Number(val.avg_rating1) + Number(val.avg_rating2) + Number(val.avg_rating3)) / 3
            ),
            size: 35
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 765,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 761,
        columnNumber: 15
      }, this)
    ] }, index, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 750,
      columnNumber: 13
    }, this);
  }) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 747,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 746,
    columnNumber: 5
  }, this);
};
var Payment = (props) => {
  const [status, setStatus] = (0, import_react2.useState)([]);
  const init = async () => {
    const status2 = await axios_default.post(
      `${BaseUrl}/api/payment-status`,
      { userId: props.userId },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*"
        }
      }
    );
    setStatus((val) => status2.data.data);
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-2 rounded-md p-6 mt-10 overflow-x-scroll", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-semibold text-2xl text-gray-800 my-4", children: "Brand wise revenue" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 817,
      columnNumber: 11
    }, this),
    status.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-semibold text-gray-600 text-2xl", children: "There is nothing to show" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 821,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "w-full bg-gray-100 rounded-xl p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Brand" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 828,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Campaign Name" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 831,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Earning" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 834,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Date" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 837,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 827,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 826,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "gap-y-4", children: status.map((val, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: val.brandLogoUrl,
            alt: "error",
            className: "w-12 h-12 rounded-md object-cover"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 846,
            columnNumber: 23
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 845,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.campaign_name }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 852,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
          " ",
          val.total_amount_requested.toString().split(".")[0]
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 853,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: format(
          new Date(
            Date.now() - val.days_since_payment_made * 24 * 60 * 60 * 1e3
          )
        ) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 857,
          columnNumber: 21
        }, this)
      ] }, index, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 844,
        columnNumber: 19
      }, this)) }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 842,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 825,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 816,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 815,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 814,
    columnNumber: 5
  }, this);
};
var Dispute = (props) => {
  const [error, setError] = (0, import_react2.useState)(null);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const messageRef = (0, import_react2.useRef)(null);
  const reasonRef = (0, import_react2.useRef)(null);
  const submit = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = messageRef.current) == null ? void 0 : _c.value) == "") {
      setError("Fill the message.");
    } else if (((_d = reasonRef.current) == null ? void 0 : _d.value) == null || ((_e = reasonRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = reasonRef.current) == null ? void 0 : _f.value) == "" || ((_g = reasonRef.current) == null ? void 0 : _g.value) == "0") {
      setError("Select one reason.");
    } else {
      const req = {
        type: (_h = reasonRef.current) == null ? void 0 : _h.value,
        userId: props.userId,
        brandId: props.brandId,
        isBrand: 0,
        message: (_i = messageRef.current) == null ? void 0 : _i.value
      };
      const data = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/add-dispute`,
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
      if (data.data.status == false) {
        return setError(data.data.message);
      } else {
        setError(null);
        setSus("Message sent!");
        reasonRef.current.value = "";
        messageRef.current.value = "";
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Dispute" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 935,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 936,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl shadow-xl bg-white p-4 mt-2 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          ref: reasonRef,
          name: "reason",
          id: "reason",
          className: "w-full rounded-md border-none outline-none bg-gray-100 py-2 my-2 px-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "This is bad" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 944,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: "This is so bad" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 945,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "This is extrimily bad" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 946,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", children: "I just don't want it" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 947,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 938,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "textarea",
        {
          ref: messageRef,
          className: "p-4 w-full h-40 outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md resize-none",
          placeholder: "Your message"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 949,
          columnNumber: 11
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 955,
        columnNumber: 13
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 960,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: submit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Send Message", background: "bg-primary" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 965,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 964,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 937,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 934,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 933,
    columnNumber: 5
  }, this);
};
export {
  myuser_id_default as default
};
//# sourceMappingURL=/build/routes/home/myuser.$id-F5REEW5T.js.map
