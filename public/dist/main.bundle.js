webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comparative_chart_comparative_view_comparative_view_component__ = __webpack_require__("./src/app/comparative_chart/comparative-view/comparative-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdf_preview_pdf_preview_component__ = __webpack_require__("./src/app/pdf-preview/pdf-preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'comparative_chart',
        component: __WEBPACK_IMPORTED_MODULE_4__comparative_chart_comparative_view_comparative_view_component__["a" /* ComparativeViewComponent */]
    },
    {
        path: 'pdf_preview',
        component: __WEBPACK_IMPORTED_MODULE_5__pdf_preview_pdf_preview_component__["a" /* PdfPreviewComponent */]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_models_component__ = __webpack_require__("./src/app/models/models.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng4_twitter_timeline_lib_index__ = __webpack_require__("./node_modules/ng4-twitter-timeline/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__car_builder_builder_builder_component__ = __webpack_require__("./src/app/car_builder/builder/builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__car_builder_color_picker_color_picker_component__ = __webpack_require__("./src/app/car_builder/color-picker/color-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__car_builder_build_screen_build_screen_component__ = __webpack_require__("./src/app/car_builder/build-screen/build-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__model_info_model_info_component__ = __webpack_require__("./src/app/model-info/model-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__car_builder_general_feature_picker_general_feature_picker_component__ = __webpack_require__("./src/app/car_builder/general-feature-picker/general-feature-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__car_builder_rims_picker_rims_picker_component__ = __webpack_require__("./src/app/car_builder/rims-picker/rims-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__preview_modal_preview_modal_component__ = __webpack_require__("./src/app/preview-modal/preview-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__car_builder_extras_picker_extras_picker_component__ = __webpack_require__("./src/app/car_builder/extras-picker/extras-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__car_builder_car_car_component__ = __webpack_require__("./src/app/car_builder/car/car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__comparative_chart_car_selector_car_selector_component__ = __webpack_require__("./src/app/comparative_chart/car-selector/car-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comparative_chart_comparative_view_comparative_view_component__ = __webpack_require__("./src/app/comparative_chart/comparative-view/comparative-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__comparative_chart_comparative_details_comparative_details_component__ = __webpack_require__("./src/app/comparative_chart/comparative-details/comparative-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pdf_preview_pdf_preview_component__ = __webpack_require__("./src/app/pdf-preview/pdf-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__comparative_chart_car_selector_touch_car_selector_touch_component__ = __webpack_require__("./src/app/comparative_chart/car-selector-touch/car-selector-touch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__models_models_component__["a" /* ModelsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__car_builder_builder_builder_component__["a" /* BuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__car_builder_color_picker_color_picker_component__["a" /* ColorPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__car_builder_build_screen_build_screen_component__["a" /* BuildScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_18__model_info_model_info_component__["a" /* ModelInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__car_builder_general_feature_picker_general_feature_picker_component__["a" /* GeneralFeaturePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__car_builder_rims_picker_rims_picker_component__["a" /* RimsPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__preview_modal_preview_modal_component__["a" /* PreviewModalComponent */],
                __WEBPACK_IMPORTED_MODULE_25__car_builder_extras_picker_extras_picker_component__["a" /* ExtrasPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_26__car_builder_car_car_component__["a" /* CarComponent */],
                __WEBPACK_IMPORTED_MODULE_27__comparative_chart_car_selector_car_selector_component__["a" /* CarSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_28__comparative_chart_comparative_view_comparative_view_component__["a" /* ComparativeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_29__comparative_chart_comparative_details_comparative_details_component__["a" /* ComparativeDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pdf_preview_pdf_preview_component__["a" /* PdfPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_31__comparative_chart_car_selector_touch_car_selector_touch_component__["a" /* CarSelectorTouchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14_ng4_twitter_timeline_lib_index__["b" /* Ng4TwitterTimelineModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBt-_YitTA4qlfeIkQbaqZOXNiERL6USuA'
                }),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__["a" /* DndModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__car_data_service__["a" /* CarDataService */],
                __WEBPACK_IMPORTED_MODULE_21__selected_car_service__["a" /* SelectedCarService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_24__preview_modal_preview_modal_component__["a" /* PreviewModalComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarDataService = /** @class */ (function () {
    function CarDataService(http) {
        this.http = http;
        this.loadData();
    }
    /**
     * Loads the images path and save it in memory
     * to not reload every time it's need it in the builder components
     */
    CarDataService.prototype.loadData = function () {
        var _this = this;
        this.loadRims().subscribe(function (res) {
            _this.rims = res;
        });
        this.loadMotors().subscribe(function (res) {
            _this.motors = res;
        });
        this.loadInteriors().subscribe(function (res) {
            _this.interiors = res;
        });
        this.loadExtras().subscribe(function (res) {
            _this.extras = res;
        });
    };
    CarDataService.prototype.getRims = function () {
        return this.rims;
    };
    CarDataService.prototype.getMotors = function () {
        return this.motors;
    };
    CarDataService.prototype.getInteriors = function () {
        return this.interiors;
    };
    CarDataService.prototype.getExtras = function () {
        return this.extras;
    };
    CarDataService.prototype.getModelImages = function () {
        return this.http.get('/model_models');
    };
    CarDataService.prototype.getModels = function () {
        return this.http.get('/car_models');
    };
    CarDataService.prototype.loadMotors = function () {
        return this.http.get('/motor_Paths');
    };
    CarDataService.prototype.loadRims = function () {
        return this.http.get('/rims_paths');
    };
    CarDataService.prototype.loadInteriors = function () {
        return this.http.get('/interior_paths');
    };
    CarDataService.prototype.loadExtras = function () {
        return this.http.get('/extras_paths');
    };
    CarDataService.prototype.getModel = function (modelName) {
        return this.http.get('/car_models/models/' + modelName);
    };
    CarDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CarDataService);
    return CarDataService;
}());



/***/ }),

/***/ "./src/app/car_builder/build-screen/build-screen.component.css":
/***/ (function(module, exports) {

module.exports = ".buildScreen {\r\n    height: 90vh;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1024px) {\r\n    .buildScreen {\r\n      height: 52vh;\r\n    }\r\n  \r\n}\r\n\r\n\r\na {\r\n  text-decoration: none;\r\n\r\n}\r\n\r\n\r\n.box {\r\n    font-size: 2vw;\r\n    font-family: 'Rajdhani', sans-serif;\r\n margin-top: 2em;\r\n  position:relative;\r\n  vertical-align: middle;\r\n  color: #FFF;\r\n  display: inline-block;\r\n  \r\n  line-height: 60px;\r\n  text-align: center;\r\n  transition: 0.5s;\r\n  padding: 0.7em;\r\n  cursor: pointer;\r\n  border: 2px solid #FFF;\r\n  -webkit-transition:0.5s;\r\n  background: linear-gradient(-45deg, rgba(255,255,255,.2) 60%, rgba(255,255,255,.05) 60%, rgba(255,255,255,.05) 80%, rgba(0,0,0,.1) 80%);\r\n\r\n}\r\n\r\n\r\n.box:hover {\r\n  border: 2px solid rgba(0,160,80,0);\r\n  color: #FFF;\r\n  \r\n}\r\n\r\n\r\n.box::before, .box::after {\r\n  width: 100%;\r\n  height:100%;\r\n  z-index: 3;\r\n  content:'';\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n.foo::before {\r\n  border-bottom: 3px solid #cb9f3d;\r\n  border-left: 3px solid #cb9f3d;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\r\n}\r\n\r\n\r\n.foo::after {\r\n  border-top: 3px solid #cb9f3d;\r\n  border-right: 3px solid #cb9f3d;\r\n  -webkit-transform-origin: 100% 0%;\r\n  transform-origin: 100% 0%;\r\n}\r\n\r\n\r\n.box:hover::after, .box:hover::before {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n}"

/***/ }),

/***/ "./src/app/car_builder/build-screen/build-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row buildScreen\">\r\n\r\n    <div class=\"row\">\r\n        <div class='box foo col-sm-4 col-md-offset-4 col-sm-offset-4' (click)=\"showPreview()\">\r\n            PREVIEW\r\n        </div>\r\n        <car></car>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div [ngSwitch]=\"buildOption\">\r\n\r\n            <div *ngSwitchCase=\"'color'\">\r\n                <color-picker (colorChanged)=\"setColor($event)\"></color-picker>\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"'motor'\">\r\n                <app-general-feature-picker [type]=\"'motors'\"></app-general-feature-picker>\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"'extras'\">\r\n                <extras-picker></extras-picker>\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"'inside'\">\r\n                <app-general-feature-picker [type]=\"'interiors'\"></app-general-feature-picker>\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"'rims'\">\r\n                <rims-picker (rimsChanged)=\"setRims($event)\"></rims-picker>\r\n            </div>\r\n\r\n            <div *ngSwitchDefault>\r\n                <color-picker (colorChanged)=\"setColor($event)\"></color-picker>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/car_builder/build-screen/build-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preview_modal_preview_modal_component__ = __webpack_require__("./src/app/preview-modal/preview-modal.component.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuildScreenComponent = /** @class */ (function () {
    function BuildScreenComponent(sanitizer, selectedCarSrv, modalService) {
        this.sanitizer = sanitizer;
        this.selectedCarSrv = selectedCarSrv;
        this.modalService = modalService;
    }
    BuildScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedCarSrv.specs.subscribe(function (res) { return _this.specs = res; });
        this.specs = __assign({}, this.specs, { rimsID: 1 });
        this.selectedCarSrv.changeSpecs(this.specs);
    };
    BuildScreenComponent.prototype.ngOnChanges = function () {
        //cambia el id, de una vez en cadena se cambia lo grafico
        // this.specs = { //cambiar esto
        //   ...this.specs,
        //   modelID: this.model
        // }
        // this.selectedCarSrv.changeSpecs(this.specs);
    };
    BuildScreenComponent.prototype.showPreview = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__preview_modal_preview_modal_component__["a" /* PreviewModalComponent */], { class: 'modal-preview' });
    };
    BuildScreenComponent.prototype.setColor = function (color) {
        var data = { ID: color.ID, name: color.name };
        this.specs = __assign({}, this.specs, { color: data });
        this.selectedCarSrv.changeSpecs(this.specs);
    };
    BuildScreenComponent.prototype.setRims = function (rims) {
        this.specs = __assign({}, this.specs, { rims: rims });
        this.selectedCarSrv.changeSpecs(this.specs);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('buildOption'),
        __metadata("design:type", Object)
    ], BuildScreenComponent.prototype, "buildOption", void 0);
    BuildScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'build-screen',
            template: __webpack_require__("./src/app/car_builder/build-screen/build-screen.component.html"),
            styles: [__webpack_require__("./src/app/car_builder/build-screen/build-screen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__selected_car_service__["a" /* SelectedCarService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], BuildScreenComponent);
    return BuildScreenComponent;
}());



/***/ }),

/***/ "./src/app/car_builder/builder/builder.component.css":
/***/ (function(module, exports) {

module.exports = ".black {\r\n  background-color: black;\r\n}\r\n\r\n.builder {\r\n    height: 90vh;\r\n    width: 100%;\r\n    margin-top: 10%;\r\n    margin-left: 0px;\r\n    border: 1px solid lightslategrey;\r\n    background: url('floor.19cfca70ff919293da00.jpg') no-repeat center center;\r\n    background-size: 100%;\r\n}\r\n\r\n.optionsBar {\r\n      /* margin: 0px; */\r\n      height: 90vh;\r\n      padding: 0;\r\n      width: 8vw;\r\n      -webkit-box-shadow: 5px 0px 18px #222222;\r\n      box-shadow: 5px 0px 18px #222222;\r\n}\r\n\r\n.active {\r\n\r\n\r\n  background: linear-gradient(-45deg, rgba(255,255,255,.2) 60%, rgba(255,255,255,.05) 60%, rgba(255,255,255,.05) 80%, rgba(0,0,0,.1) 80%);\r\n    border: 3px solid #cb9f3d;\r\n    color:#cb9f3d !important;\r\n}\r\n\r\n.button {\r\n    background: radial-gradient( rgba(255,255,255, 0.6), rgba(255,255,255, 0.3), rgba(255,255,255, 0));\r\n    border: 1px solid white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n  }\r\n\r\n.box {\r\n  margin-top: 1vh;\r\n  padding-top: 5vh;\r\n  height: 18%;\r\n  width: 100%;\r\n  /* font-size: 132%; */\r\n  color: #FFF;\r\n  text-align: center;\r\n  -ms-flex-line-pack: center;\r\n  align-content: center;\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n  -webkit-transition: 0.5s;\r\n}\r\n\r\n.box:hover {\r\n  border-radius: 10px;\r\n  border: solid 5px rgba(255,255,255,.1);\r\n  background: linear-gradient(-45deg, rgba(255,255,255,.2) 60%, rgba(255,255,255,.05) 60%, rgba(255,255,255,.05) 80%, rgba(0,0,0,.1) 80%);\r\n \r\n}\r\n\r\n.box::before, .box::after {\r\n  width: 100%;\r\n  height:100%;\r\n  z-index: 3;\r\n  content:'';\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition: 0.35s;\r\n  transition: 0.35s;\r\n}\r\n\r\n.foo::before {\r\n  border-bottom: 3px solid #cb9f3d;\r\n  border-left: 3px solid #cb9f3d;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\r\n}\r\n\r\n.foo::after {\r\n  border-top: 3px solid #cb9f3d;\r\n  border-right: 3px solid #cb9f3d;\r\n  -webkit-transform-origin: 100% 0%;\r\n  transform-origin: 100% 0%;\r\n}\r\n\r\n.box:hover::after, .box:hover::before {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .builder {\r\n    height: 65vh;\r\n  }\r\n\r\n  .optionsBar {\r\n    height: 12vh;\r\n    width: 100%;\r\n    -webkit-box-shadow: 5px 10px 18px #000000;\r\n    box-shadow: 5px 10px 18px #000000;\r\n  }\r\n\r\n  .box {\r\n    height: 95%;\r\n    width: 20%;\r\n    margin-top: 0;\r\n    padding-top: 6%;\r\n  }\r\n\r\n}\r\n\r\n.material-icons{\r\n  font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 3vw;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-feature-settings: 'liga';\r\n  -webkit-font-smoothing: antialiased;\r\n}"

/***/ }),

/***/ "./src/app/car_builder/builder/builder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"black\">\r\n    <div class=\"container-fluid builder\">\r\n        <div class=\"row\">\r\n          \r\n          <div class=\"col-xs-12 col-sm-12 col-md-1 optionsBar\">\r\n            <!--OptionsBar-->\r\n            <div *ngFor=\"let option of options\" \r\n                  class=\"col-xs-2 col-sm-2 col-md-12 box foo\" \r\n                  (click)=\"selectedOption = option.name\" \r\n                  [class.active]=\"selectedOption == option.name\">   \r\n                  <i class=\"material-icons\">{{option.icon}}</i>\r\n            </div>\r\n          </div>\r\n      \r\n          <div class=\"col-xs-12 col-sm-12 col-md-11\" >\r\n              <build-screen [buildOption]=\"selectedOption\"> </build-screen>\r\n          </div>   \r\n        </div>\r\n      </div>      \r\n</div>"

/***/ }),

/***/ "./src/app/car_builder/builder/builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuilderComponent = /** @class */ (function () {
    function BuilderComponent() {
        this.options = [
            {
                name: 'color',
                icon: 'color_lens'
            },
            {
                name: 'rims',
                icon: 'brightness_high'
            },
            {
                name: 'inside',
                icon: 'drive_eta'
            },
            {
                name: 'motor',
                icon: 'build'
            },
            {
                name: 'extras',
                icon: 'playlist_add'
            }
        ];
    }
    BuilderComponent.prototype.ngOnInit = function () {
    };
    BuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'car-builder',
            template: __webpack_require__("./src/app/car_builder/builder/builder.component.html"),
            styles: [__webpack_require__("./src/app/car_builder/builder/builder.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuilderComponent);
    return BuilderComponent;
}());



/***/ }),

/***/ "./src/app/car_builder/car/car.component.css":
/***/ (function(module, exports) {

module.exports = ".car {\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n\r\n.baseImage{\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  position: absolute;\r\n  background-size: 100%;\r\n    width: 80vw;\r\n    height: 60vh;\r\n    margin-top: 18%;\r\n}\r\n\r\n.bodyImage{\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  position: absolute;\r\n  background-size: 100%;\r\n    width: 80vw;\r\n    height: 60vh;\r\n    margin-top: 18%;\r\n    -webkit-filter: opacity(.5) drop-shadow(0 0 0 white);  filter: opacity(.5) drop-shadow(0 0 0 white);\r\n}\r\n\r\n.extraImage{\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  position: absolute;\r\n  background-size: 100%;\r\n    width: 80vw;\r\n    height: 60vh;\r\n    margin-top: 18%;\r\n}\r\n\r\n.rimsImage{\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  position: absolute;\r\n  background-size: 100%;\r\n    width: 80vw;\r\n    height: 60vh;\r\n    margin-top: 18%;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .bodyImage{\r\n      -webkit-filter: opacity(.5) drop-shadow(0 0 0 white);  filter: opacity(.5) drop-shadow(0 0 0 white);\r\n      position: absolute;\r\n      background-size: 100%;\r\n        width: 80vw;\r\n        height: 60vh;\r\n        margin-top: 5%;\r\n    }\r\n\r\n    .baseImage{\r\n      position: absolute;\r\n      background-size: 100%;\r\n        width: 80vw;\r\n        height: 60vh;\r\n        margin-top: 5%;\r\n    }\r\n    \r\n    .extraImage{\r\n\r\n      position: absolute;\r\n      background-size: 100%;\r\n        width: 80vw;\r\n        height: 60vh;\r\n        margin-top: 5%;\r\n    }\r\n    \r\n    .rimsImage{\r\n\r\n      position: absolute;\r\n      background-size: 100%;\r\n        width: 80vw;\r\n        height: 60vh;\r\n        margin-top: 5%;\r\n    }\r\n  \r\n}"

/***/ }),

/***/ "./src/app/car_builder/car/car.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"car\">\r\n\r\n  <div class=\"baseImage\" [ngStyle]=\"{backgroundImage:'url(' + bodyImg + ')'\r\n  ,backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',backgroundSize: '90%'}\"></div>\r\n\r\n  <div class=\"bodyImage\" id=\"bodyImage\" [ngStyle]=\"bodyImageStyle\"></div>\r\n\r\n  <!-- Luces, Vidrio, Llantas-->\r\n  <div class=\"extraImage\" id=\"extraImage\" [ngStyle]=\"{backgroundImage:'url(' + extraImg + ')'\r\n  ,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: '90%'}\">\r\n  </div>\r\n\r\n  <!-- Aros -->\r\n  <div class=\"rimsImage\" id=\"rimsImage\"[ngStyle]=\"{backgroundImage:'url(' + rimsImg + ')'\r\n  ,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: '90%'}\">\r\n  </div>"

/***/ }),

/***/ "./src/app/car_builder/car/car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarComponent = /** @class */ (function () {
    function CarComponent(carService, carData) {
        this.carService = carService;
        this.carData = carData;
        this.carsImages = [
            [
                "../../../assets/images/Kubanyi/RAM-1.png",
                "../../../assets/images/Kubanyi/RAM-2.png",
            ],
            [
                "../../../assets/images/Imparatus/SUV-1.png",
                "../../../assets/images/Imparatus/SUV-2.png",
            ],
            [
                "../../../assets/images/Imperiale/Imperiale-1.png",
                "../../../assets/images/Imperiale/Imperiale-2.png",
            ]
        ];
        this.bodyImg = '';
        this.bodyImageStyle = {
            backgroundImage: 'url(' + this.bodyImg + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '90%',
            filter: 'opacity(.5) drop-shadow(0 0 0 white)'
        };
    }
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rims = this.carData.getRims();
        this.carService.specs.subscribe(function (specs) {
            if (!_this.rims) {
                _this.rims = _this.carData.getRims();
            }
            _this.updateCar(specs);
        });
    };
    CarComponent.prototype.updateCar = function (specs) {
        if (!(typeof specs.color === "undefined")) {
            this.bodyImg = this.getBackground(specs.name, 0);
            this.bodyImageStyle.backgroundImage = 'url(' + this.bodyImg + ')';
            this.extraImg = this.getBackground(specs.name, 1);
            this.changeCarColor(specs.color.name);
            this.color = specs.color.name;
            this.changeRimsImage(specs.rims);
        }
    };
    CarComponent.prototype.changeRimsImage = function (selectedRims) {
        if (this.rims) {
            for (var _i = 0, _a = this.rims; _i < _a.length; _i++) {
                var rim = _a[_i];
                if (rim.modelId == selectedRims.modelId && rim.rimId == selectedRims.rimId) {
                    this.rimsImg = rim.path;
                    return;
                }
            }
        }
    };
    //recibe el tipo de imagen que se ocupa, se encarga de devolverla la parte adecuada del carro seleccionado 
    CarComponent.prototype.getBackground = function (name, part) {
        switch (name) {
            case 'Corvo Imperiale':
                return this.carsImages[2][part];
            case 'Corvo Kubanyi':
                return this.carsImages[0][part];
            case 'Corvo Imparatus':
                return this.carsImages[1][part];
        }
    };
    CarComponent.prototype.changeCarColor = function (color) {
        switch (color) {
            case 'black':
                this.bodyImageStyle.filter = "opacity(.72) drop-shadow(0 0 0 black) saturate(100%) brightness(54.0%)";
                break;
            case 'red':
                this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 red) saturate(330%) brightness(50%)";
                break;
            case 'white':
                this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 white) saturate(100%) brightness(160%)";
                break;
            case 'purple':
                this.bodyImageStyle.filter = "opacity(.7) drop-shadow(0 0 0 mediumpurple) saturate(700%) brightness(45%)";
                break;
            case 'blue':
                this.bodyImageStyle.filter = "opacity(0.77) drop-shadow(darkblue 0px 0px 0px) saturate(600%) brightness(70%)";
                break;
            case 'yellow':
                this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 gold) saturate(600%) brightness(135%)";
                break;
            case 'gray':
                this.bodyImageStyle.filter = "opacity(.2) drop-shadow(0 0 0 black) saturate(100%) brightness(550%)";
                break;
            case 'green':
                this.bodyImageStyle.filter = "opacity(0.77) drop-shadow(lime 0px 0px 0px) saturate(130%) brightness(188%)";
                break;
            default:
                this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 white) saturate(100%) brightness(500%)";
        }
    };
    CarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'car',
            template: __webpack_require__("./src/app/car_builder/car/car.component.html"),
            styles: [__webpack_require__("./src/app/car_builder/car/car.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__selected_car_service__["a" /* SelectedCarService */], __WEBPACK_IMPORTED_MODULE_2__car_data_service__["a" /* CarDataService */]])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/car_builder/color-picker/color-picker.component.css":
/***/ (function(module, exports) {

module.exports = ".colorPicker {\r\n   \r\n    position: absolute;\r\n    padding: 7px;\r\n    padding-left: 1%;\r\n    /* margin-left: 2%; */\r\n    bottom: 2vh;\r\n    margin-left: 25vw;\r\n    -ms-flex-line-pack: center;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.colorPalet {\r\n    width: 100%;  \r\n}\r\n\r\n.col-xs-1 {\r\n   padding: 10px; \r\n}\r\n\r\n.col-sm-2 {\r\n padding: 10px;\r\n}\r\n\r\n.circle {\r\n    height: 6vh;\r\n    width: 6vh;\r\n    margin-left: 5%;\r\n    display: inline-block;\r\n    border: 4px solid transparent;\r\n    border-image-source: linear-gradient(black, whitesmoke);\r\n    border-image-slice: 20;\r\n}\r\n\r\n.active {\r\n \r\n    border: 4px solid transparent;\r\n    border-image-source: linear-gradient(#cb9f3d, gold);\r\n    border-image-slice: 20;\r\n}\r\n\r\n.circle:hover {\r\n    border: 4px solid transparent;\r\n    border-image-source: linear-gradient(#cb9f3d, gold);\r\n    border-image-slice: 20;\r\n}"

/***/ }),

/***/ "./src/app/car_builder/color-picker/color-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"colorPicker col-xs-7 col-lg-6\">\r\n\r\n    <div class=\"row colorPalet\">\r\n      <div *ngFor=\"let color of colors\"\r\n            class=\"col-xs-1 col-sm-2 circle\" \r\n            [style.background]='color.hexcode'\r\n            (click)=\"onColorChange(color)\"\r\n            [class.active]=\"color.name === selectedColor.name\"\r\n           >\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/car_builder/color-picker/color-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        this.colorChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.colors = [
            { ID: '0', name: 'black', hexcode: 'linear-gradient(black, dimgray, black)' },
            { ID: '1', name: 'gray', hexcode: 'linear-gradient(darkslategray, darkgray, darkslategray)' },
            { ID: '2', name: 'white', hexcode: 'linear-gradient(gray, white, gray)' },
            { ID: '3', name: 'yellow', hexcode: 'linear-gradient(orange, yellow, orange)' },
            { ID: '4', name: 'red', hexcode: 'linear-gradient(black, firebrick, black)' },
            { ID: '5', name: 'purple', hexcode: 'linear-gradient(black, mediumpurple, black)' },
            { ID: '6', name: 'blue', hexcode: 'linear-gradient(black, darkblue, black)' },
            { ID: '7', name: 'green', hexcode: 'linear-gradient(gray, lime, gray)' }
        ];
    }
    ColorPickerComponent.prototype.onColorChange = function (color) {
        this.selectedColor = color;
        this.colorChanged.emit(this.selectedColor);
    };
    ColorPickerComponent.prototype.ngOnInit = function () {
        this.selectedColor = { ID: '2', name: 'white' };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ColorPickerComponent.prototype, "colorChanged", void 0);
    ColorPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'color-picker',
            template: __webpack_require__("./src/app/car_builder/color-picker/color-picker.component.html"),
            styles: [__webpack_require__("./src/app/car_builder/color-picker/color-picker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/car_builder/extras-picker/extras-picker.component.css":
/***/ (function(module, exports) {

module.exports = ".featureImage{\r\n    width: 100%;\r\n}\r\n\r\n.extrasContainer{\r\n    background: rgba(0, 0, 0, 0.5);\r\n    margin-left: 15vw;\r\n    padding-left: 1vw;\r\n    padding-top: 0vw; \r\n}\r\n\r\n.imageContainer{\r\n    text-transform: uppercase;\r\n    font-size: 1.5vw;\r\n    text-align: center;\r\n    color: #FFF;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    position: static;\r\n    border: 2px solid rgb(255, 255, 255);\r\n    margin-bottom: 2vh;\r\n    cursor: pointer;\r\n    height: 8vw;\r\n    width: 8vw;\r\n}\r\n\r\n.featureCard{\r\n    padding-top: 10% \r\n}\r\n\r\n.imageContainer:hover{\r\n    border: 2px solid rgb(203, 159, 61);\r\n}\r\n\r\n.imageContainer.active{\r\n    border: 2px solid rgb(203, 159, 61);\r\n}\r\n\r\n.card {\r\n    height: 100%;\r\n    position: absolute;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-transition: all 1s ease-in-out;\r\n    transition: all 1s ease-in-out;\r\n    width: 8vw;\r\n  }\r\n\r\n.card:hover {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n\r\n.card .side {\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n\r\n.card .back {\r\n    margin-top: 32%;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    color: #cb9f3d;\r\n  }"

/***/ }),

/***/ "./src/app/car_builder/extras-picker/extras-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<!--   <div *ngFor=\"let rim of rims\" \r\n    (click)=\"onRimChange(rim)\"\r\n    [class.active]=\"selectedRimID == rim.id\"\r\n    class=\"col-md-2 Rim\">\r\n    <img src=\"{{rim.img}}\" class=\"rimsIcon\">\r\n\r\n       <img src=\"{{extra.path}}\" class=\"extraIcon\">\r\n       \r\n  </div> -->\r\n\r\n<div class=\"featureCard\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 extrasContainer\">\r\n\r\n        <div *ngFor=\"let extra of data; let i = index\">\r\n\r\n          <div class=\"col-sm-4\">\r\n         \r\n              <div class=\"imageContainer\" (click)='addExtra(extra)' [class.active]=\"isActive(extra)\">\r\n                <div class=\"card\">\r\n                  <div class=\"side\">\r\n\r\n                    <img src=\"{{extra.path}}\" class=\"featureImage\">\r\n\r\n                  </div>\r\n                  <div class=\"side back\">{{extra.name}}</div>\r\n                </div>\r\n              </div>\r\n            \r\n            .\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/car_builder/extras-picker/extras-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrasPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtrasPickerComponent = /** @class */ (function () {
    function ExtrasPickerComponent(carData, selectedCarSrv) {
        this.carData = carData;
        this.selectedCarSrv = selectedCarSrv;
        this.specs = {
            color: "",
            extras: [],
            inside: "",
            name: "",
            rims: "",
            motor: ""
        };
        this.extras = [];
    }
    ExtrasPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.carData.getExtras().subscribe(res => {
        this.data = this.carData.getExtras();
        //});
        this.selectedCarSrv.specs.subscribe(function (res) {
            _this.specs = res;
            _this.extras = res.extras;
        });
    };
    ExtrasPickerComponent.prototype.isActive = function (extra) {
        var aux = this.extras.indexOf(extra);
        if (aux !== -1) {
            return true;
        }
        else {
            return false;
        }
    };
    ExtrasPickerComponent.prototype.addExtra = function (extra) {
        var aux = this.extras.indexOf(extra);
        console.log(extra);
        if (aux !== -1) {
            this.extras.splice(aux, 1);
        }
        else {
            this.extras.push(extra);
        }
        this.specs = __assign({}, this.specs, { extras: this.extras });
        this.selectedCarSrv.changeSpecs(this.specs);
    };
    ExtrasPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'extras-picker',
            template: __webpack_require__("./src/app/car_builder/extras-picker/extras-picker.component.html"),
            styles: [__webpack_require__("./src/app/car_builder/extras-picker/extras-picker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */],
            __WEBPACK_IMPORTED_MODULE_2__selected_car_service__["a" /* SelectedCarService */]])
    ], ExtrasPickerComponent);
    return ExtrasPickerComponent;
}());



/***/ }),

/***/ "./src/app/car_builder/general-feature-picker/general-feature-picker.component.css":
/***/ (function(module, exports) {

module.exports = ".featureImage{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.imageContainer{\r\n    border: 2px solid rgb(255, 255, 255);\r\n    height: 25vh;\r\n    margin-top: 1vw;\r\n    cursor: pointer;\r\n    background: black;\r\n}\r\n\r\n.featureCard{\r\n    padding-top: 4%;\r\n\r\n}\r\n\r\n.active {\r\n    border: 4px solid rgb(203, 159, 61);\r\n}\r\n\r\n.active .overlay{\r\n    width: 90%;\r\n}\r\n\r\n.imageContainer:hover .overlay{\r\n    width: 91%;\r\n    border-right: 3px solid rgb(203, 159, 61);\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .imageContainer:hover .overlay{\r\n        width: 28.5vw;\r\n        border-right: 3px solid rgb(203, 159, 61);\r\n    }\r\n}\r\n\r\n.imageContainer:hover{\r\n    border: 2px solid rgb(203, 159, 61);\r\n}\r\n\r\n.overlay {\r\n    position: absolute;\r\n    bottom: 0.5%;\r\n    /* left: 0; */\r\n    /* right: 0; */\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    overflow: hidden;\r\n    width: 0;\r\n    height: 24.6vh;\r\n    -webkit-transition: .5s ease;\r\n    transition: .5s ease;\r\n  }\r\n\r\n.featureName{\r\n    font-family: 'Rajdhani', sans-serif;\r\n    color: white;\r\n    font-size:  2vw;\r\n    display:inline;\r\n    text-transform: uppercase;\r\n\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    white-space: nowrap;\r\n}\r\n\r\n.wText{\r\n    font-family: 'Rajdhani', sans-serif;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    display:inline;\r\n}\r\n\r\n.yText{\r\n    font-family: 'Rajdhani', sans-serif;\r\n    color: rgb(203, 159, 61);\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    display:inline\r\n}"

/***/ }),

/***/ "./src/app/car_builder/general-feature-picker/general-feature-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"featureCard\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div *ngFor=\"let dat of data; let i = index\">\r\n\r\n                <div class=\"col-sm-4 col-sm-offset-1\">\r\n                    <div class=\"imageContainer\" (click)='setSelectedCard(dat)' \r\n                    [class.active]=\"dat.name == selectedCardFeature.name\">\r\n                        <img src=\"{{dat.path}}\" class=\"featureImage\">\r\n\r\n\r\n\r\n                        <div class=\"overlay\">\r\n\r\n                            <div class=\"featureName\">{{dat.name}}\r\n                                <div *ngIf=\"isMotor\">\r\n                                    <div>\r\n                                        <p class=\"yText\">Cylinders </p>\r\n                                        <p class=\"wText\"> {{dat.cylinders}}</p>\r\n                                    </div>\r\n                                    <div>\r\n                                        <p class=\"yText\">Horsepower </p>\r\n                                        <p class=\"wText\"> {{dat.horsepower}}</p>\r\n                                    </div>\r\n                                    <div>\r\n                                        <p class=\"yText\">Acceleration </p>\r\n                                        <p class=\"wText\"> {{dat.acceleration}}</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    \r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/car_builder/general-feature-picker/general-feature-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralFeaturePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralFeaturePickerComponent = /** @class */ (function () {
    function GeneralFeaturePickerComponent(carData, selectedCarSrv) {
        this.carData = carData;
        this.selectedCarSrv = selectedCarSrv;
        this.specs = {
            color: "",
            extras: [],
            inside: "",
            name: "",
            rims: "",
            motor: ""
        };
        this.selectedCardID = 0;
        this.isMotor = false;
        this.type = "";
    }
    GeneralFeaturePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedCarSrv.specs.subscribe(function (res) {
            _this.specs = res;
            _this.changeDataType();
        });
        this.selectedCarSrv.specsChanged.subscribe(function (res) { return _this.changeDataType(); });
    };
    GeneralFeaturePickerComponent.prototype.changeDataType = function () {
        switch (this.type) {
            case 'interiors':
                //this.carData.getInteriors().subscribe(res => { 
                this.data = this.carData.getInteriors();
                this.selectedCardFeature = this.specs.inside;
                //});
                break;
            case 'motors':
                //this.carData.getMotors().subscribe(res => { 
                this.data = this.carData.getMotors();
                this.selectedCardFeature = this.specs.motor;
                this.isMotor = true;
                console.log("......", this.specs.motor);
                //});
                break;
        }
    };
    GeneralFeaturePickerComponent.prototype.setSelectedCard = function (data) {
        var info = {
            ID: data.ID,
            name: data.name,
            price: data.price
        };
        this.selectedCardFeature = info;
        this.changeCarSpecs();
    };
    GeneralFeaturePickerComponent.prototype.changeCarSpecs = function () {
        switch (this.type) {
            case 'interiors':
                this.specs = __assign({}, this.specs, { inside: this.selectedCardFeature });
                break;
            case 'motors':
                this.specs = __assign({}, this.specs, { motor: this.selectedCardFeature });
                break;
        }
        this.selectedCarSrv.changeSpecs(this.specs);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", String)
    ], GeneralFeaturePickerComponent.prototype, "type", void 0);
    GeneralFeaturePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-general-feature-picker',
            template: __webpack_require__("./src/app/car_builder/general-feature-picker/general-feature-picker.component.html"),
            styles: [__webpack_require__("./src/app/car_builder/general-feature-picker/general-feature-picker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */],
            __WEBPACK_IMPORTED_MODULE_2__selected_car_service__["a" /* SelectedCarService */]])
    ], GeneralFeaturePickerComponent);
    return GeneralFeaturePickerComponent;
}());



/***/ }),

/***/ "./src/app/car_builder/rims-picker/rims-picker.component.css":
/***/ (function(module, exports) {

module.exports = ".RimsPicker {\r\n    position: absolute;\r\n    bottom: 2vh;\r\n    left: 0vw;\r\n    height: 12vh;\r\n    /* width: 0; */\r\n    margin-left: 11%;\r\n    -ms-flex-line-pack: center;\r\n    align-content: center;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n@media only screen and (max-width: 1503px) {\r\n    .RimsPicker {\r\n        position: absolute;\r\n        margin-left: 0;\r\n    bottom: 2vh;\r\n    /* left: 0vw; */\r\n    height: 12vh;\r\n    /* width: 0; */\r\n    /* margin-left: 11%; */\r\n    -ms-flex-line-pack: center;\r\n    align-content: center;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    }\r\n}\r\n\r\n.Rim{\r\n    position: relative;\r\n    height: 11vh;\r\n    width: 12%;\r\n    margin-right: 5vw;\r\n    padding: 1%;\r\n    padding-top: 1%;\r\n    margin-top: 1vh;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.rimsIcon {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.active {\r\n    border: solid 2px gold;\r\n}\r\n\r\n.rimDescription{\r\n    font-family: 'Rajdhani', sans-serif;\r\n    color: #cb9f3d;\r\n    text-align: center;\r\n    padding-top: 3vh;\r\n    font-size: 350%;\r\n    text-transform: uppercase;\r\n}\r\n"

/***/ }),

/***/ "./src/app/car_builder/rims-picker/rims-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container RimsPicker\">\r\n \r\n    <div *ngFor=\"let rim of rims\" \r\n      (click)=\"onRimChange(rim)\"\r\n      [class.active]=\"selectedRim.rimId == rim.ID\"\r\n      class=\"col-md-2 Rim\">\r\n      <img src=\"{{rim.img}}\" class=\"rimsIcon\">\r\n     \r\n    </div>\r\n\r\n    <div class=\"col-md-4 rimDescription\"> {{selectedRim.name}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/car_builder/rims-picker/rims-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RimsPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RimsPickerComponent = /** @class */ (function () {
    function RimsPickerComponent(carData, carService) {
        this.carData = carData;
        this.carService = carService;
        this.rimsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectedRim = { rimId: "", name: "", price: "", img: "" };
        //must Load images in this array
        this.rims = [
            { ID: '0', img: 'rims1', name: '', price: "" },
            { ID: '1', img: 'rims2', name: '', price: "" },
            { ID: '2', img: 'rims3', name: '', price: "" },
        ];
    }
    RimsPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load images on rims array from carImages
        // this.carData.loadRims().subscribe(res => {
        var data = this.carData.getRims();
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var dat = data_1[_i];
            if (dat.description != undefined) {
                this.rims[dat.rimId].img = dat.path;
                this.rims[dat.rimId].name = dat.description;
                this.rims[dat.rimId].price = dat.price;
            }
        }
        // });
        //Need to update selected Rims to be sinchronized with the selected car when model change
        this.carService.specs.subscribe(function (specs) {
            _this.selectedRim = specs.rims;
        });
    };
    RimsPickerComponent.prototype.onRimChange = function (rims) {
        this.selectedRim.name = this.rims[rims.ID].name;
        this.selectedRim.rimId = rims.ID;
        this.selectedRim.price = this.rims[rims.ID].price;
        this.rimsChanged.emit(this.selectedRim);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])("rimsChanged"),
        __metadata("design:type", Object)
    ], RimsPickerComponent.prototype, "rimsChanged", void 0);
    RimsPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rims-picker',
            template: __webpack_require__("./src/app/car_builder/rims-picker/rims-picker.component.html"),
            styles: [__webpack_require__("./src/app/car_builder/rims-picker/rims-picker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */], __WEBPACK_IMPORTED_MODULE_2__selected_car_service__["a" /* SelectedCarService */]])
    ], RimsPickerComponent);
    return RimsPickerComponent;
}());



/***/ }),

/***/ "./src/app/comparative_chart/car-selector-touch/car-selector-touch.component.css":
/***/ (function(module, exports) {

module.exports = ".model-container{\r\n    border: 4px solid rgb(10, 10, 10);\r\n    text-align: center;\r\n    cursor: move;\r\n    text-transform: uppercase;\r\n}\r\n\r\nh1,h2,h3,h4,h5{\r\n    font-family: 'Rajdhani', sans-serif;\r\n    margin: auto;\r\n}\r\n\r\n.model-image{\r\n    width: 100%;\r\n}\r\n\r\n.model-image>img{\r\n    max-height:100%; \r\n    max-width:100%;\r\n    cursor: move !important;\r\n}\r\n\r\n.top-bufferM {\r\n    margin-top: 80px;\r\n}\r\n\r\n.dropable-container{\r\n    border: 2px solid rgb(34, 34, 34);\r\n    text-align: center;\r\n    color:rgb(34, 34, 34);\r\n    text-transform: uppercase;\r\n}\r\n\r\n.drop-text{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.model-image-dropped{\r\n    width: 100%;\r\n}\r\n\r\n.model-image-dropped>img{\r\n    max-height:100%; \r\n    max-width:100%;\r\n}\r\n\r\n.model-container-dropped{\r\n    text-align: center;\r\n    cursor:default;\r\n}\r\n\r\n.selected{\r\n    border: 4px solid rgb(203, 159, 61);;\r\n}"

/***/ }),

/***/ "./src/app/comparative_chart/car-selector-touch/car-selector-touch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row top-buffer\">\n    <div class=\"col-sm-12\">\n      <div *ngFor=\"let model of models; let i = index\">\n        <div class=\"col-sm-4\">\n          <div class=\"cont model-container\" (click)=\"selectCar(model)\" [class.selected]=\"firstCarName == model.name || secondCarName == model.name\">\n            <div class=\"model-title\" >\n              <h3>{{model.name}}</h3>\n            </div>\n            <div class=\"model-image\">\n              <img src=\"{{model.image}}\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n\n\n  <div class=\"row top-buffer-m\">\n      <div class=\"col-sm-3\">\n          <div>\n              <div class=\"dropable-body\">\n                  <div *ngIf=\"validateSelect('1')\">\n                      <div class=\"model-container-dropped\">\n                          <div class=\"model-title\">\n                              <h3>{{firstData.name}} \n                                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deleteFirstData()\"></i>\n                                </h3>\n                          </div>\n                          <div class=\"model-image-dropped\">\n                              <img src=\"{{firstData.image}}\" alt=\"\">\n                          </div>\n                        </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n    <div class=\"col-sm-6\">\n      <app-comparative-details [cars]=\"cars\"></app-comparative-details>\n    </div>\n    <div class=\"col-sm-3\">\n        <div>\n            <div class=\"dropable-body\">\n                <div *ngIf=\"validateSelect('2')\">\n                    <div class=\"model-container-dropped\">\n                        <div class=\"model-title\">\n                            <h3>{{secondData.name}} \n                                <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deleteSecondData()\"></i>\n                              </h3>\n                        </div>\n                        <div class=\"model-image-dropped\">\n                            <img src=\"{{secondData.image}}\" alt=\"\">\n                        </div>\n                      </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comparative_chart/car-selector-touch/car-selector-touch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarSelectorTouchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarSelectorTouchComponent = /** @class */ (function () {
    function CarSelectorTouchComponent(carData) {
        this.carData = carData;
        this.firstIsDropped = false;
        this.secondIsDropped = false;
        this.firstCarName = null;
        this.secondCarName = null;
        this.cars = {};
    }
    CarSelectorTouchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carData.getModels().subscribe(function (res) {
            _this.models = res;
        });
    };
    CarSelectorTouchComponent.prototype.areComparable = function () {
        this.cars = {
            option1: this.firstCarName,
            option2: this.secondCarName
        };
    };
    CarSelectorTouchComponent.prototype.selectCar = function (car) {
        console.log(car);
        if (!this.firstIsDropped && !this.secondIsDropped) {
            this.firstData = car;
            this.firstCarName = car.name;
            this.firstIsDropped = true;
        }
        else if (this.firstIsDropped && !this.secondIsDropped) {
            if (!(this.firstCarName == car.name)) {
                this.secondData = car;
                this.secondCarName = car.name;
                this.secondIsDropped = true;
            }
        }
        else if (!this.firstIsDropped && this.secondIsDropped) {
            if (!(this.secondCarName == car.name)) {
                this.firstData = car;
                this.firstCarName = car.name;
                this.firstIsDropped = true;
            }
        }
        this.areComparable();
    };
    CarSelectorTouchComponent.prototype.deleteFirstData = function () {
        this.firstIsDropped = false;
        this.firstData = null;
        this.firstCarName = null;
        this.areComparable();
    };
    CarSelectorTouchComponent.prototype.deleteSecondData = function () {
        this.secondIsDropped = false;
        this.secondData = null;
        this.secondCarName = null;
        this.areComparable();
    };
    CarSelectorTouchComponent.prototype.validateSelect = function (selectZone) {
        var show = false;
        console.log("Select Zone:", selectZone);
        switch (selectZone) {
            case "1":
                if (this.firstIsDropped && this.firstData) {
                    show = true;
                }
                else {
                    show = false;
                }
                break;
            case "2":
                if (this.secondIsDropped && this.secondData) {
                    show = true;
                }
                else {
                    show = false;
                }
                break;
        }
        console.log("Show:", show);
        return show;
    };
    CarSelectorTouchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-car-selector-touch',
            template: __webpack_require__("./src/app/comparative_chart/car-selector-touch/car-selector-touch.component.html"),
            styles: [__webpack_require__("./src/app/comparative_chart/car-selector-touch/car-selector-touch.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */]])
    ], CarSelectorTouchComponent);
    return CarSelectorTouchComponent;
}());



/***/ }),

/***/ "./src/app/comparative_chart/car-selector/car-selector.component.css":
/***/ (function(module, exports) {

module.exports = ".model-container{\r\n    /* border: 1px solid white; */\r\n    text-align: center;\r\n    cursor: move;\r\n    text-transform: uppercase;\r\n    background-color: rgba(170,170,170,0.1);\r\n    -webkit-box-shadow: 0 4px 8px 5px rgba(0,0,0, 0.6), 0 6px 9px 0 rgba(0,0,0,0.7);\r\n            box-shadow: 0 4px 8px 5px rgba(0,0,0, 0.6), 0 6px 9px 0 rgba(0,0,0,0.7);\r\n    color: white;\r\n}\r\n\r\nh1,h2,h3,h4,h5{\r\n    font-family: 'Rajdhani', sans-serif;\r\n    margin: auto;\r\n}\r\n\r\n.model-image{\r\n    width: 100%;\r\n}\r\n\r\n.dragged{\r\n    -webkit-filter: grayscale(1);\r\n    filter: grayscale(100%);\r\n    cursor: not-allowed !important;\r\n}\r\n\r\n.dragged>.model-container>.model-title>h3{\r\n    color: rgb(184, 184, 184);\r\n    cursor: not-allowed !important;\r\n}\r\n\r\n.dragged>.model-container>.model-title>{\r\n    cursor: not-allowed !important;\r\n}\r\n\r\n.dragged>.model-container{\r\n    border: 1px solid #fcbd2b;\r\n    -webkit-filter: brightness(10%);\r\n            filter: brightness(10%);\r\n}\r\n\r\n.dragged>.model-container>.model-image>img{\r\n    cursor: not-allowed !important;\r\n}\r\n\r\n.model-image>img{\r\n    max-height:100%; \r\n    max-width:100%;\r\n    cursor: move !important;\r\n}\r\n\r\n.dropable-container{\r\n    border: 2px solid rgb(93, 93, 93);\r\n    text-align: center;\r\n    border-style: dashed;\r\n    color: white;\r\n    border: 1px solid #cb9f3d;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.drop-text{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.model-image-dropped{\r\n    width: 100%;\r\n}\r\n\r\n.model-image-dropped>img{\r\n    max-height:100%; \r\n    max-width:100%;\r\n}\r\n\r\n.model-container-dropped{\r\n    text-align: center;\r\n    cursor:default;\r\n}\r\n\r\n.fa{\r\n    cursor:pointer;\r\n}\r\n\r\n.model-container.dragged{\r\n    cursor:not-allowed;\r\n}\r\n\r\n.top-bufferM {\r\n    margin-top: 80px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .dropable-container {\r\n      visibility: hidden;\r\n    }\r\n  }\r\n"

/***/ }),

/***/ "./src/app/comparative_chart/car-selector/car-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row top-buffer\">\r\n    <div class=\"col-sm-12\">\r\n      <div *ngFor=\"let model of models; let i = index\">\r\n          <div class=\"col-sm-4\" dnd-draggable [dragEnabled]=\"isDraggable(model.name)\" \r\n          [dragData]=\"{name: model.name, image:model.image}\"\r\n          [class.dragged]=\"model.name == firstCarName || model.name == secondCarName\">\r\n            <div class=\"cont model-container\" \r\n            dnd-draggable [dragEnabled]=\"isDraggable(model.name)\">\r\n              <div class=\"model-title\" \r\n              dnd-draggable [dragEnabled]=\"isDraggable(model.name)\">\r\n                  <h3 dnd-draggable [dragEnabled]=\"isDraggable(model.name)\">{{model.name}}</h3>\r\n              </div>\r\n              <div class=\"model-image\" \r\n              dnd-draggable [dragEnabled]=\"isDraggable(model.name)\">\r\n                  <img src=\"{{model.image}}\" alt=\"\" \r\n                  dnd-draggable [dragEnabled]=\"isDraggable(model.name)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n      <div class=\"container-fluid\">\r\n\r\n      \r\n      <div class=\"row top-buffer-m\">\r\n      <div class=\"col-sm-3\">\r\n          <div dnd-droppable class=\"cont dropable-container\" (onDropSuccess)=\"dropedFirst($event)\" >\r\n              <div class=\"dropable-body\">\r\n                <h3 [hidden]=\"firstIsDropped\" class=\"drop-text\">Drag and drop</h3>\r\n                  <div *ngIf=\"validateDrop('1')\">\r\n                      <div class=\"model-container-dropped\">\r\n                          <div class=\"model-title\">\r\n                              <h3>{{firstData.dragData.name}} \r\n                                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deleteFirstData()\"></i>\r\n                                </h3>\r\n                          </div>\r\n                          <div class=\"model-image-dropped\">\r\n                              <img src=\"{{firstData.dragData.image}}\" alt=\"\">\r\n                          </div>\r\n                        </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <app-comparative-details [cars]=\"cars\"></app-comparative-details>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n          <div dnd-droppable class=\"cont dropable-container\" (onDropSuccess)=\"dropedSecond($event)\">\r\n              <div class=\"dropable-body\">\r\n                  <h3 [hidden]=\"secondIsDropped\" class=\"drop-text\">Drag and drop</h3>\r\n                    <div *ngIf=\"validateDrop('2')\">\r\n                        <div class=\"model-container-dropped\">\r\n                            <div class=\"model-title\">\r\n                                <h3>{{secondData.dragData.name}} \r\n                                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deleteSecondData()\"></i>\r\n                                </h3>\r\n                            </div>\r\n                            <div class=\"model-image-dropped\">\r\n                                <img src=\"{{secondData.dragData.image}}\" alt=\"\">\r\n                            </div>\r\n                          </div>\r\n                    </div>\r\n                </div>\r\n          </div>\r\n      </div>\r\n    </div>  \r\n</div>  \r\n\r\n"

/***/ }),

/***/ "./src/app/comparative_chart/car-selector/car-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarSelectorComponent = /** @class */ (function () {
    function CarSelectorComponent(carData, el) {
        this.carData = carData;
        this.el = el;
        this.firstIsDropped = false;
        this.secondIsDropped = false;
        this.firstCarName = null;
        this.secondCarName = null;
        this.cars = {};
    }
    CarSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carData.getModels().subscribe(function (res) {
            _this.models = res;
        });
    };
    CarSelectorComponent.prototype.ngAfterViewChecked = function () {
        this.matchHeight();
    };
    CarSelectorComponent.prototype.onResize = function () {
        console.log("Resize-...........");
        this.matchHeight();
    };
    CarSelectorComponent.prototype.areComparable = function () {
        this.cars = {
            option1: this.firstCarName,
            option2: this.secondCarName
        };
    };
    CarSelectorComponent.prototype.dropedFirst = function ($event) {
        this.firstData = $event;
        if (this.firstData.dragData) {
            this.firstIsDropped = true;
            this.firstCarName = this.firstData.dragData.name;
            this.areComparable();
        }
    };
    CarSelectorComponent.prototype.dropedSecond = function ($event) {
        this.secondData = $event;
        if (this.secondData.dragData) {
            this.secondIsDropped = true;
            this.secondCarName = this.secondData.dragData.name;
            this.areComparable();
        }
    };
    CarSelectorComponent.prototype.deleteFirstData = function () {
        this.firstIsDropped = false;
        this.firstData = null;
        this.firstCarName = null;
        this.areComparable();
    };
    CarSelectorComponent.prototype.deleteSecondData = function () {
        this.secondIsDropped = false;
        this.secondData = null;
        this.secondCarName = null;
        this.areComparable();
    };
    CarSelectorComponent.prototype.isDraggable = function (name) {
        if (name == this.firstCarName || name == this.secondCarName) {
            return false;
        }
        else {
            return true;
        }
    };
    CarSelectorComponent.prototype.validateDrop = function (dropZone) {
        var show = false;
        switch (dropZone) {
            case "1":
                if (this.firstIsDropped && this.firstData) {
                    show = true;
                }
                else {
                    show = false;
                }
                break;
            case "2":
                if (this.secondIsDropped && this.secondData) {
                    show = true;
                }
                else {
                    show = false;
                }
                break;
        }
        return show;
    };
    CarSelectorComponent.prototype.matchHeight = function () {
        var children = document.getElementsByClassName("cont");
        if (!children)
            return;
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarSelectorComponent.prototype, "onResize", null);
    CarSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-car-selector',
            template: __webpack_require__("./src/app/comparative_chart/car-selector/car-selector.component.html"),
            styles: [__webpack_require__("./src/app/comparative_chart/car-selector/car-selector.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CarSelectorComponent);
    return CarSelectorComponent;
}());



/***/ }),

/***/ "./src/app/comparative_chart/comparative-details/comparative-details.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\nth{\r\n\ttext-align: center;\r\n}\r\n\r\ntr{\r\n\t/* background-color: rgba(34, 34, 34, 0.6); */\r\n\tbackground-color: rgb(70, 70, 70, 0.2);\r\n    color: white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n}\r\n\r\ntd{\r\n\tfont-size: 15px;\r\n\tpadding-bottom: 15px;\r\n    padding-top: 15px;\r\n}\r\n\r\n.left-col{\r\n\ttext-align: center;\r\n}\r\n\r\n.center-col{\r\n\ttext-align: center;\r\n\tbackground-color: rgb(70, 70, 70, 0.2);\r\n\tcolor:#cb9f3d;\r\n}\r\n\r\n.right-col{\r\n\ttext-align: center;\r\n}\r\n\r\n.table-row{\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.feature-table{\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 0px 5px;\r\n\ttext-transform: uppercase;\r\n\tmargin-bottom: 10%;\r\n}\r\n\r\n.performance-star{\r\n\tdisplay: inline;\r\n\tcolor: #cb9f3d;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/comparative_chart/comparative-details/comparative-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"car1 || car2\">\r\n    <table class=\"feature-table\">\r\n        <tr>\r\n            <th class=\"col-xs-2\">\r\n                <div *ngIf=\"car1\">\r\n                    <h3>{{car1.name}}</h3>\r\n                </div>\r\n            </th>\r\n            <th class=\"col-xs-2\">\r\n                <h3 style=\"text-align:center; color: #cb9f3d\">VS</h3>\r\n            </th>\r\n            <th class=\"col-xs-2\">\r\n                <div *ngIf=\"car2\">\r\n                    <h3>{{car2.name}}</h3>\r\n                </div>\r\n            </th>\r\n        </tr>\r\n        <tr class=\"table-row\">\r\n            <td class=\"left-col\">\r\n                <div *ngIf=\"car1\">\r\n                    <p>{{car1.inside.name}}</p>\r\n                </div>\r\n            </td>\r\n            <td class=\"center-col\">\r\n                <div>INSIDE</div>\r\n            </td>\r\n            <td class=\"right-col\">\r\n                <div *ngIf=\"car2\">\r\n                    <p>{{car2.inside.name}}</p>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr class=\"table-row\">\r\n            <td class=\"left-col\">\r\n                <div *ngIf=\"car1\">\r\n                    <p>{{car1.rims.name}}</p>\r\n                </div>\r\n            </td>\r\n            <td class=\"center-col\">\r\n                <div>RIMS</div>\r\n            </td>\r\n            <td class=\"right-col\">\r\n                <div *ngIf=\"car2\">\r\n                    <p>{{car2.rims.name}}</p>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr class=\"table-row\">\r\n            <td class=\"left-col\">\r\n                <div *ngIf=\"car1\">\r\n                    <p>{{car1.motor.name}}</p>\r\n                </div>\r\n            </td>\r\n            <td class=\"center-col\">\r\n                <div>MOTOR</div>\r\n            </td>\r\n            <td class=\"right-col\">\r\n                <div *ngIf=\"car2\">\r\n                    <p>{{car2.motor.name}}</p>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr class=\"table-row\">\r\n            <td class=\"left-col\">\r\n                <div *ngIf=\"car1\">\r\n                    <p>{{car1.motor.acceleration}}</p>\r\n                </div>\r\n            </td>\r\n            <td class=\"center-col\">\r\n                <div>ACCELERATION</div>\r\n            </td>\r\n            <td class=\"right-col\">\r\n                <div *ngIf=\"car2\">\r\n                    <p>{{car2.motor.acceleration}}</p>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr class=\"table-row\">\r\n            <td class=\"left-col\">\r\n                <div *ngIf=\"car1\">\r\n                    <p>{{car1.motor.horsepower}}</p>\r\n                </div>\r\n            </td>\r\n            <td class=\"center-col\">\r\n                <div>HORSEPOWER</div>\r\n            </td>\r\n            <td class=\"right-col\">\r\n                <div *ngIf=\"car2\">\r\n                    <p>{{car2.motor.horsepower}}</p>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr class=\"table-row\">\r\n            <td class=\"left-col\">\r\n                <div *ngIf=\"car1\">\r\n                    <div *ngFor=\"let star of car1.stars\" class=\"performance-star\">\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n            <td class=\"center-col\">\r\n                <div>PERFORMANCE</div>\r\n            </td>\r\n            <td class=\"right-col\">\r\n                <div *ngIf=\"car2\">\r\n                    <div *ngFor=\"let star of car2.stars\" class=\"performance-star\">\r\n                        <span class=\"glyphicon glyphicon-star performance-star\"></span>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/comparative_chart/comparative-details/comparative-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparativeDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComparativeDetailsComponent = /** @class */ (function () {
    function ComparativeDetailsComponent(carData) {
        this.carData = carData;
        this.car1 = {};
        this.car2 = {};
    }
    ComparativeDetailsComponent.prototype.ngOnInit = function () {
    };
    ComparativeDetailsComponent.prototype.ngOnChanges = function () {
        this.getComparedCarsDetails();
    };
    ComparativeDetailsComponent.prototype.getComparedCarsDetails = function () {
        var _this = this;
        console.log("Cars:", this.cars);
        if (this.cars.option1) {
            this.carData.getModel(this.cars.option1).subscribe(function (res) { return _this.car1 = res; });
        }
        else {
            this.car1 = null;
        }
        if (this.cars.option2) {
            this.carData.getModel(this.cars.option2).subscribe(function (res) { return _this.car2 = res; });
        }
        else {
            this.car2 = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ComparativeDetailsComponent.prototype, "cars", void 0);
    ComparativeDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comparative-details',
            template: __webpack_require__("./src/app/comparative_chart/comparative-details/comparative-details.component.html"),
            styles: [__webpack_require__("./src/app/comparative_chart/comparative-details/comparative-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */]])
    ], ComparativeDetailsComponent);
    return ComparativeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/comparative_chart/comparative-view/comparative-view.component.css":
/***/ (function(module, exports) {

module.exports = "a:hover, a:focus { color: #888; text-decoration: none; }\r\n\r\nstrong { font-weight: bold; }\r\n\r\nimg { max-width: 100%; }\r\n\r\nh1, h2 { line-height: 40px; }\r\n\r\nh3, h4 { line-height: 20px; }\r\n\r\n::-moz-selection {    background: #fcbd2b; color: #fff; text-shadow: none; }\r\n\r\n::selection {     background: #fcbd2b; color: #fff; text-shadow: none; }\r\n\r\n#navbar {\r\n    background: rgba(0,0,0,0.55);\r\n    border-bottom: 1px solid rgb(203,159,61);\r\n}\r\n\r\n.page-title-container {\r\n    margin: 0 auto;\r\n    padding: 30px 0 35px 0;\r\n    text-align: left;\r\n    -webkit-box-shadow: 0 5px 15px 0 rgba(0,0,0,.05) inset, 0 -5px 15px 0 rgba(0,0,0,.05) inset;\r\n    box-shadow: 0 5px 15px 0 rgba(0,0,0,.05) inset, 0 -5px 15px 0 rgba(0,0,0,.05) inset;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-title-container h1 {\r\n    display: inline;\r\n    margin-left: 10px;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 30px;\r\n    color: #5d5d5d;\r\n    font-weight: bold;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, .7);\r\n    vertical-align: middle;\r\n    color: white;\r\n}\r\n\r\n.page-title-container p {\r\n    display: inline;\r\n    font-family: 'Rajdhani', 'sans-serif';\r\n    margin-left: 5px;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    vertical-align: middle;\r\n    color: rgba(203,159,61,0.6);\r\n}\r\n\r\n.page-title-container i {\r\n    font-size: 46px;\r\n    vertical-align: middle;\r\n    color: rgba(203,159,61,0.9);\r\n}"

/***/ }),

/***/ "./src/app/comparative_chart/comparative-view/comparative-view.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Open+Sans:400italic,400\">\r\n<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Droid+Sans\">\r\n<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Lobster\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<app-nav-bar id=\"navbar\"></app-nav-bar>\r\n<!--Page title -->\r\n<div class=\"page-title-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 wow fadeIn\">\r\n        <i class=\"fa fa-cogs\"></i>\r\n        <h1>Comparator /</h1>\r\n        <p>Here you can compare our cars</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isTouch\">\r\n  <app-car-selector></app-car-selector>\r\n</div>\r\n\r\n<div *ngIf=\"isTouch\">\r\n  <app-car-selector-touch></app-car-selector-touch>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/comparative_chart/comparative-view/comparative-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparativeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComparativeViewComponent = /** @class */ (function () {
    function ComparativeViewComponent() {
        this.isTouch = false;
    }
    ComparativeViewComponent.prototype.ngOnInit = function () {
        this.changeNavStyle();
        this.isDraggable();
    };
    ComparativeViewComponent.prototype.onResize = function () {
        this.isDraggable();
    };
    ComparativeViewComponent.prototype.changeNavStyle = function () {
        document.getElementById("navbar").style.background = "#222";
        document.getElementById("navLink").style.color = "#fff";
        document.getElementById("navLink2").style.color = "#fff";
        document.getElementById("navLink3").style.color = "#fff";
    };
    ComparativeViewComponent.prototype.isDraggable = function () {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 1024) {
            this.isTouch = true;
        }
        else {
            this.isTouch = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComparativeViewComponent.prototype, "onResize", null);
    ComparativeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comparative-view',
            template: __webpack_require__("./src/app/comparative_chart/comparative-view/comparative-view.component.html"),
            styles: [__webpack_require__("./src/app/comparative_chart/comparative-view/comparative-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComparativeViewComponent);
    return ComparativeViewComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n    background: rgba(0,0,0,0.55);\r\n    border-bottom: 1px solid rgb(203,159,61);\r\n}\r\n\r\na:hover, a:focus { color: rgb(34,34,34); text-decoration: none; }\r\n\r\nstrong { font-weight: bold; }\r\n\r\nimg { max-width: 100%; }\r\n\r\nh1, h2 { line-height: 40px; }\r\n\r\nh3, h4 { line-height: 20px; }\r\n\r\n::-moz-selection {    background: #fcbd2b; color: #fff; text-shadow: none; }\r\n\r\n::selection {     background: #fcbd2b; color: #fff; text-shadow: none; }\r\n\r\n* {\r\n    color: white;\r\n}\r\n\r\n.page-title-container {\r\n    margin: 0 auto;\r\n    padding: 30px 0 35px 0;\r\n    text-align: left;\r\n    -webkit-box-shadow: 0 5px 15px 0 rgba(0,0,0,.05) inset, 0 -5px 15px 0 rgba(0,0,0,.05) inset;\r\n    box-shadow: 0 5px 15px 0 rgba(0,0,0,.05) inset, 0 -5px 15px 0 rgba(0,0,0,.05) inset;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-title-container h1 {\r\n    display: inline;\r\n    margin-left: 10px;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 30px;\r\n    color: white;\r\n    font-weight: bold;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, .7);\r\n    vertical-align: middle;\r\n}\r\n\r\n.page-title-container p {\r\n    display: inline;\r\n    font-family: 'Rajdhani', 'sans-serif';\r\n    margin-left: 5px;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    vertical-align: middle;\r\n    color: white;\r\n}\r\n\r\n.page-title-container i {\r\n    font-size: 46px;\r\n    color: rgba(203,159,61,0.9);\r\n    vertical-align: middle;\r\n}\r\n\r\ninput {\r\n    color: white;\r\n}\r\n\r\n/* Contact Form */\r\n\r\n.contact-us-container {\r\n    margin-top: 20px;\r\n    padding-bottom: 50px;\r\n    text-align: left;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    color: rgb(34,34,34);\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.contact-us-container h3 {\r\n    margin-top: 25px;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 18px;\r\n    color: white;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.contact-us-container p {\r\n    line-height: 28px;\r\n    font-size: 17px;\r\n}\r\n\r\n.contact-form {\r\n    padding-top: 25px;\r\n    padding-bottom: 30px;\r\n    color: white;\r\n}\r\n\r\n.contact-form form {\r\n    margin-top: 25px;\r\n}\r\n\r\n.contact-form form .form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.contact-form input[type=\"text\"] { width: 95%; height: 34px;    color: white; }\r\n\r\n.contact-form textarea { width: 95%; height: 170px; padding-top: 6px; padding-bottom: 6px;    color: white; }\r\n\r\n.contact-form label { font-size: 20px; font-weight: 400; }\r\n\r\n.contact-form label .error-label { font-style: italic }\r\n\r\n.contact-form button { margin-top: 5px; padding: 0 45px; }\r\n\r\ninput[type=\"text\"], \r\ntextarea {\r\n    margin: 0;\r\n    padding: 0 6px;\r\n    vertical-align: middle;\r\n    background: rgba(0,0,0,0.5);\r\n    color: white;\r\n    border: 1px solid rgb(34,34,34);\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    color: rgb(34,34,34);\r\n    font-style: italic; border-radius: 0; -webkit-box-shadow: none; box-shadow: none; -webkit-transition: all .3s; transition: all .3s;\r\n}\r\n\r\ninput[type=\"text\"]:focus, \r\ntextarea:focus {\r\n\toutline: 0;\r\n    border: 1px solid#fcbd2b; -webkit-box-shadow: none; box-shadow: none;\r\n}\r\n\r\ninput[type=\"text\"]:-moz-placeholder, textarea:-moz-placeholder { color: #ccc; }\r\n\r\ninput[type=\"text\"]:-ms-input-placeholder, textarea:-ms-input-placeholder { color: #ccc; }\r\n\r\ninput[type=\"text\"]::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: #ccc; }\r\n\r\nbutton.btn {\r\n    \r\n\theight: 30px;\r\n    margin: 0;\r\n    padding: 0 20px;\r\n    vertical-align: middle;\r\n    background: #9d426b;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 30px;\r\n    text-shadow: none;\r\n    -webkit-box-shadow: 0 1px 25px 0 rgba(0,0,0,.05) inset, 0 -1px 25px 0 rgba(0,0,0,.05) inset;\r\n    box-shadow: 0 1px 25px 0 rgba(0,0,0,.05) inset, 0 -1px 25px 0 rgba(0,0,0,.05) inset; -webkit-transition: all .3s; transition: all .3s;\r\n}\r\n\r\ninput.btn{\r\n    border: 1px solid white;\r\n    color: white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 20px;\r\n    background-color: rgba(203,159,61,0.95);\r\n    \r\n}\r\n\r\ninput.btn:active {\r\noutline: none;\r\n    /* -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; */\r\n}\r\n\r\ninput.btn:hover {\r\n\tbackground: white;\r\n    border: 1px solid #fcbd2b;\r\n    color: #fcbd2b;\r\n    /* -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; */\r\n}\r\n\r\nbutton.btn:hover {\r\n\tbackground: white;\r\n    border: 1px solid #fcbd2b;\r\n    color: #fcbd2b;\r\n    /* -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; */\r\n}\r\n\r\nbutton.btn:active {\r\n\toutline: 0;\r\n    background: rgb(34,34,34);\r\n    border: 0;\r\n    color: #fff;\r\n    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.15) inset, 0 -1px 25px 0 rgba(0,0,0,.05) inset;\r\n    box-shadow: 0 5px 10px 0 rgba(0,0,0,.15) inset, 0 -1px 25px 0 rgba(0,0,0,.05) inset;\r\n}\r\n\r\nbutton.btn:focus {\r\n\toutline: 0;\r\n    background: rgb(34,34,34);\r\n    border: 0;\r\n    color: #fff;\r\n}\r\n\r\n.btn:active:focus, .btn.active:focus {\r\n\toutline: 0;\r\n    background: rgb(34,34,34);\r\n    border: 0;\r\n    color: #fff;\r\n}\r\n\r\n/***** Google map *****/\r\n\r\n.contact-address {\r\n    padding-bottom: 15px;\r\n    background-color: rgba(170,170,170,0.1);\r\n    -webkit-box-shadow: 0 4px 8px 5px rgba(0,0,0, 0.6), 0 6px 9px 0 rgba(0,0,0,0.7);\r\n            box-shadow: 0 4px 8px 5px rgba(0,0,0, 0.6), 0 6px 9px 0 rgba(0,0,0,0.7);\r\n}\r\n\r\n.contact-address .map {\r\n    margin: 20px 0 40px 0;\r\n    height: 300px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\ni.fa.fa-facebook, i.fa.fa-twitter, i.fa.fa-instagram{\r\n    border-radius: 100%;\r\n    font-size: 28px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    margin: 5px;\r\n    text-align: center;\r\n    width: 40px;\r\n    }\r\n\r\ni.fa.fa-facebook{\r\n    border: 1px solid white;\r\n    color: white;\r\n    }\r\n\r\ni.fa.fa-twitter{\r\n        border: 1px solid white;\r\n        color: white;\r\n    }\r\n\r\ni.fa.fa-instagram{\r\n        border: 1px solid white;\r\n        color: white;\r\n    }\r\n\r\ni.fa.fa-facebook, i.fa.fa-twitter, i.fa.fa-instagram,i.fa.fa-pinterest,i.fa.fa-linkedin,i.fa.fa-google-plus,i.fa.fa-github{\r\n    border-radius: 100%;\r\n    font-size: 28px;\r\n    height: 38px;\r\n    line-height: 40px;\r\n    margin: 5px;\r\n    text-align: center;\r\n    width: 38px;\r\n    }\r\n\r\ni.fa.fa-github{\r\n        border: 1px solid white;\r\n        color: white;\r\n    }\r\n\r\ni.fa.fa-google-plus{\r\n        border: 1px solid white;\r\n        color: white;\r\n    }\r\n\r\ni.fa.fa-pinterest{\r\n        border: 1px solid white;\r\n        color: white;\r\n    }\r\n\r\ni.fa.fa-linkedin{\r\n        border: 1px solid white;\r\n        color: white;\r\n    }\r\n\r\n.social-icons .fa:hover, .social-icons .fa:active {\r\n       color:#fcbd2b;\r\n       -webkit-box-shadow: 1px 1px 3px rgb(34,34,34);\r\n       box-shadow: 1px 1px 3px rgb(34,34,34); \r\n   }\r\n\r\n.social-icons.icon-zoom .fa:hover, .social-icons.icon-zoom .fa:active { \r\n        -webkit-transform: scale(1.1);\r\n       transform: scale(1.1); \r\n   }\r\n\r\n.list-unstyled {\r\n       padding-left: 0;\r\n       list-style: none;\r\n   }\r\n\r\n.list-inline li {\r\n       display: inline-block;\r\n       padding-right: 0.5px;\r\n       padding-left: 0px;\r\n       margin-bottom: -90px;\r\n   }\r\n\r\n.copyright {\r\n       padding: 0px;\r\n       text-align: center;\r\n   }\r\n\r\n.row a:hover{\r\n     color:#787878;\r\n     text-decoration:none\r\n   }\r\n\r\n.row a:active{\r\n     \r\n     color:rgb(34,34,34);\r\n     text-decoration:none\r\n   }\r\n\r\nagm-map {\r\n    height: 300px;\r\n  }\r\n\r\n.alert-message>p{\r\n      font-size: 22px;\r\n  }\r\n\r\n.alert-message{\r\n      cursor: pointer;\r\n  }\r\n\r\n.incorrect{\r\n      border: 2px solid rgba(203, 159, 61) !important;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Open+Sans:400italic,400\">\r\n<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Droid+Sans\">\r\n<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Lobster\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<app-nav-bar id=\"navbar\"></app-nav-bar>\r\n<!--Page title -->\r\n<div class=\"page-title-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 wow fadeIn\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n        <h1>Contact Us /</h1>\r\n        <p>Here is how you can contact us</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Contact Form -->\r\n<div class=\"contact-us-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-7 contact-form\">\r\n        <form >\r\n          <div class=\"form-group\">\r\n            <label for=\"contact-name\">Name</label>\r\n            <input type=\"text\" name=\"name\" placeholder=\"Enter your name...\" \r\n            class=\"contact-name\" id=\"contact-name\" [(ngModel)]=\"message.name\"\r\n            [class.incorrect]=\"nameIsIncorrect\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"contact-email\">Email</label>\r\n            <input type=\"text\" name=\"email\" placeholder=\"Enter your email...\" \r\n            class=\"contact-email\" id=\"contact-email\" [(ngModel)]=\"message.email\"\r\n            [class.incorrect]=\"emailIsIncorrect\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"contact-message\">Message</label>\r\n            <textarea name=\"message\" placeholder=\"Your message...\" \r\n            class=\"contact-message\" id=\"contact-message\" [(ngModel)]=\"message.body\"\r\n            [class.incorrect]=\"messageIsIncorrect\"></textarea>\r\n          </div>\r\n          <input type=\"submit\" class=\"btn\" (click)=\"sendMessage()\" value=\"Send\">\r\n        </form>\r\n        <div *ngIf=\"showMessage\">\r\n          <div class=\"alert-message top-buffer\" (click)=\"hideAlert()\">\r\n            <p>{{alert}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-5 contact-address\">\r\n        <h3>We Are Here</h3>\r\n        <div class=\"map\">\r\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n          </agm-map>\r\n        </div>\r\n        <div class=\"col-sm-7\">\r\n          <h3>Social Media</h3>\r\n         \r\n          <ul class=\"social-icons icon-circle icon-zoom list-unstyled list-inline\"> \r\n            <li><a href=\"https://www.facebook.com/Corvo-Cars-178109046180834/\"><i class=\"fa fa-facebook\"></i></a> </li> \r\n            <li><a href=\"https://twitter.com/Corvus_imperio\"><i class=\"fa fa-twitter\"></i></a> </li>   \r\n            <li> <a href=\"https://www.instagram.com/corvo_cars/\"><i class=\"fa fa-instagram\"></i></a> </li> \r\n          </ul>\r\n\r\n        </div>\r\n        <div class=\"col-sm-5\">\r\n          <h3>Phone Number</h3>\r\n          <p>+506 84538943</p>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.lat = 10.04261876;
        this.lng = -84.30005225;
        this.message = {
            name: "",
            email: "",
            body: ""
        };
        this.nameIsIncorrect = false;
        this.emailIsIncorrect = false;
        this.messageIsIncorrect = false;
        this.showMessage = false;
        this.alert = "";
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.changeNavStyle();
    };
    ContactComponent.prototype.sendMessage = function () {
        this.nameValidator();
        this.emailValidator();
        this.messageValidator();
        if (!this.nameIsIncorrect &&
            !this.emailIsIncorrect &&
            !this.messageIsIncorrect) {
            this.alert = "Thank you for contacting us!";
            this.http.post('/contact_email/', this.message).subscribe(function (res) { });
            this.showMessage = true;
        }
    };
    ContactComponent.prototype.hideAlert = function () {
        this.showMessage = false;
    };
    ContactComponent.prototype.emailValidator = function () {
        var emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
        var valid = true;
        this.emailIsIncorrect = false;
        if (this.message.email.length === 0) {
            this.alert = "You need to fill all the information";
            this.showMessage = true;
            this.emailIsIncorrect = true;
            valid = false;
        }
        else if (!emailPattern.test(this.message.email)) {
            this.alert = "E-mail format is incorrect";
            this.showMessage = true;
            this.emailIsIncorrect = true;
            valid = false;
        }
    };
    ContactComponent.prototype.nameValidator = function () {
        var valid = true;
        var namePattern = new RegExp("^[a-zA-Z ]+$");
        this.nameIsIncorrect = false;
        if (this.message.name.length === 0) {
            this.alert = "You need to fill all the information";
            this.showMessage = true;
            this.nameIsIncorrect = true;
            valid = false;
        }
        else if (!namePattern.test(this.message.name)) {
            this.alert = "Name must contain only letters";
            this.showMessage = true;
            this.nameIsIncorrect = true;
            valid = false;
        }
    };
    ContactComponent.prototype.messageValidator = function () {
        var valid = true;
        this.messageIsIncorrect = false;
        if (this.message.body.length === 0) {
            this.alert = "You need to fill all the information";
            this.showMessage = true;
            this.messageIsIncorrect = true;
            valid = false;
        }
    };
    ContactComponent.prototype.changeNavStyle = function () {
        document.getElementById("navbar").style.background = "#222";
        document.getElementById("navLink").style.color = "#fff";
        document.getElementById("navLink2").style.color = "#fff";
        document.getElementById("navLink3").style.color = "#fff";
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nfooter{\r\n    /* background: #37474F; */\r\n    color: white;\r\n    /* background-image: url(\"https://www.lamborghini.com/themes/custom/lambo/img/base/bg-footer.jpg\");\r\n    background-size: 100%; */\r\n    /* background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.1),rgba(203,159,61,0.3),#cb9f3d); */\r\n    border-top: 1px solid #cb9f3d;\r\n    background: -webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,0.5)),color-stop(rgba(0,0,0,0.8)),to(black));\r\n    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8),black);\r\n    }\r\n\r\n    .top-buffer {\r\n        margin-top: 0px;\r\n    }\r\n\r\n    a{\r\n       \r\n     color:white;\r\n     text-decoration:none\r\n    \r\n    }\r\n\r\n    hr{\r\n      display: block;\r\n        height: 1px;\r\n        border: 0;\r\n        border-top: 1px solid #ccc;\r\n        margin: 1em 0;\r\n        padding: 0; \r\n    }\r\n\r\n    i.fa.fa-facebook, i.fa.fa-twitter, i.fa.fa-instagram{\r\n     border-radius: 100%;\r\n     font-size: 28px;\r\n     height: 40px;\r\n     line-height: 40px;\r\n     margin: 5px;\r\n     text-align: center;\r\n     width: 40px;\r\n     }\r\n\r\n    i.fa.fa-facebook{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n\r\n    i.fa.fa-twitter{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n\r\n    i.fa.fa-instagram{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n\r\n    i.fa.fa-facebook, i.fa.fa-twitter, i.fa.fa-instagram,i.fa.fa-pinterest,i.fa.fa-linkedin,i.fa.fa-google-plus,i.fa.fa-github{\r\n     border-radius: 100%;\r\n     font-size: 28px;\r\n     height: 38px;\r\n     line-height: 40px;\r\n     margin: 5px;\r\n     text-align: center;\r\n     width: 38px;\r\n     }\r\n\r\n    i.fa.fa-github{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n\r\n    i.fa.fa-google-plus{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n\r\n    i.fa.fa-pinterest{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n\r\n    i.fa.fa-linkedin{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n\r\n    .social-icons .fa:hover, .social-icons .fa:active {\r\n        color: #FFF;\r\n        -webkit-box-shadow: 1px 1px 3px #333;\r\n        box-shadow: 1px 1px 3px #333; \r\n    }\r\n\r\n    .social-icons.icon-zoom .fa:hover, .social-icons.icon-zoom .fa:active { \r\n         -webkit-transform: scale(1.1);\r\n        transform: scale(1.1); \r\n    }\r\n\r\n    .list-unstyled {\r\n        padding-left: 0;\r\n        list-style: none;\r\n    }\r\n\r\n    .list-inline li {\r\n        display: inline-block;\r\n        padding-right: 0.5px;\r\n        padding-left: 0px;\r\n        margin-bottom: -90px;\r\n    }\r\n\r\n    .copyright {\r\n        padding: 0px;\r\n        text-align: center;\r\n    }\r\n\r\n    .row a:hover{\r\n      color:#787878;\r\n      text-decoration:none\r\n    }\r\n\r\n    .row a:active{\r\n      \r\n      color:#FFFFFF;\r\n      text-decoration:none\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Footer-->\r\n\r\n<footer class=\"page-footer mdb-color center-on-small-only top-buffer\">\r\n\r\n  <!--Footer Links-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"row\"><br><br></div>\r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a> </h4></div>\r\n    <!--<hr style='margin-top:-1em'>-->\r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a></h4></div>\r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a></h4></div>  \r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a></h4></div> \r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a> </h4></div> \r\n    \r\n    </div>\r\n      <div  class=\"row\">\r\n          <!--First column-->\r\n             <div id=\"links1\" class=\"col-md-2 offset-md-4\">\r\n              <h5 class=\"title\">Models </h5>\r\n              <hr style='margin-top:1em'> \r\n              <p>Corvo Imperiale</p>\r\n              <p>Corvo Kubanyi</p>\r\n              <p>Corvo Imparatus</p>\r\n              <ul>\r\n                                    \r\n              </ul>\r\n          </div>\r\n\r\n      \r\n          <!--Third column-->\r\n          <div id=\"links2\" class=\"col-md-2 offset-md-1\">\r\n              <h5 class=\"title\">Navigation</h5>\r\n              <hr style='margin-top:1em'>\r\n              <p><a routerLink=\"\">Models</a></p>\r\n              <p><a  routerLink=\"/comparative_chart\">Compare cars</a></p>\r\n              <p> <a routerLink=\"/contact\">Contact</a></p>\r\n              <ul>\r\n\r\n              </ul>\r\n          </div>\r\n          \r\n          <!--Fourth column-->\r\n         <div id=\"links2\" class=\"col-md-5 offset-md-1\">\r\n      \r\n          <a class=\"twitter-timeline\" href=\"https://twitter.com/Corvus_imperio?ref_src=twsrc%5Etfw\" ata-width=\"800\"\r\n          data-height=\"200\">Tweets by Corvus_imperio</a>\r\n          <ng4-twitter-timeline hidden [dataSrc]=\"{sourceType: 'profile',screenName: 'Corvus_imperio'}\" [opts]=\"{tweetLimit: 2}\">Tweets by Corvus_imperio</ng4-twitter-timeline>\r\n          \r\n        </div>  \r\n      \r\n\r\n          <!--/.Fourth column-->\r\n\r\n      </div>\r\n  </div>\r\n  <!--/.Footer Links-->\r\n\r\n  <!--Call to action-->\r\n\r\n  <!--Social buttons-->\r\n  <div class=\"text-center mb-3\">\r\n     <div class=\"container-fluid\">\r\n    <ul class=\"social-icons icon-circle icon-zoom list-unstyled list-inline\"> \r\n      <li><a href=\"https://www.facebook.com/Corvo-Cars-178109046180834/\"><i class=\"fa fa-facebook\"></i></a> </li> \r\n      <li><a href=\"https://twitter.com/Corvus_imperio\"><i class=\"fa fa-twitter\"></i></a> </li>   \r\n      <li> <a href=\"https://www.instagram.com/corvo_cars/\"><i class=\"fa fa-instagram\"></i></a> </li> \r\n      \r\n    </ul>\r\n        ©2018 Copyright: <a class=\"copyright\" href=\"\"> CorvoCars \r\n         </a>\r\n\r\n      </div>\r\n  </div>\r\n</footer>\r\n<!--/.Footer-->\r\n      "

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_twitter_timeline_lib_index__ = __webpack_require__("./node_modules/ng4-twitter-timeline/lib/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(ng4TwitterTimelineService) {
        this.ng4TwitterTimelineService = ng4TwitterTimelineService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_twitter_timeline_lib_index__["c" /* Ng4TwitterTimelineService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #FFF;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.description{\r\n    text-align: center;\r\n    color: #FFF;\r\n    font-size: 3vw;\r\n    font-family: 'Rajdhani', sans-serif;\r\n}\r\n\r\n.featureCar{\r\n    text-align: center;\r\n    color: #FFF;\r\n    font-size: 8vw;\r\n    font-family: 'Rajdhani', sans-serif;\r\n}\r\n\r\nstrong { font-weight: 500; }\r\n\r\na, a:hover, a:focus {\r\n\tcolor: #cb9f3d; text-decoration: none; -webkit-transition: all .3s; transition: all .3s;\r\n}\r\n\r\nimg { max-width: 100%; }\r\n\r\n.colored { color: #cb9f3d; }\r\n\r\n::-moz-selection { background: #cb9f3d; color: #fff; text-shadow: none; }\r\n\r\n::selection { background: #cb9f3d; color: #fff; text-shadow: none; }\r\n\r\n/***** General style, all sections *****/\r\n\r\n.section-container { margin: 0 auto; padding-bottom: 80px; }\r\n\r\n.section-description { margin-top: 60px; padding-bottom: 10px; }\r\n\r\n.section-description p { margin-top: 20px; padding: 0 120px; }\r\n\r\n/***** Divider *****/\r\n\r\n.divider-1 { padding: 25px 0 15px 0; }\r\n\r\n.divider-1 .line { width: 160px; margin: 0 auto; border-bottom: 1px dashed #ccc; }\r\n\r\n.top-content-container { padding: 13%; }\r\n\r\n.top-content .text { padding-top: 60px; color: #fff; }\r\n\r\n.top-content .text h1 { color: #fff; }\r\n\r\n.top-content .description { margin: 1em 0; }\r\n\r\n.top-content .description a { color: #fff; border-bottom: 1px dotted #fff; }\r\n\r\n.top-content .description a:hover, .top-content .description a:focus { color: #fff; border: 0; }\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-content-container\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"featureCar\">\r\n          Corvo <span style=\"color:#cb9f3d\">IMPERIALE</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"description\">\r\n          <p>\r\n              We give <span style=\"color:#cb9f3d\">WINGS</span> to your <span style=\"color:#cb9f3d\">DREAMS</span>, now it's up to <span style=\"color:#cb9f3d\">YOU</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #888;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n\r\n\r\nstrong { font-weight: 500; }\r\n\r\n\r\na, a:hover, a:focus {\r\n\tcolor: #cb9f3d; text-decoration: none; -webkit-transition: all .3s; transition: all .3s;\r\n}\r\n\r\n\r\nh1, h2 { margin-top: 10px; font-family: 'Josefin Sans', sans-serif; font-size: 48px; font-weight: 300; color: #555; line-height: 56px; }\r\n\r\n\r\nh3 { font-family: 'Josefin Sans', sans-serif; font-size: 32px; font-weight: 300; color: #555; line-height: 40px; }\r\n\r\n\r\nimg { max-width: 100%; }\r\n\r\n\r\n.medium-paragraph { font-size: 18px; line-height: 34px; }\r\n\r\n\r\n.colored { color: #cb9f3d; }\r\n\r\n\r\n::-moz-selection { background: #cb9f3d; color: #fff; text-shadow: none; }\r\n\r\n\r\n::selection { background: #cb9f3d; color: #fff; text-shadow: none; }\r\n\r\n\r\n/***** General style, all sections *****/\r\n\r\n\r\n.section-container { margin: 0 auto; padding-bottom: 80px; }\r\n\r\n\r\n.section-description { margin-top: 60px; padding-bottom: 10px; }\r\n\r\n\r\n.section-description p { margin-top: 20px; padding: 0 120px; }\r\n\r\n\r\n/***** Divider *****/\r\n\r\n\r\n.divider-1 { padding: 25px 0 15px 0; }\r\n\r\n\r\n.divider-1 .line { width: 160px; margin: 0 auto; border-bottom: 1px dashed #ccc; }\r\n\r\n\r\n/* .top-content-container { padding: 350px 0 400px 0; } */\r\n\r\n\r\n.top-content .text { padding-top: 60px; color: #fff; }\r\n\r\n\r\n.top-content .text h1 { color: #fff; }\r\n\r\n\r\n.top-content .description { margin: 1em 0; }\r\n\r\n\r\n.top-content .description p { opacity: 0.8; }\r\n\r\n\r\n.top-content .description a { color: #fff; border-bottom: 1px dotted #fff; }\r\n\r\n\r\n.top-content .description a:hover, .top-content .description a:focus { color: #fff; border: 0; }\r\n\r\n\r\n.top-content{\r\n  \r\n    font-family: 'Roboto', sans-serif;\r\n    background-size: cover;\r\n    background-position: 50% 80%;\r\n\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n\r\n.videoContainer{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.video {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    vertical-align: baseline;}\r\n\r\n\r\n#videoDiv {width: 100%; height: 100%; position: relative;}\r\n\r\n\r\n#videoBlock {width: 100%; height: 100%;  display: -webkit-box;  display: -ms-flexbox;  display: flex;  -webkit-box-pack: center;  -ms-flex-pack: center;  justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}\r\n\r\n\r\n#videoMessage {width: 100%; height:100%; position: absolute; top: 0; left: 0;}\r\n\r\n\r\n#videoMessage *{ margin:0}\r\n\r\n\r\n#videoMessage {text-shadow: 2px 2px 2px #000000; color:white;z-index:99 }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"videoDiv\">\r\n    <div id=\"videoBlock\">\r\n        <div class=\"videoContainer\" [innerHTML]=\"getVideoTag()\">\r\n          \r\n        </div>\r\n\r\n        <div id=\"videoMessage\">\r\n            <div class=\"top-content\">\r\n                <app-nav-bar></app-nav-bar>\r\n                <span class=\"helper\"></span>\r\n                <app-header></app-header>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<app-models (modelChanged)='onModelChanged($event)'></app-models>\r\n<div [ngSwitch]=\"section\">\r\n    <div *ngSwitchCase=\"'builder'\">\r\n        <car-builder></car-builder>\r\n    </div>\r\n    <div *ngSwitchCase=\"'details'\">\r\n        <app-model-info [model]=\"selectedModelName\" (customize)=\"onCustomize()\"></app-model-info>\r\n    </div>\r\n    <div *ngSwitchDefault>\r\n        <app-model-info [model]=\"selectedModelName\" (customize)=\"onCustomize()\"></app-model-info>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.onModelChanged = function (modelName) {
        this.selectedModelName = modelName;
        this.section = 'details';
    };
    HomeComponent.prototype.onCustomize = function () {
        this.section = 'builder';
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getVideoTag = function () {
        return "<video autoplay loop muted width=\"100%\" height=\"100%\" >\n    <source src=\"../../assets/videos/imperiale.webm\" type=\"video/webm\" />\n  </video>";
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/model-info/model-info.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.modelName{\r\n    color: white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 10vw;\r\n    margin-left: 16vw;\r\n}\r\n\r\n.feature{\r\n    color: white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n}\r\n\r\n.iconsContainer{\r\n  margin-left: 40vw; \r\n}\r\n\r\n.imperiale-container{\r\n    background: url('imperiale_bg.206f5f75a8dfb00a67b9.jpeg') no-repeat center center;\r\n    font-family: 'Roboto', sans-serif;\r\n    \r\n   /* \r\n    background-position: 50% 80%;\r\n    padding: 350px 0 400px 0;*/\r\n    background-size: 100% 100%;\r\n    padding: 5%;\r\n    height: 57vw;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.kubanyi-container{\r\n    background: url('kubanyi_bg.68ceea179830ba9849f1.jpeg') no-repeat center center;\r\n    font-family: 'Roboto', sans-serif;\r\n    \r\n   /* \r\n    background-position: 50% 80%;\r\n    padding: 350px 0 400px 0;*/\r\n    background-size: 100% 100%;\r\n    padding: 5%;\r\n    height: 57vw;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.imparatus-container{\r\n    background: url('imparatus_bg.aca6e20e47dcca7ee780.jpeg') no-repeat center center;\r\n    font-family: 'Roboto', sans-serif;\r\n    \r\n   /* \r\n    background-position: 50% 80%;\r\n    padding: 350px 0 400px 0;*/\r\n    background-size: 100% 100%;\r\n    padding: 5%;\r\n    height: 57vw;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#air{\r\n    background: url('Airbags.24084a5dbaf20916f9d4.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#auto{\r\n    background: url('automatic.e14c2e89e55137e0fb97.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#rear{\r\n    background: url('rearview.3340c0355d6791c715bf.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#double{\r\n    background: url('doubleCab.2cd3d344cbc21fc3f878.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#manual{\r\n    background: url('manual.7af2fa90dce51ff4d315.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#warranty{\r\n    background: url('warranty.861b8388de3e4b2bcd6b.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#voice{\r\n    background: url('voice.a4a30a19c5dd984e8002.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n/* css button animation xdd */\r\n\r\na {\r\n    text-decoration: none;\r\n  \r\n  }\r\n\r\n.box {\r\n      font-size: 2vw;\r\n      font-family: 'Rajdhani', sans-serif;\r\n   margin-top: 2em;\r\n    position:relative;\r\n    vertical-align: middle;\r\n    color: #FFF;\r\n    display: inline-block;\r\n    background: linear-gradient(-45deg, rgba(255,255,255,.2) 60%, rgba(255,255,255,.05) 60%, rgba(255,255,255,.05) 80%, rgba(0,0,0,.1) 80%);\r\n\r\n    line-height: 60px;\r\n    text-align: center;\r\n    transition: 0.5s;\r\n    padding: 0.7em;\r\n    cursor: pointer;\r\n    border: 2px solid #FFF;\r\n    -webkit-transition:0.5s;\r\n  }\r\n\r\n.box:hover {\r\n    border: 2px solid rgba(0,160,80,0);\r\n    color: #FFF;\r\n    \r\n  }\r\n\r\n.box::before, .box::after {\r\n    width: 100%;\r\n    height:100%;\r\n    z-index: 3;\r\n    content:'';\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.foo::before {\r\n    border-bottom: 3px solid #cb9f3d;\r\n    border-left: 3px solid #cb9f3d;\r\n    -webkit-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n  }\r\n\r\n.foo::after {\r\n    border-top: 3px solid #cb9f3d;\r\n    border-right: 3px solid #cb9f3d;\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n\r\n.box:hover::after, .box:hover::before {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n.card-container {\r\n    text-transform: uppercase;\r\n    font-size: 2vw;\r\n    color: #FFF;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    height: 5vw;\r\n    -webkit-perspective: 600;\r\n            perspective: 600;\r\n    position: relative;\r\n    width: 5vw;\r\n  }\r\n\r\n.card {\r\n    height: 100%;\r\n    position: absolute;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-transition: all 1s ease-in-out;\r\n    transition: all 1s ease-in-out;\r\n    width: 100%;\r\n  }\r\n\r\n.card-container:hover{\r\n    width: 15vw;\r\n  }\r\n\r\n.card-container:hover .card {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n\r\n.card-container:hover .card .back {\r\n    visibility: visible;\r\n  }\r\n\r\n.card .side {\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n\r\n.card .back {\r\n    visibility: hidden;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    color: #cb9f3d;\r\n  }"

/***/ }),

/***/ "./src/app/model-info/model-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"model\">\r\n\r\n    <!-- Si vamos a cargar imagenes desde base de datos- esto se puede mejorar y quitar el switch de josue y la repeticion de css y codigo  -->\r\n    <div *ngSwitchCase=\"'Corvo Imperiale'\">\r\n        <div class=\"imperiale-container\">\r\n            <div class=\"modelName\">Corvo <span style=\"color:#cb9f3d\">{{modelName}}</span> </div>\r\n            <div class=\"iconsContainer\">\r\n                <div *ngFor=\"let feature of features; let i = index\">\r\n\r\n                    <div class=\"card-container\">\r\n                        <div class=\"card\">\r\n                            <div class=\"side\">\r\n                                <div class=\"icon\" id=\"{{getID(feature)}}\"></div>\r\n                            </div>\r\n                            <div class=\"side back\">{{feature}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class='box foo col-sm-4 col-md-offset-4 col-sm-offset-4'\r\n            (click)=\"onCustomize()\">\r\n                CUSTOMIZE YOUR <span style=\"color:#cb9f3d\">OWN!</span> \r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'Corvo Kubanyi'\">\r\n        <div class=\"kubanyi-container\">\r\n            <div class=\"modelName\">Corvo <span style=\"color:#cb9f3d\">{{modelName}}</span> </div>\r\n            <div class=\"iconsContainer\">\r\n                <div *ngFor=\"let feature of features; let i = index\">\r\n\r\n                    <div class=\"card-container\">\r\n                        <div class=\"card\">\r\n                            <div class=\"side\">\r\n                                <div class=\"icon\" id=\"{{getID(feature)}}\"></div>\r\n                            </div>\r\n                            <div class=\"side back\">{{feature}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class='box foo col-sm-4 col-md-offset-4 col-sm-offset-4'\r\n            (click)=\"onCustomize()\">\r\n                CUSTOMIZE YOUR <span style=\"color:#cb9f3d\">OWN!</span> \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'Corvo Imparatus'\">\r\n        <div class=\"imparatus-container\">\r\n            <div class=\"modelName\">Corvo <span style=\"color:#cb9f3d\">{{modelName}}</span> </div>\r\n            <div class=\"iconsContainer\">\r\n                <div *ngFor=\"let feature of features; let i = index\">\r\n\r\n                    <div class=\"card-container\">\r\n                        <div class=\"card\">\r\n                            <div class=\"side\">\r\n                                <div class=\"icon\" id=\"{{getID(feature)}}\"></div>\r\n                            </div>\r\n                            <div class=\"side back\">{{feature}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class='box foo col-sm-4 col-md-offset-4 col-sm-offset-4'\r\n            (click)=\"onCustomize()\">\r\n                CUSTOMIZE YOUR <span style=\"color:#cb9f3d\">OWN!</span> \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchDefault class=\"imparatus-container\">\r\n        <div class=\"modelName\">Corvo <span style=\"color:#cb9f3d\">{{modelName}}</span> </div>\r\n        <div class=\"iconsContainer\">\r\n            <div *ngFor=\"let feature of features; let i = index\">\r\n\r\n                <div class=\"card-container\">\r\n                    <div class=\"card\">\r\n                        <div class=\"side\">\r\n                            <div class=\"icon\" id=\"{{getID(feature)}}\"></div>\r\n                        </div>\r\n                        <div class=\"side back\">{{feature}}</div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n            <div class='box foo col-sm-4 col-md-offset-4 col-sm-offset-4'\r\n            (click)=\"onCustomize()\">\r\n                CUSTOMIZE YOUR    <span style=\"color:#cb9f3d\">OWN!</span> \r\n            </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/model-info/model-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelInfoComponent = /** @class */ (function () {
    function ModelInfoComponent(selectedCarSrv) {
        this.selectedCarSrv = selectedCarSrv;
        this.customize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ModelInfoComponent.prototype.ngOnInit = function () {
        // this.selectedCarSrv.specs.subscribe( specs => {
        //   this.model = specs.name;
        // });
    };
    ModelInfoComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.model) {
            this.selectedCarSrv.getFeatures(this.model).subscribe(function (res) { _this.features = res; });
            var aux = this.model.split(" ");
            this.modelName = aux[1];
        }
    };
    ModelInfoComponent.prototype.onCustomize = function () {
        this.customize.emit();
    };
    ModelInfoComponent.prototype.getID = function (feature) {
        switch (feature) {
            case "Airbags": return "air";
            case "Eight Airbags": return "air";
            case "Automatic": return "auto";
            case "Manual": return "manual";
            case "Double Cab": return "double";
            case "Voice activated controls": return "voice";
            case "Electric Rearview Mirror": return "rear";
            case "Warranty: 4 years": return "warranty";
            case "Warranty: 5 years": return "warranty";
            case "Warranty: 8 years": return "warranty";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('customize'),
        __metadata("design:type", Object)
    ], ModelInfoComponent.prototype, "customize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('model'),
        __metadata("design:type", String)
    ], ModelInfoComponent.prototype, "model", void 0);
    ModelInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-model-info',
            template: __webpack_require__("./src/app/model-info/model-info.component.html"),
            styles: [__webpack_require__("./src/app/model-info/model-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__selected_car_service__["a" /* SelectedCarService */]])
    ], ModelInfoComponent);
    return ModelInfoComponent;
}());



/***/ }),

/***/ "./src/app/models/models.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: 'Rajdhani', sans-serif;\r\n    color: #fff;\r\n}\r\n\r\n.section-title {\r\n    font-family: \"Josefine sans\", \"sans-seriff\";\r\n    border-bottom: 1px solid #cb9f3d;\r\n    text-align: center;\r\n}\r\n\r\n.model-container{\r\n    width: 100%;\r\n    background-color: rgba(203, 159, 61, 0.035);\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.3);\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.6), 0 6px 9px 0 rgba(0,0,0,0.7);\r\n    text-align: center;\r\n}\r\n\r\n.model-container.active {\r\n    border: 1.5px dotted  #cb9f3d;\r\n}\r\n\r\n.contain-header>img{\r\n    max-height:100%; \r\n    max-width:100%;\r\n}"

/***/ }),

/***/ "./src/app/models/models.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"section-title\">\r\n      <h1>MODELS</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row top-buffer\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"col-md-4 col-sm-12 col-xs-12\" *ngFor=\"let model of models; let i = index\" (click)=\"setSelectedModel(i)\">\r\n        \r\n        <div class=\"model-container\" [class.active]=\"i == selectedModel\">\r\n          <div class=\"contain-header\">\r\n            <img src=\"{{model.image}}\" alt=\"\">\r\n          </div>\r\n          <div class=\"contain-footer\">\r\n            <div class=\"model-name\">\r\n              <h3>Corvo <span style=\"color:#cb9f3d\">{{model.name.split(\" \")[1].toUpperCase()}}</span></h3>\r\n            </div>\r\n            <div class=\"contain-footer\">\r\n              <p>{{model.description}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"clearfix visible-xs-block\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/models/models.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelsComponent = /** @class */ (function () {
    function ModelsComponent(carData, selectedCarSrv) {
        this.carData = carData;
        this.selectedCarSrv = selectedCarSrv;
        this.modelChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectedModel = 1;
        this.selectedModelName = "";
        this.specs = {};
    }
    ModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carData.getModels().subscribe(function (res) {
            _this.models = res;
            _this.selectedModelName = _this.models[1].name;
            _this.modelChanged.emit(_this.selectedModelName);
            _this.setSelectedModel(_this.selectedModel);
        });
    };
    ModelsComponent.prototype.setSelectedModel = function (index) {
        this.selectedModel = index;
        this.selectedModelName = this.models[index].name;
        this.modelChanged.emit(this.selectedModelName);
        this.selectedCarSrv.getDefaultData(this.selectedModelName);
        // this.selectedCarSrv.specs.subscribe(res => this.specs = res);
        // this.selectedCarSrv.changeSpecs(this.specs);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('modelChanged'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "modelChanged", void 0);
    ModelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-models',
            template: __webpack_require__("./src/app/models/models.component.html"),
            styles: [__webpack_require__("./src/app/models/models.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */], __WEBPACK_IMPORTED_MODULE_2__selected_car_service__["a" /* SelectedCarService */]])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.navbar {\r\n\tmargin-bottom: 0;\r\n\tfont-family: 'Cinzel', serif;\r\n\tpadding-top: 10px;\r\n\tbackground-color: rgba(0, 0, 0, 0.57);\r\n\tborder: 0;\r\n\tborder-bottom: 1px solid rgb(203,159,61);\r\n\theight: 100px; border-radius: 0; -webkit-transition: all .6s; transition: all .6s;\r\n}\r\n\r\nul.navbar-nav {\r\n\tmargin-top: 1%;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n\tfont-size: 20px;\r\n\tcolor: #fff;\r\n\tfont-weight: 400;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\nli.effect-box:after,\r\nli.effect-box:before {\r\n\tcontent: '';\r\n  position: absolute;\r\n  left: 0;\r\n  display: inline-block;\r\n  height:100%;\r\n  width: 0%;\r\n  color: #cb9f3d;\r\n  opacity: 0;\r\n\t-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\r\n\ttransition: opacity 0.35s, -webkit-transform 0.35s;\r\n\ttransition: opacity 0.35s, transform 0.35s;\r\n\ttransition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n\t\r\n}\r\n\r\nli.effect-box:before {\r\n  border-left: 1px solid;\r\n  border-right: 1px solid;\r\n  -webkit-transform: scale(1,0);\r\n\ttransform: scale(1,0);\r\n}\r\n\r\nli.effect-box:after {\r\n  border-bottom: 1px solid;\r\n  border-top: 1px solid;\r\n  -webkit-transform: scale(0,1);\r\n\ttransform: scale(0,1);\r\n}\r\n\r\nli.effect-box:hover:after,\r\nli.effect-box:hover:before {\r\n  opacity: 1;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n}\r\n\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3 {\r\n\tdisplay: inline-block;\r\n\tmargin: 9px 0 0 15px;\r\n\tpadding: 6px 15px;\r\n\tbackground: #cb9f3d;\r\n\tborder: 0;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n\tfont-size: 14px;\r\n    font-weight: 300;\r\n    color: #fff;\r\n    opacity: 1;\r\n    text-transform: uppercase; border-radius: 6px;\r\n}\r\n\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3:hover,\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3:focus,\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3:active,\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3:active:focus { outline: 0; opacity: 0.6; color: #fff; }\r\n\r\n.navbar-brand {\r\n\twidth: 102px;\r\n\theight: 80px;\r\n\tbackground: url('corvo-logo2.e46b4a47cac140d684be.png')  center no-repeat;\r\n\tbackground-size: 100%;\r\n\ttext-indent: -99999px;\r\n}\r\n\r\n.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand { margin-left: 0; }\r\n\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top menu -->\r\n<nav class=\"navbar navbar-inverse\" role=\"navigation\" id=\"navbar\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#top-navbar-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>  \r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"\">Corvo</a>\r\n    </div>\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"top-navbar-1\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"effect-box\">\r\n          <a routerLink=\"\" id=\"navLink\">Models</a>\r\n        </li>\r\n        <li  class=\"effect-box\">\r\n          <a routerLink=\"/comparative_chart\"  id=\"navLink2\">Compare</a>\r\n        </li>\r\n        <li  class=\"effect-box\">\r\n          <a routerLink=\"/contact\"  id=\"navLink3\">Contact</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/pdf-preview/pdf-preview.component.css":
/***/ (function(module, exports) {

module.exports = ".car.preview{\r\n    padding: 0%;\r\n    margin: 0%;\r\n   }\r\n   \r\n   .modal-content{\r\n       text-transform: uppercase;\r\n       font-family: 'Rajdhani', sans-serif;\r\n       background-color: rgba(0, 0, 0);\r\n       font-size: 1vw;\r\n       color: white;\r\n       border-radius: 0px; \r\n       margin-top: 23%;\r\n   }\r\n   \r\n   .modal-footer{\r\n       border-top: 0px;\r\n       text-align: left;\r\n   }\r\n   \r\n   a {\r\n       text-decoration: none;\r\n     \r\n     }\r\n   \r\n   .pdf.box {\r\n       font-size: 1.6vw;\r\n       font-family: 'Rajdhani', sans-serif;\r\n       /* margin-top: 2em; */\r\n       position: relative;\r\n       vertical-align: middle;\r\n       color: #FFF;\r\n       display: inline-block;\r\n       /* line-height: 60px; */\r\n       text-align: center;\r\n       transition: 0.5s;\r\n       /* padding: 0.7em; */\r\n       cursor: pointer;\r\n       border: 2px solid #FFF;\r\n       -webkit-transition: 0.5s;\r\n     }\r\n   \r\n   .pdf.box:hover {\r\n       border: 2px solid rgba(0,160,80,0);\r\n       color: #FFF;\r\n     }\r\n   \r\n   .pdf.box::before, .box::after {\r\n       width: 100%;\r\n       height:100%;\r\n       z-index: 3;\r\n       content:'';\r\n       position: absolute;\r\n       top:0;\r\n       left:0;\r\n       -webkit-box-sizing: border-box;\r\n               box-sizing: border-box;\r\n       -webkit-transform: scale(0);\r\n       transform: scale(0);\r\n       -webkit-transition: 0.5s;\r\n       transition: 0.5s;\r\n     }\r\n   \r\n   .pdf.foo::before {\r\n       border-bottom: 3px solid #cb9f3d;\r\n       border-left: 3px solid #cb9f3d;\r\n       -webkit-transform-origin: 0 100%;\r\n       transform-origin: 0 100%;\r\n     }\r\n   \r\n   .pdf.foo::after {\r\n       border-top: 3px solid #cb9f3d;\r\n       border-right: 3px solid #cb9f3d;\r\n       -webkit-transform-origin: 100% 0%;\r\n       transform-origin: 100% 0%;\r\n     }\r\n   \r\n   .pdf.box:hover::after, .box:hover::before {\r\n       -webkit-transform: scale(1);\r\n       transform: scale(1);\r\n     }\r\n   \r\n   .snip1404 .plan-price {\r\n       font-weight: 600;\r\n       font-size: 3em;\r\n       color:#cb9f3d;\r\n     }"

/***/ }),

/***/ "./src/app/pdf-preview/pdf-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='PDFcontent'>\r\n  <div class=\"modal-header\">\r\n    <h2 class=\"modal-title pull-left\">{{specs.name}}</h2>\r\n  </div>\r\n  <div class=\"modal-body\" >\r\n    <car class=\"car\"></car>\r\n    <div class=\"details\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">\r\n          <h3>Details</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div *ngFor='let detail of details'>\r\n          <div class=\"col-xs-6 col-md-5\">\r\n            <div class=\"blockquote-box blockquote-primary clearfix\">\r\n              <div class=\"square pull-left\">\r\n                <i class=\"material-icons\">{{detail.icon}}</i>\r\n              </div>\r\n              <h4>\r\n                <b>{{detail.name}}</b>\r\n              </h4>\r\n              <p>{{detail.desc}}</p>\r\n          <p>Price: <span style=\"color:#cb9f3d\">{{detail.price}}</span> </p>\r\n            </div>\r\n        \r\n          </div>\r\n        \r\n        </div>\r\n        <p>Total: <span style=\"color:#cb9f3d\">{{subT}}</span></p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div class='box foo col-sm-4 pdf' (click)=\"downloadPDF()\">\r\n      <span style=\"color:#cb9f3d\">DOWNLOAD </span> \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pdf-preview/pdf-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html2canvas__ = __webpack_require__("./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_html2canvas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PdfPreviewComponent = /** @class */ (function () {
    function PdfPreviewComponent(selectedCarSrv) {
        this.selectedCarSrv = selectedCarSrv;
        this.subT = 0;
        this.details = [];
    }
    PdfPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subT = 0;
        this.selectedCarSrv.specs.subscribe(function (res) {
            _this.specs = res;
            _this.getDetails();
        });
        this.calculateTotal();
    };
    PdfPreviewComponent.prototype.getDetails = function () {
        this.details = [
            {
                name: 'Inside',
                desc: this.specs.inside.name,
                price: this.specs.inside.price,
                icon: 'drive_eta'
            },
            {
                name: 'Rims',
                desc: this.specs.rims.name,
                price: this.specs.rims.price,
                icon: 'brightness_high'
            },
            {
                name: 'Motor',
                desc: this.specs.motor.name,
                price: this.specs.motor.price,
                icon: 'build'
            },
            {
                name: 'Extras',
                desc: this.getExtras(),
                price: this.getExtraP1(),
                icon: 'playlist_add'
            },
        ];
    };
    PdfPreviewComponent.prototype.getExtras = function () {
        var extras = [];
        for (var _i = 0, _a = this.specs.extras; _i < _a.length; _i++) {
            var extra = _a[_i];
            extras.push(extra.name);
        }
        return extras;
    };
    PdfPreviewComponent.prototype.getExtraP = function () {
        for (var _i = 0, _a = this.specs.extras; _i < _a.length; _i++) {
            var extra = _a[_i];
            this.subT += parseInt(extra.price);
        }
    };
    PdfPreviewComponent.prototype.getExtraP1 = function () {
        var subT = 0;
        for (var _i = 0, _a = this.specs.extras; _i < _a.length; _i++) {
            var extra = _a[_i];
            subT += parseInt(extra.price);
        }
        return subT;
    };
    PdfPreviewComponent.prototype.calculateTotal = function () {
        this.getExtraP();
        this.subT += parseInt(this.specs.motor.price) + parseInt(this.specs.inside.price) + parseInt(this.specs.rims.price);
    };
    PdfPreviewComponent.prototype.downloadPDF = function () {
        var element = document.getElementById("PDFcontent");
        __WEBPACK_IMPORTED_MODULE_3_html2canvas__(element).then(function (canvas) {
            // Export the canvas to its data URI representation
            var base64image = canvas.toDataURL();
            // Open the image in a new window
            window.open(base64image, "_blank");
            var pdf = new __WEBPACK_IMPORTED_MODULE_2_jspdf__();
            pdf.addImage(base64image, 10, 10, 160, 200);
            pdf.save('CorvoCar.pdf');
        });
    };
    PdfPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pdf-preview',
            template: __webpack_require__("./src/app/pdf-preview/pdf-preview.component.html"),
            styles: [__webpack_require__("./src/app/pdf-preview/pdf-preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__selected_car_service__["a" /* SelectedCarService */]])
    ], PdfPreviewComponent);
    return PdfPreviewComponent;
}());



/***/ }),

/***/ "./src/app/preview-modal/preview-modal.component.css":
/***/ (function(module, exports) {

module.exports = ".material-icons{font-size:3em}\r\n.blockquote-box{border-right:5px solid #E6E6E6;margin-bottom:25px}\r\n.blockquote-box .square{\r\n    min-height:50px;\r\n    margin-right:15px;\r\n    text-align:center!important;\r\n    background-color:#E6E6E6;\r\n}\r\n.blockquote-box.blockquote-primary{border-color: #cb9f3d;}\r\n.blockquote-box.blockquote-primary .square{background-color:#FFF;color:#333}\r\n.modal-header{\r\n   border-bottom:  3px solid #cb9f3d;\r\n}\r\n#x {\r\n  color: #FFF;\r\n}\r\n.close {\r\n  color: #FFF;\r\n}\r\n.car.preview{\r\n padding: 0%;\r\n margin: 0%;\r\n}\r\n.modal-content{\r\n    text-transform: uppercase;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    font-size: 1vw;\r\n    color: white;\r\n    border-radius: 0px; \r\n    margin-top: 23%;\r\n}\r\n.modalpdf{\r\n  background-color:white;\r\n  color: black;\r\n}\r\n.modal-footer{\r\n    border-top: 0px;\r\n    text-align: left;\r\n}\r\na {\r\n    text-decoration: none;\r\n  \r\n  }\r\n.pdf.box {\r\n    font-size: 1.6vw;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    /* margin-top: 2em; */\r\n    position: relative;\r\n    vertical-align: middle;\r\n    color: #FFF;\r\n    display: inline-block;\r\n    /* line-height: 60px; */\r\n    text-align: center;\r\n    transition: 0.5s;\r\n    /* padding: 0.7em; */\r\n    cursor: pointer;\r\n    border: 2px solid #FFF;\r\n    -webkit-transition: 0.5s;\r\n  }\r\n.pdf.box:hover {\r\n    border: 2px solid rgba(0,160,80,0);\r\n    color: #FFF;\r\n  }\r\n.pdf.box::before, .box::after {\r\n    width: 100%;\r\n    height:100%;\r\n    z-index: 3;\r\n    content:'';\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n.pdf.foo::before {\r\n    border-bottom: 3px solid #cb9f3d;\r\n    border-left: 3px solid #cb9f3d;\r\n    -webkit-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n  }\r\n.pdf.foo::after {\r\n    border-top: 3px solid #cb9f3d;\r\n    border-right: 3px solid #cb9f3d;\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n.pdf.box:hover::after, .box:hover::before {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n.snip1404 .plan-price {\r\n    font-weight: 600;\r\n    font-size: 3em;\r\n    color:#cb9f3d;\r\n  }"

/***/ }),

/***/ "./src/app/preview-modal/preview-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div  id=\"PDFcontent\">\r\n<div class=\"modal-header\">\r\n  <h2 class=\"modal-title pull-left\">{{specs.name}}</h2>\r\n  <button type=\"button\" class=\"close pull-right\" (click)=\"modalService._hideModal(1)\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\" id=\"x\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div id=\"car\">\r\n    <car class=\"car\" ></car>\r\n  </div>\r\n  <div class=\"details\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-3\">\r\n        <h3>Details</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div *ngFor='let detail of details'>\r\n        <div class=\"col-xs-6 col-md-5\">\r\n          <div class=\"blockquote-box blockquote-primary clearfix\">\r\n            <div class=\"square pull-left\">\r\n              <i class=\"material-icons\">{{detail.icon}}</i>\r\n            </div>\r\n            <h4>\r\n              <b>{{detail.name}}</b>\r\n            </h4>\r\n            <p>{{detail.desc}}</p>\r\n         <p>Price: <span style=\"color:#cb9f3d\">{{detail.price}}</span> </p>\r\n          </div>\r\n       \r\n        </div>\r\n       \r\n      </div>\r\n      <p>Total: <span style=\"color:#cb9f3d\">{{subT}}</span></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n  <div class='box foo col-sm-4 pdf' (click)=\"downloadPDF()\">\r\n      GET <span style=\"color:#cb9f3d\">PDF</span> \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/preview-modal/preview-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected_car_service__ = __webpack_require__("./src/app/selected-car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas__ = __webpack_require__("./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_html2canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PreviewModalComponent = /** @class */ (function () {
    function PreviewModalComponent(modalService, selectedCarSrv, router) {
        this.modalService = modalService;
        this.selectedCarSrv = selectedCarSrv;
        this.router = router;
        this.subT = 0;
        this.generatingPDF = false;
        this.details = [];
    }
    PreviewModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subT = 0;
        this.selectedCarSrv.specs.subscribe(function (res) {
            _this.specs = res;
            _this.getDetails();
        });
        this.calculateTotal();
    };
    PreviewModalComponent.prototype.getDetails = function () {
        this.details = [
            {
                name: 'Inside',
                desc: this.specs.inside.name,
                price: this.specs.inside.price,
                icon: 'drive_eta'
            },
            {
                name: 'Rims',
                desc: this.specs.rims.name,
                price: this.specs.rims.price,
                icon: 'brightness_high'
            },
            {
                name: 'Motor',
                desc: this.specs.motor.name,
                price: this.specs.motor.price,
                icon: 'build'
            },
            {
                name: 'Extras',
                desc: this.getExtras(),
                price: this.getExtraP1(),
                icon: 'playlist_add'
            },
        ];
    };
    PreviewModalComponent.prototype.getExtras = function () {
        var extras = [];
        for (var _i = 0, _a = this.specs.extras; _i < _a.length; _i++) {
            var extra = _a[_i];
            extras.push(extra.name);
        }
        return extras;
    };
    PreviewModalComponent.prototype.getExtraP = function () {
        for (var _i = 0, _a = this.specs.extras; _i < _a.length; _i++) {
            var extra = _a[_i];
            this.subT += parseInt(extra.price);
        }
    };
    PreviewModalComponent.prototype.getExtraP1 = function () {
        var subT = 0;
        for (var _i = 0, _a = this.specs.extras; _i < _a.length; _i++) {
            var extra = _a[_i];
            subT += parseInt(extra.price);
        }
        return subT;
    };
    PreviewModalComponent.prototype.calculateTotal = function () {
        this.getExtraP();
        this.subT += parseInt(this.specs.motor.price) + parseInt(this.specs.inside.price) + parseInt(this.specs.rims.price);
    };
    PreviewModalComponent.prototype.downloadPDF = function () {
        var element = document.getElementById("PDFcontent");
        element.style.backgroundColor = 'white';
        element.style.color = 'black';
        var pdf = new __WEBPACK_IMPORTED_MODULE_3_jspdf__();
        __WEBPACK_IMPORTED_MODULE_4_html2canvas__(element).then(function (canvas) {
            element.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            element.style.color = 'white';
            // Export the canvas to its data URI representation
            var base64image = canvas.toDataURL();
            pdf.addImage(base64image, 45, 10, 110, 90);
            pdf.save('CorvoCar.pdf');
        });
    };
    PreviewModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preview-modal',
            template: __webpack_require__("./src/app/preview-modal/preview-modal.component.html"),
            styles: [__webpack_require__("./src/app/preview-modal/preview-modal.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__selected_car_service__["a" /* SelectedCarService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], PreviewModalComponent);
    return PreviewModalComponent;
}());



/***/ }),

/***/ "./src/app/selected-car.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedCarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectedCarService = /** @class */ (function () {
    function SelectedCarService(http) {
        this.http = http;
        this.carSpecs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.specs = this.carSpecs.asObservable();
        this.specsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.car = {
            modelID: 1,
            name: "",
            color: "",
            rims: "",
            rimsID: 0,
            extras: "",
            inside: "",
            motor: ""
        };
    }
    SelectedCarService.prototype.changeSpecs = function (specs) {
        this.carSpecs.next(specs);
        this.specsChanged.emit(specs);
    };
    SelectedCarService.prototype.getFeatures = function (idModel) {
        return this.http.get('/car_models/features/' + idModel);
    };
    SelectedCarService.prototype.getDefaultData = function (modelName) {
        var _this = this;
        this.http.get('/car_models/models/' + modelName)
            .subscribe(function (res) {
            //cambiar eso
            var modelID;
            switch (res['name']) {
                case 'Corvo Imperiale':
                    modelID = 2;
                    break;
                case 'Corvo Kubanyi':
                    modelID = 0;
                    break;
                case 'Corvo Imparatus':
                    modelID = 1;
                    break;
            }
            _this.car = {
                modelID: modelID,
                name: res['name'],
                color: res['color'],
                rims: res['rims'],
                rimsID: 0,
                extras: res['extras'],
                inside: res['inside'],
                motor: res['motor']
            };
            _this.changeSpecs(_this.car);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectedCarService.prototype, "specsChanged", void 0);
    SelectedCarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SelectedCarService);
    return SelectedCarService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map