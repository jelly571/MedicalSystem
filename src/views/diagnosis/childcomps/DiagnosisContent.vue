<template>
  <div class="diagnosiscontent">
    <div class="uploadimg">
      <div><img src="" alt="" /></div>
      <div>请上传患者胃窥镜影像</div>
    </div>
    <div class="predict">
      <div class="select">
        <div>选择模型</div>
        <select name="modelselect" id="modelselect">
          <option value="Unet">Unet</option>
          <option value="Unet">Unet</option>
          <option value="Unet">Unet</option>
        </select>
        <button>预测</button>
      </div>
      <div class="diagnosisresult">
        <div class="result-bar">查看结果</div>
        <div class="result">
          <div class="result-img">
            <img src="" alt="" />
          </div>
          <div class='results'>
            <div class="result-text">
              预测结果：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
            <div class="download">
              一键生成辅助诊疗报告：<button>生成</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "DiagnosisContent",
};
</script>
  
<style scoped>
.diagnosiscontent {
  display: flex;
  height: 300px;
  margin: 0 30px;
}
.uploadimg {
  width: 260px;
  border: 1px dashed #ccc;
  margin-right: 40px;
}
.predict {
  font-size: 14px;
}
.predict .select {
  display: flex;
  height: 40px;
  align-items: center;
}
.predict select {
  height: 25px;
  width: 100px;
  font-size: 13px;
  margin: 0 40px 0 20px;
  outline: none;
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
  width: 220px;
  height: 220px;
  background-color: #ccc;
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