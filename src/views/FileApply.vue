<template>
    <div class=".BodyDiv">
        <div align="center">
            <table
                border="1px"
                bordercolor="#E4E7ED"
                width="900xp"
                cellpadding="5"
                cellspacing="0"
                :model="File"
            >
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center">
                            文件管理表
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
                        文件类型
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="
                                File.File_type
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
                        文件所属部门
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="
                            File.File_department
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
                        文件名称
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="
                                File.File_name
                            "
                        />
                    </td>
                    <td
                        align="left"
                        width="225"
                        style="background-color: #f6f5f4"
                    >
                        归档日期
                    </td>
                    <td width="225">
                        <input
                            type="datetime-local"
                            v-model="
                                File.File_date
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
                        文件编号
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="
                                File.File_number
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
                        归档人
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="
                            File.File_Archive
                            "
                        />
                    </td>
                </tr>
                <tr>
                    <td
                        align="left"
                        width="225"
                        height="35px"
                        style="background-color: #f6f5f4"
                    >
                        内容
                    </td>
                    <td width="225">
                        <input
                            type="text"
                            v-model="
                                File.File_content
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
                        附件
                    </td>
                    <td width="225" colspan="3">
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                        >
                            <el-button
                                type="success"
                                size="mini"
                                >+ 添加附件</el-button
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
                //文件管理信息
                File: {
                    File_type: "",
                    File_department: "",
                    File_name: "",
                    File_date: "",
                    File_number: "",
                    File_Archive: "",
                    File_content: "",
                    File_attachment:"",
                },
            };
        },
        mounted() { },
        methods: {
            //用章申请
            ChapterApply() {
                this.dialogFileVisible = true;
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