import Vue from 'vue';
import Router from 'vue-router';
const fb = require('./firebaseConfig.js');

import Home from './views/Home.vue';
import Retail from './views/Retail.vue';
import Selfie from './views/Selfie.vue';
import Upload from './views/Upload.vue';
import Demo from './views/Demo.vue';
import Projects from './views/Projects.vue';
import Wheel from './views/Wheel.vue';

Vue.use(Router);

let router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/retail",
      name: "retail",
      component: Retail
    },
    {
      path: "/selfie",
      name: "selfie",
      component: Selfie
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    },
    {
      path: "/demo",
      name: "demo",
      component: Demo
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/wheel",
      name: "wheel",
      component: Wheel
    },
    {
      path: '*',
      redirect: '/home',
    },
  ]
});



export default router;
