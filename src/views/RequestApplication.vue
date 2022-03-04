<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">申请审批</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>
            <el-collapse-item title="人资申请审批" name="1">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogstaffVisible = true"
                        >人力资源申请审批</el-button
                    >
                    <!-- 人力资源申请审批表单 -->
                    <el-dialog v-model="dialogstaffVisible" width="1000px">
                        <iframe
                            src="http://localhost:8080/stafflApply"
                            width="950px"
                            height="550px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="招聘申请审批" name="2">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogAnnualVisible = true"
                        >招聘人员申请审批</el-button
                    >
                    <!-- 招聘人员申请审批表单 -->
                    <el-dialog v-model="dialogAnnualVisible" width="1000px">
                        <iframe
                            src="http://localhost:8080/AnnualApply"
                            width="950px"
                            height="380px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="离职申请审批" name="3">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button
                        type="text"
                        @click="dialogDepartureVisible = true"
                        >离职申请审批</el-button
                    >
                    <!-- 离职申请审批表单 -->
                    <el-dialog v-model="dialogDepartureVisible" width="1000px">
                        <iframe
                            src="http://localhost:8080/DepartureApply"
                            width="950px"
                            height="380px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="请假申请审批" name="4">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogLeaveVisible = true"
                        >请假申请审批</el-button
                    >
                    <!-- 请假申请审批表单 -->
                    <el-dialog
                        title="请假申请审批"
                        v-model="dialogLeaveVisible"
                        width="950px"
                    >
                        <iframe
                            src="http://localhost:8080/LeaveApply"
                            width="950px"
                            height="380px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="录用申请审批" name="5">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogluyongVisible = true"
                        >录用人员申请审批</el-button
                    >
                    <!-- 录用员工表单 -->
                    <el-dialog
                        v-model="dialogluyongVisible"
                        title="员工录用"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/EmployApprova"
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
            dialogLeaveVisible: false, //请假表单
            dialogluyongVisible: false, //录用表单
            dialogDepartureVisible: false, //离职表单
            dialogAnnualVisible: false, //招聘表单
            dialogstaffVisible: false, //人力资源表单
        };
    },
    mounted() {},
    methods: {},
};
</script>
