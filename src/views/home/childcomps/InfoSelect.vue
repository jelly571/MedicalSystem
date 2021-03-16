<template>
  <div class="info">
    <div class="infoitem" v-for="(item, index) in info" :key="index" :class="item.class" @click='itemClick(index)'>
      <div class="title">
        <img :src="item.imgurl" alt="" />
        <span>{{ item.title }}</span>
      </div>
      <div class="detail">{{ item.detail }}</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "InfoSelect",
  data() {
    return {
      info: [
        {
          imgurl: require("assets/img/home/info1.png"),
          title: "病人列表",
          detail: "患者概览、疾病类型、患者状态",
          class: "patient",
        },
        {
          imgurl: require("assets/img/home/info2.png"),
          title: "统计分析",
          detail: "患者概览、疾病类型、患者状态",
          class: "analysis",
        },
        {
          imgurl: require("assets/img/home/info3.png"),
          title: "智能诊疗",
          detail: "患者概览、疾病类型、患者状态",
          class: "diagnosis",
        },
        {
          imgurl: require("assets/img/home/info4.png"),
          title: "趋势预测",
          detail: "患者概览、疾病类型、患者状态",
          class: "trend",
        },
        {
          imgurl: require("assets/img/home/info5.png"),
          title: "个人信息",
          detail: "患者概览、疾病类型、患者状态",
          class: "profile",
        },
        {
          imgurl: require("assets/img/home/info6.png"),
          title: "账号管理",
          detail: "患者概览、疾病类型、患者状态",
          class: "account",
        },
      ],
    };
  },
  methods: {
    itemClick(index) {
      if(index == 0) {
        this.$store.commit('indexUpdate',index)
        this.$router.replace('/datamanage').catch(err=>err)
      }
    }
  }
 
};
</script>
  
<style scoped>
.info {
  display: flex;
  /* 换行 */
  flex-wrap: wrap;
  
  justify-content: center;
}
.infoitem {
  background-color: var(--color-tint);
  opacity:0.9;
  width: 290px;
  height: 130px;
  border-radius: 10px;
  color: #fff;
  margin: 40px 25px 0 25px;
  text-align: center;
}
.analysis,
.trend {
  background-color: rgba(0, 0, 0);
  opacity:0.5;
}
.diagnosis,
.profile {
  background-color: rgb(100, 128, 206);
  opacity:0.8;
}
.infoitem .title {
  height: 50px;
  line-height: 50px;
  margin: 15px 0 15px;
}
.infoitem .title img {
  width: 30px;
  vertical-align: middle;
  margin-right: 30px;
}

.infoitem .title span {
  font-size: 22px;
}

.infoitem .detail {
  font-size: 13px;
}
</style>