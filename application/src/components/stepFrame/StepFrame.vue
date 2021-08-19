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
        :disabled="isDisableGoBackButton"
        pill
        variant="outline-primary"
        @click="goBack"
      >
        Go Back
      </b-button>
      <b-button
        v-if="isVisibleGoNextButton"
        class="ml-3"
        pill
        variant="outline-success"
        @click="goNext"
      >
        Go Next
      </b-button>
      <b-button
        v-if="isVisibleUploadButton"
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
export default {
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    steps: {
      type: Array,
      required: true
    }
  },
  computed: {
    isDisableGoBackButton () {
      return this.currentStep === 0
    },
    isVisibleGoNextButton () {
      return this.currentStep < this.steps.length
    },
    isVisibleUploadButton () {
      return this.currentStep === this.steps.length
    }
  },
  methods: {
    goNext () {
      this.$emit('click-go-next')
    },

    goBack () {
      this.$emit('click-go-back')
    },
    upload () {
      // Todo: fix for real upload
      alert('upload succeed!')
    }
  }
}
</script>
