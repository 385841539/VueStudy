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

        <el-card shadow="hover" style="height: 280px">
          <div style="height: 280px" ref="echart"></div>
        </el-card>

        <div class="graph">
          <el-card shadow="hover">
            <div style="height: 280px" ref="userEchart"></div>
          </el-card>
          <el-card shadow="hover">1111</el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>



<script>
import { getMenu, getHome } from "../../api/data";
import * as echarts from "echarts";
export default {
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "月销售额",
        totalBuy: "总购买量",
      },
      countData: [],
      ehcartData: {
        order: {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: [],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: [
            "#2ec7c9",
            "#b6a2de",
            "#5ab1ef",
            "#ffb980",
            "#d87a80",
            "#8d98b3",
          ],
          series: [],
        },

        user: {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: [],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
            //   interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: [
            "#2ec7c9",
            "#b6a2de",
            "#5ab1ef",
            "#ffb980",
            "#d87a80",
            "#8d98b3",
          ],
          series: [],
        },
      },
    };
  },

  methods: {
    getTableData() {
      getHome().then((res) => {
        console.log(res);
        this.tableData = res.data.tableData;
        this.countData = res.data.countData;

        const order = res.data.orderData;
        this.ehcartData.order.xAxis.data = order.date;
        let keyArrray = Object.keys(order.data[0]);

        keyArrray.forEach((key) => {
          this.ehcartData.order.series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });

        const myEchartsOrder = echarts.init(this.$refs.echart);

        myEchartsOrder.setOption(this.ehcartData.order);
        //用户图
        this.ehcartData.user.xAxis.data = res.data.userData.map(
          (item) => item.date
        );

        this.ehcartData.user.series.push({
          name: "新增用户",
          data: res.data.userData.map((item) => item.new),
          type: "bar",
        });
        this.ehcartData.user.series.push({
          name: "活跃用户",
          data: res.data.userData.map((item) => item.active),
          type: "bar",
        });

        const userEcharts = echarts.init(this.$refs.userEchart);
        userEcharts.setOption(this.ehcartData.user);
      });
    },
  },
  mounted() {
    // getMenu().then((res) => {
    //   console.log(res);
    // });
    this.getTableData();
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
.graph {
  display: flex;
  margin-top: 20px;
  .el-card {
    height: 280px;
    flex: 1;
    margin: 10px;
  }
}
</style>