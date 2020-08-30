<template>
  <div>
    <transition name='slide'>
      <div v-if='flash' class='loader'>
        <img class='logo2 white_icon' src="../assets/img/tagline.svg">
        <p>Loading ...</p>
      </div>
    </transition>
    <header>
      <a href="/"><img src="@/assets/img/tagline.svg"></a>
      <img @click='goHome' v-if='header' class='home' src="@/assets/img/home.png">
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      flash: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push({
        path: "/"
      });
    },
    checkRoute(){
      if (this.$route.name != 'home') {
        this.header = true;
      }else {
        this.header = false;
      }
    }
  },
  watch: {
    $route(){
      this.checkRoute();
    }
  }
};
</script>

<style>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 106%;
  max-height: 106%;
  width: 100%;
  display: flex;
  padding: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#5ab2c6,#0680b9);
}

.loader img {
  width: 70%;
}

.loader .logo1 {
  width: 300px;
  margin-bottom: 100px;
}

.loader p {
  color: white;
  font-size: 35px;
  font-weight: 100;
  margin-top: 100px;
}
</style>
