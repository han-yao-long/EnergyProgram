<template>

<div>
  <el-row>
  <el-col :span="6">
 
    <div class="logo">
    <img src="/static/img/u14145.png" alt=""><span class="logos">知识库</span>
    </div>
  </el-col>
  <el-col :span="18">
<!-- 查询表单开始 -->
  <el-form :inline="true" :model="formInline" class="demo-form-inline" >
  <el-form-item label="">
    <el-input v-model="formInline.user" placeholder="搜索关键字..." style="width:300px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" icon="el-icon-search">搜索</el-button>
  </el-form-item>
</el-form>
 <!-- 查询表单结束 -->

  
 <!-- 表单下的分类开始 -->
 <div class="classify">
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first"></el-tab-pane>
    <el-tab-pane label="基础知识" name="second"></el-tab-pane>
    <el-tab-pane label="能源规划" name="third"></el-tab-pane>
    <el-tab-pane label="政策法规" name="fourth"></el-tab-pane>
    <el-tab-pane label="典型案例" name="fourth"></el-tab-pane>
  </el-tabs>
  </div>
 <!-- 表单下的分类结束 -->
  </el-col>

</el-row>
</div>
</template>
<script>
    export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
          activeName: 'second'
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style scoped lang="less">
.demo-form-inline{
  width: 500px;
}
.classify{
    .el-tabs__header{
      margin:0px
    }
}
.logo{
  width: 300px;
  height: 100px;
  vertical-align: middle;
  position: relative;
  text-align: left;
  /* background: url('/static/img/u14145.png') left no-repeat */
.logos{
  display:block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  position: absolute;
  left: 130px;
  top:0px;
  text-align: center;
  font-family:'华文行楷 Bold', '华文行楷 Regular', '华文行楷';
  font-size: 24px;
  font-weight:700
  
}
}
</style>

