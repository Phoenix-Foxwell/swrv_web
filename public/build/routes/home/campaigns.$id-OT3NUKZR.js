import {
  Completed,
  Connection,
  Rating
} from "/build/_shared/chunk-S7OFZH5O.js";
import "/build/_shared/chunk-XVO7H6KS.js";
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
} from "/build/_shared/chunk-PDFW6BIG.js";
import {
  FontAwesomeIcon,
  faCoins,
  faPaperclip,
  faRemove,
  faThumbsDown,
  faThumbsUp
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
        influencer: userId
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
            currecny: "USD",
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
            lineNumber: 216,
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
              fromuserId: userId,
              endAt: champaign.endAt,
              maxinf: champaign.totalParticipants
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
            lineNumber: 238,
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
              lineNumber: 240,
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
            lineNumber: 260,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 259,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-96 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Live campaigns" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 267,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 270,
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
              lineNumber: 272,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 271,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 266,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 258,
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
          lineNumber: 284,
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
            lineNumber: 293,
            columnNumber: 23
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 292,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-96 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Live campaigns" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 300,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 303,
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
              lineNumber: 305,
              columnNumber: 25
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 304,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 299,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 291,
        columnNumber: 19
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-rose-500 py-4 px-10 text-white font-semibold text-2xl rounded-lg", children: "Your bid is not accepted" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 315,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 282,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 256,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCreatedDrafts, { userId, campaingid: champaign.id }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 322,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-6", children: isbrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
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
          lineNumber: 329,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 333,
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
          lineNumber: 334,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 338,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ChampaingPaymentRequest,
        {
          userid: user.id,
          campaingid: champaign.id,
          currency: "USD"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 339,
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
          lineNumber: 346,
          columnNumber: 15
        },
        this
      ) : null
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 328,
      columnNumber: 11
    }, this) : null }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "rounded-lg shadow-lg text-center font-semibold bg-white py-2 text-3xl my-4", children: "Snapshot" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 354,
      columnNumber: 7
    }, this),
    isbrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshotChampaingAcceptRequest,
        {
          userId,
          campaingid: champaign.id,
          isUser: false
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 358,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshopCreatedDrafts,
        {
          campaingid: champaign.id,
          brandid: userId,
          userId,
          isUser: false
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 363,
          columnNumber: 11
        },
        this
      ),
      champaign.campaignTypeId == "6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshotChampaingBidRequest,
        {
          userid: user.id,
          campaingid: champaign.id,
          isUser: false
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 370,
          columnNumber: 13
        },
        this
      ) : null
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 357,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshotChampaingAcceptRequest,
        {
          userId,
          campaingid: champaign.id,
          isUser: true
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 379,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshopCreatedDrafts,
        {
          campaingid: champaign.id,
          brandid: userId,
          userId,
          isUser: true
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 384,
          columnNumber: 11
        },
        this
      ),
      champaign.campaignTypeId == "6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshotChampaingBidRequest,
        {
          userid: user.id,
          campaingid: champaign.id,
          isUser: true
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 392,
          columnNumber: 13
        },
        this
      ) : null
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 378,
      columnNumber: 9
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
          lineNumber: 426,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 425,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 432,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 424,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: "Category : Consumer Electronics" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 436,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.website }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 439,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left", children: "Brand info" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 442,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.info }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 443,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 446,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rating, { rate: props.rate }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 447,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 448,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Connection, { connection: props.connection }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 449,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 450,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Completed, { completed: props.completed }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 451,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 423,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 422,
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
          lineNumber: 478,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 477,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 484,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 476,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl text-left my-4", children: props.title }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 489,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-4", children: [
      "Category : ",
      props.category
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 492,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.website }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 495,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left", children: "Campaign info" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 498,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.info }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 501,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Moodboard" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 505,
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
            lineNumber: 512,
            columnNumber: 19
          },
          this
        ) }, index, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 511,
          columnNumber: 17
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 508,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 504,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Platforms" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 522,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center w-full overflow-x-scroll no-scrollbar", children: props.platform.map((val, index) => {
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
          lineNumber: 529,
          columnNumber: 17
        },
        this
      ) }, index, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 528,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 525,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200  rounded-md py-2 flex justify-around w-72 mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold", children: "Do's" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 540,
          columnNumber: 13
        }, this),
        props.dos.split(",").map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal", children: val }, index, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 543,
            columnNumber: 17
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 539,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-[1px] bg-slate-900" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 549,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold", children: "Dont's" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 551,
          columnNumber: 13
        }, this),
        props.dont.split(",").map((val, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal", children: val }, index, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 554,
            columnNumber: 17
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 550,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 538,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold mt-4", children: "Hashtags" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 561,
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
          lineNumber: 565,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 562,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold mt-4", children: "Mentions" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 574,
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
          lineNumber: 578,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 575,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 475,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 474,
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
          lineNumber: 605,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-primary font-medium px-4", children: "Target" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 609,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 604,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-500 w-full my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 611,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Audience Location" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 613,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 614,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-primary", children: props.audienceloaction }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 615,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 612,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Min Reach" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 620,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 621,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.minreach }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 622,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 619,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Max Reach" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 625,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 626,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.maxreach }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 627,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 624,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Start Date" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 630,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 631,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.startdate.toString().split(" ")[0] }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 632,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 629,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "End date" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 637,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 638,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.enddate.toString().split(" ")[0] }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 639,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 636,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 603,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 602,
    columnNumber: 5
  }, this);
};
var InviteInf = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-xl text-left font-normal", children: "Invite influencer to campaign?" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 657,
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
        lineNumber: 662,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 661,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 660,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 656,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 655,
    columnNumber: 5
  }, this);
};
var Apply = (props) => {
  const [open, setOpen] = (0, import_react.useState)(false);
  const onCloseModal = () => setOpen(false);
  const [error, setError] = (0, import_react.useState)(null);
  const [error1, setError1] = (0, import_react.useState)(null);
  const messageRef = (0, import_react.useRef)(null);
  const onOpenModal = async () => {
    let invites = 0;
    let req = {
      search: {
        status: "3",
        campaign: props.champaignId
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-invite`, req);
    if (responseData.data.status == true) {
      invites = responseData.data.data.length;
    }
    if (new Date() >= new Date(props.endAt)) {
      return setError1("Campaign already ended.");
    } else if (invites > props.maxinf) {
      return setError1("Campaign is already full.");
    } else {
      setOpen(true);
    }
  };
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
        lineNumber: 742,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center", onClick: onOpenModal, children: [
        error1 == "" || error1 == null || error1 == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full py-1 bg-red-500 text-center rounded-md text-white text-md font-normal text-md my-2", children: error1 }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 747,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
            lineNumber: 751,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 745,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 741,
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
              lineNumber: 764,
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
                lineNumber: 766,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 765,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 763,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 772,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-normal", children: "Subject : Apply for campaign" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 773,
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
              lineNumber: 774,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 780,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 785,
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
                lineNumber: 787,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 786,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 784,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 762,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 758,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 740,
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
          lineNumber: 811,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-primary font-medium px-4", children: "Budget" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 815,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 810,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-500 w-full my-2 " }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 817,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Cost per post" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 819,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 820,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-primary", children: [
        props.costperpost.toString().split(".")[0],
        " ",
        props.currecny
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 821,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 818,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Total budget" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 826,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 827,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: [
        props.totalbudget,
        " ",
        props.currecny
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 828,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 825,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 809,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 808,
    columnNumber: 5
  }, this);
};
var Panding = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-xl text-left font-normal", children: "Your request in progress.." }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 841,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 840,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 839,
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
            lineNumber: 915,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 916,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 917,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 921,
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
                      lineNumber: 932,
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
                lineNumber: 926,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 938,
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
                      lineNumber: 943,
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
                lineNumber: 939,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 925,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 914,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 910,
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
            lineNumber: 957,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 958,
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
              lineNumber: 959,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 966,
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
                      lineNumber: 977,
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
                lineNumber: 971,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 983,
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
                      lineNumber: 988,
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
                lineNumber: 984,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 970,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 956,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 952,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No Invite request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 999,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Invites" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1002,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1003,
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
                    lineNumber: 1012,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.toString().split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1018,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1021,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1017,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1011,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Message" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1026,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.inviteMessage }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1027,
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
                          lineNumber: 1036,
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
                    lineNumber: 1029,
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
                          lineNumber: 1049,
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
                    lineNumber: 1042,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1028,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1056,
                columnNumber: 21
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1007,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1004,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1001,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 997,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 909,
    columnNumber: 5
  }, this);
};
var SnapshotChampaingAcceptRequest = (props) => {
  const [resinvite, setRequestinvite] = (0, import_react.useState)([]);
  const init = async () => {
    let req = {
      search: {}
    };
    if (props.isUser) {
      req.search.influencer = props.userId;
    } else {
      req.search.campaign = props.campaingid;
    }
    const responseData = await axios_default.post(`${BaseUrl}/api/search-invite`, req);
    if (responseData.data.status == true) {
      setRequestinvite(responseData.data.data);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No Invite request is pending" }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1109,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Invites" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1113,
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
                  lineNumber: 1122,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.toString().split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1128,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1131,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1127,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1121,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Message" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1136,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.inviteMessage }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1137,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1139,
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
                lineNumber: 1140,
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
          lineNumber: 1117,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1114,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1111,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1107,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1106,
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
            lineNumber: 1231,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1232,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this draft?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1233,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1237,
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
                      lineNumber: 1248,
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
                lineNumber: 1242,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1254,
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
                      lineNumber: 1259,
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
                lineNumber: 1255,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1241,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1230,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1226,
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
            lineNumber: 1273,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1274,
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
              lineNumber: 1275,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1282,
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
                      lineNumber: 1293,
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
                lineNumber: 1287,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1299,
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
                      lineNumber: 1304,
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
                lineNumber: 1300,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1286,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1272,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1268,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No draft request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1315,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested drafts" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1318,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1319,
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
                    lineNumber: 1328,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1334,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1337,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1333,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1327,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1342,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1343,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Handle Info" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1344,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val.handle.platform.logo, alt: "platform", className: "w-14 h-14 shrink-0 rounded-md object-fill object-center" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1346,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-center", children: val.handle.name }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1347,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1345,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1349,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  target: "_blank",
                  className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500",
                  href: val.attach01,
                  children: "View Doc"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1350,
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
                          lineNumber: 1365,
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
                    lineNumber: 1358,
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
                          lineNumber: 1378,
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
                    lineNumber: 1371,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1357,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1385,
                columnNumber: 21
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1323,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1320,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1317,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1313,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1225,
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
        lineNumber: 1546,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-normal text-md", children: [
        "Reason : ",
        props.reason
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1549,
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
          lineNumber: 1553,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1552,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1545,
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
              lineNumber: 1566,
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
                lineNumber: 1568,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1567,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1565,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1574,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-normal", children: "Subject : Aplay for campaign" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1575,
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
              lineNumber: 1576,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1582,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1587,
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
                lineNumber: 1589,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1588,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1586,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1564,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1560,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1544,
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
  const [isCreating, setIsCreating] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Campaign draft" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1622,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1623,
      columnNumber: 7
    }, this),
    createbox ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-normal font-semibold py-1 text-primary", children: "Create campaign draft" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1627,
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
                src: props.platforms[i]["platform"]["logo"],
                alt: "error",
                className: "w-10 h-10 object-center object-cover"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1641,
                columnNumber: 21
              },
              this
            )
          },
          i,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1633,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1630,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-semibold  text-md", children: pdfFile == null ? "" : pdfFile.name.length >= 25 ? `${pdfFile.name.toString().slice(0, 25)}...` : pdfFile.name }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1651,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1654,
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
              lineNumber: 1661,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1655,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1650,
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
          lineNumber: 1665,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1664,
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
          lineNumber: 1682,
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
          lineNumber: 1687,
          columnNumber: 13
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1693,
        columnNumber: 15
      }, this),
      isCreating ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2",
          children: "Creating..."
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1699,
          columnNumber: 15
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: async () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            setIsCreating((vla) => true);
            if (platform == null || platform == void 0 || platform == 0 || platform == "") {
              setError("Select the platform.");
            } else if (pdfFile == null || pdfFile == void 0) {
              setError("Select the pdf file.");
            } else if (((_a = datepicker.current) == null ? void 0 : _a.value) == null || ((_b = datepicker.current) == null ? void 0 : _b.value) == void 0 || ((_c = datepicker.current) == null ? void 0 : _c.value) == "") {
              setError("Select the date.");
            } else if (((_d = descraption.current) == null ? void 0 : _d.value) == null || ((_e = descraption.current) == null ? void 0 : _e.value) == void 0 || ((_f = descraption.current) == null ? void 0 : _f.value) == "") {
              setError("Write the description.");
            } else {
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
            }
            setIsCreating((vla) => false);
          },
          className: "text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2",
          children: "Submit"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1706,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1626,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1625,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-normal font-semibold py-1 text-primary", children: "Create campaign draft" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1768,
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
          lineNumber: 1771,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1767,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1766,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1621,
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
            lineNumber: 1874,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1875,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1876,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1880,
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
                      lineNumber: 1891,
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
                lineNumber: 1885,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1897,
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
                      lineNumber: 1902,
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
                lineNumber: 1898,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1884,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1873,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1869,
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
            lineNumber: 1916,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to reject this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1917,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1921,
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
                      lineNumber: 1932,
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
                lineNumber: 1926,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1938,
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
                      lineNumber: 1943,
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
                lineNumber: 1939,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1925,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1915,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1911,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: respayment.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No payment request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1955,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1954,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Payment" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1959,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1960,
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
                lineNumber: 1968,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1969,
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
                    lineNumber: 1971,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1977,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1980,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1976,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1970,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Amount" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1985,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: [
                val.amount.toString().split(".")[0],
                " ",
                props.currency
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1986,
                columnNumber: 21
              }, this),
              parseInt(val.status.code) == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-green-500 rounded-md my-2", children: "Accepted" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1990,
                columnNumber: 23
              }, this) : parseInt(val.status.code) == 3 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-red-500 rounded-md my-2", children: "Rejected" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1994,
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
                          lineNumber: 2006,
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
                    lineNumber: 1999,
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
                          lineNumber: 2019,
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
                    lineNumber: 2012,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1998,
                columnNumber: 23
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1964,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1961,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1958,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1952,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1868,
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
    lineNumber: 2069,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "User Created draft" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2072,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2073,
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
                  lineNumber: 2082,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2088,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2091,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2087,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2081,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2096,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2097,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Handle Info" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2099,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val.handle.platform.logo, alt: "platform", className: "w-12 h-12 shrink-0 rounded-md object-fill object-center" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2101,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-center", children: val.handle.name }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2102,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2100,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2105,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                target: "_blank",
                className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500",
                href: val.attach01,
                children: "View Doc"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2106,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2113,
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
                lineNumber: 2114,
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
          lineNumber: 2077,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2074,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2071,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2067,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2066,
    columnNumber: 5
  }, this);
};
var SnapshopCreatedDrafts = (props) => {
  const [resDarft, setResDarft] = (0, import_react.useState)([]);
  const init = async () => {
    let req = {
      search: {}
    };
    if (props.isUser) {
      req.search.influencer = props.userId;
    } else {
      req.search.campaign = props.campaingid;
    }
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
    lineNumber: 2173,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Draft snapshot" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2176,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2177,
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
                  lineNumber: 2186,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2192,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2195,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2191,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2185,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2200,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2201,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Handle Info" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2203,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val.handle.platform.logo, alt: "platform", className: "w-14 h-14 shrink-0 rounded-md object-fill object-center" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2205,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-center", children: val.handle.name }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2206,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2204,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Publication Time" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2209,
              columnNumber: 21
            }, this),
            val.draft_approval != null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: new Date(val.draft_approval.toString()).toLocaleString() }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2211,
              columnNumber: 23
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: "No Publication Time is set" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2212,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2214,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                target: "_blank",
                className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500",
                href: val.attach01,
                children: "View Doc"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2215,
                columnNumber: 21
              },
              this
            ),
            val.status.name == "REJECTED" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Rejection Reason" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2224,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.status.message }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2225,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2223,
              columnNumber: 23
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2230,
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
                lineNumber: 2231,
                columnNumber: 21
              },
              this
            ),
            val.status.name == "ACCEPTED" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-white py-1 w-full bg-cyan-500 cursor-pointer inline-block text-center mt-4 rounded-md", to: `/home/brandpay/${props.brandid}/${props.campaingid}/${val.id}`, children: "View Details" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2243,
              columnNumber: 23
            }, this) : null
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2181,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2178,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2175,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2171,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2170,
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
    resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-md p-4 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold text-lg", children: "No campaign is live" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2333,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2332,
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
              lineNumber: 2342,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-sm font-semibold text-left", children: val.handle.name }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2348,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2347,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2341,
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
              lineNumber: 2358,
              columnNumber: 19
            },
            this
          ),
          errors[index] == "" || errors[index] == null || errors[index] == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: errors[index] }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2368,
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
              lineNumber: 2372,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2357,
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
            lineNumber: 2382,
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
            lineNumber: 2390,
            columnNumber: 15
          },
          this
        )
      ] }, index, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2340,
        columnNumber: 11
      }, this);
    })
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2330,
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
      lineNumber: 2485,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2486,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-800", children: [
        "Starting bid : ",
        props.CostPerPost.split(".")[0]
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2488,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-800 mt-2", children: [
        "Current bid : ",
        amount.toString().split(".")[0]
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2491,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-700 my-2", children: "Min Bid : 100" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2494,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl text-gray-700", children: "Enter Amount : " }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2498,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            onChange: handelcontent,
            value: bidamount,
            type: "text",
            className: "text-black outline-none border-none rounded-md py-1 px-2 bg-[#EEEEEE] w-full"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2500,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2499,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2497,
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
          lineNumber: 2508,
          columnNumber: 9
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2514,
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
          lineNumber: 2518,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2487,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2484,
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
            lineNumber: 2579,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2580,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2581,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2585,
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
                      lineNumber: 2596,
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
                lineNumber: 2590,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2602,
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
                      lineNumber: 2607,
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
                lineNumber: 2603,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2589,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2578,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2574,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white mt-4", children: [
      resbid.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No bid request is pending" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2620,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2619,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Bid" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2624,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2625,
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
                  lineNumber: 2633,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2634,
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
                      lineNumber: 2636,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.userName.split("@")[0] }, void 0, false, {
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2642,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.userEmail }, void 0, false, {
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2645,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2641,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2635,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Amount" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2648,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.bidamount }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2649,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium mt-2", children: "Remark" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2650,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.remark }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2651,
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
                          lineNumber: 2660,
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
                    lineNumber: 2653,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2652,
                  columnNumber: 21
                }, this)
              ]
            },
            index,
            true,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2629,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2626,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2623,
        columnNumber: 11
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2674,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2617,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2573,
    columnNumber: 5
  }, this);
};
var SnapshotChampaingBidRequest = (props) => {
  const [resbid, setResbid] = (0, import_react.useState)([]);
  const [error, setError] = (0, import_react.useState)(null);
  const init = async () => {
    let req = {
      campaignId: props.campaingid
    };
    const responseData = await axios_default.post(
      `${BaseUrl}/api/get-bid`,
      req
    );
    if (responseData.data.status) {
      if (props.isUser) {
        const data = responseData.data.data.filter((val) => val.userId == props.userid);
        setResbid(data);
      } else {
        setResbid(responseData.data.data);
      }
    } else {
      setError(responseData.data.message);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white mt-4", children: [
    resbid.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No bid request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2727,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2726,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Bid" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2731,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2732,
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
                lineNumber: 2740,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2741,
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
                    lineNumber: 2743,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.userName.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2749,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.userEmail }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2752,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2748,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2742,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Amount" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2755,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.bidamount }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2756,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium mt-2", children: "Remark" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2757,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.remark }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2758,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2760,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "p",
                {
                  className: `mt-2 text-md text-white font-medium text-center rounded-md ${val.approved == "1" ? "bg-green-500" : "bg-yellow-500"}`,
                  children: val.approved == "1" ? "Approved" : "Pending"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2761,
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
            lineNumber: 2736,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2733,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2730,
      columnNumber: 11
    }, this),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2776,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2724,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2723,
    columnNumber: 5
  }, this);
};
export {
  campaigns_id_default as default
};
//# sourceMappingURL=/build/routes/home/campaigns.$id-OT3NUKZR.js.map