import {
  firstinput_default
} from "/build/_shared/chunk-RAFJ3YWD.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import "/build/_shared/chunk-WML2SMV7.js";
import {
  Form,
  useLoaderData
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

// app/routes/home/profilecomplete/thirdpage.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ThirdPage = () => {
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const platform = userdata.paltform;
  const [selPlatform, setSelPlatfome] = (0, import_react2.useState)([]);
  const [addedPlatfrom, setAddPlatform] = (0, import_react2.useState)([]);
  const [error, setError] = (0, import_react2.useState)(null);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const setIndex = firstinput_default((state) => state.setIndex);
  const nextButton = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Channels" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex content-center items-center gap-2 flex-col md:flex-row mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:flex gap-2 mt-2 grid place-items-center grid-cols-4", children: platform.map((val, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-12 h-12 p-2 rounded-lg ${selPlatform.includes(val) ? "bg-white shadow-xl " : "bg-gray-200"} `, onClick: () => {
          setSelPlatfome([val]);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: platform[i]["platformLogoUrl"], alt: "error", className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
          lineNumber: 59,
          columnNumber: 37
        }, this) }, i, false, {
          fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
          lineNumber: 56,
          columnNumber: 33
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow hidden md:block" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setError(null);
        setSus(null);
        if (selPlatform.length == 0) {
          return setError("Select any platform first.");
        }
        if (addedPlatfrom.length > 0) {
          if (addedPlatfrom[addedPlatfrom.length - 1]["status"] == true) {
            setAddPlatform((val) => [...val, { val: selPlatform[0], status: false, text: "" }]);
            setSelPlatfome([]);
          } else {
            return setError("Complete you last handle first.");
          }
        }
        if (addedPlatfrom.length == 0) {
          setAddPlatform((val) => [...val, { val: selPlatform[0], status: false, text: "" }]);
          setSelPlatfome([]);
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Add new Channel", textColor: "text-white", width: "w-36", background: "bg-primary", fontwidth: "font-normal", textSize: "text-md" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 85,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: addedPlatfrom.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2 flex ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `${val["val"]["platformLogoUrl"]}`, alt: "logo", className: "w-10" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
            lineNumber: 95,
            columnNumber: 50
          }, this) }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
            lineNumber: 95,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { disabled: val["status"], type: "text", value: val["text"], onChange: (e) => {
            let adddata = addedPlatfrom.filter((data) => data != val);
            setAddPlatform([...adddata, { val: val["val"], status: false, text: e.target.value }]);
          }, className: "mx-3 bg-transparent  outline-none border-none focus:border-gray-300 rounded-md w-full" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
            lineNumber: 96,
            columnNumber: 45
          }, this),
          val["status"] ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white bg-green-500 font-medium text-md text-center rounded-md grid place-items-center px-4 cursor-pointer", onClick: async () => {
            if (val["text"] == null || val["text"] == void 0 || val["text"] == "") {
              setSus(null);
              setError("Fill the handle name");
            } else if (val["text"].indexOf(" ") >= 0) {
              setSus(null);
              setError("Hashtag cannot contains space");
            } else {
              let req = {
                "userId": userId,
                "platformId": val["val"]["id"],
                "handleName": val["text"]
              };
              const data = await axios_default({
                method: "post",
                url: `${BaseUrl}/api/add-handle`,
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
                setSus(null);
                return setError(data.data.message);
              } else {
                setError(null);
                setSus("Successfully added the user handle");
                let adddata = addedPlatfrom.filter((data2) => data2 != val);
                setAddPlatform([...adddata, { val: val["val"], status: true, text: val["text"] }]);
              }
            }
          }, children: "Done" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
            lineNumber: 101,
            columnNumber: 72
          }, this)
        ] }, index, true, {
          fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
          lineNumber: 94,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 90,
        columnNumber: 25
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 157,
        columnNumber: 29
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 160,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        if (addedPlatfrom.length == 0) {
          setSus(null);
          setError("Click on Add New Channel for adding new channel");
        } else {
          if (addedPlatfrom[0]["status"]) {
            setIndex(4);
            nextButton.current.click();
          } else {
            setSus(null);
            setError("Click on Add New Channel for adding new channel");
          }
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 177,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 162,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userId.toString() }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
          lineNumber: 180,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
          lineNumber: 181,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
        lineNumber: 179,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 89,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 88,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this);
};
var thirdpage_default = ThirdPage;
export {
  thirdpage_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/thirdpage-BC5XDTPC.js.map
