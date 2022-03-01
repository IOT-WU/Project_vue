<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">发起申请</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>
            <el-collapse-item title="人资申请" name="1">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="stafflApply"
                        >人力资源申请</el-button
                    >
                    <!-- 人力资源申请表单 -->
                    <el-dialog
                        v-model="dialogstaffVisible"
                        width="940px"
                        :before-close="handleClose"
                    >
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
                                            <h2 style="text-align: center">
                                                人力资源需求申请单
                                            </h2>
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_department"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_name"
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            岗位说明
                                        </td>
                                        <td width="225">
                                            <el-checkbox-group
                                                v-model="staff.staff_explain"
                                            >
                                                <el-checkbox
                                                    label="已设"
                                                    name="type"
                                                ></el-checkbox>
                                                <el-checkbox
                                                    label="新增"
                                                    name="type"
                                                ></el-checkbox>
                                                <el-checkbox
                                                    label="临时"
                                                    name="type"
                                                ></el-checkbox>
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_existing"
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            招聘人数
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="staff.staff_recruit"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_sex"
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            年龄
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="staff.staff_age"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_Culture"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_major"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_post"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_other"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="staff.staff_Salary"
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            拟聘合同
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="staff.staff_contract"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="
                                                    staff.staff_application
                                                "
                                                style="width:'2000px' outline-color: invert;outline-style: none;outline-width: 0px;border: none; 
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"
                                            />
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
                                                <el-button
                                                    size="small"
                                                    type="primary"
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
                                                    v-model="
                                                        staff.staff_remarks
                                                    "
                                                ></textarea>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style="width: 900px" align="center">
                                    <div align="left">
                                        <input
                                            type="button"
                                            @click="tengs"
                                            value="提交"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="招聘申请" name="2">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="AnnualApply"
                        >招聘人员申请</el-button
                    >
                    <!-- 招聘人员申请表单 -->
                    <el-dialog
                        v-model="dialogAnnualVisible"
                        width="940px"
                        :before-close="handleClose"
                    >
                        <div class=".BodyDiv">
                            <div align="center">
                                <table
                                    border="1px"
                                    bordercolor="#E4E7ED"
                                    width="900xp"
                                    cellpadding="5"
                                    cellspacing="0"
                                    :model="annual_instal"
                                >
                                    <tr>
                                        <td colspan="4">
                                            <h2 style="text-align: center">
                                                年度计划审批
                                            </h2>
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
                                            <input
                                                type="text"
                                                v-model="
                                                    annual_instal.tAB_people
                                                "
                                                style="
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearakonce: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            制表部门
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    annual_instal.tAB_department
                                                "
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            制表时间
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="annual_instal.tAB_time"
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            年份
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="annual_instal.tAB_year"
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
                                                "
                                            />
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
                                            岗位
                                        </td>
                                        <td
                                            align="left"
                                            rowspan="2"
                                            style="background-color: #f6f5f4"
                                        >
                                            上年已有
                                        </td>
                                        <td
                                            align="left"
                                            colspan="12"
                                            style="
                                                background-color: #f6f5f4;
                                                text-align: center;
                                            "
                                        >
                                            本年预计增加
                                        </td>
                                        <td
                                            align="left"
                                            rowspan="2"
                                            style="background-color: #f6f5f4"
                                        >
                                            合计
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            1月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            2月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            3月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            4月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            5月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            6月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            7月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            8月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            9月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            10月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            11月份
                                        </td>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            12月份
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            style="background-color: #f6f5f4"
                                        >
                                            1
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                style="
                                                    width: 50px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 50px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="right"
                                            colspan="2"
                                            style="background-color: #f6f5f4"
                                        >
                                            合计
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left">
                                            <input
                                                type="text"
                                                style="
                                                    width: 35px;
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearance: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                            />
                                        </td>
                                        <td align="left"></td>
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
                                </div>
                                <div style="width: 900px" align="center">
                                    <div align="left">
                                        <input type="button" value="提交" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="离职申请" name="3">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="DepartureApply"
                        >离职申请</el-button
                    >
                    <!-- 离职申请表单 -->
                    <el-dialog
                        v-model="dialogDepartureVisible"
                        width="940px"
                        :before-close="handleClose"
                    >
                        <div class=".BodyDiv">
                            <div align="center">
                                <table
                                    border="1px"
                                    bordercolor="#E4E7ED"
                                    width="900xp"
                                    cellpadding="5"
                                    cellspacing="0"
                                    :model="Departure"
                                >
                                    <tr>
                                        <td colspan="4">
                                            <h2 style="text-align: center">
                                                离职审批表
                                            </h2>
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
                                            申请人
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    Departure.departure_Applicant
                                                "
                                                style="
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearakonce: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                                model="Annual_inemployedation.taB_people"
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            申请部门
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    Departure.departure_Department
                                                "
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
                                                "
                                                model="Annual_inemployedation.taB_department"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            申请日期
                                        </td>
                                        <td width="225">
                                            <input
                                                type="datetime-local"
                                                v-model="
                                                    Departure.departure_Time
                                                "
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
                                                "
                                                model="Annual_inemployedation.taB_time"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            colspan="4"
                                            style="background-color: #daecf7"
                                        >
                                            离职详细信息
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            职位
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    Departure.departure_Position
                                                "
                                                style="
                                                    outline-color: invert;
                                                    outline-style: none;
                                                    outline-width: 0px;
                                                    border: none;
                                                    border-style: none;
                                                    text-shadow: none;
                                                    -webkit-appearakonce: none;
                                                    outline-color: transparent;
                                                    box-shadow: none;
                                                "
                                                model="Annual_inemployedation.taB_people"
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            入职日期
                                        </td>
                                        <td width="225">
                                            <input
                                                type="datetime-local"
                                                v-model="
                                                    Departure.departure_Entry
                                                "
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
                                                "
                                                model="Annual_inemployedation.taB_department"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            离职日期
                                        </td>
                                        <td width="225">
                                            <input
                                                type="datetime-local"
                                                v-model="
                                                    Departure.departure_Data
                                                "
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
                                                "
                                                model="Annual_inemployedation.taB_time"
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            离职类型
                                        </td>
                                        <td width="225">
                                            <el-select
                                                v-model="
                                                    Departure.departure_Type
                                                "
                                                placeholder="请选择"
                                            >
                                                <el-option
                                                    label="辞退"
                                                    value="1"
                                                    >辞退</el-option
                                                >
                                                <el-option
                                                    label="离职"
                                                    value="2"
                                                    >离职</el-option
                                                >
                                            </el-select>
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
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    Departure.departure_Why
                                                "
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
                                                "
                                                model="Annual_inemployedation.taB_year"
                                            />
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
                                            备注
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    Departure.departure_Note
                                                "
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
                                                "
                                                model="Annual_inemployedation.taB_year"
                                            />
                                        </td>
                                    </tr>
                                </table>
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
                                </div>
                                <div style="width: 900px" align="center">
                                    <div align="left">
                                        <input
                                            type="button"
                                            @click="AddDeparture"
                                            value="提交"
                                        />
                                        <button type="info" style="float: left">
                                            存为草稿
                                        </button>
                                        <button type="info" style="float: left">
                                            存为范本
                                        </button>
                                        <button type="info" style="float: left">
                                            启用阅示
                                        </button>
                                        <br />
                                        <button type="info" style="float: left">
                                            序号
                                        </button>
                                        <button type="info" style="float: left">
                                            处理步骤
                                        </button>
                                        <button type="info" style="float: left">
                                            签名
                                        </button>
                                        <button type="info" style="float: left">
                                            操作
                                        </button>
                                        <button type="info" style="float: left">
                                            日期
                                        </button>
                                        <button type="info" style="float: left">
                                            备注
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="请假申请" name="4">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="LeaveApply"
                        >请假申请</el-button
                    >
                    <!-- 请假申请表单 -->
                    <el-dialog
                        v-model="dialogLeaveVisible"
                        width="940px"
                        :before-close="handleClose"
                    >
                        <div>
                            <table
                                border="1px"
                                ref="leaveformRef"
                                :model="leaveform"
                                bordercolor="#E4E7ED"
                                width="900px"
                                cellpadding="5"
                                cellspacing="0"
                            >
                                <tr>
                                    <td colspan="4">
                                        <h2 style="text-align: center">
                                            请假申请表
                                        </h2>
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
                                        申请人
                                    </td>
                                    <td width="225">
                                        <input
                                            type="text"
                                            v-model="leaveform.leave_Proposer"
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
                                            "
                                        />
                                    </td>
                                    <td
                                        align="left"
                                        width="225"
                                        style="background-color: #f6f5f4"
                                    >
                                        申请部门
                                    </td>
                                    <td width="225">
                                        <input
                                            type="text"
                                            v-model="leaveform.leave_Demo"
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
                                            "
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        align="left"
                                        width="225"
                                        style="background-color: #f6f5f4"
                                    >
                                        申请时间
                                    </td>
                                    <td width="225">
                                        <input
                                            type="datetime-local"
                                            v-model="leaveform.leave_Time"
                                            placeholder="选择日期"
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
                                            "
                                        />
                                    </td>
                                    <td
                                        align="left"
                                        width="225"
                                        style="background-color: #f6f5f4"
                                    ></td>
                                    <td width="225"></td>
                                </tr>

                                <tr>
                                    <td
                                        align="left"
                                        colspan="4"
                                        style="background-color: #daecf7"
                                    >
                                        请假信息
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        align="left"
                                        width="225"
                                        style="background-color: #f6f5f4"
                                    >
                                        请假类型
                                    </td>
                                    <td width="225">
                                        <select
                                            style="
                                                width: 100%;
                                                height: 100%;
                                                border: 0;
                                                background: transparent;
                                                outline: none;
                                            "
                                            v-model="leaveform.leave_LeaveType"
                                            placeholder="请输入"
                                        >
                                            <option label="事假" value="1">
                                                事假
                                            </option>
                                            <option
                                                label="丧假"
                                                value="shanghai"
                                            >
                                                丧假
                                            </option>
                                            <option
                                                label="病假"
                                                value="shanghai"
                                            >
                                                病假
                                            </option>
                                            <option
                                                label="年休假"
                                                value="shanghai"
                                            >
                                                年休假
                                            </option>
                                            <option
                                                label="调休假"
                                                value="shanghai"
                                            >
                                                调休假
                                            </option>
                                            <option
                                                label="婚假"
                                                value="shanghai"
                                            >
                                                婚假
                                            </option>
                                            <option
                                                label="产假"
                                                value="shanghai"
                                            >
                                                产假
                                            </option>
                                            <option
                                                label="陪产假"
                                                value="shanghai"
                                            >
                                                陪产假
                                            </option>
                                            <option
                                                label="哺乳假"
                                                value="shanghai"
                                            >
                                                哺乳假
                                            </option>
                                        </select>
                                    </td>
                                    <td
                                        align="left"
                                        width="225"
                                        style="background-color: #f6f5f4"
                                    >
                                        请假开始时间
                                    </td>
                                    <td width="225">
                                        <input
                                            type="datetime-local"
                                            v-model="leaveform.leave_StartDate"
                                            placeholder="选择日期"
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
                                            "
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        align="left"
                                        width="225"
                                        style="background-color: #f6f5f4"
                                    >
                                        请假结束时间
                                    </td>
                                    <td width="225">
                                        <input
                                            type="datetime-local"
                                            @change="DateDiff"
                                            v-model="leaveform.leave_EndDate"
                                            placeholder="选择日期"
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
                                            "
                                        />
                                    </td>
                                    <td
                                        align="left"
                                        width="225"
                                        style="background-color: #f6f5f4"
                                    >
                                        请假天数
                                    </td>
                                    <td width="225">
                                        <input
                                            type="text"
                                            v-model="leaveform.leave_Day"
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
                                            "
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        align="left"
                                        width="225"
                                        style="background-color: #f6f5f4"
                                    >
                                        请假原因
                                    </td>
                                    <td width="225" colspan="3">
                                        <textarea
                                            cols="100"
                                            v-model="leaveform.leave_Reason"
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
                                            "
                                        ></textarea>
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
                                    <td width="225" colspan="3">
                                        <el-upload
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                        >
                                            <el-button
                                                type="success"
                                                size="mini"
                                                >+ 添加附件</el-button
                                            >
                                        </el-upload>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        align="left"
                                        colspan="4"
                                        style="background-color: #daecf7"
                                    >
                                        备注
                                    </td>
                                </tr>
                                <tr>
                                    <td width="225" colspan="4">
                                        <textarea
                                            cols="120"
                                            v-model="leaveform.leave_Remark"
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
                                            "
                                        ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <div style="margin: 0 auto">
                                            <button
                                                type="info"
                                                style="float: left"
                                                @click="AddLeaveApply"
                                            >
                                                提交
                                            </button>
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                存为草稿
                                            </button>
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                存为范本
                                            </button>
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                启用阅示
                                            </button>
                                            <br />
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                序号
                                            </button>
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                处理步骤
                                            </button>
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                签名
                                            </button>
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                操作
                                            </button>
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                日期
                                            </button>
                                            <button
                                                type="info"
                                                style="float: left"
                                            >
                                                备注
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="录用申请" name="5">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="luyongApply"
                        >录用人员申请</el-button
                    >
                    <!-- 录用员工表单 -->
                    <el-dialog
                        v-model="dialogluyongVisible"
                        title="员工录用"
                        width="1000px"
                    >
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
                                            <h2 style="text-align: center">
                                                员工录用核定表
                                            </h2>
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
                                            使用部门
                                        </td>
                                        <td width="225">
                                            <el-select
                                                v-model="employed.region"
                                                placeholder="please select your zone"
                                            >
                                                <el-option
                                                    label="Zone one"
                                                    value="shanghai"
                                                ></el-option>
                                            </el-select>
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            核定日期
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="employed.employed_Date"
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
                                                "
                                            />
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
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employedEntry_JobName
                                                "
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            岗位说明
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Instruction
                                                "
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            人员类别
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Categary
                                                "
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                </table>
                                <table
                                    border="1px"
                                    bordercolor="#E4E7ED"
                                    width="900xp"
                                    cellpadding="5"
                                    cellspacing="0"
                                    :model="employed"
                                >
                                    <tr>
                                        <td
                                            align="left"
                                            colspan="4"
                                            style="background-color: #daecf7"
                                        >
                                            录入人员基础信息
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            姓名
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="employed.name"
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            性别
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="employed.employed_Sex"
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            出生年月
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="employed.employed_Year"
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            文化程度
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Culture
                                                "
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            健康状况
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Health
                                                "
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            电话
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Phone
                                                "
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            住址
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Address
                                                "
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        ></td>
                                        <td width="225">
                                            <input
                                                type="text"
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            特长
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Specialty
                                                "
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        ></td>
                                        <td width="225">
                                            <input
                                                type="text"
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            本人是否有亲属在公司工作
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Relative
                                                "
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            拟定工资及待遇
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Treatment
                                                "
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            合同期限
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Timelimit
                                                "
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
                                                "
                                            />
                                        </td>
                                        <td
                                            align="left"
                                            width="225"
                                            style="background-color: #f6f5f4"
                                        >
                                            试用期
                                        </td>
                                        <td width="225">
                                            <input
                                                type="text"
                                                v-model="
                                                    employed.employed_Thetrial
                                                "
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
                                                "
                                            />
                                        </td>
                                    </tr>
                                </table>

                                <div style="width: 900px" align="left"></div>
                                <div style="clear: both"></div>
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
                                    width="900"
                                    border="1"
                                >
                                    <tbody>
                                        <tr>
                                            <td width="698">
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
                                        <input
                                            type="button"
                                            value="提交"
                                            @click="onSubmit"
                                        />
                                        <input type="button" value="存为草稿" />
                                        <input type="button" value="存为范本" />
                                        <input type="button" value="启用阅示" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-dialog>
                </div>
            </el-collapse-item>
        </el-collapse>
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
            baseUrl: "http://localhost:7438/api/",
            dialogLeaveVisible: false, //请假表单
            dialogluyongVisible: false, //录用表单
            dialogDepartureVisible: false, //离职表单
            dialogAnnualVisible: false, //招聘表单
            dialogstaffVisible: false, //人力资源表单
            action: "提交", //申请分支名称
            //请假申请数据
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
            //离职申请数据
            bpmDeparture: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "离职申请流程",
                departureData: "",
            },
            Departure: {
                departure_Applicant: "",
                departure_Department: "",
                departure_Time: "",
                departure_Position: "",
                departure_Entry: "",
                departure_Data: "",
                departure_Type: 0,
                departure_Why: "",
                departure_Note: "",
            },
            bpmstaff: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "人力资源需求",
                flnatte: "",
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
            //年度招聘计划数据
            annual_instal: {
                tAB_people: "",
                tAB_department: "",
                tAB_time: "",
                tAB_year: "",
            },
            //录用员工数据
            employed: {
                employed_Department: "", //使用部门
                employed_Date: "", //核定日期
                employedEntry_JobName: "", //岗位名称
                employed_Instruction: "", //岗位说明
                employed_Categary: "", //人员类别
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
                employed_Thetrial: "", //试用期
            },
        };
    },
    mounted() {},
    methods: {
        //计算请假天数
        DateDiff() {
            if (this.leaveform.leave_EndDate == "") {
                return;
            }
            if (this.leaveform.leave_EndDate < this.leaveform.leave_StartDate) {
                this.$message.warning("结束时间小于开始时间，请重新选择");
                this.leaveform.leave_EndDate = "";
                return;
            }
            console.log(this.leaveform.leave_EndDate.slice(0, 10));
            console.log(this.leaveform.leave_StartDate.slice(0, 10));
            //sDate1和sDate2是yyyy-MM-dd格式
            var aDate, oDate1, oDate2, iDays;
            aDate = this.leaveform.leave_StartDate.slice(0, 10).split("-");
            oDate1 = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]); //转换为yyyy-MM-dd格式
            aDate = this.leaveform.leave_EndDate.slice(0, 10).split("-");
            oDate2 = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]);
            iDays = Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24; //把相差的毫秒数转换为天数
            iDays = iDays.toFixed(0); //天数保留两位小数
            this.leaveform.leave_Day = iDays;
            console.log(this.leaveform);
        },
        //请假申请
        LeaveApply() {
            this.dialogLeaveVisible = true;
        },
        //发起请假流程
        AddLeaveApply() {
            this.bpmLeave.leaveData = JSON.stringify(this.leaveform);
            this.$axios({
                url: this.baseUrl + "startleave",
                method: "post",
                data: this.bpmLeave,
            }).then((res) => {
                console.log(res);
                if (res.data == "") {
                    this.$message.success("提交成功");
                } else {
                    this.$message.error("提交失败");
                }
                this.dialogLeaveVisible = false;
            });
        },
        //离职申请
        DepartureApply() {
            this.dialogDepartureVisible = true;
        },
        //发起离职申请
        AddDeparture() {
            this.bpmDeparture.departureData = JSON.stringify(this.Departure);
            console.log(this.Departure);
            this.$axios({
                url: this.baseUrl + "startDeparture",
                method: "post",
                data: this.bpmDeparture,
            }).then((res) => {
                console.log(res);
                if (res.data == "") {
                    this.$message.success("提交成功");
                } else {
                    this.$message.error("提交失败");
                }
                this.dialogDepartureVisible = false;
            });
        },
        //人力资源申请
        stafflApply() {
            this.dialogstaffVisible = true;
        },
        //发起人力资源申请
        AddstafflApply() {
            this.bpmstaff.flnatte = JSON.stringify(this.staff);
            console.log(this.staff);
            this.$axios({
                url: this.baseUrl + "startResources",
                method: "post",
                data: this.bpmstaff,
            }).then((res) => {
                if (res.data == "") {
                    this.$message.success("提交成功");
                } else {
                    this.$message.error("提交失败");
                }
                this.dialogstaffVisible = false;
            });
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${
                    files.length
                } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove(file) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        //招聘人员申请
        AnnualApply() {
            this.dialogAnnualVisible = true;
        },
        //录用人员申请
        luyongApply() {
            this.dialogluyongVisible = true;
        },
    },
};
</script>
