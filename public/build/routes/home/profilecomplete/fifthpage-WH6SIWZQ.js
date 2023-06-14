import {
  firstinput_default
} from "/build/_shared/chunk-RAFJ3YWD.js";
import {
  require_email_validator
} from "/build/_shared/chunk-Q34MRYYA.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4IGPHUYY.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-YSUO5XC3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-QUEIQGSW.js";

// app/routes/home/profilecomplete/fifthpage.tsx
var import_react2 = __toESM(require_react());
var EmailValidator = __toESM(require_email_validator());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ThirdPage = () => {
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const brandId = userdata.user.brand.id;
  const [error, setError] = (0, import_react2.useState)(null);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const setIndex = firstinput_default((state) => state.setIndex);
  const nextButton = (0, import_react2.useRef)(null);
  const nameRef = (0, import_react2.useRef)(null);
  const emailRef = (0, import_react2.useRef)(null);
  const [contactnumber, setContactnumber] = (0, import_react2.useState)();
  const handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  };
  const [invitedUser, setInvitedUser] = (0, import_react2.useState)([]);
  const [isSending, setIsSending] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Invite users" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
          "Username  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 60,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: nameRef,
            type: "text",
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 62,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
          "Email  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 68,
            columnNumber: 24
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: emailRef,
            type: "text",
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 70,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
          "Contact number  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 76,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            onChange: handelcontent,
            value: contactnumber,
            type: "text",
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 78,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        isSending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "text-white rounded-lg bg-secondary py-1 px-4 font-semibold text-lg",
            children: "Sending..."
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 89,
            columnNumber: 17
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            onClick: async () => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
              setIsSending(true);
              setError(null);
              if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = nameRef.current) == null ? void 0 : _c.value) == "") {
                setError("Enter the user ");
              } else if (((_d = emailRef.current) == null ? void 0 : _d.value) == null || ((_e = emailRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = emailRef.current) == null ? void 0 : _f.value) == "") {
                setError("Fill the Brand info");
              } else if (!EmailValidator.validate((_g = emailRef.current) == null ? void 0 : _g.value)) {
                setError("Enter valid email");
              } else if (contactnumber == null || contactnumber == void 0 || contactnumber == 0) {
                setError("Fill the contact number");
              } else {
                let req = {
                  userId,
                  brandId,
                  name: (_h = nameRef.current) == null ? void 0 : _h.value,
                  email: (_i = emailRef.current) == null ? void 0 : _i.value,
                  contact: contactnumber
                };
                const data = await axios_default({
                  method: "post",
                  url: `${BaseUrl}/api/send-brand-invite`,
                  data: req
                });
                if (data.data.status == false) {
                  return setError(data.data.message);
                } else {
                  let user = {
                    name: (_j = nameRef.current) == null ? void 0 : _j.value,
                    email: (_k = emailRef.current) == null ? void 0 : _k.value,
                    number: contactnumber.toString()
                  };
                  setInvitedUser([...invitedUser, user]);
                  setError(null);
                  setContactnumber(0);
                  nameRef.current.value = "";
                  emailRef.current.value = "";
                  setIsSending(false);
                  return setSus("User invited successfully");
                }
              }
            },
            className: "text-white rounded-lg bg-secondary py-1 px-4 font-semibold text-lg",
            children: "Invite"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 95,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 163,
        columnNumber: 15
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 168,
        columnNumber: 15
      }, this),
      invitedUser.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "my-4 bg-gray-200 shadow-md rounded-md py-1 px-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-900 text-md", children: [
              index + 1,
              ": ",
              val.name,
              " - ",
              val.email,
              " "
            ] }, void 0, true, {
              fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
              lineNumber: 178,
              columnNumber: 19
            }, this)
          },
          index,
          false,
          {
            fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
            lineNumber: 174,
            columnNumber: 17
          },
          this
        );
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          onClick: () => {
            if (invitedUser.length == 0) {
              setSus(null);
              setError("Invite at least one user");
            } else {
              setIndex(6);
              nextButton.current.click();
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CusButton,
            {
              text: "Next",
              textColor: "text-white",
              width: "w-full",
              background: "bg-primary",
              fontwidth: "font-bold"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
              lineNumber: 195,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 184,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userId.toString() }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 204,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 205,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 203,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
};
var fifthpage_default = ThirdPage;
export {
  fifthpage_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/fifthpage-WH6SIWZQ.js.map
