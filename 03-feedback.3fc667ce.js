!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,g=Math.min,m=function(){return s.Date.now()};function p(e,t,n){var o,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(h,t),d?p(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=m();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?p(e):(o=i=void 0,a)}function T(){var e=m(),n=S(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(h,t),p(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=O(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?a:w(m())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),S="feedback-form-state",h={},w=localStorage.getItem("".concat(S));if(w)for(var T in savedObject=JSON.parse(w),savedObject)j[T].value=h[T]=savedObject[T];j.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,JSONStorageForm=JSON.stringify(h),localStorage.setItem(S,JSONStorageForm)}),500)),j.addEventListener("submit",(function(e){for(T in e.preventDefault(),console.log(h),localStorage.removeItem("".concat(S)),j.reset(),h)h[T]=""}))}();
//# sourceMappingURL=03-feedback.3fc667ce.js.map