import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    homecurrentindex: -1,
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
  },

  mutations: {
    indexUpdate(state,payload){
      state.homecurrentindex = payload
    },
    changeLogin (state, user) {
      state.token = user
      sessionStorage.setItem('token', user);
    }

  },

  actions: {

  }

})

export default store