<template>
    <div>
        <el-form-item label="用品名称">
            <el-input v-model="name"></el-input>
        </el-form-item>

        <el-button type="danger" plain @click="show">查询</el-button>
        <el-table :data="ReservationProcurement" style="width: 100%">
            <el-table-column prop="goods_Name" label="用品名称" width="180" />
            <el-table-column
                prop="goods_Specifications"
                label="规格"
                width="180"
            />
            <el-table-column prop="goods_Num" label="数量" width="180" />
            <el-table-column prop="goods_Unit" label="单位" width="180" />
            <el-table-column prop="goods_Price" label="单价" width="180" />
            <el-table-column prop="goods_Money" label="金额" width="180" />
            <el-table-column prop="goods_Note" label="备注" width="180" />
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
