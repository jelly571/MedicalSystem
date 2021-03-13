<template>
    <div>
      <!-- 导航栏 -->
      <nav-bar></nav-bar>
      <router-view />
      
      
    </div>
    

</template>
    
<script>
  import NavBar from 'components/common/navbar/NavBar'
  
  export default {
    name: "Home",
    components: {
      NavBar,
      
    }
  }
</script>
    
<style scoped>
    
</style>