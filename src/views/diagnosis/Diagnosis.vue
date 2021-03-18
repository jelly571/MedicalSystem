<template>
  <div class="center-cont">
    <div class="center-bar">
      <div><span> 数据管理 / </span>智能诊疗</div>
      <div><button @click="newClcik">新建</button></div>
    </div>
    <div>
      <component
        v-for="(item, index) in newName"
        :is="item.name"
        :key="index"
        @deletenewClick="deletenewClick(index)"
        @saveClick="saveClick(index)"
      ></component>
    </div>
    <div>
      <component
        v-for="(item2, index2) in oldName"
        :is="item2.name"
        :key="index2"
        :history="historysave"
      ></component>
    </div>

    <div>
      <diagnosis-history
        v-for="(item3, index3) in historyinfo"
        :key="index3"
        :history="item3"
        @deleteClick='deleteClick(index3)'
      ></diagnosis-history>
    </div>
  </div>
</template>
  
<script>
import DateBar from "./childcomps/DateBar";
import DiagnosisContent from "./childcomps/DiagnosisContent";
import DiagnosisHistory from "./childcomps/DiagnosisHistory";
import DiagnosisNew from "./childcomps/DiagnosisNew";
export default {
  name: "Diagnosis",
  data() {
    return {
      newName: [],
      oldName: [],
      historyinfo: [],
      historysave: {},
    };
  },
  components: {
    DateBar,
    DiagnosisContent,
    DiagnosisHistory,
    DiagnosisNew,
  },
  created() {
    this.$axios
      .post("http://10.102.32.67:5000/diagnosishistory", {
        patientid: this.$store.state.patientid,
      })
      .then((res) => {
        // this.titleImg.imgUrl ='data:;base64,'+  res.data.imgpro
        // this.titleImg.imgPreUrl = 'data:;base64,' + res.data.imgpre
        // this.pretext = res.data.text
        if (res.data == "") return;
        this.historyinfo = res.data;
      });
  },
  methods: {
    newClcik() {
      this.newName.splice(0, 0, {
        name: "DiagnosisNew",
      });
      this.$store.commit('changeSavedisabled', true)
    },

    deletenewClick(index) {
      this.newName.splice(index, 1);
    },
    deleteClick(index) {
      //在服务器上删除
      alert('对不起，您没有权限删除，请联系管理员')
    },
    saveClick(index) {
      this.$axios
        .post("http://10.102.32.67:5000/diagnosissave", {
          patientid: this.$store.state.patientid,
          nowDate: this.$store.state.nowDate,
        })
        .then((res) => {
          this.historysave = res.data[0];
        });

      this.oldName.splice(0, 0, {
        name: "DiagnosisHistory",
      });

      this.deletenewClick(index)
    },
  },
};
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
  color: #999;
}
.center-cont .center-bar button {
  width: 60px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #999;
  font-size: 13px;
  outline: none;
}
</style>