<template>

    <div>
        <table border="1px" ref="leaveformRef" :model="Handoverform" bordercolor="#E4E7ED" width="00px" cellpadding="5"
            cellspacing="0">
            <tr>
                <td colspan="4">
                    <h2 style="text-align: center">
                        固定资产资料交接单
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
                    <input type="text" v-model="Handoverform.handover_Apply" style="
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
                    <input type="text" v-model="Handoverform.handover_Department" style="
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
                    <input type="datetime-local" v-model="Handoverform.handover_Date" placeholder="选择日期" style="
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
                    交错单号
                </td>
                <td width="225">
                    <input type="text" v-model="Handoverform.handover_Order" style="
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
                <td align="left" colspan="4" style="background-color: #daecf7">
                    详细信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    资产编号
                </td>
                <td width="225">
                    <input type="text" v-model="Handoverform.handover_Card" style="
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
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    资产名称
                </td>
                <td width="225">
                    <input type="text" v-model="Handoverform.handover_ZName" style="
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
                <td width="225" colspan="2">
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    交接人
                </td>
                <td width="225">
                    <input type="text" v-model="Handoverform.handover_Name" style="
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
                <td width="225" colspan="2">
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    交接人部门
                </td>
                <td width="225">
                    <input type="text" v-model="Handoverform.handover_Depar" style="
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
                    <textarea cols="120" v-model="Handoverform.handover_Note" style="
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
                            <button type="info" style="float: left" @click="HandoverdAdd">
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

    export default {

        data() {
            return {
                baseUrl: "http://localhost:7438/api/",
                bpmHondover: {
                    action: "提交",
                    bpmUser: window.sessionStorage["account"],
                    bpmUserPass: window.sessionStorage["password"],
                    fullName: window.sessionStorage["account"],
                    processName: "固定资产交接",
                    planData: "",
                },
                Handoverform: {
                    handover_Apply: window.sessionStorage["account"],
                    handover_Department: "",
                    handover_Date: "",
                    handover_Order: "",
                    handover_Card: "",
                    handover_ZName: "",
                    handover_Name: 0,
                    handover_Depar: "",
                    handover_Note: ""
                }
            };
        },
        mounted() {
            this.Handoverform = {
                handover_Apply: window.sessionStorage["account"],
                handover_Department: "",
                handover_Date: "",
                handover_Order: "",
                handover_Card: "",
                handover_ZName: "",
                handover_Name: 0,
                handover_Depar: "",
                handover_Note: ""
            };
            if (window.sessionStorage["taskId"] != "") {
                this.GetHandove(window.sessionStorage["taskId"]);
                window.sessionStorage.removeItem("taskId");
            }
            // 调用获取当前日期的方法加四位随机数  赋值表单中的交接单号
            this.Handoverform.handover_Order = this.getProjectNum() + Math.floor(Math.random() * 10000);  // 如果是6位或者8位随机数，相应的 *1000000或者 *100000000就行了

        },
        methods: {
            AnnualApply() {
                this.dialogHondaverlVisible = true;
            },

            getProjectNum() {
                const projectTime = new Date() // 当前中国标准时间
                const Year = projectTime.getFullYear() // 获取当前年份
                const Month = projectTime.getMonth() + 1 // 获取中国区月份
                const Day = projectTime.getDate() // 获取几号
                var CurrentDate = Year
                if (Month >= 10) { // 判断月份和几号是否大于10或者小于10
                    CurrentDate += Month
                } else {
                    CurrentDate += '0' + Month
                }
                if (Day >= 10) {
                    CurrentDate += Day
                } else {
                    CurrentDate += '0' + Day
                }
                return CurrentDate
            },

            HandoverdAdd() {
                this.bpmHondover.planData = JSON.stringify(this.Handoverform);
                console.log(this.bpmHondover)
                this.$axios({
                    url: "http://localhost:7438/api/StartHandover",
                    method: "post",
                    data: this.bpmHondover
                }).then((res) => {
                    if (res.data == "") {
                        alert("提交成功");
                    }
                    else {
                        alert("提交失败");
                    }
                })
            },
            GetHandove(id) {
                this.$axios({
                    url: this.baseUrl + "GitHandover?id=" + id,
                    method: "get",
                }).then((res) => {
                    console.log(res.data);
                    this.Handoverform = res.data;
                });
            },
        },
    };
</script>