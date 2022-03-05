<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">待处理申请</span>
    </div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="流水号">
            <template #default="scope">
                <span style="color: blue" @click="GetUrl(scope.row)">{{
                    scope.row.serialNum
                }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="processName" label="流程名" />
        <el-table-column prop="ownerAccount" label="拥有人" />
        <el-table-column prop="createAt" label="发起时间" />
        <el-table-column prop="nodeName" label="状态" />
    </el-table>
    <!-- 表单 -->
    <el-dialog v-model="dialogVisible" width="1000px">
        <iframe
            v-bind:src="this.ModelUrl"
            width="950px"
            height="450px"
            frameborder="0"
        ></iframe>
        <div style="text-align: left">
            <el-input
                v-model="Comments"
                :autosize="{ minRows: 2, maxRows: 4 }"
                type="textarea"
                placeholder="请输入审批建议"
            />
        </div>
        <div style="margin-top: 10px">
            <el-button size="small" type="primary" @click="Agree()" round plain
                >同意</el-button
            >
            <el-button size="small" type="danger" @click="Reject()" round plain
                >拒绝</el-button
            >
            <el-button
                size="small"
                type="warning"
                @click="RecedeRestart1()"
                round
                plain
                >驳回</el-button
            >
        </div>
    </el-dialog>
    <!-- 分页 -->
    <div>
        <el-pagination
            v-model:page-size="pagesize"
            :page-sizes="[5, 10, 15, 20]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            dialogCommentsVisible: false,
            baseUrl: "http://localhost:7438/api/",
            tableData: [{}], //流程数据
            pageindex: 1, //当前页码
            pagesize: 10, //页容量
            total: undefined, //总数量
            ModelUrl: "", //审批表单
            Comments: "", //审批意见
            //BaseModel
            BaseModel: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "",
            },
            //同意
            Approve: {
                action: "同意",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "",
                stepId: 0,
                comments: "",
            },
            //拒绝，驳回
            RejectedRefused: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "",
                taskId: 0,
                comments: "",
            },
            //-----
        };
    },
    mounted() {
        this.GetPendingApply();
    },
    methods: {
        //获取表单路径
        GetUrl(row) {
            this.BaseModel.processName = row.processName;
            window.sessionStorage["taskId"] = row.taskID;
            this.Approve.processName = row.processName;
            this.Approve.stepId = row.stepID;
            this.Approve.comments = this.Comments;
            this.RejectedRefused.processName = row.processName;
            this.RejectedRefused.taskId = row.taskID;
            this.RejectedRefused.comments = this.Comments;

            this.$axios({
                url: this.baseUrl + "GetUrl",
                method: "post",
                data: this.BaseModel,
            }).then((res) => {
                console.log(res.data);
                this.ModelUrl = res.data;
            });
            this.dialogVisible = true;
        },
        //分页
        handleSizeChange(val) {
            this.pagesize = val;
            this.GetPendingApply();
        },
        handleCurrentChange(val) {
            this.pageindex = val;
            this.GetPendingApply();
        },
        //获取待处理申请
        GetPendingApply() {
            this.$axios({
                url:
                    this.baseUrl +
                    "Process?account=" +
                    window.sessionStorage["account"] +
                    "&pageindex=" +
                    this.pageindex +
                    "&pagesize=" +
                    this.pagesize,
                method: "get",
            }).then((res) => {
                console.log(res.data);
                this.tableData = res.data.result;
                this.total = res.data.total;
            });
        },
        //同意
        Agree() {
            if (this.Comments == "") {
                this.$message.warning("请输入审批建议");
                return;
            }

            this.$axios({
                url: this.baseUrl + "Approve",
                method: "post",
                data: this.Approve,
            }).then((res) => {
                console.log(res.data);
                if (res.data == "") {
                    this.$message.success("审批成功");
                    this.dialogVisible = false;
                    this.GetPendingApply();
                } else {
                    this.$message.error("审批失败");
                }
            });
        },
        //拒绝
        Reject() {
            if (this.Comments == "") {
                this.$message.warning("请输入审批建议");
                return;
            }
            this.$axios({
                url: this.baseUrl + "Reject",
                method: "post",
                data: this.RejectedRefused,
            }).then((res) => {
                console.log(res.data);
                if (res.data == "") {
                    this.$message.success("审批成功");
                    this.dialogVisible = false;
                    this.GetPendingApply();
                } else {
                    this.$message.error("审批失败");
                }
            });
        },
        //驳回
        RecedeRestart1() {
            if (this.Comments == "") {
                this.$message.warning("请输入审批建议");
                return;
            }
            this.$axios({
                url: this.baseUrl + "RecedeRestart",
                method: "post",
                data: this.RejectedRefused,
            }).then((res) => {
                console.log(res.data);
                if (res.data == "") {
                    this.$message.success("审批成功");
                    this.dialogVisible = false;
                    this.GetPendingApply();
                } else {
                    this.$message.error("审批失败");
                }
            });
        },
        //-------
    },
};
</script>

