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
            <h2 style="text-align: center">车辆保养记录表</h2>
          </td>
        </tr>
        <tr>
          <td align="left" colspan="4" style="background-color: #daecf7">
            基础信息
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            经办人
          </td>
          <td width="225">
            <input type="text" v-model="staff.vehicle_Handler" />
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            保养日期
          </td>
          <td width="225">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="staff.vehicle_datime"
              style="width: 100%"
            >
            </el-date-picker>
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
           保养原因
          </td>
          <td width="225">
            <input type="text" v-model="staff.vehicle_reason" />
          </td>
        </tr>
         <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
           保养项目
          </td>
          <td width="225">
            <input type="text" v-model="staff.vehicle_project" />
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            保养单位
          </td>
          <td width="225">
            <input type="text" v-model="staff.vehicle_Company" />
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            保养费用
          </td>
          <td width="225">
            <input type="text" v-model="staff.vehicle_cost" />
          </td>
        </tr>
        <tr>
           <td align="left" width="225" style="background-color: #f6f5f4">
            保养当时公里数
          </td>
          <td width="225">
            <input type="text" v-model="staff.vehicle_Kilometers" />
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
                v-model="staff.vehicle_remarks"
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
    
      //人力资源数据
      staff: {
       vehicle_Handler: "", //经办人
                vehicle_datime: "", //保养日期
                vehicle_reason: "", //保养原因
                vehicle_project: "", //保养项目
                vehicle_Company: "", //保养单位
                vehicle_cost: "", //保养费用
                vehicle_Kilometers: "", //保养当时公里数
                vehicle_remarks: "", //备注
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
      this.$axios({
        url: this.baseUrl + "Addermaintain",
        method: "post",
        data: this.staff,
      }).then((res) => {
        if (res.data >0) {
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
