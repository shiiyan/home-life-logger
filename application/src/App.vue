<template>
  <div id="app">
<<<<<<< HEAD
    <b-container fluid="lg">
      <Progress />
    </b-container>
=======
    <img alt="Vue logo" src="./assets/logo.png">
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert>
    <HelloWorld msg="Hello Vue"/>
>>>>>>> master
  </div>
</template>

<script>
<<<<<<< HEAD
import Progress from './components/Progress.vue'
=======
import HelloWorld from './components/HelloWorld.vue'
>>>>>>> master

const isServer = () => {
  return !(typeof window !== 'undefined' && window.document)
}

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    Progress
=======
    HelloWorld
>>>>>>> master
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
}
</style>
