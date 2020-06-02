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


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_goods_goods_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/goods/goods.component */
    "./src/app/components/goods/goods.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");
    /* harmony import */


    var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/guards/auth.guard */
    "./src/app/services/guards/auth.guard.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup',
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'cart',
      component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
      canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'admin',
      component: _components_goods_goods_component__WEBPACK_IMPORTED_MODULE_6__["GoodsComponent"]
    }, {
      path: 'profile',
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
    }, {
      path: '**',
      component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
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


    var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-loading-bar/core */
    "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'market';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 1,
      consts: [[3, "includeSpinner"], [1, "container"], [1, "row"], [1, "col-md-12"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("includeSpinner", false);
        }
      },
      directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__["LoadingBarComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-loading-bar/router */
    "./node_modules/@ngx-loading-bar/router/__ivy_ngcc__/fesm2015/ngx-loading-bar-router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_goods_goods_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/goods/goods.component */
    "./src/app/components/goods/goods.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/loading-spinner/loading-spinner.component */
    "./src/app/shared/loading-spinner/loading-spinner.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./shared/alert/alert.component */
    "./src/app/shared/alert/alert.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp({
        apiKey: "AIzaSyD9zyOQR1lA8oTVpKvHdHl_66jvgDPRoto",
        authDomain: "market-e479a.firebaseapp.com",
        databaseURL: "https://market-e479a.firebaseio.com",
        projectId: "market-e479a",
        storageBucket: "market-e479a.appspot.com",
        messagingSenderId: "174421730375",
        appId: "1:174421730375:web:a9f5e00cb8d0b33be43d62",
        measurementId: "G-Q78YXVZ53V"
      }), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_10__["LoadingBarRouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"], _components_goods_goods_component__WEBPACK_IMPORTED_MODULE_16__["GoodsComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_20__["LoadingSpinnerComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__["AlertComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_10__["LoadingBarRouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"], _components_goods_goods_component__WEBPACK_IMPORTED_MODULE_16__["GoodsComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_20__["LoadingSpinnerComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__["AlertComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp({
            apiKey: "AIzaSyD9zyOQR1lA8oTVpKvHdHl_66jvgDPRoto",
            authDomain: "market-e479a.firebaseapp.com",
            databaseURL: "https://market-e479a.firebaseio.com",
            projectId: "market-e479a",
            storageBucket: "market-e479a.appspot.com",
            messagingSenderId: "174421730375",
            appId: "1:174421730375:web:a9f5e00cb8d0b33be43d62",
            measurementId: "G-Q78YXVZ53V"
          }), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_10__["LoadingBarRouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/loading-spinner/loading-spinner.component */
    "./src/app/shared/loading-spinner/loading-spinner.component.ts");

    function CartComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_tr_14_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var good_r40 = ctx.$implicit;
          return good_r40.amount = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_14_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var i_r41 = ctx.index;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.onSave(i_r41);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_14_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var i_r41 = ctx.index;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.onDelete(i_r41);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var good_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, good_r40.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, good_r40.price));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", good_r40.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, good_r40.price * good_r40.amount));
      }
    }

    function CartComponent_app_loading_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner");
      }
    }

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(cartService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.loadingSpinner = true;
        this.cart = [];
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.cartService.getCart().subscribe(function (cart) {
            _this.cart = cart.map(function (shopping) {
              return Object.assign({
                id: shopping.payload.doc.id
              }, shopping.payload.doc.data());
            });
            _this.loadingSpinner = false;
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(index) {
          this.cartService.delete(this.cart[index].id);
        }
      }, {
        key: "onSave",
        value: function onSave(index) {
          this.cartService.save(this.cart[index].id, this.cart[index].amount);
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 16,
      vars: 2,
      consts: [[1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "number", "placeholder", "Amount (Kg)", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_tr_14_Template, 18, 10, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartComponent_app_loading_spinner_15_Template, 1, 0, "app-loading-spinner", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSpinner);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 121,
      vars: 0,
      consts: [[1, "footer-wrapper"], [1, "top-img"], [1, "container-fluid"], [1, "footer-mid-part"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "footer-section-one"], [1, "footer-heading"], [1, "footer-contact-box"], [1, "footer-contact-text"], [1, "clr"], ["href", "#"], ["href", "fax:+012-3456-789"], ["href", "http://www.abooda.ml/project1/bigenja/"], [1, "footer-section-two"], [1, "footer-link"], ["routerLink", "/"], [1, "footer-section-three"], [1, "footer-form"], ["method", "post", "action", "#"], [1, "footer-form-box"], ["type", "text", "placeholder", "Name", 1, "footer-form-style"], ["type", "text", "placeholder", "Email", 1, "footer-form-style"], ["type", "text", "placeholder", "Phone Number", 1, "footer-form-style"], ["type", "submit", "value", "SUBMIT", 1, "footer-form-submit-style"], [1, "footer-bottom"], [1, "col-lg-12", "col-md-12", "col-sm-12"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address: Cairo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "01061711822");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "+012-3456-789");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "bodeahmed827@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "http://www.abooda.ml/project1/bigenja/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Quick Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Web Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Graphic Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Web Marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Our Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Linux Hosting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Windows Hosting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Domain Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "SEO Promotion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Our Plans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Latest Offers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sitemap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Website Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Get in touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Copyright 2020 Abooda Ahmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin:0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n  }\r\n  body[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n  }\r\n  .clr[_ngcontent-%COMP%]{\r\n    clear: both;\r\n  }\r\n  .footer-wrapper[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    min-height: 250px;\r\n    margin:auto;\r\n    background-color: black;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    \r\n    padding-top: -10px;\r\n    bottom: 0px;\r\n  }\r\n  .footer-mid-part[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n  }\r\n  .footer-section-one[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    padding: 20px 20px;\r\n    background: rgba(255,255,255,.1);\r\n  }\r\n  .footer-section-two[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    padding: 20px 20px;\r\n  }\r\n  .footer-section-three[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    padding: 20px 20px;\r\n    background: rgba(255,255,255,.1);\r\n  }\r\n  .footer-heading[_ngcontent-%COMP%]{\r\n     width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n  }\r\n  .footer-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    text-align: left;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    margin: 0px;\r\n  }\r\n  .footer-contact-box[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;;\r\n    margin: auto;\r\n    margin-top: 13px;\r\n  }\r\n  .footer-contact-icon[_ngcontent-%COMP%]{\r\n    width: 25px;\r\n    height: 25px;\r\n    float: left;\r\n  }\r\n  .footer-contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 20px;\r\n  }\r\n  .footer-contact-text[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n    height: auto;\r\n    float: left;\r\n    margin-left: 10px;\r\n  }\r\n  .footer-contact-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-align: left;\r\n    color: #fff;\r\n    cursor: pointer;\r\n  }\r\n  .footer-contact-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-align: left;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  \r\n  }\r\n  .footer-contact-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{\r\n    color: #f00;\r\n  }\r\n  .footer-contact-box[_ngcontent-%COMP%]:hover   .footer-contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n     color: #f00;\r\n  }\r\n  .footer-contact-box[_ngcontent-%COMP%]:hover   .footer-contact-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #f00;\r\n  }\r\n  .footer-link[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height:auto;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n  }\r\n  .footer-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin:0px;\r\n    padding: 0px;\r\n  }\r\n  .footer-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    text-align: center;\r\n    padding-top: 5px;\r\n  }\r\n  .footer-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n     text-transform: capitalize;;\r\n  }\r\n  .footer-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: #f00;\r\n  }\r\n  .footer-section-two[_ngcontent-%COMP%]   .footer-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  .footer-form[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n  }\r\n  .footer-form-box[_ngcontent-%COMP%]{\r\n     width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n  }\r\n  .footer-form-style[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 40px;\r\n    border-left: none;\r\n    border-top: none;\r\n    border-right: none;\r\n    border-bottom:1px solid rgba(255,255,255,.1);\r\n    background:transparent;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    padding: 0px 10px;\r\n    color: #fff;\r\n  }\r\n  .footer-form-submit-style[_ngcontent-%COMP%]{\r\n    width: 129px;\r\n    height: 35px;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    background: rgba(255,255,255,.5);\r\n    border:none;\r\n    margin-top: 1px;\r\n  }\r\n  .footer-form-submit-style[_ngcontent-%COMP%]:active{\r\n    background: #f00;\r\n  }\r\n  .footer-bottom[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n  .footer-bottom[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n  .top-img[_ngcontent-%COMP%]{\r\n    background: url('top-divder.png');\r\n    top: -20px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 55px;\r\n  }\r\n  \r\n  @media only screen and (max-width: 1199px){\r\n    .footer-wrapper[_ngcontent-%COMP%]{\r\n      position: relative;\r\n      background-attachment: scroll;\r\n    }\r\n    .footer-section-one[_ngcontent-%COMP%]{\r\n      padding: 12px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0NBQWdDO0VBQ2xDO0VBQ0E7S0FDRyxXQUFXO0lBQ1osWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gscUJBQXFCOztFQUV2QjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7S0FDRyxXQUFXO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxxQkFBcUI7S0FDcEIsMEJBQTBCO0VBQzdCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7S0FDRyxXQUFXO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUNBQStDO0lBQy9DLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUVBLGtCQUFrQjtFQUNsQjtJQUNFO01BQ0Usa0JBQWtCO01BQ2xCLDZCQUE2QjtJQUMvQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmNscntcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAuZm9vdGVyLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgcGFkZGluZy10b3A6IC0xMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXItbWlkLXBhcnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmZvb3Rlci1zZWN0aW9uLW9uZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcbiAgfVxyXG4gIC5mb290ZXItc2VjdGlvbi10d297XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICB9XHJcbiAgLmZvb3Rlci1zZWN0aW9uLXRocmVle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcclxuICB9XHJcbiAgLmZvb3Rlci1oZWFkaW5ne1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuZm9vdGVyLWhlYWRpbmcgaDJ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXItY29udGFjdC1ib3h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bzs7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gIH1cclxuICAuZm9vdGVyLWNvbnRhY3QtaWNvbntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC5mb290ZXItY29udGFjdC1pY29uIGl7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLmZvb3Rlci1jb250YWN0LXRleHR7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgLmZvb3Rlci1jb250YWN0LXRleHQgcHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmZvb3Rlci1jb250YWN0LXRleHQgcCBhe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIFxyXG4gIH1cclxuICAuZm9vdGVyLWNvbnRhY3QtdGV4dCBwOmhvdmVye1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgfVxyXG4gIC5mb290ZXItY29udGFjdC1ib3g6aG92ZXIgLmZvb3Rlci1jb250YWN0LWljb24gaXtcclxuICAgICBjb2xvcjogI2YwMDtcclxuICB9XHJcbiAgLmZvb3Rlci1jb250YWN0LWJveDpob3ZlciAuZm9vdGVyLWNvbnRhY3QtdGV4dCBwIGF7XHJcbiAgICBjb2xvcjogI2YwMDtcclxuICB9XHJcbiAgLmZvb3Rlci1saW5re1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXItbGluayB1bHtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXItbGluayB1bCBsaXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5mb290ZXItbGluayB1bCBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7O1xyXG4gIH1cclxuICAuZm9vdGVyLWxpbmsgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjZjAwO1xyXG4gIH1cclxuICAuZm9vdGVyLXNlY3Rpb24tdHdvIC5mb290ZXItaGVhZGluZyBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvb3Rlci1mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyLWZvcm0tYm94e1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmZvb3Rlci1mb3JtLXN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmZvb3Rlci1mb3JtLXN1Ym1pdC1zdHlsZXtcclxuICAgIHdpZHRoOiAxMjlweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgfVxyXG4gIC5mb290ZXItZm9ybS1zdWJtaXQtc3R5bGU6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogI2YwMDtcclxuICB9XHJcbiAgLmZvb3Rlci1ib3R0b217XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyLWJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAudG9wLWltZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvdG9wLWRpdmRlci5wbmcpO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gIH1cclxuICBcclxuICAvKlJFU1BPTlNJVkUgQ09ERSovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpe1xyXG4gICAgLmZvb3Rlci13cmFwcGVye1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1zZWN0aW9uLW9uZXtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/goods/goods.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/goods/goods.component.ts ***!
    \*****************************************************/

  /*! exports provided: GoodsComponent */

  /***/
  function srcAppComponentsGoodsGoodsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoodsComponent", function () {
      return GoodsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_goods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/goods.service */
    "./src/app/services/goods.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["image"];

    var GoodsComponent =
    /*#__PURE__*/
    function () {
      function GoodsComponent(goodsService) {
        _classCallCheck(this, GoodsComponent);

        this.goodsService = goodsService;
      }

      _createClass(GoodsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNewGood",
        value: function addNewGood(form) {
          var name = form.value.name,
              price = form.value.price,
              image = this.image.nativeElement.files[0];
          this.goodsService.addNewGood(name, price, image).then(function (msg) {
            return console.log(msg);
          });
        }
      }]);

      return GoodsComponent;
    }();

    GoodsComponent.ɵfac = function GoodsComponent_Factory(t) {
      return new (t || GoodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_goods_service__WEBPACK_IMPORTED_MODULE_1__["GoodsService"]));
    };

    GoodsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GoodsComponent,
      selectors: [["app-goods"]],
      viewQuery: function GoodsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
        }
      },
      decls: 12,
      vars: 1,
      consts: [[1, "row"], [1, "col"], [1, "text-center"], [3, "ngSubmit"], ["f", "ngForm"], ["ngModel", "", "name", "name", "type", "text", "placeholder", "Name", "required", "", 1, "form-control"], ["ngModel", "", "name", "price", "type", "number", "placeholder", "Price", "required", "", 1, "form-control"], ["ngModel", "", "name", "image", "type", "file", "required", "", 1, "form-control"], ["image", ""], [1, "btn", "btn-primary", 3, "disabled"]],
      template: function GoodsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add new product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GoodsComponent_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.addNewGood(_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r46.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]],
      styles: ["input[_ngcontent-%COMP%]{\r\n    margin: 20px 0 20px 0px ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb29kcy9nb29kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nb29kcy9nb29kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4IDBweCA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-goods',
          templateUrl: './goods.component.html',
          styleUrls: ['./goods.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_goods_service__WEBPACK_IMPORTED_MODULE_1__["GoodsService"]
        }];
      }, {
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['image', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_goods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/goods.service */
    "./src/app/services/goods.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/loading-spinner/loading-spinner.component */
    "./src/app/shared/loading-spinner/loading-spinner.component.ts");

    function HomeComponent_div_2_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var good_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.addToCart(good_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_2_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_div_20_Template_div_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.buy(_r9.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_2_button_5_Template, 2, 0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Food");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_2_div_20_Template, 6, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var good_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", good_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", good_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.add !== good_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, good_r3.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, good_r3.price * 0.8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, good_r3.price));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.add === good_r3.id);
      }
    }

    function HomeComponent_pagination_controls_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function HomeComponent_pagination_controls_4_Template_pagination_controls_pageChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.pageActual = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_app_loading_spinner_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner");
      }
    }

    var _c0 = function _c0(a1) {
      return {
        itemsPerPage: 4,
        currentPage: a1
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(goodsService, cartService, authService, router) {
        _classCallCheck(this, HomeComponent);

        this.goodsService = goodsService;
        this.cartService = cartService;
        this.authService = authService;
        this.router = router;
        this.loadingSpinner = true;
        this.goods = [];
        this.add = '0';
        this.pageActual = 1;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.goodsSub = this.goodsService.getAllGoods().subscribe(function (data) {
            _this2.goods = data.map(function (element) {
              return Object.assign({
                id: element.payload.doc.id
              }, element.payload.doc.data());
            });
            _this2.loadingSpinner = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.goodsSub.unsubscribe();
        }
      }, {
        key: "addToCart",
        value: function addToCart(selectedId) {
          if (this.authService.userId === '0') {
            this.router.navigate(['/login']);
          } else {
            this.add = selectedId;
          }
        }
      }, {
        key: "buy",
        value: function buy(amount) {
          var _this3 = this;

          var indexProduct = this.goods.map(function (data) {
            return data.id;
          }).indexOf(this.add);
          var selectedProduct = this.goods[indexProduct];
          var product = {
            name: selectedProduct.name,
            amount: +amount,
            price: selectedProduct.price
          };
          this.cartService.addToCart(product).then(function () {
            _this3.add = '0';
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_goods_service__WEBPACK_IMPORTED_MODULE_1__["GoodsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 8,
      consts: [[1, "container"], [1, "row"], ["class", "product-card col-lg-3 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [3, "pageChange", 4, "ngIf"], [4, "ngIf"], [1, "product-card", "col-lg-3", "col-md-6", "col-sm-12"], [1, "single-product-item-two"], [1, "img-wrapper"], [1, "card-img-top", 3, "src", "alt"], [1, "hover"], ["class", "btn addtocart", 3, "click", 4, "ngIf"], [1, "content"], ["href", "#", 1, "category"], [1, "title"], [1, "price"], [1, "sprice"], [1, "dprice"], [1, "btn", "addtocart", 3, "click"], ["type", "number", "placeholder", "Amount (Kg)", 1, "form-control"], ["amount", ""], [1, "btn", "btn-success", 3, "click"], [3, "pageChange"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 21, 13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_pagination_controls_4_Template, 1, 0, "pagination-controls", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_app_loading_spinner_5_Template, 1, 0, "app-loading-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx.goods, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.pageActual)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSpinner);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
      styles: [".card-img-top[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n}\r\n\r\n.product-card[_ngcontent-%COMP%]{\r\n    margin: 20px 0;\r\n}\r\n\r\n.single-product-item-two[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    box-shadow: 0px 4px 30px 0px rgba(83, 44, 44, 0.3);\r\n    text-align: center;\r\n    margin-bottom: 30px; }\r\n\r\n.single-product-item-two.home-6[_ngcontent-%COMP%] {\r\n      box-shadow: none;\r\n      border-radius: 6px; }\r\n\r\n.single-product-item-two.home-6[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        border-top-left-radius: 6px;\r\n        border-top-right-radius: 6px; }\r\n\r\n.single-product-item-two.home-6[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\r\n        border-top-left-radius: 5px;\r\n        border-top-right-radius: 5px; }\r\n\r\n.single-product-item-two.home-6[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%] {\r\n          background-color: #c40d2b; }\r\n\r\n.single-product-item-two.home-6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .single-product-item-two.home-6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .single-product-item-two.home-6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%], .single-product-item-two.home-6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\r\n        font-family: \"Rubik\", sans-serif; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]:hover   .img-wrapper[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\r\n      visibility: visible;\r\n      opacity: 1; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]:hover   .img-wrapper[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%] {\r\n        \r\n        -webkit-transform: translateY(0px);\r\n        \r\n        transform: translateY(0px); }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\r\n      position: relative; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n        flex-direction: column;\r\n        -webkit-box-pack: center;\r\n        justify-content: center;\r\n        -webkit-box-align: center;\r\n        align-items: center;\r\n        width: 100%;\r\n        height: 100%;\r\n        background-color: rgba(26, 25, 25, 0.582);\r\n        -webkit-transition: all 0.3s ease-in;\r\n        transition: all 0.3s ease-in;\r\n        visibility: hidden;\r\n        opacity: 0; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%] {\r\n          display: inline-block;\r\n          background-color: red;\r\n          padding: 10px 25px;\r\n          border-radius: 25px;\r\n          color: #fff;\r\n          font-weight: 700;\r\n          \r\n          -webkit-transform: translateY(50px);\r\n          \r\n          transform: translateY(50px);\r\n          font-size: 12px;\r\n          text-transform: uppercase;\r\n          -webkit-transition: all 0.3s ease-in;\r\n          transition: all 0.3s ease-in; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]:hover {\r\n            opacity: .8; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n      border-top: none;\r\n      border-bottom-left-radius: 10px;\r\n      border-bottom-right-radius: 10px;\r\n      padding: 30px 0 22px 0; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\r\n        font-family: \"Poppins\", sans-serif;\r\n        color: #d1d0d0;\r\n        font-weight: 700;\r\n        background-color: #f5f5f5;\r\n        text-transform: uppercase;\r\n        letter-spacing: 2px;\r\n        padding: 5px 20px;\r\n        border-radius: 25px;\r\n        margin-bottom: 10px;\r\n        display: inline-block;\r\n        font-size: 12px; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        line-height: 28px;\r\n        color: #232b37;\r\n        margin-bottom: 5px; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        line-height: 26px; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .sprice[_ngcontent-%COMP%] {\r\n          color: #f45832;\r\n          margin-right: 10px; }\r\n\r\n.single-product-item-two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .dprice[_ngcontent-%COMP%] {\r\n          color: #b0b5bc; }\r\n\r\n.best-seller-area-four[_ngcontent-%COMP%] {\r\n    padding: 80px 0 60px 0; }\r\n\r\n.best-seller-area-five[_ngcontent-%COMP%] {\r\n    padding: 80px 0 50px 0; }\r\n\r\n.filter-ara-home-four[_ngcontent-%COMP%] {\r\n    padding: 80px 0 50px 0; }\r\n\r\n.filter-ara-home-five-two[_ngcontent-%COMP%] {\r\n    padding: 80px 0 50px 0; }\r\n\r\n.filter-area-menu-home-four[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px; }\r\n\r\n.filter-area-menu-home-four[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      display: block;\r\n      border: 2px solid #e5e5e5;\r\n      border-radius: 35px;\r\n      padding: 15px 0;\r\n      -webkit-box-pack: center;\r\n      justify-content: center; }\r\n\r\n.filter-area-menu-home-four[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n        display: inline-block; }\r\n\r\n.filter-area-menu-home-four[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n          font-size: 12px;\r\n          font-weight: 700;\r\n          text-transform: uppercase;\r\n          color: #8f97a2;\r\n          margin: 0 40px;\r\n          letter-spacing: 3px;\r\n          cursor: pointer;\r\n          border: none;\r\n          -webkit-transition: all 0.3s ease-in;\r\n          transition: all 0.3s ease-in; }\r\n\r\n.filter-area-menu-home-four[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .filter-area-menu-home-four[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n            color: #232b37; }\r\n\r\n.filter-ara-home-five[_ngcontent-%COMP%] {\r\n    padding: 80px 0 63px 0; }\r\n\r\n.banner-area-home-5[_ngcontent-%COMP%] {\r\n    padding-bottom: 80px; }\r\n\r\n.home-six-trending-sellter-filter-nav[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n    text-align: center; }\r\n\r\n.home-six-trending-sellter-filter-nav[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\r\n      border: none;\r\n      -webkit-box-pack: center;\r\n      justify-content: center; }\r\n\r\n.home-six-trending-sellter-filter-nav[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        margin: 0 8px;\r\n        padding: 15px 35px;\r\n        background-color: #f4f4f4;\r\n        color: #d1d0d0;\r\n        font-size: 12px;\r\n        text-transform: uppercase;\r\n        font-weight: 700;\r\n        border-radius: 6px;\r\n        -webkit-transition: all 0.3s ease-in;\r\n        transition: all 0.3s ease-in;\r\n        cursor: pointer;\r\n        border: none; }\r\n\r\n.home-six-trending-sellter-filter-nav[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .home-six-trending-sellter-filter-nav[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n          background-color: #2a9cf5;\r\n          color: #fff;\r\n          border: none; }\r\n\r\n.best-seller-home-6-filter-menu[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 30px; }\r\n\r\n.best-seller-home-6-filter-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n      margin: 0 8px;\r\n      padding: 15px 35px;\r\n      background-color: #3e4755;\r\n      color: #b1b6bd;\r\n      font-size: 12px;\r\n      text-transform: uppercase;\r\n      font-weight: 700;\r\n      border-radius: 6px;\r\n      border-radius: 25px;\r\n      -webkit-transition: all 0.3s ease-in;\r\n      transition: all 0.3s ease-in;\r\n      cursor: pointer;\r\n      font-family: \"Rubik\", sans-serif; }\r\n\r\n.best-seller-home-6-filter-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n        background-color: #43a4f6;\r\n        color: #fff; }\r\n\r\n.best-seller-home-6-filter-menu-small[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 30px; }\r\n\r\n.best-seller-home-6-filter-menu-small[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\r\n      border: none;\r\n      -webkit-box-pack: center;\r\n      justify-content: center; }\r\n\r\n.best-seller-home-6-filter-menu-small[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        border: none;\r\n        margin: 0 8px;\r\n        padding: 15px 35px;\r\n        color: #b1b6bd;\r\n        font-size: 12px;\r\n        text-transform: uppercase;\r\n        font-weight: 700;\r\n        border-radius: 6px;\r\n        border-radius: 25px;\r\n        -webkit-transition: all 0.3s ease-in;\r\n        transition: all 0.3s ease-in;\r\n        cursor: pointer;\r\n        font-family: \"Rubik\", sans-serif;\r\n        border: 2px solid #f0f0f0;\r\n        border-radius: 25px; }\r\n\r\n.best-seller-home-6-filter-menu-small[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .best-seller-home-6-filter-menu-small[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n          background-color: #43a4f6;\r\n          color: #fff;\r\n          border-color: #2a9cf5; }\r\n\r\n.best-seller-home-6-area[_ngcontent-%COMP%] {\r\n    padding: 80px 0 50px 0; }\r\n\r\n.best-seller-home-6-area-small[_ngcontent-%COMP%] {\r\n    padding: 80px 0 60px 0; }\r\n\r\n.best-seller-home-6-area-small.cart-page[_ngcontent-%COMP%] {\r\n      padding: 80px 0 60px; }\r\n\r\n.best-seller-vendor-area[_ngcontent-%COMP%] {\r\n    padding-bottom: 60px; }\r\n\r\n.best-seller-vendor-area.vendor-list-page[_ngcontent-%COMP%] {\r\n      padding: 40px 0 100px 0; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksdUJBQXVCO0lBRXZCLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUU7O0FBRXJCO01BRUUsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFFOztBQUVwQjtRQUNFLDJCQUEyQjtRQUMzQiw0QkFBNEIsRUFBRTs7QUFFaEM7UUFDRSwyQkFBMkI7UUFDM0IsNEJBQTRCLEVBQUU7O0FBRTlCO1VBQ0UseUJBQXlCLEVBQUU7O0FBRS9COzs7O1FBSUUsZ0NBQWdDLEVBQUU7O0FBRXRDO01BQ0UsbUJBQW1CO01BQ25CLFVBQVUsRUFBRTs7QUFDWjtRQUVFLFNBQVM7UUFDVCxrQ0FBa0M7UUFDbEMsMEJBQTBCO1FBQzFCLDBCQUEwQixFQUFFOztBQUNoQztNQUNFLGtCQUFrQixFQUFFOztBQUNwQjtRQUNFLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsTUFBTTtRQUNOLG9CQUFvQjtRQUVwQixhQUFhO1FBQ2IsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUU3QixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBRXhCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFFekIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG9DQUFvQztRQUdwQyw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLFVBQVUsRUFBRTs7QUFDWjtVQUNFLHFCQUFxQjtVQUNyQixxQkFBcUI7VUFDckIsa0JBQWtCO1VBQ2xCLG1CQUFtQjtVQUNuQixXQUFXO1VBQ1gsZ0JBQWdCO1VBRWhCLFNBQVM7VUFDVCxtQ0FBbUM7VUFDbkMsMEJBQTBCO1VBQzFCLDJCQUEyQjtVQUMzQixlQUFlO1VBQ2YseUJBQXlCO1VBQ3pCLG9DQUFvQztVQUdwQyw0QkFBNEIsRUFBRTs7QUFDOUI7WUFDRSxXQUFXLEVBQUU7O0FBQ3JCO01BQ0UsZ0JBQWdCO01BQ2hCLCtCQUErQjtNQUMvQixnQ0FBZ0M7TUFDaEMsc0JBQXNCLEVBQUU7O0FBQ3hCO1FBQ0Usa0NBQWtDO1FBQ2xDLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLGVBQWUsRUFBRTs7QUFDbkI7UUFDRSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxrQkFBa0IsRUFBRTs7QUFDdEI7UUFDRSxlQUFlO1FBQ2YsaUJBQWlCLEVBQUU7O0FBQ25CO1VBQ0UsY0FBYztVQUNkLGtCQUFrQixFQUFFOztBQUN0QjtVQUNFLGNBQWMsRUFBRTs7QUFFeEI7SUFDRSxzQkFBc0IsRUFBRTs7QUFFMUI7SUFDRSxzQkFBc0IsRUFBRTs7QUFFMUI7SUFDRSxzQkFBc0IsRUFBRTs7QUFFMUI7SUFDRSxzQkFBc0IsRUFBRTs7QUFFMUI7SUFDRSxtQkFBbUIsRUFBRTs7QUFDckI7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLHdCQUF3QjtNQUV4Qix1QkFBdUIsRUFBRTs7QUFDekI7UUFDRSxxQkFBcUIsRUFBRTs7QUFDdkI7VUFDRSxlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLHlCQUF5QjtVQUN6QixjQUFjO1VBQ2QsY0FBYztVQUNkLG1CQUFtQjtVQUNuQixlQUFlO1VBQ2YsWUFBWTtVQUNaLG9DQUFvQztVQUdwQyw0QkFBNEIsRUFBRTs7QUFDOUI7WUFDRSxjQUFjLEVBQUU7O0FBRTFCO0lBQ0Usc0JBQXNCLEVBQUU7O0FBRTFCO0lBQ0Usb0JBQW9CLEVBQUU7O0FBRXhCO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFFOztBQUNwQjtNQUNFLFlBQVk7TUFDWix3QkFBd0I7TUFFeEIsdUJBQXVCLEVBQUU7O0FBQ3pCO1FBQ0UscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsb0NBQW9DO1FBR3BDLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsWUFBWSxFQUFFOztBQUNkO1VBQ0UseUJBQXlCO1VBQ3pCLFdBQVc7VUFDWCxZQUFZLEVBQUU7O0FBRXRCO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFFOztBQUNyQjtNQUNFLHFCQUFxQjtNQUNyQixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixvQ0FBb0M7TUFHcEMsNEJBQTRCO01BQzVCLGVBQWU7TUFDZixnQ0FBZ0MsRUFBRTs7QUFDbEM7UUFDRSx5QkFBeUI7UUFDekIsV0FBVyxFQUFFOztBQUVuQjtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBRTs7QUFDckI7TUFDRSxZQUFZO01BQ1osd0JBQXdCO01BRXhCLHVCQUF1QixFQUFFOztBQUN6QjtRQUNFLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixvQ0FBb0M7UUFHcEMsNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQ0FBZ0M7UUFDaEMseUJBQXlCO1FBQ3pCLG1CQUFtQixFQUFFOztBQUNyQjtVQUNFLHlCQUF5QjtVQUN6QixXQUFXO1VBQ1gscUJBQXFCLEVBQUU7O0FBRS9CO0lBQ0Usc0JBQXNCLEVBQUU7O0FBRTFCO0lBQ0Usc0JBQXNCLEVBQUU7O0FBQ3hCO01BQ0Usb0JBQW9CLEVBQUU7O0FBRTFCO0lBQ0Usb0JBQW9CLEVBQUU7O0FBQ3RCO01BQ0UsdUJBQXVCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaW1nLXRvcHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmR7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuXHJcbi5zaW5nbGUtcHJvZHVjdC1pdGVtLXR3byB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAzMHB4IDBweCByZ2JhKDgzLCA0NCwgNDQsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDMwcHggMHB4IHJnYmEoODMsIDQ0LCA0NCwgMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cclxuXHJcbiAgICAuc2luZ2xlLXByb2R1Y3QtaXRlbS10d28uaG9tZS02IHtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7IH1cclxuXHJcbiAgICAgIC5zaW5nbGUtcHJvZHVjdC1pdGVtLXR3by5ob21lLTYgLmltZy13cmFwcGVyIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7IH1cclxuXHJcbiAgICAgIC5zaW5nbGUtcHJvZHVjdC1pdGVtLXR3by5ob21lLTYgLmltZy13cmFwcGVyIC5ob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IH1cclxuXHJcbiAgICAgICAgLnNpbmdsZS1wcm9kdWN0LWl0ZW0tdHdvLmhvbWUtNiAuaW1nLXdyYXBwZXIgLmhvdmVyIC5hZGR0b2NhcnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M0MGQyYjsgfVxyXG5cclxuICAgICAgLnNpbmdsZS1wcm9kdWN0LWl0ZW0tdHdvLmhvbWUtNiAuY29udGVudCAudGl0bGUsIFxyXG4gICAgICAuc2luZ2xlLXByb2R1Y3QtaXRlbS10d28uaG9tZS02IC5jb250ZW50IC5zdWJ0aXRsZSwgXHJcbiAgICAgIC5zaW5nbGUtcHJvZHVjdC1pdGVtLXR3by5ob21lLTYgLmNvbnRlbnQgLnByaWNlLCBcclxuICAgICAgLnNpbmdsZS1wcm9kdWN0LWl0ZW0tdHdvLmhvbWUtNiAuY29udGVudCAuY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7IH1cclxuXHJcbiAgICAuc2luZ2xlLXByb2R1Y3QtaXRlbS10d286aG92ZXIgLmltZy13cmFwcGVyIC5ob3ZlciB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIG9wYWNpdHk6IDE7IH1cclxuICAgICAgLnNpbmdsZS1wcm9kdWN0LWl0ZW0tdHdvOmhvdmVyIC5pbWctd3JhcHBlciAuaG92ZXIgLmFkZHRvY2FydCB7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbiAgICAuc2luZ2xlLXByb2R1Y3QtaXRlbS10d28gLmltZy13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbiAgICAgIC5zaW5nbGUtcHJvZHVjdC1pdGVtLXR3byAuaW1nLXdyYXBwZXIgLmhvdmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjUsIDI1LCAwLjU4Mik7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7IH1cclxuICAgICAgICAuc2luZ2xlLXByb2R1Y3QtaXRlbS10d28gLmltZy13cmFwcGVyIC5ob3ZlciAuYWRkdG9jYXJ0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjsgfVxyXG4gICAgICAgICAgLnNpbmdsZS1wcm9kdWN0LWl0ZW0tdHdvIC5pbWctd3JhcHBlciAuaG92ZXIgLmFkZHRvY2FydDpob3ZlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC44OyB9XHJcbiAgICAuc2luZ2xlLXByb2R1Y3QtaXRlbS10d28gLmNvbnRlbnQge1xyXG4gICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMzBweCAwIDIycHggMDsgfVxyXG4gICAgICAuc2luZ2xlLXByb2R1Y3QtaXRlbS10d28gLmNvbnRlbnQgLmNhdGVnb3J5IHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6ICNkMWQwZDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxyXG4gICAgICAuc2luZ2xlLXByb2R1Y3QtaXRlbS10d28gLmNvbnRlbnQgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMzJiMzc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XHJcbiAgICAgIC5zaW5nbGUtcHJvZHVjdC1pdGVtLXR3byAuY29udGVudCAucHJpY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDsgfVxyXG4gICAgICAgIC5zaW5nbGUtcHJvZHVjdC1pdGVtLXR3byAuY29udGVudCAucHJpY2UgLnNwcmljZSB7XHJcbiAgICAgICAgICBjb2xvcjogI2Y0NTgzMjtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG4gICAgICAgIC5zaW5nbGUtcHJvZHVjdC1pdGVtLXR3byAuY29udGVudCAucHJpY2UgLmRwcmljZSB7XHJcbiAgICAgICAgICBjb2xvcjogI2IwYjViYzsgfVxyXG4gIFxyXG4gIC5iZXN0LXNlbGxlci1hcmVhLWZvdXIge1xyXG4gICAgcGFkZGluZzogODBweCAwIDYwcHggMDsgfVxyXG4gIFxyXG4gIC5iZXN0LXNlbGxlci1hcmVhLWZpdmUge1xyXG4gICAgcGFkZGluZzogODBweCAwIDUwcHggMDsgfVxyXG4gIFxyXG4gIC5maWx0ZXItYXJhLWhvbWUtZm91ciB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDAgNTBweCAwOyB9XHJcbiAgXHJcbiAgLmZpbHRlci1hcmEtaG9tZS1maXZlLXR3byB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDAgNTBweCAwOyB9XHJcbiAgXHJcbiAgLmZpbHRlci1hcmVhLW1lbnUtaG9tZS1mb3VyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cclxuICAgIC5maWx0ZXItYXJlYS1tZW51LWhvbWUtZm91ciAubmF2LXRhYnMge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxyXG4gICAgICAuZmlsdGVyLWFyZWEtbWVudS1ob21lLWZvdXIgLm5hdi10YWJzIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbiAgICAgICAgLmZpbHRlci1hcmVhLW1lbnUtaG9tZS1mb3VyIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgY29sb3I6ICM4Zjk3YTI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgNDBweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjsgfVxyXG4gICAgICAgICAgLmZpbHRlci1hcmVhLW1lbnUtaG9tZS1mb3VyIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSwgLmZpbHRlci1hcmVhLW1lbnUtaG9tZS1mb3VyIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMzJiMzc7IH1cclxuICBcclxuICAuZmlsdGVyLWFyYS1ob21lLWZpdmUge1xyXG4gICAgcGFkZGluZzogODBweCAwIDYzcHggMDsgfVxyXG4gIFxyXG4gIC5iYW5uZXItYXJlYS1ob21lLTUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7IH1cclxuICBcclxuICAuaG9tZS1zaXgtdHJlbmRpbmctc2VsbHRlci1maWx0ZXItbmF2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgIC5ob21lLXNpeC10cmVuZGluZy1zZWxsdGVyLWZpbHRlci1uYXYgLm5hdi10YWJzIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuICAgICAgLmhvbWUtc2l4LXRyZW5kaW5nLXNlbGx0ZXItZmlsdGVyLW5hdiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgICAgY29sb3I6ICNkMWQwZDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTsgfVxyXG4gICAgICAgIC5ob21lLXNpeC10cmVuZGluZy1zZWxsdGVyLWZpbHRlci1uYXYgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAuaG9tZS1zaXgtdHJlbmRpbmctc2VsbHRlci1maWx0ZXItbmF2IC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTljZjU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTsgfVxyXG4gIFxyXG4gIC5iZXN0LXNlbGxlci1ob21lLTYtZmlsdGVyLW1lbnUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxyXG4gICAgLmJlc3Qtc2VsbGVyLWhvbWUtNi1maWx0ZXItbWVudSB1bCBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0NzU1O1xyXG4gICAgICBjb2xvcjogI2IxYjZiZDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7IH1cclxuICAgICAgLmJlc3Qtc2VsbGVyLWhvbWUtNi1maWx0ZXItbWVudSB1bCBsaS5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0M2E0ZjY7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAuYmVzdC1zZWxsZXItaG9tZS02LWZpbHRlci1tZW51LXNtYWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cclxuICAgIC5iZXN0LXNlbGxlci1ob21lLTYtZmlsdGVyLW1lbnUtc21hbGwgLm5hdi10YWJzIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuICAgICAgLmJlc3Qtc2VsbGVyLWhvbWUtNi1maWx0ZXItbWVudS1zbWFsbCAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzVweDtcclxuICAgICAgICBjb2xvcjogI2IxYjZiZDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDsgfVxyXG4gICAgICAgIC5iZXN0LXNlbGxlci1ob21lLTYtZmlsdGVyLW1lbnUtc21hbGwgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAuYmVzdC1zZWxsZXItaG9tZS02LWZpbHRlci1tZW51LXNtYWxsIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0M2E0ZjY7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzJhOWNmNTsgfVxyXG4gIFxyXG4gIC5iZXN0LXNlbGxlci1ob21lLTYtYXJlYSB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDAgNTBweCAwOyB9XHJcbiAgXHJcbiAgLmJlc3Qtc2VsbGVyLWhvbWUtNi1hcmVhLXNtYWxsIHtcclxuICAgIHBhZGRpbmc6IDgwcHggMCA2MHB4IDA7IH1cclxuICAgIC5iZXN0LXNlbGxlci1ob21lLTYtYXJlYS1zbWFsbC5jYXJ0LXBhZ2Uge1xyXG4gICAgICBwYWRkaW5nOiA4MHB4IDAgNjBweDsgfVxyXG4gIFxyXG4gIC5iZXN0LXNlbGxlci12ZW5kb3ItYXJlYSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgfVxyXG4gICAgLmJlc3Qtc2VsbGVyLXZlbmRvci1hcmVhLnZlbmRvci1saXN0LXBhZ2Uge1xyXG4gICAgICBwYWRkaW5nOiA0MHB4IDAgMTAwcHggMDsgfVxyXG4gIFxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_goods_service__WEBPACK_IMPORTED_MODULE_1__["GoodsService"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your input does not match email format");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your should be 8+ charachters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authSevice, router) {
        _classCallCheck(this, LoginComponent);

        this.authSevice = authSevice;
        this.router = router;
        this.errorMessage = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login(form) {
          var _this4 = this;

          var data = form.value;
          this.authSevice.login(data.email, data.password).then(function (result) {
            _this4.errorMessage = '';

            _this4.router.navigate(['/']);
          }).catch(function (error) {
            _this4.errorMessage = error.message;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 16,
      vars: 5,
      consts: [[1, "row"], [1, "col"], [1, "text-center"], [3, "ngSubmit"], ["f", "ngForm"], ["ngModel", "", "name", "email", "type", "email", "placeholder", "Email", "required", "", "email", "", 1, "form-control"], ["email", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["ngModel", "", "name", "password", "type", "password", "placeholder", "Password", "required", "", "minlength", "8", 1, "form-control"], ["password", "ngModel"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.login(_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.touched && (_r15.errors == null ? null : _r15.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.touched && (_r15.errors == null ? null : _r15.errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.touched && (_r18.errors == null ? null : _r18.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.touched && (_r18.errors == null ? null : _r18.errors.minlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r14.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]],
      styles: ["input[_ngcontent-%COMP%]{\r\n    margin: 20px 0 20px 0px ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4IDBweCA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_a_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_a_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_a_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_24_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, router, userService) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.isOpen = false;
        this.isUser = false;
        this.isAdmin = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.authService.user.subscribe(function (user) {
            if (user) {
              _this5.isUser = true;
              /* localStorage.setItem('user' , JSON.stringify(user)) */

              _this5.authService.userId = user.uid;

              _this5.userService.getUserData().subscribe(function (userData) {
                localStorage.setItem('userData', JSON.stringify(userData));
                _this5.user = JSON.parse(localStorage.getItem('userData'));

                if (_this5.user.admin === '1') {
                  _this5.isAdmin = true;
                } else {
                  _this5.isAdmin = false;
                }
              });
            } else {
              _this5.isUser = false;
              _this5.authService.userId = '0';
            }
          });
        }
      }, {
        key: "toggleNavbar",
        value: function toggleNavbar() {
          this.isOpen = !this.isOpen;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this6 = this;

          this.authService.logout().then(function () {
            _this6.router.navigate(['login']);
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 25,
      vars: 10,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "sr-only"], ["class", "nav-link", "routerLink", "/cart", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "routerLink", "/admin", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "routerLink", "/profile", "routerLinkActive", "active", 4, "ngIf"], [1, "nav", "justify-content-end", "navbar-nav"], ["class", "nav-link", "routerLink", "/login", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "routerLink", "/signup", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/cart", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "nav-link"], [1, "btn", "btn-danger", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Market");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() {
            return ctx.toggleNavbar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_a_14_Template, 2, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_a_16_Template, 2, 0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_a_18_Template, 2, 0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavbarComponent_a_21_Template, 2, 0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_a_23_Template, 2, 0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_li_24_Template, 3, 0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser && ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/not-found/not-found.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/not-found/not-found.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = JSON.parse(localStorage.getItem('userData'));
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 32,
      vars: 3,
      consts: [[1, "card", "card-primary"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col", "col-xs-12", "col-md-12", "col-lg-12"], [1, "row"], [1, "col", "col-xs-12", "col-md-6", "col-lg-6"], ["src", "assets\\profile.png", "alt", "profile"], [1, "col-xs-6"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " : Male ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " : 01000000000 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx.user.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx.user.address, " ");
        }
      },
      styles: [".card[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n    margin: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your input does not match email format");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your should be 8+ charachters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Confirm is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords are not equel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.errorMessage);
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(authSevice, userService, router) {
        _classCallCheck(this, SignupComponent);

        this.authSevice = authSevice;
        this.userService = userService;
        this.router = router;
        this.errorMessage = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signup",
        value: function signup(form) {
          var _this7 = this;

          var data = form.value;
          this.authSevice.signup(data.email, data.password).then(function (result) {
            _this7.errorMessage = '';

            _this7.userService.addNewUser(result.user.uid, data.name, data.address).then(function () {
              _this7.router.navigate(['/']);
            }).catch(function (err) {
              console.log(err);
            });
          }).catch(function (error) {
            _this7.errorMessage = error.message;
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 28,
      vars: 10,
      consts: [[1, "row"], [1, "col"], [1, "text-center"], [3, "ngSubmit"], ["f", "ngForm"], ["ngModel", "", "name", "name", "type", "text", "placeholder", "Your name", "required", "", 1, "form-control"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["ngModel", "", "name", "email", "type", "email", "placeholder", "Email", "required", "", "email", "", 1, "form-control"], ["email", "ngModel"], ["ngModel", "", "name", "password", "type", "password", "placeholder", "Password", "required", "", "minlength", "8", 1, "form-control"], ["password", "ngModel"], ["ngModel", "", "name", "passwordConfirm", "type", "password", "placeholder", "Confirm password", "required", "", 1, "form-control"], ["passwordConfirm", "ngModel"], ["ngModel", "", "name", "address", "type", "text", "placeholder", "Address", "required", "", 1, "form-control"], ["address", "ngModel"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.signup(_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignupComponent_div_8_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignupComponent_div_11_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignupComponent_div_12_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignupComponent_div_16_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_div_19_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignupComponent_div_20_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignupComponent_div_23_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignupComponent_div_27_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r23.valid && _r23.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.touched && (_r25.errors == null ? null : _r25.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.touched && (_r25.errors == null ? null : _r25.errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.touched && (_r28.errors == null ? null : _r28.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.touched && (_r28.errors == null ? null : _r28.errors.minlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r31.valid && _r31.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r31.value !== _r28.value && _r31.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r34.valid && _r34.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r22.valid || _r31.value !== _r28.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]],
      styles: ["input[_ngcontent-%COMP%]{\r\n    margin: 20px 0 20px 0px ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwcHggO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afAuth) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.userId = '';
        this.user = afAuth.user;
      }

      _createClass(AuthService, [{
        key: "signup",
        value: function signup(email, password) {
          return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        }
      }, {
        key: "login",
        value: function login(email, password) {
          return this.afAuth.auth.signInWithEmailAndPassword(email, password);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.afAuth.auth.signOut();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService(fs, authService) {
        _classCallCheck(this, CartService);

        this.fs = fs;
        this.authService = authService;
      }

      _createClass(CartService, [{
        key: "addToCart",
        value: function addToCart(product) {
          return this.fs.collection("users/".concat(this.authService.userId, "/cart")).add(product);
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return this.fs.collection("users/".concat(this.authService.userId, "/cart")).snapshotChanges();
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.fs.doc("users/".concat(this.authService.userId, "/cart/").concat(id)).delete();
        }
      }, {
        key: "save",
        value: function save(id, amount) {
          return this.fs.doc("users/".concat(this.authService.userId, "/cart/").concat(id)).update({
            amount: amount
          });
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/goods.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/goods.service.ts ***!
    \*******************************************/

  /*! exports provided: GoodsService */

  /***/
  function srcAppServicesGoodsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoodsService", function () {
      return GoodsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");

    var GoodsService =
    /*#__PURE__*/
    function () {
      function GoodsService(fs, fStorage) {
        _classCallCheck(this, GoodsService);

        this.fs = fs;
        this.fStorage = fStorage;
      }

      _createClass(GoodsService, [{
        key: "getAllGoods",
        value: function getAllGoods() {
          return this.fs.collection('goods').snapshotChanges();
        }
      }, {
        key: "addNewGood",
        value: function addNewGood(name, price, image) {
          var _this8 = this;

          return new Promise(function (resolve, reject) {
            var ref = _this8.fStorage.ref('goods/' + image.name);

            ref.put(image).then(function () {
              ref.getDownloadURL().subscribe(function (imageUrl) {
                _this8.fs.collection('goods').add({
                  name: name,
                  price: price,
                  imageUrl: imageUrl
                }).then(function () {
                  return resolve('Product added');
                });
              });
            });
          });
        }
      }]);

      return GoodsService;
    }();

    GoodsService.ɵfac = function GoodsService_Factory(t) {
      return new (t || GoodsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]));
    };

    GoodsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GoodsService,
      factory: GoodsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/guards/auth.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/guards/auth.guard.ts ***!
    \***********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this9 = this;

          return new Promise(function (resolve) {
            _this9.authService.user.subscribe(function (user) {
              if (user) {
                resolve(true);
              } else {
                _this9.router.navigate(['/login']);

                resolve(false);
              }
            });
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(fs, authService) {
        _classCallCheck(this, UserService);

        this.fs = fs;
        this.authService = authService;
      }

      _createClass(UserService, [{
        key: "addNewUser",
        value: function addNewUser(id, name, address) {
          return this.fs.doc('users/' + id).set({
            name: name,
            address: address,
            admin: '0'
          });
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          return this.fs.doc('users/' + this.authService.userId).valueChanges();
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/alert/alert.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/alert/alert.component.ts ***!
    \*************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppSharedAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent() {
        _classCallCheck(this, AlertComponent);
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)();
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["app-alert"]],
      decls: 2,
      vars: 0,
      consts: [["role", "alert", 1, "alert", "alert-success"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A simple primary alert\u2014check it out!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/loading-spinner/loading-spinner.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LoadingSpinnerComponent */

  /***/
  function srcAppSharedLoadingSpinnerLoadingSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function () {
      return LoadingSpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingSpinnerComponent =
    /*#__PURE__*/
    function () {
      function LoadingSpinnerComponent() {
        _classCallCheck(this, LoadingSpinnerComponent);
      }

      _createClass(LoadingSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingSpinnerComponent;
    }();

    LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)();
    };

    LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["app-loading-spinner"]],
      decls: 4,
      vars: 0,
      consts: [[1, "text-center"], ["role", "status", 1, "spinner-border", "m-5"], [1, "sr-only"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".spinner-border[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 150px;\r\n    border-width: 20px;\r\n    color: rgba(0, 0, 255, 0.76); \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci1ib3JkZXJ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjc2KTsgXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading-spinner',
          templateUrl: './loading-spinner.component.html',
          styleUrls: ['./loading-spinner.component.css']
        }]
      }], function () {
        return [];
      }, null);
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! F:\projects\market\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map