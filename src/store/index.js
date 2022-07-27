import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from '@/firebase/firebase.js'
// import { collection, getDocs } from 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses:[]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    // fetchCourses({commit}){
    //   let querySnapShot = await getDocs(collection(db,'courses'))
    //   querySnapShot.forEach((doc)=>{
    //     console.log(doc.id,=>,)
    //   })
    // }
  },
  modules: {
  }
})
