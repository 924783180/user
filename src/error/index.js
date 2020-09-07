/**
 * @Name：admin 错误处理模块
 * @Author：cc
 */
import {removeToken, endLoading} from '@/utils';
import store from '@/store/store';
import {setter} from '@/config';

/**
 * @description 此处为与后端约定的通用错误码，基本上每个项目都是一样的
 * @param state {Number} 错误码
 * @param msg {String} 错误信息
 */
function defErrorCallback(state, msg) {
  switch(state) {
    case 13:
      store.commit('SET_TOKEN', '');
      store.commit('SET_ROLES', []);
      removeToken();
      if(setter.interceptor){
        location.hash = '/login';
      /*  Message.error({
          message : `登录超时，请重新登录！`,
          onClose : function() {
            location.hash = '/login'
          }
        });*/
      }
      break;
    case 100:
      //Message.error({message : `参数不足,请填写完毕后重新提交！`});
      break;
    case 401:
      //Message.error({message : `权限不足！`});
      break;
    case -500:
      //Message.error({message : `万恶的服务器错误，联系后端解决吧！`});
      break;
    case 10001:
      //Message.error({message : `密码错误`});
      break;
    case 10002:
      //Message.error({message : `账号不存在`});
      break;
    case 10003:
      //Message.error({message : `删除失败`});
      break;
    case 10004:
      //Message.error({message : `添加失败`});
      break;
    case 10005:
      //Message.error({message : `修改失败`});
      break;
    default:
      //Message.error({message : `操作失败！`});
  }
}

/**
 * @description 此处为后端在每个项目中设定的错误码，新项目建立时需要清空，编写者请按照顺序编写
 * @param state {Number} 错误码
 * @param msg {String} 错误信息
 */
export function errorCallback(state, msg) {
  switch(state) {
    case 200:

    default:
      defErrorCallback(state, msg);
  }
  // 如有错误码，抛出异常，强制停止代码运行
  //Loading.service().close();
  throw 'exec_termination';
}
