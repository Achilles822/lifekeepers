import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/content/index'
import per_info from '@/components/personal/personal_information'
import per_profile from '@/components/personal/personal-profile'
import alter_pwd from '@/components/personal/alter_pwd'
import advice from '@/components/personal/advice'
import device from '@/components/health_package/device_manager'
import health_data from '@/components/health_package/health_data'
import ring from '@/components/health_package/device/ring'
import feihuo from '@/components/health_package/device/feihuo'
import tiwen from '@/components/health_package/device/tiwen'
import tizhi from '@/components/health_package/device/tizhi'
import xuetang from '@/components/health_package/device/xuetang'
import xueyang from '@/components/health_package/device/xueyang'
import xueya from '@/components/health_package/device/xueya'
import medical from '@/components/personal/medical'
import add_medical from '@/components/personal/add_medical'
import member from  '@/components/family_team/member'
import add_member from  '@/components/family_team/add_member'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    { name: "device", path: "/2-1", component: device },
    {name: "health_data", path: "/2-2", component: health_data,
      children:[
        {name: "ring", path: "/2-2-1", component: ring},
        {name: "feihuo", path: "/2-2-2", component: feihuo},
        {name: "xuetang", path: "/2-2-3", component: xuetang},
        {name: "xueyang", path: "/2-2-4", component: xueyang},
        {name: "tizhi", path: "/2-2-5", component: tizhi},
        {name: "tiwen", path: "/2-2-6", component: tiwen},
        {name: "xueya", path: "/2-2-7", component: xueya},
      ]
    },

    { name: "per-info", path: "/3-1", component: per_info },
    { name: "per-profile", path: "/3-2", component: per_profile },
    { name: "alter_pwd", path: "/3-3", component: alter_pwd },
    { name: "advice", path: "/3-4", component: advice},
    { name: "medical", path: "/4-1", component: medical},
    { name: "add_medical", path: "/4-1-1", component: add_medical},
    { name: "member", path: "/5-1", component: member},
    { name: "add_member", path: "/5-2", component: add_member}
  ]
});
