<template>
    <!-- 菜单 -->
    <div style="width: 100%; height: 100%; margin: 0px">
        <el-container>
            <el-header
                style="width: 100%; height: 8vh; background-color: #545c64"
            >
                <div style="text-align: left">
                    <label style="color: #ffffff; position: relative; top: 2vh">
                        <el-icon>
                            <avatar />
                        </el-icon>
                        当前账户：<span style="color: rgb(43, 233, 91)">{{
                            this.userName
                        }}</span>
                        &nbsp;
                        <span
                            @click="Goto('login')"
                            style="font-size: 12px; color: #66b1ff"
                            >换账户登录</span
                        >
                    </label>
                </div>
                <label style="font-size: 30px; color: #ffffff; top: 2vh"
                    >Welcome To BPM Manage System !</label
                >
            </el-header>
            <el-container>
                <el-aside
                    width="250px"
                    style="background-color: #545c64; color: #fff"
                >
                    <el-menu
                        style="height: 92vh; width: 250px"
                        :unique-opened="true"
                        active-text-color="#ffd04b"
                        background-color="#545c64"
                        text-color="#fff"
                        :default-openeds="['1']"
                    >
                        <el-sub-menu index="1">
                            <template #title> 人事行政管理 </template>
                            <el-menu-item
                                index="1-1"
                                @click="Goto('LaunchApplication')"
                                >发起申请</el-menu-item
                            >
                            <el-menu-item
                                index="1-2"
                                @click="Goto('PendingApplication')"
                                >待处理申请</el-menu-item
                            >
                            <el-menu-item index="1-3" @click="Goto('')"
                                >已处理申请</el-menu-item
                            >
                            <el-menu-item index="1-4" @click="Goto('')"
                                >我的申请</el-menu-item
                            >
                            <el-menu-item index="1-5" @click="Goto('')"
                                >已完成申请</el-menu-item
                            >
                            <el-menu-item
                                index="1-6"
                                @click="Goto('RequestApplication')"
                                >审批申请</el-menu-item
                            >
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title> 公司资产管理 </template>
                            <el-menu-item
                                index="2-1"
                                @click="Goto('AssetsApply')"
                                >资产申请</el-menu-item
                            >
                            <el-menu-item index="2-2" @click="Goto('')"
                                >资产添加</el-menu-item
                            >
                        </el-sub-menu>
                        <el-sub-menu index="3">
                            <template #title> 其他管理 </template>
                            <el-menu-item index="3-1" @click="Goto('')"
                                >公告管理</el-menu-item
                            >
                            <el-menu-item index="3-2" @click="Goto('')"
                                >年假管理</el-menu-item
                            >
                            <el-menu-item index="3-2" @click="Goto('')"
                                >维护管理</el-menu-item
                            >
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <!-- 显示页面 -->
                <el-main style="width: 100%; height: 100%">
                    <!-- 占位符-点击加载之后的页面 -->
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { Avatar } from "@element-plus/icons-vue";
export default {
    components: {
        Avatar,
    },
    data() {
        return {
            userName: window.sessionStorage["account"],
            //-----
        };
    },
    created() {
        this.$router.push("LaunchApplication");
        console.log(window.sessionStorage["token"]);
    },
    methods: {
        //跳转页面
        Goto(val) {
            this.$router.push(val);
        },
        //----
    },
};
</script>