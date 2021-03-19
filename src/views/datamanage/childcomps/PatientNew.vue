<template>
  <div>
    <div class="info-bar">
      <div><span> 数据管理 / </span>新建档案</div>
      <div>
        <button @click='backClick'>返回</button>
        <button @click='saveClick'>保存</button>
      </div>
    </div>
    <div class='info-content'>
      <div class='title'><span></span>个人信息</div>
      <div class='info'>
        <div class='info-item'>病例编号：<input  type="text" v-model='data.id' name='id' placeholder="单行输入"></div>
        <div class='info-item'>负责医师：<input type="text" v-model='data.doctor' name='doctor' placeholder="单行输入"></div>
        <div class='info-item'>姓名：<input type="text" v-model='data.name' name='name' placeholder="单行输入"></div>
        <div class='info-item'>年龄：<input type="text" v-model='data.age' name='age' placeholder="单行输入"></div>
        <div class='info-item'>性别：
          <select name="sex" id="sex" v-model='data.sex'>
            <option value="男">男</option>
            <option value="女">女</option>
          </select></div>
        <div class='info-item'>就诊卡号/医保号：<input name='number' v-model='data.number' type="text" placeholder="单行输入"></div>
        <div class='info-item'>病人状态：
          <select name="state" id="state" v-model='data.state'>
            <option value="在访">在访</option>
            <option value="康复">康复</option>
            <option value="死亡">死亡</option>
          </select>
        </div>
        <div class='info-item date'>初次就诊时间：<input type="text" v-model='data.date' name='date' placeholder="单行输入"></div>
        <div class='info-item'>初次就诊年龄（岁）：<input name='age' v-model='data.age' type="text" placeholder="单行输入"></div>
        <div class='info-item'>疾病分类：
         <select name="ill" id="ill" v-model='data.ill'>
            <option value="暂无癌变">暂无癌变</option>
            <option value="癌症早期">癌症早期</option>
            <option value="癌症中期">癌症中期</option>
            <option value="癌症晚期">癌症晚期</option>
          </select>
        </div>
      </div>    
      <div class='ill-info'>
        <div>病症描述：</div>
        <textarea name="" id="" cols="120" rows="8" placeholder="多行输入" v-model='data.illinfo' /></div>
      <div class='ill-result'>
        <div>诊疗结果：</div>
        <textarea name="" id="" cols="120" rows="8" placeholder="多行输入" v-model='data.illresult'/></div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: "PatientNew",
  data() {
    return {
      data: {
        id: '',
        name:'',
        doctor:'',
        age: null,
        sex: '',
        number: '',
        state: '',
        date: '',
        ill:'',
        illinfo:'',
        illresult:'',
      }

    }
  },

  methods: {
    backClick() {
      this.$router.replace('/datamanage').catch(err=>err)
   
    },
    saveClick() {
      this.$axios.post('http://10.102.32.67:5000/patientdatanew',{data:this.data}).then(res => {
        if(res.data === '新增成功'){
          this.$router.replace('/datamanage').catch(err=>err)
        }else {
          alert(res.data)
        }
        
      })
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