<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h3>首页</h3>
    </div>

    <div class="r-content">
      <el-dropdown szie="mini" trigger="click">
        <span class="el-dropdown-link">
          <img src="userImg" />
        </span>
      </el-dropdown>
    </div>
  </header>
</template>



<script>
export default {
  data() {
    return {
      userImg: require("..assets/images/logo.png"),
    };
  },
};
</script>
