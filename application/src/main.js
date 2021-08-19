import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: `${process.env.VUE_APP_PROJECT_ID}.appspot.com`
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
