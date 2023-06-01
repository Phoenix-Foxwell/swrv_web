import {
  firstinput_default
} from "/build/_shared/chunk-RAFJ3YWD.js";
import {
  require_he
} from "/build/_shared/chunk-ZST3SBXF.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-75EXHREH.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faAdd
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Form,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/profilecomplete/secondpage.tsx
var import_he = __toESM(require_he());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SecondPage = () => {
  const loaderData = useLoaderData();
  const userID = loaderData.user.id;
  const currency = loaderData.currency;
  const category = loaderData.category;
  const languages = loaderData.languages;
  const market = loaderData.market;
  const setIndex = firstinput_default((state) => state.setIndex);
  const navigator = useNavigate();
  const [error, setError] = (0, import_react2.useState)(null);
  const [selcurrency, setSelcurrency] = (0, import_react2.useState)([]);
  const [selcategory, setSelcategory] = (0, import_react2.useState)([]);
  const [sellanguages, setSellanguages] = (0, import_react2.useState)([]);
  const [selmarket, setSelmarket] = (0, import_react2.useState)([]);
  const [selorthermarket, setSelorthermarket] = (0, import_react2.useState)([]);
  const [cur, setcur] = (0, import_react2.useState)(false);
  const [cat, setcat] = (0, import_react2.useState)(false);
  const [lan, setlan] = (0, import_react2.useState)(false);
  const [mar, setmar] = (0, import_react2.useState)(false);
  const [ort, setort] = (0, import_react2.useState)(false);
  const nextButton = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-[400px] mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Main market" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 116,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selmarket.map((value, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["name"]} - [${value["code"]}]` }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 122,
          columnNumber: 41
        }, this) }, i, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 121,
          columnNumber: 37
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 118,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 129,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setmar(true);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 133,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 130,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 117,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${mar ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: market.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { onClick: () => {
          if (selmarket.includes(val)) {
            let addcur = selmarket.filter((data) => data != val);
            setSelmarket(addcur);
          } else {
            setSelmarket([val]);
          }
        }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selmarket.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
          val["code"],
          " - ",
          val["name"]
        ] }, i, true, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 141,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 138,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setmar(false);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 152,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 137,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 136,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Other markets" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 160,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selorthermarket.map((value, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["name"]} - [${value["code"]}]` }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 167,
          columnNumber: 41
        }, this) }, i, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 166,
          columnNumber: 37
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 162,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 174,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setort(true);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 178,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 175,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 161,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${ort ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 w-80 overflow-y-scroll no-scrollbar", children: market.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { onClick: () => {
          if (selorthermarket.includes(val)) {
            let addcur = selorthermarket.filter((data) => data != val);
            setSelorthermarket(addcur);
          } else {
            setSelorthermarket([...selorthermarket, val]);
          }
        }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selorthermarket.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
          val["code"],
          " - ",
          val["name"],
          " "
        ] }, i, true, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 186,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 183,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setort(false);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 197,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 182,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 181,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Category" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 205,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcategory.map((value, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["categoryName"]} - [${value["categoryCode"]}]` }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 211,
          columnNumber: 41
        }, this) }, i, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 210,
          columnNumber: 37
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 207,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 218,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setcat(true);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 222,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 219,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 206,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cat ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 w-80 overflow-y-scroll no-scrollbar", children: category.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { onClick: () => {
          if (selcategory.includes(val)) {
            let addcur = selcategory.filter((data) => data != val);
            setSelcategory(addcur);
          } else {
            setSelcategory([...selcategory, val]);
          }
        }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcategory.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
          val["categoryCode"],
          " - ",
          val["categoryName"],
          "   "
        ] }, i, true, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 230,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 227,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setcat(false);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 241,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 226,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 225,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Account currency" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 248,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcurrency.map((value, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-32", children: `${value["currencyName"]} - [${value["currencyCode"]}]` }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 255,
          columnNumber: 41
        }, this) }, i, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 254,
          columnNumber: 37
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 250,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 262,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setcur(true);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 266,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 263,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 249,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cur ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar", children: currency.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { onClick: () => {
          if (selcurrency.includes(val)) {
            let addcur = selcurrency.filter((data) => data != val);
            setSelcurrency(addcur);
          } else {
            setSelcurrency([val]);
          }
        }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcurrency.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
          val["currencyCode"],
          " - ",
          val["currencyName"],
          "  ",
          import_he.default.decode(val["currencyAsciiSymbol"]),
          " "
        ] }, i, true, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 274,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 271,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setcur(false);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 285,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 270,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 269,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Languages" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 292,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: sellanguages.map((value, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-32", children: `${value["languageName"]} - [${value["languageCode"]}]` }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 298,
          columnNumber: 41
        }, this) }, i, false, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 297,
          columnNumber: 37
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 294,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 305,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setlan(true);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 309,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 306,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 293,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${lan ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-80 overflow-y-scroll no-scrollbar", children: languages.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { onClick: () => {
          if (sellanguages.includes(val)) {
            let addcur = sellanguages.filter((data) => data != val);
            setSellanguages(addcur);
          } else {
            setSellanguages([...sellanguages, val]);
          }
        }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${sellanguages.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
          val["languageCode"],
          " - ",
          val["languageName"],
          "  ",
          import_he.default.decode(val["languageAsciiSymbol"]),
          " "
        ] }, i, true, {
          fileName: "app/routes/home/profilecomplete/secondpage.tsx",
          lineNumber: 317,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 314,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setlan(false);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 328,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 313,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 312,
      columnNumber: 21
    }, this),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 335,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: async () => {
      const ids = (myobj) => {
        let res = "";
        for (let i = 0; i < myobj.length; i++) {
          if (i == myobj.length - 1) {
            res += myobj[i]["id"];
          } else {
            res += myobj[i]["id"] + ",";
          }
        }
        return res;
      };
      if (selcurrency.length == 0) {
        setError("Select the currecny.");
      } else if (selcategory.length == 0) {
        setError("Select the category.");
      } else if (sellanguages.length == 0) {
        setError("Select the languages.");
      } else if (selmarket.length == 0) {
        setError("Select the main market.");
      } else if (selorthermarket.length == 0) {
        setError("Select the other markder");
      } else {
        let req = {
          "id": userID,
          "currencyId": selcurrency[0]["id"],
          "languages": ids(sellanguages),
          "categories": ids(selcategory),
          "marketId": selmarket[0]["id"],
          "markets": ids(selorthermarket)
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
            "Accept": "*"
          }
        });
        if (data.data.status == false) {
          return setError(data.data.message);
        }
        setIndex(3);
        nextButton.current.click();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 391,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 337,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userID.toString() }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 394,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/secondpage.tsx",
        lineNumber: 395,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/secondpage.tsx",
      lineNumber: 393,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 114,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 113,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 112,
    columnNumber: 9
  }, this);
};
var secondpage_default = SecondPage;
export {
  secondpage_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/secondpage-3CODTJON.js.map
