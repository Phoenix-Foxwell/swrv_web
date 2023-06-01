import {
  createcampaign_default
} from "/build/_shared/chunk-OGSCUSLT.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faAdd,
  faCircleXmark
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  useNavigate
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/createcampaign/step5.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step5 = () => {
  const [bi, setbi] = (0, import_react2.useState)("");
  const [cp, setcp] = (0, import_react2.useState)("");
  const mendtion = createcampaign_default((state) => state.mendtion);
  const hashtag = createcampaign_default((state) => state.hashtag);
  const dos = createcampaign_default((state) => state.dos);
  const donts = createcampaign_default((state) => state.donts);
  const [error, setErrot] = (0, import_react2.useState)(null);
  const [imgerror, setImgerror] = (0, import_react2.useState)(null);
  let image = createcampaign_default((state) => state.image);
  let addImage = createcampaign_default((state) => state.addImage);
  let removeImage = createcampaign_default((state) => state.removeImage);
  const brandInfo = (0, import_react2.useRef)(null);
  let BrandInfo = createcampaign_default((state) => state.brandinfo);
  let setBrandinfo = createcampaign_default((state) => state.setBrandinfo);
  const CampaignPurpose = (0, import_react2.useRef)(null);
  let campaignPurpose = createcampaign_default((state) => state.campaginPurpose);
  let setCampaginPurpose = createcampaign_default(
    (state) => state.setCampaginPurpose
  );
  let imgref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    brandInfo.current.value = BrandInfo;
    CampaignPurpose.current.value = campaignPurpose;
  }, []);
  const navigator = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Create campaign" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand info" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "textarea",
        {
          ref: brandInfo,
          className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none",
          onChange: (val) => setbi(val.target.value)
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 60,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign purpose" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "textarea",
        {
          ref: CampaignPurpose,
          className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none",
          onChange: (val) => setcp(val.target.value)
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Mood boards" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "file",
          accept: "image/*",
          ref: imgref,
          onChange: (value) => {
            let file_size = parseInt(
              (value.target.files[0].size / 1024 / 1024).toString()
            );
            if (file_size < 4) {
              setImgerror(null);
              addImage(value.target.files[0]);
            } else {
              setImgerror("Image file size must be less then 4 mb");
            }
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 77,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]", children: [
        image.map((value, i) => {
          var url = URL.createObjectURL(value);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "top-0 left-0 absolute h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: url,
                alt: "error",
                className: "w-full h-full rounded-xl object-cover"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/step5.tsx",
                lineNumber: 101,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step5.tsx",
              lineNumber: 100,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "cursor-pointer",
                onClick: () => {
                  removeImage(value);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  FontAwesomeIcon,
                  {
                    className: "text-red-500 font-bold text-xl top-0 right-0 absolute",
                    icon: faCircleXmark
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/createcampaign/step5.tsx",
                    lineNumber: 113,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/step5.tsx",
                lineNumber: 107,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step5.tsx",
            lineNumber: 99,
            columnNumber: 19
          }, this) }, i, false, {
            fileName: "app/routes/home/createcampaign/step5.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-32 h-32 bg-gray-200 rounded-xl grid place-items-center cursor-pointer",
            onClick: () => {
              var _a;
              (_a = imgref.current) == null ? void 0 : _a.click();
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              FontAwesomeIcon,
              {
                icon: faAdd,
                className: "text-gray-400 text-3xl font-bold text-center"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/step5.tsx",
                lineNumber: 129,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step5.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step5.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-80 bg-white shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Brand info" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: bi == "" ? "--------" : bi }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Campaign purpose" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 157,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 160,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: cp == "" ? "--------" : cp }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Hashtags" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: hashtag.map(
          (val, index, arr) => `${val}${arr.length == index ? "" : ","}`
        ) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Mentions" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: mendtion.map(
          (val, index, arr) => `${val}${arr.length == index ? "" : ","}`
        ) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 178,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "You should do:" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 187,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: dos.map(
          (val, index, arr) => `${val}${arr.length == index ? "" : ","}`
        ) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "You should don't:" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 196,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 199,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: donts.map(
          (val, index, arr) => `${val}${arr.length == index ? "" : ","}`
        ) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 200,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 208,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            onClick: () => {
              navigator(-1);
            },
            className: "w-full",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Back",
                textColor: "text-black",
                background: "bg-gray-100",
                width: "w-full",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/step5.tsx",
                lineNumber: 219,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step5.tsx",
            lineNumber: 213,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: () => {
              var _a, _b, _c, _d, _e, _f, _g, _h;
              if (((_a = brandInfo.current) == null ? void 0 : _a.value) == null || ((_b = brandInfo.current) == null ? void 0 : _b.value) == void 0 || ((_c = brandInfo.current) == null ? void 0 : _c.value) == "") {
                setErrot("Fill the Brand Info");
              } else if (((_d = CampaignPurpose.current) == null ? void 0 : _d.value) == null || ((_e = CampaignPurpose.current) == null ? void 0 : _e.value) == void 0 || ((_f = CampaignPurpose.current) == null ? void 0 : _f.value) == "") {
                setErrot("Fill the Campaign Purpose.");
              } else if (image.length == 0) {
                setErrot("Select at least one image.");
              } else {
                setBrandinfo((_g = brandInfo.current) == null ? void 0 : _g.value);
                setCampaginPurpose((_h = CampaignPurpose.current) == null ? void 0 : _h.value);
                setErrot(null);
                navigator("/home/createcampaign/step6");
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Next",
                textColor: "text-white",
                background: "bg-secondary",
                width: "w-full",
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/createcampaign/step5.tsx",
                lineNumber: 253,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step5.tsx",
            lineNumber: 228,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 212,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step5.tsx",
      lineNumber: 145,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step5.tsx",
      lineNumber: 144,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step5.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/step5.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};
var step5_default = Step5;
export {
  step5_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step5-K27TZHHP.js.map
