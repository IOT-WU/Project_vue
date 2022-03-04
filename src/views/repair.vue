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
            <h2 style="text-align: center">车辆维修记录表</h2>
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
            <input type="text" v-model="staff.handler" />
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            维修日期
          </td>
          <td width="225">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="staff.time"
              style="width: 100%"
            >
            </el-date-picker>
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            维修项目
          </td>
          <td width="225">
            <input type="text" v-model="staff.project" />
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            维修单位
          </td>
          <td width="225">
            <input type="text" v-model="staff.company" />
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            维修当时公里数
          </td>
          <td width="225">
            <input type="text" v-model="staff.kilometers" />
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            维修费用
          </td>
          <td width="225">
            <input type="text" v-model="staff.cost" />
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            出故障人员
          </td>
          <td width="225">
            <input type="text" v-model="staff.fault" />
          </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f6f5f4">
            出故障日期
          </td>
          <td width="225">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="staff.date"
              style="width: 100%"
            >
            </el-date-picker>
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
                v-model="staff.remarks"
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
       handler: "", //经办人
                time: "", //维修日期
                project: "", //维修项目
                company: "", //维修单位
                kilometers: "", //维修当时公里数
                cost: "", //维修费用
                fault: "", //出故障人员
                date: "", //出故障日期
                remarks: "", //备注
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
        url: this.baseUrl + "Addermrepair",
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
