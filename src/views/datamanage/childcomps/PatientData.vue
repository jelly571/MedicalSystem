<template>
  <div>
    <div class="info-bar">
      <div><span> 数据管理 / </span>基本信息</div>
      <div>
        <button @click='editClick'>编辑</button>
      </div>
    </div>
    <div class='info-content'>
      <div class='title'><span></span>个人信息</div>
      <div class='info'>
        <div class='info-item'>病例编号：16000000</div>
        <div class='info-item'>姓名：张三</div>
        <div class='info-item'>年龄：20</div>
        <div class='info-item'>性别：男</div>
        <div class='info-item'>就诊卡号/医保号：2019242255</div>
        <div class='info-item'>病人状态：在访</div>
        <div class='info-item'>初次就诊时间：2017-09-23</div>
        <div class='info-item'>初次就诊年龄（岁）：19</div>
        <div class='info-item'>疾病分类：暂无癌变风</div>
      </div>    
      <div class='ill-info'>
        <div>病症描述：</div>
        <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
      <div class='ill-result'>
        <div>诊疗结果：</div>
        <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import DateSelect from 'components/common/dateselect/DateSelect'
export default {
  name: "PatientData",
  components: {
    DateSelect
  },
  methods:{
    editClick() {
      this.$router.replace('/patientdataman')
    }
  }
};
</script>
  
<style scoped>

.info-bar {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    height: 50px;
    border-bottom: 2px solid #ddd;
    align-items: center;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .info-bar span {
    color:#999
  }
  .info-bar button{
    width: 60px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #999;
    font-size: 13px;
    outline: none;
    margin-left:10px;
  }
  .info-content {
    padding:0 10px;
  }
  .info-content .title {
    height: 30px;
    margin-bottom: 20px;
  }
  .info-content .title span {
    vertical-align: middle;
    display: inline-block;
    width: 5px;
    height: 25px;
    background-color: var(--color-tint);
    margin-right: 10px;
  }
  .info-content .info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 13px;
    
  }
  .info-content .info-item {
    margin-top: 8px;
    width: 240px;
    height: 40px;
    margin-left: 30px;
    margin-bottom: 4px;
  }
  .info-content .info-item input
  {
    width: 110px;
    height: 30px;
    border:1px solid #ddd;
    padding: 0 3px;
  }
  .info-content .info-item select {
    width: 110px;
    height: 30px;
    border:1px solid #ddd;
    padding: 0 3px;
  }
  .info-content .info-item .radio {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  .ill-result {
    margin-top: 20px
  }
  .ill-info,
  .ill-result {
    font-size: 13px;

    margin-left: 30px;
  }


</style>