<template>
  <div class=".BodyDiv">
    <div align="center">
      <table
        border="1px"
        bordercolor="#E4E7ED"
        width="900xp"
        cellpadding="5"
        cellspacing="0"
        :model="ReservationMeetingRoom"
      >
        <tr>
          <td colspan="4">
            <h2 style="text-align: center">会议室预定</h2>
          </td>
        </tr>
        <tr>
          <td align="left" colspan="4" style="background-color: #daecf7">
            基础信息
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            会议室
          </td>
          <td width="225">
            <select v-model="ReservationMeetingRoom.Reservation_MeetingRoom" placeholder="请选择" style="width:100%;height:100%;border:0;background:transparent;outline:none;">
              <option v-for="item in meetingroom" :key="item.meetingRoomId" :label="item.meetingRoomName" :value="item.meetingRoomId">{{item.meetingRoomName}}</option>
            </select>
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            座位
          </td>
          <td width="225">
            <input
              type="text"
              v-model="ReservationMeetingRoom.Reservation_Seat"
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
          <td align="left" width="225" style="background-color: #f6f5f4">
            使用部门
          </td>
          <td width="225">
            <input
              type="text"
              v-model="ReservationMeetingRoom.Reservation_UseDepartment"
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
          <td align="left" width="225" style="background-color: #f6f5f4">
            使用人
          </td>
          <td width="225">
            <input
              type="text"
              v-model="ReservationMeetingRoom.Reservation_Users"
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
          <td align="left" width="225" style="background-color: #f6f5f4">
            事由
          </td>
          <td width="225">
            <input
              type="text"
              v-model="ReservationMeetingRoom.Reservation_Reason"
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
          <td align="left" width="225" style="background-color: #f6f5f4">
            开始时间
          </td>
          <td width="225">
            <input
              type="date"
              v-model="ReservationMeetingRoom.Reservation_BeginTime"
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
          <td align="left" width="225" style="background-color: #f6f5f4">
            结束时间
          </td>
          <td width="225">
            <input
              type="date"
              v-model="ReservationMeetingRoom.Reservation_OverTime"
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
      ReservationMeetingRoom: {
        Reservation_MeetingRoom: "",
        Reservation_Seat: "",
        Reservation_UseDepartment: "",
        Reservation_Users: "",
        Reservation_Reason: "",
        Reservation_BeginTime: "",
        Reservation_OverTime: ""
      },
      meetingroom:[]
    };
  },
  created(){
      this.show();
  },
  methods: {
    Add(){
      this.$axios({
        url:"http://localhost:7438/api/ReservationMeetingRoomAdd",
        method:"post",
        data:this.ReservationMeetingRoom
      }).then((res)=>{
        if(res.data>0)
        {
          alert("提交成功");
        }
        else
        {
          alert("提交失败");
        }
      })
    },
    show(){
        this.$axios({
            url:"http://localhost:7438/api/GetMeetingRoom",
            method:"get"
        }).then((res)=>{
            this.meetingroom = res.data;
        })
    }
  },
};
</script>