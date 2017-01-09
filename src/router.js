import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './page/layout/Index.vue'
import Hall from './page/Hall.vue'
import Talk from './page/Talk.vue'
import Message from './page/Message.vue'
import Personal from './page/Personal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index,
    children: [
      {path: 'hall', name: 'hall', component: Hall},
      {path: 'talk', name: 'talk', component: Talk},
      {path: 'message', name: 'message', component: Message},
      {path: 'personal', name: 'personal', component: Personal}
    ]
  }
]

export default new VueRouter({
  routes
})
