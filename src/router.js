import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
import Home from './views/Home'
import Chat from './views/Chat'

const routes = [
  { path: '/', component: Home },
  { path: '/chat', component: Chat }
]

export const router = new VueRouter({routes})
