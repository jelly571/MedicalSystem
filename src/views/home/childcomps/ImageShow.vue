<template>
  <div class='images'>
    <div><img src="~assets/img/home/medical1.jpg" alt=""></div>
    <div><img src="~assets/img/home/medical2.jpg" alt=""></div>
    <div><img src="~assets/img/home/medical3.jpg" alt=""></div>
    <div><img src="~assets/img/home/medical4.jpg" alt=""></div>
  </div>
</template>
  
<script>
  export default {
    name: "ImageShow"
  }
</script>
  
<style scoped>
  
  .images {
    display: flex;
    margin: 50px 80px 10px;
  }
  .images img {
    width: 100%;
    height: 160px;
  }
</style>
