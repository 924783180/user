/*const baseSize = 200;
 function setRem() {
 const scale = document.documentElement.clientWidth / 750;
 document.documentElement.style.fontSize = 100 * scale + "px";
 }
 setRem();
 window.addEventListener("orientationchange" in window ? "orientationchange" : "resize", function() {
 setRem();
 }, false);

 document.addEventListener("DOMContentLoaded", function() {
 setRem();
 }, false);*/
/**
 * @description 在Date类上添加format方法
 */

Date.prototype.format || (Date.prototype.format = function(timeFormat, isTimeDif) {
  let format = {};
  if(isTimeDif) {
    let timeDif = this.getTime() - new Date().getTime();
    let d = new Date(0 > timeDif ? 0 : timeDif);
    format = {
      "d+" : Math.floor(d.getTime() / 1e3 / 86400),
      "h+" : Math.floor(d.getTime() / 1e3 / 3600 % 24),
      "m+" : Math.floor(d.getTime() / 1e3 / 60 % 60),
      "s+" : Math.floor(d.getTime() / 1e3 % 60),
      "S+" : Math.floor(d.getTime() % 1e3)
    };
  } else {
    format = {
      "y+" : this.getFullYear(),
      "q+" : Math.floor((this.getMonth() + 3) / 3),
      "M+" : this.getMonth() + 1,
      "d+" : this.getDate(),
      "h+" : this.getHours(),
      "m+" : this.getMinutes(),
      "s+" : this.getSeconds(),
      "S+" : this.getMilliseconds()
    };
    /(y+)/.test(timeFormat) && (timeFormat = timeFormat.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)))
  }
  for(let key in format){
    let item = format[key];
    new RegExp("(" + key + ")").test(timeFormat) && (timeFormat = timeFormat.replace(RegExp.$1, 1 === RegExp.$1.length ? item : ("00" + item).substr(("" + item).length)));
  }
  return timeFormat
});
