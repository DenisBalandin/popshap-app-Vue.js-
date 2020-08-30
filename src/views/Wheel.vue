<template>
    <section class='main resting'>
        <div class='content wof_page color_background'>
            <transition name='fade'>
                <div v-if='!spinReady' class='contain'>
                     <div class='intro'>
                        <div>ENTER EMAIL</div>
                        <p>TO <span>WIN</span></p>
                    </div>
                </div>
            </transition>
            <transition name='fade'>
            <section v-if='showWheel' class='contain wheel_promo' :class="{active: showWheel}">
                <transition name='fade'>
                    <div v-if='!spinReady' class='email_entry'>
                        <input type="email" v-model='email' placeholder='Email'>
                        <button id='take_pic' 
                          @click='checkEmail()' 
                          class='btn card full project_card' 
                          :class="{inactive: stopClicks}">
                            <!-- <span>Spin the Wheel</span>  -->
                            <!-- <img class='arr' src="../assets/img/arr.png"> -->
                            <div class='flasher'></div>
                            <p>Submit Email <span>Spin The Wheel</span></p>
                        </button>
                          <!-- <div id='take_pic' class='card full project_card'>
                            <div class='flasher'></div>
                            <p>Take a selfie <span>Touch here</span></p>
                        </div> -->
                        <transition name='fade_quick'>
                            <p v-if='showError' class='email_error'>Please enter a valid email</p>
                        </transition>
                        <!-- <p class='disclaim'>*Each attendee is limited to one spin on the wheel per day</p> -->
                    </div>
                </transition>
                <div class='wheel_holder'>
                    <transition name='fade'>
                        <img v-if ='ticker' class='ticker' src="../assets/img/ticker.png">
                    </transition>
                    <img src="../assets/img/wheel.png" class='wheel_start' :class="{spin_ready: spinReady}" :style="{transform: 'rotate('+spin+'deg)'}" >
                </div>
            </section>
            </transition>

            <transition name='fade'>
            <div v-if='award' :style="{backgroundColor: prize.color}" class='prize'>
                <div class='img'>
                <img :src="prize.img">
                </div>
                <p class='title'>{{prize.name}}</p>
                <p>We've sent you an email, please show a representative the prize you've won!</p>
            </div>
            </transition>
        </div>
    </section>
</template>


<script type="text/javascript">
    const fb = require('../firebaseConfig.js');
    const db = fb.default.db;
    var moment = require('moment');
    import axios from 'axios';
    require('es6-promise').polyfill();
    import water from '../assets/img/water.png';
    import phonecase from '../assets/img/phonecase.png';
    import sanitizer from '../assets/img/sanitizer.png';
    import chapbalm from '../assets/img/chapbalm.png';
    
    export default {
        data(){
            return {
                mandrillKey: 'lfBGkNw39MvrqzkmQuhvAg',
                show: false,
                showWheel: false,
                wheelPage: true,
                initial: null,
                email: '',
                showError: false,
                stopClicks: false,
                rotation: 0,
                rdm: 0,
                spin: 0,
                spinReady: false,
                award: false,
                prize: {},
                ticker: false,
                prizes: [
                    {
                        name: 'Water Bottle',
                        img: water,
                        min: 0,
                        color: '#42d1d1',
                        chance: true,
                        chanceNum: 2                    
                    },
                    {
                        name: 'Phone Case',
                        img: phonecase,
                        min: 60,
                        color: '#60e8ef',
                    },
                    {
                        name: 'Hand Sanitizer',
                        img: sanitizer,
                        min: 120,
                        color: '#42d1d1',
                    },
                    {
                        name: 'Chalp Balm',
                        img: chapbalm,
                        min: 180,
                        color: '#60e8ef',
                    },
                    {
                        name: 'Phone Case',
                        img: phonecase,
                        min: 240,
                        color: '#60e8ef',
                    },
                    {
                        name: 'Hand Sanitizer',
                        img: sanitizer,
                        min: 300,
                        color: '#42d1d1',
                    }
                ],
                created: ''
            }
        },
        mounted(){
        },
        created: function(){
          let vm = this;
          setTimeout(function(){
            vm.showWheel=true;
          }, 500);
        },
        methods: {
            setUpWheel(){
                this.wheelActive = true;
            },
            checkEmail(){
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if ( re.test(this.email.toLowerCase()) ) {
                    this.stopClicks = true;
                    this.startSpin();
                }else {
                    this.showError = true;
                }
            },
            startSpin(){
                this.rotation = this.randNum();
                var winNum = -(this.rotation % 360) + 360;
                this.findPrize(winNum);
            },
            randNum() {
                this.rdm = Math.floor(Math.random() * Math.floor(360));
                var num =  this.rdm + 360*9;
                if ( num % 10 === 0 ) {
                    num + 4;
                }
                return num
           },
            findPrize(num) {
                let vm = this;
                this.prizes.forEach(function(prize, i){
                    if ( num >= prize.min && prize.min +60 >= num ) {
                      if (prize.min == 154) {
                        vm.startSpin();
                      }else {
                        vm.prize = prize;
                        vm.checkOdds(num);
                      }
                    }
                });
            },
            checkOdds(num) {
            if ( this.prize.chance ) {
                this.worsenOdds(num)
            }else {
                this.showPrize(num);
            }
           },
           worsenOdds( num ) {
            var randomNum = Math.floor(Math.random() * Math.floor(this.prize.chance));
            console.log(randomNum)
            if ( randomNum == 0 ) {
                this.showPrize(num);
            }else {
              this.startSpin();
            }
           },
           showPrize(num) {
            let rotate = ((360-num) + (360*9));
            let vm = this;
            this.spinReady = true;
            setTimeout(function(){
                vm.spin = rotate;
                vm.ticker = true;
            }, 500);
                setTimeout(function(){
                    vm.award = true;
                    vm.saveInfo();
                }, 8500);
            },
            saveInfo(){
              let vm = this;
              let id = db.collection('wofEmails').doc().id;
              if (!this.saved){
                this.saved = true;
                vm.created = Date.now();
                db.collection('wofEmails')
                  .doc(id)
                  .set({email: this.email, created: vm.created, prize: this.prize.name})
                  .then(() => {
                    vm.sendEmail();
                  })
              }
            },
            sendEmail(){
              let vm = this;
              let created = moment(vm.created).format('lll')
              var data = {
                key: this.mandrillKey,
                template_name: 'popshap-wheel',
                template_content: {},
                subject: 'Your Prize!',
                message: {
                  from_email: 'modi@popshap.com',
                  to: [
                    {
                      email: this.email,
                      type: 'to',
                    },
                  ],
                  global_merge_vars: [
                    {
                      name: 'prize',
                      content: vm.prize.name,
                    },
                    {
                      name: 'img',
                      content: vm.prize.img,
                    },
                    {
                      name: 'time',
                      content: created,
                    },
                  ],
                },
                merge: true,
              };

              db.collection("wheel").doc().set({
                  email: this.email,
                  prize: vm.prize.name,
                  created:created
                  
              })
              .then(function() {
                  console.log("Document successfully written!");
              })
              .catch(function(error) {
                  console.error("Error writing document: ", error);
              });

              axios
                .post(
                  'https://mandrillapp.com/api/1.0/messages/send-template.json',
                  data
                )
                .then(function(response) {
                  setTimeout(function(){
                    window.location = '/';
                  }, 10000)
                })
                .catch(function(error) {
                  setTimeout(function(){
                    window.location = '/';
                  }, 10000)
                });
            }
        },
        watch: {
            showWheel(){
                // this.show = true;
            }
        }
    }
</script>

<style type="text/css">
.intro{
    width: 500px;
    margin: 30px auto 0 auto;  
    border-radius: 50%;
    text-align: center;
    -webkit-animation-name: pulse;
    -webkit-animation-duration: 6000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-delay: 5s;
}
@keyframes pulse {
  0% { transform: scale(1);opacity: 1; }
  50% { transform: scale(0.2); opacity: 0; }
  60% { transform: scale(1);opacity: 1; }
  70% { transform: scale(1); opacity: 1;}
  80% { transform: scale(1); opacity: 1;}
  90% { transform: scale(1);opacity: 1; }
  100% { transform: scale(1);opacity: 1; }
}
.intro div{
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    
}
.intro p{
    margin: 0;
    font-size: 60px;
    font-weight: bold;
    color: #ffffff
}
.intro p span{
    color: #ffc722;
}
.wof_page {
  height: 100%;
  width: 100%;
  /* background-color: #f7f7f7; */
  background-size: cover;
  max-height: 1920px;
  overflow: hidden;
}

.wheel_promo {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 100%;
  z-index: 2;
  display: flex;
  padding-top: 0;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transition: background-color 1s;
  margin: 0 auto 0 auto;
}

.wheel_promo .close {
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: 25px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wheel_promo .close p {
  margin: 0;
  color: #1e79c4;
  font-weight: bold;
}

.wheel_promo img {
  height: auto;
  transition: margin 1s, transform 1s;
}

.wheel_start {
	position: fixed;
	margin-top: 0;
	width: 1000px;
	bottom: -600px;
	-webkit-animation: spin 5s infinite;
}

.wheel_holder {
	display: flex;
	justify-content: center; 
	 align-items: center;
}

@-webkit-keyframes spin {
  0%, 100%  { -webkit-transform: rotate(0deg); }
  50% { -webkit-transform: rotate(90deg); }
}

.wheel_promo.wheel_active img {
  animation: none;
  transform: rotate(0deg);
}

.wheel_promo.active img.spin_ready {
  margin-top: 0;
  margin-bottom: 400px;
  width: 62%;
  animation: none;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0, 0, 0, 1);
  -webkit-transition: transform 7s, margin 1s;
}

.ticker {
	position: fixed;
    top: 45%;
    z-index: 50;
    transform: translateY(-138px);
    margin-top: 200px;
    z-index: 5;
    transition-delay: 2s;
    -webkit-transition: margin 1s;
}

.wheel_promo > p {
  margin-left: 150px;
  font-weight: normal;
}

.wheel_promo p {
  color: #36495d;
  font-size: 40px;
}

.wheel_promo p span {
  font-size: 100px;
  display: block;
  font-weight: bold;
  -webkit-animation: enlarge 3s infinite;
}

@-webkit-keyframes enlarge {
  0%, 40%  { font-size: 100px; }
  20% { font-size: 120px; }
}

.cover_wheel {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 101;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade_quick-enter-active, .fade_quick-leave-active {
  transition: opacity .3s;
}
.fade_quick-enter, .fade_quick-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.wheel_promo.active .wheel_holder{
  /* height: 100vh; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}



/*===========================  WHEEL OF FORTUNE  =============================*/
.wheel_promo {
  overflow: hidden;
  margin-top: -100px;
}

.wheel_promo.wheel_active {
    background-color: rgba(14, 58, 108, 1);
}

.wheel_promo.wheel_active > img {
  margin-left: 486px;
  margin-top: 0px;
}

.email_entry {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  z-index: 1;
    margin: 100px auto 0px auto;
  
}

.email_entry .btn {
  margin-top: 20px;
  padding: 25px 80px;
  border: none;
}

.inactive {
  pointer-events: none;
}

.email_entry p {
  text-align: center;
}

.email_entry input {
  width: 100%;
  margin: 50px auto 0 auto;
  font-size: 40px;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 20px 30px;
  box-sizing: border-box;
  background-color:#379dc1;
  font-size: 40px;
  border-bottom: 4px solid #ffffff;
  transition: border .3s;
}

.email_entry .btn {
	min-width: 0;
}

.email_entry input::placeholder {
     font-size: 40px;
 color: #abd6e5;   
  opacity: .5;
}

.email_entry .email_error {
	font-weight: normal;
    position: relative;
   
    width: 100%;
    text-align: center;
    color: white;
    font-size: 32px;
    margin:30px 0;
}

.home_wheel {
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.home_wheel .main {
  background-color: #ea352d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home_wheel .intro {
  font-size: 119px;
  color: white;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0;
  padding: 0;
  margin-top: 280px;
  text-align: center;
  -webkit-animation: enlarge infinite 5s;
}

@-webkit-keyframes enlarge{
  0%, 20% { transform: scale(1); opacity: 1;}
  10% { transform: scale(.1); opacity: 0;}
}

.pre_spin {
  margin-top: -850px;
}

.home_wheel .intro p {
  margin: 2px;
  font-family: 'nobel';
  font-weight: 400;
  font-size: 150px;
}

p.script {
  font-family: 'claire_handregular' !important;
}

.home_wheel .intro p.script {
  font-size: 40px;
}

.email_wheel {
  font-family: 'nobel';
  padding: 30px;
  font-size: 37px;
  background: transparent;
  border: none;
  color: white;
  border-bottom: 3px solid white;
  margin-top: 75px;
  padding-bottom: 17px;
  outline: none;
  display: block;
  width: 400px;
}

.email_wheel::placeholder {
  color: rgba(255, 255, 255, 0.58);
}

.home_wheel .button {
  color: #ea352d;
  background: white;
  padding: 30px 74px;
  font-size: 35px;
  font-weight: 400;
  border: none;
  margin-top: 21px;
  width: 460px;
  outline: none;
  font-family: 'nobel';
}

.wheel {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  width: 100%;
  transition: margin 1s, width 1s;
}

.home_wheel .main.resting .wheel {
  margin-top: 920px;
  width: 140%;
}

.home_wheel .main.resting .wheel .spin {
  transition: transform 1s;
  -webkit-animation: slowSpin infinite 10s;
}

@-webkit-keyframes slowSpin{
  0%, 100% { transform: rotate(-120deg); }
  50% { transform: rotate(120deg); }
}

.home_wheel .main .wheel .spin.ready {
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0, 0, 0, 1);
  transition: transform 7s;
  -webkit-animation: none;
}

.wheel .back {
  width: 100%;
}

.wheel .pointer {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  top: -30px;
}

.wheel img {
    width: 90%;
}

.wheel .ticker {
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
}

.home_wheel {
  overflow: hidden;
}

.prize {
  position: fixed;
  top: 0;
  height: 100%;
  width: 110%;
  margin-left: -100px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: white;
  font-weight: bold;
  flex-direction: column;
  z-index: 1000;
}

.prize p {
  margin-left: -130px;
	max-width: 400px;
	font-size: 14px;
	line-height: 1.2;
	color: white;
	  text-align: center;
	  font-weight: 100;
}

.prize .title {
  margin-left: -130px;
	font-weight: bold;
    font-size: 70px;
    margin-top: 100px;
}

.prize .img {
  margin-top:300px;
  margin-left: -130px;
	/* background-color: white; */
	border-radius: 100%;
	height: 100px;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.prize .img img {
	margin-bottom: 0;
  max-height: 150px;
  /* max-width: 200px; */
}

.prize p.script {
  color: #645347;
  margin-bottom: -28px;
  font-size: 36px;
}

.prize .desc {
  color: #64534B;
  font-weight: 400;
  max-width: 700px;
  font-size: 35px;
}

.prize img {
  margin-bottom: 71px;
}

.prize span {
  display: block;
  font-size: 100px;
  margin-top: -17px;
}

.email_entry p.disclaim {
  color: white;
  font-weight: normal;
  font-size: 26px;
  margin: 0;
  margin-top: 10px;
  opacity: .7;
  width: 100%;
  text-align: left;
}
</style>
