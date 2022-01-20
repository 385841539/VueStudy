



<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" />
            <div class="userInfo">
              <div>Admin</div>
              <div>超级管理员</div>
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
  display: flex;
  .userInfo {
    background-color: violet;

    align-items: center;

    align-content: space-between;

    div {
      align-items: flex-start;
      align-content: flex-start;
    }
    img {
      margin-right: 30px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }
}
</style>