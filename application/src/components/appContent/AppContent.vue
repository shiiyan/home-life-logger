<template>
  <StepFrame
    :current-step="currentStep"
    @go-next="handleGoNext"
    @go-back="handleGoBack"
  >
    <FoodRater v-if="currentStep === 0" />
    <SleepTimePicker v-if="currentStep === 1" />
    <WorkoutTimeSpinner v-if="currentStep === 2" />
    <Result v-if="currentStep === 3" />
  </StepFrame>
</template>

<script>
import StepFrame from '../stepFrame/StepFrame.vue'
import FoodRater from '../stepContent/FoodRater.vue'
import SleepTimePicker from '../stepContent/SleepTimePicker.vue'
import WorkoutTimeSpinner from '../stepContent/WorkoutTimeSpinner.vue'
import Result from '../stepContent/Result.vue'

export default {
  data () {
    return {
      currentStep: 0
    }
  },
  components: {
    StepFrame,
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
