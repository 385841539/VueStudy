<template>
  <div class="out_login">
    <div class="login">
      <el-card class="box-card">
        <el-input placeholder="请输入用户名" v-model="userNmae"></el-input>
        <el-input
          placeholder="请输入密码"
          v-model="userPassword"
          show-password
        ></el-input>

        <el-button @click="requestLogin">主要按钮</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import { spLogin } from "../common/constanst";

export default {
  data() {
    return {
      userNmae: null,
      userPassword: null,
    };
  },
  methods: {
    loginBtn() {
      return "primary";
    },
    requestLogin() {
      if (this.userNmae && this.userPassword) {
        console.log("登录了----");
        localStorage.setItem(spLogin, this.userNmae);
        this.$router.push({ name: "/" });
      } else {
        console.log("请输入账号和密码");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-card {
  padding: 30px;
}
.out_login {
  display: flex;
  height: 100vh;
  //   background-color: green;

  justify-content: center;

  .login {
    align-self: center;

    width: 400px;

    .el-input {
      margin-bottom: 15px;
    }
  }
}
</style>
