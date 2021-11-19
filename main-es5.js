function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _outlets_no_ngrx_no_ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./outlets/no-ngrx/no-ngrx.component */
    "./src/app/outlets/no-ngrx/no-ngrx.component.ts");
    /* harmony import */


    var _outlets_with_ngrx_with_ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./outlets/with-ngrx/with-ngrx.component */
    "./src/app/outlets/with-ngrx/with-ngrx.component.ts");

    var routes = [{
      path: 'no-ngrx',
      component: _outlets_no_ngrx_no_ngrx_component__WEBPACK_IMPORTED_MODULE_2__["NoNgrxComponent"]
    }, {
      path: 'ngrx',
      component: _outlets_with_ngrx_with_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["WithNgrxComponent"]
    }, {
      path: '',
      redirectTo: '/ngrx',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _outlets_with_ngrx_with_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["WithNgrxComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 25,
      vars: 0,
      consts: [["color", "primary", 1, "nav", "p-3", "d-flex"], [1, "justify-content-around"], [1, "menu-spacer"], ["routerLink", "/no-ngrx", "routerLinkActive", "active-link"], ["routerLink", "/ngrx", "routerLinkActive", "active-link"], ["aria-label", "Alejandro Sanchez Mu\xF1oz", "target", "_blank", "rel", "noopener", "href", "https://www.linkedin.com/in/alejandrosanchez92/", "title", "Alejandro Sanchez Mu\xF1oz"], ["id", "linkedin-logo", "height", "24", "viewBox", "0 0 500 500", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0", "fill", "#fff"], ["role", "main", 1, "container", "mt-4"], [1, "mt-4", "d-flex", "flex-column", "align-items-center"], ["mat-fab", "", "color", "primary", "aria-label", "CV Alejandro S\xE1nchez Mu\xF1oz", "target", "_blank", "rel", "noopener", "href", "/assets/CV_AlejandroSanchezMunoz.pdf", 1, "d-flex", "justify-content-center"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Bookmark Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No NgRx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "With NgRx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Alejandro S\xE1nchez Mu\xF1oz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "attachment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.nav[_ngcontent-%COMP%]   #linkedin-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  margin: 0 16px;\n}\n\n.nav[_ngcontent-%COMP%]   #linkedin-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\nfooter[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbGV4X1xcRGVza3RvcFxcQm9va21hcmstQXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBKQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUNDRDs7QURFQTs7Ozs7O0VBTUMsYUFBQTtBQ0NEOztBREVBO0VBQ0MsU0FBQTtBQ0NEOztBRElDO0VBQ0MsWUFBQTtFQUNBLGNBQUE7QUNERjs7QURHRTtFQUVDLFlBQUE7QUNGSDs7QURNQztFQUNDLFdBQUE7QUNKRjs7QURNRTtFQUNDLDBCQUFBO0FDSkg7O0FEVUE7RUFDQyxpQkFBQTtBQ1BEOztBRFNDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEV0E7OztFQUdDLHFCQUFBO0FDUkQ7O0FEV0E7RUFDQyxjQUFBO0FDUkQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogIzMzMztcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG5cdG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdntcclxuXHRcclxuXHQjbGlua2VkaW4tbG9nbyB7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRtYXJnaW46IDAgMTZweDtcclxuXHJcblx0XHQmOmhvdmVyIHtcclxuXHRcclxuXHRcdFx0b3BhY2l0eTogMC44O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRhe1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblxyXG5cdFx0Jjpob3ZlcntcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuZm9vdGVyIHtcclxuXHRsaW5lLWhlaWdodDogMjBweDsgXHJcblx0XHJcblx0YSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuXHRjb2xvcjogIzEyNTY5OTtcclxufSIsIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5hdiAjbGlua2VkaW4tbG9nbyB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG4ubmF2ICNsaW5rZWRpbi1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLm5hdiBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmF2IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuZm9vdGVyIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5mb290ZXIgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxMjU2OTk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _store_bookmark_bookmark_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store/bookmark/bookmark.reducer */
    "./src/app/store/bookmark/bookmark.reducer.ts");
    /* harmony import */


    var _store_bookmark_bookmark_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/bookmark/bookmark.effects */
    "./src/app/store/bookmark/bookmark.effects.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _components_bookmark_dialog_bookmark_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/bookmark-dialog/bookmark-dialog.component */
    "./src/app/components/bookmark-dialog/bookmark-dialog.component.ts");
    /* harmony import */


    var _components_bookmark_table_bookmark_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/bookmark-table/bookmark-table.component */
    "./src/app/components/bookmark-table/bookmark-table.component.ts");
    /* harmony import */


    var _components_bookmark_table_ngrx_bookmark_table_ngrx_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/bookmark-table-ngrx/bookmark-table-ngrx.component */
    "./src/app/components/bookmark-table-ngrx/bookmark-table-ngrx.component.ts");
    /* harmony import */


    var _outlets_no_ngrx_no_ngrx_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./outlets/no-ngrx/no-ngrx.component */
    "./src/app/outlets/no-ngrx/no-ngrx.component.ts");
    /* harmony import */


    var _outlets_with_ngrx_with_ngrx_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./outlets/with-ngrx/with-ngrx.component */
    "./src/app/outlets/with-ngrx/with-ngrx.component.ts"); // Angular CLI environment

    /***********************/

    /* CUSTOM COMPONENTS */

    /***********************/


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
        bookmarks: _store_bookmark_bookmark_reducer__WEBPACK_IMPORTED_MODULE_10__["bookmarkReducer"]
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_bookmark_bookmark_effects__WEBPACK_IMPORTED_MODULE_11__["BookmarkEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_bookmark_dialog_bookmark_dialog_component__WEBPACK_IMPORTED_MODULE_13__["BookmarkDialogComponent"], _components_bookmark_table_bookmark_table_component__WEBPACK_IMPORTED_MODULE_14__["BookmarkTableComponent"], _components_bookmark_table_ngrx_bookmark_table_ngrx_component__WEBPACK_IMPORTED_MODULE_15__["BookmarkTableNgrxComponent"], _outlets_no_ngrx_no_ngrx_component__WEBPACK_IMPORTED_MODULE_16__["NoNgrxComponent"], _outlets_with_ngrx_with_ngrx_component__WEBPACK_IMPORTED_MODULE_17__["WithNgrxComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_bookmark_dialog_bookmark_dialog_component__WEBPACK_IMPORTED_MODULE_13__["BookmarkDialogComponent"], _components_bookmark_table_bookmark_table_component__WEBPACK_IMPORTED_MODULE_14__["BookmarkTableComponent"], _components_bookmark_table_ngrx_bookmark_table_ngrx_component__WEBPACK_IMPORTED_MODULE_15__["BookmarkTableNgrxComponent"], _outlets_no_ngrx_no_ngrx_component__WEBPACK_IMPORTED_MODULE_16__["NoNgrxComponent"], _outlets_with_ngrx_with_ngrx_component__WEBPACK_IMPORTED_MODULE_17__["WithNgrxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
            bookmarks: _store_bookmark_bookmark_reducer__WEBPACK_IMPORTED_MODULE_10__["bookmarkReducer"]
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_bookmark_bookmark_effects__WEBPACK_IMPORTED_MODULE_11__["BookmarkEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/bookmark-dialog/action.types.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/bookmark-dialog/action.types.ts ***!
    \************************************************************/

  /*! exports provided: DialogActions */

  /***/
  function srcAppComponentsBookmarkDialogActionTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogActions", function () {
      return DialogActions;
    });

    var DialogActions;

    (function (DialogActions) {
      DialogActions["ADD"] = "add";
      DialogActions["EDIT"] = "edit";
      DialogActions["DELETE"] = "delete";
      DialogActions["CANCEL"] = "cancel";
    })(DialogActions || (DialogActions = {}));
    /***/

  },

  /***/
  "./src/app/components/bookmark-dialog/bookmark-dialog.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/bookmark-dialog/bookmark-dialog.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BookmarkDialogComponent */

  /***/
  function srcAppComponentsBookmarkDialogBookmarkDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkDialogComponent", function () {
      return BookmarkDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/bookmark-dialog/action.types */
    "./src/app/components/bookmark-dialog/action.types.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = ["class", "component"];

    function BookmarkDialogComponent_strong_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Bookmark");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkDialogComponent_strong_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit ", ctx_r1.local_data.name, "");
      }
    }

    function BookmarkDialogComponent_strong_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Delete ", ctx_r2.local_data.name, "");
      }
    }

    function BookmarkDialogComponent_div_8_mat_error_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkDialogComponent_div_8_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Url is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkDialogComponent_div_8_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Group is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkDialogComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookmarkDialogComponent_div_8_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.bookmark.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookmarkDialogComponent_div_8_mat_error_3_Template, 2, 0, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookmarkDialogComponent_div_8_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.bookmark.url = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookmarkDialogComponent_div_8_mat_error_6_Template, 2, 0, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookmarkDialogComponent_div_8_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.bookmark.group = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookmarkDialogComponent_div_8_mat_error_9_Template, 2, 0, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.bookmark.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.hasError("name", "required") && _r3.dirty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.bookmark.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.hasError("url", "required") && _r3.dirty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.bookmark.group);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.hasError("group", "required") && _r3.dirty);
      }
    }

    function BookmarkDialogComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Sure to delete? ");
      }
    }

    var BookmarkDialogComponent = /*#__PURE__*/function () {
      function BookmarkDialogComponent(dialogRef, //@Optional() is used to prevent error if no data is passed
      data) {
        var _this = this;

        _classCallCheck(this, BookmarkDialogComponent);

        var _a;

        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogActions = src_app_components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_3__["DialogActions"];

        this.hasError = function (controlName, errorName) {
          return _this.bookmarkForm.controls[controlName].hasError(errorName);
        };

        this.submitForm = function (bookmark, action) {
          _this.actionBookmark(bookmark, action);
        };

        this.local_data = Object.assign({}, data);
        this.action = (_a = this.local_data) === null || _a === void 0 ? void 0 : _a.action;
        this.bookmark = Object.assign({}, this.local_data.bookmark);
      }

      _createClass(BookmarkDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bookmarkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            group: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "actionBookmark",
        value: function actionBookmark(bookmark, action) {
          this.dialogRef.close({
            action: action,
            data: bookmark
          });
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close({
            action: src_app_components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_3__["DialogActions"].CANCEL
          });
        }
      }]);

      return BookmarkDialogComponent;
    }();

    BookmarkDialogComponent.ɵfac = function BookmarkDialogComponent_Factory(t) {
      return new (t || BookmarkDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8));
    };

    BookmarkDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookmarkDialogComponent,
      selectors: [["bookmark-dialog", 8, "component"]],
      attrs: _c0,
      decls: 17,
      vars: 10,
      consts: [["mat-dialog-title", "", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "p-5"], ["autocomplete", "off", "novalidate", "", "fxLayout", "column wrap", "fxLayoutAlign", "center center", "fxLayoutGap", "10px"], ["bookmarkForm", "ngForm"], ["mat-dialog-content", "", 1, "d-flex", "justify-content-center"], ["class", "d-flex flex-column", 4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "d-flex", "flex-column"], ["matInput", "", "required", "", "type", "text", "placeholder", "Name", "name", "name", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["matInput", "", "required", "", "type", "url", "placeholder", "Url", "name", "url", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "type", "text", "placeholder", "Group", "name", "group", 3, "ngModel", "ngModelChange"]],
      template: function BookmarkDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookmarkDialogComponent_strong_1_Template, 2, 0, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookmarkDialogComponent_strong_2_Template, 2, 1, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookmarkDialogComponent_strong_3_Template, 2, 1, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookmarkDialogComponent_div_8_Template, 10, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookmarkDialogComponent_ng_template_9_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkDialogComponent_Template_button_click_12_listener() {
            return ctx.submitForm(ctx.bookmark, ctx.action);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkDialogComponent_Template_button_click_15_listener() {
            return ctx.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.action);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.dialogActions.ADD);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.dialogActions.EDIT);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.dialogActions.DELETE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action !== ctx.dialogActions.DELETE)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.action), " ");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bookmark-dialog.component',
          templateUrl: './bookmark-dialog.component.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/bookmark-table-ngrx/bookmark-table-ngrx.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/bookmark-table-ngrx/bookmark-table-ngrx.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: BookmarkTableNgrxComponent */

  /***/
  function srcAppComponentsBookmarkTableNgrxBookmarkTableNgrxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkTableNgrxComponent", function () {
      return BookmarkTableNgrxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_store_bookmark_bookmark_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/bookmark/bookmark.selector */
    "./src/app/store/bookmark/bookmark.selector.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function BookmarkTableNgrxComponent_ng_container_0_ng_container_3_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r10.header);
      }
    }

    function BookmarkTableNgrxComponent_ng_container_0_ng_container_3_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        var column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14[column_r10.name]);
      }
    }

    function BookmarkTableNgrxComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookmarkTableNgrxComponent_ng_container_0_ng_container_3_th_2_Template, 2, 1, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookmarkTableNgrxComponent_ng_container_0_ng_container_3_td_3_Template, 2, 1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r10.name);
      }
    }

    function BookmarkTableNgrxComponent_ng_container_0_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
      }
    }

    function BookmarkTableNgrxComponent_ng_container_0_td_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkTableNgrxComponent_ng_container_0_td_6_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var element_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.editEvent.emit(element_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkTableNgrxComponent_ng_container_0_td_6_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var element_r16 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.deleteEvent.emit(element_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkTableNgrxComponent_ng_container_0_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    function BookmarkTableNgrxComponent_ng_container_0_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
      }
    }

    function BookmarkTableNgrxComponent_ng_container_0_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, group_r21.groupName));
      }
    }

    function BookmarkTableNgrxComponent_ng_container_0_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
      }
    }

    var _c0 = function _c0() {
      return ["groupHeader"];
    };

    function BookmarkTableNgrxComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookmarkTableNgrxComponent_ng_container_0_ng_container_3_Template, 4, 1, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookmarkTableNgrxComponent_ng_container_0_th_5_Template, 1, 0, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookmarkTableNgrxComponent_ng_container_0_td_6_Template, 5, 0, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookmarkTableNgrxComponent_ng_container_0_tr_7_Template, 1, 0, "tr", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookmarkTableNgrxComponent_ng_container_0_tr_8_Template, 1, 0, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BookmarkTableNgrxComponent_ng_container_0_td_10_Template, 4, 3, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BookmarkTableNgrxComponent_ng_container_0_tr_11_Template, 1, 0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var model_r1 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", model_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.textColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("matRowDefWhen", ctx_r0.isGroup);
      }
    }

    var BookmarkTableNgrxComponent = /*#__PURE__*/function () {
      function BookmarkTableNgrxComponent(store) {
        _classCallCheck(this, BookmarkTableNgrxComponent);

        this.store = store;
        this.displayedColumns = ['id', 'name', 'url', 'group', 'actions'];
        this.textColumns = [{
          name: 'id',
          header: 'Id',
          type: 'text'
        }, {
          name: 'name',
          header: 'Name',
          type: 'text'
        }, {
          name: 'url',
          header: 'Url',
          type: 'url'
        }, {
          name: 'group',
          header: 'Group',
          type: 'text'
        }];
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.isGroup = function (index, item) {
          return item.isGroup;
        };
      }

      _createClass(BookmarkTableNgrxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.model$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_bookmark_bookmark_selector__WEBPACK_IMPORTED_MODULE_3__["selectAllBookmarks"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _this2.groupBy('group', data);
          }));
        }
      }, {
        key: "groupBy",
        value: function groupBy(column, data) {
          if (!column) return data;
          var collapsedGroups = [];

          var customReducer = function customReducer(accumulator, currentValue) {
            var currentGroup = currentValue[column];

            if (!accumulator[currentGroup]) {
              accumulator[currentGroup] = [{
                groupName: "".concat(column, " ").concat(currentValue[column]),
                value: currentValue[column],
                isGroup: true
              }];
            }

            accumulator[currentGroup] = [].concat(_toConsumableArray(accumulator[currentGroup]), [currentValue]);
            return accumulator;
          };

          var groups = Object.values(data).reduce(customReducer, {});
          var groupArray = Object.keys(groups).map(function (key) {
            return groups[key];
          });
          var flatList = groupArray.reduce(function (a, c) {
            return a.concat(c);
          }, []);
          return flatList.filter(function (rawLine) {
            return rawLine.isGroup || collapsedGroups.every(function (group) {
              return rawLine[column] != group.value;
            });
          });
        }
      }]);

      return BookmarkTableNgrxComponent;
    }();

    BookmarkTableNgrxComponent.ɵfac = function BookmarkTableNgrxComponent_Factory(t) {
      return new (t || BookmarkTableNgrxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    BookmarkTableNgrxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookmarkTableNgrxComponent,
      selectors: [["app-bookmark-table-ngrx"]],
      outputs: {
        editEvent: "editEvent",
        deleteEvent: "deleteEvent"
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", "mx-auto", "mt-4", 3, "dataSource"], ["mytable", ""], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "groupHeader"], ["colspan", "999", "mat-cell", "", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], [3, "matColumnDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", "color", "accent", 1, "mr-3", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["colspan", "999", "mat-cell", ""]],
      template: function BookmarkTableNgrxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookmarkTableNgrxComponent_ng_container_0_Template, 12, 7, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.model$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkTableNgrxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bookmark-table-ngrx',
          templateUrl: './bookmark-table-ngrx.component.html'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, {
        editEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/bookmark-table/bookmark-table.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/bookmark-table/bookmark-table.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BookmarkTableComponent */

  /***/
  function srcAppComponentsBookmarkTableBookmarkTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkTableComponent", function () {
      return BookmarkTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var src_data_bookmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/data/bookmark */
    "./src/data/bookmark.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function BookmarkTableComponent_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkTableComponent_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.name, " ");
      }
    }

    function BookmarkTableComponent_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " URL ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkTableComponent_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", element_r17.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function BookmarkTableComponent_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
      }
    }

    function BookmarkTableComponent_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.group, " ");
      }
    }

    function BookmarkTableComponent_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
      }
    }

    function BookmarkTableComponent_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkTableComponent_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var element_r19 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.edit(element_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkTableComponent_td_13_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var element_r19 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22["delete"](element_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkTableComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
      }
    }

    function BookmarkTableComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function BookmarkTableComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, group_r24.groupName));
      }
    }

    function BookmarkTableComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function BookmarkTableComponent_td_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarkTableComponent_ng_template_21_tr_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
      }
    }

    var _c0 = function _c0() {
      return ["noRecord"];
    };

    function BookmarkTableComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookmarkTableComponent_ng_template_21_tr_0_Template, 1, 0, "tr", 26);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function BookmarkTableComponent_h1_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " no rows available\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["groupHeader"];
    };

    var BookmarkTableComponent = /*#__PURE__*/function () {
      function BookmarkTableComponent() {
        _classCallCheck(this, BookmarkTableComponent);

        this.displayedColumns = ['name', 'url', 'group', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](src_data_bookmark__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_DATA"]);
        this.data = src_data_bookmark__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_DATA"];
        this.id = src_data_bookmark__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_DATA"].length + 1;
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BookmarkTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.groupData();
        }
      }, {
        key: "groupData",
        value: function groupData() {
          this.dataSource.data = this.groupBy('group', this.data);
        }
      }, {
        key: "edit",
        value: function edit(bookmark) {
          this.editEvent.emit(bookmark);
        }
      }, {
        key: "delete",
        value: function _delete(bookmark) {
          this.deleteEvent.emit(bookmark);
        }
      }, {
        key: "addBookmark",
        value: function addBookmark(bookmark) {
          var newBookmark = {
            id: this.id++,
            name: bookmark.name,
            url: bookmark.url,
            group: bookmark.group
          };
          this.data.push(newBookmark);
          this.groupData();
        }
      }, {
        key: "editBookmark",
        value: function editBookmark(bookmark) {
          this.data = this.data.filter(function (value, key) {
            if (value.id == bookmark.id) {
              value.name = bookmark.name;
              value.url = bookmark.url;
              value.group = bookmark.group;
            }

            return true;
          });
          this.groupData();
        }
      }, {
        key: "deleteBookmark",
        value: function deleteBookmark(bookmark) {
          this.data = this.data.filter(function (value, key) {
            return value.id != bookmark.id;
          });
          this.groupData();
        }
      }, {
        key: "groupBy",
        value: function groupBy(column, data) {
          if (!column) return data;
          var collapsedGroups = [];

          var customReducer = function customReducer(accumulator, currentValue) {
            var currentGroup = currentValue[column];
            if (!accumulator[currentGroup]) accumulator[currentGroup] = [{
              groupName: "".concat(column, " ").concat(currentValue[column]),
              value: currentValue[column],
              isGroup: true
            }];
            accumulator[currentGroup].push(currentValue);
            return accumulator;
          };

          var groups = data.reduce(customReducer, {});
          var groupArray = Object.keys(groups).map(function (key) {
            return groups[key];
          });
          var flatList = groupArray.reduce(function (a, c) {
            return a.concat(c);
          }, []);
          return flatList.filter(function (rawLine) {
            return rawLine.isGroup || collapsedGroups.every(function (group) {
              return rawLine[column] != group.value;
            });
          });
        }
      }, {
        key: "isGroup",
        value: function isGroup(index, item) {
          return item.isGroup;
        }
      }]);

      return BookmarkTableComponent;
    }();

    BookmarkTableComponent.ɵfac = function BookmarkTableComponent_Factory(t) {
      return new (t || BookmarkTableComponent)();
    };

    BookmarkTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookmarkTableComponent,
      selectors: [["app-bookmark-table"]],
      outputs: {
        editEvent: "editEvent",
        deleteEvent: "deleteEvent"
      },
      decls: 23,
      vars: 8,
      consts: [["mat-table", "", 1, "mat-elevation-z8", "mx-auto", "mt-4", 3, "dataSource"], ["mytable", ""], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "url"], ["matColumnDef", "group"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "groupHeader"], ["colspan", "999", "mat-cell", "", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], ["matColumnDef", "noRecord"], ["mat-footer-cell", "", 4, "matFooterCellDef"], [3, "ngIf"], [4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", "rel", "nofollow", 3, "href"], ["mat-raised-button", "", "color", "accent", 1, "mr-3", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["colspan", "999", "mat-cell", ""], ["mat-footer-cell", ""], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-footer-row", ""]],
      template: function BookmarkTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookmarkTableComponent_th_3_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookmarkTableComponent_td_4_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookmarkTableComponent_th_6_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookmarkTableComponent_td_7_Template, 3, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookmarkTableComponent_th_9_Template, 1, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BookmarkTableComponent_td_10_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookmarkTableComponent_th_12_Template, 1, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookmarkTableComponent_td_13_Template, 5, 0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookmarkTableComponent_tr_14_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BookmarkTableComponent_tr_15_Template, 1, 0, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BookmarkTableComponent_td_17_Template, 4, 3, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BookmarkTableComponent_tr_18_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BookmarkTableComponent_td_20_Template, 2, 0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BookmarkTableComponent_ng_template_21_Template, 1, 2, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BookmarkTableComponent_h1_22_Template, 2, 0, "h1", 16);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1))("matRowDefWhen", ctx.isGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length == 0);
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bookmark-table',
          templateUrl: './bookmark-table.component.html'
        }]
      }], null, {
        editEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/outlets/no-ngrx/no-ngrx.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/outlets/no-ngrx/no-ngrx.component.ts ***!
    \******************************************************/

  /*! exports provided: NoNgrxComponent */

  /***/
  function srcAppOutletsNoNgrxNoNgrxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoNgrxComponent", function () {
      return NoNgrxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/bookmark-dialog/action.types */
    "./src/app/components/bookmark-dialog/action.types.ts");
    /* harmony import */


    var _components_bookmark_dialog_bookmark_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/bookmark-dialog/bookmark-dialog.component */
    "./src/app/components/bookmark-dialog/bookmark-dialog.component.ts");
    /* harmony import */


    var _components_bookmark_table_bookmark_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/bookmark-table/bookmark-table.component */
    "./src/app/components/bookmark-table/bookmark-table.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NoNgrxComponent = /*#__PURE__*/function () {
      function NoNgrxComponent(dialog) {
        _classCallCheck(this, NoNgrxComponent);

        this.dialog = dialog;
        this.dialogActions = _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_1__["DialogActions"];
      }

      _createClass(NoNgrxComponent, [{
        key: "openDialog",
        value: function openDialog(action, bookmark) {
          var _this3 = this;

          var dialogRef = this.dialog.open(_components_bookmark_dialog_bookmark_dialog_component__WEBPACK_IMPORTED_MODULE_2__["BookmarkDialogComponent"], {
            data: {
              bookmark: bookmark,
              action: action
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            switch (result.action) {
              case _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_1__["DialogActions"].ADD:
                _this3.childTable.addBookmark(result.data);

                break;

              case _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_1__["DialogActions"].EDIT:
                _this3.childTable.editBookmark(result.data);

                break;

              case _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_1__["DialogActions"].DELETE:
                _this3.childTable.deleteBookmark(result.data);

                break;
            }
          });
        }
      }]);

      return NoNgrxComponent;
    }();

    NoNgrxComponent.ɵfac = function NoNgrxComponent_Factory(t) {
      return new (t || NoNgrxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    NoNgrxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoNgrxComponent,
      selectors: [["app-no-ngrx"]],
      viewQuery: function NoNgrxComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_bookmark_table_bookmark_table_component__WEBPACK_IMPORTED_MODULE_3__["BookmarkTableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childTable = _t.first);
        }
      },
      decls: 6,
      vars: 0,
      consts: [[1, "text-center"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "editEvent", "deleteEvent"]],
      template: function NoNgrxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bookmark Manager No NgRx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoNgrxComponent_Template_button_click_3_listener() {
            return ctx.openDialog(ctx.dialogActions.ADD, {});
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add new ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-bookmark-table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editEvent", function NoNgrxComponent_Template_app_bookmark_table_editEvent_5_listener($event) {
            return ctx.openDialog(ctx.dialogActions.EDIT, $event);
          })("deleteEvent", function NoNgrxComponent_Template_app_bookmark_table_deleteEvent_5_listener($event) {
            return ctx.openDialog(ctx.dialogActions.DELETE, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _components_bookmark_table_bookmark_table_component__WEBPACK_IMPORTED_MODULE_3__["BookmarkTableComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoNgrxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-no-ngrx',
          templateUrl: './no-ngrx.component.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        childTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_bookmark_table_bookmark_table_component__WEBPACK_IMPORTED_MODULE_3__["BookmarkTableComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/outlets/with-ngrx/with-ngrx.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/outlets/with-ngrx/with-ngrx.component.ts ***!
    \**********************************************************/

  /*! exports provided: WithNgrxComponent */

  /***/
  function srcAppOutletsWithNgrxWithNgrxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithNgrxComponent", function () {
      return WithNgrxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_store_bookmark_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/bookmark/bookmark.actions */
    "./src/app/store/bookmark/bookmark.actions.ts");
    /* harmony import */


    var src_app_store_bookmark_bookmark_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/store/bookmark/bookmark.selector */
    "./src/app/store/bookmark/bookmark.selector.ts");
    /* harmony import */


    var _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/bookmark-dialog/action.types */
    "./src/app/components/bookmark-dialog/action.types.ts");
    /* harmony import */


    var _components_bookmark_dialog_bookmark_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/bookmark-dialog/bookmark-dialog.component */
    "./src/app/components/bookmark-dialog/bookmark-dialog.component.ts");
    /* harmony import */


    var _components_bookmark_table_ngrx_bookmark_table_ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/bookmark-table-ngrx/bookmark-table-ngrx.component */
    "./src/app/components/bookmark-table-ngrx/bookmark-table-ngrx.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function WithNgrxComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bookmark Manager With NgRx");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WithNgrxComponent_ng_container_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var model_r1 = ctx.ngIf;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.dialogAction$.next({
            action: ctx_r2.dialogActions.ADD,
            bookmark: null,
            nextId: model_r1.nextId
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add new ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-bookmark-table-ngrx", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editEvent", function WithNgrxComponent_ng_container_0_Template_app_bookmark_table_ngrx_editEvent_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var model_r1 = ctx.ngIf;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.dialogAction$.next({
            action: ctx_r4.dialogActions.EDIT,
            bookmark: $event,
            nextId: model_r1.nextId
          });
        })("deleteEvent", function WithNgrxComponent_ng_container_0_Template_app_bookmark_table_ngrx_deleteEvent_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var model_r1 = ctx.ngIf;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.dialogAction$.next({
            action: ctx_r5.dialogActions.DELETE,
            bookmark: $event,
            nextId: model_r1.nextId
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var WithNgrxComponent = /*#__PURE__*/function () {
      function WithNgrxComponent(dialog, store) {
        _classCallCheck(this, WithNgrxComponent);

        this.dialog = dialog;
        this.store = store;
        this.nextId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_bookmark_bookmark_selector__WEBPACK_IMPORTED_MODULE_5__["getNextId"]));
        this.dialogAction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dialogActions = _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_6__["DialogActions"];
      }

      _createClass(WithNgrxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.store.dispatch(src_app_store_bookmark_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["load"]());
          this.model$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.nextId$, this.dialogAction$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref) {
            var action = _ref.action,
                bookmark = _ref.bookmark,
                nextId = _ref.nextId;
            return _this4.openDialog(action, bookmark, nextId);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                nextId = _ref3[0],
                _ = _ref3[1];

            return {
              nextId: nextId
            };
          }));
        }
      }, {
        key: "openDialog",
        value: function openDialog(action) {
          var _this5 = this;

          var bookmark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var nextId = arguments.length > 2 ? arguments[2] : undefined;

          if (action === _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_6__["DialogActions"].ADD) {
            bookmark = Object.assign(Object.assign({}, bookmark), {
              id: nextId
            });
          }

          return this.dialog.open(_components_bookmark_dialog_bookmark_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BookmarkDialogComponent"], {
            data: {
              bookmark: bookmark,
              action: action
            }
          }).afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            //Prevent ESC key
            if (result) {
              switch (result.action) {
                case _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_6__["DialogActions"].ADD:
                  _this5.store.dispatch(src_app_store_bookmark_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["add"](result.data));

                  break;

                case _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_6__["DialogActions"].EDIT:
                  _this5.store.dispatch(src_app_store_bookmark_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["edit"](result.data));

                  break;

                case _components_bookmark_dialog_action_types__WEBPACK_IMPORTED_MODULE_6__["DialogActions"].DELETE:
                  _this5.store.dispatch(src_app_store_bookmark_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["remove"](result.data));

                  break;
              }
            }
          }));
        }
      }]);

      return WithNgrxComponent;
    }();

    WithNgrxComponent.ɵfac = function WithNgrxComponent_Factory(t) {
      return new (t || WithNgrxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    WithNgrxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WithNgrxComponent,
      selectors: [["app-with-ngrx"]],
      viewQuery: function WithNgrxComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_bookmark_table_ngrx_bookmark_table_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["BookmarkTableNgrxComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childTableNgrx = _t.first);
        }
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "editEvent", "deleteEvent"]],
      template: function WithNgrxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WithNgrxComponent_ng_container_0_Template, 7, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.model$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _components_bookmark_table_ngrx_bookmark_table_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["BookmarkTableNgrxComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithNgrxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-with-ngrx',
          templateUrl: './with-ngrx.component.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, {
        childTableNgrx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_bookmark_table_ngrx_bookmark_table_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["BookmarkTableNgrxComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/bookmark.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/bookmark.service.ts ***!
    \**********************************************/

  /*! exports provided: BookmarkService */

  /***/
  function srcAppServicesBookmarkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkService", function () {
      return BookmarkService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_data_bookmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/data/bookmark */
    "./src/data/bookmark.ts");

    var BookmarkService = /*#__PURE__*/function () {
      function BookmarkService() {
        _classCallCheck(this, BookmarkService);

        this.storeKey = 'bookmarkList';
      }

      _createClass(BookmarkService, [{
        key: "getBookmarks",
        value: function getBookmarks() {
          var bookmarkList = this.getList();

          if (!bookmarkList) {
            bookmarkList = src_data_bookmark__WEBPACK_IMPORTED_MODULE_1__["ELEMENT_DATA"];
            this.saveList(bookmarkList);
          }

          return bookmarkList;
        }
      }, {
        key: "addBookmark",
        value: function addBookmark(bookmark) {
          this.saveList([].concat(_toConsumableArray(this.getList()), [bookmark]));
        }
      }, {
        key: "editBookmark",
        value: function editBookmark(bookmark) {
          this.saveList(this.getList().filter(function (value) {
            if (value.id === bookmark.id) {
              value.name = bookmark.name;
              value.url = bookmark.url;
              value.group = bookmark.group;
            }

            return true;
          }));
        }
      }, {
        key: "deleteBookmark",
        value: function deleteBookmark(id) {
          this.saveList(this.getList().filter(function (item) {
            return item.id !== id;
          }));
        }
      }, {
        key: "saveList",
        value: function saveList(list) {
          window.localStorage.setItem(this.storeKey, JSON.stringify(list));
        }
      }, {
        key: "getList",
        value: function getList() {
          return JSON.parse(window.localStorage.getItem(this.storeKey));
        }
      }]);

      return BookmarkService;
    }();

    BookmarkService.ɵfac = function BookmarkService_Factory(t) {
      return new (t || BookmarkService)();
    };

    BookmarkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BookmarkService,
      factory: BookmarkService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/bookmark/bookmark.actions.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/bookmark/bookmark.actions.ts ***!
    \****************************************************/

  /*! exports provided: load, loadSuccess, add, edit, remove */

  /***/
  function srcAppStoreBookmarkBookmarkActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "load", function () {
      return load;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadSuccess", function () {
      return loadSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "add", function () {
      return add;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "edit", function () {
      return edit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "remove", function () {
      return remove;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var bookmarkText = '[Bookmark]';
    var load = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("".concat(bookmarkText, "  Load"));
    var loadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("".concat(bookmarkText, "  Load success"), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var add = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("".concat(bookmarkText, "  Add"), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var edit = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("".concat(bookmarkText, "  Edit"), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var remove = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("".concat(bookmarkText, "  Remove"), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/bookmark/bookmark.effects.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/bookmark/bookmark.effects.ts ***!
    \****************************************************/

  /*! exports provided: BookmarkEffects */

  /***/
  function srcAppStoreBookmarkBookmarkEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkEffects", function () {
      return BookmarkEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _bookmark_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bookmark.actions */
    "./src/app/store/bookmark/bookmark.actions.ts");
    /* harmony import */


    var src_app_services_bookmark_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/bookmark.service */
    "./src/app/services/bookmark.service.ts");

    var BookmarkEffects = function BookmarkEffects(actions$, service) {
      var _this6 = this;

      _classCallCheck(this, BookmarkEffects);

      this.actions$ = actions$;
      this.service = service;
      this.load$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["load"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["loadSuccess"])({
            payload: _this6.service.getBookmarks()
          }));
        }));
      });
      this.add$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["add"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (bookmark) {
          _this6.service.addBookmark(bookmark);
        }));
      }, {
        dispatch: false
      });
      this.edit$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["edit"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (bookmark) {
          _this6.service.editBookmark(bookmark);
        }));
      }, {
        dispatch: false
      });
      this.remove$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_4__["remove"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (bookmark) {
          _this6.service.deleteBookmark(bookmark.id);
        }));
      }, {
        dispatch: false
      });
    };

    BookmarkEffects.ɵfac = function BookmarkEffects_Factory(t) {
      return new (t || BookmarkEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_bookmark_service__WEBPACK_IMPORTED_MODULE_5__["BookmarkService"]));
    };

    BookmarkEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BookmarkEffects,
      factory: BookmarkEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_services_bookmark_service__WEBPACK_IMPORTED_MODULE_5__["BookmarkService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/bookmark/bookmark.reducer.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/bookmark/bookmark.reducer.ts ***!
    \****************************************************/

  /*! exports provided: adapter, initialState, bookmarkReducer */

  /***/
  function srcAppStoreBookmarkBookmarkReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adapter", function () {
      return adapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bookmarkReducer", function () {
      return bookmarkReducer;
    });
    /* harmony import */


    var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/entity */
    "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _bookmark_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bookmark.actions */
    "./src/app/store/bookmark/bookmark.actions.ts");

    var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
    var initialState = adapter.getInitialState({
      nextId: 1
    });

    var _bookmarkReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_2__["load"], function (state) {
      return state;
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_2__["loadSuccess"], function (state, _ref4) {
      var payload = _ref4.payload;
      return adapter.setAll(payload, Object.assign(Object.assign({}, state), {
        nextId: payload.length ? payload[payload.length - 1].id + 1 : 1
      }));
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_2__["add"], function (state, bookmark) {
      return adapter.addOne(bookmark, Object.assign(Object.assign({}, state), {
        nextId: state.nextId + 1
      }));
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_2__["edit"], function (state, bookmark) {
      return adapter.upsertOne(bookmark, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_2__["remove"], function (state, bookmark) {
      return adapter.removeOne(bookmark.id, state);
    }));

    function bookmarkReducer(state, action) {
      return _bookmarkReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/bookmark/bookmark.selector.ts":
  /*!*****************************************************!*\
    !*** ./src/app/store/bookmark/bookmark.selector.ts ***!
    \*****************************************************/

  /*! exports provided: selectBookmarkState, selectBookmarkEntities, selectAllBookmarks, getNextId */

  /***/
  function srcAppStoreBookmarkBookmarkSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectBookmarkState", function () {
      return selectBookmarkState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectBookmarkEntities", function () {
      return selectBookmarkEntities;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAllBookmarks", function () {
      return selectAllBookmarks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNextId", function () {
      return getNextId;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _bookmark_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bookmark.reducer */
    "./src/app/store/bookmark/bookmark.reducer.ts");

    var _bookmark_reducer__WE = _bookmark_reducer__WEBPACK_IMPORTED_MODULE_1__["adapter"].getSelectors(),
        selectEntities = _bookmark_reducer__WE.selectEntities,
        selectAll = _bookmark_reducer__WE.selectAll;

    var selectBookmarkState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('bookmarks');
    var selectBookmarkEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBookmarkState, selectEntities);
    var selectAllBookmarks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBookmarkState, selectAll);
    var getNextId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBookmarkState, function (state) {
      return state.nextId;
    });
    /***/
  },

  /***/
  "./src/data/bookmark.ts":
  /*!******************************!*\
    !*** ./src/data/bookmark.ts ***!
    \******************************/

  /*! exports provided: ELEMENT_DATA */

  /***/
  function srcDataBookmarkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA", function () {
      return ELEMENT_DATA;
    });

    var ELEMENT_DATA = [{
      id: 1,
      name: 'Angular 8',
      url: '#',
      group: 'angular'
    }, {
      id: 2,
      name: 'Angular JS',
      url: '#',
      group: 'angular'
    }, {
      id: 3,
      name: 'Vue JS',
      url: '#',
      group: 'vue'
    }, {
      id: 4,
      name: 'React JS',
      url: '#',
      group: 'react'
    }, {
      id: 5,
      name: 'React with Redux',
      url: '#',
      group: 'react'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\alex_\Desktop\Bookmark-App\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map