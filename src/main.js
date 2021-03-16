import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
Vue.prototype.$axios = axios;
// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = sessionStorage.getItem('token');
    if (String(token) === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
 
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) {
      config.headers.Authorization = sessionStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });
  
  /*http response 拦截器*/
  axios.interceptors.response.use(
      undefined,
      error => {
          let res = error.response;
          switch (res.status) {
              case 401:
                  console.warn("token 过期重登录!");
                  // this.$router.push('/');
                  break;
              case 403:
                  console.log('您没有该操作权限');
                  break;
              case 500:
                  console.log('服务器错误');
          }
          return Promise.reject(error.response.data);//返回接口返回的错误信息
      });

Vue.config.productionTip = false

Vue.use(Element)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
