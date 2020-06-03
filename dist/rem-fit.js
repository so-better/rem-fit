!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.RemFit=e():t.RemFit=e()}(window,(function(){return function(t){var e={};function c(n){if(e[n])return e[n].exports;var l=e[n]={i:n,l:!1,exports:{}};return t[n].call(l.exports,l,l.exports,c),l.l=!0,l.exports}return c.m=t,c.c=e,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)c.d(n,l,function(e){return t[e]}.bind(null,l));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RemFit = function () {\n\tfunction RemFit(proportion, useDpr) {\n\t\t_classCallCheck(this, RemFit);\n\n\t\tthis.proportion = proportion; //屏幕总宽度rem值\n\t\tthis.useDpr = useDpr; //是否考虑dpr\n\t\t//如果dpr未赋值，则默认为true\n\t\tif (typeof this.useDpr != 'boolean') {\n\t\t\tthis.useDpr = true;\n\t\t}\n\t}\n\n\t_createClass(RemFit, [{\n\t\tkey: 'set',\n\t\tvalue: function set() {\n\t\t\tvar html = document.documentElement; //html根节点\n\t\t\tvar dpr = 1; //默认dpr为1\n\t\t\tif (this.useDpr) {\n\t\t\t\tdpr = Math.round(window.devicePixelRatio || 1); //获取设备dpr\n\t\t\t}\n\t\t\tvar scale = 1 / dpr;\n\t\t\tvar metaEle = document.querySelector('meta[name=\"viewport\"]'); //meta元素\n\t\t\t//如果meta元素不存在，则自动创建并加入到head里。\n\t\t\tif (!metaEle) {\n\t\t\t\tmetaEle = document.createElement('meta'); //创建\n\t\t\t\tmetaEle.setAttribute(\"name\", \"viewport\");\n\t\t\t\tmetaEle.setAttribute(\"content\", 'width=device-width,user-scalable=no, initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale);\n\t\t\t\tdocument.getElementsByTagName(\"head\")[0].appendChild(metaEle);\n\t\t\t} else {\n\t\t\t\tmetaEle.setAttribute(\"content\", 'width=device-width,user-scalable=no, initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale);\n\t\t\t}\n\t\t\t//设置根元素字体大小\n\t\t\tvar fontSize = window.innerWidth / this.proportion;\n\t\t\thtml.setAttribute(\"data-standard\", this.proportion);\n\t\t\thtml.setAttribute(\"data-dpr\", dpr); //将dpr绑定到html元素上\n\t\t\thtml.style.fontSize = Math.round(fontSize) + 'px';\n\t\t}\n\t}]);\n\n\treturn RemFit;\n}();\n\nmodule.exports = RemFit;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZW1GaXQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJSZW1GaXQiLCJwcm9wb3J0aW9uIiwidXNlRHByIiwiaHRtbCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZHByIiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNjYWxlIiwibWV0YUVsZSIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsImZvbnRTaXplIiwiaW5uZXJXaWR0aCIsInN0eWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLE07QUFDTCxpQkFBWUMsVUFBWixFQUF1QkMsTUFBdkIsRUFBK0I7QUFBQTs7QUFDOUIsT0FBS0QsVUFBTCxHQUFrQkEsVUFBbEIsQ0FEOEIsQ0FDRDtBQUM3QixPQUFLQyxNQUFMLEdBQWNBLE1BQWQsQ0FGOEIsQ0FFVDtBQUNyQjtBQUNBLE1BQUcsT0FBTyxLQUFLQSxNQUFaLElBQXVCLFNBQTFCLEVBQW9DO0FBQ25DLFFBQUtBLE1BQUwsR0FBYyxJQUFkO0FBQ0E7QUFDRDs7Ozt3QkFFSTtBQUNKLE9BQUlDLE9BQU9DLFNBQVNDLGVBQXBCLENBREksQ0FDaUM7QUFDckMsT0FBSUMsTUFBTSxDQUFWLENBRkksQ0FFUTtBQUNaLE9BQUcsS0FBS0osTUFBUixFQUFlO0FBQ2RJLFVBQU1DLEtBQUtDLEtBQUwsQ0FBV0MsT0FBT0MsZ0JBQVAsSUFBMkIsQ0FBdEMsQ0FBTixDQURjLENBQ2lDO0FBQy9DO0FBQ0QsT0FBSUMsUUFBUSxJQUFJTCxHQUFoQjtBQUNBLE9BQUlNLFVBQVVSLFNBQVNTLGFBQVQsQ0FBdUIsdUJBQXZCLENBQWQsQ0FQSSxDQU8wRDtBQUM5RDtBQUNBLE9BQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ2JBLGNBQVVSLFNBQVNVLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBVixDQURhLENBQzZCO0FBQzFDRixZQUFRRyxZQUFSLENBQXFCLE1BQXJCLEVBQTZCLFVBQTdCO0FBQ0FILFlBQVFHLFlBQVIsQ0FBcUIsU0FBckIsRUFDQyx3REFBd0RKLEtBQXhELEdBQWdFLGlCQUFoRSxHQUFvRkEsS0FBcEYsR0FBNEYsa0JBQTVGLEdBQ0FBLEtBRkQ7QUFHQVAsYUFBU1ksb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNDLFdBQXpDLENBQXFETCxPQUFyRDtBQUNBLElBUEQsTUFPTztBQUNOQSxZQUFRRyxZQUFSLENBQXFCLFNBQXJCLEVBQ0Msd0RBQXdESixLQUF4RCxHQUFnRSxpQkFBaEUsR0FBb0ZBLEtBQXBGLEdBQTRGLGtCQUE1RixHQUNBQSxLQUZEO0FBR0E7QUFDRDtBQUNBLE9BQUlPLFdBQVdULE9BQU9VLFVBQVAsR0FBb0IsS0FBS2xCLFVBQXhDO0FBQ0FFLFFBQUtZLFlBQUwsQ0FBa0IsZUFBbEIsRUFBbUMsS0FBS2QsVUFBeEM7QUFDQUUsUUFBS1ksWUFBTCxDQUFrQixVQUFsQixFQUE4QlQsR0FBOUIsRUF4QkksQ0F3QmdDO0FBQ3BDSCxRQUFLaUIsS0FBTCxDQUFXRixRQUFYLEdBQXNCWCxLQUFLQyxLQUFMLENBQVdVLFFBQVgsSUFBdUIsSUFBN0M7QUFDQTs7Ozs7O0FBSUZHLE9BQU9DLE9BQVAsR0FBaUJ0QixNQUFqQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVtRml0IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wb3J0aW9uLHVzZURwcikge1xyXG5cdFx0dGhpcy5wcm9wb3J0aW9uID0gcHJvcG9ydGlvbjsvL+Wxj+W5leaAu+WuveW6pnJlbeWAvFxyXG5cdFx0dGhpcy51c2VEcHIgPSB1c2VEcHI7Ly/mmK/lkKbogIPomZFkcHJcclxuXHRcdC8v5aaC5p6cZHBy5pyq6LWL5YC877yM5YiZ6buY6K6k5Li6dHJ1ZVxyXG5cdFx0aWYodHlwZW9mKHRoaXMudXNlRHByKSAhPSAnYm9vbGVhbicpe1xyXG5cdFx0XHR0aGlzLnVzZURwciA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHNldCgpe1xyXG5cdFx0dmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8vaHRtbOagueiKgueCuVxyXG5cdFx0dmFyIGRwciA9IDE7Ly/pu5jorqRkcHLkuLoxXHJcblx0XHRpZih0aGlzLnVzZURwcil7XHJcblx0XHRcdGRwciA9IE1hdGgucm91bmQod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7Ly/ojrflj5borr7lpIdkcHJcclxuXHRcdH1cclxuXHRcdHZhciBzY2FsZSA9IDEgLyBkcHI7XHJcblx0XHR2YXIgbWV0YUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJykgLy9tZXRh5YWD57SgXHJcblx0XHQvL+WmguaenG1ldGHlhYPntKDkuI3lrZjlnKjvvIzliJnoh6rliqjliJvlu7rlubbliqDlhaXliLBoZWFk6YeM44CCXHJcblx0XHRpZiAoIW1ldGFFbGUpIHtcclxuXHRcdFx0bWV0YUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTsgLy/liJvlu7pcclxuXHRcdFx0bWV0YUVsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XHJcblx0XHRcdG1ldGFFbGUuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLFxyXG5cdFx0XHRcdCd3aWR0aD1kZXZpY2Utd2lkdGgsdXNlci1zY2FsYWJsZT1ubywgaW5pdGlhbC1zY2FsZT0nICsgc2NhbGUgKyAnLG1heGltdW0tc2NhbGU9JyArIHNjYWxlICsgJywgbWluaW11bS1zY2FsZT0nICtcclxuXHRcdFx0XHRzY2FsZSk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChtZXRhRWxlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1ldGFFbGUuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLFxyXG5cdFx0XHRcdCd3aWR0aD1kZXZpY2Utd2lkdGgsdXNlci1zY2FsYWJsZT1ubywgaW5pdGlhbC1zY2FsZT0nICsgc2NhbGUgKyAnLG1heGltdW0tc2NhbGU9JyArIHNjYWxlICsgJywgbWluaW11bS1zY2FsZT0nICtcclxuXHRcdFx0XHRzY2FsZSk7XHJcblx0XHR9XHJcblx0XHQvL+iuvue9ruagueWFg+e0oOWtl+S9k+Wkp+Wwj1xyXG5cdFx0dmFyIGZvbnRTaXplID0gd2luZG93LmlubmVyV2lkdGggLyB0aGlzLnByb3BvcnRpb247XHJcblx0XHRodG1sLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhbmRhcmRcIiwgdGhpcy5wcm9wb3J0aW9uKTtcclxuXHRcdGh0bWwuc2V0QXR0cmlidXRlKFwiZGF0YS1kcHJcIiwgZHByKTsgLy/lsIZkcHLnu5HlrprliLBodG1s5YWD57Sg5LiKXHJcblx0XHRodG1sLnN0eWxlLmZvbnRTaXplID0gTWF0aC5yb3VuZChmb250U2l6ZSkgKyAncHgnO1xyXG5cdH1cclxuXHRcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZW1GaXRcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}])}));