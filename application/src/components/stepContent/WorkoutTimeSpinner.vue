<template>
  <div>
    <b-row align-h="center" class="h2 mt-5">Spin Workout Time (min)</b-row>
    <b-row align-h="center" class="mt-5">
      <b-col sm="6">
        <b-form-spinbutton
          v-model="workoutTime"
          min="0"
          max="200"
          @change="handleChange"
        >
        </b-form-spinbutton>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  data () {
    return {
      workoutTime: store.state.workoutTime
    }
  },
  methods: {
    handleChange (newValue) {
      store.commit('updateWorkoutTime', newValue)
    }
  }
}
</script>
