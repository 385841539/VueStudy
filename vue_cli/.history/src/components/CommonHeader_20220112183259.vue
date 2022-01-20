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
          <el-form-item>个人中心</el-form-item>
          <el-form-item @click="dialogVisible = true">退出</el-form-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </header>
</template>



<script>
export default {
  data() {
    return {
      userImg: "../assets/images/logo.png",
      dialogVisible: false,
    };
  },

  methods: {
    requestLogout() {},
  },
};
</script>
