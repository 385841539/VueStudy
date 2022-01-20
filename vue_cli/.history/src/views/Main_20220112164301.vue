<template>
  <el-container style="height: 100%">
    <el-aside width="auto" height="100%">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import CommonAside from "../components/CommonAside.vue";

export default {
  name: "main",
  components: {
    CommonAside,
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
