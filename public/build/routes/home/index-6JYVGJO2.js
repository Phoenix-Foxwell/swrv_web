import {
  BrandCard,
  InfluencerSearch
} from "/build/_shared/chunk-QZXTFU6B.js";
import "/build/_shared/chunk-6RT7Q4K3.js";
import {
  CampaginCard
} from "/build/_shared/chunk-XVO7H6KS.js";
import "/build/_shared/chunk-2QADXOD2.js";
import "/build/_shared/chunk-IUMXW2I4.js";
import {
  CusButton
} from "/build/_shared/chunk-RSD5VZ6D.js";
import {
  getCampaignType
} from "/build/_shared/chunk-PDFW6BIG.js";
import {
  create
} from "/build/_shared/chunk-WML2SMV7.js";
import {
  FontAwesomeIcon,
  faHeart,
  faIdBadge,
  faStar,
  faXmark
} from "/build/_shared/chunk-UBTZ3VBL.js";
import "/build/_shared/chunk-FAKKKSA7.js";
import {
  Link,
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

// app/routes/home/index.tsx
var import_react3 = __toESM(require_react());

// app/state/home/profilecompletestat.ts
var ProfileComleteStore = create()((set) => ({
  isOpen: true,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var profilecompletestat_default = ProfileComleteStore;

// app/components/utils/topinfluencercard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TopInfluencerCard = (props) => {
  const Star = () => {
    const fullStars = Math.floor(props.star);
    const fractionalStar = props.star - fullStars;
    const stars = [];
    for (let i2 = 0; i2 < fullStars; i2++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "text-xs text-pink-500", icon: faStar }, i2, false, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this)
      );
    }
    if (fractionalStar > 0) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-pink-500",
            icon: faStar,
            style: { width: `${fractionalStar * 100}%` }
          },
          fullStars,
          false,
          {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 28,
            columnNumber: 17
          },
          this
        )
      );
    }
    for (let i2 = 0; i2 < 5 - fullStars; i2++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-gray-300",
            icon: faStar
          },
          5 + i2,
          false,
          {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 39,
            columnNumber: 17
          },
          this
        )
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: stars }, void 0, false, {
      fileName: "app/components/utils/topinfluencercard.tsx",
      lineNumber: 47,
      columnNumber: 16
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl w-64 my-2 h-full flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.image, alt: "error", className: "w-full h-40 object-cover rounded-t-md" }, void 0, false, {
      fileName: "app/components/utils/topinfluencercard.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/components/utils/topinfluencercard.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start my-2 justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-sm text-left", children: props.name.split("@")[0] }, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 65,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 67,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 66,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 64,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-bold  text-md text-right", children: [
          "3500 ",
          props.currency,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 71,
            columnNumber: 106
          }, this),
          " ",
          props.dob
        ] }, void 0, true, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 71,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 70,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/topinfluencercard.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200  rounded-md py-2 flex justify-around", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-sm font-semibold", children: "2 00 5887" }, void 0, false, {
              fileName: "app/components/utils/topinfluencercard.tsx",
              lineNumber: 77,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-xs font-normal", children: "Reach" }, void 0, false, {
              fileName: "app/components/utils/topinfluencercard.tsx",
              lineNumber: 78,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 76,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-[1px] bg-slate-900" }, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 80,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-sm font-semibold", children: "1 34 9887" }, void 0, false, {
              fileName: "app/components/utils/topinfluencercard.tsx",
              lineNumber: 82,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-xs font-normal", children: "Impression" }, void 0, false, {
              fileName: "app/components/utils/topinfluencercard.tsx",
              lineNumber: 83,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 81,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 75,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 text-center text-sm font-semibold rounded-md py-2 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "SWRV score :  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-normal", children: "2005887" }, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 87,
            columnNumber: 46
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 87,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 86,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/topinfluencercard.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/topinfluencercard.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/utils/topinfluencercard.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/utils/topinfluencercard.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
};
var topinfluencercard_default = TopInfluencerCard;

// node_modules/.pnpm/react-indiana-drag-scroll@2.2.0_react-dom@18.2.0_react@18.2.0/node_modules/react-indiana-drag-scroll/dist/index.es.js
var import_react = __toESM(require_react());
var n = function(t2, e2) {
  return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
    t3.__proto__ = e3;
  } || function(t3, e3) {
    for (var n2 in e3)
      e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
  })(t2, e2);
};
var o;
var r;
var i = (function(t2) {
  !function() {
    var e2 = {}.hasOwnProperty;
    function n2() {
      for (var t3 = [], o2 = 0; o2 < arguments.length; o2++) {
        var r2 = arguments[o2];
        if (r2) {
          var i2 = typeof r2;
          if ("string" === i2 || "number" === i2)
            t3.push(r2);
          else if (Array.isArray(r2) && r2.length) {
            var s2 = n2.apply(null, r2);
            s2 && t3.push(s2);
          } else if ("object" === i2)
            for (var l2 in r2)
              e2.call(r2, l2) && r2[l2] && t3.push(l2);
        }
      }
      return t3.join(" ");
    }
    t2.exports ? (n2.default = n2, t2.exports = n2) : window.classNames = n2;
  }();
}(r = { path: o, exports: {}, require: function(t2, e2) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(null == e2 && r.path);
} }, r.exports), r.exports);
function s(t2, e2, n2) {
  var o2, r2, i2, s2, l2;
  function a2() {
    var c3 = Date.now() - s2;
    c3 < e2 && c3 >= 0 ? o2 = setTimeout(a2, e2 - c3) : (o2 = null, n2 || (l2 = t2.apply(i2, r2), i2 = r2 = null));
  }
  null == e2 && (e2 = 100);
  var c2 = function() {
    i2 = this, r2 = arguments, s2 = Date.now();
    var c3 = n2 && !o2;
    return o2 || (o2 = setTimeout(a2, e2)), c3 && (l2 = t2.apply(i2, r2), i2 = r2 = null), l2;
  };
  return c2.clear = function() {
    o2 && (clearTimeout(o2), o2 = null);
  }, c2.flush = function() {
    o2 && (l2 = t2.apply(i2, r2), i2 = r2 = null, clearTimeout(o2), o2 = null);
  }, c2;
}
s.debounce = s;
var l = s;
!function(t2, e2) {
  void 0 === e2 && (e2 = {});
  var n2 = e2.insertAt;
  if (t2 && "undefined" != typeof document) {
    var o2 = document.head || document.getElementsByTagName("head")[0], r2 = document.createElement("style");
    r2.type = "text/css", "top" === n2 && o2.firstChild ? o2.insertBefore(r2, o2.firstChild) : o2.appendChild(r2), r2.styleSheet ? r2.styleSheet.cssText = t2 : r2.appendChild(document.createTextNode(t2));
  }
}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");
var a;
var c = (a = "indiana-scroll-container", function(t2, e2) {
  if (!t2)
    return a;
  var n2;
  "string" == typeof t2 ? n2 = t2 : e2 = t2;
  var o2 = a;
  return n2 && (o2 += "__" + n2), o2 + (e2 ? Object.keys(e2).reduce(function(t3, n3) {
    var r2 = e2[n3];
    return r2 && (t3 += " " + ("boolean" == typeof r2 ? o2 + "--" + n3 : o2 + "--" + n3 + "_" + r2)), t3;
  }, "") : "");
});
var p = function(e2) {
  function o2(n2) {
    var o3 = e2.call(this, n2) || this;
    return o3.onEndScroll = function() {
      o3.scrolling = false, !o3.pressed && o3.started && o3.processEnd();
    }, o3.onScroll = function(t2) {
      var e3 = o3.container.current;
      e3.scrollLeft === o3.scrollLeft && e3.scrollTop === o3.scrollTop || (o3.scrolling = true, o3.processScroll(t2), o3.onEndScroll());
    }, o3.onTouchStart = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      if (o3.isDraggable(t2.target))
        if (o3.internal = true, e3 && o3.scrolling)
          o3.pressed = true;
        else {
          var n3 = t2.touches[0];
          o3.processClick(t2, n3.clientX, n3.clientY), !e3 && o3.props.stopPropagation && t2.stopPropagation();
        }
    }, o3.onTouchEnd = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      o3.pressed && (!o3.started || o3.scrolling && e3 ? o3.pressed = false : o3.processEnd(), o3.forceUpdate());
    }, o3.onTouchMove = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      if (o3.pressed && (!e3 || !o3.isMobile)) {
        var n3 = t2.touches[0];
        n3 && o3.processMove(t2, n3.clientX, n3.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation();
      }
    }, o3.onMouseDown = function(t2) {
      o3.isDraggable(t2.target) && o3.isScrollable() && (o3.internal = true, -1 !== o3.props.buttons.indexOf(t2.button) && (o3.processClick(t2, t2.clientX, t2.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation()));
    }, o3.onMouseMove = function(t2) {
      o3.pressed && (o3.processMove(t2, t2.clientX, t2.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation());
    }, o3.onMouseUp = function(t2) {
      o3.pressed && (o3.started ? o3.processEnd() : (o3.internal = false, o3.pressed = false, o3.forceUpdate(), o3.props.onClick && o3.props.onClick(t2)), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation());
    }, o3.container = import_react.default.createRef(), o3.onEndScroll = l(o3.onEndScroll, 300), o3.scrolling = false, o3.started = false, o3.pressed = false, o3.internal = false, o3.getRef = o3.getRef.bind(o3), o3;
  }
  return function(t2, e3) {
    function o3() {
      this.constructor = t2;
    }
    n(t2, e3), t2.prototype = null === e3 ? Object.create(e3) : (o3.prototype = e3.prototype, new o3());
  }(o2, e2), o2.prototype.componentDidMount = function() {
    var t2 = this.props.nativeMobileScroll, e3 = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: false }), window.addEventListener("touchend", this.onTouchEnd), e3.addEventListener("touchstart", this.onTouchStart, { passive: false }), e3.addEventListener("mousedown", this.onMouseDown, { passive: false }), t2 && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate());
  }, o2.prototype.componentWillUnmount = function() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
  }, o2.prototype.getElement = function() {
    return this.container.current;
  }, o2.prototype.isMobileDevice = function() {
    return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile");
  }, o2.prototype.isDraggable = function(t2) {
    var e3 = this.props.ignoreElements;
    if (e3) {
      var n2 = t2.closest(e3);
      return null === n2 || n2.contains(this.getElement());
    }
    return true;
  }, o2.prototype.isScrollable = function() {
    var t2 = this.container.current;
    return t2 && (t2.scrollWidth > t2.clientWidth || t2.scrollHeight > t2.clientHeight);
  }, o2.prototype.processClick = function(t2, e3, n2) {
    var o3 = this.container.current;
    this.scrollLeft = o3.scrollLeft, this.scrollTop = o3.scrollTop, this.clientX = e3, this.clientY = n2, this.pressed = true;
  }, o2.prototype.processStart = function(t2) {
    void 0 === t2 && (t2 = true);
    var e3 = this.props.onStartScroll;
    this.started = true, t2 && document.body.classList.add("indiana-dragging"), e3 && e3({ external: !this.internal }), this.forceUpdate();
  }, o2.prototype.processScroll = function(t2) {
    if (this.started) {
      var e3 = this.props.onScroll;
      e3 && e3({ external: !this.internal });
    } else
      this.processStart(false);
  }, o2.prototype.processMove = function(t2, e3, n2) {
    var o3 = this.props, r2 = o3.horizontal, i2 = o3.vertical, s2 = o3.activationDistance, l2 = o3.onScroll, a2 = this.container.current;
    this.started ? (r2 && (a2.scrollLeft -= e3 - this.clientX), i2 && (a2.scrollTop -= n2 - this.clientY), l2 && l2({ external: !this.internal }), this.clientX = e3, this.clientY = n2, this.scrollLeft = a2.scrollLeft, this.scrollTop = a2.scrollTop) : (r2 && Math.abs(e3 - this.clientX) > s2 || i2 && Math.abs(n2 - this.clientY) > s2) && (this.clientX = e3, this.clientY = n2, this.processStart());
  }, o2.prototype.processEnd = function() {
    var t2 = this.props.onEndScroll;
    this.container.current && t2 && t2({ external: !this.internal }), this.pressed = false, this.started = false, this.scrolling = false, this.internal = false, document.body.classList.remove("indiana-dragging"), this.forceUpdate();
  }, o2.prototype.getRef = function(t2) {
    [this.container, this.props.innerRef].forEach(function(e3) {
      e3 && ("function" == typeof e3 ? e3(t2) : e3.current = t2);
    });
  }, o2.prototype.render = function() {
    var e3 = this.props, n2 = e3.children, o3 = e3.draggingClassName, r2 = e3.className, s2 = e3.style, l2 = e3.hideScrollbars, a2 = e3.component;
    return import_react.default.createElement(a2, { className: i(r2, this.pressed && o3, c({ dragging: this.pressed, "hide-scrollbars": l2, "native-scroll": this.isMobile })), style: s2, ref: this.getRef, onScroll: this.onScroll }, n2);
  }, o2.defaultProps = { nativeMobileScroll: true, hideScrollbars: true, activationDistance: 10, vertical: true, horizontal: true, stopPropagation: false, style: {}, component: "div", buttons: [0] }, o2;
}(import_react.PureComponent);
var index_es_default = p;

// app/routes/home/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var HomePage = () => {
  const user = useLoaderData();
  const userdata = user.user;
  const profilecomplted = userdata["profileCompleteness"];
  const isbrand = user.user.role.code != 10;
  const isOpen = profilecompletestat_default((state) => state.isOpen);
  const isOpenChange = profilecompletestat_default((state) => state.change);
  const navigator2 = useNavigate();
  const init = async () => {
  };
  (0, import_react3.useEffect)(() => {
    isOpenChange(profilecomplted == "1" ? false : true);
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-hidden", children: [
    isbrand ? userdata.brand.length == 0 || userdata.brand == null || userdata.brand == void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BrandCreate, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this) : null : null,
    isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProfileComplete, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 70,
      columnNumber: 19
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Intro, { isBrand: isbrand }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    isbrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        InfluencerSearch,
        {
          platform: user.platform,
          country: user.country,
          category: user.category,
          isCompleted: true
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 75,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TopInfluencer, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarnSection, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SponsoredPosts, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NewCampaign, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TopBrands, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
};
var home_default = HomePage;
var ProfileComplete = () => {
  const changeState = profilecompletestat_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bg-secondary rounded-xl p-2 my-4 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex grow flex-col md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-10 md:w-[400px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl text-white font-bold", children: "Please Complete Your Profile" }, void 0, false, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-md text-white font-normal", children: "Kindly complete your profile to proceed with acitvities on SWRV website." }, void 0, false, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "xl:w-96 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/home/profilecomplete", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        CusButton,
        {
          text: "Click here to complete",
          textColor: "text-white",
          background: "bg-primary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 117,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        onClick: () => {
          changeState(false);
        },
        children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            FontAwesomeIcon,
            {
              className: "text-white text-2xl font-bold",
              icon: faXmark
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/index.tsx",
              lineNumber: 131,
              columnNumber: 11
            },
            this
          ),
          " "
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 125,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
};
var Intro = (props) => {
  const navigator2 = useNavigate();
  const [brand, setBrand] = (0, import_react3.useState)([]);
  let data = [
    { image: "74.jfif", id: "74" },
    { image: "75.jfif", id: "75" },
    { image: "76.jfif", id: "76" },
    { image: "77.jfif", id: "77" },
    { image: "78.jfif", id: "78" },
    { image: "79.jfif", id: "79" },
    { image: "80.jfif", id: "80" },
    { image: "81.jfif", id: "81" },
    { image: "82.jfif", id: "82" },
    { image: "83.jfif", id: "83" },
    { image: "84.jfif", id: "84" },
    { image: "85.jfif", id: "85" },
    { image: "86.jfif", id: "86" },
    { image: "87.jfif", id: "87" },
    { image: "88.jfif", id: "88" }
  ];
  const init = async () => {
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-brand`
    });
    setBrand(apidata.data.data);
  };
  (0, import_react3.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl text-primary font-bold text-center", children: "Welcome to SWRV" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl text-primary font-normal text-center", children: "Reach the next billion" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 178,
      columnNumber: 9
    }, this),
    props.isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(index_es_default, { className: "flex gap-6 items-center mb-6 overflow-x-scroll no-scrollbar mt-6", children: data.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "block shrink-0 cursor-pointer",
          onClick: () => {
            navigator2(`/home/user/${val.id}`);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              src: `/images/inf/${val.image}`,
              alt: "error",
              className: "rounded-md w-40 h-40 object-center object-cover"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/index.tsx",
              lineNumber: 197,
              columnNumber: 19
            },
            this
          )
        },
        index,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 190,
          columnNumber: 17
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 187,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(index_es_default, { className: "flex gap-6 items-center mb-6 overflow-x-scroll no-scrollbar mt-6", children: brand.slice(0, 10).map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "block shrink-0 cursor-pointer",
          onClick: () => {
            navigator2(`/home/brand/${val.id}`);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              src: val.logo,
              alt: "error",
              className: "rounded-md w-40 h-40 object-center object-cover"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/index.tsx",
              lineNumber: 217,
              columnNumber: 19
            },
            this
          )
        },
        index,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 210,
          columnNumber: 17
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 207,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 177,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 176,
    columnNumber: 5
  }, this);
};
var EarnSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full rounded-xl flex flex-col sm:flex-row bg-yellow-500 mt-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow grid place-items-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/cashgirl.png", alt: "error", className: "h-40 md:h-80" }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 237,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 236,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl text-black font-bold text-left", children: "To earn more money?" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 241,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-md text-black font-normal text-left md:w-80", children: "Search, apply for brands campaigns and create more great content." }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 244,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 240,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 239,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 235,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 234,
    columnNumber: 5
  }, this);
};
var SponsoredPosts = () => {
  const [topChampaing, setTopChampaing] = (0, import_react3.useState)([]);
  const [campaignCards, setCampaignCards] = (0, import_react3.useState)([]);
  (0, import_react3.useEffect)(() => {
    const fetchData = async () => {
      const apidata = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/get-top-campaigns`
      });
      setTopChampaing(apidata.data.data.campaigns);
    };
    fetchData();
  }, []);
  (0, import_react3.useEffect)(() => {
    const createCampaignCards = async () => {
      const cards = await Promise.all(
        topChampaing.map(async (val, index) => {
          let platforms = [];
          for (let i2 = 0; i2 < val["platforms"].length; i2++) {
            platforms.push(val["platforms"][i2]["platformLogoUrl"]);
          }
          let campaignType = await getCampaignType(val["campaignTypeId"]);
          let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            CampaginCard,
            {
              id: val.id,
              title: val["name"],
              weburl: val.brand.webUrl,
              platforms,
              maxval: val.costPerPost.split(".")[0],
              category: campaignType,
              image,
              name: val.brand.name,
              currency: "USD",
              btntext: "View More & Learn"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/index.tsx",
              lineNumber: 291,
              columnNumber: 15
            },
            this
          ) }, index, false, {
            fileName: "app/routes/home/index.tsx",
            lineNumber: 290,
            columnNumber: 13
          }, this);
        })
      );
      setCampaignCards(cards);
    };
    createCampaignCards();
  }, [topChampaing]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 rounded-xl text-xl font-bold text-black p-2", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        FontAwesomeIcon,
        {
          icon: faHeart,
          className: "text-md text-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 318,
          columnNumber: 11
        },
        this
      ),
      " ",
      "Sponsored Posts",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 316,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-10 flex-wrap gap-y-6", children: campaignCards }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 324,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 315,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 314,
    columnNumber: 5
  }, this);
};
var NewCampaign = () => {
  const [topChampaing, setTopChampaing] = (0, import_react3.useState)([]);
  const [campaignCards, setCampaignCards] = (0, import_react3.useState)([]);
  (0, import_react3.useEffect)(() => {
    const fetchData = async () => {
      const apidata = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/campaign-search`
      });
      setTopChampaing(apidata.data.data);
    };
    fetchData();
  }, []);
  (0, import_react3.useEffect)(() => {
    const createCampaignCards = async () => {
      let counter = 0;
      const cards = await Promise.all(
        topChampaing.map(async (val, index) => {
          if (counter >= 5)
            return null;
          counter++;
          let platforms = [];
          for (let i2 = 0; i2 < val["platforms"].length; i2++) {
            platforms.push(val["platforms"][i2]["platformLogoUrl"]);
          }
          let campaignType = await getCampaignType(val["campaignTypeId"]);
          let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            CampaginCard,
            {
              id: val.id,
              title: val["campaignName"],
              weburl: val.brand.webUrl,
              platforms,
              maxval: val.costPerPost.split(".")[0],
              category: campaignType,
              image,
              name: val.brand.name,
              currency: "USD",
              btntext: "View More & Learn"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home/index.tsx",
              lineNumber: 370,
              columnNumber: 15
            },
            this
          ) }, index, false, {
            fileName: "app/routes/home/index.tsx",
            lineNumber: 369,
            columnNumber: 13
          }, this);
        })
      );
      setCampaignCards(cards);
    };
    createCampaignCards();
  }, [topChampaing]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 rounded-xl text-xl font-bold text-black", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        FontAwesomeIcon,
        {
          icon: faIdBadge,
          className: "text-md text-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 397,
          columnNumber: 11
        },
        this
      ),
      " ",
      "New Campaign",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 395,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-10 flex-wrap gap-y-6", children: campaignCards }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 403,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 394,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 393,
    columnNumber: 5
  }, this);
};
var TopBrands = () => {
  const [topBrands, setTopBarnds] = (0, import_react3.useState)([]);
  const init = async () => {
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-top-brands`,
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
    setTopBarnds(apidata.data.data);
  };
  (0, import_react3.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60  rounded-xl text-xl font-bold text-black my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        FontAwesomeIcon,
        {
          icon: faStar,
          className: "text-md text-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 436,
          columnNumber: 11
        },
        this
      ),
      " ",
      "Top brands",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 434,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-10 flex-wrap gap-y-6", children: topBrands.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        BrandCard,
        {
          id: val.id,
          email: val.email,
          image: val.logo,
          name: val.name,
          website: val.webUrl
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 446,
          columnNumber: 17
        },
        this
      ) }, index, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 445,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 442,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 433,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 432,
    columnNumber: 5
  }, this);
};
var TopInfluencer = () => {
  const [topInfluencer, setTopInfluencer] = (0, import_react3.useState)([]);
  const init = async () => {
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/user-search`,
      data: { role: 10 },
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
    for (let i2 = 0; i2 < 5; i2++) {
      setTopInfluencer((prevdata) => [...prevdata, apidata.data.data[i2]]);
    }
  };
  (0, import_react3.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 rounded-xl text-xl font-bold text-black p-2", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        FontAwesomeIcon,
        {
          icon: faHeart,
          className: "text-md text-secondary"
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 493,
          columnNumber: 11
        },
        this
      ),
      " ",
      "Top influencer",
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 491,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-10 flex-wrap", children: topInfluencer.map((val, index) => {
      const avatar = val["pic"] == "0" || val["pic"] == null || val["pic"] == void 0 || val["pic"] == "" ? "/images/avatar/user.png" : val["pic"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/home/myuser/${val.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        topinfluencercard_default,
        {
          star: parseInt(val.rating),
          image: avatar,
          name: val.userName,
          currency: "USD",
          dob: val.dob
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 510,
          columnNumber: 17
        },
        this
      ) }, index, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 509,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 499,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 490,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 489,
    columnNumber: 5
  }, this);
};
var BrandCreate = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-rose-500 my-4 rounded-lg w-full p-4 py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center font-semibold text-white text-2xl", children: "Your Haven't created Brand" }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 531,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center font-semibold text-white text-lg", children: "Create your brand to begin the journey" }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 534,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full text-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Link,
      {
        className: "bg-primary text-white py-2 px-6 text-center font-semibold rounded-md",
        to: "/createbrand",
        children: "Click Here to create brand"
      },
      void 0,
      false,
      {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 538,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 537,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 530,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 529,
    columnNumber: 5
  }, this);
};
export {
  home_default as default
};
//# sourceMappingURL=/build/routes/home/index-6JYVGJO2.js.map
