<template>
  <Progress
    :current-step="currentStep"
    @go-next="handleGoNext"
    @go-back="handleGoBack"
  >
    <FoodRater v-if="currentStep===0" />
    <SleepTimePicker v-if="currentStep===1" />
    <WorkoutTimeSpinner v-if="currentStep===2" />
    <p class="h1 mt-5" v-if="currentStep===3">Completed!</p>
  </Progress>
</template>

<script>
import Progress from './Progress.vue'
import FoodRater from './form/FoodRater.vue'
import SleepTimePicker from './form/SleepTimePicker.vue'
import WorkoutTimeSpinner from './form/WorkoutTimeSpinner.vue'

export default {
  data () {
    return {
      currentStep: 0
    }
  },
  components: {
    Progress,
    FoodRater,
    SleepTimePicker,
    WorkoutTimeSpinner
  },
  methods: {
    handleGoNext () {
      this.currentStep += 1
    },
    handleGoBack () {
      this.currentStep -= 1
    }
  }
}
</script>
