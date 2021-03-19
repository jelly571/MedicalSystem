<template>
  <div class="patientInfo">
    <div class="bar">
      <div class="left-bar">
        <div class="number">
          病人总览 <span>{{total}}</span> 人
        </div>
        <select
          class="patientnum"
          name="patientnum"
          id="patientnum"
          @click="patientSelClick"
        >
          <option value="所有病人">所有病人</option>
          <option
            v-for="(item, index1) in patientname"
            :key="index1"
            :value="item">
            {{ item }}
          </option>
        </select>
        <select class="state" name="state" id="state" @click="stateSelClick">
          <option value="全部状态">全部状态</option>
          <option
            v-for="(item, index2) in patientstate"
            :key="index2"
            :value="item">
            {{ item }}
          </option>
        </select>
        <div class="search">
          <input
            class="search-inp"
            type="text"
            placeholder="查找姓名、编号、就诊卡号、医保卡"/>
          <button class="search-btn" @click="searchClick">
            <img src="~assets/img/datamanage/search.png" alt="" />
          </button>
        </div>
      </div>
      <div class="right-bar">
        <button>导出数据</button>
        <button @click='newClick'>新建档案</button>
      </div>
    </div>

    <div class="patientdata">
      <table class="datalist">
        <tr class="tab-title">
          <td>病例编号</td>
          <td>负责医师</td>
          <td>姓名</td>
          <td>性别</td>
          <td>就诊卡号/医保卡</td>
          <td>年龄</td>
          <td>病人状态</td>
          <td>最近更新时间</td>
          <td></td>
        </tr>
        <tr v-for="(item, index3) in datalist" :key="index3">
          <td>{{ item.id }}</td>
          <td>{{ item.doctor }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sex }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.state }}</td>
          <td>{{ item.date }}</td>
          <td @click="patientItemClick(item)" class="look">查看</td>
        </tr>
      </table>
      <div style='display: flex; justify-content:flex-end; min-width: 600px; margin: 10px 150px 0'>
        <el-pagination
        @current-change='currentChange'
        :page-size="10"
        :pager-count="11"
        layout="prev, pager, next"
        :total="total">
        </el-pagination>
      </div>
      
    </div>
  </div>
</template>
  
<script>
export default {
  name: "PatientInfoList",
  data() {
    return {
      datalist: [],
      patientname: [],
      patientstate: [],
      page: 1,
      total: 0,
    };
  },
  created() {
    this.getPatientData();
  },
  methods: {
    newClick() {
      this.$router.push('/patientnew').catch(err=>err)
      
    },
    getPatientData() {
      this.$axios
        .post("http://10.102.32.67:5000/patientdata", { page: this.page })
        .then((res) => {

          this.total = res.data.total
          this.datalist = res.data.datalist;
        });
    },
    patientSelClick() {
      let set = new Set();
      this.datalist.forEach((item) => {
        set.add(item.name);
      });
      this.patientname = set;
      let selectElem = document.getElementsByClassName("patientnum")[0];
      let trs = document.getElementsByTagName("tr");

      selectElem.onchange = () => {
        for (let i = 1; i < trs.length; i++) {
          trs[i].style.display = "none";
          if (trs[i].children[2].innerHTML === selectElem.value) {
            trs[i].style.display = "";
          }
          if (selectElem.value === "所有病人") {
            trs[i].style.display = "";
          }
        }
      };
    },
    stateSelClick() {
      let set = new Set();
      this.datalist.forEach((item) => {
        set.add(item.state);
      });
      this.patientstate = set;
      let selectElem = document.getElementsByClassName("state")[0];
      let trs = document.getElementsByTagName("tr");

      selectElem.onchange = () => {
        for (let i = 1; i < trs.length; i++) {
          trs[i].style.display = "none";
          if (trs[i].children[6].innerHTML === selectElem.value) {
            trs[i].style.display = "";
          }
          if (selectElem.value === "全部状态") {
            trs[i].style.display = "";
          }
        }
      };
    },
    searchClick() {
      let input = document.getElementsByTagName("input")[0];
      let trs = document.getElementsByTagName("tr");
      for (let i = 1; i < trs.length; i++) {
        trs[i].style.display = "none";
        if (input.value === "") {
          trs[i].style.display = "";
        }
        if (
          input.value === trs[i].children[0].innerHTML ||
          input.value === trs[i].children[2].innerHTML ||
          input.value === trs[i].children[4].innerHTML
        ) {
          trs[i].style.display = "";
        }
      }
    },
    patientItemClick(item) {
      this.$router.push("/patientsystem").catch((err) => err);
      this.$store.commit('changepatientid',item.id)
    },
    currentChange(currentPage) {
      this.page = currentPage
      this.getPatientData();
    }
  },
};
</script>
  
<style scoped>
::-webkit-input-placeholder {
  color: #999;
}
::-moz-placeholder {
  color: #999;
} /*firefox 19+ */
:-ms-input-placeholder {
  color: #999;
} /* ie */

.patientInfo .bar {
  display: flex;
  margin-top: 20px;
  align-items: center;
  height: 30px;
  min-width: 1000px;
}
.right-bar {
  width: 300px;
  padding-left: 50px;
}
.right-bar button {
  margin-right: 20px;
  height: 25px;
  width: 80px;
  border-radius: 25px;
  background-color: #fff;
  border: 1px solid #999;
  outline: none;
  font-size: 13px;
}
.left-bar {
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 80px;
  min-width: 600px;
}
.left-bar select {
  font-size: 13px;
  color: #999;
  border: 1px solid #999;
  height: 28px;
  outline: none;
  margin-left: 30px;
}
.left-bar .number {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.left-bar .number span {
  color: var(--color-high-text);
}
.left-bar .search {
  border: 1px solid #999;
  height: 30px;
  width: 250px;
  padding: 5px;
  display: flex;
  margin-left: 30px;
}
.left-bar .search .search-inp {
  display: block;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 13px;
}
.left-bar .search .search-btn {
  background-color: #fff;
  border: none;
  outline: none;
  height: 100%;
}

.left-bar .search-btn img {
  width: 20px;
  height: 20px;
}
.patientdata{
  margin: auto;
}
.datalist {
  margin: auto;
  border-collapse: collapse;
  margin-top: 20px;
  min-width: 1000px;
}
.datalist tr {
  height: 45px;
  border: 1px solid rgba(100, 100, 100, 0.2);
}
.datalist td:first-child {
  padding-left: 70px;
}
.datalist td:last-child {
  padding-right: 70px;
}
.datalist td {
  font-size: 13px;
  padding: 0 25px;
}
.datalist .look:hover {
  color: var(--color-high-text);
}
.datalist .tab-title {
  background-color: rgba(100, 100, 100, 0.4);
  font-weight: bold;
}
</style>