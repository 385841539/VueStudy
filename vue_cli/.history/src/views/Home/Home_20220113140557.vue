



<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" />
            <div class="userInfo">
              <p style="font-size: 20px">Admin</p>
              <p>超级管理员</p>
            </div> 
          </div>

          <div class="loginInfo">
            <p>上次登录时间: <span>2021-7-9</span></p>
            <p>上次登录地点: <span>武汉</span></p>
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
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid rgb(194, 189, 189);

  padding-bottom: 20px;
  .userInfo {
    text-align: start;

    p {
      margin: 0px;
    }
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}

.loginInfo {
  // background-color: yellowgreen;
  margin-top: 0px;
  text-align: start;
  padding-left: 20px;

  span {
    margin-left: 50px;
  }
}
</style>