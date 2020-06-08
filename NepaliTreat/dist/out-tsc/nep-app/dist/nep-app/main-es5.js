function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
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
            var AppComponent = function AppComponent() {
                _classCallCheck(this, AppComponent);
                this.title = 'nep-app';
            };
            AppComponent.ɵfac = function AppComponent_Factory(t) {
                return new (t || AppComponent)();
            };
            AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: AppComponent,
                selectors: [["app-root"]],
                decls: 21,
                vars: 2,
                consts: [[1, "content", 2, "text-align", "center"], [2, "display", "block"], ["width", "300", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/tutorial"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/cli"], ["target", "_blank", "rel", "noopener", "href", "https://blog.angular.io/"]],
                template: function AppComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Here are some links to help you start: ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tour of Heroes");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CLI Documentation");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Angular blog");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "! ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " app is running!");
                    }
                },
                encapsulation: 2
            });
            /*@__PURE__*/
            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                        args: [{
                                selector: 'app-root',
                                template: "\n    <!--The content below is only a placeholder and can be replaced.-->\n    <div style=\"text-align:center\" class=\"content\">\n      <h1>\n        Welcome to {{title}}!\n      </h1>\n      <span style=\"display: block\">{{ title }} app is running!</span>\n      <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </div>\n    <h2>Here are some links to help you start: </h2>\n    <ul>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n      </li>\n    </ul>\n    \n  ",
                                styles: []
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
            var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./app.component */
            "./src/app/app.component.ts");
            var AppModule = function AppModule() {
                _classCallCheck(this, AppModule);
            };
            AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
                type: AppModule,
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            });
            AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
                factory: function AppModule_Factory(t) {
                    return new (t || AppModule)();
                },
                providers: [],
                imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
            });
            (function () {
                (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
                });
            })();
            /*@__PURE__*/
            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                        args: [{
                                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
                                providers: [],
                                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
                            }]
                    }], null, null);
            })();
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
            /*! C:\Users\i25690\MVC-WebApp\NepaliTreat\NepaliTreat\nep-app\src\main.ts */
            "./src/main.ts");
            /***/
        }
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map