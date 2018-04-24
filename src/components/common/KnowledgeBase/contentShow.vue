<template>
  <div>
     <h4>最新发布</h4>
     <div class="content">
         <!-- <div class="items">
            <a href="#">综合能源服务是什么</a>
         </div> -->
         <el-collapse accordion>
  <el-collapse-item>
    <template slot="title">
      <div>
          <div>综合能源是什么?</div>
          <ul class="">
              <li>分类:能源规划</li>
              <li>信息来源:管理员</li>
              <li>发布人:管理员</li>
              <li>发布时间:2018-04-12</li>
          </ul>
      </div>
     
    </template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
</el-collapse>
     </div>
  </div>
</template>
<style scoped lang="less">
h4 {
    margin: 0;
    padding: 0;
    text-align: left;
    margin-left: 12px
}
.content{
    .items{
        width: 100%;
        height: 100px;
       border:1px solid #ccc
    }
}
 .clearfix:after { 	
   	content:'';
   	display:block;
    clear:both;
   }
   .clearfix{
   	zoom:1;
   }
</style>

