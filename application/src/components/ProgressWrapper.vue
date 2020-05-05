<template>
  <Progress>
    <FoodRater />
    <SleepTimePicker />
    <WorkoutTimeSpinner />
  </Progress>
</template>

<script>
import Progress from './components/Progress.vue'
import FoodRater from './components/FoodRater.vue'
import SleepTimePicker from './components/form/SleepTimePicker.vue'
import WorkoutTimeSpinner from './components/form/WorkoutTimeSpinner.vue'

const isServer = () => {
  return !(typeof window !== 'undefined' && window.document)
}

export default {
  name: 'App',
  components: {
    Progress,
    FoodRater,
    SleepTimePicker,
    WorkoutTimeSpinner
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
