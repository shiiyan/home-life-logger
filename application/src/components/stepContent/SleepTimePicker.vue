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
        >
        </b-form-timepicker>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  computed: {
    sleepTime: {
      get: () => store.state.sleepingTime.sleepTime,
      set: (newValue) => store.commit('updateSleepTime', newValue)
    },
    awakeTime: {
      get: () => store.state.sleepingTime.awakeTime,
      set: (newValue) => store.commit('updateAwakeTime', newValue)
    }
  }
}
</script>
