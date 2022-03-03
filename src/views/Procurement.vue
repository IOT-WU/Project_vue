<template>
  <div class=".BodyDiv">
    <div align="center">
      <table
        border="1px"
        bordercolor="#E4E7ED"
        width="900xp"
        cellpadding="5"
        cellspacing="0"
        :model="Procurement"
      >
        <tr>
          <td colspan="4">
            <h2 style="text-align: center">日常用品采购申请单</h2>
          </td>
        </tr>
        <tr>
          <td align="left" colspan="4" style="background-color: #daecf7">
            基础信息
          </td>
        </tr>
        <tr>
          <td align="left" width="225" style="background-color: #f6f5f4">
            申请人
          </td>
          <td width="225">
            <input
              type="text"
              v-model="Procurement.Procurement_Applicant"
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
          <td align="left" width="225" style="background-color: #f6f5f4">
            经办人
          </td>
          <td width="225">
            <input
              type="text"
              v-model="Procurement.Procurement_Agent"
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
            申请部门
          </td>
          <td width="225">
            <input
              type="text"
              v-model="Procurement.Procurement_ApplyDepartment"
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
            经办部门
          </td>
          <td width="225">
            <input
              type="text"
              v-model="Procurement.Procurement_HandlingDepartment"
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
            申请日期
          </td>
          <td width="225">
            <input
              type="date"
              v-model="Procurement.Procurement_ApplyTime"
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
            经办日期
          </td>
          <td width="225">
            <input
              type="date"
              v-model="Procurement.Procurement_HandlingTime"
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
            用途
          </td>
          <td width="225" colspan="3">
            <input
              type="text"
              v-model="Procurement.Procurement_Use"
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
        :model="Goods"
      >
        <tr>
          <td align="left" colspan="16" style="background-color: #daecf7">
            详细信息
          </td>
        </tr>
        <tr>
          <td align="left" style="background-color: #f6f5f4">序号</td>
          <td align="left" style="background-color: #f6f5f4">用品名称</td>
          <td align="left" style="background-color: #f6f5f4">规格</td>
          <td align="left" style="background-color: #f6f5f4">数量</td>
          <td align="left" style="background-color: #f6f5f4">单位</td>
          <td align="left" style="background-color: #f6f5f4">单价</td>
          <td align="left" style="background-color: #f6f5f4">金额</td>
          <td align="left" style="background-color: #f6f5f4">备注</td>
        </tr>
        <tr>
          <td align="left" style="background-color: #f6f5f4">1</td>
          <td>
            <input
              type="text"
              v-model="Goods.Goods_Name"
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
              v-model="Goods.Goods_Specifications"
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
              v-model="Goods.Goods_Num"
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
              v-model="Goods.Goods_Unit"
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
              v-model="Goods.Goods_Price"
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
              v-model="Goods.Goods_Money"
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
              v-model="Goods.Goods_Note"
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
          <td align="left" colspan="16" style="background-color: #daecf7">
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
      Procurement: {
        Procurement_Applicant: "",
        Procurement_Agent: "",
        Procurement_ApplyDepartment: "",
        Procurement_HandlingDepartment: "",
        Procurement_ApplyTime: "",
        Procurement_HandlingTime: "",
        Procurement_Use: "",
      },
      Goods: {
        Goods_Name: "",
        Goods_Specifications: "",
        Goods_Num: "",
        Goods_Unit: "",
        Goods_Price: "",
        Goods_Money: "",
        Goods_Note: "",
      },
      bpmProcurement: {
        action: "提交",
        bpmUser: window.sessionStorage["account"],
        bpmUserPass: window.sessionStorage["password"],
        fullName: window.sessionStorage["account"],
        processName: "日常用品采购申请单",
        ProcurementData: "",
        ProcurementDetailsDetail: "",
      },
    };
  },
  methods: {
    Add() {
      this.bpmProcurement.ProcurementData = JSON.stringify(this.Procurement);
      this.bpmProcurement.ProcurementDetailsDetail = JSON.stringify(this.Goods);
      this.$axios({
        url: "http://localhost:7438/api/stratProcurement",
        method: "post",
        data: this.bpmProcurement,
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
