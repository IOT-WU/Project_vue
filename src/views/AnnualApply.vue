<template>
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
                        <h2 style="text-align: center">年度计划审批</h2>
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
                            v-model="annual_instal.tAB_people"
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
                            v-model="annual_instal.tAB_department"
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
                            type="date"
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
                            type="date"
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
                :model="annual_detalis"
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
                        style="background-color: #f6f5f4; text-align: center"
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
                    <td align="left" style="background-color: #f6f5f4">
                        1月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        2月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        3月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        4月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        5月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        6月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        7月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        8月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        9月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        10月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        11月份
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        12月份
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #f6f5f4">1</td>
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_jobs"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_existing"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_January"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_February"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_march"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_April"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_may"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_June"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_July"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_August"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_September"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_October"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_November"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_December"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_combined"
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
                </tr>
                <tr>
                    <td
                        align="right"
                        colspan="2"
                        style="background-color: #f6f5f4"
                    >
                        合计
                    </td>
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_existing"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_January"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_February"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_march"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_April"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_may"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_June"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_July"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_August"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_September"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_October"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_November"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_December"
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
                    <td>
                        <input
                            type="text"
                            v-model="annual_detalis.annual_combined"
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
                                    v-model="annual_detalis.annual_note"
                                ></textarea>
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
            bpmannual: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "年度招聘计划流程",
                PlanData: "",
                PlanInfoDetail: "",
            },
            //年度招聘计划数据
            annual_instal: {
                tAB_people: "",
                tAB_department: "",
                tAB_time: "",
                tAB_year: "",
            },
            //年度招聘计划详情表数据
            annual_detalis: {
                annual_jobs: "", //详细岗位
                annual_existing: "", //详细上年已有
                annual_January: "", //详细1月份
                annual_February: "", //详细2月份
                annual_march: "", //详细3份
                annual_April: "", //详细4月份
                annual_may: "", //详细5月份
                annual_June: "", //详细6月份
                annual_July: "", //详细7月份
                annual_August: "", //详细8月份
                annual_September: "", //详细9月份
                annual_October: "", //详细10月份
                annual_November: "", //详细11月份
                annual_December: "", //详细12月份
                annual_combined: "", //合计
                annual_note: "", //备注
            },
        };
    },
    mounted() {
        //年度招聘计划数据
        this.annual_instal = {
            tAB_people: "",
            tAB_department: "",
            tAB_time: "",
            tAB_year: "",
        };
        this.annual_detalis = {
            annual_jobs: "", //详细岗位
            annual_existing: "", //详细上年已有
            annual_January: "", //详细1月份
            annual_February: "", //详细2月份
            annual_march: "", //详细3份
            annual_April: "", //详细4月份
            annual_may: "", //详细5月份
            annual_June: "", //详细6月份
            annual_July: "", //详细7月份
            annual_August: "", //详细8月份
            annual_September: "", //详细9月份
            annual_October: "", //详细10月份
            annual_November: "", //详细11月份
            annual_December: "", //详细12月份
            annual_combined: "", //合计
            annual_note: "", //备注
        };
        if (window.sessionStorage["taskId"] != "") {
            this.findinformation(window.sessionStorage["taskId"]);
            window.sessionStorage.removeItem("taskId");
        }
    },
    methods: {
        //招聘人员申请
        AnnualApply() {
            this.dialogAnnualVisible = true;
        },
        //发起招聘人员申请
        Addannual() {
            this.bpmannual.PlanData = JSON.stringify(this.annual_instal);
            this.bpmannual.PlanInfoDetail = JSON.stringify(this.annual_detalis);
            this.$axios({
                url: this.baseUrl + "stratPlan",
                method: "post",
                data: this.bpmannual,
            }).then((res) => {
                if (res.data == "") {
                    alert("提交成功");
                } else {
                    alert("提交失败");
                }
            });
        },
        //年度计划反填
        findinformation(id) {
            this.$axios({
                url: this.baseUrl + "findinformation?id=" + id,
                method: "get",
            }).then((res) => {
                console.log(res.data);
                this.annual_instal = res.data;
                console.log(this.annual_instal);
            });
            this.$axios({
                url: this.baseUrl + "findannual_Details?id=" + id,
                method: "get",
            }).then((res) => {
                console.log(res.data);
                this.annual_detalis = res.data;
            });
        },
        //-----
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