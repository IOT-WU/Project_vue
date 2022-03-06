<template>
    <div>
        <div style="text-align: left">
            <span style="font-family: 宋体; font-size: 13px">用品名称：</span>
            <el-input
                size="small"
                style="width: 200px"
                v-model="name"
            ></el-input
            >&emsp;
            <el-button size="small" type="danger" plain @click="show"
                >查询</el-button
            >
        </div>
        <el-table :data="ReservationProcurement">
            <el-table-column prop="goods_Name" label="用品名称" />
            <el-table-column prop="goods_Specifications" label="规格" />
            <el-table-column prop="goods_Num" label="数量" />
            <el-table-column prop="goods_Unit" label="单位" />
            <el-table-column prop="goods_Price" label="单价" />
            <el-table-column prop="goods_Money" label="金额" />
            <el-table-column prop="goods_Note" label="备注" />
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ReservationProcurement: [{}],
            name: "",
        };
    },
    created() {
        this.show();
    },
    methods: {
        AnnualApply() {
            this.dialoggoodsVisible = true;
        },
        show() {
            this.$axios({
                url:
                    "http://localhost:7438/api/GetProcurementDetails?Name=" +
                    this.name,
                method: "get",
            }).then((res) => {
                this.ReservationProcurement = res.data;
                console.log(res.data);
            });
        },
    },
};
</script>
