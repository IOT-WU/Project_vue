<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">发起申请</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>
            <el-collapse-item title="人资申请" name="1">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogstaffVisible = true"
                        >人力资源申请</el-button
                    >
                    <!-- 人力资源申请表单 -->
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
            <el-collapse-item title="招聘申请" name="2">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogAnnualVisible = true"
                        >招聘人员申请</el-button
                    >
                    <!-- 招聘人员申请表单 -->
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
            <el-collapse-item title="离职申请" name="3">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button
                        type="text"
                        @click="dialogDepartureVisible = true"
                        >离职申请</el-button
                    >
                    <!-- 离职申请表单 -->
                    <el-dialog
                        title="离职申请"
                        v-model="dialogDepartureVisible"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/DepartureApply"
                            width="950px"
                            height="380px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="请假申请" name="4">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogLeaveVisible = true"
                        >请假申请</el-button
                    >
                    <!-- 请假申请表单 -->
                    <el-dialog
                        title="请假申请"
                        v-model="dialogLeaveVisible"
                        width="1000px"
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
            <el-collapse-item title="录用申请" name="5">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogluyongVisible = true"
                        >录用人员申请</el-button
                    >
                    <!-- 录用员工表单 -->
                    <el-dialog
                        v-model="dialogluyongVisible"
                        title="员工录用"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/EmployApply"
                            width="950px"
                            height="570px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>

            <el-collapse-item title="离职交接申请" name="6">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogTransferVisible = true"
                        >离职交接申请</el-button
                    >
                    <!-- 离职交接申请 -->
                    <el-dialog
                        v-model="dialogTransferVisible"
                        title="离职交接申请"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/TransferApply"
                            width="950px"
                            height="600px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="员工离职面谈申请" name="7">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogexitVisible = true"
                        >员工离职面谈申请</el-button
                    >
                    <!-- 员工离职面谈申请 -->
                    <el-dialog
                        v-model="dialogexitVisible"
                        title="员工离职面谈申请"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/EmployeeturnoverApply"
                            width="950px"
                            height="1200px"
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
            dialogTransferVisible: false, //离职交接表单
            dialogexitVisible: false, //员工离职面谈表单
        };
    },
    mounted() {},
    methods: {},
};
</script>
