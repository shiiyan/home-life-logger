<template>
  <div>
    <b-progress class="mt-2" :max="steps.length" animated>
      <b-progress-bar v-for="step in steps" :key="step.color" :value="step.value" :variant="step.color">
      </b-progress-bar>
    </b-progress>
    <b-button-group class="mt-3">
      <b-button  @click="goBack">Go Back</b-button>
      <b-button  @click="goNext">Go Next</b-button>
    </b-button-group>
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
      ],
      currentStep: 0
    }
  },
  methods: {
    goNext () {
      this.steps[this.currentStep].value = 1
      this.currentStep += 1
    },

    goBack () {
      this.currentStep -= 1
      this.steps[this.currentStep].value = 0
    }
  }
}
</script>
