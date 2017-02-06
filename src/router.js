import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './page/layout/Index.vue'
import Hall from './page/Hall.vue'
import Talk from './page/Talk.vue'
import Message from './page/Message.vue'
import Personal from './page/personal/Personal.vue'
import Concern from './page/talk/Concern.vue'
import Fans from './page/talk/Fans.vue'
import Chat from './page/talk/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: 'hall',
        name: 'hall',
        component: Hall
      },
      {
        path: 'talk',
        name: 'talk',
        component: Talk,
        children: [
          {
            path: 'concern',
            name: 'concern',
            component: Concern
          },
          {
            path: 'fans',
            name: 'fans',
            component: Fans
          },
          {
            path: 'chat',
            name: 'chat',
            component: Chat
          }
        ]
      },
      {path: 'message', name: 'message', component: Message},
      {path: 'personal', name: 'personal', component: Personal}
    ]
  }
]

export default new VueRouter({
  routes
})
