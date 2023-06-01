import {
  CampaginCard
} from "/build/_shared/chunk-SMFAEXAS.js";
import {
  es_default
} from "/build/_shared/chunk-2QADXOD2.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  getCampaignType
} from "/build/_shared/chunk-YVEMBLO4.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-6TW54YIL.js";
import {
  FontAwesomeIcon,
  faHandshake,
  faHeart,
  faNetworkWired,
  faRemove,
  faStar
} from "/build/_shared/chunk-KLMIUVT5.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/brand.$id.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BrandPage = () => {
  const brand = useLoaderData().brand;
  const user = useLoaderData().user;
  const [isPast, setPast] = (0, import_react2.useState)(false);
  const brandConnection = useLoaderData().brandConnection.influencer_count;
  const brandComCam = useLoaderData().brandComCam.completed_campaign;
  const logo = brand.logo == "" || brand.logo == void 0 || brand.logo == null || brand.logo == "0" ? "images/avatar.png" : brand.logo;
  const [fav, setFav] = (0, import_react2.useState)(false);
  const [myfavBrand, setMyfavBrand] = es_default(
    "favbrand",
    {
      defaultValue: []
    }
  );
  const setFavBrand = (brand2) => {
    setMyfavBrand([...myfavBrand, brand2]);
    setFav(true);
  };
  const revmoceFavBrand = (brand2) => {
    let savebrand = [];
    for (let i = 0; i < myfavBrand.length; i++) {
      if (myfavBrand[i]["id"] != brand2["id"]) {
        savebrand.push(myfavBrand[i]);
      }
    }
    setMyfavBrand(savebrand);
    setFav(false);
  };
  const [sum, setSum] = (0, import_react2.useState)({
    rowCount: 0,
    constCount: 3,
    rate: 0
  });
  const init = async () => {
    const req = {
      search: {
        type: "3",
        brand: brand.id
      }
    };
    const apireq = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-review`,
      data: req
    });
    let myrate = 0;
    for (let i = 0; i < apireq.data.data.length; i++) {
      myrate += parseInt(apireq.data.data[i].rating1) + parseInt(apireq.data.data[i].rating2) + parseInt(apireq.data.data[i].rating3);
    }
    setSum((val) => ({
      rowCount: apireq.data.data.length,
      rate: myrate,
      constCount: 3
    }));
  };
  (0, import_react2.useEffect)(() => {
    let res = false;
    myfavBrand.map((val, index) => {
      if (val.id == brand.id)
        res = true;
    });
    if (res) {
      setFav(true);
    } else {
      setFav(false);
    }
    init();
  }, []);
  const [error, setError] = (0, import_react2.useState)(null);
  const messageRef = (0, import_react2.useRef)(null);
  const [connectBox, setConnectBox] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${connectBox ? "fixed" : "hidden"}`,
        style: { zIndex: 100 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 149,
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
                    fileName: "app/routes/home/brand.$id.tsx",
                    lineNumber: 155,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 150,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 148,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 161,
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
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 162,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 173,
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
                    fromUserId: user.id,
                    toUserId: brand.id,
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
                    fileName: "app/routes/home/brand.$id.tsx",
                    lineNumber: 209,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 174,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 172,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/brand.$id.tsx",
          lineNumber: 147,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 141,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-5 right-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            onClick: () => {
              let brandval = {
                id: brand.id,
                logo,
                name: brand.name,
                email: brand.email,
                website: brand.webUrl
              };
              if (fav)
                return revmoceFavBrand(brandval);
              return setFavBrand(brandval);
            },
            icon: faHeart,
            className: `${fav ? "text-red-500" : "text-gray-500"} h-12 w-12`
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 221,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/brand.$id.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
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
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 237,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 flex flex-row gap-x-3 lg:flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: logo,
              alt: "brand logo",
              className: "w-32 h-32 rounded-md"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 246,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium my-2", children: brand.name }, void 0, false, {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 253,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-normal", children: "Category: Consumer Electronics" }, void 0, false, {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 256,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-normal", children: [
              "website: ",
              brand.webUrl
            ] }, void 0, true, {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 259,
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
                    text: "Connect",
                    background: "bg-secondary",
                    fontwidth: "font-bold"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/brand.$id.tsx",
                    lineNumber: 267,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 262,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 252,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/brand.$id.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-72 w-[2px] bg-gray-300 hidden lg:block mt-8" }, void 0, false, {
          fileName: "app/routes/home/brand.$id.tsx",
          lineNumber: 275,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col md:flex-row gap-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Rating,
              {
                rate: isNaN(Math.round(sum.rate / sum.rowCount / sum.constCount)) ? "0" : Math.round(
                  sum.rate / sum.rowCount / sum.constCount
                ).toString()
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 278,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Completed, { completed: brandComCam.toString() }, void 0, false, {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 287,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Connection, { connection: brandConnection.toString() }, void 0, false, {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 288,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 277,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium mt-4 mb-2", children: "Brand info" }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 290,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-sm font-normal", children: brand.info }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 293,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/brand.$id.tsx",
          lineNumber: 276,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brand.$id.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mx-4 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            onClick: () => {
              setPast(false);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Available Campaigns",
                background: `${isPast ? "bg-gray-100" : "bg-[#01FFF4]"}`,
                fontwidth: "font-bold",
                textColor: `${isPast ? "text-gray-600" : "text-black"}`
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 304,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 299,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            onClick: () => {
              setPast(true);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Past associations",
                background: `${isPast ? "bg-[#01FFF4]" : "bg-gray-100"}`,
                fontwidth: "font-bold",
                textColor: `${isPast ? "text-black" : "text-gray-600"}`
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 316,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 311,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 298,
        columnNumber: 9
      }, this),
      isPast ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        PastBrandAssociation,
        {
          userId: user.id,
          brandId: brand.id
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/brand.$id.tsx",
          lineNumber: 325,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvailableCampaigns, { brandId: brand.id }, void 0, false, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 330,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brand.$id.tsx",
      lineNumber: 297,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 140,
    columnNumber: 5
  }, this);
};
var brand_id_default = BrandPage;
var Rating = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FontAwesomeIcon,
      {
        className: "text-black text-3xl",
        icon: faStar
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 348,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/brand.$id.tsx",
      lineNumber: 347,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-lg font-bold", children: props.rate }, void 0, false, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 354,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-sm font-normal", children: "Rating" }, void 0, false, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 355,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brand.$id.tsx",
      lineNumber: 353,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 346,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 345,
    columnNumber: 5
  }, this);
};
var Connection = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FontAwesomeIcon,
      {
        className: "text-black text-3xl",
        icon: faHandshake
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 373,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/brand.$id.tsx",
      lineNumber: 372,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-lg font-bold", children: props.connection }, void 0, false, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 379,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-sm font-normal", children: "Connections" }, void 0, false, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 380,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brand.$id.tsx",
      lineNumber: 378,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 371,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 370,
    columnNumber: 5
  }, this);
};
var Completed = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FontAwesomeIcon,
      {
        className: "text-black text-3xl",
        icon: faNetworkWired
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 398,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/brand.$id.tsx",
      lineNumber: 397,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-lg font-bold", children: props.completed }, void 0, false, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 404,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-sm font-normal", children: "Completed Campaigns" }, void 0, false, {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 405,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/brand.$id.tsx",
      lineNumber: 403,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 396,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 395,
    columnNumber: 5
  }, this);
};
var AvailableCampaigns = (props) => {
  const [topChampaing, setTopChampaing] = (0, import_react2.useState)([]);
  const [campaignCards, setCampaignCards] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
    const fetchData = async () => {
      const apidata = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/campaign-search`,
        data: { brand: props.brandId }
      });
      setTopChampaing(apidata.data.data);
    };
    fetchData();
  }, []);
  (0, import_react2.useEffect)(() => {
    const createCampaignCards = async () => {
      let counter = 0;
      const cards = await Promise.all(
        topChampaing.map(async (val, index) => {
          if (counter >= 5)
            return null;
          counter++;
          let platforms = [];
          for (let i = 0; i < val["platforms"].length; i++) {
            platforms.push(val["platforms"][i]["platformLogoUrl"]);
          }
          let campaignType = await getCampaignType(val["campaignTypeId"]);
          let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CampaginCard,
            {
              id: val.id,
              title: val["campaignName"],
              weburl: val.brand.webUrl,
              platforms,
              maxval: val.costPerPost.split(".")[0],
              category: campaignType,
              image,
              name: val.brand.name,
              currency: val["currency"]["code"],
              btntext: "View More & Learn"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 458,
              columnNumber: 15
            },
            this
          ) }, index, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 457,
            columnNumber: 13
          }, this);
        })
      );
      setCampaignCards(cards);
    };
    createCampaignCards();
  }, [topChampaing]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: campaignCards.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center w-full px-4 py-8 text-2xl text-gray-600 font-semibold ", children: "This brand haven't created any campaign." }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 482,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6 pb-8 pt-6", children: campaignCards }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 486,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 480,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center w-full px-4 py-8 text-2xl text-gray-600 font-semibold ", children: "This brand have no past associations with you." }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 524,
    columnNumber: 9
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
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 548,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.brand.name }, void 0, false, {
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 554,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.brand.email }, void 0, false, {
                fileName: "app/routes/home/brand.$id.tsx",
                lineNumber: 555,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 553,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 547,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 558,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 559,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 560,
            columnNumber: 17
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
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 561,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
            fileName: "app/routes/home/brand.$id.tsx",
            lineNumber: 568,
            columnNumber: 17
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
              fileName: "app/routes/home/brand.$id.tsx",
              lineNumber: 569,
              columnNumber: 17
            },
            this
          )
        ]
      },
      index,
      true,
      {
        fileName: "app/routes/home/brand.$id.tsx",
        lineNumber: 543,
        columnNumber: 15
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 528,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/brand.$id.tsx",
    lineNumber: 522,
    columnNumber: 5
  }, this);
};

export {
  brand_id_default,
  Rating,
  Connection,
  Completed
};
//# sourceMappingURL=/build/_shared/chunk-JIRWFZS7.js.map
