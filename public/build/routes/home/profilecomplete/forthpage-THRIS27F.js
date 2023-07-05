import {
  firstinput_default
} from "/build/_shared/chunk-RAFJ3YWD.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faAdd,
  faChevronRight
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Form,
  useLoaderData,
  useNavigate
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

// app/routes/home/profilecomplete/forthpage.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ForthPage = () => {
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const country = userdata.country;
  const gender = ["MALE", "FEMALE", "TRANSGENDER"];
  const isBrand = userdata.user.role["code"] == "50" ? true : false;
  const [selCountry, setSelCountry] = (0, import_react2.useState)([]);
  const [con, setcon] = (0, import_react2.useState)(false);
  const [selGender, setSelGender] = (0, import_react2.useState)([]);
  const [gen, setgen] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)("");
  const [cityerror, setCityerror] = (0, import_react2.useState)(null);
  const [citybox, setCitybox] = (0, import_react2.useState)(false);
  const [searchcity, setSearchcity] = (0, import_react2.useState)([]);
  const [selectedcity, setSelectedctiy] = (0, import_react2.useState)(null);
  const [contactnumber, setContactnumber] = (0, import_react2.useState)();
  const handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  };
  let cityref = (0, import_react2.useRef)(null);
  const getCity = async (city, countryId) => {
    const data = await axios_default.post(`${BaseUrl}/api/get-city`, {
      search: city,
      countryId
    });
    setSearchcity(data.data.data);
  };
  const setIndex = firstinput_default((state) => state.setIndex);
  const navigate = useNavigate();
  const [check, setCheck] = (0, import_react2.useState)(false);
  const handleOnChange = () => {
    setCheck(!check);
  };
  const nextButton = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${citybox ? "grid" : "hidden"}`,
        onClick: (val) => setCitybox(false),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-md w-80 rounded-lg p-4", onClick: (e) => e.stopPropagation(), children: searchcity.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-96", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: "No city found with this name" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "px-2 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4 cursor-pointer",
              onClick: () => {
                setCitybox(false);
              },
              children: "Close"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 100,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[350px] overflow-y-scroll no-scrollbar", children: [
          searchcity.map((value, index) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setSelectedctiy(value);
                  setCitybox(false);
                  cityref.current.value = "";
                },
                className: "my-6 cursor-pointer bg-white rounded-md py-1 border-2 text-center font-normal text-md hover:border-emerald-500",
                children: [
                  value["name"],
                  " - ",
                  value["code"]
                ]
              },
              index,
              true,
              {
                fileName: "app/routes/home/profilecomplete/forthpage.tsx",
                lineNumber: 114,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 113,
              columnNumber: 19
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
            setCitybox(false);
          }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer", children: "Close" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 89,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: [
        "Country  ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 142,
          columnNumber: 24
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selCountry.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["name"]} - [${value["code"]}]` }, void 0, false, {
                fileName: "app/routes/home/profilecomplete/forthpage.tsx",
                lineNumber: 152,
                columnNumber: 23
              }, this)
            },
            i,
            false,
            {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 148,
              columnNumber: 21
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
            onClick: () => {
              setcon(true);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 166,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 160,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"} grid place-items-center`,
          onClick: (val) => setcon(false),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-scroll no-scrollbar w-80 h-[350px]", children: country.map((val, i) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "h1",
                {
                  onClick: () => {
                    setSelCountry((value) => [val]);
                    setcon(false);
                  },
                  className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selCountry.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`,
                  children: [
                    val["code"],
                    " - ",
                    val["name"]
                  ]
                },
                i,
                true,
                {
                  fileName: "app/routes/home/profilecomplete/forthpage.tsx",
                  lineNumber: 178,
                  columnNumber: 23
                },
                this
              );
            }) }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setcon(false);
                },
                className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",
                children: "Close"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/profilecomplete/forthpage.tsx",
                lineNumber: 194,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 169,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
        "Gender  ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 208,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 207,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selGender.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: value }, void 0, false, {
                fileName: "app/routes/home/profilecomplete/forthpage.tsx",
                lineNumber: 218,
                columnNumber: 23
              }, this)
            },
            i,
            false,
            {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 214,
              columnNumber: 21
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 211,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 225,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "grid place-items-center px-4 bg-gray-300 rounded-lg",
            onClick: () => {
              setgen(true);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 232,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 226,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 210,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${gen ? "" : "hidden"} grid place-items-center`,
          onClick: (val) => setgen(false),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: gender.map((val, i) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "h1",
                {
                  onClick: () => {
                    if (selGender.includes(val)) {
                      let addcur = selGender.filter(
                        (data) => data != val
                      );
                      setSelGender(addcur);
                    } else {
                      setSelGender([val]);
                    }
                    setgen(false);
                  },
                  className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selGender.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`,
                  children: val
                },
                i,
                false,
                {
                  fileName: "app/routes/home/profilecomplete/forthpage.tsx",
                  lineNumber: 244,
                  columnNumber: 23
                },
                this
              );
            }) }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 241,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setgen(false);
                },
                className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",
                children: "Close"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/profilecomplete/forthpage.tsx",
                lineNumber: 267,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 240,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 235,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
        "City  ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 279,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 278,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-[#EEEEEE] rounded-md flex p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: cityref,
            className: "h-full w-full outline-none focus:border-gray-300 bg-transparent"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 283,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 282,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer",
            onClick: () => {
              var _a, _b, _c, _d, _e;
              if (selCountry.length == 0) {
                setError("Select the country first");
              } else if (((_a = cityref.current) == null ? void 0 : _a.value) == null || ((_b = cityref.current) == null ? void 0 : _b.value) == void 0 || ((_c = cityref.current) == null ? void 0 : _c.value) == "") {
                setCityerror("Enter the city name");
              } else {
                setCitybox(true);
                setCityerror(null);
                getCity((_e = (_d = cityref.current) == null ? void 0 : _d.value) != null ? _e : "", selCountry[0].id);
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faChevronRight }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 307,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 288,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 281,
        columnNumber: 13
      }, this),
      cityerror == "" || cityerror == null || cityerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: cityerror }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 313,
        columnNumber: 15
      }, this),
      selectedcity == "" || selectedcity == null || selectedcity == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4", children: [
        selectedcity["name"],
        " - ",
        selectedcity["code"]
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 320,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
        "Phone number  ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 325,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 324,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-black font-normal text-md mr-4", children: selectedcity == null ? 0 : selectedcity["country"]["isd"] }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 328,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            onChange: handelcontent,
            value: contactnumber,
            type: "text",
            className: "w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 331,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 327,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            checked: check,
            onChange: handleOnChange,
            type: "checkbox",
            name: "check2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 341,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 340,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left text-[10px] text-black font-normal", children: "The above details are true and correct" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 348,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 339,
        columnNumber: 13
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 353,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "w-full",
          onClick: async () => {
            if (selCountry.length == 0) {
              setError("Select the country");
            } else if (gender.length == 0) {
              setError("Select your gender");
            } else if (selectedcity == null || selCountry == void 0) {
              setError("Select the city");
            } else if (contactnumber == null || contactnumber == void 0 || contactnumber == 0) {
              setError("Fill the contact number");
            } else if (!check) {
              setError("Check the box in order to proceed");
            } else {
              let req = {
                id: userId,
                cityId: selectedcity["id"],
                userContact: contactnumber,
                userGender: selGender[0] == "MALE" ? "1" : selGender[0] == "FEMALE" ? "2" : "3"
              };
              const data = await axios_default({
                method: "post",
                url: `${BaseUrl}/api/updateuser`,
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
              }
              setIndex(5);
              nextButton.current.click();
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CusButton,
            {
              text: isBrand ? "Next" : "Finish",
              textColor: "text-white",
              width: "w-full",
              background: "bg-primary",
              fontwidth: "font-bold"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/profilecomplete/forthpage.tsx",
              lineNumber: 413,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 357,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userId.toString() }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 423,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "address",
            value: isBrand ? "/home/profilecomplete/fifthpage" : "/home"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 424,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 429,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 422,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 421,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 139,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/forthpage.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
};
var forthpage_default = ForthPage;
export {
  forthpage_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/forthpage-THRIS27F.js.map
