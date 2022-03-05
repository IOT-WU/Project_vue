<template>
    <div class=".BodyDiv">
        <div align="center">
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="MeetingRoomNew"
            >
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">会议室新增</h2>
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
                        会议室名称
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="MeetingRoomNew.MeetingRoom_Name"
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
                        座位
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="MeetingRoomNew.MeetingRoom_Seat"
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
                        楼层
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="MeetingRoomNew.MeetingRoom_Floor"
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
                        可容纳人数
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="MeetingRoomNew.MeetingRoom_Capacity"
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
                        空调
                    </td>
                    <td width="225">
                        <el-select
                            v-model="
                                MeetingRoomNew.MeetingRoom_OrAirConditioner
                            "
                            placeholder="请选择"
                        >
                            <el-option label="有" value="有">有</el-option>
                            <el-option label="无" value="无">无</el-option>
                        </el-select>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        投影仪
                    </td>
                    <td width="225">
                        <el-select
                            v-model="MeetingRoomNew.MeetingRoom_OrProjector"
                            placeholder="请选择"
                        >
                            <el-option label="有" value="有">有</el-option>
                            <el-option label="无" value="无">无</el-option>
                        </el-select>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        白板
                    </td>
                    <td width="225">
                        <el-select
                            v-model="MeetingRoomNew.MeetingRoom_OrWhiteboard"
                            placeholder="请选择"
                        >
                            <el-option label="有" value="有">有</el-option>
                            <el-option label="无" value="无">无</el-option>
                        </el-select>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        网络
                    </td>
                    <td width="225">
                        <el-select
                            v-model="MeetingRoomNew.MeetingRoom_OrNetwork"
                            placeholder="请选择"
                        >
                            <el-option label="有" value="有">有</el-option>
                            <el-option label="无" value="无">无</el-option>
                        </el-select>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        网络范围
                    </td>
                    <td width="225">
                        <el-select
                            v-model="MeetingRoomNew.MeetingRoom_OrNetworkRange"
                            placeholder="请选择"
                        >
                            <el-option label="有" value="有">有</el-option>
                            <el-option label="无" value="无">无</el-option>
                        </el-select>
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        饮水机
                    </td>
                    <td width="225">
                        <el-select
                            v-model="
                                MeetingRoomNew.MeetingRoom_OrWaterDispenser
                            "
                            placeholder="请选择"
                        >
                            <el-option label="有" value="有">有</el-option>
                            <el-option label="无" value="无">无</el-option>
                        </el-select>
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        管理员
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="MeetingRoomNew.MeetingRoom_Administrator"
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
                        照片
                    </td>
                    <td width="225" colspan="3">
                        <input
                            type="text"
                            v-model="MeetingRoomNew.MeetingRoom_Image"
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
                        备注
                    </td>
                    <td width="225" colspan="3">
                        <input
                            type="text"
                            v-model="MeetingRoomNew.MeetingRoom_Note"
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
            <div style="width: 900px" align="center">
                <div align="left">
                    <input type="button" @click="Add" value="提交" />
                    <button type="info" style="float: left">存为草稿</button>
                    <button type="info" style="float: left">存为范本</button>
                    <button type="info" style="float: left">启用阅示</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            MeetingRoomNew: {
                MeetingRoom_Name: "",
                MeetingRoom_Seat: "",
                MeetingRoom_Floor: "",
                MeetingRoom_Capacity: "",
                MeetingRoom_OrAirConditioner: "",
                MeetingRoom_OrProjector: "",
                MeetingRoom_OrWhiteboard: "",
                MeetingRoom_OrNetwork: "",
                MeetingRoom_OrNetworkRange: "",
                MeetingRoom_OrWaterDispenser: "",
                MeetingRoom_Administrator: "",
                MeetingRoom_Image: "",
                MeetingRoom_Note: "",
            },
        };
    },
    methods: {
        AnnualApply() {
                this.dialogMeetingRoomNewVisible = true;
            },
        Add() {
            this.$axios({
                url: "http://localhost:7438/api/MeetingRoomNewAdd",
                method: "post",
                data: this.MeetingRoomNew,
            }).then((res) => {
                if (res.data > 0) {
                    alert("提交成功");
                } else {
                    alert("提交失败");
                }
            });
        },
    },
};
</script>