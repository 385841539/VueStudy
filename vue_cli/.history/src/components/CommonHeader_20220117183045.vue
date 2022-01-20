<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        v-on:click="handleMenu"
      ></el-button>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: currentMenu.path }" v-if="currentMenu">
          {{ currentMenu.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-dropdown szie="mini" trigger="click">
        <div class="user_group">
          <span class="user_name">{{ getUserName() }}</span>
          <span>
            <img :src="userImg" class="user" />
          </span>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="showDialog">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>确定退出登录？</span>
        <span slot="footer" class="dialog-footer" style="margin-top: 100px">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="logoutSure"></el-button>
        </span>
      </el-dialog>
    </div>
  </header>
</template>



<script>
import spConstanst from "../common/constanst";

export default {
  data() {
    return {
      userImg: require("../assets/images/user.png"),
      dialogVisible: false,
    };
  },

  computed: {
    currentMenu() {
      return this.$store.state.tab.currentMenu;
    },
  },
  methods: {
    getUserName() {
      return localStorage.getItem(spConstanst.spLogin);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    showDialog() {
      this.dialogVisible = true;
    },

    logoutSure() {
      this.dialogVisible = false;
      console.log("dialogVisible 111= true-00-0--");

      localStorage.setItem(spConstanst.spLogin, "");

      // localStorage.setItem(spConstanst.spLogin, null);
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "main" });
    },
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
.el-breadcrumb_item {
  .el-breadcrumb_inner {
    color: white;
    font-size: 1000px;
    text-emphasis-color: red;
  }
}
.user_group {
  display: flex;

  align-items: center;
}

.user_name {
  color: white;
  margin-right: 10px;
}
</style>
