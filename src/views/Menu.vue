<template>
    <!-- 菜单 -->
    <div>
        <el-container>
            <el-aside width="250px">
                <el-menu :default-openeds="['1']">
                    <el-sub-menu index="1">
                        <template #title> 流程管理 </template>
                        <el-menu-item index="1-1" @click="Goto('')"
                            >发起流程</el-menu-item
                        >
                        <el-menu-item index="1-2" @click="Goto('')"
                            >占位符</el-menu-item
                        >
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title> 系统管理 </template>
                        <el-sub-menu index="2-1">
                            <template #title> 菜单管理 </template>
                            <el-menu-item index="2-1-1" @click="Goto('')"
                                >菜单权限管理</el-menu-item
                            >
                            <el-menu-item index="2-1-2" @click="Goto('')"
                                >占位符</el-menu-item
                            >
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title> 数据管理 </template>
                        <el-menu-item index="3-1" @click="Goto('')"
                            >年假管理</el-menu-item
                        >
                        <el-menu-item index="3-2" @click="Goto('')"
                            >维护管理</el-menu-item
                        >
                    </el-sub-menu>
                    <el-sub-menu index="4">
                        <template #title> 文档管理 </template>
                        <el-menu-item index="4-1" @click="Goto('')"
                            >归档管理</el-menu-item
                        >
                        <el-menu-item index="4-2" @click="Goto('')"
                            >占位符</el-menu-item
                        >
                    </el-sub-menu>
                    <el-sub-menu index="5">
                        <template #title> 报表管理 </template>
                        <el-menu-item index="5-1" @click="Goto('')"
                            >占位符</el-menu-item
                        >
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
