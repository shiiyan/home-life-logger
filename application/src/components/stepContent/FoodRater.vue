<template>
  <div>
    <b-row align-h="center" class="h2 mt-5">Rate Foods Today</b-row>
    <b-row align-h="center" class="mt-5">
      <b-col sm="6">
        <b-form-rating
          v-model="foodRate"
          variant="warning"
          class="mb-2"
        >
        </b-form-rating>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  computed: {
    foodRate: {
      get: () => store.state.foodRate,
      set: (newValue) => store.commit('updateFoodRate', newValue)
    }
  }
}
</script>
