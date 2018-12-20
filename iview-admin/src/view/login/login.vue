<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
          <other-login></other-login>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import OtherLogin from '_c/other-login'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm,
    OtherLogin
  },
  data () {
    return {
      loginForm: {
        'username': '',
        'password': '',
        'verifyCode': ''
      }
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ username, password, verifyCode }) {
      this.loginForm.username = username
      this.loginForm.password = password
      this.loginForm.verifyCode = verifyCode
      this.handleLogin(this.loginForm).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
