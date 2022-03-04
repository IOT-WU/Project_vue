<template>
    <div class=".BodyDiv">
        <div align="center">
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="Reception"
            >
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">接待申请表</h2>
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
                            v-model="Reception.Reception_Applicant"
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
                        申请部门
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="Reception.Reception_Department"
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
                            type="date"
                            v-model="Reception.Reception_ApplyTime"
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
                        colspan="16"
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
                        来访客人单位
                    </td>
                    <td width="225" colspan="3">
                        <input
                            type="text"
                            v-model="Reception.Reception_GuestUnit"
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
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        主要客人姓名，职务
                    </td>
                    <td width="225" colspan="3">
                        <input
                            type="text"
                            v-model="Reception.Reception_GuestName"
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
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        停留时间
                    </td>
                    <td width="225">
                        <input
                            type="date"
                            v-model="Reception.Reception_BeginResidenceTime"
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
                        至
                    </td>
                    <td width="225">
                        <input
                            type="date"
                            v-model="Reception.Reception_OverResidenceTime"
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
                        接待人
                    </td>
                    <td width="225" colspan="3">
                        <input
                            type="text"
                            v-model="Reception.Reception_Unawares"
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
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        人数
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="Reception.Reception_Number"
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
                        是否需要准备资料
                    </td>
                    <td width="225">
                        <el-radio
                            v-model="Reception.Reception_OrData"
                            label="是"
                            size="large"
                            >是</el-radio
                        >
                        <el-radio
                            v-model="Reception.Reception_OrData"
                            label="否"
                            size="large"
                            >否</el-radio
                        >
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        往来航班号
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="Reception.Reception_Flight"
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
                        是否需要物品
                    </td>
                    <td width="225">
                        <el-radio
                            v-model="Reception.Reception_OrItems"
                            label="是"
                            size="large"
                            >是</el-radio
                        >
                        <el-radio
                            v-model="Reception.Reception_OrItems"
                            label="否"
                            size="large"
                            >否</el-radio
                        >
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        来访事由
                    </td>
                    <td width="225" colspan="3">
                        <input
                            type="text"
                            v-model="Reception.Reception_Reason"
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
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        其他要求
                    </td>
                    <td width="225" colspan="3">
                        <input
                            type="text"
                            v-model="Reception.Reception_OtherRequirements"
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
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        备注
                    </td>
                    <td width="225" colspan="3">
                        <input
                            type="text"
                            v-model="Reception.Reception_Note"
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
                </tr>
            </table>

            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="ReceptionItemsDetails"
            >
                <tr>
                    <td
                        align="left"
                        colspan="16"
                        style="background-color: #daecf7"
                    >
                        物品详细信息
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #f6f5f4">序号</td>
                    <td align="left" style="background-color: #f6f5f4">
                        用品名称
                    </td>
                    <td align="left" style="background-color: #f6f5f4">规格</td>
                    <td align="left" style="background-color: #f6f5f4">
                        使用数量
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        库存数量
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        剩余数量
                    </td>
                    <td align="left" style="background-color: #f6f5f4">备注</td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #f6f5f4">1</td>
                    <td>
                        <input
                            type="text"
                            v-model="ReceptionItemsDetails.Items_Name"
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
                            v-model="ReceptionItemsDetails.Items_Specifications"
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
                            v-model="ReceptionItemsDetails.Items_UseNumber"
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
                            v-model="
                                ReceptionItemsDetails.Items_InventoryQuantity
                            "
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
                            v-model="
                                ReceptionItemsDetails.Items_NumberRemaining
                            "
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
                            v-model="ReceptionItemsDetails.Items_Note"
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
            </table>
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="ReceptionTripDetails"
            >
                <tr>
                    <td
                        align="left"
                        colspan="16"
                        style="background-color: #daecf7"
                    >
                        行程详细信息
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #f6f5f4">
                        开始时间
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        结束时间
                    </td>
                    <td align="left" style="background-color: #f6f5f4">行程</td>
                    <td align="left" style="background-color: #f6f5f4">
                        陪同人员
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        是否用车
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        是否预定会议室
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        是否预定酒店
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        是否需要展厅
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        是否需要订餐
                    </td>
                    <td align="left" style="background-color: #f6f5f4">
                        参加公司哪些部门
                    </td>
                    <td align="left" style="background-color: #f6f5f4">备注</td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="date"
                            v-model="ReceptionTripDetails.Trip_BeginTime"
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
                            type="date"
                            v-model="ReceptionTripDetails.Trip_OverTime"
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
                            v-model="ReceptionTripDetails.Trip_Trip"
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
                            v-model="
                                ReceptionTripDetails.Trip_AccompanyingOfficials
                            "
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
                        <el-radio
                            v-model="ReceptionTripDetails.Trip_OrCar"
                            label="是"
                            >是</el-radio
                        >
                        <el-radio
                            v-model="ReceptionTripDetails.Trip_OrCar"
                            label="否"
                            >否</el-radio
                        >
                    </td>
                    <td>
                        <el-radio
                            v-model="
                                ReceptionTripDetails.Trip_OrReservationMeetingRoom
                            "
                            label="是"
                            >是</el-radio
                        >
                        <el-radio
                            v-model="
                                ReceptionTripDetails.Trip_OrReservationMeetingRoom
                            "
                            label="否"
                            >否</el-radio
                        >
                    </td>
                    <td>
                        <el-radio
                            v-model="
                                ReceptionTripDetails.Trip_OrReservationHotel
                            "
                            label="是"
                            >是</el-radio
                        >
                        <el-radio
                            v-model="
                                ReceptionTripDetails.Trip_OrReservationHotel
                            "
                            label="否"
                            >否</el-radio
                        >
                    </td>
                    <td>
                        <el-radio
                            v-model="ReceptionTripDetails.Trip_OrHall"
                            label="是"
                            >是</el-radio
                        >
                        <el-radio
                            v-model="ReceptionTripDetails.Trip_OrHall"
                            label="否"
                            >否</el-radio
                        >
                    </td>
                    <td>
                        <el-radio
                            v-model="ReceptionTripDetails.Trip_OrMeal"
                            label="是"
                            >是</el-radio
                        >
                        <el-radio
                            v-model="ReceptionTripDetails.Trip_OrMeal"
                            label="否"
                            >否</el-radio
                        >
                    </td>
                    <td>
                        <input
                            type="text"
                            v-model="
                                ReceptionTripDetails.Trip_ParticipateDepartment
                            "
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
                            v-model="ReceptionTripDetails.Trip_Note"
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
                        colspan="12"
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
                    <button type="info" @click="Add" style="float: left">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Reception: {
                Reception_Applicant: "",
                Reception_Department: "",
                Reception_ApplyTime: "",
                Reception_GuestUnit: "",
                Reception_GuestName: "",
                Reception_BeginResidenceTime: "",
                Reception_OverResidenceTime: "",
                Reception_Unawares: "",
                Reception_Number: "",
                Reception_OrData: "",
                Reception_Flight: "",
                Reception_OrItems: "",
                Reception_Reason: "",
                Reception_OtherRequirements: "",
                Reception_Note: "",
            },
            ReceptionItemsDetails: {
                Items_Name: "",
                Items_Specifications: "",
                Items_UseNumber: "",
                Items_InventoryQuantity: "",
                Items_NumberRemaining: "",
                Items_Note: "",
            },
            ReceptionTripDetails: {
                Trip_BeginTime: "",
                Trip_OverTime: "",
                Trip_Trip: "",
                Trip_AccompanyingOfficials: "",
                Trip_OrCar: "",
                Trip_OrReservationMeetingRoom: "",
                Trip_OrReservationHotel: "",
                Trip_OrHall: "",
                Trip_OrMeal: "",
                Trip_ParticipateDepartment: "",
                Trip_Note: "",
            },
            bpmReception: {
                action: "提交",
                bpmUser: window.sessionStorage["account"],
                bpmUserPass: window.sessionStorage["password"],
                fullName: window.sessionStorage["account"],
                processName: "接待申请流程",
                ReceptionData: "",
                ReceptionItemsDetailsDetail: "",
                ReceptionTripDetailsDetail: "",
            },
        };
    },
    methods: {
        Add() {
            this.bpmReception.ReceptionData = JSON.stringify(this.Reception);
            this.bpmReception.ReceptionItemsDetailsDetail = JSON.stringify(
                this.ReceptionItemsDetails
            );
            this.bpmReception.ReceptionTripDetailsDetail = JSON.stringify(
                this.ReceptionItemsDetails
            );
            this.$axios({
                url: "http://localhost:7438/api/stratReception",
                method: "post",
                data: this.bpmReception,
            }).then((res) => {
                if (res.data == "") {
                    alert("提交成功");
                } else {
                    alert("提交失败");
                }
            });
        },
    },
};
</script>