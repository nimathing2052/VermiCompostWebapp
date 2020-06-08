(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./ClientApp/app/app.component.ts": 
        /*!****************************************!*\
          !*** ./ClientApp/app/app.component.ts ***!
          \****************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _shop_productList_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop/productList.component */ "./ClientApp/app/shop/productList.component.ts");
            /* harmony import */ var _shop_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop/cart.component */ "./ClientApp/app/shop/cart.component.ts");
            class AppComponent {
                constructor() {
                    this.title = 'Product List';
                }
            }
            AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
            AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["the-shop"]], decls: 8, vars: 1, consts: [[1, "row"], [1, "col-md-9"], [1, "col-md-3"], [1, "card", "bg-light", "p-2"]], template: function AppComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "product-list");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "the-cart");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
                    }
                }, directives: [_shop_productList_component__WEBPACK_IMPORTED_MODULE_1__["ProductList"], _shop_cart_component__WEBPACK_IMPORTED_MODULE_2__["Cart"]], encapsulation: 2 });
            /*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                        args: [{
                                selector: 'the-shop',
                                templateUrl: "./app.component.html",
                                styles: []
                            }]
                    }], null, null);
            })();
            /***/ 
        }),
        /***/ "./ClientApp/app/app.module.ts": 
        /*!*************************************!*\
          !*** ./ClientApp/app/app.module.ts ***!
          \*************************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
            /* harmony import */ var _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop/productList.component */ "./ClientApp/app/shop/productList.component.ts");
            /* harmony import */ var _shop_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/cart.component */ "./ClientApp/app/shop/cart.component.ts");
            /* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/dataService */ "./ClientApp/app/shared/dataService.ts");
            class AppModule {
            }
            AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
            AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
                    _shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]
                ], imports: [[
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                    ]] });
            (function () {
                (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__["ProductList"],
                        _shop_cart_component__WEBPACK_IMPORTED_MODULE_5__["Cart"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] });
            })();
            /*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                        args: [{
                                declarations: [
                                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                                    _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__["ProductList"],
                                    _shop_cart_component__WEBPACK_IMPORTED_MODULE_5__["Cart"]
                                ],
                                imports: [
                                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                                ],
                                providers: [
                                    _shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]
                                ],
                                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                            }]
                    }], null, null);
            })();
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/dataService.ts": 
        /*!*********************************************!*\
          !*** ./ClientApp/app/shared/dataService.ts ***!
          \*********************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ "./ClientApp/app/shared/order.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
            class DataService {
                constructor(http) {
                    this.http = http;
                    this.products = [];
                }
                loadProducts() {
                    return this.http.get("/api/products")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                        this.products = data;
                        return true;
                    }));
                }
                addToOrder(newProduct) {
                    if (this.order) {
                        this.order = new _order__WEBPACK_IMPORTED_MODULE_2__["Order"]();
                    }
                    var item = new _order__WEBPACK_IMPORTED_MODULE_2__["OrderItem"]();
                    item.productId = newProduct.id;
                    item.productCategory = newProduct.category;
                    item.productDescription = newProduct.description;
                    item.productSize = newProduct.size;
                    item.productTitle = newProduct.title;
                    item.productVermiImageId = newProduct.vermiImageID;
                    item.productManufacturer = newProduct.manufacturer;
                    item.unitPrice = newProduct.price;
                    item.quantity = 1;
                    this.order.items.push(item);
                }
            }
            DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
            DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
            /*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
                    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null);
            })();
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/order.ts": 
        /*!***************************************!*\
          !*** ./ClientApp/app/shared/order.ts ***!
          \***************************************/
        /*! exports provided: Order, OrderItem */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function () { return Order; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function () { return OrderItem; });
            class Order {
                constructor() {
                    this.orderDate = new Date();
                    this.items = new Array();
                }
            }
            class OrderItem {
            }
            /***/ 
        }),
        /***/ "./ClientApp/app/shop/cart.component.ts": 
        /*!**********************************************!*\
          !*** ./ClientApp/app/shop/cart.component.ts ***!
          \**********************************************/
        /*! exports provided: Cart */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function () { return Cart; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
            class Cart {
                constructor(data) {
                    this.data = data;
                }
            }
            Cart.ɵfac = function Cart_Factory(t) { return new (t || Cart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
            Cart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cart, selectors: [["the-cart"]], decls: 4, vars: 1, template: function Cart_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shopping Cart");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Count: ", ctx.data.order.items.length, "");
                    }
                }, encapsulation: 2 });
            /*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cart, [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                        args: [{
                                selector: "the-cart",
                                templateUrl: "cart.component.html",
                                styleUrls: []
                            }]
                    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null);
            })();
            /***/ 
        }),
        /***/ "./ClientApp/app/shop/productList.component.ts": 
        /*!*****************************************************!*\
          !*** ./ClientApp/app/shop/productList.component.ts ***!
          \*****************************************************/
        /*! exports provided: ProductList */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function () { return ProductList; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
            function ProductList_div_1_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 6);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Price");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Brand");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pack Size");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Application");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Packaging Type");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Manufacturer");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Buy");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    const p_r1 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/images/", p_r1.vermiImageID, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", p_r1.title);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r1.category, " - ", p_r1.size, "");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 10, p_r1.price, "NRs:", true), "");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r1.title, " ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r1.size, "");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r1.description, "");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r1.packagingType, "");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r1.manufacturer, "");
                }
            }
            class ProductList {
                constructor(data) {
                    this.data = data;
                    this.products = [];
                }
                ngOnInit() {
                    this.data.loadProducts()
                        .subscribe(success => {
                        if (success) {
                            this.products = this.data.products;
                        }
                    });
                }
            }
            ProductList.ɵfac = function ProductList_Factory(t) { return new (t || ProductList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
            ProductList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductList, selectors: [["product-list"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "product-info col-md-4 well well-lg", 4, "ngFor", "ngForOf"], [1, "product-info", "col-md-4", "well", "well-lg"], [1, "card", "bg-light", "mb-3", 2, "max-width", "18rem"], [1, "img-fluid", 3, "src", "alt"], [1, "product-name"], [1, "product-props"], ["id", "buyButton", 1, "btn", "btn-success"]], template: function ProductList_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductList_div_1_Template, 33, 14, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
                    }
                }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".product-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    max-width: 125px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.product-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9zaG9wL3Byb2R1Y3RMaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbmZvIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIC5wcm9kdWN0LW5hbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"] });
            /*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductList, [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                        args: [{
                                selector: "product-list",
                                templateUrl: "productList.component.html",
                                styleUrls: ["productList.component.css"]
                            }]
                    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null);
            })();
            /***/ 
        }),
        /***/ "./ClientApp/environments/environment.ts": 
        /*!***********************************************!*\
          !*** ./ClientApp/environments/environment.ts ***!
          \***********************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            const environment = {
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
        }),
        /***/ "./ClientApp/main.ts": 
        /*!***************************!*\
          !*** ./ClientApp/main.ts ***!
          \***************************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(err => console.error(err));
            /***/ 
        }),
        /***/ 0: 
        /*!*********************************!*\
          !*** multi ./ClientApp/main.ts ***!
          \*********************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\i25690\MVC-WebApp\NepaliTreat\NepaliTreat\ClientApp\main.ts */ "./ClientApp/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map