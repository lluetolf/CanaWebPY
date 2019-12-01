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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <button mat-icon-button>\n        <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n      </button>\n      <h1>CanaWebPY</h1>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #sidenav mode=\"side\" class=\"sidenav-sidenav\">\n\n      <mat-nav-list>\n\n          <a mat-list-item [routerLink]=\"'/dashboard'\"> Home </a>\n          <a mat-list-item [routerLink]=\"'/fieldList'\"> Fields </a>\n          <a mat-list-item [routerLink]=\"'/payableList'\"> Payable </a>\n          <a mat-list-item [routerLink]=\"'/receivableList'\"> Receivable </a>\n          <!-- <a mat-list-item [routerLink]=\"'/contacts'\"> Contacts </a> -->\n    \n        </mat-nav-list>\n\n  </mat-sidenav>\n\n  <mat-sidenav-content class=\"sidenav-content\">\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Dashboard!</p>\n<div *ngFor=\"let field of fields\" class=\"module \">\n    <pre>{{field | json}}</pre>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/create-field-dialog/create-field-dialog.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fields/create-field-dialog/create-field-dialog.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add Field</h1>\n\n<div mat-dialog-content>\n    <div class=\"example-container\">\n        <p>{{field.id}}</p>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Ingenio Id\" [(ngModel)]=\"field.ingenioId\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"field.name\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Owner\" [(ngModel)]=\"field.owner\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Size\" [(ngModel)]=\"field.size\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Cultivated\" [(ngModel)]=\"field.cultivatedArea\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Acquisition date\" \n                [(ngModel)]=\"acquisitionDateField\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n    </div>           \n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dismiss()\">No Thanks</button>\n  <button mat-button cdkFocusInitial (click)=\"save()\">Create</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/edit-field-dialog/edit-field-dialog.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fields/edit-field-dialog/edit-field-dialog.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Edit Field</h1>\n\n<div mat-dialog-content>\n    <div class=\"example-container\">\n        <p>{{field.id}}</p>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Ingenio Id\" [(ngModel)]=\"field.ingenioId\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"field.name\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Owner\" [(ngModel)]=\"field.owner\" required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Size\" [(ngModel)]=\"field.size\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Cultivated\" [(ngModel)]=\"field.cultivatedArea\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Acquisition date\" \n                [(ngModel)]=\"acquisitionDateField\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n    </div>           \n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dismiss()\">No Thanks</button>\n  <button mat-button cdkFocusInitial (click)=\"save()\">Save</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/field-list/field-list.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fields/field-list/field-list.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>FieldList!</h1>\n<div class=\"container\">\n    <table mat-table [dataSource]=\"fields\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n        <ng-container matColumnDef=\"owner\">\n            <th mat-header-cell *matHeaderCellDef> Owner </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.owner}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> Id </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"last_updated\">\n            <th mat-header-cell *matHeaderCellDef> Last Update </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.last_updated}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        \n        <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef>  </th>\n            <td mat-cell *matCellDef=\"let element\"> \n                <div class=\"buttoncontainer\">\n                    <button mat-mini-fab aria-label=\"Edit\" (click)=\"openEditDialog(element)\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                </div>\n            </td>\n            <td mat-footer-cell *matFooterCellDef>\n                <div class=\"buttoncontainer\">\n                    <button mat-flat-button color=\"primary\" aria-label=\"add\" (click)=\"openCreateDialog()\">\n                        <mat-icon>add</mat-icon>\n                    </button>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n    </table>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/version-page/version-page.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/version-page/version-page.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>version-page works!!</p>\n<p>Last build: 15:06</p>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _fields_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/field-list/field-list.component */ "./src/app/fields/field-list/field-list.component.ts");
            /* harmony import */ var _version_page_version_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version-page/version-page.component */ "./src/app/version-page/version-page.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            var routes = [
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
                { path: 'payableList', component: _fields_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__["FieldListComponent"] },
                { path: 'receivableList', component: _fields_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__["FieldListComponent"] },
                { path: 'contact', component: _fields_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__["FieldListComponent"] },
                { path: 'version', component: _version_page_version_page_component__WEBPACK_IMPORTED_MODULE_4__["VersionPageComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  border: 0;\n}\n\n.sidenav-sidenav {\n  padding: 10px;\n}\n\n.sidenav-content {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9sdWthcy9QeWNoYXJtUHJvamVjdHMvQ2FuYVdlYlBZL2NhbmF3ZWItdWktYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdi1zaWRlbmF2IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7ICAgICBcclxuICB9IiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbi5zaWRlbmF2LXNpZGVuYXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_13__["InMemoryDataService"], { dataEncapsulation: false })
                    ],
                    providers: [],
                    entryComponents: [_fields_edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_15__["EditFieldDialogComponent"], _fields_create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_16__["CreateFieldDialogComponent"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fields_fields_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fields/fields.service */ "./src/app/fields/fields.service.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(fieldsService) {
                    this.fieldsService = fieldsService;
                    this.fields = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.getFields();
                };
                DashboardComponent.prototype.getFields = function () {
                    var _this = this;
                    this.fieldsService.getFields()
                        .subscribe(function (fields) {
                        _this.fields = fields;
                        fields.forEach(function (element) {
                            console.log(JSON.stringify(element));
                        });
                    });
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _fields_fields_service__WEBPACK_IMPORTED_MODULE_2__["FieldsService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/fields/create-field-dialog/create-field-dialog.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/fields/create-field-dialog/create-field-dialog.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9sdWthcy9QeWNoYXJtUHJvamVjdHMvQ2FuYVdlYlBZL2NhbmF3ZWItdWktYXBwL3NyYy9hcHAvZmllbGRzL2NyZWF0ZS1maWVsZC1kaWFsb2cvY3JlYXRlLWZpZWxkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmllbGRzL2NyZWF0ZS1maWVsZC1kaWFsb2cvY3JlYXRlLWZpZWxkLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmllbGRzL2NyZWF0ZS1maWVsZC1kaWFsb2cvY3JlYXRlLWZpZWxkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/fields/create-field-dialog/create-field-dialog.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/fields/create-field-dialog/create-field-dialog.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: CreateFieldDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFieldDialogComponent", function () { return CreateFieldDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_model_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/field */ "./src/app/model/field.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fields.service */ "./src/app/fields/fields.service.ts");
            var CreateFieldDialogComponent = /** @class */ (function () {
                function CreateFieldDialogComponent(dialogRef, fieldService) {
                    this.dialogRef = dialogRef;
                    this.fieldService = fieldService;
                    this.dateFormat = 'dd.MM.yyyy';
                }
                CreateFieldDialogComponent.prototype.ngOnInit = function () {
                    this.field = new src_app_model_field__WEBPACK_IMPORTED_MODULE_2__["Field"]();
                    console.log('Sent to CreateFieldDialogComponent: ');
                };
                CreateFieldDialogComponent.prototype.save = function () {
                    var _this = this;
                    // Transform Date to String
                    var ad = this.acquisitionDateField;
                    var formattedDate = (ad.getDate()) + '.' + (ad.getMonth() + 1) + '.' + ad.getFullYear();
                    this.field.acquisitionDate = formattedDate;
                    this.fieldService.addField(this.field).subscribe(function (field) {
                        console.log('Create:' + field);
                        _this.dialogRef.close();
                    });
                };
                CreateFieldDialogComponent.prototype.dismiss = function () {
                    this.dialogRef.close();
                };
                return CreateFieldDialogComponent;
            }());
            CreateFieldDialogComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: _fields_service__WEBPACK_IMPORTED_MODULE_4__["FieldsService"] }
            ]; };
            CreateFieldDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-field-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-field-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/create-field-dialog/create-field-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-field-dialog.component.scss */ "./src/app/fields/create-field-dialog/create-field-dialog.component.scss")).default]
                })
            ], CreateFieldDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/fields/edit-field-dialog/edit-field-dialog.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9sdWthcy9QeWNoYXJtUHJvamVjdHMvQ2FuYVdlYlBZL2NhbmF3ZWItdWktYXBwL3NyYy9hcHAvZmllbGRzL2VkaXQtZmllbGQtZGlhbG9nL2VkaXQtZmllbGQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWVsZHMvZWRpdC1maWVsZC1kaWFsb2cvZWRpdC1maWVsZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZpZWxkcy9lZGl0LWZpZWxkLWRpYWxvZy9lZGl0LWZpZWxkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts ***!
          \*************************************************************************/
        /*! exports provided: EditFieldDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFieldDialogComponent", function () { return EditFieldDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_model_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/field */ "./src/app/model/field.ts");
            /* harmony import */ var _fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fields.service */ "./src/app/fields/fields.service.ts");
            /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
            var EditFieldDialogComponent = /** @class */ (function () {
                function EditFieldDialogComponent(dialogRef, data, fieldService) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.fieldService = fieldService;
                    this.dateFormat = 'dd.MM.yyyy';
                }
                EditFieldDialogComponent.prototype.ngOnInit = function () {
                    console.log('Sent to Dialog: ', this.data);
                    this.field = Object.assign({}, this.data);
                    var ad = this.field.acquisitionDate;
                    this.acquisitionDateField = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["parse"])(ad, this.dateFormat, new Date());
                };
                EditFieldDialogComponent.prototype.pickAcquisitionDate = function (event) {
                    var data = event;
                    var formattedDate = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
                    this.field.acquisitionDate = formattedDate;
                    console.log('Reformated to: ' + formattedDate);
                };
                EditFieldDialogComponent.prototype.save = function () {
                    var _this = this;
                    // Transform Date to String
                    var ad = this.acquisitionDateField;
                    var formattedDate = (ad.getDate()) + '.' + (ad.getMonth() + 1) + '.' + ad.getFullYear();
                    this.field.acquisitionDate = formattedDate;
                    this.fieldService.updateField(this.field).subscribe(function (obs) {
                        _this.data.ingenioId = _this.field.ingenioId;
                        _this.data.acquisitionDate = _this.field.acquisitionDate;
                        _this.data.name = _this.field.name;
                        _this.data.owner = _this.field.owner;
                        _this.data.size = _this.field.size;
                        _this.data.cultivatedArea = _this.field.cultivatedArea;
                        _this.dialogRef.close();
                    });
                };
                EditFieldDialogComponent.prototype.dismiss = function () {
                    this.dialogRef.close();
                };
                return EditFieldDialogComponent;
            }());
            EditFieldDialogComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_model_field__WEBPACK_IMPORTED_MODULE_3__["Field"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _fields_service__WEBPACK_IMPORTED_MODULE_4__["FieldsService"] }
            ]; };
            EditFieldDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-field-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-field-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/edit-field-dialog/edit-field-dialog.component.html")).default,
                    providers: [],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-field-dialog.component.scss */ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], EditFieldDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/fields/field-list/field-list.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/fields/field-list/field-list.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: auto;\n  min-width: 50%;\n}\n\n.buttoncontainer {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9sdWthcy9QeWNoYXJtUHJvamVjdHMvQ2FuYVdlYlBZL2NhbmF3ZWItdWktYXBwL3NyYy9hcHAvZmllbGRzL2ZpZWxkLWxpc3QvZmllbGQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmllbGRzL2ZpZWxkLWxpc3QvZmllbGQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9maWVsZHMvZmllbGQtbGlzdC9maWVsZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbmNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5cbi5idXR0b25jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/fields/field-list/field-list.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/fields/field-list/field-list.component.ts ***!
          \***********************************************************/
        /*! exports provided: FieldListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldListComponent", function () { return FieldListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fields_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fields.service */ "./src/app/fields/fields.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-field-dialog/edit-field-dialog.component */ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts");
            /* harmony import */ var _create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-field-dialog/create-field-dialog.component */ "./src/app/fields/create-field-dialog/create-field-dialog.component.ts");
            var FieldListComponent = /** @class */ (function () {
                function FieldListComponent(fieldService, dialog) {
                    this.fieldService = fieldService;
                    this.dialog = dialog;
                    this.fields = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
                    this.displayedColumns = ['id', 'name', 'owner', 'last_updated', 'actions'];
                }
                FieldListComponent.prototype.ngOnInit = function () {
                    this.getFields();
                };
                FieldListComponent.prototype.getFields = function () {
                    var _this = this;
                    this.fieldService.getFields()
                        .subscribe(function (fields) {
                        _this.fields.data = fields;
                        fields.forEach(function (element) {
                            console.log(JSON.stringify(element));
                        });
                    });
                };
                FieldListComponent.prototype.openEditDialog = function (field) {
                    var dialogRef = this.dialog.open(_edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditFieldDialogComponent"], {
                        width: '600px',
                        data: field
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                };
                FieldListComponent.prototype.openCreateDialog = function (field) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateFieldDialogComponent"], {
                        width: '600px'
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        _this.getFields();
                        console.log('The dialog was closed');
                    });
                };
                return FieldListComponent;
            }());
            FieldListComponent.ctorParameters = function () { return [
                { type: _fields_service__WEBPACK_IMPORTED_MODULE_2__["FieldsService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            FieldListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-field-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./field-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fields/field-list/field-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./field-list.component.scss */ "./src/app/fields/field-list/field-list.component.scss")).default]
                })
            ], FieldListComponent);
            /***/ 
        }),
        /***/ "./src/app/fields/fields-routing.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/fields/fields-routing.module.ts ***!
          \*************************************************/
        /*! exports provided: FieldsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsRoutingModule", function () { return FieldsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-list/field-list.component */ "./src/app/fields/field-list/field-list.component.ts");
            var routes = [{
                    path: 'fieldList', component: _field_list_field_list_component__WEBPACK_IMPORTED_MODULE_3__["FieldListComponent"]
                }
            ];
            var FieldsRoutingModule = /** @class */ (function () {
                function FieldsRoutingModule() {
                }
                return FieldsRoutingModule;
            }());
            FieldsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], FieldsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/fields/fields.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/fields/fields.module.ts ***!
          \*****************************************/
        /*! exports provided: FieldsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsModule", function () { return FieldsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _fields_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields-routing.module */ "./src/app/fields/fields-routing.module.ts");
            /* harmony import */ var _field_list_field_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-list/field-list.component */ "./src/app/fields/field-list/field-list.component.ts");
            /* harmony import */ var _edit_field_dialog_edit_field_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-field-dialog/edit-field-dialog.component */ "./src/app/fields/edit-field-dialog/edit-field-dialog.component.ts");
            /* harmony import */ var _create_field_dialog_create_field_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-field-dialog/create-field-dialog.component */ "./src/app/fields/create-field-dialog/create-field-dialog.component.ts");
            /* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var FieldsModule = /** @class */ (function () {
                function FieldsModule() {
                }
                return FieldsModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/fields/fields.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/fields/fields.service.ts ***!
          \******************************************/
        /*! exports provided: FieldsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsService", function () { return FieldsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var FieldsService = /** @class */ (function () {
                function FieldsService(http) {
                    this.http = http;
                    this.serviceURL = 'api/fields';
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                /* Get all Fields from the server */
                FieldsService.prototype.getFields = function () {
                    var _this = this;
                    return this.http.get(this.serviceURL)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched all fields'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getFields', [])));
                };
                /** GET field by id. Return `undefined` when id not found */
                FieldsService.prototype.getHeroNo404 = function (id) {
                    var _this = this;
                    var url = this.serviceURL + "/?id=" + id;
                    return this.http.get(url)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) { return fields[0]; }), // returns a {0|1} element array
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
                        var outcome = h ? "fetched" : "did not find";
                        _this.log(outcome + " field id=" + id);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getHero id=" + id)));
                };
                /** GET field by id. Will 404 if id not found */
                FieldsService.prototype.getField = function (id) {
                    var _this = this;
                    var url = this.serviceURL + "/" + id;
                    return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched field id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getField id=" + id)));
                };
                /** PUT: update the hero on the server */
                FieldsService.prototype.updateField = function (field) {
                    var _this = this;
                    return this.http.put(this.serviceURL, field, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated field id=" + field.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateField')));
                };
                /** POST: add a new hero to the server */
                FieldsService.prototype.addField = function (hero) {
                    var _this = this;
                    return this.http.post(this.serviceURL, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newField) { return _this.log("added field w/ id=" + newField.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addField')));
                };
                /** DELETE: delete the hero from the server */
                FieldsService.prototype.deleteField = function (hero) {
                    var _this = this;
                    var id = typeof hero === 'number' ? hero : hero.id;
                    var url = this.serviceURL + "/" + id;
                    return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted field id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteField')));
                };
                FieldsService.prototype.log = function (message) {
                    console.log("FieldsService: " + message);
                };
                FieldsService.prototype.handleError = function (operation, result) {
                    var _this = this;
                    if (operation === void 0) { operation = 'operation'; }
                    return function (error) {
                        // TODO: send the error to remote logging infrastructure
                        console.error(error); // log to console instead
                        // TODO: better job of transforming error for user consumption
                        _this.log(operation + " failed: " + error.message);
                        // Let the app keep running by returning an empty result.
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
                    };
                };
                return FieldsService;
            }());
            FieldsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            FieldsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FieldsService);
            /***/ 
        }),
        /***/ "./src/app/in-memory-data.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/in-memory-data.service.ts ***!
          \*******************************************/
        /*! exports provided: InMemoryDataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () { return InMemoryDataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InMemoryDataService = /** @class */ (function () {
                function InMemoryDataService() {
                }
                InMemoryDataService.prototype.createDb = function () {
                    var fields = [
                        {
                            id: 1,
                            acquisitionDate: '26.08.2018',
                            cultivatedArea: 5.5,
                            ingenioId: 12345,
                            lastUpdated: '2018-08-26',
                            name: 'Pandita',
                            owner: 'Pandita',
                            size: 5.5
                        },
                        {
                            id: 2,
                            acquisitionDate: '28.12.2015',
                            cultivatedArea: 5.5,
                            ingenioId: 54321,
                            lastUpdated: '2015-12-28',
                            name: 'Monkey',
                            owner: 'Monkey',
                            size: 5.5
                        }
                    ];
                    return { fields: fields };
                };
                return InMemoryDataService;
            }());
            InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], InMemoryDataService);
            /***/ 
        }),
        /***/ "./src/app/model/field.ts": 
        /*!********************************!*\
          !*** ./src/app/model/field.ts ***!
          \********************************/
        /*! exports provided: Field */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function () { return Field; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Field = /** @class */ (function () {
                function Field() {
                }
                return Field;
            }());
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/material.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/shared/material.module.ts ***!
          \*******************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/version-page/version-page.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/version-page/version-page.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcnNpb24tcGFnZS92ZXJzaW9uLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/version-page/version-page.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/version-page/version-page.component.ts ***!
          \********************************************************/
        /*! exports provided: VersionPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionPageComponent", function () { return VersionPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var VersionPageComponent = /** @class */ (function () {
                function VersionPageComponent() {
                }
                VersionPageComponent.prototype.ngOnInit = function () {
                };
                return VersionPageComponent;
            }());
            VersionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-version-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./version-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/version-page/version-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./version-page.component.scss */ "./src/app/version-page/version-page.component.scss")).default]
                })
            ], VersionPageComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /mnt/c/Users/lukas/PycharmProjects/CanaWebPY/canaweb-ui-app/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map