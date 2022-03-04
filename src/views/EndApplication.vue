<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">已完成申请</span>
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
            //BaseModel
            BaseModel: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "",
            },
            //-----
        };
    },
    mounted() {
        this.GetProcessedApply();
    },
    methods: {
        //获取表单路径
        GetUrl(row) {
            this.BaseModel.processName = row.processName;
            window.sessionStorage["taskId"] = row.taskID;

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
            this.GetProcessedApply();
        },
        handleCurrentChange(val) {
            this.pageindex = val;
            this.GetProcessedApply();
        },
        //获取已处理申请
        GetProcessedApply() {
            this.$axios({
                url:
                    this.baseUrl +
                    "GetEndProcess?account=" +
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
        //-------
    },
};
</script>

