(()=>{"use strict";var t,i,e={946:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCA1NjAgMzIxIiB3aWR0aD0iNTYwIiBoZWlnaHQ9IjMyMSI+PGRlZnM+PHBhdGggZD0iTTY4Ljg3IDExLjg5QzUzLjExIC0zLjk3IDI3LjU3IC0zLjk3IDExLjgxIDExLjg5Qy0zLjk0IDI3Ljc1IC0zLjk0IDUzLjQ2IDExLjgxIDY5LjMyQzM1LjU4IDkzLjIyIDIyNS42OCAyODQuMzcgMjQ5LjQ0IDMwOC4yNkMyNTcuODQgMzE2LjcxIDI2OS4wMSAzMjAuNTIgMjgwIDMxOS45NkMyOTAuOTkgMzIwLjUyIDMwMi4xNiAzMTYuNzEgMzEwLjU1IDMwOC4yNkMzMzQuMzIgMjg0LjM3IDUyNC40MiA5My4yMiA1NDguMTggNjkuMzJDNTYzLjk0IDUzLjQ2IDU2My45NCAyNy43NSA1NDguMTggMTEuODlDNTMyLjQzIC0zLjk3IDUwNi44OCAtMy45NyA0OTEuMTMgMTEuODlDNDc3LjA2IDI2LjA1IDQwNi42OCA5Ni44MSAyODAgMjI0LjE5QzE1My4zMiA5Ni44MSA4Mi45NCAyNi4wNSA2OC44NyAxMS44OVoiIGlkPSJlVGhvWU40R2EiPjwvcGF0aD48L2RlZnM+PGc+PGc+PGc+PHVzZSB4bGluazpocmVmPSIjZVRob1lONEdhIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2VUaG9ZTjRHYSIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="},716:(t,i,e)=>{t.exports=e.p+"videos/STSCI-H-v1953a-f-1148x952.mp4"}},o={};function c(t){var i=o[t];if(void 0!==i)return i.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,c),r.exports}c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;c.g.importScripts&&(t=c.g.location+"");var i=c.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var e=i.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=t})(),t=c(716),i=c(946),new class{constructor(){this.switchToBottom=!1,document.querySelectorAll(".container").forEach((t=>{t.onclick=function(t){let i=0;try{i=this.nextSibling.nextSibling.getBoundingClientRect().top}catch(t){i=this.scrollTop+this.clientHeight>=this.scrollHeight?-document.querySelector(".outer-container").scrollHeight:this.getBoundingClientRect().top}document.querySelector(".outer-container").scrollBy({top:i,behavior:"smooth"})}})),document.querySelectorAll("a").forEach((t=>{t.onclick=t=>{t.stopPropagation()}})),document.querySelector(".outer-container").onscroll=function(t){this.scrollTop+this.clientHeight>=this.scrollHeight?(document.getElementById("img-scroller").style.animation="scrollButtonAnim 1s infinite alternate, rotateScroll 1s forwards",this.switchToBottom=!0):(this.switchToBottom&&(document.getElementById("img-scroller").style.animation="scrollButtonAnim 1s infinite alternate, rotateScrollRev 1s forwards"),this.switchToBottom=!1)}}},document.getElementById("video-source").src=t,document.getElementById("img-scroller").src=i})();