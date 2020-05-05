<template>
  <div>
    <b-progress class="mt-2" :max="steps.length" animated>
      <b-progress-bar v-for="step in steps" :key="step.color" :value="step.value" :variant="step.color">
      </b-progress-bar>
    </b-progress>
    <slot />
    <div class="mt-5">
      <b-button
        :disabled="currentStep===0"
        pill
        variant="outline-primary"
        @click="goBack"
      >
        Go Back
      </b-button>
      <b-button class="ml-3" pill variant="outline-success" @click="goNext">Go Next</b-button>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      steps: [
        {
          color: 'success',
          value: 0
        },
        {
          color: 'warning',
          value: 0
        },
        {
          color: 'danger',
          value: 0
        }
      ]
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
