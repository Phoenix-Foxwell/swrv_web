import {
  GoogleAuthProvider,
  auth,
  signInWithPopup
} from "/build/_shared/chunk-6FCLORA5.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-G6FD4XLU.js";
import {
  IntroNavBar
} from "/build/_shared/chunk-NJOP3MYH.js";
import "/build/_shared/chunk-LL2C2DJN.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faEye,
  faEyeSlash
} from "/build/_shared/chunk-KLMIUVT5.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/components/user/register.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var RegisterBox = (props) => {
  const navigator = useNavigate();
  const [isBrand, setBrand] = (0, import_react2.useState)(false);
  const cat = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (props.isBrand) {
      cat.current.value = "brand";
      setBrand(true);
    } else {
      cat.current.value = "inf";
      setBrand(false);
    }
  }, []);
  const [error, setError] = (0, import_react2.useState)(null);
  const [showpassone, setShowPassone] = (0, import_react2.useState)(false);
  const changePassVisabelone = () => {
    setShowPassone(!showpassone);
  };
  const [showpasstwo, setShowPasstwo] = (0, import_react2.useState)(false);
  const changePassVisabeltwo = () => {
    setShowPasstwo(!showpasstwo);
  };
  const socialRegister = async (email, pass) => {
    let req = {
      email,
      password: pass,
      "confirm-password": pass,
      isBrand: "0",
      isInfluencer: "1"
    };
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/register`,
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
    if (apidata.data.status) {
      navigator(`/extra/socialregister/${apidata.data.data.id}`);
    } else {
      setError(apidata.data.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3  md:w-4/6 lg:w-full mx-auto mb-20 mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden flex-col lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: "/images/avatar/login.png",
            alt: "err",
            className: "justify-self-end w-[250px] h-[400px]"
          },
          void 0,
          false,
          {
            fileName: "app/components/user/register.tsx",
            lineNumber: 79,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: () => {
              cat.current.value = "inf";
              setBrand(false);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                width: "w-full",
                text: "Influencer",
                background: `${isBrand ? "" : "bg-secondary"}`,
                textColor: `${isBrand ? "text-primary" : "text-white"}`,
                borderColor: `${isBrand ? "border-primary" : ""}`,
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/components/user/register.tsx",
                lineNumber: 95,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/user/register.tsx",
            lineNumber: 88,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "w-full",
            onClick: () => {
              cat.current.value = "brand";
              setBrand(true);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              CusButton,
              {
                width: "w-full",
                text: "Brand",
                textColor: `${isBrand ? "text-white" : "text-primary"}`,
                background: `${isBrand ? "bg-secondary" : ""}`,
                borderColor: `${isBrand ? "" : "border-primary"}`,
                fontwidth: "font-bold"
              },
              void 0,
              false,
              {
                fileName: "app/components/user/register.tsx",
                lineNumber: 112,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/user/register.tsx",
            lineNumber: 105,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "cat", ref: cat, type: "hidden" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Join" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg", children: [
          " ",
          isBrand ? "Brand Email" : "Email"
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            name: "email",
            type: "text",
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
            placeholder: "example@mail.com"
          },
          void 0,
          false,
          {
            fileName: "app/components/user/register.tsx",
            lineNumber: 129,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              name: "password",
              type: showpassone ? "text" : "password",
              className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full",
              placeholder: "8 character"
            },
            void 0,
            false,
            {
              fileName: "app/components/user/register.tsx",
              lineNumber: 139,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "text-gray-600 text-center px-1 rounded-md shadow-lg text-md",
              onClick: changePassVisabelone,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                FontAwesomeIcon,
                {
                  icon: showpassone ? faEye : faEyeSlash
                },
                void 0,
                false,
                {
                  fileName: "app/components/user/register.tsx",
                  lineNumber: 149,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/user/register.tsx",
              lineNumber: 145,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Confirm password" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              name: "repassword",
              type: showpasstwo ? "text" : "password",
              className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full",
              placeholder: "8 character"
            },
            void 0,
            false,
            {
              fileName: "app/components/user/register.tsx",
              lineNumber: 158,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "text-gray-600 text-center px-1 rounded-md shadow-lg text-md",
              onClick: changePassVisabeltwo,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                FontAwesomeIcon,
                {
                  icon: showpasstwo ? faEye : faEyeSlash
                },
                void 0,
                false,
                {
                  fileName: "app/components/user/register.tsx",
                  lineNumber: 168,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/user/register.tsx",
              lineNumber: 164,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this),
        !isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex content-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 178,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 177,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              onClick: async () => {
                var _a;
                const googleProvider = new GoogleAuthProvider();
                const res = await signInWithPopup(auth, googleProvider);
                const pass = ((_a = res.user.displayName) == null ? void 0 : _a.trim().split(" ").join("").toLowerCase().trim()) + "SWRV123@#";
                try {
                  await socialRegister(res.user.email, pass);
                } catch (e) {
                  setError(e.toString());
                }
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: "/images/icons/google.png",
                  alt: "error",
                  className: "w-10 h-10"
                },
                void 0,
                false,
                {
                  fileName: "app/components/user/register.tsx",
                  lineNumber: 201,
                  columnNumber: 23
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/user/register.tsx",
              lineNumber: 183,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 176,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 175,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this) : null,
        error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 212,
          columnNumber: 15
        }, this),
        props.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: props.message }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 217,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full inline black rounded-lg bg-primary shadow-lg text-center font-bold text-white text-md py-2 ", children: "Create Account" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 222,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 content-start mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "check1" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 227,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-left text-[10px] text-black font-normal", children: "I agree with Terms of use and acknowledge that my personal data is being collected and processed in accordance with Privacy policy" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 229,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 mt-4 items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "check2" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 237,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 236,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left text-[10px] text-black font-normal", children: "Also, I confirm I am of eligible age" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 239,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-8", children: [
          "I\u2019m already registered.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: " Let me Log in" }, void 0, false, {
              fileName: "app/components/user/register.tsx",
              lineNumber: 247,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 245,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 243,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block" }, void 0, false, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 252,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user/register.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/user/register.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
};

// app/routes/register.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var register = () => {
  const loaderData = useLoaderData();
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#eeeeee] min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IntroNavBar, {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      RegisterBox,
      {
        isBrand: loaderData.brand ? true : false,
        message: data == null ? void 0 : data.message
      },
      void 0,
      false,
      {
        fileName: "app/routes/register.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};
var register_default = register;
export {
  register_default as default
};
//# sourceMappingURL=/build/routes/register-X3TTFTQU.js.map
