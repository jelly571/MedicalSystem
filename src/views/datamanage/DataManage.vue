<template>
  <div>
    <patient-info-list></patient-info-list>
  </div>
</template>
  
<script>
import PatientInfoList from './childcomps/PatientInfoList'
  export default {
    name: "DataManage",
    components: {
      PatientInfoList,
    }
  }
</script>
  
<style scoped>
  
</style>