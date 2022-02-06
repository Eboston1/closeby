import Vue from 'vue'
import VueRouter from 'vue-router'
import userlocation from '@/pages/userlocation.vue'
import closebuy from '@/pages/closebuy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: userlocation
  },
  {
    path: '/close-buy',
    component: closebuy
  }
]

export default new VueRouter({
  routes
})

