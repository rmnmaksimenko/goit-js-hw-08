function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,y=function(){return l.Date.now()};function m(t,e,n){var i,o,r,u,f,a,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,r=o;return i=o=void 0,c=e,u=t.apply(r,n)}function T(t){return c=t,f=setTimeout(w,e),l?b(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function w(){var t=y();if(j(t))return h(t);f=setTimeout(w,function(t){var n=e-(t-a);return s?p(n,r-(t-c)):n}(t))}function h(t){return f=void 0,m&&i?b(t):(i=o=void 0,u)}function x(){var t=y(),n=j(t);if(i=arguments,o=this,a=t,n){if(void 0===f)return T(a);if(s)return f=setTimeout(w,e),b(a)}return void 0===f&&(f=setTimeout(w,e)),u}return e=g(e)||0,v(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(g(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},x.flush=function(){return void 0===f?u:h(y())},x}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(t,e,{leading:i,maxWait:e,trailing:o})};const b=document.querySelector("iframe"),T=new Vimeo.Player(b),j=parseFloat(localStorage.getItem("playedTime"));j&&(console.log(j),T.setCurrentTime(j));const w=t(e)((function(t){localStorage.setItem("playedTime",t)}),1e3);T.on("timeupdate",(function(t){w(t.seconds)}));
//# sourceMappingURL=02-video.782199b4.js.map
