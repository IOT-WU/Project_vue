<template>
    <div class=".BodyDiv">
        <div align="center">
            <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0" :model="carUse">
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">
                            用车申请表单
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
                            carUse.CarUse_Proposer
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
                            carUse.CarUse_Demt
                        " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        申请时间
                    </td>
                    <td width="225">
                        <input type="datetime-local" v-model="
                            carUse.CarUse_ApplyDate
                        " />
                    </td>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        星期
                    </td>
                    <td width="225">
                        <input type="text" v-model="
                            carUse.CarUse_Week
                        " />
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color: #daecf7">
                        用车详细信息
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        出发地点
                    </td>
                    <td width="225">
                        <input type="text" v-model="carUse.CarUse_StartSite" />
                    </td>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        目标地点
                    </td>
                    <td width="225">
                        <input type="text" v-model="
                        carUse.CarUse_EndSite
                    " />
                    </td>
                </tr>
                <tr>
                    
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        出发时间
                    </td>
                    <td width="225">
                        <input type="date" v-model="
                            carUse.CarUse_StartTime
                        "/>
                    </td>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        返回时间
                    </td>
                    <td width="225">
                        <input type="date" v-model="
                            carUse.CarUse_BackTime
                    " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        乘车人数
                    </td>
                    <td width="225" >
                        <input type="text" v-model="
                            carUse.CarUse_PeopleNum
                        " />
                    </td>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                    </td>
                    <td width="225" >
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        随同人员
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="
                            carUse.CarUse_AccPeople
                        " />
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color: #f6f5f4">
                        事由
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="
                            carUse.CarUse_Cause
                        " />
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color: #daecf7">
                        出差详细信息
                    </td>
                </tr>
                    <tr>
                        <td align="left" width="225" style="background-color: #f6f5f4">
                            车牌号
                        </td>
                        <td width="225">
                            <input type="text" v-model="carUse.CarUse_CarID" />
                        </td>
                        <td align="left" width="225" style="background-color: #f6f5f4">
                            出发时间
                        </td>
                        <td width="225">
                            <input type="date" v-model="
                                carUse.CarUseStartTime
                        " />
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="225" style="background-color: #f6f5f4">
                            途径
                        </td>
                        <td width="225">
                            <input type="text" v-model="carUse.CarUse_Approach" />
                        </td>
                        <td align="left" width="225" style="background-color: #f6f5f4">
                        </td>
                        <td width="225">
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="225" style="background-color: #f6f5f4">
                            出发表盘公里数
                        </td>
                        <td width="225">
                            <input type="text" v-model="carUse.CarUse_StartKM" />
                        </td>
                        <td align="left" width="225" style="background-color: #f6f5f4">
                            结束表盘公里数
                        </td>
                        <td width="225">
                            <input type="text" v-model="
                                carUse.CarUse_EndKM
                        " />
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="225" style="background-color: #f6f5f4">
                            实际公里数
                        </td>
                        <td width="225">
                            <input type="text" v-model="carUse.CarUse_RealKM" />
                        </td>
                        <td align="left" width="225" style="background-color: #f6f5f4">
                            驾驶员
                        </td>
                        <td width="225">
                            <input type="text" v-model="
                            carUse.CarUse_Driver
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
                                    v-model="carUse.CarUse_Remark"></textarea>
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
                  //用车申请
                bpmChapter: {
                    action: "提交",
                    bpmUser: window.sessionStorage["account"],
                    bpmUserPass: window.sessionStorage["password"],
                    fullName: window.sessionStorage["account"],
                    processName: "用车申请流程",
                    CarApplicationData: "",
                },
                carUse: {
                    CarUse_Proposer: "",
                    CarUse_Demt: "",
                    CarUse_Week: "",
                    CarUse_StartSite: "",
                    CarUse_EndSite: "",
                    CarUse_StartTime: "",
                    CarUse_BackTime: "",
                    CarUse_PeopleNum: "",
                    CarUse_AccPeople: "",
                    CarUse_Cause: "",
                    CarUse_CarID: "",
                    CarUseStartTime: "",
                    CarUse_Approach: "",
                    CarUse_StartKM: "",
                    CarUse_EndKM: "",
                    CarUse_RealKM: "",
                    CarUse_Driver: "",
                    CarUse_Remark: "",
                },
            };
        },
        mounted() {

        },
        methods: {
               //用章申请
                ChapterApply(){
                    this.dialogcarUseVisible = true;
                },
                Addannual() {
                    this.bpmChapter.CarApplicationData=JSON.stringify(this.carUse);
                    this.$axios({url:this.baseUrl+"startCarApplication",method:"post",data:this.bpmChapter}).then((res)=>{
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