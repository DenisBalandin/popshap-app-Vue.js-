<template>
  <div id="app" @click='resetTimer()' @mousemove='resetTimer()'>
    <flash></flash>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

  
export default {
  name: "App",
  data() {
  	return {
		timeout: 0,
  	}
  },
  components: {
    'flash': Header
  },
  mounted(){
  	this.startTimer();
  },
  methods: {
  	resetTimer() {
	  let vm = this;
	  window.clearTimeout(vm.timeout);
	  this.startTimer();
	},
	startTimer(){
	  clearTimeout(this.timeout);
	  this.timeout = 0;
	  let vm = this;
	  this.timeout = window.setTimeout(
	      function() {
	          setTimeout(function(){
	              if (vm.$route.name != 'home') {
	                  vm.$router.push({ name: 'home' });
	              }else {
	                  window.location.reload();
	              }
	      }, 500);
	  }, 600000);
	},
  }
};
</script>


<style src='../public/css/main.css'></style>

