<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">维护管理</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>

            <el-collapse-item title="用品查询" name="6">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialoggoodsVisible = true">用品查询</el-button>
                    <!-- 用品查询 -->
                    <el-dialog v-model="dialoggoodsVisible" title="用品查询" width="1000px">
                        <iframe src="http://localhost:8080/ReservationProcurement" width="950px" height="450px"
                            frameborder="0"></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<script>
    import { Edit } from "@element-plus/icons-vue";
    export default {
        components: {
            Edit,
        },
        data() {
            return {
                baseUrl: "http://localhost:7438/api/",
                dialoggoodsVisible: false,
            };
        },
        mounted() { },
        methods: {},
    };
</script>