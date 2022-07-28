import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses:[]
  },
  getters: {
  },
  mutations: {
    ADD_COURSE(state, course){
      state.courses.push({
        id:course.id,
        img:course.data().img,
        name:course.data().name,
        cost: course.data().cost,
        duration: course.data().duration,
        quota:course.data().quota,
        description:course.data().description, 
      })
    },
    RESET_COURSE(state){
      state.courses=[]
    }
  },
  actions: {
    async fetchCourses({commit}){
      let querySnapShot = await getDocs(collection(db,'courses'))
      commit('RESET_COURSE')
      querySnapShot.forEach((doc)=>{
        console.log(doc.id,'=>',doc.data())
        commit('ADD_COURSE',doc)
      })
    }
  },
  modules: {
  }
})
