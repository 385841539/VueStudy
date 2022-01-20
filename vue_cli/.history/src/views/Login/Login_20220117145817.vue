<template>
  <div class="out_login">
    <div class="login">
      <el-input placeholder="请输入用户名" v-model="userNmae"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="userPassword"
        show-password
      ></el-input>

      <button>登录</button>
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
  display: flex;
  height: 100vh;
  background-color: green;

  justify-content: center;

  .login {
    background-color: hotpink;

    align-self: center;

    width: 300px;
    padding: 30px;

    .el-input {
      margin-bottom: 15px;
    }
  }
}
</style>
