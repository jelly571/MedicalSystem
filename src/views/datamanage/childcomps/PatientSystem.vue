<template>
  <div class='patient-system'>
    <patient-bar>
      <router-view></router-view>
    </patient-bar>
     
  </div>
</template>
  
<script>
  import PatientBar from './PatientBar'
  export default {
    name: "PatientSystem",
    components: {
      PatientBar,
    }
  }
</script>
  
<style scoped>

</style>