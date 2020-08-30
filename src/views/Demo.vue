<template>
  <div>
    <section class='main contact_page'>
      <div class='page_title'>
        <!-- <p class='sml'>Popshap @ NRF 2020</p> -->
        <p class='lrg1'>Schedule a Demo with Popshap</p>
      </div>
      <div class="valid_email" v-if="emailError === true"> 
          Please enter a valid email
      </div>
      <div id='submit_form'>
          <span>
            <label>First Name</label>
              <input class='input first_name' name="first_name" placeholder="Type Here... ">
          </span>
          <span>
            <label>Last Name</label>
              <input class='input last_name' name="last_name" >
          </span>
          <span>
            <label>Email Address <span>(required)</span></label>
              <input class='input email' id='email' required name="email">
          </span>
          <span>
            <label>Phone Number</label>
              <input class='input phone' name="phone">
          </span>
          <span>
            <label>Company Name</label>
              <input class='input company' name="company">
          </span>
          <button id='book' class='new_btn' v-on:click="saveData" data-page='photobooth'>
            <div class='flasher'></div>
            <p>Book Demo <span>Touch to Complete</span></p>
          </button>
      </div>
    </section>
    <section id='share_alerts' v-bind:style="styles" >
      <h3>Thank you!</h3>
      <p>We'll be in touch shortly!</p>
    </section>
  
  </div>
</template>

<script>
const fb = require('../firebaseConfig');
const db = fb.default.db;
export default {
  name: 'Contact',
  data(){	  
	return{
        emailError: false,
        styles: {
            'height': '0px',
            'overflow':'hidden'
        }
	  }
  },
  methods:{
      shareAlerts: function() {
         this.styles = {
            'bottom': '0', 
            '-webkit-transition': '1s',
            'transition': '1s',
         }
	    },
      saveData(){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(document.getElementsByClassName('email')[0].value)) {
            db.collection("demo").doc().set({
                firstName: document.getElementsByClassName('first_name')[0].value,
                lastName:document.getElementsByClassName('last_name')[0].value,
                email: document.getElementsByClassName('email')[0].value,
                company:document.getElementsByClassName('company')[0].value,
                phone: document.getElementsByClassName('phone')[0].value,
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            
            this.shareAlerts();

            setTimeout(function(){
                window.location.href = '/';
            }, 5000); 
        }else {
            this.emailError = true;
        }
          
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page_title{
  width: 800px;
  margin: 0 0 0 -110px;
}
  .valid_email{
      position: fixed;
      text-align: center;
      font-size: 45px;
      color: #ffffff;
      margin-top: 430px;
  }
  #share_alerts {
    display: flex;
    background: linear-gradient(#ffc722,#d2a41d);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    position: absolute;
    height: 1920px;
    z-index: 10000000;
  }
  #share_alerts p {
    font-size: 38px;
    letter-spacing: 3px;
  }
  #share_alerts h3, #donation_alert h3 {
    font-size: 100px;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 0;
    text-transform: uppercase;
  }
  #share_alerts p, #donation_alert p {
    color: white;
    margin-top: 7px;
    font-size: 30px;
  }
</style>