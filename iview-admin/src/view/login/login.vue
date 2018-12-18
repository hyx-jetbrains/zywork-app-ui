<style lang='less'>
@import './login.less';
</style>

<template>
<div class='login'>
  <div class='login-con'>
    <Card icon='log-in' title='欢迎登录' :bordered='false'>
      <div class='form-con'>
        <login-form @on-success-valid='handleSubmit'></login-form>
      </div>
    </Card>
  </div>
</div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data () {
    return {
      token: '',
      urls: {
        loginUrl: '/auth/login'
      },
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
    // 提交登入
    handleSubmit ({ username, password, verify_code }) {
      this.loginForm.username = username
      this.loginForm.password = password
      this.loginForm.verifyCode = verify_code
      this.handleLogin(this).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: 'home'
          })
        })
      })
    }
  },
  mounted () {
  }
}
</script>

<style>

</style>
