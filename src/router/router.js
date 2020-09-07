/**
 * @Name：admin 路由设置
 * @Author：陈晨
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Layout from '@/components/Layout'


export const constantRouterMap = [
  {
    path : '/redirect',
    component : Layout,
    hidden : true,
    children : [
      {
        path : '/redirect/:path*',
        component : () => import('@/components/Redirect')
      }
    ]
  },
  {
    path : '/login',
    component : () => import('@/views/login'),
    hidden : true
  },
  {
    path : '/404',
    component : () => import('@/components/404'),
    hidden : true
  },
  {
    path : '',
    component : Layout,
    name : '首页',
    meta : {
      title : '首页',
      icon : 'system1',
      roles : ['admin', 'smanager'] // you can set roles in root nav
    },
    hidden : true,
    children : [
      {
        path : '/',
        component : () => import('@/views/Home'),
        name : '首页',
        meta : {title : '首页', noCache : true}
      },
      {
        path : '/user',
        component : () => import('@/views/user'),
        name : '用户管理',
        meta : {title : '用户管理', noCache : true, roles : ['admin', 'smanager' , 'gmanager']}
      },
      {
        path : '/search',
        component : () => import('@/views/search'),
        name : '搜索',
        meta : {title : '搜索', noCache : true, roles : ['admin', 'smanager' , 'gmanager']}
      }
    ]
  }
];

const router = new Router({
  mode : 'hash',
  base : process.env.BASE_URL,
  scrollBehavior : () => ({y : 0}),
  routes : constantRouterMap
});

export default router;
