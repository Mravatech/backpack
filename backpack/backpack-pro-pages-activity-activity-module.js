(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["backpack-pro-pages-activity-activity-module"],{

/***/ "./src/app/backpack-pro/pages/activity/activity-page/log/log.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-page/log/log.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_wrapper {\n  width: 100%;\n  margin: 3em auto;\n}\n.mat-select {\n  height: 40px;\n}\n.filter_pad .mat-form-field {\n  width: 100%;\n}\n@media (max-width: 930px) {\n  .content_wrapper{\n    width: 100%;\n    margin: 3em auto;\n  }\n  .filter_pad .mat-form-field {\n    width: 100%;\n  }\n}\n@media (max-width: 425px) {\n  .card.horizontal .card-stacked {\n    position: inherit;\n  }\n  .card .card-action {\n    position: absolute;\n    left: -126px;\n    background: #fff;\n    bottom: 0;\n    width: 360px;\n  }\n}\n.sub-title-2 {\n  font-weight: 500;\n  margin-bottom: 1em;\n}\n/* Input Styling */\n.custom_search > span {\n    position: absolute;\n    top: 10px;\n    opacity: .4;\n    color: #979797;\n}\n.custom_search input.input_control{\n  border-bottom: none !important;\n  font-size: 18px !important;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{\n  color: #9B9B9B !important;\n}\n/* Timeline */\n.custom_timeline {\n  border-left: 1px solid #979797;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  background: rgba(255, 255, 255, 0.03);\n  color: #000;\n  margin: 0px auto;\n  letter-spacing: 0.5px;\n  position: relative;\n  line-height: 32px;\n  font-size: 1.03em;\n  padding: 0px 0 0 52px;\n  list-style: none;\n  text-align: left;\n  font-weight: 100;\n  max-width: 77%;\n}\n.custom_timeline:before,\n.custom_timeline:after {\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  background: #ffffff;\n  position: absolute;\n}\n.custom_timeline:before{\n  left: -5px;\n  top: -1px;\n}\n.custom_timeline:after {\n  left: -5px;\n  bottom: 0;\n}\n.custom_timeline .notify {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  position: relative;\n  /* top: -10px; */\n}\n.custom_timeline .notify:last-of-type {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border: none;\n}\n.custom_timeline .notify:before,\n.custom_timeline .notify:after {\n  position: absolute;\n  display: block;\n  top: 0;\n}\n.custom_timeline .notify:before {\n  left: -170.5px;\n  color: #818181;\n  content: attr(data-time);\n  text-align: right;\n  font-weight: 100;\n  font-size: 11px;\n  min-width: 95px;\n}\n.custom_timeline .notify:after {\n  box-shadow: 0 0 0 1px #979797;\n  left: -57.85px;\n  background: #ffffff;\n  border-radius: 50%;\n  height: 11px;\n  width: 11px;\n  content: \"\";\n  top: 10px;\n}\n.custom_timeline p{\n  font-size: 12px;\n  color: #4A4A4A;\n  margin: 0;\n}\n.custom_timeline p > a{\n  color: #83267E;\n}\n.label_red{\n  color: #FF5B4B !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2FjdGl2aXR5LXBhZ2UvbG9nL2xvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCO0FBRUEsYUFBYTtBQUNiO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsTUFBTTtBQUNSO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztBQUNYO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFNBQVM7QUFDWDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2FjdGl2aXR5LXBhZ2UvbG9nL2xvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDNlbSBhdXRvO1xufVxuLm1hdC1zZWxlY3Qge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uZmlsdGVyX3BhZCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xuICAuY29udGVudF93cmFwcGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogM2VtIGF1dG87XG4gIH1cbiAgLmZpbHRlcl9wYWQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNhcmQuaG9yaXpvbnRhbCAuY2FyZC1zdGFja2VkIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgfVxuICAuY2FyZCAuY2FyZC1hY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTI2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDM2MHB4O1xuICB9XG59XG4uc3ViLXRpdGxlLTIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi8qIElucHV0IFN0eWxpbmcgKi9cbi5jdXN0b21fc2VhcmNoID4gc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBjb2xvcjogIzk3OTc5Nztcbn1cbi5jdXN0b21fc2VhcmNoIGlucHV0LmlucHV0X2NvbnRyb2x7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcbiAgY29sb3I6ICM5QjlCOUIgIWltcG9ydGFudDtcbn1cblxuLyogVGltZWxpbmUgKi9cbi5jdXN0b21fdGltZWxpbmUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5Nzk3OTc7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMS4wM2VtO1xuICBwYWRkaW5nOiAwcHggMCAwIDUycHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1heC13aWR0aDogNzclO1xufVxuLmN1c3RvbV90aW1lbGluZTpiZWZvcmUsXG4uY3VzdG9tX3RpbWVsaW5lOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY3VzdG9tX3RpbWVsaW5lOmJlZm9yZXtcbiAgbGVmdDogLTVweDtcbiAgdG9wOiAtMXB4O1xufVxuLmN1c3RvbV90aW1lbGluZTphZnRlciB7XG4gIGxlZnQ6IC01cHg7XG4gIGJvdHRvbTogMDtcbn1cbi5jdXN0b21fdGltZWxpbmUgLm5vdGlmeSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHRvcDogLTEwcHg7ICovXG59XG4uY3VzdG9tX3RpbWVsaW5lIC5ub3RpZnk6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jdXN0b21fdGltZWxpbmUgLm5vdGlmeTpiZWZvcmUsXG4uY3VzdG9tX3RpbWVsaW5lIC5ub3RpZnk6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG59XG4uY3VzdG9tX3RpbWVsaW5lIC5ub3RpZnk6YmVmb3JlIHtcbiAgbGVmdDogLTE3MC41cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGltZSk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1pbi13aWR0aDogOTVweDtcbn1cbi5jdXN0b21fdGltZWxpbmUgLm5vdGlmeTphZnRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjOTc5Nzk3O1xuICBsZWZ0OiAtNTcuODVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDExcHg7XG4gIHdpZHRoOiAxMXB4O1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDEwcHg7XG59XG4uY3VzdG9tX3RpbWVsaW5lIHB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIG1hcmdpbjogMDtcbn1cbi5jdXN0b21fdGltZWxpbmUgcCA+IGF7XG4gIGNvbG9yOiAjODMyNjdFO1xufVxuLmxhYmVsX3JlZHtcbiAgY29sb3I6ICNGRjVCNEIgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-page/log/log.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-page/log/log.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content_wrapper\">\n    <div class=\"row\">\n      <div class=\"col s12 m7 filter_pad\">\n        <div class=\"row\">\n          <div class=\"col s12 m5\">\n            <mat-form-field>\n              <mat-label>Filter by:</mat-label>\n               <mat-select>\n                 <mat-option *ngFor=\"let filterOption of filterOptions\" [value]=\"filterOption.value\">\n                   {{filterOption.viewValue}}\n                 </mat-option>\n               </mat-select>\n             </mat-form-field>\n          </div>\n          <div class=\"input-field col m12 custom_search\">\n            <span><i class=\"material-icons\">search</i></span>\n            <input type=\"text\" class=\"input_control full\" placeholder=\"Search by name or ticket No.\"/>\n          </div>\n           <div class=\"col s12 m12\">\n             <h6 class=\"sub-title-2\">Today, 12 Apr 2019</h6>\n           </div>\n           <div class=\"col s12 m12\">\n             <ul class=\"custom_timeline\">\n               <li class=\"notify\" data-time=\"10:10 pm\">\n                 <p><a href=\"\">You</a> have updated photos for this activity </p>\n               </li>\n               <li class=\"notify\" data-time=\"07:56 pm\">\n                 <p><a href=\"\">Mohammad Ghulam</a> Checked-in Ticket No. <span class=\"label_red\">xxx-xxx-xxx-xxx</span> </p>\n               </li>\n               <li class=\"notify\" data-time=\"07:56 pm\">\n                 <p><a href=\"\">Mohammad Ghulam</a> Checked-in Ticket No. <span class=\"label_red\">xxx-xxx-xxx-xxx</span> </p>\n               </li>\n               <li class=\"notify\" data-time=\"04:12 pm\">\n                 <p>New booking via  <a href=\"\" class=\"label_red\">backpack</a> </p>\n               </li>\n             </ul>\n           </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-page/log/log.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-page/log/log.component.ts ***!
  \********************************************************************************/
/*! exports provided: ActivityLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogComponent", function() { return ActivityLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActivityLogComponent = /** @class */ (function () {
    function ActivityLogComponent() {
        this.filterOptions = [
            { value: 'all', viewValue: 'All Activities' },
            { value: 'online', viewValue: 'Online Activities' },
            { value: 'offline', viewValue: 'Offline Activities' },
        ];
        this.activityOptions = [
            { value: 'sea', viewValue: 'Sea' },
            { value: 'land', viewValue: 'Land' },
            { value: 'sky', viewValue: 'Sky' },
        ];
    }
    ActivityLogComponent.prototype.ngOnInit = function () {
    };
    ActivityLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'log',
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/backpack-pro/pages/activity/activity-page/log/log.component.html"),
            styles: [__webpack_require__(/*! ./log.component.css */ "./src/app/backpack-pro/pages/activity/activity-page/log/log.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActivityLogComponent);
    return ActivityLogComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_wrapper {\n  width: 100%;\n  margin: 3em auto;\n}\n.mat-select {\n  height: 40px;\n}\n.filter_pad .mat-form-field {\n  width: 100%;\n}\n@media (max-width: 930px) {\n  .content_wrapper{\n    width: 100%;\n    margin: 3em auto;\n  }\n  .filter_pad .mat-form-field {\n    width: 100%;\n  }\n}\n/* .ratings_set {\n  display: flex;\n  float: left;\n  width: 100%;\n  font-size: 12px;\n  color: #9B9B9B;\n  margin: 5px 0;\n  height: 20px;\n  line-height: 16px;\n}\n.ratings_set > span{\n  margin-right: 10px;\n} */\n/* .custom_link{\n  float: right;\n  color: #818181 !important;\n}\n.custom_link i{\n    line-height: 0 !important;\n    top: 7px;\n    position: relative;\n}\n.custom_link.incomplete i{\n  color: #FF5B4B !important;\n}\n.custom_label h6{\n  color: #818181;\n  font-size: 18px;\n  margin-bottom: 1em;\n} */\n@media (max-width: 425px) {\n  .card.horizontal .card-stacked {\n    position: inherit;\n  }\n  .card .card-action {\n    position: absolute;\n    left: -126px;\n    background: #fff;\n    bottom: 0;\n    width: 360px;\n  }\n}\n.sub-title-2 {\n  font-weight: 500;\n  margin-bottom: 1em;\n}\n.b_card_content {\n  float: left;\n  width: 100%;\n  padding: 1em 1em 2em;\n}\n.banner_card{\n\tmax-width: 320px;\n  border: 1px solid #83267E;\n\tborder-radius: 8px;\n  float: right;\n  overflow: hidden;\n}\n.banner_card h6{\n  font-size: 14px;\n  color: #83267E;\n  font-weight: 500;\n}\n.btn_book {\n  width: 100%;\n  height: 75px;\n  line-height: 58px;\n  background: #fff;\n  border: 1px solid #e4e4e4;\n  cursor: pointer;\n}\n.btn_book > span:last-child {\n  font-size: 24px;\n  margin: 0 15px;\n  color: #7a427d;\n  font-weight: bold;\n}\n.price_display span {\n  display: block;\n  line-height: 19px;\n  font-size: 12px;\n}\n.price_display span:first-child {\n  font-weight: bolder;\n  font-size: 15px;\n}\n.price_display {\n  background: #7a427d;\n  color: #fff;\n  width: 120px;\n  height: 45px;\n  float: left;\n  margin: 10px 0 0 25px;\n  padding: 3px;\n  line-height: 40px;\n}\n/* Input Styling */\n.custom_inputs > label{\n  -webkit-transform: none !important;\n          transform: none !important;\n  top: 5px;\n}\n.custom_inputs > input{\n  text-align: right !important;\n  height: 30px !important;\n  padding-bottom: 5px;\n}\n.custom_inputs .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  text-align: right !important;\n}\n.custom_search > span {\n    position: absolute;\n    top: 10px;\n    opacity: .4;\n    color: #979797;\n}\n.custom_search input.input_control{\n  border-bottom: none !important;\n  font-size: 18px !important;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{\n  color: #9B9B9B !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2FjdGl2aXR5LXBhZ2UvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSDtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBRUE7Q0FDQyxnQkFBZ0I7RUFDZix5QkFBeUI7Q0FDMUIsa0JBQWtCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsUUFBUTtBQUNWO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2FjdGl2aXR5LXBhZ2UvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50X3dyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzZW0gYXV0bztcbn1cbi5tYXQtc2VsZWN0IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmZpbHRlcl9wYWQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcbiAgLmNvbnRlbnRfd3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDNlbSBhdXRvO1xuICB9XG4gIC5maWx0ZXJfcGFkIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLyogLnJhdGluZ3Nfc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBtYXJnaW46IDVweCAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLnJhdGluZ3Nfc2V0ID4gc3BhbntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSAqL1xuLyogLmN1c3RvbV9saW5re1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjODE4MTgxICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tX2xpbmsgaXtcbiAgICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgIHRvcDogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jdXN0b21fbGluay5pbmNvbXBsZXRlIGl7XG4gIGNvbG9yOiAjRkY1QjRCICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tX2xhYmVsIGg2e1xuICBjb2xvcjogIzgxODE4MTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59ICovXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNhcmQuaG9yaXpvbnRhbCAuY2FyZC1zdGFja2VkIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgfVxuICAuY2FyZCAuY2FyZC1hY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTI2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDM2MHB4O1xuICB9XG59XG4uc3ViLXRpdGxlLTIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5iX2NhcmRfY29udGVudCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtIDFlbSAyZW07XG59XG5cbi5iYW5uZXJfY2FyZHtcblx0bWF4LXdpZHRoOiAzMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgzMjY3RTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmFubmVyX2NhcmQgaDZ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MzI2N0U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnRuX2Jvb2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXB4O1xuICBsaW5lLWhlaWdodDogNThweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bl9ib29rID4gc3BhbjpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDAgMTVweDtcbiAgY29sb3I6ICM3YTQyN2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByaWNlX2Rpc3BsYXkgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByaWNlX2Rpc3BsYXkgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wcmljZV9kaXNwbGF5IHtcbiAgYmFja2dyb3VuZDogIzdhNDI3ZDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAxMHB4IDAgMCAyNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLyogSW5wdXQgU3R5bGluZyAqL1xuLmN1c3RvbV9pbnB1dHMgPiBsYWJlbHtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHRvcDogNXB4O1xufVxuLmN1c3RvbV9pbnB1dHMgPiBpbnB1dHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY3VzdG9tX2lucHV0cyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuLmN1c3RvbV9zZWFyY2ggPiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGNvbG9yOiAjOTc5Nzk3O1xufVxuLmN1c3RvbV9zZWFyY2ggaW5wdXQuaW5wdXRfY29udHJvbHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xuICBjb2xvcjogIzlCOUI5QiAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content_wrapper\">\n    <div class=\"row\">\n      <div class=\"col s12 m7 filter_pad\">\n        <div class=\"row\">\n          <div class=\"col s12 m5\">\n            <mat-form-field>\n              <mat-label>Filter by:</mat-label>\n               <mat-select>\n                 <mat-option *ngFor=\"let filterOption of filterOptions\" [value]=\"filterOption.value\">\n                   {{filterOption.viewValue}}\n                 </mat-option>\n               </mat-select>\n             </mat-form-field>\n          </div>\n          <div class=\"input-field col m12 custom_search\">\n            <span><i class=\"material-icons\">search</i></span>\n            <input type=\"text\" class=\"input_control full\" placeholder=\"Search by name or ticket No.\"/>\n          </div>\n           <div class=\"col s12 m12\">\n             <h6 class=\"sub-title-2\">Today, 12 Apr 2019</h6>\n           </div>\n           <div class=\"col s12 m12\">\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n             <overview-card></overview-card>\n           </div>\n        </div>\n      </div>\n      <div class=\"col s12 m5 hide-on-med-and-down\">\n        <div class=\"banner_card\">\n          <div class=\"b_card_content\">\n            <div class=\"input-field col m12 custom_inputs\">\n              <h6>Book New</h6>\n              <mat-form-field>\n                 <mat-select>\n                   <mat-option *ngFor=\"let activity of activityOptions\" [value]=\"activity.value\">\n                     {{activity.viewValue}}\n                   </mat-option>\n                 </mat-select>\n               </mat-form-field>\n            </div>\n            <div class=\"input-field col m12 custom_inputs\">\n              <!-- <mat-form-field>\n                <input matInput [matDatepicker]=\"book_date\">\n                <mat-datepicker-toggle matSuffix [for]=\"book_date\"></mat-datepicker-toggle>\n                <mat-datepicker #book_date></mat-datepicker>\n              </mat-form-field> -->\n              <label for=\"date\">Date:</label>\n              <input type=\"text\" id=\"date\" class=\"input_control full\" placeholder=\"12 Mar 2018\" />\n            </div>\n            <div class=\"input-field col m12 custom_inputs\">\n              <label for=\"time\">Time:</label>\n              <input type=\"text\" id=\"time\" class=\"input_control full\" placeholder=\"04:00 pm - 10:00 pm\" />\n            </div>\n          </div>\n          <button class=\"btn_book\">\n            <span class=\"price_display\">\n              <span>SR 0</span>\n              <span>per individual</span>\n            </span>\n            <span>\n              Book it\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationComponent", function() { return ReservationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReservationComponent = /** @class */ (function () {
    function ReservationComponent() {
        this.filterOptions = [
            { value: 'all', viewValue: 'All Activities' },
            { value: 'online', viewValue: 'Online Activities' },
            { value: 'offline', viewValue: 'Offline Activities' },
        ];
        this.activityOptions = [
            { value: 'sea', viewValue: 'Sea' },
            { value: 'land', viewValue: 'Land' },
            { value: 'sky', viewValue: 'Sky' },
        ];
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reservation',
            template: __webpack_require__(/*! ./reservation.component.html */ "./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.html"),
            styles: [__webpack_require__(/*! ./reservation.component.css */ "./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReservationComponent);
    return ReservationComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ActivityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityRoutingModule", function() { return ActivityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_activity_create_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-activity/create-activity.component */ "./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.ts");
/* harmony import */ var _activity_type_activity_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-type/activity-type.component */ "./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.ts");
/* harmony import */ var _cover_img_cover_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cover-img/cover-img.component */ "./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.ts");
/* harmony import */ var _add_on_add_on_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-on/add-on.component */ "./src/app/backpack-pro/pages/activity/add-on/add-on.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location/location.component */ "./src/app/backpack-pro/pages/activity/location/location.component.ts");
/* harmony import */ var _activity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activity.component */ "./src/app/backpack-pro/pages/activity/activity.component.ts");
/* harmony import */ var _edit_activity_page_edit_activity_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-activity-page/edit-activity-page.component */ "./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/backpack-pro/pages/activity/pricing/pricing.component.ts");
/* harmony import */ var _capacity_capacity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./capacity/capacity.component */ "./src/app/backpack-pro/pages/activity/capacity/capacity.component.ts");
/* harmony import */ var _availability_availability_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./availability/availability.component */ "./src/app/backpack-pro/pages/activity/availability/availability.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/backpack-pro/pages/activity/booking/booking.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/backpack-pro/pages/activity/rules/rules.component.ts");
/* harmony import */ var _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./organizer/organizer.component */ "./src/app/backpack-pro/pages/activity/organizer/organizer.component.ts");
/* harmony import */ var _select_add_on_select_add_on_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select-add-on/select-add-on.component */ "./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.ts");

/**
 * Created by ebuka on 07/01/2019.
 */
















var activityRoutes = [
    { path: '', component: _activity_component__WEBPACK_IMPORTED_MODULE_8__["ActivityComponent"], children: [
            { path: 'create', component: _create_activity_create_activity_component__WEBPACK_IMPORTED_MODULE_3__["CreateActivityComponent"] },
            { path: 'type', component: _activity_type_activity_type_component__WEBPACK_IMPORTED_MODULE_4__["ActivityTypeComponent"] },
            { path: 'cover', component: _cover_img_cover_img_component__WEBPACK_IMPORTED_MODULE_5__["ActivityCoverComponent"] },
            { path: 'add-on', component: _add_on_add_on_component__WEBPACK_IMPORTED_MODULE_6__["ActivityAddOnComponent"] },
            { path: 'location', component: _location_location_component__WEBPACK_IMPORTED_MODULE_7__["ActivityLocationComponent"] },
            { path: 'rules', component: _rules_rules_component__WEBPACK_IMPORTED_MODULE_14__["RulesComponent"] },
            { path: 'booking', component: _booking_booking_component__WEBPACK_IMPORTED_MODULE_13__["BookingComponent"] },
            { path: 'availability', component: _availability_availability_component__WEBPACK_IMPORTED_MODULE_12__["AvailabilityComponent"] },
            { path: 'capacity', component: _capacity_capacity_component__WEBPACK_IMPORTED_MODULE_11__["ActivityCapacityComponent"] },
            { path: 'pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__["PricingComponent"] },
            { path: 'edit', component: _edit_activity_page_edit_activity_page_component__WEBPACK_IMPORTED_MODULE_9__["EditActivityPageComponent"] },
            { path: 'organizer', component: _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_15__["OrganizerComponent"] },
            { path: 'select-add-on', component: _select_add_on_select_add_on_component__WEBPACK_IMPORTED_MODULE_16__["SelectAddOnComponent"] },
        ] }
];
var ActivityRoutingModule = /** @class */ (function () {
    function ActivityRoutingModule() {
    }
    ActivityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(activityRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ActivityRoutingModule);
    return ActivityRoutingModule;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 5em;\n  margin:auto;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 0% !important;\n  width: 100% !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n/* Card Listing  */\n.list_activities:last-child{\n  margin-bottom: 4em;\n}\n.list_activities .card-image img {\n  width: 100px !important;\n  height: 80px !important;\n}\n.list_activities label {\n  float: left;\n  position: relative;\n  top: 25px !important;\n  margin-right: 20px;\n}\n@media (min-width: 930px) {\n  .list_activities{\n    padding: 0 !important;\n  }\n}\n/* demography styling */\n.demography_style {\n  float: left;\n  width: 100%;\n  height: 80px;\n  overflow: hidden;\n}\n.demography_style li{\n  display: inline-block;\n  margin: 0 10px;\n}\n.demography_style [type=\"checkbox\"] + span:not(.lever) {\n  /* position: relative;\n  padding-left: 0;\n  margin-right: 0px;\n  float: left;\n  cursor: pointer;\n  display: inline-block;\n  height: 60px;\n  width: 60px;\n  line-height: 50px;\n  font-size: 1rem; */\n  position: relative;\n  padding-left: 0;\n  margin-right: 10px;\n  float: left;\n  cursor: pointer;\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  font-size: 1rem;\n}\n.demography_style [type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):before,\n.demography_style [type=\"checkbox\"].filled-in:checked + span:not(.lever):before{\n  border: none !important;\n}\n.demography_style [type=\"checkbox\"].filled-in:checked + span:not(.lever):after,\n.demography_style [type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):after {\n  /* height: 60px;\n  width: 60px; */\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 1px solid #FFFFFF;\n\tbox-shadow: 0 1px 4px 0 rgba(0,0,0,0.12);\n}\n.demography_style [type=\"checkbox\"].filled-in:checked + span:not(.lever):after {\n  border: 2px solid #7a427d;\n  background: transparent !important;\n}\n.males > span,\n.family > span,\n.females > span,\n.kids > span{\n  background-color: transparent !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n.males > span{\n  background-image: url('male.png');\n}\n.females > span{\n  background-image: url('female.png');\n}\n.family > span{\n  background-image: url('family.png');\n}\n.kids > span{\n  background-image: url('kid.png');\n}\n.tag_info {\n  font-size: 11px;\n  display: block;\n  width: 100%;\n  height: 25px;\n  line-height: 25px;\n  position: relative;\n  top: 55px;\n  text-align: center;\n  text-transform: capitalize;\n}\n.demography_style [type=\"checkbox\"].filled-in:checked + span:not(.lever) > .tag_info{\n  color: #7a427d;\n}\n.select_card p{\n  font-size: 14px;\n  font-weight: bold;\n  margin: 5px 0;\n  cursor: pointer;\n  padding: 5px 0 5px 15px;\n  padding: 0 0 0 15px;\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 10%;\n}\n.select_card .card{\n  border: 1px solid #c8c8c8;\n}\n.active_selected .card {\n  border: 1px solid #7a427d;\n}\n.card .card-image img {\n  height: 65px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2FjdGl2aXR5LXR5cGUvYWN0aXZpdHktdHlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQixpQkFBaUI7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFDQSx1QkFBdUI7QUFDdkI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRTs7Ozs7Ozs7O29CQVNrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUU7Z0JBQ2M7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7Q0FDMUIsd0NBQXdDO0FBQ3pDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDO0FBQ0E7Ozs7RUFJRSx3Q0FBd0M7RUFDeEMsdUNBQXVDO0VBQ3ZDLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsaUNBQTJEO0FBQzdEO0FBQ0E7RUFDRSxtQ0FBNkQ7QUFDL0Q7QUFDQTtFQUNFLG1DQUE2RDtBQUMvRDtBQUNBO0VBQ0UsZ0NBQTBEO0FBQzVEO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvYWN0aXZpdHktdHlwZS9hY3Rpdml0eS10eXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl93cmFwcGVyIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4uY3VzdG9tX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1ZW07XG4gIG1hcmdpbjphdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW5wdXQuaW5wdXRfY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jdXN0b21faW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jdXN0b21fbGFiZWwgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG4vKiBDYXJkIExpc3RpbmcgICovXG4ubGlzdF9hY3Rpdml0aWVzOmxhc3QtY2hpbGR7XG4gIG1hcmdpbi1ib3R0b206IDRlbTtcbn1cbi5saXN0X2FjdGl2aXRpZXMgLmNhcmQtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuLmxpc3RfYWN0aXZpdGllcyBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTMwcHgpIHtcbiAgLmxpc3RfYWN0aXZpdGllc3tcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIGRlbW9ncmFwaHkgc3R5bGluZyAqL1xuLmRlbW9ncmFwaHlfc3R5bGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kZW1vZ3JhcGh5X3N0eWxlIGxpe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmRlbW9ncmFwaHlfc3R5bGUgW3R5cGU9XCJjaGVja2JveFwiXSArIHNwYW46bm90KC5sZXZlcikge1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmRlbW9ncmFwaHlfc3R5bGUgW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46bm90KDpjaGVja2VkKSArIHNwYW46bm90KC5sZXZlcik6YmVmb3JlLFxuLmRlbW9ncmFwaHlfc3R5bGUgW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46Y2hlY2tlZCArIHNwYW46bm90KC5sZXZlcik6YmVmb3Jle1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kZW1vZ3JhcGh5X3N0eWxlIFt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOmNoZWNrZWQgKyBzcGFuOm5vdCgubGV2ZXIpOmFmdGVyLFxuLmRlbW9ncmFwaHlfc3R5bGUgW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46bm90KDpjaGVja2VkKSArIHNwYW46bm90KC5sZXZlcik6YWZ0ZXIge1xuICAvKiBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4OyAqL1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMik7XG59XG4uZGVtb2dyYXBoeV9zdHlsZSBbdHlwZT1cImNoZWNrYm94XCJdLmZpbGxlZC1pbjpjaGVja2VkICsgc3Bhbjpub3QoLmxldmVyKTphZnRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3YTQyN2Q7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ubWFsZXMgPiBzcGFuLFxuLmZhbWlseSA+IHNwYW4sXG4uZmVtYWxlcyA+IHNwYW4sXG4ua2lkcyA+IHNwYW57XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4ubWFsZXMgPiBzcGFue1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWFsZS5wbmcnKTtcbn1cbi5mZW1hbGVzID4gc3BhbntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ZlbWFsZS5wbmcnKTtcbn1cbi5mYW1pbHkgPiBzcGFue1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmFtaWx5LnBuZycpO1xufVxuLmtpZHMgPiBzcGFue1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcva2lkLnBuZycpO1xufVxuLnRhZ19pbmZvIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmRlbW9ncmFwaHlfc3R5bGUgW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46Y2hlY2tlZCArIHNwYW46bm90KC5sZXZlcikgPiAudGFnX2luZm97XG4gIGNvbG9yOiAjN2E0MjdkO1xufVxuLnNlbGVjdF9jYXJkIHB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDE1cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDE1cHg7XG59XG4uY29tcGxldGlvbjpiZWZvcmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTQyN2Q7XG4gIHdpZHRoOiAxMCU7XG59XG4uc2VsZWN0X2NhcmQgLmNhcmR7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG59XG4uYWN0aXZlX3NlbGVjdGVkIC5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhNDI3ZDtcbn1cbi5jYXJkIC5jYXJkLWltYWdlIGltZyB7XG4gIGhlaWdodDogNjVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Title, Type & Discription</h4>\n    <div class=\"custom_container\">\n      <form #typeForm (ngSubmit)=\"next()\">\n        <div class=\"row\">\n\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>What’s the type of activity?</h6>\n             <p>Make sure you choose the correct type to make it easer for users to find you.</p>\n           </div>\n        </div>\n        <div class=\"col s6 m4 select_card\"\n             [ngClass]=\"{'active_selected': selectedType === t.id}\"\n             (click)=\"setType(t.id)\" *ngFor=\"let t of (activityTypes$|async)\">\n          <div class=\"card\">\n            <div class=\"card-image\"><img src=\"{{t.url}}\"></div>\n            <p><span class=\"card-icon\">{{t.name}}</span></p>\n          </div>\n\n        </div>\n        <!--<div class=\"col s6 m4 select_card\">-->\n          <!--<div class=\"card\">-->\n            <!--<div class=\"card-image\"><img src=\"../../../assets/img/sea2.jpg\"></div>-->\n            <!--<p><span class=\"card-icon\">Water</span></p>-->\n          <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"col s6 m4 select_card\">-->\n          <!--<div class=\"card\">-->\n            <!--<div class=\"card-image\"><img src=\"../../../assets/img/sky1.jpg\"></div>-->\n            <!--<p><span class=\"card-icon\">Sky</span></p>-->\n          <!--</div>-->\n        <!--</div>-->\n\n            <div class=\"input-field col s12\">\n                <div class=\"custom_label\">\n                    <h6>Who can book it?</h6>\n                    <p>the demography of people who can book your activity.</p>\n                </div>\n            </div>\n            <div class=\"col s12 m12\">\n                <ul class=\"demography_style\">\n                    <!--<label formArrayName=\"orders\" *ngFor=\"let order of form.controls.orders.controls; let i = index\">-->\n                        <!--<input type=\"checkbox\" [formControlName]=\"i\">-->\n                        <!--{{orders[i].name}}-->\n                    <!--</label>-->\n                    <li\n                        *ngFor=\"let option of options; let i = index\">\n                        <label class=\"{{option.class}}\">\n                            <input type=\"checkbox\" [checked]=\"option.selected\"\n                                   class=\"filled-in\" name=\"activity_type{{i}}\" [(ngModel)]=\"option.selected\"/>\n                            <span><span class=\"tag_info\">{{option.name}}</span></span>\n                        </label>\n                    </li>\n                    <!--<li>-->\n                        <!--<label class=\"females\">-->\n                            <!--<input type=\"checkbox\" class=\"filled-in\" />-->\n                            <!--<span><span class=\"tag_info\">females</span></span>-->\n                        <!--</label>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                        <!--<label class=\"family\">-->\n                            <!--<input type=\"checkbox\" class=\"filled-in\" />-->\n                            <!--<span><span class=\"tag_info\">family</span></span>-->\n                        <!--</label>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                        <!--<label class=\"kids\">-->\n                            <!--<input type=\"checkbox\" class=\"filled-in\" />-->\n                            <!--<span><span class=\"tag_info\">kids</span></span>-->\n                        <!--</label>-->\n                    <!--</li>-->\n                </ul>\n            </div>\n            <div class=\"input-field col s12\">\n                <div class=\"custom_label\">\n                    <h6>Describe this activity</h6>\n                    <p>This paragraph will appear in the activity page under the activity name. write what you want people to know about this activity.</p>\n                </div>\n            </div>\n            <div class=\"input-field col s12\">\n                <textarea class=\"materialize-textarea input_control\" name=\"description\"\n                          [(ngModel)]=\"description\" placeholder=\"Type Here\"></textarea>\n            </div>\n\n      </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ActivityTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityTypeComponent", function() { return ActivityTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../state/activity/activity.actions */ "./src/app/state/activity/activity.actions.ts");
/* harmony import */ var _state_activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../state/activity */ "./src/app/state/activity/index.ts");






var ActivityTypeComponent = /** @class */ (function () {
    function ActivityTypeComponent(router, store) {
        this.router = router;
        this.store = store;
        this.options = [{
                "option_id": "1",
                "fromAge": "",
                "toAge": "",
                "class": "males",
                "name": "males"
            }, {
                "option_id": "2",
                "fromAge": "",
                "class": "females",
                "toAge": "",
                "name": "females"
            }, {
                "option_id": "3",
                "fromAge": "",
                "class": "males",
                "toAge": "",
                "name": "family"
            }, {
                "option_id": "4",
                "fromAge": "",
                "toAge": "",
                "class": "kids",
                "name": "kids"
            }];
    }
    ActivityTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_4__["GetActivityTypes"]());
        this.activityTypes$ = this.store.select(_state_activity__WEBPACK_IMPORTED_MODULE_5__["getActivityTypes"]);
        this.store.select(_state_activity__WEBPACK_IMPORTED_MODULE_5__["getActivity"])
            .subscribe(function (activity) {
            if (activity) {
                _this.description = activity.description;
                _this.selectedType = activity.type_id;
                for (var p = 0; p <= _this.options.length; p++) {
                    try {
                        var d = activity.activity_Option[p];
                        var aId = d.option_id ? d.option_id : d.id;
                        console.log(String(_this.options[p].option_id), String(aId), "hello");
                        if (String(_this.options[p].option_id) == String(aId)) {
                            _this.options[p]["selected"] = true;
                        }
                    }
                    catch (e) {
                        break;
                    }
                }
                console.log(_this.options);
            }
        });
    };
    // private addCheckboxes() {
    //       this.options.map((o, i) => {
    //           const control = new FormControl(i === 0); // if first item set to true, else false
    //           (this.activityTypeForm.controls.Activity_Options as FormArray).push(control);
    //       });
    //   }
    ActivityTypeComponent.prototype.next = function () {
        var data = {
            activity_Option: this.getSelectedOptions(),
            description: this.description,
            type_id: this.selectedType
        };
        if (data.activity_Option && data.description && data.type_id) {
            this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_4__["SetActivityAttr"]({ name: "activity_Option", value: data.activity_Option }));
            this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_4__["SetActivityAttr"]({ name: "description", value: data.description }));
            this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_4__["SetActivityAttr"]({ name: "type_id", value: data.type_id }));
            this.router.navigate(["/activity/cover"]);
        }
        else {
            alert("Fill all the required fileds");
        }
    };
    ActivityTypeComponent.prototype.getSelectedOptions = function () {
        return this.options.filter(function (item) {
            if (item['selected'])
                return item;
        });
    };
    ActivityTypeComponent.prototype.previous = function () {
        this.router.navigate(["/activity/create"]);
    };
    ActivityTypeComponent.prototype.setType = function (t) {
        this.selectedType = t;
    };
    ActivityTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // selector: 'activity-type',
            template: __webpack_require__(/*! ./activity-type.component.html */ "./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.html"),
            styles: [__webpack_require__(/*! ./activity-type.component.css */ "./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ActivityTypeComponent);
    return ActivityTypeComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/activity.service */ "./src/app/core/services/activity.service.ts");




var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(router, activityService) {
        this.router = router;
        this.activityService = activityService;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.activityService.setShowAddActivity(false);
    };
    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/backpack-pro/pages/activity/activity.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/activity.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/activity.module.ts ***!
  \****************************************************************/
/*! exports provided: ActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityModule", function() { return ActivityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _activity_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-routing.module */ "./src/app/backpack-pro/pages/activity/activity-routing.module.ts");
/* harmony import */ var _create_activity_create_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-activity/create-activity.component */ "./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.ts");
/* harmony import */ var _activity_type_activity_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-type/activity-type.component */ "./src/app/backpack-pro/pages/activity/activity-type/activity-type.component.ts");
/* harmony import */ var _add_on_add_on_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-on/add-on.component */ "./src/app/backpack-pro/pages/activity/add-on/add-on.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location/location.component */ "./src/app/backpack-pro/pages/activity/location/location.component.ts");
/* harmony import */ var _cover_img_cover_img_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cover-img/cover-img.component */ "./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.ts");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _activity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./activity.component */ "./src/app/backpack-pro/pages/activity/activity.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/backpack-pro/pages/activity/rules/rules.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/backpack-pro/pages/activity/booking/booking.component.ts");
/* harmony import */ var _availability_availability_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./availability/availability.component */ "./src/app/backpack-pro/pages/activity/availability/availability.component.ts");
/* harmony import */ var _capacity_capacity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./capacity/capacity.component */ "./src/app/backpack-pro/pages/activity/capacity/capacity.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/backpack-pro/pages/activity/pricing/pricing.component.ts");
/* harmony import */ var _edit_activity_page_edit_activity_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-activity-page/edit-activity-page.component */ "./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.ts");
/* harmony import */ var _edit_activity_page_activity_info_activity_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-activity-page/activity-info/activity-info.component */ "./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.ts");
/* harmony import */ var _edit_activity_page_booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit-activity-page/booking-settings/booking-settings.component */ "./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.ts");
/* harmony import */ var _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./organizer/organizer.component */ "./src/app/backpack-pro/pages/activity/organizer/organizer.component.ts");
/* harmony import */ var _common_book_panel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/book-panel.component */ "./src/app/common/book-panel.component.ts");
/* harmony import */ var _select_add_on_select_add_on_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./select-add-on/select-add-on.component */ "./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.ts");
/* harmony import */ var _activity_page_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./activity-page/reservation/reservation.component */ "./src/app/backpack-pro/pages/activity/activity-page/reservation/reservation.component.ts");
/* harmony import */ var _activity_page_log_log_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./activity-page/log/log.component */ "./src/app/backpack-pro/pages/activity/activity-page/log/log.component.ts");
/* harmony import */ var _edit_activity_page_photo_pad_photo_pad_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../edit-activity-page/photo-pad/photo-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.ts");
/* harmony import */ var _common_status_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/status-card.component */ "./src/app/common/status-card.component.ts");
/* harmony import */ var _edit_activity_page_type_type_pad_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../edit-activity-page/type/type-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.ts");
/* harmony import */ var _edit_activity_page_location_pad_location_pad_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../edit-activity-page/location-pad/location-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.ts");
/* harmony import */ var _edit_activity_page_addon_pad_addon_pad_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../edit-activity-page/addon-pad/addon-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.ts");
/* harmony import */ var _edit_activity_page_rules_pad_rules_pad_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../edit-activity-page/rules-pad/rules-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.ts");
/* harmony import */ var _edit_activity_page_book_pad_book_pad_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../edit-activity-page/book-pad/book-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.ts");
/* harmony import */ var _edit_activity_page_available_pad_availability_pad_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../edit-activity-page/available-pad/availability-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.ts");
/* harmony import */ var _edit_activity_page_length_pad_length_pad_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../edit-activity-page/length-pad/length-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.ts");
/* harmony import */ var _edit_activity_page_pricing_pad_pricing_pad_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../edit-activity-page/pricing-pad/pricing-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.ts");
/* harmony import */ var _edit_activity_page_organizer_pad_organizer_pad_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../edit-activity-page/organizer-pad/organizer-pad.component */ "./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.ts");
/* harmony import */ var _common_activity_book_panel_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../common/activity-book-panel.component */ "./src/app/common/activity-book-panel.component.ts");




































var ActivityModule = /** @class */ (function () {
    function ActivityModule() {
    }
    ActivityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _create_activity_create_activity_component__WEBPACK_IMPORTED_MODULE_4__["CreateActivityComponent"],
                _activity_type_activity_type_component__WEBPACK_IMPORTED_MODULE_5__["ActivityTypeComponent"],
                _cover_img_cover_img_component__WEBPACK_IMPORTED_MODULE_8__["ActivityCoverComponent"],
                _location_location_component__WEBPACK_IMPORTED_MODULE_7__["ActivityLocationComponent"],
                _add_on_add_on_component__WEBPACK_IMPORTED_MODULE_6__["ActivityAddOnComponent"],
                _activity_component__WEBPACK_IMPORTED_MODULE_10__["ActivityComponent"],
                _rules_rules_component__WEBPACK_IMPORTED_MODULE_11__["RulesComponent"],
                _booking_booking_component__WEBPACK_IMPORTED_MODULE_12__["BookingComponent"],
                _availability_availability_component__WEBPACK_IMPORTED_MODULE_13__["AvailabilityComponent"],
                _capacity_capacity_component__WEBPACK_IMPORTED_MODULE_14__["ActivityCapacityComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__["PricingComponent"],
                _edit_activity_page_edit_activity_page_component__WEBPACK_IMPORTED_MODULE_16__["EditActivityPageComponent"],
                _edit_activity_page_activity_info_activity_info_component__WEBPACK_IMPORTED_MODULE_17__["EditActivityInfoComponent"],
                _edit_activity_page_booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_18__["AcivityBookingSettingsComponent"],
                _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_19__["OrganizerComponent"],
                _common_book_panel_component__WEBPACK_IMPORTED_MODULE_20__["BookPanelComponent"],
                _select_add_on_select_add_on_component__WEBPACK_IMPORTED_MODULE_21__["SelectAddOnComponent"],
                _activity_page_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_22__["ReservationComponent"],
                _activity_page_log_log_component__WEBPACK_IMPORTED_MODULE_23__["ActivityLogComponent"],
                _edit_activity_page_activity_info_activity_info_component__WEBPACK_IMPORTED_MODULE_17__["EditActivityInfoComponent"],
                _edit_activity_page_booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_18__["AcivityBookingSettingsComponent"],
                _edit_activity_page_photo_pad_photo_pad_component__WEBPACK_IMPORTED_MODULE_24__["PhotoPadComponent"],
                _common_status_card_component__WEBPACK_IMPORTED_MODULE_25__["StatusCardComponent"],
                _edit_activity_page_type_type_pad_component__WEBPACK_IMPORTED_MODULE_26__["TypePadComponent"],
                _edit_activity_page_location_pad_location_pad_component__WEBPACK_IMPORTED_MODULE_27__["LocationPadComponent"],
                _edit_activity_page_addon_pad_addon_pad_component__WEBPACK_IMPORTED_MODULE_28__["AddonPadComponent"],
                _edit_activity_page_rules_pad_rules_pad_component__WEBPACK_IMPORTED_MODULE_29__["RulesPadComponent"],
                _edit_activity_page_book_pad_book_pad_component__WEBPACK_IMPORTED_MODULE_30__["BookPadComponent"],
                _edit_activity_page_available_pad_availability_pad_component__WEBPACK_IMPORTED_MODULE_31__["AvailabilityPadComponent"],
                _edit_activity_page_length_pad_length_pad_component__WEBPACK_IMPORTED_MODULE_32__["LengthPadComponent"],
                _edit_activity_page_pricing_pad_pricing_pad_component__WEBPACK_IMPORTED_MODULE_33__["PricingPadComponent"],
                _edit_activity_page_organizer_pad_organizer_pad_component__WEBPACK_IMPORTED_MODULE_34__["OrganizerPadComponent"],
                _common_activity_book_panel_component__WEBPACK_IMPORTED_MODULE_35__["ActivityBookPanelComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _activity_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivityRoutingModule"],
            ]
        })
    ], ActivityModule);
    return ActivityModule;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/add-on/add-on.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/add-on/add-on.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 0% !important;\n  height: 20px !important;\n  width: 100% !important;\n  padding-bottom: 3px !important;\n  margin-bottom: 10px !important;\n  font-size: 13px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n.cancel_it {\n  position: absolute;\n  right: 0;\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 35%;\n}\n.addon_card{\n  padding: 10px 15px;\n\tmin-height: 120px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 9px 4px 0px rgba(0, 0, 0, -0.88);\n}\n.addon_card label {\n  float: left;\n  width: 30% !important;\n  height: 20px !important;\n  line-height: 30px !important;\n  color: #666666 !important;\n}\n.addons-listing {\n  margin: 0 10px 10px;\n  text-transform: capitalize;\n  color: #7a427d;\n}\n.addon_card input.input_control.half {\n  padding-left: 0% !important;\n  width: 65% !important;\n  height: 29px !important;\n  line-height: 20px;\n  padding-bottom: 0px !important;\n  float: right !important;\n  text-align: center;\n}\n/* Add Addons  */\n.addons-plus > span {\n  font-size: 40px;\n  float: left;\n  margin-right: 10px;\n  color: #FF5B4B;\n}\n.addons-plus {\n  float: left;\n  width: 100%;\n  height: 50px;\n  line-height: 40px;\n  font-size: 18px;\n  color: #83267E;\n  font-weight: 600;\n  margin: 10px 0;\n  /* cursor: pointer; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2FkZC1vbi9hZGQtb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEIsaUJBQWlCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0NBQ25CLGlCQUFpQjtFQUNoQiw4RUFBOEU7QUFDaEY7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvYWRkLW9uL2FkZC1vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fd3JhcHBlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuLmN1c3RvbV9jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNGVtO1xuICBtYXJnaW46IDFlbSBhdXRvIDRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlucHV0LmlucHV0X2NvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbV9pbnB1dHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jdXN0b21fbGFiZWwgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG4uY2FuY2VsX2l0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbi5jb21wbGV0aW9uOmJlZm9yZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNDI3ZDtcbiAgd2lkdGg6IDM1JTtcbn1cbi5hZGRvbl9jYXJke1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgOXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAtMC44OCk7XG59XG4uYWRkb25fY2FyZCBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzY2NjY2NiAhaW1wb3J0YW50O1xufVxuLmFkZG9ucy1saXN0aW5nIHtcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjN2E0MjdkO1xufVxuLmFkZG9uX2NhcmQgaW5wdXQuaW5wdXRfY29udHJvbC5oYWxmIHtcbiAgcGFkZGluZy1sZWZ0OiAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLyogQWRkIEFkZG9ucyAgKi9cbi5hZGRvbnMtcGx1cyA+IHNwYW4ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjRkY1QjRCO1xufVxuLmFkZG9ucy1wbHVzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjODMyNjdFO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/add-on/add-on.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/add-on/add-on.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Add-on’s</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>The activity will include the following</h6>\n             <p>If an add-on does not includes a price that means it’s included for free for everyone.</p>\n             <p>You can tag another provider in an add-on if it’s not provided by you.</p>\n           </div>\n        </div>\n        <div class=\"input-field col s12\">\n          <a href=\"\">\n            <div class=\"addons-plus\">\n              <span class=\"material-icons\">add</span>\n              Add new add-on\n            </div>\n          </a>\n        </div>\n        <div class=\"input-field col s12\">\n          <div class=\"card addon_card\">\n            <span class=\"cancel_it\"><i class=\"remove\">x</i></span>\n            <div class=\"row\">\n              <ul class=\"addons-listing\">\n                <li>oxygen tank</li>\n                <li>snorkle</li>\n              </ul>\n              <div class=\"col s12 m12\">\n                 <input type=\"text\" class=\"input_control\" placeholder=\"to and from activity location\" id=\"price\" />\n              </div>\n              <div class=\"col s12 m5\">\n                <label for=\"price\">Price:</label>\n                 <input type=\"text\" class=\"input_control half\" id=\"price\" />\n              </div>\n              <div class=\"col s12 m7\">\n                <label for=\"price\">Provider:</label>\n                <input type=\"text\" class=\"input_control half\" id=\"price\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/add-on/add-on.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/add-on/add-on.component.ts ***!
  \************************************************************************/
/*! exports provided: ActivityAddOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityAddOnComponent", function() { return ActivityAddOnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ActivityAddOnComponent = /** @class */ (function () {
    function ActivityAddOnComponent(router) {
        this.router = router;
        this.addOns = [
            { value: 'transport', viewValue: 'Transport' },
            { value: 'food', viewValue: 'Food' },
            { value: 'Safari', viewValue: 'Safari' },
        ];
    }
    ActivityAddOnComponent.prototype.ngOnInit = function () {
    };
    ActivityAddOnComponent.prototype.previous = function () {
        this.router.navigate(["/activity/select-add-on"]);
    };
    ActivityAddOnComponent.prototype.next = function () {
        this.router.navigate(["/activity/location"]);
    };
    ActivityAddOnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-on',
            template: __webpack_require__(/*! ./add-on.component.html */ "./src/app/backpack-pro/pages/activity/add-on/add-on.component.html"),
            styles: [__webpack_require__(/*! ./add-on.component.css */ "./src/app/backpack-pro/pages/activity/add-on/add-on.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ActivityAddOnComponent);
    return ActivityAddOnComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/availability/availability.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/availability/availability.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 5px !important;\n  height: 20px !important;\n  width: 100% !important;\n  padding-bottom: 3px !important;\n  margin-bottom: 10px !important;\n  font-size: 15px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n@media (min-width: 930px) {\n\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 70%;\n}\n.list-addons > div {\n  width: 100%;\n  float: left;\n  color: #818181;\n  border-top: 1px solid rgba(0,0,0,.03);\n  padding: 5px;\n  font-size: 14px;\n  height: 50px;\n  line-height: 35px;\n  display: flex;\n  position: relative;\n}\n.list-addons > div:last-child{\n  margin-bottom: 20px;\n  border-bottom: 1px solid rgba(0,0,0,.03);\n}\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):after {\n  border: 2px solid #acacac;\n  background-color: #ffffff !important;\n}\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):before {\n  border-right: 2px solid #ee5547;\n  border-bottom: 2px solid #ee5547;\n}\n[type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):after {\n  border: 2px solid #acacac;\n}\n[type=\"checkbox\"] + span:not(.lever){\n  line-height: 20px;\n}\n.label_p{\n  margin-bottom: 10px;\n}\n.carded{\n  padding: 2em 2em 1em;\n  margin-bottom: 2em;\n}\n.carded > label{\n  font-size: 14px;\n  color: #666666;\n  line-height: 20px;\n  margin-bottom: 10px;\n  display: block;\n}\n.flex-inputs{\n  display: flex\n}\n.flex-inputs > *{\n  min-width: 15%;\n  margin: 5px;\n}\n.flex-inputs label{\n  position: relative !important;\n  top: 0;\n  -webkit-transform: none !important;\n          transform: none !important;\n  left: 0;\n  margin-left: 0;\n}\n.private_group,\n.individual {\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2F2YWlsYWJpbGl0eS9hdmFpbGFiaWxpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEIsaUJBQWlCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBOztBQUVBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsTUFBTTtFQUNOLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsT0FBTztFQUNQLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2JhY2twYWNrLXByby9wYWdlcy9hY3Rpdml0eS9hdmFpbGFiaWxpdHkvYXZhaWxhYmlsaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl93cmFwcGVyIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4uY3VzdG9tX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA0ZW07XG4gIG1hcmdpbjogMWVtIGF1dG8gNGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW5wdXQuaW5wdXRfY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbV9pbnB1dHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmN1c3RvbV9sYWJlbCBwe1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogI0JBQkFCQTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkzMHB4KSB7XG5cbn1cbi5jb21wbGV0aW9uOmJlZm9yZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNDI3ZDtcbiAgd2lkdGg6IDcwJTtcbn1cbi5saXN0LWFkZG9ucyA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4wMyk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGlzdC1hZGRvbnMgPiBkaXY6bGFzdC1jaGlsZHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjAzKTtcbn1cblt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOmNoZWNrZWQgKyBzcGFuOm5vdCgubGV2ZXIpOmFmdGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2FjYWNhYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46Y2hlY2tlZCArIHNwYW46bm90KC5sZXZlcik6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2VlNTU0NztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZTU1NDc7XG59XG5bdHlwZT1cImNoZWNrYm94XCJdLmZpbGxlZC1pbjpub3QoOmNoZWNrZWQpICsgc3Bhbjpub3QoLmxldmVyKTphZnRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhY2FjYWM7XG59XG5bdHlwZT1cImNoZWNrYm94XCJdICsgc3Bhbjpub3QoLmxldmVyKXtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubGFiZWxfcHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJkZWR7XG4gIHBhZGRpbmc6IDJlbSAyZW0gMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uY2FyZGVkID4gbGFiZWx7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mbGV4LWlucHV0c3tcbiAgZGlzcGxheTogZmxleFxufVxuLmZsZXgtaW5wdXRzID4gKntcbiAgbWluLXdpZHRoOiAxNSU7XG4gIG1hcmdpbjogNXB4O1xufVxuLmZsZXgtaW5wdXRzIGxhYmVse1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ucHJpdmF0ZV9ncm91cCxcbi5pbmRpdmlkdWFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/availability/availability.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/availability/availability.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Availability</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Activity available times</h6>\n             <p>If you add the same time for Individuals and Private groups, you will have 2 different trips in the same time. One for individuals and one for Private groups.</p>\n             <p>You can skip this step and do it from the activity calender if you have a spacific date.</p>\n           </div>\n        </div>\n        <form #addForm=\"ngForm\" (ngSubmit)=\"add()\">\n          <div class=\"input-field col s12 m12\">\n            <div class=\"card carded\">\n              <label class=\"custom_tag_label\">is it for individuals or private groups?</label>\n              <div class=\"label_p\">\n                <label>\n                  <input type=\"checkbox\" name=\"individual\" class=\"filled-in\"\n                         [(ngModel)]=\"avalModel.individual\"  />\n                  <span>Individual</span>\n                </label>\n              </div>\n              <div class=\"label_p\">\n                <label>\n                  <input type=\"checkbox\" name=\"group\" class=\"filled-in\"\n                         [(ngModel)]=\"avalModel.group\"\n                          />\n                  <span>Private Groups</span>\n                </label>\n              </div>\n              <label class=\"custom_tag_label\">is it for individuals or private groups?</label>\n              <div class=\"row\">\n                <div class=\"input-field col s12 m12 flex-inputs\">\n                  <!--<label for=\"start_time\">Start:</label>-->\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput [matDatepicker]=\"start\"\n                           [max]=\"avalModel.activity_end\"\n                           name=\"activity_start\"\n                           [(ngModel)]=\"avalModel.activity_start\"\n                           placeholder=\"Choose a date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"start\"></mat-datepicker-toggle>\n                    <mat-datepicker #start></mat-datepicker>\n                  </mat-form-field>\n\n                  <!--<input id=\"start_time\" type=\"text\" placeholder=\"Day\" class=\"input_control half\" />-->\n                  <input type=\"text\" placeholder=\"HH:MM\"\n                         name=\"activity_start_time\"\n                         [(ngModel)]=\"avalModel.activity_start_time\"\n                         class=\"input_control half\" />\n                </div>\n                <div class=\"input-field col s12 m12 flex-inputs\">\n                  <!--<label for=\"end_time\">End:</label>-->\n                  <!--<input id=\"end_time\" type=\"text\" placeholder=\"Day\" class=\"input_control half\"  />-->\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput [matDatepicker]=\"end\"\n                           name=\"activity_end\"\n                           [min]=\"avalModel.activity_start\"\n                           [(ngModel)]=\"avalModel.activity_end\"\n                           placeholder=\"Choose a date\">\n                    <mat-datepicker-toggle  matSuffix [for]=\"end\"></mat-datepicker-toggle>\n                    <mat-datepicker #end></mat-datepicker>\n                  </mat-form-field>\n                  <input  type=\"text\" placeholder=\"HH:MM\"\n                          name=\"activity_end_time\"\n                          [(ngModel)]=\"avalModel.activity_end_time\"\n                          class=\"input_control half\" />\n                </div>\n                <div class=\"input-field col s12 text-center\">\n                  <button class=\"btn_add_card\" type=\"submit\">Add</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"row\">\n          <div class=\"col s12 m12\">\n            <div class=\"list-addons\">\n              <div *ngFor=\"let avail of avalibilityModels; let i = index\">\n                <i class=\"remove\" (click)=\"remove(i)\">x</i>\n                {{avail.activity_Start | date:'mediumTime'}} - {{avail.activity_End | date:'mediumTime'}}\n                <span [ngClass]=\"{'individual': !avail.isForGroup, 'private_group': avail.isForGroup}\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/availability/availability.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/availability/availability.component.ts ***!
  \************************************************************************************/
/*! exports provided: AvailabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityComponent", function() { return AvailabilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AvailabilityComponent = /** @class */ (function () {
    function AvailabilityComponent(router) {
        this.router = router;
        this.status = false;
        this.avalModel = {
            "activity_start": null,
            "activity_start_time": null,
            "activity_end": null,
            "activity_end_time": null,
            "individual": false,
            "group": false,
        };
        this.avalibilityModels = [];
        this.addOns = [
            { name: 'oxygen tank' },
            { name: 'fins' },
            { name: 'on road' },
            { name: 'snorkle goggles' }
        ];
    }
    AvailabilityComponent.prototype.ngOnInit = function () {
    };
    AvailabilityComponent.prototype.previous = function () {
        this.router.navigate(["/activity/booking"]);
    };
    AvailabilityComponent.prototype.next = function () {
        this.router.navigate(["/activity/capacity"]);
    };
    AvailabilityComponent.prototype.add = function () {
        if (this.avalModel.individual && this.avalModel.group) {
            // add for group
            this.avalibilityModels.push({
                "activity_Start": this.avalModel.activity_start,
                "activity_End": this.avalModel.activity_end,
                "isForGroup": true,
            });
            // add for individual
            this.avalibilityModels.push({
                "activity_Start": this.avalModel.activity_start,
                "activity_End": this.avalModel.activity_end,
                "isForGroup": false,
            });
        }
        else {
            this.avalibilityModels.push({
                "activity_Start": this.avalModel.activity_start,
                "activity_End": this.avalModel.activity_end,
                "isForGroup": this.avalModel.group,
            });
        }
        console.log(this.avalibilityModels);
        this.avalModel = {
            "activity_start": null,
            "activity_start_time": null,
            "activity_end": null,
            "activity_end_time": null,
            "individual": false,
            "group": false,
        };
    };
    AvailabilityComponent.prototype.remove = function (index) {
        this.avalibilityModels.splice(index, 1);
    };
    AvailabilityComponent.prototype.onSelect = function (individual) {
        // Add class and get selected
    };
    AvailabilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'availability',
            template: __webpack_require__(/*! ./availability.component.html */ "./src/app/backpack-pro/pages/activity/availability/availability.component.html"),
            styles: [__webpack_require__(/*! ./availability.component.css */ "./src/app/backpack-pro/pages/activity/availability/availability.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AvailabilityComponent);
    return AvailabilityComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/booking/booking.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/booking/booking.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 5px !important;\n  height: 47px !important;\n  width: 100% !important;\n  padding-bottom: 3px !important;\n  margin-bottom: 10px !important;\n  font-size: 15px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n@media (min-width: 930px) {\n\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 60%;\n}\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):after {\n  border: 2px solid #acacac;\n  background-color: #ffffff !important;\n}\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):before {\n  border-right: 2px solid #ee5547;\n  border-bottom: 2px solid #ee5547;\n}\n[type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):after {\n  border: 2px solid #acacac;\n}\n.label_p {\n  display: flex;\n  line-height: 20px;\n  padding: 20px 0 0;\n  color: #979797;\n}\n.label_p p{\n  margin-top: 0;\n  font-size: 13px;\n  line-height: 16px;\n}\n.label_p label {\n  height: 20px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n}\n.label_p h6{\n  margin-top: 0;\n  color: #666666;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQixpQkFBaUI7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBRUE7O0FBRUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fd3JhcHBlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuLmN1c3RvbV9jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNGVtO1xuICBtYXJnaW46IDFlbSBhdXRvIDRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlucHV0LmlucHV0X2NvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b21faW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jdXN0b21fbGFiZWwgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MzBweCkge1xuXG59XG4uY29tcGxldGlvbjpiZWZvcmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTQyN2Q7XG4gIHdpZHRoOiA2MCU7XG59XG5bdHlwZT1cImNoZWNrYm94XCJdLmZpbGxlZC1pbjpjaGVja2VkICsgc3Bhbjpub3QoLmxldmVyKTphZnRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhY2FjYWM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOmNoZWNrZWQgKyBzcGFuOm5vdCgubGV2ZXIpOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNlZTU1NDc7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWU1NTQ3O1xufVxuW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46bm90KDpjaGVja2VkKSArIHNwYW46bm90KC5sZXZlcik6YWZ0ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYWNhY2FjO1xufVxuLmxhYmVsX3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMjBweCAwIDA7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuLmxhYmVsX3AgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5sYWJlbF9wIGxhYmVsIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubGFiZWxfcCBoNntcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/booking/booking.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/booking/booking.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <form #booking=\"ngForm\" (ngSubmit)=\"next(booking)\">\n     <div class=\"container-fluid\">\n         <div class=\"main_wrapper\">\n             <h4 class=\"custom-header-title\">Booking Prefrences</h4>\n             <div class=\"custom_container\">\n                 <div class=\"row\">\n                     <div class=\"input-field col s12\">\n                         <div class=\"custom_label\">\n                             <h6>Notice in advance</h6>\n                             <p>At this time before the activity starts, users won’t be able to book this activity.</p>\n                         </div>\n                     </div>\n                     <div class=\"input-field col s4 m4\">\n                         <input type=\"text\" class=\"input_control full\"\n                                [(ngModel)]=\"preference.notice_in_advance\"\n                                name=\"notice_in_advance\"\n                                required\n                         />\n                     </div>\n                     <div class=\"input-field col s8 m8\">\n                         <mat-form-field>\n                             <mat-select>\n                                 <mat-option *ngFor=\"let timing of timingOptions\" [value]=\"timing.value\">\n                                     {{timing.viewValue}}\n                                 </mat-option>\n                             </mat-select>\n                         </mat-form-field>\n                     </div>\n                 </div>\n                 <div class=\"row\">\n                     <div class=\"input-field col s12\">\n                         <div class=\"custom_label\">\n                             <h6>Booking window</h6>\n                             <p>When do you want users to start booking this activity?</p>\n                         </div>\n                     </div>\n                     <div class=\"input-field col s12\">\n                         <mat-form-field>\n                             <mat-select [(ngModel)]=\"preference.booking_window\"\n                                         name=\"booking_window\"\n                                         required>\n                                 <mat-option *ngFor=\"let openWindow of openWindows\" [value]=\"openWindow.value\">\n                                     {{openWindow.viewValue}}\n                                 </mat-option>\n                             </mat-select>\n                         </mat-form-field>\n                     </div>\n                 </div>\n                 <div class=\"row\">\n                     <div class=\"input-field col s12\">\n                         <div class=\"custom_label\">\n                             <h6>Activity will be available for</h6>\n                             <p>When do you want users to start booking this activity?</p>\n                         </div>\n                         <div class=\"label_p\">\n                             <label>\n                                 <input type=\"checkbox\" name=\"bookingAvailableForIndividuals\"\n                                        class=\"filled-in\" [(ngModel)]=\"preference.bookingAvailableForIndividuals\"   />\n                                 <span></span>\n                             </label>\n                             <div class=\"content-view\">\n                                 <h6>Individuals</h6>\n                                 <p><span class=\"individual\"></span>Users can book this activity as individuals.</p>\n                             </div>\n                         </div>\n                         <div class=\"label_p\">\n                             <label>\n                                 <input type=\"checkbox\" name=\"bookingAvailableForGroups\" class=\"filled-in\"\n                                        [(ngModel)]=\"preference.bookingAvailableForGroups\"  />\n                                 <span></span>\n                             </label>\n                             <div class=\"content-view\">\n                                 <h6>Private Groups</h6>\n                                 <p><span class=\"private_group\"></span>User can book the whole activity for their own private group.</p>\n                             </div>\n                         </div>\n                     </div>\n                 </div>\n             </div>\n         </div>\n         <div class=\"tab-footer\">\n             <div class=\"completion\"></div>\n             <div class=\"btn_settings\">\n                 <button class=\"btn_cancel btn\"(click)=\"previous()\">Back</button>\n                 <button class=\"btn_next btn\" type=\"submit\" >Next</button>\n             </div>\n         </div>\n     </div>\n </form>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/booking/booking.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/booking/booking.component.ts ***!
  \**************************************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BookingComponent = /** @class */ (function () {
    function BookingComponent(router) {
        this.router = router;
        this.preference = {
            "notice_in_advance": null,
            "booking_window": null,
            "bookingAvailableForIndividuals": false,
            "bookingAvailableForGroups": false
        };
        this.status = false;
        this.openWindows = [
            { value: '1 week', viewValue: '1 Week' },
            { value: '2 weeks', viewValue: '2 weeks' },
            { value: '3 weeks', viewValue: '3 weeks' },
        ];
        this.timingOptions = [
            { value: 'minutes', viewValue: 'minutes' },
            { value: 'hours', viewValue: 'hours' },
            { value: 'days', viewValue: 'days' },
        ];
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent.prototype.selectAddOns = function (addon) {
        // Add class and get selected
    };
    BookingComponent.prototype.onSelect = function () {
        // select individual or private_group
    };
    BookingComponent.prototype.next = function () {
        console.log(this.preference);
        this.router.navigate(["/activity/availability"]);
    };
    BookingComponent.prototype.previous = function () {
        this.router.navigate(["/activity/location"]);
    };
    BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/backpack-pro/pages/activity/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/backpack-pro/pages/activity/booking/booking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/capacity/capacity.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/capacity/capacity.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n  height: 47px !important;\n  width: 100% !important;\n  padding-bottom: 3px !important;\n  margin-bottom: 10px !important;\n  font-size: 15px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n@media (min-width: 930px) {\n\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 80%;\n}\n.mat-select-trigger {\n    height: 40px;\n}\n.flex-inputs{\n  display: flex\n}\n.flex-inputs > *{\n  min-width: 30%;\n  margin: 0 5px 0 0;\n}\n.flex-inputs .f_slash{\n  text-align: center;\n  opacity: .5;\n}\n.flex-inputs .f_slash:before{\n  content: '';\n  line-height: 55px;\n  height: 1px;\n  background: #ccc;\n}\n.carded {\n  box-shadow: 0px 1px 2px 1px #f3f3f3;\n  padding: 5px 0 !important;\n}\n.header_title {\n  display: flex;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03) !important;\n}\n.header_title > *{\n  width: 50%;\n  padding: .5em 0 .5em 2em;\n  font-size: 14px;\n  font-weight: 600;\n}\n.body_style{\n  padding: 0 2em;\n  width: 100%;\n  float: left;\n}\n.item_list{\n  display: flex;\n  height: 45px;\n  line-height: 35px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n  width: 100%;\n  float: left;\n}\n.item_list > div{\n  padding: 5px;\n  color: #9B9B9B;\n}\n.item_list > div:first-child{\n  width: 60%;\n}\n.header_title > div:last-child,\n.item_list > div:last-child,\n.item_list > input:last-child{\n  width: 40% !important;\n  text-align: right ;\n  opacity: .5;\n}\n.item_list:last-child{\n  margin-bottom: 10px;\n}\n.item_list > input{\n  border-bottom: none !important;\n}\n.p_label {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2NhcGFjaXR5L2NhcGFjaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCLGlCQUFpQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBRUE7O0FBRUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTs7O0VBR0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvY2FwYWNpdHkvY2FwYWNpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX3dyYXBwZXIgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgxODE4MTtcbn1cbi5jdXN0b21fY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDRlbTtcbiAgbWFyZ2luOiAxZW0gYXV0byA0ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pbnB1dC5pbnB1dF9jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi5jdXN0b21faW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY3VzdG9tX2xhYmVsIHB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjQkFCQUJBO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTMwcHgpIHtcblxufVxuLmNvbXBsZXRpb246YmVmb3Jle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E0MjdkO1xuICB3aWR0aDogODAlO1xufVxuLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLmZsZXgtaW5wdXRze1xuICBkaXNwbGF5OiBmbGV4XG59XG4uZmxleC1pbnB1dHMgPiAqe1xuICBtaW4td2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAwIDVweCAwIDA7XG59XG4uZmxleC1pbnB1dHMgLmZfc2xhc2h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogLjU7XG59XG4uZmxleC1pbnB1dHMgLmZfc2xhc2g6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLmNhcmRlZCB7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDFweCAjZjNmM2YzO1xuICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMykgIWltcG9ydGFudDtcbn1cbi5oZWFkZXJfdGl0bGUgPiAqe1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAuNWVtIDAgLjVlbSAyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ib2R5X3N0eWxle1xuICBwYWRkaW5nOiAwIDJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLml0ZW1fbGlzdHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5pdGVtX2xpc3QgPiBkaXZ7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM5QjlCOUI7XG59XG4uaXRlbV9saXN0ID4gZGl2OmZpcnN0LWNoaWxke1xuICB3aWR0aDogNjAlO1xufVxuLmhlYWRlcl90aXRsZSA+IGRpdjpsYXN0LWNoaWxkLFxuLml0ZW1fbGlzdCA+IGRpdjpsYXN0LWNoaWxkLFxuLml0ZW1fbGlzdCA+IGlucHV0Omxhc3QtY2hpbGR7XG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQgO1xuICBvcGFjaXR5OiAuNTtcbn1cbi5pdGVtX2xpc3Q6bGFzdC1jaGlsZHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pdGVtX2xpc3QgPiBpbnB1dHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnBfbGFiZWwge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/capacity/capacity.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/capacity/capacity.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Length and capacity</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Activity Length</h6>\n             <p>How long does this activity lasts for?</p>\n           </div>\n        </div>\n        <div class=\"input-field col s4 m4\">\n          <input type=\"text\" class=\"input_control full\" />\n        </div>\n        <div class=\"input-field col s8 m8\">\n          <mat-form-field>\n             <mat-select>\n               <mat-option *ngFor=\"let timing of timingOptions\" [value]=\"timing.value\">\n                 {{timing.viewValue}}\n               </mat-option>\n             </mat-select>\n           </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Capacity</h6>\n             <p>How many users can book this activity in the same time?</p>\n           </div>\n        </div>\n        <div class=\"input-field col s8 m8\">\n          <p class=\"p_label\">Do you have different categories for individules?</p>\n        </div>\n        <div class=\"input-field col s4 m4\">\n          <mat-form-field>\n            <mat-select>\n              <mat-option *ngFor=\"let option of twoOption\" [value]=\"option.value\">\n                {{option.viewValue}}\n              </mat-option>\n            </mat-select>\n           </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s8 m8\">\n          <p class=\"p_label\">Does each category have a spacefic capacity?</p>\n        </div>\n        <div class=\"input-field col s4 m4\">\n          <mat-form-field>\n            <mat-select>\n              <mat-option *ngFor=\"let option of twoOption\" [value]=\"option.value\">\n                {{option.viewValue}}\n              </mat-option>\n            </mat-select>\n           </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m12 carded\">\n          <div class=\"table_style\">\n            <div class=\"header_title\">\n              <div>Categories</div>\n              <div>Capacity</div>\n            </div>\n            <div class=\"body_style\">\n              <div class=\"item_list\">\n                <div><i class=\"remove\">x</i> Adult</div>\n                <div>NA</div>\n              </div>\n              <div class=\"item_list\">\n                <div><i class=\"remove\">x</i> Senior</div>\n                <div>NA</div>\n              </div>\n              <div class=\"item_list\">\n                <div><i class=\"remove\">x</i> Senior</div>\n                <div>NA</div>\n              </div>\n              <div class=\"item_list\">\n                <div><i class=\"remove\">x</i> Senior</div>\n                <div>NA</div>\n              </div>\n              <div class=\"input-field item_list\">\n                <input type=\"text\" class=\"input_control full\" placeholder=\"Category Name\" />\n                <input type=\"text\" class=\"input_control full\" placeholder=\"NA\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s8 m8\">\n          <p class=\"p_label\">What is the cpacity number for this activity?</p>\n        </div>\n        <div class=\"input-field col s4 m4\">\n          <input type=\"text\" class=\"input_control full text-center\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12 m7\">\n          <p class=\"p_label\">What’s the max and min number for private group?</p>\n        </div>\n        <div class=\"input-field col s12 m5 flex-inputs\">\n          <input type=\"text\" class=\"input_control full\" placeholder=\"min\" /> <span class=\"f_slash\">-</span>\n          <input type=\"text\" class=\"input_control full\" placeholder=\"max\" />\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/capacity/capacity.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/capacity/capacity.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActivityCapacityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityCapacityComponent", function() { return ActivityCapacityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ActivityCapacityComponent = /** @class */ (function () {
    function ActivityCapacityComponent(router) {
        this.router = router;
        this.status = false;
        this.twoOption = [
            { value: 'yes', viewValue: 'Yes' },
            { value: 'no', viewValue: 'No' },
        ];
        this.openWindows = [
            { value: '1 week', viewValue: '1 Week' },
            { value: '2 weeks', viewValue: '2 weeks' },
            { value: '3 weeks', viewValue: '3 weeks' },
        ];
        this.timingOptions = [
            { value: 'minutes', viewValue: 'minutes' },
            { value: 'hours', viewValue: 'hours' },
            { value: 'days', viewValue: 'days' },
        ];
    }
    ActivityCapacityComponent.prototype.ngOnInit = function () {
    };
    ActivityCapacityComponent.prototype.previous = function () {
        this.router.navigate(["/activity/availability"]);
    };
    ActivityCapacityComponent.prototype.next = function () {
        this.router.navigate(["/activity/pricing"]);
    };
    ActivityCapacityComponent.prototype.selectAddOns = function (addon) {
        // Add class and get selected
    };
    ActivityCapacityComponent.prototype.onSelect = function () {
        // select individual or private_group
    };
    ActivityCapacityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'capacity',
            template: __webpack_require__(/*! ./capacity.component.html */ "./src/app/backpack-pro/pages/activity/capacity/capacity.component.html"),
            styles: [__webpack_require__(/*! ./capacity.component.css */ "./src/app/backpack-pro/pages/activity/capacity/capacity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ActivityCapacityComponent);
    return ActivityCapacityComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n  #FF5B4B */\n.main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 0% !important;\n  width: 100% !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label h6{\n  color: #666666;\n  font-weight: 600;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n/* Card Listing  */\n@media (min-width: 930px) {\n\n}\n.select_card p{\n  font-size: 14px;\n  font-weight: bold;\n  margin: 5px 0;\n  padding: 5px 0 5px 15px;\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 30%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2NvdmVyLWltZy9jb3Zlci1pbWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtXQUNXO0FBQ1g7RUFDRSxlQUFlO0NBQ2hCLGlCQUFpQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvY292ZXItaW1nL2NvdmVyLWltZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgI0ZGNUI0QiAqL1xuLm1haW5fd3JhcHBlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuLmN1c3RvbV9jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNGVtO1xuICBtYXJnaW46IDFlbSBhdXRvIDRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlucHV0LmlucHV0X2NvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tX2lucHV0e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmN1c3RvbV9sYWJlbCBoNntcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY3VzdG9tX2xhYmVsIHB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjQkFCQUJBO1xufVxuLyogQ2FyZCBMaXN0aW5nICAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDkzMHB4KSB7XG5cbn1cblxuLnNlbGVjdF9jYXJkIHB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAxNXB4O1xufVxuLmNvbXBsZXRpb246YmVmb3Jle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E0MjdkO1xuICB3aWR0aDogMzAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Photos</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Activity photos</h6>\n             <p>Your activity photos are going to sell it. Make sure you select some good ones.</p>\n           </div>\n        </div>\n        <div class=\"input-field col s12\">\n          <div class=\"cover_image-preview\">\n            <upload-imge [allowMultiple]=\"true\" [uploaders]=\"uploader\" (uploadedImage)=\"uploadedImage($event)\"></upload-imge>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.ts ***!
  \******************************************************************************/
/*! exports provided: ActivityCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityCoverComponent", function() { return ActivityCoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/utility.service */ "./src/app/core/services/utility.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../state/activity/activity.actions */ "./src/app/state/activity/activity.actions.ts");
/* harmony import */ var _state_activity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../state/activity */ "./src/app/state/activity/index.ts");







var ActivityCoverComponent = /** @class */ (function () {
    function ActivityCoverComponent(router, store, utilityService) {
        this.router = router;
        this.store = store;
        this.utilityService = utilityService;
        this.uploader = [];
    }
    ActivityCoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_state_activity__WEBPACK_IMPORTED_MODULE_6__["getActivity"]).subscribe(function (activity) {
            if (activity && activity.activity_Photos) {
                _this.uploader = activity.activity_Photos;
            }
        });
    };
    ActivityCoverComponent.prototype.next = function () {
        this.router.navigate(["/activity/select-add-on"]);
    };
    ActivityCoverComponent.prototype.previous = function () {
        this.router.navigate(["/activity/type"]);
    };
    ActivityCoverComponent.prototype.uploadedImage = function (images) {
        this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_5__["SetActivityAttr"]({ name: "activity_Photos", value: images }));
    };
    ActivityCoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cover-img',
            template: __webpack_require__(/*! ./cover-img.component.html */ "./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.html"),
            styles: [__webpack_require__(/*! ./cover-img.component.css */ "./src/app/backpack-pro/pages/activity/cover-img/cover-img.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], ActivityCoverComponent);
    return ActivityCoverComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio_checkers{\n  width: 100%;\n  float: left;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  text-align: center;\n  position: relative;\n}\n.main_wrapper h5 {\n  margin-bottom: 2em;\n  font-size: 20px;\n\tfont-weight: bold;\n  text-align: center;\n}\n.login_container {\n  width: 80%;\n  padding: 10px;\n  margin: auto;\n  overflow: hidden;\n}\n.radio_checkers span i{\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n  display: block;\n  font-size: 55px;\n  padding: 10px 0 0;\n  height: 60px;\n  width: 60px;\n  margin: 5px auto 10px;\n}\n.radio_checkers span > span{\n  font-size: 12px;\n  font-weight: 100;\n}\n.radio_checkers label {\n  color: #9e9e9e;\n  float: left;\n  width: 44.5%;\n}\n.radio_checkers > label:first-child {\n  margin: 0 4.8%;\n}\n.radio_checkers [type=\"radio\"]:not(:checked) + span,\n.radio_checkers [type=\"radio\"]:checked + span{\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  height: 145px;\n  line-height: 15px;\n  font-size: 1rem;\n  padding: 1em;\n  float: left;\n  width: 100%;\n  margin-bottom: 15px;\n}\n.radio_checkers [type=\"radio\"]:not(:checked) + span:before,\n.radio_checkers [type=\"radio\"]:not(:checked) + span:after,\n.radio_checkers [type=\"radio\"]:checked + span:before,\n.radio_checkers [type=\"radio\"]:checked + span:after,\n.radio_checkers [type=\"radio\"].with-gap:checked + span:before,\n.radio_checkers [type=\"radio\"].with-gap:checked + span:after {\n  border-radius: 3px;\n  float: left;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  transition: none !important;\n}\n.radio_checkers [type=\"radio\"]:not(:checked) + span:before,\n.radio_checkers [type=\"radio\"]:not(:checked) + span:after {\n  border: 1px solid #9e9e9e;\n}\n.radio_checkers [type=\"radio\"]:checked + span:after,\n.radio_checkers [type=\"radio\"].with-gap:checked + span:after {\n  background: none !important;\n  border: 1px solid #7a427d;\n}\n.radio_checkers [type=\"radio\"][_ngcontent-c2]:checked + span[_ngcontent-c2] i,\n.radio_checkers [type=\"radio\"][_ngcontent-c2]:checked + span[_ngcontent-c2] span{\n  color: #7a427d;\n}\ninput.input_control {\n  padding-left: 0% !important;\n  width: 100% !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label h6{\n  color: #666666;\n  font-weight: 600;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n/* Card Listing  */\n.list_activities:last-child{\n  margin-bottom: 4em;\n}\n.list_activities .card-image img {\n  width: 100px !important;\n  height: 80px !important;\n}\n.list_activities label {\n  float: left;\n  position: relative;\n  top: 25px !important;\n  margin-right: 20px;\n}\n@media (max-width: 930px) {\n  .list_activities{\n    padding: 0 !important;\n  }\n  .card-content {\n    padding: 15px 0 0 10px !important;\n    font-size: 85%;\n  }\n}\n@media (max-width: 600px) {\n  .list_activities .card-image img {\n    width: 65px !important;\n    height: 60px !important;\n  }\n  .list_activities[_ngcontent-c5] label[_ngcontent-c5] {\n    top: 15px !important;\n  }\n  .card .card-content p {\n    height: 35px;\n    overflow: hidden;\n  }\n  .radio_checkers span i {\n    margin: 0 auto;\n  }\n  .radio_checkers [type=\"radio\"]:not(:checked) + span,\n  .radio_checkers [type=\"radio\"]:checked + span{\n    height: 130px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2NyZWF0ZS1hY3Rpdml0eS9jcmVhdGUtYWN0aXZpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQixpQkFBaUI7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBOzs7Ozs7RUFNRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsY0FBYztFQUNoQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2NyZWF0ZS1hY3Rpdml0eS9jcmVhdGUtYWN0aXZpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpb19jaGVja2Vyc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fd3JhcHBlciBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZm9udC1zaXplOiAyMHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yYWRpb19jaGVja2VycyBzcGFuIGl7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA1NXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luOiA1cHggYXV0byAxMHB4O1xufVxuLnJhZGlvX2NoZWNrZXJzIHNwYW4gPiBzcGFue1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4ucmFkaW9fY2hlY2tlcnMgbGFiZWwge1xuICBjb2xvcjogIzllOWU5ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0NC41JTtcbn1cbi5yYWRpb19jaGVja2VycyA+IGxhYmVsOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDQuOCU7XG59XG4ucmFkaW9fY2hlY2tlcnMgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgc3Bhbixcbi5yYWRpb19jaGVja2VycyBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBzcGFue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE0NXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5yYWRpb19jaGVja2VycyBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBzcGFuOmJlZm9yZSxcbi5yYWRpb19jaGVja2VycyBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBzcGFuOmFmdGVyLFxuLnJhZGlvX2NoZWNrZXJzIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIHNwYW46YmVmb3JlLFxuLnJhZGlvX2NoZWNrZXJzIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIHNwYW46YWZ0ZXIsXG4ucmFkaW9fY2hlY2tlcnMgW3R5cGU9XCJyYWRpb1wiXS53aXRoLWdhcDpjaGVja2VkICsgc3BhbjpiZWZvcmUsXG4ucmFkaW9fY2hlY2tlcnMgW3R5cGU9XCJyYWRpb1wiXS53aXRoLWdhcDpjaGVja2VkICsgc3BhbjphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnJhZGlvX2NoZWNrZXJzIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIHNwYW46YmVmb3JlLFxuLnJhZGlvX2NoZWNrZXJzIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIHNwYW46YWZ0ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllO1xufVxuLnJhZGlvX2NoZWNrZXJzIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIHNwYW46YWZ0ZXIsXG4ucmFkaW9fY2hlY2tlcnMgW3R5cGU9XCJyYWRpb1wiXS53aXRoLWdhcDpjaGVja2VkICsgc3BhbjphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhNDI3ZDtcbn1cblxuLnJhZGlvX2NoZWNrZXJzIFt0eXBlPVwicmFkaW9cIl1bX25nY29udGVudC1jMl06Y2hlY2tlZCArIHNwYW5bX25nY29udGVudC1jMl0gaSxcbi5yYWRpb19jaGVja2VycyBbdHlwZT1cInJhZGlvXCJdW19uZ2NvbnRlbnQtYzJdOmNoZWNrZWQgKyBzcGFuW19uZ2NvbnRlbnQtYzJdIHNwYW57XG4gIGNvbG9yOiAjN2E0MjdkO1xufVxuaW5wdXQuaW5wdXRfY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jdXN0b21faW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY3VzdG9tX2xhYmVsIGg2e1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jdXN0b21fbGFiZWwgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG4vKiBDYXJkIExpc3RpbmcgICovXG4ubGlzdF9hY3Rpdml0aWVzOmxhc3QtY2hpbGR7XG4gIG1hcmdpbi1ib3R0b206IDRlbTtcbn1cbi5saXN0X2FjdGl2aXRpZXMgLmNhcmQtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuLmxpc3RfYWN0aXZpdGllcyBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xuICAubGlzdF9hY3Rpdml0aWVze1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA4NSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubGlzdF9hY3Rpdml0aWVzIC5jYXJkLWltYWdlIGltZyB7XG4gICAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgfVxuICAubGlzdF9hY3Rpdml0aWVzW19uZ2NvbnRlbnQtYzVdIGxhYmVsW19uZ2NvbnRlbnQtYzVdIHtcbiAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZCAuY2FyZC1jb250ZW50IHAge1xuICAgIGhlaWdodDogMzVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5yYWRpb19jaGVja2VycyBzcGFuIGkge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5yYWRpb19jaGVja2VycyBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBzcGFuLFxuICAucmFkaW9fY2hlY2tlcnMgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgc3BhbntcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"main_wrapper\">\n    <h5><span class=\"strong-title\">WELCOME!</span> Let’s get you set up with a backpack pro account</h5>\n    <div class=\"login_container\">\n      <div class=\"input-field\">\n        <div class=\"col m6 radio_checkers\">\n          <label>\n            <input type=\"radio\" name=\"activity\" [(ngModel)]=\"activity\" value=\"new_activity\" (change)=\"onSelect(activity)\" />\n            <span class=\"info\">\n              <i style=\"background-image: url('../../assets/img/new_activity.png');\"></i>\n              <span>Create a new activity</span>\n            </span>\n          </label>\n          <label>\n            <input type=\"radio\" name=\"activity\" [(ngModel)]=\"activity\" value=\"duplicate_activity\" (change)=\"onSelect(activity)\" />\n            <span class=\"info\">\n              <i style=\"background-image: url('../../assets/img/duplicate_activity.png');\"></i>\n              <span>Duplicate an existing activity</span>\n            </span>\n          </label>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"newActivity\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Name your Activity</h6>\n             <p>It will appear to users as your activity name. Make it look good.</p>\n           </div>\n         </div>\n         <div class=\"input-field col s12 m12 custom_input\">\n            <input type=\"text\" class=\"input_control\" id=\"activity_name\"  [(ngModel)]=\"activityName\"/>\n            <label for=\"activity_name\">Activity Name</label>\n         </div>\n      </div>\n      <div class=\"row\" *ngIf=\"duplicateActivity\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Which activity you wish to duplicate?</h6>\n             <p>You will get to review all activity information before saving it. You can change it after saving also.</p>\n           </div>\n         </div>\n         <div class=\"list_activities col s12\">\n           <div class=\"card_wrapper\">\n             <label><input class=\"with-gap\" name=\"group1\" type=\"radio\" /><span></span></label>\n             <div class=\"card horizontal\">\n                <div class=\"card-image\">\n                  <img src=\"../../../assets/img/land1.png\">\n                </div>\n                <div class=\"card-stacked\">\n                  <div class=\"card-content\">\n                    <p>Hiking in Khulais ass asdfdfssfs</p>\n                  </div>\n                </div>\n              </div>\n           </div>\n           <div class=\"card_wrapper\">\n             <label><input class=\"with-gap\" name=\"group1\" type=\"radio\" /><span></span>\n              </label>\n             <div class=\"card horizontal\">\n                <div class=\"card-image\">\n                  <img src=\"../../../assets/img/land1.png\">\n                </div>\n                <div class=\"card-stacked\">\n                  <div class=\"card-content\">\n                    <p>Hiking in Khulais</p>\n                  </div>\n                </div>\n              </div>\n           </div>\n         </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\">Cancel</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreateActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateActivityComponent", function() { return CreateActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../state/activity/activity.actions */ "./src/app/state/activity/activity.actions.ts");
/* harmony import */ var _state_activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../state/activity */ "./src/app/state/activity/index.ts");






var CreateActivityComponent = /** @class */ (function () {
    // activity: ActivityInterface;
    function CreateActivityComponent(router, store) {
        this.router = router;
        this.store = store;
        this.newActivity = false;
        this.duplicateActivity = false;
    }
    CreateActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.router.url)
        this.store.select(_state_activity__WEBPACK_IMPORTED_MODULE_5__["getActivity"])
            .subscribe(function (activity) {
            if (activity) {
                _this.activityName = activity.title;
            }
        });
    };
    CreateActivityComponent.prototype.onSelect = function (val) {
        switch (val) {
            case 'new_activity':
                this.newActivity = true;
                this.duplicateActivity = false;
                break;
            case 'duplicate_activity':
                this.newActivity = false;
                this.duplicateActivity = true;
                break;
            default:
                break;
        }
    };
    CreateActivityComponent.prototype.next = function () {
        if (this.activityName) {
            this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_4__["SetActivityAttr"]({ name: "title", value: this.activityName }));
            this.router.navigate(["/activity/type"]);
        }
        else {
            alert("Enter activity name");
        }
    };
    CreateActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-activity',
            template: __webpack_require__(/*! ./create-activity.component.html */ "./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.html"),
            styles: [__webpack_require__(/*! ./create-activity.component.css */ "./src/app/backpack-pro/pages/activity/create-activity/create-activity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], CreateActivityComponent);
    return CreateActivityComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_wrapper {\n  width: 50%;\n  margin: 3em auto;\n}\n.mat-select {\n  height: 40px;\n}\n.banner_card {\n  display: flex;\n  border: 1px solid #83267E;\n  border-radius: 8px;\n  height: 160px;\n  padding: 1.5em;\n  width: 80%;\n  margin-bottom: 2em;\n  position: relative;\n}\n.banner_card h6 {\n  font-weight: 500;\n  text-transform: capitalize;\n  color: #818181;\n  margin-top: 0;\n}\n.b_card_content h6 span{\n  color: #83267E;\n  font-size: 18px;\n  font-weight: 100;\n  font-size: 14px;\n}\n.b_card_content p{\n  font-size: 14px;\n  color: #979797;\n}\n.filter_pad .mat-form-field {\n  width: 100%;\n}\n/* Switch */\n.banner_card .switch{\n  position: absolute;\n  right: 30px;\n  bottom: 20px;\n  width: 75px;\n}\n.switch label {\n  float: left;\n  width: 100%;\n}\n.switch label .lever {\n  width: 100%;\n  height: 30px;\n  background-color: #fff;\n  border: 1px solid #7a427d;\n  border-radius: 9px;\n  overflow: hidden;\n  margin: 0;\n}\n.switch label .lever:before, .switch label .lever:after{\n  width: 35px;\n  height: 28px;\n  border-radius: 5px;\n  left: 0;\n  top: 0;\n  box-shadow: none !important;\n  background-color: #7a427d;\n}\n.switch label input[type=checkbox]:checked + .lever:before,\n.switch label input[type=checkbox]:checked + .lever:after{\n  left: 40px;\n  background-color: #7a427d;\n}\n/* .switch label input[type=checkbox]:checked + .lever:after{\n\n  left: 40px;\n} */\n.switch_on,\n.switch_off{\n  position: absolute;\n  z-index: 1;\n  color: #7a427d;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  text-align: center;\n}\n.switch_on {\n  left: 5px;\n}\n.switch_off {\n  right: 5px;\n}\n@media (max-width: 930px) {\n  .content_wrapper{\n    width: 100%;\n    margin: 3em auto;\n  }\n  .banner_card{\n    width: 100%;\n  }\n  .filter_pad .mat-form-field {\n    width: 100%;\n  }\n}\n/* Modified Card */\n.pro_card{\n  height: 145px;\n}\n.pro_card .card-image {\n  max-width: 35%;\n}\n.pro_card .card-image img {\n  height: 100%;\n}\n.card .card-action{\n  padding: 6px 0 5px 24px !important;\n  height: 35px;\n}\n.pro_card .card-action a,\n.pro_card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating){\n  font-size: 14px;\n  color: #83267E;\n  text-transform: capitalize;\n}\n.pro_card .card-content {\n  padding: 20px 15px 0;\n}\n.pro_card .card-content h6{\n  margin-top: 0;\n  color: #818181;\n  font-size: 20px;\n}\n.pro_card .card-content p{\n  font-size: 12px;\n  color: #818181;\n}\n.ratings_set {\n  display: flex;\n  float: left;\n  width: 100%;\n  font-size: 12px;\n  color: #9B9B9B;\n  margin: 5px 0;\n  height: 20px;\n  line-height: 16px;\n}\n.ratings_set > span{\n  margin-right: 10px;\n}\n.custom_link{\n  float: right;\n  color: #818181 !important;\n}\n.custom_link i{\n    line-height: 0 !important;\n    top: 7px;\n    position: relative;\n}\n.custom_link.incomplete i{\n  color: #FF5B4B !important;\n}\n.custom_label h6{\n  color: #818181;\n  font-size: 18px;\n  margin-bottom: 1em;\n}\n@media (max-width: 425px) {\n  .card.horizontal .card-stacked {\n    position: inherit;\n  }\n  .card .card-action {\n    position: absolute;\n    left: -126px;\n    background: #fff;\n    bottom: 0;\n    width: 360px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2VkaXQtYWN0aXZpdHktcGFnZS9hY3Rpdml0eS1pbmZvL2FjdGl2aXR5LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0EsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTs7O0dBR0c7QUFDSDs7RUFFRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDtBQUNBOztFQUVFLGVBQWU7RUFDZixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvZWRpdC1hY3Rpdml0eS1wYWdlL2FjdGl2aXR5LWluZm8vYWN0aXZpdHktaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfd3JhcHBlciB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogM2VtIGF1dG87XG59XG4ubWF0LXNlbGVjdCB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5iYW5uZXJfY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MzI2N0U7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgcGFkZGluZzogMS41ZW07XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbm5lcl9jYXJkIGg2IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmJfY2FyZF9jb250ZW50IGg2IHNwYW57XG4gIGNvbG9yOiAjODMyNjdFO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5iX2NhcmRfY29udGVudCBwe1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuLmZpbHRlcl9wYWQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiBTd2l0Y2ggKi9cbi5iYW5uZXJfY2FyZCAuc3dpdGNoe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiA3NXB4O1xufVxuLnN3aXRjaCBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zd2l0Y2ggbGFiZWwgLmxldmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhNDI3ZDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG59XG4uc3dpdGNoIGxhYmVsIC5sZXZlcjpiZWZvcmUsIC5zd2l0Y2ggbGFiZWwgLmxldmVyOmFmdGVye1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E0MjdkO1xufVxuLnN3aXRjaCBsYWJlbCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmxldmVyOmJlZm9yZSxcbi5zd2l0Y2ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5sZXZlcjphZnRlcntcbiAgbGVmdDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNDI3ZDtcbn1cbi8qIC5zd2l0Y2ggbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5sZXZlcjphZnRlcntcblxuICBsZWZ0OiA0MHB4O1xufSAqL1xuLnN3aXRjaF9vbixcbi5zd2l0Y2hfb2Zme1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjN2E0MjdkO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN3aXRjaF9vbiB7XG4gIGxlZnQ6IDVweDtcbn1cbi5zd2l0Y2hfb2ZmIHtcbiAgcmlnaHQ6IDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gIC5jb250ZW50X3dyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAzZW0gYXV0bztcbiAgfVxuICAuYmFubmVyX2NhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZpbHRlcl9wYWQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLyogTW9kaWZpZWQgQ2FyZCAqL1xuLnByb19jYXJke1xuICBoZWlnaHQ6IDE0NXB4O1xufVxuLnByb19jYXJkIC5jYXJkLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAzNSU7XG59XG4ucHJvX2NhcmQgLmNhcmQtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmQgLmNhcmQtYWN0aW9ue1xuICBwYWRkaW5nOiA2cHggMCA1cHggMjRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ucHJvX2NhcmQgLmNhcmQtYWN0aW9uIGEsXG4ucHJvX2NhcmQgLmNhcmQtYWN0aW9uIGE6bm90KC5idG4pOm5vdCguYnRuLWxhcmdlKTpub3QoLmJ0bi1zbWFsbCk6bm90KC5idG4tbGFyZ2UpOm5vdCguYnRuLWZsb2F0aW5nKXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzgzMjY3RTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucHJvX2NhcmQgLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggMTVweCAwO1xufVxuLnByb19jYXJkIC5jYXJkLWNvbnRlbnQgaDZ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvX2NhcmQgLmNhcmQtY29udGVudCBwe1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuLnJhdGluZ3Nfc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBtYXJnaW46IDVweCAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLnJhdGluZ3Nfc2V0ID4gc3BhbntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmN1c3RvbV9saW5re1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjODE4MTgxICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tX2xpbmsgaXtcbiAgICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgIHRvcDogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jdXN0b21fbGluay5pbmNvbXBsZXRlIGl7XG4gIGNvbG9yOiAjRkY1QjRCICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tX2xhYmVsIGg2e1xuICBjb2xvcjogIzgxODE4MTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2FyZC5ob3Jpem9udGFsIC5jYXJkLXN0YWNrZWQge1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICB9XG4gIC5jYXJkIC5jYXJkLWFjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMjZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"content_wrapper\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 hide-on-med-and-down\">\n        <div class=\"banner_card\">\n          <span class=\"id_card\"></span>\n          <div class=\"b_card_content\">\n            <h6>ID verification <span>recommended</span></h6>\n            <p>Always ask backpackers to verify their ID before attempting a booking</p>\n          </div>\n          <div class=\"switch\">\n           <label>\n             <span class=\"switch_on\">ON</span>\n             <input type=\"checkbox\"><span class=\"lever\"></span>\n             <span class=\"switch_off\">OFF</span>\n           </label>\n         </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col s12 m12\">\n        <div class=\"custom_label\">\n          <h6>ONLINE</h6>\n        </div>\n      </div>\n      <div class=\"col s12 m12\">\n        <div class=\"card horizontal pro_card\">\n          <div class=\"card-image\">\n            <img src=\"../../../../assets/img/sky1.jpg\">\n          </div>\n          <div class=\"card-stacked\">\n            <div class=\"card-content\">\n              <h6>Hiking in Khulais</h6>\n              <div class=\"ratings_set\"><span>Reviews:</span> <ratings></ratings></div>\n              <p>Last edited on 20 July 2018</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">Edit</a>\n              <a href=\"#\">Preview</a>\n              <a href=\"#\">Calendar</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s12 m12\">\n        <div class=\"card horizontal pro_card\">\n          <div class=\"card-image\">\n            <img src=\"../../../../assets/img/sky1.jpg\">\n          </div>\n          <div class=\"card-stacked\">\n            <div class=\"card-content\">\n              <h6>Hiking in Khulais</h6>\n              <div class=\"ratings_set\"><span>Reviews:</span> <ratings></ratings></div>\n              <p>Last edited on 20 July 2018</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">Edit</a>\n              <a href=\"#\">Preview</a>\n              <a href=\"#\">Calendar</a>\n              <a href=\"\" class=\"custom_link\"><i class=\"material-icons\">refresh</i> GO ONLINE</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s12 m12\">\n        <div class=\"card horizontal pro_card\">\n          <div class=\"card-image\">\n            <img src=\"../../../../assets/img/sky1.jpg\">\n          </div>\n          <div class=\"card-stacked\">\n            <div class=\"card-content\">\n              <h6>Hiking in Khulais</h6>\n              <div class=\"ratings_set\"><span>Not Verified</span></div>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">Edit</a>\n              <a href=\"#\">Preview</a>\n              <a href=\"#\">Calendar</a>\n              <a href=\"\" class=\"custom_link incomplete\"><i class=\"material-icons\">report</i> COMPLETE</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div> -->\n\n<mat-tab-group>\n  <mat-tab label=\"Photos\">\n    Photos\n  </mat-tab>\n  <mat-tab label=\"Title, type & discription\">\n    Title, type & discription\n  </mat-tab>\n  <mat-tab label=\"Locations\">\n    Locations\n  </mat-tab>\n  <mat-tab label=\"Add-on’s\">\n    Add-on’s\n  </mat-tab>\n  <mat-tab label=\"Rules & Requirments\">\n    Rules & Requirments\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EditActivityInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditActivityInfoComponent", function() { return EditActivityInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditActivityInfoComponent = /** @class */ (function () {
    function EditActivityInfoComponent() {
    }
    EditActivityInfoComponent.prototype.ngOnInit = function () {
    };
    EditActivityInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'activity-info',
            template: __webpack_require__(/*! ./activity-info.component.html */ "./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.html"),
            styles: [__webpack_require__(/*! ./activity-info.component.css */ "./src/app/backpack-pro/pages/activity/edit-activity-page/activity-info/activity-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditActivityInfoComponent);
    return EditActivityInfoComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_wrapper {\n  width: 100%;\n  margin: 3em auto;\n}\n.mat-select {\n  height: 40px;\n}\n.filter_pad .mat-form-field {\n  width: 100%;\n}\n@media (max-width: 930px) {\n  .content_wrapper{\n    width: 100%;\n    margin: 3em auto;\n  }\n  .filter_pad .mat-form-field {\n    width: 100%;\n  }\n}\n@media (max-width: 425px) {\n  .card.horizontal .card-stacked {\n    position: inherit;\n  }\n  .card .card-action {\n    position: absolute;\n    left: -126px;\n    background: #fff;\n    bottom: 0;\n    width: 360px;\n  }\n}\n.sub-title-2 {\n  font-weight: 500;\n  margin-bottom: 1em;\n}\n/* Input Styling */\n.custom_search > span {\n    position: absolute;\n    top: 10px;\n    opacity: .4;\n    color: #979797;\n}\n.custom_search input.input_control{\n  border-bottom: none !important;\n  font-size: 18px !important;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{\n  color: #9B9B9B !important;\n}\n/* Timeline */\n.custom_timeline {\n  border-left: 1px solid #979797;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  background: rgba(255, 255, 255, 0.03);\n  color: #000;\n  margin: 0px auto;\n  letter-spacing: 0.5px;\n  position: relative;\n  line-height: 32px;\n  font-size: 1.03em;\n  padding: 0px 0 0 52px;\n  list-style: none;\n  text-align: left;\n  font-weight: 100;\n  max-width: 77%;\n}\n.custom_timeline:before,\n.custom_timeline:after {\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  background: #ffffff;\n  position: absolute;\n}\n.custom_timeline:before{\n  left: -5px;\n  top: -1px;\n}\n.custom_timeline:after {\n  left: -5px;\n  bottom: 0;\n}\n.custom_timeline .notify {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  position: relative;\n  /* top: -10px; */\n}\n.custom_timeline .notify:last-of-type {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border: none;\n}\n.custom_timeline .notify:before,\n.custom_timeline .notify:after {\n  position: absolute;\n  display: block;\n  top: 0;\n}\n.custom_timeline .notify:before {\n  left: -170.5px;\n  color: #818181;\n  content: attr(data-time);\n  text-align: right;\n  font-weight: 100;\n  font-size: 11px;\n  min-width: 95px;\n}\n.custom_timeline .notify:after {\n  box-shadow: 0 0 0 1px #979797;\n  left: -57.85px;\n  background: #ffffff;\n  border-radius: 50%;\n  height: 11px;\n  width: 11px;\n  content: \"\";\n  top: 10px;\n}\n.custom_timeline p{\n  font-size: 12px;\n  color: #4A4A4A;\n  margin: 0;\n}\n.custom_timeline p > a{\n  color: #83267E;\n}\n.label_red{\n  color: #FF5B4B !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2VkaXQtYWN0aXZpdHktcGFnZS9ib29raW5nLXNldHRpbmdzL2Jvb2tpbmctc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1QjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUVBLGFBQWE7QUFDYjtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLE1BQU07QUFDUjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2JhY2twYWNrLXByby9wYWdlcy9hY3Rpdml0eS9lZGl0LWFjdGl2aXR5LXBhZ2UvYm9va2luZy1zZXR0aW5ncy9ib29raW5nLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudF93cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogM2VtIGF1dG87XG59XG4ubWF0LXNlbGVjdCB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5maWx0ZXJfcGFkIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gIC5jb250ZW50X3dyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAzZW0gYXV0bztcbiAgfVxuICAuZmlsdGVyX3BhZCAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2FyZC5ob3Jpem9udGFsIC5jYXJkLXN0YWNrZWQge1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICB9XG4gIC5jYXJkIC5jYXJkLWFjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMjZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbn1cbi5zdWItdGl0bGUtMiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLyogSW5wdXQgU3R5bGluZyAqL1xuLmN1c3RvbV9zZWFyY2ggPiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGNvbG9yOiAjOTc5Nzk3O1xufVxuLmN1c3RvbV9zZWFyY2ggaW5wdXQuaW5wdXRfY29udHJvbHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xuICBjb2xvcjogIzlCOUI5QiAhaW1wb3J0YW50O1xufVxuXG4vKiBUaW1lbGluZSAqL1xuLmN1c3RvbV90aW1lbGluZSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzk3OTc5NztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxLjAzZW07XG4gIHBhZGRpbmc6IDBweCAwIDAgNTJweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWF4LXdpZHRoOiA3NyU7XG59XG4uY3VzdG9tX3RpbWVsaW5lOmJlZm9yZSxcbi5jdXN0b21fdGltZWxpbmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jdXN0b21fdGltZWxpbmU6YmVmb3Jle1xuICBsZWZ0OiAtNXB4O1xuICB0b3A6IC0xcHg7XG59XG4uY3VzdG9tX3RpbWVsaW5lOmFmdGVyIHtcbiAgbGVmdDogLTVweDtcbiAgYm90dG9tOiAwO1xufVxuLmN1c3RvbV90aW1lbGluZSAubm90aWZ5IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogdG9wOiAtMTBweDsgKi9cbn1cbi5jdXN0b21fdGltZWxpbmUgLm5vdGlmeTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmN1c3RvbV90aW1lbGluZSAubm90aWZ5OmJlZm9yZSxcbi5jdXN0b21fdGltZWxpbmUgLm5vdGlmeTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbn1cbi5jdXN0b21fdGltZWxpbmUgLm5vdGlmeTpiZWZvcmUge1xuICBsZWZ0OiAtMTcwLjVweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aW1lKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWluLXdpZHRoOiA5NXB4O1xufVxuLmN1c3RvbV90aW1lbGluZSAubm90aWZ5OmFmdGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM5Nzk3OTc7XG4gIGxlZnQ6IC01Ny44NXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTFweDtcbiAgd2lkdGg6IDExcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMTBweDtcbn1cbi5jdXN0b21fdGltZWxpbmUgcHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbWFyZ2luOiAwO1xufVxuLmN1c3RvbV90aW1lbGluZSBwID4gYXtcbiAgY29sb3I6ICM4MzI2N0U7XG59XG4ubGFiZWxfcmVke1xuICBjb2xvcjogI0ZGNUI0QiAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content_wrapper\">\n    <div class=\"row\">\n      <div class=\"col s12 m7 filter_pad\">\n        <div class=\"row\">\n          <div class=\"col s12 m5\">\n            <mat-form-field>\n              <mat-label>Filter by:</mat-label>\n               <mat-select>\n                 <mat-option *ngFor=\"let filterOption of filterOptions\" [value]=\"filterOption.value\">\n                   {{filterOption.viewValue}}\n                 </mat-option>\n               </mat-select>\n             </mat-form-field>\n          </div>\n          <div class=\"input-field col m12 custom_search\">\n            <span><i class=\"material-icons\">search</i></span>\n            <input type=\"text\" class=\"input_control full\" placeholder=\"Search by name or ticket No.\"/>\n          </div>\n           <div class=\"col s12 m12\">\n             <h6 class=\"sub-title-2\">Today, 12 Apr 2019</h6>\n           </div>\n           <div class=\"col s12 m12\">\n             <ul class=\"custom_timeline\">\n               <li class=\"notify\" data-time=\"10:10 pm\">\n                 <p><a href=\"\">You</a> have updated photos for this activity </p>\n               </li>\n               <li class=\"notify\" data-time=\"07:56 pm\">\n                 <p><a href=\"\">Mohammad Ghulam</a> Checked-in Ticket No. <span class=\"label_red\">xxx-xxx-xxx-xxx</span> </p>\n               </li>\n               <li class=\"notify\" data-time=\"07:56 pm\">\n                 <p><a href=\"\">Mohammad Ghulam</a> Checked-in Ticket No. <span class=\"label_red\">xxx-xxx-xxx-xxx</span> </p>\n               </li>\n               <li class=\"notify\" data-time=\"04:12 pm\">\n                 <p>New booking via  <a href=\"\" class=\"label_red\">backpack</a> </p>\n               </li>\n             </ul>\n           </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AcivityBookingSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcivityBookingSettingsComponent", function() { return AcivityBookingSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcivityBookingSettingsComponent = /** @class */ (function () {
    function AcivityBookingSettingsComponent() {
        this.filterOptions = [
            { value: 'all', viewValue: 'All Activities' },
            { value: 'online', viewValue: 'Online Activities' },
            { value: 'offline', viewValue: 'Offline Activities' },
        ];
        this.activityOptions = [
            { value: 'sea', viewValue: 'Sea' },
            { value: 'land', viewValue: 'Land' },
            { value: 'sky', viewValue: 'Sky' },
        ];
    }
    AcivityBookingSettingsComponent.prototype.ngOnInit = function () {
    };
    AcivityBookingSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'booking-settings',
            template: __webpack_require__(/*! ./booking-settings.component.html */ "./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.html"),
            styles: [__webpack_require__(/*! ./booking-settings.component.css */ "./src/app/backpack-pro/pages/activity/edit-activity-page/booking-settings/booking-settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcivityBookingSettingsComponent);
    return AcivityBookingSettingsComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pro_container .mat-tab-label-container {\n  padding: 0 8% !important;\n}\n.list_name_dropdown{\n  margin-top: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2VkaXQtYWN0aXZpdHktcGFnZS9lZGl0LWFjdGl2aXR5LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2JhY2twYWNrLXByby9wYWdlcy9hY3Rpdml0eS9lZGl0LWFjdGl2aXR5LXBhZ2UvZWRpdC1hY3Rpdml0eS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvX2NvbnRhaW5lciAubWF0LXRhYi1sYWJlbC1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDglICFpbXBvcnRhbnQ7XG59XG4ubGlzdF9uYW1lX2Ryb3Bkb3due1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12 m5 list_name_dropdown\">\n      <mat-form-field>\n         <mat-select>\n           <mat-option *ngFor=\"let filterOption of filterOptions\" [value]=\"filterOption.value\">\n             {{filterOption.viewValue}}\n           </mat-option>\n         </mat-select>\n       </mat-form-field>\n    </div>\n  </div>\n  <mat-tab-group>\n    <mat-tab label=\"Activity info\">\n      <activity-info></activity-info>\n    </mat-tab>\n    <mat-tab label=\"Booking Settings\">\n      <booking-settings></booking-settings>\n    </mat-tab>\n  </mat-tab-group>\n</main>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditActivityPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditActivityPageComponent", function() { return EditActivityPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditActivityPageComponent = /** @class */ (function () {
    function EditActivityPageComponent() {
        this.filterOptions = [
            { value: 'all', viewValue: 'All Activities' },
            { value: 'online', viewValue: 'Online Activities' },
            { value: 'offline', viewValue: 'Offline Activities' },
        ];
    }
    EditActivityPageComponent.prototype.ngOnInit = function () {
    };
    EditActivityPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-activity-page',
            template: __webpack_require__(/*! ./edit-activity-page.component.html */ "./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-activity-page.component.css */ "./src/app/backpack-pro/pages/activity/edit-activity-page/edit-activity-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditActivityPageComponent);
    return EditActivityPageComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/location/location.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/location/location.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 0% !important;\n  height: 20px !important;\n  width: 100% !important;\n  padding-bottom: 3px !important;\n  margin-bottom: 10px !important;\n  font-size: 14px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n@media (min-width: 930px) {\n\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 40%;\n}\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):after {\n  border: 2px solid #acacac;\n  background-color: #ffffff !important;\n}\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):before {\n  border-right: 2px solid #ee5547;\n  border-bottom: 2px solid #ee5547;\n}\n[type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):after {\n  border: 2px solid #acacac;\n}\n.label_p {\n  display: flex;\n  line-height: 20px;\n  padding: 20px 0 0;\n  color: #979797;\n}\n.label_p p{\n  margin-top: 0;\n  font-size: 14px;\n  line-height: 24px;\n}\n.label_p label {\n  height: 20px;\n  position: relative;\n  top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCLGlCQUFpQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFFQTs7QUFFQTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX3dyYXBwZXIgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgxODE4MTtcbn1cbi5jdXN0b21fY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDRlbTtcbiAgbWFyZ2luOiAxZW0gYXV0byA0ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pbnB1dC5pbnB1dF9jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b21faW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jdXN0b21fbGFiZWwgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MzBweCkge1xuXG59XG4uY29tcGxldGlvbjpiZWZvcmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTQyN2Q7XG4gIHdpZHRoOiA0MCU7XG59XG5bdHlwZT1cImNoZWNrYm94XCJdLmZpbGxlZC1pbjpjaGVja2VkICsgc3Bhbjpub3QoLmxldmVyKTphZnRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhY2FjYWM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOmNoZWNrZWQgKyBzcGFuOm5vdCgubGV2ZXIpOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNlZTU1NDc7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWU1NTQ3O1xufVxuW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46bm90KDpjaGVja2VkKSArIHNwYW46bm90KC5sZXZlcik6YWZ0ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYWNhY2FjO1xufVxuLmxhYmVsX3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMjBweCAwIDA7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuLmxhYmVsX3AgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5sYWJlbF9wIGxhYmVsIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/location/location.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/location/location.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Locations</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Where is the meeting point going to be at?</h6>\n             <p>this location will be shared with backpakers after they confirm their ticket</p>\n           </div>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"map_wrapper\">\n            <location-search-input (lat)=\"setMeetLat($event)\"\n                                   (address)=\"setMeetAddress($event)\"\n                                   (long)=\"setMeetLong($event)\"></location-search-input>\n            <!--<div class=\"map_input\">-->\n              <!--<input-->\n                     <!--type=\"search\"-->\n                     <!--placeholder=\"Search here or select range from map\"-->\n                     <!--autocomplete=\"off\"-->\n                     <!--autocapitalize=\"off\"-->\n                     <!--autofocus-->\n                     <!--#search-->\n                     <!--class=\"input_control\" />-->\n              <!--<span class=\"pin_icon\"><i class=\"material-icons\">location_on</i></span>-->\n            <!--</div>-->\n            <!--<div class=\"map\" style=\"\theight: 130px;\">-->\n              <!--<agm-map style=\"height: 100%\" [latitude]=\"51.678418\" [longitude]=\"7.809007\" [zoomControl]=\"false\">-->\n\n              <!--</agm-map>-->\n            <!--</div>-->\n            <div class=\"label_p\">\n              <label>\n                <input type=\"checkbox\" name=\"new_location\" class=\"filled-in\" [(ngModel)]=\"new_location\"  (change)=\"onSelect(new_location)\" />\n                <span></span>\n              </label>\n              <p>Activity Location is going to be right at the meeting point.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"showLocation\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Activity Location</h6>\n             <p>It will be displayed as an area range and not an exact location.</p>\n           </div>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"map_wrapper\">\n            <location-search-input (lat)=\"setActivityLat($event)\"\n                                   (address)=\"setActivityAddress($event)\"\n                                   (long)=\"setActivityLong($event)\"></location-search-input>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/location/location.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/location/location.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActivityLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLocationComponent", function() { return ActivityLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ActivityLocationComponent = /** @class */ (function () {
    function ActivityLocationComponent(router) {
        this.router = router;
        this.showLocation = false;
        this.addOns = [
            { value: 'transport', viewValue: 'Transport' },
            { value: 'food', viewValue: 'Food' },
            { value: 'Safari', viewValue: 'Safari' },
        ];
    }
    ActivityLocationComponent.prototype.ngOnInit = function () {
    };
    ActivityLocationComponent.prototype.previous = function () {
        this.router.navigate(["/activity/add-on"]);
    };
    ActivityLocationComponent.prototype.next = function () {
        // console.log(this.meetLat, this.meetLong, this.activityLat, this.activityLong, this.meetAddress, this.activityAddress)
        this.router.navigate(["/activity/booking"]);
    };
    ActivityLocationComponent.prototype.onSelect = function (new_location) {
        this.showLocation = !this.showLocation;
    };
    ActivityLocationComponent.prototype.setMeetLat = function (lat) {
        this.meetLat = lat;
    };
    ActivityLocationComponent.prototype.setMeetLong = function (long) {
        this.meetLong = long;
    };
    ActivityLocationComponent.prototype.setActivityLong = function (long) {
        this.activityLong = long;
    };
    ActivityLocationComponent.prototype.setActivityLat = function (lat) {
        this.activityLat = lat;
    };
    ActivityLocationComponent.prototype.setActivityAddress = function (address) {
        this.activityAddress = address;
    };
    ActivityLocationComponent.prototype.setMeetAddress = function (address) {
        this.meetAddress = address;
    };
    ActivityLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/backpack-pro/pages/activity/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/backpack-pro/pages/activity/location/location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ActivityLocationComponent);
    return ActivityLocationComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/organizer/organizer.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/organizer/organizer.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 5px !important;\n  height: 25px !important;\n  width: 100% !important;\n  padding-bottom: 5px !important;\n  margin-bottom: 15px !important;\n  font-size: 15px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n@media (min-width: 930px) {\n\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 98%;\n}\n.mobile_input{\n  position: relative;\n}\n.mobile_input input.input_control {\n  padding-left: 20% !important;\n  width: 82% !important;\n}\n.phone_code {\n  position: absolute;\n  top: 2px;\n  opacity: .4;\n}\n.list-admin > div {\n  width: 100%;\n  float: left;\n  color: #818181;\n  border-top: 1px solid rgba(0,0,0,.03);\n  padding: 5px;\n  font-size: 14px;\n  height: 50px;\n  line-height: 35px;\n  display: flex;\n  position: relative;\n}\n.list-admin > div:last-child{\n  margin-bottom: 20px;\n  border-bottom: 1px solid rgba(0,0,0,.03);\n}\n.list-admin > div span {\n  position: absolute;\n  right: 0;\n}\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):after {\n  border: 2px solid #acacac;\n  background-color: #ffffff !important;\n}\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):before {\n  border-right: 2px solid #ee5547;\n  border-bottom: 2px solid #ee5547;\n}\n[type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):after {\n  border: 2px solid #acacac;\n}\n[type=\"checkbox\"] + span:not(.lever){\n  line-height: 20px;\n}\n.label_p{\n  display: flex;\n  margin: 10px 0;\n}\n.carded{\n  padding: 2em 2em 1em;\n  margin-bottom: 2em;\n}\n.carded > label{\n  font-size: 14px;\n  color: #666666;\n  line-height: 20px;\n  margin-bottom: 10px;\n  display: block;\n}\n.carded .label_p h6{\n  color: #666666;\n  font-size: 14px;\n  margin-top: 0;\n  line-height: 15px;\n}\n.carded .label_p p{\n  color: #BABABA;\n  font-size: 14px;\n}\n.label_p > div span {\n  position: absolute;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L29yZ2FuaXplci9vcmdhbml6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEIsaUJBQWlCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBOztBQUVBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvb3JnYW5pemVyL29yZ2FuaXplci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fd3JhcHBlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuLmN1c3RvbV9jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNGVtO1xuICBtYXJnaW46IDFlbSBhdXRvIDRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlucHV0LmlucHV0X2NvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b21faW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jdXN0b21fbGFiZWwgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MzBweCkge1xuXG59XG4uY29tcGxldGlvbjpiZWZvcmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTQyN2Q7XG4gIHdpZHRoOiA5OCU7XG59XG4ubW9iaWxlX2lucHV0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9iaWxlX2lucHV0IGlucHV0LmlucHV0X2NvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDIwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogODIlICFpbXBvcnRhbnQ7XG59XG4ucGhvbmVfY29kZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIG9wYWNpdHk6IC40O1xufVxuLmxpc3QtYWRtaW4gPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDMpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxpc3QtYWRtaW4gPiBkaXY6bGFzdC1jaGlsZHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjAzKTtcbn1cbi5saXN0LWFkbWluID4gZGl2IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46Y2hlY2tlZCArIHNwYW46bm90KC5sZXZlcik6YWZ0ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYWNhY2FjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5bdHlwZT1cImNoZWNrYm94XCJdLmZpbGxlZC1pbjpjaGVja2VkICsgc3Bhbjpub3QoLmxldmVyKTpiZWZvcmUge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWU1NTQ3O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VlNTU0Nztcbn1cblt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOm5vdCg6Y2hlY2tlZCkgKyBzcGFuOm5vdCgubGV2ZXIpOmFmdGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2FjYWNhYztcbn1cblt0eXBlPVwiY2hlY2tib3hcIl0gKyBzcGFuOm5vdCgubGV2ZXIpe1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5sYWJlbF9we1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5jYXJkZWR7XG4gIHBhZGRpbmc6IDJlbSAyZW0gMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uY2FyZGVkID4gbGFiZWx7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkZWQgLmxhYmVsX3AgaDZ7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuLmNhcmRlZCAubGFiZWxfcCBwe1xuICBjb2xvcjogI0JBQkFCQTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGFiZWxfcCA+IGRpdiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/organizer/organizer.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/organizer/organizer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Organizers</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Invite an organizer</h6>\n             <p>You can invite an orgnizer to help with this activity.</p>\n           </div>\n        </div>\n        <div class=\"input-field col s12 m12\">\n          <div class=\"card carded\">\n            <div class=\"input-field\">\n              <input type=\"text\" placeholder=\"Email\" class=\"input_control\" />\n            </div>\n            <div class=\"input-field\">\n              <input type=\"text\" placeholder=\"Name\" class=\"input_control\"  />\n            </div>\n            <div class=\"input-field mobile_input\">\n              <span class=\"phone_code\">+966</span>\n              <input type=\"text\" placeholder=\"Mobile No.\" class=\"input_control\"  />\n            </div>\n            <div class=\"label_p\">\n              <label>\n                <input type=\"checkbox\"\n                       name=\"individual\"\n                       class=\"filled-in\"\n                       [(ngModel)]=\"individual\"\n                       (change)=\"onSelect(individual)\" /><span></span>\n              </label>\n              <div class=\"custom_label\">\n                <h6>Admin</h6>\n                <p>Can edit this activity, do manual bookings, confirm tickets</p>\n              </div>\n            </div>\n            <div class=\"label_p\">\n              <label>\n                <input type=\"checkbox\"\n                       name=\"private_group\"\n                       class=\"filled-in\"\n                       [(ngModel)]=\"private_group\"\n                       (change)=\"onSelect(private_group)\" /><span></span>\n              </label>\n              <div class=\"custom_label\">\n                <h6>Helper</h6>\n                <p>Can only do manual bookings and confirm tickets</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s12 text-center\">\n                <button class=\"btn_add_card m-t-5\">Invite</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s12 m12\">\n            <div class=\"list-admin\">\n              <div>\n                <i class=\"remove\">x</i>\n                Sami Ahmad\n                <span>Admin</span>\n              </div>\n              <div>\n                <i class=\"remove\">x</i>\n                Kareem Ali\n                <span>Helper</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/organizer/organizer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/organizer/organizer.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrganizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerComponent", function() { return OrganizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var OrganizerComponent = /** @class */ (function () {
    function OrganizerComponent(router) {
        this.router = router;
        this.status = false;
        this.addOns = [
            { name: 'oxygen tank' },
            { name: 'fins' },
            { name: 'on road' },
            { name: 'snorkle goggles' }
        ];
    }
    OrganizerComponent.prototype.ngOnInit = function () {
    };
    OrganizerComponent.prototype.previous = function () {
        this.router.navigate(["/activity/pricing"]);
    };
    OrganizerComponent.prototype.next = function () {
        // this.router.navigate(["/activity/booking"])
    };
    OrganizerComponent.prototype.onSelect = function (individual) {
        // Add class and get selected
    };
    OrganizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'organizer',
            template: __webpack_require__(/*! ./organizer.component.html */ "./src/app/backpack-pro/pages/activity/organizer/organizer.component.html"),
            styles: [__webpack_require__(/*! ./organizer.component.css */ "./src/app/backpack-pro/pages/activity/organizer/organizer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrganizerComponent);
    return OrganizerComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/pricing/pricing.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/pricing/pricing.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n  height: 47px !important;\n  width: 100% !important;\n  padding-bottom: 3px !important;\n  margin-bottom: 10px !important;\n  font-size: 15px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n@media (min-width: 930px) {\n\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 90%;\n}\n.mat-select-trigger {\n    height: 40px;\n}\n.carded {\n  box-shadow: 0px 1px 2px 1px #f3f3f3;\n  padding: 5px 0 !important;\n}\n.body_style{\n  padding: 0;\n  width: 100%;\n  float: left;\n}\n.item_list{\n  display: flex;\n  min-height: 45px;\n  line-height: 35px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n  width: 100%;\n  float: left;\n}\n.item_list > div{\n  padding: 5px 0;\n  color: #9B9B9B;\n  font-size: 18px;\n}\n.item_list > div:first-child{\n  width: 60%;\n}\n.header_title > div:last-child,\n.item_list > div:last-child,\n.item_list > input:last-child{\n  width: 40% !important;\n  text-align: right ;\n  opacity: .5;\n}\n.item_list:last-child{\n  margin-bottom: 10px;\n}\n.item_list > input{\n  height: 40px !important;\n  border-bottom: none !important;\n}\n.p_label {\n  margin: 0;\n}\n.custom_input input.input_control {\n  height: 30px !important;\n  padding-right: 10px;\n  font-size: 18px !important;\n  text-align: right;\n}\n.price{\n  display: block;\n  font-size: 12px;\n  line-height: 5px;\n  margin-bottom: 10px;\n}\n.table_style.pricing .item_list > div:last-child{\n  opacity: 1 !important;\n}\n/* Discount panel Style */\n.radio_pad {\n  width: 100%;\n  float: left;\n  border-top:  1px solid rgba(0, 0, 0, 0.03);\n  border-bottom:  1px solid rgba(0, 0, 0, 0.03);\n  margin: 15px 0;\n}\n.radio_pad > label{\n  width: 100%;\n  text-align: right;\n  display: block;\n  margin: 10px 0;\n}\n.cutom_tag {\n  float: left;\n  position: relative;\n  top: 3px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #4A4A4A;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQixpQkFBaUI7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBOztBQUVBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7OztFQUdFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLDZDQUE2QztFQUM3QyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl93cmFwcGVyIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4uY3VzdG9tX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA0ZW07XG4gIG1hcmdpbjogMWVtIGF1dG8gNGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW5wdXQuaW5wdXRfY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tX2lucHV0e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmN1c3RvbV9sYWJlbCBwe1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogI0JBQkFCQTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkzMHB4KSB7XG5cbn1cbi5jb21wbGV0aW9uOmJlZm9yZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNDI3ZDtcbiAgd2lkdGg6IDkwJTtcbn1cbi5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5jYXJkZWQge1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAxcHggI2YzZjNmMztcbiAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbn1cbi5ib2R5X3N0eWxle1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaXRlbV9saXN0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5pdGVtX2xpc3QgPiBkaXZ7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBjb2xvcjogIzlCOUI5QjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLml0ZW1fbGlzdCA+IGRpdjpmaXJzdC1jaGlsZHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5oZWFkZXJfdGl0bGUgPiBkaXY6bGFzdC1jaGlsZCxcbi5pdGVtX2xpc3QgPiBkaXY6bGFzdC1jaGlsZCxcbi5pdGVtX2xpc3QgPiBpbnB1dDpsYXN0LWNoaWxke1xuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0IDtcbiAgb3BhY2l0eTogLjU7XG59XG4uaXRlbV9saXN0Omxhc3QtY2hpbGR7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaXRlbV9saXN0ID4gaW5wdXR7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4ucF9sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jdXN0b21faW5wdXQgaW5wdXQuaW5wdXRfY29udHJvbCB7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucHJpY2V7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGFibGVfc3R5bGUucHJpY2luZyAuaXRlbV9saXN0ID4gZGl2Omxhc3QtY2hpbGR7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLyogRGlzY291bnQgcGFuZWwgU3R5bGUgKi9cbi5yYWRpb19wYWQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci10b3A6ICAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLWJvdHRvbTogIDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5yYWRpb19wYWQgPiBsYWJlbHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uY3V0b21fdGFnIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNEE0QTRBO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/pricing/pricing.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/pricing/pricing.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Pricing and Payments</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Price per individual (ticket type)</h6>\n             <p>Based on your informatin, these are the gatigories of your activity.\n               You can always delete or add categories in here.\n             </p>\n             <p>This category list will help you if you have different types/prices for your tickets.</p>\n           </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m12\">\n          <div class=\"table_style\">\n            <div class=\"body_style\">\n              <div class=\"item_list\">\n                <div><i class=\"remove\">x</i> Families</div>\n                <div>SR 10</div>\n              </div>\n              <div class=\"item_list\">\n                <div><i class=\"remove\">x</i> Female</div>\n                <div>SR 15</div>\n              </div>\n              <div class=\"item_list\">\n                <div><i class=\"remove\">x</i> Adult</div>\n                <div>SR 20</div>\n              </div>\n              <div class=\"item_list\">\n                <div><i class=\"remove\">x</i> Senior</div>\n                <div>SR XX</div>\n              </div>\n              <div class=\"input-field item_list\">\n                <input type=\"text\" class=\"input_control full\" placeholder=\"Add ticket type\" />\n                <input type=\"text\" class=\"input_control full\" placeholder=\"SR XX\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Price for private group</h6>\n             <p>The price of the full activity for one private group.</p>\n           </div>\n        </div>\n        <div class=\"input-field col s12 m12 custom_input\">\n          <input type=\"text\" class=\"input_control full text-right\" placeholder=\"SR 100\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Discount</h6>\n           </div>\n           <div class=\"radio_pad\">\n             <label>\n               <span class=\"cutom_tag\">Don't apply</span>\n               <input class=\"with-gap\" id=\"no_discount\" [(ngModel)]=\"discount\" value=\"no_discount\" (change)=\"discountChange(discount)\" name=\"discount\" type=\"radio\" />\n               <span></span>\n             </label>\n             <label>\n               <span class=\"cutom_tag\">Apply</span>\n               <input class=\"with-gap\" id=\"apply_discount\" [(ngModel)]=\"discount\" value=\"with_discount\" (change)=\"discountChange(discount)\" name=\"discount\" type=\"radio\" />\n               <span></span>\n             </label>\n           </div>\n        </div>\n        <div class=\"input-field col s12\" *ngIf=\"showDiscount\">\n          <div class=\"custom_label\">\n            <p>Add the discounted price next to each ticket.</p>\n          </div>\n          <div class=\"table_style pricing\">\n            <div class=\"body_style\">\n              <div class=\"item_list\">\n                <div>Families\n                  <span class=\"price\">SR 10</span>\n                </div>\n                <div>SR 9</div>\n              </div>\n              <div class=\"item_list\">\n                <div>Female <span class=\"price\">SR 15</span></div>\n                <div>SR 10</div>\n              </div>\n              <div class=\"input-field item_list\">\n                <input type=\"text\" class=\"input_control full\" placeholder=\"Add ticket type\" />\n                <input type=\"text\" class=\"input_control full\" placeholder=\"SR XX\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/pricing/pricing.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/pricing/pricing.component.ts ***!
  \**************************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PricingComponent = /** @class */ (function () {
    function PricingComponent(router) {
        this.router = router;
        this.status = false;
        this.showDiscount = false;
        this.twoOption = [
            { value: 'yes', viewValue: 'Yes' },
            { value: 'no', viewValue: 'No' },
        ];
        this.openWindows = [
            { value: '1 week', viewValue: '1 Week' },
            { value: '2 weeks', viewValue: '2 weeks' },
            { value: '3 weeks', viewValue: '3 weeks' },
        ];
        this.timingOptions = [
            { value: 'minutes', viewValue: 'minutes' },
            { value: 'hours', viewValue: 'hours' },
            { value: 'days', viewValue: 'days' },
        ];
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent.prototype.previous = function () {
        this.router.navigate(["/activity/capacity"]);
    };
    PricingComponent.prototype.next = function () {
        this.router.navigate(["/activity/organizer"]);
    };
    PricingComponent.prototype.selectAddOns = function (addon) {
        // Add class and get selected
    };
    PricingComponent.prototype.onSelect = function () {
        // select individual or private_group
    };
    PricingComponent.prototype.discountChange = function (val) {
        switch (val) {
            case 'no_discount':
                this.showDiscount = false;
                break;
            case 'with_discount':
                this.showDiscount = true;
                break;
            default:
                this.showDiscount = false;
        }
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/backpack-pro/pages/activity/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/backpack-pro/pages/activity/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/rules/rules.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/rules/rules.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 5px !important;\n  height: 30px !important;\n  width: 100% !important;\n  padding-bottom: 3px !important;\n  margin-bottom: 10px !important;\n  font-size: 15px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_input{\n  margin-top: 10px;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n@media (min-width: 930px) {\n\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 50%;\n}\n.list-addons > div {\n  width: 100%;\n  float: left;\n  color: #818181;\n  margin-bottom: 5px;\n  border-bottom: 1px solid rgba(0,0,0,.03);\n  padding: 10px 5px;\n  font-size: 14px;\n  height: 50px;\n  line-height:   25px;\n  display: flex;\n  position: relative;\n}\n.list-addons > div:last-child{\n  margin-bottom: 20px;\n}\n.list-addons > div span{\n  position: absolute;\n  right: 0;\n  visibility: hidden;\n}\n.list-addons .addd-selected span {\n  color: red;\n  visibility: visible;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L3J1bGVzL3J1bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCLGlCQUFpQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFFQTs7QUFFQTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2JhY2twYWNrLXByby9wYWdlcy9hY3Rpdml0eS9ydWxlcy9ydWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fd3JhcHBlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuLmN1c3RvbV9jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNGVtO1xuICBtYXJnaW46IDFlbSBhdXRvIDRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlucHV0LmlucHV0X2NvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b21faW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jdXN0b21fbGFiZWwgcHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MzBweCkge1xuXG59XG4uY29tcGxldGlvbjpiZWZvcmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTQyN2Q7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5saXN0LWFkZG9ucyA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjAzKTtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogICAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGlzdC1hZGRvbnMgPiBkaXY6bGFzdC1jaGlsZHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5saXN0LWFkZG9ucyA+IGRpdiBzcGFue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubGlzdC1hZGRvbnMgLmFkZGQtc2VsZWN0ZWQgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/rules/rules.component.html":
/*!************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/rules/rules.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Rules and Requirments</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Rules</h6>\n             <p>If an add-on does not includes a price that means it’s included for free for everyone.</p>\n             <p>No tollerance rules. must have/do. the activity could be canceled if comprpmised.</p>\n           </div>\n        </div>\n\n        <div class=\"col s12 m12\">\n          <div class=\"list-addons\">\n             <!-- Checkbox class-name \"addd-selected\" -->\n            <div *ngFor=\"let addon of addOns\" (click)=\"selectAddOns(addon)\">\n              <i class=\"remove\">x</i>\n                {{ addon.name }} <span><i class=\"material-icons\">check</i></span>\n            </div>\n          </div>\n          <input type=\"text\" class=\"input_control full\" placeholder=\"Add New Add-on\" />\n        </div>\n        <div class=\"col s12 m12 text-center\">\n          <button class=\"add-more\"><i class=\"material-icons\">add</i></button>\n        </div>\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Requirments</h6>\n             <p>Everything you want activity participants to know before the activity time.</p>\n           </div>\n\n           <div class=\"custom_label\">\n             <p>In order for you and everyone else to have fun and enjoy their time, please, follow all tip rules.</p>\n             <ul>\n               <li>1. Make sure you be at the assem <i class=\"remove\">x</i></li>\n             </ul>\n           </div>\n           <div class=\"col s12 m12 text-center\">\n             <input type=\"text\" class=\"input_control full\" placeholder=\"Add Tips\" />\n             <button class=\"add-more\"><i class=\"material-icons\">add</i></button>\n           </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\">Back</button>\n      <button class=\"btn_next btn\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/rules/rules.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/rules/rules.component.ts ***!
  \**********************************************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
        this.status = false;
        this.addOns = [
            { name: 'National ID is Required' },
            { name: 'Diving Liciens is Required' },
            { name: 'Driving License is Required' },
            { name: 'No Children Allowed' }
        ];
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent.prototype.selectAddOns = function (addon) {
        // Add class and get selected
    };
    RulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'rules',
            template: __webpack_require__(/*! ./rules.component.html */ "./src/app/backpack-pro/pages/activity/rules/rules.component.html"),
            styles: [__webpack_require__(/*! ./rules.component.css */ "./src/app/backpack-pro/pages/activity/rules/rules.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper h4 {\n  font-size: 16px;\n\tfont-weight: bold;\n  color: #818181;\n}\n.custom_container {\n  width: 80%;\n  padding: 10px 10px 4em;\n  margin: 1em auto 4em;\n  overflow: hidden;\n}\ninput.input_control {\n  padding-left: 5px !important;\n  height: 20px !important;\n  width: 100% !important;\n  padding-bottom: 10px !important;\n  margin-bottom: 10px !important;\n  font-size: 15px !important;\n  box-shadow: none !important;\n  color: #000 !important;\n}\n.custom_label p{\n  margin-top: 0;\n  color: #BABABA;\n}\n.completion:before{\n  background-color: #7a427d;\n  width: 30%;\n}\n.list-addons > div {\n  width: 100%;\n  float: left;\n  color: #818181;\n  margin-bottom: 5px;\n  border-bottom: 1px solid rgba(0,0,0,.03);\n  padding: 5px;\n  font-size: 14px;\n  height: 40px;\n  line-height: 30px;\n  display: flex;\n  position: relative;\n}\n.list-addons > div:last-child{\n  margin-bottom: 20px;\n}\n.list-addons > div span{\n  position: absolute;\n  top: 5px;\n  right: 0;\n}\n[type=\"checkbox\"]:not(.filled-in) + span:not(.lever):before,\n[type=\"checkbox\"]:not(.filled-in) + span:not(.lever):after{\n  border: 0px solid #5a5a5a;\n}\n[type=\"checkbox\"]:checked + span:not(.lever):before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid red;\n  border-bottom: 2px solid red;\n  -webkit-transform: rotate(40deg);\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n  transition: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2FjdGl2aXR5L3NlbGVjdC1hZGQtb24vc2VsZWN0LWFkZC1vbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQixpQkFBaUI7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7QUFDVjtBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvYWN0aXZpdHkvc2VsZWN0LWFkZC1vbi9zZWxlY3QtYWRkLW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl93cmFwcGVyIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4uY3VzdG9tX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA0ZW07XG4gIG1hcmdpbjogMWVtIGF1dG8gNGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW5wdXQuaW5wdXRfY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tX2xhYmVsIHB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjQkFCQUJBO1xufVxuLmNvbXBsZXRpb246YmVmb3Jle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E0MjdkO1xuICB3aWR0aDogMzAlO1xufVxuLmxpc3QtYWRkb25zID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzgxODE4MTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDMpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxpc3QtYWRkb25zID4gZGl2Omxhc3QtY2hpbGR7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubGlzdC1hZGRvbnMgPiBkaXYgc3BhbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDA7XG59XG5cblt0eXBlPVwiY2hlY2tib3hcIl06bm90KC5maWxsZWQtaW4pICsgc3Bhbjpub3QoLmxldmVyKTpiZWZvcmUsXG5bdHlwZT1cImNoZWNrYm94XCJdOm5vdCguZmlsbGVkLWluKSArIHNwYW46bm90KC5sZXZlcik6YWZ0ZXJ7XG4gIGJvcmRlcjogMHB4IHNvbGlkICM1YTVhNWE7XG59XG5bdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBzcGFuOm5vdCgubGV2ZXIpOmJlZm9yZSB7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTVweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIHRyYW5zaXRpb246IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main_wrapper\">\n    <h4 class=\"custom-header-title\">Add-on’s</h4>\n    <div class=\"custom_container\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n           <div class=\"custom_label\">\n             <h6>Select Add-on’s</h6>\n           </div>\n        </div>\n\n        <div class=\"col s12 m12\">\n          <div class=\"list-addons\">\n             <!-- Checkbox class-name \"addd-selected\" -->\n            <div *ngFor=\"let addon of addOns\" >\n              <i class=\"remove\" (click)=\"deleteAddOn(addon)\" *ngIf=\"!addon.intial\">x</i>\n                <label>\n                   {{ addon.name }}\n                   <input type=\"checkbox\"  [(ngModel)]=\"addon.selected\" name=\"addon\"/>\n                   <span></span>\n                 </label>\n            </div>\n          </div>\n          <input type=\"text\" class=\"input_control full\" (keypress)=\"addNewAddon($event)\" placeholder=\"Add New Add-on\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tab-footer\">\n    <div class=\"completion\"></div>\n    <div class=\"btn_settings\">\n      <button class=\"btn_cancel btn\" (click)=\"previous()\">Back</button>\n      <button class=\"btn_next btn\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SelectAddOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddOnComponent", function() { return SelectAddOnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../state/activity */ "./src/app/state/activity/index.ts");
/* harmony import */ var _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../state/activity/activity.actions */ "./src/app/state/activity/activity.actions.ts");






var SelectAddOnComponent = /** @class */ (function () {
    function SelectAddOnComponent(router, store) {
        this.router = router;
        this.store = store;
        this.status = false;
    }
    SelectAddOnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_5__["GetAllAddOns"]());
        this.store.select(_state_activity__WEBPACK_IMPORTED_MODULE_4__["getAllAddOns"])
            .subscribe(function (data) {
            _this.addOns = data;
        });
    };
    SelectAddOnComponent.prototype.previous = function () {
        this.router.navigate(["/activity/cover"]);
    };
    SelectAddOnComponent.prototype.next = function () {
        this.router.navigate(["/activity/add-on"]);
    };
    SelectAddOnComponent.prototype.addNewAddon = function (key) {
        if (key.charCode == 13) {
            this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_5__["CreateAddOn"]({ name: this.name }));
            this.name = null;
        }
    };
    SelectAddOnComponent.prototype.deleteAddOn = function (addon) {
        this.store.dispatch(new _state_activity_activity_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteAddOns"](addon.id));
    };
    SelectAddOnComponent.prototype.selectAddOns = function (addon) {
        // Add class and get selected
    };
    SelectAddOnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'select-add-on',
            template: __webpack_require__(/*! ./select-add-on.component.html */ "./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.html"),
            styles: [__webpack_require__(/*! ./select-add-on.component.css */ "./src/app/backpack-pro/pages/activity/select-add-on/select-add-on.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SelectAddOnComponent);
    return SelectAddOnComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Header component */\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\n.main_content ul li{\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  min-width: 100px;\n}\n.main_content table tr {\n  border-bottom: none;\n}\n.main_content td {\n  padding: 5px 0 5px 0;\n  font-size: 15px;\n}\n.main_content td:first-child {\n    min-width: 55%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9hZGRvbi1wYWQvYWRkb24tcGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9hZGRvbi1wYWQvYWRkb24tcGFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZWFkZXIgY29tcG9uZW50ICovXG4ubWFpbl90aXRsZSB7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fdGl0bGUgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl90aXRsZSBoNSxcbi5tYWluX3RpdGxlIGg2e1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1haW5fdGl0bGUgLmVkaXRfYnRue1xuICBmbG9hdDogcmlnaHQ7XG59XG4ud3JhcHBlcl9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc4YTsgKi9cbn1cbi5tYWluX2NvbnRlbnR7XG4gIGNvbG9yOiAjODY4Njg2O1xufVxuLm1haW5fY29udGVudCBoNntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDAgMCAuNmVtO1xufVxuLm1haW5fY29udGVudCB1bCBsaXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4ubWFpbl9jb250ZW50IHRhYmxlIHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5tYWluX2NvbnRlbnQgdGQge1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudCB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgbWluLXdpZHRoOiA1NSU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title\">\n          <h5>Add-on’s</h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"main_content\">\n            <table>\n              <tr>\n                <td>Transportation</td>\n                <td>(included)</td>\n              </tr>\n              <tr>\n                <td>Snacks & Beverages</td>\n                <td>(included)</td>\n              </tr>\n              <tr>\n                <td>Food</td>\n                <td>(included)</td>\n              </tr>\n              <tr>\n                <td>Safari</td>\n                <td>(SAR 350)</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col s12 m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddonPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPadComponent", function() { return AddonPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddonPadComponent = /** @class */ (function () {
    function AddonPadComponent() {
    }
    AddonPadComponent.prototype.ngOnInit = function () {
    };
    AddonPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addon-pad',
            template: __webpack_require__(/*! ./addon-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.html"),
            styles: [__webpack_require__(/*! ./addon-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/addon-pad/addon-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddonPadComponent);
    return AddonPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Header component */\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  color: #818181;\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\n/* Booking Reference  */\n.img_list {\n  display: flex;\n  margin: 0;\n  line-height: 40px;\n  height: 40px;\n  font-size: 18px;\n}\n.private_group, .individual {\n  width: 30px;\n  margin-right: 20px;\n}\n/* Availability */\n.main_title.modified > h5 {\n  float: left;\n  margin-top: -5px;\n  line-height: 20px;\n}\n.main_title.modified h5 span{\n  display: block;\n  font-weight: 100;\n}\n/* Capacity */\n.main_content table tr {\n  border-bottom: none;\n}\n.main_content td {\n  padding: 5px 0 5px 0;\n  font-size: 15px;\n}\n.main_content td:first-child {\n  width: 40%;\n}\np i{\n  font-weight: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9hdmFpbGFibGUtcGFkL2F2YWlsYWJpbGl0eS1wYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUJBQXFCO0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBLGFBQWE7QUFDYjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9hdmFpbGFibGUtcGFkL2F2YWlsYWJpbGl0eS1wYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogSGVhZGVyIGNvbXBvbmVudCAqL1xuLm1haW5fdGl0bGUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX3RpdGxlID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fdGl0bGUgaDUsXG4ubWFpbl90aXRsZSBoNntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYWluX3RpdGxlIC5lZGl0X2J0bntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ud3JhcHBlcl9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc4YTsgKi9cbn1cbi5tYWluX2NvbnRlbnR7XG4gIGNvbG9yOiAjODY4Njg2O1xufVxuLm1haW5fY29udGVudCBoNntcbiAgY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwIDAgLjZlbTtcbn1cbi8qIEJvb2tpbmcgUmVmZXJlbmNlICAqL1xuLmltZ19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJpdmF0ZV9ncm91cCwgLmluZGl2aWR1YWwge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLyogQXZhaWxhYmlsaXR5ICovXG4ubWFpbl90aXRsZS5tb2RpZmllZCA+IGg1IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm1haW5fdGl0bGUubW9kaWZpZWQgaDUgc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4vKiBDYXBhY2l0eSAqL1xuLm1haW5fY29udGVudCB0YWJsZSB0ciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ubWFpbl9jb250ZW50IHRkIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnQgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNDAlO1xufVxucCBpe1xuICBmb250LXdlaWdodDogMTAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title modified\">\n          <h5>Availability <span>You can change the availability sittings for each day from calender</span></h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"main_content\">\n            <h6>Available Days & Times</h6>\n            <p class=\"img_list\"><span class=\"individual\"></span> Thu, 4 pm \t- 10 pm</p>\n            <p class=\"img_list\"><span class=\"private_group\"></span> Thu, 4 pm - 10 pm</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col s12 m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AvailabilityPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityPadComponent", function() { return AvailabilityPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvailabilityPadComponent = /** @class */ (function () {
    function AvailabilityPadComponent() {
    }
    AvailabilityPadComponent.prototype.ngOnInit = function () {
    };
    AvailabilityPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'availability-pad',
            template: __webpack_require__(/*! ./availability-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.html"),
            styles: [__webpack_require__(/*! ./availability-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/available-pad/availability-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvailabilityPadComponent);
    return AvailabilityPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Header component */\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  color: #818181;\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\n/* Booking Reference  */\n.img_list {\n  display: flex;\n  margin: 0;\n  line-height: 40px;\n  height: 40px;\n  font-size: 18px;\n}\n.private_group, .individual {\n  width: 30px;\n  margin-right: 20px;\n}\n/* Availability */\n.main_title.modified > h5 {\n  float: left;\n  margin-top: -5px;\n  line-height: 20px;\n}\n.main_title.modified h5 span{\n  display: block;\n  font-weight: 100;\n}\n/* Capacity */\n.main_content table tr {\n  border-bottom: none;\n}\n.main_content td {\n  padding: 5px 0 5px 0;\n  font-size: 15px;\n}\n.main_content td:first-child {\n  width: 40%;\n}\np i{\n  font-weight: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9ib29rLXBhZC9ib29rLXBhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBcUI7QUFDckI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvZWRpdC1hY3Rpdml0eS1wYWdlL2Jvb2stcGFkL2Jvb2stcGFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIEhlYWRlciBjb21wb25lbnQgKi9cbi5tYWluX3RpdGxlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl90aXRsZSA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX3RpdGxlIGg1LFxuLm1haW5fdGl0bGUgaDZ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWFpbl90aXRsZSAuZWRpdF9idG57XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLndyYXBwZXJfY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3OGE7ICovXG59XG4ubWFpbl9jb250ZW50e1xuICBjb2xvcjogIzg2ODY4Njtcbn1cbi5tYWluX2NvbnRlbnQgaDZ7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMCAwIC42ZW07XG59XG4vKiBCb29raW5nIFJlZmVyZW5jZSAgKi9cbi5pbWdfbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnByaXZhdGVfZ3JvdXAsIC5pbmRpdmlkdWFsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi8qIEF2YWlsYWJpbGl0eSAqL1xuLm1haW5fdGl0bGUubW9kaWZpZWQgPiBoNSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tYWluX3RpdGxlLm1vZGlmaWVkIGg1IHNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLyogQ2FwYWNpdHkgKi9cbi5tYWluX2NvbnRlbnQgdGFibGUgdHIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLm1haW5fY29udGVudCB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50IHRkOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDQwJTtcbn1cbnAgaXtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title\">\n          <h5>Booking Refrence</h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"main_content\">\n            <h6>Notice in advance:</h6>\n            <p>12 hours notice</p>\n            <h6>Booking Window:</h6>\n            <p>2 Weeks</p>\n            <h6>Booking available for. <span><small>You can change this sitting for each day from calender</small></span></h6>\n            <p class=\"img_list\"><span class=\"individual\"></span> Individuals</p>\n            <p class=\"img_list\"><span class=\"private_group\"></span> Private Groups</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BookPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPadComponent", function() { return BookPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookPadComponent = /** @class */ (function () {
    function BookPadComponent() {
    }
    BookPadComponent.prototype.ngOnInit = function () {
    };
    BookPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-pad',
            template: __webpack_require__(/*! ./book-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.html"),
            styles: [__webpack_require__(/*! ./book-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/book-pad/book-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookPadComponent);
    return BookPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Header component */\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  color: #818181;\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\n/* Booking Reference  */\n.img_list {\n  display: flex;\n  margin: 0;\n  line-height: 40px;\n  height: 40px;\n  font-size: 18px;\n}\n.private_group, .individual {\n  width: 30px;\n  margin-right: 20px;\n}\n/* Availability */\n.main_title.modified > h5 {\n  float: left;\n  margin-top: -5px;\n  line-height: 20px;\n}\n.main_title.modified h5 span{\n  display: block;\n  font-weight: 100;\n}\n/* Capacity */\n.main_content table tr {\n  border-bottom: none;\n}\n.main_content td {\n  padding: 5px 0 5px 0;\n  font-size: 15px;\n}\n.main_content td:first-child {\n  width: 40%;\n}\np i{\n  font-weight: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9sZW5ndGgtcGFkL2xlbmd0aC1wYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUJBQXFCO0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBLGFBQWE7QUFDYjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9sZW5ndGgtcGFkL2xlbmd0aC1wYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogSGVhZGVyIGNvbXBvbmVudCAqL1xuLm1haW5fdGl0bGUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX3RpdGxlID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fdGl0bGUgaDUsXG4ubWFpbl90aXRsZSBoNntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYWluX3RpdGxlIC5lZGl0X2J0bntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ud3JhcHBlcl9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc4YTsgKi9cbn1cbi5tYWluX2NvbnRlbnR7XG4gIGNvbG9yOiAjODY4Njg2O1xufVxuLm1haW5fY29udGVudCBoNntcbiAgY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwIDAgLjZlbTtcbn1cbi8qIEJvb2tpbmcgUmVmZXJlbmNlICAqL1xuLmltZ19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJpdmF0ZV9ncm91cCwgLmluZGl2aWR1YWwge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLyogQXZhaWxhYmlsaXR5ICovXG4ubWFpbl90aXRsZS5tb2RpZmllZCA+IGg1IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm1haW5fdGl0bGUubW9kaWZpZWQgaDUgc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4vKiBDYXBhY2l0eSAqL1xuLm1haW5fY29udGVudCB0YWJsZSB0ciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ubWFpbl9jb250ZW50IHRkIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnQgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNDAlO1xufVxucCBpe1xuICBmb250LXdlaWdodDogMTAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title\">\n          <h5>Length & Capacity</h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"main_content\">\n            <h6>Activity Length:</h6>\n            <p>How long does this activity lasts for</p>\n            <p><strong>6 Hrs</strong></p>\n            <br/>\n            <h6>Capacity.</h6>\n          </div>\n          <div class=\"main_content\">\n            <table>\n              <tr>\n                <td>Families</td>\n                <td>NA</td>\n              </tr>\n              <tr>\n                <td>Singles</td>\n                <td>NA</td>\n              </tr>\n              <tr>\n                <td>Total Capacity</td>\n                <td>50</td>\n              </tr>\n              <tr>\n                <td>Private Group</td>\n                <td>30 - 50</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LengthPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LengthPadComponent", function() { return LengthPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LengthPadComponent = /** @class */ (function () {
    function LengthPadComponent() {
    }
    LengthPadComponent.prototype.ngOnInit = function () {
    };
    LengthPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'length-pad',
            template: __webpack_require__(/*! ./length-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.html"),
            styles: [__webpack_require__(/*! ./length-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/length-pad/length-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LengthPadComponent);
    return LengthPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Header component */\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\naddress {\n  font-style: normal;\n  line-height: 28px;\n}\n.map{\n  margin-bottom: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9sb2NhdGlvbi1wYWQvbG9jYXRpb24tcGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2JhY2twYWNrLXByby9wYWdlcy9lZGl0LWFjdGl2aXR5LXBhZ2UvbG9jYXRpb24tcGFkL2xvY2F0aW9uLXBhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZGVyIGNvbXBvbmVudCAqL1xuLm1haW5fdGl0bGUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX3RpdGxlID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fdGl0bGUgaDUsXG4ubWFpbl90aXRsZSBoNntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYWluX3RpdGxlIC5lZGl0X2J0bntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ud3JhcHBlcl9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc4YTsgKi9cbn1cbi5tYWluX2NvbnRlbnR7XG4gIGNvbG9yOiAjODY4Njg2O1xufVxuLm1haW5fY29udGVudCBoNntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDAgMCAuNmVtO1xufVxuXG5hZGRyZXNzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5tYXB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title\">\n          <h5>Locations</h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m6\">\n          <div class=\"main_content\">\n            <h6>Activity Location:</h6>\n            <address>\n              Khulais, Makkah Province,<br />\n              Saudi Arabia.\n            </address>\n          </div>\n        </div>\n        <div class=\"col s12 m6\">\n          <div class=\"map\" style=\"height: 130px;\">\n            <map></map>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"main_content\">\n            <h6>Meeting Point Location:</h6>\n            <address>\n              Jareer Mall. Prince Sultan St.,<br />\n              Jeddah, Saudi Arabia.\n            </address>\n          </div>\n        </div>\n        <div class=\"col s12 m6\">\n          <div class=\"map\" style=\"\theight: 130px;\">\n            <map></map>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LocationPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPadComponent", function() { return LocationPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationPadComponent = /** @class */ (function () {
    function LocationPadComponent() {
    }
    LocationPadComponent.prototype.ngOnInit = function () {
    };
    LocationPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location-pad',
            template: __webpack_require__(/*! ./location-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.html"),
            styles: [__webpack_require__(/*! ./location-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/location-pad/location-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationPadComponent);
    return LocationPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Header component */\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  color: #818181;\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\n/* Booking Reference  */\n.img_list {\n  display: flex;\n  margin: 0;\n  line-height: 40px;\n  height: 40px;\n  font-size: 18px;\n}\n.private_group, .individual {\n  width: 30px;\n  margin-right: 20px;\n}\n/* Availability */\n.main_title.modified > h5 {\n  float: left;\n  margin-top: -5px;\n  line-height: 20px;\n}\n.main_title.modified h5 span{\n  display: block;\n  font-weight: 100;\n}\n/* Capacity */\n.main_content table tr {\n  border-bottom: none;\n}\n.main_content td {\n  padding: 5px 0 5px 0;\n  font-size: 15px;\n}\n.main_content td:first-child {\n  width: 40%;\n}\np i{\n  font-weight: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9vcmdhbml6ZXItcGFkL29yZ2FuaXplci1wYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUJBQXFCO0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBLGFBQWE7QUFDYjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9vcmdhbml6ZXItcGFkL29yZ2FuaXplci1wYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogSGVhZGVyIGNvbXBvbmVudCAqL1xuLm1haW5fdGl0bGUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX3RpdGxlID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fdGl0bGUgaDUsXG4ubWFpbl90aXRsZSBoNntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYWluX3RpdGxlIC5lZGl0X2J0bntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ud3JhcHBlcl9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc4YTsgKi9cbn1cbi5tYWluX2NvbnRlbnR7XG4gIGNvbG9yOiAjODY4Njg2O1xufVxuLm1haW5fY29udGVudCBoNntcbiAgY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwIDAgLjZlbTtcbn1cbi8qIEJvb2tpbmcgUmVmZXJlbmNlICAqL1xuLmltZ19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJpdmF0ZV9ncm91cCwgLmluZGl2aWR1YWwge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLyogQXZhaWxhYmlsaXR5ICovXG4ubWFpbl90aXRsZS5tb2RpZmllZCA+IGg1IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm1haW5fdGl0bGUubW9kaWZpZWQgaDUgc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4vKiBDYXBhY2l0eSAqL1xuLm1haW5fY29udGVudCB0YWJsZSB0ciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ubWFpbl9jb250ZW50IHRkIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnQgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNDAlO1xufVxucCBpe1xuICBmb250LXdlaWdodDogMTAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title\">\n          <h5>Orgnizers</h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"main_content\">\n            <p><strong>Admins.</strong> <i> Can edit activity</i></p>\n            <p>Sami Ahmad (you)</p>\n            <p><strong>Orginizer.</strong> <i> Can add/Confirm bookings only</i></p>\n            <p>Mohammad Ali</p>\n            <p>Ghulam Mohamad</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OrganizerPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerPadComponent", function() { return OrganizerPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrganizerPadComponent = /** @class */ (function () {
    function OrganizerPadComponent() {
    }
    OrganizerPadComponent.prototype.ngOnInit = function () {
    };
    OrganizerPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'organizer-pad',
            template: __webpack_require__(/*! ./organizer-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.html"),
            styles: [__webpack_require__(/*! ./organizer-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/organizer-pad/organizer-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrganizerPadComponent);
    return OrganizerPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  width: 100%;\n  height: 100%;\n}\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container .card {\n  height: 100px;\n  overflow: hidden;\n}\n.img_view{\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9waG90by1wYWQvcGhvdG8tcGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvZWRpdC1hY3Rpdml0eS1wYWdlL3Bob3RvLXBhZC9waG90by1wYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX3RpdGxlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl90aXRsZSA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX3RpdGxlIGg1LFxuLm1haW5fdGl0bGUgaDZ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWFpbl90aXRsZSAuZWRpdF9idG57XG4gIGZsb2F0OiByaWdodDtcbn1cbi53cmFwcGVyX2NvbnRhaW5lciAuY2FyZCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nX3ZpZXd7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud3JhcHBlcl9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title\">\n          <h5>Photos</h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s6 m3\">\n          <div class=\"card img_view\" style=\"background-image: url('../../../../../../assets/img/land2.png')\"></div>\n        </div>\n        <div class=\"col s6 m3\">\n          <div class=\"card img_view\" style=\"background-image: url('../../../../../../assets/img/land1.png')\"></div>\n        </div>\n        <div class=\"col s6 m3\">\n          <div class=\"card img_view\" style=\"background-image: url('../../../../../../assets/img/land2.png')\"></div>\n        </div>\n        <div class=\"col s6 m3\">\n          <div class=\"card img_view\" style=\"background-image: url('../../../../../../assets/img/land3.png')\"></div>\n        </div>\n        <div class=\"col s6 m3\">\n          <div class=\"card img_view\" style=\"background-image: url('../../../../../../assets/img/land1.png')\"></div>\n        </div>\n        <div class=\"col s6 m3\">\n          <div class=\"card img_view\" style=\"background-image: url('../../../../../../assets/img/land2.png')\"></div>\n        </div>\n        <div class=\"col s6 m3\">\n          <div class=\"card img_view\" style=\"background-image: url('../../../../../../assets/img/land3.png')\"></div>\n        </div>\n        <div class=\"col s6 m3\">\n          <div class=\"card img_view\" style=\"background-image: url('../../../../../../assets/img/land2.png')\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PhotoPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPadComponent", function() { return PhotoPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotoPadComponent = /** @class */ (function () {
    function PhotoPadComponent() {
    }
    PhotoPadComponent.prototype.ngOnInit = function () {
    };
    PhotoPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'photo-pad',
            template: __webpack_require__(/*! ./photo-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.html"),
            styles: [__webpack_require__(/*! ./photo-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/photo-pad/photo-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhotoPadComponent);
    return PhotoPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Header component */\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  color: #818181;\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\n/* Booking Reference  */\n.img_list {\n  display: flex;\n  margin: 0;\n  line-height: 40px;\n  height: 40px;\n  font-size: 18px;\n}\n.private_group, .individual {\n  width: 30px;\n  margin-right: 20px;\n}\n/* Availability */\n.main_title.modified > h5 {\n  float: left;\n  margin-top: -5px;\n  line-height: 20px;\n}\n.main_title.modified h5 span{\n  display: block;\n  font-weight: 100;\n}\n/* Capacity */\n.main_content table tr {\n  border-bottom: none;\n}\n.main_content td {\n  padding: 5px 0 5px 0;\n  font-size: 15px;\n}\n.main_content td:first-child {\n  width: 40%;\n}\np i{\n  font-weight: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9wcmljaW5nLXBhZC9wcmljaW5nLXBhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBcUI7QUFDckI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9iYWNrcGFjay1wcm8vcGFnZXMvZWRpdC1hY3Rpdml0eS1wYWdlL3ByaWNpbmctcGFkL3ByaWNpbmctcGFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIEhlYWRlciBjb21wb25lbnQgKi9cbi5tYWluX3RpdGxlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl90aXRsZSA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX3RpdGxlIGg1LFxuLm1haW5fdGl0bGUgaDZ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWFpbl90aXRsZSAuZWRpdF9idG57XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLndyYXBwZXJfY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3OGE7ICovXG59XG4ubWFpbl9jb250ZW50e1xuICBjb2xvcjogIzg2ODY4Njtcbn1cbi5tYWluX2NvbnRlbnQgaDZ7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMCAwIC42ZW07XG59XG4vKiBCb29raW5nIFJlZmVyZW5jZSAgKi9cbi5pbWdfbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnByaXZhdGVfZ3JvdXAsIC5pbmRpdmlkdWFsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi8qIEF2YWlsYWJpbGl0eSAqL1xuLm1haW5fdGl0bGUubW9kaWZpZWQgPiBoNSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tYWluX3RpdGxlLm1vZGlmaWVkIGg1IHNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLyogQ2FwYWNpdHkgKi9cbi5tYWluX2NvbnRlbnQgdGFibGUgdHIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLm1haW5fY29udGVudCB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50IHRkOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDQwJTtcbn1cbnAgaXtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title modified\">\n          <h5>Pricing  <span>You can change the pricings for each day from calender</span></h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"main_content\">\n            <h6>Available Days & Times</h6>\n            <table>\n              <tr>\n                <td>Adult</td>\n                <td>SAR 75</td>\n              </tr>\n              <tr>\n                <td>Child</td>\n                <td>SAR 55</td>\n              </tr>\n              <tr>\n                <td><strong>Private Group</strong></td>\n                <td>SAR 2500</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PricingPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPadComponent", function() { return PricingPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingPadComponent = /** @class */ (function () {
    function PricingPadComponent() {
    }
    PricingPadComponent.prototype.ngOnInit = function () {
    };
    PricingPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pricing-pad',
            template: __webpack_require__(/*! ./pricing-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.html"),
            styles: [__webpack_require__(/*! ./pricing-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/pricing-pad/pricing-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingPadComponent);
    return PricingPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container .card {\n  height: 100px;\n  overflow: hidden;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\n.main_content a{\n  color: #df6752;\n}\n.main_content table tr {\n  border-bottom: none;\n}\n.main_content td {\n  padding: 5px 0 5px 0;\n  font-size: 15px;\n}\n.main_content td:first-child {\n    min-width: 55%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS9ydWxlcy1wYWQvcnVsZXMtcGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2JhY2twYWNrLXByby9wYWdlcy9lZGl0LWFjdGl2aXR5LXBhZ2UvcnVsZXMtcGFkL3J1bGVzLXBhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fdGl0bGUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX3RpdGxlID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fdGl0bGUgaDUsXG4ubWFpbl90aXRsZSBoNntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYWluX3RpdGxlIC5lZGl0X2J0bntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLndyYXBwZXJfY29udGFpbmVyIC5jYXJkIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwcGVyX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NzhhOyAqL1xufVxuLm1haW5fY29udGVudHtcbiAgY29sb3I6ICM4Njg2ODY7XG59XG4ubWFpbl9jb250ZW50IGg2e1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMCAwIC42ZW07XG59XG4ubWFpbl9jb250ZW50IGF7XG4gIGNvbG9yOiAjZGY2NzUyO1xufVxuLm1haW5fY29udGVudCB0YWJsZSB0ciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ubWFpbl9jb250ZW50IHRkIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnQgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIG1pbi13aWR0aDogNTUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title\">\n          <h5>Rules & Requirments </h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"main_content\">\n            <h6>Activity Rules:</h6>\n            <table>\n              <tr>\n                <td>National ID is Required</td>\n              </tr>\n              <tr>\n                <td>No Drugs</td>\n              </tr>\n              <tr>\n                <td>Meet in Assembly point at 2PM</td>\n              </tr>\n              <tr>\n                <td>Transportation leaves at 3PM</td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"main_content m-t-10\">\n            <h6>Requirments:</h6>\n            <p>In order for you and everyone else to have fun and enjoy their time, please, follow all tip rules.</p>\n            <p>1. Make sure you be at the assembly point on time. Payments and checking will be in 30 minutes time.\n              if you are late, then you will be the reason…\n              <a href=\"\" class=\"custom_link\">(read more)</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RulesPadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPadComponent", function() { return RulesPadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RulesPadComponent = /** @class */ (function () {
    function RulesPadComponent() {
    }
    RulesPadComponent.prototype.ngOnInit = function () {
    };
    RulesPadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'rules-pad',
            template: __webpack_require__(/*! ./rules-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.html"),
            styles: [__webpack_require__(/*! ./rules-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/rules-pad/rules-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RulesPadComponent);
    return RulesPadComponent;
}());



/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Header component */\n.main_title {\n  height: 40px;\n  line-height: 30px;\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n  color: #4A4A4A;\n  margin-bottom: 20px;\n}\n.main_title > * {\n  display: inline;\n  font-size: 14px;\n}\n.main_title h5,\n.main_title h6{\n  font-weight: 500;\n}\n.main_title .edit_btn{\n  float: right;\n}\n.wrapper_container {\n  width: 100%;\n  float: left;\n  margin-bottom: 2em;\n  /* border-bottom: 1px solid #9797978a; */\n}\n.main_content{\n  color: #868686;\n}\n.main_content h6{\n  font-size: 18px;\n  margin: 0 0 .6em;\n}\n.main_content a{\n  color: #df6752;\n}\n.male_img,\n.female_img,\n.family_img,\n.kid_img{\n  width: 35px;\n  height: 30px;\n  display: inline-block;\n  position: relative;\n  top: 5px;\n}\n.main_content ul li{\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  min-width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3BhY2stcHJvL3BhZ2VzL2VkaXQtYWN0aXZpdHktcGFnZS90eXBlL3R5cGUtcGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2JhY2twYWNrLXByby9wYWdlcy9lZGl0LWFjdGl2aXR5LXBhZ2UvdHlwZS90eXBlLXBhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBIZWFkZXIgY29tcG9uZW50ICovXG4ubWFpbl90aXRsZSB7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fdGl0bGUgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl90aXRsZSBoNSxcbi5tYWluX3RpdGxlIGg2e1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1haW5fdGl0bGUgLmVkaXRfYnRue1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi53cmFwcGVyX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NzhhOyAqL1xufVxuLm1haW5fY29udGVudHtcbiAgY29sb3I6ICM4Njg2ODY7XG59XG4ubWFpbl9jb250ZW50IGg2e1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMCAwIC42ZW07XG59XG4ubWFpbl9jb250ZW50IGF7XG4gIGNvbG9yOiAjZGY2NzUyO1xufVxuLm1hbGVfaW1nLFxuLmZlbWFsZV9pbWcsXG4uZmFtaWx5X2ltZyxcbi5raWRfaW1ne1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50IHVsIGxpe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <div class=\"wrapper_container\">\n      <div class=\"row\">\n        <div class=\"col s12 m12 main_title\">\n          <h5>Title, Type, and Discription</h5>\n          <button class=\"edit_btn\">Edit</button>\n        </div>\n        <div class=\"col s12 m12\">\n          <div class=\"main_content\">\n            <h6>Hiking in Khulais</h6>\n            <p>Land Activity.</p>\n            <ul>\n              <li><span class=\"male_img\"></span>Males</li>\n              <li><span class=\"female_img\"></span>Females</li>\n              <li><span class=\"family_img\"></span>Family friendly</li>\n            </ul>\n            <p>\n              This field will contain the discription of this activity.\n              but it will be only a few lines and the rest can be seen editing it will be only a few lines and the\n              reset can be seen editing <span class=\"danger\"><a href=\"#\">read more</a></span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col m5 hide-on-med-and-down\">\n    <status-card></status-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TypePadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePadComponent", function() { return TypePadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypePadComponent = /** @class */ (function () {
    function TypePadComponent() {
    }
    TypePadComponent.prototype.ngOnInit = function () {
    };
    TypePadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'type-pad',
            template: __webpack_require__(/*! ./type-pad.component.html */ "./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.html"),
            styles: [__webpack_require__(/*! ./type-pad.component.css */ "./src/app/backpack-pro/pages/edit-activity-page/type/type-pad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypePadComponent);
    return TypePadComponent;
}());



/***/ }),

/***/ "./src/app/common/activity-book-panel.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/activity-book-panel.component.ts ***!
  \*********************************************************/
/*! exports provided: ActivityBookPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityBookPanelComponent", function() { return ActivityBookPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActivityBookPanelComponent = /** @class */ (function () {
    function ActivityBookPanelComponent() {
        this.activityOptions = [
            { value: 'sea', viewValue: 'Sea' },
            { value: 'land', viewValue: 'Land' },
            { value: 'sky', viewValue: 'Sky' },
        ];
    }
    ActivityBookPanelComponent.prototype.ngOnInit = function () {
    };
    ActivityBookPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'activity-book-panel',
            template: "\n    <div class=\"banner_card\">\n      <div class=\"b_card_content\">\n        <div class=\"input-field col m12 custom_inputs\">\n          <h6>Book New</h6>\n          <mat-form-field>\n             <mat-select>\n               <mat-option *ngFor=\"let activity of activityOptions\" [value]=\"activity.value\">\n                 {{activity.viewValue}}\n               </mat-option>\n             </mat-select>\n           </mat-form-field>\n        </div>\n        <div class=\"input-field col m12 custom_inputs\">\n          <label for=\"date\">Date:</label>\n          <input type=\"text\" id=\"date\" class=\"input_control full\" placeholder=\"12 Mar 2018\" />\n        </div>\n        <div class=\"input-field col m12 custom_inputs\">\n          <label for=\"time\">Time:</label>\n          <input type=\"text\" id=\"time\" class=\"input_control full\" placeholder=\"04:00 pm - 10:00 pm\" />\n        </div>\n      </div>\n      <button class=\"btn_book\">\n        <span class=\"price_display\">\n          <span>SR 0</span>\n          <span>per individual</span>\n        </span>\n        <span>\n          Book it\n        </span>\n      </button>\n    </div>\n  ",
            styles: ["\n    .banner_card{\n    \tmax-width: 320px;\n      border: 1px solid #83267E;\n    \tborder-radius: 8px;\n      float: right;\n      overflow: hidden;\n    }\n    .banner_card h6{\n      font-size: 14px;\n      color: #83267E;\n      font-weight: 500;\n    }\n    .b_card_content {\n      float: left;\n      width: 100%;\n      padding: 1em 1em 2em;\n    }\n    .custom_inputs > label{\n      transform: none !important;\n      top: 5px;\n    }\n    .custom_inputs > input{\n      text-align: right !important;\n      height: 30px !important;\n      padding-bottom: 5px;\n    }\n    .custom_inputs .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n      text-align: right !important;\n    }\n    .btn_book {\n      width: 100%;\n      height: 75px;\n      line-height: 58px;\n      background: #fff;\n      border: 1px solid #e4e4e4;\n      cursor: pointer;\n    }\n    .btn_book > span:last-child {\n      font-size: 24px;\n      margin: 0 15px;\n      color: #7a427d;\n      font-weight: bold;\n    }\n    .price_display span {\n      display: block;\n      line-height: 19px;\n      font-size: 12px;\n    }\n    .price_display span:first-child {\n      font-weight: bolder;\n      font-size: 15px;\n    }\n    .price_display {\n      background: #7a427d;\n      color: #fff;\n      width: 120px;\n      height: 45px;\n      float: left;\n      margin: 10px 0 0 25px;\n      padding: 3px;\n      line-height: 40px;\n    }\n  "]
        })
    ], ActivityBookPanelComponent);
    return ActivityBookPanelComponent;
}());



/***/ }),

/***/ "./src/app/common/book-panel.component.ts":
/*!************************************************!*\
  !*** ./src/app/common/book-panel.component.ts ***!
  \************************************************/
/*! exports provided: BookPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPanelComponent", function() { return BookPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookPanelComponent = /** @class */ (function () {
    function BookPanelComponent() {
        this.adultCount = 0;
        this.childCount = 0;
        this.activityOptions = [
            { value: 'sea', viewValue: 'Sea' },
            { value: 'land', viewValue: 'Land' },
            { value: 'sky', viewValue: 'Sky' },
        ];
    }
    BookPanelComponent.prototype.ngOnInit = function () {
    };
    BookPanelComponent.prototype.adultMinusCounter = function () {
        if (this.adultCount <= 0) {
            this.adultCount = 0;
        }
        else {
            this.adultCount -= 1;
        }
    };
    BookPanelComponent.prototype.adultPlusCounter = function () {
        this.adultCount += 1;
    };
    BookPanelComponent.prototype.childMinusCounter = function () {
        if (this.childCount <= 0) {
            this.childCount = 0;
        }
        else {
            this.childCount -= 1;
        }
    };
    BookPanelComponent.prototype.childPlusCounter = function () {
        this.childCount += 1;
    };
    BookPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-panel',
            template: "\n    <div class=\"banner_card\">\n      <div class=\"b_card_content\">\n        <div class=\"input-field col m12 s12 custom_inputs\">\n          <h6>Book New</h6>\n          <mat-form-field>\n             <mat-select>\n               <mat-option *ngFor=\"let activity of activityOptions\" [value]=\"activity.value\">\n                 {{activity.viewValue}}\n               </mat-option>\n             </mat-select>\n           </mat-form-field>\n        </div>\n        <div class=\"input-field col m12 s12 custom_inputs booking_date filled_date_picker\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"date\" name=\"date\">\n            <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n            <mat-datepicker #date></mat-datepicker>\n          </mat-form-field>\n        </div>\n\n        <div class=\"input-field col m12 s12 custom_inputs\">\n          <label for=\"time\">Time:</label>\n          <input type=\"text\" id=\"time\" class=\"input_control full\" placeholder=\"04:00 pm - 10:00 pm\" />\n        </div>\n        <div class=\"input-field col m12 s12\">\n          <p class=\"purple-label\">05/18 Tickets left</p>\n        </div>\n        <div class=\"input-field col m12 s12\">\n          <table class=\"counter_section\">\n            <tr>\n              <td>Adult</td>\n              <td>\n                <button (click)=\"adultMinusCounter()\">-</button>\n                <span>{{ adultCount }}</span>\n                <button (click)=\"adultPlusCounter()\">+</button>\n              </td>\n            </tr>\n            <tr>\n              <td>Children <span class=\"label_tag\">6 years - 13 years</span></td>\n              <td>\n                <button (click)=\"childMinusCounter()\">-</button>\n                <span>{{ childCount }}</span>\n                <button (click)=\"childPlusCounter()\">+</button>\n              </td>\n            </tr>\n          </table>\n        </div>\n        <section class=\"form_panel\">\n          <h5>backpacker No. 1</h5>\n          <div class=\"input-field s12 col m12\">\n            <input type=\"text\" class=\"input_control full\" placeholder=\"Name\" />\n          </div>\n          <div class=\"input-field s12 col m12\">\n            <input type=\"text\"  class=\"input_control full\" placeholder=\"Mobile No.\" />\n          </div>\n          <div class=\"input-field s12 col m12\">\n            <input type=\"text\"  class=\"input_control full\" placeholder=\"Email\" />\n          </div>\n          <div class=\"s12 col m12\">\n            <div class=\"addon_slider squares\">\n              <div class=\"card_it selected_active\">\n                <div class=\"icon_panel\">\n                  <span><img src=\"../../../assets/img/bus.png\" /></span>Included\n                </div>\n                <div class=\"info_panel\">\n                  <span>Transport</span>\n                  <span>Location</span>\n                </div>\n              </div>\n              <div class=\"card_it\">\n                <div class=\"icon_panel\">\n                  <span><img src=\"../../../assets/img/mini_jeep.png\" /></span>Included\n                </div>\n                <div class=\"info_panel\">\n                  <span>Food</span>\n                  <span>Snacks - Dinner</span>\n                </div>\n              </div>\n              <div class=\"card_it\">\n                <div class=\"icon_panel\">\n                  <span><img src=\"../../../assets/img/mini_jeep.png\" /></span>Included\n                </div>\n                <div class=\"info_panel\">\n                  <span>Safari</span>\n                  <span>4X4 Cars - Sand</span>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </section>\n\n      </div>\n      <button class=\"btn_book\">\n        <span class=\"price_display\">\n          <span>SR 0</span>\n          <span>per individual</span>\n        </span>\n        <span>\n          Book it\n        </span>\n      </button>\n    </div>\n  ",
            styles: ["\n    .banner_card{\n    \tmax-width: 320px;\n      border: 1px solid #83267E;\n    \tborder-radius: 8px;\n      float: right;\n      overflow: hidden;\n    }\n    @media(max-width: 600px){\n      .banner_card{\n        float: none;\n        margin: 1em auto 5em;\n      }\n    }\n    .banner_card h6{\n      font-size: 14px;\n      color: #83267E;\n      font-weight: 500;\n    }\n    .b_card_content {\n      float: left;\n      width: 100%;\n      padding: 1em 1em 2em;\n      height: 400px;\n      background: #fff;\n      overflow: scroll;\n    }\n    .custom_inputs > label{\n      transform: none !important;\n      top: 5px;\n    }\n    .custom_inputs > input{\n      text-align: right !important;\n      height: 30px !important;\n      padding-bottom: 5px;\n    }\n    .custom_inputs .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n      text-align: right !important;\n    }\n    input.mat-input-element {\n      margin-top: -.0625em;\n      padding-left: 0;\n      color: #9B9B9B;\n      text-align: right;\n    }\n    .form_panel {\n      float: left;\n      box-shadow: 0px 1px 1px 1px #f1f1f1;\n      border-radius: 3px;\n      padding: 0 15px 1em;\n      margin: 10px auto 2em;\n      max-width: 285px;\n    }\n    .form_panel h5{\n      color: #9B9B9B;\n      font-size: 16px;\n      padding: 0 10px;\n    }\n    .custom_inputs .mat-form-field {\n      height: 52px !important;\n    }\n    .form_panel input.input_control{\n      padding-left: 0 !important;\n      height: 30px !important;\n    }\n    .card_it {\n      display: inline-block;\n      box-shadow: 1px 1px 3px #ccc;\n      border: 1px solid transparent;\n      padding: 15px 10px;\n      font-size: 70%;\n      height: 110px;\n      width: 100px;\n      margin-right: 10px;\n      float: left;\n      border-radius: 2px;\n    }\n    .selected_active{\n      border: 1px solid #7a427d;\n    }\n    .addon_slider{\n      display: flex;\n      flex-wrap: nowrap;\n      overflow-x: auto;\n      padding: 10px 2px;\n    }\n    .addon_slider > div{\n      flex: 0 0 auto;\n    }\n    .addon_slider::-webkit-scrollbar {\n      display: none;\n    }\n    .icon_panel {\n      display: flex;\n      line-height: 20px;\n      margin-bottom: 10px;\n    }\n    .icon_panel > span{\n      margin-right: 5px;\n      max-width: 40px;\n    }\n    .info_panel > span:first-child{\n      font-weight: 600;\n      display: block;\n    }\n    .btn_book {\n      width: 100%;\n      height: 75px;\n      line-height: 58px;\n      background: #fff;\n      border: 1px solid #e4e4e4;\n      cursor: pointer;\n    }\n    .btn_book > span:last-child {\n      font-size: 24px;\n      margin: 0 15px;\n      color: #7a427d;\n      font-weight: bold;\n    }\n    .price_display span {\n      display: block;\n      line-height: 19px;\n      font-size: 12px;\n    }\n    .price_display span:first-child {\n      font-weight: bolder;\n      font-size: 15px;\n    }\n    .price_display {\n      background: #7a427d;\n      color: #fff;\n      width: 120px;\n      height: 45px;\n      float: left;\n      margin: 10px 0 0 25px;\n      padding: 3px;\n      line-height: 40px;\n    }\n    .purple-label{\n      color: #7a427d;\n      margin: 0;\n      font-size: 14px;\n    }\n    .label_tag{\n      font-size: 10px;\n      display: block;\n    }\n    tr{\n      border-bottom: none;\n    }\n    tr td{\n      width: 50%;\n      color: #9B9B9B;\n      font-size: 16px;\n      padding: 10px 0;\n    }\n    tr td:last-child{\n      text-align: center;\n    }\n    td button{\n      width: 27px;\n      height: 27px;\n      border-radius: 50%;\n      margin: 0;\n      background: transparent !important;\n      box-shadow: inset 0 0 6px 0 rgba(0,0,0,0.012), inset 0 4px 4px 0 rgba(0,0,0,0.024), 1px 5px 8px 0px rgba(0,0,0,0.02), 0 1px 0px 0 rgba(0,0,0,0.03);\n      cursor: pointer;\n    }\n    tr td:last-child > span{\n      width: 45px;\n      display: inline-block;\n      font-size: 20px;\n    }\n  "]
        })
    ], BookPanelComponent);
    return BookPanelComponent;
}());



/***/ }),

/***/ "./src/app/common/status-card.component.ts":
/*!*************************************************!*\
  !*** ./src/app/common/status-card.component.ts ***!
  \*************************************************/
/*! exports provided: StatusCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCardComponent", function() { return StatusCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusCardComponent = /** @class */ (function () {
    function StatusCardComponent() {
    }
    // @Input() data: any;
    StatusCardComponent.prototype.ngOnInit = function () {
    };
    StatusCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'status-card',
            template: "\n    <div class=\"banner_card\">\n      <div class=\"b_card_content\">\n        <h6>Activity Status</h6>\n        <div class=\"switch\">\n         <label>\n           <span class=\"switch_on\">ON</span>\n           <input type=\"checkbox\"><span class=\"lever\"></span>\n           <span class=\"switch_off\">OFF</span>\n         </label>\n         </div>\n      </div>\n      <div class=\"b_card_content\">\n        <p>Always ask backpackers to verify their ID before attempting a booking</p>\n      </div>\n    </div>\n  ",
            styles: ["\n    .banner_card {\n      border: 1px solid #83267E;\n      background-color: #ffffff;\n      border-radius: 8px;\n      height: 150px;\n      padding: 1.5em;\n      width: 70%;\n      margin-bottom: 2em;\n      position: relative;\n      float: right;\n    }\n    .banner_card h6 {\n      font-weight: 500;\n      text-transform: capitalize;\n      color: #818181;\n      margin: 8px 30px 0 0;\n    }\n    .b_card_content{\n      display: flex;\n    }\n    .b_card_content h6 span{\n      color: #83267E;\n      font-size: 18px;\n      font-weight: 100;\n      font-size: 14px;\n    }\n    .b_card_content p{\n      font-size: 14px;\n      color: #979797;\n    }\n    .banner_card .switch{\n      position: relative;\n      width: 75px;\n    }\n    .switch label {\n      float: left;\n      width: 100%;\n    }\n    .switch label .lever {\n      width: 100%;\n      height: 30px;\n      background-color: #fff;\n      border: 1px solid #7a427d;\n      border-radius: 9px;\n      overflow: hidden;\n      margin: 0;\n    }\n    .switch label .lever:before, .switch label .lever:after{\n      width: 32px;\n      height: 24px;\n      border-radius: 6px;\n      left: 2px;\n      top: 2px;\n      box-shadow: none !important;\n      background-color: #7a427d;\n    }\n    .switch label input[type=checkbox]:checked + .lever:before,\n    .switch label input[type=checkbox]:checked + .lever:after{\n      left: 39px;\n      background-color: #7a427d;\n    }\n    .switch_on,\n    .switch_off{\n      position: absolute;\n      z-index: 1;\n      color: #7a427d;\n      height: 30px;\n      width: 30px;\n      line-height: 30px;\n      text-align: center;\n    }\n    .switch_on {\n      left: 5px;\n    }\n    .switch_off {\n      right: 5px;\n    }\n  "]
        })
    ], StatusCardComponent);
    return StatusCardComponent;
}());



/***/ }),

/***/ "./src/app/state/activity/index.ts":
/*!*****************************************!*\
  !*** ./src/app/state/activity/index.ts ***!
  \*****************************************/
/*! exports provided: getActivityState, getActivity, getActivities, getActivityTypes, getAllAddOns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityState", function() { return getActivityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivity", function() { return getActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivities", function() { return getActivities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityTypes", function() { return getActivityTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAddOns", function() { return getAllAddOns; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _activity_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity.reducers */ "./src/app/state/activity/activity.reducers.ts");


var getActivityState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("activity");
var getActivity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getActivityState, _activity_reducers__WEBPACK_IMPORTED_MODULE_1__["getActivity"]);
var getActivities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getActivityState, _activity_reducers__WEBPACK_IMPORTED_MODULE_1__["getActivities"]);
var getActivityTypes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getActivityState, _activity_reducers__WEBPACK_IMPORTED_MODULE_1__["getTypes"]);
var getAllAddOns = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getActivityState, _activity_reducers__WEBPACK_IMPORTED_MODULE_1__["getAllAddOns"]);


/***/ })

}]);
//# sourceMappingURL=backpack-pro-pages-activity-activity-module.js.map