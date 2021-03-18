<template>
  <div v-if='Object.keys(history).length !==0'>
      <date-bar @deleteClick="deleteClick()"><div>{{history.date}}</div></date-bar>
      <div class="diagnosiscontent">
        <div class="uploadimg">
          <div class="imagearea"><img :src="'data:;base64,' + history.imgpro" alt="" /></div>
        </div>
        <div class="predict">
          <div class="select">
            <div>选择模型：Unet</div>
          </div>
          <div class="diagnosisresult">
            <div class="result-bar">预测结果</div>
            <div class="result">
              <div class="result-img">
                <img :src="'data:;base64,' + history.imgpre" alt="" />
              </div>
              <div class="results">
                <div class="result-text">预测结果：{{ history.text }}</div>
                <div class="download">
                  一键生成辅助诊疗报告：<button>生成</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
  
<script>
import DateBar from "./DateBar";
export default {
  name: "DiagnosisHistory",
  props:{
    history: {
      type: Object,
      default: {}
    }
  },
  components: {
    DateBar,
  },
  
  methods: {
    deleteClick() {
      this.$emit('deleteClick')
    }
  },
};
</script>
  
<style scoped>
.diagnosiscontent {
  display: flex;
  height: 300px;
  margin: 0 30px;
  align-items: center;
  margin-bottom: 30px;
}
.uploadimg {
  width: 260px;
  border: 1px dashed #ccc;
  margin-right: 40px;
  margin-top: 20px;
  text-align: center;
  font-size: 13px;
  height: 260px;
}

.uploadimg .imagearea {
  width: 200px;
  height: 200px;
  margin: 30px auto 15px;
  border: 1px solid #999;
}
.uploadimg .imagearea img {
  width: 100%;
  height: 100%;
}
.predict {
  font-size: 14px;
}
.predict .select {
  height: 30px;
}

.predict button {
  height: 25px;
  width: 50px;
  background-color: var(--color-tint);
  border: none;
  outline: none;
  color: #fff;
}
.predict .diagnosisresult {
  border: 2px solid #ddd;
  height: 260px;
  width: 540px;
  font-size: 13px;
}
.predict .result-bar {
  height: 25px;
  line-height: 25px;
  border-bottom: 2px solid #ddd;
  font-size: 13px;
  padding: 0 5px;
}
.predict .result {
  display: flex;
  align-items: center;
}
.predict .result-text {
  height: 180px;
  word-break: break-all;
  padding: 30px;
  word-break: hidden;
}
.predict .result-img {
  width: 200px;
  height: 200px;
  margin-left: 10px;
  border: 1px solid #999;
}
.predict .result-img img {
  width: 100%;
  height: 100%;
}
.predict .results {
  flex: 1;
}
.predict .download {
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
}
</style>