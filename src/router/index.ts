import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task3',
    name: 'task3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/task3.vue')
  },
  {
    path: '/task4',
    name: 'task4',
    // route level code-splitting
    // this generates a separate chunk (changeStyle.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "changeStyle" */ '../views/task4.vue')
  },
  {
    path: '/task5',
    name: 'task5',
    // route level code-splitting
    // this generates a separate chunk (changeStyle.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "changeStyle" */ '../views/task5.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
