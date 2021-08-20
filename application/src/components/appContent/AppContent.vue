<template>
  <StepFrame
    :user-name="currentUser.displayName"
    :current-step="currentStep"
    :steps="steps"
    @click-go-next="handleGoNext"
    @click-go-back="handleGoBack"
    @click-upload="handleUpload"
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
import { store } from '../../store.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

const CURRENT_DATE = new Date().toISOString().slice(0, 10)

export default {
  props: {
    currentUser: {
      type: Object,
      required: true
    }
  },
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
    },
    docRef () {
      return firebase.firestore()
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('dailyLogs')
        .doc(CURRENT_DATE)
    }
  },
  created () {
    this.docRef.get().then((doc) => {
      if (doc.exists) {
        store.commit('updateFoodRate', doc.data().foodRating)
        store.commit('updateSleepTime', doc.data().sleepingTime.sleepTime)
        store.commit('updateAwakeTime', doc.data().sleepingTime.awakeTime)
        store.commit('updateWorkoutTime', doc.data().workoutTime)
      }
    })
      .catch((error) => {
        console.error(
          'Error getting document: ', error
        )
      })
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
    },
    handleUpload () {
      this.docRef.set({
        foodRating: store.state.foodRate,
        workoutTime: store.state.workoutTime,
        sleepingTime: store.state.sleepingTime
      })
        .then(() => {
          alert('Upload succeed!')
        })
        .catch((error) => {
          console.error('Error uploading: ', error)
        })
    }
  }
}
</script>
