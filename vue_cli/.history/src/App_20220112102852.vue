<template>
  <div id="app">
    <p>这是一个P段落</p>
    <el-button>按钮</el-button>
    <el-button type="info">信息</el-button>
    <el-radio v-model="radio" label="1">备选项1</el-radio>
    <el-radio v-model="radio" label="2">备选项1</el-radio>

 <div>   <router-link to="/">去home组件</router-link>
    <router-link to="/about">去about组件</router-link></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
    };
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
