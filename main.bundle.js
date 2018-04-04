webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n\n\n\n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_homeroutes__ = __webpack_require__("../../../../../src/app/routes/homeroutes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_homemodule__ = __webpack_require__("../../../../../src/app/components/home/homemodule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/home/navbar/navbar.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__routes_homeroutes__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_homemodule__["a" /* HomeModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.text-uppercase strong{\n    color:skyblue\n}\n p{\n    color:skyblue\n}\n hr{max-width:50px;border-width:3px;border-color:#f0604038}\n hr.light{border-color:#fff}\n a{color:#f05f40;-webkit-transition:all .2s;transition:all .2s}\n a:hover{color:#f05f40}\n h1,h2,h3,h4,h5,h6{font-family:'Open Sans','Helvetica Neue',Arial,sans-serif}\n .bg-primary{background-color:#f05f40!important}\n .bg-dark{background-color:#212529!important}\n .text-faded{color:rgba(255,255,255,.7)}\n section{padding:8rem 0}\n .section-heading{margin-top:0}\n ::-moz-selection{color:#fff;background:#212529;text-shadow:none}\n ::selection{color:#fff;background:#212529;text-shadow:none}\n img::-moz-selection{color:#fff;background:0 0}\n img::selection{color:#fff;background:0 0}\n img::-moz-selection{color:#fff;background:0 0}\n #mainNav{border-bottom:1px solid rgba(33,37,41,.1);background-color:#fff;font-family:'Open Sans','Helvetica Neue',Arial,sans-serif;-webkit-transition:all .2s;transition:all .2s}\n #mainNav .navbar-brand{font-weight:700;text-transform:uppercase;color:#f05f40;font-family:'Open Sans','Helvetica Neue',Arial,sans-serif}\n #mainNav .navbar-brand:focus,#mainNav .navbar-brand:hover{color:#f05f40}\n #mainNav .navbar-nav>li.nav-item>a.nav-link,#mainNav .navbar-nav>li.nav-item>a.nav-link:focus{font-size:.9rem;font-weight:700;text-transform:uppercase;color:#212529}\n #mainNav .navbar-nav>li.nav-item>a.nav-link:focus:hover,#mainNav .navbar-nav>li.nav-item>a.nav-link:hover{color:#f05f40}\n #mainNav .navbar-nav>li.nav-item>a.nav-link.active,#mainNav .navbar-nav>li.nav-item>a.nav-link:focus.active{color:#f05f40!important;background-color:transparent}\n #mainNav .navbar-nav>li.nav-item>a.nav-link.active:hover,#mainNav .navbar-nav>li.nav-item>a.nav-link:focus.active:hover{background-color:transparent}\n @media (min-width:992px){#mainNav{border-color:transparent;background-color:transparent}#mainNav .navbar-brand{color:rgba(255,255,255,.7)}#mainNav .navbar-brand:focus,#mainNav .navbar-brand:hover{color:#fff}#mainNav .navbar-nav>li.nav-item>a.nav-link{padding:.5rem 1rem}#mainNav .navbar-nav>li.nav-item>a.nav-link,#mainNav .navbar-nav>li.nav-item>a.nav-link:focus{color:rgba(255,255,255,.7)}#mainNav .navbar-nav>li.nav-item>a.nav-link:focus:hover,#mainNav .navbar-nav>li.nav-item>a.nav-link:hover{color:#fff}#mainNav.navbar-shrink{border-bottom:1px solid rgba(33,37,41,.1);background-color:#fff}#mainNav.navbar-shrink .navbar-brand{color:#f05f40}#mainNav.navbar-shrink .navbar-brand:focus,#mainNav.navbar-shrink .navbar-brand:hover{color:#f05f40}#mainNav.navbar-shrink .navbar-nav>li.nav-item>a.nav-link,#mainNav.navbar-shrink .navbar-nav>li.nav-item>a.nav-link:focus{color:#212529}#mainNav.navbar-shrink .navbar-nav>li.nav-item>a.nav-link:focus:hover,#mainNav.navbar-shrink .navbar-nav>li.nav-item>a.nav-link:hover{color:#f05f40}}\n header.masthead{padding-top:10rem;padding-bottom:calc(10rem - 56px);background-image:url(" + escape(__webpack_require__("../../../../../src/assets/img/photography-cameras-wallpaper-4.jpg")) + ");background-position:center center;background-size:cover}\n header.masthead hr{margin-top:30px;margin-bottom:30px}\n header.masthead h1{font-size:2rem}\n header.masthead p{font-weight:300}\n @media (min-width:768px){header.masthead p{font-size:1.15rem}}\n @media (min-width:992px){header.masthead{height:100vh;min-height:650px;padding-top:0;padding-bottom:0}header.masthead h1{font-size:3rem}}\n @media (min-width:1200px){header.masthead h1{font-size:4rem}}\n .service-box{max-width:400px}\n .portfolio-box{position:relative;display:block;max-width:650px;margin:0 auto}\n .portfolio-box .portfolio-box-caption{position:absolute;bottom:0;display:block;width:100%;height:100%;text-align:center;opacity:0;color:#fff;background:rgba(29, 27, 27, 0.431);-webkit-transition:all .2s;transition:all .2s}\n .portfolio-box .portfolio-box-caption .portfolio-box-caption-content{position:absolute;top:50%;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);text-align:center}\n .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category,.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name{padding:0 15px;font-family:'Open Sans','Helvetica Neue',Arial,sans-serif}\n .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category{font-size:14px;font-weight:600;text-transform:uppercase}\n .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name{font-size:18px}\n .portfolio-box:hover .portfolio-box-caption{opacity:1}\n .portfolio-box:focus{outline:0}\n @media (min-width:768px){.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category{font-size:16px}.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name{font-size:22px}}\n .text-primary{color:#f05f40!important}\n .btn{font-weight:700;text-transform:uppercase;border:none;border-radius:300px;font-family:'Open Sans','Helvetica Neue',Arial,sans-serif}\n .btn-xl{padding:1rem 2rem}\n .btn-primary{background-color:#f05f40;border-color:#f05f40}\n .btn-primary:active,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#ee4b28!important}\n .btn-primary:active,.btn-primary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(240,95,64,.5)!important;box-shadow:0 0 0 .2rem rgba(240,95,64,.5)!important}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br><br> <br><br>\n\n       \n<div class=\"container\">\n    <carousel >\n        <slide *ngFor=\"let img of images\">\n          <img src={{img.name}}   alt=\"First slide\" style=\"display: block; width: 100%;\"style=\"display: block; width: 100%;\">\n        </slide>\n        \n      </carousel>\n      <br><br> \n    <header class=\"masthead text-center text-white d-flex\">\n        <div class=\"container my-auto\">\n          <div class=\"row\">\n            <div class=\"col-lg-10 mx-auto\">\n              <h1 class=\"text-uppercase\">\n                <strong>Catch The Best Momment of Your Life With RD PhotoGraphy</strong>\n              </h1>\n              <hr>\n            </div>\n            <div class=\"col-lg-8 mx-auto\">\n              <p> We Provide Serivices Like Wedding Photography .Pre Wedding photoshoot. Photoshoots For Social Media and Aadhaar Card .Pan Card  Passport And Other  Services </p>\n              <a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#about\">Find Out More</a>\n            </div>\n          </div>\n        </div>\n      </header>\n    \n \n         \n          <br><br> <br><br>\n          <section class=\"p-0\" id=\"portfolio\">\n              <div class=\"container-fluid p-0\">\n                <div class=\"row no-gutters popup-gallery\">\n                  <div class=\"col-lg-4 col-sm-6\">\n                    <a class=\"portfolio-box\" href=\"../../../assets/img/portfolio/fullsize/3.jpg\">\n                      <img class=\"img-fluid\" src=\"../../../assets/img/portfolio/thumbnails/3.jpg\" alt=\"\">\n                      <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                          <div class=\"project-category text-faded\">\n                            Category\n                          </div>\n                          <div class=\"project-name\">\n                            Wedding and other functions\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                  <div class=\"col-lg-4 col-sm-6\">\n                    <a class=\"portfolio-box\" href=\"../../../assets/img/portfolio\">\n                      <img class=\"img-fluid\" src=\"../../../assets/img/portfolio/thumbnails/Aadhaar-Card.jpg\" alt=\"\">\n                      <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                          <div class=\"project-category text-faded\">\n                            Category\n                          </div>\n                          <div class=\"project-name\">\n                            Aadhar Card\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                  <div class=\"col-lg-4 col-sm-6\">\n                    <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/3.jpg\">\n                      <img class=\"img-fluid\" src=\"../../../assets/img/portfolio/thumbnails/pan.jpg\" alt=\"\">\n                      <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                          <div class=\"project-category text-faded\">\n                            Category\n                          </div>\n                          <div class=\"project-name\">\n                           Pan Card\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                  <div class=\"col-lg-4 col-sm-6\">\n                    <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/4.jpg\">\n                      <img class=\"img-fluid\" src=\"../../../assets/img/portfolio/thumbnails/wedding.jpg\" alt=\"\">\n                      <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                          <div class=\"project-category text-faded\">\n                            Category\n                          </div>\n                          <div class=\"project-name\">\n                            Wedding Photography\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                  <div class=\"col-lg-4 col-sm-6\">\n                    <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/5.jpg\">\n                      <img class=\"img-fluid\" src=\"../../../assets/img/portfolio/thumbnails/pass.jpg\" alt=\"\">\n                      <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                          <div class=\"project-category text-faded\">\n                            Category\n                          </div>\n                          <div class=\"project-name\">\n                            Passport\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                  <div class=\"col-lg-4 col-sm-6\">\n                    <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/6.jpg\">\n                      <img class=\"img-fluid\" src=\"../../../assets/img/portfolio/thumbnails/kaka.jpg\" alt=\"\">\n                      <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                          <div class=\"project-category text-faded\">\n                            Category\n                          </div>\n                          <div class=\"project-name\">\n                           PhotoShoots\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <br><br> <br><br>\n      \n          <section style=\"color: seashell\"  style=\"background-color:  hsla(204, 75%, 41%, 0.801)\" id=\"services\">\n              <div  class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12 text-center\">\n                    <h2   class=\"section-heading\">At Your Service</h2>\n                    <hr class=\"my-4\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <i class=\"fa fa-4x fa-diamond text-primary mb-3 sr-icons\"></i>\n                      <h3 class=\"mb-3\">Onile Forms</h3>\n                      <p class=\"text-muted mb-0\">Fill online Forms Of Banks and and other Posts</p>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <i class=\"fa fa-4x fa-paper-plane text-primary mb-3 sr-icons\"></i>\n                      <h3 class=\"mb-3\">Photo state and PP photos</h3>\n                      <p class=\"text-muted mb-0\">passport size pics ready in just five min</p>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <i class=\"fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons\"></i>\n                      <h3 class=\"mb-3\">Up to Date</h3>\n                      <p class=\"text-muted mb-0\">We update dependencies to keep things fresh.</p>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <i class=\"fa fa-4x fa-heart text-primary mb-3 sr-icons\"></i>\n                      <h3 class=\"mb-3\">Made with Love</h3>\n                      <p class=\"text-muted mb-0\">You have to make your albums with love these days!</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <br><br> <br><br>\n            <section id=\"contact\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-8 mx-auto text-center\">\n                      <h2 class=\"section-heading\">Let's Get In Touch!</h2>\n                      <hr class=\"my-4\">\n                      <p class=\"mb-5\">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-4 ml-auto text-center\">\n                      <i class=\"fa fa-phone fa-3x mb-3 sr-contact\"></i>\n                      <a>98154-05094</a>\n                      <a>70873-05294</a>\n                    </div>\n                    <div class=\"col-lg-4 mr-auto text-center\">\n                      <i class=\"fa fa-envelope-o fa-3x mb-3 sr-contact\"></i>\n                      <p>\n                        <a href=\"https://www.facebook.com/abhishekajnala\">Abhishek Devgan</a>\n                        <a href=\"https://www.facebook.com/rameshdevganajnala\">Ramesh Devgan</a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n\n    \n\n    </div>\n    \n\n    \n   \n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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
    function HomeComponent(_http) {
        this._http = _http;
        this.images = [];
        this.images = [
            { name: '../../../assets/img/caresual imgs/1 (1).jpg' },
            { name: '../../../assets/img/caresual imgs/1 (2).jpg' },
            { name: '../../../assets/img/caresual imgs/1 (3).jpg' },
            { name: '../../../assets/img/caresual imgs/1 (4).jpg' },
            { name: '../../../assets/img/caresual imgs/1 (5).jpg' },
            { name: '../../../assets/img/caresual imgs/1 (6).jpg' },
            { name: '../../../assets/img/caresual imgs/1 (7).jpg' },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/homemodule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [],
            imports: [],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-item a{\n    color:beige\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n      \n    <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\"><img class=\"img-fluid\" src=\"../../../../assets/logo.PNG\" alt=\"\"></a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#services\">Services</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#portfolio\">Portfolio</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/home/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/home/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/homeroutes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */],
        children: []
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/assets/img/photography-cameras-wallpaper-4.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "photography-cameras-wallpaper-4.927c47e1d8cec20a885c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map