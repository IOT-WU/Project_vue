<template>
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
                        <h2 style="text-align: center">离职审批表</h2>
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
                            v-model="Departure.departure_Applicant"
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
                            v-model="Departure.departure_Department"
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
                            v-model="Departure.departure_Time"
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
                            v-model="Departure.departure_Position"
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
                            v-model="Departure.departure_Entry"
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
                            v-model="Departure.departure_Data"
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
                            v-model="Departure.departure_Type"
                            placeholder="请选择"
                        >
                            <el-option label="辞退" value="1">辞退</el-option>
                            <el-option label="离职" value="2">离职</el-option>
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
                            v-model="Departure.departure_Why"
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
                            v-model="Departure.departure_Note"
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
                    <button @click="AddDeparture">提交</button>
                    <button type="info" style="float: left">存为草稿</button>
                    <button type="info" style="float: left">存为范本</button>
                    <button type="info" style="float: left">启用阅示</button>
                    <br />
                    <button type="info" style="float: left">序号</button>
                    <button type="info" style="float: left">处理步骤</button>
                    <button type="info" style="float: left">签名</button>
                    <button type="info" style="float: left">操作</button>
                    <button type="info" style="float: left">日期</button>
                    <button type="info" style="float: left">备注</button>
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
        };
    },
    mounted() {},
    methods: {
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