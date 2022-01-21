<template>
    <el-container class="home-container">
        <!-- 头布局 -->
        <el-header height="100px">
            <div>
                <img src="../assets/image/heima.png" alt="" />
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logOut">退出</el-button>
        </el-header>
        <!-- 页面主体区 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '65px' : '200px'">
                <div class="toggle-button" @click="toggleCollspse">
                    {{ isCollapse ? '展开' : '折叠' }}
                </div>
                <!-- 侧边栏菜单区 -->
                <el-menu
                    :collapse="isCollapse"
                    unique-opened
                    :router="true"
                    background-color="rgb(87, 86, 105)"
                    :collapse-transition="false"
                    text-color="#fff"
                    active-text-color="rgb(138, 135, 199)"
                    :default-active="activePath"
                >
                    <!-- 一级菜单 -->
                    <el-submenu
                        :index="'/' + item.path"
                        v-for="item in menulist"
                        :key="item.id"
                    >
                        <!-- 一级菜单模板区 -->
                        <template slot="title">
                            <i class="el-icon-platform-eleme"></i>
                            <span>{{ item.authName }}</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item
                            :index="'/' + subItem.path"
                            v-for="subItem in item.children"
                            :key="subItem.id"
                            @click="saveNavState(subItem)"
                        >
                            <!-- 一级菜单模板区 -->
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{ subItem.authName }}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu></el-aside
            >
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            //左侧菜单
            menulist: [],
            isCollapse: false,
            activePath: '',
        }
    },
    created() {
        this.getMenuList()
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        ///保存链接的激活状态
        saveNavState(subItem) {
            window.sessionStorage.setItem('activePath', "/"+subItem.path)
            this.activePath = "/"+subItem.path
        },
        toggleCollspse() {
            //折叠菜单
            this.isCollapse = !this.isCollapse
        },
        async getMenuList() {
            const { data: res } = await this.$http.get('menus')
            if (res.meta.status != 200) {
                this.$message.error(res.meta.msg)
                return
            } else {
                this.menulist = res.data
            }
            console.log(res)
        },
        logOut() {
            console.log(localStorage)
            localStorage.clear()
            this.$router.push('/login')
        },
    },
}
</script>


<style lang="less" scoped>
.home-container {
    height: 100%;
}
.el-header {
    background-color: rgb(117, 118, 126);
    display: flex;
    justify-content: space-between;
    padding: 0;
    padding-right: 15px;
    align-items: center;
    color: white;
    font-size: 20px;
    img {
        margin-left: 15px;
    }
    div {
        display: flex;
        align-items: center;
        span {
            margin-left: 15px;
        }
    }
}

.el-aside {
    background-color: rgb(87, 86, 105);
    .el-menu {
        border-right: none;
    }
}
.el-main {
    background-color: rgb(213, 221, 224);
}

.toggle-button {
    background-color: rgba(39, 35, 35, 0.801);
    font-size: 10px;
    color: white;
    text-align: center;
    letter-spacing: 0.2em;
    line-height: 24px;
}
</style>