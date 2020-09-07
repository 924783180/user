/**
 * @Name：admin axios请求模块
 * @Author：cc
 * @description：服务于api，统一设置axios参数
 */
import axios from "axios";
import Qs from 'qs';
import {toLowerCase, getToken} from "../utils";
import {errorCallback} from "../error";
import {setter} from '@/config';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let request = axios.create({
  baseURL : BASE_URL, // 请求域名
  transformRequest : [function(data) {
    data = Qs.stringify(data);
    return data;
  }],
});
// 添加一个请求拦截器
request.interceptors.request.use(
  /**
   * @description 从Session中获取token，并在接口访问时统一加入请求体
   */
  function(config) {
    if(setter.request.tokenName){
      const token = getToken();
      if(token) {
        config.data = config.data || {};
        config.data["token"] = token;
      }
    }
    return config;
  },
  function(error) {
    // Do something with request error
    //Message.error({message : '请求超时!'});
    return Promise.resolve(error);
  }
);
// 添加一个响应拦截器
request.interceptors.response.use(
  /**
   * @description 对相应体数据进行处理，成功的请求返回data，失败的请求进入错误处理模块
   */
  function(response) {
    // Do something with response data
    let responseData = toLowerCase(response).data;
    let {response : {statusName, statusCode : {ok}, msgName, dataName}} = setter;
    let data = responseData[dataName];
    let state = responseData[statusName];
    let msg = responseData[msgName];
    if(state === ok) {
      return data;
    }
    // 错误处理模块
    errorCallback(state, msg);
  },
  function(error) {
    //Loading.service().close();
    // Do something with response error
    if(error.response.status === 504 || error.response.status === 404) {
      //Message.error({message : '服务器被吃了⊙﹏⊙∥'});
    } else if(error.response.status === 403) {
      //Message.error({message : '权限不足,请联系管理员!'});
    } else {
     // Message.error({message : '未知错误'});
    }
    return Promise.reject(error);
  }
);
export default request;
