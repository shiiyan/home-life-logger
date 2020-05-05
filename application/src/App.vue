<template>
  <div id="app">
    <Container>
      <Progress>
        <SleepTimePicker />
      </Progress>
    </Container>
  </div>
</template>

<script>
import Container from './components/Container.vue'
import Progress from './components/Progress.vue'
import SleepTimePicker from './components/form/SleepTimePicker.vue'

const isServer = () => {
  return !(typeof window !== 'undefined' && window.document)
}

export default {
  name: 'App',
  components: {
    Container,
    Progress,
    SleepTimePicker
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
