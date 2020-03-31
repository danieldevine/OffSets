import Vue from 'vue'
import VueRouter from 'vue-router'
import Nodes from '../views/Nodes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Nodes',
    component: Nodes
  },
  {
    path: '/players',
    name: 'Players',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "players" */ '../views/Players.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
