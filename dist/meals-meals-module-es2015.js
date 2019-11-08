(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meals-meals-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/meals/meals-add/meals-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/meals/meals-add/meals-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <nb-card class=\"inline-form-card\">\r\n        <nb-card-header>Store form</nb-card-header>\r\n        <nb-card-body>\r\n  <form [formGroup]=\"angForm\" novalidate (ngSubmit) = \"onSubmit()\">\r\n    <div style=\"float:left; width:45%\">\r\n        <div class=\"form-group\">\r\n            <label>Name:</label>\r\n            <input class=\"form-control\"  formControlName=\"name\" type=\"text\">\r\n        </div>\r\n         \r\n        <div class=\"form-group\">\r\n          <label for=\"store\">Store</label>\r\n          <select class=\"form-control\" id=\"store\" formControlName=\"store\">\r\n              <option *ngFor=\"let pow of powers\" [value]=\"pow.name\">{{pow.name}}</option>\r\n            </select>\r\n        </div>\r\n         <div class=\"form-group\">\r\n            <label> carbohydrates:</label>\r\n            <input class=\"form-control\" formControlName=\"carbohydrates\" type=\"number\">\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label>Proteins:</label>\r\n          <input class=\"form-control\" formControlName=\"protein\" type=\"number\">\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label>Sugar:</label>\r\n        <input class=\"form-control\" formControlName=\"sugar\" type=\"number\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Image:</label>\r\n      <input formControlName=\"img_url\" type=\"file\"\r\n      id=\"file\"\r\n      (change)=\"handleFileInput($event.target.files)\">\r\n      </div>\r\n    \r\n  </div>\r\n  <div style=\"float:right; width:45%\">\r\n    <div class=\"form-group\">\r\n      <label>Fats:</label>\r\n      <input class=\"form-control\" formControlName=\"fat\" type=\"number\">\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label>Fibre:</label>\r\n    <input class=\"form-control\" formControlName=\"fibre\" type=\"number\">\r\n</div>\r\n \r\n<div class=\"form-group\">\r\n  <label>Salt:</label>\r\n  <input class=\"form-control\" formControlName=\"salt\" type=\"number\">\r\n</div>\r\n \r\n<div class=\"form-group\">\r\n  <label>Grams:</label>\r\n  <input class=\"form-control\" formControlName=\"grams\" type=\"number\">\r\n</div>\r\n\r\n \r\n<div class=\"form-group\">\r\n  <label>In grams:</label>\r\n  <input class=\"form-control\" formControlName=\"in_grams\" type=\"number\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"category\">Category</label>\r\n  <select class=\"form-control\" id=\"category\" formControlName=\"category\">\r\n      <option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\r\n    </select>\r\n</div>\r\n \r\n        <button type=\"submit\"\r\n            [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-success\">\r\n            Save\r\n        </button>\r\n \r\n  </div>\r\n</form>\r\n</nb-card-body>\r\n</nb-card>\r\n</div>\r\n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/meals/meals-list/meals-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/meals/meals-list/meals-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    Meals List\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/meals/meals-add/meals-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/meals/meals-add/meals-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lYWxzL21lYWxzLWFkZC9tZWFscy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/meals/meals-add/meals-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/meals/meals-add/meals-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MealsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsAddComponent", function() { return MealsAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/dev */ "./src/app/config/dev.js");






let MealsAddComponent = class MealsAddComponent {
    constructor(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.fileToUpload = null;
        this.categories = ['Breakfast', 'Lunch', 'Dinner'];
        this.createForm();
        this.getStores();
    }
    createForm() {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            carbohydrates: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            protein: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sugar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fibre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            grams: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            store: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            in_grams: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img_url: ['']
        });
    }
    onSubmit() {
        if (this.fileToUpload) {
            this.img_url = "/" + this.fileToUpload.name;
            console.log(this.img_url);
        }
        console.log(this.img_url);
        const data = {
            name: this.angForm.value.name,
            carbohydrates: this.angForm.value.carbohydrates,
            protein: this.angForm.value.protein,
            sugar: this.angForm.value.sugar,
            salt: this.angForm.value.salt,
            fat: this.angForm.value.fat,
            fibre: this.angForm.value.fibre,
            grams: this.angForm.value.grams,
            store: this.angForm.value.store,
            in_grams: this.angForm.value.in_grams,
            category: this.angForm.value.category,
            img_url: this.img_url
        };
        console.log(data);
        const response = this.http.post(_config_dev__WEBPACK_IMPORTED_MODULE_5__["config"].url + '/meals', data);
        this.postFile(this.fileToUpload, data.img_url).subscribe(data => {
            console.log(data);
        });
        response.subscribe(data => {
            console.log("response");
            console.log(data);
            if (data) {
                this.router.navigateByUrl('/pages/meals/meals-list');
            }
        });
        console.log("clicked submit");
    }
    getStores() {
        const store = this.http.get(_config_dev__WEBPACK_IMPORTED_MODULE_5__["config"].url + '/stores');
        store.subscribe(data => {
            console.log(data);
            this.powers = data;
        });
    }
    handleFileInput(files) {
        this.fileToUpload = files.item(0);
    }
    postFile(fileToUpload, filename) {
        // const endpoint = 'http://localhost:42000/Users/user/Desktop/school/project code/client/files';
        const formData = new FormData();
        formData.append('sampleFile', fileToUpload, filename);
        return this.http
            .post(_config_dev__WEBPACK_IMPORTED_MODULE_5__["config"].url + '/files', formData);
    }
};
MealsAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-meals-list',
        template: __webpack_require__(/*! raw-loader!./meals-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/meals/meals-add/meals-list.component.html"),
        styles: [__webpack_require__(/*! ./meals-list.component.scss */ "./src/app/pages/meals/meals-add/meals-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], MealsAddComponent);



/***/ }),

/***/ "./src/app/pages/meals/meals-list/meals-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/meals/meals-list/meals-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lYWxzL21lYWxzLWxpc3QvbWVhbHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/meals/meals-list/meals-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/meals/meals-list/meals-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MealsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsListComponent", function() { return MealsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/smart-table */ "./src/app/@core/data/smart-table.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/dev */ "./src/app/config/dev.js");






let MealsListComponent = class MealsListComponent {
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
                confirmEdit: true,
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
                carbohydrates: {
                    title: 'Carbohydrates',
                    type: 'string',
                },
                protein: {
                    title: 'Proteins',
                    type: 'string',
                },
                fat: {
                    title: 'Fats',
                    type: 'number',
                },
                calories: {
                    title: 'Energy(Kcal)',
                    type: 'number',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.getData().subscribe(data => {
            this.source.load(data);
            console.log(data);
            data.forEach(record => {
                console.log(_config_dev__WEBPACK_IMPORTED_MODULE_5__["config"].resources + record.img_url);
            });
        });
        //console.log(custmdata)cmd
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    onconfirmSave(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    getData() {
        // var fetched_data;
        return this.http.get(_config_dev__WEBPACK_IMPORTED_MODULE_5__["config"].url + '/meals');
    }
};
MealsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-meals-list',
        template: __webpack_require__(/*! raw-loader!./meals-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/meals/meals-list/meals-list.component.html"),
        styles: [__webpack_require__(/*! ./meals-list.component.scss */ "./src/app/pages/meals/meals-list/meals-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__["SmartTableData"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], MealsListComponent);



/***/ }),

/***/ "./src/app/pages/meals/meals-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/meals/meals-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MealsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsRoutingModule", function() { return MealsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _meals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meals.component */ "./src/app/pages/meals/meals.component.ts");
/* harmony import */ var _meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meals-list/meals-list.component */ "./src/app/pages/meals/meals-list/meals-list.component.ts");
/* harmony import */ var _meals_add_meals_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meals-add/meals-list.component */ "./src/app/pages/meals/meals-add/meals-list.component.ts");






const routes = [{
        path: '',
        component: _meals_component__WEBPACK_IMPORTED_MODULE_3__["MealsComponent"],
        children: [
            {
                path: 'meals-list',
                component: _meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_4__["MealsListComponent"],
            },
            {
                path: 'meals-add',
                component: _meals_add_meals_list_component__WEBPACK_IMPORTED_MODULE_5__["MealsAddComponent"],
            }
        ],
    }];
let MealsRoutingModule = class MealsRoutingModule {
};
MealsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MealsRoutingModule);

const routedComponents = [
    _meals_component__WEBPACK_IMPORTED_MODULE_3__["MealsComponent"],
    _meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_4__["MealsListComponent"],
    _meals_add_meals_list_component__WEBPACK_IMPORTED_MODULE_5__["MealsAddComponent"]
];


/***/ }),

/***/ "./src/app/pages/meals/meals.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/meals/meals.component.ts ***!
  \************************************************/
/*! exports provided: MealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsComponent", function() { return MealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MealsComponent = class MealsComponent {
};
MealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-meals',
        template: `<router-outlet></router-outlet>`,
    })
], MealsComponent);



/***/ }),

/***/ "./src/app/pages/meals/meals.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/meals/meals.module.ts ***!
  \*********************************************/
/*! exports provided: MealsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsModule", function() { return MealsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _meals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meals-routing.module */ "./src/app/pages/meals/meals-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");









let MealsModule = class MealsModule {
};
MealsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _meals_routing_module__WEBPACK_IMPORTED_MODULE_5__["MealsRoutingModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"],
        ],
        declarations: [
            ..._meals_routing_module__WEBPACK_IMPORTED_MODULE_5__["routedComponents"],
        ],
    })
], MealsModule);



/***/ })

}]);
//# sourceMappingURL=meals-meals-module-es2015.js.map