<template>
  <div style="margin-left: 10px">
    <el-row :gutter="24">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" />
            <div class="userInfo">
              <p style="font-size: 30px">Admin</p>
              <p>超级管理员</p>
            </div>
          </div>

          <div class="loginInfo">
            <p>上次登录时间: <span>2021-7-9</span></p>
            <p>上次登录地点: <span>武汉</span></p>
          </div>
        </el-card>
        <el-card style="height: 470px; margin-top: 20px">
          <el-table :data="tableData">
            <el-table-column
              show-overflow-tooltip
              v-for="(value, key) in tableLabel"
              :key="key"
              :prop="key"
              :label="value"
            ></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="margin-top: 20px">
        <div class="num">
          <el-card
            shandow="hover"
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="num">¥{{ item.value }}</p>
              <p class="txt">¥{{ item.name }}</p>
            </div>
          </el-card>
        </div>

        <el-card shadow="hover" style="height: 280px">1111</el-card>

        <div class="graph" style="display: flex, width= 100%">
          <el-card shadow="hover" style="height: 280px">1111</el-card>
          <el-card shadow="hover" style="height: 280px">1111</el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>



<script>
export default {
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "月销售额",
        totalBuy: "总购买量",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },

  mounted() {
    this.$http
      .get("http://10.179.25.254:8083")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
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

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0px;
  .el-card {
    margin: 0px;
    width: 32%;
    margin-bottom: 20px;
    height: 80px;
  }
  .icon {
    font-size: 30px;
    width: 100px;
    height: 80px;
    color: white;
    line-height: 80px;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .num {
      font-size: 30px;

      justify-content: center;
    }
    .txt {
      font-size: 14px;
      justify-content: center;
    }
    p {
      margin: 0px;
    }
  }
}
</style>