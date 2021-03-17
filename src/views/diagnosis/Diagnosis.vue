<template>
    <div class='center-cont'>
      <div class='center-bar'>
        
        <div ><span> 数据管理 / </span>智能诊疗</div>
        <div><button @click='newClcik'>新建</button></div>
      </div>
      <component
        v-for="(item,index) in comName"
        :is="item.name"
        :key="index"
        @deletenewClick='deletenewClick(index)'></component>

      <!-- <div>
        <date-bar><div>2019-7-20</div></date-bar>
        <diagnosis-content></diagnosis-content>
      </div> -->
      <div>
        <diagnosis-history></diagnosis-history>
      </div>
      
    </div>

</template>
  
<script>
import DateBar from './childcomps/DateBar'
import DiagnosisContent from './childcomps/DiagnosisContent'
import DiagnosisHistory from './childcomps/DiagnosisHistory'
import DiagnosisNew from './childcomps/DiagnosisNew'
  export default {
    name: "Diagnosis",
    data() {
      return {
        comName: []
      }
      
    },
    components: {
      DateBar,
      DiagnosisContent,
      DiagnosisHistory,
      DiagnosisNew,
  
    },

    methods: {
      newClcik() {
        this.comName.splice(0,0,{
        name: "DiagnosisNew"
        });
      },

      deletenewClick(index) {
        this.comName.splice(index, 1);
      },
      deleteClick() {

      }
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