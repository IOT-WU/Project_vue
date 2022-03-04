<template>
    <div class=".BodyDiv">
        <div align="center">
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="exit"
            >
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">员工离职面谈表</h2>
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
                        制表人
                    </td>
                    <td width="225">
                        <input type="text" v-model="exit.Exit_lister" />
                        
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        制表部门
                    </td>
                    <td width="225">
                        <input type="text" v-model="exit.Exit_Demt" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        制表日期
                    </td>
                    <td width="225" colspan="3">
                        <input type="date" v-model="exit.Exit_Data" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        colspan="4"
                        style="background-color: #daecf7"
                    >
                        离职员工详细信息表
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        员工姓名
                    </td>
                    <td width="225">
                        <input type="text" v-model="exit.Exit_StaffName" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        员工工号
                    </td>
                    <td width="225">
                        <input type="text" v-model="exit.Exit_StaffID" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        所在部门
                    </td>
                    <td width="225">
                        <input type="text" v-model="exit.Exit_Department" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        岗位
                    </td>
                    <td width="225">
                        <input type="text" v-model="exit.Exit_Job" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        入职日期
                    </td>
                    <td width="225">
                        <input type="date" v-model="exit.Exit_EntryData" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        离职日期
                    </td>
                    <td width="225">
                        <input type="text" v-model="exit.Exit_LeaveData" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        劳动合同终止类型
                    </td>
                    <td width="225" colspan="3">
                        <el-checkbox-group v-model="exit.Exit_TermType">
                            <el-checkbox label="资源辞职" name="type"></el-checkbox>
                            <el-checkbox label="非资源辞职" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        劳动合同终止原因
                    </td>
                    <td width="225" colspan="3">
                        <el-checkbox-group v-model="exit.Exit_TermCause">
                            <el-checkbox label="更好的工作机会" name="type"></el-checkbox>
                            <el-checkbox label="工作负荷过大" name="type"></el-checkbox>
                            <el-checkbox label="不满意工作" name="type"></el-checkbox>
                            <el-checkbox label="不满意薪资/福利待遇" name="type"></el-checkbox>
                            <el-checkbox label="缺少发展机会" name="type"></el-checkbox>
                            <el-checkbox label="职业生涯转变" name="type"></el-checkbox>
                            <el-checkbox label="与上级、同事关系" name="type"></el-checkbox>
                            <el-checkbox label="工作环境" name="type"></el-checkbox>
                            <el-checkbox label="继续学习深造" name="type"></el-checkbox>
                            <el-checkbox label="移民" name="type"></el-checkbox>
                            <el-checkbox label="家庭负担" name="type"></el-checkbox>
                            <el-checkbox label="正常退休" name="type"></el-checkbox>
                            <el-checkbox label="健康原因" name="type"></el-checkbox>
                            <el-checkbox label="行为不当" name="type"></el-checkbox>
                            <el-checkbox label="协商一致" name="type"></el-checkbox>
                            <el-checkbox label="合同到期" name="type"></el-checkbox>
                            <el-checkbox label="被迫成员" name="type"></el-checkbox>
                            <el-checkbox label="业绩不合格" name="type"></el-checkbox>
                            <el-checkbox label="其他" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        离职原因
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="exit.Exit_LeaveCause" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        面谈记录
                    </td>
                    <td width="225" colspan="3">
                        <input type="text" v-model="exit.Exit_InterviewRecord" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        colspan="4"
                        style="background-color: #daecf7"
                    >
                        员工评价内容详细信息
                    </td>
                </tr>
               
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        薪资和福利
                    </td>
                    <td width="225" >
                        <el-checkbox-group v-model="exit.Exit_SalaryAndBenefits">
                            <el-checkbox label="优秀" name="type"></el-checkbox>
                            <el-checkbox label="良好" name="type"></el-checkbox>
                            <el-checkbox label="一般" name="type"></el-checkbox>
                            <el-checkbox label="差" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input type="text" />
                    </td>
                </tr>

                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        培训发展
                    </td>
                    <td width="225">
                        <el-checkbox-group v-model="exit.Exit_TrainingAndDevelopment">
                            <el-checkbox label="优秀" name="type"></el-checkbox>
                            <el-checkbox label="良好" name="type"></el-checkbox>
                            <el-checkbox label="一般" name="type"></el-checkbox>
                            <el-checkbox label="差" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input type="text" />
                    </td>
                </tr>
                
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        提升前景
                    </td>
                    <td width="225">
                        <el-checkbox-group v-model="exit.Exit_PromotionProspects">
                            <el-checkbox label="优秀" name="type"></el-checkbox>
                            <el-checkbox label="良好" name="type"></el-checkbox>
                            <el-checkbox label="一般" name="type"></el-checkbox>
                            <el-checkbox label="差" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input type="text" />
                    </td>
                </tr>

                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        公司管理
                    </td>
                    <td width="225">
                        <el-checkbox-group v-model="exit.Exit_CompanyManagement">
                            <el-checkbox label="优秀" name="type"></el-checkbox>
                            <el-checkbox label="良好" name="type"></el-checkbox>
                            <el-checkbox label="一般" name="type"></el-checkbox>
                            <el-checkbox label="差" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input type="text" />
                    </td>
                </tr>

                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        奖励和认可
                    </td>
                    <td width="225">
                        <el-checkbox-group v-model="exit.Exit_AwardsAndRecognition">
                            <el-checkbox label="优秀" name="type"></el-checkbox>
                            <el-checkbox label="良好" name="type"></el-checkbox>
                            <el-checkbox label="一般" name="type"></el-checkbox>
                            <el-checkbox label="差" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input type="text" />
                    </td>
                </tr>

                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        沟通渠道
                    </td>
                    <td width="225">
                        <el-checkbox-group v-model="exit.Exit_CommunicationChannels">
                            <el-checkbox label="优秀" name="type"></el-checkbox>
                            <el-checkbox label="良好" name="type"></el-checkbox>
                            <el-checkbox label="一般" name="type"></el-checkbox>
                            <el-checkbox label="差" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input type="text"  />
                    </td>
                </tr>

                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        工作满意度
                    </td>
                    <td width="225">
                        <el-checkbox-group v-model="exit.Exit_JobSatisfaction">
                            <el-checkbox label="优秀" name="type"></el-checkbox>
                            <el-checkbox label="良好" name="type"></el-checkbox>
                            <el-checkbox label="一般" name="type"></el-checkbox>
                            <el-checkbox label="差" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input type="text"  />
                    </td>
                </tr>

                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        员工和经理沟通
                    </td>
                    <td width="225">
                        <el-checkbox-group v-model="exit.Exit_CommunicationWithManager">
                            <el-checkbox label="优秀" name="type"></el-checkbox>
                            <el-checkbox label="良好" name="type"></el-checkbox>
                            <el-checkbox label="一般" name="type"></el-checkbox>
                            <el-checkbox label="差" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225">
                        <input type="text" />
                    </td>
                </tr>

                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        愿意被公司重新雇佣
                    </td>
                    <td width="225">
                        <el-radio-group v-model="exit.Exit_IsHire">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                    </td>
                </tr>
            </table>
            <div style="width: 900px" align="center">
                <div align="left">
                    <button @click="AddexitApply">提交</button>
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
                //人力资源数据
                exit: {
                    exit_lister:"",
                    exit_Demt:"",
                    exit_Data:"",
                    exit_StaffName:"",
                    exit_StaffID:"",
                    exit_Department:"",
                    exit_Job:"",
                    exit_EntryData:"",
                    exit_LeaveData:"",
                    exit_TermType:"",
                    exit_TermCause:"",
                    exit_LeaveCause:"",
                    exit_InterviewRecord:"",
                    exit_SalaryAndBenefits:"",
                    exit_TrainingAndDevelopment:"",
                    exit_PromotionProspects:"",
                    exit_CompanyManagement:"",
                    exit_AwardsAndRecognition:"",
                    exit_CommunicationChannels:"",
                    exit_JobSatisfaction:"",
                    exit_CommunicationWithManager:"",
                    exit_IsHire:"",
                },
            };
        },
        mounted() {},
        methods: {
            //离职面谈添加
            stafflApply() {
                this.dialogexitVisible = true;
            },
            //离职面谈添加
            AddexitApply() {
                this.$axios({url:this.baseUrl + "GetExitInterviewadd",method:"post",data:this.exit}).then((res)=>{
                    if(res.data>0){
                        alert("提交成功");
                    }else{
                        alert("提交失败");
                    }
                })
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
    

