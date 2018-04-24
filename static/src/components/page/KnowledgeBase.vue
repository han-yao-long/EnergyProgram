<template>
  <div>
      
          <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="iconfont icon-zhishiku"></i>  知识库</el-breadcrumb-item>
            </el-breadcrumb>
          
        </div>
        <!-- //查询模块 -->
        <Forms></Forms>
        <el-row>
  <el-col :span="5"><div class="box1">
    <KnowledgeCategory></KnowledgeCategory>
    </div></el-col>
  <el-col :span="14"><div class="box2">
    <contentShow></contentShow>
    </div></el-col>
  <el-col :span="5"><div class="box3"></div></el-col>

</el-row>
  </div>
</template>
<script>
import Forms from '@/components/common/knowledgeBase/Forms'//查询模块
import KnowledgeCategory from '@/components/common/knowledgeBase/KnowledgeCategory'//知识分类模块
import contentShow from '@/components/common/knowledgeBase/contentShow'//内容展示模块
  import {mapState, mapActions} from 'vuex';
    export default {
      data:function(){
        return {

        }
      },
   components: {
    Forms,
    KnowledgeCategory,
    contentShow
  },
      methods:{
        clicks(){
        
        },
      
      },

    }
</script>
<style scoped>
.box1{
  width: 100%;
  border-right: 1px solid #ccc
  

}
.box2{
 width: 100%;
  border-right: 1px solid #ccc
}
.box3{
  width: 100%;
  height: 100px;
  background: green
}
</style>
