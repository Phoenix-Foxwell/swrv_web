import {
  raiting_default
} from "/build/_shared/chunk-HVB5MBA7.js";
import "/build/_shared/chunk-BVHAJD74.js";
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
  faCoins
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
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 91,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 86,
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
              lineNumber: 111,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 106,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6 mt-6", children: [
      userDetails == 0 /* insights */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 133,
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
            lineNumber: 137,
            columnNumber: 13
          },
          this
        ),
        !submit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Rating" }, void 0, false, {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 148,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 151,
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
              lineNumber: 152,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 147,
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
            lineNumber: 160,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 83,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Payments" }, void 0, false, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 224,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 225,
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
            lineNumber: 228,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-primary font-medium px-4", children: "Budget" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 232,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: [
          props.cpp.toString().split(".")[0],
          " ",
          props.currency
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 234,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-500 w-full my-2 " }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Received" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 240,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black", children: [
          recived,
          " ",
          props.currency
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 242,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 239,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Pending" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black", children: [
          parseInt(props.cpp.toString().split(".")[0]) - recived,
          " ",
          props.currency
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 246,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 226,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-normal font-semibold py-1 text-primary text-lg", children: "Payment request" }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 256,
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
          lineNumber: 259,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${paymentBox ? "" : "hidden"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enter Amount : " }, void 0, false, {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 271,
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
              lineNumber: 273,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 270,
          columnNumber: 13
        }, this),
        paymentError == "" || paymentError == null || paymentError == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: paymentError }, void 0, false, {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 283,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            onClick: async () => {
              var _a, _b, _c, _d, _e;
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
                if (!paymentdata.data.status)
                  return setPaymentError(paymentdata.data.message);
                else {
                  setPaymentError("");
                  paymentRef.current.value = "";
                }
                return setPaymentBox(false);
              }
            },
            className: `text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2`,
            children: "Request Payment"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
            lineNumber: 287,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 269,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 223,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 222,
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
      lineNumber: 396,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 397,
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
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 405,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: "This is so bad" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 406,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "This is extrimily bad" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 407,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", children: "I just don't want it" }, void 0, false, {
              fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
              lineNumber: 408,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
          lineNumber: 399,
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
          lineNumber: 410,
          columnNumber: 11
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 416,
        columnNumber: 13
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 421,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: submit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Send Message", background: "bg-primary" }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 426,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
        lineNumber: 425,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
      lineNumber: 398,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 395,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/paymentreq.$brandId.$camId.$draftId.tsx",
    lineNumber: 394,
    columnNumber: 5
  }, this);
};
export {
  paymentreq_brandId_camId_draftId_default as default
};
//# sourceMappingURL=/build/routes/home/paymentreq.$brandId.$camId.$draftId-LWWUF4KU.js.map
