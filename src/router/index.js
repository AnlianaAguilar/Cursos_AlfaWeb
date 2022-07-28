import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import {getAuth} from 'firebase/auth'
import RegisterView from '@/views/RegisterView.vue'
import AdministrationView from '@/views/AdministrationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      private:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/administration',
    name: 'administration',
    component: AdministrationView,
    meta:{
      private:true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const auth = getAuth()
  console.log(auth)
  let user = auth.currentUser
  console.log(user)

  let private_route = to.meta.private
  if(private_route && !user){
    next('/login')
  }
  else if(private_route == undefined && user){
    next('/')
  }
  else{
    next()
  }
})

export default router
