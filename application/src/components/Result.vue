<template>
  <div>
    <b-row align-h="center" class="h2 mt-5">Today's Results</b-row>
    <b-row align-h="center" class="mt-5">
      <b-col sm="6">
        <b-list-group>
          <b-list-group-item
            v-for="step in steps"
            :key="step.name"
            :variant="step.color"
          >
            {{ step.name }}: {{ result[step.name] }}
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <b-row align-h="center" class="h2 mt-5">Upload?</b-row>
  </div>
</template>

<script>
import { steps, stepNames } from '../helper.js'
import { store } from '../store.js'

export default {
  computed: {
    steps () {
      return steps
    },
    result () {
      return {
        [stepNames.foodRating]:
          store.state.foodRate,
        [stepNames.sleepingTime]:
          `${store.state.sleepingTime.sleepTime} ~ ${store.state.sleepingTime.awakeTime}`,
        [stepNames.workoutTime]:
          store.state.workoutTime
      }
    }
  }
}
</script>
