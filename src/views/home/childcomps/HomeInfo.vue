<template>
  <div>
    <!-- 图片展示 -->
      <image-show></image-show>
      <!-- 信息选项 -->
      <info-select></info-select>
  </div>
</template>
  
<script>
import ImageShow from './ImageShow'
  import InfoSelect from './InfoSelect'
  export default {
    name: "HomeInfo",
    components: {
      ImageShow,
      InfoSelect
    }
  }
</script>
  
<style scoped>
  
</style>