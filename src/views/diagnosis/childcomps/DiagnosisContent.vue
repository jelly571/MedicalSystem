<template>
  <div class="diagnosiscontent">
    <div class="uploadimg">
      <div class='imagearea'><img :src="titleImg.imgUrl" alt="" /></div>
      <div>请上传患者胃窥镜影像</div>
      <input name='imgpro' class='fileupload' type="file" @change='imgUpload'/>
    </div>
    <div class="predict">
      <div class="select">
        <div>选择模型</div>
        <select name="modelselect" id="modelselect">
          <option value="Unet">Unet</option>
          <option value="Unet">TCSM</option>
          <option value="Unet">Multi-transform</option>
        </select>
        <button @click='preClick' class='prebtn'>预测</button>
        <pop-up :isShow='isPopShow' @yesClick='yesClick' @noClick='noClick'></pop-up>
      </div>
      <div class="diagnosisresult">
        <div class="result-bar">查看结果</div>
        <div class="result">
          <div class="result-img">
            <img :src="titleImg.imgPreUrl" alt="" />
          </div>
          <div class='results'>
            <div class="result-text">
              预测结果：{{pretext}}
            </div>
            <div class="download">
              一键生成辅助诊疗报告：<button class='produce'>生成</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import PopUp from 'components/common/popup/PopUp'
export default {
  name: "DiagnosisContent",
  components: {
    PopUp,
  },
  data() {
    return {
      titleImg: {
        imgUrl: require('@/assets/img/diagnosis/upload.png'),
        imgPreUrl: require('@/assets/img/diagnosis/result.png'),
      },
      pretext: '',
      flagpre: false,
      isPopShow: false,
      isPre: false,
    }
  },
  methods: {
    
    noClick() {
      this.isPopShow = false
      this.isPre = false
    },
    yesClick() {
      this.isPopShow = false
      this.isPre = true
      this.getPreData()
    },
    imgUpload(e) {
      //当前事件的源target：firefox srcElement:ie
      let $target = e.target || e.srcElement
      let file = $target.files[0];
      //FileReader对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
      //onload文件读取成功完成时触发
      var reader = new FileReader();
      if(!file) return ;
      //readAsDataURL方法会读取指定的blod或file对象，读取操作完成后，会触发loadend事件
      //同时result属性将包含一个data：url格式的字符串（base 64编码）用来表示所读取文件的内容。
      reader.readAsDataURL(file); 
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        //result为DataURL, DataURL（base64编码的字符串）可直接赋值给img.src
        //传给后端服务器
        
        //传入服务器保存
        
        let result =res.result.replace(/data:image\/png;base64,/ig, '')
        this.$axios.post('http://10.102.32.67:5000/diagnosis',{urlpro: result,patientid: sessionStorage.getItem('patientid')}).then(res => {
          this.titleImg.imgUrl = 'data:;base64,' + res.data
          this.flagpre = true
        })
      }
      
      
    },
    getPreData() {
      let prebtn = document.getElementsByClassName("prebtn")[0]
      let fileupload = document.getElementsByClassName("fileupload")[0]
      let produce = document.getElementsByClassName("produce")[0]
      if(!this.flagpre) return;
      prebtn.disabled=true;
      fileupload.disabled=true;
      produce.disabled=true;
      produce.style.backgroundColor = '#999'
      prebtn.style.backgroundColor = '#999'
      prebtn.innerHTML = '预测中'
      this.$axios.post('http://10.102.32.67:5000/diagnosis',{urlpro:'',patientid: sessionStorage.getItem('patientid')}).then(res => {
          this.titleImg.imgPreUrl = 'data:;base64,' + res.data.img
          this.pretext = res.data.text
          prebtn.disabled=false;
          fileupload.disabled=false;
          produce.disabled=false;
          prebtn.style.backgroundColor = 'var(--color-tint)'
          produce.style.backgroundColor = 'var(--color-tint)'
          prebtn.innerHTML = '重新预测'
          
        })
    },
    preClick() {
      let prebtn = document.getElementsByClassName("prebtn")[0]
      if(prebtn.innerHTML == '重新预测') {
        this.isPopShow = true
        if(!this.ispre) return;
      }
      this.getPreData()
      
    }
  }
};
</script>
  
<style scoped>
.diagnosiscontent {
  display: flex;
  height: 300px;
  margin: 0 30px;
  margin-bottom: 30px;
}
.uploadimg {
  width: 260px;
  border: 1px dashed #ccc;
  margin-right: 40px;
  text-align: center;
  font-size: 13px;
}
.uploadimg .fileupload {
  margin: auto;
  margin-top: 5px;
  width: 140px;
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
  width: 80px;
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