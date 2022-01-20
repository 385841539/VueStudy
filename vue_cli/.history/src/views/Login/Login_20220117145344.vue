<template>
  <div class="out_login">
    <div class="login">
      <el-input placeholder="请输入用户名" v-model="userNmae"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="userPassword"
        show-password
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userNmae: null,
      userPassword: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.out_login {
  width: 100%;
  height: 100vh;
  background-color: green;
}
</style>
