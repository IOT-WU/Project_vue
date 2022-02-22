<template>
    <div style="width: 100%">
        <div style="width: 300px; margin: 0 auto">
            <el-form :model="UserInfoData" label-width="120px">
                <el-form-item label="账号">
                    <el-input v-model="UserInfoData.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input
                        type="password"
                        v-model="UserInfoData.userPass"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: "http://localhost:7438/api/",
            UserInfoData: {
                userName: "",
                userPass: "",
            },
        };
    },
    methods: {
        onSubmit() {
            this.$axios({
                url: this.baseUrl + "Login",
                method: "post",
                data: this.UserInfoData,
            }).then((res) => {
                if (res.data == 0) {
                    window.localStorage.removeItem("token");
                    this.$message.warning("登录失败");
                } else {
                    window.sessionStorage.removeItem("token");
                    window.sessionStorage["token"] = "Bearer " + res.data;
                    this.$message.success("登录成功");
                    this.$router.push("Menu");
                }
                console.log(res.data);
            });
        },
        //---------------
    },
};
</script>