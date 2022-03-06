<template>

    <div>
        <table border="1px" ref="leaveformRef" :model="Purchaseform" bordercolor="#E4E7ED" width="00px" cellpadding="5"
            cellspacing="0">
            <tr>
                <td colspan="4">
                    <h2 style="text-align: center">
                        固定资产购置申请表
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
                    <input type="text" v-model="Purchaseform.assets_Applicant" style="
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
                    <input type="text" v-model="Purchaseform.assets_Department" style="
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
                    申请时间
                </td>
                <td width="225">
                    <input type="datetime-local" v-model="Purchaseform.assets_Data" placeholder="选择日期" style="
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
                    表单单号
                </td>
                <td width="225">
                    <input type="text" v-model="Purchaseform.assets_Order" style="
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
                    固定资产名称
                </td>
                <td width="225">
                    <input type="text" v-model="Purchaseform.assets_Name" style="
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
                    型号
                </td>
                <td width="225">
                    <input type="text" v-model="Purchaseform.assets_Nodel" style="
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
                    配置
                </td>
                <td width="225">
                    <input type="text" v-model="Purchaseform.assets_Configution" style="
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
                    是否生产
                </td>
                <td width="225">
                    <input type="text" v-model="Purchaseform.assets_Not" style="
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
                    申请理由
                </td>
                <td width="225" colspan="3">
                    <textarea cols="100" v-model="Purchaseform.assets_Reason" style="
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
                <td align="left" colspan="4" style="background-color: #daecf7">
                    备注
                </td>
            </tr>
            <tr>
                <td width="225" colspan="4">
                    <textarea cols="120" v-model="Purchaseform.assets_Note" style="
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
                            <button type="info" style="float: left" @click="PurchaseAd">
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
        components: {
            Edit,
        },
        data() {
            return {
                bpmPurchase: {
                    action: "提交",
                    bpmUser: window.sessionStorage["account"],
                    bpmUserPass: window.sessionStorage["password"],
                    fullName: window.sessionStorage["account"],
                    processName: "固定资产申请",
                    planData: "",
                },
                Purchaseform: {
                    assets_Applicant: "",
                    assets_Department: "",
                    assets_Data: "",
                    assets_Order: "",
                    assets_Name: "",
                    assets_Nodel: "",
                    assets_Configution: "",
                    assets_Not: "",
                    assets_Reason: "",
                    assets_Note: "",
                },
            };
        },
        created() {
            // 调用获取当前日期的方法加四位随机数  赋值表单中的项目编号
            this.Purchaseform.assets_Order = this.getProjectNum() + Math.floor(Math.random() * 10000)  // 如果是6位或者8位随机数，相应的 *1000000或者 *100000000就行了
        },

        methods: {
            AnnualApply() {
                this.dialogPurchaseVisible = true;
            },
            getProjectNum() {
                const projectTime = new Date() // 当前中国标准时间
                const Year = projectTime.getFullYear() // 获取当前年份 支持IE和火狐浏览器.
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

            PurchaseAd() {
                this.bpmPurchase.planData = JSON.stringify(this.Purchaseform);
                console.log(this.bpmPurchase)
                this.$axios({
                    url: "http://localhost:7438/api/StartFixedasse",
                    method: "post",
                    data: this.bpmPurchase
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