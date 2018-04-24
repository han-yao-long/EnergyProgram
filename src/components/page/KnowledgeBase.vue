<template>
  <div>
      
          <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="iconfont icon-zhishiku"></i>  知识库</el-breadcrumb-item>
            </el-breadcrumb>
            {{count}}
              <el-button type="primary"  @click="addAction()">主要按钮</el-button>
        </div>
  </div>
</template>
<script>
 import store from '@/store'
  import {mapState, mapActions} from 'vuex';
    export default {
      data:function(){
        return {

        }
      },
      store,
      methods:{
        clicks(){
        
        },
        ...mapActions(['addAction'])
      },
         computed: {
      ...mapState({
            count: state => state.count,
        })
    },
    }
</script>
<style>

</style>
