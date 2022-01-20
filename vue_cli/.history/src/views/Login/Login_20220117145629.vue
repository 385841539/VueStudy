<template>
    <div class="login">
      <el-input placeholder="请输入用户名" v-model="userNmae"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="userPassword"
        show-password
      ></el-input>
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
  display: flex;
  height: 100vh;
  background-color: green;

  justify-content: center;

  .login {
    background-color: hotpink;

    align-self: center;
    // align-content: center;
    // align-self: center;

    width: 300px;
    padding: 30px;
  }
}
</style>
