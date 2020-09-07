/**
 * @Name：admin 路由权限设置
 * @Author：cc
 */
import router from '@/router/router'
import store from '@/store/store'
import {getToken, getSession, setSession} from '@/utils' // getToken from cookie
import {setter} from '@/config';

const whiteList = ['/login', '/register'];// no Redirect whitelist

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  if(getSession('registered') === 'true' || !setter.interceptor) {
    if(Object.keys(from.query).length === 0) {//判断路由来源是否有query，处理不是目的跳转的情况
      next()
    }
  } else {
    if(whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      let openid = to.query.openid;
      if(openid) {
        setSession('openid', openid);
      }
      next({
        path : "/entry",
        query : {redirect : to.fullPath}//将目的路由地址存入login的query中
      })
      //next(`/entry`) // 否则全部重定向到登录页
    }
  }
});
