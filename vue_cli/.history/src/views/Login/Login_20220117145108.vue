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
      userNmae: "",
      userPassword: "",
    };
  },
};
</script>

</style>