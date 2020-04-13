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
    component: () => import(/* webpackChunkName: "players" */ '../views/Players.vue')
  },
    {
    path: '/node/:id',
    name: 'Node',
    component: () => import(/* webpackChunkName: "node" */ '../views/Node.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
