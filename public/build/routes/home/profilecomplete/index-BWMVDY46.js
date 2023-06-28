import {
  firstinput_default
} from "/build/_shared/chunk-RAFJ3YWD.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  UploadFile
} from "/build/_shared/chunk-PDFW6BIG.js";
import "/build/_shared/chunk-WML2SMV7.js";
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

// app/routes/home/profilecomplete/index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UserInputBoxOne = () => {
  const user = useLoaderData();
  const useremail = user.user.email;
  const userID = user.user.id;
  const setIndex = firstinput_default((state) => state.setIndex);
  const navigator = useNavigate();
  const [img, setImg] = (0, import_react2.useState)(null);
  let imgref = (0, import_react2.useRef)(null);
  const [imgerror, setImgerror] = (0, import_react2.useState)(null);
  const [error, setError] = (0, import_react2.useState)(null);
  const emailRef = (0, import_react2.useRef)(null);
  const usernameRef = (0, import_react2.useRef)(null);
  const nicknameRef = (0, import_react2.useRef)(null);
  const datepicker = (0, import_react2.useRef)(null);
  const bioRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    emailRef.current.value = useremail;
    usernameRef.current.value = useremail;
  }, []);
  const nextButton = (0, import_react2.useRef)(null);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 15);
  const maxDateString = maxDate.toISOString().split("T")[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Tell us about yourself" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
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
                setImg(value.target.files[0]);
              } else {
                setImgerror("Image file size must be less then 4 mb");
              }
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 63,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex md:flex-col flex-row w-full md:w-56", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow sm:w-full", children: img == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: "/images/icons/gallery.png",
              alt: "error",
              className: "w-40 sm:w-full object-cover inline-block"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 83,
              columnNumber: 19
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: URL.createObjectURL(img),
              alt: "error",
              className: "w-40 sm:w-full inline-block object-cover rounded-md"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 89,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-52 sm:w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "Drop profile photo here." }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 97,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "The image should either be jpg jped or png format and be a maximum size of 5 MB" }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 105,
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
                    background: "bg-primary"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/home/profilecomplete/index.tsx",
                    lineNumber: 114,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/home/profilecomplete/index.tsx",
                lineNumber: 109,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: [
          "Email ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 126,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: emailRef,
            disabled: true,
            type: "text",
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 128,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
          "Username ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 135,
            columnNumber: 24
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: usernameRef,
            type: "text",
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 137,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
          "Nickname ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 143,
            columnNumber: 24
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: nicknameRef,
            type: "text",
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 145,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
          "Date of birth ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 151,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "date",
            ref: datepicker,
            className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",
            max: maxDateString
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 153,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: [
          "Bio ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500 text-2xl font-semibold", children: "*" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 160,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "textarea",
          {
            ref: bioRef,
            className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 162,
            columnNumber: 13
          },
          this
        ),
        error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            onClick: async () => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
              if (img == null) {
                setError("Please select the image");
              } else if (((_a = emailRef.current) == null ? void 0 : _a.value) == null || ((_b = emailRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = emailRef.current) == null ? void 0 : _c.value) == "") {
                setError("Enter the email");
              } else if (((_d = usernameRef.current) == null ? void 0 : _d.value) == null || ((_e = usernameRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = usernameRef.current) == null ? void 0 : _f.value) == "") {
                setError("Enter the username");
              } else if (((_g = nicknameRef.current) == null ? void 0 : _g.value) == null || ((_h = nicknameRef.current) == null ? void 0 : _h.value) == void 0 || ((_i = nicknameRef.current) == null ? void 0 : _i.value) == "") {
                setError("Enter the nickname");
              } else if (((_j = datepicker.current) == null ? void 0 : _j.value) == null || ((_k = datepicker.current) == null ? void 0 : _k.value) == void 0 || ((_l = datepicker.current) == null ? void 0 : _l.value) == "") {
                setError("Enter the date of birth");
              } else if (((_m = bioRef.current) == null ? void 0 : _m.value) == null || ((_n = bioRef.current) == null ? void 0 : _n.value) == void 0 || ((_o = bioRef.current) == null ? void 0 : _o.value) == "") {
                setError("Enter the bio");
              } else {
                let avatar = await UploadFile(img);
                if (avatar.status) {
                  let req = {
                    id: userID,
                    userName: (_p = usernameRef.current) == null ? void 0 : _p.value,
                    userKnownAs: (_q = nicknameRef.current) == null ? void 0 : _q.value,
                    userBioInfo: (_r = bioRef.current) == null ? void 0 : _r.value,
                    userDOB: (_s = datepicker.current) == null ? void 0 : _s.value,
                    userPicUrl: avatar.data
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
                  setIndex(2);
                  nextButton.current.click();
                } else {
                  setError(avatar.data);
                }
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
                fileName: "app/routes/home/profilecomplete/index.tsx",
                lineNumber: 241,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 171,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userID.toString() }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 250,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 251,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/index.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete/index.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
};
var profilecomplete_default = UserInputBoxOne;
export {
  profilecomplete_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/index-BWMVDY46.js.map
