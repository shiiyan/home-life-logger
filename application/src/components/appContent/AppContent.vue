<template>
  <StepFrame
    :current-step="currentStep"
    :steps="steps"
    @click-go-next="handleGoNext"
    @click-go-back="handleGoBack"
  >
    <FoodRater v-if="isVisibleFoodRater" />
    <SleepTimePicker v-else-if="isVisibleSleepTimePicker" />
    <WorkoutTimeSpinner v-else-if="isVisibleWorkoutTimeSpinner" />
    <Result :steps="steps" v-else/>
  </StepFrame>
</template>

<script>
import StepFrame from '../stepFrame/StepFrame.vue'
import FoodRater from '../stepContent/FoodRater.vue'
import SleepTimePicker from '../stepContent/SleepTimePicker.vue'
import WorkoutTimeSpinner from '../stepContent/WorkoutTimeSpinner.vue'
import Result from '../stepContent/Result.vue'
import { stepNames } from '../../variables.js'

export default {
  data () {
    return {
      currentStep: 0,
      steps: [
        {
          name: stepNames.sleepingTime,
          color: 'success',
          value: 0
        },
        {
          name: stepNames.workoutTime,
          color: 'danger',
          value: 0
        },
        {
          name: stepNames.foodRating,
          color: 'warning',
          value: 0
        }

      ]
    }
  },
  components: {
    StepFrame,
    FoodRater,
    SleepTimePicker,
    WorkoutTimeSpinner,
    Result
  },
  computed: {
    isVisibleFoodRater () {
      return this.steps[this.currentStep]?.name === stepNames.foodRating
    },
    isVisibleSleepTimePicker () {
      return this.steps[this.currentStep]?.name === stepNames.sleepingTime
    },
    isVisibleWorkoutTimeSpinner () {
      return this.steps[this.currentStep]?.name === stepNames.workoutTime
    }
  },
  methods: {
    handleGoNext () {
      if (this.currentStep >= this.steps.length) return

      this.steps[this.currentStep].value = 1
      this.currentStep += 1
    },
    handleGoBack () {
      if (this.currentStep <= 0) return

      this.steps[this.currentStep - 1].value = 0
      this.currentStep -= 1
    }
  }
}
</script>
