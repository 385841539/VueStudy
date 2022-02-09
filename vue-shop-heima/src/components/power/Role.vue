<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>角色列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card>
            <div>
                <el-button type="primary" @click="addRole">角色添加</el-button>
                <el-cascader
                    v-model="value"
                    :options="options"
                    :props="{ expandTrigger: 'hover' }"
                    @change="handleChange"
                ></el-cascader>
            </div>

            <div>
                <quill-editor> </quill-editor>
            </div>

            <el-table :data="rolelist" border stripe>
                <!-- 展开列 -->
                <el-table-column type="expand">
                    <template slot-scope="scope">
                        <!-- <pre>{{ scope.row }}</pre> -->

                        <el-row
                            v-for="(item1, index1) in scope.row.children"
                            :key="item1.id"
                            :class="[
                                'bdbottom',
                                index1 == 0 ? 'bdtop' : '',
                                'elmargin',
                            ]"
                        >
                            <!-- 一级权限 -->
                            <el-col :span="5">
                                <el-tag closable> {{ item1.authName }} </el-tag>
                                <el-icon class="el-icon-caret-right"></el-icon>
                            </el-col>

                            <!-- 二级和三级权限 -->

                            <el-col :span="19">
                                <el-row
                                    v-for="(item2, index2) in item1.children"
                                    :key="item2.id"
                                >
                                    <el-col
                                        :span="6"
                                        :class="[index2 == 0 ? '' : 'bdtop']"
                                    >
                                        <el-tag closable type="success">{{
                                            item2.authName
                                        }}</el-tag>
                                        <el-icon
                                            class="el-icon-caret-right"
                                        ></el-icon>
                                    </el-col>
                                    <el-col :span="18">
                                        <!-- <div> -->
                                        <el-tag
                                            closable
                                            type="warning"
                                            v-for="(
                                                item3, index3
                                            ) in item2.children"
                                            :key="item3.id"
                                        >
                                            {{ item3.authName }}
                                        </el-tag>
                                        <!-- </div> -->
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </template>
                </el-table-column>

                <!-- 索引列 -->
                <el-table-column type="index"> </el-table-column>
                <el-table-column label="角色名称" prop="roleName">
                </el-table-column>
                <el-table-column label="角描述" prop="roleDesc">
                </el-table-column>
                <el-table-column label="操作" width="350px">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit"
                            >编辑</el-button
                        >
                        <el-button type="warning" icon="el-icon-delete"
                            >删除</el-button
                        >
                        <el-button
                            type="success"
                            icon="el-icon-share"
                            @click="disRoles(scope.row)"
                            >分配权限</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>

            <div><importExcel @getResult="getMyExcelData" /></div>
            <div class="exportExcel">
                <el-button size="middle" type="primary"
                    ><a href="./file/freight_temp.xlsx" download="运费模板.xlsx"
                        >下载运费模板</a
                    ></el-button
                >
            </div>
            <el-button round
                ><a href="./file/freight_temp.xlsx" download="运费模板.xlsx"
                    >报名参赛</a
                >
            </el-button>
            <div>
                <!-- <el-scrollbar> -->
                <div class="hortest">
                    <div class="item_index" v-for="index in 100" :key="index">
                        <!-- <div class="inner_div"> -->
                        <div class="test_div_inner">111</div>
                        <div class="test_div_inner">222</div>
                        <!-- </div> -->
                    </div>
                </div>
                <!-- </el-scrollbar> -->
            </div>
        </el-card>

        <el-dialog title="分配权限" :visible.sync="dialogVisible">
            <el-tree
                ref="treeRef"
                :data="rightlist"
                :props="treeProps"
                show-checkbox
                node-key="id"
                default-expand-all
                :default-checked-keys="defKeys"
            ></el-tree>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="allotRights">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import data from '../../data/mock/cascaderData.js'
import importExcel from './importExcel.vue'
import exportExcel from './exportExcel.vue'
// import ll from '../../../public/assets/运费模板.xlsx'

// import sss from '运费模板.xlsx'
export default {
    data() {
        return {
            dialogVisible: false,
            rolelist: [],
            rightlist: [],
            roleId: '',
            //默认选中的节点id数组
            defKeys: [],
            treeProps: {
                children: 'children',
                label: 'authName',
            },
            value: [],
            options: data.options,
            tempExcelKeySet: {
                运费模板: 'temp_name',
                承运商: 'shop_name',
                仓库: 'house_name',
                区域: 'where_name_str',
                '首重运费（*）': 'first_weight_price',
                '续重运费（*）': 'continue_weight_price',
                首重运费减免: 'first_weight_price_off',
                续重运费减免: 'continue_weight_price_off',
            },
        }
    },
    components: {
        importExcel,
        exportExcel,
    },
    methods: {
        downloadMater() {},
        getMyExcelData(data, name) {
            var tempExcelList = []

            // data 为读取的excel数据，在这里进行处理该数据
            console.log('data--excel---name--')
            console.log(data.length)
            console.log(data[0])
            console.log(JSON.stringify(data[0]))
            console.log(name)

            if (data) {
                data.forEach((item, i) => {
                    var tempParse = {}
                    for (var key in item) {
                        for (var tempKey in this.tempExcelKeySet) {
                            if (key.indexOf(tempKey) !== -1) {
                                tempParse[this.tempExcelKeySet[tempKey]] =
                                    item[key]
                            }
                        }
                    }
                    ///校验 数据有无问题

                    console.log(tempParse['first_weight_price'])
                    console.log(tempParse['first_weight_price'] > 0)
                    if (
                        tempParse['first_weight_price'] > 0 &&
                        tempParse['continue_weight_price'] > 0 &&
                        tempParse['first_weight_price_off'] > 0 &&
                        tempParse['continue_weight_price_off'] > 0
                    ) {
                        tempParse['temp_local_success'] = true
                    } else {
                        tempParse['temp_local_success'] = false
                    }
                    tempExcelList.push(tempParse)
                    console.log(tempParse)
                    ///拿到  来的数据， 展示出来

                    ///遍历 item

                    //           var lll = {
                    //     '运费模板名称（*）': '上海模板',
                    //     '承运商（*）': '京东',
                    //     '仓库（*）': '上海',
                    //     '区域（*）': '南京',
                    //     '首重运费（*）': 1,
                    //     '续重运费（*）': 2,
                    //     '首重运费减免（*）': 11,
                    //     '续重运费减免（*）': 22,
                    // }

                    //    var lllll=      {
                    //       id: '5934',
                    //       shop_name: '顺丰1',
                    //       where_name: ['江苏'],
                    //       house_name: '上海仓',
                    //       temp_name: '零时',
                    //       update_time: '2022-11-2',
                    //       first_weight_price: '10',
                    //       continue_weight_price: '101',
                    //       first_weight_price_off: '1012',
                    //       continue_weight_price_off: '1012',
                    //     },
                    ///检验合法性
                })

                // console.log('tempExcelList----')
                // console.log(tempExcelList)
            }
        },
        addRole() {},
        handleChange(value) {
            console.log(value)
        },
        async allotRights() {
            var keys = [
                ...this.$refs.treeRef.getCheckedKeys(),
                ...this.$refs.treeRef.getHalfCheckedKeys(),
            ]
            console.log('keys-----')
            console.log(keys)

            var { data: res } = await this.$http.post(
                `roles/${this.roleId}/rights`,
                { rids: keys.join(',') }
            )

            if (res.meta.status != 200) {
                return this.$message.error(res.msg)
            }

            this.dialogVisible = false
            this.getRoles()
        },
        async getRoles() {
            var { data: res } = await this.$http.get('roles')

            if (res.meta.status != 200) {
                return this.$message.error('获取角色列表失败')
            }

            console.log(res.data)
            this.rolelist = res.data
        },

        async disRoles(role) {
            this.roleId = role.id
            var { data: res } = await this.$http.get('rights/tree')

            if (res.meta.status !== 200) {
                return this.$message.error('获取权限列表失败')
            }

            this.rightlist = res.data
            console.log(role)
            this.defKeys = []
            this.getLeafKeys(role, this.defKeys)
            this.dialogVisible = true
        },

        getLeafKeys(node, arr) {
            ///通过递归的形式获取角色的三级权限id

            if (!node.children) {
                return arr.push(node.id)
            }

            node.children.forEach((element) => {
                this.getLeafKeys(element, arr)
            })
        },
    },

    created() {
        this.getRoles()
    },
}
</script>


<style lang="less" scoped>
.el-tag {
    margin-top: 7px;
    margin-bottom: 7px;
    margin-right: 10px;
    align-self: center;
    justify-self: center;
}

.elmargin {
    margin-left: 20px;
    margin-right: 20px;
}

.bdtop {
    border-top: 1px solid #eee;
}
.bdbottom {
    border-bottom: 1px solid #eee;
}

.el-row {
    display: flex;
    align-items: center;
}
.el-cascader {
    margin-left: 15px;
}

.quill-editor {
    margin-top: 10px;
}

.el-scrollbar {
    width: 500px;
    height: 200px;
    background-color: red;
}

.hortest {
    background-color: aquamarine;
    display: flex;
    width: 500px;
    overflow-x: auto;
}
.item_index {
    background-color: antiquewhite;
    margin: 10px;
    align-items: center;
}

// .el-scrollbar__wrap {
//     overflow-x: auto;
//     height: calc(100% + 20px); //多出来的20px是横向滚动条默认的样式
// }

// .el-scrollbar .el-scrollbar__wrap .el-scrollbar__view {
//     white-space: nowrap;
//     display: inline-block;
// }

// .inner_div {
//     display: block;
// }

.test_div_inner {
    width: 100px;
    margin: 10px;
    background-color: orange;
    height: 100px;
}
.exportExcel {
    margin-top: 10px;
    margin-bottom: 10px;
}
a {
    color: white;
    text-decoration: none;
}
</style>