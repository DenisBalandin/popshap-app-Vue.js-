<template>
  <div>
    <section class='main photobooth_page'>
      <img class='home' src="../assets/img/home.png">

      <!-- Step 1 -->
      <div class='step_one'>
          <div class='page_title'>
              <p class='lrg1'>Capture your Experience at Popshap</p>
          </div>
          <video id="video" width="600" height="100%"  autoplay></video>
          <div id='cam' class='card'>
          </div>
          <div id='take_pic' style="margin:-200px 0 0 0; height:50px; width:600px" class='card full project_card'>
              <div class='flasher'></div>
              <p>Take a selfie <span>Touch here</span></p>
          </div>
          <div class='countdown_holder'>
              <div class='countdown'>3</div>
              <div class='countdown'>2</div>
              <div class='countdown'>1</div>
          </div>
        </div>
        <div class='flash_konf'><img src="../assets/img/confetti_flash.png" /></div>

        <!-- Step 2 -->
        <div id='pictures' class='step_two'>
            <device id="media" type="media" onchange="update(this.data)"></device>
            <div class='projs' style="width:400px; margin:0 auto 0 auto" >
                <div class='card retake'>
                    <img src="../assets/img/redo.svg">
                    <p>Retake Picture <span>Restart</span></p>
                </div>
                <div class='card share'>
                    <div class='flasher'></div>
                    <img src="../assets/img/share.svg">
                    <p>Share Picture <span>Send</span></p>
                </div>
            </div>
        </div>

        <!-- Step 3 -->
        <div class='step_three'>
          <div class='card full'>
            <p class="fa fa-close sharex" style="font-size:36px"><strong>X</strong></p>

            <form id='submit_form'>
              <input type='hidden' name='form' value="1">
                <input type="hidden" name="image" class="image_encoded">
                <span>
                    <input class='input jQKeyboard first_email' name='email[]' pattern="[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,3}$" type='text' placeholder='Email' title='Please enter a valid email address.'>
                </span>
                <p id='add_email'>Add an email +</p>
                <div class='line'></div>
                <span>
                    <input class='input jQKeyboard first_phone' name="phone[]" placeholder="Phone Number (eg: +19874563210)">
                </span>
                <p id='add_phone'>Add a phone number +</p>
            </form>

          </div>
          <div id='share_btn' class='send card full'>
            <div class='flasher'></div>
              <p>Send Picture <span>Complete</span></p>
          </div>
        </div>
    </section>
    <section id='share_alert'>
      <h3>Thank you!</h3>
      <p>Your picture is on it's way</p>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase';
const fb = require('../firebaseConfig');
const db = fb.default.db;
const storage = fb.default.storage;
import axios from 'axios';

export default {
  name: "selfie",
  data(){
    return {
    }
  },
  mounted(){  

   function update(stream) {
        document.querySelector('video').src = stream.url;
    }
    var video = document.getElementById('video');
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            try {
                video.src = window.URL.createObjectURL(stream);
            } catch(error) {
                video.srcObject = stream;
            }
            video.play();
        });
    }
    $(document).on('click', function(){
        var video = document.getElementById('video');

        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                try {
                    video.src = window.URL.createObjectURL(stream);
                } catch(error) {
                    video.srcObject = stream;
                }
                video.play();
            });
        }
    })
    $(document).on('click', '#take_pic, .retake, .share', function(){        
        var self = this;
        $(self).css('transform', 'scale(.95)');
        setTimeout(function(){
            $(self).css('transform', 'scale(1)');
        }, 200);
    });
    function countDown(){
      $('.countdown_holder').css('display', 'flex');
      $('#take_pic').fadeOut(500);
      $('.color_slide').fadeOut(500);
        var divs = $('.countdown');
        var timer
        var offset = 0 
        divs.each(function(){
            var self = this;
            timer = setTimeout(function(){
                $(self).css('font-size', '350px');
                $(self).fadeOut(1000);
            }, 1000 + offset);
            offset += 1000;
        });
        // flash
        setTimeout(function(){
          $('.flash_konf').addClass('active');
            $('.flash_konf').fadeIn(1000);
            setTimeout(function(){
              $('.flash_konf').fadeOut(500);
            }, 2000);
            setTimeout(function(){
                $('.step_one').hide();
                $('.step_two').show();
              }, 1000);
            $(divs).css('font-size', '0px');
        }, 4000);
      }
      function convertCanvasToImage(canvas) {
          var image = new Image();
          image.src = canvas.toDataURL("image/png");
          console.log(image)
          return image;
      }
      function showPictures() {
          $('#pictures').fadeIn(2000);
          var photos = $('#pictures').children('.photo');
          $(photos[0]).fadeIn();
      }
      $(document).on('click', '.home', function(){
        setTimeout(function(){
          window.location = '/';
        }, 500);
      });
      // PHOTO CLICK
      $(document).on('click', '#take_pic',function(){
          $('#take_pic').css('pointer-events', 'none');
          $('#take_pic p').fadeOut(500);
          var pics = []

          countDown();
              setTimeout(function(){
                $('#pictures').prepend("<div class='canvas_holder photo'><canvas id='pic' class='canvas' width='1000' height='750'></canvas></div>")
                var canvas = $('#pic');
                var context = canvas[canvas.length -1].getContext('2d');
                var video = document.getElementById('video');
                var background = $('#background')[0];
                context.drawImage(video, 0, 0, 1000, 750);               
                $($(canvas[canvas.length -1]).parents('.canvas_holder')[0]).html(convertCanvasToImage(canvas[canvas.length -1]))
              }, 5000);
          setTimeout(function(){
              $('.submit, .retake').delay(1000).fadeIn();
              $('.print').delay(1000).fadeIn();
              $(this).css('pointer-events', 'all');
              showPictures();
          }, 5000);
      });
      // =============================  SHARING PHOTO  ==================================
      $(document).on('click', '.retake', function(){
        setTimeout(function(){
          window.location = '/selfie';
        }, 500);
      });
      $(document).on('click', '.share', function(){
          $('.step_two').slideUp(500);
          setTimeout(function(){
            $('.step_three').slideDown(500);
          }, 500);

          $('.fa-close').fadeIn();
      });

      $(document).on('click', '.fa-close',function(){
        $('.step_three').css('margin-top', '100px');
          $('.jQKeyboardContainer').slideUp();
          $('.step_three').slideUp(500);
          setTimeout(function(){
            $('.step_two').slideDown(500);
          }, 500);
          $('.fa-close').fadeOut();
      });

      $(document).on('click', '#share_btn', function(){
          $('.fa-close').fadeOut();
          $('.jQKeyboardContainer').fadeOut();

          $('#share_alert').slideDown();
          $('#share_alert').css('display', 'flex');
          $('#submit_form').submit();

          let email = $(".first_email").val();
          let phone  = $(".first_phone").val();

          let canvas = $('.canvas_holder > img');
          let image = canvas[0].src;
          let vm = this;
          let storageRef = storage.ref(`selfie/${Date.now()}.png`);
          let uploadTask = storageRef.putString(image, 'data_url');
          uploadTask.on('state_changed', (snapshot) => {},
            (error)=>{
              alert('Could not save design, please make sure you have wifi, or contact us.')
            },
            ()=>{
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                canvas.remove();
                vm.loading = false;
                vm.flash = false;
                console.log(downloadURL)
                  var data = {
                  key: 'SchreMdYRHHJRFMam5RSxg',
                  template_name: 'popshap-photobooth',
                  template_content: {},
                  message: {
                    to: [
                      {
                        email: email,
                        type: 'to',
                      },
                    ],
                    global_merge_vars: [
                      {
                        name: 'img',
                        content: downloadURL,
                      },
                    ],
                  },
                  merge: true,
                };
                axios
                  .post(
                    'https://mandrillapp.com/api/1.0/messages/send-template.json',
                    data
                  )
              })
            }
          );
       

            db.collection("selfie").doc().set({
                email: email,
                phone: phone,
                selfie: `selfie/${Date.now()}.png`
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

            

            setTimeout(function(){
                  window.location.href = '/';
              }, 5000);
          //   if(response.status){
          //       $('#submit_form')[0].reset();
          //       setTimeout(function(){
          //         window.location.href = '/';
          //       }, 5000);
          //   }else {
          //     setTimeout(function(){
          //         window.location.href = '/';
          //       }, 5000);
          //   }
      //   });
      });
      $('#submit_form').submit(function(e){
        e.preventDefault();
      });
    setTimeout(function(){
        window.location.href = '/';
    }, 100000);
  },
  methods: {    
    
  }
};
</script>
<style lang="css">
    @import '../assets/photobooth.css';
</style>

