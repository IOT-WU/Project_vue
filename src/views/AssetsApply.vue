<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">资产申请</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>
            <el-collapse-item title="车辆保险" name="1">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button
                        type="text"
                        @click="dialogInsuranceVisible = true"
                        >车辆保险记录表</el-button
                    >
                    <!-- 车辆保险记录表 -->
                    <el-dialog
                        v-model="dialogInsuranceVisible"
                        title="车辆保险"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/Insurance"
                            width="950px"
                            height="450px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="车辆保养" name="2">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogmaintainVisible = true"
                        >车辆保养记录表</el-button
                    >
                    <!-- 车辆保养记录表 -->
                    <el-dialog
                        v-model="dialogmaintainVisible"
                        title="车辆保养"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/maintain"
                            width="950px"
                            height="450px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="车辆维修" name="3">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogrepairVisible = true"
                        >车辆维修</el-button
                    >
                    <!-- 车辆维修 -->
                    <el-dialog v-model="dialogrepairVisible" width="1000px">
                        <iframe
                            src="http://localhost:8080/repair"
                            width="950px"
                            height="550px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="车辆违章" name="4">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button
                        type="text"
                        @click="dialogViolationVisible = true"
                        >车辆违章记录表</el-button
                    >
                    <!-- 车辆违章记录表 -->
                    <el-dialog
                        v-model="dialogViolationVisible"
                        title="车辆违章"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/Violation"
                            width="950px"
                            height="450px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>

            <el-collapse-item title="用章申请" name="6">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogChapterVisible = true"
                        >用章申请</el-button
                    >
                    <!-- 用章申请表单 -->
                    <el-dialog
                        v-model="dialogChapterVisible"
                        title="用章申请"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/chapterApply"
                            width="950px"
                            height="450px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>

            <el-collapse-item title="刻章申请" name="7">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogPrintsVisible = true"
                        >刻章申请</el-button
                    >
                    <!-- 刻章申请表单 -->
                    <el-dialog
                        v-model="dialogPrintsVisible"
                        title="刻章申请"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/PrintsApply"
                            width="950px"
                            height="450px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>

            <el-collapse-item title="用车申请" name="8">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogcarUseVisible = true"
                        >用车申请</el-button
                    >
                    <!-- 用车申请 -->
                    <el-dialog
                        v-model="dialogcarUseVisible"
                        title="用车申请"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/carapplicationApply"
                            width="950px"
                            height="500px"
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
            dialogChapterVisible: false, //用章申请表单
            dialogPrintsVisible: false, //刻章申请表单
            dialogcarUseVisible: false, //用车申请表单
            dialogluyongVisible: false, //车辆违章记录表
            dialogInsuranceVisible: false, //车辆保险
            dialogmaintainVisible: false, //车辆保养
            dialogrepairVisible: false, //车辆维修
            dialogViolationVisible: false, //车辆违章
        };
    },
    mounted() {},
    methods: {},
};
</script>
