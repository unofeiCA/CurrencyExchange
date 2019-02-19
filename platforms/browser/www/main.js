(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBjb2xvcjogIzM2OTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<div>\n  <span>source:</span>&nbsp;&nbsp;&nbsp;\n  <select [(ngModel)]=\"source\" (change)=\"onSourceOption()\">\n    <option *ngFor=\"let currency of currencies\" ><span>{{currency}}</span></option>\n  </select>\n  &nbsp;&nbsp;&nbsp;\n  <input [(ngModel)]=\"sourceAmount\" (keyup)=\"onSourceInput()\"/>\n</div>\n<br/>\n<div>\n    <span>target&nbsp;:</span>&nbsp;&nbsp;&nbsp;\n    <select [(ngModel)]=\"target\" (change)=\"onTargetOption()\">\n      <option *ngFor=\"let currency of currencies\"><span>{{currency}}</span></option>\n    </select>\n    &nbsp;&nbsp;&nbsp;\n    <input [(ngModel)]=\"targetAmount\" (keyup)=\"onTargetInput()\"/>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exchange_rate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exchange-rate.service */ "./src/app/exchange-rate.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(exchangeRateService) {
        this.exchangeRateService = exchangeRateService;
        this.title = 'CurrencyExchange';
        this.source = 'USD';
        this.target = 'USD';
    }
    AppComponent.prototype.getExchangeRates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.exchangeRateService.getExchangeRates()];
                    case 1:
                        _a.exchangeRates = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.getCurrencies = function () {
        this.currencies = this.exchangeRateService.getCurrencies();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getCurrencies();
        this.getExchangeRates();
    };
    AppComponent.prototype.onSourceInput = function () {
        this.targetAmount = this.exchangeRateService.getTargetAmountBySource(this.source, this.target, this.sourceAmount);
    };
    AppComponent.prototype.onTargetInput = function () {
        this.sourceAmount = this.exchangeRateService.getSourceAmountByTarget(this.source, this.target, this.targetAmount);
    };
    AppComponent.prototype.onSourceOption = function (currency) {
        this.targetAmount = this.exchangeRateService.getTargetAmountBySource(this.source, this.target, this.sourceAmount);
    };
    AppComponent.prototype.onTargetOption = function (currency) {
        this.targetAmount = this.exchangeRateService.getTargetAmountBySource(this.source, this.target, this.sourceAmount);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exchange_rate_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeRateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





 // <-- NgModel lives here
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/exchange-rate.service.ts":
/*!******************************************!*\
  !*** ./src/app/exchange-rate.service.ts ***!
  \******************************************/
/*! exports provided: ExchangeRateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRateService", function() { return ExchangeRateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _exchange_rate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchange-rate */ "./src/app/exchange-rate.ts");




var CURRENCIES = ['USD', 'CAD', 'CNY', 'EUR', 'GBP', 'CHF', 'AUD', 'HKD', 'RUB'];
var URL = 'http://apilayer.net/api/live?access_key=ba58bb60863ed6a169618b614bece399&source=USD&format=1&currencies=';
var ExchangeRateService = /** @class */ (function () {
    function ExchangeRateService(http) {
        this.http = http;
    }
    ExchangeRateService.prototype.getCurrencies = function () {
        return CURRENCIES;
    };
    ExchangeRateService.prototype.getRateBetweenSourceAndTarget = function (source, target) {
        var rateBetweenSourceAndUSD, rateBetweenTargetAndUSD;
        for (var _i = 0, _a = this.exchangeRates; _i < _a.length; _i++) {
            var er = _a[_i];
            if (er.target == source) {
                rateBetweenSourceAndUSD = er.rate;
            }
            if (er.target == target) {
                rateBetweenTargetAndUSD = er.rate;
            }
        }
        return rateBetweenSourceAndUSD / rateBetweenTargetAndUSD;
    };
    ExchangeRateService.prototype.getTargetAmountBySource = function (source, target, amount) {
        var rateBetweenSourceAndTarget = this.getRateBetweenSourceAndTarget(source, target);
        return amount / rateBetweenSourceAndTarget;
    };
    ExchangeRateService.prototype.getSourceAmountByTarget = function (source, target, amount) {
        var rateBetweenSourceAndTarget = this.getRateBetweenSourceAndTarget(source, target);
        return amount * rateBetweenSourceAndTarget;
    };
    ExchangeRateService.prototype.getExchangeRates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var u, i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        u = URL;
                        for (i = 0; i < CURRENCIES.length; i++) {
                            u += CURRENCIES[i];
                            if (i != (CURRENCIES.length - 1)) {
                                u += ',';
                            }
                        }
                        return [4 /*yield*/, this.http.get(u).subscribe(function (data) {
                                console.log('json get');
                                if (data['success'] == true) {
                                    _this.exchangeRates = [];
                                    var quotes = data['quotes'];
                                    var source = data['source'];
                                    for (var key in quotes) {
                                        //find the source and target
                                        var s = source;
                                        var t = key.substr(key.indexOf(source) + source.length, key.length - source.length);
                                        var er = new _exchange_rate__WEBPACK_IMPORTED_MODULE_3__["ExchangeRate"];
                                        er.source = s;
                                        er.target = t;
                                        er.rate = quotes[key];
                                        _this.exchangeRates.push(er);
                                    }
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.exchangeRates];
                }
            });
        });
    };
    ExchangeRateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExchangeRateService);
    return ExchangeRateService;
}());



/***/ }),

/***/ "./src/app/exchange-rate.ts":
/*!**********************************!*\
  !*** ./src/app/exchange-rate.ts ***!
  \**********************************/
/*! exports provided: ExchangeRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRate", function() { return ExchangeRate; });
var ExchangeRate = /** @class */ (function () {
    function ExchangeRate() {
    }
    return ExchangeRate;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });
var onDeviceReady = function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
};
document.addEventListener('deviceready', onDeviceReady, false);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yufei/Documents/workSpace/CurrencyExchange/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map