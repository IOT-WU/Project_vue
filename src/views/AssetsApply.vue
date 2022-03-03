<template>
    <div style="margin-bottom: 30px; text-align: left">
        <span style="font-size: 30px">资产申请</span>
    </div>
    <div class="demo-collapse">
        <el-collapse accordion>
            <el-collapse-item title="人资申请" name="1">
                <div style="text-align: left; margin-left: 50px">
                    <el-icon>
                        <edit />
                    </el-icon>
                    <el-button type="text" @click="stafflApply"
                        >人力资源申请</el-button
                    >
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>