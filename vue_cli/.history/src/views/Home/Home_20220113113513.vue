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
      userImg: require("../../assets/images/user.png"),
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
    align-items: center;
    align-content: space-around;
    img {
      width: 150px;
      height: 150px;
      background-color: violet;
      border-radius: 50%;
    }
  }
}
</style>