import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      component: resolve => require(['@/components/page/Login'], resolve)
    },
    {
      path: '/Home',
      redirect:'/EPManagement',
      component: resolve => require(['@/components/common/home'], resolve),
      children:[
        {
          path: "/EPManagement",
          component: resolve => require(['@/components/page/EPManagement'], resolve),
        },
        {
          path: "/KnowledgeBase",
          component: resolve => require(['@/components/page/KnowledgeBase'], resolve),
        },
        {
          path: "/ConfigurationKnowledgeBase",
          component: resolve => require(['@/components/page/ConfigurationKnowledgeBase'], resolve),
        },
        {
          path: "/curveInstall",
          component: resolve => require(['@/components/page/curveInstall'],resolve),
        },
        {
          path: "/DataDictionary",
          component: resolve => require(['@/components/page/DataDictionary'],resolve),
        },
        {
          path: "/EconomicParameter",
          component: resolve => require(['@/components/page/EconomicParameter'],resolve),
        },
        {
          path: "/EnergyPrice",
          component: resolve => require(['@/components/page/EnergyPrice'],resolve),
        },
        {
          path: "/EquipmentModel",
          component: resolve => require(['@/components/page/EquipmentModel'],resolve),
        },
        {
          path: "/ResourceEndowment",
          component: resolve => require(['@/components/page/ResourceEndowment'],resolve),
        },
      ]

    },
    {
      path: '*',
      component: resolve => require(['@/components/page/NotFoundComponent'], resolve),
    }
  ]
})
