import {
  createcampaign_default
} from "/build/_shared/chunk-OMKE5S3Z.js";
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from "/build/_shared/chunk-M4E4F2NX.js";
import "/build/_shared/chunk-D7BH45K3.js";
import {
  CusButton
} from "/build/_shared/chunk-HT3EAJMF.js";
import "/build/_shared/chunk-UGCBQJMO.js";
import "/build/_shared/chunk-7NI3P3WC.js";
import "/build/_shared/chunk-MWIY3DQR.js";
import {
  FontAwesomeIcon,
  faAdd,
  faCircleXmark
} from "/build/_shared/chunk-XG566DYW.js";
import "/build/_shared/chunk-55KEKCTE.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-LXJMA5PD.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-KG56QLKG.js";

// app/routes/home/createcampaign/step3.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step3 = () => {
  const navigator = useNavigate();
  const data = useLoaderData();
  const [error, setError] = (0, import_react2.useState)(null);
  const audienceText = (0, import_react2.useRef)(null);
  const [auderror, setAudError] = (0, import_react2.useState)(null);
  const [addaudience, setAddAudience] = (0, import_react2.useState)(false);
  const audience = createcampaign_default((state) => state.audience);
  const removeAudience = createcampaign_default((state) => state.removeAudience);
  const clearAudience = createcampaign_default((state) => state.clearAudience);
  const addAudience = createcampaign_default((state) => state.addAudience);
  const infLocation = createcampaign_default((state) => state.infLocation);
  const setInfLocation = createcampaign_default((state) => state.setInfLocation);
  const datepicker = (0, import_react2.useRef)(null);
  const tilldate = createcampaign_default((state) => state.tilldate);
  const setTillDate = createcampaign_default((state) => state.setTillDate);
  const maxInf = (0, import_react2.useRef)(null);
  const maxinf = createcampaign_default((state) => state.maxInf);
  const setMaxInf = createcampaign_default((state) => state.setMaxInf);
  const remuneration = (0, import_react2.useRef)(null);
  const Remuneration = createcampaign_default((state) => state.remuneration);
  const setRemuneration = createcampaign_default((state) => state.setRemuneration);
  const remunerationType = createcampaign_default(
    (state) => state.remunerationType
  );
  const setRemunerationType = createcampaign_default(
    (state) => state.setRemunerationType
  );
  const setLat = createcampaign_default((state) => state.setLat);
  const setLong = createcampaign_default((state) => state.setLong);
  (0, import_react2.useEffect)(() => {
    var _a, _b, _c;
    if (((_a = datepicker.current) == null ? void 0 : _a.value) != null) {
      datepicker.current.value = tilldate;
    }
    if (((_b = maxInf.current) == null ? void 0 : _b.value) != null) {
      maxInf.current.value = maxinf.toString();
    }
    if (((_c = remuneration.current) == null ? void 0 : _c.value) != null) {
      remuneration.current.value = Remuneration;
    }
  }, []);
  const containerStyle = {
    width: "100%",
    height: "100%"
  };
  const [marker, setMarker] = (0, import_react2.useState)({
    lat: -3.745,
    lng: -38.523
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBiZK164IPHzJ213FTrIR_hDUWVnjhC_4o"
  });
  const [map, setMap] = (0, import_react2.useState)(null);
  const onLoad = (0, import_react2.useCallback)(function callback(map2) {
    const bounds = new window.google.maps.LatLngBounds(marker);
    map2.fitBounds(bounds);
    setMap(map2);
  }, []);
  const onUnmount = (0, import_react2.useCallback)(function callback(map2) {
    setMap(null);
  }, []);
  const handleClick = (event) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
    setLat(event.latLng.lat());
    setLong(event.latLng.lng());
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-black tect-xl font-medium text-left", children: "Audience & demeography" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Audience location" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: audience.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-black font-semibold ", children: `@${value}` }, void 0, false, {
                  fileName: "app/routes/home/createcampaign/step3.tsx",
                  lineNumber: 132,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "grid place-items-center cursor-pointer",
                    onClick: () => removeAudience(value),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      FontAwesomeIcon,
                      {
                        icon: faCircleXmark,
                        className: "text-lg font-bold text-red-500"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/home/createcampaign/step3.tsx",
                        lineNumber: 139,
                        columnNumber: 23
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/createcampaign/step3.tsx",
                    lineNumber: 135,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            i,
            true,
            {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 128,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
            onClick: () => setAddAudience(true),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/createcampaign/step3.tsx",
            lineNumber: 149,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "p",
        {
          className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer",
          onClick: clearAudience,
          children: "clear all"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 157,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this),
    addaudience ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          ref: audienceText,
          type: "text",
          className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2",
          placeholder: "Audience"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 168,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 167,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          onClick: () => {
            if (audienceText.current.value == "" || audienceText.current.value == null || audienceText.current.value == void 0) {
              setAudError("Audience location can't be empty!");
            } else if (audience.includes(audienceText.current.value)) {
              setAudError("Audience already exist add a diffrent one");
            } else if (audienceText.current.value.indexOf(" ") >= 0) {
              setAudError("Audience cannot containt space");
            } else {
              addAudience(audienceText.current.value);
              audienceText.current.value = "";
              setAddAudience(false);
              setAudError(null);
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CusButton,
            {
              text: "ADD",
              background: "bg-primary",
              width: "w-20"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 196,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 176,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 166,
      columnNumber: 11
    }, this) : null,
    auderror == "" || auderror == null || auderror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: auderror }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 205,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Influencer category" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 211,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "select",
      {
        className: "w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6",
        onClick: (value) => {
          const data2 = value.target.value + "";
          const setdata = data2.split(" ");
          setInfLocation(setdata[0], setdata[1], setdata[2]);
        },
        children: data.data.map((value, i) => {
          if (value.id == infLocation.id) {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "option",
              {
                value: `${value.id} ${value.categoryName} ${value.categoryCode}`,
                className: "border-none outline-none font-normal text-lg",
                selected: true,
                children: `${value.categoryName} [${value.categoryCode}]`
              },
              i,
              false,
              {
                fileName: "app/routes/home/createcampaign/step3.tsx",
                lineNumber: 225,
                columnNumber: 17
              },
              this
            );
          } else {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "option",
              {
                value: `${value.id} ${value.categoryName} ${value.categoryCode}`,
                className: "border-none outline-none font-normal text-lg",
                children: `${value.categoryName} [${value.categoryCode}]`
              },
              i,
              false,
              {
                fileName: "app/routes/home/createcampaign/step3.tsx",
                lineNumber: 234,
                columnNumber: 17
              },
              this
            );
          }
        })
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 214,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Maximum no of influencers that can join the campaign" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 243,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: maxInf,
        type: "number",
        className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 246,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Geo restriction ( Optional only applicable for influencer filtering ) radius in kilometers" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 251,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-96", children: isLoaded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      GoogleMap,
      {
        mapContainerStyle: containerStyle,
        center: marker,
        zoom: 10,
        onLoad,
        onUnmount,
        onClick: handleClick,
        children: marker && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Marker, { position: marker }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 265,
          columnNumber: 26
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 257,
        columnNumber: 13
      },
      this
    ) : null }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Accept participation / invite till" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 269,
      columnNumber: 9
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
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 272,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Remuneration" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 277,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "select",
      {
        className: "w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6",
        onChange: (value) => {
          setRemunerationType(value.target.value);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "option",
            {
              value: "1",
              className: "border-none outline-none font-normal text-lg",
              children: "Cash"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 286,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "option",
            {
              value: "2",
              className: "border-none outline-none font-normal text-lg",
              children: "Product"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 292,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "option",
            {
              value: "3",
              className: "border-none outline-none font-normal text-lg",
              children: "Revenue"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 298,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "option",
            {
              value: "4",
              className: "border-none outline-none font-normal text-lg",
              children: "Discount"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 304,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 280,
        columnNumber: 9
      },
      this
    ),
    remunerationType == "1" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: remuneration,
        type: "text",
        className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2",
        placeholder: "usd"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 312,
        columnNumber: 11
      },
      this
    ) : null,
    remunerationType == "2" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: remuneration,
        type: "text",
        className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2",
        placeholder: "Product details"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 320,
        columnNumber: 11
      },
      this
    ) : null,
    remunerationType == "3" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: remuneration,
        type: "text",
        className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2",
        placeholder: "% per sale"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 328,
        columnNumber: 11
      },
      this
    ) : null,
    remunerationType == "4" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: remuneration,
        type: "text",
        className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2",
        placeholder: "Coupons"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 336,
        columnNumber: 11
      },
      this
    ) : null,
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: error }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 344,
      columnNumber: 11
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
              width: "w-full"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 355,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 349,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 362,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "w-full",
          onClick: () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
            if (audience.length == 0) {
              setError("Add Audience Location");
            } else if (infLocation.id == null || infLocation.id == void 0 || infLocation.id == "") {
              setError("Select Influencer category");
            } else if (((_a = maxInf.current) == null ? void 0 : _a.value) == null || maxInf.current.value == void 0 || ((_b = maxInf.current) == null ? void 0 : _b.value) == "" || parseInt((_c = maxInf.current) == null ? void 0 : _c.value) == 0) {
              setError("Select maximum influencer no. ");
            } else if (((_d = datepicker.current) == null ? void 0 : _d.value) == null || ((_e = datepicker.current) == null ? void 0 : _e.value) == void 0 || ((_f = datepicker.current) == null ? void 0 : _f.value) == "") {
              setError("Select Accept participation last date. ");
            } else if (((_g = remuneration.current) == null ? void 0 : _g.value) == null || ((_h = remuneration.current) == null ? void 0 : _h.value) == void 0 || ((_i = remuneration.current) == null ? void 0 : _i.value) == "") {
              setError("Select remuneration. ");
            } else {
              setTillDate((_j = datepicker.current) == null ? void 0 : _j.value);
              setMaxInf(parseInt((_k = maxInf.current) == null ? void 0 : _k.value));
              setRemuneration((_l = remuneration.current) == null ? void 0 : _l.value);
              navigator("/home/createcampaign/step4");
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CusButton,
            {
              text: "Next",
              textColor: "text-white",
              background: "bg-primary",
              width: "w-full"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 401,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 363,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 348,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step3.tsx",
    lineNumber: 115,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/step3.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
};
var step3_default = Step3;
export {
  step3_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step3-TVT6EADB.js.map
