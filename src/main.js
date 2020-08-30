import Vue from 'vue'
import App from './App.vue'
import router from './router'
import utilities from './utilities/utility';
import './registerServiceWorker';
import fb from './firebaseConfig.js';
import JQuery from 'jquery';
import $ from 'jquery';

import { firestorePlugin } from 'vuefire';
window.$ = window.jQuery = require('jquery');

//Vue.mixin( utilities.mixin());
Vue.use(require('vue-moment'));
Vue.use(firestorePlugin);
Vue.mixin(utilities.mixin());


Vue.config.productionTip = false;

let app;
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
      created(){
        // this.$store.dispatch('fetchOrders');
      }
    }).$mount('#app')
  }
})

