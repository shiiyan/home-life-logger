<template>
  <div>
    <b-row align-h="center" class="h2 mt-5">Rate Foods Today</b-row>
    <b-row align-h="center" class="mt-5">
      <b-col sm="6">
        <b-form-rating
          v-model="foodRate"
          variant="warning"
          class="mb-2"
          @change="handleChange"
        >
        </b-form-rating>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  data () {
    return {
      foodRate: store.state.foodRate
    }
  },
  methods: {
    handleChange (newValue) {
      store.commit('updateFoodRate', newValue)
    }
  }
}
</script>
