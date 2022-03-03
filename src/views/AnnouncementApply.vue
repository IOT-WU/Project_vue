<template>
    <div class=".BodyDiv">
        <div align="center">
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="Announcement"
            >
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">
                            公告基本信息
                        </h2>
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
                        类型
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="
                                Announcement.Announcement_type
                            "
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
                        发布时间
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="
                                Announcement.Announcement_date
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
                        标题
                    </td>
                    <td width="225">
                        <input
                            type="datetime-local"
                            v-model="
                                Announcement.Announcement_title
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
                        内容
                    </td>
                    <td width="225" height="100" colspan="3">
                        <input
                            type="text"
                            v-model="
                                Announcement.Announcement_content
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
        >
            <tr>
                <td
                    align="left"
                    width="73"
                    style="background-color: #f6f5f4"
                >
                    附件
                </td>
                <td width="225">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                    >
                        <el-button
                            size="small"
                            type="primary"
                            >添加附件</el-button
                        >
                    </el-upload>
                </td>
            </tr>
            </table>
            <div style="width: 900px" align="center">
                <div align="left">
                    <button @click="Addannual">提交</button>
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
                //用章申请
                Announcement: {
                    announcement_type: "",
                    announcement_date: "",
                    announcement_title: "",
                    announcement_content: "",
                    announcement_attachment: "",
                },
            };
        },
        mounted() { },
        methods: {
            //用章申请
            ChapterApply() {
                this.dialogAnnouncementVisible = true;
            },
            Addannual() {

            }
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