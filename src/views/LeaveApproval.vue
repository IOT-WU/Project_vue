<template>
    <div>
        <table
            border="1px"
            ref="leaveformRef"
            :model="leaveform"
            bordercolor="#E4E7ED"
            width="900px"
            cellpadding="5"
            cellspacing="0"
        >
            <tr>
                <td colspan="4">
                    <h2 style="text-align: center">请假申请审批表</h2>
                </td>
            </tr>
            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    基础信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    申请审批人
                </td>
                <td width="225">
                    <input
                        disabled="disabled"
                        type="text"
                        v-model="leaveform.leave_Proposer"
                        style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        "
                    />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    申请审批部门
                </td>
                <td width="225">
                    <input
                        disabled="disabled"
                        type="text"
                        v-model="leaveform.leave_Demo"
                        style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        "
                    />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    申请审批时间
                </td>
                <td width="225">
                    <input
                        disabled="disabled"
                        type="datetime-local"
                        v-model="leaveform.leave_Time"
                        placeholder="选择日期"
                        style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                            width: 100%;
                        "
                    />
                </td>
                <td
                    align="left"
                    width="225"
                    style="background-color: #f6f5f4"
                ></td>
                <td width="225"></td>
            </tr>

            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    请假信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    请假类型
                </td>
                <td width="225">
                    <select
                        style="
                            width: 100%;
                            height: 100%;
                            border: 0;
                            background: transparent;
                            outline: none;
                        "
                        v-model="leaveform.leave_LeaveType"
                        placeholder="请输入"
                    >
                        <option
                            v-for="item in leaveType"
                            :key="item.leave_TypeId"
                            :label="item.leave_TypeName"
                            :value="item.id"
                        ></option>
                    </select>
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    请假开始时间
                </td>
                <td width="225">
                    <input
                        disabled="disabled"
                        type="datetime-local"
                        v-model="leaveform.leave_StartDate"
                        placeholder="选择日期"
                        style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                            width: 100%;
                        "
                    />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    请假结束时间
                </td>
                <td width="225">
                    <input
                        disabled="disabled"
                        type="datetime-local"
                        @change="DateDiff"
                        v-model="leaveform.leave_EndDate"
                        placeholder="选择日期"
                        style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                            width: 100%;
                        "
                    />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    请假天数
                </td>
                <td width="225">
                    <input
                        disabled="disabled"
                        type="text"
                        v-model="leaveform.leave_Day"
                        style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        "
                    />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    请假原因
                </td>
                <td width="225" colspan="3">
                    <textarea
                        cols="100"
                        v-model="leaveform.leave_Reason"
                        style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        "
                    ></textarea>
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    附件
                </td>
                <td width="225" colspan="3">
                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                    >
                        <el-button type="success" size="mini"
                            >+ 添加附件</el-button
                        >
                    </el-upload>
                </td>
            </tr>
            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    备注
                </td>
            </tr>
            <tr>
                <td width="225" colspan="4">
                    <textarea
                        cols="120"
                        v-model="leaveform.leave_Remark"
                        style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        "
                    ></textarea>
                </td>
            </tr>
        </table>
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
            action: "提交", //申请审批分支名称
            leaveType: [],
            //请假申请审批数据
            bpmLeave: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "leave",
                leaveData: "",
            },
            leaveform: {
                leave_Proposer: "",
                leave_Demo: "",
                leave_Time: "",
                leave_LeaveType: "",
                leave_StartDate: "",
                leave_EndDate: "",
                leave_Day: 0,
                leave_Reason: "",
                leave_AffixName: "",
                leave_Remark: "",
            },
        };
    },
    mounted() {
        this.GetLeaveType();
    },
    methods: {
        //获取请假类型
        GetLeaveType() {
            this.$axios({
                url: this.baseUrl + "GetLeaveType",
                method: "get",
            }).then((res) => {
                this.leaveType = res.data;
            });
        },
        //请假申请审批
        LeaveApply() {
            this.dialogLeaveVisible = true;
        },
        //发起请假流程
        AddLeaveApply() {
            this.bpmLeave.leaveData = JSON.stringify(this.leaveform);
            this.$axios({
                url: this.baseUrl + "startleave",
                method: "post",
                data: this.bpmLeave,
            }).then((res) => {
                console.log(res);
                if (res.data == "") {
                    this.$message.success("提交成功");
                } else {
                    this.$message.error("提交失败");
                }
                this.dialogLeaveVisible = false;
            });
        },
        //------
    },
};
</script>

<style>
input {
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    -webkit-appearance: none;
    outline-color: transparent;
    box-shadow: none;
}
textarea {
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    -webkit-appearance: none;
    outline-color: transparent;
    box-shadow: none;
}
</style>
