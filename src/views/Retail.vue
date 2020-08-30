<template>
  <section class='main medical_page'>
    <div class='page_title'>
      <!-- <p class='sml'>Popshap @ NRF 2020</p> -->
      <p class='lrg'>How can POPSHAP help in retail</p>
    </div>

    <div class='areas'>
      <div class='card full'>
        <div :style="{backgroundImage: 'url('+require('@/assets/img/service1.jpg')+')'}"></div>
        <p class='lrg'>Self service checkout</p>
      </div>
      <div class='card full'>
        <div :style="{backgroundImage: 'url('+require('@/assets/img/service2.png')+')'}"></div>
        <p class='lrg'>Product information</p>
      </div>
      <div class='card full'>
        <div :style="{backgroundImage: 'url('+require('@/assets/img/service3.jpg')+')'}"></div>
        <p class='lrg'>Customer reviews & Experience</p>
      </div>
      <div class='card full'>
        <div :style="{backgroundImage: 'url('+require('@/assets/img/service4.jpg')+')'}"></div>
        <p class='lrg'>Display systems</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "retail",
  data(){
    return {
    }
  },
  mounted(){
    
  },
  methods: {
    
  }
};
</script>

<style lang="css">

</style>
