/**
 * @Name：admin 小图标组件
 * @Author：cc
 * @description：svg图标组件,  <svg-icon icon-class="user"/>  'user'为src/icons/svg下的文件名称
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
