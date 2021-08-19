<template>
  <div>
    <b-progress class="mt-2" :max="steps.length" animated>
      <b-progress-bar
        v-for="step in steps"
        :key="step.name"
        :value="step.value"
        :variant="step.color"
      >
      </b-progress-bar>
    </b-progress>
    <slot />
    <div class="mt-5">
      <b-button
        :disabled="currentStep === 0"
        pill
        variant="outline-primary"
        @click="goBack"
      >
        Go Back
      </b-button>
      <b-button
        v-if="currentStep <= 2"
        class="ml-3"
        pill
        variant="outline-success"
        @click="goNext"
      >
        Go Next
      </b-button>
      <b-button
        v-if="currentStep === 3"
        class="ml-3"
        pill
        variant="outline-success"
        @click="upload"
      >
        Upload
      </b-button>
    </div>
  </div>
</template>

<script>
import { steps } from '../../helper.js'

export default {
  computed: {
    steps () {
      return steps
    }
  },
  props: {
    currentStep: {
      type: Number
    }
  },
  methods: {
    goNext () {
      if (this.currentStep >= this.steps.length) return

      this.steps[this.currentStep].value = 1
      this.$emit('go-next')
    },

    goBack () {
      if (this.currentStep <= 0) return

      this.steps[this.currentStep - 1].value = 0
      this.$emit('go-back')
    }
  }
}
</script>
