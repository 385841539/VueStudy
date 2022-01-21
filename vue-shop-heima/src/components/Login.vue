<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="" />
            </div>

            <!-- 登录表单区域 -->
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                :rules="loginFormReules"
                label-width="0px"
                class="login_form"
            >
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username">
                        <i slot="prefix" class="iconfont icon-user"></i>
                    </el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password">
                        <i slot="prefix" class="iconfont icon-3702mima"></i>
                    </el-input>
                </el-form-item>

                <!-- 按钮区 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm"
                        >重置</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123456',
            },
            //   表单的验证规则对象
            loginFormReules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur',
                    },
                    { min: 3, max: 5, message: '长度不符', trigger: 'blur' },
                ],
                password: [
                    { min: 3, max: 15, message: '长度不符', trigger: 'blur' },
                ],
            },
        }
    },

    mounted() {
        this.checkIsLogin()
    },
    methods: {
        resetLoginForm() {
            console.log(this)
            this.$refs.loginFormRef.resetFields()
        },
        checkIsLogin() {
            var token = localStorage.getItem('token')

            if (token) {
                console.log('token---')
                console.log(token)
                this.$router.push('/home')
            }
        },
        login() {
            this.$refs.loginFormRef.validate(async (valid) => {
                console.log(valid)
                if (!valid) return
                const { data: result } = await this.$http.post(
                    'login',
                    this.loginForm
                )
                console.log('result---')
                console.log(result)
                console.log(result.data)
                // if (result.data.code != 0) {
                if (result.meta.status == 200) {
                    localStorage.setItem('token', result.data.token)
                    this.$message.success('登录成功')
                    this.checkIsLogin()
                } else {
                    this.$message.error('登录失败')
                }
            })
        },
    },
}
</script>

<style lang="less" scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}
.login_box {
    width: 450px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}

.login_form {
    padding: 0 20px;
    width: 100%;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>
