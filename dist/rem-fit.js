!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.RemFit=t():e.RemFit=t()}(self,(function(){return(()=>{"use strict";var e={579:(e,t,r)=>{var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),o=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.proportion=t,this.useDpr=r,"boolean"!=typeof this.useDpr&&(this.useDpr=!1)}return i(e,[{key:"init",value:function(){var e=document.documentElement,t=1;this.useDpr&&(t=Math.round(window.devicePixelRatio||1));var r=Number((1/t).toFixed(2)),i=document.querySelector('meta[name="viewport"]');i?i.setAttribute("content","width=device-width,user-scalable=no, initial-scale="+r+",maximum-scale="+r+", minimum-scale="+r):((i=document.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content","width=device-width,user-scalable=no, initial-scale="+r+",maximum-scale="+r+", minimum-scale="+r),document.getElementsByTagName("head")[0].appendChild(i));var o=Number((window.innerWidth/this.proportion).toFixed(2));e.setAttribute("data-standard",this.proportion),e.setAttribute("data-dpr",t),e.style.setProperty("font-size",o+"px","important")}}],[{key:"remove",value:function(){var e=document.documentElement,t=document.querySelector('meta[name="viewport"]');t&&t.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"),e.removeAttribute("data-standard"),e.removeAttribute("data-dpr"),e.style.fontSize=""}}]),e}(),n=r(306);console.log("%c感谢使用"+n.name+"，当前版本：%c v"+n.version+"\n%c如果你觉得"+n.name+"还不错，不妨去github点个star\ngithub地址：%c"+n.repository.url,"color:#808080;","color:#008a00","color:#808080;","color:#008a00"),e.exports=o},306:e=>{e.exports=JSON.parse('{"name":"rem-fit","version":"1.4.1","description":"一款使用rem适配web页面的轻量级插件","main":"dist/rem-fit.js","private":false,"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","serve":"webpack --mode development","build":"webpack --mode production"},"author":"lingkai","license":"MIT","dependencies":{},"babel":{"presets":["env"],"plugins":[]},"devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-env":"^1.7.0"},"repository":{"type":"git","url":"https://github.com/lovelin0523/rem-fit"}}')}},t={};return function r(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}(579)})()}));