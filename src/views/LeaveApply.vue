<template>
    <div class=".BodyDiv">
        <table
            border="1px"
            ref="leaveformRef"
            :model="leaveform"
            bordercolor="#E4E7ED"
            width="950px"
            cellpadding="5"
            cellspacing="0"
        >
            <tr>
                <td colspan="4">
                    <h2 style="text-align: center">请假审批表</h2>
                </td>
            </tr>
            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    基础信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    申请人
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.leave_Proposer" />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    申请部门
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.leave_Demo" />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    申请时间
                </td>
                <td width="225">
                    <input
                        type="datetime-local"
                        v-model="leaveform.leave_Time"
                        placeholder="选择日期"
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
                        type="datetime-local"
                        v-model="leaveform.leave_StartDate"
                        placeholder="选择日期"
                    />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    请假结束时间
                </td>
                <td width="225">
                    <input
                        type="datetime-local"
                        @change="DateDiff"
                        v-model="leaveform.leave_EndDate"
                        placeholder="选择日期"
                    />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    请假天数
                </td>
                <td width="225">
                    <input
                        type="text"
                        disabled="disabled"
                        v-model="leaveform.leave_Day"
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
                    ></textarea>
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    附件
                </td>
                <td width="225" colspan="3">
                    <el-upload
                        style="float: left"
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
                    ></textarea>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <div style="height: 21px">
                        <button
                            type="info"
                            style="float: left"
                            @click="AddLeaveApply"
                        >
                            提交
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    inject: ["reload"],
    data() {
        return {
            baseUrl: "http://localhost:7438/api/",
            leaveType: [],
            //请假申请数据
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
            //-----
        };
    },
    mounted() {
        this.leaveform = {
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
        };
        this.GetLeaveType();
        if (window.sessionStorage["taskId"] != "") {
            this.findLeave(window.sessionStorage["taskId"]);
            window.sessionStorage.removeItem("taskId");
        }
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
        //计算请假天数
        DateDiff() {
            if (this.leaveform.leave_EndDate == "") {
                return;
            }
            if (this.leaveform.leave_EndDate < this.leaveform.leave_StartDate) {
                this.$message.warning("结束时间小于开始时间，请重新选择");
                this.leaveform.leave_EndDate = "";
                return;
            }
            console.log(this.leaveform.leave_EndDate.slice(0, 10));
            console.log(this.leaveform.leave_StartDate.slice(0, 10));
            //sDate1和sDate2是yyyy-MM-dd格式
            var aDate, oDate1, oDate2, iDays;
            aDate = this.leaveform.leave_StartDate.slice(0, 10).split("-");
            oDate1 = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]); //转换为yyyy-MM-dd格式
            aDate = this.leaveform.leave_EndDate.slice(0, 10).split("-");
            oDate2 = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]);
            iDays = Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24; //把相差的毫秒数转换为天数
            iDays = iDays.toFixed(0); //天数保留两位小数
            this.leaveform.leave_Day = iDays;
            console.log(this.leaveform);
        },
        //发起请假流程
        AddLeaveApply() {
            console.log(this.leaveform);
            this.bpmLeave.leaveData = JSON.stringify(this.leaveform);
            this.$axios({
                url: this.baseUrl + "startleave",
                method: "post",
                data: this.bpmLeave,
            }).then((res) => {
                console.log(res);
                if (res.data == "") {
                    this.$message.success("提交成功");
                    this.reload();
                } else {
                    this.$message.error("提交失败");
                }
            });
        },
        //请假申请反填
        findLeave(id) {
            this.$axios({
                url: this.baseUrl + "findleave?id=" + id,
                method: "get",
            }).then((res) => {
                console.log(res.data);
                this.leaveform = res.data;
            });
        },
        //-----
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
    width: 100%;
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
    width: 100%;
}
</style>