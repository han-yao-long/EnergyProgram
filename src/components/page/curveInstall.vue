<template>
  <div>
        <el-breadcrumb separator="/">
                <el-breadcrumb-item class="iconfont icon-weibiaoti5">配置管理</el-breadcrumb-item>
                <el-breadcrumb-item>典型曲线配置</el-breadcrumb-item>
        </el-breadcrumb>
        <Tabs></Tabs>
  </div>
</template>

<script>
  import Tabs from "@/components/common/CurveInstall/tabs"

  export default {
    name: 'CurveInstall',
    data () {
      return {
        
      }
    },
    components:{
      Tabs
    }
  }
    
</script>
<style>

</style>