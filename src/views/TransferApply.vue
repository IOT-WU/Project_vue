<template>
    <div class=".BodyDiv">
        <div align="center">
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="dt"
            >
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">离职交接表</h2>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        colspan="4"
                        style="background-color: #daecf7"
                    >
                        基础信息
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        申请人
                    </td>
                    <td width="225">
                        <input type="text" v-model="dt.Dt_Proposer" />
                    </td>

                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        申请部门
                    </td>
                    <td width="225">
                        <input type="text" v-model="dt.Dt_Demt" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        申请日期
                    </td>
                    <td width="225">
                        <input type="date" v-model="dt.Dt_ApplyDate" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        职位
                    </td>
                    <td width="225">
                        <input type="text" v-model="dt.Dt_Position" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        是否要离职证明
                    </td>
                    <td width="225">
                        <el-radio-group v-model="dt.Dt_Certify">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
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
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        选择交接人
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="dt.Dt_Heir" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        colspan="4"
                        style="background-color: #daecf7"
                    >
                        部门交接详细信息
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        交接内容
                    </td>
                    <td width="225" colspan="3">
                        <el-checkbox-group v-model="DemtContent">
                            <el-checkbox
                                label="工作交接"
                                value="工作交接"
                            ></el-checkbox>
                            <el-checkbox
                                label="办公用品交接"
                                value="办公用品交接"
                            ></el-checkbox>
                            <el-checkbox
                                label="其他"
                                value="其他"
                            ></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        交接情况
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="dt.Dt_DemtCase" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        colspan="4"
                        style="background-color: #daecf7"
                    >
                        财务部交接详细信息
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        交接内容
                    </td>
                    <td width="225" colspan="3">
                        <el-checkbox-group v-model="FinanceContent">
                            <el-checkbox
                                label="取消财务报销系统账号与权限"
                            ></el-checkbox>
                            <el-checkbox label="金蝶财务系统"></el-checkbox>
                            <el-checkbox
                                label="查询欠款、借支、财务未清事项"
                            ></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        交接情况
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="dt.Dt_FinanceCase" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        colspan="4"
                        style="background-color: #daecf7"
                    >
                        行政部交接详细信息
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        交接内容
                    </td>
                    <td width="225" colspan="3">
                        <el-checkbox-group v-model="AdminContent">
                            <el-checkbox
                                label="返还钥匙、桌柜、电话、名片等"
                            ></el-checkbox>
                            <el-checkbox
                                label="退回职工工作牌、门禁卡"
                            ></el-checkbox>
                            <el-checkbox label="手机话费结算"></el-checkbox>
                            <el-checkbox
                                label="档案、户口是否迁出"
                            ></el-checkbox>
                            <el-checkbox
                                label="固定资产清算（手提电脑结算以及其他固定资产结算）"
                            ></el-checkbox>
                            <el-checkbox label="各类图书资料"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        交接情况
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="dt.Dt_AdminCase" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        colspan="16"
                        style="background-color: #daecf7"
                    >
                        备注
                    </td>
                </tr>
            </table>
            <div style="width: 900px" align="center">
                <table
                    style="
                        border-top: medium none;
                        border-right: medium none;
                        border-bottom: medium none;
                        border-left: medium none;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    width="900"
                    border="1"
                >
                    <tbody>
                        <tr>
                            <td width="900">
                                <textarea
                                    ID="XCommentsTextBox2"
                                    CssClass="printer"
                                    runat="server"
                                    BorderColor="#DCDCDC"
                                    BorderWidth="1"
                                    Width="100%"
                                    Rows="3"
                                    TextMode="MultiLine"
                                    v-model="dt.Dt_Remark"
                                ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style="width: 900px" align="center">
                <div align="left">
                    <button @click="AddstafflApply">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            baseUrl: "http://localhost:7438/api/",
            bpmTransfer: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "离职交接流程",
                DeparturetTransferData: "",
            },
            DemtContent: [],
            FinanceContent: [],
            AdminContent: [],
            //人力资源数据
            dt: {
                Dt_Proposer: "",
                Dt_Demt: "",
                Dt_ApplyDate: "",
                Dt_Certify: "",
                Dt_Files: "",
                Dt_Heir: "",
                Dt_DemtContent: "",
                Dt_DemtCase: "",
                Dt_FinanceContent: "",
                Dt_FinanceCase: "",
                Dt_AdminContent: "",
                Dt_AdminCase: "",
                Dt_Remark: "",
            },
        };
    },
    mounted() {},
    methods: {
        //离职交接申请
        stafflApply() {
            this.dialogTransferVisible = true;
        },
        //发起离职交接申请
        AddstafflApply() {
            this.dt.Dt_DemtContent = this.DemtContent.toString();
            this.dt.Dt_FinanceContent = this.FinanceContent.toString();
            this.dt.Dt_AdminContent = this.AdminContent.toString();
            console.log(this.dt);
            this.bpmTransfer.DeparturetTransferData = JSON.stringify(this.dt);
            this.$axios({
                url: this.baseUrl + "startDeparturetTransfer",
                method: "post",
                data: this.bpmTransfer,
            }).then((res) => {
                if (res.data == "") {
                    alert("提交成功");
                } else {
                    alert("提交失败");
                }
            });
        },
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
}
</style>
