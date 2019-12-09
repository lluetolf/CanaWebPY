(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <button mat-icon-button>\n        <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n      </button>\n      <h1>CanaWebPY</h1>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #sidenav mode=\"side\" class=\"sidenav-sidenav\">\n\n      <mat-nav-list>\n\n          <a mat-list-item [routerLink]=\"'/dashboard'\"> Home </a>\n          <a mat-list-item [routerLink]=\"'/fieldList'\"> Fields </a>\n          <a mat-list-item [routerLink]=\"'/payableList'\"> Payable </a>\n          <a mat-list-item [routerLink]=\"'/receivableList'\"> Receivable </a>\n          <!-- <a mat-list-item [routerLink]=\"'/contacts'\"> Contacts </a> -->\n    \n        </mat-nav-list>\n\n  </mat-sidenav>\n\n  <mat-sidenav-content class=\"sidenav-content\">\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Dashboard!</p>\n<h3>Fields</h3>\n<div *ngFor=\"let field of fields\" class=\"module \">\n    <pre>{{field | json}}</pre>\n</div>\n\n<h3>Payables</h3>\n<div *ngFor=\"let payable of payables\" class=\"module \">\n    <pre>{{payable | json}}</pre>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/create-field-dialog/create-field-dialog.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fields/create-field-dialog/create-field-dialog.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add Field</h1>\n\n<div mat-dialog-content>\n    <div class=\"example-container\">\n        <p>{{field.id}}</p>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Ingenio Id\" [(ngModel)]=\"field.ingenioId\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"field.name\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Owner\" [(ngModel)]=\"field.owner\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Size\" [(ngModel)]=\"field.size\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Cultivated\" [(ngModel)]=\"field.cultivatedArea\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Acquisition date\" \n                [(ngModel)]=\"acquisitionDateField\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n    </div>           \n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dismiss()\">Cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"save()\">Create</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/edit-field-dialog/edit-field-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fields/edit-field-dialog/edit-field-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Edit Field</h1>\n\n<div mat-dialog-content>\n    <div class=\"example-container\">\n        <p>{{field.id}}</p>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Ingenio Id\" [(ngModel)]=\"field.ingenioId\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"field.name\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Owner\" [(ngModel)]=\"field.owner\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Size\" [(ngModel)]=\"field.size\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Cultivated\" [(ngModel)]=\"field.cultivatedArea\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Acquisition date\" \n                [(ngModel)]=\"acquisitionDateField\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n    </div>           \n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dismiss()\">Cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"save()\">Save</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/field-list/field-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fields/field-list/field-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>FieldList!</h1>\n<div class=\"container\">\n    <table mat-table [dataSource]=\"fields\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n        <ng-container matColumnDef=\"owner\">\n            <th mat-header-cell *matHeaderCellDef> Owner </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.owner}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> Id </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"acquisitionDate\">\n            <th mat-header-cell *matHeaderCellDef> Acquisition Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.acquisitionDate}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"size\">\n            <th mat-header-cell *matHeaderCellDef> Size </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.size}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"cultivatedArea\">\n            <th mat-header-cell *matHeaderCellDef> Cultivated Area </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.cultivatedArea}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        \n        <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef>  </th>\n            <td mat-cell *matCellDef=\"let element\"> \n                <div class=\"buttoncontainer\">\n                    <button mat-mini-fab aria-label=\"Edit\" (click)=\"openEditDialog(element)\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                </div>\n            </td>\n            <td mat-footer-cell *matFooterCellDef>\n                <div class=\"buttoncontainer\">\n                    <button mat-flat-button color=\"primary\" aria-label=\"add\" (click)=\"openCreateDialog()\">\n                        <mat-icon>add</mat-icon>\n                    </button>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n    </table>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payable/create-payable/create-payable.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payable/create-payable/create-payable.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>create-payable works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payable/edit-payable/edit-payable.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payable/edit-payable/edit-payable.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-payable works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payable/payable-list/payable-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payable/payable-list/payable-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>payable-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/version-page/version-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/version-page/version-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>version-page works!!</p>\n<p>Last build: 15:06</p>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fields_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/field-list/field-list.component */ "./src/app/fields/field-list/field-list.component.ts");
/* harmony import */ var _version_page_version_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version-page/version-page.component */ "./src/app/version-page/version-page.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'payableList', component: _fields_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__["FieldListComponent"] },
    { path: 'receivableList', component: _fields_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__["FieldListComponent"] },
    { path: 'contact', component: _fields_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__["FieldListComponent"] },
    { path: 'version', component: _version_page_version_page_component__WEBPACK_IMPORTED_MODULE_4__["VersionPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  border: 0;\n}\n\n.sidenav-sidenav {\n  padding: 10px;\n}\n\n.sidenav-content {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9sdWthcy9QeWNoYXJtUHJvamVjdHMvQ2FuYVdlYlBZL2NhbmF3ZWItdWktYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdi1zaWRlbmF2IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7ICAgICBcclxuICB9IiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbi5zaWRlbmF2LXNpZGVuYXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _version_page_version_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./version-page/version-page.component */ "./src/app/version-page/version-page.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _fields_fields_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/fields.module */ "./src/app/fields/fields.module.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _fields_edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fields/edit-field-dialog/edit-field-dialog.component */ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts");
/* harmony import */ var _fields_create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fields/create-field-dialog/create-field-dialog.component */ "./src/app/fields/create-field-dialog/create-field-dialog.component.ts");
/* harmony import */ var _payable_payables_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payable/payables.module */ "./src/app/payable/payables.module.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _version_page_version_page_component__WEBPACK_IMPORTED_MODULE_9__["VersionPageComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"]
        ],
        imports: [
            _shared_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _fields_fields_module__WEBPACK_IMPORTED_MODULE_11__["FieldsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_13__["InMemoryDataService"], { dataEncapsulation: false }),
            _payable_payables_module__WEBPACK_IMPORTED_MODULE_17__["PayablesModule"]
        ],
        providers: [],
        entryComponents: [_fields_edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_15__["EditFieldDialogComponent"], _fields_create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_16__["CreateFieldDialogComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fields_fields_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fields/fields.service */ "./src/app/fields/fields.service.ts");
/* harmony import */ var _payable_payables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payable/payables.service */ "./src/app/payable/payables.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(fieldsService, payablesService) {
        this.fieldsService = fieldsService;
        this.payablesService = payablesService;
        this.fields = [];
        this.payables = [];
    }
    ngOnInit() {
        this.getFields();
        this.getPayables();
    }
    getFields() {
        this.fieldsService.getFields()
            .subscribe(fields => {
            this.fields = fields;
            console.log("Fields: ");
            fields.forEach(element => {
                console.log(JSON.stringify(element));
            });
        });
    }
    getPayables() {
        this.payablesService.getPayables()
            .subscribe(payables => {
            this.payables = payables;
            console.log("Payables: ");
            payables.forEach(element => {
                console.log(JSON.stringify(element));
            });
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _fields_fields_service__WEBPACK_IMPORTED_MODULE_2__["FieldsService"] },
    { type: _payable_payables_service__WEBPACK_IMPORTED_MODULE_3__["PayablesService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/fields/create-field-dialog/create-field-dialog.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/fields/create-field-dialog/create-field-dialog.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9sdWthcy9QeWNoYXJtUHJvamVjdHMvQ2FuYVdlYlBZL2NhbmF3ZWItdWktYXBwL3NyYy9hcHAvZmllbGRzL2NyZWF0ZS1maWVsZC1kaWFsb2cvY3JlYXRlLWZpZWxkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmllbGRzL2NyZWF0ZS1maWVsZC1kaWFsb2cvY3JlYXRlLWZpZWxkLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmllbGRzL2NyZWF0ZS1maWVsZC1kaWFsb2cvY3JlYXRlLWZpZWxkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/fields/create-field-dialog/create-field-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/fields/create-field-dialog/create-field-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateFieldDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFieldDialogComponent", function() { return CreateFieldDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_model_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/field */ "./src/app/model/field.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fields.service */ "./src/app/fields/fields.service.ts");





let CreateFieldDialogComponent = class CreateFieldDialogComponent {
    constructor(dialogRef, fieldService) {
        this.dialogRef = dialogRef;
        this.fieldService = fieldService;
        this.dateFormat = 'dd.MM.yyyy';
    }
    ngOnInit() {
        this.field = new src_app_model_field__WEBPACK_IMPORTED_MODULE_2__["Field"]();
        console.log('Sent to CreateFieldDialogComponent: ');
    }
    save() {
        // Transform Date to String
        const ad = this.acquisitionDateField;
        const formattedDate = (ad.getDate()) + '.' + (ad.getMonth() + 1) + '.' + ad.getFullYear();
        this.field.acquisitionDate = formattedDate;
        this.fieldService.addField(this.field).subscribe(field => {
            console.log('Create:' + field);
            this.dialogRef.close();
        });
    }
    dismiss() {
        this.dialogRef.close();
    }
};
CreateFieldDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _fields_service__WEBPACK_IMPORTED_MODULE_4__["FieldsService"] }
];
CreateFieldDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-field-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-field-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/create-field-dialog/create-field-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-field-dialog.component.scss */ "./src/app/fields/create-field-dialog/create-field-dialog.component.scss")).default]
    })
], CreateFieldDialogComponent);



/***/ }),

/***/ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/fields/edit-field-dialog/edit-field-dialog.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9sdWthcy9QeWNoYXJtUHJvamVjdHMvQ2FuYVdlYlBZL2NhbmF3ZWItdWktYXBwL3NyYy9hcHAvZmllbGRzL2VkaXQtZmllbGQtZGlhbG9nL2VkaXQtZmllbGQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWVsZHMvZWRpdC1maWVsZC1kaWFsb2cvZWRpdC1maWVsZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZpZWxkcy9lZGl0LWZpZWxkLWRpYWxvZy9lZGl0LWZpZWxkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditFieldDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFieldDialogComponent", function() { return EditFieldDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_model_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/field */ "./src/app/model/field.ts");
/* harmony import */ var _fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fields.service */ "./src/app/fields/fields.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






let EditFieldDialogComponent = class EditFieldDialogComponent {
    constructor(dialogRef, data, fieldService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fieldService = fieldService;
        this.dateFormat = 'dd.MM.yyyy';
    }
    ngOnInit() {
        console.log('Sent to Dialog: ', this.data);
        this.field = Object.assign({}, this.data);
        const ad = this.field.acquisitionDate;
        this.acquisitionDateField = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["parse"])(ad, this.dateFormat, new Date());
    }
    pickAcquisitionDate(event) {
        const data = event;
        const formattedDate = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
        this.field.acquisitionDate = formattedDate;
        console.log('Reformated to: ' + formattedDate);
    }
    save() {
        // Transform Date to String
        const ad = this.acquisitionDateField;
        const formattedDate = (ad.getDate()) + '.' + (ad.getMonth() + 1) + '.' + ad.getFullYear();
        this.field.acquisitionDate = formattedDate;
        this.fieldService.updateField(this.field).subscribe(obs => {
            this.data.ingenioId = this.field.ingenioId;
            this.data.acquisitionDate = this.field.acquisitionDate;
            this.data.name = this.field.name;
            this.data.owner = this.field.owner;
            this.data.size = this.field.size;
            this.data.cultivatedArea = this.field.cultivatedArea;
            this.dialogRef.close();
        });
    }
    dismiss() {
        this.dialogRef.close();
    }
};
EditFieldDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_model_field__WEBPACK_IMPORTED_MODULE_3__["Field"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _fields_service__WEBPACK_IMPORTED_MODULE_4__["FieldsService"] }
];
EditFieldDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-field-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-field-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/edit-field-dialog/edit-field-dialog.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-field-dialog.component.scss */ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditFieldDialogComponent);



/***/ }),

/***/ "./src/app/fields/field-list/field-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/fields/field-list/field-list.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: auto;\n  min-width: 50%;\n}\n\n.buttoncontainer {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9sdWthcy9QeWNoYXJtUHJvamVjdHMvQ2FuYVdlYlBZL2NhbmF3ZWItdWktYXBwL3NyYy9hcHAvZmllbGRzL2ZpZWxkLWxpc3QvZmllbGQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmllbGRzL2ZpZWxkLWxpc3QvZmllbGQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9maWVsZHMvZmllbGQtbGlzdC9maWVsZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbmNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5cbi5idXR0b25jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/fields/field-list/field-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/fields/field-list/field-list.component.ts ***!
  \***********************************************************/
/*! exports provided: FieldListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldListComponent", function() { return FieldListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fields_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fields.service */ "./src/app/fields/fields.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-field-dialog/edit-field-dialog.component */ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts");
/* harmony import */ var _create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-field-dialog/create-field-dialog.component */ "./src/app/fields/create-field-dialog/create-field-dialog.component.ts");






let FieldListComponent = class FieldListComponent {
    constructor(fieldService, dialog) {
        this.fieldService = fieldService;
        this.dialog = dialog;
        this.fields = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['id', 'name', 'owner', 'size', 'cultivatedArea', 'acquisitionDate', 'actions'];
    }
    ngOnInit() {
        this.getFields();
    }
    getFields() {
        this.fieldService.getFields()
            .subscribe(fields => {
            this.fields.data = fields;
            fields.forEach(element => {
                console.log(JSON.stringify(element));
            });
        });
    }
    openEditDialog(field) {
        const dialogRef = this.dialog.open(_edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditFieldDialogComponent"], {
            width: '600px',
            data: field
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    openCreateDialog(field) {
        const dialogRef = this.dialog.open(_create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateFieldDialogComponent"], {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getFields();
            console.log('The dialog was closed');
        });
    }
};
FieldListComponent.ctorParameters = () => [
    { type: _fields_service__WEBPACK_IMPORTED_MODULE_2__["FieldsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
FieldListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-field-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./field-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/field-list/field-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./field-list.component.scss */ "./src/app/fields/field-list/field-list.component.scss")).default]
    })
], FieldListComponent);



/***/ }),

/***/ "./src/app/fields/fields-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/fields/fields-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FieldsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsRoutingModule", function() { return FieldsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-list/field-list.component */ "./src/app/fields/field-list/field-list.component.ts");




const routes = [{
        path: 'fieldList', component: _field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__["FieldListComponent"]
    }
];
let FieldsRoutingModule = class FieldsRoutingModule {
};
FieldsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FieldsRoutingModule);



/***/ }),

/***/ "./src/app/fields/fields.module.ts":
/*!*****************************************!*\
  !*** ./src/app/fields/fields.module.ts ***!
  \*****************************************/
/*! exports provided: FieldsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsModule", function() { return FieldsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _fields_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields-routing.module */ "./src/app/fields/fields-routing.module.ts");
/* harmony import */ var _field_list_field_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-list/field-list.component */ "./src/app/fields/field-list/field-list.component.ts");
/* harmony import */ var _edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-field-dialog/edit-field-dialog.component */ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts");
/* harmony import */ var _create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-field-dialog/create-field-dialog.component */ "./src/app/fields/create-field-dialog/create-field-dialog.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let FieldsModule = class FieldsModule {
};
FieldsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_4__["FieldListComponent"], _edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditFieldDialogComponent"], _create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateFieldDialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _fields_routing_module__WEBPACK_IMPORTED_MODULE_3__["FieldsRoutingModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ]
    })
], FieldsModule);



/***/ }),

/***/ "./src/app/fields/fields.service.ts":
/*!******************************************!*\
  !*** ./src/app/fields/fields.service.ts ***!
  \******************************************/
/*! exports provided: FieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsService", function() { return FieldsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FieldsService = class FieldsService {
    constructor(http) {
        this.http = http;
        this.serviceURL = 'api/fields';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /* Get all Fields from the server */
    getFields() {
        return this.http.get(this.serviceURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched all fields')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getFields', [])));
    }
    /** GET field by id. Return `undefined` when id not found */
    getHeroNo404(id) {
        const url = `${this.serviceURL}/?id=${id}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(fields => fields[0]), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} field id=${id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getHero id=${id}`)));
    }
    /** GET field by id. Will 404 if id not found */
    getField(id) {
        const url = `${this.serviceURL}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log(`fetched field id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getField id=${id}`)));
    }
    /** PUT: update the hero on the server */
    updateField(field) {
        return this.http.put(this.serviceURL, field, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log(`updated field id=${field.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateField')));
    }
    /** POST: add a new hero to the server */
    addField(hero) {
        return this.http.post(this.serviceURL, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((newField) => this.log(`added field w/ id=${newField.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addField')));
    }
    /** DELETE: delete the hero from the server */
    deleteField(hero) {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.serviceURL}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log(`deleted field id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteField')));
    }
    log(message) {
        console.log(`FieldsService: ${message}`);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
FieldsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FieldsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FieldsService);



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InMemoryDataService = class InMemoryDataService {
    constructor() { }
    createDb() {
        const fields = [
            {
                "id": 1,
                "name": "Unknown",
                "owner": "Catsito",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 0,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 0
            },
            {
                "id": 2,
                "name": "Abuelo",
                "owner": "Abuelo",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 14,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 14
            },
            {
                "id": 3,
                "name": "Papa",
                "owner": "Papa",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 12,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 12
            },
            {
                "id": 4,
                "name": "Arturo",
                "owner": "Arturo",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 12,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 12
            },
            {
                "id": 5,
                "name": "Alma",
                "owner": "Abuelo",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 7.5,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 7.5
            },
            {
                "id": 6,
                "name": "Sandra",
                "owner": "Abuelo",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 6.5,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 6.5
            },
            {
                "id": 7,
                "name": "Julito",
                "owner": "Abuelo",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 5,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 5
            },
            {
                "id": 8,
                "name": "Grinchy 1",
                "owner": "Catsito",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 10,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 10
            },
            {
                "id": 9,
                "name": "Grinchy 2",
                "owner": "Catsito",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 16,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 16
            },
            {
                "id": 10,
                "name": "Limones",
                "owner": "Papa",
                "acquisitionDate": "01.01.2017",
                "cultivatedArea": 10,
                "ingenioId": -1,
                "lastUpdated": "09.12.2019",
                "size": 10
            }
        ];
        const payables = [
            {
                "id": 1,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-01-02 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Viviana, Riego cal y abono Abuelo, Trabajo en el lindero de Samuel",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 2,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-03 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Trabajo VLTG, Retapa de cana Jardin,  Fertilization Abuelo y Sandra, Corte de Cana",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 3,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-04 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Trabajo VLTG, Retapa de cana Jardin,  Fertilization Abuelo y Sandra, Corte de Cana",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 4,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-05 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Trabajo VLTG, Retapa de cana Jardin,  Fertilization Abuelo y Sandra, Corte de Cana",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 5,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-06 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Trabajo VLTG, Retapa de cana Jardin,  Fertilization Abuelo y Sandra, Corte de Cana",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 6,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-07 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Trabajo VLTG, Retapa de cana Jardin,  Fertilization Abuelo y Sandra, Corte de Cana",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 7,
                "category": "Propina",
                "subCategory": "Quema",
                "pricePerUnit": 840,
                "transactionDate": "2016-01-08 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Propina en la semana 4-9 enero",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 8,
                "category": "Propina",
                "subCategory": "Quema",
                "pricePerUnit": 560,
                "transactionDate": "2016-01-08 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Propina en la semana 4-9 enero",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 9,
                "category": "Propina",
                "subCategory": "Corte",
                "pricePerUnit": 270,
                "transactionDate": "2016-01-13 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Refrescos y galletas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 10,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante SLTB y AMTG y Jardin, Guardaraya en JCMT, Quema de basura ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 11,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante SLTB y AMTG y Jardin, Guardaraya en JCMT, Quema de basura ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 12,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante SLTB y AMTG y Jardin, Guardaraya en JCMT, Quema de basura ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 13,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante SLTB y AMTG y Jardin, Guardaraya en JCMT, Quema de basura ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 14,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante SLTB y AMTG y Jardin, Guardaraya en JCMT, Quema de basura ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 15,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante SLTB y AMTG y Jardin, Guardaraya en JCMT, Quema de basura ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 16,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante SLTB y AMTG y Jardin, Guardaraya en JCMT, Quema de basura ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 17,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 700,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 18,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 700,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 19,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 700,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 6,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 20,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 700,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 21,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 700,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 22,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 700,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 23,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 700,
                "transactionDate": "2016-01-15 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "jardin",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 24,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-16 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abrirar giardaraya, quema de cana de Rogelio (AMTG, JCMT), Veneno en el predio de los limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 25,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-17 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abrirar giardaraya, quema de cana de Rogelio (AMTG, JCMT), Veneno en el predio de los limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 26,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-18 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abrirar giardaraya, quema de cana de Rogelio (AMTG, JCMT), Veneno en el predio de los limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 27,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-19 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abrirar giardaraya, quema de cana de Rogelio (AMTG, JCMT), Veneno en el predio de los limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 28,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-20 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abrirar giardaraya, quema de cana de Rogelio (AMTG, JCMT), Veneno en el predio de los limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 29,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-21 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abrirar giardaraya, quema de cana de Rogelio (AMTG, JCMT), Veneno en el predio de los limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 30,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-22 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abrirar giardaraya, quema de cana de Rogelio (AMTG, JCMT), Veneno en el predio de los limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 31,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 8400,
                "transactionDate": "2016-01-22 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "1 VLTG, 2 AMTG, 4 JCMT, 4 AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 32,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema basur en JCMT y AMTG, Quema de cana, Riego de liquido VLTG, Aberture de guardarayas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 33,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 140,
                "transactionDate": "2016-01-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema basur en JCMT y AMTG, Quema de cana, Riego de liquido VLTG, Aberture de guardarayas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 34,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema basur en JCMT y AMTG, Quema de cana, Riego de liquido VLTG, Aberture de guardarayas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 35,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema basur en JCMT y AMTG, Quema de cana, Riego de liquido VLTG, Aberture de guardarayas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 36,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema basur en JCMT y AMTG, Quema de cana, Riego de liquido VLTG, Aberture de guardarayas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 37,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema basur en JCMT y AMTG, Quema de cana, Riego de liquido VLTG, Aberture de guardarayas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 38,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema basur en JCMT y AMTG, Quema de cana, Riego de liquido VLTG, Aberture de guardarayas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 39,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-01-30 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido y agua VLTG y Limones, Ayuda a tractoristas, Fantasmas VLTG, ARTB, AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 40,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-01-31 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido y agua VLTG y Limones, Ayuda a tractoristas, Fantasmas VLTG, ARTB, AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 41,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-01 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido y agua VLTG y Limones, Ayuda a tractoristas, Fantasmas VLTG, ARTB, AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 42,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-02-02 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido y agua VLTG y Limones, Ayuda a tractoristas, Fantasmas VLTG, ARTB, AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 43,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-02-03 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido y agua VLTG y Limones, Ayuda a tractoristas, Fantasmas VLTG, ARTB, AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 44,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-02-04 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido y agua VLTG y Limones, Ayuda a tractoristas, Fantasmas VLTG, ARTB, AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 45,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 150,
                "transactionDate": "2016-02-05 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido y agua VLTG y Limones, Ayuda a tractoristas, Fantasmas VLTG, ARTB, AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 46,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 150,
                "transactionDate": "2016-02-06 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido y agua VLTG y Limones, Ayuda a tractoristas, Fantasmas VLTG, ARTB, AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 47,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-08 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fantasmas JCMT, Riego agua y chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 48,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-09 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fantasmas JCMT, Riego agua y chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 49,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-11 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fantasmas JCMT, Riego agua y chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 50,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-12 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fantasmas JCMT, Riego agua y chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 51,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-23 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 52,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-24 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 53,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-25 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 54,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-26 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 55,
                "category": "Tanques",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-27 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 56,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-28 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 57,
                "category": "Tanques",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-02-29 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 58,
                "category": "Tanques",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-01 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 59,
                "category": "Tanques",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-02 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 60,
                "category": "Tanques",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-03 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 61,
                "category": "Tanques",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-04 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ATB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 62,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-05 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 63,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-03-06 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 64,
                "category": "Herramienta",
                "subCategory": "Tritor",
                "pricePerUnit": 125,
                "transactionDate": "2016-03-06 00:00:00",
                "quantity": 32,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "32l, 2l por cada tanque",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 65,
                "category": "Herramienta",
                "subCategory": "Herbicol",
                "pricePerUnit": 80,
                "transactionDate": "2016-03-06 00:00:00",
                "quantity": 16,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "16l, 1l por cada tanque",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 66,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-07 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 67,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-08 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 68,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-09 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 69,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-03-09 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 70,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-10 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 71,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-03-10 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 72,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-11 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de cal en ARTB y JCMT, Tarpaleo en AMTG, Riego de liquido en Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 73,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-03-12 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 74,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-03-13 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 75,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-03-14 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 76,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-03-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante en Limones, Tarpaleo Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 77,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-16 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante en Limones, Tarpaleo Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 78,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-17 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante en Limones, Tarpaleo Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 79,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-18 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Fertilizante en Limones, Tarpaleo Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 80,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-19 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tarpaleo en Abuelo, Junta y quema de Cana VLTG y AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 81,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-03-20 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 82,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-03-21 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 83,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-22 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tarpaleo en Abuelo, Junta y quema de Cana VLTG y AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 84,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-03-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tarpaleo en Abuelo, Junta y quema de Cana VLTG y AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 85,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-03-24 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tarpaleo en Abuelo, Junta y quema de Cana VLTG y AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 86,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-25 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tarpaleo en Abuelo, Junta y quema de Cana VLTG y AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 87,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-03-26 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tarpaleo en Abuelo, Junta y quema de Cana VLTG y AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 88,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-03-26 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tarpaleo en Abuelo, Junta y quema de Cana VLTG y AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 89,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-03-27 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 90,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-03-28 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 91,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-03-29 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 92,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-03-30 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 93,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-03-31 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 94,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-01 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 95,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-04-01 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 96,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-02 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 97,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-04-03 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 98,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-04 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 99,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-04 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Otro senor. Arancando troncones de cania de venado cerca de la cana.",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 100,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-05 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 101,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-05 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Otro senor. Arancando troncones de cania de venado cerca de la cana.",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 102,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-06 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 103,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-06 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Otro senor. Arancando troncones de cania de venado cerca de la cana.",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 104,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-07 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 105,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-04-07 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 106,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-07 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Otro senor. Arancando troncones de cania de venado cerca de la cana.",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 107,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-08 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 108,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-04-08 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 109,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-08 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Otro senor. Arancando troncones de cania de venado cerca de la cana.",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 110,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 150,
                "transactionDate": "2016-04-09 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 111,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 150,
                "transactionDate": "2016-04-10 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 112,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-11 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 113,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-04-11 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 114,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-12 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 115,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 150,
                "transactionDate": "2016-04-13 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 116,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-04-13 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 117,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-14 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 118,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 119,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-16 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Quema y corte de cana en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 120,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-04-17 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 121,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-18 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquidos en Limones, Quema de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 122,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-19 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquidos en Limones, Quema de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 123,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-20 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquidos en Limones, Quema de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 124,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-04-21 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquidos en Limones, Quema de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 125,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-22 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquidos en Limones, Quema de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 126,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-04-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquidos en Limones, Quema de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 127,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-04-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquidos en Limones, Quema de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 128,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-04-24 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 129,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-25 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 130,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-26 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 131,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-26 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 132,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-27 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 133,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-27 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 134,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-28 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 135,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-28 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 136,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-29 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 137,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-29 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 138,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-04-30 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pintar arboles en Abuelo, Veneno contra las tusas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 139,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-01 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 140,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-02 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Veneno de tusa en VLTG, Revision del gusano",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 141,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-03 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Veneno de tusa en VLTG, Revision del gusano",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 142,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-04 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 143,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-05 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 144,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-06 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 145,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-07 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 146,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-08 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 147,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-09 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 148,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-10 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego en VLTG, Predio Carlos",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 149,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-11 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego en VLTG, Predio Carlos",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 150,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-12 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego en VLTG, Predio Carlos",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 151,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-13 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego en VLTG, Predio Carlos",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 152,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-14 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 153,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-15 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 154,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-16 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 155,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-17 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego foliar en Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 156,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-18 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego foliar en Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 157,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-19 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego foliar en Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 158,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-20 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego foliar en Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 159,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-21 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego foliar en Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 160,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-22 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 161,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido en Abuelo (porton), Riego furadan en VLTG (Carlos), Tarpaleo Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 162,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-24 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido en Abuelo (porton), Riego furadan en VLTG (Carlos), Tarpaleo Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 163,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-25 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido en Abuelo (porton), Riego furadan en VLTG (Carlos), Tarpaleo Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 164,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-26 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido en Abuelo (porton), Riego furadan en VLTG (Carlos), Tarpaleo Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 165,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-27 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido en Abuelo (porton), Riego furadan en VLTG (Carlos), Tarpaleo Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 166,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-05-27 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido en Abuelo (porton), Riego furadan en VLTG (Carlos), Tarpaleo Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 167,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-05-28 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido en Abuelo (porton), Riego furadan en VLTG (Carlos), Tarpaleo Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 168,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-05-28 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido en Abuelo (porton), Riego furadan en VLTG (Carlos), Tarpaleo Abuelo (porton)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 169,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-29 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 170,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-30 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 171,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-05-31 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 172,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-06-01 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 173,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-06-02 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 174,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-06-03 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 175,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-06-04 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 176,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-06-05 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 177,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-06 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pinta de arboles en Limones, Riego foliar en Limones, Chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 178,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-07 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pinta de arboles en Limones, Riego foliar en Limones, Chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 179,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-08 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pinta de arboles en Limones, Riego foliar en Limones, Chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 180,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-09 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pinta de arboles en Limones, Riego foliar en Limones, Chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 181,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-10 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pinta de arboles en Limones, Riego foliar en Limones, Chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 182,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-11 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Pinta de arboles en Limones, Riego foliar en Limones, Chapeo Limones",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 183,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-06-12 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 184,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-13 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 185,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-06-13 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 186,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-14 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 187,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 188,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-16 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 189,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-17 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 190,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-18 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 191,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-06-18 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 192,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-19 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de Cana, Riego abono en AMTG, Riego foliar en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 193,
                "category": "Herramienta",
                "subCategory": "Pronamex",
                "pricePerUnit": 3720,
                "transactionDate": "2016-06-20 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "precio por tonelada, sulfato de amonio",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 194,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-20 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 195,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-06-21 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 196,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-22 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 197,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-06-22 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 198,
                "category": "Herramienta",
                "subCategory": "Pronamex",
                "pricePerUnit": 3720,
                "transactionDate": "2016-06-22 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "precio por tonelada, sulfato de amonio",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 199,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 200,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-06-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 201,
                "category": "Herramienta",
                "subCategory": "Pronamex",
                "pricePerUnit": 3720,
                "transactionDate": "2016-06-23 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "precio por tonelada, sulfato de amonio",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 202,
                "category": "Herramienta",
                "subCategory": "Pronamex",
                "pricePerUnit": 3720,
                "transactionDate": "2016-06-23 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "precio por tonelada, sulfato de amonio (2t = 65 sacos)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 203,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-24 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 204,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-06-24 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 205,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-25 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 206,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-26 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego furadan (conejo) en VLTG, Riego de fertilizante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 207,
                "category": "Herramienta",
                "subCategory": "Pronamex",
                "pricePerUnit": 3720,
                "transactionDate": "2016-06-27 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "precio por tonelada, sulfato de amonio",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 208,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-27 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 209,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-28 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 210,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-29 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 211,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-06-29 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 212,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-06-30 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 213,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-06-30 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 214,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-01 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 215,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-07-02 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 216,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-03 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido de Limones, Tardes corte de mango y pinar robles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 217,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-07-04 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 218,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-07-05 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 219,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-07-06 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 220,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-07-07 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 221,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-07-08 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 222,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-07-09 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 223,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-07-10 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "?",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 224,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-11 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Destape de tubo de alcantarilla",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 225,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-07-11 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 226,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-12 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 227,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-13 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 228,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-14 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 229,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-15 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 230,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-18 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 231,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-19 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de abono",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 232,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-20 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de abono",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 233,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-21 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de abono",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 234,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-22 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido con Don Arturo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 235,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-23 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido con Don Beni enel porton",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 236,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-24 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Podada de jardin",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 237,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-25 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 238,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-26 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de abono en la tabla de Don Arturo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 239,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-27 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 240,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-28 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 241,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-29 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de abono en la tabla de Don Beni",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 242,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-07-30 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 243,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-07-31 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 244,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-08-01 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 245,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-02 00:00:00",
                "quantity": 6,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 246,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-03 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 247,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-08-03 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 248,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-04 00:00:00",
                "quantity": 5,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 249,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-08-04 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 250,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-05 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Don Beni",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 251,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-06 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 252,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-07 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 253,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-08-08 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 254,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-09 00:00:00",
                "quantity": 6,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 255,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-10 00:00:00",
                "quantity": 6,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 256,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-11 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 257,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-12 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 258,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-13 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 259,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-14 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 260,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo en el jardin",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 261,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-16 00:00:00",
                "quantity": 8,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 262,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-17 00:00:00",
                "quantity": 8,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 263,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-08-17 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de fertilizante VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 264,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-18 00:00:00",
                "quantity": 8,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de fertilizante AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 265,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-19 00:00:00",
                "quantity": 5,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de jade VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 266,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-20 00:00:00",
                "quantity": 5,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de jade AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 267,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-20 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 268,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-21 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 269,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-22 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo del jardin",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 270,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-22 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de jade de ABT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 271,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-23 00:00:00",
                "quantity": 8,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 272,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-24 00:00:00",
                "quantity": 8,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido SLBT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 273,
                "category": "Herramienta",
                "subCategory": "Yunta",
                "pricePerUnit": 250,
                "transactionDate": "2016-08-24 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego hierbicida en los limones (Tons= 240)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 274,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-24 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 275,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-25 00:00:00",
                "quantity": 8,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 276,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-26 00:00:00",
                "quantity": 8,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 277,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-27 00:00:00",
                "quantity": 5,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 278,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-08-28 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 279,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-28 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 280,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-29 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de jade",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 281,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-30 00:00:00",
                "quantity": 8,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido SLBT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 282,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-08-31 00:00:00",
                "quantity": 6,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido ARBT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 283,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-01 00:00:00",
                "quantity": 6,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido JCMT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 284,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-02 00:00:00",
                "quantity": 5,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Banderiar en el predio de Rogelio",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 285,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-03 00:00:00",
                "quantity": 6,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 286,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-04 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 287,
                "category": "Sacos",
                "subCategory": "Turbo / Jade",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-05 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Papas en Dallas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 288,
                "category": "Sacos",
                "subCategory": "Turbo / Jade",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-06 00:00:00",
                "quantity": 5,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Jade predio de ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 289,
                "category": "Sacos",
                "subCategory": "Turbo / Jade",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-07 00:00:00",
                "quantity": 5,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Jade predio de SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 290,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-09-07 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 291,
                "category": "Sacos",
                "subCategory": "Turbo / Jade",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-08 00:00:00",
                "quantity": 5,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Jade predio de VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 292,
                "category": "Sacos",
                "subCategory": "Turbo / Jade",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-09 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Jade predio de AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 293,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-10 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame arboles SLTB y ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 294,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-09-11 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Papas en Dallas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 295,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-12 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame de linderos, Riego de liquido en JCMT, Riego fertilicante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 296,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-13 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame de linderos, Riego de liquido en JCMT, Riego fertilicante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 297,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-14 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame de linderos, Riego de liquido en JCMT, Riego fertilicante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 298,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-15 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame de linderos, Riego de liquido en JCMT, Riego fertilicante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 299,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-09-15 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame de linderos, Riego de liquido en JCMT, Riego fertilicante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 300,
                "category": "Herramienta",
                "subCategory": "Urea",
                "pricePerUnit": 285,
                "transactionDate": "2016-09-15 00:00:00",
                "quantity": 15,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame de linderos, Riego de liquido en JCMT, Riego fertilicante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 301,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-16 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame de linderos, Riego de liquido en JCMT, Riego fertilicante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 302,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-17 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derrame de linderos, Riego de liquido en JCMT, Riego fertilicante en VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 303,
                "category": "Herramienta",
                "subCategory": "Motosierra",
                "pricePerUnit": 100,
                "transactionDate": "2016-09-18 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 304,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-09-19 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 305,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-09-19 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 306,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-20 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de fertilizante VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 307,
                "category": "Herramienta",
                "subCategory": "Urea",
                "pricePerUnit": 285,
                "transactionDate": "2016-09-20 00:00:00",
                "quantity": 13,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Puedo ser un double entrée con el 15 septiembre",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 308,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Ladeo cania en guardaraya",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 309,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Revision de cania VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 310,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 1500,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo de calles (Cordoba)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 311,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 1500,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo de calles (Carlos)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 312,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 1500,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo de calles ",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 313,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 600,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo de calles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 314,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 600,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo de calles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 315,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 2000,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo de calles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 316,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 1500,
                "transactionDate": "2016-09-21 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo de calles",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 317,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-09-22 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 318,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-23 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Desrame SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 319,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-24 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Desrame ARTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 320,
                "category": "Herramienta",
                "subCategory": "Motosierra",
                "pricePerUnit": 100,
                "transactionDate": "2016-09-24 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 321,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-09-25 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 322,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-26 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Abertura cania VLTG - ARTB - Don Beni",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 323,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-09-27 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 324,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-28 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de abono Don Beni",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 325,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-29 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de abono Papa",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 326,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-09-30 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de abono VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 327,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-01 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Desrame con Don Beni (lindero con Ventura)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 328,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-02 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 329,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-03 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Desrame Don Beni (Ventura)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 330,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-04 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 331,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-05 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 332,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-06 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 333,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-07 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego VLTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 334,
                "category": "Herramienta",
                "subCategory": "Motosierra",
                "pricePerUnit": 100,
                "transactionDate": "2016-10-08 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "4 dias de la semana se uso la motosierra",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 335,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-09 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 336,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-10 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 337,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-11 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido guardarayas (predio Cordoba)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 338,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-12 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido guardarayas VLTG; AMTG",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 339,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-13 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego liquido guardarayas JCMT (predio Carlos / Rogelio)",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 340,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-14 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Papa",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 341,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-15 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 342,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-16 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 343,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-17 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 344,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-18 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo, Revision Cana en Limones, Riego liquido en VLTG y JCMT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 345,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-19 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo, Revision Cana en Limones, Riego liquido en VLTG y JCMT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 346,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-10-19 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo, Revision Cana en Limones, Riego liquido en VLTG y JCMT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 347,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-20 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo, Revision Cana en Limones, Riego liquido en VLTG y JCMT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 348,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-21 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 349,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-22 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo, Revision Cana en Limones, Riego liquido en VLTG y JCMT",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 350,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-23 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 351,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-24 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo (Jardin) y ARTB y Abuelo pozas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 352,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-25 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo (Jardin) y ARTB y Abuelo pozas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 353,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-26 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo (Jardin) y ARTB y Abuelo pozas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 354,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-27 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo (Jardin) y ARTB y Abuelo pozas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 355,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-28 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo (Jardin) y ARTB y Abuelo pozas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 356,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-10-29 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Abuelo (Jardin) y ARTB y Abuelo pozas",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 357,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-30 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 358,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-10-31 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 359,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-01 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Limones, Chapeo Limones, Apuertura de calle Viviana, Chapeo Tractor",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 360,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-02 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Limones, Chapeo Limones, Apuertura de calle Viviana, Chapeo Tractor",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 361,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-11-03 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 362,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-04 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Limones, Chapeo Limones, Apuertura de calle Viviana, Chapeo Tractor",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 363,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-04 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Limones, Chapeo Limones, Apuertura de calle Viviana, Chapeo Tractor",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 364,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-05 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego de liquido Limones, Chapeo Limones, Apuertura de calle Viviana, Chapeo Tractor",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 365,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-11-06 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 366,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-07 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo Limones, Riego liquido Limones, Quema en jambre Limones, Corte de Cana ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 367,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-07 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo Limones, Riego liquido Limones, Quema en jambre Limones, Corte de Cana ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 368,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-08 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo Limones, Riego liquido Limones, Quema en jambre Limones, Corte de Cana ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 369,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-09 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo Limones, Riego liquido Limones, Quema en jambre Limones, Corte de Cana ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 370,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-10 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo Limones, Riego liquido Limones, Quema en jambre Limones, Corte de Cana ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 371,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-11-11 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo Limones, Riego liquido Limones, Quema en jambre Limones, Corte de Cana ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 372,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-11-12 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo Limones, Riego liquido Limones, Quema en jambre Limones, Corte de Cana ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 373,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-11-13 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo Limones, Riego liquido Limones, Quema en jambre Limones, Corte de Cana ATB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 374,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-11-14 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte Cana ATB y SLTB, Tapa cana VLTB, Riego de liquido limones, Tardes: quema de abejas y junta de ticket",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 375,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-15 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte Cana ATB y SLTB, Tapa cana VLTB, Riego de liquido limones, Tardes: quema de abejas y junta de ticket",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 376,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-11-16 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 377,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-17 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte Cana ATB y SLTB, Tapa cana VLTB, Riego de liquido limones, Tardes: quema de abejas y junta de ticket",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 378,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-18 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte Cana ATB y SLTB, Tapa cana VLTB, Riego de liquido limones, Tardes: quema de abejas y junta de ticket",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 379,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-18 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte Cana ATB y SLTB, Tapa cana VLTB, Riego de liquido limones, Tardes: quema de abejas y junta de ticket",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 380,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-19 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte Cana ATB y SLTB, Tapa cana VLTB, Riego de liquido limones, Tardes: quema de abejas y junta de ticket",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 381,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-19 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte Cana ATB y SLTB, Tapa cana VLTB, Riego de liquido limones, Tardes: quema de abejas y junta de ticket",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 382,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-11-20 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 383,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-11-21 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 384,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-11-22 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 385,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 386,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 387,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-24 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 388,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-24 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 389,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-25 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 390,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-25 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 391,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-26 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 392,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-26 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 393,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-27 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Derame, Quema basura SLTB y ATB, Corte y quema SLTB y ATB, Riego de graba, Corte cana Abuelo, Riego de cal ATB, Colecta de tickets, Riego de Furadan ATB, Corte de cana SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 394,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 350,
                "transactionDate": "2016-11-28 00:00:00",
                "quantity": 10,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Precio por hectaria, Aliniation de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 395,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 350,
                "transactionDate": "2016-11-28 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": " Aliniation de basura",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 396,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 160,
                "transactionDate": "2016-11-28 00:00:00",
                "quantity": 7,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tareas de doble pase de rastra",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 397,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 80,
                "transactionDate": "2016-11-28 00:00:00",
                "quantity": 7,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tareas de surco",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 398,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 120,
                "transactionDate": "2016-11-28 00:00:00",
                "quantity": 3,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Tareas de barbecho",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 399,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 1200,
                "transactionDate": "2016-11-28 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Chapeo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 400,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-12-05 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Furadan SLTB",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 401,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-06 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 402,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-07 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 403,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-08 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 404,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-09 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 405,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-10 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 406,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-11 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 407,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-12-12 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Furadan VLTG y ATB, Retapa ATB y SLTB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 408,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-12-13 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Furadan VLTG y ATB, Retapa ATB y SLTB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 409,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-12-13 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Furadan VLTG y ATB, Retapa ATB y SLTB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 410,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-12-14 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Riego Furadan VLTG y ATB, Retapa ATB y SLTB y Abuelo",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 411,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-15 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 412,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-16 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 413,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-17 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 414,
                "category": "Descanso",
                "subCategory": "",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-18 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 415,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-12-19 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Siembra Cana, Corte y picada, Abono",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 416,
                "category": "Tambos",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-12-20 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 417,
                "category": "Herramienta",
                "subCategory": "Tractor",
                "pricePerUnit": 0,
                "transactionDate": "2016-12-20 00:00:00",
                "quantity": 0,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 418,
                "category": "Siembra Nueva",
                "subCategory": "MO ",
                "pricePerUnit": 3000,
                "transactionDate": "2016-12-20 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Voltea y siembra de cana",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 419,
                "category": "Siembra Nueva",
                "subCategory": "Tractor Rastra",
                "pricePerUnit": 800,
                "transactionDate": "2016-12-20 00:00:00",
                "quantity": 4,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "2 pasadas por hectaria 2 hectarias",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 420,
                "category": "Siembra Nueva",
                "subCategory": "Tractor Surco",
                "pricePerUnit": 800,
                "transactionDate": "2016-12-20 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "2 hectarias",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 421,
                "category": "Siembra Nueva",
                "subCategory": "Tractor Acareo",
                "pricePerUnit": 1000,
                "transactionDate": "2016-12-20 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "semilla, 2 hectarias",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 422,
                "category": "Siembra Nueva",
                "subCategory": "Tractor Tapada",
                "pricePerUnit": 800,
                "transactionDate": "2016-12-20 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "2 hectarias",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 423,
                "category": "MO Vespertina",
                "subCategory": "",
                "pricePerUnit": 80,
                "transactionDate": "2016-12-23 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana ARTB, Quema de basura y guardaraya",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 424,
                "category": "MO Dia",
                "subCategory": "",
                "pricePerUnit": 200,
                "transactionDate": "2016-12-24 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana ARTB, Quema de basura y guardaraya",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 425,
                "category": "MO Matutina",
                "subCategory": "",
                "pricePerUnit": 120,
                "transactionDate": "2016-12-25 00:00:00",
                "quantity": 2,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "Corte de cana ARTB, Quema de basura y guardaraya",
                "lastUpdated": "09.12.2019"
            },
            {
                "id": 426,
                "category": "Propina",
                "subCategory": "Quema",
                "pricePerUnit": 700,
                "transactionDate": "2016-12-24 00:00:00",
                "quantity": 1,
                "documentId": -1,
                "fieldId": "Catsito",
                "comment": "",
                "lastUpdated": "09.12.2019"
            }
        ];
        return { fields, payables };
    }
};
InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InMemoryDataService);



/***/ }),

/***/ "./src/app/model/field.ts":
/*!********************************!*\
  !*** ./src/app/model/field.ts ***!
  \********************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Field {
}


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/payable/create-payable/create-payable.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/payable/create-payable/create-payable.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheWFibGUvY3JlYXRlLXBheWFibGUvY3JlYXRlLXBheWFibGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/payable/create-payable/create-payable.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/payable/create-payable/create-payable.component.ts ***!
  \********************************************************************/
/*! exports provided: CreatePayableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePayableComponent", function() { return CreatePayableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreatePayableComponent = class CreatePayableComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreatePayableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-payable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-payable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payable/create-payable/create-payable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-payable.component.scss */ "./src/app/payable/create-payable/create-payable.component.scss")).default]
    })
], CreatePayableComponent);



/***/ }),

/***/ "./src/app/payable/edit-payable/edit-payable.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/payable/edit-payable/edit-payable.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheWFibGUvZWRpdC1wYXlhYmxlL2VkaXQtcGF5YWJsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/payable/edit-payable/edit-payable.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payable/edit-payable/edit-payable.component.ts ***!
  \****************************************************************/
/*! exports provided: EditPayableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPayableComponent", function() { return EditPayableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditPayableComponent = class EditPayableComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditPayableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-payable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-payable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payable/edit-payable/edit-payable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-payable.component.scss */ "./src/app/payable/edit-payable/edit-payable.component.scss")).default]
    })
], EditPayableComponent);



/***/ }),

/***/ "./src/app/payable/payable-list/payable-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/payable/payable-list/payable-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheWFibGUvcGF5YWJsZS1saXN0L3BheWFibGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/payable/payable-list/payable-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payable/payable-list/payable-list.component.ts ***!
  \****************************************************************/
/*! exports provided: PayableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayableListComponent", function() { return PayableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PayableListComponent = class PayableListComponent {
    constructor() { }
    ngOnInit() {
    }
};
PayableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payable-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payable-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payable/payable-list/payable-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payable-list.component.scss */ "./src/app/payable/payable-list/payable-list.component.scss")).default]
    })
], PayableListComponent);



/***/ }),

/***/ "./src/app/payable/payables-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/payable/payables-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PayablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayablesRoutingModule", function() { return PayablesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let PayablesRoutingModule = class PayablesRoutingModule {
};
PayablesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PayablesRoutingModule);



/***/ }),

/***/ "./src/app/payable/payables.module.ts":
/*!********************************************!*\
  !*** ./src/app/payable/payables.module.ts ***!
  \********************************************/
/*! exports provided: PayablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayablesModule", function() { return PayablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _payables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payables-routing.module */ "./src/app/payable/payables-routing.module.ts");
/* harmony import */ var _payable_list_payable_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payable-list/payable-list.component */ "./src/app/payable/payable-list/payable-list.component.ts");
/* harmony import */ var _edit_payable_edit_payable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-payable/edit-payable.component */ "./src/app/payable/edit-payable/edit-payable.component.ts");
/* harmony import */ var _create_payable_create_payable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-payable/create-payable.component */ "./src/app/payable/create-payable/create-payable.component.ts");







let PayablesModule = class PayablesModule {
};
PayablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payable_list_payable_list_component__WEBPACK_IMPORTED_MODULE_4__["PayableListComponent"], _edit_payable_edit_payable_component__WEBPACK_IMPORTED_MODULE_5__["EditPayableComponent"], _create_payable_create_payable_component__WEBPACK_IMPORTED_MODULE_6__["CreatePayableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payables_routing_module__WEBPACK_IMPORTED_MODULE_3__["PayablesRoutingModule"]
        ]
    })
], PayablesModule);



/***/ }),

/***/ "./src/app/payable/payables.service.ts":
/*!*********************************************!*\
  !*** ./src/app/payable/payables.service.ts ***!
  \*********************************************/
/*! exports provided: PayablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayablesService", function() { return PayablesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PayablesService = class PayablesService {
    constructor(http) {
        this.http = http;
        this.serviceURL = 'api/payables';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    log(message) {
        console.log(`FieldsService: ${message}`);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    /* Get all Fields from the server */
    getPayables() {
        return this.http.get(this.serviceURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched all payables')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getFields', [])));
    }
};
PayablesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PayablesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PayablesService);



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");




let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"]
        ],
        declarations: []
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/version-page/version-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/version-page/version-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcnNpb24tcGFnZS92ZXJzaW9uLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/version-page/version-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/version-page/version-page.component.ts ***!
  \********************************************************/
/*! exports provided: VersionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionPageComponent", function() { return VersionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VersionPageComponent = class VersionPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
VersionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-version-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./version-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/version-page/version-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./version-page.component.scss */ "./src/app/version-page/version-page.component.scss")).default]
    })
], VersionPageComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/lukas/PycharmProjects/CanaWebPY/canaweb-ui-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map