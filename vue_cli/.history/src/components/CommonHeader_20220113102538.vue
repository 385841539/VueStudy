<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        v-on:click="handleMenu"
      ></el-button>
      <h3 class="home-title">首页</h3>
    </div>

    <div class="r-content">
      <el-dropdown szie="mini" trigger="click">
        <span>
          <img :src="userImg" class="user" />
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>个人中心1</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>



<script>
export default {
  data() {
    return {
      userImg: require("../assets/logo.png"),
    };
  },

  methods: {
    handleMenu() {
      this.$store.commit("collaspseMenu");
    },
  },
};
</script>


<style  lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

.home-title {
  color: white;
}

.l-content {
  display: flex;
  align-items: center;
  margin-left: 20px;
  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
}
</style>
