<template>
  <div>
    <div class="datebar">
      <div class="date">
        <div class="icon"></div>
        <div>{{nowDate}}</div>
      </div>
      <div @click="deletenewClick">
        <img src="~assets/img/diagnosis/delete.png" alt="" />
      </div>
    </div>
    <diagnosis-content></diagnosis-content>
  </div>
</template>
  
<script>
import DiagnosisContent from "./DiagnosisContent";
export default {
  name: "DiagnosisNew",
  components: {
    DiagnosisContent,
  },
  data() {
    return {
      nowDate: ''
    }
  },
  created(){
    this.getDate()
  },
  methods: {
    deletenewClick() {
      this.$emit("deletenewClick");
    },
    getDate() {
      let date = new Date();
      let dateYear = date.getFullYear();             //获取年 
      let dateMonth = date.getMonth() + 1;               //获取月  
      let dateDate = date.getDate();                 //获取当日
      let dateHours = date.getHours();               //获取小时
      let dateMinutes = date.getMinutes();           //获取分钟
      let dateSeconds = date.getSeconds();           //获取秒
      this.nowDate = '' + dateYear +'-'+ dateMonth  +'-'+  dateDate  +' '+  dateHours +':'+  dateMinutes +':'+ dateSeconds
    },
  }
};
</script>
  
<style scoped>
.datebar {
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  margin: 10px 30px;
  font-size: 13px;
  border: 1px solid #ccc;
}
.datebar .date {
  display: flex;
  align-items: center;
}
.datebar .icon {
  width: 8px;
  height: 8px;
  border-left: 2px solid #999;
  border-bottom: 2px solid #999;
  transform: rotate(-45deg);
  margin-right: 10px;
}

.datebar img {
  width: 15px;
}
</style>