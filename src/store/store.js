/**
 * @Name：admin 状态管理器
 * @Author：陈晨
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import user from './modules/user';
Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    user
  },
  getters
})
