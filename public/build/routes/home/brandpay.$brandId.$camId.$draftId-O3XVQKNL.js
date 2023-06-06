import {
  stripe_esm_worker_default
} from "/build/_shared/chunk-P4HVA5I3.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-R3MWT2S5.js";
import {
  FontAwesomeIcon,
  faThumbsDown,
  faThumbsUp
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
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
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mx-4 gap-4", children: [
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
              background: `${userDetails == 0 /* insights */ ? "bg-[#01FFF4]" : "bg-gray-100"}`,
              fontwidth: "font-bold",
              textColor: `${userDetails == 0 /* insights */ ? "text-black" : "text-gray-600"}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 99,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 94,
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
              text: "Payments",
              background: `${userDetails == 1 /* payments */ ? "bg-[#01FFF4]" : "bg-gray-100"}`,
              fontwidth: "font-bold",
              textColor: `${userDetails == 1 /* payments */ ? "text-black" : "text-gray-600"}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 117,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 112,
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
              text: "Schedule",
              background: `${userDetails == 3 /* schedule */ ? "bg-[#01FFF4]" : "bg-gray-100"}`,
              fontwidth: "font-bold",
              textColor: `${userDetails == 3 /* schedule */ ? "text-black" : "text-gray-600"}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 135,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 130,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6 mt-6", children: [
      userDetails == 0 /* insights */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 155,
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
          lineNumber: 159,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this),
      userDetails == 3 /* schedule */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Schedule, { draftid: draftId }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 91,
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
            currency: "inr",
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
            lineNumber: 280,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 281,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this payment?" }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 282,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 286,
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
                      lineNumber: 297,
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
                lineNumber: 291,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 303,
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
                      lineNumber: 308,
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
                lineNumber: 304,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 290,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 279,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 275,
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
            lineNumber: 322,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to reject this payment?" }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 323,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 327,
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
                      lineNumber: 338,
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
                lineNumber: 332,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
              lineNumber: 344,
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
                      lineNumber: 349,
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
                lineNumber: 345,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 331,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 321,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 317,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white w-full", children: respayment.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No payment request is pending" }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 361,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 360,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Payment" }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 365,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 366,
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
                lineNumber: 374,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 375,
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
                    lineNumber: 377,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                    lineNumber: 383,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                    lineNumber: 386,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                  lineNumber: 382,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 376,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Amount" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 391,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: [
                val.amount.toString().split(".")[0],
                " ",
                props.currency
              ] }, void 0, true, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 392,
                columnNumber: 21
              }, this),
              parseInt(val.status.code) == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-green-500 rounded-md my-2", children: "Accepted" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 396,
                columnNumber: 23
              }, this) : parseInt(val.status.code) == 3 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-red-500 rounded-md my-2", children: "Rejected" }, void 0, false, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 400,
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
                          lineNumber: 412,
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
                    lineNumber: 405,
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
                          lineNumber: 425,
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
                    lineNumber: 418,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
                lineNumber: 404,
                columnNumber: 23
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
            lineNumber: 370,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 367,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 364,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 358,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 274,
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
      setError("Fill the draft approval deadline");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Publcation Type" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 515,
          columnNumber: 13
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
            lineNumber: 516,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 514,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Target reach" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 523,
          columnNumber: 13
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
            lineNumber: 524,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 522,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 513,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-wrap mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Publication time" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 534,
          columnNumber: 13
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
            lineNumber: 535,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 533,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-primary", children: "Draft approval deadline" }, void 0, false, {
          fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
          lineNumber: 542,
          columnNumber: 13
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
            lineNumber: 543,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
        lineNumber: 541,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 532,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 550,
      columnNumber: 9
    }, this),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 552,
      columnNumber: 11
    }, this),
    sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
      fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
      lineNumber: 557,
      columnNumber: 11
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
        lineNumber: 561,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 512,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/brandpay.$brandId.$camId.$draftId.tsx",
    lineNumber: 511,
    columnNumber: 5
  }, this);
};
export {
  brandpay_brandId_camId_draftId_default as default
};
//# sourceMappingURL=/build/routes/home/brandpay.$brandId.$camId.$draftId-O3XVQKNL.js.map
