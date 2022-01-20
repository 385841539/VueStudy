<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <div class="userInfo">
              <img :src="userImg" />
              <span>Admin超级管理员</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16" style="margin-top: 20px">222</el-col>
    </el-row>
  </div>
</template>



<script>
export default {
  data() {
    return {
      userImg: require("../../assets/logo.png"),
    };
  },
};
</script>


<style  lang="scss" scoped>
// div {
//   background: blue;
//   height: 100%;
//   padding: 0px;
//   margin: 0px;
// }
.el-card {
  width: 400px;
  margin-left: 20px;
}

.user {
  width: 100%;
  height: auto;
  .userInfo {
    display: flex;

background-color: violet;
    align-items: center;
    align-content: space-between;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>