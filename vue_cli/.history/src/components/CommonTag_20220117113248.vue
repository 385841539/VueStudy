<template>
  <div class="tabs">
    <el-tag
      v-for="tag in tabLists"
      :key="tag.name"
      size="small"
      :closable="tag.name != 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
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

    handleClose(tag, index) {
      this.$store.commit("closeTag", tag);

      let length = this.tabLists.length - 1;

      if (tag.name != $route.name) {
        return;
      }

      if (length == index) {
        this.$router.push({ name: this.tabLists[index - 1].name});
      }
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