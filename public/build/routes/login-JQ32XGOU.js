import {
  GoogleAuthProvider,
  auth,
  signInWithPopup
} from "/build/_shared/chunk-IZVZA2LJ.js";
import {
  require_email_validator
} from "/build/_shared/chunk-Q34MRYYA.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  IntroNavBar
} from "/build/_shared/chunk-LH6OWQHU.js";
import "/build/_shared/chunk-333JUQ2I.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faEye,
  faEyeSlash,
  faXmark
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Form,
  Link,
  useActionData,
  useNavigate
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  BaseUrl
} from "/build/_shared/chunk-6KUPMBEH.js";
import {
  axios_default
} from "/build/_shared/chunk-MMEUTQTO.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/components/home/footer/mainfooter.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MainFooter = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex py-6 px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-center content-center items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "About" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 9,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 8,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tos", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 12,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 11,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/pp", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 15,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Cookie policy" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 18,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "FAQ" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 21,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 20,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/footer/mainfooter.tsx",
    lineNumber: 7,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/home/footer/mainfooter.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/footer/mainfooter.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
};

// app/components/user/login.tsx
var import_react3 = __toESM(require_react());
var EmailValidator = __toESM(require_email_validator());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var LoginBox = (props) => {
  const navigator = useNavigate();
  const [showpass, setShowPass] = (0, import_react3.useState)(false);
  const changePassVisabel = () => {
    setShowPass(!showpass);
  };
  const [error, setError] = (0, import_react3.useState)(null);
  const socialLogin = async (email, pass) => {
    const apidata = await axios_default.post(`${BaseUrl}/api/login`, {
      email,
      password: pass
    });
    if (apidata.data.status) {
      navigator(`/extra/sociallogin/${apidata.data.data.id}`);
    } else {
      setError(apidata.data.message);
    }
  };
  const emailRef = (0, import_react3.useRef)(null);
  const [emailError, setEmailError] = (0, import_react3.useState)(null);
  const [forgetPasswordBox, setForgetPasswordBox] = (0, import_react3.useState)(false);
  const forgetPassword = async () => {
    var _a, _b, _c, _d, _e;
    if (((_a = emailRef.current) == null ? void 0 : _a.value) == null || ((_b = emailRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = emailRef.current) == null ? void 0 : _c.value) == "") {
      setEmailError("Fill the Brand info");
    } else if (!EmailValidator.validate((_d = emailRef.current) == null ? void 0 : _d.value)) {
      setEmailError("Enter valid email");
    } else {
      const apidata = await axios_default.post(`${BaseUrl}/api/send-forgot-password`, {
        user: (_e = emailRef.current) == null ? void 0 : _e.value
      });
      if (!apidata.data.status)
        return setEmailError(apidata.data.message);
      return setForgetPasswordBox(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: `fixed top-0 left-0 bg-gray-600 bg-opacity-20 h-screen w-full grid place-items-center shadow-xl ${forgetPasswordBox ? "" : "hidden"}`,
        style: { zIndex: 100 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg p-8 w-96", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setForgetPasswordBox(false);
                },
                children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    FontAwesomeIcon,
                    {
                      className: "text-black text-2xl font-bold",
                      icon: faXmark
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/user/login.tsx",
                      lineNumber: 70,
                      columnNumber: 15
                    },
                    this
                  ),
                  " "
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/user/login.tsx",
                lineNumber: 64,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black font-bold text-lg mt-4 text-center my-4", children: "Forget password" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 76,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "input",
            {
              ref: emailRef,
              type: "email",
              className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
              placeholder: "example@mail.com"
            },
            void 0,
            false,
            {
              fileName: "app/components/user/login.tsx",
              lineNumber: 79,
              columnNumber: 11
            },
            this
          ),
          emailError == "" || emailError == null || emailError == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: emailError }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: forgetPassword, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            CusButton,
            {
              text: "Send",
              textColor: "text-white",
              background: "bg-primary",
              fontwidth: "font-bold",
              width: "w-full"
            },
            void 0,
            false,
            {
              fileName: "app/components/user/login.tsx",
              lineNumber: 93,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/user/login.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " text-center text-[180px] -translate-y-4 font-black text-stroke absolute top-0 w-full md:-translate-y-20 md:text-[180px] text-[#eeeeee]", children: "Welcome" }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3 md:w-4/6 lg:w-full mx-auto mb-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:flex" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10 relative mt-28", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
          props.message && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: props.message }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Login" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "input",
            {
              name: "email",
              type: "email",
              className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
              placeholder: "example@mail.com"
            },
            void 0,
            false,
            {
              fileName: "app/components/user/login.tsx",
              lineNumber: 120,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                name: "password",
                type: showpass ? "text" : "password",
                className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full",
                placeholder: "8 character"
              },
              void 0,
              false,
              {
                fileName: "app/components/user/login.tsx",
                lineNumber: 130,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "text-gray-600 text-center px-1 text-md cursor-pointer",
                onClick: changePassVisabel,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  FontAwesomeIcon,
                  {
                    icon: showpass ? faEye : faEyeSlash
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/user/login.tsx",
                    lineNumber: 140,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/user/login.tsx",
                lineNumber: 136,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex content-center gap-4" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 152,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 items-center mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "w-full inline black rounded-lg bg-secondary shadow-lg text-center font-semibold text-white text-xl py-2 px-8", children: "Login" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 159,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 163,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                onClick: async () => {
                  var _a;
                  const googleProvider = new GoogleAuthProvider();
                  const res = await signInWithPopup(auth, googleProvider);
                  const pass = ((_a = res.user.displayName) == null ? void 0 : _a.trim().split(" ").join("").toLowerCase().trim()) + "SWRV123@#";
                  try {
                    await socialLogin(res.user.email, pass);
                  } catch (e) {
                    setError(e.toString());
                  }
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: "/images/icons/google.png",
                    alt: "error",
                    className: "w-10 h-10 cursor-pointer"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/user/login.tsx",
                    lineNumber: 185,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/user/login.tsx",
                lineNumber: 167,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 157,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "checkbox" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 193,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mx-2 text-black text-left font-normal text-lg", children: "Keep me logged in" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 194,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-black text-left font-normal text-lg gap-x-4 flex flex-wrap mt-4  mb-10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "whitespace-nowrap", children: "CAN'T LOG IN?" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 198,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "p",
              {
                onClick: () => {
                  setForgetPasswordBox(true);
                },
                className: "font-bold cursor-pointer whitespace-nowrap",
                children: "RESTORE PASSWORD"
              },
              void 0,
              false,
              {
                fileName: "app/components/user/login.tsx",
                lineNumber: 201,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-bold text-sm mt-6", children: "Don't have an account?" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/register", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            CusButton,
            {
              text: "Join",
              textColor: "text-white",
              background: "bg-primary",
              fontwidth: "font-bold",
              width: "w-32"
            },
            void 0,
            false,
            {
              fileName: "app/components/user/login.tsx",
              lineNumber: 216,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:block" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user/login.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
};

// app/routes/login.tsx
var EmailValidator2 = __toESM(require_email_validator());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var login = () => {
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col min-h-screen bg-[#eeeeee]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IntroNavBar, {}, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LoginBox, { message: data == null ? void 0 : data.message }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainFooter, {}, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};
var login_default = login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/login-JQ32XGOU.js.map
