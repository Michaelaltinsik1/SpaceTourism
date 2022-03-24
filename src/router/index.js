import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'
import CrewView from '../views/CrewView.vue'
import TechnologyView from '../views/TechnologyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Destination',
    name: 'destination',
    component: DestinationView
  },
  {
    path: '/Crew',
    name: 'crew',
    component: CrewView
  },
  {
    path: '/Technology',
    name: 'technology',
    component: TechnologyView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
