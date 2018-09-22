webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__searchlist_searchlist__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, apiservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.apiservice = apiservice;
        this.loadingCtrl = loadingCtrl;
    } //constructor close......
    SearchPage.prototype.allSearch = function () {
        var _this = this;
        var data = { "key": this.searchKey };
        console.log(data);
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
        this.apiservice.allSearch(data).then(function (result) {
            _this.responseData = result;
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
                var data1 = _this.responseData.data;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__searchlist_searchlist__["a" /* SearchlistPage */], { data: data1 });
                _this.loading.dismiss();
            }
            else {
                _this.loading.dismiss();
            }
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-input [(ngModel)]="searchKey" type="text" name="searchKey" placeholder="Search Profile" class="searchInput"></ion-input>\n  </div>\n  <div style="padding-top:10px;">\n    <button ion-button full (click)="allSearch()" round>Submit</button>\n  </div>\n  <div style="margin-top:2%">\n    <img src="assets/imgs/search.png" width="100%"  />\n  </div>\n</ion-content>'/*ion-inline-end:"/home/pc/jainsampark/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navparams) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.details = "personal";
        this.searchProfile = [];
        this.searchProfile = navparams.get('searchprofile');
        console.log(this.searchProfile);
    } // constructor close.....
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/details/details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Details\n    </ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n<ion-content>\n  <div>\n    <div>\n      <img [src]="searchProfile.profile_image" height="200px" width="100%" imageViewer />\n    </div>\n    <div padding>\n      <ion-segment [(ngModel)]="details">\n        <ion-segment-button value="personal">\n          Personal\n        </ion-segment-button>\n        <ion-segment-button value="family">\n          Family\n        </ion-segment-button>\n        <ion-segment-button value="business">\n          Business\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div [ngSwitch]="details">\n      <ion-list padding *ngSwitchCase="\'personal\'" text-wrap>\n        <ion-item>\n          <p>Name : {{searchProfile.first_name}} {{searchProfile.last_name}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Gender : {{searchProfile.gender}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Marital Status : {{searchProfile.marital_status}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Father Name : {{searchProfile.father_name}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Mother Name : {{searchProfile.mother_name}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Birth Date : {{searchProfile.date_of_birth}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Anniversary Date : {{searchProfile.date_of_anniversary}}</p>\n        </ion-item>\n        <ion-item>\n          <p>User Email : {{searchProfile.user_email}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Address :{{searchProfile.permanent_address}}</p>\n        </ion-item>\n        <ion-item>\n          <p>city : {{searchProfile.permanent_city}}</p>\n        </ion-item>\n        <ion-item>\n          <p>State : {{searchProfile.state_name}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Country : {{searchProfile.country_name}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Pincode : {{searchProfile.permanent_pincode}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Blood Group :{{searchProfile.profile_Cast}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Education :{{searchProfile.education}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Hobbies : {{searchProfile.hobbies}}</p>\n        </ion-item>\n        <ion-item *ngFor = "let cont of searchProfile.contact_no">\n          <p>Contact No. : {{cont.contact_number}}</p>\n        </ion-item>\n        <div text-center>\n          <p> QR Code </p>\n          <div text-center>\n            <div class="image">\n              <img [src]="searchProfile.qr_code_image"  width="50%" height="50%" class="custom-avatar" imageViewer>\n            </div>\n          </div>\n        </div>\n      </ion-list>\n\n      <ion-list padding *ngSwitchCase="\'family\'">\n        <div *ngFor="let member of searchProfile.members" text-wrap>\n          <div padding>\n            <h4>\n               {{member.first_name}}\n            </h4>\n            <h5> relation: {{member.user_relation}}</h5>\n\n            <ion-item>\n              <p>Gender : {{member.gender}}</p>\n\n            </ion-item>\n            <ion-item>\n              <p>Marital Status:{{member.marital_status}}</p>\n            </ion-item>\n            <ion-item>\n              <p>Father Name : {{member.father_name}}</p>\n            </ion-item>\n            <ion-item>\n              <p>Mother Name :{{member.mother_name}}</p>\n            </ion-item>\n            <ion-item>\n              <p>Birth Date :{{member.date_of_birth}}</p>\n            </ion-item>\n            <ion-item>\n              <p>Anniversary Date : {{member.date_of_anniversary}}</p>\n            </ion-item>\n            <ion-item>\n              <p>User Email : {{member.user_email}}</p>\n            </ion-item>\n            <ion-item>\n              <p>Address :{{member.permanent_address}}</p>\n            </ion-item>\n            <ion-item>\n              <p>city : {{member.permanent_city}}</p>\n            </ion-item>\n            <ion-item>\n              <p>State: {{member.state_name}}</p>\n            </ion-item>\n            <ion-item>\n              <p>Country :{{member.country_name}}</p>\n            </ion-item>\n            <ion-item>\n              <p>Pincode :{{member.permanent_pincode}}</p>\n            </ion-item>\n            <!-- <ion-item>\n              <p>Blood Group :B+</p>\n            </ion-item> -->\n            <!-- <ion-item>\n              <p>Education:B.E</p>\n            </ion-item> -->\n            <!-- <ion-item>\n              <p>Hobbies :software Devlopment</p>\n            </ion-item> -->\n            <ion-item>\n              <p>Contact No. :{{member.personal_contact_no}}</p>\n            </ion-item>\n          </div>\n        </div>\n        <!-- <ion-card>\n          <div padding>\n            <h4>\n              Shri Seema Jain\n            </h4>\n            <h6> relation: Mother</h6>\n\n            <ion-item>\n              <p>Gender : Female</p>\n\n            </ion-item>\n            <ion-item>\n              <p>Marital Status:married</p>\n            </ion-item>\n            <ion-item>\n              <p>Father Name : prakash Jain</p>\n            </ion-item>\n            <ion-item>\n              <p>Mother Name :babita Jain</p>\n            </ion-item>\n            <ion-item>\n              <p>Birth Date :15/06/1972</p>\n            </ion-item>\n            <ion-item>\n              <p>Anniversary Date : 01/05/2014</p>\n            </ion-item>\n            <ion-item>\n              <p>User Email : cn@mailinator.com</p>\n            </ion-item>\n            <ion-item>\n              <p>Address :----------</p>\n            </ion-item>\n            <ion-item>\n              <p>city : indore</p>\n            </ion-item>\n            <ion-item>\n              <p>State: M.P.</p>\n            </ion-item>\n            <ion-item>\n              <p>Country :India</p>\n            </ion-item>\n            <ion-item>\n              <p>Pincode :452001</p>\n            </ion-item>\n            <ion-item>\n              <p>Blood Group :B+</p>\n            </ion-item>\n            <ion-item>\n              <p>Education:B.E</p>\n            </ion-item>\n            <ion-item>\n              <p>Hobbies :software Devlopment</p>\n            </ion-item>\n            <ion-item>\n              <p>Contact No. :9425726003</p>\n            </ion-item>\n          </div>\n        </ion-card> -->\n      </ion-list>\n\n      <ion-list padding *ngSwitchCase="\'business\'" text-wrap>\n        <div text-center>\n          <p> Firm Logo </p>\n          <div text-center>\n            <div class="image">\n              <img [src]="searchProfile.firm_logo"  width="50%" height="50%" class="custom-avatar" imageViewer/>\n            </div>\n          </div>\n        </div>\n        <ion-item>\n          <p>Firm Name : {{searchProfile.firm_name}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Industry Category : {{searchProfile.firm_type}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm Contact No.1 : {{searchProfile.firm_contact1}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm Contact No.2 : {{searchProfile.firm_contact2}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm Contact No.3 : {{searchProfile.firm_contact3}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm Country : {{searchProfile.firm_country_name}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm State :{{searchProfile.firm_state_name}}.</p>\n        </ion-item>\n        <ion-item>\n          <p>City : {{searchProfile.firm_city}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm Address : {{searchProfile.firm_address}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm Pincode : {{searchProfile.firm_pincode}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm Email : {{searchProfile.firm_email_id}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Firm Website :{{searchProfile.firm_website}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/pc/jainsampark/src/pages/details/details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsauthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SmsauthPage = /** @class */ (function () {
    function SmsauthPage(alertCtrl, navCtrl, formBuilder, events, nativeStorage, toastCtrl, loadingCtrl, menuCtrl, apiservice) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.events = events;
        this.nativeStorage = nativeStorage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.apiservice = apiservice;
        this.user_name = '';
        this.otp = '';
        this.navCtrl = navCtrl;
        this.authForm = formBuilder.group({
            user_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            otp: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    } // constructor close......
    SmsauthPage.prototype.validate_sms = function () {
        var _this = this;
        var data = { "user_name": this.user_name, "otp": this.otp };
        console.log(data);
        this.apiservice.smsAuth(data).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData.status);
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.responseData.message,
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    // hideShowPassword() {
    //   this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    //   this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    // }
    SmsauthPage.prototype.backToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    SmsauthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-smsauth',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/smsauth/smsauth.html"*/'\n\n<ion-content >\n    <div style="text-align:center">\n        <ion-img  src="assets/imgs/Logo1.png" alt=Bakersville style="height: 216px;\n        width: 215px;"></ion-img> \n    </div>\n\n   <div padding > \n        <form [formGroup]="authForm" >\n            <ion-list padding>\n                    <ion-item >\n                      \n                        <ion-icon name="md-contact" style="font-size:32px;border-bottom: 1px solid;margin-top: 3px;padding-bottom: 7px;" item-left></ion-icon>\n                        <ion-input formControlName="user_name" type="text" value="" style="padding-left:5%;" placeholder="Username/Phone number" [(ngModel)]="user_name"></ion-input>\n                       \n                    </ion-item>\n                    \n                    <p *ngIf="authForm.controls.user_name.hasError(\'required\') && authForm.controls.user_name.touched">*Username is required!</p>\n                    <p *ngIf="authForm.controls.user_name.hasError(\'pattern\') && authForm.controls.user_name.touched">Please! enter a valid user name </p>\n                    <ion-item style="border-bottom: 1px solid black" >\n                      \n                        <ion-icon name="eye" item-left style="font-size:32px;border-bottom: 1px solid;padding-bottom: 7px;"></ion-icon>\n                        <ion-input formControlName="otp"  type="number" clearOnEdit="false" style="padding-left:5%;" placeholder="OTP" [(ngModel)]="otp"></ion-input>\n                       \n                    </ion-item>\n                    <p *ngIf="authForm.controls.otp.hasError(\'required\') && authForm.controls.otp.touched">*Password is required!</p>\n                    \n                \n                    \n                <div style="padding:5%">\n                    <button ion-button color="primary" full round (click)="validate_sms()"  >Mobile Authenticate</button>\n                    <br>\n                   \n                   <button ion-button color="primary" full round (click)="backToLogin()">Back to Login</button>\n                </div> \n                \n                \n            </ion-list>   \n        </form>\n    </div>\n   \n</ion-content>\n  '/*ion-inline-end:"/home/pc/jainsampark/src/pages/smsauth/smsauth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__providers_restapi_service__["a" /* ApiService */]])
    ], SmsauthPage);
    return SmsauthPage;
}());

//# sourceMappingURL=smsauth.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchlistPage = /** @class */ (function () {
    function SearchlistPage(navCtrl, navparams) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        // this.list = navparams.get('data');
        // console.log(this.list);
    } //constructor close.....
    SearchlistPage.prototype.ionViewDidLoad = function () {
        this.list = this.navparams.get('data');
        console.log(this.list);
    };
    SearchlistPage.prototype.searchProfile = function (searchProfile) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { 'searchprofile': searchProfile });
    };
    SearchlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchlist',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/searchlist/searchlist.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search List</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <div >\n      <ion-row *ngFor = "let item of list" style="border-bottom: 1px solid grey;height:6em" (click)="searchProfile(item)"> \n        <ion-col col-2>\n          <img [src]="item.profile_image" class="searchImage" imageViewer />\n        </ion-col>\n        <ion-col col-10>\n          <h6>\n            {{item.first_name}}\n          </h6>\n          <p style="color:grey;" class=\'ellipsis\'>\n            {{item.permanent_address}}\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/pc/jainsampark/src/pages/searchlist/searchlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], SearchlistPage);
    return SearchlistPage;
}());

//# sourceMappingURL=searchlist.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsdetailsPage = /** @class */ (function () {
    function NewsdetailsPage(navCtrl, alertCtrl, toastCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.user_name = '';
        this.news = this.navParams.get('news');
    } // constructor close..
    NewsdetailsPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    NewsdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newsdetails',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/newsdetails/newsdetails.html"*/'<ion-header>\n        <ion-navbar color="primary">\n         \n          <ion-title>News Details</ion-title>\n          <ion-buttons end padding-right>\n                <button (click)="cancel()" ion-button icon-only>\n               <ion-icon name="close"></ion-icon>\n             </button>\n          </ion-buttons>\n        </ion-navbar>\n      </ion-header>\n      \n    <ion-content >\n        <div>\n            <img [src]="news.featured_image" height="200px" width="100%" imageViewer />\n        </div>\n        <div text-center>\n            <h5>{{news.title}}</h5>\n            <p>{{news.publish_date_and_time}} <br> {{news.short_description}} </p>\n        </div>\n    </ion-content>\n      '/*ion-inline-end:"/home/pc/jainsampark/src/pages/newsdetails/newsdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], NewsdetailsPage);
    return NewsdetailsPage;
}());

//# sourceMappingURL=newsdetails.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { KeyvaluePipe } from '../../pipes/keyvalue/keyvalue';
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, apiservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiservice = apiservice;
        this.loadingCtrl = loadingCtrl;
        this.list = [];
        this.dates = [];
        this.dataList = [];
        console.log("hello");
    } // contructor close.....
    ListPage.prototype.ionViewDidLoad = function () {
        console.log("hi");
        this.bitrhday();
    };
    ListPage.prototype.bitrhday = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
        this.apiservice.eventList().then(function (result) {
            _this.responseData = result;
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
                _this.list = _this.responseData.data;
                // console.log(JSON.stringify(this.list));
                // this.dataList =  Object.values(this.list);
                _this.dates = Object.keys(_this.list);
                console.log(_this.dates);
                // this.navCtrl.push(DetailsPage,);
                _this.loading.dismiss();
            }
            else {
                _this.loading.dismiss();
            }
        });
    };
    ListPage.prototype.details = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { 'searchprofile': data });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Birthday & Reminders</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <h6 style="color:grey;" text-center> Birthday & Anniversary in this Month</h6>\n  <div *ngFor="let b_date of dates;">\n\n    <!-- <div *ngFor="let data of dataList"> -->\n      <!-- <div *ngFor="let da of list[b_data]">\n        {{da.id}} -->\n        <div padding style="background-color: #eee;border:1px solid grey"> {{b_date}} </div>\n        <div style="border-bottom: 1px solid grey;" *ngFor="let data of list[b_date]" >\n          <ion-row (click)="details(data)">\n            <ion-col col-3 style="padding-top:3px" >\n              \n              <img src={{data.display_profile_image}} style="width:100% ; height: 70px;" imageViewer />\n            </ion-col>\n            <ion-col col-9>\n              <h6> {{data.display_name}}</h6>\n              <p> {{data.event_type}} </p>\n            </ion-col>\n          </ion-row>\n        </div>\n      \n  </div>\n  <!-- <div padding style="background-color: #eee;border:1px solid grey"> 07/06/2018 </div>\n    <div style="border-bottom: 1px solid grey;">\n      <ion-row (click)="details()">\n        <ion-col col-3 style="padding-top:13px">\n         <img src="assets/imgs/backImage5.jpg"  imageViewer />\n        </ion-col>\n        <ion-col col-9 >\n          <h6> Vikas Jain</h6>\n          <p> Birthday </p>\n        </ion-col>\n      </ion-row>\n    </div>\n</ion-content> -->'/*ion-inline-end:"/home/pc/jainsampark/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resetpass_resetpass__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, alertCtrl, toastCtrl, api) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.email = '';
    } // constructor close..
    ForgotPasswordPage.prototype.forgotPass = function () {
        var _this = this;
        var data = { "email": this.email };
        console.log(data);
        this.api.forgotPass(data).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData.status);
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__resetpass_resetpass__["a" /* ResetpassPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.responseData.message,
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
        // this.navCtrl.setRoot(HomePage);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/forgotpassword/forgotpassword.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Forgot Password</ion-title>\n    </ion-navbar>\n     \n</ion-header>\n  \n<ion-content class="forgotContent">\n\n    <ion-list class="listRegister" padding>\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">Email</ion-label>\n            <ion-input [(ngModel)]="email" type="text" name="email" placeholder="Email"  class="inputRegister" ></ion-input>\n        </div>\n    </ion-list>\n    <div class="registerSubmit">\n        <button ion-button (click)="forgotPass()" full>SUBMIT</button>\n    </div>     \n\n</ion-content>\n  '/*ion-inline-end:"/home/pc/jainsampark/src/pages/forgotpassword/forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service__["a" /* ApiService */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetpassPage = /** @class */ (function () {
    function ResetpassPage(navCtrl, alertCtrl, toastCtrl, api) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.email = '';
        this.pwd = '';
    } // constructor close..
    ResetpassPage.prototype.resetPass = function () {
        var _this = this;
        var data = { "email": this.email, "pwd": this.pwd };
        console.log(data);
        this.api.resetPass(data).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData.status);
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.responseData.message,
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ResetpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpass',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/resetpass/resetpass.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Reset Password</ion-title>\n    </ion-navbar>\n     \n</ion-header>\n  \n<ion-content class="forgotContent">\n\n    <ion-list class="listRegister" padding>\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">Email</ion-label>\n            <ion-input [(ngModel)]="email" type="text" name="email" placeholder="Email"  class="inputRegister" ></ion-input>\n        </div>\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">Password</ion-label>\n            <ion-input [(ngModel)]="pwd" type="text" name="pwd" placeholder="password"  class="inputRegister" ></ion-input>\n        </div>\n    </ion-list>\n    <div class="registerSubmit">\n        <button ion-button (click)="resetPass()" full>SUBMIT</button>\n    </div>     \n\n</ion-content>\n  '/*ion-inline-end:"/home/pc/jainsampark/src/pages/resetpass/resetpass.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service__["a" /* ApiService */]])
    ], ResetpassPage);
    return ResetpassPage;
}());

//# sourceMappingURL=resetpass.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__smsauth_smsauth__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { OTPPage } from '../otp/otp';






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, api, toastCtrl, transfer, camera, imagePicker, actionSheetCtrl, file, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.responseData = '';
        this.first_name = '';
        this.last_name = '';
        this.father_name = '';
        this.mother_name = '';
        this.user_email = '';
        this.password = '';
        // contact_no = [];
        this.social_id = '';
        this.profile_image = '';
        this.members = '';
        if (this.imageSource == '' || this.imageSource == undefined) {
            this.imageSource = "assets/imgs/No1.png";
        }
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
    } //constructor close
    RegisterPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose or take a picture',
            buttons: [
                {
                    text: 'Take a picture',
                    handler: function () {
                        _this.upload();
                    }
                },
                {
                    text: 'Choose pictures',
                    handler: function () {
                        _this.openImagePicker();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RegisterPage.prototype.upload = function () {
        var _this = this;
        var options = {
            quality: 100
        };
        this.camera.getPicture(options).then(function (imageData) {
            var fileTransfer = _this.transfer.create();
            var options1 = {
                //    fileKey: 'file',
                //    fileName: 'name.jpg',
                chunkedMode: false,
                httpMethod: 'POST',
                headers: {
                    "Api-Key": "39b1cdc8a1099ce2bb9f0000e860ad8c"
                }
            };
            console.log(imageData);
            _this.loading.present();
            fileTransfer.upload(imageData, 'http://sampark.darshantraavels.com/wp-json/api/v1/upload_media', options1)
                .then(function (data) {
                // success
                console.log(data);
                _this.imgResponse = data.response;
                console.log(_this.imgResponse);
                var img = JSON.parse(_this.imgResponse);
                _this.imageSource = img.data[0];
                _this.profile_image = img.data[0];
                console.log(_this.profile_image);
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                // error
                alert("error" + JSON.stringify(err));
            });
        });
    };
    RegisterPage.prototype.openImagePicker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.photos = results;
            var photo = _this.photos[0];
            console.log(_this.photos);
            var fileTransfer = _this.transfer.create();
            var options1 = {
                //    fileKey: 'file',
                //    fileName: 'name.jpg',
                chunkedMode: false,
                httpMethod: 'POST',
                headers: {
                    "Api-Key": "39b1cdc8a1099ce2bb9f0000e860ad8c"
                }
            };
            console.log(photo);
            _this.loading.present();
            fileTransfer.upload(photo, 'http://sampark.darshantraavels.com/wp-json/api/v1/upload_media', options1)
                .then(function (data) {
                // success
                console.log(data);
                _this.imgResponse = data.response;
                console.log(_this.imgResponse);
                var img = JSON.parse(_this.imgResponse);
                _this.imageSource = img.data[0];
                _this.profile_image = img.data[0];
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                // error
                alert("error" + JSON.stringify(err));
            });
        }, function (err) { console.log(err); });
    };
    RegisterPage.prototype.submitRegister = function () {
        var _this = this;
        this.loading.present();
        console.log('hello');
        if (this.validateForm()) {
            //   let con = {};
            //  con["contact_number"] = this.contact_num;
            //  this.contact_no.push(con);
            // let contact_no = ;
            var userData = { "first_name": this.first_name, "last_name": this.last_name, "father_name": this.father_name, "mother_name": this.mother_name, "user_email": this.user_email, "password": this.password, "contact_no": [{ "contact_number": this.contact_num, "contact_type": "PRIMARY" }], "profile_image": this.profile_image, "members": this.members };
            console.log(userData);
            this.api.registerUser(userData).then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData);
                if (_this.responseData.status) {
                    _this.loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'User registered successfully ! please verify mobile no. with OTP ',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__smsauth_smsauth__["a" /* SmsauthPage */]);
                }
                else {
                    _this.loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        duration: 5000,
                        position: 'top'
                    });
                    toast.present();
                }
            });
        }
    };
    RegisterPage.prototype.cancelRegister = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    RegisterPage.prototype.backToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.validateForm = function () {
        var response = true;
        if (this.first_name == '') {
            this.message = 'Please enter first name.';
            this.showAlert();
            response = false;
        }
        else if (this.last_name == '') {
            this.message = 'Please enter last name.';
            this.showAlert();
            response = false;
        }
        else if (this.user_email == '') {
            this.message = 'Please enter user email.';
            this.showAlert();
            response = false;
        }
        else if (this.password == '') {
            this.message = 'Please enter Password.';
            this.showAlert();
            response = false;
        }
        else if (this.contact_num == '') {
            this.message = 'Please enter mobile no.';
            this.showAlert();
            response = false;
        }
        else if (this.profile_image == '') {
            this.message = 'Please add profile image.';
            this.showAlert();
            response = false;
        }
        return response;
    };
    RegisterPage.prototype.showAlert = function () {
        var toast = this.toastCtrl.create({
            message: this.message,
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/register/register.html"*/'<ion-content>\n\n    <div text-center>\n        <div class="image">\n            <img [src]="imageSource" width="50%" height="50%" class="custom-avatar" />\n        </div>\n        <div>\n            <ion-icon name="ios-camera-outline" class="profileIcon" (click)="presentActionSheet()"></ion-icon>\n            <p style="color:grey">Add Your Profile Photo</p>\n        </div>\n    </div>\n\n    <ion-list class="listRegister" style="padding-top: 16px;padding-left: 16px;padding-right:16px;">\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">First Name</ion-label>\n            <ion-input [(ngModel)]="first_name" type="text" name="first_name" placeholder="First Name" class="inputRegister" autocorrect="on" spellcheck="true"></ion-input>\n        </div>\n\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">Last Name</ion-label>\n            <ion-input [(ngModel)]="last_name" type="text" name="last_name" placeholder="Last Name" class="inputRegister"></ion-input>\n        </div>\n\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">Father Name</ion-label>\n            <ion-input [(ngModel)]="father_name" type="text" name="father_name" placeholder="Father Name" class="inputRegister"></ion-input>\n        </div>\n\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">Mother Name</ion-label>\n            <ion-input [(ngModel)]="mother_name" type="text" name="mother_name" placeholder="Mother Name" class="inputRegister"></ion-input>\n        </div>\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">Email</ion-label>\n            <ion-input [(ngModel)]="user_email" type="text" name="user_email" placeholder="Email" class="inputRegister"></ion-input>\n        </div>\n\n        <div class="regAll">\n            <ion-label stacked class="registerLabel">Password</ion-label>\n            <ion-input [(ngModel)]="password" type="password" name="password" placeholder="Password" class="inputRegister"></ion-input>\n        </div>\n\n        <div style="border: 1px solid grey;">\n            <ion-label stacked class="registerLabel">Mobile No.</ion-label>\n            <ion-input [(ngModel)]="contact_num" type="text" name="contact_num" placeholder="Mobile Number (Multiple and OTP Verified)" class="inputRegister"></ion-input>\n        </div>\n    </ion-list>\n    <div class="registerSubmit">\n        <button ion-button (click)="submitRegister()" round full>Submit</button><br>\n        <button ion-button (click)="cancelRegister()" round full>Reset Form</button><br>\n        <button ion-button (click)="backToLogin()" round full>Back to Login</button>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/home/pc/jainsampark/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addphone_addphone__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addmember_addmember__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UpdateprofilePage = /** @class */ (function () {
    function UpdateprofilePage(navCtrl, modalCtrl, apiservice, nativeStorage, toastCtrl, loadingCtrl, transfer, camera, imagePicker, actionSheetCtrl, file) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.apiservice = apiservice;
        this.nativeStorage = nativeStorage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.details = "personal";
        this.phone_list = [];
        this.member_list = [];
        this.state_list = [];
        this.country_list = [];
        this.userInfo = [];
        this.statelist();
        this.countrylist();
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
    } // constructor close....
    UpdateprofilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nativeStorage.get('userData').then(function (val) {
                _this.userInfo = val;
                _this.profile_image = val.profile_image;
                console.log(_this.userInfo);
                _this.first_name = val.first_name;
                _this.last_name = val.last_name;
                _this.gender = val.gender;
                _this.marital_status = val.marital_status;
                _this.father_name = val.father_name;
                _this.mother_name = val.mother_name;
                _this.date_of_birth = val.date_of_birth;
                _this.date_of_anniversary = val.date_of_anniversary;
                _this.user_email = val.user_email;
                _this.permanent_address = val.permanent_address;
                _this.permanent_city = val.permanent_city;
                _this.permanent_state = val.permanent_state;
                _this.permanent_country = val.permanent_country;
                _this.permanent_pincode = val.permanent_pincode;
                _this.profile_Cast = val.profile_Cast;
                _this.profile_blood_group = val.profile_blood_group;
                _this.education = val.education;
                _this.hobbies = val.hobbies;
                _this.firm_name = val.firm_name;
                _this.firm_type = val.firm_type;
                _this.firm_contact1 = val.firm_contact1;
                _this.firm_contact2 = val.firm_contact2;
                _this.firm_contact3 = val.firm_contact3;
                _this.firm_country = val.firm_country;
                _this.firm_state = val.firm_state;
                _this.firm_city = val.firm_city;
                _this.firm_address = val.firm_address;
                _this.firm_pincode = val.firm_pincode;
                _this.firm_email_id = val.firm_email_id;
                _this.firm_website = val.firm_website;
                _this.firm_logo = val.firm_logo;
                _this.qr_code_image = val.qr_code_image;
                _this.id = val.id;
                _this.phone_list = val.contact_no;
                // alert(this.phone_list);
                _this.member_list = val.members;
                resolve("done");
            });
        });
        promise.then(function (result) {
            console.log(this.firm_logo);
            console.log(this.qr_code_image);
            if (this.firm_logo === undefined) {
                console.log("hello");
                this.firm_logo = "assets/imgs/No1.png";
            }
            if (this.qr_code_image == undefined) {
                this.qr_code_image = "assets/imgs/No1.png";
            }
            console.log(result); // "done!"
        }, function (err) {
            console.log(err); // Error: "It broke"
        });
    }; // load view close...
    UpdateprofilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose or take a picture',
            buttons: [
                {
                    text: 'Take a picture',
                    handler: function () {
                        _this.upload();
                    }
                },
                {
                    text: 'Choose pictures',
                    handler: function () {
                        _this.openImagePicker();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UpdateprofilePage.prototype.upload = function () {
        var _this = this;
        var options = {
            quality: 100
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // alert(imageData);
            var fileTransfer = _this.transfer.create();
            var options1 = {
                //    fileKey: 'file',
                //    fileName: 'name.jpg',
                chunkedMode: false,
                httpMethod: 'POST',
                headers: {
                    "Api-Key": "39b1cdc8a1099ce2bb9f0000e860ad8c"
                }
            };
            console.log(imageData);
            _this.loading.present();
            fileTransfer.upload(imageData, 'http://sampark.darshantraavels.com/wp-json/api/v1/upload_media', options1)
                .then(function (data) {
                _this.loading.dismiss();
                // success
                console.log(data);
                _this.imgResponse = data.response;
                console.log(_this.imgResponse);
                var img = JSON.parse(_this.imgResponse);
                // this.imageSource = img.data[0];
                _this.profile_image = img.data[0];
                console.log(_this.profile_image);
            }, function (err) {
                _this.loading.dismiss();
                // error
                // alert("error"+JSON.stringify(err));
                console.log(err);
            });
        });
    };
    UpdateprofilePage.prototype.openImagePicker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.photos = results;
            var photo = _this.photos[0];
            console.log(_this.photos);
            var fileTransfer = _this.transfer.create();
            var options1 = {
                //    fileKey: 'file',
                //    fileName: 'name.jpg',
                chunkedMode: false,
                httpMethod: 'POST',
                headers: {
                    "Api-Key": "39b1cdc8a1099ce2bb9f0000e860ad8c"
                }
            };
            console.log(photo);
            fileTransfer.upload(photo, 'http://sampark.darshantraavels.com/wp-json/api/v1/upload_media', options1)
                .then(function (data) {
                _this.loading.dismiss();
                // success
                console.log(data);
                _this.imgResponse = data.response;
                console.log(_this.imgResponse);
                var img = JSON.parse(_this.imgResponse);
                // this.imageSource = img.data[0];
                _this.profile_image = img.data[0];
            }, function (err) {
                _this.loading.dismiss();
                // error
                // alert("error"+JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    UpdateprofilePage.prototype.presentPhoneModal = function () {
        var _this = this;
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__addphone_addphone__["a" /* AddphonePage */]);
        contactModal.onDidDismiss(function (data) {
            if (data != undefined) {
                _this.phone_list.push(data);
                console.log("memberData" + data);
            }
        });
        contactModal.present();
    };
    UpdateprofilePage.prototype.editPhone = function (phone) {
        var _this = this;
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__addphone_addphone__["a" /* AddphonePage */], { "phone": phone });
        contactModal.onDidDismiss(function (data) {
            if (data != undefined) {
                var index = _this.phone_list.indexOf(phone);
                if (index > -1) {
                    _this.phone_list.splice(index, 1);
                }
                _this.phone_list.push(data);
                console.log(data);
            }
        });
        contactModal.present();
    };
    UpdateprofilePage.prototype.removePhone = function (phone) {
        var index = this.phone_list.indexOf(phone);
        if (index > -1) {
            this.phone_list.splice(index, 1);
        }
    };
    UpdateprofilePage.prototype.presentMemberModal = function () {
        var _this = this;
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__addmember_addmember__["a" /* AddmemberPage */]);
        contactModal.onDidDismiss(function (data) {
            if (data != undefined) {
                _this.member_list.push(data);
                console.log(data);
            }
        });
        contactModal.present();
    };
    UpdateprofilePage.prototype.editMember = function (member) {
        var _this = this;
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__addmember_addmember__["a" /* AddmemberPage */], { "member": member });
        contactModal.onDidDismiss(function (data) {
            if (data != undefined) {
                var index = _this.member_list.indexOf(member);
                if (index > -1) {
                    _this.member_list.splice(index, 1);
                }
                _this.member_list.push(data);
                console.log(data);
            }
        });
        contactModal.present();
    };
    UpdateprofilePage.prototype.removeMember = function (member) {
        console.log("remove" + member);
        var index = this.member_list.indexOf(member);
        if (index > -1) {
            this.member_list.splice(index, 1);
        }
    };
    UpdateprofilePage.prototype.validateLogin = function () {
        var _this = this;
        var data = { "id": this.id,
            "first_name": this.first_name,
            "last_name": this.last_name,
            "gender": this.gender,
            "marital_status": this.marital_status,
            "father_name": this.father_name,
            "mother_name": this.mother_name,
            "date_of_birth": this.date_of_birth,
            "date_of_anniversary": this.date_of_anniversary,
            "permanent_address": this.permanent_address,
            "permanent_country": this.permanent_country,
            "permanent_state": this.permanent_state,
            "permanent_city": this.permanent_city,
            "permanent_pincode": this.permanent_pincode,
            "temporary_address": "",
            "temporary_country": "",
            "temporary_state": "",
            "temporary_city": "",
            "temporary_pincode": "",
            "achievement": "",
            "other_organisation_membership": "",
            "profile_image": this.profile_image,
            "profile_Cast": this.profile_Cast,
            "profile_blood_group": this.profile_blood_group,
            "status_message": "",
            "profile_website": "",
            "qr_code_image": this.qr_code_image,
            "education": this.education,
            "hobbies": this.hobbies,
            "firm_type": this.firm_type,
            "firm_name": this.firm_name,
            "firm_contact1": this.firm_contact1,
            "firm_contact2": this.firm_contact2,
            "firm_contact3": this.firm_contact3,
            "firm_logo": this.firm_logo,
            "firm_country": this.firm_country,
            "firm_state": this.firm_state,
            "firm_city": this.firm_city,
            "firm_address": this.firm_address,
            "firm_pincode": this.firm_pincode,
            "firm_email_id": this.firm_email_id,
            "firm_website": this.firm_website,
            "activation_code": "",
            "user_relation": "",
            "parent_id": "",
            "member_list": this.member_list,
            "contact_no_list": this.phone_list };
        console.log(data);
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
        this.apiservice.update_user(data).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData.status);
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
                _this.nativeStorage.remove('userdata');
                _this.nativeStorage.set('userData', _this.responseData.data);
                _this.loading.dismiss();
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else {
                _this.loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: _this.responseData.message,
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    UpdateprofilePage.prototype.statelist = function () {
        var _this = this;
        var data = { "key": "" };
        this.apiservice.state(data).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData.status);
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
                _this.state_list = _this.responseData.data;
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.responseData.message,
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    UpdateprofilePage.prototype.countrylist = function () {
        var _this = this;
        var data = { "key": "" };
        this.apiservice.country(data).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData.status);
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
                _this.country_list = _this.responseData.data;
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.responseData.message,
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    UpdateprofilePage.prototype.presentActionSheet1 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose or take a picture',
            buttons: [
                {
                    text: 'Take a picture',
                    handler: function () {
                        _this.upload1();
                    }
                },
                {
                    text: 'Choose pictures',
                    handler: function () {
                        _this.openImagePicker1();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UpdateprofilePage.prototype.upload1 = function () {
        var _this = this;
        var options = {
            quality: 100
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // alert(imageData);
            var fileTransfer = _this.transfer.create();
            var options1 = {
                //    fileKey: 'file',
                //    fileName: 'name.jpg',
                chunkedMode: false,
                httpMethod: 'POST',
                headers: {
                    "Api-Key": "39b1cdc8a1099ce2bb9f0000e860ad8c"
                }
            };
            console.log(imageData);
            fileTransfer.upload(imageData, 'http://sampark.darshantraavels.com/wp-json/api/v1/upload_media', options1)
                .then(function (data) {
                // success
                console.log(data);
                _this.imgResponse = data.response;
                console.log(_this.imgResponse);
                var img = JSON.parse(_this.imgResponse);
                // this.imageSource = img.data[0];
                _this.firm_logo = img.data[0];
                console.log(_this.firm_logo);
            }, function (err) {
                // error
                // alert("error"+JSON.stringify(err));
                console.log(err);
            });
        });
    };
    UpdateprofilePage.prototype.openImagePicker1 = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.photos = results;
            var photo = _this.photos[0];
            console.log(_this.photos);
            var fileTransfer = _this.transfer.create();
            var options1 = {
                //    fileKey: 'file',
                //    fileName: 'name.jpg',
                chunkedMode: false,
                httpMethod: 'POST',
                headers: {
                    "Api-Key": "39b1cdc8a1099ce2bb9f0000e860ad8c"
                }
            };
            console.log(photo);
            fileTransfer.upload(photo, 'http://sampark.darshantraavels.com/wp-json/api/v1/upload_media', options1)
                .then(function (data) {
                // success
                console.log(data);
                _this.imgResponse = data.response;
                console.log(_this.imgResponse);
                var img = JSON.parse(_this.imgResponse);
                // this.imageSource = img.data[0];
                _this.firm_logo = img.data[0];
            }, function (err) {
                // error
                // alert("error"+JSON.stringify(err));
            });
        }, function (err) { console.log(err); });
    };
    UpdateprofilePage.prototype.presentActionSheet2 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose or take a picture',
            buttons: [
                {
                    text: 'Take a picture',
                    handler: function () {
                        _this.upload2();
                    }
                },
                {
                    text: 'Choose pictures',
                    handler: function () {
                        _this.openImagePicker2();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UpdateprofilePage.prototype.upload2 = function () {
        var _this = this;
        var options = {
            quality: 100
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // alert(imageData);
            var fileTransfer = _this.transfer.create();
            var options1 = {
                //    fileKey: 'file',
                //    fileName: 'name.jpg',
                chunkedMode: false,
                httpMethod: 'POST',
                headers: {
                    "Api-Key": "39b1cdc8a1099ce2bb9f0000e860ad8c"
                }
            };
            console.log(imageData);
            fileTransfer.upload(imageData, 'http://sampark.darshantraavels.com/wp-json/api/v1/upload_media', options1)
                .then(function (data) {
                // success
                console.log(data);
                _this.imgResponse = data.response;
                console.log(_this.imgResponse);
                var img = JSON.parse(_this.imgResponse);
                // this.imageSource = img.data[0];
                _this.qr_code_image = img.data[0];
                console.log(_this.qr_code_image);
            }, function (err) {
                // error
                // alert("error"+JSON.stringify(err));
                console.log(err);
            });
        });
    };
    UpdateprofilePage.prototype.openImagePicker2 = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.photos = results;
            var photo = _this.photos[0];
            console.log(_this.photos);
            var fileTransfer = _this.transfer.create();
            var options1 = {
                //    fileKey: 'file',
                //    fileName: 'name.jpg',
                chunkedMode: false,
                httpMethod: 'POST',
                headers: {
                    "Api-Key": "39b1cdc8a1099ce2bb9f0000e860ad8c"
                }
            };
            console.log(photo);
            fileTransfer.upload(photo, 'http://sampark.darshantraavels.com/wp-json/api/v1/upload_media', options1)
                .then(function (data) {
                // success
                // console.log(data);
                _this.imgResponse = data.response;
                console.log(_this.imgResponse);
                var img = JSON.parse(_this.imgResponse);
                // this.imageSource = img.data[0];
                _this.qr_code_image = img.data[0];
            }, function (err) {
                // error
                // alert("error"+JSON.stringify(err));
            });
        }, function (err) { console.log(err); });
    };
    UpdateprofilePage.prototype.cancel = function () {
        this.firm_logo = "assets/imgs/No1.png";
    };
    UpdateprofilePage.prototype.cancel1 = function () {
        this.qr_code_image = "assets/imgs/No1.png";
    };
    UpdateprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updateprofile',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/updateprofile/updateprofile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Update Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div text-center>\n    <div class="image">\n      <img [src]="profile_image" width="50%" height="50%" class="custom-avatar" imageViewer>\n    </div>\n    <div (click)="presentActionSheet()">\n      <ion-icon name="ios-camera-outline" class="profileIcon"></ion-icon>\n      <p style="color:grey">Add Your Profile Photo</p>\n    </div>\n  </div>\n\n\n  <div padding>\n    <ion-segment [(ngModel)]="details">\n      <ion-segment-button value="personal">\n        Personal\n      </ion-segment-button>\n      <ion-segment-button value="business">\n        Business\n      </ion-segment-button>\n      <ion-segment-button value="family">\n        Family\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="details">\n    <ion-list class="listRegister" padding *ngSwitchCase="\'personal\'">\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">First Name</ion-label>\n        <ion-input [(ngModel)]="first_name" type="text" name="first_name" placeholder="First Name" class="inputRegister"></ion-input>\n      </div>\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Last Name</ion-label>\n        <ion-input [(ngModel)]="last_name" type="text" name="last_name" placeholder="Last Name" class="inputRegister"></ion-input>\n      </div>\n\n      <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Gender</ion-label>\n        <ion-select [(ngModel)]="gender"  name="gender" class="inputRegister">\n          <ion-option value="FEMALE">Female</ion-option>\n          <ion-option value="MALE">Male</ion-option>\n        </ion-select>\n      </div>\n\n      <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Merital Status</ion-label>\n        <ion-select [(ngModel)]="marital_status"  name="marital_status" class="inputRegister">\n          <ion-option value="DIVORCED">Divorced</ion-option>\n          <ion-option value="MARRIED">Married</ion-option>\n          <ion-option value="STUDENT">Student</ion-option>\n          <ion-option value="UNMARRIED">Unmarried</ion-option>\n\n        </ion-select>\n      </div>\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Father\'s Name</ion-label>\n        <ion-input [(ngModel)]="father_name" type="text" name="father_name" placeholder="Father\'s Name" class="inputRegister"></ion-input>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Mother\'s Name</ion-label>\n        <ion-input [(ngModel)]="mother_name" type="text" name="mother_name" placeholder="Mother\'s Name" class="inputRegister"></ion-input>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">DOB</ion-label>\n        <ion-datetime [(ngModel)]="date_of_birth" name="date_of_birth" placeholder="01/01/2000" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY"class="inputRegister"></ion-datetime>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">DOA</ion-label>\n        <ion-datetime [(ngModel)]="date_of_anniversary"  name="date_of_anniversary" placeholder="01/01/2000" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" class="inputRegister"></ion-datetime>\n      </div>\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Email</ion-label>\n        <ion-input [(ngModel)]="user_email" type="text" name="user_email" placeholder="Email" class="inputRegister"></ion-input>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Address</ion-label>\n        <ion-textarea [(ngModel)]="permanent_address" type="text" name="permanent_address" placeholder="Address" rows="4" class="inputRegister"></ion-textarea>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">City</ion-label>\n        <ion-input [(ngModel)]="permanent_city" type="text" name="permanent_city" placeholder="City" class="inputRegister"></ion-input>\n      </div>\n      <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">State</ion-label>\n        <ion-select [(ngModel)]="permanent_state" class="inputRegister" name="permanent_state">\n          <ion-option *ngFor="let state of state_list" value="{{state.id}}">{{state.state_name}}</ion-option>\n        </ion-select>\n      </div>\n      <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Country</ion-label>\n        <ion-select [(ngModel)]="permanent_country"  class="inputRegister" name="permanent_country">\n          <ion-option *ngFor="let country of country_list" value="{{country.id}}">{{country.name}}</ion-option>\n        </ion-select>\n      </div>\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Pincode</ion-label>\n        <ion-input [(ngModel)]="permanent_pincode" type="text" name="permanent_pincode" placeholder="Pincode" class="inputRegister"></ion-input>\n      </div>\n      <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Caste</ion-label>\n        <ion-select [(ngModel)]="profile_Cast"  class="inputRegister" name="profile_Cast">\n          <ion-option value="SHWETAMBER-MURTI POOJAK">Shwetamber-Murti Poojak</ion-option>\n          <ion-option value="SHWETAMBER-KHARTAR GACHCH">Shwetamber-Khartar Gachch</ion-option>\n          <ion-option value="SHWETAMBER-STHANAKWASI">Shwetamber-Sthanakwasi</ion-option>\n          <ion-option value="SHWETAMBER-TAPA GACHCH">Shwetamber-Tapa Gachch</ion-option>\n          <ion-option value="SHWETAMBER-TERAPANTH">Shwetamber-Terapanth</ion-option>\n        </ion-select>\n      </div>\n\n      <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Blood Group</ion-label>\n        <ion-select [(ngModel)]="profile_blood_group"  name="profile_blood_group" class="inputRegister">\n          <ion-option value="A+">A+</ion-option>\n          <ion-option value="A-">A-</ion-option>\n          <ion-option value="B+">B+</ion-option>\n          <ion-option value="B-">B-</ion-option>\n          <ion-option value="O+">O+</ion-option>\n          <ion-option value="O-">O-</ion-option>\n          <ion-option value="AB+">AB+</ion-option>\n          <ion-option value="AB-">AB-</ion-option>\n        </ion-select>\n      </div>\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Education</ion-label>\n        <ion-input [(ngModel)]="education" type="text" name="education" placeholder="Education" class="inputRegister"></ion-input>\n      </div>\n      <div class="regAll" style="border-bottom: 1px solid grey;">\n        <ion-label stacked class="registerLabel">Hobbies</ion-label>\n        <ion-input [(ngModel)]="hobbies" type="text" name="hobbies" placeholder="Hobbies" class="inputRegister"></ion-input>\n      </div>\n      <ion-card>\n        <ion-row (click)="presentPhoneModal()">\n          <ion-col col-2 text-center>\n            <ion-icon name="add" item-left style="font-size:32px;"></ion-icon>\n          </ion-col>\n          <ion-col col-10>\n            <h5 style="margin-top: 0.7rem;">Phone No.</h5>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <ion-card *ngFor="let phone of phone_list">\n        <ion-row text-center>\n          <ion-col col-4 padding>\n            {{phone.contact_type}}\n          </ion-col>\n          <ion-col col-5 padding-top>\n            {{phone.contact_number}}\n          </ion-col>\n          <ion-col col-1 (click)="editPhone(phone)">\n            <ion-icon name="md-create" style="font-size:32px;"></ion-icon>\n          </ion-col>\n\n          <ion-col col-2 (click)="removePhone(phone)">\n            <ion-icon name="close" style="font-size:32px; padding-left: 5px;"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n    </ion-list>\n\n    <ion-list padding *ngSwitchCase="\'business\'">\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Firm Name</ion-label>\n        <ion-input [(ngModel)]="firm_name" type="text" name="firm_name" placeholder="Firm Name" class="inputRegister"></ion-input>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Industry Category</ion-label>\n        <!-- <ion-input [(ngModel)]="firm_type" type="text" name="firm_type" placeholder="Industry Category" class="inputRegister"></ion-input> -->\n        <ion-select [(ngModel)]="firm_type"  name="firm_type" class="inputRegister">\n          <ion-option value="AGENCY">Agency</ion-option>\n          <ion-option value="APPAREL GARMENT & TEXTILE" text-wrap>Apparel Garment & Textile</ion-option>\n          <ion-option value="AUDIT % TEXATION">Audit % Texation</ion-option>\n          <ion-option value="AUTOMOBILE PARTS & SPARES">Automobile Parts & Spares</ion-option>\n          <ion-option value="BAGS,BELTS AND WALLETS">Bags,Belts and Wallets</ion-option>\n          <ion-option value="BANKING SERVICE">Banking Service</ion-option>\n          <ion-option value="CABLES & WIRES">Cables & Wires</ion-option>\n          <ion-option value="CALL CENTER & BPO SERVICES">Call Center & BPO services</ion-option>\n          <ion-option value="CHEMICALS DYES % SOLVENTS">Chemicals Dyes % Solvents</ion-option>\n          <ion-option value="COMPUTER HARDWARE & NETWORKING">Computer Hardware & Networking</ion-option>\n          <ion-option value="CONSULTANT">Consultant</ion-option>\n          <ion-option value="COSMETIC & PERSONAL CARE">Cosmetic & Personal Care</ion-option>\n          <ion-option value="DIAMOND GEMS & JEWELRY">Diamond Gems & Jewelry</ion-option>\n          <ion-option value="ELECTRONICS & ELECTRICAL">Electronics & Electrical</ion-option>\n          <ion-option value="EYE WEAR & OPTICIAN">Eye Wear & Optician</ion-option>\n          <ion-option value="FASHION ACCESSORIES & GEAR">Fashion Accessories & Gear</ion-option>\n          <ion-option value="FINANCIAL & LEGAL SERVICE">Financial & Legal Service</ion-option>\n          <ion-option value="GIFT ITEMS">Gift Items</ion-option>\n          <ion-option value="GOLD & SILVER">Gold & Silver</ion-option>\n          <ion-option value="HENDICRAFT & DECORATIVES">Handicraft & Decoratives</ion-option>\n          <ion-option value="HEALTHCARE,MEDICAL & PHARMACEUTICAL">Healthcare,Medical & pharmaceutical</ion-option>\n          <ion-option value="HERBAL & AYURVEDIC PRODUCT">Herbal & Ayurvedic Product</ion-option>\n          <ion-option value="HOME TEXTILE & FURNISHING">Home Textile & Furnishing</ion-option>\n          <ion-option value="HOUSE WIFE">House Wife </ion-option>\n          <ion-option value="IMPORT & EXPORT">Import & Export</ion-option>\n          <ion-option value="INDUSTRIAL PLANT & MACHINE">Industrial Plant & Machine</ion-option>\n          <ion-option value="INDUSTRIAL SUPPLIES">Industrial supplies</ion-option>\n          <ion-option value="INSURANCE & MUTUAL FUNDS">Insurance & Mutual Funds</ion-option>\n          <ion-option value="JOBS & SERVICE">Jobs & Services</ion-option>\n          <ion-option value="KIRANA & GENERAL MERCHANT">Kirana & General Merchant</ion-option>\n          <ion-option value="METAL ALLOYS & MINERALS">Metal Alloys & Minerals</ion-option>\n          <ion-option value="PACKING MACHINE & GOODS">Packing Machine & Goods</ion-option>\n          <ion-option value="PAPER & PAPER PRODUCTS">Paper & Paper Products</ion-option>\n          <ion-option value="PHYWOOD & FIREWOOD">Phywood & Firewood </ion-option>\n          <ion-option value="PRINTING & PHOTOGRAFY">Printing & Photografy</ion-option>\n          <ion-option value="RAIL SHIPPING & AVIATION">Rail Shipping & Aviation</ion-option>\n          <ion-option value="SALES & MARKETING">Sales & Marketing</ion-option>\n          <ion-option value="SOAP">Soap</ion-option>\n          <ion-option value="STEEL">Steel</ion-option>\n          <ion-option value="STOCK MARKET & BROKER">Stock Market & Broker</ion-option>\n          <ion-option value="TEA & COFFEE">Tea & Coffee</ion-option>\n          <ion-option value="TELECOMMUNICATION">Telecommunication</ion-option>\n          <ion-option value="TOURS & TRAVELS">Tours & Travels</ion-option>\n          <ion-option value=" TRANSPORT & LOGISTICS"> Transport & Logistics</ion-option>\n        </ion-select>\n      </div>\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Firm Contact No.1</ion-label>\n        <ion-input [(ngModel)]="firm_contact1" type="text" name="firm_contact1" placeholder="Firm Contact No.1" class="inputRegister"></ion-input>\n      </div>\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Firm Contact No.2</ion-label>\n        <ion-input [(ngModel)]="firm_contact2" type="text" name="firm_contact2" placeholder="Firm Contact No.2" class="inputRegister"></ion-input>\n      </div>\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Firm Contact No.3</ion-label>\n        <ion-input [(ngModel)]="firm_contact3" type="text" name="firm_contact3" placeholder="Firm Contact No.3" class="inputRegister"></ion-input>\n      </div>\n\n      <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Firm Country</ion-label>\n        <ion-select [(ngModel)]="firm_country" class="inputRegister" name="firm_country">\n\n          <ion-option *ngFor="let country of country_list" value="{{country.id}}">{{country.name}}</ion-option>\n        </ion-select>\n      </div>\n\n      <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">State</ion-label>\n        <ion-select [(ngModel)]="firm_state"  class="inputRegister" name="firm_state">\n          <ion-option *ngFor="let state of state_list" value="{{state.id}}">{{state.state_name}}</ion-option>\n        </ion-select>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Firm City</ion-label>\n        <ion-input [(ngModel)]="firm_city" type="text" name="firm_city" placeholder="Firm City" class="inputRegister"></ion-input>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Firm Address</ion-label>\n        <ion-input [(ngModel)]="firm_address" type="text" name="firm_address" placeholder="Firm Address" class="inputRegister"></ion-input>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Firm Pincode</ion-label>\n        <ion-input [(ngModel)]="firm_pincode" type="text" name="firm_pincode" placeholder="Firm Pincode" class="inputRegister"></ion-input>\n      </div>\n\n      <div class="regAll">\n        <ion-label stacked class="registerLabel">Firm Email</ion-label>\n        <ion-input [(ngModel)]="firm_email_id" type="text" name="firm_email_id" placeholder="Firm Email" class="inputRegister"></ion-input>\n      </div>\n\n      <div class="regAll" style="border-bottom: 1px solid grey;">\n        <ion-label stacked class="registerLabel">Firm Website</ion-label>\n        <ion-input [(ngModel)]="firm_website" type="text" name="firm_website" placeholder="Firm Website" class="inputRegister"></ion-input>\n      </div>\n\n      <ion-card text-center>\n        <p>Firm Logo</p>\n        <ion-buttons end>\n          <button clear (click)="cancel()" ion-button icon-only>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n        <div class="image">\n          <img [src]="firm_logo" width="50%" height="50%" class="custom-avatar" imageViewer>\n        </div>\n        <div text-center (click)="presentActionSheet1()">\n          <ion-icon name="ios-camera-outline" class="logoIcon"></ion-icon>\n        </div>\n      </ion-card>\n\n      <ion-card text-center>\n        <p>QR Code</p>\n        <ion-buttons end>\n          <button clear (click)="cancel1()" ion-button icon-only>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n        <div class="image">\n          <img [src]="qr_code_image" width="50%" height="50%" class="custom-avatar" imageViewer>\n        </div>\n        <div text-center (click)="presentActionSheet2()">\n          <ion-icon name="ios-camera-outline" class="logoIcon"></ion-icon>\n        </div>\n      </ion-card>\n    </ion-list>\n    <ion-list class="listRegister" padding *ngSwitchCase="\'family\'">\n      <ion-card (click)="presentMemberModal()">\n        <ion-row>\n          <ion-col col-2 text-center>\n            <ion-icon name="add" item-left style="font-size:32px;"></ion-icon>\n          </ion-col>\n          <ion-col col-10>\n            <h5 style="margin-top: 0.7rem;">Member</h5>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <ion-card *ngFor="let member of member_list">\n        <ion-row text-center>\n          <ion-col col-9 padding text-left>\n            {{member.first_name}}\n          </ion-col>\n          <!-- <ion-col col-5 padding-top>\n            {{member.Last_name}}\n          </ion-col> -->\n          <ion-col col-1 (click)="editMember(member)">\n            <ion-icon name="md-create" style="font-size:32px;"></ion-icon>\n          </ion-col>\n\n          <ion-col col-2 (click)="removeMember(member)">\n            <ion-icon name="close" style="font-size:32px; padding-left: 5px;"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-list>\n  </div>\n  <div class="registerSubmit">\n    <button ion-button full (click)="validateLogin()" round>Update</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pc/jainsampark/src/pages/updateprofile/updateprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_restapi_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */]])
    ], UpdateprofilePage);
    return UpdateprofilePage;
}());

// if(this.image == ''|| this.image == undefined){
//   this.image = "assets/imgs/No1.png";
// } 
//# sourceMappingURL=updateprofile.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddphonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddphonePage = /** @class */ (function () {
    function AddphonePage(navCtrl, alertCtrl, toastCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.details = "personal";
        var phone = navParams.get("phone");
        console.log(phone + "hello");
        if (phone != undefined) {
            this.contact_number = phone.contact_number;
            this.contact_type = phone.contact_type;
        }
        else {
        }
    } // constructor close..
    AddphonePage.prototype.submit = function () {
        var data = { "contact_number": this.contact_number, "contact_type": this.contact_type };
        console.log(data);
        this.viewCtrl.dismiss(data);
    };
    AddphonePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddphonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addphone',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/addphone/addphone.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n         Phone Number\n        </ion-title>\n        <ion-buttons end>\n                <button clear (click)="cancel()" ion-button icon-only>\n                <ion-icon name="close"></ion-icon>\n                </button>\n            </ion-buttons>\n    </ion-navbar>\n    </ion-header>\n    \n<ion-content>\n        <ion-list class="listRegister" padding >\n            <div class="regAll">\n                <ion-label stacked class="registerLabel">Phone Number</ion-label>\n                <ion-input [(ngModel)]="contact_number" type="number" name="contact_number" placeholder="Phone Number"  class="inputRegister" ></ion-input>\n            </div>\n\n            <div ion-item class="regAll" style="border-bottom:1px solid grey;">\n                <ion-label stacked class="registerLabel">Contact Type</ion-label>\n                <ion-select [(ngModel)]="contact_type"  class="inputRegister">\n                    <ion-option value="Mobile">Mobile</ion-option>\n                    <ion-option value="PRIMARY">Primary</ion-option>\n                    <ion-option value="Work">Work</ion-option>\n                    <ion-option value="Home">Home</ion-option>\n                    <ion-option value="Work Fax">Work Fax</ion-option>\n                    <ion-option value="Home Fax">Home Fax</ion-option>\n                    <ion-option value="Other">Other</ion-option>\n                </ion-select>\n            </div>\n            <div class="registerSubmit">\n                    <button ion-button (click)="submit()" round full>Submit</button>\n                </div>\n        </ion-list>\n</ion-content>'/*ion-inline-end:"/home/pc/jainsampark/src/pages/addphone/addphone.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], AddphonePage);
    return AddphonePage;
}());

//# sourceMappingURL=addphone.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddmemberPage = /** @class */ (function () {
    function AddmemberPage(navCtrl, alertCtrl, toastCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        var member = navParams.get("member");
        console.log(member);
        if (member != undefined) {
            this.first_name = member.first_name;
            this.last_name = member.last_name;
            this.user_relation = member.user_relation;
            this.gender = member.gender;
            this.merital_status = member.merital_status;
            this.father_name = member.father_name;
            this.mother_name = member.mother_name;
            this.date_of_birth = member.date_of_birth;
            this.date_of_anniversary = member.date_of_anniversary;
            this.user_email = member.user_email;
            this.permanent_address = member.permanent_address;
            // this.personal_landline_no = member.personal_landline_no;
            // this.personal_contact_no = member.personal_contact_no;
            this.permanent_city = member.permanent_city;
            this.permanent_state = member.permanent_state;
            this.permanent_country = member.permanent_country;
            this.permanent_pincode = member.permanent_pincode;
        }
        else {
        }
    } // constructor close..
    AddmemberPage.prototype.submit = function () {
        var data = { "first_name": this.first_name, "last_name": this.last_name, "user_relation": this.user_relation, "gender": this.gender, "merital_status": this.merital_status, "father_name": this.father_name, "mother_name": this.mother_name, "date_of_birth": this.date_of_birth, "date_of_anniversary": this.date_of_anniversary, "user_email": this.user_email, "permanent_address": this.permanent_address, "permanent_city": this.permanent_city, "permanent_state": this.permanent_state, "permanent_country": this.permanent_country, "permanent_pincode": this.permanent_pincode };
        console.log(data);
        this.viewCtrl.dismiss(data);
    };
    AddmemberPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddmemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmember',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/addmember/addmember.html"*/'<ion-header>\n    <ion-navbar  color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Update Member Profile</ion-title>\n      <ion-buttons end>\n        <button clear (click)="cancel()" ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n        </button>\n    </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n<ion-list class="listRegister" padding >\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">First Name</ion-label>\n        <ion-input [(ngModel)]="first_name" type="text" name="first_name" placeholder="First Name"  class="inputRegister" ></ion-input>\n    </div>\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">Last Name</ion-label>\n        <ion-input [(ngModel)]="last_name" type="text" name="last_name" placeholder="Last Name"  class="inputRegister" ></ion-input>\n    </div>\n\n    <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">User Relation</ion-label>\n        <ion-select [(ngModel)]="user_relation"  class="inputRegister" name="user_relation">\n            <ion-option value="1">father</ion-option>\n            <ion-option value="2">Mother</ion-option>\n            <ion-option value="3">brother</ion-option>\n            <ion-option value="5">Sister</ion-option>\n            <ion-option value="6">Wife</ion-option>\n            <ion-option value="7">Son</ion-option>\n            <ion-option value="8">Daughter</ion-option>\n            <ion-option value="9">Brother in Law</ion-option>\n            <ion-option value="10">Brother in Law\'s Daughter</ion-option>\n            <ion-option value="11">Brother in Law\'s Son</ion-option>\n            <ion-option value="12">Brother in Law\'s Wife</ion-option>\n            <ion-option value="13">Brother\'s son</ion-option>\n            <ion-option value="14">Brother\'s Wife</ion-option>\n            <ion-option value="15">Daughter in Law</ion-option>\n            <ion-option value="16">Father in Law</ion-option>\n            <ion-option value="17">Grand Daughter</ion-option>\n            <ion-option value="18">Grand Daughter in Law</ion-option>\n            <ion-option value="19">Grand Father</ion-option>\n            <ion-option value="20">Grand Mother</ion-option>\n            <ion-option value="21">Grand Son</ion-option>\n            <ion-option value="22">Grand Son\'s Wife</ion-option>\n            <ion-option value="23">Other</ion-option>\n\n        </ion-select>\n    </div>\n    <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Gender</ion-label>\n        <ion-select [(ngModel)]="gender"  class="inputRegister">\n            <ion-option value="FEMALE">Female</ion-option>\n            <ion-option value="MALE">Male</ion-option>\n        </ion-select>\n    </div>\n\n    <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Merital Status</ion-label>\n        <ion-select [(ngModel)]="merital_status"  class="inputRegister" name="merital_status">\n            <ion-option value="DIVORCED">Divorced</ion-option>\n            <ion-option value="MARRIED">Married</ion-option>\n            <ion-option value="STUDENT">Student</ion-option>\n            <ion-option value="UNMARRIED">Unmarried</ion-option>\n\n        </ion-select>\n    </div>\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">Father\'s Name</ion-label>\n        <ion-input [(ngModel)]="father_name" type="text" name="father_name" placeholder="Father\'s Name"  class="inputRegister" ></ion-input>\n    </div>\n\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">Mother\'s Name</ion-label>\n        <ion-input [(ngModel)]="mother_name" type="text" name="mother_name" placeholder="Mother\'s Name"  class="inputRegister" ></ion-input>\n    </div>\n\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">DOB</ion-label>\n        <ion-datetime [(ngModel)]="date_of_birth"  name="date_of_birth" placeholder="01/01/2018"  class="inputRegister" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY"></ion-datetime>\n    </div>\n\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">DOA</ion-label>\n        <ion-datetime [(ngModel)]="date_of_anniversary"  name="date_of_anniversary" placeholder="01/01/2018"  displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY"class="inputRegister" ></ion-datetime>\n    </div>\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">Email</ion-label>\n        <ion-input [(ngModel)]="user_email" type="text" name="user_email" placeholder="Email"  class="inputRegister" ></ion-input>\n    </div>\n    \n    <div class="regAll">\n        <ion-label stacked class="registerLabel">Address</ion-label>\n        <ion-textarea [(ngModel)]="permanent_address" type="text" name="permanent_address" placeholder="Address" rows="4" class="inputRegister" ></ion-textarea>\n    </div>\n\n    <!-- <div class="regAll">\n        <ion-label stacked class="registerLabel">Landline No.</ion-label>\n        <ion-input [(ngModel)]="personal_landline_no" type="number" name="personal_landline_no" placeholder="Landline No."  class="inputRegister" ></ion-input>\n    </div>\n\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">Personal No.</ion-label>\n        <ion-input [(ngModel)]="personal_contact_no" type="number" name="personal_contact_no" placeholder="Personal No"  class="inputRegister" ></ion-input>\n    </div> -->\n\n    <div class="regAll">\n        <ion-label stacked class="registerLabel">City</ion-label>\n        <ion-input [(ngModel)]="permanent_city" type="text" name="permanent_city" placeholder="City"  class="inputRegister" ></ion-input>\n    </div>\n    <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">State</ion-label>\n        <ion-select [(ngModel)]="permanent_state" interface="popover" class="inputRegister" >\n            <ion-option value="1">M.P.</ion-option>\n            <ion-option value="2">U.P.</ion-option>\n            <ion-option value="3">Punjab</ion-option>\n            <ion-option value="4">Other</ion-option>\n        </ion-select>\n    </div>\n    <div ion-item class="regAll">\n        <ion-label stacked class="registerLabel">Country</ion-label>\n        <ion-select [(ngModel)]="permanent_country" interface="popover" class="inputRegister">\n            <ion-option value="1">Nepal</ion-option>\n            <ion-option value="2">Bhutan</ion-option>\n            <ion-option value="3">Shree Lanka</ion-option>\n            <ion-option value="4">Other</ion-option>\n        </ion-select>\n    </div>\n    <div class="regAll" style="border-bottom: 1px solid grey">\n        <ion-label stacked class="registerLabel">Pincode</ion-label>\n        <ion-input [(ngModel)]="permanent_pincode" type="text" name="permanent_pincode" placeholder="Pincode"  class="inputRegister" ></ion-input>\n    </div>\n    <div class="registerSubmit">\n        <button ion-button (click)="submit()" round full>Submit</button>\n    </div>\n    </ion-list>\n    </ion-content>'/*ion-inline-end:"/home/pc/jainsampark/src/pages/addmember/addmember.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], AddmemberPage);
    return AddmemberPage;
}());

//# sourceMappingURL=addmember.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, apiservice, nativeStorage, toastCtrl, loadingCtrl) {
        //   this.nativeStorage.get('userData').then((val)=>{
        //     this.user_id = val;
        //     console.log(this.user_id);
        // });
        this.navCtrl = navCtrl;
        this.apiservice = apiservice;
        this.nativeStorage = nativeStorage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    } // constructor close......
    FeedbackPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nativeStorage.get('userData').then(function (val) {
            _this.user_id = val.id;
            console.log(_this.user_id);
        });
    };
    FeedbackPage.prototype.feedbackSubmit = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
        var data = { "subject": this.subject, "remarks": this.remarks, "user_id": this.user_id, "send_file": "" };
        console.log(data);
        this.apiservice.feedback(data).then(function (result) {
            _this.responseData = result;
            if (_this.responseData.status) {
                _this.loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Feedback Submitted Successfully',
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else {
                _this.loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Error! Please send feedback again.',
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    FeedbackPage.prototype.cancelSubmit = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/feedback/feedback.html"*/'<ion-header>\n    <ion-navbar  color="primary" >\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Feedback</ion-title>\n    </ion-navbar>\n</ion-header>\n        \n<ion-content padding-top >\n    <ion-list padding class="listRegister">\n        <ion-item>\n            <ion-label stacked class="registerLabel">Name <span class="req">*</span></ion-label>\n            <ion-input [(ngModel)]="subject" type="text" name="subject"   class="inputRegister" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked class="registerLabel">Feedback <span class="req">*</span></ion-label>\n            <ion-textarea [(ngModel)]="remarks" type="text"  rows="6" name="remarks"  class="inputRegister" ></ion-textarea>\n        </ion-item>\n    </ion-list>\n    <div class="registerSubmit">\n      <button ion-button full (click)="feedbackSubmit()" round>Submit</button>\n    </div>\n    <div class="registerSubmit">\n      <button ion-button  full (click)="cancelSubmit()" round>Cancel</button>\n    </div>\n</ion-content>\n    \n      '/*ion-inline-end:"/home/pc/jainsampark/src/pages/feedback/feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_restapi_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, nativeStorage) {
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.nativeStorage.remove('userData');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    }
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/logout/logout.html"*/''/*ion-inline-end:"/home/pc/jainsampark/src/pages/logout/logout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http, loadingCtrl, httpnative) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.httpnative = httpnative;
        this.apiUrl = 'http://sampark.ruchinamkeens.com/wp-json/api/v1';
        console.log('hello provider');
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
    }
    ApiService.prototype.registerUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let  data1 =  JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/add_user', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                console.log(resp);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.loginUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/authenticate', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                console.log(resp);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.dashboard = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            _this.httpnative.get(_this.apiUrl + '/dashboard', {}, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.allSearch = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var resp;
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/search', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.feedback = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var resp;
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/user_feedback', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.update_user = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/update_user', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.state = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/stateslist', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.country = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/countrieslist', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.smsAuth = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/sms_authenticate', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.forgotPass = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/forgot_password', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.resetPass = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.post(_this.apiUrl + '/forgot_password', data, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService.prototype.eventList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.present();
            var headers = { 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Api-Key': '39b1cdc8a1099ce2bb9f0000e860ad8c'
            };
            //  let data1 = JSON.stringify(data);
            _this.httpnative.get(_this.apiUrl + '/event_list', {}, headers)
                .then(function (res) {
                var resp = JSON.parse(res.data);
                _this.loading.dismiss();
                resolve(resp);
            }).catch(function (err) {
                _this.loading.dismiss();
                reject(err);
            });
        });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=restapi.service.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(276);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_feedback_feedback__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_search_search__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_updateprofile_updateprofile__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_logout_logout__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_newsdetails_newsdetails__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_details_details__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_addphone_addphone__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_addmember_addmember__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_image_picker__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_file__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_searchlist_searchlist__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_smsauth_smsauth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_resetpass_resetpass__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_http__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_fcm__ = __webpack_require__(247);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_28__pages_smsauth_smsauth__["a" /* SmsauthPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_19__pages_newsdetails_newsdetails__["a" /* NewsdetailsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_details_details__["a" /* DetailsPage */], __WEBPACK_IMPORTED_MODULE_21__pages_addphone_addphone__["a" /* AddphonePage */], __WEBPACK_IMPORTED_MODULE_22__pages_addmember_addmember__["a" /* AddmemberPage */], __WEBPACK_IMPORTED_MODULE_27__pages_searchlist_searchlist__["a" /* SearchlistPage */], __WEBPACK_IMPORTED_MODULE_29__pages_resetpass_resetpass__["a" /* ResetpassPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__["a" /* ForgotPasswordPage */], __WEBPACK_IMPORTED_MODULE_15__pages_feedback_feedback__["a" /* FeedbackPage */], __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_17__pages_updateprofile_updateprofile__["a" /* UpdateprofilePage */], __WEBPACK_IMPORTED_MODULE_18__pages_logout_logout__["a" /* LogoutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { mode: 'ios' }, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_19__pages_newsdetails_newsdetails__["a" /* NewsdetailsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_details_details__["a" /* DetailsPage */], __WEBPACK_IMPORTED_MODULE_21__pages_addphone_addphone__["a" /* AddphonePage */], __WEBPACK_IMPORTED_MODULE_22__pages_addmember_addmember__["a" /* AddmemberPage */], __WEBPACK_IMPORTED_MODULE_27__pages_searchlist_searchlist__["a" /* SearchlistPage */], __WEBPACK_IMPORTED_MODULE_28__pages_smsauth_smsauth__["a" /* SmsauthPage */], __WEBPACK_IMPORTED_MODULE_29__pages_resetpass_resetpass__["a" /* ResetpassPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__["a" /* ForgotPasswordPage */], __WEBPACK_IMPORTED_MODULE_15__pages_feedback_feedback__["a" /* FeedbackPage */], __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_17__pages_updateprofile_updateprofile__["a" /* UpdateprofilePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_18__pages_logout_logout__["a" /* LogoutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_12__providers_restapi_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_31__ionic_native_fcm__["a" /* FCM */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_updateprofile_updateprofile__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_feedback_feedback__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_logout_logout__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, fcm) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.events.subscribe('user:created', function (user, time) {
            _this.image = user.profile_image;
            _this.first_name = user.first_name;
            _this.user_email = user.user_email;
            console.log('event' + JSON.stringify(user));
        });
        if (this.image == '' || this.image == undefined) {
            this.image = "assets/imgs/No1.png";
        }
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "ios-home-outline" },
            { title: 'Search Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */], icon: "ios-search-outline" },
            { title: 'Update Profile', component: __WEBPACK_IMPORTED_MODULE_8__pages_updateprofile_updateprofile__["a" /* UpdateprofilePage */], icon: "ios-sync-outline" },
            { title: 'B&A Reminders', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: "ios-calendar-outline" },
            { title: 'Feedback', component: __WEBPACK_IMPORTED_MODULE_9__pages_feedback_feedback__["a" /* FeedbackPage */], icon: "ios-list-box-outline" },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_10__pages_logout_logout__["a" /* LogoutPage */], icon: "ios-log-out-outline" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //Notifications
            _this.fcm.subscribeToTopic('all');
            _this.fcm.getToken().then(function (token) {
                console.log(token);
            });
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log("Received in background");
                }
                else {
                    console.log("Received in foreground");
                }
                ;
            });
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                console.log(token);
            });
            //end notifications.
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            setTimeout(function () {
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            }, 30000);
        });
    };
    // 
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pc/jainsampark/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar  color="primary">\n      \n          <div text-center>\n            <div class="image1" >\n               <img [src]="image" width="50%" height="50%" class="custom-avatar1" imageViewer>\n            </div>\n           <p style="color:white; text-align: center;">{{first_name}} <br>{{user_email}} </p>\n           <!-- <p style="color:white">{{user_email}}</p> -->\n          </div>\n    \n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" style="border-bottom: 1px solid grey;">\n          <ion-icon padding-left [name]="p.icon" item-left style="font-size:32px;"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer> \n    <button ion-item style="border-top:1px solid grey; border-bottom: 1px solid grey;" >\n      <ion-icon padding-left name="ios-information-circle" item-left style="font-size:32px;"></ion-icon>\n      <h6> Version 1.0</h6>\n    </button>\n  </ion-footer>\n \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/pc/jainsampark/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotpassword_forgotpassword__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_restapi_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__smsauth_smsauth__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, navCtrl, formBuilder, events, nativeStorage, toastCtrl, loadingCtrl, menuCtrl, apiservice) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.events = events;
        this.nativeStorage = nativeStorage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.apiservice = apiservice;
        this.user_name = '';
        this.user_pass = '';
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.device_token1 = '';
        this.device_token2 = '';
        this.device_token3 = '';
        this.navCtrl = navCtrl;
        this.authForm = formBuilder.group({
            user_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,])],
            user_pass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4) /*,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}")*/])]
        });
    } // constructor close......
    // hideShowPassword() {
    //   this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    //   this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    // }
    LoginPage.prototype.validateLogin = function () {
        var _this = this;
        var data = { "user_name": this.user_name, "user_pass": this.user_pass, "device_token1": this.device_token1, "device_token2": this.device_token2, "device_token3": this.device_token3 };
        console.log(data);
        this.apiservice.loginUser(data).then(function (result) {
            _this.responseData = result;
            console.log(result);
            console.log(_this.responseData.status);
            if (_this.responseData.status) {
                console.log(_this.responseData.data);
                _this.nativeStorage.set('userData', _this.responseData.data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.responseData.message,
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
        // this.navCtrl.setRoot(HomePage);
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgotpassword_forgotpassword__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.smsAuth = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__smsauth_smsauth__["a" /* SmsauthPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/login/login.html"*/'\n\n<ion-content >\n    <div style="text-align:center">\n        <ion-img  src="assets/imgs/Logo1.png" alt=Bakersville  height="210px"\n        width="31vw"></ion-img> \n    </div>\n\n   <div padding > \n        <form [formGroup]="authForm" >\n            <ion-list padding>\n                    <ion-item >\n                        <!-- <ion-label floating>Username</ion-label> -->\n                        <ion-icon name="md-contact" style="font-size:32px;border-bottom: 1px solid;margin-top: 3px;padding-bottom: 7px;" item-left></ion-icon>\n                        <ion-input formControlName="user_name" type="text" value="" style="padding-left:5%;" placeholder="Username/Phone number" [(ngModel)]="user_name"></ion-input>\n                        <!-- <button ion-button clear item-end style="height:32px;">\n                            <ion-icon name="ios-contact-outline" style="font-size:32px;"></ion-icon>\n                        </button> -->\n                    </ion-item>\n                    \n                    <p *ngIf="authForm.controls.user_name.hasError(\'required\') && authForm.controls.user_name.touched">*Username is required!</p>\n                    <p *ngIf="authForm.controls.user_name.hasError(\'pattern\') && authForm.controls.user_name.touched">Please! enter a valid user name </p>\n                    <ion-item style="border-bottom: 1px solid black" >\n                        <!-- <ion-label floating>Password</ion-label> -->\n                        <ion-icon name="eye" item-left style="font-size:32px;border-bottom: 1px solid;padding-bottom: 7px;"></ion-icon>\n                        <ion-input formControlName="user_pass"  [type]="passwordType" clearOnEdit="false" style="padding-left:5%;" placeholder="Password" [(ngModel)]="user_pass"></ion-input>\n                        <!-- <button ion-button clear item-end (click)=\'hideShowPassword()\' style="height:32px;margin-top: 25px">\n                            <ion-icon name="eye" style="font-size:32px;"></ion-icon>\n                        </button> -->\n                    </ion-item>\n                    <p *ngIf="authForm.controls.user_pass.hasError(\'required\') && authForm.controls.user_pass.touched">*Password is required!</p>\n            \n                \n                    \n                <div style="padding:5%">\n                    <button ion-button color="primary" full round (click)="validateLogin()"  >Login</button>\n                    <br>\n                    <button ion-button color="primary" full round  (click)="registerPage()" >Register</button> \n                    \n                    <p text-center>\n                    <button ion-button  clear (click)="forgotPassword()" >Forgot Password?</button>\n                    <button ion-button  clear (click)="smsAuth()" >Mobile Authentication</button>\n                    </p>\n                    \n    \n                </div> \n                \n                \n            </ion-list>   \n        </form>\n    </div>\n   \n</ion-content>\n  '/*ion-inline-end:"/home/pc/jainsampark/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7__providers_restapi_service__["a" /* ApiService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_restapi_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, nativeStorage, apiservice, toastCtrl, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.nativeStorage = nativeStorage;
        this.apiservice = apiservice;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.banners = [];
        this.notifications = [];
        this.news = [];
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.Dashboard();
    } // constructor close.....
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nativeStorage.get('userData').then(function (val) {
                var test = val;
                console.log(test);
                // let profile_image = test.profile_image;
                // console.log(profile_image);
                _this.events.publish('user:created', test, Date.now());
                resolve("done");
            });
        });
        promise.then(function (result) {
            console.log(result); // "done!"
        }, function (err) {
            console.log(err); // Error: "It broke"
        });
    };
    HomePage.prototype.Dashboard = function () {
        var _this = this;
        this.loading.present();
        this.apiservice.dashboard().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status) {
                _this.banners = _this.responseData.data.banner;
                _this.notifications = _this.responseData.data.notification;
                _this.news = _this.responseData.data.news;
                console.log(_this.responseData.data.banner);
                console.log(_this.notifications[0].notification_title);
                _this.loading.dismiss();
            }
            else {
                _this.loading.dismiss();
            }
        });
    };
    HomePage.prototype.presentNewsModal = function (ne) {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__["a" /* NewsdetailsPage */], { "news": ne });
        contactModal.present();
    };
    HomePage.prototype.searchPage = function () {
        //   this.nativeStorage.get('userData').then((val)=>{
        //     let test = val;
        //     console.log(test);
        //     let profile_image = test.profile_image;
        //     console.log(profile_image);
        //     this.events.publish('user:created', profile_image, Date.now());
        // });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/pc/jainsampark/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div *ngFor = "let notification of notifications;">\n      <marquee style="color:blue">{{notification.notification_title}}</marquee>\n  </div>\n    <div style="height:35%;width:100%;" *ngFor = "let banner of banners; let i = index;">\n        <ion-slides pager="true"  >\n          <ion-slide>\n              <img [src]="banner.banner_image" height="auto" width="110%" imageViewer />\n          </ion-slide>\n       </ion-slides>\n      </div>\n\n      <ion-row (click)="searchPage()">\n        <ion-col col-2 style="padding-top:20px;padding-left:30px">\n            <ion-icon name="ios-search"  style="font-size:32px;"></ion-icon>\n        </ion-col>\n        <ion-col col-8>\n            <p style="padding-left:5px;color:grey"> <b> Search</b>   <br> To Search for a Members </p>\n        </ion-col>\n        <ion-col col-2 style="padding-top:28px;padding-left:30px">\n            <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class="news" >\n        <h5> News & Events </h5>\n      </div>\n      <div *ngFor = "let ne of news; let i = index;" style="padding-top:13px">\n        <ion-row (click)="presentNewsModal(ne)" >\n          <ion-col col-3 >\n              <img [src]="ne.featured_image"imageViewer />\n          </ion-col>\n          <ion-col col-9 >\n            <h6> {{ne.title}}</h6>\n            <p style="display:inline; color:grey"> {{ne.publish_date_and_time}}<br>{{ne.short_description}} </p>\n          </ion-col>\n        </ion-row>\n        <hr>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/pc/jainsampark/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_restapi_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[268]);
//# sourceMappingURL=main.js.map