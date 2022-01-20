<template>
  <el-container style="height: 100vh">
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <div><CommonTag></CommonTag></div>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
 
<script>
// @ is an alias to /src
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue";
import spConstanst from "../common/constanst";

export default {
  name: "main",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
  methods: {
    logicLoginState() {
      console.log("spLogin:" + spConstanst.spLogin);

      var userToken = localStorage.getItem(spConstanst.spLogin);

      console.log("localToken" + userToken);
      if (!userToken) {
        this.$router.push({ name: "login" });
      } 
    },
  },

  mounted() {
    this.logicLoginState();
  },
  updated() {
    this.logicLoginState();
  },
};
</script>
<style lang='scss' scoped>
.el-container {
  padding: 0px;
  max-width: 100%;
}
.el-aside {
  margin: 0px;
  padding: 0px;
}
.el-header {
  background-color: black;
  width: 100%;
  padding: 0%;
  margin: 0%;
}
.el-main {
  padding: 0px;
  height: 100%;
  width: 100%;
}
.router-view {
  padding: 0px;
  height: 100%;
  width: 100%;
}
</style>
