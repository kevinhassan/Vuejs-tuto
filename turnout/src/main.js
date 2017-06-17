import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebase' // importer dans un objet

Vue.use(VueRouter)

import Dasboard from './components/Dashboard.vue'
import SignIn from './components/Signin.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path : '/dashboard',component: Dasboard},
    {path : '/signin',component: SignIn}
  ]
})

firebaseApp.auth().onAuthStateChanged(user=>{
  if(user){
    router.push('/dashboard')
  }else{
    router.replace('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
