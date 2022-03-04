<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">公告管理</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>
            <el-collapse-item title="公告基本信息" name="8">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogAnnouncementVisible = true"
                        >公告基本信息</el-button
                    >
                    <!-- 公告基本信息 -->
                    <el-dialog
                        v-model="dialogAnnouncementVisible"
                        title="公告基本信息"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/AnnouncementApply"
                            width="950px"
                            height="450px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>

            <el-collapse-item title="文件管理信息" name="9">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogFileVisible = true"
                        >文件管理信息</el-button
                    >
                    <!-- 文件管理信息 -->
                    <el-dialog
                        v-model="dialogFileVisible"
                        title="文件管理信息"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/FileApply"
                            width="950px"
                            height="450px"
                            frameborder="0"
                        ></iframe>
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
                dialogAnnouncementVisible:false,//公告基本信息表
                dialogFileVisible:false,//文件管理信息表
            };
        },
        mounted() {},
        methods: {},
    };
    </script>