<template>
  <div>
    <b-row align-h="center" class="h2 mt-5">Select Sleeping Time</b-row>
    <b-row align-h="center" class="mt-5">
      <b-col sm="6">
        <b-form-timepicker
          v-model="sleepTime"
          locale="en"
          placeholder="Sleep Time"
          now-button
          reset-button
          @input="handleInputSleepTime"
        >
        </b-form-timepicker>
      </b-col>
    </b-row>
    <b-row align-h="center" class="h2 mb-0">~</b-row>
    <b-row align-h="center">
      <b-col sm="6">
        <b-form-timepicker
          v-model="awakeTime"
          locale="en"
          placeholder="Awake Time"
          now-button
          reset-button
          @input="handleInputAwakeTime"
        >
        </b-form-timepicker>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  data () {
    return {
      sleepTime: store.state.sleepingTime.sleepTime,
      awakeTime: store.state.sleepingTime.awakeTime
    }
  },
  methods: {
    handleInputSleepTime (newValue) {
      store.commit('updateSleepTime', newValue)
    },
    handleInputAwakeTime (newValue) {
      store.commit('updateAwakeTime', newValue)
    }
  }
}
</script>
