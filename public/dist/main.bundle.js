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
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                console.log(event.urlAfterRedirects);
                window.gtag('config', 'UA-120666820-1', { 'page_path': event.urlAfterRedirects });
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_models_component__ = __webpack_require__("./src/app/models/models.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng4_twitter_timeline_lib_index__ = __webpack_require__("./node_modules/ng4-twitter-timeline/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__car_builder_builder_builder_component__ = __webpack_require__("./src/app/car_builder/builder/builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__car_builder_color_picker_color_picker_component__ = __webpack_require__("./src/app/car_builder/color-picker/color-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__car_builder_build_screen_build_screen_component__ = __webpack_require__("./src/app/car_builder/build-screen/build-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_info_model_info_component__ = __webpack_require__("./src/app/model-info/model-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__car_data_service__ = __webpack_require__("./src/app/car-data.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__models_models_component__["a" /* ModelsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__car_builder_builder_builder_component__["a" /* BuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__car_builder_color_picker_color_picker_component__["a" /* ColorPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__car_builder_build_screen_build_screen_component__["a" /* BuildScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_16__model_info_model_info_component__["a" /* ModelInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12_ng4_twitter_timeline_lib_index__["b" /* Ng4TwitterTimelineModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBt-_YitTA4qlfeIkQbaqZOXNiERL6USuA'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__car_data_service__["a" /* CarDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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
        this.model = [
            {
                idModel: 1,
                idMotor: 1,
                idRims: 1,
                idColor: 1,
                idInterior: 1,
                extras: []
            }
        ];
    }
    CarDataService.prototype.getDefault = function (idModel) {
    };
    CarDataService.prototype.getFeatures = function (idModel) {
        return this.http.get('/car_models/features/' + idModel);
    };
    //assing this shit to the model array
    CarDataService.prototype.getModelImages = function () {
        return this.http.get('/model_models');
    };
    CarDataService.prototype.getModels = function () {
        return this.http.get('/car_models');
    };
    CarDataService.prototype.getRims = function () {
        return this.http.get('/rimsPaths');
    };
    CarDataService.prototype.getMotors = function () {
        return this.http.get('/motorPaths');
    };
    CarDataService.prototype.getInteriors = function () {
        return this.http.get('/interiorPaths');
    };
    CarDataService.prototype.selectModel = function (idModel) {
        return this.model;
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

module.exports = ".buildScreen {\r\n    height: 90vh;\r\n}\r\n\r\n.car {\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n\r\n.bodyImage{\r\n\r\n  position: absolute;\r\n  background-size: 100%;\r\n    width: 80vw;\r\n    height: 60vh;\r\n    margin-top: 18%;\r\n    -webkit-filter: opacity(.5) drop-shadow(0 0 0 white);  filter: opacity(.5) drop-shadow(0 0 0 white);\r\n\r\n}\r\n\r\n.extraImage{\r\n  \r\n  position: absolute;\r\n  background-size: 100%;\r\n    width: 80vw;\r\n    height: 60vh;\r\n    margin-top: 18%;\r\n}\r\n\r\n.rimsImage{\r\n\r\n  position: absolute;\r\n  background-size: 100%;\r\n    width: 80vw;\r\n    height: 60vh;\r\n    margin-top: 18%;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .buildScreen {\r\n      height: 52vh;\r\n    }\r\n\r\n    .bodyImage{\r\n      background: url('Imperiale-1.93bdc8ac43dcb6255d74.png') no-repeat center center;\r\n      -webkit-filter: opacity(.5) drop-shadow(0 0 0 white);  filter: opacity(.5) drop-shadow(0 0 0 white);\r\n      position: absolute;\r\n      background-size: 100%;\r\n        width: 80vw;\r\n        height: 60vh;\r\n        margin-top: 5%;\r\n    }\r\n    \r\n    .extraImage{\r\n      background: url('Imperiale-2.3dfd3ccf1ad5832620bc.png') no-repeat center center;\r\n      position: absolute;\r\n      background-size: 100%;\r\n        width: 80vw;\r\n        height: 60vh;\r\n        margin-top: 5%;\r\n    }\r\n    \r\n    .rimsImage{\r\n      background: url('Imperiale-3.29fe786e68d3c86bb3b3.png') no-repeat center center;\r\n      position: absolute;\r\n      background-size: 100%;\r\n        width: 80vw;\r\n        height: 60vh;\r\n        margin-top: 5%;\r\n    }\r\n  \r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    bottom: 5vh;\r\n    right: 2vw;\r\n    border: 3px solid white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n  }\r\n\r\n.box {\r\n  margin: 1vh;\r\n  padding: 3vh;\r\n  height: 7vh;\r\n  width: 15vw;\r\n  color: #FFF;\r\n  text-align: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n  -webkit-transition:0.5s;\r\n}\r\n\r\n.box:hover {\r\n  border: 2px solid rgba(0,160,80,0);\r\n  color: #FFF;\r\n  background: radial-gradient( rgba(255,255,255, 0.5), rgba(255,255,255, 0.2), rgba(255,255,255, 0));\r\n}\r\n\r\n.box::before, .box::after {\r\n  width: 100%;\r\n  height:100%;\r\n  z-index: 3;\r\n  content:'';\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition: 0.35s;\r\n  transition: 0.35s;\r\n}\r\n\r\n.foo::before {\r\n  border-bottom: 3px solid #cb9f3d;\r\n  border-left: 3px solid #cb9f3d;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\r\n}\r\n\r\n.foo::after {\r\n  border-top: 3px solid #cb9f3d;\r\n  border-right: 3px solid #cb9f3d;\r\n  -webkit-transform-origin: 100% 0%;\r\n  transform-origin: 100% 0%;\r\n}\r\n\r\n.box:hover::after, .box:hover::before {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n}\r\n"

/***/ }),

/***/ "./src/app/car_builder/build-screen/build-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row buildScreen\">\r\n\r\n    <div class=\"car\">\r\n        <div class=\"bodyImage\" id=\"bodyImage\" [ngStyle]=\"{backgroundImage:'url(' + getBackground(0) + ')'\r\n        ,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: '90%'}\">\r\n            \r\n        </div>\r\n\r\n        <!-- Luces, Vidrio, Llantas-->\r\n        <div class=\"extraImage\" id=\"extraImage\" [ngStyle]=\"{backgroundImage:'url(' + getBackground(1) + ')'\r\n        ,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: '90%'}\">\r\n        </div>\r\n\r\n        <!-- Aros -->\r\n        <div class=\"rimsImage\" id=\"rimsImage\"[ngStyle]=\"{backgroundImage:'url(' + getBackground(2) + ')'\r\n        ,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: '90%'}\">\r\n        </div>\r\n    </div>\r\n\r\n    <div [ngSwitch]=\"buildOption\">\r\n\r\n        <div *ngSwitchCase=\"'color'\">\r\n            <color-picker (colorChanged)=\"setColor($event)\"></color-picker>\r\n\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'motor'\">\r\n            <!--Replace with component to be loaded-->\r\n            <h1>Motor</h1>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'extras'\">\r\n            <!--Replace with component to be loaded-->\r\n            <h1>Extras</h1>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'inside'\">\r\n            <!--Replace with component to be loaded-->\r\n            <h1>Inside</h1>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'rims'\">\r\n            <!--Replace with component to be loaded-->\r\n            <h1>Rims</h1>\r\n        </div>\r\n\r\n        <div *ngSwitchDefault>\r\n            <color-picker (colorChanged)=\"setColor($event)\"></color-picker>\r\n        </div>\r\n    </div>\r\n\r\n    <div class='box foo button' (click)=\"showPreview()\">Preview</div>\r\n</div>"

/***/ }),

/***/ "./src/app/car_builder/build-screen/build-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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
    function BuildScreenComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.car = {
            modelID: 0,
            colorID: ''
        };
        //esto despues se cambia ya con la logica de las images desde la base 
        this.carsImages = [
            [
                "../../../assets/images/Imparatus/SUV-1.png",
                "../../../assets/images/Imparatus/SUV-2.png",
                "../../../assets/images/Imparatus/SUV-3.png"
            ],
            [
                "../../../assets/images/Kubanyi/RAM-1.png",
                "../../../assets/images/Kubanyi/RAM-2.png",
                "../../../assets/images/Kubanyi/RAM-3.png"
            ],
            [
                "../../../assets/images/Imperiale/Imperiale-1.png",
                "../../../assets/images/Imperiale/Imperiale-2.png",
                "../../../assets/images/Imperiale/Imperiale-3.png"
            ]
        ];
    }
    BuildScreenComponent.prototype.ngOnInit = function () {
    };
    BuildScreenComponent.prototype.ngOnChanges = function () {
        //cambia el id, de una vez en cadena se cambia lo grafico
        this.car.modelID = this.model;
    };
    //recibe el tipo de imagen que se ocupa, se encarga de devolverla la parte adecuada del carro seleccionado 
    BuildScreenComponent.prototype.getBackground = function (part) {
        return this.carsImages[this.car.modelID][part];
    };
    BuildScreenComponent.prototype.showPreview = function () {
        this.car.modelID = this.model;
        alert('modelID: ' + this.car.modelID + ' colorID: ' + this.car.colorID);
    };
    BuildScreenComponent.prototype.setColor = function (color) {
        this.car.colorID = color;
        this.changeCarColor();
    };
    BuildScreenComponent.prototype.changeCarColor = function () {
        //images logic goes HERE
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('buildOption'),
        __metadata("design:type", Object)
    ], BuildScreenComponent.prototype, "buildOption", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('model'),
        __metadata("design:type", Object)
    ], BuildScreenComponent.prototype, "model", void 0);
    BuildScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'build-screen',
            template: __webpack_require__("./src/app/car_builder/build-screen/build-screen.component.html"),
            styles: [__webpack_require__("./src/app/car_builder/build-screen/build-screen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], BuildScreenComponent);
    return BuildScreenComponent;
}());



/***/ }),

/***/ "./src/app/car_builder/builder/builder.component.css":
/***/ (function(module, exports) {

module.exports = ".black {\r\n  background-color: black;\r\n}\r\n\r\n.builder {\r\n    height: 90vh;\r\n    width: 100%;\r\n    margin-top: 10%;\r\n    margin-left: 0px;\r\n    border: 1px solid lightslategrey;\r\n    background: url('floor.19cfca70ff919293da00.jpg') no-repeat center center;\r\n    background-size: 100%;\r\n}\r\n\r\n.optionsBar {\r\n    margin: 0px; \r\n    height: 90vh;\r\n    width: 8vw;\r\n    -webkit-box-shadow: 5px 0px 18px #222222;\r\n            box-shadow: 5px 0px 18px #222222;\r\n}\r\n\r\n.active {\r\n    background: radial-gradient( rgba(255,255,255, 0.6), rgba(255,255,255, 0.5), rgba(255,255,255, 0));\r\n    border: 3px solid #cb9f3d;\r\n    color: #cb9f3d;\r\n}\r\n\r\n.button {\r\n    background: radial-gradient( rgba(255,255,255, 0.6), rgba(255,255,255, 0.3), rgba(255,255,255, 0));\r\n    border: 1px solid white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n  }\r\n\r\n.box {\r\n  margin: 1vh;\r\n  padding: 3vh;\r\n  height: 12vh;\r\n  width: 5vw;\r\n  color: #FFF;\r\n  text-align: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n  -webkit-transition:0.5s;\r\n}\r\n\r\n.box:hover {\r\n  border: 2px solid rgba(0,160,80,0);\r\n  color: #FFF;\r\n  background: radial-gradient( rgba(255,255,255, 0.5), rgba(255,255,255, 0.2), rgba(255,255,255, 0));\r\n}\r\n\r\n.box::before, .box::after {\r\n  width: 100%;\r\n  height:100%;\r\n  z-index: 3;\r\n  content:'';\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition: 0.35s;\r\n  transition: 0.35s;\r\n}\r\n\r\n.foo::before {\r\n  border-bottom: 3px solid #cb9f3d;\r\n  border-left: 3px solid #cb9f3d;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\r\n}\r\n\r\n.foo::after {\r\n  border-top: 3px solid #cb9f3d;\r\n  border-right: 3px solid #cb9f3d;\r\n  -webkit-transform-origin: 100% 0%;\r\n  transform-origin: 100% 0%;\r\n}\r\n\r\n.box:hover::after, .box:hover::before {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .builder {\r\n    height: 65vh;\r\n  }\r\n\r\n  .optionsBar {\r\n    height: 12vh;\r\n    width: 90vw;\r\n    -webkit-box-shadow: 5px 10px 18px #000000;\r\n            box-shadow: 5px 10px 18px #000000;\r\n  }\r\n\r\n  .box {\r\n    height: 6vh;\r\n    width: 8vw;\r\n  }\r\n\r\n}"

/***/ }),

/***/ "./src/app/car_builder/builder/builder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"black\">\r\n    <div class=\"container-fluid builder\">\r\n        <div class=\"row\">\r\n          \r\n          <div class=\"col-xs-12 col-sm-12 col-md-1 optionsBar\">\r\n            <!--OptionsBar-->\r\n            <div *ngFor=\"let option of options\" \r\n                  class=\"col-xs-2 col-sm-2 col-md-12 box foo\" \r\n                  (click)=\"selectedOption = option.name\" \r\n                  [class.active]=\"selectedOption == option.name\">   \r\n                  <i class=\"material-icons\">{{option.icon}}</i>\r\n            </div>\r\n          </div>\r\n      \r\n          <div class=\"col-xs-12 col-sm-12 col-md-11\" >\r\n              <build-screen [buildOption]=\"selectedOption\" [model]=\"selectedModelID\"> </build-screen>\r\n          </div>   \r\n        </div>\r\n      </div>      \r\n</div>"

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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('modelID'),
        __metadata("design:type", Number)
    ], BuilderComponent.prototype, "selectedModelID", void 0);
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

/***/ "./src/app/car_builder/color-picker/color-picker.component.css":
/***/ (function(module, exports) {

module.exports = ".colorPicker {\r\n    position: absolute;\r\n    bottom: 2vh;\r\n}\r\n\r\n.colorPalet {\r\n    margin-left: 30vw;\r\n    height: 10vh;\r\n    width: 30vw;\r\n    border-radius: 20%;\r\n    background: radial-gradient( rgba(255,255,255, 0.7), rgba(255,255,255, 0.4), rgba(255,255,255, 0.1));\r\n}\r\n\r\n.circle {\r\n    height: 6vh;\r\n    width: 6vh;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.circle:hover {\r\n    height: 8vh;\r\n    width: 8vh;\r\n}"

/***/ }),

/***/ "./src/app/car_builder/color-picker/color-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"colorPicker\">\r\n\r\n    <div class=\"row colorPalet z-depth-2\">\r\n      <div *ngFor=\"let color of colors\"\r\n            class=\"col-xs-1 col-sm-2 circle\" \r\n            [style.background-color]='color.hexcode'\r\n            (click)=\"onColorChange(color.id)\"\r\n           >\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

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
            { id: 'black', hexcode: '#010101' },
            { id: 'red', hexcode: '#E50101' },
            { id: 'white', hexcode: '#FEFEFE' },
            { id: 'blue', hexcode: '#1301B5' },
            { id: 'yellow', hexcode: '#F7FE32' }
        ];
    }
    ColorPickerComponent.prototype.onColorChange = function (colorId) {
        this.selectedColor = colorId;
        this.colorChanged.emit(this.selectedColor);
        switch (colorId) {
            case 'black':
                document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 black)";
                console.log("negro");
                break;
            case 'red':
                document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 red)";
                console.log("red");
                break;
            case 'white':
                document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 white)";
                console.log("white");
                break;
            case 'blue':
                document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 blue)";
                console.log("blue");
                break;
            case 'yellow':
                document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 yellow)";
                console.log("yellow");
                break;
        }
    };
    ColorPickerComponent.prototype.ngOnInit = function () {
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

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\na:hover, a:focus { color: #888; text-decoration: none; }\r\n\r\nstrong { font-weight: bold; }\r\n\r\nimg { max-width: 100%; }\r\n\r\nh1, h2 { line-height: 40px; }\r\n\r\nh3, h4 { line-height: 20px; }\r\n\r\n::-moz-selection {    background: #fcbd2b; color: #fff; text-shadow: none; }\r\n\r\n::selection {     background: #fcbd2b; color: #fff; text-shadow: none; }\r\n\r\n.page-title-container {\r\n    margin: 0 auto;\r\n    padding: 30px 0 35px 0;\r\n    text-align: left;\r\n    -webkit-box-shadow: 0 5px 15px 0 rgba(0,0,0,.05) inset, 0 -5px 15px 0 rgba(0,0,0,.05) inset;\r\n    box-shadow: 0 5px 15px 0 rgba(0,0,0,.05) inset, 0 -5px 15px 0 rgba(0,0,0,.05) inset;\r\n}\r\n\r\n.page-title-container h1 {\r\n    display: inline;\r\n    margin-left: 10px;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 30px;\r\n    color: #5d5d5d;\r\n    font-weight: bold;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, .7);\r\n    vertical-align: middle;\r\n}\r\n\r\n.page-title-container p {\r\n    display: inline;\r\n    font-family: 'Rajdhani', 'sans-serif';\r\n    margin-left: 5px;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    vertical-align: middle;\r\n}\r\n\r\n.page-title-container i {\r\n    font-size: 46px;\r\n    color: #ccc;\r\n    vertical-align: middle;\r\n}\r\n\r\n/* Contact Form */\r\n\r\n.contact-us-container {\r\n    margin-top: 20px;\r\n    padding-bottom: 50px;\r\n    text-align: left;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    color: #888;\r\n    font-size: 12px;\r\n}\r\n\r\n.contact-us-container h3 {\r\n    margin-top: 25px;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 18px;\r\n    color: #5d5d5d;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    text-shadow: 0 1px 0 rgba(255,255,255,.7);\r\n}\r\n\r\n.contact-us-container p {\r\n    line-height: 28px;\r\n    font-size: 17px;\r\n}\r\n\r\n.contact-form {\r\n    padding-top: 25px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.contact-form form {\r\n    margin-top: 25px;\r\n}\r\n\r\n.contact-form form .form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.contact-form input[type=\"text\"] { width: 95%; height: 34px; }\r\n\r\n.contact-form textarea { width: 95%; height: 170px; padding-top: 6px; padding-bottom: 6px; }\r\n\r\n.contact-form label { font-size: 20px; font-weight: 400; }\r\n\r\n.contact-form label .error-label { font-style: italic }\r\n\r\n.contact-form button { margin-top: 5px; padding: 0 45px; }\r\n\r\ninput[type=\"text\"], \r\ntextarea {\r\n    margin: 0;\r\n    padding: 0 6px;\r\n    vertical-align: middle;\r\n    background: none;\r\n    border: 1px solid #ddd;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    color: #888;\r\n    font-style: italic; border-radius: 0; -webkit-box-shadow: none; box-shadow: none; -webkit-transition: all .3s; transition: all .3s;\r\n}\r\n\r\ninput[type=\"text\"]:focus, \r\ntextarea:focus {\r\n\toutline: 0;\r\n    border: 1px solid #bbb; -webkit-box-shadow: none; box-shadow: none;\r\n}\r\n\r\ninput[type=\"text\"]:-moz-placeholder, textarea:-moz-placeholder { color: #ccc; }\r\n\r\ninput[type=\"text\"]:-ms-input-placeholder, textarea:-ms-input-placeholder { color: #ccc; }\r\n\r\ninput[type=\"text\"]::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: #ccc; }\r\n\r\nbutton.btn {\r\n    \r\n\theight: 30px;\r\n    margin: 0;\r\n    padding: 0 20px;\r\n    vertical-align: middle;\r\n    background: #9d426b;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 30px;\r\n    text-shadow: none;\r\n    -webkit-box-shadow: 0 1px 25px 0 rgba(0,0,0,.05) inset, 0 -1px 25px 0 rgba(0,0,0,.05) inset;\r\n    box-shadow: 0 1px 25px 0 rgba(0,0,0,.05) inset, 0 -1px 25px 0 rgba(0,0,0,.05) inset; -webkit-transition: all .3s; transition: all .3s;\r\n}\r\n\r\ninput.btn{\r\n    border: 2px solid rgb(93, 93, 93);\r\n    color: rgb(93, 93, 93);\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 20px;\r\n    background-color: white;\r\n}\r\n\r\nbutton.btn:hover {\r\n\tbackground: #5d5d5d;\r\n    border: 0;\r\n    color: #fff; -webkit-box-shadow: none; box-shadow: none;\r\n}\r\n\r\nbutton.btn:active {\r\n\toutline: 0;\r\n    background: #5d5d5d;\r\n    border: 0;\r\n    color: #fff;\r\n    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.15) inset, 0 -1px 25px 0 rgba(0,0,0,.05) inset;\r\n    box-shadow: 0 5px 10px 0 rgba(0,0,0,.15) inset, 0 -1px 25px 0 rgba(0,0,0,.05) inset;\r\n}\r\n\r\nbutton.btn:focus {\r\n\toutline: 0;\r\n    background: #5d5d5d;\r\n    border: 0;\r\n    color: #fff;\r\n}\r\n\r\n.btn:active:focus, .btn.active:focus {\r\n\toutline: 0;\r\n    background: #5d5d5d;\r\n    border: 0;\r\n    color: #fff;\r\n}\r\n\r\n/***** Google map *****/\r\n\r\n.contact-address {\r\n\tpadding-bottom: 15px;\r\n}\r\n\r\n.contact-address .map {\r\n    margin: 20px 0 40px 0;\r\n    height: 300px;\r\n    border: 5px solid #f8f8f8;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\ni.fa.fa-facebook, i.fa.fa-twitter, i.fa.fa-instagram{\r\n    border-radius: 100%;\r\n    font-size: 24px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    margin: 5px;\r\n    text-align: center;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    }\r\n\r\n.fa:hover {\r\n      opacity: 0.7;\r\n  }\r\n\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n  }\r\n\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n  }\r\n\r\n.fa-instagram {\r\n    background: #125688;\r\n    color: white;\r\n  }\r\n\r\nagm-map {\r\n    height: 300px;\r\n  }\r\n\r\n.alert-message>p{\r\n      font-size: 22px;\r\n  }\r\n\r\n.alert-message{\r\n      cursor: pointer;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Open+Sans:400italic,400\">\r\n<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Droid+Sans\">\r\n<link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Lobster\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<app-nav-bar></app-nav-bar>\r\n<!--Page title -->\r\n<div class=\"page-title-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 wow fadeIn\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n        <h1>Contact Us /</h1>\r\n        <p>Here is how you can contact us</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Contact Form -->\r\n<div class=\"contact-us-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-7 contact-form\">\r\n        <form >\r\n          <div class=\"form-group\">\r\n            <label for=\"contact-name\">Name</label>\r\n            <input type=\"text\" name=\"name\" placeholder=\"Enter your name...\" \r\n            class=\"contact-name\" id=\"contact-name\" [(ngModel)]=\"message.name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"contact-email\">Email</label>\r\n            <input type=\"text\" name=\"email\" placeholder=\"Enter your email...\" \r\n            class=\"contact-email\" id=\"contact-email\" [(ngModel)]=\"message.email\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"contact-message\">Message</label>\r\n            <textarea name=\"message\" placeholder=\"Your message...\" \r\n            class=\"contact-message\" id=\"contact-message\" [(ngModel)]=\"message.body\"></textarea>\r\n          </div>\r\n          <input type=\"submit\" class=\"btn\" (click)=\"sendMessage()\" value=\"Send\">\r\n        </form>\r\n        <div *ngIf=\"showMessage\">\r\n          <div class=\"alert-message top-buffer\" (click)=\"hideAlert()\">\r\n            <p>{{alert}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-5 contact-address\">\r\n        <h3>We Are Here</h3>\r\n        <div class=\"map\">\r\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n          </agm-map>\r\n        </div>\r\n        <div class=\"col-sm-7\">\r\n          <h3>Social Media</h3>\r\n         \r\n          <ul class=\"social-icons icon-circle icon-zoom list-unstyled list-inline\"> \r\n            <li><a href=\"https://www.facebook.com/Corvo-Cars-178109046180834\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a> </li> \r\n            <li><a href=\"https://twitter.com/Corvus_imperio\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a> </li> \r\n            <li><a href=\"https://www.instagram.com/corvo_cars/\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a> </li>   \r\n          </ul>\r\n\r\n        </div>\r\n        <div class=\"col-sm-5\">\r\n          <h3>Phone Number</h3>\r\n          <p>+506 84538943</p>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.lat = 10.04261876;
        this.lng = -84.30005225;
        this.message = {
            name: "",
            email: "",
            body: ""
        };
        this.showMessage = false;
        this.alert = "";
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.changeNavStyle();
    };
    ContactComponent.prototype.sendMessage = function () {
        if (this.message.name.length !== 0 ||
            this.message.email.length !== 0 ||
            this.message.body.length !== 0) {
            this.alert = "Thank you for contacting us!";
            this.showMessage = true;
        }
        else {
            this.alert = "You need to fill all the information";
            this.showMessage = true;
        }
    };
    ContactComponent.prototype.hideAlert = function () {
        this.showMessage = false;
    };
    ContactComponent.prototype.changeNavStyle = function () {
        document.getElementById("navbar").style.background = "#222";
        document.getElementById("navLink").style.color = "#fff";
        document.getElementById("navLink1").style.color = "#fff";
        document.getElementById("navLink2").style.color = "#fff";
        document.getElementById("navLink3").style.color = "#fff";
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nfooter{\r\n    background:#37474F;\r\n    color:white;\r\n    background-image:url(\"https://www.lamborghini.com/themes/custom/lambo/img/base/bg-footer.jpg\");\r\n    background-size: 100% \r\n    }\r\n    \r\n    a{\r\n       \r\n     color:white;\r\n     text-decoration:none\r\n    \r\n    }\r\n    \r\n    hr{\r\n      display: block;\r\n        height: 1px;\r\n        border: 0;\r\n        border-top: 1px solid #ccc;\r\n        margin: 1em 0;\r\n        padding: 0; \r\n    }\r\n    \r\n    i.fa.fa-facebook, i.fa.fa-twitter, i.fa.fa-instagram{\r\n     border-radius: 100%;\r\n     font-size: 28px;\r\n     height: 40px;\r\n     line-height: 40px;\r\n     margin: 5px;\r\n     text-align: center;\r\n     width: 40px;\r\n     }\r\n    \r\n    i.fa.fa-facebook{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n    \r\n    i.fa.fa-twitter{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n    \r\n    i.fa.fa-instagram{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n    \r\n    i.fa.fa-facebook, i.fa.fa-twitter, i.fa.fa-instagram,i.fa.fa-pinterest,i.fa.fa-linkedin,i.fa.fa-google-plus,i.fa.fa-github{\r\n     border-radius: 100%;\r\n     font-size: 28px;\r\n     height: 38px;\r\n     line-height: 40px;\r\n     margin: 5px;\r\n     text-align: center;\r\n     width: 38px;\r\n     }\r\n    \r\n    i.fa.fa-github{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n    \r\n    i.fa.fa-google-plus{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n    \r\n    i.fa.fa-pinterest{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n    \r\n    i.fa.fa-linkedin{\r\n     border: 1px solid #FFFFFF;\r\n     color: #FFFFFF;\r\n     }\r\n    \r\n    .social-icons .fa:hover, .social-icons .fa:active {\r\n        color: #FFF;\r\n        -webkit-box-shadow: 1px 1px 3px #333;\r\n        box-shadow: 1px 1px 3px #333; \r\n    }\r\n    \r\n    .social-icons.icon-zoom .fa:hover, .social-icons.icon-zoom .fa:active { \r\n         -webkit-transform: scale(1.1);\r\n        transform: scale(1.1); \r\n    }\r\n    \r\n    .list-unstyled {\r\n        padding-left: 0;\r\n        list-style: none;\r\n    }\r\n    \r\n    .list-inline li {\r\n        display: inline-block;\r\n        padding-right: 0.5px;\r\n        padding-left: 0px;\r\n        margin-bottom: -90px;\r\n    }\r\n    \r\n    .copyright {\r\n        padding: 0px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .row a:hover{\r\n      color:#787878;\r\n      text-decoration:none\r\n    }\r\n    \r\n    .row a:active{\r\n      \r\n      color:#FFFFFF;\r\n      text-decoration:none\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Footer-->\r\n\r\n<footer class=\"page-footer mdb-color center-on-small-only top-buffer\">\r\n\r\n  <!--Footer Links-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"row\"><br><br></div>\r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a> </h4></div>\r\n    <!--<hr style='margin-top:-1em'>-->\r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a></h4></div>\r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a></h4></div>  \r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a></h4></div> \r\n    <div class=\"col-md-1 offset-md-1\"><h4><a href=\"\"></a> </h4></div> \r\n    \r\n    </div>\r\n      <div  class=\"row\">\r\n          <!--First column-->\r\n             <div id=\"links1\" class=\"col-md-2 offset-md-4\">\r\n              <h5 class=\"title\">Models </h5>\r\n              <hr style='margin-top:1em'> \r\n              <p><a href=\"#!\">Corvo Imperial</a></p>\r\n              <p><a href=\"#!\">Corvo Corux</a></p>\r\n              <p><a href=\"#!\">Corvo Atanno</a></p>\r\n              <p><a href=\"#!\">Corvo Especial</a></p>\r\n              <ul>\r\n                                    \r\n              </ul>\r\n          </div>\r\n\r\n      \r\n          <!--Third column-->\r\n          <div id=\"links2\" class=\"col-md-2 offset-md-1\">\r\n              <h5 class=\"title\">About us</h5>\r\n              <hr style='margin-top:1em'>\r\n              <p><a href=\"#!\">About</a></p>\r\n              <p><a href=\"#!\">Blog</a></p>\r\n              <p> <a href=\"#!\">Privacy Policy</a></p>\r\n              <p><a href=\"#!\">Terms of service</a></p>\r\n              <ul>\r\n\r\n              </ul>\r\n          </div>\r\n          \r\n          <!--Fourth column-->\r\n         <div id=\"links2\" class=\"col-md-5 offset-md-1\">\r\n      \r\n          <a class=\"twitter-timeline\" href=\"https://twitter.com/Corvus_imperio?ref_src=twsrc%5Etfw\" ata-width=\"800\"\r\n          data-height=\"200\">Tweets by Corvus_imperio</a>\r\n          <ng4-twitter-timeline hidden [dataSrc]=\"{sourceType: 'profile',screenName: 'Corvus_imperio'}\" [opts]=\"{tweetLimit: 2}\">Tweets by Corvus_imperio</ng4-twitter-timeline>\r\n          \r\n        </div>  \r\n      \r\n\r\n          <!--/.Fourth column-->\r\n\r\n      </div>\r\n  </div>\r\n  <!--/.Footer Links-->\r\n\r\n  <!--Call to action-->\r\n\r\n  <!--Social buttons-->\r\n  <div class=\"text-center mb-3\">\r\n     <div class=\"container-fluid\">\r\n    <ul class=\"social-icons icon-circle icon-zoom list-unstyled list-inline\"> \r\n      <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a> </li> \r\n      <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a> </li>   \r\n      <li> <a href=\"#\"><i class=\"fa fa-google-plus\"></i></a> </li>\r\n      <li> <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> </li> \r\n      <li> <a href=\"#\"><i class=\"fa fa-github\"></i></a> </li> \r\n      <li> <a href=\"#\"><i class=\"fa fa-pinterest\"></i></a> </li> \r\n          <li> <a href=\"#\"><i class=\"fa fa-instagram\"></i></a> </li> \r\n      \r\n    </ul>\r\n        ©2018 Copyright: <a class=\"copyright\" href=\"\"> CorvusImperial.com \r\n         </a>\r\n\r\n      </div>\r\n  </div>\r\n</footer>\r\n<!--/.Footer-->\r\n      "

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

module.exports = "body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #888;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n\r\nstrong { font-weight: 500; }\r\n\r\na, a:hover, a:focus {\r\n\tcolor: #cb9f3d; text-decoration: none; -webkit-transition: all .3s; transition: all .3s;\r\n}\r\n\r\nh1, h2 { margin-top: 10px; font-family: 'Josefin Sans', sans-serif; font-size: 48px; font-weight: 300; color: #555; line-height: 56px; }\r\n\r\nh3 { font-family: 'Josefin Sans', sans-serif; font-size: 32px; font-weight: 300; color: #555; line-height: 40px; }\r\n\r\nimg { max-width: 100%; }\r\n\r\n.medium-paragraph { font-size: 18px; line-height: 34px; }\r\n\r\n.colored { color: #cb9f3d; }\r\n\r\n::-moz-selection { background: #cb9f3d; color: #fff; text-shadow: none; }\r\n\r\n::selection { background: #cb9f3d; color: #fff; text-shadow: none; }\r\n\r\n/***** General style, all sections *****/\r\n\r\n.section-container { margin: 0 auto; padding-bottom: 80px; }\r\n\r\n.section-description { margin-top: 60px; padding-bottom: 10px; }\r\n\r\n.section-description p { margin-top: 20px; padding: 0 120px; }\r\n\r\n/***** Divider *****/\r\n\r\n.divider-1 { padding: 25px 0 15px 0; }\r\n\r\n.divider-1 .line { width: 160px; margin: 0 auto; border-bottom: 1px dashed #ccc; }\r\n\r\n.top-content-container { padding: 350px 0 400px 0; }\r\n\r\n.top-content .text { padding-top: 60px; color: #fff; }\r\n\r\n.top-content .text h1 { color: #fff; }\r\n\r\n.top-content .description { margin: 1em 0; }\r\n\r\n.top-content .description p { opacity: 0.8; }\r\n\r\n.top-content .description a { color: #fff; border-bottom: 1px dotted #fff; }\r\n\r\n.top-content .description a:hover, .top-content .description a:focus { color: #fff; border: 0; }\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-content-container\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text wow fadeInLeft\">\r\n          <h1>Corvo Imperiale</h1>\r\n          <div class=\"description\">\r\n            <p class=\"medium-paragraph\">\r\n              Our newest car!\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

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

module.exports = "body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #888;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n\r\nstrong { font-weight: 500; }\r\n\r\na, a:hover, a:focus {\r\n\tcolor: #cb9f3d; text-decoration: none; -webkit-transition: all .3s; transition: all .3s;\r\n}\r\n\r\nh1, h2 { margin-top: 10px; font-family: 'Josefin Sans', sans-serif; font-size: 48px; font-weight: 300; color: #555; line-height: 56px; }\r\n\r\nh3 { font-family: 'Josefin Sans', sans-serif; font-size: 32px; font-weight: 300; color: #555; line-height: 40px; }\r\n\r\nimg { max-width: 100%; }\r\n\r\n.medium-paragraph { font-size: 18px; line-height: 34px; }\r\n\r\n.colored { color: #cb9f3d; }\r\n\r\n::-moz-selection { background: #cb9f3d; color: #fff; text-shadow: none; }\r\n\r\n::selection { background: #cb9f3d; color: #fff; text-shadow: none; }\r\n\r\n/***** General style, all sections *****/\r\n\r\n.section-container { margin: 0 auto; padding-bottom: 80px; }\r\n\r\n.section-description { margin-top: 60px; padding-bottom: 10px; }\r\n\r\n.section-description p { margin-top: 20px; padding: 0 120px; }\r\n\r\n/***** Divider *****/\r\n\r\n.divider-1 { padding: 25px 0 15px 0; }\r\n\r\n.divider-1 .line { width: 160px; margin: 0 auto; border-bottom: 1px dashed #ccc; }\r\n\r\n/* .top-content-container { padding: 350px 0 400px 0; } */\r\n\r\n.top-content .text { padding-top: 60px; color: #fff; }\r\n\r\n.top-content .text h1 { color: #fff; }\r\n\r\n.top-content .description { margin: 1em 0; }\r\n\r\n.top-content .description p { opacity: 0.8; }\r\n\r\n.top-content .description a { color: #fff; border-bottom: 1px dotted #fff; }\r\n\r\n.top-content .description a:hover, .top-content .description a:focus { color: #fff; border: 0; }\r\n\r\n.top-content{\r\n    background: url('signature3.22e1c19a8fbd7eec3539.jpg') no-repeat center center;\r\n    font-family: 'Roboto', sans-serif;\r\n    background-size: cover;\r\n    background-position: 50% 80%;\r\n\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-content\">\r\n    <app-nav-bar></app-nav-bar>\r\n    <span class=\"helper\"></span>\r\n    <app-header></app-header>\r\n</div>\r\n<app-models (modelIDChanged)='onModelIDChanged($event)'></app-models>\r\n<car-builder [modelID]='selectedModelID' ></car-builder>\r\n\r\n\r\n"

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
        this.selectedModelID = 1;
    }
    HomeComponent.prototype.onModelIDChanged = function (modelID) {
        this.selectedModelID = modelID;
    };
    HomeComponent.prototype.ngOnInit = function () {
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

module.exports = "\r\n.modelName{\r\n    color: white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    font-size: 10vw;\r\n    margin-left: 16vw;\r\n}\r\n\r\n.feature{\r\n    color: white;\r\n    font-family: 'Rajdhani', sans-serif;\r\n}\r\n\r\n.iconsContainer{\r\n  margin-left: 40vw; \r\n}\r\n\r\n.imperiale-container{\r\n    background: url('imperiale_bg.206f5f75a8dfb00a67b9.jpeg') no-repeat center center;\r\n    font-family: 'Roboto', sans-serif;\r\n    \r\n   /* \r\n    background-position: 50% 80%;\r\n    padding: 350px 0 400px 0;*/\r\n    background-size: 100% 100%;\r\n    padding: 5%;\r\n    height: 57vw;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.kubanyi-container{\r\n    background: url('kubanyi_bg.68ceea179830ba9849f1.jpeg') no-repeat center center;\r\n    font-family: 'Roboto', sans-serif;\r\n    \r\n   /* \r\n    background-position: 50% 80%;\r\n    padding: 350px 0 400px 0;*/\r\n    background-size: 100% 100%;\r\n    padding: 5%;\r\n    height: 57vw;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.imparatus-container{\r\n    background: url('imparatus_bg.aca6e20e47dcca7ee780.jpeg') no-repeat center center;\r\n    font-family: 'Roboto', sans-serif;\r\n    \r\n   /* \r\n    background-position: 50% 80%;\r\n    padding: 350px 0 400px 0;*/\r\n    background-size: 100% 100%;\r\n    padding: 5%;\r\n    height: 57vw;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#air{\r\n    background: url('Airbags.24084a5dbaf20916f9d4.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#auto{\r\n    background: url('automatic.e14c2e89e55137e0fb97.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#rear{\r\n    background: url('rearview.3340c0355d6791c715bf.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#double{\r\n    background: url('doubleCab.2cd3d344cbc21fc3f878.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#manual{\r\n    background: url('manual.7af2fa90dce51ff4d315.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#warranty{\r\n    background: url('warranty.861b8388de3e4b2bcd6b.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n#voice{\r\n    background: url('voice.a4a30a19c5dd984e8002.png')  center no-repeat;\r\n    background-size: 100% 100%;\r\n    width: 5vw;\r\n    height: 5vw;\r\n}\r\n\r\n/* css button animation xdd */\r\n\r\na {\r\n    text-decoration: none;\r\n  \r\n  }\r\n\r\n.box {\r\n      font-size: 2vw;\r\n      font-family: 'Rajdhani', sans-serif;\r\n   margin-top: 2em;\r\n    position:relative;\r\n    vertical-align: middle;\r\n    color: #FFF;\r\n    display: inline-block;\r\n    \r\n    line-height: 60px;\r\n    text-align: center;\r\n    transition: 0.5s;\r\n    padding: 0.7em;\r\n    cursor: pointer;\r\n    border: 2px solid #FFF;\r\n    -webkit-transition:0.5s;\r\n  }\r\n\r\n.box:hover {\r\n    border: 2px solid rgba(0,160,80,0);\r\n    color: #FFF;\r\n  }\r\n\r\n.box::before, .box::after {\r\n    width: 100%;\r\n    height:100%;\r\n    z-index: 3;\r\n    content:'';\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.foo::before {\r\n    border-bottom: 3px solid #cb9f3d;\r\n    border-left: 3px solid #cb9f3d;\r\n    -webkit-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n  }\r\n\r\n.foo::after {\r\n    border-top: 3px solid #cb9f3d;\r\n    border-right: 3px solid #cb9f3d;\r\n    -webkit-transform-origin: 100% 0%;\r\n    transform-origin: 100% 0%;\r\n  }\r\n\r\n.box:hover::after, .box:hover::before {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n.card-container {\r\n    text-transform: uppercase;\r\n    font-size: 2vw;\r\n    color: #FFF;\r\n    font-family: 'Rajdhani', sans-serif;\r\n    height: 5vw;\r\n    -webkit-perspective: 600;\r\n            perspective: 600;\r\n    position: relative;\r\n    width: 15vw;\r\n  }\r\n\r\n.card {\r\n   \r\n    height: 100%;\r\n    position: absolute;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-transition: all 1s ease-in-out;\r\n    transition: all 1s ease-in-out;\r\n    width: 100%;\r\n  }\r\n\r\n.card:hover {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n\r\n.card .side {\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n\r\n.card .back {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    color: #cb9f3d;\r\n  }"

/***/ }),

/***/ "./src/app/model-info/model-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"model\">\r\n\r\n    <!-- Si vamos a cargar imagenes desde base de datos- esto se puede mejorar y quitar el switch de josue y la repeticion de css y codigo  -->\r\n    <div *ngSwitchCase=\"'Corvo Imperiale'\">\r\n        <div class=\"imperiale-container\">\r\n            <div class=\"modelName\">{{model}}</div>\r\n            <div class=\"iconsContainer\">\r\n                <div *ngFor=\"let feature of features; let i = index\">\r\n\r\n                    <div class=\"card-container\">\r\n                        <div class=\"card\">\r\n                            <div class=\"side\">\r\n                                <div class=\"icon\" id=\"{{getID(feature)}}\"></div>\r\n                            </div>\r\n                            <div class=\"side back\">{{feature}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <a target='_BLANK'>\r\n                <div class='box foo col-sm-4  col-md-offset-4 col-sm-offset-4'>\r\n                    CUSTOMIZE YOUR OWN!\r\n                </div>\r\n            </a>\r\n\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'Corvo Kubanyi'\">\r\n        <div class=\"kubanyi-container\">\r\n            <div class=\"modelName\">{{model}}</div>\r\n            <div class=\"iconsContainer\">\r\n                <div *ngFor=\"let feature of features; let i = index\">\r\n\r\n                    <div class=\"card-container\">\r\n                        <div class=\"card\">\r\n                            <div class=\"side\">\r\n                                <div class=\"icon\" id=\"{{getID(feature)}}\"></div>\r\n                            </div>\r\n                            <div class=\"side back\">{{feature}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <a target='_BLANK'>\r\n\r\n                <div class='box foo box foo col-sm-4  col-md-offset-4 col-sm-offset-4'>\r\n                    CUSTOMIZE YOUR OWN!\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'Corvo Imparatus'\">\r\n        <div class=\"imparatus-container\">\r\n            <div class=\"modelName\">{{model}}</div>\r\n            <div class=\"iconsContainer\">\r\n                <div *ngFor=\"let feature of features; let i = index\">\r\n\r\n                    <div class=\"card-container\">\r\n                        <div class=\"card\">\r\n                            <div class=\"side\">\r\n                                <div class=\"icon\" id=\"{{getID(feature)}}\"></div>\r\n                            </div>\r\n                            <div class=\"side back\">{{feature}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <a target='_BLANK'>\r\n                <div class='box foo  col-sm-4 col-md-offset-4 col-sm-offset-4'>\r\n                    CUSTOMIZE YOUR OWN!\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchDefault class=\"imparatus-container\">\r\n        <div class=\"modelName\">{{model}}</div>\r\n        <div class=\"iconsContainer\">\r\n            <div *ngFor=\"let feature of features; let i = index\">\r\n\r\n                <div class=\"card-container\">\r\n                    <div class=\"card\">\r\n                        <div class=\"side\">\r\n                            <div class=\"icon\" id=\"{{getID(feature)}}\"></div>\r\n                        </div>\r\n                        <div class=\"side back\">{{feature}}</div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <a target='_BLANK'>\r\n            <div class='box foo col-sm-4 col-md-offset-4 col-sm-offset-4'>\r\n                CUSTOMIZE YOUR OWN!\r\n            </div>\r\n        </a>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/model-info/model-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelInfoComponent; });
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


var ModelInfoComponent = /** @class */ (function () {
    function ModelInfoComponent(carData) {
        this.carData = carData;
        this.model = "";
    }
    ModelInfoComponent.prototype.ngOnInit = function () {
    };
    ModelInfoComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.model.length !== 0) {
            this.carData.getFeatures(this.model).subscribe(function (res) { _this.features = res; });
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('model'),
        __metadata("design:type", String)
    ], ModelInfoComponent.prototype, "model", void 0);
    ModelInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-model-info',
            template: __webpack_require__("./src/app/model-info/model-info.component.html"),
            styles: [__webpack_require__("./src/app/model-info/model-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */]])
    ], ModelInfoComponent);
    return ModelInfoComponent;
}());



/***/ }),

/***/ "./src/app/models/models.component.css":
/***/ (function(module, exports) {

module.exports = ".section-title {\r\n    font-family: \"Josefine sans\", \"sans-seriff\";\r\n    border-bottom: 1px solid #222;\r\n    text-align: center;\r\n}\r\n\r\n.model-container{\r\n    width: 100%;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.model-container.active {\r\n    border: 2px solid rgb(10, 10, 10);\r\n}\r\n\r\n.contain-header>img{\r\n    max-height:100%; \r\n    max-width:100%;\r\n}"

/***/ }),

/***/ "./src/app/models/models.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"section-title\">\r\n      <h1>Models</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row top-buffer\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"col-md-4 col-sm-12 col-xs-12\" *ngFor=\"let model of models; let i = index\" (click)=\"setSelectedModel(i)\">\r\n        \r\n        <div class=\"model-container\" [class.active]=\"i == selectedModel\">\r\n          <div class=\"contain-header\">\r\n            <img src=\"{{model.image}}\" alt=\"\">\r\n          </div>\r\n          <div class=\"contain-footer\">\r\n            <div class=\"model-name\">\r\n              <h3>{{model.name}}</h3>\r\n            </div>\r\n            <div class=\"contain-footer\">\r\n              <p>{{model.description}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"clearfix visible-xs-block\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-model-info [model]=\"selectedModelName\"></app-model-info>"

/***/ }),

/***/ "./src/app/models/models.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsComponent; });
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


var ModelsComponent = /** @class */ (function () {
    function ModelsComponent(carData) {
        this.carData = carData;
        this.modelIDChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectedModel = 2;
        this.selectedModelName = "";
    }
    ModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carData.getModels().subscribe(function (res) {
            _this.models = res;
            _this.selectedModelName = _this.models[1].name;
        });
    };
    // getModels(){
    //   this.http.get('/car_models').subscribe( data =>{
    //     this.models = data;
    //     this.selectedModelName = this.models[1].name; // selecciona el modelo inicial, asi no tiene que usar el default prros
    //   });
    // }
    ModelsComponent.prototype.setSelectedModel = function (index) {
        this.selectedModel = index;
        this.selectedModelName = this.models[index].name;
        this.modelIDChanged.emit(index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('modelIDChanged'),
        __metadata("design:type", Object)
    ], ModelsComponent.prototype, "modelIDChanged", void 0);
    ModelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-models',
            template: __webpack_require__("./src/app/models/models.component.html"),
            styles: [__webpack_require__("./src/app/models/models.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */]])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.navbar {\r\n\tmargin-bottom: 0;\r\n\tfont-family: 'Cinzel', serif;\r\n\tpadding-top: 10px;\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tborder: 0;\r\n\theight: 100px; border-radius: 0; -webkit-transition: all .6s; transition: all .6s;\r\n}\r\n\r\nul.navbar-nav {\r\n\tmargin-top: 1%;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n\tfont-size: 20px;\r\n\tcolor: #fff;\r\n\tfont-weight: 400;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\nli.effect-box:after,\r\nli.effect-box:before {\r\n\tcontent: '';\r\n  position: absolute;\r\n  left: 0;\r\n  display: inline-block;\r\n  height:100%;\r\n  width: 0%;\r\n  color: #cb9f3d;\r\n  opacity: 0;\r\n\t-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\r\n\ttransition: opacity 0.35s, -webkit-transform 0.35s;\r\n\ttransition: opacity 0.35s, transform 0.35s;\r\n\ttransition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n\t\r\n}\r\n\r\nli.effect-box:before {\r\n  border-left: 1px solid;\r\n  border-right: 1px solid;\r\n  -webkit-transform: scale(1,0);\r\n\ttransform: scale(1,0);\r\n}\r\n\r\nli.effect-box:after {\r\n  border-bottom: 1px solid;\r\n  border-top: 1px solid;\r\n  -webkit-transform: scale(0,1);\r\n\ttransform: scale(0,1);\r\n}\r\n\r\nli.effect-box:hover:after,\r\nli.effect-box:hover:before {\r\n  opacity: 1;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n}\r\n\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3 {\r\n\tdisplay: inline-block;\r\n\tmargin: 9px 0 0 15px;\r\n\tpadding: 6px 15px;\r\n\tbackground: #cb9f3d;\r\n\tborder: 0;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n\tfont-size: 14px;\r\n    font-weight: 300;\r\n    color: #fff;\r\n    opacity: 1;\r\n    text-transform: uppercase; border-radius: 6px;\r\n}\r\n\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3:hover,\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3:focus,\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3:active,\r\n.navbar-inverse ul.navbar-nav li a.btn-link-3:active:focus { outline: 0; opacity: 0.6; color: #fff; }\r\n\r\n.navbar-brand {\r\n\twidth: 102px;\r\n\theight: 80px;\r\n\tbackground: url('corvo-logo.6587dcbb4f15738d24e1.png')  center no-repeat;\r\n\tbackground-size: 100%;\r\n\ttext-indent: -99999px;\r\n}\r\n\r\n.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand { margin-left: 0; }\r\n\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top menu -->\r\n<nav class=\"navbar navbar-inverse\" role=\"navigation\" id=\"navbar\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#top-navbar-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>  \r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"\">Corvo</a>\r\n    </div>\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"top-navbar-1\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"effect-box\">\r\n          <a routerLink=\"\" id=\"navLink\">Models</a>\r\n        </li>\r\n        <li  class=\"effect-box\">\r\n          <a routerLink=\"\"  id=\"navLink1\">Custom</a>\r\n        </li>\r\n        <li  class=\"effect-box\">\r\n          <a routerLink=\"\"  id=\"navLink2\">Compare</a>\r\n        </li>\r\n        <li  class=\"effect-box\">\r\n          <a routerLink=\"contact\"  id=\"navLink3\">Contact</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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