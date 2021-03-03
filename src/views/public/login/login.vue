<template>
  <div>
    <span>登录</span>
    <router-link to="/register">注册</router-link>
    <br />
    <input type="text" placeholder="请输入账号" v-model="formData.username" />
    <input
      type="password"
      placeholder="请输入密码"
      v-model="formData.password"
    />
    <input type="text" v-model="formData.code" placeholder="请输入验证码" />
    <div v-html="codeSvg"></div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import * as publicApi from '@/api/public'
import * as userApi from '@/api/user'
import { v4 as uuidv4 } from 'uuid'
export default {
  data() {
    return {
      formData: {},
      codeSvg: null
    }
  },
  mounted() {
    this.getCaptcha()
  },
  methods: {
    getCaptcha() {
      this.formData.uuid = uuidv4()
      publicApi.getCaptcha({ uuid: this.formData.uuid }).then((res) => {
        this.codeSvg = res.data
      })
    },
    login() {
      userApi.login(this.formData).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style></style>
