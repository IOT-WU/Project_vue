<template>
   
    <div>
        <table border="1px" ref="leaveformRef" :model="Handover" bordercolor="#E4E7ED"
            width="00px" cellpadding="5" cellspacing="0">
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
                    <input type="text" v-model="Handover.handover_Apply" style="
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
                    <input type="text" v-model="Handover.handover_Department" style="
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
                    <input type="datetime-local" v-model="Handover.handover_Date" placeholder="选择日期"
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
                        " />
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    交错单号
                </td>
                <td width="225">
                    <input type="text" v-model="Handover.handover_Order" style="
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
                    <input type="text" v-model="Handover.handover_Card" style="
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
                    <input type="text" v-model="Handover.handover_ZName" style="
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
                    交错人
                </td>
                <td width="225">
                    <input type="text" v-model="Handover.handover_Name" style="
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
                    交错人部门
                </td>
                <td width="225">
                    <input type="text" v-model="Handover.handover_Depar" style="
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
                    <textarea cols="120" v-model="Handover.handover_Note" style="
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
import { Edit } from "@element-plus/icons-vue";
export default {
    components: {
        Edit,
    },
    data() {
        return {
            bpmHondover: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "固定资产交接",
                Handover: "",
            },
            Handover: {
                handover_Apply: "",
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
   
    methods: {

        AnnualApply() {
            this.dialogHondaverlVisible = true;
        },
      HandoverdAdd(){
        this.bpmHondover.planData = JSON.stringify(this.Handover);
        console.log(this.bpmHondover)
          this.$axios({
              url:"http://localhost:7438/api/StartHandover",
              method:"post",
              data:this.bpmHondover
          }).then((res)=>{
              if(res.data == "")
              {
                  alert("提交成功");
              }
              else
              {
                  alert("提交失败");
              }
          })
      }
    },
};
</script>

