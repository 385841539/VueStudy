<template>
  <div class="tabs">
    <el-tag
      v-for="tag in tabLists"
      :key="tag.name"
      size="small"
      closable="tag.name!='home'"
      >{{ tag.label }}</el-tag
    >
  </div>
</template>

<script>
export default {
  computed: {
    tabLists() {
      // return [100];
      return this.$store.state.tab.tabLists;
    },
  },
};
</script>

<style>
.tabs {
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.el-tag {
  margin-right: 10px;

  cursor: pointer;
}
</style>