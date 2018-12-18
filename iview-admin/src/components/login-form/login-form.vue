<template>
<div>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="username">
      <Input v-model="form.username" placeholder="请输入用户名">
      <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
      <span slot="prepend">
          <Icon :size="18" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="verify_code">
      <Row>
        <i-col span="18">
          <Input v-model="form.verify_code" placeholder="请输入验证码">
          <span slot="prepend">
              <Icon :size="14" type="ios-color-wand"></Icon>
            </span>
          </Input>
        </i-col>
        <i-col span="6">
          <Tooltip content="刷新验证码" placement="top">
            <img :src="imgUrl" style="height: 30px; margin-top: 2px; cursor: pointer" @click="refreshVerifyCode" />
          </Tooltip>
        </i-col>
      </Row>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
  <Row style="text-align: center">
    <Tooltip content="QQ登入" placement="top">
      <img src="@/assets/images/QQ.png" class="login-icon" />
    </Tooltip>
    <Tooltip content="微信登入" placement="top">
      <img src="@/assets/images/WeChat.png" class="login-icon" />
    </Tooltip>
  </Row>
</div>
</template>
<script>
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default {
  name: 'LoginForm',
  props: {
    usernameRules: {
      type: Array,
      default: () => {
        return [{
          required: true,
          message: '账号不能为空',
          trigger: 'blur'
        }]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }]
      }
    },
    verifyCodeRules: {
      type: Array,
      default: () => {
        return [{
          required: true,
          message: '验证码不能为空',
          trigger: 'blur'
        }]
      }
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        verify_code: ''
      },
      urls: {
        verifyCodeUrl: '/auth/verify-code'
      },
      imgUrl: ''
    }
  },
  computed: {
    rules () {
      return {
        username: this.usernameRules,
        password: this.passwordRules,
        verify_code: this.verifyCodeRules
      }
    }
  },
  methods: {
    init () {
      this.refreshVerifyCode()
    },
    // 提交
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            username: this.form.username,
            password: this.form.password,
            verify_code: this.form.verify_code
          })
        }
      })
    },
    // 刷新验证码
    refreshVerifyCode () {
      this.imgUrl = baseUrl + this.urls.verifyCodeUrl + '?' + Math.random()
    }
  },
  mounted () {
    this.init()
  }
}
</script>
