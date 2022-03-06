<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">会议新增</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>
            <el-collapse-item title="会议室新增" name="1">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogMeetingRoomNewVisible = true"
                        >会议室新增</el-button
                    >
                    <!-- 会议室新增 -->
                    <el-dialog v-model="dialogMeetingRoomNewVisible" width="1000px">
                        <iframe
                            src="http://localhost:8080/MeetingRoomNew"
                            width="950px"
                            height="550px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baseUrl: "http://localhost:7438/api/",
                dialogMeetingRoomNewVisible:false,  

            };
        },
        mounted() {},
        methods: {},
    };
    </script>