<template>
    <div class=".BodyDiv">
        <div align="center">
            <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0" :model="Prints">
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">
                            刻章申请表
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
                        <input type="text" v-model="
                                Prints.Prints_applicant
                            " style="
                                outline-color: invert;
                                outline-style: none;
                                outline-width: 0px;
                                border: none;
                                border-style: none;
                                text-shadow: none;
                                -webkit-appearakonce: none;
                                outline-color: transparent;
                                box-shadow: none;
                            " />
                    </td>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        申请部门
                    </td>
                    <td width="225">
                        <input type="text" v-model="
                                Prints.Prints_department
                            " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        申请日期
                    </td>
                    <td width="225">
                        <input type="datetime-local" v-model="
                                Prints.Prints_date
                            " />
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color: #daecf7">
                        刻章详细信息
                    </td>
                </tr>

                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        刻章名称
                    </td>
                    <td width="525" colspan="3">
                        <input type="text" v-model="
                            Prints.Prints_printsname
                            " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        用途
                    </td>
                    <td width="525" colspan="3">
                        <input type="text" v-model="
                            Prints.Prints_use
                            " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        刻章留印标记
                    </td>
                    <td width="225" height="100" colspan="3">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                            <el-button type="success" size="mini">+ 添加图片</el-button>
                        </el-upload>
                    </td>
                </tr>
            </table>

            <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left" colspan="16" style="background-color: #daecf7">
                        备注
                    </td>

                </tr>
            </table>
            <div style="width: 900px" align="center">
                <table
                    style="border-top: medium none;  border-right: medium none;  border-bottom: medium none;  border-left: medium none;  "
                    cellspacing="0" cellpadding="0" width="900" border="1">
                    <tbody>
                        <tr>
                            <td width="900">
                                <textarea ID="XCommentsTextBox2" CssClass="printer" runat="server" BorderColor="#DCDCDC"
                                    BorderWidth="1" Width="100%" Rows="3" TextMode="MultiLine"
                                    v-model="Prints.prints_note"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="width: 900px" align="center">
                <div align="left">
                    <button @click="Addannual">提交</button>
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
                //刻章申请
                bpmPrints: {
                    action: "提交",
                    bpmUser: window.sessionStorage["account"],
                    bpmUserPass: window.sessionStorage["password"],
                    fullName: window.sessionStorage["account"],
                    processName: "刻章申请流程",
                    printstext: "",
                },
                Prints: {
                    prints_applicant: "",
                    prints_department: 0,
                    prints_date: "",
                    prints_printsname: "",
                    prints_use: "",
                    prints_tag: "",
                    prints_note: "",
                },
            };
        },
        mounted() {

        },
        methods: {
            //刻章申请
            ChapterApply() {
                this.dialogPrintsVisible = true;
            },
            Addannual() {
                this.bpmPrints.printstext = JSON.stringify(this.Prints);
                this.$axios({ url: this.baseUrl + "startPrintstion", method: "post", data: this.bpmPrints }).then((res) => {
                    if (res.data == "") {
                        alert("提交成功");
                    } else {
                        alert("提交失败");
                    }
                })

            }
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