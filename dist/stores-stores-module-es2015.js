(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stores-stores-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/stores/stores-add/stores-add.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/stores/stores-add/stores-add.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <nb-card class=\"inline-form-card\">\r\n        <nb-card-header>Store form</nb-card-header>\r\n        <nb-card-body>\r\n  <form [formGroup]=\"storeForm\" novalidate (ngSubmit) = \"onSubmit()\">\r\n   \r\n        <div class=\"form-group\">\r\n            <label>Name:</label>\r\n            <input class=\"form-control\"  formControlName=\"name\" type=\"text\">\r\n        </div>\r\n         \r\n       \r\n         <div class=\"form-group\">\r\n            <label> Email:</label>\r\n            <input class=\"form-control\" formControlName=\"email\" type=\"email\">\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label>Manager Name:</label>\r\n          <input class=\"form-control\" formControlName=\"manager\" type=\"text\">\r\n      </div>\r\n \r\n        <button type=\"submit\"\r\n            [disabled]=\" storeForm.invalid\" class=\"btn btn-success\">\r\n            Save\r\n        </button>\r\n\r\n</form>\r\n</nb-card-body>\r\n</nb-card>\r\n</div>\r\n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/stores/stores-list/stores-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/stores/stores-list/stores-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    Stores List\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/stores/stores-add/stores-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/stores/stores-add/stores-add.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3Jlcy9zdG9yZXMtYWRkL3N0b3Jlcy1hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/stores/stores-add/stores-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stores/stores-add/stores-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: StoresAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresAddComponent", function() { return StoresAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/dev */ "./src/app/config/dev.js");






let StoresAddComponent = class StoresAddComponent {
    constructor(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.storeForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            manager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmit() {
        //   console.log(this.storeForm.value);
        const data = this.storeForm.value;
        const action = this.http.post(_config_dev__WEBPACK_IMPORTED_MODULE_5__["config"].url + '/stores', data);
        action.subscribe(data => {
            //  console.log(data);
            if (data) {
                this.router.navigateByUrl('/pages/stores/stores-list');
            }
        });
    }
};
StoresAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-stores-add',
        template: __webpack_require__(/*! raw-loader!./stores-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/stores/stores-add/stores-add.component.html"),
        styles: [__webpack_require__(/*! ./stores-add.component.scss */ "./src/app/pages/stores/stores-add/stores-add.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StoresAddComponent);



/***/ }),

/***/ "./src/app/pages/stores/stores-list/stores-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/stores/stores-list/stores-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3Jlcy9zdG9yZXMtbGlzdC9zdG9yZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/stores/stores-list/stores-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/stores/stores-list/stores-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: StoresListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresListComponent", function() { return StoresListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/smart-table */ "./src/app/@core/data/smart-table.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/dev */ "./src/app/config/dev.js");






let StoresListComponent = class StoresListComponent {
    constructor(service, http) {
        this.service = service;
        this.http = http;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-heart"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                name: {
                    title: 'Name',
                    type: 'string',
                },
                manager: {
                    title: 'Manager',
                    type: 'string',
                },
                email: {
                    title: 'E-mail',
                    type: 'string',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.getData().subscribe(data => {
            console.log(data);
            this.source.load(data);
        });
    }
    getData() {
        const stores = this.http.get(_config_dev__WEBPACK_IMPORTED_MODULE_5__["config"].url + '/stores');
        return stores;
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
};
StoresListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-stores-list',
        template: __webpack_require__(/*! raw-loader!./stores-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/stores/stores-list/stores-list.component.html"),
        styles: [__webpack_require__(/*! ./stores-list.component.scss */ "./src/app/pages/stores/stores-list/stores-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__["SmartTableData"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], StoresListComponent);



/***/ }),

/***/ "./src/app/pages/stores/stores-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/stores/stores-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StoresRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresRoutingModule", function() { return StoresRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores.component */ "./src/app/pages/stores/stores.component.ts");
/* harmony import */ var _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores-list/stores-list.component */ "./src/app/pages/stores/stores-list/stores-list.component.ts");
/* harmony import */ var _stores_add_stores_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stores-add/stores-add.component */ "./src/app/pages/stores/stores-add/stores-add.component.ts");






const routes = [{
        path: '',
        component: _stores_component__WEBPACK_IMPORTED_MODULE_3__["StoresComponent"],
        children: [
            {
                path: 'stores-list',
                component: _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_4__["StoresListComponent"],
            },
            {
                path: 'stores-add',
                component: _stores_add_stores_add_component__WEBPACK_IMPORTED_MODULE_5__["StoresAddComponent"],
            }
        ],
    }];
let StoresRoutingModule = class StoresRoutingModule {
};
StoresRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StoresRoutingModule);

const routedComponents = [
    _stores_component__WEBPACK_IMPORTED_MODULE_3__["StoresComponent"],
    _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_4__["StoresListComponent"],
    _stores_add_stores_add_component__WEBPACK_IMPORTED_MODULE_5__["StoresAddComponent"]
];


/***/ }),

/***/ "./src/app/pages/stores/stores.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/stores/stores.component.ts ***!
  \**************************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoresComponent = class StoresComponent {
};
StoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-stores',
        template: `<router-outlet></router-outlet>`,
    })
], StoresComponent);



/***/ }),

/***/ "./src/app/pages/stores/stores.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/stores/stores.module.ts ***!
  \***********************************************/
/*! exports provided: StoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresModule", function() { return StoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _stores_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores-routing.module */ "./src/app/pages/stores/stores-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");







let StoresModule = class StoresModule {
};
StoresModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _stores_routing_module__WEBPACK_IMPORTED_MODULE_4__["StoresRoutingModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbUserModule"],
        ],
        declarations: [
            ..._stores_routing_module__WEBPACK_IMPORTED_MODULE_4__["routedComponents"],
        ],
    })
], StoresModule);



/***/ })

}]);
//# sourceMappingURL=stores-stores-module-es2015.js.map