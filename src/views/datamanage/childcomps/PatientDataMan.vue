<template>
  <div>
    <div class="info-bar">
      <div><span> 数据管理 / </span>基本信息</div>
      <div>
        <button @click='backClick'>返回</button>
        <button>保存</button>
      </div>
    </div>
    <div class='info-content'>
      <div class='title'><span></span>个人信息</div>
      <div class='info'>
        <div class='info-item'>病例编号：<input type="text" name='id' placeholder="单行输入"></div>
        <div class='info-item'>姓名：<input type="text" name='name' placeholder="单行输入"></div>
        <div class='info-item'>年龄：<input type="text" name='age' placeholder="单行输入"></div>
        <div class='info-item'>性别：<input class='radio' name='sex' type="radio"  value='male'> 男 <input class='radio' type="radio" name='sex' value='female'> 女</div>
        <div class='info-item'>就诊卡号/医保号：<input name='number' type="text" placeholder="单行输入"></div>
        <div class='info-item'>病人状态：
          <select name="state" id="state">
            <option value="在访">在访</option>
            <option value="在访">康复</option>
            <option value="在访">死亡</option>
          </select>
        </div>
        <div class='info-item date'><date-select class='date-select' /></div>
        <div class='info-item'>初次就诊年龄（岁）：<input name='age' type="text" placeholder="单行输入"></div>
        <div class='info-item'>疾病分类：
          <select name="state" id="ill">
            <option value="暂无癌变风险">暂无癌变风险</option>
            <option value="胃癌早期">胃癌早期</option>
            <option value="胃癌中期">胃癌中期</option>
            <option value="胃癌晚期">胃癌晚期</option>
          </select>
        </div>
      </div>    
      <div class='ill-info'>
        <div>病症描述：</div>
        <textarea name="" id="" cols="120" rows="8" placeholder="多行输入"/></div>
      <div class='ill-result'>
        <div>诊疗结果：</div>
        <textarea name="" id="" cols="120" rows="8" placeholder="多行输入"/></div>
    </div>
  </div>
</template>
  
<script>
import DateSelect from 'components/common/dateselect/DateSelect'
export default {
  name: "PatientDataMan",
  components: {
    DateSelect
  },
  methods: {
    backClick() {
      this.$router.replace('/patientdata').catch(err=>err)
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
    width: 240px;
    height: 40px;
    line-height: 40px;
    margin-left: 30px;
    margin-bottom: 10px;
    
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
  .ill-info div,
  .ill-result div {
    margin-bottom: 10px;
    
  }
  textarea {
    padding:5px;
  }
</style>