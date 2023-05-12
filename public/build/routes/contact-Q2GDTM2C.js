import {
  DownloadApp
} from "/build/_shared/chunk-MCMH3YQM.js";
import {
  CusButton
} from "/build/_shared/chunk-HT3EAJMF.js";
import {
  MyNavBar
} from "/build/_shared/chunk-YSY4TTMO.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-AHXNUQJN.js";
import {
  Footer
} from "/build/_shared/chunk-SZOPYLGR.js";
import "/build/_shared/chunk-VS62I6XO.js";
import "/build/_shared/chunk-MWIY3DQR.js";
import "/build/_shared/chunk-XG566DYW.js";
import "/build/_shared/chunk-55KEKCTE.js";
import "/build/_shared/chunk-LXJMA5PD.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-KG56QLKG.js";

// app/components/contact/contact.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ContactPage = () => {
  const nameRef = (0, import_react.useRef)(null);
  const [error, setError] = (0, import_react.useState)(null);
  const [sus, setSus] = (0, import_react.useState)(null);
  const messageRef = (0, import_react.useRef)(null);
  const [contactnumber, setContactnumber] = (0, import_react.useState)();
  const [isBrand, setIsBrand] = (0, import_react.useState)(false);
  const handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  };
  const submit = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = nameRef.current) == null ? void 0 : _c.value) == "") {
      setError("Fill the name");
    } else if (contactnumber == null || contactnumber == void 0 || contactnumber == 0) {
      setError("Fill the contact number");
    } else if (contactnumber.toString().length != 10) {
      setError("Enter a 10 digit valid contact number");
    } else if (((_d = messageRef.current) == null ? void 0 : _d.value) == null || ((_e = messageRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = messageRef.current) == null ? void 0 : _f.value) == "") {
      setError("Fill the message.");
    } else {
      const req = {
        name: (_g = nameRef.current) == null ? void 0 : _g.value,
        number: contactnumber,
        isBrand: isBrand ? 1 : 0,
        message: (_h = messageRef.current) == null ? void 0 : _h.value
      };
      const data = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/add-contact`,
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
      } else {
        setError(null);
        setSus("Message sent!");
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-6 sm:px-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EFEFEF] rounded-2xl sm:p-0 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10 pt-20 pb-40", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-bold text-primary flex", children: "Love to hear from you" }, void 0, false, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl  font-bold text-primary flex", children: [
        "Get in touch ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./images/icons/hand.png", alt: "error" }, void 0, false, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 85,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-col lg:flex-row items-center w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "28",
              height: "28",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "path",
                {
                  fill: "currentColor",
                  d: "M12 4c2.2 0 4 1.8 4 4c0 2.1-2.1 5.5-4 7.9c-1.9-2.5-4-5.8-4-7.9c0-2.2 1.8-4 4-4m0-2C8.7 2 6 4.7 6 8c0 4.5 6 11 6 11s6-6.6 6-11c0-3.3-2.7-6-6-6m0 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m8 13c0 2.2-3.6 4-8 4s-8-1.8-8-4c0-1.3 1.2-2.4 3.1-3.2l.6.9c-1 .5-1.7 1.1-1.7 1.8c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5c0-.7-.7-1.3-1.8-1.8l.6-.9c2 .8 3.2 1.9 3.2 3.2Z"
                },
                void 0,
                false,
                {
                  fileName: "app/components/contact/contact.tsx",
                  lineNumber: 95,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 89,
              columnNumber: 17
            },
            this
          ),
          " ",
          "102 street 2712 Don"
        ] }, void 0, true, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "28",
              height: "28",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "path",
                {
                  fill: "currentColor",
                  d: "M19 12q0-2.925-2.038-4.963T12 5V3q1.875 0 3.513.713t2.85 1.924q1.212 1.213 1.925 2.85T21 12h-2Zm-4 0q0-1.25-.875-2.125T12 9V7q2.075 0 3.538 1.463T17 12h-2Zm4.95 9q-3.225 0-6.288-1.438t-5.425-3.8q-2.362-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L6.975 10.9q1.05 1.8 2.638 3.375T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9Zm8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475l-1.675 1.675ZM6.025 9Zm8.95 8.95Z"
                },
                void 0,
                false,
                {
                  fileName: "app/components/contact/contact.tsx",
                  lineNumber: 109,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 103,
              columnNumber: 17
            },
            this
          ),
          " ",
          "102 street 2712 Don"
        ] }, void 0, true, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "path",
                {
                  fill: "currentColor",
                  d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                },
                void 0,
                false,
                {
                  fileName: "app/components/contact/contact.tsx",
                  lineNumber: 123,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 117,
              columnNumber: 17
            },
            this
          ),
          " ",
          "102 street 2712 Don"
        ] }, void 0, true, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-2xl my-10 shadow-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: () => setIsBrand(true),
              className: `w-40 rounded-md font-semibold text-lg border-2 border-primary py-1 ${isBrand ? "text-white bg-primary" : "text-primary bg-white"}`,
              children: "I'm a brand"
            },
            void 0,
            false,
            {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 133,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
            fileName: "app/components/contact/contact.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: () => setIsBrand(false),
              className: `w-40 rounded-md font-semibold text-lg border-secondary border-2 py-2 ${isBrand ? "text-secondary bg-white" : "text-white bg-secondary"}`,
              children: "I'm a Influencer"
            },
            void 0,
            false,
            {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 142,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Your Name" }, void 0, false, {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 166,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 py-1 px-2 border-2 border-gray-300 focus:border-gray-300 rounded-md h-12 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "svg",
                {
                  className: "opacity-50",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 14 14",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "g",
                    {
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "7", cy: "3.75", r: "3.25" }, void 0, false, {
                          fileName: "app/components/contact/contact.tsx",
                          lineNumber: 183,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M13.18 13.5a6.49 6.49 0 0 0-12.36 0Z" }, void 0, false, {
                          fileName: "app/components/contact/contact.tsx",
                          lineNumber: 184,
                          columnNumber: 25
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/contact/contact.tsx",
                      lineNumber: 177,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/contact/contact.tsx",
                  lineNumber: 170,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  ref: nameRef,
                  type: "text",
                  className: "outline-none w-full",
                  placeholder: "Enter your name"
                },
                void 0,
                false,
                {
                  fileName: "app/components/contact/contact.tsx",
                  lineNumber: 187,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/contact/contact.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
            fileName: "app/components/contact/contact.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Phone" }, void 0, false, {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 197,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 py-1 px-2 border-2 border-gray-300 focus:border-gray-300 rounded-md h-12 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "svg",
                {
                  className: "opacity-50",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "28",
                  height: "28",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "path",
                      {
                        fill: "currentColor",
                        d: "M16.73 2.065H7.27a2.386 2.386 0 0 0-2.24 2.5v14.87a2.386 2.386 0 0 0 2.24 2.5h9.46a2.386 2.386 0 0 0 2.24-2.5V4.565a2.386 2.386 0 0 0-2.24-2.5Zm1.24 17.37a1.391 1.391 0 0 1-1.24 1.5H7.27a1.391 1.391 0 0 1-1.24-1.5V4.565a1.391 1.391 0 0 1 1.24-1.5H8.8v.51a1 1 0 0 0 1 1h4.4a1 1 0 0 0 1-1v-.51h1.53a1.391 1.391 0 0 1 1.24 1.5Z"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/contact/contact.tsx",
                        lineNumber: 208,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "path",
                      {
                        fill: "currentColor",
                        d: "M10 18.934h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1Z"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/contact/contact.tsx",
                        lineNumber: 212,
                        columnNumber: 23
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/contact/contact.tsx",
                  lineNumber: 201,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  onChange: handelcontent,
                  value: contactnumber,
                  type: "text",
                  maxLength: 10,
                  className: "outline-none w-full",
                  placeholder: "Enter your phone number"
                },
                void 0,
                false,
                {
                  fileName: "app/components/contact/contact.tsx",
                  lineNumber: 217,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/contact/contact.tsx",
              lineNumber: 200,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/contact/contact.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Message" }, void 0, false, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "textarea",
          {
            ref: messageRef,
            className: "p-4 w-full h-60 outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md resize-none",
            placeholder: "Your message"
          },
          void 0,
          false,
          {
            fileName: "app/components/contact/contact.tsx",
            lineNumber: 231,
            columnNumber: 15
          },
          this
        ),
        error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 237,
          columnNumber: 17
        }, this),
        sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 242,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: submit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          CusButton,
          {
            text: "Send Message",
            background: "bg-primary"
          },
          void 0,
          false,
          {
            fileName: "app/components/contact/contact.tsx",
            lineNumber: 247,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 246,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto -translate-y-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DownloadApp, {}, void 0, false, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 256,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/contact/contact.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/contact/contact.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
};
var contact_default = ContactPage;

// app/routes/contact.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var contact = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MyNavBar, {}, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(contact_default, {}, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var contact_default2 = contact;
export {
  contact_default2 as default
};
//# sourceMappingURL=/build/routes/contact-Q2GDTM2C.js.map
