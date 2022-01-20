<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{ getName }}</h3>

    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.name"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      :index="item.label"
      v-for="item in hazChildren"
      :key="item.label"
    >
      <div slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </div>

      <el-menu-item-group>
        <el-menu-item
          v-for="(subItem, subIndex) in item.children"
          :index="subItem.path"
          :key="subIndex"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="scss" scoped>


.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  min-height: 400px;
  justify-content: space-between;
}

.el-menu-item{

justify-content: space-around;
background-color: tomato;

}
.el-submenu{

justify-content: space-around;
background-color: green;

}
</style>


<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserMange/UserMange",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    clickMenu(item) {
      console.log(item);
      this.$router.push({ name: item.name });
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    getName() {
      if (this.isCollapse) return "后台";

      return "通用后台管理系统";
    },
    noChildren() {
      return this.menu.filter((item) => {
        console.log(item);
        return !item.children;
      });
    },
    hazChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
};
</script>