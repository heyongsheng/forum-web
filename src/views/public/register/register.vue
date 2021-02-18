<template>
  <div>
    <router-link to="/login">登录</router-link>
    <span>注册</span>
    <br />
    <input type="text" placeholder="请输入账号" v-model="formData.username" />
    <input
      type="password"
      placeholder="请输入密码"
      v-model="formData.password"
    />
    <button>登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    }
  },
  mounted() {}
}
</script>

<style></style>
