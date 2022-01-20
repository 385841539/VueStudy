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

.user {
  width: auto;
  height: auto;
  .userInfo {
    display: flex;

    align-items: center;
    align-content: space-between;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>