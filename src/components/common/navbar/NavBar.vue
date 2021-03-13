<template>
<div>
  <div class='nav'>
    <div class='left'>
      <img src="~assets/img/home/logo.png" alt="">
      <div @click='homeClick'>胃窥镜图像疾病分割系统</div>
    </div>
    <div class='center'>
      <div class='title' v-for='(item,index) in title' :key='index'  :class='{active: currentIndex === index}' @click='navClick(index)'>
        {{item}}
      </div>   
    </div>
    <div class='right'>
      <img src="~assets/img/home/user.png" alt="">
      <div>用户名</div>
      <div class='down'></div>
    </div>
  </div>
</div>
  
</template>
  
<script>
  export default {
    name: "NavBar",
    data() {
      return {
        currentIndex: -1,
        title: ['数据管理', '模型管理', '项目进度', '账号管理'],
        url: ['/accountmanage','/datamanage','modelmanage','/statistical']

      }
    },
    methods:{
      homeClick() {
        this.$router.replace('/homeinfo').catch(err => err)
        this.currentIndex = -1
      },
      navClick(index) {
        this.currentIndex = index;
      
        this.$router.replace(this.url[index]).catch(err => err)  
      }
    }
  }
</script>
  
<style scoped>
  .nav {
    width: 100vw;
    height: 50px;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    align-items: center;
    color: #fff;
    
  }
  .nav .left {
    width: 400px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .left img {
    width: 25px;
    height: 30px;
    margin-right: 5px;
  }

  .nav .center {
    display: flex;
    width: 100%; 
    justify-content: space-around;
    font-size: 14px;
    padding: 0 50px;

  }

  .nav .center .active {
    color: var(--color-tint);
  }
  
  .nav .right {
    width: 400px;
    line-height: 100%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .right img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .right .down {
    width: 7px;
    height: 7px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(-45deg);
    margin-left: 8px;
  }
</style>