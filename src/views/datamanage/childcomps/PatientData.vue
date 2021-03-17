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
        <div class='info-item'>病例编号：{{datainfo.id}}</div>
        <div class='info-item'>姓名：{{datainfo.name}}</div>
        <div class='info-item'>年龄：{{datainfo.age}}</div>
        <div class='info-item'>性别：{{datainfo.sex}}</div>
        <div class='info-item'>就诊卡号/医保号：{{datainfo.number}}</div>
        <div class='info-item'>病人状态：{{datainfo.state}}</div>
        <div class='info-item'>初次就诊时间：{{datainfo.date}}</div>
        <div class='info-item'>初次就诊年龄（岁）：{{datainfo.age}}</div>
        <div class='info-item'>疾病分类：{{datainfo.ill}}</div>
      </div>    
      <div class='ill-info'>
        <div style='margin: 5px 0'>病症描述：</div>
        <div style='line-height: 2'>{{datainfo.illinfo}}</div>
      </div>
      <div class='ill-result'>
        <div style='margin: 5px 0'>诊疗结果：</div>
        <div style='line-height: 2'>{{datainfo.illresult}}</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import DateSelect from 'components/common/dateselect/DateSelect'
export default {
  name: "PatientData",
  data() {
    return {
      datainfo:{}
    }
  },
  components: {
    DateSelect
  },
  created() {
    this.getPatientDetail()
  },
  methods:{
    getPatientDetail() {
      this.$axios
        .post("http://10.102.32.67:5000/patientdata", {patientid: sessionStorage.getItem('patientid')})
        .then((res) => { 
          this.datainfo = res.data
        });
  
    },
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
    margin-top: 10px;
    width: 240px;
    height: 30px;
    margin-left: 30px;
    margin-bottom: 5px;
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