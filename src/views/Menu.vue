<template>
    <!-- 菜单 -->
    <div>
        <el-container>
            <el-aside width="auto">
                <el-menu :default-openeds="['1', '3']">
                    <el-sub-menu index="1">
                        <template #title> 用户信息显示 </template>
                        <el-menu-item index="1-1" @click="Goto('')"
                            >角色信息</el-menu-item
                        >
                        <el-menu-item index="1-2" @click="Goto('')"
                            >用户信息</el-menu-item
                        >
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title> 我的测试 </template>
                        <el-sub-menu index="2-1">
                            <template #title> 测试 </template>
                            <el-menu-item index="2-1-1" @click="Goto('')"
                                >测试表单数据</el-menu-item
                            >
                            <el-menu-item index="2-1-2" @click="Goto('')"
                                >二维码测试</el-menu-item
                            >
                        </el-sub-menu>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <!-- 显示页面 -->
            <el-main>
                <!-- 占位符-点击加载之后的页面 -->
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //-----
        };
    },
    created() {
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
