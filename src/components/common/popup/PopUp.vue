<template>
  <div class="popup" v-show='isShow'>
    <div class='text'><slot>{{message}}</slot></div>
    <div class='btn'><button class='yes' @click="yesClick">确定</button><button class='no' @click="noClick">取消</button></div>
  </div>
</template>
  
<script>
  export default {
    name: "PopUp",
    props:{
        isShow: {
          type: Boolean,
          default() {
            return false
          } 
        }
    },
    data(){
      return {
        message: '确认删除吗？',
      }
    },
    methods:{
      yesClick() {
        this.$emit('yesClick')
      },
      noClick() {
        this.$emit('noClick')
      }
    }
    
  }
</script>
  
<style scoped>
  .popup{
    width: 200px;
    height: 150px;
    
    left: 50%;
    top: 50%;
    position: fixed;
    box-shadow: 0 0 5px #999;
    border-radius: 5px;
    background-color: #fff;
    color:#333;
    

    transform: translate(-50%, -50%);
    font-size: 14px;
    z-index: 999;

    padding:8px;
  }
  .text {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .btn button{
    width: 50px;
    font-size: 13px;
     margin-left: 30px;
    
  }
  .no {
    margin-right: 20px;
  }
</style>