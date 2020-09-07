import {setToken, getToken, removeToken, getSession, setSession} from '@/utils'
import md5 from 'md5';
import {loginByUsername, loginOut, getKey} from '@/api'

let userInfo = JSON.parse(getSession('userInfo'));
export default {
  state : {
    avatar : '',
    token : getToken(),
    roles : [],
    userInfo
  },
  mutations : {
    SET_AVATAR : (state, avatar) => {
      state.avatar = avatar
    },
    SET_TOKEN : (state, token) => {
      state.token = token;
    },
    SET_ROLES : (state, roles) => {
      state.roles = roles
    },
    SET_USER_INFO : (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions : {
    setAvatar({commit}) {
      commit('SET_AVATAR')
    },
    loginByUsername({commit}, loginInfo) {
      loginInfo.username = loginInfo.username.trim();
      let {username} = loginInfo;
      return new Promise((resolve, reject) => {
        return loginByUsername({username, password : md5(loginInfo.password)}).then(res => {
          let {token, userInfo} = res;
          setToken(token);
          setSession('userInfo', JSON.stringify(userInfo));
          resolve()
        }).catch(error => {
          reject(error)
        });
      })
    },
    getUserInfo({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(_ => {
          let role = JSON.parse(getSession('userInfo')).role;
          let roles = role.length > 0 ? [role] : [];
          if(roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          resolve(this.state.user.roles)
        }, 0)
      })
    },
    logOut({commit, state}) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '');
        commit('SET_ROLES', []);
        removeToken();
        resolve();
        /*loginOut().then(res => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          removeToken();
          resolve();
        });*/
      })
    },
  }
}
