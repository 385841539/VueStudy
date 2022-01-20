<template>
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tabLists"
      :key="tag.name"
      size="small"
      :closable="tag.name != 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
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
      localStorage.setItem("insuranceCode", "name-nima");
      var result = localStorage.getItem("insuranceCode");
      console.log("---result--");
      console.log("---result--" + result);

      this.$router.push({ name: menu.name });
      this.$store.commit("selectMenu", menu);
    },

    handleClose(tag, index) {
      let length = this.tabLists.length - 1;

      this.$store.commit("closeTag", tag);

      if (tag.name != this.$router.name) {
        return;
      }

      if (length == index) {
        this.$router.push({ name: this.tabLists[index - 1].name });
      } else {
        this.$router.push({ name: this.tabLists[index].name });
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