import {
  login,
  logout,
  getUserInfo
} from '@/api/user'
import {
  setToken,
  getToken
} from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: ''
  },
  mutations: {
    setAvator(state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId(state, id) {
      state.userId = id
    },
    setUserName(state, name) {
      state.userName = name
    },
    setAccess(state, access) {
      state.access = access
    },
    setToken(state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 登录
    handleLogin({
      commit
    }, self) {
      return new Promise((resolve, reject) => {
        login(self).then(res => {
          if (res.data.code === 1001) {
            // 认证成功
            const data = res.data
            commit('setToken', data.data)
            resolve()
            if (window.localStorage) {
              var storage = window.localStorage
              storage.setItem('token', data.data)
            }
          } else {
            self.$Message.error(res.data.message)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut({
      state,
      commit
    }, self) {
      return new Promise((resolve, reject) => {
        logout(self).then(() => {
          if (window.localStorage) {
            var storage = window.localStorage
            storage.removeItem('token')
          }
          commit('setToken', '')
          commit('setAccess', [])
          resolve()
        }).catch(err => {
          reject(err)
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo({state, commit}) {
      return new Promise((resolve, reject) => {
        commit('setAvator', 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png')
        commit('setUserName', 'admin')
        commit('setUserId', '1')
        commit('setAccess', ['admin'])
        resolve('data')
        // getUserInfo(state.token).then(res => {
        //   const data = res.data
        //   commit('setAvator', data.avator)
        //   commit('setUserName', data.user_name)
        //   commit('setUserId', data.user_id)
        //   commit('setAccess', data.access)
        //   resolve(data)
        // }).catch(err => {
        //   reject(err)
        // })
      })
    }
  }
}
