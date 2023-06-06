import {
  Completed,
  Connection,
  Rating
} from "/build/_shared/chunk-NEBH2WAS.js";
import "/build/_shared/chunk-M6WNKXKO.js";
import "/build/_shared/chunk-2QADXOD2.js";
import {
  stripe_esm_worker_default
} from "/build/_shared/chunk-P4HVA5I3.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  UploadFile,
  getCampaignType
} from "/build/_shared/chunk-2WVQ5BC5.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-R3MWT2S5.js";
import {
  FontAwesomeIcon,
  faCoins,
  faPaperclip,
  faRemove,
  faThumbsDown,
  faThumbsUp
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/campaigns.$id.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var stripe = new stripe_esm_worker_default(
  "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",
  { apiVersion: "2022-11-15" }
);
var Campaigns = () => {
  const champaign = useLoaderData().campaign;
  const user = useLoaderData().user;
  const isbrand = user.role.code != 10;
  const data = useLoaderData();
  const [sum, setSum] = (0, import_react.useState)({
    rowCount: 0,
    constCount: 3,
    rate: 0
  });
  const userId = user.id;
  const brandimage = champaign == void 0 || champaign == null ? "/images/avatar/user.png" : champaign.brand == null || champaign.brand.length == 0 || champaign.brand == void 0 || champaign.brand == "" ? "/images/avatar/user.png" : champaign.brand.logo == "" || champaign.brand.logo == null || champaign.brand.logo == "0" || champaign.brand.logo == void 0 ? "/images/avatar/user.png" : champaign.brand.logo;
  const brandname = champaign.brand.name;
  const [category, setCategory] = (0, import_react.useState)("");
  const [acceptreq, setAcceptreq] = (0, import_react.useState)(0 /* None */);
  const [requestdata, setRequestdata] = (0, import_react.useState)([]);
  const [brandConnection, setBarndConnection] = (0, import_react.useState)(0);
  const [brandComCam, setBarndComCam] = (0, import_react.useState)(0);
  const [aprovedBid, setApprovedBid] = (0, import_react.useState)(null);
  const init = async () => {
    setCategory(await getCampaignType(champaign.campaignTypeId));
    let req = {
      search: {
        campaign: champaign.id,
        influencer: userId,
        fromUser: userId
      }
    };
    const reqdata = await axios_default.post(`${BaseUrl}/api/search-invite`, req);
    if (reqdata.data.status == true) {
      if (reqdata.data.data[0].status.code == "1")
        setAcceptreq(1 /* Panding */);
      if (reqdata.data.data[0].status.code == "3")
        setAcceptreq(2 /* Accepted */);
      if (reqdata.data.data[0].status.code == "5")
        setAcceptreq(3 /* Rejected */);
      setRequestdata(reqdata.data.data);
    } else {
      setAcceptreq(0 /* None */);
    }
    const reqdata1 = await axios_default.post(`${BaseUrl}/api/get-brand-connection`, {
      brandId: champaign.brand.id
    });
    if (reqdata.data.status) {
      setBarndConnection(reqdata1.data.data.influencer_count);
    } else {
      setBarndConnection(0);
    }
    const reqdata2 = await axios_default.post(`${BaseUrl}/api/get-brand-com-cam`, {
      brandId: champaign.brand.id
    });
    if (reqdata2.data.status) {
      setBarndComCam(reqdata2.data.data.completed_campaign);
    } else {
      setBarndComCam(0);
    }
    const req1 = {
      search: {
        type: "3",
        brand: champaign.brand.id
      }
    };
    const apireq = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-review`,
      data: req1
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
    const bidreq = await axios_default.post(`${BaseUrl}/api/get-approved-bid`, {
      campaignId: champaign.id
    });
    if (bidreq.data.status) {
      setApprovedBid((val) => bidreq.data.data[0]);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-y-4 lg:gap-4 grid-cols-1 lg:grid-cols-7 mt-4 justify-start align-top content-start place-items-start place-content-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        BrandInfo,
        {
          logo: brandimage,
          name: brandname,
          website: champaign.brand.website,
          info: champaign.brand.info,
          rate: isNaN(Math.round(sum.rate / sum.rowCount / sum.constCount)) ? "0" : Math.round(sum.rate / sum.rowCount / sum.constCount).toString(),
          connection: brandConnection.toString(),
          completed: brandComCam.toString()
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 182,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CampaignsInfo,
        {
          title: champaign.campaignName,
          dont: champaign.donts,
          dos: champaign.dos,
          hastag: champaign.hashtags,
          mendtion: champaign.mentions,
          platform: champaign.platforms,
          moddboard: champaign.moodBoards,
          info: champaign.campaignInfo,
          name: brandname,
          image: brandimage,
          website: champaign.brand.website,
          category
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 195,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-start-6 lg:col-end-8 grid gap-y-4 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Budget,
          {
            currecny: champaign.currency.code,
            costperpost: champaign.costPerPost,
            totalbudget: champaign.totalBudget.split(".")[0]
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 210,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Target,
          {
            audienceloaction: champaign.audienceLocations,
            minreach: champaign.minReach,
            maxreach: champaign.maxReach,
            startdate: champaign.startAt,
            enddate: champaign.endAt
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 215,
            columnNumber: 11
          },
          this
        ),
        isbrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InviteInf, { champaignId: champaign.id }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 224,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 223,
          columnNumber: 22
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          acceptreq == 0 /* None */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Apply,
            {
              champaignId: champaign.id,
              touserId: champaign.brandUserId,
              userId,
              influencerId: userId,
              fromuserId: userId
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 228,
              columnNumber: 17
            },
            this
          ) : null,
          acceptreq == 1 /* Panding */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panding, {}, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 236,
            columnNumber: 53
          }, this) : null,
          acceptreq == 3 /* Rejected */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Rejected,
            {
              reason: requestdata[0].status.message,
              champaignId: champaign.id,
              touserId: champaign.brandUserId,
              userId,
              influencerId: userId,
              fromuserId: userId
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 238,
              columnNumber: 17
            },
            this
          ) : null
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    acceptreq == 2 /* Accepted */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 flex-col lg:flex-row mt-8 flex-wrap justify-evenly", children: champaign.campaignTypeId != "6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shrink-0 w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          CreateDraft,
          {
            influencerId: userId,
            champaingId: champaign.id,
            platforms: data.platform
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 258,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 257,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-96 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Live campaigns" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 265,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 268,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            LinkCampaign,
            {
              userId,
              campaingid: champaign.id,
              brandId: champaign.brand.id,
              cpp: champaign.costPerPost
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 270,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 269,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 264,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 256,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " shrink-0", children: aprovedBid == null || aprovedBid == void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Bidding,
        {
          CostPerPost: champaign.costPerPost,
          userId,
          campaignId: champaign.id,
          brandId: champaign.brand.id
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 282,
          columnNumber: 19
        },
        this
      ) : aprovedBid.userId == userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shrink-0 w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          CreateDraft,
          {
            influencerId: userId,
            champaingId: champaign.id,
            platforms: data.platform
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 291,
            columnNumber: 23
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 290,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-96 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Live campaigns" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 298,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 301,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            LinkCampaign,
            {
              userId,
              campaingid: champaign.id,
              brandId: champaign.brand.id,
              cpp: champaign.costPerPost
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 303,
              columnNumber: 25
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 302,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 297,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 289,
        columnNumber: 19
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-rose-500 py-4 px-10 text-white font-semibold text-2xl rounded-lg", children: "Your bid is not accepted" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 313,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 280,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 254,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCreatedDrafts, { userId, campaingid: champaign.id }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 320,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 253,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-6", children: isbrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListCreatedDrafts, { campaingid: champaign.id, brandid: userId }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 327,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ChampaingAcceptRequest,
        {
          userId,
          campaingid: champaign.id
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 328,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 332,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        DraftAcceptRequest,
        {
          userId,
          campaingid: champaign.id
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 333,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 337,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ChampaingPaymentRequest,
        {
          userid: user.id,
          campaingid: champaign.id,
          currency: user.currency.code
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 338,
          columnNumber: 13
        },
        this
      ),
      champaign.campaignTypeId == "6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ChampaingBidRequest,
        {
          userid: user.id,
          campaingid: champaign.id
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 345,
          columnNumber: 15
        },
        this
      ) : null
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 326,
      columnNumber: 11
    }, this) : null }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 324,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 180,
    columnNumber: 5
  }, this);
};
var campaigns_id_default = Campaigns;
var BrandInfo = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 rounded-xl shadow-xl bg-white p-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: props.logo,
          alt: "brand logo",
          className: "object-cover w-16 h-16 rounded object-center"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 375,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 374,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 381,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 373,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: "Category : Consumer Electronics" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 385,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.website }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 388,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left", children: "Brand info" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 391,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.info }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 392,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 395,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rating, { rate: props.rate }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 396,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 397,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Connection, { connection: props.connection }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 398,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 399,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Completed, { completed: props.completed }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 400,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 372,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 371,
    columnNumber: 5
  }, this);
};
var CampaignsInfo = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-3 rounded-xl shadow-xl bg-white p-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: props.image,
          alt: "error",
          className: "object-cover w-16 h-16 rounded object-center"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 427,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 426,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 433,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 425,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl text-left my-4", children: props.title }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 438,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-4", children: [
      "Category : ",
      props.category
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 441,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.website }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 444,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left", children: "Campaign info" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 447,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.info }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 450,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Moodboard" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 454,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 overflow-x-scroll no-scrollbar", children: props.moddboard.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: val.url,
            alt: "error",
            className: "h-14 w-14 object-cover rounded-md object-center"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 461,
            columnNumber: 19
          },
          this
        ) }, index, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 460,
          columnNumber: 17
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 457,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 453,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Platforms" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 471,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center w-32 overflow-x-scroll no-scrollbar", children: props.platform.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 shrink-0 mx-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: val["platformLogoUrl"],
          alt: "error",
          className: "rounded-lg w-8 h-8 object-center object-cover"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 478,
          columnNumber: 17
        },
        this
      ) }, index, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 477,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 474,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200  rounded-md py-2 flex justify-around w-72 mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold", children: "Do's" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 489,
          columnNumber: 13
        }, this),
        props.dos.split(",").map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal", children: val }, index, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 492,
            columnNumber: 17
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 488,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-[1px] bg-slate-900" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 498,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold", children: "Dont's" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 500,
          columnNumber: 13
        }, this),
        props.dont.split(",").map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal", children: val }, index, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 503,
            columnNumber: 17
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 499,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 487,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold mt-4", children: "Hashtags" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 510,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-nowrap gap-2 my-4", children: props.hastag.split(",").map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "p",
        {
          className: "text-md font-normal rounded-md bg-gray-300 py-1 px-4",
          children: [
            "#",
            val
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 514,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 511,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold mt-4", children: "Mentions" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 523,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-nowrap gap-2 my-4", children: props.mendtion.split(",").map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "p",
        {
          className: "text-md font-normal rounded-md bg-gray-300 py-1 px-4",
          children: [
            "@",
            val
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 527,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 524,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 424,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 423,
    columnNumber: 5
  }, this);
};
var Target = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl shadow-xl bg-white p-4 w-full", children: [
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
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 554,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-primary font-medium px-4", children: "Target" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 558,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 553,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-500 w-full my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 560,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Audience Location" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 562,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 563,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-primary", children: props.audienceloaction }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 564,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 561,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Min Reach" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 569,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 570,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.minreach }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 571,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 568,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Max Reach" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 574,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 575,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.maxreach }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 576,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 573,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Start Date" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 579,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 580,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.startdate.toString().split(" ")[0] }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 581,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 578,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "End date" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 586,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 587,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.enddate.toString().split(" ")[0] }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 588,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 585,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 552,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 551,
    columnNumber: 5
  }, this);
};
var InviteInf = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-xl text-left font-normal", children: "Invite influencer to campaign?" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 606,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/createcampaign/inviteinf/${props.champaignId}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      CusButton,
      {
        text: "Invite",
        textColor: "text-white",
        background: "bg-secondary"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 611,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 610,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 609,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 605,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 604,
    columnNumber: 5
  }, this);
};
var Apply = (props) => {
  const [open, setOpen] = (0, import_react.useState)(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [error, setError] = (0, import_react.useState)(null);
  const messageRef = (0, import_react.useRef)(null);
  const applyChampaign = async () => {
    var _a, _b, _c, _d;
    if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = messageRef.current) == null ? void 0 : _c.value) == "")
      return setError("Message can't be blank");
    let req = {
      campaignId: props.champaignId,
      influencerId: props.influencerId,
      fromUserId: props.fromuserId,
      toUserId: props.touserId,
      inviteMessage: (_d = messageRef.current) == null ? void 0 : _d.value
    };
    const data = await axios_default.post(`${BaseUrl}/api/add-invite`, req);
    if (data.data.status == false) {
      setError(data.data.message);
    } else {
      messageRef.current.value = "";
      onCloseModal();
    }
    window.location.reload();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-xl text-left font-normal", children: "Would you like to participate in this campaign?" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 667,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center", onClick: onOpenModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CusButton,
        {
          text: "Apply",
          textColor: "text-white",
          background: "bg-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 671,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 670,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 666,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${open ? "fixed" : "hidden"} `,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 684,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: onCloseModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              FontAwesomeIcon,
              {
                icon: faRemove,
                className: "font-bold text-2xl text-center text-primary"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 686,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 685,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 683,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 692,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-normal", children: "Subject : Apply for campaign" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 693,
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
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 694,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 700,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 705,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: applyChampaign, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "send",
                background: "bg-primary",
                textColor: "text-white"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 707,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 706,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 704,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 682,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 678,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 665,
    columnNumber: 5
  }, this);
};
var Budget = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl shadow-xl bg-white p-4 w-full", children: [
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
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 731,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-primary font-medium px-4", children: "Budget" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 735,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 730,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-500 w-full my-2 " }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 737,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Cost per post" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 739,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 740,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-primary", children: [
        props.costperpost.toString().split(".")[0],
        " ",
        props.currecny
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 741,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 738,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Total budget" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 746,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 747,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: [
        props.totalbudget,
        " ",
        props.currecny
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 748,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 745,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 729,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 728,
    columnNumber: 5
  }, this);
};
var Panding = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-xl text-left font-normal", children: "Your request in progress.." }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 761,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 760,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 759,
    columnNumber: 5
  }, this);
};
var ChampaingAcceptRequest = (props) => {
  const [resinvite, setRequestinvite] = (0, import_react.useState)([]);
  const [acceptbox, setAcceptbox] = (0, import_react.useState)(false);
  const [rejectbox, setrejectbox] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  const rejectiontextRef = (0, import_react.useRef)(null);
  const [id, setId] = (0, import_react.useState)(null);
  const init = async () => {
    let req = {
      search: {
        status: "1",
        campaign: props.campaingid
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-invite`, req);
    if (responseData.data.status == true) {
      setRequestinvite(responseData.data.data);
    }
  };
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
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-2xl", children: "Accept" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 835,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 836,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 837,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 841,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 852,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 846,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 858,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 863,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 859,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 845,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 834,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 830,
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
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 877,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 878,
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
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 879,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 886,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 897,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 891,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 903,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 908,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 904,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 890,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 876,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 872,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No Invite request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 919,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Invites" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 922,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 923,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: resinvite.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "p-4 bg-white rounded-lg shadow-lg",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
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
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 932,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.toString().split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 938,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 941,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 937,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 931,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Message" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 946,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.inviteMessage }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 947,
                columnNumber: 21
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
                          fileName: "app/routes/home/campaigns.$id.tsx",
                          lineNumber: 956,
                          columnNumber: 25
                        },
                        this
                      ),
                      "Accept"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 949,
                    columnNumber: 23
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
                          fileName: "app/routes/home/campaigns.$id.tsx",
                          lineNumber: 969,
                          columnNumber: 25
                        },
                        this
                      ),
                      "Reject"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 962,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 948,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 976,
                columnNumber: 21
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 927,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 924,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 921,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 917,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 829,
    columnNumber: 5
  }, this);
};
var DraftAcceptRequest = (props) => {
  const [resinvite, setRequestinvite] = (0, import_react.useState)([]);
  const [acceptbox, setAcceptbox] = (0, import_react.useState)(false);
  const [rejectbox, setrejectbox] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  const rejectiontextRef = (0, import_react.useRef)(null);
  const [id, setId] = (0, import_react.useState)(null);
  const init = async () => {
    let req = {
      search: {
        status: "1",
        campaign: props.campaingid,
        toUser: props.userId
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setRequestinvite(responseData.data.data);
    }
  };
  const acceptRequest = async () => {
    let req = { id, status: "3" };
    const responseData = await axios_default.post(`${BaseUrl}/api/update-draft`, req);
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
    const responseData = await axios_default.post(`${BaseUrl}/api/update-draft`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    rejectiontextRef.current.value == "";
    setrejectbox(false);
    window.location.reload();
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-2xl", children: "Accept" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1056,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1057,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this draft?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1058,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1062,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 1073,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1067,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1079,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 1084,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1080,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1066,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1055,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1051,
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
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1098,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1099,
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
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1100,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1107,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 1118,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1112,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1124,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 1129,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1125,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1111,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1097,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1093,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No draft request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1140,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested drafts" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1143,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: resinvite.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "p-4 bg-white rounded-lg shadow-lg",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
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
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1153,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1159,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1162,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1158,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1152,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1167,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1168,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1169,
                columnNumber: 21
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
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1170,
                  columnNumber: 21
                },
                this
              ),
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
                          fileName: "app/routes/home/campaigns.$id.tsx",
                          lineNumber: 1185,
                          columnNumber: 25
                        },
                        this
                      ),
                      "Accept"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1178,
                    columnNumber: 23
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
                          fileName: "app/routes/home/campaigns.$id.tsx",
                          lineNumber: 1198,
                          columnNumber: 25
                        },
                        this
                      ),
                      "Reject"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1191,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1177,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1205,
                columnNumber: 21
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1148,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1145,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1142,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1138,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1050,
    columnNumber: 5
  }, this);
};
var Rejected = (props) => {
  const [open, setOpen] = (0, import_react.useState)(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [error, setError] = (0, import_react.useState)(null);
  const messageRef = (0, import_react.useRef)(null);
  const applyChampaign = async () => {
    var _a, _b, _c, _d;
    if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = messageRef.current) == null ? void 0 : _c.value) == "")
      return setError("Message can't be blank");
    let req = {
      campaignId: props.champaignId,
      influencerId: props.influencerId,
      fromUserId: props.fromuserId,
      toUserId: props.touserId,
      inviteMessage: (_d = messageRef.current) == null ? void 0 : _d.value
    };
    const data = await axios_default.post(`${BaseUrl}/api/add-invite`, req);
    if (data.data.status == false) {
      setError(data.data.message);
    } else {
      messageRef.current.value = "";
      onCloseModal();
    }
    window.location.reload();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-xl text-left font-normal", children: "Your request has been rejected.." }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1260,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-normal text-md", children: [
        "Reason : ",
        props.reason
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1263,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center", onClick: onOpenModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CusButton,
        {
          text: "Apply again!",
          textColor: "text-white",
          background: "bg-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1267,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1266,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1259,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${open ? "fixed" : "hidden"} `,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1280,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: onCloseModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              FontAwesomeIcon,
              {
                icon: faRemove,
                className: "font-bold text-2xl text-center text-primary"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1282,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1281,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1279,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1288,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-normal", children: "Subject : Aplay for campaign" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1289,
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
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1290,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1296,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1301,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: applyChampaign, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "send",
                background: "bg-primary",
                textColor: "text-white"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1303,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1302,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1300,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1278,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1274,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1258,
    columnNumber: 5
  }, this);
};
var CreateDraft = (props) => {
  const datepicker = (0, import_react.useRef)(null);
  const inputFile = (0, import_react.useRef)(null);
  const descraption = (0, import_react.useRef)(null);
  const [pdfFile, setPdfFile] = (0, import_react.useState)();
  const [platform, setPlatform] = (0, import_react.useState)(null);
  const [createbox, setCreatebox] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Campaign draft" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1333,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1334,
      columnNumber: 7
    }, this),
    createbox ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-normal font-semibold py-1 text-primary", children: "Create campaign draft" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1338,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 mt-2 overflow-x-scroll no-scrollbar py-4", children: props.platforms.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: `shrink-0  p-2 rounded-lg ${platform == val.id ? "bg-white shadow-xl " : "bg-gray-200"} `,
            onClick: () => {
              setPlatform(val.id);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: props.platforms[i]["logo"],
                alt: "error",
                className: "w-10 h-10 object-center object-cover"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1352,
                columnNumber: 21
              },
              this
            )
          },
          i,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1344,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1341,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-semibold  text-md", children: pdfFile == null ? "" : pdfFile.name }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1362,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1365,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full",
            onClick: () => {
              inputFile.current.click();
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faPaperclip }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1372,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1366,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1361,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          ref: inputFile,
          type: "file",
          accept: "application/pdf",
          onChange: (value) => {
            let file_size = parseInt(
              (value.target.files[0].size / 1024 / 1024).toString()
            );
            if (file_size < 4) {
              setError(null);
              setPdfFile(value.target.files[0]);
            } else {
              setError("Pdf file size must be less then 4 mb");
            }
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1376,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1375,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "date",
          ref: datepicker,
          className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1393,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "textarea",
        {
          ref: descraption,
          className: "focus:border-none focus:outline-none mt-4 p-4 w-full h-20 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none",
          placeholder: "description..."
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1398,
          columnNumber: 13
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1404,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: async () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (platform == null || platform == void 0 || platform == 0 || platform == "") {
              setError("Select the platform.");
            } else if (pdfFile == null || pdfFile == void 0) {
              setError("Select the pdf file.");
            } else if (((_a = datepicker.current) == null ? void 0 : _a.value) == null || ((_b = datepicker.current) == null ? void 0 : _b.value) == void 0 || ((_c = datepicker.current) == null ? void 0 : _c.value) == "") {
              setError("Select the date.");
            } else if (((_d = descraption.current) == null ? void 0 : _d.value) == null || ((_e = descraption.current) == null ? void 0 : _e.value) == void 0 || ((_f = descraption.current) == null ? void 0 : _f.value) == "") {
              setError("Write the description.");
            }
            const pdfurl = await UploadFile(pdfFile);
            if (pdfurl.status) {
              let req = {
                campaignId: props.champaingId,
                influencerId: props.influencerId,
                handleId: platform,
                publishAt: (_g = datepicker.current) == null ? void 0 : _g.value,
                attach01: pdfurl.data,
                description: (_h = descraption.current) == null ? void 0 : _h.value
              };
              const data = await axios_default({
                method: "post",
                url: `${BaseUrl}/api/add-draft`,
                data: req
              });
              if (data.data.status == false) {
                return setError(data.data.message);
              } else {
                window.location.reload();
              }
            } else {
              setError(pdfurl.data);
            }
          },
          className: "text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2",
          children: "Submit"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1408,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1337,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1336,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-normal font-semibold py-1 text-primary", children: "Create campaign draft" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1465,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => {
            setCreatebox(true);
          },
          className: "text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2",
          children: "Create"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1468,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1464,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1463,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1332,
    columnNumber: 5
  }, this);
};
var ChampaingPaymentRequest = (props) => {
  const [respayment, setRequestPayment] = (0, import_react.useState)([]);
  const [acceptbox, setAcceptbox] = (0, import_react.useState)(false);
  const [rejectbox, setrejectbox] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  const [id, setId] = (0, import_react.useState)(null);
  const init = async () => {
    let req = {
      search: {
        campaign: props.campaingid
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/get-req-pay`, req);
    if (responseData.data.status == true) {
      setRequestPayment(responseData.data.data);
    }
  };
  (0, import_react.useEffect)(() => {
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
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1576,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1577,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1578,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1582,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 1593,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1587,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1599,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 1604,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1600,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1586,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1575,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1571,
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
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1618,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to reject this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1619,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1623,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 1634,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1628,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1640,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 1645,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1641,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1627,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1617,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1613,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: respayment.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No payment request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1657,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1656,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Payment" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1661,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1662,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: respayment.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "p-4 bg-white rounded-lg shadow-lg w-72",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Requested by" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1670,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1671,
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
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1673,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1679,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1682,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1678,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1672,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Amount" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1687,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: [
                val.amount.toString().split(".")[0],
                " ",
                props.currency
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1688,
                columnNumber: 21
              }, this),
              parseInt(val.status.code) == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-green-500 rounded-md my-2", children: "Accepted" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1692,
                columnNumber: 23
              }, this) : parseInt(val.status.code) == 3 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-red-500 rounded-md my-2", children: "Rejected" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1696,
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
                          fileName: "app/routes/home/campaigns.$id.tsx",
                          lineNumber: 1708,
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
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1701,
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
                          fileName: "app/routes/home/campaigns.$id.tsx",
                          lineNumber: 1721,
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
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1714,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1700,
                columnNumber: 23
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1666,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1663,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1660,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1654,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1570,
    columnNumber: 5
  }, this);
};
var UserCreatedDrafts = (props) => {
  const [resDarft, setResDarft] = (0, import_react.useState)([]);
  const init = async () => {
    let req = {
      search: {
        fromUser: props.userId,
        campaign: props.campaingid,
        influencer: props.userId
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setResDarft(responseData.data.data);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white my-4", children: resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "You haven't created any drafts yet." }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1771,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "User Created draft" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1774,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1775,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: resDarft.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "my-2 p-4 bg-white rounded-lg shadow-lg w-80",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
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
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1784,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1790,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1793,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1789,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1783,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1798,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1799,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1800,
              columnNumber: 21
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1801,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1808,
              columnNumber: 21
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1809,
                columnNumber: 21
              },
              this
            )
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1779,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1776,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1773,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1769,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1768,
    columnNumber: 5
  }, this);
};
var ListCreatedDrafts = (props) => {
  const [resDarft, setResDarft] = (0, import_react.useState)([]);
  const init = async () => {
    let req = {
      search: {
        campaign: props.campaingid
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setResDarft(responseData.data.data);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white my-4", children: resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No one created any drafts yet." }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1859,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "All Created draft" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1862,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1863,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: resDarft.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "my-2 p-4 bg-white rounded-lg shadow-lg w-80",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
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
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1872,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1878,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1881,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1877,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1871,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1886,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1887,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1888,
              columnNumber: 21
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1889,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1896,
              columnNumber: 21
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1897,
                columnNumber: 21
              },
              this
            ),
            val.status.name == "ACCEPTED" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-white py-1 w-full bg-cyan-500 cursor-pointer inline-block text-center mt-4 rounded-md", to: `/home/brandpay/${props.brandid}/${props.campaingid}/${val.id}`, children: "View Details" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1908,
              columnNumber: 23
            }, this) : null
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1867,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1864,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1861,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1857,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1856,
    columnNumber: 5
  }, this);
};
var LinkCampaign = (props) => {
  const [resDarft, setResDarft] = (0, import_react.useState)([]);
  const [linkBox, setLinkBox] = (0, import_react.useState)([]);
  const [errors, setError] = (0, import_react.useState)([]);
  const [linkValue, setLinkValue] = (0, import_react.useState)(
    Array(resDarft.length).fill("")
  );
  const init = async () => {
    let req = {
      search: {
        fromUser: props.userId,
        campaign: props.campaingid,
        influencer: props.userId,
        status: 3
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setResDarft(responseData.data.data);
    }
    setLinkBox(Array(responseData.data.data.length).fill(false));
    setError(Array(responseData.data.data.length).fill(""));
    setLinkValue(Array(responseData.data.data.length).fill(""));
  };
  const upadteLinkBox = (value, index) => {
    const updatedLinkBox = [...linkBox];
    updatedLinkBox[index] = value;
    setLinkBox(updatedLinkBox);
  };
  const updateLink = async (index) => {
    const link = linkValue[index];
    if (link == null || link == void 0 || link == "") {
      const updatedErrors = [...errors];
      updatedErrors[index] = "Please enter the link";
      setError(updatedErrors);
    } else {
      const responseData = await axios_default.post(`${BaseUrl}/api/update-draft`, {
        id: resDarft[index].id,
        linkCampaign: link
      });
      if (!responseData.data.status) {
        const updatedErrors = [...errors];
        updatedErrors[index] = responseData.data.message;
        setError(updatedErrors);
      } else {
        window.location.reload();
      }
    }
  };
  const handleInputChange = (index, value) => {
    const updatedLinkValue = [...linkValue];
    updatedLinkValue[index] = value;
    setLinkValue(updatedLinkValue);
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-md p-4 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold text-lg", children: "NO Draft are created" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1996,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1995,
      columnNumber: 9
    }, this) : null,
    resDarft.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-md p-4 mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: val.handle.platform.logo,
              alt: "error",
              className: "h-10 w-10 shrink-0"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2005,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-sm font-semibold text-left", children: val.handle.name }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2011,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2010,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2004,
          columnNumber: 13
        }, this),
        val.linkCampaign == null || val.linkCampaign == "" || val.linkCampaign == void 0 ? linkBox[index] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              placeholder: "Enter the link",
              className: "w-full outline-none fill-none bg-transparent py-1 px-4 rounded-md border-2 border-gray-400 mt-4",
              value: linkValue[index],
              onChange: (e) => handleInputChange(index, e.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2021,
              columnNumber: 19
            },
            this
          ),
          errors[index] == "" || errors[index] == null || errors[index] == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: errors[index] }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2031,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: async () => {
                await updateLink(index);
              },
              className: "mt-4 text-md w-full text-black font-semibold bg-[#fbca8e] rounded-md shadow-lg py-1",
              children: "Link"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2035,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2020,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "mt-4 text-md w-full text-black font-semibold bg-[#fbca8e] rounded-md shadow-lg py-1",
            onClick: () => upadteLinkBox(true, index),
            children: "Link campaign"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2045,
            columnNumber: 17
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: `/home/paymentreq/${props.brandId}/${props.campaingid}/${val.id}`,
            className: "text-center inline-block mt-4 text-md w-full text-black font-semibold bg-[#fbca8e] rounded-md shadow-lg py-1",
            onClick: () => upadteLinkBox(true, index),
            children: "View insight"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2053,
            columnNumber: 15
          },
          this
        )
      ] }, index, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2003,
        columnNumber: 11
      }, this);
    })
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1993,
    columnNumber: 5
  }, this);
};
var Bidding = (props) => {
  const [error, setError] = (0, import_react.useState)("");
  const [amount, setAmount] = (0, import_react.useState)(0);
  const messageRef = (0, import_react.useRef)(null);
  const [bidamount, setBidamount] = (0, import_react.useState)(0);
  const handelcontent = (e) => {
    setBidamount(e.target.value.replace(/\D/g, ""));
  };
  const init = async () => {
    const camp = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-campaign-last-bid`,
      data: { campaignId: props.campaignId }
    });
    if (camp.data.status == false) {
      setAmount(0);
    } else {
      setAmount(camp.data.data[0].bidamount);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  const submit = async () => {
    var _a, _b, _c, _d;
    if (bidamount == void 0 || bidamount == null) {
      setError("Fill the Bid amount.");
    } else if (Number(bidamount) % 100 !== 0) {
      setError("Bid amount must be a multiple of 100.");
    } else if (amount < Number(bidamount)) {
      setError("Bid amount must be less then current bid amount.");
    } else if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = messageRef.current) == null ? void 0 : _c.value) == "") {
      setError("Fill the remark.");
    } else {
      const req = {
        brandId: props.brandId,
        userId: props.userId,
        campaignId: props.campaignId,
        remark: (_d = messageRef.current) == null ? void 0 : _d.value,
        bidamount: Number(bidamount)
      };
      const data = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/add-bid`,
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
        setError(data.data.message);
      } else {
        window.location.reload();
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Bidding" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-800", children: [
        "Starting bid : ",
        props.CostPerPost.split(".")[0]
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-800 mt-2", children: [
        "Current bid : ",
        amount.toString().split(".")[0]
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-700 my-2", children: "Min Bid : 100" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2157,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl text-gray-700", children: "Enter Amount : " }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2161,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            onChange: handelcontent,
            value: bidamount,
            type: "text",
            maxLength: 10,
            className: "text-black outline-none border-none rounded-md py-1 px-2 bg-[#EEEEEE] w-full"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2163,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2162,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "textarea",
        {
          ref: messageRef,
          className: "p-4 w-full h-32 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4",
          placeholder: "Remark"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2172,
          columnNumber: 9
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2178,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: submit,
          className: `text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2`,
          children: "Bid Now"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2182,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2150,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2147,
    columnNumber: 5
  }, this);
};
var ChampaingBidRequest = (props) => {
  const [resbid, setResbid] = (0, import_react.useState)([]);
  const [acceptbox, setAcceptbox] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  const [id, setId] = (0, import_react.useState)(null);
  const init = async () => {
    let req = {
      campaignId: props.campaingid
    };
    const responseData = await axios_default.post(
      `${BaseUrl}/api/get-campaign-bid`,
      req
    );
    if (responseData.data.status) {
      setResbid(responseData.data.data);
    } else {
      setError(responseData.data.message);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  const acceptRequest = async () => {
    let req = {
      id
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/approve-bid`, req);
    if (responseData.data.staus == false)
      return setError(responseData.data.message);
    setAcceptbox(false);
    window.location.reload();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-2xl", children: "Accept" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2243,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2244,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2245,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2249,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2260,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2254,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2266,
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
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2271,
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
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2267,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2253,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2242,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2238,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white mt-4", children: [
      resbid.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No bid request is pending" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2284,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2283,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Bid" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2288,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2289,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-6", children: resbid.map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "p-4 bg-white rounded-lg shadow-lg",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Requested by" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2297,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2298,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "img",
                    {
                      src: val.userPicUrl,
                      alt: "influencer pic",
                      className: "w-10 h-10 shrink-0 rounded-md object-center object-cover"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2300,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.userName.split("@")[0] }, void 0, false, {
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2306,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.userEmail }, void 0, false, {
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2309,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2305,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2299,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Amount" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2312,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.bidamount }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2313,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium mt-2", children: "Remark" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2314,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.remark }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2315,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                          fileName: "app/routes/home/campaigns.$id.tsx",
                          lineNumber: 2324,
                          columnNumber: 25
                        },
                        this
                      ),
                      "Accept"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2317,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2316,
                  columnNumber: 21
                }, this)
              ]
            },
            index,
            true,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2293,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2290,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2287,
        columnNumber: 11
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2338,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2281,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2237,
    columnNumber: 5
  }, this);
};
export {
  campaigns_id_default as default
};
//# sourceMappingURL=/build/routes/home/campaigns.$id-W46IIPU6.js.map
