<template>
    <div class='patient-bar'>
    <div class='left-bar'>
      <div class='patient-info'>
        <div>姓名：张三</div>
        <div>性别：男</div>
        <div>年龄：20</div>
        <div>疾病诊断：</div>
        <button>胃癌早期</button>
      </div>
      <div class='info-bar'>
        <div @click='infoClick' :class='{active: currentindex == 0}'>基本信息</div>
        <div @click='diagnosisClick' :class='{active: currentindex == 1}'>辅助诊疗</div>
      </div>
    </div>
    <div class='center-cont'>
      <slot></slot>
    </div>
    <div class='right-bar'>
      <div class='search'>
          <input class='search-inp' type="text" placeholder="查找姓名、就诊卡号" />
          <button class='search-btn'>
            <img src="~assets/img/datamanage/search.png" alt="" />
          </button>
      </div>
      <div class='patient first'>张三</div>
      <div class='patient'>李四</div>
      <div class='patient'>赵五</div>
      <div class='patient'>王六</div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: "PatientBar",
    data() {
      return {
        currentindex: 0
      }
    },
    methods: {
      infoClick() {
        this.$router.replace('/patientdata').catch(err=>err)
        this.currentindex = 0
      },
      diagnosisClick() {
        this.$router.replace('/diagnosis').catch(err=>err)
        this.currentindex = 1
      }
    }
  }
</script>
  
<style scoped>
  .patient-bar {
    display: flex;
    min-height:100vh;
  }
  .left-bar {
    background-color: rgb(230, 230, 230);
    width: 180px;
    border: 1px solid #ddd;
  }
  .left-bar .patient-info {
    background-color: #f5f5f5;
    height: 260px;
    width:  177px;
    padding: 30px;
    font-size: 14px;
    box-shadow: 0px 0px 2px 2px #ccc;
  }
  .left-bar .patient-info div {
    margin-bottom: 30px
  }
  .left-bar .patient-info button {
    width: 60px;
    height: 25px;
    outline: none;
    border-radius: 10px;
    border: 1px solid #999;
    font-size: 13px
  }
  .info-bar {
    margin-top: 30px;
  }
  .info-bar div {
    margin-bottom: 2px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .info-bar .active {
    background-color: #bbb;
  }
  .center-cont {
    background-color: #fff;
    flex: 1;
  }
  .right-bar {
    background-color: #f5f5f5;
    width: 180px;
    box-shadow: 0px 0px 2px 2px #ddd;
  }
  .right-bar .search {
  border: 1px solid #999;
  height: 26px;
  width: 150px;
  padding: 2px;
  display: flex;
  margin: 20px 0 20px 15px;
  background-color: #fff;
}
.right-bar .search .search-inp {
  display: block;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size:12px;
}
.right-bar .search .search-btn {
  background-color: #fff;
  border: none;
  outline: none;
  height: 100%;
}

.right-bar .search-btn img {
  width: 18px;
  height: 18px;
}
.right-bar .patient.first{
  border-top: 1px solid #ddd;
}
.right-bar .patient {
  font-size: 13px;
  height: 35px;
  line-height: 35px;
  padding-left: 30px;
  border-bottom: 1px solid #ddd;
}
</style>