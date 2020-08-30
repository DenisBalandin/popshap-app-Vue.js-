<template>
  <header>
    <transition name='slide'>
      <div v-if='flash' class='flash'>
        <img src="../assets/img/logo.svg">
        <p>Loading ...</p>
      </div>
    </transition>

    <div class='header' v-if='header'>
      <div @click='goHome' class='head_card home'>
        <img src="@/assets/img/home.svg">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      flash: false,
      header: false
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

<style >
  .flash {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    max-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0065c1;
    z-index: 100000;
  }

  .flash img {
    width: 70%;
  }

  .flash p {
    color: white;
    font-size: 35px;
    font-weight: 100;
    margin-top: 100px;
  }

  .header {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3;
    display: flex;
  }

  .head_card {
    background: white;
    border-radius: 5px;
    padding: 12px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }

  .home {
    z-index: 999999;
  }

  .head_card img {
    height: 25px;
  }

  .head_card p {
    color: #0066c2;
    margin: 0;
    margin-left: 20px;
    font-size: 22px;
  }
</style>
