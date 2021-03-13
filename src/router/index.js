import Vue from 'vue';
import VueRouter from 'vue-router';
import Ping from 'views/login/Ping';
const Login = ()=> import ('views/login/Login');
const Home = ()=> import ('views/home/Home');
const HomeInfo = ()=> import('views/home/childcomps/HomeInfo')
const AccountManage = ()=> import('views/accountmanage/AccountManage')
const DataManage = ()=> import('views/datamanage/DataManage')
const ModelManage = ()=> import('views/modelmanage/ModelManage')
const Statistical = ()=> import('views/statistical/Statistical')

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/ping',
      component: Ping,
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '',
          redirect: '/homeinfo',
        },
        {
          path: '/homeinfo',
          component: HomeInfo,
        },
        {
          path: '/accountmanage',
          component: AccountManage,
        },
        {
          path: '/datamanage',
          component: DataManage,
        },
        {
          path: '/modelmanage',
          component: ModelManage,
        },
        {
          path: '/statistical',
          component: Statistical,
        },
      ]
    },
   
  ],
  mode: 'history',
});
