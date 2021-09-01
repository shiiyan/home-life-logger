<template>
  <div id="app">
    <AppContainer v-if="isFinishedLogin">
      <AppContent v-if="currentUser" :currentUser="currentUser" />
      <LoginPanel v-else />
    </AppContainer>
    <LoadingSpinner v-else />
  </div>
</template>

<script>
import AppContainer from './components/appContainer/AppContainer.vue'
import AppContent from './components/appContent/AppContent.vue'
import LoginPanel from './components/loginPanel/LoginPanel.vue'
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'

const isServer = () => {
  return !(typeof window !== 'undefined' && window.document)
}

export default {
  name: 'HomeLifeLogger',
  components: {
    AppContainer,
    AppContent,
    LoginPanel,
    LoadingSpinner
  },
  data () {
    return {
      currentUser: null,
      isFinishedLogin: false
    }
  },
  async created () {
    console.info(`isServer: ${isServer()}`)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user
      } else {
        this.currentUser = null
      }
      this.isFinishedLogin = true
    })

    const swRegistration = await navigator.serviceWorker.register(
      process.env.VUE_APP_CUSTOM_SUBDIRECTORY
        ? `./firebase-messaging-sw.js`
        : 'firebase-messaging-sw.js'
    )

    firebase
      .messaging()
      .getToken({
        serviceWorkerRegistration: swRegistration,
        vapidKey: process.env.VUE_APP_PUBLIC_VAPID_KEY
      })
      .then((currentToken) => {
        if (currentToken) {
          // console.log('currentToken, ', currentToken)
        } else {
          console.info(
            'No registration token available. Request permission to generate one.'
          )
        }
      })
      .catch((err) => {
        console.error('An error occured while retrieving token. ', err)
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
