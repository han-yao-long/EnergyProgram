<template>
<div class="bac">
     <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#a4daf3"
      text-color="#000"
      active-text-color="#000"
      unique-opened router
     
      >
     <template v-for="(item,i) in items">
       <!-- //如果存在子集导航栏 -->
<template v-if="item.subs" class="items">
  <el-submenu :index="item.index" :key='i'   class="items">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <template v-for='(smItem, ixs) in item.subs'>
                                <el-menu-item :key="ixs" :index="smItem.index" class="items itemss">
                                    <i :class="smItem.icon"></i>{{ smItem.title }}
                                </el-menu-item>
                        </template>
   </el-submenu>
</template>
       <!-- 只有一级导航栏 -->
<template v-else>
                 <el-menu-item :index="item.index" :key='i'  class="items item-position">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
</template>
     </template>
    </el-menu>
</div>
</template>
<script>
export default {
  data: function() {
    return {
      items: [
          {
                    icon: 'iconfont icon-nengyuanguanli',
                    index: 'EPManagement',
                    title: '能源规划管理',
                },
                {
                    icon: 'iconfont icon-zhishiku',
                    index: 'KnowledgeBase',
                    title: '知识库',
                },
                {
                    icon: 'iconfont icon-weibiaoti5',
                    index: '1',
                    title: '配置管理',
                    subs: [
                        {
                            icon: 'iconfont icon-yuanjiao-rect',
                            index: 'EnergyPrice',
                            title: '能源价格管理'
                        },
                        {
                            icon: 'iconfont icon-yuanjiao-rect',
                            index: 'ResourceEndowment',
                            title: '资源禀赋管理'
                        },
                        {
                            icon: 'iconfont icon-yuanjiao-rect',
                            index: 'curveInstall',
                            title: '典型曲线设置'
                        },
                        {
                            icon: 'iconfont icon-yuanjiao-rect',
                            index: 'EquipmentModel',
                            title: '设备模型管理'
                        },
                        {
                            icon: 'iconfont icon-yuanjiao-rect',
                            index: 'EconomicParameter',
                            title: '经济性参数管理'
                        },
                        {
                            icon: 'iconfont icon-yuanjiao-rect',
                            index: 'ConfigurationKnowledgeBase',
                            title: '知识库配置管理'
                        },
                        {
                            icon: 'iconfont icon-yuanjiao-rect',
                            index: 'DataDictionary',
                            title: '数据字典'
                        },
                    ]
                }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style  scoped>


.bac{
     position: absolute;
   left: 0;
    top: 98px;
    bottom:0;
    width: 200px;
    background: #198bc9
}
.items{
border-top:1px solid #67b7dc;
height: 50px;
text-align: left;
/* background: #bde4f5 !important */
}
.itemss{
    /* background: #fff !important */
     /* background-image: -webkit-linear-gradient(top,#fff 10%,#b7e1f4 90%); */
}

</style>
