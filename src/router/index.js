import Router from 'vue-router'
import Vue from 'vue'
import Wang from '../components/wang.vue'
import Test from '../components/test.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'wang',
      component: Wang
    },
    {
      path: '/test',
      name: 'test',     
      component: Test
    }
  ]
})
 

