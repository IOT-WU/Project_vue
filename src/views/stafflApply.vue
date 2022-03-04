<template>
    <div class=".BodyDiv">
        <div align="center">
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="staff"
            >
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">人力资源需求申请单</h2>
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
                        申请部门
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_department" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        申请时间
                    </td>
                    <td width="225">
                        <el-date-picker
                            type="date"
                            placeholder="选择日期"
                            v-model="staff.staff_time"
                            style="width: 100%"
                        ></el-date-picker>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        岗位名称
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_name" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        岗位说明
                    </td>
                    <td width="225">
                        <el-checkbox-group v-model="staff.staff_explain">
                            <el-checkbox label="已设" name="type"></el-checkbox>
                            <el-checkbox label="新增" name="type"></el-checkbox>
                            <el-checkbox label="临时" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        现有人数
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_existing" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        招聘人数
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_recruit" />
                    </td>
                </tr>
            </table>
            <table
                border="1px"
                :model="staff"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
            >
                <tr>
                    <td
                        align="left"
                        colspan="4"
                        style="background-color: #daecf7"
                    >
                        招聘要求信息
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        性别
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_sex" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        年龄
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_age" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        文化程度
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_Culture" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        专业要求
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_major" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        岗位要求
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_post" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        其他
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_other" />
                    </td>
                </tr>
            </table>
            <table
                border="1px"
                :model="staff"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
            >
                <tr>
                    <td
                        align="left"
                        colspan="4"
                        style="background-color: #daecf7"
                    >
                        详细信息
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        薪资待遇
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_Salary" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        拟聘合同
                    </td>
                    <td width="225">
                        <input type="text" v-model="staff.staff_contract" />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        适用期
                    </td>
                    <td width="225">
                        <el-date-picker
                            v-model="staff.staff_probation"
                            type="date"
                            placeholder="选择日期"
                        >
                        </el-date-picker>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        申请原因
                    </td>
                    <td width="900">
                        <input type="text" v-model="staff.staff_application" />
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
                    <td width="225">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                        >
                            <el-button size="small" type="primary"
                                >点击上传</el-button
                            >
                        </el-upload>
                    </td>
                </tr>
            </table>
            <div style="width: 900px" align="center">
                <div
                    style="
                        font-family: Arial;
                        font-weight: 700;
                        text-align: left;
                        line-height: 20px;
                    "
                >
                    备注
                </div>
            </div>
            <table
                style="
                    border-top: medium none;
                    border-right: medium none;
                    border-bottom: medium none;
                    border-left: medium none;
                "
                cellspacing="0"
                cellpadding="0"
                width="900px"
                border="1"
                :model="staff"
            >
                <tbody>
                    <tr>
                        <td width="900px">
                            <textarea
                                ID="XCommentsTextBox2"
                                CssClass="printer"
                                runat="server"
                                BorderColor="#DCDCDC"
                                BorderWidth="1"
                                Width="900px"
                                Rows="3"
                                TextMode="MultiLine"
                                v-model="staff.staff_remarks"
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
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
            bpmstaff: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "人力资源需求",
                resourcesData: "",
            },
            //人力资源数据
            staff: {
                staff_department: "", //申请部门
                staff_time: "", //申请时间
                staff_name: "", //申请名称
                staff_explain: "", //岗位说明
                staff_existing: 0, //现有人数
                staff_recruit: 0, //招聘人数
                staff_sex: "", //性别
                staff_age: 0, //年龄
                staff_Culture: "", //文化程度
                staff_major: "", //专业要求
                staff_post: "", //岗位要求
                staff_other: "", //其他
                staff_Salary: "", //薪资待遇
                staff_contract: "", //拟聘合同
                staff_probation: "", //试用期
                staff_application: "", //申请原因
                staff_enclosure: "", //附件
                staff_remarks: "", //备注
            },
        };
    },
    mounted() {},
    methods: {
        //人力资源申请
        stafflApply() {
            this.dialogstaffVisible = true;
        },
        //发起人力资源申请
        AddstafflApply() {
            this.bpmstaff.resourcesData = JSON.stringify(this.staff);
            console.log(this.staff);
            this.$axios({
                url: this.baseUrl + "stratResources",
                method: "post",
                data: this.bpmstaff,
            }).then((res) => {
                if (res.data == "") {
                    this.$message.success("提交成功");
                this.dialogstaffVisible = false;
                } else {
                    this.$message.error("提交失败");
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
