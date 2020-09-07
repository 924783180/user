/**
 * @Name：admin api模块
 * @Author：陈晨
 * @description：本文件中编写通用接口，各页面具体接口请在 src/api 中建立文件夹，如：src/api/User/index.js 是用户模块使用的api
 */
import request from "@/request";
/* 登录 */
export function loginByUsername(data) {
  return request({
    url : '/login',
    method : "post",
    data
  });
}




