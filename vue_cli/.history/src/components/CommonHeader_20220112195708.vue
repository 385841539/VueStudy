<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h3>首页</h3>
    </div>

    <div class="r-content">
      <el-dropdown szie="mini" trigger="click">
        <span class="el-dropdown-link" >
          <img :src="userImg" class="user"/>
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
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
</style>
