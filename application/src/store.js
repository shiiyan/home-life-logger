import Vue from 'vue'

const createStore = ({ state, mutations }) => {
  return new Vue({
    data () {
      return { state }
    },
    methods: {
      commit (mutationName, newValue) {
        mutations[mutationName](this.state, newValue)
      }
    }
  })
}

export const store = createStore({
  state: {
    foodRate: 0,
    sleepingTime: {
      sleepTime: '',
      awakeTime: ''
    },
    workoutTime: 0
  },
  mutations: {
    updateFoodRate (state, newFoodRate) {
      state.foodRate = newFoodRate
    },
    updateSleepTime (state, newSleepTime) {
      state.sleepingTime.sleepTime = newSleepTime
    },
    updateAwakeTime (state, newAwakeTime) {
      state.sleepingTime.awakeTime = newAwakeTime
    },
    updateWorkoutTime (state, newWorkoutTime) {
      state.workoutTime = newWorkoutTime
    }
  }
})
