!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class n{constructor(e,t,r,n){this.id=e,this.make=t,this.model=r,this.price=n}}carsApp.controller("CarsController",function(e,t){function r(){e.processedData={},e.action.create=!1,e.action.update=!1}e.cars=[],t.getCars().then(t=>{e.cars=t}),e.action={create:!1,update:!1},e.processedData={},e.onCreateAction=(()=>{e.action.create=!0,e.action.update=!1}),e.onUpdateAction=(t=>{e.action.create=!1,e.action.update=!0,e.processedData=angular.copy(e.cars.find(e=>e.id===t))}),e.onDeleteAction=(n=>{const o=e.cars.find(e=>e.id===n),c=e.cars.indexOf(o);e.cars.splice(c,1),t.deleteCar(n),r()}),e.process=((o,c,a,i)=>{if(void 0===o){let r=function(){let t=0;return e.cars.forEach(e=>{t<e.id&&(t=e.id)}),t}()+1;const o=new n(r,c,a,i);e.cars.push(o),t.createCar(o)}else{const r=e.cars.find(e=>e.id===o);r.make=c,r.model=a,r.price=i,t.updateCar(r)}r()}),e.cancel=(()=>{r()})})}]);