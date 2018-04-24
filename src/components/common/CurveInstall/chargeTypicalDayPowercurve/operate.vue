<template>
    <div class="operate">
        <el-row type="flex" class="row-bg" justify="start">
            <el-button type="primary" size="medium">新增</el-button>
            <el-button type="success" size="medium">编辑</el-button>
            <el-button type="danger" size="medium">删除</el-button>
            <el-button type="info" size="medium">导入数据</el-button>
            <el-button  size="medium">导出数据</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            
            }
        },
        components:{
           
        },
    }
</script>

<style scoped>
.operate{
    border-top: 1px solid black;
    margin: 15px 0;
    padding-top: 15px;
}

</style>
