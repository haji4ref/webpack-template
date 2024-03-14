!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("@arcaptcha/arcaptcha-mouse-tracking",[],t):"object"==typeof exports?exports["@arcaptcha/arcaptcha-mouse-tracking"]=t():e["@arcaptcha/arcaptcha-mouse-tracking"]=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.dispatch=s,t.onTrackerUpdated=function(e){window.addEventListener("tracker-updated",e)},t.getCurrentAvg=f,t.getMouseTracking=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;l=e,setInterval((function(){var e=(0,o.default)();e&&(f(e),s(d))}),100)},t.getAllData=function(){var e=(0,o.default)(!0);return e.length&&f(e),console.log(d),r({timeTaking:new Date-l,mouse_tracking:d},(0,u.default)(),(0,i.default)())};var o=c(n(2)),a=c(n(4)),u=c(n(5)),i=c(n(6));function c(e){return e&&e.__esModule?e:{default:e}}var d=[],l=void 0;function s(e){window.dispatchEvent(new CustomEvent("tracker-updated",{detail:e}))}function f(e){return d.push((0,a.default)(e)),d}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null==w)return void(w=Date.now());if(v&&p){var t=Math.abs(p.screenX-v.screenX),n=Math.abs(p.screenY-v.screenY);b+=Math.sqrt(t*t+n*n);var o=Date.now(),a=(o-w)/1e3,h=b/a,x=(h-d)/a,_=0,T=0;if(x>0?_=x>l?l=x:l:T=x<s?s=x:s,i&&(m.push(r({},(0,u.default)(),{movementX:t,movementY:n,movement:b,speed:h.toFixed(2),maxSpeed:(h>c?c=h:c).toFixed(2),acceleration:x.toFixed(2),maxPositiveAcceleration:_.toFixed(2),maxNegativeAcceleration:T.toFixed(2),mouseEvents:f,mouseEventsTimeIntervals:g})),i=!1,w=o,m.length>5)){var F=m;return m=[],g=[],f=0,b=0,F}}y||(v=p);h&&(d=h);return e?m:null};var o,a=n(3),u=(o=a)&&o.__esModule?o:{default:o};var i=!1,c=0,d=0,l=0,s=0,f=0,v=void 0,p=void 0,m=[],g=[],h=0,x=0,b=0,w=null,y=/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent);y?(document.addEventListener("touchstart",(function(e){v=e.changedTouches[0]})),document.addEventListener("touchend",(function(e){p=e.changedTouches[0]}))):document.addEventListener("mousemove",(function(e){h=new Date,p=e,i=!0;var t=h-x;0!==x&&t>10&&g.push(t),x=h,f++}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{dragDropSpeed:a-u==0?0:((r-o)/(a-u)).toFixed(2)}};var r=0,o=0,a=0,u=0;document.addEventListener("dragstart",(function(e){r=Math.sqrt(e.clientX*e.clientX+e.clientY*e.clientY),a=(new Date).getTime()})),document.addEventListener("dragend",(function(e){u=(new Date).getTime(),o=Math.sqrt(e.clientX*e.clientX+e.clientY*e.clientY)}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.length,n=e.reduce((function(e,n){return e+n.movementX/t}),0),r=e.reduce((function(e,n){return e+n.movementY/t}),0),o=e[t-1].movement,a=e.reduce((function(e,n){return e+n.speed/t}),0),u=e.reduce((function(e,n){return e+n.maxSpeed/t}),0),i=e.reduce((function(e,n){return e+n.acceleration/t}),0),c=e.reduce((function(e,n){return e+n.maxPositiveAcceleration/t}),0),d=e.reduce((function(e,n){return e+n.maxNegativeAcceleration/t}),0),l=e.reduce((function(e,n){return e+n.dragDropSpeed/t}),0),s=e[t-1].mouseEvents,f=e[t-1].mouseEventsTimeIntervals;return{movementX:parseFloat(n.toFixed(2)),movementY:parseFloat(r.toFixed(2)),movement:parseFloat(o.toFixed(2)),speed:parseFloat(a.toFixed(2)),maxSpeed:parseFloat(u.toFixed(2)),acceleration:parseFloat(i.toFixed(2)),maxPositiveAcceleration:parseFloat(c.toFixed(2)),maxNegativeAcceleration:parseFloat(d.toFixed(2)),dragDropSpeed:parseFloat(l.toFixed(2)),mouseEvents:s,mouseEventsTimeIntervals:f}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{clicks:{count:u,unclickable_elements:r},scrolled:i,scroll_amount:a,scroll_speed:o}};var r=[],o=[],a=[],u=0,i=!1;window.addEventListener("click",(function(e){var t=e.target,n=t.nodeName;"BUTTON"!==n&&"A"!==n&&"input-checkbox"!==t.id&&r.push(n),u++}));var c=function(){var e,t,n,r;function o(){e=null,r=0}return o(),function(){return t=window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop,null!=e&&(r=t-e),e=t,clearTimeout(n),n=setTimeout(o,50),r}}();window.onscroll=function(e){i=!0;var t=window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop;a.push(t);var n=c();o.push(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{isTouch:r,touchCount:o}};var r,o=0;r="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,document.addEventListener("touchstart",(function(){o++}))}])}));