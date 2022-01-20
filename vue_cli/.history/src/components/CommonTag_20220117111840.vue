<template>
  <div class="tabs">
    <el-tag
      v-for="tag in tabLists"
      :key="tag.name"
      size="small"
      :closable="tag.name != 'home'"
      :effect="$router.name == tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
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
  methods: {
    changeMenu(menu) {
      this.$router.push({ name: menu.name });
      this.$store.commit("selectMenu", menu);
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