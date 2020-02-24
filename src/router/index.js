import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/doc',
    component: () => import(/* webpackChunkName: "about" */ '../components/Home'),
    children: [
      {
        path:'/vant',
        name:'vant',
        component: () => import(/* webpackChunkName: "about" */ '../components/post.md'),
      },
      {
        path:'/vant1',
        name:'vant1',
        component: () => import(/* webpackChunkName: "about" */ '../components/post1.md'),
      },
      {
        path:'/doc',
        name:'doc',
        component: () => import(/* webpackChunkName: "about" */ '../components/doc.md'),
      },
      {
        path:'/card',
        name:'card',
        component: () => import(/* webpackChunkName: "about" */ '../components/card.md'),
      },
      {
        path:'/card2',
        name:'card2',
        component: () => import(/* webpackChunkName: "about" */ '../components/card3.md'),
      },
      {
        path:'/nginx',
        name:'nginx',
        component: () => import(/* webpackChunkName: "about" */ '../components/nginx_pz.md'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/card.vue')
  },
  {
    path: '/card3',
    name: 'card3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/card3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
