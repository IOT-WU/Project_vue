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
                        <h2 style="text-align: center">员工录用核定表</h2>
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
                        <input type="text" v-model="employed.employed_Date" />
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
                            v-model="employed.employedEntry_JobName"
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
                            v-model="employed.employed_Instruction"
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
                            v-model="employed.employed_Categary"
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
                        <input type="text" v-model="employed.name" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        性别
                    </td>
                    <td width="225">
                        <input type="text" v-model="employed.employed_Sex" />
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
                        <input type="text" v-model="employed.employed_Year" />
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
                            v-model="employed.employed_Culture"
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
                        <input type="text" v-model="employed.employed_Health" />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        电话
                    </td>
                    <td width="225">
                        <input type="text" v-model="employed.employed_Phone" />
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
                            v-model="employed.employed_Address"
                        />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    ></td>
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
                        特长
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.employed_Specialty"
                        />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    ></td>
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
                        本人是否有亲属在公司工作
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="employed.employed_Relative"
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
                            v-model="employed.employed_Treatment"
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
                            v-model="employed.employed_Timelimit"
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
                            v-model="employed.employed_Thetrial"
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
