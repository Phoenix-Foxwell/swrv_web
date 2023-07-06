import {
  stripe_esm_worker_default
} from "/build/_shared/chunk-P4HVA5I3.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  FontAwesomeIcon,
  faThumbsDown,
  faThumbsUp
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
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

// app/routes/home/brandpay.$brandId.$camId.$draftId.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var stripe = new stripe_esm_worker_default(
  "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",
  { apiVersion: "2022-11-15" }
);
var PaymentRequest = () => {
  const loaderdata = useLoaderData();
  const brandId = loaderdata.brandId;
  const campaignId = loaderdata.campaignId;
  const userId = loaderdata.userId;
  const draftId = loaderdata.draftId;
  const cpp = loaderdata.cpp;
  const currency = loaderdata.currency;
  const campaignName = loaderdata.name;
  const [submit, setSubmit] = (0, import_react2.useState)(false);
  const [userDetails, setUserDetails] = (0, import_react2.useState)(
    0 /* insights */
  );
  const [draftdata, setDraftdata] = (0, import_react2.useState)("");
  const init = async () => {
    const req = {
      search: {
        type: "3",
        campaign: campaignId,
        brand: brandId,
        influencer: userId
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
    let req1 = {
      search: {
        status: "3",
        campaign: campaignId,
        toUser: userId
      }
    };
    const apireq1 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-draft`,
      data: req1
    });
    if (apireq1.data.status) {
      setDraftdata((val) => apireq1.data.data[0]);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mx-4 gap-4 flex-wrap py-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          onClick: () => {
            setUserDetails(0 /* insights */);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CusButton,
            {
              text: "Insights",
              margin: "0",
              background: `${userDetails == 0 /* insights */ ? "bg-[#01FFF4]" : "bg-gray-100"}`,
              fontwidth: "font-bold",
              textColor: `${userDetails == 0 /* insights */ ? "text-black" : "text-gray-600"}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 119,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 114,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          onClick: () => {
            setUserDetails(1 /* payments */);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CusButton,
            {
              margin: "0",
              text: "Payments",
              background: `${userDetails == 1 /* payments */ ? "bg-[#01FFF4]" : "bg-gray-100"}`,
              fontwidth: "font-bold",
              textColor: `${userDetails == 1 /* payments */ ? "text-black" : "text-gray-600"}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 138,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 133,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          onClick: () => {
            setUserDetails(3 /* schedule */);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CusButton,
            {
              margin: "0",
              text: "Schedule",
              background: `${userDetails == 3 /* schedule */ ? "bg-[#01FFF4]" : "bg-gray-100"}`,
              fontwidth: "font-bold",
              textColor: `${userDetails == 3 /* schedule */ ? "text-black" : "text-gray-600"}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 157,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 152,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6 mt-6", children: [
      userDetails == 0 /* insights */ ? draftdata == null || draftdata == void 0 || draftdata == "" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "p-4 bg-white rounded-lg shadow-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: draftdata.influencer.pic,
                  alt: "influencer pic",
                  className: "w-10 h-10 shrink-0 rounded-md object-center object-cover"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                  lineNumber: 181,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: draftdata.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                  lineNumber: 187,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: draftdata.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                  lineNumber: 190,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 186,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 180,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 195,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: draftdata.description }, void 0, false, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 196,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Handle Info" }, void 0, false, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 197,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: draftdata.handle.platform.logo, alt: "platform", className: "w-14 h-14 shrink-0 rounded-md object-fill object-center" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 199,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-center", children: draftdata.handle.name }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 200,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 198,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 202,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                target: "_blank",
                className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500 w-full text-center",
                href: draftdata.attach01,
                children: "View Doc"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 203,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                target: "_blank",
                className: "w-full mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500 text-center",
                href: `https://www.instagram.com/p/Cts574MI2kf/?hl=en`,
                children: "View Insights"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 210,
                columnNumber: 17
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 177,
          columnNumber: 15
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, this),
      userDetails == 1 /* payments */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserPaymentRequest,
        {
          userid: userId,
          campaingid: campaignId,
          currency,
          draft: draftId
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 227,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 226,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, this),
      userDetails == 3 /* schedule */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Schedule, { draftid: draftId }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 239,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 242,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
};
var brandpay_brandId_camId_draftId_default = PaymentRequest;
var UserPaymentRequest = (props) => {
  const [respayment, setRequestPayment] = (0, import_react2.useState)([]);
  const [acceptbox, setAcceptbox] = (0, import_react2.useState)(false);
  const [rejectbox, setrejectbox] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const [id, setId] = (0, import_react2.useState)(null);
  const init = async () => {
    let req = {
      search: {
        campaigndraft: props.draft,
        campaign: props.campaingid,
        influencer: props.userid
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/get-req-pay`, req);
    if (responseData.data.status == true) {
      setRequestPayment(responseData.data.data);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  const acceptRequest = async () => {
    let req = {
      id,
      status: "2",
      refNo: `${new Date().toLocaleDateString()}_${props.userid}_${props.campaingid}`
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/update-payment`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    setAcceptbox(false);
    window.location.reload();
  };
  const rejectRequest = async () => {
    let req = { id, status: "3" };
    const responseData = await axios_default.post(`${BaseUrl}/api/update-payment`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    setrejectbox(false);
    window.location.reload();
  };
  const handlepayment = async () => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Example Product",
              images: [
                "https://plus.unsplash.com/premium_photo-1684952849219-5a0d76012ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
              ]
            },
            unit_amount: 4200
          },
          quantity: 1
        }
      ],
      success_url: "https://your-website.com/success",
      cancel_url: "https://your-website.com/cancel"
    });
    window.location.assign(session.url == null ? "" : session.url);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-2xl", children: "Accept" }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 342,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 343,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this payment?" }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 344,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 348,
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
                      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                      lineNumber: 359,
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
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 353,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 365,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                onClick: handlepayment,
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
                      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                      lineNumber: 370,
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
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 366,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 352,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 341,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 337,
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
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 384,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to reject this payment?" }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 385,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 389,
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
                      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                      lineNumber: 400,
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
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 394,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 406,
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
                      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                      lineNumber: 411,
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
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 407,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 393,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 383,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 379,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white w-full", children: respayment.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No payment request is pending" }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 423,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 422,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Payment" }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 427,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 428,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: respayment.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "p-4 bg-white rounded-lg shadow-lg w-72",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Requested by" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 436,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 437,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    src: val.influencer.pic,
                    alt: "influencer pic",
                    className: "w-10 h-10 shrink-0 rounded-md object-center object-cover"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                    lineNumber: 439,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                    lineNumber: 445,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                    lineNumber: 448,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                  lineNumber: 444,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 438,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Amount" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 453,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: [
                val.amount.toString().split(".")[0],
                " ",
                props.currency
              ] }, void 0, true, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 454,
                columnNumber: 21
              }, this),
              parseInt(val.status.code) == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-green-500 rounded-md my-2", children: "Accepted" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 458,
                columnNumber: 23
              }, this) : parseInt(val.status.code) == 3 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-red-500 rounded-md my-2", children: "Rejected" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 462,
                columnNumber: 23
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 mt-2", children: [
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
                          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                          lineNumber: 474,
                          columnNumber: 27
                        },
                        this
                      ),
                      "Accept"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                    lineNumber: 467,
                    columnNumber: 25
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
                          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                          lineNumber: 487,
                          columnNumber: 27
                        },
                        this
                      ),
                      "Reject"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                    lineNumber: 480,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 466,
                columnNumber: 23
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 432,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 429,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 426,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 420,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 336,
    columnNumber: 5
  }, this);
};
var Schedule = (props) => {
  const type = (0, import_react2.useRef)(null);
  const [react, setReact] = (0, import_react2.useState)();
  const handelreact = (e) => {
    setReact(e.target.value.replace(/\D/g, ""));
  };
  const time = (0, import_react2.useRef)(null);
  const date = (0, import_react2.useRef)(null);
  const [error, setError] = (0, import_react2.useState)(null);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const [draft, setDraft] = (0, import_react2.useState)(null);
  const init = async () => {
    let req = {
      search: {
        id: props.draftid
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setDraft(responseData.data.data[0]);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  const submit = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    setError(null);
    if (((_a = type.current) == null ? void 0 : _a.value) == null || ((_b = type.current) == null ? void 0 : _b.value) == void 0 || ((_c = type.current) == null ? void 0 : _c.value) == "") {
      setError("Fill the publication type");
    } else if (react == null || react == void 0 || react == 0) {
      setError("Fill the target reach");
    } else if (((_d = time.current) == null ? void 0 : _d.value) == null || ((_e = time.current) == null ? void 0 : _e.value) == void 0 || ((_f = time.current) == null ? void 0 : _f.value) == "") {
      setError("Fill the Publication time");
    } else if (((_g = date.current) == null ? void 0 : _g.value) == null || ((_h = date.current) == null ? void 0 : _h.value) == void 0 || ((_i = date.current) == null ? void 0 : _i.value) == "") {
      setError("Fill the publication date");
    } else {
      const responseData = await axios_default.post(`${BaseUrl}/api/update-draft`, {
        id: props.draftid,
        publication_type: (_j = type.current) == null ? void 0 : _j.value,
        target_react: react,
        publication_time: (_k = time.current) == null ? void 0 : _k.value,
        draft_approval: (_l = date.current) == null ? void 0 : _l.value
      });
      if (!responseData.data.status) {
        setError(responseData.data.message);
      } else {
        setSus("Schedule is updated.");
        window.location.reload();
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white w-full", children: draft == null || draft == void 0 || draft == "" ? null : draft.draft_approval == null || draft.draft_approval == void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Publication Type" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 602,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: type,
            type: "text",
            className: "w-80 outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 603,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 601,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Target reach" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 610,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            onChange: handelreact,
            value: react,
            type: "text",
            className: "w-80 outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 611,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 609,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 600,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Publication time" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 621,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: time,
            type: "time",
            className: "w-80 outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 622,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 620,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Publication Date" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 629,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: date,
            type: "date",
            className: "w-80 outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 630,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 628,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 619,
      columnNumber: 17
    }, this),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 638,
      columnNumber: 19
    }, this),
    sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 643,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        onClick: submit,
        className: "mt-4 text-md w-80 text-black font-semibold bg-[#fbca8e] rounded-md shadow-lg py-1",
        children: "Submit"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 647,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 599,
    columnNumber: 15
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Publication Type" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 658,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold text-black", children: draft.publication_type }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 659,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 657,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Target reach" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 663,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold text-black", children: draft.target_react }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 664,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 662,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 656,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Publication time" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 669,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold text-black", children: draft.publication_time }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 670,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 668,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Publication Date" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 673,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold text-black", children: draft.draft_approval }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 674,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 672,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 667,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 655,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 594,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 593,
    columnNumber: 5
  }, this);
};
export {
  brandpay_brandId_camId_draftId_default as default
};
//# sourceMappingURL=/build/routes/home/brandpay.$brandId.$camId.$draftId-JWDTPIJ7.js.map
