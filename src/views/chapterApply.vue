<template>
    <div class=".BodyDiv">
        <div align="center">
            <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0" :model="Chapter">
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">
                            用章申请表
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
                            Chapter.Chapter_applicant
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
                            Chapter.Chapter_department
                        " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        申请日期
                    </td>
                    <td width="225">
                        <input type="datetime-local" v-model="
                            Chapter.Chapter_date
                        " />
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color: #daecf7">
                        用章详细信息
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        印章名称
                    </td>
                    <td width="225">
                        <input type="text" v-model="
                            Chapter.Chapter_sealname
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
                        是否外借
                    </td>
                    <td width="225">
                        <el-radio-group v-model="Chapter.Chapter_Checkedout">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        陪同人员
                    </td>
                    <td width="225">
                        <input type="text" v-model="
                            Chapter.Chapter_Accompanying
                        " />
                    </td>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        归还日期
                    </td>
                    <td width="225">
                        <input type="datetime-local" v-model="
                        Chapter.Chapter_returndate
                    " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        外出地址
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="
                            Chapter.Chapter_address
                        " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        用印事项或主要内容
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="
                            Chapter.Chapter_content
                        " />
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
                                    v-model="Chapter.chapter_note"></textarea>
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
                //用章申请
                bpmChapter: {
                    action: "提交",
                    bpmUser: window.sessionStorage["account"],
                    bpmUserPass: window.sessionStorage["password"],
                    fullName: window.sessionStorage["account"],
                    processName: "用章申请流程",
                    chaptertext: "",
                },
                Chapter: {
                    Chapter_applicant: "",
                    Chapter_department: "",
                    Chapter_date: "",
                    Chapter_sealname: "",
                    Chapter_Checkedout: "",
                    Chapter_Accompanying: "",
                    Chapter_returndate: "",
                    Chapter_address: "",
                    Chapter_content: "",
                    Chapter_note: "",
                },
            };
        },
        mounted() { },
        methods: {
            //用章申请
            ChapterApply() {
                this.dialogChapterVisible = true;
            },
            Addannual() {
                console.log(this.Chapter);
                this.bpmChapter.chaptertext=JSON.stringify(this.Chapter);
                this.$axios({url:this.baseUrl+"startChaptertion",method:"post",data:this.bpmChapter}).then((res)=>{
                    if(res.data == ""){
                        alert("提交成功")
                    }else{
                        alert("提交失败")
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