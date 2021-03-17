import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    homecurrentindex: -1,
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
    patientid: sessionStorage.getItem('patientid') ? sessionStorage.getItem('patientid') : '0000',
  },

  mutations: {
    indexUpdate(state,payload){
      state.homecurrentindex = payload
    },
    changeLogin (state, user) {
      state.token = user
      sessionStorage.setItem('token', user);
    },
    changepatientid(state, id) {
      state.patientid = id
      sessionStorage.setItem('patientid',id)
    }

  },

  actions: {

  }

})

export default store