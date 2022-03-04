<template>
    <div class=".BodyDiv">
        <div align="center">
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="employed"
            >
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">车辆管理</h2>
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
                        经办人
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.handler"
                        />
                    </td>
                     <td align="left" width="225" style="background-color: #f6f5f4">
                    处理日期
                </td>
                <td width="225">
                    <input
                        type="datetime-local"
                        v-model="leaveform.time"
                        placeholder="选择日期"/>
                </td>
                </tr>
                <tr>
                     <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        维修项目
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.project"
                        />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        维修单位
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.company"
                        />
                    </td>
                     <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        维修当时公里数
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.kilometers"
                        />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        维修费用
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.cost"
                        />
                    </td>
                     <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        出故障人员
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.fault"
                        />
                    </td>
                </tr>
               
                 <tr>
                   <td align="left" width="225" style="background-color: #f6f5f4">
                    出故障日期
                </td>
                <td width="225">
                    <input
                        type="datetime-local"
                        v-model="leaveform.date"
                        placeholder="选择日期"
                    />
                </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        
                    </td>
                    <td width="225">
                        <input
                            type="text"
                        />
                    </td>
                 </tr>
                 <tr>
                     <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.remarks"
                        />
                    </td>
                </tr>
            </table>
            <div style="width: 900px" align="center">
                <div align="left">
                    <button @click="onSubmit">提交</button>
                    <button>存为草稿</button>
                    <button>存为范本</button>
                    <button>启用阅示</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //录用员工数据
            employed: {
                handler: "", //经办人
                time: "", //维修日期
                project: "", //维修项目
                company: "", //维修单位
                kilometers: "", //维修当时公里数
                cost: "", //维修费用
                fault: "", //出故障人员
                date: "", //出故障日期
                remarks: "", //备注
            },
        };
    },
    mounted() {},
    methods: {},
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
