(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Iq8":
/*!**********************************************************!*\
  !*** ./src/app/contacts-menu/contacts-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsMenuComponent", function() { return ContactsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsMenuComponent.ɵfac = function ContactsMenuComponent_Factory(t) { return new (t || ContactsMenuComponent)(); };
ContactsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsMenuComponent, selectors: [["app-contacts-menu"]], decls: 2, vars: 0, template: function ContactsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESPONSIVE VERTICAL MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy1tZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts-menu',
                templateUrl: './contacts-menu.component.html',
                styleUrls: ['./contacts-menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /git/mitosfc/mitosfc/src/main.ts */"zUnb");


/***/ }),

/***/ "9jgp":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







const _c0 = function () { return ["/"]; };
class MainMenuComponent {
    constructor() {
        this.isOffsetZero = true;
        this.isMenuCollapsed = true;
    }
    collapseMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this.isOffsetZero = window.pageYOffset == 0;
        this.onWindowScroll();
    }
    onWindowScroll() {
        console.log(window.pageYOffset);
        let navbar_menu = document.querySelector('#responsive-nav');
        let navbar_toggler_button = document.querySelector("#navbar-toggler-button");
        let logo = document.querySelector("#logo");
        let navbar_items = document.querySelectorAll('.nav-link');
        if ((navbar_menu && logo) && ((window.pageYOffset > navbar_menu.clientHeight) || !this.isMenuCollapsed)) {
            console.log('White nav...');
            navbar_menu.classList.add('bg-light');
            logo.classList.add('reduced-logo');
            navbar_menu.classList.add('navbar-border');
            if (navbar_toggler_button) {
                navbar_toggler_button.classList.remove('navbar-toggler-white');
            }
            if (window.innerWidth >= 992) {
                navbar_items.forEach(function (nav_link) {
                    console.log('Black link');
                    nav_link.classList.add('black-link');
                    nav_link.classList.remove('white-link');
                });
            }
        }
        else if (navbar_menu && logo && window.pageYOffset == 0) {
            console.log('Transparent nav...');
            logo.classList.remove('reduced-logo');
            navbar_menu.classList.remove('navbar-border');
            if (this.isMenuCollapsed) {
                navbar_menu.classList.remove('bg-light');
                if (navbar_toggler_button) {
                    navbar_toggler_button.classList.add('navbar-toggler-white');
                }
            }
            if (window.innerWidth >= 992) {
                navbar_items.forEach(function (nav_link) {
                    console.log('White link');
                    nav_link.classList.add('white-link');
                    nav_link.classList.remove('black-link');
                });
            }
        }
    }
    scrollToElement(element_id) {
        let element = document.querySelector(element_id);
        if (element)
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    ngOnInit() {
        this.isOffsetZero = window.pageYOffset == 0;
    }
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(); };
MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuComponent, selectors: [["app-main-menu"]], hostBindings: function MainMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MainMenuComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 22, vars: 5, consts: [["id", "responsive-nav", 3, "ngClass", "scroll"], [1, "navbar-brand", 3, "routerLink"], ["src", "../../assets/images/logo.jpg", "alt", "Logo", "id", "logo"], ["id", "navbar-toggler-button", "type", "button", 3, "ngClass", "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "p-1"], [1, "nav-item", "p-2"], [1, "nav-link", "white-link", 3, "click"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MainMenuComponent_Template_nav_scroll_0_listener() { return ctx.onWindowScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_button_click_3_listener() { return ctx.collapseMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_a_click_8_listener() { return ctx.scrollToElement("#main-header"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quem somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_a_click_11_listener() { return ctx.scrollToElement("#team"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nosso time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_a_click_14_listener() { return ctx.scrollToElement("#modalities"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Modalidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_a_click_17_listener() { return ctx.scrollToElement("#reviews"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Depoimentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_a_click_20_listener() { return ctx.scrollToElement("#footer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contatos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.isMenuCollapsed || !ctx.isOffsetZero ? "navbar navbar-expand-lg navbar-light fixed-top bg-light" : "navbar navbar-expand-lg navbar-light fixed-top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMenuCollapsed && ctx.isOffsetZero ? "navbar-toggler-white navbar-toggler" : "navbar-toggler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"]], styles: [".navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 60px;\n    border-radius: 100%;\n    transition: .5s ease;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, .4);\n    margin-right: 15px;\n}\n\n.reduced-logo[_ngcontent-%COMP%] {\n    width: 50px!important;\n}\n\n#logo-text[_ngcontent-%COMP%]{font-size: 1.5rem;}\n\n.navbar-nav[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.navbar-toggler-white[_ngcontent-%COMP%] {\n    color: #f8f9fa;\n    border-color: #f8f9fa;\n}\n\n.navbar-border[_ngcontent-%COMP%] {\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);\n}\n\n#responsive-nav[_ngcontent-%COMP%] {\n    transition: .5s ease;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    border: none!important;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {cursor: pointer;}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size: 18px!important;}\n\n@media screen and (min-width: 992px){\n    .white-link[_ngcontent-%COMP%]{\n        color: white!important;\n    }\n    .black-link[_ngcontent-%COMP%]{\n\n        color: rgba(0, 0, 0, .5)!important;\n    }\n}\n\n@media screen and (max-width: 992px){\n    .navbar-nav[_ngcontent-%COMP%]{\n        padding-bottom: 1.5rem!important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxXQUFXLGlCQUFpQixDQUFDOztBQUM3QjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsaUJBQWlCLGVBQWUsQ0FBQzs7QUFFakMsb0NBQW9DLHlCQUF5QixDQUFDOztBQUU5RDtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7O1FBRUksa0NBQWtDO0lBQ3RDO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLGdDQUFnQztJQUNwQztBQUNKIiwiZmlsZSI6Im1haW4tbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCBpbWd7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIC40KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5yZWR1Y2VkLWxvZ28ge1xuICAgIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcbn1cblxuI2xvZ28tdGV4dHtmb250LXNpemU6IDEuNXJlbTt9XG4ubmF2YmFyLW5hdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXItd2hpdGUge1xuICAgIGNvbG9yOiAjZjhmOWZhO1xuICAgIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLm5hdmJhci1ib3JkZXIge1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xufVxuXG4jcmVzcG9uc2l2ZS1uYXYge1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHtjdXJzb3I6IHBvaW50ZXI7fVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGlua3tmb250LXNpemU6IDE4cHghaW1wb3J0YW50O31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpe1xuICAgIC53aGl0ZS1saW5re1xuICAgICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYmxhY2stbGlua3tcblxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNSkhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAubmF2YmFyLW5hdntcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    backgroundColor: 'green !important'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    backgroundColor: 'red'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s')
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-menu',
                templateUrl: './main-menu.component.html',
                styleUrls: ['./main-menu.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            backgroundColor: 'green !important'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            backgroundColor: 'red'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s')
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "9jgp");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");






function AppComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const modality_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('../assets/images/games/", modality_r5.image_name, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("filtered-modality ", modality_r5.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](modality_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](modality_r5.description);
} }
function AppComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", review_r6.uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", review_r6.photo_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", review_r6.client_name);
} }
class AppComponent {
    constructor() {
        this.title = 'mitosfc';
        this.modalities = [{
                name: "Futsal",
                description: "Jogo entre duas equipes com 5 jogadores cada em uma quadra esportiva",
                color: "red-85",
                image_name: 'index.jpeg'
            }, {
                name: "Futebol Society",
                description: "Jogo entre duas equipes com 7 jogadores cada em uma quadra de grama sintética",
                color: "green-85",
                image_name: '3.jpeg'
            }];
        this.reviews = [{
                client_name: "Bruno Martins",
                photo_name: "../assets/images/reviews/bruno-martins-facebook.png",
                uri: "https://m.facebook.com/story.php?story_fbid=3459304310763530&id=100000519848476&__tn__=%2As%2As"
            }, {
                client_name: "João Guilherme",
                photo_name: "../assets/images/reviews/joao-guilherme-facebook.png",
                uri: "https://m.facebook.com/story.php?story_fbid=477368546530019&id=100027706333069&ref=page_internal&__tn__=%2As%2As"
            }, {
                client_name: "Zotinn Santos",
                photo_name: "../assets/images/reviews/zotinn-santos-facebook.png",
                uri: "https://m.facebook.com/story.php?story_fbid=1477478735781808&id=100005590862105&__tn__=%2As%2As"
            }];
    }
    scrollToElement($element) {
        console.log($element);
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 64, vars: 2, consts: [["id", "main-header", 1, "container-fluid"], [1, "filter", "row", "justify-content-center"], [1, "content", "align-self-center"], [1, "body"], [1, "phrases"], [1, "footer", "m-4"], [1, "icons"], ["href", "https://m.facebook.com/MITOSFCSG", "target", "blank"], ["src", "../assets/images/icons/facebook.svg", "alt", "Pagina Oficial do MitosFC no Facebook"], ["href", "https://www.instagram.com/mitosfutsal/", "target", "blank"], ["src", "../assets/images/icons/instagram.png", "alt", "Pagina Oficial do MitosFC no Instagram"], ["href", "https://www.youtube.com/channel/UCL1IzdqCSaFLqEfI2pkLcjw", "target", "blank"], ["src", "../assets/images/icons/youtube-white.png", "alt", "Pagina Oficial do MitosFC no Youtube"], ["id", "more"], [3, "click"], ["id", "more-row"], [1, "m-4"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "width", "35px", "height", "35px", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "jsx-156389127"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "white", "stroke", "none", 1, "jsx-156389127"], ["d", "M207 4822 l-207 -207 1278 -1278 1277 -1277 1275 1275 1275 1275 -210 210 -210 210 -1065 -1065 -1065 -1065 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z", 1, "jsx-156389127"], ["d", "M207 2652 l-207 -207 1223 -1223 1222 -1222 110 0 110 0 1218 1218 c669 669 1217 1222 1217 1227 0 6 -92 102 -205 215 l-205 205 -1068 -1068 -1067 -1067 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z", 1, "jsx-156389127"], ["id", "about", 1, "p-5"], ["about", ""], [1, "about-wrapper"], [1, "title-container"], [1, "title"], [1, "red"], ["id", "about-text", 1, "mt-4"], ["id", "team"], ["id", "modalities", 1, "p-5", "mt-4", "container-fluid"], ["modalitiesContainer", ""], [1, "modalities-container"], [1, "title-container", "mb-5"], [1, ""], [1, "row"], ["class", "col-12 col-sm-6 col-md-6 p-2", 4, "ngFor", "ngForOf"], ["id", "reviews", 1, "mt-4", "container-fluid"], ["reviewsContainer", ""], [1, "reviews-wrapper"], [1, "title-container", 2, "margin-bottom", "2rem!important"], ["class", "col-12 col-sm-6 col-md-4 pb-4 review-container", 4, "ngFor", "ngForOf"], ["id", "footer"], [1, "col-12", "col-sm-6", "col-md-6", "p-2"], [1, "modality-container", "modality"], [1, "mb-3"], [1, "col-12", "col-sm-6", "col-md-4", "pb-4", "review-container"], ["target", "blank", 3, "href"], [1, "review-image", 3, "src", "alt"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SEJA BEM VINDO AO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "MITOS FUTEBOL CLUBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx.scrollToElement(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SABER MAIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "O ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "MITOS FUTEBOL CLUBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " O Mitos Futebol Clube foi fundado em 11 de Desembro de 2017, por Geraldo Luiz e Fabiana Fernandes, atuais coordenadores do projeto, que tem desde o seu in\u00EDcio o objetivo de integrar crian\u00E7as que sonham em ter o futuro dentro do futebol profissional. Al\u00E9m desse intuito, a equipe tamb\u00E9m busca ajudar na forma\u00E7\u00E3o dos atletas como cidad\u00E3os, ensinando atrav\u00E9s do esporte o respeito pelo pr\u00F3ximo, o esp\u00EDrito coletivo, o trabalho em equipe e a dedica\u00E7\u00E3o pela vit\u00F3ria, princ\u00EDpios importantes dentro de uma sociedade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Desde o in\u00EDcio, o clube conquistou os t\u00EDtulos do Gon\u00E7alense de Futsal sub 11, da Copa Amizade sub 9 e sub 11, al\u00E9m do vice campeonato na Copa Alian\u00E7a (Nit) sub 9 e os terceiros lugares no Torneio de Ver\u00E3o sub 11 e na Copa alian\u00E7a (Nit) sub 11 Campeonato metropolitano de fut7 (Itabora\u00ED) Campeonato municipal de fut7 (S\u00E3o Gon\u00E7alo). Ap\u00F3s os bons resultados, o time agora tem como metas as participa\u00E7\u00F5es em torneios internacionais da World Futsal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-team", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "MODALIDADES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AppComponent_div_52_Template, 7, 8, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "O QUE DIZEM SOBRE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "NOSSO TRABALHO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AppComponent_div_62_Template, 3, 3, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-footer", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modalities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__["MainMenuComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["header[_ngcontent-%COMP%]   .phrases[_ngcontent-%COMP%] {\n    text-align: center;\n    color: white;\n}\n\n.phrases[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: lighter!important;\n}\n\nheader[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n}\n\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    width: 100%;\n    text-align: center;\n}\n\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {display: inline-block;}\n\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 30px; margin: 10px;}\n\n#more[_ngcontent-%COMP%] {\n    color: white;\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n}\n\n#more[_ngcontent-%COMP%]:hover{cursor: pointer;}\n\n#more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n    padding: 10px;\n}\n\n#more-row[_ngcontent-%COMP%] {margin: 30px;}\n\n#more-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {font-weight: lighter;}\n\n#about-text[_ngcontent-%COMP%] {line-height: 1.9;}\n\n#about[_ngcontent-%COMP%] {\n    background: #f8f9fa !important;\n    padding: 2rem;\n}\n\n#modalities[_ngcontent-%COMP%] {\n    color: white;\n    text-align: center;\n    background: #f8f9fa !important;\n    padding-top: 4.75rem!important;\n    padding-bottom: 4.75rem!important;\n}\n\n#modalities[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, .7);\n}\n\n.modality[_ngcontent-%COMP%] {\n    max-width: 360px;\n    max-height: 320px;\n    border-radius: 20px;\n    padding: 0;\n    margin: auto;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.filtered-modality[_ngcontent-%COMP%]{\n    padding: 100px 40px;\n    border-radius: 20px;\n    max-width: 360px;\n    max-height: 320px;\n}\n\n.modalities-container[_ngcontent-%COMP%]{\n    max-width: 810px;\n    margin: auto;\n}\n\n#reviews[_ngcontent-%COMP%] {padding: 5rem 3rem!important;}\n\n.review-container[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.review-image[_ngcontent-%COMP%] {\n    max-height: 100%;\n    max-width: 100%;\n    transition: .3s ease;\n}\n\n.review-image[_ngcontent-%COMP%]:hover{\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);\n    border-radius: 10px;\n}\n\n@media screen and (max-width: 340px){\n    .filtered-modality[_ngcontent-%COMP%]{\n        padding: 60px 40px;\n    }\n}\n\n@media screen and (min-width: 786px){\n    #about[_ngcontent-%COMP%]{\n        padding: 5rem!important;\n    }\n}\n\n@media screen and (max-width: 992px){\n    #reviews[_ngcontent-%COMP%]{\n        text-align: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBLGNBQWMscUJBQXFCLENBQUM7O0FBRXBDLGlCQUFpQixXQUFXLEVBQUUsWUFBWSxDQUFDOztBQUUzQztJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0EsWUFBWSxlQUFlLENBQUM7O0FBQzVCO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBLFdBQVcsWUFBWSxDQUFDOztBQUV4QixjQUFjLG9CQUFvQixDQUFDOztBQUVuQyxhQUFhLGdCQUFnQixDQUFDOztBQUU5QjtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQSxVQUFVLDRCQUE0QixDQUFDOztBQUV2QztJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIgLnBocmFzZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5waHJhc2VzIGgxIHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlciFpbXBvcnRhbnQ7XG59XG5oZWFkZXIgLmZvb3RlciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhlYWRlciB1bCBsaSB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cblxuaGVhZGVyIHVsIGxpIGltZ3t3aWR0aDogMzBweDsgbWFyZ2luOiAxMHB4O31cblxuI21vcmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbn1cbiNtb3JlOmhvdmVye2N1cnNvcjogcG9pbnRlcjt9XG4jbW9yZSBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNtb3JlLXJvdyB7bWFyZ2luOiAzMHB4O31cblxuI21vcmUtcm93IGg0IHtmb250LXdlaWdodDogbGlnaHRlcjt9XG5cbiNhYm91dC10ZXh0IHtsaW5lLWhlaWdodDogMS45O31cblxuI2Fib3V0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuI21vZGFsaXRpZXMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA0Ljc1cmVtIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC43NXJlbSFpbXBvcnRhbnQ7XG59XG5cbiNtb2RhbGl0aWVzIGg0IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XG59XG5cbi5tb2RhbGl0eSB7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5maWx0ZXJlZC1tb2RhbGl0eXtcbiAgICBwYWRkaW5nOiAxMDBweCA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbn1cblxuLm1vZGFsaXRpZXMtY29udGFpbmVye1xuICAgIG1heC13aWR0aDogODEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jcmV2aWV3cyB7cGFkZGluZzogNXJlbSAzcmVtIWltcG9ydGFudDt9XG5cbi5yZXZpZXctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnJldmlldy1pbWFnZSB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XG59XG5cbi5yZXZpZXctaW1hZ2U6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpe1xuICAgIC5maWx0ZXJlZC1tb2RhbGl0eXtcbiAgICAgICAgcGFkZGluZzogNjBweCA0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzg2cHgpe1xuICAgICNhYm91dHtcbiAgICAgICAgcGFkZGluZzogNXJlbSFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgI3Jldmlld3N7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "9jgp");
/* harmony import */ var _contacts_menu_contacts_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-menu/contacts-menu.component */ "+Iq8");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location/location.component */ "yCIP");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"],
        _contacts_menu_contacts_menu_component__WEBPACK_IMPORTED_MODULE_5__["ContactsMenuComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"],
        _location_location_component__WEBPACK_IMPORTED_MODULE_8__["LocationComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"],
                    _contacts_menu_contacts_menu_component__WEBPACK_IMPORTED_MODULE_5__["ContactsMenuComponent"],
                    _team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"],
                    _location_location_component__WEBPACK_IMPORTED_MODULE_8__["LocationComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 54, vars: 0, consts: [["id", "footer", 1, "p-4", "pt-5", "mt-4", "container-fluid"], ["footer", ""], [1, "row", "mb-5"], [1, "col-12", "col-lg-4", "pb-4", "footer-about-us"], [1, "footer-title"], [1, "mt-3"], [1, "footer", "mt-4"], [1, "icons", "p-0"], ["href", "https://m.facebook.com/MITOSFCSG"], ["src", "../assets/images/icons/facebook.svg", "alt", "Pagina Oficial do MitosFC no Facebook"], ["href", "https://www.instagram.com/mitosfutsal/"], ["src", "../assets/images/icons/instagram.png", "alt", "Pagina Oficial do MitosFC no Instagram"], ["href", "https://www.youtube.com/channel/UCL1IzdqCSaFLqEfI2pkLcjw"], ["src", "../assets/images/icons/youtube-white.png", "alt", "Pagina Oficial do MitosFC no Youtube"], [1, "col-12", "col-md-6", "col-lg-4", "pb-4", "mt-5", "footer-find-us"], [1, "mt-4"], [1, "footer-sub-title"], ["id", "partnership", 1, "col-12", "col-md-6", "col-lg-4", "pb-4", "mt-5"], ["id", "partnership-container", 1, "mt-3"], ["href", "https://www.focuscontabil.com/", "target", "blank"], ["id", "focus", 1, "partner-container", "mt-5"], ["href", "https://www.facebook.com/crossconsultoria/", "target", "blank"], ["id", "cross", 1, "partner-container", "mt-5"], [2, "background", "rgba(255,255, 255, .4)"], [1, "copy"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sobre n\u00F3s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " O Mitos Futebol Clube foi fundado em 11 de Desembro de 2017, por Geraldo Luiz e Fabiana Fernandes, atuais coordenadores do projeto, que tem desde o seu in\u00EDcio o objetivo de integrar crian\u00E7as que sonham em ter o futuro dentro do futebol profissional. Al\u00E9m desse intuito, a equipe tamb\u00E9m busca ajudar na forma\u00E7\u00E3o dos atletas como cidad\u00E3os, ensinando atrav\u00E9s do esporte o respeito pelo pr\u00F3ximo, o esp\u00EDrito coletivo, o trabalho em equipe e a dedica\u00E7\u00E3o pela vit\u00F3ria, princ\u00EDpios importantes dentro de uma sociedade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nos encontre!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Embaixador Social Clube - R. Maria Fonseca, 60 - Camar\u00E3o, S\u00E3o Gon\u00E7alo - RJ, 24435-050");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ficou com duvidas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "geraldojrvendas@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(21) 99289-1526");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "+55 21 99289-1526");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Apoio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00A9 2020 MITOS FUTEBOL CLUBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\n    color: white;\n    background: #891010;\n    line-height: 1.9;\n}\n\n#footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {display: inline-block;}\n\n#footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 30px; margin: 10px;}\n\n.footer-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: normal;\n}\n\n.footer-sub-title[_ngcontent-%COMP%] {\n    font-weight: normal;\n}\n\n.partner-container[_ngcontent-%COMP%]{\n    width: 120px;\n    height: 120px;\n    background:white;\n    border-radius: 100%;\n    \n    background-repeat: no-repeat!important;\n\n    background-position: center!important;\n\n}\n\n#focus[_ngcontent-%COMP%] {\n    background: url('focus.png');\n    background-size: contain!important;\n    background-color: white;\n\n}\n\n#cross[_ngcontent-%COMP%]{\n    background-size: cover!important;\n    background: url('cross.jpg')\n}\n\n#partnership[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#partnership-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {margin: auto;}\n\n.copy[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\n@media screen and (min-width: 786px){\n    .footer-find-us[_ngcontent-%COMP%]{\n        padding-right: 5rem!important;\n    }\n\n    #partnership[_ngcontent-%COMP%] {\n        border-left: 1px solid rgba(255,255,255, .2);\n    }\n}\n\n@media screen and (min-width: 992px){\n    .footer-find-us[_ngcontent-%COMP%]{\n        padding-right: 2rem!important;\n        padding-left: 2rem!important;\n        border-left: 1px solid rgba(255,255,255, .2)!important;\n    }\n\n    #partnership[_ngcontent-%COMP%] {\n        border-left: 1px solid rgba(255,255,255, .2);\n    }\n\n    .footer-about-us[_ngcontent-%COMP%] {\n        padding-right: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUEsZUFBZSxxQkFBcUIsQ0FBQzs7QUFFckMsa0JBQWtCLFdBQVcsRUFBRSxZQUFZLENBQUM7O0FBRTVDO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7SUFFbkIsc0NBQXNDOztJQUV0QyxxQ0FBcUM7O0FBRXpDOztBQUVBO0lBQ0ksNEJBQWdEO0lBQ2hELGtDQUFrQztJQUNsQyx1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsNEJBQTRCLFlBQVksQ0FBQzs7QUFFekM7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLDRDQUE0QztJQUNoRDtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLHNEQUFzRDtJQUMxRDs7SUFFQTtRQUNJLDRDQUE0QztJQUNoRDs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICM4OTEwMTA7XG4gICAgbGluZS1oZWlnaHQ6IDEuOTtcbn1cblxuI2Zvb3RlciB1bCBsaSB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cblxuI2Zvb3RlciB1bCBsaSBpbWd7d2lkdGg6IDMwcHg7IG1hcmdpbjogMTBweDt9XG5cbi5mb290ZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZm9vdGVyLXN1Yi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnBhcnRuZXItY29udGFpbmVye1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0IWltcG9ydGFudDtcblxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciFpbXBvcnRhbnQ7XG5cbn1cblxuI2ZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9jdXMucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG4jY3Jvc3N7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2Nyb3NzLmpwZycpXG59XG5cbiNwYXJ0bmVyc2hpcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcGFydG5lcnNoaXAtY29udGFpbmVyIGRpdiB7bWFyZ2luOiBhdXRvO31cblxuLmNvcHl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODZweCl7XG4gICAgLmZvb3Rlci1maW5kLXVze1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjcGFydG5lcnNoaXAge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsIC4yKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAuZm9vdGVyLWZpbmQtdXN7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW0haW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW0haW1wb3J0YW50O1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsIC4yKSFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgI3BhcnRuZXJzaGlwIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LCAuMik7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1hYm91dC11cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TeamComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", member_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "", member_r2.name, ":", member_r2.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r2.name);
} }
class TeamComponent {
    constructor() {
        this.teamMembers = [
            {
                name: "Felipe Batista",
                title: "Treinador",
                photo: "../../assets/images/team/felipe-batista.jpg"
            },
            {
                name: "Jonatas Silva",
                title: "Treinador",
                photo: "../../assets/images/team/jonatas-silva.jpeg"
            }
        ];
    }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 10, vars: 1, consts: [["id", "team", 1, "p-4", "pt-5", "mt-4"], ["team", ""], [1, "team-wrapper"], [1, "title-container"], [1, "title"], [1, "red"], ["id", "team-content", 1, "mt-4", "row", "justify-content-center"], ["class", "col-12 col-sm-6 col-md-6 col-lg-4 team-member mb-3 justify-content-center", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-4", "team-member", "mb-3", "justify-content-center"], [3, "src", "alt"], [1, "team-member-information"], [1, "team-member-information-title", "mb-2"], [1, "pb-1"], [1, "team-member-information-name"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NOSSO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TIME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeamComponent_div_9_Template, 8, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamMembers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#team[_ngcontent-%COMP%] {\n    text-align: center;\n}\n.team-member[_ngcontent-%COMP%]{\n    max-width: 350px!important;\n}\n.team-member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 5px;\n    height: 100%;\n    object-fit: cover;\n}\n.team-member-information[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 10px 30px;\n    position: absolute;\n    background: white;\n    margin: auto;\n    top: 80%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.team-member-information-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(137, 16, 16, 0.8);\n    padding-right: 5px;\n    padding-left: 5px;\n}\n.team-member-information-name[_ngcontent-%COMP%] {\n    font-weight: normal;\n    color: rgba(0, 0, 0, .7);\n}\n@media screen and (max-width: 340px){\n    .team-member-information[_ngcontent-%COMP%]{top:70%;}\n}\n@media screen and (max-width: 576px){\n    #team[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .team-member[_ngcontent-%COMP%]{\n        margin: auto;\n    }\n}\n@media screen and (min-width: 786px){\n    #about[_ngcontent-%COMP%]{\n        padding: 5rem;\n    }\n\n    #team[_ngcontent-%COMP%] {\n        padding: 5rem!important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSx5QkFBeUIsT0FBTyxDQUFDO0FBQ3JDO0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVhbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRlYW0tbWVtYmVye1xuICAgIG1heC13aWR0aDogMzUwcHghaW1wb3J0YW50O1xufVxuXG4udGVhbS1tZW1iZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnRlYW0tbWVtYmVyLWluZm9ybWF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiA4MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udGVhbS1tZW1iZXItaW5mb3JtYXRpb24tdGl0bGUgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTM3LCAxNiwgMTYsIDAuOCk7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGVhbS1tZW1iZXItaW5mb3JtYXRpb24tbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KXtcbiAgICAudGVhbS1tZW1iZXItaW5mb3JtYXRpb257dG9wOjcwJTt9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KXtcbiAgICAjdGVhbSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnRlYW0tbWVtYmVye1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODZweCl7XG4gICAgI2Fib3V0e1xuICAgICAgICBwYWRkaW5nOiA1cmVtO1xuICAgIH1cblxuICAgICN0ZWFtIHtcbiAgICAgICAgcGFkZGluZzogNXJlbSFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yCIP":
/*!************************************************!*\
  !*** ./src/app/location/location.component.ts ***!
  \************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocationComponent {
    constructor() { }
    ngOnInit() {
    }
}
LocationComponent.ɵfac = function LocationComponent_Factory(t) { return new (t || LocationComponent)(); };
LocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationComponent, selectors: [["app-location"]], decls: 2, vars: 0, template: function LocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "location works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-location',
                templateUrl: './location.component.html',
                styleUrls: ['./location.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map