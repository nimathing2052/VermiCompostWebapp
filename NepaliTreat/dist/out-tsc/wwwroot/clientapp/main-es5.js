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
        "./ClientApp/app/app.component.ts": 
        /*!****************************************!*\
          !*** ./ClientApp/app/app.component.ts ***!
          \****************************************/
        /*! exports provided: AppComponent */
        /***/
        function ClientAppAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
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
                this.title = 'Nepali Treat';
            };
            AppComponent.ɵfac = function AppComponent_Factory(t) {
                return new (t || AppComponent)();
            };
            AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: AppComponent,
                selectors: [["the-shop"]],
                decls: 1,
                vars: 0,
                template: function AppComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "./app.component.html");
                    }
                },
                encapsulation: 2
            });
            /*@__PURE__*/
            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                        args: [{
                                selector: 'the-shop',
                                template: "./app.component.html",
                                styles: []
                            }]
                    }], null, null);
            })();
            /***/
        },
        /***/
        "./ClientApp/app/app.module.ts": 
        /*!*************************************!*\
          !*** ./ClientApp/app/app.module.ts ***!
          \*************************************/
        /*! exports provided: AppModule */
        /***/
        function ClientAppAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
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
            "./ClientApp/app/app.component.ts");
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
        "./ClientApp/environments/environment.ts": 
        /*!***********************************************!*\
          !*** ./ClientApp/environments/environment.ts ***!
          \***********************************************/
        /*! exports provided: environment */
        /***/
        function ClientAppEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
        "./ClientApp/main.ts": 
        /*!***************************!*\
          !*** ./ClientApp/main.ts ***!
          \***************************/
        /*! no exports provided */
        /***/
        function ClientAppMainTs(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! @angular/core */
            "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./environments/environment */
            "./ClientApp/environments/environment.ts");
            /* harmony import */
            var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./app/app.module */
            "./ClientApp/app/app.module.ts");
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
        /*!*********************************!*\
          !*** multi ./ClientApp/main.ts ***!
          \*********************************/
        /*! no static exports found */
        /***/
        function _(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
            /*! C:\Users\i25690\MVC-WebApp\NepaliTreat\NepaliTreat\ClientApp\main.ts */
            "./ClientApp/main.ts");
            /***/
        }
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map