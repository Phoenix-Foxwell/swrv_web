import {
  raiting_default
} from "/build/_shared/chunk-QOEK7KW7.js";
import "/build/_shared/chunk-7HWNPYKE.js";
import "/build/_shared/chunk-C3FEWCCA.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  FontAwesomeIcon,
  faCoins
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

// app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 112,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 107,
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
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 130,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 125,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 105,
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
                  fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
                  lineNumber: 152,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: draftdata.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
                  lineNumber: 158,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: draftdata.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
                  lineNumber: 161,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
                lineNumber: 157,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 151,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: draftdata.description }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 167,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Handle Info" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 168,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: draftdata.handle.platform.logo, alt: "platform", className: "w-14 h-14 shrink-0 rounded-md object-fill object-center" }, void 0, false, {
                fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
                lineNumber: 170,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-center", children: draftdata.handle.name }, void 0, false, {
                fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
                lineNumber: 171,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 169,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 173,
              columnNumber: 15
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
                fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
                lineNumber: 174,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                target: "_blank",
                className: "w-full mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500 text-center",
                t0: `/${draftdata.linkCampaign}`,
                children: "View Insights"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
                lineNumber: 181,
                columnNumber: 15
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 148,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this),
      userDetails == 1 /* payments */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Payments,
          {
            brandId,
            userId,
            campaignId,
            draftId,
            cpp,
            currency,
            campname: campaignName
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 195,
            columnNumber: 13
          },
          this
        ),
        !submit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Rating" }, void 0, false, {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            raiting_default,
            {
              campaignId,
              brandId,
              influencerId: userId,
              reviewType: "3"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 210,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 205,
          columnNumber: 15
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Dispute,
          {
            brandId,
            userId,
            campaignId
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 218,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
};
var paymentreq_brandId_camId_draftId_default = PaymentRequest;
var Payments = (props) => {
  const [paymentBox, setPaymentBox] = (0, import_react2.useState)(false);
  const [paymentError, setPaymentError] = (0, import_react2.useState)("");
  const paymentRef = (0, import_react2.useRef)(null);
  const [recived, setRecived] = (0, import_react2.useState)(0);
  const [requested, serRequested] = (0, import_react2.useState)(0);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const init = async () => {
    const reqdata = await axios_default.post(`${BaseUrl}/api/get-received-payment`, {
      userId: props.userId,
      draftId: props.draftId
    });
    if (reqdata.data.status) {
      setRecived(
        parseInt(reqdata.data.data.totalAmtReq.toString().split(".")[0])
      );
    } else {
      setRecived(0);
    }
    const reqdata1 = await axios_default.post(`${BaseUrl}/api/get-pending-payment`, {
      userId: props.userId,
      draftId: props.draftId
    });
    if (reqdata1.data.status) {
      serRequested(
        parseInt(reqdata1.data.data.totalAmtReq.toString().split(".")[0])
      );
    } else {
      serRequested(0);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  const sendpayment = async () => {
    var _a, _b, _c, _d, _e;
    setPaymentError("");
    setSus(null);
    if (((_a = paymentRef.current) == null ? void 0 : _a.value) == null || ((_b = paymentRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = paymentRef.current) == null ? void 0 : _c.value) == "") {
      setPaymentError("Enter the amount");
    } else if (parseInt((_d = paymentRef.current) == null ? void 0 : _d.value) > parseInt(props.cpp) - requested) {
      setPaymentError(
        "Your requested is higher then pending amount."
      );
    } else {
      let req = {
        userId: props.userId,
        campaignId: props.campaignId,
        amtReq: (_e = paymentRef.current) == null ? void 0 : _e.value,
        draftId: props.draftId,
        brandId: props.brandId,
        paymentType: "1"
      };
      const paymentdata = await axios_default.post(
        `${BaseUrl}/api/new-pay-request`,
        req
      );
      if (!paymentdata.data.status) {
        setPaymentError(paymentdata.data.message);
      } else {
        setPaymentError("");
        paymentRef.current.value = "";
        setSus("Payment Request Sent Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 2e3);
      }
      setPaymentBox(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Payments" }, void 0, false, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 339,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 340,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl shadow-xl bg-white p-4 mt-2 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            icon: faCoins,
            className: "text-xl text-primary"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 343,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-primary font-medium px-4", children: "Budget" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 347,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 348,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: [
          props.cpp.toString().split(".")[0],
          " ",
          props.currency
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 349,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 342,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-500 w-full my-2 " }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 353,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Received" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 355,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 356,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black", children: [
          recived,
          " ",
          props.currency
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 357,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 354,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Pending" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 362,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 363,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black", children: [
          parseInt(props.cpp.toString().split(".")[0]) - recived,
          " ",
          props.currency
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 364,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 361,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 341,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-normal font-semibold py-1 text-primary text-lg", children: "Payment request" }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 371,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => {
            setPaymentBox(true);
          },
          className: `text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2 ${paymentBox ? "hidden" : ""}`,
          children: "Request"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 374,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${paymentBox ? "" : "hidden"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enter Amount : " }, void 0, false, {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 385,
            columnNumber: 15
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: paymentRef,
              type: "number",
              className: "text-black outline-none border-none rounded-md py-1 px-2 bg-gray-300 w-full"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 387,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 386,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 384,
          columnNumber: 13
        }, this),
        paymentError == "" || paymentError == null || paymentError == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: paymentError }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 397,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            onClick: sendpayment,
            className: `text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2`,
            children: "Request Payment"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 401,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 383,
        columnNumber: 11
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 411,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 370,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 338,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 337,
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
        campaignId: props.campaignId,
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
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 484,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 485,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "Product or service issue" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 493,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: "Billing or payment issue" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 494,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "Shipping or delivery issue" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 495,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", children: "Customer service issue" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 496,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "5", children: "Website or app issue" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 497,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "6", children: "Other issue" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 498,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 487,
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
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 500,
          columnNumber: 11
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 506,
        columnNumber: 13
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 511,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: submit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Send Message", background: "bg-primary" }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 516,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 515,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 486,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 483,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 482,
    columnNumber: 5
  }, this);
};
export {
  paymentreq_brandId_camId_draftId_default as default
};
//# sourceMappingURL=/build/routes/home/paymentreq.$brandId.$camId.$draftId-JDAOBIXK.js.map
