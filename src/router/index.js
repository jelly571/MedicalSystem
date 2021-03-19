import Vue from 'vue';
import VueRouter from 'vue-router';
const Login = ()=> import ('views/login/Login');
const Register = ()=> import ('views/login/Register');
const Home = ()=> import ('views/home/Home');
const HomeInfo = ()=> import('views/home/childcomps/HomeInfo')
const AccountManage = ()=> import('views/accountmanage/AccountManage')
const DataManage = ()=> import('views/datamanage/DataManage')
const ModelManage = ()=> import('views/modelmanage/ModelManage')
const PatientData = ()=> import('views/datamanage/childcomps/PatientData')
const PatientDataMan = ()=> import('views/datamanage/childcomps/PatientDataMan')
const Diagnosis = ()=> import('views/diagnosis/Diagnosis')
const PatientSystem = ()=> import('views/datamanage/childcomps/PatientSystem')
const PatientNew = ()=> import('views/datamanage/childcomps/PatientNew')
const Project = ()=> import('views/project/Project')
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
      path: '/register',
      component: Register,
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
          path: '/modelmanage',
          component: ModelManage,
        },
        {
          path: '/datamanage',
          component: DataManage,
        },
        {
          path: '/patientnew',
          component: PatientNew
        },
        {
          path: '/patientsystem',
          component: PatientSystem,
          children: [
            {
              path: '',
              redirect: '/patientdata',
            },
            {
              path: '/patientdataman',
              component: PatientDataMan,
            },
            {
              path: '/patientdata',
              component: PatientData,
            },
            {
              path: '/diagnosis',
              component: Diagnosis,
            },
          ]
        },
        
        {
          path: '/project',
          component: Project,
        },
      ]
    },
   
  ],
  mode: 'history',
});
