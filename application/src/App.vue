<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert>
    <HelloWorld msg="Hello Vue"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

const isServer = () => {
  return !(typeof window !== 'undefined' && window.document)
}

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: () => {
    console.info(
        `isServer: ${isServer()}`)
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
  margin-top: 60px;
}
</style>
