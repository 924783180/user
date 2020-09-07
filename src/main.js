import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './utils/prototype';
import 'reset.css';// 重置元素默认状态
import '@/styles/index.less'// 全局css，使用less预编辑
import './icons'// svg图标组件,  <svg-icon icon-class="user"/>  'user'为src/icons/svg下的文件名称
import './router/permission' // 路由权限设置
import Vant from 'vant';
import 'vant/lib/index.css';
import VConsole from 'vconsole'; // TODO: 调试用，上线去掉
import "./assets/css/iconfont.css";
import 'amfe-flexible'

//const vConsole = new VConsole(); // TODO: 调试用，上线去掉
Vue.config.productionTip = false;

Vue.use(Vant);
//Vue.use(vConsole); // TODO: 调试用，上线去掉
new Vue({
  router,
  store,
  render : h => h(App)
}).$mount('#app');
