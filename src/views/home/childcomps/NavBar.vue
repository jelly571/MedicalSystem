<template>
<div>
  <div class='nav'>
    <div class='left'>
      <img src="~assets/img/home/logo.png" alt="">
      <div class='system' @click='homeClick'>胃窥镜图像疾病分割系统</div>
    </div>
    <div class='center'>
      <div class='title' v-for='(item,index) in title' :key='index'  :class='{active: $store.state.homecurrentindex === index}' @click='navClick(index)'>
        {{item}}
      </div>   
    </div>
    <div class='right' @click='userClick'>
      <img src="~assets/img/home/user.png" alt="">
      <div>用户名</div>
      <div class='down'></div>
    </div>
  </div>
  <div class='user' v-show='isShow'>
    <div>个人信息</div>
    <div class='userleft' @click='userLeft'>退出登录</div>
  </div>
</div>
  
</template>
  
<script>
  export default {
    name: "NavBar",
    data() {
      return {
        title: ['数据管理', '模型管理', '项目进度', '账号管理'],
        url: ['/datamanage','/modelmanage','/project','/accountmanage'],
        isShow: false,

      }
    },
    methods:{
      homeClick() {
        this.$router.replace('/homeinfo').catch(err => err)
        this.$store.commit('indexUpdate',-1)
      },
      navClick(index) {
        this.$store.commit('indexUpdate',index)
        this.$router.replace(this.url[index]).catch(err => err)  
      },
      userClick() {
        this.isShow = !this.isShow
      },
      userLeft() {
        sessionStorage.removeItem('token') 
        this.$router.replace('/login').catch(err=>err)
      }
    }
  }
</script>
  
<style scoped>
  .nav {
    width: 100vw;
    height: 50px;
    background-color: rgba(100, 100, 100);
    display: flex;
    align-items: center;
    color: #fff;
    position: fixed;
    top: 0;
    
  }
  .nav .left {
    width: 400px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .nav .left .system{
    width: 180px;
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
  .nav .center .title {
    width: 100px;
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
  .user{
    width: 120px;
    height: 80px;
    background-color: rgba(100, 100, 100);
    position: fixed;
    top: 50px;
    right: 30px;
    border: 1px solid #999;
    border-top: none;
    color: #fff;
    font-size: 13px;

  }
  .user div {
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  .user div:hover {
    background-color: var(--color-tint);
  }
  .user .userleft {
    border-top: 1px solid #999;
  }
</style>