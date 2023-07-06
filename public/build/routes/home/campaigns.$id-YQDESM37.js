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
          category,
          typeid: champaign.campaignTypeId
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
            lineNumber: 211,
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
            enddate: champaign.endAt,
            typeid: champaign.campaignTypeId
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 217,
            columnNumber: 11
          },
          this
        ),
        isbrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InviteInf, { champaignId: champaign.id }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 225,
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
              lineNumber: 230,
              columnNumber: 17
            },
            this
          ) : null,
          acceptreq == 1 /* Panding */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panding, {}, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 240,
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
              lineNumber: 242,
              columnNumber: 17
            },
            this
          ) : null
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    acceptreq == 2 /* Accepted */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 flex-col lg:flex-row mt-8 flex-wrap justify-evenly", children: champaign.campaignTypeId != "6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
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
          lineNumber: 262,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 261,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-96 shrink-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Live campaigns" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 269,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 272,
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
            lineNumber: 274,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 273,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 268,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 260,
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
        lineNumber: 286,
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
          lineNumber: 295,
          columnNumber: 23
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 294,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-96 shrink-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary font-semibold py-1", children: "Live campaigns" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 302,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 305,
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
            lineNumber: 307,
            columnNumber: 25
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 306,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 301,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 293,
      columnNumber: 19
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-rose-500 py-4 px-10 text-white font-semibold text-2xl rounded-lg", children: "Your bid is not accepted" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 317,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 284,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 258,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 257,
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
          lineNumber: 331,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 335,
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
          lineNumber: 336,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 340,
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
          lineNumber: 341,
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
          lineNumber: 348,
          columnNumber: 15
        },
        this
      ) : null
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 330,
      columnNumber: 11
    }, this) : null }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 328,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "rounded-lg shadow-lg text-center font-semibold bg-white py-2 text-3xl my-4", children: "Snapshot" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 356,
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
          lineNumber: 359,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshotDraftAcceptRequest,
        {
          userId,
          campaingid: champaign.id,
          isUser: false
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 364,
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
          lineNumber: 369,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshotChampaingPaymentRequest,
        {
          userid: user.id,
          campaingid: champaign.id,
          isUser: false,
          currency: "USD"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 375,
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
          lineNumber: 381,
          columnNumber: 13
        },
        this
      ) : null
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 358,
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
          lineNumber: 390,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshotDraftAcceptRequest,
        {
          userId,
          campaingid: champaign.id,
          isUser: false
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 395,
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
          lineNumber: 400,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SnapshotChampaingPaymentRequest,
        {
          userid: user.id,
          campaingid: champaign.id,
          isUser: true,
          currency: "USD"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 406,
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
          lineNumber: 412,
          columnNumber: 13
        },
        this
      ) : null
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 389,
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
          lineNumber: 444,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 443,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 450,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 442,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: "Category : Consumer Electronics" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 454,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.website }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 457,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left", children: "Brand info" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 460,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.info }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 461,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 464,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rating, { rate: props.rate }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 465,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 466,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Connection, { connection: props.connection }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 467,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 468,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Completed, { completed: props.completed }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 469,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 441,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 440,
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
          lineNumber: 497,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 496,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 503,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 495,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl text-left my-4", children: props.title }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 508,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-4", children: [
      "Category : ",
      props.category
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 511,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.website }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 514,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-bold text-md text-left", children: "Campaign info" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 517,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.info }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 520,
      columnNumber: 9
    }, this),
    props.typeid == "5" || props.typeid == "6" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Moodboard" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 526,
        columnNumber: 13
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
            lineNumber: 533,
            columnNumber: 21
          },
          this
        ) }, index, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 532,
          columnNumber: 19
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 529,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 525,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Platforms" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 544,
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
          lineNumber: 551,
          columnNumber: 17
        },
        this
      ) }, index, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 550,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 547,
      columnNumber: 9
    }, this),
    props.typeid == "5" || props.typeid == "6" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200  rounded-md py-2 flex justify-around w-72 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold", children: "Do's" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 564,
            columnNumber: 17
          }, this),
          props.dos.split(",").map((val, index) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal", children: val }, index, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 567,
              columnNumber: 21
            }, this);
          })
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 563,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-[1px] bg-slate-900" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 573,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold", children: "Dont's" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 575,
            columnNumber: 17
          }, this),
          props.dont.split(",").map((val, index) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal", children: val }, index, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 578,
              columnNumber: 21
            }, this);
          })
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 574,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 562,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold mt-4", children: "Hashtags" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 588,
        columnNumber: 13
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
            lineNumber: 592,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 589,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold mt-4", children: "Mentions" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 601,
        columnNumber: 13
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
            lineNumber: 605,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 602,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 561,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 494,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 493,
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
          lineNumber: 635,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-primary font-medium px-4", children: "Target" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 639,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 634,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-500 w-full my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 641,
      columnNumber: 9
    }, this),
    props.typeid == "5" || props.typeid == "6" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Audience Location" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 646,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 647,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-primary", children: props.audienceloaction }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 648,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 645,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Min Reach" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 653,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 654,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.minreach }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 655,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 652,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Max Reach" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 658,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 659,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.maxreach }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 660,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 657,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 644,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Start Date" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 665,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 666,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.startdate.toString().split(" ")[0] }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 667,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 664,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "End date" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 672,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 673,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: props.enddate.toString().split(" ")[0] }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 674,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 671,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 633,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 632,
    columnNumber: 5
  }, this);
};
var InviteInf = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-xl text-left font-normal", children: "Invite influencer to campaign?" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 692,
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
        lineNumber: 697,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 696,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 695,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 691,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 690,
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
    const search_invite = await axios_default.post(`${BaseUrl}/api/search-invite`, {
      search: {
        status: "1",
        campaign: props.champaignId,
        influencer: props.userId
      }
    });
    adff;
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
        lineNumber: 786,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid place-items-center", onClick: onOpenModal, children: [
        error1 == "" || error1 == null || error1 == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full py-1 bg-red-500 text-center rounded-md text-white text-md font-normal text-md my-2", children: error1 }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 791,
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
            lineNumber: 795,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 789,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 785,
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
              lineNumber: 808,
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
                lineNumber: 810,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 809,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 807,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 816,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-normal", children: "Subject : Apply for campaign" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 817,
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
              lineNumber: 818,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 824,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 829,
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
                lineNumber: 831,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 830,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 828,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 806,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 802,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 784,
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
          lineNumber: 855,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-primary font-medium px-4", children: "Budget" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 859,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 854,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-500 w-full my-2 " }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 861,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Cost per post" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 863,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 864,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-primary", children: [
        props.costperpost.toString().split(".")[0],
        " ",
        props.currecny
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 865,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 862,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md text-primary", children: "Total budget" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 870,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 871,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-bold text-black", children: [
        props.totalbudget,
        " ",
        props.currecny
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 872,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 869,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 853,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 852,
    columnNumber: 5
  }, this);
};
var Panding = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-xl text-left font-normal", children: "Your request is in progress.." }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 885,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 884,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 883,
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
            lineNumber: 959,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 960,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 961,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 965,
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
                      lineNumber: 976,
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
                lineNumber: 970,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 982,
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
                      lineNumber: 987,
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
                lineNumber: 983,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 969,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 958,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 954,
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
            lineNumber: 1001,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1002,
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
              lineNumber: 1003,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1010,
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
                      lineNumber: 1021,
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
                lineNumber: 1015,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1027,
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
                      lineNumber: 1032,
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
                lineNumber: 1028,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1014,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1e3,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 996,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No Invite request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1043,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Invites" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1046,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1047,
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
                    lineNumber: 1056,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.toString().split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1062,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1065,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1061,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1055,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Message" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1070,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.inviteMessage }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1071,
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
                          lineNumber: 1080,
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
                    lineNumber: 1073,
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
                          lineNumber: 1093,
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
                    lineNumber: 1086,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1072,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1100,
                columnNumber: 21
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1051,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1048,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1045,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1041,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 953,
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
      req.search.campaign = props.campaingid;
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
    lineNumber: 1154,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Invites" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1157,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1158,
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
                  lineNumber: 1167,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.toString().split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1173,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1176,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1172,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1166,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Message" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1181,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.inviteMessage }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1182,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1184,
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
                lineNumber: 1185,
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
          lineNumber: 1162,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1159,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1156,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1152,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1151,
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
            lineNumber: 1278,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1279,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this draft?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1280,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1284,
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
                      lineNumber: 1295,
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
                lineNumber: 1289,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1301,
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
                      lineNumber: 1306,
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
                lineNumber: 1302,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1288,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1277,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1273,
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
            lineNumber: 1320,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1321,
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
              lineNumber: 1322,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1329,
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
                      lineNumber: 1340,
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
                lineNumber: 1334,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1346,
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
                      lineNumber: 1351,
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
                lineNumber: 1347,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1333,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1319,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1315,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No draft request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1362,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested drafts" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1365,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1366,
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
                    lineNumber: 1375,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1381,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 1384,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1380,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1374,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1389,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1390,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Handle Info" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1391,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val.handle.platform.logo, alt: "platform", className: "w-14 h-14 shrink-0 rounded-md object-fill object-center" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1393,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-center", children: val.handle.name }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1394,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1392,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1396,
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
                  lineNumber: 1397,
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
                          lineNumber: 1412,
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
                    lineNumber: 1405,
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
                          lineNumber: 1425,
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
                    lineNumber: 1418,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1404,
                columnNumber: 21
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1370,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1367,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1364,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1360,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1272,
    columnNumber: 5
  }, this);
};
var SnapshotDraftAcceptRequest = (props) => {
  const [resinvite, setRequestinvite] = (0, import_react.useState)([]);
  const init = async () => {
    let req = {
      search: {}
    };
    if (props.isUser) {
      req.search.influencer = props.userId;
      req.search.campaign = props.campaingid;
    } else {
      req.search.campaign = props.campaingid;
    }
    const responseData = await axios_default.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setRequestinvite(responseData.data.data);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white mt-4", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No draft request is pending" }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1479,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested drafts" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1482,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1483,
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
                  lineNumber: 1492,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1498,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 1501,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1497,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1491,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1506,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1507,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Handle Info" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1508,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val.handle.platform.logo, alt: "platform", className: "w-14 h-14 shrink-0 rounded-md object-fill object-center" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1510,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-center", children: val.handle.name }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 1511,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1509,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1513,
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
                lineNumber: 1514,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1523,
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
                lineNumber: 1524,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1537,
              columnNumber: 21
            }, this)
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1487,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1484,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1481,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1477,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1476,
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
        lineNumber: 1592,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-normal text-md", children: [
        "Reason : ",
        props.reason
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1595,
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
          lineNumber: 1599,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1598,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1591,
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
              lineNumber: 1612,
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
                lineNumber: 1614,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1613,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1611,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1620,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-normal", children: "Subject : Apply for campaign" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1621,
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
              lineNumber: 1622,
              columnNumber: 11
            },
            this
          ),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1628,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1633,
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
                lineNumber: 1635,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1634,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1632,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1610,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1606,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1590,
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
      lineNumber: 1668,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1669,
      columnNumber: 7
    }, this),
    createbox ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-normal font-semibold py-1 text-primary", children: "Create campaign draft" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1673,
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
                lineNumber: 1687,
                columnNumber: 21
              },
              this
            )
          },
          i,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1679,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1676,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-semibold  text-md", children: pdfFile == null ? "" : pdfFile.name.length >= 25 ? `${pdfFile.name.toString().slice(0, 25)}...` : pdfFile.name }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1697,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1700,
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
              lineNumber: 1707,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1701,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1696,
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
          lineNumber: 1711,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1710,
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
          lineNumber: 1728,
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
          lineNumber: 1733,
          columnNumber: 13
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1739,
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
          lineNumber: 1745,
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
          lineNumber: 1752,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1672,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1671,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-normal font-semibold py-1 text-primary", children: "Create campaign draft" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1814,
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
          lineNumber: 1817,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1813,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1812,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1667,
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
            lineNumber: 1920,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1921,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1922,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1926,
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
                      lineNumber: 1937,
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
                lineNumber: 1931,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1943,
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
                      lineNumber: 1948,
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
                lineNumber: 1944,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1930,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1919,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1915,
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
            lineNumber: 1962,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to reject this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1963,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1967,
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
                      lineNumber: 1978,
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
                lineNumber: 1972,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 1984,
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
                      lineNumber: 1989,
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
                lineNumber: 1985,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 1971,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 1961,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 1957,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: respayment.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No payment request is pending" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2001,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2e3,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Payment" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2005,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2006,
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
                lineNumber: 2014,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2015,
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
                    lineNumber: 2017,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2023,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2026,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2022,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2016,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Amount" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2031,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: [
                val.amount.toString().split(".")[0],
                " ",
                props.currency
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2032,
                columnNumber: 21
              }, this),
              parseInt(val.status.code) == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-green-500 rounded-md my-2", children: "Accepted" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2036,
                columnNumber: 23
              }, this) : parseInt(val.status.code) == 3 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-red-500 rounded-md my-2", children: "Rejected" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2040,
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
                          lineNumber: 2052,
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
                    lineNumber: 2045,
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
                          lineNumber: 2065,
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
                    lineNumber: 2058,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2044,
                columnNumber: 23
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2010,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2007,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2004,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 1998,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 1914,
    columnNumber: 5
  }, this);
};
var SnapshotChampaingPaymentRequest = (props) => {
  const [respayment, setRequestPayment] = (0, import_react.useState)([]);
  const init = async () => {
    let req = {
      search: {}
    };
    if (props.isUser) {
      req.search.influencer = props.userid;
      req.search.campaign = props.campaingid;
    } else {
      req.search.campaign = props.campaingid;
    }
    const responseData = await axios_default.post(`${BaseUrl}/api/get-req-pay`, req);
    if (responseData.data.status == true) {
      setRequestPayment(responseData.data.data);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: respayment.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No payment request is pending" }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2124,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2123,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Payment" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2128,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2129,
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
              lineNumber: 2137,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2138,
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
                  lineNumber: 2140,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2146,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2149,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2145,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2139,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Amount" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2154,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: [
              val.amount.toString().split(".")[0],
              " ",
              props.currency
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2155,
              columnNumber: 21
            }, this),
            parseInt(val.status.code) == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-green-500 rounded-md my-2", children: "Accepted" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2159,
              columnNumber: 23
            }, this) : parseInt(val.status.code) == 3 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-red-500 rounded-md my-2", children: "Rejected" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2163,
              columnNumber: 23
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-1 px-4 text-center text-white bg-yellow-500 rounded-md my-2", children: "Pending" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2167,
              columnNumber: 23
            }, this)
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2133,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2130,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2127,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2121,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2120,
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
      req.search.campaign = props.campaingid;
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
    lineNumber: 2318,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Draft snapshot" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2321,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2322,
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
                  lineNumber: 2331,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2337,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.influencer.email }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2340,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2336,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2330,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2345,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2346,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Handle Info" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2348,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val.handle.platform.logo, alt: "platform", className: "w-14 h-14 shrink-0 rounded-md object-fill object-center" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2350,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-center", children: val.handle.name }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2351,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2349,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Publication Time" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2354,
              columnNumber: 21
            }, this),
            val.draft_approval != null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: new Date(val.draft_approval.toString()).toLocaleString() }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2356,
              columnNumber: 23
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: "No Publication Time is set" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2357,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Campaign Link" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2360,
              columnNumber: 21
            }, this),
            val.linkCampaign != null || val.linkCampaign != "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.linkCampaign }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2362,
              columnNumber: 23
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: "No Campaign is Linked" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2363,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2366,
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
                lineNumber: 2367,
                columnNumber: 21
              },
              this
            ),
            val.status.name == "REJECTED" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Rejection Reason" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2376,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.status.message }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2377,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2375,
              columnNumber: 23
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2382,
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
                lineNumber: 2383,
                columnNumber: 21
              },
              this
            ),
            val.status.name == "ACCEPTED" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-white py-1 w-full bg-cyan-500 cursor-pointer inline-block text-center mt-4 rounded-md", to: `/home/brandpay/${props.brandid}/${props.campaingid}/${val.id}`, children: "View Details" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2395,
              columnNumber: 23
            }, this) : null
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2326,
          columnNumber: 19
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2323,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2320,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2316,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2315,
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
      lineNumber: 2485,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2484,
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
              lineNumber: 2494,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-sm font-semibold text-left", children: val.handle.name }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2500,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2499,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2493,
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
              lineNumber: 2510,
              columnNumber: 19
            },
            this
          ),
          errors[index] == "" || errors[index] == null || errors[index] == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: errors[index] }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2520,
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
              lineNumber: 2524,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2509,
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
            lineNumber: 2534,
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
            lineNumber: 2542,
            columnNumber: 15
          },
          this
        )
      ] }, index, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2492,
        columnNumber: 11
      }, this);
    })
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2482,
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
    } else if (Number(amount) < Number(bidamount)) {
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
      lineNumber: 2637,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2638,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-800", children: [
        "Starting bid : ",
        props.CostPerPost.split(".")[0]
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2640,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-800 mt-2", children: [
        "Current bid : ",
        amount.toString().split(".")[0]
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2643,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl  text-gray-700 my-2", children: "Min Bid : 100" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2646,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl text-gray-700", children: "Enter Amount : " }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2650,
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
            lineNumber: 2652,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2651,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2649,
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
          lineNumber: 2660,
          columnNumber: 9
        },
        this
      ),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2666,
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
          lineNumber: 2670,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2639,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2636,
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
            lineNumber: 2731,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2732,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this payment?" }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2733,
            columnNumber: 11
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2737,
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
                      lineNumber: 2748,
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
                lineNumber: 2742,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2754,
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
                      lineNumber: 2759,
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
                lineNumber: 2755,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/campaigns.$id.tsx",
            lineNumber: 2741,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2730,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2726,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white mt-4", children: [
      resbid.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No bid request is pending" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2772,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2771,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Bid" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2776,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2777,
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
                  lineNumber: 2785,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2786,
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
                      lineNumber: 2788,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.userName.split("@")[0] }, void 0, false, {
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2794,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.userEmail }, void 0, false, {
                      fileName: "app/routes/home/campaigns.$id.tsx",
                      lineNumber: 2797,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2793,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2787,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Amount" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2800,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.bidamount }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2801,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium mt-2", children: "Remark" }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2802,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.remark }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2803,
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
                          lineNumber: 2812,
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
                    lineNumber: 2805,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2804,
                  columnNumber: 21
                }, this)
              ]
            },
            index,
            true,
            {
              fileName: "app/routes/home/campaigns.$id.tsx",
              lineNumber: 2781,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/home/campaigns.$id.tsx",
          lineNumber: 2778,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2775,
        columnNumber: 11
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2826,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2769,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2725,
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
      lineNumber: 2879,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2878,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "Requested Bid" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2883,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2884,
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
                lineNumber: 2892,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] bg-gray-700" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2893,
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
                    lineNumber: 2895,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.userName.split("@")[0] }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2901,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.userEmail }, void 0, false, {
                    fileName: "app/routes/home/campaigns.$id.tsx",
                    lineNumber: 2904,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/home/campaigns.$id.tsx",
                  lineNumber: 2900,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2894,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Amount" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2907,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.bidamount }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2908,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium mt-2", children: "Remark" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2909,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold", children: val.remark }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2910,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
                fileName: "app/routes/home/campaigns.$id.tsx",
                lineNumber: 2911,
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
                  lineNumber: 2912,
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
            lineNumber: 2888,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/home/campaigns.$id.tsx",
        lineNumber: 2885,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2882,
      columnNumber: 11
    }, this),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/home/campaigns.$id.tsx",
      lineNumber: 2927,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2876,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/campaigns.$id.tsx",
    lineNumber: 2875,
    columnNumber: 5
  }, this);
};
export {
  campaigns_id_default as default
};
//# sourceMappingURL=/build/routes/home/campaigns.$id-YQDESM37.js.map
