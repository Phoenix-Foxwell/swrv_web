import {
  require_email_validator
} from "/build/_shared/chunk-Q34MRYYA.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  UploadFile
} from "/build/_shared/chunk-PDFW6BIG.js";
import {
  FontAwesomeIcon,
  faChevronRight
} from "/build/_shared/chunk-4NSQR6PB.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Form,
  NavLink,
  useActionData,
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

// app/routes/createbrand.tsx
var import_react2 = __toESM(require_react());
var EmailValidator = __toESM(require_email_validator());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var createBarnd = () => {
  const navigator = useNavigate();
  const data = useActionData();
  const nextButton = (0, import_react2.useRef)(null);
  const uidref = (0, import_react2.useRef)(null);
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const [error, setError] = (0, import_react2.useState)("");
  const [img, setImale] = (0, import_react2.useState)(null);
  let imgref = (0, import_react2.useRef)(null);
  const [imgerror, setImgerror] = (0, import_react2.useState)(null);
  const [cityerror, setCityerror] = (0, import_react2.useState)(null);
  const [citybox, setCitybox] = (0, import_react2.useState)(false);
  const [searchcity, setSearchcity] = (0, import_react2.useState)([]);
  const [selectedcity, setSelectedctiy] = (0, import_react2.useState)(null);
  const [contactnumber, setContactnumber] = (0, import_react2.useState)();
  const handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  };
  let cityref = (0, import_react2.useRef)(null);
  const getCity = async (city) => {
    const data2 = await axios_default.post(`${BaseUrl}/api/get-city`, { search: city });
    setSearchcity(data2.data.data);
  };
  const nameRef = (0, import_react2.useRef)(null);
  const codeRef = (0, import_react2.useRef)(null);
  const addressRef = (0, import_react2.useRef)(null);
  const websiteRef = (0, import_react2.useRef)(null);
  const emailRef = (0, import_react2.useRef)(null);
  const binfoRef = (0, import_react2.useRef)(null);
  const cinfoRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    uidref.current.value = userId;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${citybox ? "grid" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-md w-80 rounded-lg p-4 overflow-y-scroll", children: searchcity.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-96", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal  my-4", children: "No city found with this name" }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "px-5 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 font-normal text-md my-4",
              onClick: () => {
                setCitybox(false);
              },
              children: "Close"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 82,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-72 overflow-y-scroll no-scrollbar", children: searchcity.map((value, index) => {
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
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 96,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 95,
            columnNumber: 19
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 72,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full pt-4 px-4 bg-background pb-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full rounded-lg bg-white grid place-items-center shadow-lg py-2 sm:w-96 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: "cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./images/swrvlogo.png", className: "w-28 lg:w-32" }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-full shadow-xl p-4 mt-4 rounded-lg mx-auto sm:w-96", children: [
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
                setImale(value.target.files[0]);
              } else {
                setImgerror("Image file size must be less then 4 mb");
              }
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 122,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex w-full items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center w-40 mr-4 h-40 object-cover", children: img == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: "/images/icons/gallery.png",
              alt: "error",
              className: "w-40 object-cover inline-block"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 142,
              columnNumber: 17
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: URL.createObjectURL(img),
              alt: "error",
              className: "w-20 h-20 inline-block object-cover rounded-md"
            },
            void 0,
            false,
            {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 148,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "Drop profile photo here." }, void 0, false, {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "The image should either be jpg jped or png format and be a maximum size of 4 MB" }, void 0, false, {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 157,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
              imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
                fileName: "app/routes/createbrand.tsx",
                lineNumber: 165,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  onClick: () => {
                    var _a;
                    (_a = imgref.current) == null ? void 0 : _a.click();
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    CusButton,
                    {
                      text: "Upload",
                      textColor: "text-white",
                      width: "w-full",
                      background: "bg-gray-400"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/createbrand.tsx",
                      lineNumber: 174,
                      columnNumber: 19
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/routes/createbrand.tsx",
                  lineNumber: 169,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 161,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 155,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand Name" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: nameRef,
            className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 187,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand code" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: codeRef,
            className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 194,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand website" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: websiteRef,
            className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 201,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand address" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: addressRef,
            className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 208,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand city" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 212,
          columnNumber: 11
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
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 217,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 216,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer",
              onClick: () => {
                var _a, _b, _c, _d, _e;
                if (((_a = cityref.current) == null ? void 0 : _a.value) == null || ((_b = cityref.current) == null ? void 0 : _b.value) == void 0 || ((_c = cityref.current) == null ? void 0 : _c.value) == "") {
                  setCityerror("Enter the city name");
                } else {
                  setCitybox(true);
                  setCityerror(null);
                  getCity((_e = (_d = cityref.current) == null ? void 0 : _d.value) != null ? _e : "");
                }
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faChevronRight }, void 0, false, {
                fileName: "app/routes/createbrand.tsx",
                lineNumber: 238,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 222,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 215,
          columnNumber: 11
        }, this),
        cityerror == "" || cityerror == null || cityerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: cityerror }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this),
        selectedcity == "" || selectedcity == null || selectedcity == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4", children: [
          selectedcity["name"],
          " - ",
          selectedcity["code"]
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Support Contact" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-black font-normal text-md mr-4", children: selectedcity == null ? 0 : selectedcity["country"]["isd"] }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 259,
            columnNumber: 13
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
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 262,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 258,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Support Email" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 269,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: emailRef,
            className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 272,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand info" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 276,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "textarea",
          {
            ref: binfoRef,
            className: "p-2 w-full h-32 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 279,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Company info" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 283,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "textarea",
          {
            ref: cinfoRef,
            className: "p-2 w-full h-32 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 286,
            columnNumber: 11
          },
          this
        ),
        error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 291,
          columnNumber: 13
        }, this),
        data == "" || data == null || data == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: data.message }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 297,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            onClick: async () => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
              if (img == null || img == void 0) {
                setError("Select the image");
              } else if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = nameRef.current) == null ? void 0 : _c.value) == "") {
                setError("Fill the Brand name");
              } else if (((_d = codeRef.current) == null ? void 0 : _d.value) == null || ((_e = codeRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = codeRef.current) == null ? void 0 : _f.value) == "") {
                setError("Fill the Brand code");
              } else if (((_g = websiteRef.current) == null ? void 0 : _g.value) == null || ((_h = websiteRef.current) == null ? void 0 : _h.value) == void 0 || ((_i = websiteRef.current) == null ? void 0 : _i.value) == "") {
                setError("Fill the Brand website");
              } else if (((_j = addressRef.current) == null ? void 0 : _j.value) == null || ((_k = addressRef.current) == null ? void 0 : _k.value) == void 0 || ((_l = addressRef.current) == null ? void 0 : _l.value) == "") {
                setError("Fill the Brand address");
              } else if (selectedcity == null) {
                setError("Fill the city");
              } else if (contactnumber == null || contactnumber == void 0 || contactnumber == 0) {
                setError("Fill the contact number");
              } else if (((_m = emailRef.current) == null ? void 0 : _m.value) == null || ((_n = emailRef.current) == null ? void 0 : _n.value) == void 0 || ((_o = emailRef.current) == null ? void 0 : _o.value) == "") {
                setError("Fill the Brand info");
              } else if (!EmailValidator.validate((_p = emailRef.current) == null ? void 0 : _p.value)) {
                setError("Enter valid email");
              } else if (((_q = binfoRef.current) == null ? void 0 : _q.value) == null || ((_r = binfoRef.current) == null ? void 0 : _r.value) == void 0 || ((_s = binfoRef.current) == null ? void 0 : _s.value) == "") {
                setError("Fill the Brand info");
              } else if (((_t = cinfoRef.current) == null ? void 0 : _t.value) == null || ((_u = cinfoRef.current) == null ? void 0 : _u.value) == void 0 || ((_v = cinfoRef.current) == null ? void 0 : _v.value) == "") {
                setError("Fill the Campany info");
              } else {
                const imageurl = await UploadFile(img);
                if (imageurl.status) {
                  let req = {
                    userId,
                    brandLogoUrl: imageurl.data,
                    brandName: (_w = nameRef.current) == null ? void 0 : _w.value,
                    brandCode: (_x = codeRef.current) == null ? void 0 : _x.value,
                    brandWebUrl: (_y = websiteRef.current) == null ? void 0 : _y.value,
                    brandFullRegisteredAddress: (_z = addressRef.current) == null ? void 0 : _z.value,
                    brandSupportEmail: (_A = emailRef.current) == null ? void 0 : _A.value,
                    brandSupportContact: contactnumber,
                    brandBioInfo: (_B = binfoRef.current) == null ? void 0 : _B.value,
                    comapnyBio: (_C = cinfoRef.current) == null ? void 0 : _C.value,
                    cityId: selectedcity["id"]
                  };
                  const data2 = await axios_default({
                    method: "post",
                    url: `${BaseUrl}/api/add-brand`,
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
                  if (data2.data.status == false) {
                    return setError(data2.data.message);
                  }
                  nextButton.current.click();
                } else {
                  setError(imageurl.data);
                }
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                text: "Create Brand",
                background: "bg-secondary",
                textColor: "text-white",
                width: "w-full"
              },
              void 0,
              false,
              {
                fileName: "app/routes/createbrand.tsx",
                lineNumber: 405,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 301,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/createbrand.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", ref: uidref }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 416,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 417,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/createbrand.tsx",
      lineNumber: 415,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/createbrand.tsx",
      lineNumber: 414,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/createbrand.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
};
var createbrand_default = createBarnd;
export {
  createbrand_default as default
};
//# sourceMappingURL=/build/routes/createbrand-K5AOQXCJ.js.map
