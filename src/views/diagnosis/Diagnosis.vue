<template>
    <div class='center-cont'>
      <div class='center-bar'>
        <div ><span> 数据管理 / </span>智能诊疗</div>
        <div><button>新建</button></div>
      </div>

      <div>
        <date-bar><div>2019-7-20</div></date-bar>
        <diagnosis-content></diagnosis-content>
      </div>
      <div>
        <date-bar><div>2020-1-10</div></date-bar>
        <diagnosis-content></diagnosis-content>
      </div>
      <div>
        <date-bar><div>2021-2-3</div></date-bar>
        <diagnosis-content></diagnosis-content>
      </div>
      <div>
        <date-bar><div>2021-3-10</div></date-bar>
        <diagnosis-content></diagnosis-content>
      </div>
      
    </div>

</template>
  
<script>
import DateBar from './childcomps/DateBar'
import DiagnosisContent from './childcomps/DiagnosisContent'
  export default {
    name: "Diagnosis",
    components: {
      DateBar,
      DiagnosisContent,
    }
  }
</script>
  
<style scoped>
  .center-cont {
    background-color: #fff;
  }
  .center-cont .center-bar {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    height: 50px;
    border-bottom: 2px solid #ddd;
    align-items: center;
    font-size: 14px;
    margin-bottom: 30px;
  }
  .center-cont .center-bar span {
    color:#999
  }
  .center-cont .center-bar button{
    width: 60px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #999;
    font-size: 13px;
    outline: none;
  }
 
</style>