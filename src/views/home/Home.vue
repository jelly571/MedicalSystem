<template>
    <div id='home'>
      <!-- 导航栏 -->
      <nav-bar></nav-bar>
      <router-view class='content' />
      
      
    </div>
    

</template>
    
<script>
  import NavBar from './childcomps/NavBar'
  
  export default {
    name: "Home",
    components: {
      NavBar,
      
    }
  }
</script>
    
<style scoped>
#home {
  height: 100%;
}
.content {
  padding-top: 50px;
    
}
 
</style>