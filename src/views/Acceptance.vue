<template>

    <div>
        <table border="1px" ref="leaveformRef" :model="leaveform" bordercolor="#E4E7ED" width="900px" cellpadding="5"
            cellspacing="0">
            <tr>
                <td colspan="4">
                    <h2 style="text-align: center">
                        固定资产验收单
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
                    <input type="text" v-model="leaveform.sacceptance_Apply" style="
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
                    <input type="text" v-model="leaveform.sacceptance_Depart" style="
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
                    <input type="datetime-local" v-model="leaveform.sacceptance_Data" placeholder="选择日期" style="
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
                    资产编号
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.sacceptance_Card" style="
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
                    资产类别
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.sacceptance_Type" style="
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
                    存放地点
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.sacceptance_Addr" style="
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
                    请购单号
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.sacceptance_QCard" style="
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
                    所属项目
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.sacceptance_Project" style="
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
                    使用人
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.sacceptance_Use" style="
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
                    所属部门
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.sacceptance_BuDepat" style="
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
        </table>
        <table border="1px" bordercolor="#E4E7ED" :model="forms" width="900xp" cellpadding="5" cellspacing="0">
            <tr>
                <td align="left" colspan="16" style="background-color: #daecf7">
                    详细信息
                </td>
            </tr>
            <tr>
                <td align="left" rowspan="2" style="background-color: #f6f5f4">
                    序号
                </td>
                <td align="left" rowspan="2" style="background-color: #f6f5f4">
                    资产名称
                </td>
                <td align="left" rowspan="2" style="background-color: #f6f5f4">
                    规格型号
                </td>

                <td align="left" rowspan="2" style="background-color: #f6f5f4">
                    数量
                </td>
            </tr>
            <tr>
                <td align="left" style="background-color: #f6f5f4">
                    单价
                </td>
                <td align="left" style="background-color: #f6f5f4">
                    金额
                </td>
                <td align="left" style="background-color: #f6f5f4">
                    供货单位
                </td>
                <td align="left" style="background-color: #f6f5f4">
                    采购人
                </td>

            </tr>
            <tr>
                <td align="left" style="background-color: #f6f5f4">1</td>





                <td align="left">
                    <input type="text" v-model="forms.accdetailed_Name" />
                </td>
                <td align="left">
                    <input type="text" v-model="forms.accdetailed_XMode" />
                </td>
                <td align="left">
                    <input type="text" v-model="forms.accdetailed_Num" />
                </td>
                <td align="left">
                    <input type="text" v-model="forms.accdetailed_Price" />
                </td>
                <td align="left">
                    <input type="text" v-model="forms.accdetailed_Ammount" />
                </td>
                <td align="left">
                    <input type="text" v-model="forms.accdetailed_Unit" />
                </td>
                <td align="left">
                    <input type="text" v-model="forms.accdetailed_Procurement" />
                </td>
            </tr>


        </table>
        <table border="1px" ref="leaveformRef" :model="leform" bordercolor="#E4E7ED" width="900px" cellpadding="5"
            cellspacing="0">

            <tr>
                <td align="left" colspan="5" style="background-color: #daecf7">
                    基础信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    附件名称
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    附件说明
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    单位
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    数量
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    保管人
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    技术资料
                </td>
                <td width="225">
                    <input type="text" v-model="leform.attachment_Shuo" style="
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
                <td width="225">
                    <input type="text" v-model="leform.attachment_Single" style="
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
                <td width="225">
                    <input type="text" v-model="leform.attachment_Num" style="
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
                <td width="225">
                    <input type="text" v-model="leform.attachment_People" style="
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
                    说明书
                </td>
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                    出场合格证
                </td>
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                    设备清单
                </td>
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                    保修卡
                </td>
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                <td width="225">
                    <input type="text" style="
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
                    附件
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4" colspan="4">
                    <el-upload action="http://localhost:7438/Img/Upload" list-type="picture-card"
                        :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handSuccess">
                        <el-icon>
                            <plus />
                        </el-icon>
                    </el-upload>
                </td>

            </tr>
            <tr>
                <td align="left" colspan="16" style="background-color: #daecf7">
                    备注
                </td>
            </tr>
        </table>
        <div style="width: 900px" align="left"></div>

    </div>
    <div style="width: 900px" align="center">
        <table style="
                border-top: medium none;
                border-right: medium none;
                border-bottom: medium none;
                border-left: medium none;
            " cellspacing="0" cellpadding="0" width="900" border="1">
            <tbody>
                <tr>
                    <td width="900">
                        <textarea ID="XCommentsTextBox2" CssClass="printer" runat="server" BorderColor="#DCDCDC"
                            BorderWidth="1" Width="100%" Rows="3" TextMode="MultiLine"
                            v-model="leform.attachment_Note"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="width: 900px" align="center">
            <div align="left">
                <button @click="Accemtion">提交</button>
            </div>
        </div>
    </div>
</template>
<script>
    import { Plus } from "@element-plus/icons-vue";
    export default {
        components: {
            Plus,
        },
        data() {
            return {
                baseUrl: "http://localhost:7438/api/",
                dialogImageUrl: "",
                dialogImgVisible: false,
                BPMData: {
                    action: "提交",
                    bpmUser: window.sessionStorage["account"],
                    bpmUserPass: window.sessionStorage["password"],
                    fullName: window.sessionStorage["account"],
                    processName: "固定资产验收",
                    PlanData: "",
                    PlanInfoDetail: "",
                    PlanInfoMen: "",
                },
                leaveform: {
                    sacceptance_Apply: window.sessionStorage["account"],
                    sacceptance_Depart: "",
                    sacceptance_Data: "",
                    sacceptance_Card: "",
                    sacceptance_Type: "",
                    sacceptance_Addr: "",
                    sacceptance_QCard: "",
                    sacceptance_Project: "",
                    sacceptance_Use: "",
                    sacceptance_BuDepat: "",
                },
                forms: {
                    accdetailed_Name: "",
                    accdetailed_XMode: "",
                    accdetailed_Num: "",
                    accdetailed_Price: "",
                    accdetailed_Ammount: "",
                    accdetailed_Unit: "",
                    accdetailed_Procurement: "",
                },
                leform: {
                    attachment_Shuo: "",
                    attachment_Single: "",
                    attachment_Num: "",
                    attachment_People: "",
                    attachment_Attment: "",
                    attachment_Note: "",
                }



            };
        },
        mounted() {
            this.leaveform = {
                sacceptance_Apply: window.sessionStorage["account"],
                sacceptance_Depart: "",
                sacceptance_Data: "",
                sacceptance_Card: "",
                sacceptance_Type: "",
                sacceptance_Addr: "",
                sacceptance_QCard: "",
                sacceptance_Project: "",
                sacceptance_Use: "",
                sacceptance_BuDepat: "",
            },
                this.forms = {
                    accdetailed_Name: "",
                    accdetailed_XMode: "",
                    accdetailed_Num: "",
                    accdetailed_Price: "",
                    accdetailed_Ammount: "",
                    accdetailed_Unit: "",
                    accdetailed_Procurement: "",
                },
                this.leform = {
                    attachment_Shuo: "",
                    attachment_Single: "",
                    attachment_Num: "",
                    attachment_People: "",
                    attachment_Attment: "",
                    attachment_Note: "",
                };
            if (window.sessionStorage["taskId"] != "") {
                this.GetAttcen(window.sessionStorage["taskId"]);
                window.sessionStorage.removeItem("taskId");
            }
        },
        methods: {
            AnnualApply() {
                this.dialogAcceptanceVisible = true;
            },
            Accemtion() {
                this.BPMData.planData = JSON.stringify(this.forms);
                this.BPMData.planInfoDetail = JSON.stringify(this.leform);
                this.BPMData.PlanInfoMen = JSON.stringify(this.leaveform);
                console.log(this.BPMData);
                console.log(this.BPMData);
                this.$axios({
                    url: "http://localhost:7438/api/StartAccMent",
                    method: "post",
                    data: this.BPMData,
                }).then((res) => {
                    if (res.data == "") {
                        alert("提交成功");
                    }
                    else {
                        alert("提交失败");
                    }
                });
            },
            //图片删除
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            //上传成功后调用
            handSuccess(response, file, fileList) {
                alert(response);
            },
            GetAttcen(id) {
                this.$axios({
                    url: this.baseUrl + "GetSacceptance?id=" + id,
                    method: "get",
                }).then((res) => {
                    console.log(res.data);
                    this.leaveform = res.data;
                });
                this.$axios({
                    url: this.baseUrl + "GitAccdetailed?id=" + id,
                    method: "get",
                }).then((res) => {
                    console.log(res.data);
                    this.forms = res.data;
                });
                this.$axios({
                    url: this.baseUrl + "GetAttcent?id=" + id,
                    method: "get",
                }).then((res) => {
                    console.log(res.data);
                    this.leform = res.data;
                });
            },
        },
    };
</script>