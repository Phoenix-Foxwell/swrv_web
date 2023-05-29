import {
  format
} from "/build/_shared/chunk-Z5KJWFQJ.js";
import {
  raiting_default
} from "/build/_shared/chunk-U6LYMWQ6.js";
import {
  require_dist
} from "/build/_shared/chunk-UH6I5RDW.js";
import "/build/_shared/chunk-6JMZNDAF.js";
import {
  CusButton
} from "/build/_shared/chunk-GMW45GHR.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-7OVYVV3T.js";
import {
  FontAwesomeIcon,
  faRemove
} from "/build/_shared/chunk-ESAEJTTP.js";
import "/build/_shared/chunk-NEYQYD5R.js";
import {
  useLoaderData
} from "/build/_shared/chunk-ZUW3WGBY.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6U7EOCF3.js";

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
              lineNumber: 147,
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
                    lineNumber: 153,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 148,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 146,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Your Campaigns" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 159,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: error }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this),
          campaign.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: "You don't have any campaign" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-scroll no-scrollbar", children: campaign.map((val, index) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 my-4 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 font-semibold text-xl", children: [
                index + 1,
                "."
              ] }, void 0, true, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 176,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 font-semibold text-lg", children: val.name }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 179,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 182,
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
                  lineNumber: 183,
                  columnNumber: 19
                },
                this
              )
            ] }, index, true, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 172,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 145,
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
              lineNumber: 204,
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
                    lineNumber: 210,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 205,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 203,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 216,
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
              lineNumber: 217,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 228,
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
                    lineNumber: 261,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 229,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 227,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 202,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 197,
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
          lineNumber: 272,
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
              lineNumber: 280,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-lg font-medium my-2", children: user.userName }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 287,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-gray-600 text-sm font-medium my-2", children: user.knownAs }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 290,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-800 text-md font-normal", children: user.email }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 293,
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
                    lineNumber: 299,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 294,
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
                    lineNumber: 311,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 306,
                columnNumber: 17
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 318,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 286,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-72 w-[2px] bg-gray-300 hidden lg:block mt-8" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 322,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col md:flex-row gap-y-2" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 324,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium mt-4 mb-2", children: "User Bio" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 325,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-sm font-normal", children: user.bio }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 328,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 323,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 271,
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
          lineNumber: 334,
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
          lineNumber: 343,
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
          lineNumber: 352,
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
          lineNumber: 361,
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
          lineNumber: 370,
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
          lineNumber: 379,
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
          lineNumber: 387,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 333,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: userDetails == 0 /* insights */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserInsights, { userId: user.id }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 402,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 401,
      columnNumber: 11
    }, this) : null }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 399,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: userDetails == 1 /* payments */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Payment, { userId: user.id }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 411,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 410,
      columnNumber: 11
    }, this) : null }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 408,
      columnNumber: 7
    }, this),
    userDetails == 3 /* channels */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Channels, { userId: user.id }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 417,
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
        lineNumber: 420,
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
        lineNumber: 430,
        columnNumber: 9
      },
      this
    ) : null,
    userDetails == 6 /* reviews */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      !submit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Rating" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 439,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 440,
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
            lineNumber: 442,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 438,
        columnNumber: 13
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Your Reviews" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 451,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 454,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Review, { userId: user.id, brandId: curUser.brand.id }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 455,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 436,
      columnNumber: 9
    }, this) : null,
    userDetails == 7 /* dispute */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dispute, { brandId: curUser.brand.id, userId: user.id }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 460,
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
      lineNumber: 481,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 480,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 479,
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
        lineNumber: 533,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Platform Name" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 536,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Account" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 539,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Followers" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 542,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 532,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 531,
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
          lineNumber: 551,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 550,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.platformName }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 557,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.handleName }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 558,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.follower.toString().split(".")[0] }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 559,
        columnNumber: 17
      }, this)
    ] }, index, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 549,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 547,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 530,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 529,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 528,
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
      lineNumber: 603,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-gray-700", children: bio }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 606,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-semibold mt-4", children: "Personal Life" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 607,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-gray-700", children: personal }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 610,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-semibold mt-4", children: "Career" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 611,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-gray-700", children: career }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 612,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-xl font-semibold mt-4", children: "External Links" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 613,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-gray-700", children: external }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 616,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 602,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 601,
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
    lineNumber: 655,
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
                lineNumber: 679,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.brand.name }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 685,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.brand.email }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 686,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 684,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 678,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 689,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 690,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 691,
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
              lineNumber: 692,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 699,
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
              lineNumber: 700,
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
        lineNumber: 674,
        columnNumber: 17
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 659,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 653,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 652,
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
            lineNumber: 756,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-medium", children: val.brandName }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 762,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 761,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 755,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-600 font-medium mt-4", children: "Campaign Rating" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 766,
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
            lineNumber: 769,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 765,
        columnNumber: 15
      }, this)
    ] }, index, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 754,
      columnNumber: 13
    }, this);
  }) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 751,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 750,
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
      lineNumber: 821,
      columnNumber: 11
    }, this),
    status.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-semibold text-gray-600 text-2xl", children: "There is nothing to show" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 825,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "w-full bg-gray-100 rounded-xl p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Brand" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 832,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Campaign Name" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 835,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Earning" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 838,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Date" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 841,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 831,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 830,
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
            lineNumber: 850,
            columnNumber: 23
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 849,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.campaign_name }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 856,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
          " ",
          val.total_amount_requested.toString().split(".")[0]
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 857,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: format(
          new Date(
            Date.now() - val.days_since_payment_made * 24 * 60 * 60 * 1e3
          )
        ) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 861,
          columnNumber: 21
        }, this)
      ] }, index, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 848,
        columnNumber: 19
      }, this)) }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 846,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 829,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 820,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 819,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 818,
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
      lineNumber: 939,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 940,
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
              lineNumber: 948,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: "This is so bad" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 949,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "This is extrimily bad" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 950,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", children: "I just don't want it" }, void 0, false, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 951,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 942,
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
          lineNumber: 953,
          columnNumber: 11
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 959,
        columnNumber: 13
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 964,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: submit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Send Message", background: "bg-primary" }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 969,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 968,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 941,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 938,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 937,
    columnNumber: 5
  }, this);
};
var UserInsights = (props) => {
  const [platformData, setPlatformData] = (0, import_react2.useState)();
  const [allPlatformData, setAllPlatformData] = (0, import_react2.useState)([]);
  const init = async () => {
    const userdata = await axios_default.post(`${BaseUrl}/api/get-user-handles`, {
      userId: props.userId
    });
    if (userdata.data.status) {
      setAllPlatformData((val) => userdata.data.data);
      console.log();
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  const getPlatform = async (handle_id) => {
    const userdata = await axios_default.post(`${BaseUrl}/api/get-insta-handel-byid`, {
      userId: props.userId,
      handleId: handle_id
    });
    setPlatformData((val) => userdata.data.data[0]);
  };
  const handeladdupdate = async (handle_id) => {
    const modashdata = await axios_default({
      method: "get",
      url: `https://api.modash.io/v1/instagram/profile/nusr_et/report?access_token=8PVJbSqOpTYwQ90B3sMMji0u05vhpOhN`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer 8PVJbSqOpTYwQ90B3sMMji0u05vhpOhN",
        Accept: "*"
      }
    });
    console.log(modashdata.data);
    const data = modashdata.data;
    if (!data.error) {
      const userdata = await axios_default.post(`${BaseUrl}/api/add-insta-handel`, {
        userId: props.userId,
        handleId: handle_id,
        userName: data.profile.profile.username,
        followers: data.profile.profile.followers,
        pictureurl: data.profile.profile.picture,
        postsCount: data.profile.postsCount,
        engagementRate: data.profile.profile.engagementRate,
        engagements: data.profile.profile.engagements,
        city: data.profile.city,
        country: data.profile.country,
        language: data.profile.langauage.name,
        isVerified: data.profile.isVerified,
        isPrivate: data.profile.isPrivate,
        avgReelsPlays: data.profile.avgReelsPlays,
        avgLikes: data.profile.avgLikes,
        avgComments: data.profile.avgComments,
        avgViews: data.profile.avgViews,
        paidPostPerformance: data.profile.paidPostPerformance,
        genderMale: data.profile.genders[1].weight,
        genderFemale: data.profile.genders[0].weight,
        geoCities1: data.profile.geoCities[0].name,
        geoCities2: data.profile.geoCities[1].name,
        geoCities3: data.profile.geoCities[2].name,
        geoCities4: data.profile.geoCities[3].name,
        geoCities5: data.profile.geoCities[4].name,
        geoCountries1: data.profile.geoCountries[0].name,
        geoCountries2: data.profile.geoCountries[1].name,
        geoCountries3: data.profile.geoCountries[2].name,
        geoCountries4: data.profile.geoCountries[3].name,
        geoCountries5: data.profile.geoCountries[4].name,
        ages13_17: data.profile.ages[0].weight,
        ages18_24: data.profile.ages[1].weight,
        ages25_34: data.profile.ages[2].weight,
        ages35_44: data.profile.ages[3].weight,
        ages45_64: data.profile.ages[4].weight,
        ages65_: data.profile.ages[5].weight,
        likedPost1Url: data.profile.popularPosts[0].url,
        likedPost1CreatedAt: data.profile.popularPosts[0].created,
        likedPost1Likes: data.profile.popularPosts[0].likes,
        likedPost1Comments: data.profile.popularPosts[0].comments,
        liked1Post1Image: data.profile.popularPosts[0].thumbnail,
        likedPost2Url: data.profile.popularPosts[1].url,
        likedPost2CreatedAt: data.profile.popularPosts[1].created,
        likedPost2Likes: data.profile.popularPosts[1].likes,
        likedPost2Comments: data.profile.popularPosts[1].comments,
        likedPost2Image: data.profile.popularPosts[1].thumbnail,
        likedPost3Url: data.profile.popularPosts[2].url,
        likedPost3CreatedAt: data.profile.popularPosts[2].created,
        likedPost3Likes: data.profile.popularPosts[2].likes,
        likedPost3Comments: data.profile.popularPosts[2].comments,
        likedPost3Image: data.profile.popularPosts[2].thumbnail,
        recentPost1Url: data.profile.recentPosts[0].url,
        recentPost1CreatedAt: data.profile.recentPosts[0].created,
        recentPost1Like: data.profile.recentPosts[0].likes,
        recentPost1Comments: data.profile.recentPosts[0].comments,
        recentPost2Url: data.profile.recentPosts[1].url,
        recentPost2CreatedAt: data.profile.recentPosts[1].created,
        recentPost2Like: data.profile.recentPosts[1].likes,
        recentPost2Comments: data.profile.recentPosts[1].comments,
        recentPost3Url: data.profile.recentPosts[2].url,
        recentPost3CreatedAt: data.profile.recentPosts[2].created,
        recentPost3Like: data.profile.recentPosts[2].likes,
        recentPost3Comments: data.profile.recentPosts[2].comments,
        oneMonthagoFollower: data.profile.statHistory[7].followers,
        oneMonthagoAvgLike: data.profile.statHistory[7].avgLikes,
        oneMonthAgoFollowing: data.profile.statHistory[7].following,
        twoMonthagoFollower: data.profile.statHistory[6].followers,
        twoMonthagoAvgLike: data.profile.statHistory[6].avgLikes,
        twoMonthAgoFollowing: data.profile.statHistory[6].following,
        threeMonthagoFollower: data.profile.statHistory[5].followers,
        threeMonthagoAvgLike: data.profile.statHistory[5].avgLikes,
        threeMonthAgoFollowing: data.profile.statHistory[5].following,
        fourMonthagoFollower: data.profile.statHistory[4].followers,
        fourMonthagoAvgLike: data.profile.statHistory[4].avgLikes,
        fourMonthAgoFollowing: data.profile.statHistory[4].following,
        fiveMonthagoFollower: data.profile.statHistory[3].followers,
        fiveMonthagoAvgLike: data.profile.statHistory[3].avgLikes,
        fiveMonthAgoFollowing: data.profile.statHistory[3].following
      });
    } else {
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow bg-white my-2 rounded-md p-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-medium text-xl", children: "User State" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 1121,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-slate-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 1122,
      columnNumber: 9
    }, this),
    allPlatformData.length == 0 || allPlatformData == null || allPlatformData == void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `my-6 flex gap-2 items-center b  py-1 px-2 rounded-md border border-rose-400 bg-rose-500 bg-opacity-10 text-rose-500 cursor-pointer text-center text-xl`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "User does not have any channel" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1129,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 1126,
        columnNumber: 11
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: allPlatformData.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "bg-[#eeeeee] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-60",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: val.platformLogoUrl,
                  alt: "platform logo",
                  className: "w-14 h-14 rounded-md"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/myuser.$id.tsx",
                  lineNumber: 1140,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xl", children: val.platformName }, void 0, false, {
                  fileName: "app/routes/home/myuser.$id.tsx",
                  lineNumber: 1146,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-md", children: val.handleName }, void 0, false, {
                  fileName: "app/routes/home/myuser.$id.tsx",
                  lineNumber: 1147,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 1145,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 1149,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/myuser.$id.tsx",
              lineNumber: 1139,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => getPlatform(val.handle_id),
                className: `mt-6 flex gap-2 items-center py-1 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl`,
                children: "View Info"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/myuser.$id.tsx",
                lineNumber: 1151,
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
          lineNumber: 1135,
          columnNumber: 17
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 1132,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 1162,
      columnNumber: 9
    }, this),
    platformData == null || platformData == void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-2 py-1 px-2 rounded-md border border-rose-400 bg-rose-500 bg-opacity-10 text-rose-500 cursor-pointer text-center text-sm", children: "There is no data from this platform" }, void 0, false, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 1164,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Info" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1170,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1171,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: platformData.picUrl,
            alt: "avatar",
            className: "rounded-md w-20 h-20 object-cover object-center"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1173,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1172,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "User Name : ",
          platformData.userName
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1179,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Language : ",
          platformData.language
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1182,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Verified : ",
          platformData.isVerified ? "Yes" : "No"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1185,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Private : ",
          platformData.isPrivate ? "Yes" : "No"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1188,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City : ",
          platformData.city
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1191,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country : ",
          platformData.country
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1194,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Followers :",
          " ",
          Number(platformData.followers).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1197,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Post Count :",
          " ",
          Number(platformData.postCount).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1201,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Engagement Rate : ",
          platformData.engagementRate
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1205,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Engagements: ",
          platformData.engagements
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1208,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Paid Post : ",
          platformData.paidPostPerformance
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1211,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 1169,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Average Info" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1216,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1219,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Average Reels Play :",
          " ",
          Number(platformData.avgReelsPlays).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1220,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Average Likes :",
          " ",
          Number(platformData.avgLikes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1224,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Average Views :",
          " ",
          Number(platformData.avgViews).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1228,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Average Comments :",
          " ",
          Number(platformData.avgComments).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1232,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1236,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User interest" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1237,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1238,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Male : ",
          (Number(platformData.genderMale) * 100).toFixed(2),
          " %"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1239,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Female : ",
          (Number(platformData.genderFemale) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1242,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 1215,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Location Info" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1248,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1251,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 1 : ",
          platformData.geoCities1
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1252,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 2 : ",
          platformData.geoCities2
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1255,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 3 : ",
          platformData.geoCities3
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1258,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 4 : ",
          platformData.geoCities4
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1261,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "City 5 : ",
          platformData.geoCities5
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1264,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1267,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 1 : ",
          platformData.geoCountries1
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1269,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 2 : ",
          platformData.geoCountries2
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1272,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 3 : ",
          platformData.geoCountries3
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1275,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 4 : ",
          platformData.geoCountries4
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1278,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Country 5 : ",
          platformData.geoCountries5
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1281,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 1247,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Age base interest" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1286,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1289,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 13-17 : ",
          (Number(platformData.ages13_17) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1290,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 18-24 : ",
          (Number(platformData.ages18_24) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1294,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 25-34 : ",
          (Number(platformData.ages25_34) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1298,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 35-44 : ",
          (Number(platformData.ages35_44) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1302,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 45-64 : ",
          (Number(platformData.ages45_64) * 100).toFixed(2),
          " ",
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1306,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Age 65+ : ",
          (Number(platformData.ages65_) * 100).toFixed(2),
          " %"
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1310,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 1285,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Likes first post details" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1315,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1318,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: platformData.liked1Post1Image,
            alt: "avatar",
            className: "rounded-md w-20 h-20 object-cover object-ce\r\n                "
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1320,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1319,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.likedPost1Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1327,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.likedPost1CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1334,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.likedPost1Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1338,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.likedPost1Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1342,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1348,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Likes second post details" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1349,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1352,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: platformData.likedPost2Image,
            alt: "avatar",
            className: "rounded-md w-20 h-20 object-cover object-ce\r\n                "
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1355,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1354,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.likedPost2Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1362,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.likedPost2CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1369,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.likedPost2Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1373,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.likedPost2Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1377,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1383,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "User Likes Third post details" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1384,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1387,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: platformData.likedPost3Image,
            alt: "avatar",
            className: "rounded-md w-20 h-20 object-cover object-ce\r\n                "
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1390,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1389,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.likedPost3Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1397,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.likedPost3CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1404,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.likedPost3Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1408,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.likedPost3Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1412,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1418,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1420,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 1314,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Recent Post One" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1423,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1426,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.recentPost1Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1427,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.recentPost1CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1434,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.recentPost1Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1438,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.recentPost1Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1442,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1448,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Recent Post Second" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1449,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1452,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.recentPost2Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1453,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.recentPost2CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1460,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.recentPost2Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1464,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.recentPost2Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1468,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1474,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Recent Post Three" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1476,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1479,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            className: "inline-block mt-4 px-2 rounded-md border border-cyan-400 bg-cyan-500 bg-opacity-10 text-cyan-500 cursor-pointer text-center text-xl",
            href: platformData.recentPost3Url,
            target: "_blank",
            children: "Visit"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/myuser.$id.tsx",
            lineNumber: 1480,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post date :",
          " ",
          new Date(platformData.recentPost3CreatedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1487,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Likes :",
          " ",
          Number(platformData.recentPost3Likes).toLocaleString("en-US")
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1491,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Liked Post Comments :",
          " ",
          Number(platformData.recentPost3Comments).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1495,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 1422,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#31353f] hover:bg-slate-800 rounded-md px-4 py-2 my-2 text-white font-medium text-md flex-nowrap w-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-center font-semibold", children: "Month wise user details" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1503,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1506,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "First Month Follower :",
          " ",
          Number(platformData.oneMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1507,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "First Month Average Likes :",
          " ",
          Number(platformData.oneMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1513,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "First Month Following :",
          " ",
          Number(platformData.oneMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1519,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1525,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Second Month Follower :",
          " ",
          Number(platformData.twoMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1526,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Second Month Average Likes :",
          " ",
          Number(platformData.twoMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1532,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Second Month Following :",
          " ",
          Number(platformData.twoMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1538,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1544,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Third Month Follower :",
          " ",
          Number(platformData.threeMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1545,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Third Month Average Likes :",
          " ",
          Number(platformData.threeMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1551,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Third Month Following :",
          " ",
          Number(platformData.threeMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1557,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1563,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Fourth Month Follower :",
          " ",
          Number(platformData.fourMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1564,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Fourth Month Average Likes :",
          " ",
          Number(platformData.fourMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1570,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Fourth Month Following :",
          " ",
          Number(platformData.fourMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1576,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400 w-full h-[2px] my-4" }, void 0, false, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1582,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Five Month Follower :",
          " ",
          Number(platformData.fiveMonthAgoFollower).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1583,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Five Month Average Likes :",
          " ",
          Number(platformData.fiveMonthAgoAvgLike).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1589,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-left font-normal", children: [
          "Five Month Following :",
          " ",
          Number(platformData.fiveMonthAgoFollowing).toLocaleString(
            "en-US"
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/myuser.$id.tsx",
          lineNumber: 1595,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/myuser.$id.tsx",
        lineNumber: 1502,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/myuser.$id.tsx",
      lineNumber: 1168,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 1120,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/myuser.$id.tsx",
    lineNumber: 1119,
    columnNumber: 5
  }, this);
};
export {
  myuser_id_default as default
};
//# sourceMappingURL=/build/routes/home/myuser.$id-EKEIFDQV.js.map