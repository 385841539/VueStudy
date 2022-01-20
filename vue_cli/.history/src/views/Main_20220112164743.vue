<template>
  <el-container style="height: 100vh">
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
 
<script>
// @ is an alias to /src
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "main",
  components: {
    CommonAside,
    CommonHeader,
  },
};
</script>
<style lang='scss' scoped>
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>
