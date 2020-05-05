<template>
  <div>
    <b-row align-h="center" class="mt-5">
      <img alt="Sleeping" src="../../assets/bed.png" width="40%">
    </b-row>
    <b-row align-h="center" class="h2 mt-5">Input Sleeping Time</b-row>
    <b-row align-h="center" class="mt-5">
      <b-col sm="6">
        <b-form-timepicker v-model="sleepTime" locale="en" placeholder="Sleep Time" now-button reset-button>
        </b-form-timepicker>
      </b-col>
    </b-row>
    <b-row align-h="center" class="h2 mb-0">~</b-row>
    <b-row align-h="center">
      <b-col sm="6">
        <b-form-timepicker v-model="awakeTime" locale="en" placeholder="Awake Time" now-button reset-button>
        </b-form-timepicker>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sleepTime: '',
      awakeTime: ''
    }
  }
}
</script>
