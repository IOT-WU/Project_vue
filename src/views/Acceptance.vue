<template>
   
    <div>
        <table border="1px" ref="leaveformRef" :model="leaveform" bordercolor="#E4E7ED"
            width="900px" cellpadding="5" cellspacing="0">
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
                    <input type="text" v-model="leaveform.leave_Proposer" style="
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
                    <input type="text" v-model="leaveform.leave_Demo" style="
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
                    <input type="datetime-local" v-model="leaveform.leave_Time" placeholder="选择日期"
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
                    资产编号
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.leave_Demo" style="
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
                    <input type="text" v-model="leaveform.leave_Proposer" style="
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
                    <input type="text" v-model="leaveform.leave_Demo" style="
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
                    <input type="text" v-model="leaveform.leave_Proposer" style="
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
                    <input type="text" v-model="leaveform.leave_Demo" style="
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
                    申请人
                </td>
                <td width="225">
                    <input type="text" v-model="leaveform.leave_Proposer" style="
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
                    <input type="text" v-model="leaveform.leave_Demo" style="
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
        <table
        border="1px"
        bordercolor="#E4E7ED"
        width="900xp"
        cellpadding="5"
        cellspacing="0"
    >
        <tr>
            <td
                align="left"
                colspan="16"
                style="background-color: #daecf7"
            >
                详细信息
            </td>
        </tr>
        <tr>
            <td
                align="left"
                rowspan="2"
                style="background-color: #f6f5f4"
            >
                序号
            </td>
            <td
                align="left"
                rowspan="2"
                style="background-color: #f6f5f4"
            >
                资产名称
            </td>
            <td
                align="left"
                rowspan="2"
                style="background-color: #f6f5f4"
            >
                规格型号
            </td>
           
            <td
                align="left"
                rowspan="2"
                style="background-color: #f6f5f4"
            >
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
                <input type="text" />
            </td>
            <td align="left">
                <input type="text" />
            </td>
            <td align="left">
                <input type="text" />
            </td>
            <td align="left">
                <input type="text" />
            </td>
            <td align="left">
                <input type="text" />
            </td>
            <td align="left">
                <input type="text" />
            </td>
            <td align="left">
                <input type="text" />
            </td>
        </tr>
       
       
    </table>
    <table border="1px" ref="leaveformRef" :model="leaveform" bordercolor="#E4E7ED"
    width="900px" cellpadding="5" cellspacing="0">
  
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            <input type="text" v-model="leaveform.leave_Demo" style="
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
            colspan="16"
            style="background-color: #daecf7"
        >
            备注
        </td>
    </tr>
</table>
    <div style="width: 900px" align="left"></div>
    
    </div>
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
                        ></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="width: 900px" align="center">
            <div align="left">
                <button @click="1">提交</button>
            </div>
        </div>
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
        
          
         
        
        };
    },
   
    methods: {
      
 
    },
};
</script>

