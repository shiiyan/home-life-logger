<template>
  <ProgressShell
    :current-step="currentStep"
    @go-next="handleGoNext"
    @go-back="handleGoBack"
  >
    <FoodRater v-if="currentStep===0" />
    <SleepTimePicker v-if="currentStep===1" />
    <WorkoutTimeSpinner v-if="currentStep===2" />
    <Result v-if="currentStep===3" />
  </ProgressShell>
</template>

<script>
import ProgressShell from './ProgressShell.vue'
import FoodRater from './form/FoodRater.vue'
import SleepTimePicker from './form/SleepTimePicker.vue'
import WorkoutTimeSpinner from './form/WorkoutTimeSpinner.vue'
import Result from './Result.vue'

export default {
  data () {
    return {
      currentStep: 0
    }
  },
  components: {
    ProgressShell,
    FoodRater,
    SleepTimePicker,
    WorkoutTimeSpinner,
    Result
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
