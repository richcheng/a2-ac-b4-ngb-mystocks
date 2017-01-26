webpackJsonp([0,4],{407:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return r});var a=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t.prototype.ngOnInit=function(){},t=a([n.i(o._2)({selector:"app-about",template:n(768),styles:[n(763)]}),i("design:paramtypes",[])],t)}()},408:function(t,e,n){"use strict";var o=n(0),a=n(382),i=n(594),r=n(19);n.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e){this._firebaseService=t,this.modalService=e,this.todayDate=(new Date).toISOString().substring(0,10),this.addOrEditState="",this.datePipe=new r.h("en-US")}return t.prototype.isInvalid=function(t,e){return!t.valid&&(t.touched||e.submitted)},t.prototype.clearForm=function(){this.activeStock={symbol:"",name:"",dateCreated:this.todayDate}},t.prototype.formatForServer=function(t){if(null===t)return"";try{return this.datePipe.transform(new Date(t.year,t.month-1,t.day),"y-MM-dd")}catch(t){return""}},t.prototype.openModal=function(){"Add"==this.addOrEditState&&(this.initializeNewStock(),console.log("New Stock:"),console.log(this.activeStock)),this.dialog=this.modalService.open(this.stockModal)},t.prototype.initializeNewStock=function(){var t={symbol:"F",name:"Ford",share:100,category:"Auto",datePurchased:this.todayDate,dateCreated:this.todayDate};this.activeStock=t},t.prototype.cancelModal=function(){this.dialog&&(this.dialog.dismiss(),this.dialog=null)},t.prototype.setActiveStock=function(t){this.addOrEditState="Edit",console.log(t),this.activeKey=t.$key;var e={symbol:t.symbol,name:t.name,share:t.share,category:t.category,datePurchased:t.datePurchased,dateCreated:t.dateCreated};this.activeStock=e},t.prototype.saveModal=function(){"Add"==this.addOrEditState?this._firebaseService.addStock(this.activeStock):"Edit"==this.addOrEditState&&this._firebaseService.updateStock(this.activeKey,this.activeStock),this.dialog&&(this.dialog.close(),this.dialog=null)},t.prototype.ngOnInit=function(){var t=this;this._firebaseService.getStocks().subscribe(function(e){t.stocks=e}),this._firebaseService.getCategories().subscribe(function(e){t.categories=e})},t.prototype.filterCategory=function(t){var e=this;this._firebaseService.getStocks(t).subscribe(function(t){e.stocks=t})},t.prototype.deleteStock=function(t){this._firebaseService.deleteStock(t)},t.prototype.onSubmit=function(){this.saveModal()},c([n.i(o._8)("stockModal"),s("design:type","function"==typeof(e="undefined"!=typeof o.H&&o.H)&&e||Object)],t.prototype,"stockModal",void 0),t=c([n.i(o._2)({selector:"app-dashboard",template:n(770),styles:[n(765)],providers:[i.a]}),s("design:paramtypes",["function"==typeof(l="undefined"!=typeof i.a&&i.a)&&l||Object,"function"==typeof(d="undefined"!=typeof a.b&&a.b)&&d||Object])],t);var e,l,d}()},465:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=465},466:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(n(596),n(558)),a=n(0),i=n(595),r=n(591);i.a.production&&n.i(a.a)(),n.i(o.a)().bootstrapModule(r.a)},590:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return r});var a=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t=a([n.i(o._2)({selector:"app-root",template:n(769),styles:[n(764)]}),i("design:paramtypes",[])],t)}()},591:function(t,e,n){"use strict";var o=n(158),a=n(0),i=n(58),r=n(592),c=n(554),s=n(411),l=n(590),d=n(382),f=n(407),u=n(408),p=n(593);n.d(e,"a",function(){return y});var v=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h={apiKey:"AIzaSyCQ7OQk8gLkCgiqh2KGefTgOa4O5oZCvo4",authDomain:"stocks-f03e1.firebaseapp.com",databaseURL:"https://stocks-f03e1.firebaseio.com",storageBucket:"stocks-f03e1.appspot.com"},y=function(){function t(){}return t=v([n.i(a.b)({declarations:[l.a,f.a,p.a,u.a],imports:[o.a,i.a,c.a,s.a.initializeApp(h),d.a.forRoot(),r.a],providers:[],bootstrap:[l.a]}),b("design:paramtypes",[])],t)}()},592:function(t,e,n){"use strict";var o=n(578),a=n(408),i=n(407);n.d(e,"a",function(){return c});var r=[{path:"",component:a.a},{path:"about",component:i.a}],c=o.a.forRoot(r)},593:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return r});var a=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t.prototype.ngOnInit=function(){},t=a([n.i(o._2)({selector:"app-navbar",template:n(771),styles:[n(766)]}),i("design:paramtypes",[])],t)}()},594:function(t,e,n){"use strict";var o=n(0),a=n(411),i=n(779);n.n(i);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this._af=t}return t.prototype.getStocks=function(t){return void 0===t&&(t=null),null!=t?this.stocks=this._af.database.list("/stocks",{query:{orderByChild:"category",equalTo:t}}):this.stocks=this._af.database.list("/stocks"),this.stocks},t.prototype.getCategories=function(){return this.categories=this._af.database.list("/categories"),this.categories},t.prototype.addStock=function(t){return this.stocks.push(t)},t.prototype.updateStock=function(t,e){return this.stocks.update(t,e)},t.prototype.deleteStock=function(t){return this.stocks.remove(t)},t=r([n.i(o.z)(),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.b&&a.b)&&e||Object])],t);var e}()},595:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},596:function(t,e,n){"use strict";var o=n(619),a=(n.n(o),n(612)),i=(n.n(a),n(608)),r=(n.n(i),n(614)),c=(n.n(r),n(613)),s=(n.n(c),n(611)),l=(n.n(s),n(610)),d=(n.n(l),n(618)),f=(n.n(d),n(607)),u=(n.n(f),n(606)),p=(n.n(u),n(616)),v=(n.n(p),n(609)),b=(n.n(v),n(617)),h=(n.n(b),n(615)),y=(n.n(h),n(620)),m=(n.n(y),n(800));n.n(m)},763:function(t,e){t.exports=""},764:function(t,e){t.exports=""},765:function(t,e){t.exports=".ng-valid[required], .ng-valid.required{\r\n  border-left:5px solid #42A948;\r\n}\r\n\r\n.ng-invalid:not(form){\r\n  border-left:5px solid #a94442;\r\n}"},766:function(t,e){t.exports=""},768:function(t,e){t.exports="\n<h4>This CRUD app utilizes: </h4>\n\n\n<ul>\n     <li>Angular-cli</li>\n     <li>Angular 2</li>\n     <li>Bootstrap 4</li>\n     <li>angular-ui team's ng-bootstrap</li>\n     <li>NgbModal</li>     \n     <li>Firebase</li>        \n</ul>\n\n\n"},769:function(t,e){t.exports='<div class="container">\n    <app-navbar></app-navbar>    \n    <router-outlet></router-outlet>\n\n    <hr/>\n    <footer>\n        <div class="row">\n            <div class="col-md-4">Angular2 - Bootstrap 4</div>\n            <div class="col-md-4 text-center">Rich Cheng</div>\n            <div class="col-md-4 text-right">&copy; 2017</div>\n        </div>\n    </footer>    \n</div>'},770:function(t,e){t.exports='<form (ngSubmit)="onSubmit(theForm)" #theForm="ngForm" novalidate>\n  <div class="row">\n    <div class="col-md-6">\n      <button type="button" class="btn btn-primary btn-sm" (click)="addOrEditState=\'Add\'; openModal()">Add Stock</button>\n    </div>\n    <div class="col-md-6">\n      <label> Filter Stock Type\n          <select (change)="filterCategory(filteredCategory.value)" #filteredCategory>\n              <option value="0">Select</option>\n              <option *ngFor="let category of categories" value="{{category.name}}">{{category.name}}</option>\n          </select>\n      </label>\n    </div>\n  </div>\n</form>\n\n<!-- stock modal template -->\n<template #stockModal> \n  <div class="modal-header">\n    <h4 class="modal-title">{{addOrEditState}} Stock</h4> \n  </div>\n\n  <div class="modal-body">\n      <div class="form-group row">\n        <label class="col-2 col-form-label" class="col-2 col-form-label" for="symbol">Symbol:</label>\n        <div class="col-10">\n          <input class="form-control" id="symbol" name="activeStock.symbol" [(ngModel)]="activeStock.symbol" #symbol="ngModel" required>\n          <div [hidden]="symbol.valid || symbol.pristine" class="alert alert-danger">Stock symbol is required</div>          \n        </div>\n      </div>\n\n      <div class="form-group row">\n        <label class="col-2 col-form-label" for="activeStock.category">Category:</label>\n        <div class="col-10">\n          <select class="form-control" id="activeStock.category"  [(ngModel)]="activeStock.category">\n            <option value="0">Select</option>\n            <option *ngFor="let category of categories" value="{{category.name}}">{{category.name}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="form-group row">\n        <label class="col-2 col-form-label" for="activeStock.name">Name:</label>\n        <div class="col-10">\n          <input type="text" class="form-control" id="activeStock.name" [(ngModel)]="activeStock.name" #stockName="ngModel" required>\n          <div [hidden]="stockName.valid || stockName.pristine" class="alert alert-danger">Stock name is required</div>  \n        </div>\n      </div>\n\n      <div class="form-group row">\n          <label class="col-2 col-form-label" for="activeStock.share">Share:</label>\n          <div class="col-10">\n            <input type="text" class="form-control" id="activeStock.share" [(ngModel)]="activeStock.share" required>\n          </div>\n      </div>\n\n      <div class="form-group row">\n          <label class="col-2 col-form-label" for="activeStock.datePurchased">Date:</label>\n          <div class="input-group col-8">          \n              <input ngbDatepicker class="form-control" id="activeStock.datePurchased" [(ngModel)]="activeStock.datePurchased" #d="ngbDatepicker">  \n              <div class="input-group-addon" (click)="d.toggle()" >\n                      <img src="img/calendar-icon.svg" style="width: 1rem; height: 1rem; cursor: pointer;"/>\n              </div>                            \n          </div>         \n      </div>\n  </div>\n\n  <div class="modal-footer">\n    <button type="button" class="btn btn-info btn-sm" (click)="clearForm()">Clear</button>\n    <button type="button" class="btn btn-secondary btn-sm" (click)="cancelModal()">Cancel</button>\n    <button type="button" class="btn btn-primary btn-sm" [disabled]="!theForm.form.valid" (click)="saveModal()">Save</button>\n  </div>\n\n</template>\n\n<!-- END stock modal template -->\n\n<!--List stocks in table -->\n\n<div class="row">\n  <div class="col-md-12">\n    <div *ngIf="stocks">\n      <table class="table table-sm table-striped table-hover center">\n        <thead>\n          <tr>\n            <th>Symbol</th>\n            <th>Name</th>\n            <th>Share</th>\n            <th>Date Purchased</th>\n            <th>Category</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let stock of stocks">\n            <td>{{stock.symbol}}</td>\n            <td>{{stock.name}}</td>\n            <td>{{stock.share}}</td>\n            <td>{{formatForServer(stock.datePurchased)}}</td>\n            <td>{{stock.category}}</td>\n\n            <td>\n              <button type="button" class="btn btn-warning btn-sm" (click)="setActiveStock(stock); openModal()">Edit</button>\n              <button (click)="deleteStock(stock.$key)" class="btn btn-sm btn-danger">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<template ngbModalContainer></template>'},771:function(t,e){t.exports='<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">\n  <a class="navbar-brand" href="#">MyStocks</a>\n  <ul class="nav navbar-nav">\n    <li class="nav-item active">\n      <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>\n    </li>\n    <li class="nav-item">\n      <a class="nav-link" routerLink="/about">About</a>\n    </li>\n  </ul>\n</nav>'},801:function(t,e,n){t.exports=n(466)}},[801]);