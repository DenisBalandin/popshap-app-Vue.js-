<template>
  <section class='main home_page dashboard'>
    <!-- <div class='page_title'>
      <p class='lrg'>Popshap provides Touch Kiosk Solutions</p>
    </div> -->

    <div class='cards'>
      <div class='card click' @click='goTo("retail")'>
        <div class='flash'></div>
        <img src="@/assets/img/retail.svg">
        <p>Popshap helping retail <span>Explore now</span></p>
      </div>
      <div class='card click' @click='goTo("wheel")'>
        <div class='flash'></div>
        <img src="@/assets/img/wheel.svg">
        <p>Wheel of fortune <span>Explore now</span></p>
      </div>
      <div class='card click selfie_card' @click='goTo("selfie")'>
        <div class='flash'></div>
        <img src="@/assets/img/selfie.svg">
        <p>Selfie booth <span>Explore now</span></p>
      </div>
      <div class='card click' @click='goTo("demo")'>
        <div class='flash'></div>
        <img src="@/assets/img/contact.svg">
        <p>Schedule a Demo <span>Explore now</span></p>
      </div>
      <div class='card click full projects_card' @click='goTo("projects")'>
        <div class='flash'></div>
        <img src="@/assets/img/project.svg">
        <p>View our Projects <span>Explore now</span></p>
      </div>
    </div>

    <!-- <div @click='goTo("tradeshows")' class='click card full click super'>
      <div class='color_slide'></div>
      <p class='sml'>Find out how Popshap can help</p>
      <p class='lrg'>TRADESHOWS</p>
    </div>

    <div class='projs'>
      <div @click='goTo("")' class='click card wof'>
        <p class='lrg'>SPIN TO WIN</p>
        <img src="@/assets/img/wheelFull.png">
      </div>
      <div @click='goTo("")' class='click card selfie'>
        <p class='lrg'>TAKE A SELFIE</p>
        <img src="@/assets/img/confetti3.png">
      </div>
    </div>

    <div @click='goTo("")' class='click card full project_card'>
      <div class='color_slide'></div>
      <p class='sml'>See what we’ve accomplished</p>
      <p class='lrg'>POPSHAP PROJECTS</p>
    </div> -->
  </section>
</template>

<script>

export default {
  name: "home",
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
.main{display: flex!important;}
.page_title{font-size:20px!important}
.cards{width: 500px!important;}
.card{height: 230px !important;}
.flash {
  position: absolute;
  left: 50% !important;
  top: auto !important;
  transform: translateX(-50%);
  border-radius: 100%;
  background-color: rgba(33, 115, 152, 1);
  height: 0%;
  width: 0%;
  max-height: 150% !important;
  z-index: 1;
  opacity: 0;
  -webkit-animation: flasher 15s infinite;
}

.dashboard .cards .card:hover {
    transform: scale(.97);
}

.dashboard .cards .card:nth-child(2) .flash{
    animation-delay: 3s;
}

.dashboard .cards .card:nth-child(3) .flash{
    animation-delay: 6s;
}

.dashboard .cards .card:nth-child(4)  .flash{
    animation-delay: 9s;
}

.dashboard .cards .card:nth-child(5)  .flash{
    animation-delay: 12s;
}

@-webkit-keyframes flasher {
  0%, 10%  { height: 0; width: 0; opacity: 0; }
  4%,6% { height: 150%; width: 150%; opacity: 1; }
}

.dashboard .cards .card:nth-child(2){
    animation-delay: 3s;
}

.dashboard .cards .card:nth-child(3){
    animation-delay: 6s;
}

.dashboard .cards .card:nth-child(4) {
    animation-delay: 9s;
}

.dashboard .cards .card:nth-child(5) {
    animation-delay: 12s;
}

@-webkit-keyframes pulsate {
  0%, 10%  { transform: scale(1); }
  4%,6% { transform: scale(.97); }
}

.dashboard .cards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
}

.dashboard .cards .card {
    display: flex;
    background-color: rgba(31, 52, 56, 0.20);
    padding: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 49%;
    height: 365px;
    position: relative;
    overflow: hidden;
    margin-bottom: 2%;
    cursor: pointer;
    transition: transform .2s;
    -webkit-animation: pulsate 15s infinite;
}

.dashboard .cards .card.full {
  width: 100%;
}

.dashboard .cards .card img {
    position: relative;
    z-index: 3;
    opacity: .4;
    height: 92px;
}

.dashboard .cards .card p {
    font-size: 14px;
    font-weight: bold;
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 0;
    position: relative;
    z-index: 3;
}

.dashboard .cards .card p span {
    display: block;
    color: #ffc722;
    font-size: 15px;
    font-weight: normal;
    text-transform: initial;
    margin-top: 10px;

}
</style>
