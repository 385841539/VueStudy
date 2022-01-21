<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-input placeholder="请输入内容">
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                        ></el-button> </el-input
                ></el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>

            <el-table :data="userlist" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column label="姓名" prop="username"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="电话" prop="mobile"></el-table-column>
                <el-table-column
                    label="角色"
                    prop="role_name"
                ></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <el-switch
                            @change="changeSwitchState(scope.row)"
                            v-model="scope.row.mg_state"
                        ></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180px">
                    <template slot-scope="scope">
                        <el-button
                            type="primary"
                            icon="el-icon-edit"
                            circle
                        ></el-button>
                        <el-button
                            type="danger"
                            icon="el-icon-delete"
                            circle
                        ></el-button>
                        <el-tooltip
                            effect="dark"
                            content="删除"
                            placement="top"
                            :enterable="false"
                        >
                            <el-button
                                type="warning"
                                icon="el-icon-setting"
                            ></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页区域 -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pagenum"
                :page-sizes="[1, 2, 5, 10]"
                :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            >
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            queryInfo: {
                query: '',
                pagenum: 1,
                pagesize: 2,
            },

            userlist: [],
            total: 0,
        }
    },
    created() {
        this.getUserList()
    },
    methods: {
        async changeSwitchState(userinfo) {
            console.log(userinfo)
            const { data: res } = await this.$http.put(
                `users/${userinfo.id}/state/${userinfo.mg_state}`
            )

            if (res.meta.status !== 200) {
                this.$message.error('更新失败')
                userinfo.mg_state = !userinfo.mg_state
            }

            // user.mg_state = !user.mg_state
        },
        async getUserList() {
            var { data: res } = await this.$http.get('users', {
                params: this.queryInfo,
            })

            if (res.meta.status != 200) {
                return this.$message.error('获取用户列表失败')
            }

            this.userlist = res.data.users
            this.total = res.data.total
        },
        handleSizeChange(newPageSize) {
            console.log(newPageSize + '---newPageSize')
            this.queryInfo.pagesize = newPageSize
            this.getUserList()
        },
        handleCurrentChange(newPage) {
            console.log(newPage + '---newPage')
            this.queryInfo.pagenum = newPage
            this.getUserList()
        },
    },
}
</script>

<style lang="less" scoped>
</style>