<template>
  <div class="tabs">
    <el-tag v-for="index in 10">111</el-tag>
  </div>
</template>

<script>
export default {

//   computed: {
//     tabLists() {
//       return [
//         {
//           path: "/",
//           name: "home",
//           label: "首页",
//           icon: "home",
//         },
//       ];
//       //   return this.$store.tab.tabLists;
//     },
//   },
};
</script>

<style>
.tabs {
  padding: 10px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.el-tag {
  margin-right: 10px;
}
</style>