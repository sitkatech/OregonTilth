(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"fresca-web\",\"version\":\"0.0.0\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --host 0.0.0.0 --disableHostCheck true --port 8113\",\"start-ssl\":\"ng serve --host 0.0.0.0 --disableHostCheck true --port 8114 --ssl --ssl-cert dev_cert.pfx --ssl-key password#1\",\"build\":\"ng build\",\"build-dev\":\"ng build\",\"build-qa\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration=qa --prod\",\"build-prod\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration=production --prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"^9.1.3\",\"@angular/cdk\":\"^9.2.1\",\"@angular/common\":\"^9.1.3\",\"@angular/compiler\":\"^9.1.3\",\"@angular/core\":\"^9.1.3\",\"@angular/forms\":\"^9.1.3\",\"@angular/localize\":\"^9.1.3\",\"@angular/platform-browser\":\"^9.1.3\",\"@angular/platform-browser-dynamic\":\"^9.1.3\",\"@angular/platform-server\":\"^9.1.3\",\"@angular/router\":\"^9.1.3\",\"@ckeditor/ckeditor5-angular\":\"^1.2.3\",\"@ckeditor/ckeditor5-build-classic\":\"^18.0.0\",\"@ckeditor/ckeditor5-upload\":\"^18.0.0\",\"@microsoft/applicationinsights-web\":\"^2.5.10\",\"@ng-bootstrap/ng-bootstrap\":\"^6.1.0\",\"@nguniversal/express-engine\":\"^9.1.0\",\"@ngx-progressbar/core\":\"^5.3.2\",\"@swimlane/ngx-charts\":\"^14.0.0\",\"@types/geojson\":\"^7946.0.7\",\"ag-grid-angular\":\"^23.0.3\",\"ag-grid-community\":\"^23.0.2\",\"angular-oauth2-oidc\":\"^9.2.1\",\"angular-oauth2-oidc-jwks\":\"^9.0.0\",\"bootstrap\":\"^4.3.1\",\"color-scheme\":\"^1.0.1\",\"core-js\":\"^3.6.5\",\"font-awesome\":\"^4.7.0\",\"google-palette\":\"^1.1.0\",\"iso8601-js-period\":\"^0.2.1\",\"jquery\":\"^3.4.1\",\"leaflet\":\"^1.5.1\",\"leaflet.fullscreen\":\"^1.6.0\",\"mydatepicker\":\"^9.0.1\",\"ngprogress\":\"^1.1.3\",\"ngx-cookie-service\":\"^3.0.4\",\"ngx-select-dropdown\":\"^1.4.2\",\"npm\":\"^6.14.4\",\"popper.js\":\"^1.15.0\",\"rxjs\":\"^6.5.5\",\"style-loader\":\"^1.2.1\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.901.3\",\"@angular/cli\":\"^9.1.3\",\"@angular/compiler-cli\":\"^9.1.3\",\"@angular/language-service\":\"^9.1.3\",\"@fortawesome/fontawesome-free\":\"^5.11.2\",\"@types/jasmine\":\"^3.3.16\",\"@types/jasminewd2\":\"^2.0.8\",\"@types/node\":\"^12.11.1\",\"codelyzer\":\"^5.1.2\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.2\",\"karma\":\"^5.0.2\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"^2.1.0\",\"karma-jasmine\":\"~3.1.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"protractor\":\"~5.4.4\",\"ts-node\":\"~8.9.1\",\"tslint\":\"~6.1.2\",\"typescript\":\"3.8.3\",\"@babel/compat-data\":\"~7.9.0\"}}");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/pages */ "./src/app/shared/pages/index.ts");
/* harmony import */ var _shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/unauthenticated-access/unauthenticated-access.guard */ "./src/app/shared/guards/unauthenticated-access/unauthenticated-access.guard.ts");
/* harmony import */ var _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/unauthenticated-access/manager-only-guard */ "./src/app/shared/guards/unauthenticated-access/manager-only-guard.ts");
/* harmony import */ var _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/acknowledged-disclaimer-guard */ "./src/app/shared/guards/acknowledged-disclaimer-guard.ts");
/* harmony import */ var _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-list/user-list.component */ "./src/app/pages/user-list/user-list.component.ts");
/* harmony import */ var _pages_home_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home-index/home-index.component */ "./src/app/pages/home/home-index/home-index.component.ts");
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ "./src/app/pages/user-detail/user-detail.component.ts");
/* harmony import */ var _pages_user_invite_user_invite_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user-invite/user-invite.component */ "./src/app/pages/user-invite/user-invite.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/user-edit/user-edit.component */ "./src/app/pages/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login-callback/login-callback.component */ "./src/app/pages/login-callback/login-callback.component.ts");
/* harmony import */ var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/help/help.component */ "./src/app/pages/help/help.component.ts");
/* harmony import */ var _pages_create_user_callback_create_user_callback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/create-user-callback/create-user-callback.component */ "./src/app/pages/create-user-callback/create-user-callback.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/disclaimer/disclaimer.component */ "./src/app/pages/disclaimer/disclaimer.component.ts");
/* harmony import */ var _pages_watershed_list_watershed_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/watershed-list/watershed-list.component */ "./src/app/pages/watershed-list/watershed-list.component.ts");
/* harmony import */ var _pages_watershed_detail_watershed_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/watershed-detail/watershed-detail.component */ "./src/app/pages/watershed-detail/watershed-detail.component.ts");
/* harmony import */ var _pages_field_definition_list_field_definition_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/field-definition-list/field-definition-list.component */ "./src/app/pages/field-definition-list/field-definition-list.component.ts");
/* harmony import */ var _pages_field_definition_edit_field_definition_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/field-definition-edit/field-definition-edit.component */ "./src/app/pages/field-definition-edit/field-definition-edit.component.ts");
/* harmony import */ var _pages_training_training_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/training/training.component */ "./src/app/pages/training/training.component.ts");























const routes = [
    { path: "labels-and-definitions/:id", component: _pages_field_definition_edit_field_definition_edit_component__WEBPACK_IMPORTED_MODULE_19__["FieldDefinitionEditComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "labels-and-definitions", component: _pages_field_definition_list_field_definition_list_component__WEBPACK_IMPORTED_MODULE_18__["FieldDefinitionListComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "watersheds", component: _pages_watershed_list_watershed_list_component__WEBPACK_IMPORTED_MODULE_16__["WatershedListComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "watersheds/:id", component: _pages_watershed_detail_watershed_detail_component__WEBPACK_IMPORTED_MODULE_17__["WatershedDetailComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "users", component: _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "users/:id", component: _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "users/:id/edit", component: _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_10__["UserEditComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "invite-user/:userID", component: _pages_user_invite_user_invite_component__WEBPACK_IMPORTED_MODULE_9__["UserInviteComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "invite-user", component: _pages_user_invite_user_invite_component__WEBPACK_IMPORTED_MODULE_9__["UserInviteComponent"], canActivate: [_shared_guards_unauthenticated_access_unauthenticated_access_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedAccessGuard"], _shared_guards_unauthenticated_access_manager_only_guard__WEBPACK_IMPORTED_MODULE_4__["ManagerOnlyGuard"], _shared_guards_acknowledged_disclaimer_guard__WEBPACK_IMPORTED_MODULE_5__["AcknowledgedDisclaimerGuard"]] },
    { path: "", component: _pages_home_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_7__["HomeIndexComponent"] },
    { path: "disclaimer", component: _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_15__["DisclaimerComponent"] },
    { path: "disclaimer/:forced", component: _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_15__["DisclaimerComponent"] },
    { path: "help", component: _pages_help_help_component__WEBPACK_IMPORTED_MODULE_12__["HelpComponent"] },
    { path: "training", component: _pages_training_training_component__WEBPACK_IMPORTED_MODULE_20__["TrainingComponent"] },
    { path: "platform-overview", component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: "login-callback", component: _pages_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_11__["LoginCallbackComponent"] },
    { path: "create-user-callback", component: _pages_create_user_callback_create_user_callback_component__WEBPACK_IMPORTED_MODULE_13__["CreateUserCallbackComponent"] },
    { path: "not-found", component: _shared_pages__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    { path: 'subscription-insufficient', component: _shared_pages__WEBPACK_IMPORTED_MODULE_2__["SubscriptionInsufficientComponent"] },
    { path: 'unauthenticated', component: _shared_pages__WEBPACK_IMPORTED_MODULE_2__["UnauthenticatedComponent"] },
    { path: '**', component: _shared_pages__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var angular_oauth2_oidc_jwks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc-jwks */ "./node_modules/angular-oauth2-oidc-jwks/__ivy_ngcc__/fesm2015/angular-oauth2-oidc-jwks.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/cookies/cookie-storage.service */ "./src/app/shared/services/cookies/cookie-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/header-nav/header-nav.component */ "./src/app/shared/components/header-nav/header-nav.component.ts");



















class AppComponent {
    constructor(router, oauthService, cookieStorageService, busyService, authenticationService, titleService, _document) {
        this.router = router;
        this.oauthService = oauthService;
        this.cookieStorageService = cookieStorageService;
        this.busyService = busyService;
        this.authenticationService = authenticationService;
        this.titleService = titleService;
        this._document = _document;
        this.userClaimsUpsertStarted = false;
        this.ignoreSessionTerminated = false;
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteConfigLoadStart"]) { // lazy loaded route started
                this.busyService.setBusy(true);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteConfigLoadEnd"]) { // lazy loaded route ended
                this.busyService.setBusy(false);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                window.scrollTo(0, 0);
            }
        });
        this.configureAuthService().subscribe(() => {
            this.oauthService.tryLogin();
        });
        this.titleService.setTitle(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadOrganizationShortName} ${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].platformShortName}`);
        this.setAppFavicon();
    }
    configureAuthService() {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.oauthService.configure(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].keystoneAuthConfiguration);
        this.oauthService.setStorage(this.cookieStorageService);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc_jwks__WEBPACK_IMPORTED_MODULE_2__["JwksValidationHandler"]();
        this.oauthService.loadDiscoveryDocument();
        this.oauthService.events
            .subscribe((e) => {
            switch (e.type) {
                case 'discovery_document_loaded':
                    console.log("discovery_document_loaded");
                    if (e.info) {
                        subject.next();
                        subject.complete();
                    }
                    break;
                case 'token_received':
                    console.log("token_received");
                    subject.next();
                    subject.complete();
                    break;
                case 'session_changed':
                    console.log("session_changed");
                    // when the user logins from no-tenant URL and then jumps to the tenant URL,
                    // the oAuthService triggers a session-changed followed by a session_terminated...
                    // however the token still works as expected.
                    // ATTENTION: Need to verify that on session expiration (and hence session_terminated) this session_changed doesn't get called...
                    this.ignoreSessionTerminated = true;
                    break;
                case 'session_terminated':
                    if (!this.ignoreSessionTerminated) {
                        console.warn('Your session has been terminated!');
                        this.cookieStorageService.removeAll();
                    }
                    this.ignoreSessionTerminated = false;
                    break;
            }
        });
        return subject.asObservable();
    }
    setAppFavicon() {
        this._document.getElementById('appFavicon').setAttribute('href', "assets/main/favicons/" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].faviconFilename);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_5__["CookieStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_7__["BusyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 1, consts: [[1, "mh-auto", "min-vh-100", "page-content"], [1, "footer", "mt-2"], [1, "container"], [1, "row"], [1, "col", "no-gutters", "text-center"], ["href", "https://sitkatech.com/", "alt", "Sitka Technology Group", "target", "_blank"], ["src", "assets/main/logos/sitkatech-logo2x.width-600.png", 2, "height", "55px"], [1, "row", "mt-2"], [1, "col", "text-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.currentYear, " Sitka Technology Group, LLC. All Rights Reserved. ");
    } }, directives: [_shared_components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_11__["HeaderNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".waterYearToDisplay[_ngcontent-%COMP%] {\n  width: 80% !important;\n  padding: 3px !important;\n}\n\n.helper[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\nheader-nav[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: linear-gradient(to bottom, transparent 0%, transparent 100%);\n  padding: 10px;\n  width: 100%;\n  height: 0px;\n  position: absolute;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGdpdFxcc2l0a2F0ZWNoXFxPcmVnb25UaWx0aFxcU291cmNlXFxPcmVnb25UaWx0aC5XZWIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcZ2l0XFxzaXRrYXRlY2hcXE9yZWdvblRpbHRoXFxTb3VyY2VcXE9yZWdvblRpbHRoLldlYi9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFBO0VBQXVCLHVCQUFBO0FDQTNCOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLGVFZ0NzQjtBRGhDMUI7O0FER0E7RUFDSSxXQUFBO0VBQ0EsOEVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdFd0JzQjtFRnZCdEIsa0JBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL192YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLndhdGVyWWVhclRvRGlzcGxheXtcclxuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDsgcGFkZGluZzozcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlbHBlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6ICRoZWFkZXItbmF2LWFmdGVyLWhlaWdodFxyXG59XHJcblxyXG5oZWFkZXItbmF2OjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJGhlYWRlci1ncmFkaWVudC1zdGFydCAwJSwgJGhlYWRlci1ncmFkaWVudC1lbmQgMTAwJSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6JGhlYWRlci1uYXYtYWZ0ZXItaGVpZ2h0OyAgICBcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn0iLCIud2F0ZXJZZWFyVG9EaXNwbGF5IHtcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbn1cblxuLmhlbHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucGFnZS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5oZWFkZXItbmF2OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufSIsIiRmb290ZXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKFxyXG4gICAgICAgIFwicHJpbWFyeVwiOiAjRjA2NDRCLCAgICAgLy8gc3lzdGVtQmx1ZVxyXG4gICAgICAgIFwic2Vjb25kYXJ5XCI6ICNjNGM0YzQsICAgLy8gbGlnaHRHcmF5XHJcbiAgICAgICAgXCJpbmZvXCI6ICMyMjhiZTYsICAgICAgICAvLyBicmlnaHRCbHVlXHJcbiAgICAgICAgXCJsaWdodFwiOiAjZjVmNWY1LCAgICAgICAvLyBvZmZXaGl0ZVxyXG4gICAgICAgIFwibXV0ZWRcIjogI2RlZTJlNiwgICAgICAgLy8gZm9vdGVyR3JheVxyXG4gICAgICAgIFwiZGFuZ2VyXCI6ICNmZjAwMDAsXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6ICMwMGNjMDAsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCI6ICNmZmZmOWYsXHJcbiAgICAgICAgXCJoNC1zdHlsZWRcIjogIzE5NDM0OSxcclxuICAgICAgICBcImZvb3RlclwiOiAjOTk5OTk5LFxyXG4gICAgICAgIFwiaGVhZGVyLWJhY2tncm91bmRcIjogIzM0M2I4NSxcclxuICAgICAgICBcInNlbGVjdFwiOiAjMUY0RDNELFxyXG4gICAgICAgIFwiaGVhZGVyLW5hdi1saW5rXCIgOiAjZmZmLFxyXG4gICAgICAgIFwiZ3JpZC1oZWFkZXItYmFja2dyb3VuZFwiOiAjMzQzYjg1LFxyXG4gICAgICAgIFwiZ3JpZC1hY2NlbnQtY29sb3JcIjogIzAwNzdmOSxcclxuICAgICAgICBcImdyaWQtaG92ZXItY29sb3JcIjogY29ybnNpbGssXHJcbiAgICAgICAgXCJhY2NvdW50LWRyb3Bkb3duLXRleHRcIjogI2ZmZixcclxuICAgICAgICBcImhlYWRlci1ncmFkaWVudC1zdGFydFwiOiB0cmFuc3BhcmVudCxcclxuICAgICAgICBcImhlYWRlci1ncmFkaWVudC1lbmRcIjogdHJhbnNwYXJlbnQsXHJcbik7XHJcblxyXG4vLyB0aGlzIGxvb2tzIHJlZHVuZGFudCwgYnV0IHdlIG5lZWQgdG8gb3ZlcnJpZGUgdGhlIGJvb3RzdHJhcCB2YXJpYWJsZXMgaW4gYm90aCB3YXlzLlxyXG4vL0N1c3RvbSB2YXJpYWJsZXMgb25seSBuZWVkIHRoZSBvbmUgb3ZlcnJpZGVcclxuJHByaW1hcnk6ICNGMDY0NEI7XHJcbiRzZWNvbmRhcnk6ICNjNGM0YzQ7XHJcbiRpbmZvOiAjMjI4YmU2O1xyXG4kbGlnaHQ6ICNmNWY1ZjU7XHJcbiRtdXRlZDogI2RlZTJlNjtcclxuJGRhbmdlcjogI2ZmMDAwMDtcclxuJHN1Y2Nlc3M6ICMwMGNjMDA7XHJcbiR3YXJuaW5nOiAjZmZmZjlmO1xyXG5cclxuJGFjY291bnQtZHJvcGRvd24tdGV4dDogI2ZmZjtcclxuJGJ1dHRvbi1ib3JkZXItYW5kLWJhY2tncm91bmQ6ICNGMDY0NEI7XHJcbiRidXR0b24taG92ZXItdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJ1dHRvbi10ZXh0LWNvbG9yOiAjZjZkOTkyO1xyXG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICNmNmQ5OTI7XHJcbiRidXR0b24tdG9nZ2xlLWhvdmVyOiAjNjM3Y2ExO1xyXG4kZm9vdGVyOiAjOTk5OTk5OyAgXHJcbiRoZWFkZXItYmFja2dyb3VuZDogI0YwNjQ0QjtcclxuJGhlYWRlci1ncmFkaWVudC1zdGFydDogdHJhbnNwYXJlbnQ7XHJcbiRoZWFkZXItZ3JhZGllbnQtZW5kOiB0cmFuc3BhcmVudDtcclxuJGhlYWRlci1uYXYtYWZ0ZXItaGVpZ2h0OiAwcHg7XHJcbiRoZWFkZXItbmF2LWxpbms6ICNmZmY7ICAgICAgICAgXHJcbiRoZWFkZXItbmF2LWxpbmstZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiRoNC1zdHlsZWQ6ICMxOTQzNDk7XHJcbiRzZWxlY3Q6ICMxRjREM0Q7XHJcbiRzZWxlY3QtYW5kLW5hdi1kcm9wZG93bi1ob3ZlcjogIzg3YTFjYztcclxuJHNlbGVjdC1hbmQtbmF2LWhvdmVyOiM4N2ExY2M7XHJcbiR0ZXh0LW11dGVkOiBkYXJrZW4oI2QzZDNkMywgMTUlKTtcclxuJHRleHQtd2FybmluZzogZGFya2VuKCR3YXJuaW5nLCAyMCUpO1xyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdUYWhvbWEnLCBzYW5zLXNlcmlmLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zaXplOiAxNnB4O1xyXG4kYmFzZS10ZXh0OiAjMDAwMDAwO1xyXG5cclxuJGNhcmQtY2FwLWJnOiAjZGZkZmRmO1xyXG5cclxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG4kbGluay1jb2xvcjogIzIwNWM5MDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"] }, { type: _shared_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_5__["CookieStorageService"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["BusyService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] }, { type: HTMLDocument, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.init.ts":
/*!*****************************!*\
  !*** ./src/app/app.init.ts ***!
  \*****************************/
/*! exports provided: AppInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitService", function() { return AppInitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




;
class AppInitService {
    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    init() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(fetch('assets/config.json').then(function (response) {
            return response.json();
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((config) => {
            config.keystoneAuthConfiguration.redirectUri = window.location.origin + config.keystoneAuthConfiguration.redirectUriRelative;
            config.keystoneAuthConfiguration.postLogoutRedirectUri = window.location.origin + config.keystoneAuthConfiguration.postLogoutRedirectUri;
            window.config = config;
            return;
        })).toPromise();
    }
}
AppInitService.ɵfac = function AppInitService_Factory(t) { return new (t || AppInitService)(); };
AppInitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInitService, factory: AppInitService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: init_app, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_app", function() { return init_app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/interceptors/auth-interceptor */ "./src/app/shared/interceptors/auth-interceptor.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _pages_home_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home-index/home-index.component */ "./src/app/pages/home/home-index/home-index.component.ts");
/* harmony import */ var _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/user-list/user-list.component */ "./src/app/pages/user-list/user-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_user_invite_user_invite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/user-invite/user-invite.component */ "./src/app/pages/user-invite/user-invite.component.ts");
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ "./src/app/pages/user-detail/user-detail.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/user-edit/user-edit.component */ "./src/app/pages/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_watershed_detail_watershed_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/watershed-detail/watershed-detail.component */ "./src/app/pages/watershed-detail/watershed-detail.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
/* harmony import */ var _pages_watershed_list_watershed_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/watershed-list/watershed-list.component */ "./src/app/pages/watershed-list/watershed-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/ag-grid/link-renderer/link-renderer.component */ "./src/app/shared/components/ag-grid/link-renderer/link-renderer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _shared_components_combo_chart_combo_series_vertical_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/components/combo-chart/combo-series-vertical.component */ "./src/app/shared/components/combo-chart/combo-series-vertical.component.ts");
/* harmony import */ var _shared_components_ag_grid_fontawesome_icon_link_renderer_fontawesome_icon_link_renderer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/components/ag-grid/fontawesome-icon-link-renderer/fontawesome-icon-link-renderer.component */ "./src/app/shared/components/ag-grid/fontawesome-icon-link-renderer/fontawesome-icon-link-renderer.component.ts");
/* harmony import */ var _pages_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/login-callback/login-callback.component */ "./src/app/pages/login-callback/login-callback.component.ts");
/* harmony import */ var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/help/help.component */ "./src/app/pages/help/help.component.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/index.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/__ivy_ngcc__/fesm2015/mydatepicker.js");
/* harmony import */ var _shared_components_ag_grid_multi_link_renderer_multi_link_renderer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/components/ag-grid/multi-link-renderer/multi-link-renderer.component */ "./src/app/shared/components/ag-grid/multi-link-renderer/multi-link-renderer.component.ts");
/* harmony import */ var _pages_create_user_callback_create_user_callback_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/create-user-callback/create-user-callback.component */ "./src/app/pages/create-user-callback/create-user-callback.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/disclaimer/disclaimer.component */ "./src/app/pages/disclaimer/disclaimer.component.ts");
/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./app.init */ "./src/app/app.init.ts");
/* harmony import */ var _pages_field_definition_list_field_definition_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/field-definition-list/field-definition-list.component */ "./src/app/pages/field-definition-list/field-definition-list.component.ts");
/* harmony import */ var _pages_field_definition_edit_field_definition_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/field-definition-edit/field-definition-edit.component */ "./src/app/pages/field-definition-edit/field-definition-edit.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _shared_interceptors_httpErrorInterceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/interceptors/httpErrorInterceptor */ "./src/app/shared/interceptors/httpErrorInterceptor.ts");
/* harmony import */ var _pages_training_training_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/training/training.component */ "./src/app/pages/training/training.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_app_insights_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/services/app-insights.service */ "./src/app/shared/services/app-insights.service.ts");
/* harmony import */ var _shared_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/services/global-error-handler.service */ "./src/app/shared/services/global-error-handler.service.ts");















































function init_app(appLoadService, appInsightsService) {
    return () => appLoadService.init().then(() => {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_40__["environment"].appInsightsInstrumentationKey) {
            appInsightsService.initAppInsights();
        }
    });
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        _app_init__WEBPACK_IMPORTED_MODULE_34__["AppInitService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: init_app, deps: [_app_init__WEBPACK_IMPORTED_MODULE_34__["AppInitService"], _shared_services_app_insights_service__WEBPACK_IMPORTED_MODULE_41__["AppInsightsService"]], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_httpErrorInterceptor__WEBPACK_IMPORTED_MODULE_38__["HttpErrorInterceptor"], multi: true },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
            useClass: _shared_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_42__["GlobalErrorHandlerService"]
        },
        _angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"]
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthModule"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__["NgxChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__["AgGridModule"].withComponents([]),
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_28__["SelectDropDownModule"],
            mydatepicker__WEBPACK_IMPORTED_MODULE_29__["MyDatePickerModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_home_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_11__["HomeIndexComponent"],
        _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"],
        _pages_user_invite_user_invite_component__WEBPACK_IMPORTED_MODULE_14__["UserInviteComponent"],
        _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailComponent"],
        _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_16__["UserEditComponent"],
        _pages_watershed_detail_watershed_detail_component__WEBPACK_IMPORTED_MODULE_17__["WatershedDetailComponent"],
        _pages_watershed_list_watershed_list_component__WEBPACK_IMPORTED_MODULE_19__["WatershedListComponent"],
        _shared_components_combo_chart_combo_series_vertical_component__WEBPACK_IMPORTED_MODULE_24__["ComboSeriesVerticalComponent"],
        _pages_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_26__["LoginCallbackComponent"],
        _pages_help_help_component__WEBPACK_IMPORTED_MODULE_27__["HelpComponent"],
        _pages_create_user_callback_create_user_callback_component__WEBPACK_IMPORTED_MODULE_31__["CreateUserCallbackComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_32__["AboutComponent"],
        _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_33__["DisclaimerComponent"],
        _pages_field_definition_list_field_definition_list_component__WEBPACK_IMPORTED_MODULE_35__["FieldDefinitionListComponent"],
        _pages_field_definition_edit_field_definition_edit_component__WEBPACK_IMPORTED_MODULE_36__["FieldDefinitionEditComponent"],
        _pages_training_training_component__WEBPACK_IMPORTED_MODULE_39__["TrainingComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__["NgxChartsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__["AgGridModule"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_28__["SelectDropDownModule"],
        mydatepicker__WEBPACK_IMPORTED_MODULE_29__["MyDatePickerModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_home_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_11__["HomeIndexComponent"],
                    _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"],
                    _pages_user_invite_user_invite_component__WEBPACK_IMPORTED_MODULE_14__["UserInviteComponent"],
                    _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailComponent"],
                    _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_16__["UserEditComponent"],
                    _pages_watershed_detail_watershed_detail_component__WEBPACK_IMPORTED_MODULE_17__["WatershedDetailComponent"],
                    _pages_watershed_list_watershed_list_component__WEBPACK_IMPORTED_MODULE_19__["WatershedListComponent"],
                    _shared_components_combo_chart_combo_series_vertical_component__WEBPACK_IMPORTED_MODULE_24__["ComboSeriesVerticalComponent"],
                    _pages_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_26__["LoginCallbackComponent"],
                    _pages_help_help_component__WEBPACK_IMPORTED_MODULE_27__["HelpComponent"],
                    _pages_create_user_callback_create_user_callback_component__WEBPACK_IMPORTED_MODULE_31__["CreateUserCallbackComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_32__["AboutComponent"],
                    _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_33__["DisclaimerComponent"],
                    _pages_field_definition_list_field_definition_list_component__WEBPACK_IMPORTED_MODULE_35__["FieldDefinitionListComponent"],
                    _pages_field_definition_edit_field_definition_edit_component__WEBPACK_IMPORTED_MODULE_36__["FieldDefinitionEditComponent"],
                    _pages_training_training_component__WEBPACK_IMPORTED_MODULE_39__["TrainingComponent"],
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                    angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthModule"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__["NgxChartsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__["AgGridModule"].withComponents([]),
                    ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_28__["SelectDropDownModule"],
                    mydatepicker__WEBPACK_IMPORTED_MODULE_29__["MyDatePickerModule"],
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"]
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
                    _app_init__WEBPACK_IMPORTED_MODULE_34__["AppInitService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: init_app, deps: [_app_init__WEBPACK_IMPORTED_MODULE_34__["AppInitService"], _shared_services_app_insights_service__WEBPACK_IMPORTED_MODULE_41__["AppInsightsService"]], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_httpErrorInterceptor__WEBPACK_IMPORTED_MODULE_38__["HttpErrorInterceptor"], multi: true },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
                        useClass: _shared_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_42__["GlobalErrorHandlerService"]
                    },
                    _angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"]
                ],
                entryComponents: [_shared_components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_21__["LinkRendererComponent"], _shared_components_ag_grid_fontawesome_icon_link_renderer_fontawesome_icon_link_renderer_component__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeIconLinkRendererComponent"], _shared_components_ag_grid_multi_link_renderer_multi_link_renderer_component__WEBPACK_IMPORTED_MODULE_30__["MultiLinkRendererComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/enums/custom-rich-text-type.enum */ "./src/app/shared/models/enums/custom-rich-text-type.enum.ts");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/custom-rich-text/custom-rich-text.component */ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts");





class AboutComponent {
    constructor() {
        this.richTextTypeID = src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_1__["CustomRichTextType"].PlatformOverview;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["fresca-about"]], decls: 27, vars: 1, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "row", "mb-2"], [1, "col"], [1, "d-inline-block"], [3, "customRichTextTypeID"], [1, "row"], [1, "col-3", "text-center", "my-auto"], ["href", "https://sitkatech.com/", "alt", "Sitka Technology Group", "target", "_blank"], ["src", "assets/main/logos/sitkatech-logo2x.width-600.png", 2, "height", "100px"], [1, "col-9"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Platform Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Platform Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "custom-rich-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project Partners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sitka Technology Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Description to go here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customRichTextTypeID", ctx.richTextTypeID);
    } }, directives: [_shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_2__["AlertDisplayComponent"], _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_3__["CustomRichTextComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/create-user-callback/create-user-callback.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/create-user-callback/create-user-callback.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateUserCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserCallbackComponent", function() { return CreateUserCallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");




class CreateUserCallbackComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.authenticationService.login();
    }
}
CreateUserCallbackComponent.ɵfac = function CreateUserCallbackComponent_Factory(t) { return new (t || CreateUserCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
CreateUserCallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateUserCallbackComponent, selectors: [["fresca-create-user-callback"]], decls: 2, vars: 0, template: function CreateUserCallbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create-user-callback works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS11c2VyLWNhbGxiYWNrL2NyZWF0ZS11c2VyLWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateUserCallbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-create-user-callback',
                templateUrl: './create-user-callback.component.html',
                styleUrls: ['./create-user-callback.component.scss']
            }]
    }], function () { return [{ type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/disclaimer/disclaimer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/disclaimer/disclaimer.component.ts ***!
  \**********************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/enums/custom-rich-text-type.enum */ "./src/app/shared/models/enums/custom-rich-text-type.enum.ts");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/custom-rich-text/custom-rich-text.component */ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function DisclaimerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisclaimerComponent_div_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.setDisclaimerAcknowledged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Acknowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DisclaimerComponent {
    constructor(userService, authenticationService, router, route) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.forced = true;
        this.return = '';
        this.richTextTypeID = src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_4__["CustomRichTextType"].Disclaimer;
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
        });
        this.route.queryParams.subscribe(params => this.return = params['return'] || '/');
        this.forced = this.route.snapshot.paramMap.get("forced") === "true";
    }
    checkDisclaimerAcknowledged() {
        return !this.currentUser || (!this.forced && this.currentUser.DisclaimerAcknowledgedDate != null) ? false : true;
    }
    setDisclaimerAcknowledged() {
        this.userService.setDisclaimerAcknowledgedDate(this.currentUser.UserID).subscribe(x => {
            this.authenticationService.refreshUserInfo(x);
            this.router.navigate([this.return]);
        });
    }
}
DisclaimerComponent.ɵfac = function DisclaimerComponent_Factory(t) { return new (t || DisclaimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DisclaimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisclaimerComponent, selectors: [["fresca-disclaimer"]], decls: 12, vars: 2, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "d-inline-block"], [1, "row"], [1, "col"], [3, "customRichTextTypeID"], ["class", "row", 4, "ngIf"], [1, "btn", "btn-fresca", "btn-sm", "mr-3", "float-right", 3, "click"]], template: function DisclaimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "custom-rich-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DisclaimerComponent_div_11_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customRichTextTypeID", ctx.richTextTypeID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkDisclaimerAcknowledged());
    } }, directives: [_shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_5__["AlertDisplayComponent"], _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_6__["CustomRichTextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc2NsYWltZXIvZGlzY2xhaW1lci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisclaimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-disclaimer',
                templateUrl: './disclaimer.component.html',
                styleUrls: ['./disclaimer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/field-definition-edit/field-definition-edit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/field-definition-edit/field-definition-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: FieldDefinitionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDefinitionEditComponent", function() { return FieldDefinitionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_field_definition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/field-definition-service */ "./src/app/shared/services/field-definition-service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var src_app_shared_models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

















function FieldDefinitionEditComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Labels and Definitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDefinitionEditComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Labels and Definitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDefinitionEditComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName, " ");
} }
function FieldDefinitionEditComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-alert-display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ckeditor", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDefinitionEditComponent_div_6_Template_ckeditor_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.fieldDefinition.FieldDefinitionValue = $event; })("ready", function FieldDefinitionEditComponent_div_6_Template_ckeditor_ready_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.ckEditorReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDefinitionEditComponent_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.saveDefinition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Edit Definition for Label: ", ctx_r3.fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx_r3.Editor)("ngModel", ctx_r3.fieldDefinition.FieldDefinitionValue)("config", ctx_r3.ckConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.isLoadingSubmit);
} }
class FieldDefinitionEditComponent {
    constructor(route, router, alertService, fieldDefinitionService, authenticationService, cdr) {
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.fieldDefinitionService = fieldDefinitionService;
        this.authenticationService = authenticationService;
        this.cdr = cdr;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.ckConfig = { "removePlugins": ["MediaEmbed", "ImageUpload"] };
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            const id = parseInt(this.route.snapshot.paramMap.get("id"));
            if (id) {
                this.fieldDefinitionService.getFieldDefinition(id).subscribe(fieldDefinition => {
                    this.fieldDefinition = fieldDefinition;
                });
            }
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    currentUserIsAdmin() {
        return this.authenticationService.isUserAnAdministrator(this.currentUser);
    }
    // tell CkEditor to use the class below as its upload adapter
    // see https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/upload-adapter.html#how-does-the-image-upload-work
    ckEditorReady(editor) {
        this.editor = editor;
    }
    saveDefinition() {
        this.isLoadingSubmit = true;
        this.fieldDefinitionService.updateFieldDefinition(this.fieldDefinition)
            .subscribe(response => {
            this.isLoadingSubmit = false;
            this.router.navigateByUrl("/labels-and-definitions").then(x => {
                this.alertService.pushAlert(new src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"](`The definition for ${this.fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName} was successfully updated.`, src_app_shared_models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__["AlertContext"].Success));
            });
        }, error => {
            this.isLoadingSubmit = false;
            this.cdr.detectChanges();
        });
    }
}
FieldDefinitionEditComponent.ɵfac = function FieldDefinitionEditComponent_Factory(t) { return new (t || FieldDefinitionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_field_definition_service__WEBPACK_IMPORTED_MODULE_1__["FieldDefinitionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FieldDefinitionEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldDefinitionEditComponent, selectors: [["fresca-field-definition-edit"]], decls: 7, vars: 4, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item"], ["routerLink", "/labels-and-definitions", 4, "ngIf"], [4, "ngIf"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], ["class", "container mt-sm-4", 4, "ngIf"], ["routerLink", "/labels-and-definitions"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container", "mt-sm-4"], [1, "d-inline-block"], [1, "row", "mt-4"], [1, "col-12"], ["ngDefaultControl", "", 3, "editor", "ngModel", "config", "ngModelChange", "ready"], [2, "float", "right"], ["type", "button", 1, "btn", "btn-fresca", "mt-1", "mr-1", "mb-1", 3, "disabled", "click"], ["routerLink", "/labels-and-definitions", 1, "btn", "btn-secondary", "mt-1", "mb-1"]], template: function FieldDefinitionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldDefinitionEditComponent_a_3_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FieldDefinitionEditComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldDefinitionEditComponent_li_5_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FieldDefinitionEditComponent_div_6_Template, 12, 5, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserIsAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUserIsAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fieldDefinition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fieldDefinition);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_9__["AlertDisplayComponent"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpZWxkLWRlZmluaXRpb24tZWRpdC9maWVsZC1kZWZpbml0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldDefinitionEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-field-definition-edit',
                templateUrl: './field-definition-edit.component.html',
                styleUrls: ['./field-definition-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: src_app_shared_services_field_definition_service__WEBPACK_IMPORTED_MODULE_1__["FieldDefinitionService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/field-definition-list/field-definition-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/field-definition-list/field-definition-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: FieldDefinitionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDefinitionListComponent", function() { return FieldDefinitionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_field_definition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/field-definition-service */ "./src/app/shared/services/field-definition-service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_shared_components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/ag-grid/link-renderer/link-renderer.component */ "./src/app/shared/components/ag-grid/link-renderer/link-renderer.component.ts");
/* harmony import */ var src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/enums/custom-rich-text-type.enum */ "./src/app/shared/models/enums/custom-rich-text-type.enum.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/custom-rich-text/custom-rich-text.component */ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts");












const _c0 = ["fieldDefinitionsGrid"];
class FieldDefinitionListComponent {
    constructor(fieldDefinitionService, authenticationService, cdr) {
        this.fieldDefinitionService = fieldDefinitionService;
        this.authenticationService = authenticationService;
        this.cdr = cdr;
        this.richTextTypeID = src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_4__["CustomRichTextType"].LabelsAndDefinitionsList;
        this.rowData = [];
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            this.fieldDefinitionsGrid.api.showLoadingOverlay();
            this.fieldDefinitionService.listAllFieldDefinitions().subscribe(fieldDefinitions => {
                this.fieldDefinitions = fieldDefinitions;
                this.rowData = fieldDefinitions;
                this.fieldDefinitionsGrid.api.hideOverlay();
                this.cdr.detectChanges();
            });
            this.columnDefs = [
                {
                    headerName: 'Label', valueGetter: function (params) {
                        return { LinkValue: params.data.FieldDefinitionType.FieldDefinitionTypeID, LinkDisplay: params.data.FieldDefinitionType.FieldDefinitionTypeDisplayName };
                    }, cellRendererFramework: src_app_shared_components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_3__["LinkRendererComponent"],
                    cellRendererParams: { inRouterLink: "/labels-and-definitions/" },
                    filterValueGetter: function (params) {
                        return params.data.FieldDefinitionType.FieldDefinitionDisplayName;
                    },
                    comparator: function (id1, id2) {
                        let link1 = id1.LinkDisplay;
                        let link2 = id2.LinkDisplay;
                        if (link1 < link2) {
                            return -1;
                        }
                        if (link1 > link2) {
                            return 1;
                        }
                        return 0;
                    },
                    sortable: true, filter: true, width: 200
                },
                { headerName: 'Definition', field: 'FieldDefinitionValue',
                    cellRenderer: function (params) {
                        return params.data.FieldDefinitionValue ? params.data.FieldDefinitionValue : '';
                    },
                    autoHeight: true, sortable: true, filter: true, width: 900, cellStyle: { 'white-space': 'normal' } },
            ];
            this.columnDefs.forEach(x => {
                x.resizable = true;
            });
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
}
FieldDefinitionListComponent.ɵfac = function FieldDefinitionListComponent_Factory(t) { return new (t || FieldDefinitionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_field_definition_service__WEBPACK_IMPORTED_MODULE_1__["FieldDefinitionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FieldDefinitionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldDefinitionListComponent, selectors: [["fresca-field-definition-list"]], viewQuery: function FieldDefinitionListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fieldDefinitionsGrid = _t.first);
    } }, decls: 17, vars: 5, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "row"], [1, "col"], [1, "d-inline-block"], [1, "row", "mt-1", "mb-2"], [3, "customRichTextTypeID"], [1, "table-responsive"], [1, "ag-theme-balham", 2, "width", "100%", "height", "800px", 3, "rowData", "columnDefs", "pagination", "paginationPageSize"], ["fieldDefinitionsGrid", ""]], template: function FieldDefinitionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Labels and Definitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Labels and Definitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "custom-rich-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ag-grid-angular", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customRichTextTypeID", ctx.richTextTypeID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.rowData)("columnDefs", ctx.columnDefs)("pagination", true)("paginationPageSize", 100);
    } }, directives: [_shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_6__["AlertDisplayComponent"], _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_7__["CustomRichTextComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridAngular"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpZWxkLWRlZmluaXRpb24tbGlzdC9maWVsZC1kZWZpbml0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldDefinitionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-field-definition-list',
                templateUrl: './field-definition-list.component.html',
                styleUrls: ['./field-definition-list.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_field_definition_service__WEBPACK_IMPORTED_MODULE_1__["FieldDefinitionService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { fieldDefinitionsGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["fieldDefinitionsGrid"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/help/help.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/help/help.component.ts ***!
  \**********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/enums/custom-rich-text-type.enum */ "./src/app/shared/models/enums/custom-rich-text-type.enum.ts");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/custom-rich-text/custom-rich-text.component */ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts");





class HelpComponent {
    constructor() {
        this.richTextTypeID = src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_1__["CustomRichTextType"].Help;
    }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["fresca-help"]], decls: 9, vars: 1, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "d-inline-block"], [3, "customRichTextTypeID"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "custom-rich-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customRichTextTypeID", ctx.richTextTypeID);
    } }, directives: [_shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_2__["AlertDisplayComponent"], _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_3__["CustomRichTextComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home-index/home-index.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/home/home-index/home-index.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeIndexComponent", function() { return HomeIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/enums/role.enum */ "./src/app/shared/models/enums/role.enum.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/enums/custom-rich-text-type.enum */ "./src/app/shared/models/enums/custom-rich-text-type.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/custom-rich-text/custom-rich-text.component */ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












function HomeIndexComponent_ngb_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to contact the Administrators with any questions or comments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "info")("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Welcome ", ctx_r0.currentUser.FullName, ". You have successfully logged in to the ", ctx_r0.platformLongName(), ", but your account is not yet configured. You will receive an email from the ", ctx_r0.leadOrganizationShortName(), " Administrators when your account is ready to use. You may ");
} }
function HomeIndexComponent_ngb_alert_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your account is currently disabled. Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " if you would like to activate your account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "info")("dismissible", false);
} }
function HomeIndexComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HomeIndexComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quick actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HomeIndexComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Log in to view your Water Account. Create an Account if you don't have one yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeIndexComponent_div_15_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeIndexComponent_div_15_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.createAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Need help logging in? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Request Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r4.forgotPasswordUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r4.forgotUsernameUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r4.keystoneSupportUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeIndexComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Request Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeIndexComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.richTextTypeID = src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_4__["CustomRichTextType"].Homepage;
    }
    ngOnInit() {
        if (localStorage.getItem("loginOnReturn")) {
            localStorage.removeItem("loginOnReturn");
            this.authenticationService.login();
        }
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
    }
    userIsUnassigned() {
        if (!this.currentUser) {
            return false; // doesn't exist != unassigned
        }
        return this.currentUser.Role.RoleID === src_app_shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_2__["RoleEnum"].Unassigned;
    }
    userRoleIsDisabled() {
        if (!this.currentUser) {
            return false; // doesn't exist != unassigned
        }
        return this.currentUser.Role.RoleID === src_app_shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_2__["RoleEnum"].Disabled;
    }
    isUserAnAdministrator() {
        return this.authenticationService.isUserAnAdministrator(this.currentUser);
    }
    login() {
        this.authenticationService.login();
    }
    createAccount() {
        this.authenticationService.createAccount();
    }
    forgotPasswordUrl() {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].keystoneSupportBaseUrl}/ForgotPassword`;
    }
    forgotUsernameUrl() {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].keystoneSupportBaseUrl}/ForgotUsername`;
    }
    keystoneSupportUrl() {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].keystoneSupportBaseUrl}/Support/20`;
    }
    platformLongName() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].platformLongName;
    }
    platformShortName() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].platformShortName;
    }
    leadOrganizationShortName() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].leadOrganizationShortName;
    }
    leadOrganizationLongName() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].leadOrganizationLongName;
    }
    leadOrganizationHomeUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].leadOrganizationHomeUrl;
    }
}
HomeIndexComponent.ɵfac = function HomeIndexComponent_Factory(t) { return new (t || HomeIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
HomeIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeIndexComponent, selectors: [["app-home-index"]], decls: 20, vars: 8, consts: [[1, "container-fluid", "text-light", "my-0", "py-0", "d-none", "d-sm-block"], [1, "row", "mt-0"], ["id", "homepageJumbotronImage1", 1, "col-sm", "homepageJumbotronImage"], [1, "container", "mt-4"], [3, "type", "dismissible", 4, "ngIf"], [1, "text-primary", "mb-4"], [1, "row", "mt-sm-4"], [1, "col-md-4", "order-md-12", "order-1", "col-sm-12"], [1, "card"], [1, "card-header"], [4, "ngIf"], ["class", "card-body", 4, "ngIf"], [1, "col-md-8", "order-md-1", "order-12", "col-sm-12"], [1, "mt-2"], [3, "customRichTextTypeID"], [3, "type", "dismissible"], ["routerLink", "/help"], [1, "card-body"], [1, "row"], [1, "col"], [1, "row", "mt-2"], [1, "col", "mx-1"], [1, "btn", "btn-fresca", "mr-1", 3, "click"], [1, "btn", "btn-fresca", "ml-1", 3, "click"], [2, "font-size", "11px"], [3, "href"], ["routerLink", "/help", 1, "btn", "btn-fresca"]], template: function HomeIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeIndexComponent_ngb_alert_4_Template, 6, 5, "ngb-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeIndexComponent_ngb_alert_5_Template, 6, 2, "ngb-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeIndexComponent_ng_container_13_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeIndexComponent_ng_container_14_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeIndexComponent_div_15_Template, 24, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeIndexComponent_div_16_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "custom-rich-text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsUnassigned());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRoleIsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.platformLongName());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customRichTextTypeID", ctx.richTextTypeID);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_6__["AlertDisplayComponent"], _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_7__["CustomRichTextComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlert"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], styles: [".homepageJumbotronImage[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center center;\n  height: 300px;\n}\n\n#homepageJumbotronImage1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/main/home_image.jpg\");\n  background-position: right 0 bottom -130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWluZGV4L0M6XFxnaXRcXHNpdGthdGVjaFxcT3JlZ29uVGlsdGhcXFNvdXJjZVxcT3JlZ29uVGlsdGguV2ViL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1pbmRleFxcaG9tZS1pbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWluZGV4L2hvbWUtaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksb0RBQUE7RUFDQSwwQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWluZGV4L2hvbWUtaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXBhZ2VKdW1ib3Ryb25JbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbiNob21lcGFnZUp1bWJvdHJvbkltYWdlMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL21haW4vaG9tZV9pbWFnZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAwIGJvdHRvbSAtMTMwcHg7XHJcbn0iLCIuaG9tZXBhZ2VKdW1ib3Ryb25JbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbiNob21lcGFnZUp1bWJvdHJvbkltYWdlMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbWFpbi9ob21lX2ltYWdlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMCBib3R0b20gLTEzMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-index',
                templateUrl: './home-index.component.html',
                styleUrls: ['./home-index.component.scss']
            }]
    }], function () { return [{ type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login-callback/login-callback.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/login-callback/login-callback.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCallbackComponent", function() { return LoginCallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");






class LoginCallbackComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.router.navigate(['/']);
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
    }
}
LoginCallbackComponent.ɵfac = function LoginCallbackComponent_Factory(t) { return new (t || LoginCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
LoginCallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginCallbackComponent, selectors: [["fresca-login-callback"]], decls: 0, vars: 0, template: function LoginCallbackComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLWNhbGxiYWNrL2xvZ2luLWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginCallbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-login-callback',
                templateUrl: './login-callback.component.html',
                styleUrls: ['./login-callback.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/training/training.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/training/training.component.ts ***!
  \******************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/enums/custom-rich-text-type.enum */ "./src/app/shared/models/enums/custom-rich-text-type.enum.ts");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/custom-rich-text/custom-rich-text.component */ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts");





class TrainingComponent {
    constructor() {
        this.richTextTypeID = src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_1__["CustomRichTextType"].Training;
    }
    ngOnInit() {
    }
}
TrainingComponent.ɵfac = function TrainingComponent_Factory(t) { return new (t || TrainingComponent)(); };
TrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingComponent, selectors: [["fresca-training"]], decls: 11, vars: 1, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "row", "mb-2"], [1, "col"], [1, "d-inline-block"], [3, "customRichTextTypeID"]], template: function TrainingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "custom-rich-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customRichTextTypeID", ctx.richTextTypeID);
    } }, directives: [_shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_2__["AlertDisplayComponent"], _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_3__["CustomRichTextComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWluaW5nL3RyYWluaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-training',
                templateUrl: './training.component.html',
                styleUrls: ['./training.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.component.ts ***!
  \************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");











function UserDetailComponent_nav_0_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_nav_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailComponent_nav_0_a_3_Template, 2, 0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserDetailComponent_nav_0_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUserIsAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentUserIsAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r0.user == null ? null : ctx_r0.user.FullName) || ((ctx_r0.user == null ? null : ctx_r0.user.FirstName) || (ctx_r0.user == null ? null : ctx_r0.user.LastName) ? (ctx_r0.user == null ? null : ctx_r0.user.FirstName) + " " + (ctx_r0.user == null ? null : ctx_r0.user.LastName) : null), " ");
} }
function UserDetailComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invite User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/invite-user/", ctx_r4.user.UserID, "");
} }
function UserDetailComponent_div_1_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx_r5.user == null ? null : ctx_r5.user.UserID, "/edit");
} }
function UserDetailComponent_div_1_em_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_em_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_em_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_em_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_em_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_em_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_em_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_dt_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Receives System Communications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_dd_49_em_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_dd_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDetailComponent_div_1_dd_49_em_2_Template, 2, 0, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r14.user == null ? null : ctx_r14.user.ReceiveSupportEmails) == true ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.user);
} }
function UserDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_div_1_div_1_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-alert-display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserDetailComponent_div_1_a_9_Template, 3, 1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Basics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dl", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserDetailComponent_div_1_em_17_Template, 2, 0, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "dt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserDetailComponent_div_1_em_22_Template, 2, 0, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "dt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "dd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserDetailComponent_div_1_em_27_Template, 2, 0, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "dt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "dd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserDetailComponent_div_1_em_32_Template, 2, 0, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "dt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "dd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserDetailComponent_div_1_em_37_Template, 2, 0, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "dt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "dd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UserDetailComponent_div_1_em_42_Template, 2, 0, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "dt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "dd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UserDetailComponent_div_1_em_47_Template, 2, 0, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, UserDetailComponent_div_1_dt_48_Template, 2, 0, "dt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, UserDetailComponent_div_1_dd_49_Template, 3, 2, "dd", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.UserGuid === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r1.user == null ? null : ctx_r1.user.FullName) || ((ctx_r1.user == null ? null : ctx_r1.user.FirstName) || (ctx_r1.user == null ? null : ctx_r1.user.LastName) ? (ctx_r1.user == null ? null : ctx_r1.user.FirstName) + " " + (ctx_r1.user == null ? null : ctx_r1.user.LastName) : null), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUserIsAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.LoginName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.LoginName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.FirstName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.FirstName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.LastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.LastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.FullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.FullName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.Phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.Phone));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.Email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.Email));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.Role == null ? null : ctx_r1.user.Role.RoleDisplayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.Role == null ? null : ctx_r1.user.Role.RoleDisplayName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.Role.RoleID === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.Role.RoleID === 1);
} }
class UserDetailComponent {
    constructor(route, router, userService, authenticationService, cdr) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.cdr = cdr;
        // force route reload whenever params change;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            const id = parseInt(this.route.snapshot.paramMap.get("id"));
            if (id) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.userService.getUserFromUserID(id)).subscribe(([user]) => {
                    this.user = user instanceof Array
                        ? null
                        : user;
                    this.cdr.detectChanges();
                });
            }
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    currentUserIsAdmin() {
        return this.authenticationService.isUserAnAdministrator(this.currentUser);
    }
    userIsAdministrator() {
        return this.authenticationService.isUserAnAdministrator(this.user);
    }
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UserDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailComponent, selectors: [["template-user-detail"]], decls: 2, vars: 2, consts: [["aria-label", "breadcrumb", 4, "ngIf"], ["class", "container mt-sm-4", 4, "ngIf"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item"], ["routerLink", "/users", 4, "ngIf"], [4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["routerLink", "/users"], [1, "container", "mt-sm-4"], ["style", "margin: 1rem 0 1rem 0;", 4, "ngIf"], [1, "d-inline-block"], [1, "row", "mt-4"], [1, "col-sm-6"], [1, "card"], [1, "card-header"], ["class", "btn btn-fresca btn-sm float-right", 3, "routerLink", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "text-sm-right", "col-sm-5", "col-xs-12"], [1, "col-sm-7", "col-xs-12"], ["class", "text-muted", 4, "ngIf"], ["class", "text-sm-right col-sm-5 col-xs-12", 4, "ngIf"], ["class", "col-sm-7 col-xs-12", 4, "ngIf"], [2, "margin", "1rem 0 1rem 0"], [1, "float-right", "btn", "btn-fresca", "btn-sm", "mr-3", 3, "routerLink"], [1, "btn", "btn-fresca", "btn-sm", "float-right", 3, "routerLink"], [1, "fas", "fa-edit"], [1, "text-muted"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserDetailComponent_nav_0_Template, 7, 3, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_div_1_Template, 50, 19, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_6__["AlertDisplayComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'template-user-detail',
                templateUrl: './user-detail.component.html',
                styleUrls: ['./user-detail.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/user-edit/user-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user-edit/user-edit.component.ts ***!
  \********************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/role/role.service */ "./src/app/services/role/role.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var src_app_shared_models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var src_app_shared_models_user_user_update_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/user/user-update-dto */ "./src/app/shared/models/user/user-update-dto.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



















function UserEditComponent_div_10_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r5.RoleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r5.RoleDisplayName, " ");
} }
function UserEditComponent_div_10_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Should Receive System Communications?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEditComponent_div_10_div_15_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.model.ReceiveSupportEmails = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEditComponent_div_10_div_15_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.model.ReceiveSupportEmails = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.model.ReceiveSupportEmails)("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.model.ReceiveSupportEmails)("value", false);
} }
function UserEditComponent_div_10_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 31);
} }
function UserEditComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-alert-display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserEditComponent_div_10_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onSubmit(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEditComponent_div_10_Template_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.model.RoleID = $event; })("change", function UserEditComponent_div_10_Template_select_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.checkReceiveSupportEmails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserEditComponent_div_10_option_14_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserEditComponent_div_10_div_15_Template, 11, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserEditComponent_div_10_span_22_Template, 1, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.user == null ? null : ctx_r0.user.FullName) || ((ctx_r0.user == null ? null : ctx_r0.user.FirstName) || (ctx_r0.user == null ? null : ctx_r0.user.LastName) ? (ctx_r0.user == null ? null : ctx_r0.user.FirstName) + " " + (ctx_r0.user == null ? null : ctx_r0.user.LastName) : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.model.RoleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.RoleID.toString() === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.form.valid || ctx_r0.isLoadingSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx_r0.user == null ? null : ctx_r0.user.UserID, "");
} }
class UserEditComponent {
    constructor(route, router, authenticationService, userService, roleService, cdr, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.roleService = roleService;
        this.cdr = cdr;
        this.alertService = alertService;
        this.isLoadingSubmit = false;
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            if (!this.authenticationService.isUserAnAdministrator(this.currentUser)) {
                this.router.navigateByUrl("/not-found")
                    .then();
                return;
            }
            this.userID = parseInt(this.route.snapshot.paramMap.get("id"));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(this.userService.getUserFromUserID(this.userID), this.roleService.getRoles()).subscribe(([user, roles]) => {
                this.user = user instanceof Array
                    ? null
                    : user;
                this.roles = roles.sort((a, b) => {
                    if (a.RoleDisplayName > b.RoleDisplayName)
                        return 1;
                    if (a.RoleDisplayName < b.RoleDisplayName)
                        return -1;
                    return 0;
                });
                this.model = new src_app_shared_models_user_user_update_dto__WEBPACK_IMPORTED_MODULE_9__["UserUpdateDto"]();
                this.model.RoleID = user.Role.RoleID;
                this.model.ReceiveSupportEmails = user.ReceiveSupportEmails;
                this.cdr.detectChanges();
            });
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    onSubmit(editUserForm) {
        this.isLoadingSubmit = true;
        this.userService.updateUser(this.userID, this.model)
            .subscribe(response => {
            this.isLoadingSubmit = false;
            this.router.navigateByUrl("/users/" + this.userID).then(x => {
                this.alertService.pushAlert(new src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_7__["Alert"]("The user was successfully updated.", src_app_shared_models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_8__["AlertContext"].Success));
            });
        }, error => {
            this.isLoadingSubmit = false;
            this.cdr.detectChanges();
        });
    }
    checkReceiveSupportEmails() {
        if (this.model.RoleID != 1) {
            this.model.ReceiveSupportEmails = false;
        }
    }
}
UserEditComponent.ɵfac = function UserEditComponent_Factory(t) { return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"])); };
UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserEditComponent, selectors: [["fresca-user-edit"]], decls: 11, vars: 3, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/users"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["class", "container mt-sm-4", 4, "ngIf"], [1, "container", "mt-sm-4"], [1, "d-inline-block"], [1, "col-sm-12"], [3, "ngSubmit"], ["editUserForm", "ngForm"], [1, "form-group", "mt-4"], [1, "col-sm-2", "control-label"], [1, "required"], [1, "col-sm-10"], ["name", "RoleID", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group mt-4", 4, "ngIf"], [1, "row"], [1, "col-sm"], [1, "fas", "fa-bolt"], [1, "col-sm", "text-right"], ["type", "submit", 1, "btn", "btn-fresca", 3, "disabled"], ["class", "fa fa-spinner loading-spinner", 4, "ngIf"], [1, "btn", "btn-secondary", "ml-1", 3, "routerLink"], [3, "value"], [1, "col-sm-5", "control-label"], [1, "ml-2"], ["type", "radio", "name", "ReceiveSupportEmails", 3, "ngModel", "value", "ngModelChange"], [1, "fa", "fa-spinner", "loading-spinner"]], template: function UserEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Edit Basics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserEditComponent_div_10_Template, 26, 7, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx.user == null ? null : ctx.user.UserID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.user == null ? null : ctx.user.FullName) || (ctx.user == null ? null : ctx.user.FirstName) + " " + (ctx.user == null ? null : ctx.user.LastName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_11__["AlertDisplayComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-user-edit',
                templateUrl: './user-edit.component.html',
                styleUrls: ['./user-edit.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/user-invite/user-invite.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/user-invite/user-invite.component.ts ***!
  \************************************************************/
/*! exports provided: UserInviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInviteComponent", function() { return UserInviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/role/role.service */ "./src/app/services/role/role.service.ts");
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var src_app_shared_models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_models_user_user_invite_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/user/user-invite-dto */ "./src/app/shared/models/user/user-invite-dto.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




















function UserInviteComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInviteComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInviteComponent_div_12_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r6.RoleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r6.RoleDisplayName, " ");
} }
function UserInviteComponent_div_12_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 33);
} }
function UserInviteComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-alert-display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserInviteComponent_div_12_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInviteComponent_div_12_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.model.FirstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInviteComponent_div_12_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.model.LastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInviteComponent_div_12_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.model.Email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInviteComponent_div_12_Template_select_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.model.RoleID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserInviteComponent_div_12_option_32_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserInviteComponent_div_12_span_40_Template, 1, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Invite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.FirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.LastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.RoleID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isLoadingSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLoadingSubmit);
} }
class UserInviteComponent {
    constructor(cdr, route, router, userService, roleService, authenticationService, alertService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.roleService = roleService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.isLoadingSubmit = false;
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            this.roleService.getRoles().subscribe(result => {
                this.roles = result;
                this.cdr.detectChanges();
            });
            this.model = new src_app_shared_models_user_user_invite_dto__WEBPACK_IMPORTED_MODULE_9__["UserInviteDto"]();
            const userID = parseInt(this.route.snapshot.paramMap.get("userID"));
            if (userID) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.userService.getUserFromUserID(userID)).subscribe(([user]) => {
                    if (user.UserGuid === null) {
                        let userToInvite = user instanceof Array
                            ? null
                            : user;
                        this.model.Email = userToInvite.Email;
                        this.model.FirstName = userToInvite.FirstName;
                        this.model.LastName = userToInvite.LastName;
                        this.model.RoleID = userToInvite.Role.RoleID;
                        this.cdr.detectChanges();
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    canInviteUser() {
        return this.model.FirstName && this.model.LastName && this.model.RoleID && this.model.Email && this.model.Email.indexOf("@") != -1;
    }
    onSubmit(inviteUserForm) {
        this.isLoadingSubmit = true;
        this.userService.inviteUser(this.model)
            .subscribe(response => {
            this.isLoadingSubmit = false;
            inviteUserForm.reset();
            this.router.navigateByUrl(`/users/${response.UserID}`).then(x => {
                this.alertService.pushAlert(new src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]("The user invite was successful.", src_app_shared_models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_5__["AlertContext"].Success));
            });
        }, error => {
            this.isLoadingSubmit = false;
            this.cdr.detectChanges();
        });
    }
    currentUserIsAdmin() {
        return this.authenticationService.isUserAnAdministrator(this.currentUser);
    }
    platformShortName() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].platformShortName;
    }
}
UserInviteComponent.ɵfac = function UserInviteComponent_Factory(t) { return new (t || UserInviteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
UserInviteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInviteComponent, selectors: [["fresca-user-invite"]], decls: 13, vars: 4, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item"], ["routerLink", "/users", 4, "ngIf"], [4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "lead"], ["class", "container mt-sm-4", 4, "ngIf"], ["routerLink", "/users"], [1, "container", "mt-sm-4"], [3, "ngSubmit"], ["inviteUserForm", "ngForm"], [1, "row"], [1, "col-sm-12"], [1, "form-horizontal"], [1, "form-group"], [1, "col-sm-2", "control-label"], [1, "required"], [1, "col-sm-10"], ["type", "text", "name", "FirstName", "placeholder", "First Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "LastName", "placeholder", "Last Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "RoleID", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-2"], [1, "fas", "fa-bolt"], [1, "col-xs-12", "col-sm-10", "text-right"], ["type", "submit", 1, "btn", "btn-fresca", 3, "disabled"], ["class", "fa fa-spinner loading-spinner", 4, "ngIf"], ["routerLink", "/users", 1, "btn", "btn-secondary", "ml-1"], [3, "value"], [1, "fa", "fa-spinner", "loading-spinner"]], template: function UserInviteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserInviteComponent_a_3_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserInviteComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Invite User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Invite User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserInviteComponent_div_12_Template, 44, 7, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserIsAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUserIsAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This page lets you proactively invite users to the ", ctx.platformShortName(), ". After clicking Invite, the user will be added to the User list and you can assign appropriate roles to the user account. If the user does not already have an account they will receive an email with a link to verify their account. Clicking this link will display a Keystone webpage where the user can set their password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_12__["AlertDisplayComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: [".can-manage-user-container[_ngcontent-%COMP%] {\n  margin: 5px 0 1rem 0;\n}\n\n.can-manage-user-container[_ngcontent-%COMP%]   p-inputSwitch[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6px;\n  left: 12px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  display: block;\n  margin: 5px 0 5px 0;\n}\n\n.form-card[_ngcontent-%COMP%]  .ui-card {\n  margin: 1rem 0 1rem 0;\n}\n\n.form-card[_ngcontent-%COMP%]  .field-error {\n  background-color: #f8b7bd;\n  color: #b74c56;\n}\n\n.buttonBar[_ngcontent-%COMP%]  .ui-toolbar {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1pbnZpdGUvQzpcXGdpdFxcc2l0a2F0ZWNoXFxPcmVnb25UaWx0aFxcU291cmNlXFxPcmVnb25UaWx0aC5XZWIvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLWludml0ZVxcdXNlci1pbnZpdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItaW52aXRlL3VzZXItaW52aXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdJO0VBQ0kscUJBQUE7QUNBUjs7QURFSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREtJO0VBQ0ksa0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItaW52aXRlL3VzZXItaW52aXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbi1tYW5hZ2UtdXNlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA1cHggMCAxcmVtIDA7XHJcbn1cclxuXHJcbi5jYW4tbWFuYWdlLXVzZXItY29udGFpbmVyIHAtaW5wdXRTd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbn1cclxuXHJcbi5mb3JtLWNhcmQ6Om5nLWRlZXAge1xyXG4gICAgLnVpLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcclxuICAgIH1cclxuICAgIC5maWVsZC1lcnJvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YjdiZDtcclxuICAgICAgICBjb2xvcjogI2I3NGM1NjtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbkJhcjo6bmctZGVlcCB7XHJcbiAgICAudWktdG9vbGJhciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbiIsIi5jYW4tbWFuYWdlLXVzZXItY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHggMCAxcmVtIDA7XG59XG5cbi5jYW4tbWFuYWdlLXVzZXItY29udGFpbmVyIHAtaW5wdXRTd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweCAwIDVweCAwO1xufVxuXG4uZm9ybS1jYXJkOjpuZy1kZWVwIC51aS1jYXJkIHtcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xufVxuLmZvcm0tY2FyZDo6bmctZGVlcCAuZmllbGQtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiN2JkO1xuICBjb2xvcjogI2I3NGM1Njtcbn1cblxuLmJ1dHRvbkJhcjo6bmctZGVlcCAudWktdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInviteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-user-invite',
                templateUrl: './user-invite.component.html',
                styleUrls: ['./user-invite.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }, { type: src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_shared_components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/ag-grid/link-renderer/link-renderer.component */ "./src/app/shared/components/ag-grid/link-renderer/link-renderer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
/* harmony import */ var src_app_services_utility_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility-functions.service */ "./src/app/services/utility-functions.service.ts");
/* harmony import */ var src_app_shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/enums/role.enum */ "./src/app/shared/models/enums/role.enum.ts");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

















const _c0 = ["usersGrid"];
const _c1 = ["unassignedUsersGrid"];
function UserListComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is a list of all users who are awaiting account configuration. Assign the user a role and billing account(s). If the account was created in error, set their Role to \u201CDisabled\u201D to remove them from this list. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Congratulations! All users have been assigned a role. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ag-grid-angular", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx_r2.unassignedUsers)("columnDefs", ctx_r2.columnDefs)("pagination", true)("paginationPageSize", 100);
} }
class UserListComponent {
    constructor(cdr, authenticationService, utilityFunctionsService, userService, decimalPipe) {
        this.cdr = cdr;
        this.authenticationService = authenticationService;
        this.utilityFunctionsService = utilityFunctionsService;
        this.userService = userService;
        this.decimalPipe = decimalPipe;
        this.rowData = [];
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            this.usersGrid.api.showLoadingOverlay();
            this.userService.getUsers().subscribe(users => {
                this.rowData = users;
                this.usersGrid.api.hideOverlay();
                this.users = users;
                this.unassignedUsers = users.filter(u => { return u.Role.RoleID === src_app_shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_7__["RoleEnum"].Unassigned; });
                this.cdr.detectChanges();
            });
            let _decimalPipe = this.decimalPipe;
            this.columnDefs = [
                {
                    headerName: 'Name', valueGetter: function (params) {
                        return { LinkValue: params.data.UserID, LinkDisplay: params.data.FullName };
                    }, cellRendererFramework: src_app_shared_components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_3__["LinkRendererComponent"],
                    cellRendererParams: { inRouterLink: "/users/" },
                    filterValueGetter: function (params) {
                        return params.data.FullName;
                    },
                    comparator: function (id1, id2) {
                        let link1 = id1.LinkDisplay;
                        let link2 = id2.LinkDisplay;
                        if (link1 < link2) {
                            return -1;
                        }
                        if (link1 > link2) {
                            return 1;
                        }
                        return 0;
                    },
                    sortable: true, filter: true, width: 170
                },
                { headerName: 'Email', field: 'Email', sortable: true, filter: true },
                { headerName: 'Role', field: 'Role.RoleDisplayName', sortable: true, filter: true, width: 100 },
                { headerName: 'Receives System Communications?', field: 'ReceiveSupportEmails', valueGetter: function (params) { return params.data.ReceiveSupportEmails ? "Yes" : "No"; }, sortable: true, filter: true, width: 250 },
            ];
            this.columnDefs.forEach(x => {
                x.resizable = true;
            });
        });
    }
    refreshView() {
        debugger;
        this.unassignedUsersGrid.api.refreshView();
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    exportToCsv() {
        // we need to grab all columns except the first one (trash icon)
        let columnsKeys = this.usersGrid.columnApi.getAllDisplayedColumns();
        let columnIds = [];
        columnsKeys.forEach(keys => {
            let columnName = keys.getColId();
            columnIds.push(columnName);
        });
        columnIds.splice(0, 1);
        this.utilityFunctionsService.exportGridToCsv(this.usersGrid, 'users.csv', columnIds);
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utility_functions_service__WEBPACK_IMPORTED_MODULE_6__["UtilityFunctionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["fresca-user-list"]], viewQuery: function UserListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.usersGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.unassignedUsersGrid = _t.first);
    } }, decls: 25, vars: 7, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "d-inline-block"], ["class", "lead", 4, "ngIf"], ["class", "container mt-sm-4", 4, "ngIf"], [1, "float-right", 2, "margin", "1rem 0 1rem 0"], ["routerLink", "/invite-user", 1, "btn", "btn-fresca", "btn-sm", "mr-3"], ["placement", "top", "ngbTooltip", "Download list of Users", 1, "btn", "btn-secondary", "btn-sm", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-download"], [1, "lead"], [1, "container", "mt-sm-4"], [1, "table-responsive"], [1, "ag-theme-balham", 2, "width", "100%", "height", "800px", 3, "rowData", "columnDefs", "pagination", "paginationPageSize"], ["usersGrid", ""], [1, "ag-theme-balham", 2, "width", "100%", "height", "300px", 3, "rowData", "columnDefs", "pagination", "paginationPageSize"], ["unassignedUsersGrid", ""]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Unassigned Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserListComponent_p_8_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserListComponent_p_9_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserListComponent_div_10_Template, 4, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Invite User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_15_listener() { return ctx.exportToCsv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " A list of users is shown in the grid below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ag-grid-angular", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users && ctx.unassignedUsers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users && !ctx.unassignedUsers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users && ctx.unassignedUsers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.rowData)("columnDefs", ctx.columnDefs)("pagination", true)("paginationPageSize", 100);
    } }, directives: [_shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_8__["AlertDisplayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltip"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridAngular"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-user-list',
                templateUrl: './user-list.component.html',
                styleUrls: ['./user-list.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: src_app_services_utility_functions_service__WEBPACK_IMPORTED_MODULE_6__["UtilityFunctionsService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"] }]; }, { usersGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['usersGrid']
        }], unassignedUsersGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['unassignedUsersGrid']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/watershed-detail/watershed-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/watershed-detail/watershed-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: WatershedDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatershedDetailComponent", function() { return WatershedDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/watershed/watershed.service */ "./src/app/services/watershed/watershed.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _shared_components_field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/field-definition/field-definition.component */ "./src/app/shared/components/field-definition/field-definition.component.ts");
/* harmony import */ var _shared_components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/watershed-map/watershed-map.component */ "./src/app/shared/components/watershed-map/watershed-map.component.ts");













function WatershedDetailComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Watersheds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.watershed.WatershedName, " ");
} }
function WatershedDetailComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "watershed-map", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedWatershedIDs", ctx_r2.getSelectedWatershedIDs())("disableDefaultClick", true);
} }
function WatershedDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-alert-display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Basics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "dl", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dt", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "field-definition", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dd", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WatershedDetailComponent_div_1_div_21_Template, 2, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.watershed.WatershedName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldDefinitionType", "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.watershed.WatershedName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.watershed);
} }
class WatershedDetailComponent {
    constructor(route, router, watershedService, authenticationService, cdr) {
        this.route = route;
        this.router = router;
        this.watershedService = watershedService;
        this.authenticationService = authenticationService;
        this.cdr = cdr;
        this.today = new Date();
        // force route reload whenever params change;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            const id = parseInt(this.route.snapshot.paramMap.get("id"));
            if (id) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.watershedService.getWatershedByWatershedID(id)).subscribe(([watershed]) => {
                    this.watershed = watershed instanceof Array
                        ? null
                        : watershed;
                });
            }
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    getSelectedWatershedIDs() {
        return this.watershed !== undefined ? [this.watershed.WatershedID] : [];
    }
}
WatershedDetailComponent.ɵfac = function WatershedDetailComponent_Factory(t) { return new (t || WatershedDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_1__["WatershedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
WatershedDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatershedDetailComponent, selectors: [["template-watershed-detail"]], decls: 2, vars: 2, consts: [["aria-label", "breadcrumb", 4, "ngIf"], ["class", "container mt-sm-4", 4, "ngIf"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item"], ["routerLink", "/watersheds"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container", "mt-sm-4"], [1, "d-inline-block"], [1, "row", "mt-4"], [1, "col-sm-12", "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "text-sm-right", "col-sm-6", "col-xs-12"], [3, "fieldDefinitionType"], [1, "col-sm-6", "col-xs-12"], ["class", "col-sm-12", 4, "ngIf"], [1, "col-sm-12"], ["mapID", "watershedsMapForWatershed", "mapHeight", "500px", 3, "selectedWatershedIDs", "disableDefaultClick"]], template: function WatershedDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatershedDetailComponent_nav_0_Template, 7, 1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatershedDetailComponent_div_1_Template, 22, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watershed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watershed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_6__["AlertDisplayComponent"], _shared_components_field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_7__["FieldDefinitionComponent"], _shared_components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_8__["WatershedMapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhdGVyc2hlZC1kZXRhaWwvd2F0ZXJzaGVkLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatershedDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'template-watershed-detail',
                templateUrl: './watershed-detail.component.html',
                styleUrls: ['./watershed-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_1__["WatershedService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/watershed-list/watershed-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/watershed-list/watershed-list.component.ts ***!
  \******************************************************************/
/*! exports provided: WatershedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatershedListComponent", function() { return WatershedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/watershed/watershed.service */ "./src/app/services/watershed/watershed.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/ag-grid/link-renderer/link-renderer.component */ "./src/app/shared/components/ag-grid/link-renderer/link-renderer.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
/* harmony import */ var src_app_services_utility_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility-functions.service */ "./src/app/services/utility-functions.service.ts");
/* harmony import */ var src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/enums/custom-rich-text-type.enum */ "./src/app/shared/models/enums/custom-rich-text-type.enum.ts");
/* harmony import */ var src_app_shared_components_field_definition_grid_header_field_definition_grid_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/field-definition-grid-header/field-definition-grid-header.component */ "./src/app/shared/components/field-definition-grid-header/field-definition-grid-header.component.ts");
/* harmony import */ var _shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/custom-rich-text/custom-rich-text.component */ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/watershed-map/watershed-map.component */ "./src/app/shared/components/watershed-map/watershed-map.component.ts");



















const _c0 = ["watershedsGrid"];
function WatershedListComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "watershed-map", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedWatershedIDs", ctx_r1.getSelectedWatershedIDs());
} }
class WatershedListComponent {
    constructor(cdr, authenticationService, utilityFunctionsService, watershedService, decimalPipe) {
        this.cdr = cdr;
        this.authenticationService = authenticationService;
        this.utilityFunctionsService = utilityFunctionsService;
        this.watershedService = watershedService;
        this.decimalPipe = decimalPipe;
        this.richTextTypeID = src_app_shared_models_enums_custom_rich_text_type_enum__WEBPACK_IMPORTED_MODULE_7__["CustomRichTextType"].WatershedList;
        this.watersheds = [];
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.gridOptions = {};
            this.currentUser = currentUser;
            this.watershedsGrid.api.showLoadingOverlay();
            this.watershedService.getWatersheds().subscribe(watersheds => {
                this.watersheds = watersheds;
                this.watershedsGrid.api.hideOverlay();
                this.cdr.detectChanges();
            });
            let _decimalPipe = this.decimalPipe;
            this.columnDefs = [
                { valueGetter: function (params) {
                        return { LinkDisplay: params.data.WatershedName, LinkValue: params.data.WatershedID };
                    }, cellRendererFramework: src_app_shared_components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_4__["LinkRendererComponent"],
                    cellRendererParams: { inRouterLink: "/watersheds/" },
                    filterValueGetter: function (params) {
                        return params.data.WatershedName;
                    },
                    comparator: function (id1, id2) {
                        if (id1.LinkDisplay < id2.LinkDisplay) {
                            return -1;
                        }
                        if (id1.LinkDisplay > id2.LinkDisplay) {
                            return 1;
                        }
                        return 0;
                    }, headerComponentFramework: src_app_shared_components_field_definition_grid_header_field_definition_grid_header_component__WEBPACK_IMPORTED_MODULE_8__["FieldDefinitionGridHeaderComponent"], headerComponentParams: { fieldDefinitionType: 'Name' }, sortable: true, filter: true, width: 300 },
            ];
            this.columnDefs.forEach(x => {
                x.resizable = true;
            });
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    updateGridData() {
        this.watershedService.getWatersheds().subscribe(result => {
            this.watershedsGrid.api.setRowData(result);
        });
    }
    getSelectedWatershedIDs() {
        return this.watersheds !== undefined ? this.watersheds.map(m => m.WatershedID) : [];
    }
    exportToCsv() {
        this.utilityFunctionsService.exportGridToCsv(this.watershedsGrid, 'watersheds.csv', null);
    }
}
WatershedListComponent.ɵfac = function WatershedListComponent_Factory(t) { return new (t || WatershedListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utility_functions_service__WEBPACK_IMPORTED_MODULE_6__["UtilityFunctionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_1__["WatershedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"])); };
WatershedListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatershedListComponent, selectors: [["fresca-watershed-list"]], viewQuery: function WatershedListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.watershedsGrid = _t.first);
    } }, decls: 25, vars: 6, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "row"], [1, "col"], [1, "d-inline-block"], [1, "row", "mt-1", "mb-2"], [3, "customRichTextTypeID"], [1, "col-auto", "mr-auto"], [1, "col-auto"], [1, "col-sm-2", "pl-0", "mt-1", "mb-1"], ["placement", "top", "ngbTooltip", "Download list of Watersheds", 1, "btn", "btn-secondary", "btn-sm", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-download"], [1, "table-responsive"], [1, "ag-theme-balham", 2, "width", "100%", "height", "400px", 3, "rowData", "columnDefs", "pagination", "paginationPageSize"], ["watershedsGrid", ""], ["class", "row mt-sm-4", 4, "ngIf"], [1, "row", "mt-sm-4"], [1, "col-sm-12"], [1, "card"], [1, "card-body", "table-responsive"], ["mapID", "watershedsMap", "mapHeight", "500px", 3, "selectedWatershedIDs"]], template: function WatershedListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Watersheds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Watersheds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "custom-rich-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatershedListComponent_Template_a_click_18_listener() { return ctx.exportToCsv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ag-grid-angular", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WatershedListComponent_div_24_Template, 5, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customRichTextTypeID", ctx.richTextTypeID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.watersheds)("columnDefs", ctx.columnDefs)("pagination", true)("paginationPageSize", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watersheds);
    } }, directives: [_shared_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_9__["AlertDisplayComponent"], _shared_components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_10__["CustomRichTextComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltip"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridAngular"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_12__["WatershedMapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhdGVyc2hlZC1saXN0L3dhdGVyc2hlZC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatershedListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-watershed-list',
                templateUrl: './watershed-list.component.html',
                styleUrls: ['./watershed-list.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: src_app_services_utility_functions_service__WEBPACK_IMPORTED_MODULE_6__["UtilityFunctionsService"] }, { type: src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_1__["WatershedService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"] }]; }, { watershedsGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['watershedsGrid']
        }] }); })();


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/cookies/cookie-storage.service */ "./src/app/shared/services/cookies/cookie-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/models/enums/role.enum */ "./src/app/shared/models/enums/role.enum.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _shared_models_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var _shared_models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var _shared_models_user_user_create_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/models/user/user-create-dto */ "./src/app/shared/models/user/user-create-dto.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



















class AuthenticationService {
    constructor(router, oauthService, cookieStorageService, userService, alertService) {
        this.router = router;
        this.oauthService = oauthService;
        this.cookieStorageService = cookieStorageService;
        this.userService = userService;
        this.alertService = alertService;
        this._currentUserSetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentUserSetObservable = this._currentUserSetSubject.asObservable();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]))
            .subscribe((e) => {
            if (this.isAuthenticated()) {
                var claims = this.oauthService.getIdentityClaims();
                var globalID = claims["sub"];
                this.getUserObservable = this.userService.getUserFromGlobalID(globalID).subscribe(result => {
                    this.getUserCallback(result);
                }, error => {
                    if (error.status !== 404) {
                        this.alertService.pushAlert(new _shared_models_alert__WEBPACK_IMPORTED_MODULE_9__["Alert"]("There was an error logging into the application.", _shared_models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_10__["AlertContext"].Danger));
                        this.router.navigate(['/']);
                    }
                    else {
                        this.alertService.clearAlerts();
                        const newUser = new _shared_models_user_user_create_dto__WEBPACK_IMPORTED_MODULE_11__["UserCreateDto"]({
                            FirstName: claims["given_name"],
                            LastName: claims["family_name"],
                            Email: claims["email"],
                            RoleID: _shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_7__["RoleEnum"].Unassigned,
                            LoginName: claims["login_name"],
                            UserGuid: claims["sub"],
                        });
                        this.userService.createNewUser(newUser).subscribe(user => {
                            this.getUserCallback(user);
                        });
                    }
                });
            }
            else {
                this.currentUser = null;
                this._currentUserSetSubject.next(null);
            }
        });
        // check for a currentUser at NavigationStart so that authorization-based guards can work with promises.
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]))
            .subscribe((e) => {
            if (this.isAuthenticated() && !this.currentUser) {
                var claims = this.oauthService.getIdentityClaims();
                var globalID = claims["sub"];
                console.log("Authenticated but no user found...");
                this.getUserObservable = this.userService.getUserFromGlobalID(globalID).subscribe(user => {
                    this.currentUser = user;
                    this._currentUserSetSubject.next(this.currentUser);
                });
            }
        });
    }
    getUserCallback(user) {
        this.currentUser = user;
        this._currentUserSetSubject.next(this.currentUser);
    }
    refreshUserInfo(user) {
        this.getUserCallback(user);
    }
    dispose() {
        this.getUserObservable.unsubscribe();
    }
    isAuthenticated() {
        return this.oauthService.hasValidAccessToken();
    }
    handleUnauthorized() {
        this.logout();
    }
    login() {
        this.oauthService.initImplicitFlow();
    }
    createAccount() {
        localStorage.setItem("loginOnReturn", "true");
        const redirectUrl = encodeURIComponent(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].createAccountRedirectUrl);
        window.location.href = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].createAccountUrl}${redirectUrl}`;
    }
    logout() {
        this.oauthService.logOut();
        setTimeout(() => {
            this.cookieStorageService.removeAll();
        });
    }
    isUserAnAdministrator(user) {
        const role = user && user.Role
            ? user.Role.RoleID
            : null;
        return role === _shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_7__["RoleEnum"].Admin;
    }
    isCurrentUserAnAdministrator() {
        return this.isUserAnAdministrator(this.currentUser);
    }
    isUserUnassigned(user) {
        const role = user && user.Role
            ? user.Role.RoleID
            : null;
        return role === _shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_7__["RoleEnum"].Unassigned;
    }
    isUserRoleDisabled(user) {
        const role = user && user.Role
            ? user.Role.RoleID
            : null;
        return role === _shared_models_enums_role_enum__WEBPACK_IMPORTED_MODULE_7__["RoleEnum"].Disabled;
    }
    isCurrentUserNullOrUndefined() {
        return !this.currentUser;
    }
    hasCurrentUserAcknowledgedDisclaimer() {
        return this.currentUser != null && this.currentUser.DisclaimerAcknowledgedDate != null;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_5__["CookieStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"] }, { type: _shared_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_5__["CookieStorageService"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/role/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/role/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");




class RoleService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getRoles() {
        let route = `/roles`;
        return this.apiService.getFromApi(route);
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");




class UserService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    inviteUser(userInviteDto) {
        let route = `/users/invite`;
        return this.apiService.postToApi(route, userInviteDto);
    }
    createNewUser(userCreateDto) {
        let route = `/users/`;
        return this.apiService.postToApi(route, userCreateDto);
    }
    getUsers() {
        let route = `/users`;
        return this.apiService.getFromApi(route);
    }
    getUserFromUserID(userID) {
        let route = `/users/${userID}`;
        return this.apiService.getFromApi(route);
    }
    getUserFromGlobalID(globalID) {
        let route = `/user-claims/${globalID}`;
        return this.apiService.getFromApi(route);
    }
    updateUser(userID, userUpdateDto) {
        let route = `/users/${userID}`;
        return this.apiService.putToApi(route, userUpdateDto);
    }
    getUnassignedUserReport() {
        let route = `/users/unassigned-report`;
        return this.apiService.getFromApi(route);
    }
    setDisclaimerAcknowledgedDate(userID) {
        let route = `/users/set-disclaimer-acknowledged-date`;
        return this.apiService.putToApi(route, userID);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/utility-functions.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/utility-functions.service.ts ***!
  \*******************************************************/
/*! exports provided: UtilityFunctionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityFunctionsService", function() { return UtilityFunctionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UtilityFunctionsService {
    constructor() { }
    exportGridToCsv(grid, fileName, columnKeys) {
        var params = {
            skipHeader: false,
            columnGroups: false,
            skipFooters: true,
            skipGroups: true,
            skipPinnedTop: true,
            skipPinnedBottom: true,
            allColumns: true,
            onlySelected: false,
            suppressQuotes: false,
            fileName: fileName,
            processCellCallback: function (p) {
                if (p.column.getColDef().cellRendererFramework) {
                    if (p.value.DownloadDisplay) {
                        return p.value.DownloadDisplay;
                    }
                    else {
                        return p.value.LinkDisplay;
                    }
                }
                else {
                    return p.value;
                }
            }
        };
        if (columnKeys) {
            params.columnKeys = columnKeys;
        }
        grid.api.exportDataAsCsv(params);
    }
}
UtilityFunctionsService.ɵfac = function UtilityFunctionsService_Factory(t) { return new (t || UtilityFunctionsService)(); };
UtilityFunctionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityFunctionsService, factory: UtilityFunctionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityFunctionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/watershed/watershed.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/watershed/watershed.service.ts ***!
  \*********************************************************/
/*! exports provided: WatershedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatershedService", function() { return WatershedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");




class WatershedService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getWatershedByWatershedID(watershedID) {
        let route = `/watersheds/${watershedID}`;
        return this.apiService.getFromApi(route);
    }
    getBoundingBoxByWatershedIDs(watershedIDs) {
        let route = `/watersheds/getBoundingBox`;
        let watershedIDListDto = { watershedIDs: watershedIDs };
        return this.apiService.postToApi(route, watershedIDListDto);
    }
    getWatersheds() {
        let route = `/watersheds`;
        return this.apiService.getFromApi(route);
    }
}
WatershedService.ɵfac = function WatershedService_Factory(t) { return new (t || WatershedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
WatershedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WatershedService, factory: WatershedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatershedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/ag-grid/fontawesome-icon-link-renderer/fontawesome-icon-link-renderer.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/shared/components/ag-grid/fontawesome-icon-link-renderer/fontawesome-icon-link-renderer.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: FontAwesomeIconLinkRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIconLinkRendererComponent", function() { return FontAwesomeIconLinkRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a0, a1) { return [a0, a1]; };
function FontAwesomeIconLinkRendererComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.params.inRouterLink, ctx_r0.params.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas fa-", ctx_r0.params.fontawesomeIconName, "");
} }
class FontAwesomeIconLinkRendererComponent {
    agInit(params) {
        if (params.value === null) {
            params = { value: "" };
        }
        else {
            this.params = params;
        }
    }
    refresh(params) {
        return false;
    }
}
FontAwesomeIconLinkRendererComponent.ɵfac = function FontAwesomeIconLinkRendererComponent_Factory(t) { return new (t || FontAwesomeIconLinkRendererComponent)(); };
FontAwesomeIconLinkRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FontAwesomeIconLinkRendererComponent, selectors: [["fresca-fontawesome-icon-link-renderer"]], decls: 1, vars: 1, consts: [[3, "routerLink", 4, "ngIf"], [3, "routerLink"]], template: function FontAwesomeIconLinkRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FontAwesomeIconLinkRendererComponent_a_0_Template, 2, 7, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FnLWdyaWQvZm9udGF3ZXNvbWUtaWNvbi1saW5rLXJlbmRlcmVyL2ZvbnRhd2Vzb21lLWljb24tbGluay1yZW5kZXJlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontAwesomeIconLinkRendererComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-fontawesome-icon-link-renderer',
                templateUrl: './fontawesome-icon-link-renderer.component.html',
                styleUrls: ['./fontawesome-icon-link-renderer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/ag-grid/link-renderer/link-renderer.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/ag-grid/link-renderer/link-renderer.component.ts ***!
  \************************************************************************************/
/*! exports provided: LinkRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRendererComponent", function() { return LinkRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a0, a1) { return [a0, a1]; };
function LinkRendererComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.params.inRouterLink, ctx_r0.params.value.LinkValue))("className", ctx_r0.params.value.CssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.params.value.LinkDisplay);
} }
class LinkRendererComponent {
    agInit(params) {
        if (params.value === null) {
            params = { value: { LinkDisplay: "", LinkValue: "" }, inRouterLink: "" };
        }
        else {
            this.params = params;
        }
    }
    refresh(params) {
        return false;
    }
}
LinkRendererComponent.ɵfac = function LinkRendererComponent_Factory(t) { return new (t || LinkRendererComponent)(); };
LinkRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkRendererComponent, selectors: [["fresca-link-renderer"]], decls: 1, vars: 1, consts: [[3, "routerLink", "className", 4, "ngIf"], [3, "routerLink", "className"]], template: function LinkRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LinkRendererComponent_a_0_Template, 2, 6, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params.value.LinkDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FnLWdyaWQvbGluay1yZW5kZXJlci9saW5rLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkRendererComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-link-renderer',
                templateUrl: './link-renderer.component.html',
                styleUrls: ['./link-renderer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/ag-grid/multi-link-renderer/multi-link-renderer.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/ag-grid/multi-link-renderer/multi-link-renderer.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MultiLinkRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiLinkRendererComponent", function() { return MultiLinkRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a0, a1) { return [a0, a1]; };
function MultiLinkRendererComponent_ng_container_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r3.params.inRouterLink, link_r1.LinkValue))("className", link_r1.CssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", link_r1.LinkDisplay, ", ");
} }
function MultiLinkRendererComponent_ng_container_0_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r4.params.inRouterLink, link_r1.LinkValue))("className", link_r1.CssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.LinkDisplay);
} }
function MultiLinkRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiLinkRendererComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiLinkRendererComponent_ng_container_0_a_2_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const isLast_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.LinkDisplay && !isLast_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.LinkDisplay && isLast_r2);
} }
class MultiLinkRendererComponent {
    agInit(params) {
        if (params.value === null) {
            params = {
                links: [{ value: { LinkDisplay: "", LinkValue: "" } }],
                inRouterLink: ""
            };
        }
        else {
            this.params = params;
        }
    }
    refresh(params) {
        return false;
    }
}
MultiLinkRendererComponent.ɵfac = function MultiLinkRendererComponent_Factory(t) { return new (t || MultiLinkRendererComponent)(); };
MultiLinkRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiLinkRendererComponent, selectors: [["fresca-multi-link-renderer"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink", "className", 4, "ngIf"], [3, "routerLink", "className"]], template: function MultiLinkRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiLinkRendererComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.params.value.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FnLWdyaWQvbXVsdGktbGluay1yZW5kZXJlci9tdWx0aS1saW5rLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiLinkRendererComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-multi-link-renderer',
                templateUrl: './multi-link-renderer.component.html',
                styleUrls: ['./multi-link-renderer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/alert-display/alert-display.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/alert-display/alert-display.component.ts ***!
  \****************************************************************************/
/*! exports provided: AlertDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDisplayComponent", function() { return AlertDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






function AlertDisplayComponent_div_0_ngb_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AlertDisplayComponent_div_0_ngb_alert_1_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const alert_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.closeAlert(alert_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r2.context)("dismissible", alert_r2.dismissable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AlertDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertDisplayComponent_div_0_ngb_alert_1_Template, 2, 3, "ngb-alert", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.alerts);
} }
class AlertDisplayComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alertSubscription = this.alertService.alertSubject.asObservable().subscribe(alerts => {
            this.alerts = alerts;
        });
    }
    ngOnDestroy() {
        this.alerts = null;
        this.alertSubscription.unsubscribe();
        this.alertService.clearAlerts();
    }
    closeAlert(alert) {
        this.alertService.removeAlert(alert);
    }
}
AlertDisplayComponent.ɵfac = function AlertDisplayComponent_Factory(t) { return new (t || AlertDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertDisplayComponent, selectors: [["app-alert-display"]], decls: 1, vars: 1, consts: [["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [3, "type", "dismissible", "close", 4, "ngFor", "ngForOf"], [3, "type", "dismissible", "close"], [3, "innerHTML"]], template: function AlertDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertDisplayComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alerts.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0LWRpc3BsYXkvYWxlcnQtZGlzcGxheS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert-display',
                templateUrl: './alert-display.component.html',
                styleUrls: ['./alert-display.component.css']
            }]
    }], function () { return [{ type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/combo-chart/combo-series-vertical.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/combo-chart/combo-series-vertical.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ComboSeriesVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboSeriesVerticalComponent", function() { return ComboSeriesVerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["ngx-combo-charts-series-vertical", ""];
function ComboSeriesVerticalComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ComboSeriesVerticalComponent__svg_g_0_Template__svg_g_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClick($event); })("activate", function ComboSeriesVerticalComponent__svg_g_0_Template__svg_g_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.activate.emit($event); })("deactivate", function ComboSeriesVerticalComponent__svg_g_0_Template__svg_g_deactivate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deactivate.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animationState", "active")("width", bar_r1.width)("height", bar_r1.height)("x", bar_r1.x)("y", bar_r1.y)("fill", bar_r1.color)("stops", bar_r1.gradientStops)("data", bar_r1.data)("orientation", "vertical")("roundEdges", bar_r1.roundEdges)("gradient", ctx_r0.gradient)("isActive", ctx_r0.isActive(bar_r1.data))("animations", ctx_r0.animations)("noBarWhenZero", ctx_r0.noBarWhenZero)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", bar_r1.tooltipText);
} }
class ComboSeriesVerticalComponent {
    constructor() {
        this.type = 'standard';
        this.tooltipDisabled = false;
        this.animations = true;
        this.noBarWhenZero = true;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bandwidth = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        let width;
        if (this.series.length) {
            width = this.xScale.bandwidth();
            this.bandwidth.emit(width);
        }
        let d0 = 0;
        let total;
        if (this.type === 'normalized') {
            total = this.series.map(d => d.value).reduce((sum, d) => sum + d, 0);
        }
        this.bars = this.series.map((d, index) => {
            let value = d.value;
            const label = d.name;
            const formattedLabel = Object(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["formatLabel"])(label);
            const roundEdges = this.type === 'standard';
            const bar = {
                value,
                label,
                roundEdges,
                data: d,
                width,
                formattedLabel,
                height: 0,
                x: 0,
                y: 0
            };
            if (this.type === 'standard') {
                bar.height = Math.abs(this.yScale(value) - this.yScale(0));
                bar.x = this.xScale(label);
                if (value < 0) {
                    bar.y = this.yScale(0);
                }
                else {
                    bar.y = this.yScale(value);
                }
            }
            else if (this.type === 'stacked') {
                const offset0 = d0;
                const offset1 = offset0 + value;
                d0 += value;
                bar.height = this.yScale(offset0) - this.yScale(offset1);
                bar.x = 0;
                bar.y = this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
            }
            else if (this.type === 'normalized') {
                let offset0 = d0;
                let offset1 = offset0 + value;
                d0 += value;
                if (total > 0) {
                    offset0 = (offset0 * 100) / total;
                    offset1 = (offset1 * 100) / total;
                }
                else {
                    offset0 = 0;
                    offset1 = 0;
                }
                bar.height = this.yScale(offset0) - this.yScale(offset1);
                bar.x = 0;
                bar.y = this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
                value = (offset1 - offset0).toFixed(2) + '%';
            }
            if (this.colors.scaleType === 'ordinal') {
                bar.color = this.colors.getColor(label);
            }
            else {
                if (this.type === 'standard') {
                    bar.color = this.colors.getColor(value);
                    bar.gradientStops = this.colors.getLinearGradientStops(value);
                }
                else {
                    bar.color = this.colors.getColor(bar.offset1);
                    bar.gradientStops = this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
                }
            }
            let tooltipLabel = formattedLabel;
            if (this.seriesName) {
                tooltipLabel = `${this.seriesName} • ${formattedLabel}`;
            }
            this.getSeriesTooltips(this.seriesLine, index);
            const lineValue = this.seriesLine[0].series[index].value;
            const lineName = this.seriesLine[0].series[index].name;
            bar.tooltipText = `
        <span class="tooltip-label">${tooltipLabel}</span>
        <span class="tooltip-val"> Y1 - ${value.toLocaleString()} • Y2 - ${lineValue.toLocaleString()}%</span>
      `;
            return bar;
        });
    }
    getSeriesTooltips(seriesLine, index) {
        return seriesLine.map(d => {
            return d.series[index];
        });
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    }
    onClick(data) {
        this.select.emit(data);
    }
    trackBy(index, bar) {
        return bar.label;
    }
}
ComboSeriesVerticalComponent.ɵfac = function ComboSeriesVerticalComponent_Factory(t) { return new (t || ComboSeriesVerticalComponent)(); };
ComboSeriesVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComboSeriesVerticalComponent, selectors: [["g", "ngx-combo-charts-series-vertical", ""]], inputs: { dims: "dims", type: "type", series: "series", seriesLine: "seriesLine", xScale: "xScale", yScale: "yScale", colors: "colors", tooltipDisabled: "tooltipDisabled", gradient: "gradient", activeEntries: "activeEntries", seriesName: "seriesName", animations: "animations", noBarWhenZero: "noBarWhenZero" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", bandwidth: "bandwidth" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, decls: 1, vars: 2, consts: [["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "isActive", "animations", "noBarWhenZero", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "isActive", "animations", "noBarWhenZero", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "select", "activate", "deactivate"]], template: function ComboSeriesVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComboSeriesVerticalComponent__svg_g_0_Template, 1, 18, "g", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bars)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["BarComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animationState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                        transform: '*',
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'scale(0)' }))
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComboSeriesVerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'g[ngx-combo-charts-series-vertical]',
                template: `
    <svg:g ngx-charts-bar *ngFor="let bar of bars; trackBy: trackBy"
      [@animationState]="'active'"
      [width]="bar.width"
      [height]="bar.height"
      [x]="bar.x"
      [y]="bar.y"
      [fill]="bar.color"
      [stops]="bar.gradientStops"
      [data]="bar.data"
      [orientation]="'vertical'"
      [roundEdges]="bar.roundEdges"
      [gradient]="gradient"
      [isActive]="isActive(bar.data)"
      [animations]="animations"
      [noBarWhenZero]="noBarWhenZero"
      (select)="onClick($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="'top'"
      [tooltipType]="'tooltip'"
      [tooltipTitle]="bar.tooltipText">
    </svg:g>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animationState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 1,
                                transform: '*',
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'scale(0)' }))
                        ])
                    ])
                ]
            }]
    }], null, { dims: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], series: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], seriesLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], yScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltipDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeEntries: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], seriesName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noBarWhenZero: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deactivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], bandwidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomRichTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRichTextComponent", function() { return CustomRichTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_custom_rich_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/custom-rich-text.service */ "./src/app/shared/services/custom-rich-text.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_custom_rich_text_detailed_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/custom-rich-text-detailed-dto */ "./src/app/shared/models/custom-rich-text-detailed-dto.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


















function CustomRichTextComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomRichTextComponent_div_1_ng_container_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r6.customRichTextContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CustomRichTextComponent_div_1_ng_container_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} }
function CustomRichTextComponent_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomRichTextComponent_div_1_ng_container_1_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.enterEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomRichTextComponent_div_1_ng_container_1_div_1_div_5_Template, 1, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomRichTextComponent_div_1_ng_container_1_div_1_div_6_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.emptyContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.emptyContent);
} }
function CustomRichTextComponent_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r5.customRichTextContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CustomRichTextComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomRichTextComponent_div_1_ng_container_1_div_1_Template, 7, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomRichTextComponent_div_1_ng_container_1_div_2_Template, 1, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showEditButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showEditButton());
} }
function CustomRichTextComponent_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please wait while the image is uploaded...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomRichTextComponent_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomRichTextComponent_div_1_div_2_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.saveEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomRichTextComponent_div_1_div_2_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomRichTextComponent_div_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please wait while the image is uploaded...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "ckEditorDisabled": a0 }; };
function CustomRichTextComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomRichTextComponent_div_1_div_2_div_1_Template, 4, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ckeditor", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomRichTextComponent_div_1_div_2_Template_ckeditor_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.editedContent = $event; })("ready", function CustomRichTextComponent_div_1_div_2_Template_ckeditor_ready_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.ckEditorReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomRichTextComponent_div_1_div_2_div_3_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomRichTextComponent_div_1_div_2_div_4_Template, 4, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r3.isUploadingImage()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isUploadingImage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx_r3.Editor)("ngModel", ctx_r3.editedContent)("config", ctx_r3.ckConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isUploadingImage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isUploadingImage());
} }
function CustomRichTextComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomRichTextComponent_div_1_ng_container_1_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomRichTextComponent_div_1_div_2_Template, 5, 9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
} }
class CustomRichTextComponent {
    constructor(customRichTextService, authenticationService, cdr, alertService, sanitizer) {
        this.customRichTextService = customRichTextService;
        this.authenticationService = authenticationService;
        this.cdr = cdr;
        this.alertService = alertService;
        this.sanitizer = sanitizer;
        this.isLoading = true;
        this.isEditing = false;
        this.isEmptyContent = false;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__;
        //For media embed https://ckeditor.com/docs/ckeditor5/latest/api/module_media-embed_mediaembed-MediaEmbedConfig.html
        //Only some embeds will work, and if we want others to work we'll likely need to write some extra functions
        this.ckConfig = { mediaEmbed: { previewsInData: true } };
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
        });
        //window.Editor = this.Editor;
        this.customRichTextService.getCustomRichText(this.customRichTextTypeID).subscribe(x => {
            this.customRichTextContent = this.sanitizer.bypassSecurityTrustHtml(x.CustomRichTextContent);
            this.isEmptyContent = x.IsEmptyContent;
            this.editedContent = x.CustomRichTextContent;
            this.isLoading = false;
        });
    }
    // tell CkEditor to use the class below as its upload adapter
    // see https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/upload-adapter.html#how-does-the-image-upload-work
    ckEditorReady(editor) {
        const customRichTextService = this.customRichTextService;
        this.editor = editor;
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            // disable the editor until the image comes back
            editor.isReadOnly = true;
            return new CkEditorUploadAdapter(loader, customRichTextService, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiHostName, editor);
        };
    }
    showEditButton() {
        return this.authenticationService.isUserAnAdministrator(this.currentUser);
    }
    enterEdit() {
        this.isEditing = true;
    }
    cancelEdit() {
        this.isEditing = false;
    }
    saveEdit() {
        this.isEditing = false;
        this.isLoading = true;
        const updateDto = new _models_custom_rich_text_detailed_dto__WEBPACK_IMPORTED_MODULE_3__["CustomRichTextDetailedDto"]({ CustomRichTextContent: this.editedContent });
        console.log(updateDto);
        this.customRichTextService.updateCustomRichText(this.customRichTextTypeID, updateDto).subscribe(x => {
            this.customRichTextContent = this.sanitizer.bypassSecurityTrustHtml(x.CustomRichTextContent);
            this.editedContent = x.CustomRichTextContent;
            this.isLoading = false;
        }, error => {
            this.isLoading = false;
            this.alertService.pushAlert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]("There was an error updating the rich text content", _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__["AlertContext"].Danger, true));
        });
    }
    isUploadingImage() {
        return this.editor && this.editor.isReadOnly;
    }
}
CustomRichTextComponent.ɵfac = function CustomRichTextComponent_Factory(t) { return new (t || CustomRichTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_custom_rich_text_service__WEBPACK_IMPORTED_MODULE_1__["CustomRichTextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"])); };
CustomRichTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomRichTextComponent, selectors: [["custom-rich-text"]], inputs: { customRichTextTypeID: "customRichTextTypeID" }, decls: 2, vars: 2, consts: [["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], [1, "fa", "fa-spinner", "loading-spinner"], [3, "ngClass", 4, "ngIf"], ["class", "customRichTextContent", "style", "position: relative; min-height: 30px;", 4, "ngIf"], [3, "innerHtml", 4, "ngIf"], [1, "customRichTextContent", 2, "position", "relative", "min-height", "30px"], [1, "hoverEditButton"], [2, "margin-top", "10px"], ["type", "button", 1, "btn", "btn-fresca", 3, "click"], ["class", "hoverEmptySpace", 4, "ngIf"], [3, "innerHtml"], [1, "hoverEmptySpace"], [3, "ngClass"], [3, "editor", "ngModel", "config", "ngModelChange", "ready"], ["style", "float:right;", 4, "ngIf"], [1, "mt-1", "fa", "fa-spinner", "loading-spinner", 2, "float", "right"], [2, "float", "right"], ["type", "button", 1, "btn", "btn-fresca", "mt-1", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "mt-1", 3, "click"]], template: function CustomRichTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomRichTextComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomRichTextComponent_div_1_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]], styles: [".hoverEditButton[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: -10px;\n  z-index: 1;\n}\n\n.hoverEditButton[_ngcontent-%COMP%]   a.btn-rio[_ngcontent-%COMP%] {\n  background-color: gray;\n  color: white;\n}\n\n.hoverEmptySpace[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n}\n\n.customRichTextContent[_ngcontent-%COMP%] {\n  background-color: inherit;\n  transition: all 100ms ease-out;\n}\n\n.customRichTextContent[_ngcontent-%COMP%]:hover {\n  background-color: #d3d3d3;\n  background-color: rgba(211, 211, 211, 0.2);\n}\n\n.customRichTextContent[_ngcontent-%COMP%]   .hoverEditButton[_ngcontent-%COMP%] {\n  visibility: hidden;\n  -ms-opacity: 0;\n  opacity: 0;\n  transition: all 100ms ease-out;\n}\n\n.customRichTextContent[_ngcontent-%COMP%]:hover   .hoverEditButton[_ngcontent-%COMP%] {\n  visibility: visible;\n  -ms-opacity: 1;\n  opacity: 1;\n}\n\n.ckEditorDisabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLXJpY2gtdGV4dC9DOlxcZ2l0XFxzaXRrYXRlY2hcXE9yZWdvblRpbHRoXFxTb3VyY2VcXE9yZWdvblRpbHRoLldlYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxjdXN0b20tcmljaC10ZXh0XFxjdXN0b20tcmljaC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jdXN0b20tcmljaC10ZXh0L2N1c3RvbS1yaWNoLXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREVFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFFO0VBQ0UseUJBQUE7RUFJQSw4QkFBQTtBQ0dKOztBRERFO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUlBLDhCQUFBO0FDS0o7O0FESEU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDTUo7O0FESEU7RUFDRSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLXJpY2gtdGV4dC9jdXN0b20tcmljaC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ob3ZlckVkaXRCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgfVxyXG4gIC5ob3ZlckVkaXRCdXR0b24gYS5idG4tcmlvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5ob3ZlckVtcHR5U3BhY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5jdXN0b21SaWNoVGV4dENvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuICB9XHJcbiAgLmN1c3RvbVJpY2hUZXh0Q29udGVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjIpO1xyXG4gIH1cclxuICAuY3VzdG9tUmljaFRleHRDb250ZW50IC5ob3ZlckVkaXRCdXR0b24ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW1zLW9wYWNpdHk6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuICAuY3VzdG9tUmljaFRleHRDb250ZW50OmhvdmVyIC5ob3ZlckVkaXRCdXR0b24ge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC1tcy1vcGFjaXR5OiAxO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5ja0VkaXRvckRpc2FibGVke1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZFxyXG4gIH0iLCIuaG92ZXJFZGl0QnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IC0xMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uaG92ZXJFZGl0QnV0dG9uIGEuYnRuLXJpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvdmVyRW1wdHlTcGFjZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jdXN0b21SaWNoVGV4dENvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG59XG5cbi5jdXN0b21SaWNoVGV4dENvbnRlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMik7XG59XG5cbi5jdXN0b21SaWNoVGV4dENvbnRlbnQgLmhvdmVyRWRpdEJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1zLW9wYWNpdHk6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcbn1cblxuLmN1c3RvbVJpY2hUZXh0Q29udGVudDpob3ZlciAuaG92ZXJFZGl0QnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLW1zLW9wYWNpdHk6IDE7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ja0VkaXRvckRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomRichTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-rich-text',
                templateUrl: './custom-rich-text.component.html',
                styleUrls: ['./custom-rich-text.component.scss']
            }]
    }], function () { return [{ type: _services_custom_rich_text_service__WEBPACK_IMPORTED_MODULE_1__["CustomRichTextService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }]; }, { customRichTextTypeID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class CkEditorUploadAdapter {
    constructor(loader, uploadService, apiUrl, editor) {
        // The file loader instance to use during the upload.
        this.loader = loader;
        this.service = uploadService;
        this.apiUrl = apiUrl;
        this.editor = editor;
    }
    // Starts the upload process.
    upload() {
        const editor = this.editor;
        const service = this.service;
        return this.loader.file.then(file => new Promise((resolve, reject) => {
            service.uploadFile(file).subscribe(x => {
                const imageUrl = `https://${this.apiUrl}${x.imageUrl}`;
                editor.isReadOnly = false;
                resolve({
                    // todo: this should be correct instead of incorrect.
                    default: imageUrl
                });
            }, error => {
                editor.isReadOnly = false;
                reject("There was an error uploading the file. Please try again.");
            });
        }));
    }
    // Aborts the upload process.
    abort() {
        // NP 4/23/2020 todo? I'm not sure this is actually necessary, I don't see any way for the user to cancel the upload once triggered.
    }
}


/***/ }),

/***/ "./src/app/shared/components/field-definition-grid-header/field-definition-grid-header.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/field-definition-grid-header/field-definition-grid-header.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FieldDefinitionGridHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDefinitionGridHeaderComponent", function() { return FieldDefinitionGridHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field-definition/field-definition.component */ "./src/app/shared/components/field-definition/field-definition.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["header"];
function FieldDefinitionGridHeaderComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function FieldDefinitionGridHeaderComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function FieldDefinitionGridHeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDefinitionGridHeaderComponent_div_7_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onMenuClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FieldDefinitionGridHeaderComponent {
    constructor(elementRef) {
        this.showMenu = false;
        this.elementRef = elementRef;
    }
    agInit(params) {
        this.params = params;
        //because of the way the popover sits and how it's triggered, it's best to just prevent the column from covering it
        //TODO make the css here more act more like the default ag-grid css
        this.params.column.minWidth = this.params.column.actualWidth;
        this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
        this.onSortChanged();
    }
    ngOnDestroy() {
    }
    onMenuClick(event) {
        event.stopPropagation();
        this.params.showColumnMenu(this.querySelector('.customHeaderMenuButton'));
    }
    onSortRequested(event) {
        this.params.progressSort(event.shiftKey);
    }
    ;
    onSortChanged() {
        if (this.params.column.isSortAscending()) {
            this.sorted = 'asc';
        }
        else if (this.params.column.isSortDescending()) {
            this.sorted = 'desc';
        }
        else {
            this.sorted = '';
        }
    }
    ;
    querySelector(selector) {
        return this.elementRef.nativeElement.querySelector('.customHeaderMenuButton', selector);
    }
}
FieldDefinitionGridHeaderComponent.ɵfac = function FieldDefinitionGridHeaderComponent_Factory(t) { return new (t || FieldDefinitionGridHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FieldDefinitionGridHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldDefinitionGridHeaderComponent, selectors: [["fresca-field-definition-grid-header"]], viewQuery: function FieldDefinitionGridHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
    } }, decls: 8, vars: 6, consts: [[2, "display", "flex", "align-items", "center", "width", "100%", 3, "click", "mouseenter", "mouseleave"], [1, "customHeaderLabel"], ["header", ""], [3, "fieldDefinitionType", "labelOverride"], [2, "margin-left", "5px", "margin-right", "5px", 3, "hidden"], ["class", "fa fa-long-arrow-down", 4, "ngIf"], ["class", "fa fa-long-arrow-up", 4, "ngIf"], ["class", "customHeaderMenuButton ml-auto", 3, "click", 4, "ngIf"], [1, "fa", "fa-long-arrow-down"], [1, "fa", "fa-long-arrow-up"], [1, "customHeaderMenuButton", "ml-auto", 3, "click"], [1, "fa", "fa-bars"]], template: function FieldDefinitionGridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDefinitionGridHeaderComponent_Template_div_click_0_listener($event) { return ctx.onSortRequested($event); })("mouseenter", function FieldDefinitionGridHeaderComponent_Template_div_mouseenter_0_listener() { return ctx.showMenu = true; })("mouseleave", function FieldDefinitionGridHeaderComponent_Template_div_mouseleave_0_listener() { return ctx.showMenu = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "field-definition", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldDefinitionGridHeaderComponent_i_5_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FieldDefinitionGridHeaderComponent_i_6_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FieldDefinitionGridHeaderComponent_div_7_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldDefinitionType", ctx.params.fieldDefinitionType)("labelOverride", ctx.params.labelOverride);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.params.enableSorting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sorted === "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sorted === "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu);
    } }, directives: [_field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_1__["FieldDefinitionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".customHeaderMenuButton[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n\n.customHeaderLabel[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.customSortDownLabel[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.customSortUpLabel[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n\n.customSortRemoveLabel[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-left: 3px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: cornflowerblue;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQtZGVmaW5pdGlvbi1ncmlkLWhlYWRlci9DOlxcZ2l0XFxzaXRrYXRlY2hcXE9yZWdvblRpbHRoXFxTb3VyY2VcXE9yZWdvblRpbHRoLldlYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmaWVsZC1kZWZpbml0aW9uLWdyaWQtaGVhZGVyXFxmaWVsZC1kZWZpbml0aW9uLWdyaWQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZC1kZWZpbml0aW9uLWdyaWQtaGVhZGVyL2ZpZWxkLWRlZmluaXRpb24tZ3JpZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQtZGVmaW5pdGlvbi1ncmlkLWhlYWRlci9maWVsZC1kZWZpbml0aW9uLWdyaWQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUhlYWRlck1lbnVCdXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmN1c3RvbUhlYWRlckxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jdXN0b21Tb3J0RG93bkxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tU29ydFVwTGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxuLmN1c3RvbVNvcnRSZW1vdmVMYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IiwiLmN1c3RvbUhlYWRlck1lbnVCdXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uY3VzdG9tSGVhZGVyTGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY3VzdG9tU29ydERvd25MYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY3VzdG9tU29ydFVwTGFiZWwge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uY3VzdG9tU29ydFJlbW92ZUxhYmVsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldDefinitionGridHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-field-definition-grid-header',
                templateUrl: './field-definition-grid-header.component.html',
                styleUrls: ['./field-definition-grid-header.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['header']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/field-definition/field-definition.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/field-definition/field-definition.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FieldDefinitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDefinitionComponent", function() { return FieldDefinitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var _services_field_definition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/field-definition-service */ "./src/app/shared/services/field-definition-service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _models_enums_field_definition_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/enums/field-definition-type.enum */ "./src/app/shared/models/enums/field-definition-type.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

















const _c0 = ["p"];
const _c1 = ["popContent"];
function FieldDefinitionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDefinitionComponent_div_1_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDefinitionComponent_div_1_ng_template_1_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.enterEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("aria-label", "Edit the definition for ", ctx_r8.fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName, "");
} }
function FieldDefinitionComponent_div_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FieldDefinitionComponent_div_1_ng_template_1_div_4_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isEditing);
} }
function FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r15.fieldDefinition.FieldDefinitionValue, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
} }
function FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_div_1_div_1_Template, 1, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_div_1_div_2_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.emptyContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.emptyContent);
} }
function FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r14.fieldDefinition.FieldDefinitionValue, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_div_1_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_div_2_Template, 1, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.showEditButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.showEditButton());
} }
function FieldDefinitionComponent_div_1_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ckeditor", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDefinitionComponent_div_1_ng_template_3_div_1_Template_ckeditor_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.editedContent = $event; })("ready", function FieldDefinitionComponent_div_1_ng_template_3_div_1_Template_ckeditor_ready_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.ckEditorReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDefinitionComponent_div_1_ng_template_3_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.saveEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDefinitionComponent_div_1_ng_template_3_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.cancelEdit(ctx_r21.p); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx_r12.Editor)("ngModel", ctx_r12.editedContent)("config", ctx_r12.ckConfig);
} }
function FieldDefinitionComponent_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FieldDefinitionComponent_div_1_ng_template_3_ng_container_0_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDefinitionComponent_div_1_ng_template_3_div_1_Template, 7, 3, "div", 7);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isEditing);
} }
function FieldDefinitionComponent_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function FieldDefinitionComponent_div_1_ng_container_5_Template_div_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.notEditingMouseEnter(); })("mouseleave", function FieldDefinitionComponent_div_1_ng_container_5_Template_div_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.notEditingMouseLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.getLabelText(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r4)("popoverTitle", _r2)("autoClose", false);
} }
function FieldDefinitionComponent_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.getLabelText(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r4)("popoverTitle", ctx_r7.fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName);
} }
function FieldDefinitionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDefinitionComponent_div_1_ng_template_1_Template, 5, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldDefinitionComponent_div_1_ng_template_3_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldDefinitionComponent_div_1_ng_container_5_Template, 6, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FieldDefinitionComponent_div_1_ng_container_6_Template, 4, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showEditButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showEditButton());
} }
class FieldDefinitionComponent {
    constructor(fieldDefinitionService, authenticationService, cdr, alertService, elem) {
        this.fieldDefinitionService = fieldDefinitionService;
        this.authenticationService = authenticationService;
        this.cdr = cdr;
        this.alertService = alertService;
        this.elem = elem;
        this.isLoading = true;
        this.isEditing = false;
        this.emptyContent = false;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__;
        this.ckConfig = { "removePlugins": ["MediaEmbed", "ImageUpload"] };
    }
    ngOnInit() {
        this.fieldDefinitionService.getFieldDefinition(_models_enums_field_definition_type_enum__WEBPACK_IMPORTED_MODULE_8__["FieldDefinitionTypeEnum"][this.fieldDefinitionType]).subscribe(x => {
            this.loadFieldDefinition(x);
        });
    }
    ngOnDestroy() {
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    // tell CkEditor to use the class below as its upload adapter
    // see https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/upload-adapter.html#how-does-the-image-upload-work
    ckEditorReady(editor) {
        this.editor = editor;
    }
    getLabelText() {
        return this.labelOverride !== null && this.labelOverride !== undefined ? this.labelOverride : this.fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName;
    }
    showEditButton() {
        return this.authenticationService.isCurrentUserAnAdministrator();
    }
    enterEdit() {
        var _a;
        this.editedContent = (_a = this.fieldDefinition.FieldDefinitionValue) !== null && _a !== void 0 ? _a : "";
        this.isEditing = true;
    }
    cancelEdit() {
        this.isEditing = false;
        this.popover.close();
    }
    saveEdit() {
        this.isEditing = false;
        this.isLoading = true;
        this.fieldDefinition.FieldDefinitionValue = this.editedContent;
        this.fieldDefinitionService.updateFieldDefinition(this.fieldDefinition).subscribe(x => {
            this.loadFieldDefinition(x);
        }, error => {
            this.isLoading = false;
            this.alertService.pushAlert(new _models_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]("There was an error updating the field definition", _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__["AlertContext"].Danger, true));
        });
    }
    loadFieldDefinition(fieldDefinition) {
        var _a;
        this.fieldDefinition = fieldDefinition;
        this.emptyContent = ((_a = fieldDefinition.FieldDefinitionValue) === null || _a === void 0 ? void 0 : _a.length) > 0 ? false : true;
        this.isLoading = false;
    }
    notEditingMouseEnter() {
        if (!this.isEditing) {
            this.popover.open();
            this.elem.nativeElement.closest('body')
                .querySelector(".popover")
                .addEventListener('mouseleave', this.mouseLeaveEvent.bind(this));
        }
    }
    mouseLeaveEvent() {
        if (!this.isEditing) {
            this.popover.close();
        }
    }
    notEditingMouseLeave() {
        setTimeout(() => {
            let hoveringPopover = this.elem.nativeElement.closest('body')
                .querySelector(".popover:hover");
            if (!hoveringPopover && !this.isEditing) {
                this.popover.close();
            }
        }, 50);
    }
}
FieldDefinitionComponent.ɵfac = function FieldDefinitionComponent_Factory(t) { return new (t || FieldDefinitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_field_definition_service__WEBPACK_IMPORTED_MODULE_2__["FieldDefinitionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FieldDefinitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldDefinitionComponent, selectors: [["field-definition"]], viewQuery: function FieldDefinitionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { fieldDefinitionType: "fieldDefinitionType", labelOverride: "labelOverride" }, decls: 2, vars: 2, consts: [["class", "text-center", 4, "ngIf"], ["class", "d-inline", 4, "ngIf"], [1, "text-center"], [1, "fa", "fa-spinner", "loading-spinner"], [1, "d-inline"], ["popTitle", ""], ["popContent", ""], [4, "ngIf"], [1, "row"], [1, "col-auto", "mr-auto"], [1, "mt-1"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "col-sm-2", "pl-0", "pr-0"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "fa", "fa-pencil-square-o"], ["style", "position: relative; min-height: 30px;", 4, "ngIf"], [3, "innerHtml", 4, "ngIf"], [2, "position", "relative", "min-height", "30px"], ["class", "hoverEmptySpace", 4, "ngIf"], [3, "innerHtml"], [1, "hoverEmptySpace"], [3, "editor", "ngModel", "config", "ngModelChange", "ready"], [2, "float", "right"], ["type", "button", 1, "btn", "btn-sm", "btn-fresca", "mt-1", "mr-1", "mb-1", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", "mt-1", "mb-1", 3, "click"], [1, "d-inline-block", 3, "mouseenter", "mouseleave"], [2, "overflow", "hidden", "text-overflow", "ellipsis"], ["triggers", "manual", "popoverClass", "popover-override", "container", "body", 1, "fas", "fa-question-circle", "small", 2, "cursor", "help", 3, "ngbPopover", "popoverTitle", "autoClose"], ["p", "ngbPopover"], ["popoverClass", "popover-override", "triggers", "mouseenter:mouseleave", "container", "body", 1, "fas", "fa-question-circle", "small", 2, "cursor", "help", 3, "ngbPopover", "popoverTitle"]], template: function FieldDefinitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FieldDefinitionComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDefinitionComponent_div_1_Template, 7, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopover"]], styles: [".hoverEditButton[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: 8px;\n  height: 16px;\n}\n\n.hoverEmptySpace[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n}\n\n.customRichTextContent[_ngcontent-%COMP%] {\n  min-width: 60px;\n  background-color: inherit;\n  transition: all 100ms ease-out;\n}\n\n.customRichTextContent[_ngcontent-%COMP%]:hover {\n  background-color: #d3d3d3;\n  background-color: rgba(211, 211, 211, 0.2);\n}\n\n.customRichTextContent[_ngcontent-%COMP%]   .hoverEditButton[_ngcontent-%COMP%] {\n  visibility: hidden;\n  -ms-opacity: 0;\n  opacity: 0;\n  transition: all 100ms ease-out;\n}\n\n.customRichTextContent[_ngcontent-%COMP%]:hover   .hoverEditButton[_ngcontent-%COMP%] {\n  visibility: visible;\n  -ms-opacity: 1;\n  opacity: 1;\n}\n\n.ckEditorDisabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQtZGVmaW5pdGlvbi9DOlxcZ2l0XFxzaXRrYXRlY2hcXE9yZWdvblRpbHRoXFxTb3VyY2VcXE9yZWdvblRpbHRoLldlYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmaWVsZC1kZWZpbml0aW9uXFxmaWVsZC1kZWZpbml0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZC1kZWZpbml0aW9uL2ZpZWxkLWRlZmluaXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUlBLDhCQUFBO0FDRUo7O0FEQUU7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDR0o7O0FEREU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBSUEsOEJBQUE7QUNJSjs7QURGRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNLSjs7QURGRTtFQUNFLG1CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZC1kZWZpbml0aW9uL2ZpZWxkLWRlZmluaXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhvdmVyRWRpdEJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5ob3ZlckVtcHR5U3BhY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5jdXN0b21SaWNoVGV4dENvbnRlbnQge1xyXG4gICAgbWluLXdpZHRoOjYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuICAuY3VzdG9tUmljaFRleHRDb250ZW50OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMik7XHJcbiAgfVxyXG4gIC5jdXN0b21SaWNoVGV4dENvbnRlbnQgLmhvdmVyRWRpdEJ1dHRvbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbXMtb3BhY2l0eTogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIC5jdXN0b21SaWNoVGV4dENvbnRlbnQ6aG92ZXIgLmhvdmVyRWRpdEJ1dHRvbiB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLW1zLW9wYWNpdHk6IDE7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmNrRWRpdG9yRGlzYWJsZWR7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcbiAgfSIsIi5ob3ZlckVkaXRCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogOHB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5ob3ZlckVtcHR5U3BhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY3VzdG9tUmljaFRleHRDb250ZW50IHtcbiAgbWluLXdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG59XG5cbi5jdXN0b21SaWNoVGV4dENvbnRlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMik7XG59XG5cbi5jdXN0b21SaWNoVGV4dENvbnRlbnQgLmhvdmVyRWRpdEJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1zLW9wYWNpdHk6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcbn1cblxuLmN1c3RvbVJpY2hUZXh0Q29udGVudDpob3ZlciAuaG92ZXJFZGl0QnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLW1zLW9wYWNpdHk6IDE7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ja0VkaXRvckRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldDefinitionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'field-definition',
                templateUrl: './field-definition.component.html',
                styleUrls: ['./field-definition.component.scss']
            }]
    }], function () { return [{ type: _services_field_definition_service__WEBPACK_IMPORTED_MODULE_2__["FieldDefinitionService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { fieldDefinitionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelOverride: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['p']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['popContent']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/header-nav/header-nav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/header-nav/header-nav.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cookies/cookie-storage.service */ "./src/app/shared/services/cookies/cookie-storage.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















function HeaderNavComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Watersheds ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderNavComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Labels and Definitions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderNavComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNavComponent_li_23_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderNavComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Get Help ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNavComponent_li_24_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", ctx_r3.getUserName(), " ");
} }
class HeaderNavComponent {
    constructor(authenticationService, cookieStorageService, userService, alertService, cdr) {
        this.authenticationService = authenticationService;
        this.cookieStorageService = cookieStorageService;
        this.userService = userService;
        this.alertService = alertService;
        this.cdr = cdr;
    }
    resize() {
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() {
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            if (currentUser && this.isAdministrator()) {
                this.userService.getUnassignedUserReport().subscribe(report => {
                    if (report.Count > 0) {
                        this.alertService.pushAlert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"](`There are ${report.Count} users who are waiting for you to configure their account. <a href='/users'>Manage Users</a>.`, _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_7__["AlertContext"].Info, true, _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"].USERS_AWAITING_CONFIGURATION));
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.watchUserChangeSubscription.unsubscribe();
        this.authenticationService.dispose();
        this.cdr.detach();
    }
    isAuthenticated() {
        return this.authenticationService.isAuthenticated();
    }
    isAdministrator() {
        return this.authenticationService.isUserAnAdministrator(this.currentUser);
    }
    isUnassigned() {
        return this.authenticationService.isUserUnassigned(this.currentUser);
    }
    isUnassignedOrDisabled() {
        return this.authenticationService.isUserUnassigned(this.currentUser) || this.authenticationService.isUserRoleDisabled(this.currentUser);
    }
    getUserName() {
        return this.currentUser ? this.currentUser.FullName
            : null;
    }
    login() {
        this.authenticationService.login();
    }
    logout() {
        this.authenticationService.logout();
        setTimeout(() => {
            this.cookieStorageService.removeAll();
            this.cdr.detectChanges();
        });
    }
    platformShortName() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].platformShortName;
    }
    leadOrganizationHomeUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].leadOrganizationHomeUrl;
    }
    leadOrganizationLogoSrc() {
        return `assets/main/logos/${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].leadOrganizationLogoFilename}`;
    }
}
HeaderNavComponent.ɵfac = function HeaderNavComponent_Factory(t) { return new (t || HeaderNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_1__["CookieStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
HeaderNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderNavComponent, selectors: [["header-nav"]], hostBindings: function HeaderNavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderNavComponent_resize_HostBindingHandler($event) { return ctx.resize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 7, consts: [[1, "navbar", "navbar-fresca", "navbar-expand-lg", "navbar-dark", "stroke"], ["target", "_blank", 1, "navbar-brand", 3, "href"], [1, "navbarLogo", 3, "src"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand", "nav-link"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], ["class", "nav-item dropdown", "routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/platform-overview", 1, "dropdown-item"], ["routerLink", "/training", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/disclaimer/false", 1, "dropdown-item"], [1, "navbar-nav", "flex-column", "mt-2", "mt-lg-0", "mr-sm-2"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-item dropdown welcomeUser", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/watersheds", 1, "dropdown-item"], ["routerLink", "/users", 1, "dropdown-item"], ["routerLink", "/labels-and-definitions", 1, "dropdown-item"], ["routerLinkActive", "active", 1, "nav-item"], ["href", "javascript:void(0);", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLinkActive", "active", 1, "nav-item", "dropdown", "welcomeUser"], ["href", "#", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "pr-3"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/help", 1, "dropdown-item"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"]], template: function HeaderNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderNavComponent_li_9_Template, 6, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderNavComponent_li_10_Template, 8, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Learn More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Platform Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Training ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Disclaimer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderNavComponent_li_23_Template, 3, 0, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderNavComponent_li_24_Template, 8, 1, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.leadOrganizationHomeUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.leadOrganizationLogoSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.platformShortName(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdministrator());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdministrator());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: [".navbarLogo[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.footerLogo[_ngcontent-%COMP%] {\n  height: 50px;\n  float: right;\n  margin: 5px 0;\n}\n\na.signOut[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 1021;\n}\n\n.navbar.navbar-fresca[_ngcontent-%COMP%] {\n  background-color: #F0644B;\n}\n\n.navbar.navbar-fresca[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%], .navbar.navbar-fresca[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]::before, .navbar.navbar-fresca[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]::after {\n  transition: all 0.5s;\n}\n\n.navbar.navbar-fresca[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover {\n  color: #87a1cc;\n}\n\nnav[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #87a1cc;\n}\n\n.navbar.navbar-fresca[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n@media screen and (min-width: 991px) {\n  .welcomeUser[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n\n@media screen and (max-width: 990px) {\n  .welcomeUser[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyLW5hdi9DOlxcZ2l0XFxzaXRrYXRlY2hcXE9yZWdvblRpbHRoXFxTb3VyY2VcXE9yZWdvblRpbHRoLldlYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxoZWFkZXItbmF2XFxoZWFkZXItbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci1uYXYvQzpcXGdpdFxcc2l0a2F0ZWNoXFxPcmVnb25UaWx0aFxcU291cmNlXFxPcmVnb25UaWx0aC5XZWIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7QUNESjs7QURJRTtFQUVFLHlCRW9CZ0I7QUR0QnBCOztBREtFOzs7RUFHRSxvQkFBQTtBQ0ZKOztBREtFO0VBQ0UsY0VtQmtCO0FEckJ0Qjs7QURLRTtFQUNFLHlCRWM0QjtBRGhCaEM7O0FES0U7RUFFRSxXRUtjO0FEUmxCOztBRE9JO0VBREY7SUFFSSxpQkFBQTtFQ0hKO0FBQ0Y7O0FESUk7RUFKRjtJQUtJLGdCQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubmF2YmFyTG9nbyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXJMb2dvIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGEuc2lnbk91dCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHotaW5kZXg6IDEwMjE7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXIubmF2YmFyLWZyZXNjYVxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIubmF2YmFyLWZyZXNjYSBhLm5hdi1saW5rLFxyXG4gIC5uYXZiYXIubmF2YmFyLWZyZXNjYSBhLm5hdi1saW5rOjpiZWZvcmUsXHJcbiAgLm5hdmJhci5uYXZiYXItZnJlc2NhIGEubmF2LWxpbms6OmFmdGVyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXIubmF2YmFyLWZyZXNjYSBhLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiRzZWxlY3QtYW5kLW5hdi1ob3ZlcjtcclxuICB9XHJcblxyXG4gIG5hdiAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VsZWN0LWFuZC1uYXYtZHJvcGRvd24taG92ZXI7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLm5hdmJhci1mcmVzY2EgYS5uYXYtbGlua1xyXG4gIHtcclxuICAgIGNvbG9yOiAkaGVhZGVyLW5hdi1saW5rO1xyXG4gIH1cclxuXHJcbiAgLndlbGNvbWVVc2Vye1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpe1xyXG4gICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpe1xyXG4gICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcbiAgfSIsIi5uYXZiYXJMb2dvIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uZm9vdGVyTG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5hLnNpZ25PdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogMTAyMTtcbn1cblxuLm5hdmJhci5uYXZiYXItZnJlc2NhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwNjQ0Qjtcbn1cblxuLm5hdmJhci5uYXZiYXItZnJlc2NhIGEubmF2LWxpbmssXG4ubmF2YmFyLm5hdmJhci1mcmVzY2EgYS5uYXYtbGluazo6YmVmb3JlLFxuLm5hdmJhci5uYXZiYXItZnJlc2NhIGEubmF2LWxpbms6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5uYXZiYXIubmF2YmFyLWZyZXNjYSBhLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM4N2ExY2M7XG59XG5cbm5hdiAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4N2ExY2M7XG59XG5cbi5uYXZiYXIubmF2YmFyLWZyZXNjYSBhLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC53ZWxjb21lVXNlciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC53ZWxjb21lVXNlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufSIsIiRmb290ZXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKFxyXG4gICAgICAgIFwicHJpbWFyeVwiOiAjRjA2NDRCLCAgICAgLy8gc3lzdGVtQmx1ZVxyXG4gICAgICAgIFwic2Vjb25kYXJ5XCI6ICNjNGM0YzQsICAgLy8gbGlnaHRHcmF5XHJcbiAgICAgICAgXCJpbmZvXCI6ICMyMjhiZTYsICAgICAgICAvLyBicmlnaHRCbHVlXHJcbiAgICAgICAgXCJsaWdodFwiOiAjZjVmNWY1LCAgICAgICAvLyBvZmZXaGl0ZVxyXG4gICAgICAgIFwibXV0ZWRcIjogI2RlZTJlNiwgICAgICAgLy8gZm9vdGVyR3JheVxyXG4gICAgICAgIFwiZGFuZ2VyXCI6ICNmZjAwMDAsXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6ICMwMGNjMDAsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCI6ICNmZmZmOWYsXHJcbiAgICAgICAgXCJoNC1zdHlsZWRcIjogIzE5NDM0OSxcclxuICAgICAgICBcImZvb3RlclwiOiAjOTk5OTk5LFxyXG4gICAgICAgIFwiaGVhZGVyLWJhY2tncm91bmRcIjogIzM0M2I4NSxcclxuICAgICAgICBcInNlbGVjdFwiOiAjMUY0RDNELFxyXG4gICAgICAgIFwiaGVhZGVyLW5hdi1saW5rXCIgOiAjZmZmLFxyXG4gICAgICAgIFwiZ3JpZC1oZWFkZXItYmFja2dyb3VuZFwiOiAjMzQzYjg1LFxyXG4gICAgICAgIFwiZ3JpZC1hY2NlbnQtY29sb3JcIjogIzAwNzdmOSxcclxuICAgICAgICBcImdyaWQtaG92ZXItY29sb3JcIjogY29ybnNpbGssXHJcbiAgICAgICAgXCJhY2NvdW50LWRyb3Bkb3duLXRleHRcIjogI2ZmZixcclxuICAgICAgICBcImhlYWRlci1ncmFkaWVudC1zdGFydFwiOiB0cmFuc3BhcmVudCxcclxuICAgICAgICBcImhlYWRlci1ncmFkaWVudC1lbmRcIjogdHJhbnNwYXJlbnQsXHJcbik7XHJcblxyXG4vLyB0aGlzIGxvb2tzIHJlZHVuZGFudCwgYnV0IHdlIG5lZWQgdG8gb3ZlcnJpZGUgdGhlIGJvb3RzdHJhcCB2YXJpYWJsZXMgaW4gYm90aCB3YXlzLlxyXG4vL0N1c3RvbSB2YXJpYWJsZXMgb25seSBuZWVkIHRoZSBvbmUgb3ZlcnJpZGVcclxuJHByaW1hcnk6ICNGMDY0NEI7XHJcbiRzZWNvbmRhcnk6ICNjNGM0YzQ7XHJcbiRpbmZvOiAjMjI4YmU2O1xyXG4kbGlnaHQ6ICNmNWY1ZjU7XHJcbiRtdXRlZDogI2RlZTJlNjtcclxuJGRhbmdlcjogI2ZmMDAwMDtcclxuJHN1Y2Nlc3M6ICMwMGNjMDA7XHJcbiR3YXJuaW5nOiAjZmZmZjlmO1xyXG5cclxuJGFjY291bnQtZHJvcGRvd24tdGV4dDogI2ZmZjtcclxuJGJ1dHRvbi1ib3JkZXItYW5kLWJhY2tncm91bmQ6ICNGMDY0NEI7XHJcbiRidXR0b24taG92ZXItdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJ1dHRvbi10ZXh0LWNvbG9yOiAjZjZkOTkyO1xyXG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICNmNmQ5OTI7XHJcbiRidXR0b24tdG9nZ2xlLWhvdmVyOiAjNjM3Y2ExO1xyXG4kZm9vdGVyOiAjOTk5OTk5OyAgXHJcbiRoZWFkZXItYmFja2dyb3VuZDogI0YwNjQ0QjtcclxuJGhlYWRlci1ncmFkaWVudC1zdGFydDogdHJhbnNwYXJlbnQ7XHJcbiRoZWFkZXItZ3JhZGllbnQtZW5kOiB0cmFuc3BhcmVudDtcclxuJGhlYWRlci1uYXYtYWZ0ZXItaGVpZ2h0OiAwcHg7XHJcbiRoZWFkZXItbmF2LWxpbms6ICNmZmY7ICAgICAgICAgXHJcbiRoZWFkZXItbmF2LWxpbmstZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiRoNC1zdHlsZWQ6ICMxOTQzNDk7XHJcbiRzZWxlY3Q6ICMxRjREM0Q7XHJcbiRzZWxlY3QtYW5kLW5hdi1kcm9wZG93bi1ob3ZlcjogIzg3YTFjYztcclxuJHNlbGVjdC1hbmQtbmF2LWhvdmVyOiM4N2ExY2M7XHJcbiR0ZXh0LW11dGVkOiBkYXJrZW4oI2QzZDNkMywgMTUlKTtcclxuJHRleHQtd2FybmluZzogZGFya2VuKCR3YXJuaW5nLCAyMCUpO1xyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdUYWhvbWEnLCBzYW5zLXNlcmlmLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zaXplOiAxNnB4O1xyXG4kYmFzZS10ZXh0OiAjMDAwMDAwO1xyXG5cclxuJGNhcmQtY2FwLWJnOiAjZGZkZmRmO1xyXG5cclxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG4kbGluay1jb2xvcjogIzIwNWM5MDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'header-nav',
                templateUrl: './header-nav.component.html',
                styleUrls: ['./header-nav.component.scss']
            }]
    }], function () { return [{ type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_1__["CookieStorageService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/shared/components/header-nav/header-nav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_0__["HeaderNavComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/watershed-detail-popup/watershed-detail-popup.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/watershed-detail-popup/watershed-detail-popup.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: WatershedDetailPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatershedDetailPopupComponent", function() { return WatershedDetailPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WatershedDetailPopupComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
    }
    detectChanges() {
        this.cdr.detectChanges();
    }
}
WatershedDetailPopupComponent.ɵfac = function WatershedDetailPopupComponent_Factory(t) { return new (t || WatershedDetailPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
WatershedDetailPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatershedDetailPopupComponent, selectors: [["fresca-watershed-detail-popup"]], decls: 6, vars: 2, consts: [[1, "row", "mb-0"], [1, "col-5", "text-right"], [1, "col-7"], [3, "routerLink", "click"]], template: function WatershedDetailPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dl", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dt", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dd", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatershedDetailPopupComponent_Template_a_click_4_listener() { return ctx.detectChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watersheds/", ctx.feature.properties.WatershedID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.feature.properties.WatershedName, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3dhdGVyc2hlZC1kZXRhaWwtcG9wdXAvd2F0ZXJzaGVkLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatershedDetailPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fresca-watershed-detail-popup',
                templateUrl: './watershed-detail-popup.component.html',
                styleUrls: ['./watershed-detail-popup.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/watershed-map/watershed-map.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/watershed-map/watershed-map.component.ts ***!
  \****************************************************************************/
/*! exports provided: WatershedMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatershedMapComponent", function() { return WatershedMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_wfs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wfs.service */ "./src/app/shared/services/wfs.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_fullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.fullscreen */ "./node_modules/leaflet.fullscreen/Control.FullScreen.js");
/* harmony import */ var leaflet_fullscreen__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_fullscreen__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/watershed/watershed.service */ "./src/app/services/watershed/watershed.service.ts");
/* harmony import */ var _models_bounding_box_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bounding-box-dto */ "./src/app/shared/models/bounding-box-dto.ts");
/* harmony import */ var _watershed_detail_popup_watershed_detail_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../watershed-detail-popup/watershed-detail-popup.component */ "./src/app/shared/components/watershed-detail-popup/watershed-detail-popup.component.ts");
/* harmony import */ var _services_custom_compile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/custom-compile.service */ "./src/app/shared/services/custom-compile.service.ts");













class WatershedMapComponent {
    constructor(wfsService, watershedService, appRef, compileService) {
        this.wfsService = wfsService;
        this.watershedService = watershedService;
        this.appRef = appRef;
        this.compileService = compileService;
        this.mapID = '';
        this.selectedWatershedTransparencyStyle = 'watershed_purple';
        this.selectedWatershedLabelStyle = "watershed_name_only";
        this.selectedWatershedIDs = [];
        this.zoomMapToDefaultExtent = true;
        this.disableDefaultClick = false;
        this.displaywatershedsLayerOnLoad = true;
        this.mapHeight = '300px';
        this.defaultFitBoundsOptions = null;
        this.selectedWatershedLayerName = "<img src='./assets/main/map-legend-images/watershed.png' style='height:16px; margin-bottom:3px'> Selected Watersheds";
        this.afterSetControl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.afterLoadMap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapMoveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tileLayers = {};
        this.overlayLayers = {};
        this.selectedWatershedLayerGroup = new leaflet__WEBPACK_IMPORTED_MODULE_3__["LayerGroup"]();
    }
    ngOnInit() {
        // Default bounding box
        this.boundingBox = new _models_bounding_box_dto__WEBPACK_IMPORTED_MODULE_6__["BoundingBoxDto"]();
        this.boundingBox.Left = -122.65840077734131;
        this.boundingBox.Bottom = 44.800395454281436;
        this.boundingBox.Right = -121.65139301718362;
        this.boundingBox.Top = 45.528908149000124;
        this.tileLayers = Object.assign({}, {
            "Aerial": Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"])('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Aerial',
            }),
            "Street": Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"])('https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Aerial',
            }),
            "Terrain": Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"])('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Terrain',
            }),
        }, this.tileLayers);
        this.defaultWatershedsWMSOptions = {
            layers: "Fresca:Watersheds",
            transparent: true,
            format: "image/png",
            tiled: true
        };
        let watershedsWMSOptions = this.defaultWatershedsWMSOptions;
        this.overlayLayers = Object.assign({
            "<img src='./assets/main/map-legend-images/watershed_outline_only.png' style='height:16px; margin-bottom:3px'> Watersheds": leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"].wms(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].geoserverMapServiceUrl + "/wms?", watershedsWMSOptions)
        }, this.overlayLayers);
        this.compileService.configure(this.appRef);
    }
    updateSelectedWatershedsOverlayLayer(watershedIDs) {
        if (this.selectedWatershedTransparencyLayer && this.selectedWatershedLabelLayer) {
            this.layerControl.removeLayer(this.selectedWatershedLayerGroup);
            this.map.removeLayer(this.selectedWatershedTransparencyLayer);
            this.map.removeLayer(this.selectedWatershedLabelLayer);
        }
        var wmsParameters = Object.assign({ styles: this.selectedWatershedTransparencyStyle, cql_filter: this.createWatershedMapFilter(watershedIDs) }, this.defaultWatershedsWMSOptions);
        this.selectedWatershedTransparencyLayer = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"].wms(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].geoserverMapServiceUrl + "/wms?", wmsParameters);
        wmsParameters.styles = this.selectedWatershedLabelStyle;
        this.selectedWatershedLabelLayer = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"].wms(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].geoserverMapServiceUrl + "/wms?", wmsParameters);
        this.selectedWatershedLayerGroup.addLayer(this.selectedWatershedTransparencyLayer);
        this.selectedWatershedLayerGroup.addLayer(this.selectedWatershedLabelLayer);
        this.layerControl.addOverlay(this.selectedWatershedLayerGroup, this.selectedWatershedLayerName);
        this.selectedWatershedLayerGroup.addTo(this.map);
    }
    fitBoundsToSelectedWatersheds(watershedIDs) {
        this.watershedService.getBoundingBoxByWatershedIDs(watershedIDs).subscribe(boundingBox => {
            this.boundingBox = boundingBox;
            this.map.fitBounds([[this.boundingBox.Bottom, this.boundingBox.Left], [this.boundingBox.Top, this.boundingBox.Right]], this.defaultFitBoundsOptions);
        });
    }
    createWatershedMapFilter(watershedIDs) {
        return `WatershedID in (${watershedIDs.join(',')})`;
    }
    ngAfterViewInit() {
        const mapOptions = {
            // center: [46.8797, -110],
            // zoom: 6,
            minZoom: 9,
            maxZoom: 17,
            layers: [
                this.tileLayers["Aerial"],
            ],
            fullscreenControl: true
        };
        this.map = Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["map"])(this.mapID, mapOptions);
        this.map.on('load', (event) => {
            this.afterLoadMap.emit(event);
        });
        this.map.on("moveend", (event) => {
            this.onMapMoveEnd.emit(event);
        });
        this.map.fitBounds([[this.boundingBox.Bottom, this.boundingBox.Left], [this.boundingBox.Top, this.boundingBox.Right]], this.defaultFitBoundsOptions);
        this.setControl();
        this.registerClickEvents();
        if (this.selectedWatershedIDs.length > 0) {
            this.updateSelectedWatershedsOverlayLayer(this.selectedWatershedIDs);
            this.fitBoundsToSelectedWatersheds(this.selectedWatershedIDs);
        }
        if (!this.disableDefaultClick) {
            const wfsService = this.wfsService;
            const self = this;
            this.map.on("click", (event) => {
                wfsService.getWatershedByCoordinate(event.latlng.lng, event.latlng.lat)
                    .subscribe((watershedFeatureCollection) => {
                    watershedFeatureCollection.features
                        .forEach((feature) => {
                        // Flip the coordinates
                        switch (feature.geometry.type) {
                            case "Polygon":
                                const polygon = feature.geometry;
                                polygon.coordinates = polygon.coordinates
                                    .map(coordinate => coordinate.map(point => [point[1], point[0]]));
                                break;
                        }
                        new leaflet__WEBPACK_IMPORTED_MODULE_3__["Popup"]({
                            minWidth: 200,
                        })
                            .setLatLng(event.latlng)
                            .setContent(this.compileService.compile(_watershed_detail_popup_watershed_detail_popup_component__WEBPACK_IMPORTED_MODULE_7__["WatershedDetailPopupComponent"], (c) => { c.instance.feature = feature; }))
                            .openOn(self.map);
                    });
                });
            });
        }
    }
    setControl() {
        this.layerControl = new leaflet__WEBPACK_IMPORTED_MODULE_3__["Control"].Layers(this.tileLayers, this.overlayLayers, { collapsed: false })
            .addTo(this.map);
        if (this.displaywatershedsLayerOnLoad) {
            this.overlayLayers["<img src='./assets/main/map-legend-images/watershed_outline_only.png' style='height:16px; margin-bottom:3px'> Watersheds"].addTo(this.map);
        }
        this.afterSetControl.emit(this.layerControl);
    }
    registerClickEvents() {
        var leafletControlLayersSelector = ".leaflet-control-layers";
        var closeButtonClass = "leaflet-control-layers-close";
        var closem = leaflet__WEBPACK_IMPORTED_MODULE_3__["DomUtil"].create("a", closeButtonClass);
        closem.innerHTML = "Close";
        leaflet__WEBPACK_IMPORTED_MODULE_3__["DomEvent"].on(closem, "click", function (e) {
            $(leafletControlLayersSelector).removeClass("leaflet-control-layers-expanded");
        });
        $(leafletControlLayersSelector).append(closem);
    }
}
WatershedMapComponent.ɵfac = function WatershedMapComponent_Factory(t) { return new (t || WatershedMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wfs_service__WEBPACK_IMPORTED_MODULE_2__["WfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_5__["WatershedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_custom_compile_service__WEBPACK_IMPORTED_MODULE_8__["CustomCompileService"])); };
WatershedMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatershedMapComponent, selectors: [["watershed-map"]], inputs: { mapID: "mapID", selectedWatershedTransparencyStyle: "selectedWatershedTransparencyStyle", selectedWatershedLabelStyle: "selectedWatershedLabelStyle", selectedWatershedIDs: "selectedWatershedIDs", onEachFeatureCallback: "onEachFeatureCallback", zoomMapToDefaultExtent: "zoomMapToDefaultExtent", disableDefaultClick: "disableDefaultClick", displaywatershedsLayerOnLoad: "displaywatershedsLayerOnLoad", mapHeight: "mapHeight", defaultFitBoundsOptions: "defaultFitBoundsOptions", selectedWatershedLayerName: "selectedWatershedLayerName" }, outputs: { afterSetControl: "afterSetControl", afterLoadMap: "afterLoadMap", onMapMoveEnd: "onMapMoveEnd" }, decls: 1, vars: 3, consts: [[1, "location-card", 3, "id"]], template: function WatershedMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.mapHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.mapID);
    } }, styles: [".location-card[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 99;\n}\n\n@media print {\n  .leaflet-control-container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvd2F0ZXJzaGVkLW1hcC9DOlxcZ2l0XFxzaXRrYXRlY2hcXE9yZWdvblRpbHRoXFxTb3VyY2VcXE9yZWdvblRpbHRoLldlYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx3YXRlcnNoZWQtbWFwXFx3YXRlcnNoZWQtbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy93YXRlcnNoZWQtbWFwL3dhdGVyc2hlZC1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSx3QkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy93YXRlcnNoZWQtbWFwL3dhdGVyc2hlZC1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYXRpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLmxlYWZsZXQtY29udHJvbC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iLCIubG9jYXRpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLmxlYWZsZXQtY29udHJvbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatershedMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'watershed-map',
                templateUrl: './watershed-map.component.html',
                styleUrls: ['./watershed-map.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_wfs_service__WEBPACK_IMPORTED_MODULE_2__["WfsService"] }, { type: src_app_services_watershed_watershed_service__WEBPACK_IMPORTED_MODULE_5__["WatershedService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _services_custom_compile_service__WEBPACK_IMPORTED_MODULE_8__["CustomCompileService"] }]; }, { mapID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedWatershedTransparencyStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedWatershedLabelStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedWatershedIDs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onEachFeatureCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zoomMapToDefaultExtent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableDefaultClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displaywatershedsLayerOnLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultFitBoundsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedWatershedLayerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], afterSetControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], afterLoadMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMapMoveEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/guards/acknowledged-disclaimer-guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/guards/acknowledged-disclaimer-guard.ts ***!
  \****************************************************************/
/*! exports provided: AcknowledgedDisclaimerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcknowledgedDisclaimerGuard", function() { return AcknowledgedDisclaimerGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







class AcknowledgedDisclaimerGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(next, state) {
        if (!this.authenticationService.isCurrentUserNullOrUndefined()) {
            if (!this.authenticationService.hasCurrentUserAcknowledgedDisclaimer()) {
                this.router.navigate(["/disclaimer/true"], {
                    queryParams: {
                        return: state.url
                    }
                });
                return false;
            }
            else {
                return true;
            }
        }
        return this.authenticationService.currentUserSetObservable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => {
            if (x.DisclaimerAcknowledgedDate != null) {
                return true;
            }
            else {
                this.router.navigate(["/disclaimer/true"], {
                    queryParams: {
                        return: state.url
                    }
                });
                return false;
            }
        }));
    }
}
AcknowledgedDisclaimerGuard.ɵfac = function AcknowledgedDisclaimerGuard_Factory(t) { return new (t || AcknowledgedDisclaimerGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AcknowledgedDisclaimerGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AcknowledgedDisclaimerGuard, factory: AcknowledgedDisclaimerGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcknowledgedDisclaimerGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/unauthenticated-access/manager-only-guard.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/guards/unauthenticated-access/manager-only-guard.ts ***!
  \****************************************************************************/
/*! exports provided: ManagerOnlyGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerOnlyGuard", function() { return ManagerOnlyGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_enums_role_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/enums/role.enum */ "./src/app/shared/models/enums/role.enum.ts");










class ManagerOnlyGuard {
    constructor(router, alertService, authenticationService) {
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
    }
    canActivate(next, state) {
        if (!this.authenticationService.isCurrentUserNullOrUndefined()) {
            if (this.authenticationService.isCurrentUserAnAdministrator()) {
                return true;
            }
            else {
                this.alertService.pushNotFoundUnauthorizedAlert();
                this.router.navigate(["/"]);
                return false;
            }
        }
        return this.authenticationService.currentUserSetObservable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            if (x.Role.RoleID == _models_enums_role_enum__WEBPACK_IMPORTED_MODULE_5__["RoleEnum"].Admin) {
                return true;
            }
            else {
                this.alertService.pushNotFoundUnauthorizedAlert();
                this.router.navigate(["/"]);
                return false;
            }
        }));
    }
}
ManagerOnlyGuard.ɵfac = function ManagerOnlyGuard_Factory(t) { return new (t || ManagerOnlyGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
ManagerOnlyGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ManagerOnlyGuard, factory: ManagerOnlyGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ManagerOnlyGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/unauthenticated-access/unauthenticated-access.guard.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/guards/unauthenticated-access/unauthenticated-access.guard.ts ***!
  \**************************************************************************************/
/*! exports provided: UnauthenticatedAccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedAccessGuard", function() { return UnauthenticatedAccessGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookies/cookie-storage.service */ "./src/app/shared/services/cookies/cookie-storage.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");








class UnauthenticatedAccessGuard {
    constructor(cookieStorageService, router, authenticationService) {
        this.cookieStorageService = cookieStorageService;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(next, state) {
        const token = this.cookieStorageService.getItem('access_token');
        if (token) {
            return true;
        }
        else {
            sessionStorage["authRedirectUrl"] = state.url;
            this.authenticationService.login();
            return false;
        }
    }
}
UnauthenticatedAccessGuard.ɵfac = function UnauthenticatedAccessGuard_Factory(t) { return new (t || UnauthenticatedAccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_2__["CookieStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
UnauthenticatedAccessGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnauthenticatedAccessGuard, factory: UnauthenticatedAccessGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthenticatedAccessGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_2__["CookieStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/interceptors/auth-interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth-interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cookies/cookie-storage.service */ "./src/app/shared/services/cookies/cookie-storage.service.ts");



class AuthInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let nextEvent = req;
        if (req.url.indexOf('keystone') < 0 && req.url.indexOf('WFS') < 0) {
            const cookieStorageService = this.injector.get(_services_cookies_cookie_storage_service__WEBPACK_IMPORTED_MODULE_1__["CookieStorageService"]);
            const token = cookieStorageService.getItem('access_token');
            if (token) {
                nextEvent = req.clone({
                    headers: req.headers.set('Authorization', `Bearer ${token}`)
                });
            }
            else {
                console.warn('no auth token');
            }
        }
        return next.handle(nextEvent);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/interceptors/httpErrorInterceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/interceptors/httpErrorInterceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/alert */ "./src/app/shared/models/alert.ts");











class HttpErrorInterceptor {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                    if (error.status == 401) {
                        this.router.navigateByUrl("/unauthenticated", { replaceUrl: false }).then(x => {
                            if (typeof error.error === "string") {
                                this.alertService.pushAlert(new _models_alert__WEBPACK_IMPORTED_MODULE_7__["Alert"](error.error, _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__["AlertContext"].Danger));
                            }
                        });
                    }
                    if (error.status == 403) {
                        this.router.navigateByUrl("/subscription-insufficient", { replaceUrl: false }).then(x => {
                            if (typeof error.error === "string") {
                                this.alertService.pushAlert(new _models_alert__WEBPACK_IMPORTED_MODULE_7__["Alert"](error.error, _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__["AlertContext"].Danger));
                            }
                        });
                    }
                    if (error.status == 404) {
                        if (error.error.includes("User with GUID ")) {
                            // we want the login-callback to create the user to trigger so we just let it pass through and have authentication-service handle it
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                        }
                        else {
                            this.router.navigateByUrl("/not-found", { replaceUrl: false }).then(x => {
                                if (typeof error.error === "string") {
                                    this.alertService.pushAlert(new _models_alert__WEBPACK_IMPORTED_MODULE_7__["Alert"](error.error, _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_6__["AlertContext"].Danger));
                                }
                            });
                        }
                    }
                }
            }
            // If you want to return a new response:
            //return of(new HttpResponse({body: [{name: "Default value..."}]}));
            // If you want to return nothing:
            //return EMPTY;
            // Otherwise pass it on to the upper level and let them take care of it:
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/models/alert.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/alert.ts ***!
  \****************************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var _enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");

class Alert {
    constructor(message, context = _enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_0__["AlertContext"].Primary, dismissable = true, uniqueCode = "") {
        this.message = message;
        this.context = context;
        this.dismissable = dismissable;
        this.uniqueCode = uniqueCode;
    }
}


/***/ }),

/***/ "./src/app/shared/models/bounding-box-dto.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/bounding-box-dto.ts ***!
  \***************************************************/
/*! exports provided: BoundingBoxDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBoxDto", function() { return BoundingBoxDto; });
class BoundingBoxDto {
    constructor(obj) {
        Object.assign(this, obj);
    }
}


/***/ }),

/***/ "./src/app/shared/models/custom-rich-text-detailed-dto.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/models/custom-rich-text-detailed-dto.ts ***!
  \****************************************************************/
/*! exports provided: CustomRichTextDetailedDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRichTextDetailedDto", function() { return CustomRichTextDetailedDto; });
/* harmony import */ var _generated_custom_rich_text_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated/custom-rich-text-dto */ "./src/app/shared/models/generated/custom-rich-text-dto.ts");

class CustomRichTextDetailedDto extends _generated_custom_rich_text_dto__WEBPACK_IMPORTED_MODULE_0__["CustomRichTextDto"] {
    constructor(obj) {
        super();
        Object.assign(this, obj);
    }
}


/***/ }),

/***/ "./src/app/shared/models/enums/alert-context.enum.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/models/enums/alert-context.enum.ts ***!
  \***********************************************************/
/*! exports provided: AlertContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertContext", function() { return AlertContext; });
var AlertContext;
(function (AlertContext) {
    AlertContext["Primary"] = "primary";
    AlertContext["Secondary"] = "secondary";
    AlertContext["Success"] = "success";
    AlertContext["Danger"] = "danger";
    AlertContext["Warning"] = "warning";
    AlertContext["Info"] = "info";
    AlertContext["Light"] = "light";
    AlertContext["Dark"] = "dark";
})(AlertContext || (AlertContext = {}));


/***/ }),

/***/ "./src/app/shared/models/enums/custom-rich-text-type.enum.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/models/enums/custom-rich-text-type.enum.ts ***!
  \*******************************************************************/
/*! exports provided: CustomRichTextType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRichTextType", function() { return CustomRichTextType; });
var CustomRichTextType;
(function (CustomRichTextType) {
    CustomRichTextType[CustomRichTextType["PlatformOverview"] = 1] = "PlatformOverview";
    CustomRichTextType[CustomRichTextType["Disclaimer"] = 2] = "Disclaimer";
    CustomRichTextType[CustomRichTextType["Homepage"] = 3] = "Homepage";
    CustomRichTextType[CustomRichTextType["Help"] = 4] = "Help";
    CustomRichTextType[CustomRichTextType["LabelsAndDefinitionsList"] = 5] = "LabelsAndDefinitionsList";
    CustomRichTextType[CustomRichTextType["WatershedList"] = 6] = "WatershedList";
    CustomRichTextType[CustomRichTextType["Training"] = 7] = "Training";
})(CustomRichTextType || (CustomRichTextType = {}));


/***/ }),

/***/ "./src/app/shared/models/enums/field-definition-type.enum.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/models/enums/field-definition-type.enum.ts ***!
  \*******************************************************************/
/*! exports provided: FieldDefinitionTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDefinitionTypeEnum", function() { return FieldDefinitionTypeEnum; });
var FieldDefinitionTypeEnum;
(function (FieldDefinitionTypeEnum) {
    FieldDefinitionTypeEnum[FieldDefinitionTypeEnum["Name"] = 1] = "Name";
})(FieldDefinitionTypeEnum || (FieldDefinitionTypeEnum = {}));


/***/ }),

/***/ "./src/app/shared/models/enums/role.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/enums/role.enum.ts ***!
  \**************************************************/
/*! exports provided: RoleEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleEnum", function() { return RoleEnum; });
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["Admin"] = 1] = "Admin";
    RoleEnum[RoleEnum["Landowner"] = 2] = "Landowner";
    RoleEnum[RoleEnum["Unassigned"] = 3] = "Unassigned";
    RoleEnum[RoleEnum["Disabled"] = 4] = "Disabled";
})(RoleEnum || (RoleEnum = {}));


/***/ }),

/***/ "./src/app/shared/models/generated/custom-rich-text-dto.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/models/generated/custom-rich-text-dto.ts ***!
  \*****************************************************************/
/*! exports provided: CustomRichTextDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRichTextDto", function() { return CustomRichTextDto; });
class CustomRichTextDto {
    constructor(obj) {
        Object.assign(this, obj);
    }
}


/***/ }),

/***/ "./src/app/shared/models/user/user-create-dto.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/user/user-create-dto.ts ***!
  \*******************************************************/
/*! exports provided: UserCreateDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateDto", function() { return UserCreateDto; });
class UserCreateDto {
    constructor(obj) {
        Object.assign(this, obj);
    }
}


/***/ }),

/***/ "./src/app/shared/models/user/user-invite-dto.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/user/user-invite-dto.ts ***!
  \*******************************************************/
/*! exports provided: UserInviteDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInviteDto", function() { return UserInviteDto; });
class UserInviteDto {
}


/***/ }),

/***/ "./src/app/shared/models/user/user-update-dto.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/user/user-update-dto.ts ***!
  \*******************************************************/
/*! exports provided: UserUpdateDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateDto", function() { return UserUpdateDto; });
class UserUpdateDto {
}


/***/ }),

/***/ "./src/app/shared/pages/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pages/index.ts ***!
  \***************************************/
/*! exports provided: NotFoundComponent, UnauthenticatedComponent, SubscriptionInsufficientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/shared/pages/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]; });

/* harmony import */ var _unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unauthenticated/unauthenticated.component */ "./src/app/shared/pages/unauthenticated/unauthenticated.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedComponent", function() { return _unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_1__["UnauthenticatedComponent"]; });

/* harmony import */ var _subscription_insufficient_subscription_insufficient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription-insufficient/subscription-insufficient.component */ "./src/app/shared/pages/subscription-insufficient/subscription-insufficient.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionInsufficientComponent", function() { return _subscription_insufficient_subscription_insufficient_component__WEBPACK_IMPORTED_MODULE_2__["SubscriptionInsufficientComponent"]; });






/***/ }),

/***/ "./src/app/shared/pages/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/pages/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["not-found"]], decls: 6, vars: 0, consts: [[1, "container", "mt-sm-4"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Oh no! It appears the page you are trying to reach doesn't exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-alert-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_1__["AlertDisplayComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pages/subscription-insufficient/subscription-insufficient.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/pages/subscription-insufficient/subscription-insufficient.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SubscriptionInsufficientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionInsufficientComponent", function() { return SubscriptionInsufficientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SubscriptionInsufficientComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscriptionInsufficientComponent.ɵfac = function SubscriptionInsufficientComponent_Factory(t) { return new (t || SubscriptionInsufficientComponent)(); };
SubscriptionInsufficientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionInsufficientComponent, selectors: [["subscription-insufficient"]], decls: 8, vars: 0, consts: [[1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "lead"], [1, "container", "my-sm-4"], [1, "col-md-6", "offset-md-3"]], template: function SubscriptionInsufficientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You are currently not authorized to view this page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlcy9zdWJzY3JpcHRpb24taW5zdWZmaWNpZW50L3N1YnNjcmlwdGlvbi1pbnN1ZmZpY2llbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionInsufficientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'subscription-insufficient',
                templateUrl: './subscription-insufficient.component.html',
                styleUrls: ['./subscription-insufficient.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pages/unauthenticated/unauthenticated.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/pages/unauthenticated/unauthenticated.component.ts ***!
  \***************************************************************************/
/*! exports provided: UnauthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedComponent", function() { return UnauthenticatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnauthenticatedComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnauthenticatedComponent.ɵfac = function UnauthenticatedComponent_Factory(t) { return new (t || UnauthenticatedComponent)(); };
UnauthenticatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthenticatedComponent, selectors: [["unauthenticated"]], decls: 2, vars: 0, template: function UnauthenticatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " unauthenticated works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlcy91bmF1dGhlbnRpY2F0ZWQvdW5hdXRoZW50aWNhdGVkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthenticatedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'unauthenticated',
                templateUrl: './unauthenticated.component.html',
                styleUrls: ['./unauthenticated.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/enums/alert-context.enum */ "./src/app/shared/models/enums/alert-context.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class AlertService {
    constructor() {
        this.alerts = [];
        this.alertSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    pushAlert(alert) {
        if (alert.uniqueCode) {
            if (this.alerts.some(x => x.uniqueCode === alert.uniqueCode)) {
                return; // don't push a duplicate alert if it has a unique token.
            }
        }
        this.alerts.push(alert);
        this.alertSubject.next(this.alerts);
    }
    removeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
        this.alertSubject.next(this.alerts);
    }
    getAlerts() {
        return this.alerts;
    }
    clearAlerts() {
        this.alerts = [];
        this.alertSubject.next(this.alerts);
    }
    pushNotFoundUnauthorizedAlert() {
        this.pushAlert(new _models_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]("The page you are trying to access was not found, or you do not have permission to view it.", _models_enums_alert_context_enum__WEBPACK_IMPORTED_MODULE_2__["AlertContext"].Info, true, AlertService.NOT_FOUND_UNAUTHORIZED));
        this.alertSubject.next(this.alerts);
    }
}
AlertService.NOT_FOUND_UNAUTHORIZED = "NotFoundUnauthorized";
AlertService.USERS_AWAITING_CONFIGURATION = "UsersAwaitingConfiguration";
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/api-route/api-route.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/api-route/api-route.service.ts ***!
  \****************************************************************/
/*! exports provided: ApiRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRouteService", function() { return ApiRouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



class ApiRouteService {
    constructor() {
    }
    getRoute() {
        const programApiRoute = `https://${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiHostName}`;
        return programApiRoute;
    }
}
ApiRouteService.ɵfac = function ApiRouteService_Factory(t) { return new (t || ApiRouteService)(); };
ApiRouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiRouteService, factory: ApiRouteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiRouteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/api/api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/api/api.service.ts ***!
  \****************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_route_api_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-route/api-route.service */ "./src/app/shared/services/api-route/api-route.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _busy_busy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../busy/busy.service */ "./src/app/shared/services/busy/busy.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/fesm2015/angular-oauth2-oidc.js");

















class ApiService {
    constructor(busyService, apiRoute, http, alertService, oauthService, router) {
        this.busyService = busyService;
        this.apiRoute = apiRoute;
        this.http = http;
        this.alertService = alertService;
        this.oauthService = oauthService;
        this.router = router;
    }
    postToApi(relativeRoute, data) {
        this.busyService.setBusy(true);
        if (relativeRoute.startsWith('/')) {
            relativeRoute = relativeRoute.substring(1, relativeRoute.length);
        }
        data = JSON.parse(JSON.stringify(data, this.requestCleaner));
        const baseRoute = this.apiRoute.getRoute();
        const route = `${baseRoute}/${relativeRoute}`;
        return this.http.post(route, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return this.handleResponse(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    getFromApi(relativeRoute) {
        this.busyService.setBusy(true);
        if (relativeRoute.startsWith('/')) {
            relativeRoute = relativeRoute.substring(1, relativeRoute.length);
        }
        const baseRoute = this.apiRoute.getRoute();
        const route = `${baseRoute}/${relativeRoute}`;
        const result = this.http.get(route)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return this.handleResponse(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            return this.handleError(error);
        }));
        return result;
    }
    putToApi(relativeRoute, data) {
        this.busyService.setBusy(true);
        if (relativeRoute.startsWith('/')) {
            relativeRoute = relativeRoute.substring(1, relativeRoute.length);
        }
        data = JSON.parse(JSON.stringify(data, this.requestCleaner));
        const baseRoute = this.apiRoute.getRoute();
        const route = `${baseRoute}/${relativeRoute}`;
        return this.http.put(route, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return this.handleResponse(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    deleteToApi(relativeRoute) {
        this.busyService.setBusy(true);
        if (relativeRoute.startsWith('/')) {
            relativeRoute = relativeRoute.substring(1, relativeRoute.length);
        }
        const baseRoute = this.apiRoute.getRoute();
        const route = `${baseRoute}/${relativeRoute}`;
        return this.http.delete(route)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return this.handleResponse(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    handleResponse(response) {
        this.busyService.setBusy(false);
        return response;
    }
    handleError(error, supressErrorMessage = false, clearBusyGlobally = true) {
        if (clearBusyGlobally) {
            this.busyService.setBusy(false);
        }
        if (!supressErrorMessage) {
            if (error && (error.status === 401)) {
                this.alertService.pushAlert(new src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_8__["Alert"]("Access token expired..."));
                this.oauthService.initImplicitFlow();
            }
            else if (error && (error.status === 403)) {
                this.alertService.pushNotFoundUnauthorizedAlert();
                this.router.navigate(["/"]);
            }
            else if (error.error && typeof error.error === 'string') {
                this.alertService.pushNotFoundUnauthorizedAlert();
                this.alertService.pushAlert(new src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_8__["Alert"](error.error));
            }
            else if (error.error && error.status === 404) {
                // let the caller handle not found appropriate to whatever it was doing
            }
            else if (error.error && !(error.error instanceof ProgressEvent)) {
                for (const key of Object.keys(error.error)) {
                    // FIXME: will break if errror.error[key] is not a string[]
                    const newLocal = new src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_8__["Alert"](error.error[key].map((fe) => { return key + ": " + fe; }).join(","));
                    this.alertService.pushAlert(newLocal);
                }
            }
            else {
                this.alertService.pushAlert(new src_app_shared_models_alert__WEBPACK_IMPORTED_MODULE_8__["Alert"]("Oops! Something went wrong and we couldn't complete the action..."));
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
    requestCleaner(name, val) {
        if ((name || '').toString().indexOf('$') === 0) {
            return undefined; // remove from data
        }
        else {
            return val; // return as is
        }
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_busy_busy_service__WEBPACK_IMPORTED_MODULE_6__["BusyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_route_api_route_service__WEBPACK_IMPORTED_MODULE_2__["ApiRouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _busy_busy_service__WEBPACK_IMPORTED_MODULE_6__["BusyService"] }, { type: _api_route_api_route_service__WEBPACK_IMPORTED_MODULE_2__["ApiRouteService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/app-insights.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/app-insights.service.ts ***!
  \*********************************************************/
/*! exports provided: AppInsightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInsightsService", function() { return AppInsightsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ "./node_modules/@microsoft/applicationinsights-web/dist-esm/applicationinsights-web.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const { name, version } = __webpack_require__(/*! ../../../../package.json */ "./package.json");
class AppInsightsService {
    constructor() { }
    initAppInsights() {
        const appInsights = new _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_1__["ApplicationInsights"]({
            config: {
                appId: name + '@' + version,
                enableAutoRouteTracking: true,
                disableFetchTracking: false,
                enableCorsCorrelation: true,
                enableRequestHeaderTracking: true,
                enableResponseHeaderTracking: true,
                correlationHeaderExcludedDomains: ['keystone.sitkatech.com', 'qa.keystone.sitkatech.com', new URL(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].geoserverMapServiceUrl).hostname],
                instrumentationKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appInsightsInstrumentationKey,
                maxAjaxCallsPerView: -1,
            }
        });
        appInsights.loadAppInsights();
        appInsights.addTelemetryInitializer((item) => {
            if (item &&
                item.baseData &&
                [0, 401].indexOf(item.baseData.responseCode) >= 0) {
                return false;
            }
        });
        appInsights.addTelemetryInitializer((envelope) => {
            envelope.tags["ai.cloud.role"] = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].keystoneAuthConfiguration.clientId + ".Web";
        });
        window.appInsights = appInsights;
    }
}
AppInsightsService.ɵfac = function AppInsightsService_Factory(t) { return new (t || AppInsightsService)(); };
AppInsightsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInsightsService, factory: AppInsightsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInsightsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/busy/busy.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/busy/busy.service.ts ***!
  \******************************************************/
/*! exports provided: BusyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return BusyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class BusyService {
    constructor() {
        this.busySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getBusy$() {
        return this.busySubject.asObservable();
    }
    setBusy(show, text) {
        this.startTime = performance.now();
        setTimeout(() => {
            if (show) {
                this.setTimeoutIntervalCheck();
            }
            else {
                this.clearTimeoutInterval();
            }
            this.busySubject.next({
                show: show,
                text: text || '',
            });
        });
    }
    setTimeoutIntervalCheck() {
        if (!this.timeoutInterval) {
            this.timeoutInterval = setInterval(() => {
                if (performance.now() - this.startTime > 30 * 1000) {
                    this.clearTimeoutInterval();
                    this.busySubject.next({ show: false });
                    // this.messageService.add({
                    //   severity: 'error',
                    //   summary: 'Timeout',
                    //   detail: `Oops! Something went wrong and the operation timed-out.<br>
                    //            You may want to retry the operation...`
                    // });
                }
            }, 5 * 1000);
        }
    }
    clearTimeoutInterval() {
        if (this.timeoutInterval) {
            clearInterval(this.timeoutInterval);
            this.timeoutInterval = 0;
        }
    }
}
BusyService.ɵfac = function BusyService_Factory(t) { return new (t || BusyService)(); };
BusyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BusyService, factory: BusyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/cookies/cookie-storage.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/cookies/cookie-storage.service.ts ***!
  \*******************************************************************/
/*! exports provided: CookieStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieStorageService", function() { return CookieStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





class CookieStorageService extends angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthStorage"] {
    constructor(cookieService) {
        super();
        this.cookieService = cookieService;
    }
    getItem(key) {
        return this.cookieService.get(key);
    }
    removeItem(key) {
        return this.cookieService.delete(key);
    }
    removeAll() {
        return this.cookieService.deleteAll();
    }
    setItem(key, data) {
        return this.cookieService.set(key, data);
    }
}
CookieStorageService.ɵfac = function CookieStorageService_Factory(t) { return new (t || CookieStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
CookieStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieStorageService, factory: CookieStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/custom-compile.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/custom-compile.service.ts ***!
  \***********************************************************/
/*! exports provided: CustomCompileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCompileService", function() { return CustomCompileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CustomCompileService {
    constructor(injector, resolver) {
        this.injector = injector;
        this.resolver = resolver;
    }
    configure(appRef) {
        this.appRef = appRef;
    }
    compile(component, onAttach) {
        const compFactory = this.resolver.resolveComponentFactory(component);
        let compRef = compFactory.create(this.injector);
        if (onAttach) {
            onAttach(compRef);
        }
        this.appRef.attachView(compRef.hostView);
        compRef.onDestroy(() => this.appRef.detachView(compRef.hostView));
        let div = document.createElement('div');
        div.appendChild(compRef.location.nativeElement);
        return div;
    }
}
CustomCompileService.ɵfac = function CustomCompileService_Factory(t) { return new (t || CustomCompileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
CustomCompileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomCompileService, factory: CustomCompileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomCompileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/custom-rich-text.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/custom-rich-text.service.ts ***!
  \*************************************************************/
/*! exports provided: CustomRichTextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRichTextService", function() { return CustomRichTextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







class CustomRichTextService {
    constructor(apiService, httpClient) {
        this.apiService = apiService;
        this.httpClient = httpClient;
    }
    getCustomRichText(customRichTextTypeID) {
        return this.apiService.getFromApi(`/customRichText/${customRichTextTypeID}`);
    }
    updateCustomRichText(customRichTextTypeID, updateDto) {
        return this.apiService.putToApi(`customRichText/${customRichTextTypeID}`, updateDto);
    }
    uploadFile(file) {
        const apiHostName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiHostName;
        const route = `https://${apiHostName}/FileResource/CkEditorUpload`;
        var result = this.httpClient.post(route, file, // Send the File Blob as the POST body.
        {
            // NOTE: Because we are posting a Blob (File is a specialized Blob
            // object) as the POST body, we have to include the Content-Type
            // header. If we don't, the server will try to parse the body as
            // plain text.
            headers: {
                "Content-Type": file.type
            },
            params: {
                clientFilename: file.name,
                mimeType: file.type
            }
        });
        return result;
    }
}
CustomRichTextService.ɵfac = function CustomRichTextService_Factory(t) { return new (t || CustomRichTextService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CustomRichTextService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomRichTextService, factory: CustomRichTextService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomRichTextService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ___WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/field-definition-service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/field-definition-service.ts ***!
  \*************************************************************/
/*! exports provided: FieldDefinitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDefinitionService", function() { return FieldDefinitionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/app/shared/services/index.ts");




class FieldDefinitionService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    listAllFieldDefinitions() {
        return this.apiService.getFromApi(`/fieldDefinitions`);
    }
    getFieldDefinition(fieldDefinitionTypeID) {
        return this.apiService.getFromApi(`/fieldDefinitions/${fieldDefinitionTypeID}`);
    }
    updateFieldDefinition(fieldDefinition) {
        return this.apiService.putToApi(`fieldDefinitions/${fieldDefinition.FieldDefinitionType.FieldDefinitionTypeID}`, fieldDefinition);
    }
}
FieldDefinitionService.ɵfac = function FieldDefinitionService_Factory(t) { return new (t || FieldDefinitionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
FieldDefinitionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FieldDefinitionService, factory: FieldDefinitionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldDefinitionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ___WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/global-error-handler.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/global-error-handler.service.ts ***!
  \*****************************************************************/
/*! exports provided: GlobalErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandlerService", function() { return GlobalErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/app/shared/services/index.ts");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/services/alert.service.ts");





class GlobalErrorHandlerService {
    constructor(injector) {
        this.injector = injector;
        this.busyService = this.injector.get(___WEBPACK_IMPORTED_MODULE_1__["BusyService"]);
        this.alertService = this.injector.get(_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]);
    }
    handleError(error) {
        if (error &&
            error.status !== 401 && // Unauthorized
            error.status !== 403 && // Forbidden
            error.status !== 404 && // Not Found (can easily happen when looking for a unexisting .po file)
            (error.message || '').indexOf('ViewDestroyedError: Attempt to use a destroyed view: detectChanges') < 0 && // issue in the ngx-loading package...waiting for it to be updated.
            (error.message || '').indexOf('ExpressionChangedAfterItHasBeenCheckedError') < 0 && // this only happens in dev angular build - I'm sure
            (error.message || '').indexOf('Loading chunk') < 0 && // also ignore loading chunk errors as they're handled in app.component NavigationError event
            (error.message || '').indexOf('<path> attribute d: Expected number,') < 0 // attrTween.js error related to charts
        ) {
            // IE Bug
            if ((error.message || '').indexOf('available to complete this operation.') >= 0) {
                this.alertService.pushAlert(new _models_alert__WEBPACK_IMPORTED_MODULE_2__["Alert"](`Internet Explorer Error: ${error.message}`));
            }
            console.error(error);
            if (window.appInsights) {
                window.appInsights.trackException({
                    exception: error.originalError || error
                });
            }
        }
        else if (error) {
            console.warn(error);
            this.busyService.setBusy(false);
        }
    }
}
GlobalErrorHandlerService.ɵfac = function GlobalErrorHandlerService_Factory(t) { return new (t || GlobalErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
GlobalErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandlerService, factory: GlobalErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: ApiService, BusyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api.service */ "./src/app/shared/services/api/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _busy_busy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./busy/busy.service */ "./src/app/shared/services/busy/busy.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return _busy_busy_service__WEBPACK_IMPORTED_MODULE_1__["BusyService"]; });





/***/ }),

/***/ "./src/app/shared/services/wfs.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/wfs.service.ts ***!
  \************************************************/
/*! exports provided: WfsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfsService", function() { return WfsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







class WfsService {
    constructor(http) {
        this.http = http;
        this.getWatershedIDsIntersectingUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getWatershedByCoordinate(longitude, latitude) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geoserverMapServiceUrl}/wms`;
        return this.http.get(url, {
            params: {
                service: 'WFS',
                version: '2.0',
                request: 'GetFeature',
                outputFormat: 'application/json',
                SrsName: 'EPSG:4326',
                typeName: 'Fresca:Watersheds',
                cql_filter: `intersects(WatershedGeometry4326, POINT(${latitude} ${longitude}))`
            }
        });
    }
    getWatershedIdsIntersecting(lon1, lon2, lat1, lat2) {
        this.getWatershedIDsIntersectingUnsubscribe.next();
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geoserverMapServiceUrl}/wms`;
        return this.http.get(url, {
            responseType: "text",
            params: {
                service: "wfs",
                version: "2.0",
                request: "GetPropertyValue",
                SrsName: "EPSG:4326",
                typeName: "Fresca:Watersheds",
                valueReference: "WatershedID",
                cql_filter: `bbox(WatershedGeometry4326,${lat1},${lon1},${lat2},${lon2})`,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.getWatershedIDsIntersectingUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((rawData) => {
            // Parse XML to retrieve nodes
            const watershedIDNodes = new DOMParser()
                .parseFromString(rawData, "text/xml")
                .getElementsByTagName("heartwood:watershedId");
            const watershedIDs = [];
            for (let i = 0; i < watershedIDNodes.length; i++) {
                watershedIDs.push(parseInt(watershedIDNodes[i].innerHTML));
            }
            return watershedIDs;
        }));
    }
}
WfsService.ɵfac = function WfsService_Factory(t) { return new (t || WfsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WfsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WfsService, factory: WfsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WfsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./src/app/shared/pages/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _pages_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/unauthenticated/unauthenticated.component */ "./src/app/shared/pages/unauthenticated/unauthenticated.component.ts");
/* harmony import */ var _pages_subscription_insufficient_subscription_insufficient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/subscription-insufficient/subscription-insufficient.component */ "./src/app/shared/pages/subscription-insufficient/subscription-insufficient.component.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/__ivy_ngcc__/fesm2015/ngx-progressbar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_watershed_detail_popup_watershed_detail_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/watershed-detail-popup/watershed-detail-popup.component */ "./src/app/shared/components/watershed-detail-popup/watershed-detail-popup.component.ts");
/* harmony import */ var _components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ag-grid/link-renderer/link-renderer.component */ "./src/app/shared/components/ag-grid/link-renderer/link-renderer.component.ts");
/* harmony import */ var _components_ag_grid_fontawesome_icon_link_renderer_fontawesome_icon_link_renderer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ag-grid/fontawesome-icon-link-renderer/fontawesome-icon-link-renderer.component */ "./src/app/shared/components/ag-grid/fontawesome-icon-link-renderer/fontawesome-icon-link-renderer.component.ts");
/* harmony import */ var _components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/watershed-map/watershed-map.component */ "./src/app/shared/components/watershed-map/watershed-map.component.ts");
/* harmony import */ var _components_ag_grid_multi_link_renderer_multi_link_renderer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ag-grid/multi-link-renderer/multi-link-renderer.component */ "./src/app/shared/components/ag-grid/multi-link-renderer/multi-link-renderer.component.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/custom-rich-text/custom-rich-text.component */ "./src/app/shared/components/custom-rich-text/custom-rich-text.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _components_field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/field-definition/field-definition.component */ "./src/app/shared/components/field-definition/field-definition.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/alert-display/alert-display.component */ "./src/app/shared/components/alert-display/alert-display.component.ts");
/* harmony import */ var _components_field_definition_grid_header_field_definition_grid_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/field-definition-grid-header/field-definition-grid-header.component */ "./src/app/shared/components/field-definition-grid-header/field-definition-grid-header.component.ts");























class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
    static forChild() {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__["NgProgressModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"]
        ],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_20__["AlertDisplayComponent"],
        _components__WEBPACK_IMPORTED_MODULE_5__["HeaderNavComponent"],
        _pages__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
        _pages_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_6__["UnauthenticatedComponent"],
        _pages_subscription_insufficient_subscription_insufficient_component__WEBPACK_IMPORTED_MODULE_7__["SubscriptionInsufficientComponent"],
        _components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_13__["WatershedMapComponent"],
        _components_watershed_detail_popup_watershed_detail_popup_component__WEBPACK_IMPORTED_MODULE_10__["WatershedDetailPopupComponent"],
        _components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_11__["LinkRendererComponent"],
        _components_ag_grid_fontawesome_icon_link_renderer_fontawesome_icon_link_renderer_component__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIconLinkRendererComponent"],
        _components_ag_grid_multi_link_renderer_multi_link_renderer_component__WEBPACK_IMPORTED_MODULE_14__["MultiLinkRendererComponent"],
        _components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_16__["CustomRichTextComponent"],
        _components_field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_18__["FieldDefinitionComponent"],
        _components_field_definition_grid_header_field_definition_grid_header_component__WEBPACK_IMPORTED_MODULE_21__["FieldDefinitionGridHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__["NgProgressModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"]], exports: [_components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_20__["AlertDisplayComponent"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _pages__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
        _components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_13__["WatershedMapComponent"],
        _components__WEBPACK_IMPORTED_MODULE_5__["HeaderNavComponent"],
        _components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_16__["CustomRichTextComponent"],
        _components_field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_18__["FieldDefinitionComponent"],
        _components_field_definition_grid_header_field_definition_grid_header_component__WEBPACK_IMPORTED_MODULE_21__["FieldDefinitionGridHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_20__["AlertDisplayComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_5__["HeaderNavComponent"],
                    _pages__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                    _pages_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_6__["UnauthenticatedComponent"],
                    _pages_subscription_insufficient_subscription_insufficient_component__WEBPACK_IMPORTED_MODULE_7__["SubscriptionInsufficientComponent"],
                    _components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_13__["WatershedMapComponent"],
                    _components_watershed_detail_popup_watershed_detail_popup_component__WEBPACK_IMPORTED_MODULE_10__["WatershedDetailPopupComponent"],
                    _components_ag_grid_link_renderer_link_renderer_component__WEBPACK_IMPORTED_MODULE_11__["LinkRendererComponent"],
                    _components_ag_grid_fontawesome_icon_link_renderer_fontawesome_icon_link_renderer_component__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIconLinkRendererComponent"],
                    _components_ag_grid_multi_link_renderer_multi_link_renderer_component__WEBPACK_IMPORTED_MODULE_14__["MultiLinkRendererComponent"],
                    _components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_16__["CustomRichTextComponent"],
                    _components_field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_18__["FieldDefinitionComponent"],
                    _components_field_definition_grid_header_field_definition_grid_header_component__WEBPACK_IMPORTED_MODULE_21__["FieldDefinitionGridHeaderComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__["NgProgressModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"],
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"]
                ],
                exports: [
                    _components_alert_display_alert_display_component__WEBPACK_IMPORTED_MODULE_20__["AlertDisplayComponent"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                    _components_watershed_map_watershed_map_component__WEBPACK_IMPORTED_MODULE_13__["WatershedMapComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_5__["HeaderNavComponent"],
                    _components_custom_rich_text_custom_rich_text_component__WEBPACK_IMPORTED_MODULE_16__["CustomRichTextComponent"],
                    _components_field_definition_field_definition_component__WEBPACK_IMPORTED_MODULE_18__["FieldDefinitionComponent"],
                    _components_field_definition_grid_header_field_definition_grid_header_component__WEBPACK_IMPORTED_MODULE_21__["FieldDefinitionGridHeaderComponent"]
                ],
                entryComponents: [
                    _components_watershed_detail_popup_watershed_detail_popup_component__WEBPACK_IMPORTED_MODULE_10__["WatershedDetailPopupComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/dynamic-environment.ts":
/*!*************************************************!*\
  !*** ./src/environments/dynamic-environment.ts ***!
  \*************************************************/
/*! exports provided: DynamicEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicEnvironment", function() { return DynamicEnvironment; });
class DynamicEnvironment {
    constructor(_production) {
        this._production = _production;
    }
    get production() {
        if (window.config) {
            return window.config.production;
        }
        else
            return this._production;
    }
    get staging() {
        return window.config.staging;
    }
    get dev() {
        return window.config.dev;
    }
    get apiHostName() {
        return window.config.apiHostName;
    }
    get createAccountUrl() {
        return window.config.createAccountUrl;
    }
    get createAccountRedirectUrl() {
        return window.config.createAccountRedirectUrl;
    }
    get keystoneSupportBaseUrl() {
        return window.config.keystoneSupportBaseUrl;
    }
    get geoserverMapServiceUrl() {
        return window.config.geoserverMapServiceUrl;
    }
    get keystoneAuthConfiguration() {
        return window.config.keystoneAuthConfiguration;
    }
    get platformLongName() {
        return window.config.platformLongName;
    }
    get platformShortName() {
        return window.config.platformShortName;
    }
    get leadOrganizationLongName() {
        return window.config.leadOrganizationLongName;
    }
    get leadOrganizationShortName() {
        return window.config.leadOrganizationShortName;
    }
    get leadOrganizationHomeUrl() {
        return window.config.leadOrganizationHomeUrl;
    }
    get faviconFilename() {
        return window.config.faviconFilename;
    }
    get leadOrganizationLogoFilename() {
        return window.config.leadOrganizationLogoFilename;
    }
    get appInsightsInstrumentationKey() {
        return window.config.appInsightsInstrumentationKey;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _dynamic_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-environment */ "./src/environments/dynamic-environment.ts");

class Environment extends _dynamic_environment__WEBPACK_IMPORTED_MODULE_0__["DynamicEnvironment"] {
    constructor() {
        super(false);
    }
}
const environment = new Environment();


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\sitkatech\OregonTilth\Source\OregonTilth.Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map