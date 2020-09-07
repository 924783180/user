/**
 * @Name：admin 系统配置模块
 * @Author：陈晨
 * @description：用于系统配置和声明常量
 */
export const setter = {
  version: 'V0.0.1-20200907', //版本号
  interceptor : false, //是否开启未登入拦截
  //自定义请求字段
  request : {
    tokenName : 'token' //自动携带 token 的字段名。可设置 false 不携带。
  },
  //自定义响应字段
  response : {
    statusName : 'state', //数据状态的字段名称
    statusCode : {
      ok : 0  //数据状态一切正常的状态码
    },
    msgName : 'msg', //状态信息的字段名称
    dataName : 'data' //数据详情的字段名称
  },
  entryPage : '/user', //登录后进入的页面
  header : {
    background : '#fff',
    left : {
      isShow : true, // 是否显示左侧图标
      icon : '', // 左侧图标，默认arrow-left
      color : 'red', // 左侧图标颜色，默认#333
      hide : [] // 隐藏头部左侧按钮的路由列表
    },
    right : {
      isShow : true, // 是否显示右侧图标
      icon : '', // 右侧图标，默认question-o
      color : '', // 右侧图标颜色，默认#333
      hide : [] // 隐藏头部右侧按钮的路由列表
    }
  },
  footer : {
    isShow : true, // 是否显示footer
    background : '#fff', // 背景颜色
    activeColor : '', // 被选中图标的颜色
    menu : [
      {
        color : '#333', //字体和图标颜色
        icon : '', // 图标，默认
        fontSize : '', // 字号，默认
        router: '/user' //
      }
    ]
  }
};
