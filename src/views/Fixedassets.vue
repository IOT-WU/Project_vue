<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">发起申请</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>
            <el-collapse-item title="固定资产申请" name="6">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogPurchaseVisible = true"
                        >固定资产申请</el-button
                    >
                    <!-- 固定资产申请 -->
                    <el-dialog
                        v-model="dialogPurchaseVisible"
                        title="固定资产申请"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/Purchase"
                            width="950px"
                            height="400px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="固定资产验收" name="7">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogAcceptanceVisible = true"
                        >固定资产验收</el-button
                    >
                    <!-- 固定资产验收 -->
                    <el-dialog
                        v-model="dialogAcceptanceVisible"
                        title="固定资产验收"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/Acceptance"
                            width="950px"
                            height="400px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="固定资产借用" name="5">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogBorrowVisible = true"
                        >固定资产借用</el-button
                    >
                    <!-- 固定资产借用 -->
                    <el-dialog
                        v-model="dialogBorrowVisible"
                        title="固定资产借用"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/Borrow"
                            width="950px"
                            height="400px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="固定资产交接" name="4">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="dialogHondaverlVisible = true"
                        >固定资产交接</el-button
                    >
                    <!-- 固定资产交接 -->
                    <el-dialog
                        title="固定资产交接"
                        v-model="dialogHondaverlVisible"
                        width="1000px"
                    >
                        <iframe
                            src="http://localhost:8080/Hondaver"
                            width="950px"
                            height="380px"
                            frameborder="0"
                        ></iframe>
                    </el-dialog>
                </div>
            </el-collapse-item>
    
        </el-collapse>
    </div>
</template>

<script>
import { Edit } from "@element-plus/icons-vue";
export default {
    components: {
        Edit,
    },
    data() {
        return {
            baseUrl: "http://localhost:7438/api/",
            dialogPurchaseVisible: false, //资产申请
            dialogAcceptanceVisible: false, //资产验收
            dialogHondaverlVisible: false, //资产交接
            dialogBorrowVisible: false, //资产借用
        };
    },
    mounted() {},
    methods: {},
};
</script>
