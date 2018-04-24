<template>
<div class="heads">
 <div class="header">知识分类</div>
 <div class="content">
     <dl class="clearfix">
         <dt>基础知识</dt>
         <dd>居民用地  <span class="spans">(9)</span></dd>
         <dd>物用地 <span class="spans">(9)</span></dd>
         <dd>居民用地 <span class="spans">(9)</span></dd>
         <dd>物流仓储用地 <span class="spans">(9)</span></dd>
         <dd>物流仓储用地asdfasf <span class="spans">(9)</span></dd>
     </dl>
     <dl class="clearfix">
         <dt>能源规划</dt>
         <dd>居民用地  <span class="spans">(9)</span></dd>
         <dd>物用地 <span class="spans">(9)</span></dd>
         <dd>居民用地 <span class="spans">(9)</span></dd>
         <dd>物流仓储用地 <span class="spans">(9)</span></dd>
         <dd>物流仓储用地asdfasf <span class="spans">(9)</span></dd>
     </dl>
     <dl class="clearfix">
         <dt>政策法规</dt>
         <dd>居民用地  <span class="spans">(9)</span></dd>
         <dd>物用地 <span class="spans">(9)</span></dd>
         <dd>居民用地 <span class="spans">(9)</span></dd>
         <dd>物流仓储用地 <span class="spans">(9)</span></dd>
         <dd>物流仓储用地asdfasf <span class="spans">(9)</span></dd>
     </dl>
     <dl class="clearfix">
         <dt>基础知识</dt>
         <dd>居民用地  <span class="spans">(9)</span></dd>
         <dd>物用地 <span class="spans">(9)</span></dd>
         <dd>居民用地 <span class="spans">(9)</span></dd>
         <dd>物流仓储用地 <span class="spans">(9)</span></dd>
         <dd>物流仓储用地asdfasf <span class="spans">(9)</span></dd>
     </dl>
 </div>
</div>
</template>
<script>
    
</script>
<style scoped lang="less">
.heads{
    overflow: hidden;
}
.header{
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 24px;
    font-family: '楷体';
    font-weight: 700;
    background: #198bc9;
    color: #ffffff;
    text-align: left;
    padding-left: 12px

}
.content{
    dl{

        padding-bottom: 12px;
        margin-right: 10px;
        border-bottom: 1px solid #ccc
    }
    dt {
        padding:0px;
        margin: 0px;
        font-weight: 700;
        text-align: left;
        padding-left: 12px

    }
    dd{
        padding:0px;
        margin: 0px;
        float: left;
        margin-right:12px; 
        font-size: 14px;
        margin-bottom: 2px;
        cursor: pointer;
        .spans{
            color:red
        }

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

