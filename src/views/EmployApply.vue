<template>
    <div align="center">
        <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0" :model="employedform">
            <tr>
                <td colspan="4">
                    <h2 style="text-align: center">员工录用核定表</h2>
                </td>
            </tr>
            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    基础信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    使用部门
                </td>
                <td width="225">
                    <select style="
                            width: 100%;
                            height: 100%;
                            border: 0;
                            background: transparent;
                            outline: none;
                        " v-model="employedform.employed_Department" placeholder="请输入">
                        <option @click="GetRole()" v-for="item in lit" :key="item.ouid" :label="item.ouName"
                            :value="item.ouid"></option>
                    </select>
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    核定日期
                </td>
                <td width="225">
                    <input type="date" v-model="employedform.employed_Date" placeholder="选择日期" style="
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
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    岗位名称
                </td>
                <td width="225">
                    <select style="
                            width: 100%;
                            height: 100%;
                            border: 0;
                            background: transparent;
                            outline: none;
                        " v-model="employedform.employedEntry_JobName" placeholder="请输入">
                        <option v-for="item in lib" :key="item.sId" :label="item.roleName" :value="item.roleName">
                        </option>
                    </select>
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    岗位说明
                </td>
                <td width="225">
                    <el-checkbox-group v-model="emplInstruction">
                        <el-checkbox label="已设" value="已设"></el-checkbox>
                        <el-checkbox label="新增" value="新增"></el-checkbox>
                        <el-checkbox label="临时" value="临时"></el-checkbox>
                    </el-checkbox-group>
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    人员类别
                </td>
                <el-checkbox-group v-model="employedform.employed_Categary">

                    <el-checkbox label="员工" value="员工"></el-checkbox>
                    <el-checkbox label="主管" value="主管"></el-checkbox>
                    <el-checkbox label="经理" value="经理"></el-checkbox>

                </el-checkbox-group>
            </tr>
        </table>
        <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0" :model="employedform">
            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    录入人员基础信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    姓名
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.name" style="
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
                    性别
                </td>
                <td width="225">
                    <el-radio-group v-model="employedform.employed_Sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    出生年月
                </td>
                <td width="225">
                    <input type="date" v-model="employedform.employed_Year" placeholder="选择日期" style="
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
                    文化程度
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.employed_Culture" style="
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
                    健康状况
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.employed_Health" style="
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
                    电话
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.employed_Phone" style="
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
                    住址
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.employed_Address" style="
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
                <td align="left" width="225" style="background-color: #f6f5f4"></td>
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
                    特长
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.employed_Specialty" style="
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
                <td align="left" width="225" style="background-color: #f6f5f4"></td>
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
                    本人是否有亲属在公司工作
                </td>
                <td width="225">
                    <el-checkbox-group v-model="emplRelative">
                        <el-checkbox label="是" value="是"></el-checkbox>
                        <el-checkbox label="否" value="否"></el-checkbox>
                    </el-checkbox-group>
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    拟定工资及待遇
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.employed_Treatment" style="
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
                    合同期限
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.employed_Timelimit" style="
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
                    试用期
                </td>
                <td width="225">
                    <input type="text" v-model="employedform.employed_Thetrial" style="
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
        <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0" :model="folk">
            <tr>
                <td align="left" colspan="4" style="background-color: #daecf7">
                    员工亲属详细信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    亲属姓名
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    与本人关系
                </td>
                <td align="left" width="225" style="background-color: #f6f5f4">
                    亲属在任何公司部门工作
                </td>
            </tr>
            <tr>
                <td width="225">
                    <input type="text" v-model="folk.relative_Name" style="
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
                    <input type="text" v-model="folk.relative_Between" style="
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
                    <input type="text" v-model="folk.relative_Position" style="
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
                <td align="left" colspan="4" style="width: 100%; background-color: #daecf7">
                    备注
                </td>
            </tr>
            <tr>
                <td width="230" colspan="4">
                    <textarea cols="120" v-model="folk.relative_Note" style="
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
        </table>
        <div style="clear: both"></div>

        <div style="width: 900px" align="center">
            <div style="height: 26px">
                <button type="info" style="float: left" @click="employedAdd">
                    提交
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baseUrl: "http://localhost:7438/api/",
                //录用员工数据
                employedform: {
                    employed_Department: 0, //使用部门
                    employed_Date: "", //核定日期
                    employedEntry_JobName: "", //岗位名称
                    employed_Instruction: "", //岗位说明
                    employed_Categary: 1, //人员类别
                    name: "", //姓名
                    employed_Sex: "", //性别
                    employed_Year: "", //出生年月
                    employed_Culture: "", //文化程度
                    employed_Health: "", //健康状况
                    employed_Phone: "", //电话
                    employed_Address: "", //住址
                    employed_Specialty: "", //特长
                    employed_Relative: "", //是否有亲属在本公司工作
                    employed_Treatment: "", //拟定工资及待遇
                    employed_Timelimit: "", //合同期限
                    employed_Thetrial: "",
                },

                emplInstruction: [],
                emplRelative: [],
                BPMData: {
                    action: "提交",
                    bpmUser: window.sessionStorage["account"],
                    bpmUserPass: window.sessionStorage["password"],
                    fullName: window.sessionStorage["account"],
                    processName: "员工录用核定",
                    planData: "",
                    PlanInfoDetail: "",
                },
                lit: [],
                lib: [],
                folk: {
                    relative_Name: "",
                    relative_Between: "",
                    relative_Position: "",
                    relative_Note: "",
                },

            };
        },
        created() {
            
            this.employedform = {
                employed_Department: 0, //使用部门
                employed_Date: "", //核定日期
                employedEntry_JobName: "", //岗位名称
                employed_Instruction: "", //岗位说明
                employed_Categary: 1, //人员类别
                name: "", //姓名
                employed_Sex: "", //性别
                employed_Year: "", //出生年月
                employed_Culture: "", //文化程度
                employed_Health: "", //健康状况
                employed_Phone: "", //电话
                employed_Address: "", //住址
                employed_Specialty: "", //特长
                employed_Relative: "", //是否有亲属在本公司工作
                employed_Treatment: "", //拟定工资及待遇
                employed_Timelimit: "", //合同期限
                employed_Thetrial: "",
            },
                this.folk = {
                    relative_Name: "",
                    relative_Between: "",
                    relative_Position: "",
                    relative_Note: "",
                };
            this.Depttype();
            this.GetRole();
            if (window.sessionStorage["taskId"] != "") {
                this.GetEmplo(window.sessionStorage["taskId"]);
                window.sessionStorage.removeItem("taskId");
            }

        },
        methods: {
            employedAdd() {
                this.employedform.employed_Instruction = this.emplInstruction.toString();
                this.employedform.employed_Relative = this.emplRelative.toString();
                this.BPMData.planData = JSON.stringify(this.employedform);
                this.BPMData.planInfoDetail = JSON.stringify(this.folk);
                console.log(this.BPMData);
                console.log(this.BPMData);
                this.$axios({
                    url: "http://localhost:7438/api/Startemployed",
                    method: "post",
                    data: this.BPMData,
                }).then((res) => {
                    if (red.data == "") {
                        alert('提交成功')
                    } else {
                        alert('提交失败')
                    }
                });
            },
            GetEmplo(id) {
                this.$axios({
                    url: this.baseUrl + "GetEmp?id=" + id,
                    method: "get",
                }).then((res) => {
                    console.log(res.data);
                    this.employedform = res.data;
                });
                this.$axios({
                    url: this.baseUrl + "GetReti?id=" + id,
                    method: "get",
                }).then((res) => {
                    console.log(res.data);
                    this.folk = res.data;
                });
            },
            //获取角色
            GetRole() {
                this.$axios({
                    url:
                        "http://localhost:7438/api/GetOutRole?OUID=" +
                        this.employedform.employed_Department,
                    method: "get",
                }).then((res) => {
                    this.lib = res.data;
                });
            },
            //获取部门
            Depttype() {
                this.$axios({
                    url: "http://localhost:7438/api/GetDepat",
                    method: "get",
                }).then((res) => {
                    this.lit = res.data;
                    console.log(res.data);
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