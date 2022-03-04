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
            <h2 style="text-align: center">车辆保险记录表</h2>
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
            <input type="text" v-model="staff.car_Handler" />
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            制表时间
          </td>
          <td width="225">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="staff.car_Tabulation"
              style="width: 100%"
            >
            </el-date-picker>
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            车型
          </td>
          <td width="225">
            <input type="text" v-model="staff.car_Model" />
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            车牌号
          </td>
          <td width="225">
            <input type="text" v-model="staff.car_number" />
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            购买日期
          </td>
          <td width="225">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="staff.car_purchase"
              style="width: 100%"
            >
            </el-date-picker>
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            座位数
          </td>
          <td width="225">
            <input type="text" v-model="staff.car_seat" />
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            保险金额
          </td>
          <td width="225">
            <input type="text" v-model="staff.car_money" />
          </td>
          <td align="left" width="225" style="background-color: #f6f5f4">
            乘客险
          </td>
          <td width="225">
            <input type="text" v-model="staff.car_passenger" />
          </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f6f5f4">
            保险项目
          </td>
          <td width="225">
            <input type="text" v-model="staff.car_project" />
          </td>
            <td align="left" width="225" style="background-color: #f6f5f4">
            截至保险日期
          </td>
          <td width="225">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="staff.car_Insurance"
              style="width: 100%"
            >
            </el-date-picker>
          </td>
        </tr>
          <tr>
               <td align="left" width="225" style="background-color: #f6f5f4">
            保险开始日期
          </td>
          <td width="225">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="staff.car_strat"
              style="width: 100%"
            >
            </el-date-picker>
          </td>
           <td align="left" width="225" style="background-color: #f6f5f4">
            保险结束日期
          </td>
          <td width="225">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="staff.car_end"
              style="width: 100%"
            >
            </el-date-picker>
          </td>
        </tr>
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
       car_Handler: "", //经办人
                car_Tabulation: "", //制表时间
                car_Model: "", //车型
                car_number: "", //车牌号
                car_purchase: "", //购买日期
                car_seat: "0", //座位数
                car_money: "", //保险金额
                car_passenger: "", //乘客险
                car_project: "", //保险项目
                car_Insurance:"",//截止保险日期
                car_strat:"",//保险开始日期
                car_end:""//保险结束日期
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
        url: this.baseUrl + "AddermInsurance",
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
