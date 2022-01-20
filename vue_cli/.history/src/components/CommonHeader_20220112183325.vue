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

        <el-dropdown-menu slot="dropdown">
          <!-- <el-form-item>个人中心</el-form-item> -->
          <!-- <el-form-item>退出</el-form-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>



<script>
export default {
  data() {
    return {
      userImg: "../assets/images/logo.png",
    };
  },
};
</script>
