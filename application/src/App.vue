<template>
  <div id="app">
    <b-container fluid="lg">
      <Progress />
    </b-container>
  </div>
</template>

<script>
import Progress from './components/Progress.vue'

const isServer = () => {
  return !(typeof window !== 'undefined' && window.document)
}

export default {
  name: 'App',
  components: {
    Progress
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
