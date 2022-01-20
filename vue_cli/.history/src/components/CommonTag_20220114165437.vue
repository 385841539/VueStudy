<template>
  <div class="tabs">
    <el-tag v-for="item in tabLists()">{{ item.label }}</el-tag>
  </div>
</template>

<script>
export default {
  computed: {
    tabLists() {
      return this.$store.tab.tabLists;
    },
  },
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