<template>
    <div>
        <table border="1px" ref="leaveformRef" :model="lBorrowform" bordercolor="#E4E7ED" width="00px" cellpadding="5"
            cellspacing="0">
            <tr>
                <td colspan="4">
                    <h2 style="text-align: center">
                        固定资产资料借用单
                    </h2>
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
                    <input type="text" v-model="lBorrowform.borrow_applicant" style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        " />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    申请部门
                </td>
                <td width="225">
                    <input type="text" v-model="lBorrowform.borrow_Department" style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        " />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    申请日期
                </td>
                <td width="225">
                    <input type="datetime-local" v-model="lBorrowform.borrow_Data" placeholder="选择日期" style="
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
                        " />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    归还日期
                </td>
                <td width="225">
                    <input type="datetime-local" v-model="lBorrowform.borrow_EndData" placeholder="选择日期" style="
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
                        " />
                </td>
            </tr>
            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    详细信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    资产名称
                </td>
                <td width="225">
                    <input type="text" v-model="lBorrowform.borrow_Name" style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        " />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    资产型号
                </td>
                <td width="225">
                    <input type="text" v-model="lBorrowform.borrow_Mode" style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        " />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    资料名称
                </td>
                <td width="225">
                    <input type="text" v-model="lBorrowform.borrow_LName" style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        " />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4" colspan="2">

                </td>
            </tr>

            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    备注
                </td>
            </tr>
            <tr>
                <td width="225" colspan="4">
                    <textarea cols="120" v-model="lBorrowform.borrow_Note" style="
                            outline-color: invert;
                            outline-style: none;
                            outline-width: 0px;
                            border: none;
                            border-style: none;
                            text-shadow: none;
                            -webkit-appearance: none;
                            outline-color: transparent;
                            box-shadow: none;
                        "></textarea>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <div style="width: 900px" align="center">
                        <div style="margin: 0 auto">
                            <button type="info" style="float: left" @click="BorrowdAdd">
                                提交
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>

</template>
<script>
    import { Edit } from "@element-plus/icons-vue";
    export default {
        data() {
            return {
                lBorrowform: {
                    borrow_applicant: "",
                    borrow_Department: "",
                    borrow_Data: "",
                    borrow_EndData: "",
                    borrow_Name: "",
                    borrow_Mode: "",
                    borrow_LName: 0,
                    borrow_Note: ""
                },
                bpmBorrow: {
                    action: "提交",
                    bpmUser: window.sessionStorage["account"],
                    bpmUserPass: window.sessionStorage["password"],
                    fullName: window.sessionStorage["account"],
                    processName: "固定资产借用",
                    planData: "",
                },
            };
        },

        methods: {
            AnnualApply() {
            this.dialogBorrowVisible = true;
        },
            BorrowdAdd() {
                this.bpmBorrow.planData = JSON.stringify(this.lBorrowform);
                console.log(this.bpmBorrow)
                this.$axios({
                    url: "http://localhost:7438/api/StartBorrow",
                    method: "post",
                    data: this.bpmBorrow
                }).then((res) => {
                    if (res.data == "") {
                        alert("提交成功");
                    }
                    else {
                        alert("提交失败");
                    }
                })
            }
        },
    };
</script>