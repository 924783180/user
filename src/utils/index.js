/**
 * @Name：admin 工具库
 * @Author：陈晨
 * @description：将项目中可以复用的方法进行封装，放入库中。要求注释详细
 */
import {setter} from '@/config';
/**
 * @description 设置浏览器sessionStorage
 * @param key {String} 设置浏览器sessionStorage的键
 * @param value {String} 设置浏览器sessionStorage的值
 * @return {void}
 * @example setSession(token, 'asdlkjfalksj')
 */
export function setSession(key, value) {
  return sessionStorage.setItem(key, value);
}
/**
 * @description 获取浏览器sessionStorage
 * @param key {String} 设置浏览器sessionStorage的键
 * @return {String} key对应的值
 */
export function getSession(key) {
  return sessionStorage.getItem(key);
}
/**
 * @description 删除浏览器sessionStorage
 * @param key {String} 设置浏览器sessionStorage的键
 * @return {void}
 */
export function removeSession(key) {
  return sessionStorage.removeItem(key);
}
/**
 * @description 清空浏览器sessionStorage
 * @return {void}
 */
export function clearSession() {
  return sessionStorage.clear();
}
/**
 * @description 设置浏览器localStorage
 * @param key {String} 设置浏览器localStorage的键
 * @param value {String} 设置浏览器localStorage的值
 * @return {void}
 */
export function setLocal(key, value) {
  return localStorage.setItem(key, value);
}
/**
 * @description 获取浏览器localStorage
 * @param key {String} 设置浏览器localStorage的键
 * @return {String} key对应的值
 */
export function getLocal(key) {
  return localStorage.getItem(key);
}
/**
 * @description 删除浏览器localStorage
 * @param key {String} 设置浏览器localStorage的键
 * @return {void}
 */
export function removeLocal(key) {
  return localStorage.removeItem(key);
}
/**
 * @description 清空浏览器localStorage
 * @return {void}
 */
export function clearLocal() {
  return localStorage.clear();
}
/**
 * @description 获取浏览器存储的token
 * @return {String} token
 */
export function getToken() {
  let token = setter.request.tokenName || 'token';
  return getSession(token);
}
/**
 * @description 设置浏览器存储的token
 * @param token {String} 需要存储的token
 * @return {void}
 */
export function setToken(token) {
  let tokenName = setter.request.tokenName || 'token';
  return setSession(tokenName, token);
}
/**
 * @description 删除浏览器存储的token
 */
export function removeToken() {
  let token = setter.request.tokenName || 'token';
  return removeSession(token);
}
/**
 * @description 判断数据类型
 * @param str 需要判断的内容
 * @return {String} 数据的数据类型
 */
export function typeOf(str) {
  let type = Object.prototype.toString.call(str);
  return type.substring(8, type.length - 1)
}

/**
 * @description 首字母改为小写，万恶的.net命名法
 * @param obj {Object}
 */
export function toLowerCase(obj) {
  if(typeOf(obj) === 'Object') {
    for(let key in obj) {
      let val = obj[key];
      let type = typeOf(val);
      if(type === 'Object' || type === 'Array') {
        toLowerCase(val);
      }
      let first = key.substring(0, 1);
      obj[first.toLowerCase() + key.substring(1)] = val;
      if(first === first.toUpperCase()) {
        delete obj[key];
      }
    }
    return obj;
  } else if(typeOf(obj) === 'Array') {
    obj = obj.map(t => {
      return toLowerCase(t);
    });
  }
  return obj;
}
/**
 * @description 是否为外部请求
 * @param path {String} 请求路径
 * @return {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/**
 * @description 深拷贝
 * @param obj {Object} 拷贝数据
 * @return {Object}
 */
export function deepCopy(obj) {
  let result = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      if(typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepCopy(obj[key]);   //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
/**
 * @description 图片压缩
 * @param file {Object} 文件
 * @param w {Object} 文件压缩的后宽度，宽度越小，字节越小
 * @param objDiv {Object} 容器或者回调函数
 */
export function photoCompress(file, w, objDiv) {
  let ready = new FileReader();
  /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
  ready.readAsDataURL(file);
  ready.onload = function () {
    let re = this.result;
    canvasDataURL(re, w, objDiv, file.name)
  }
}

function canvasDataURL(path, obj, callback, filename) {
  let img = new Image();
  img.src = path;
  img.onload = function () {
    let that = this;
    // 默认按比例压缩
    let w = that.width,
      h = that.height,
      scale = w / h;
    w = obj.width || w;
    h = obj.height || (w / scale);
    let quality = 0.1;  // 默认图片质量为0.7
    //生成canvas
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    // 创建属性节点
    let anw = document.createAttribute("width");
    anw.nodeValue = w;
    let anh = document.createAttribute("height");
    anh.nodeValue = h;
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);
    ctx.drawImage(that, 0, 0, w, h);
    // 图像质量
    if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
      quality = obj.quality;
    }
    // quality值越小，所绘制出的图像越模糊
    let base64 = canvas.toDataURL('image/jpeg', quality);
    // 回调函数返回base64的值
    callback(base64, filename);
  }
}
/**
 * @description 将以base64的图片url数据转换为Blob
 * @param urlData
 * @param filename
 * @return {Object}
 */
export function convertBase64UrlToBlob(urlData, filename) {
  let arr = urlData.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  //return new Blob([u8arr], { type: mime });
  return new File([u8arr], filename, {type: mime});
}













Date.prototype.format || (Date.prototype.format = function(a, b) {
  if(b) var c = this.getTime() - new Date().getTime(), d = new Date(0 > c ? 0 : c), e = {
    "d+" : Math.floor(d.getTime() / 1e3 / 86400),
    "h+" : Math.floor(d.getTime() / 1e3 / 3600 % 24),
    "m+" : Math.floor(d.getTime() / 1e3 / 60 % 60),
    "s+" : Math.floor(d.getTime() / 1e3 % 60),
    "S+" : Math.floor(d.getTime() % 1e3)
  }; else {
    var e = {
      "y+" : this.getFullYear(),
      "q+" : Math.floor((this.getMonth() + 3) / 3),
      "M+" : this.getMonth() + 1,
      "d+" : this.getDate(),
      "h+" : this.getHours(),
      "m+" : this.getMinutes(),
      "s+" : this.getSeconds(),
      "S+" : this.getMilliseconds()
    };
    /(y+)/.test(a) && (a = a.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)))
  }
  for(var f in e) new RegExp("(" + f + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? e[f] : ("00" + e[f]).substr(("" + e[f]).length)));
  return a
});













