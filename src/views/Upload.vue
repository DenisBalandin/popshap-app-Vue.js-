<template>
  <div>
    <div id="popshapSlider"  v-bind:style="styles" >
      <img src="../assets/img/popshap_logo.png" />
      <p>Loading ...</p>
    </div>
    <section class='main projects_page'>
      <img class='home' src="../assets/img/home.png">

      <div class='projs' v-if="projs === true" > 
        <div class='page_title' >
          <!-- <p class='sml'>Popshap @ NRF 2020</p> -->
          <p class='lrg' id="lrg_title">POPSHAP PROJECTS</p>
        </div>
        <div class='card proj'  style="background-color: #003da5;" @click='mayoProj(true)'>
          <div class='flash'></div>
          <div style="background-image: url('../assets/img/mayo.jpg');"></div>
          <img src="../assets/img/mayo.png" />
        </div>
        <div class='card proj' style="background-color: #197a56;"  @click='bcgProj(true)'>
          <div style="background-image: url('../assets/img/bcg.jpg');"></div>
          <img src="../assets/img/bcg.png">
        </div>
        
        <div class='card proj' style="background-color: #c41230;"  @click='levisProj(true)'>
          <div style="background-image: url('../assets/img/levis.png');"></div>
          <img class='wide' style="max-width: 340px" src="../assets/img/levis_logo.png">
        </div>

        <div class='card proj' style="background-color: #e40505;"  @click='red_doorProj(true)'>
          <div style="background-image: url('../assets/img/reddoor.jpg');"></div>
          <img class='wide' style="max-width: 340px" src="../assets/img/reddoor.png">
        </div>

        <div class='card proj' style="background-color: #023aab;" @click='cognizantProj(true)'>
          <div style="background-image: url('../assets/img/cognizant.jpg');"></div>
          <img src="../assets/img/cognizant.png">
        </div>

        <div class='card proj' style="background-color: #056dae;" @click='citiProj(true)'>
          <div style="background-image: url('../assets/img/citi.jpg');"></div>
          <img src="../assets/img/citi.png">
        </div>

        <div class='card proj' style="background-color: #1f479a;"  @click='braunProj(true)'>
          <div style="background-image: url('../assets/img/braun.jpg');"></div>
          <img src="../assets/img/braun_logo.png">
        </div>

        <div class='card proj' style="background-color: #C9AA6D;" @click='cbmaProj(true)'>
          <div style="background-image: url('../assets/img/cbma.jpg');"></div>
          <img src="../assets/img/cbma.png">
        </div>

        <div class='card proj' style="background-color: #00aeef;" @click='nielsenProj(true)'>
          <div style="background-image: url('../assets/img/nielsen.jpg');"></div>
          <img src="../assets/img/nielsen.png">
        </div>

        <div class='card proj' style="background-color: #ee374b;" @click='mgcProj(true)'>
          <div style="background-image: url('../assets/img/mgm.jpg');"></div>
          <img src="../assets/img/mgc_logo.png">
        </div>

        <div class='card proj' style="background-color: #7dc952;" @click='greenfigProj(true)'>
          <div style="background-image: url('../assets/img/greenfig.jpg');"></div>
          <img src="../assets/img/greenfig.png">
        </div>
      </div>

      <div id="all_projs">

        <div v-if="mayo === true"> 
          <div id="back" class="back" @click="mayoProj()" v-bind:style="back"> BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">MAYO CLINIC</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>MAYO CLINIC</p>
              </div>
              <a target="_blank" href="https://mayo-221120.firebaseapp.com/">
                <div class="web_link">
                  <p>MAYO CLINIC 1</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank" href="http://mayoclinic1.popshap.net/">
                <div class="web_link">
                  <p>MAYO CLINIC 2</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank" href="http://mayo.mymagid.net/">
                <div class="web_link">
                  <p>MAYO CLINIC 3</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/Mayo-Table1.png" width="1000px"/>  
            <img src="../assets/img/screens/Mayo-Table2.png" width="1000px"/>  
            <img src="../assets/img/screens/Mayo-Table3.png" width="1000px"/>  
            <img src="../assets/img/screens/Mayo-Table4.png" width="1000px"/>  
            <img src="../assets/img/screens/Mayo-Table5.png" width="1000px"/>  
        </div>

        <div v-if="bcg === true"> 
          <div id="back" class="back" @click="bcgProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">BCG CONSULTING</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>BCG CONSULTING</p>
              </div>
              <a target="_blank" href="http://bcg-0719.popshap.net">
                <div class="web_link">
                  <p>BCG CONSULTING</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank" href="http://bcg-assessment.popshap.net">
                <div class="web_link">
                  <p>BCG CONSULTING RAMBLER 1</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank" href="http://bcg-agile.popshap.net">
                <div class="web_link">
                  <p>BCG CONSULTING RAMBLER 2</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank" href="http://bcg-holiday-2019.popshap.net">
                <div class="web_link">
                  <p>BCG CONSULTING RAMBLER 2</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/BCG-Table1.png" width="1000px"/>  
            <img src="../assets/img/screens/BCG-Table2.png" width="1000px"/>  
            <img src="../assets/img/screens/BCG-Table3.png" width="1000px"/>  
            <img src="../assets/img/screens/BCG-Table4.png" width="1000px"/>    
        </div>

        <div v-if="levis === true"> 
          <div id="back" class="back" @click="levisProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">LEVIS</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>LEVIS</p>
              </div>
              <a target="_blank" href="https://levis.popshap.net">
                <div class="web_link">
                  <p>LEVIS</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/levis1.png" width="1000px"/>  
            <img src="../assets/img/screens/levis2.png" width="1000px"/>  
            <img src="../assets/img/screens/levis3.png" width="1000px"/>  
            <img src="../assets/img/screens/levis4.png" width="1000px"/> 
        </div>
        <div v-if="red_door === true"> 
          <div id="back" class="back" @click="red_doorProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">RED DOOR SPA</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>RED DOOR SPA</p>
              </div>
              <a target="_blank" href="https://reddoor.popshap.net/">
                <div class="web_link">
                  <p>RED DOOR SPA</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/Red-Door-Table1.png" width="1000px"/>  
            <img src="../assets/img/screens/Red-Door-Table2.png" width="1000px"/>  
            <img src="../assets/img/screens/Red-Door-Table3.png" width="1000px"/>  
            <img src="../assets/img/screens/Red-Door-Table4.png" width="1000px"/>  
        </div>
        <div v-if="cognizant === true"> 
          <div id="back" class="back" @click="cognizantProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">COGNIZANT</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>COGNIZANT</p>
              </div>
              <a target="_blank" href="http://cognizant.popshap.net">
                <div class="web_link">
                  <p>COGNIZANT 1</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank" href="http://gaps2018.popshap.net">
                <div class="web_link">
                  <p>COGNIZANT 2</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/Cognizant-standing1.png" width="1000px"/>  
            <img src="../assets/img/screens/Cognizant-standing2.png" width="1000px"/>  
            <img src="../assets/img/screens/Cognizant-standing3.png" width="1000px"/>  
            <img src="../assets/img/screens/Cognizant-standing4.png" width="1000px"/>  
        </div>
        <div v-if="braun === true"> 
          <div id="back" class="back" @click="braunProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">BRAUNABILITY</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>BRAUNABILITY</p>
              </div>
              <a target="_blank" href="http://braunability-admin.popshap.net/">
                <div class="web_link">
                  <p>BRAUNABILITY 1</p>
                  <div>View Now</div>
                </div>
              </a>
                <a target="_blank" href="http://braunability.popshap.net/kioskid">
                <div class="web_link">
                  <p>BRAUNABILITY 2</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/Braunability.png" width="1000px"/>  
            <img src="../assets/img/screens/Braunability1.png" width="1000px"/>  
            <img src="../assets/img/screens/Braunability2.png" width="1000px"/>  
            <img src="../assets/img/screens/Braunability5.png" width="1000px"/>  
            <img src="../assets/img/screens/Braunability6.png" width="1000px"/>  
        </div>
        <div v-if="cbma === true"> 
          <div id="back" class="back" @click="cbmaProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">CBMA</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>CBMA</p>
              </div>
              <a target="_blank"  href="https://cbmarumble.popshap.net">
                <div class="web_link">
                  <p>CBMA</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank"  href="https://cbmacities.popshap.net">
                <div class="web_link">
                  <p>CBMA RUMBLE 1</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank"  href="https://cbmarumble-2019.popshap.net">
                <div class="web_link">
                  <p>CBMA RUMBLE 2</p>
                  <div>View Now</div>
                </div>
              </a>
              <a target="_blank"  href="http://cbmarumble-12-2019.popshap.net/home/kiosk1">
                <div class="web_link">
                  <p>CBMA RUMBLE 2</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/CBMA-standing.png" width="1000px"/>  
            <img src="../assets/img/screens/CBMA-standing1.png" width="1000px"/>  
            <img src="../assets/img/screens/CBMA-standing2.png" width="1000px"/>  
            <img src="../assets/img/screens/CBMA-standing3.png" width="1000px"/>  
            <img src="../assets/img/screens/CBMA-standing4.png" width="1000px"/>  
            <img src="../assets/img/screens/CBMA-standing5.png" width="1000px"/>  
            <img src="../assets/img/screens/CBMA-standing6.png" width="1000px"/>  
        </div>
        <div v-if="nielsen === true"> 
          <div id="back" class="back" @click="nielsenProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">NIELSEN</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>CBMA</p>
              </div>
              <a target="_blank" href="http://nielsenmusic.popshap.net/">
                  <div class="web_link">
                    <p>NIELSEN</p>
                    <div>View Now</div>
                  </div>
                </a>
            </div>
            <img src="../assets/img/screens/nielsen-standing.png" width="1000px"/>  
            <img src="../assets/img/screens/nielsen-standing1.png" width="1000px"/>  
            <img src="../assets/img/screens/nielsen-standing2.png" width="1000px"/>  
            <img src="../assets/img/screens/nielsen-standing3.png" width="1000px"/>  
            <img src="../assets/img/screens/nielsen-standing4.png" width="1000px"/>  
            <img src="../assets/img/screens/nielsen-standing5.png" width="1000px"/>  
        </div>
        <div v-if="mgc === true"> 
          <div id="back" class="back" @click="mgcProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">MOUTH GUARD CLUB</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>MOUTH GUARD CLUB</p>
              </div>
              <a target="_blank" href="https://mouthguard-club.firebaseapp.com/kioskid">
                  <div class="web_link">
                    <p>MOUTH GUARD CLUB 1</p>
                    <div>View Now</div>
                  </div>
                </a>
                <a target="_blank" href="https://mouthguard-admin.firebaseapp.com/login">
                  <div class="web_link">
                    <p>MOUTH GUARD CLUB 2</p>
                    <div>View Now</div>
                  </div>
                </a>
                  <a target="_blank" href="https://mouthguard-threed.firebaseapp.com/designer/Test-Kiosk">
                  <div class="web_link">
                    <p>MOUTH GUARD CLUB 3</p>
                    <div>View Now</div>
                  </div>
                </a>
            </div>
            <img src="../assets/img/screens/MGC-table.png" width="1000px"/>  
            <img src="../assets/img/screens/MGC-table1.png" width="1000px"/>  
            <img src="../assets/img/screens/MGC-table2.png" width="1000px"/>  
            <img src="../assets/img/screens/MGC-table4.png" width="1000px"/>  
            <img src="../assets/img/screens/MGC-table5.png" width="1000px"/> 
        </div>
        <div v-if="greenfig === true"> 
          <div id="back" class="back" @click="greenfigProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">GREEN FIG</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>GREEN FIG</p>
              </div>
              <a target="_blank" href="http://greenfig.popshap.net/">
                <div class="web_link">
                  <p>GREEN FIG</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/greenfig-table.png" width="1000px"/>  
            <img src="../assets/img/screens/greenfig-table1.png" width="1000px"/>  
            <img src="../assets/img/screens/greenfig-table2.png" width="1000px"/>  
            <img src="../assets/img/screens/greenfig-table4.png" width="1000px"/> 
        </div>
        <div v-if="citi === true"> 
          <div id="back" class="back" @click="citiProj()" v-bind:style="back">BACK</div>
            <div class='page_title'>
              <p class='lrg' id="lrg_title">CITI BANK</p>
            </div>
            <div  class='proj_link' @click="webLinks()">
                Visit Website
            </div>
            <div id="web_links"  v-bind:style="webLink"> 
              <div class="circle" @click="webLinksClose()">X</div>
              <div class='page_title'>
                <p class='lrg'>CITI BANK</p>
              </div>
              <a target="_blank" href="https://citi-cab.popshap.net/">
                <div class="web_link">
                  <p>CITI BANK</p>
                  <div>View Now</div>
                </div>
              </a>
            </div>
            <img src="../assets/img/screens/citi-standing1.png" width="1000px"/>  
            <img src="../assets/img/screens/citi-standing2.png" width="1000px"/>  
            <img src="../assets/img/screens/citi-standing3.png" width="1000px"/>  
            <img src="../assets/img/screens/citi-standing4.png" width="1000px"/>  
            <img src="../assets/img/screens/citi-standing5.png" width="1000px"/>  
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Projects',
    data(){
      return{
        projs: true,
        bcg:false,
        mayo:false,
        levis:false,
        red_door:false,
        cognizant:false,
        citi:false,
        braun:false,
        cbma:false,
        nielsen:false,
        mgc:false,
        webLink: {
            'height': '0px',
            'overflow':'hidden'
        },
        styles: {
            'height': '0px',
            'overflow':'hidden'
        },
        back: {}
      }
    },
    methods:{
      webLinksClose:function(){
        this.webLink = {
           'bottom': '-120%', 
            '-webkit-transition': '0.5s',
            'transition': '0.5s',
        }
      },
      webLinks:function(){
         this.webLink = {
            'bottom': '0', 
            '-webkit-transition': '0.5s',
            'transition': '0.5s',
         }; 
      },
      backIn:function(){
        this.back = {
          'display': 'flex', 
        };
      },
      backOut:function(){
        this.back = {
          'display': 'none', 
        };
      },
      popshapSlider: function() {
         this.styles = {
            'top': '0', 
            '-webkit-transition': '0.5s',
            'transition': '0.5s',
         }; 
         setTimeout(() => {
              this.styles = {
                'top': '-120%', 
                '-webkit-transition': '0.5s',
                'transition': '0.5s',
            };
         }, 1500);
      },
      mayoProj: function(data){
        this.popshapSlider();
        if(data==true){
          this.backIn();
          setTimeout(() => {
            this.mayo = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.mayo = false;
            this.projs = true;
          }, 1000);
        }
      },
      bcgProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.bcg = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.bcg = false;
            this.projs = true;
          }, 1000);
        }
      },
      levisProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.levis = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.levis = false;
            this.projs = true;
          }, 1000);
        }
      },
      red_doorProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.red_door = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.red_door = false;
            this.projs = true;
          }, 1000);
        }
      },
      cognizantProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.cognizant = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.cognizant = false;
            this.projs = true;
          }, 1000);
        }
      },
      citiProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.citi = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.citi = false;
            this.projs = true;
          }, 1000);
        }
      },
      braunProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.braun = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.braun = false;
            this.projs = true;
          }, 1000);
        }
      },
      cbmaProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.cbma = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.cbma = false;
            this.projs = true;
          }, 1000);
        }
      },
      nielsenProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.nielsen = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.nielsen = false;
            this.projs = true;
          }, 1000);
        }
      },
      nielsenProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.nielsen = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.nielsen = false;
            this.projs = true;
          }, 1000);
        }
      },
      mgcProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.mgc = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.mgc = false;
            this.projs = true;
          }, 1000);
        }
      },
      greenfigProj: function(data){
        this.popshapSlider();
        if(data == true){
          this.backIn();
          setTimeout(() => {
            this.greenfig = true;
            this.projs = false;
          }, 1000);
        }else{
          setTimeout(() => {
            this.greenfig = false;
            this.projs = true;
          }, 1000);
        }
      },
    }
  }
</script>
<style scoped>
   #popshapSlider{
    display: flex;
    background: linear-gradient(#58b1c6,#0781b9);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    position: fixed;
    height: 1920px;
    z-index: 1000;
    color: #ffffff;
    font-size: 30px;
  }
  #popshapSlider img{
    width: 60%;
    margin: 0 auto 0 auto;
  }
  #back{
    display: none;
    margin: 40px 0 0 0;
  }
  #all_projs img{
    margin: 15px auto 15px auto;
  }
  #all_projs .page_title{
    text-align: center;
  }
  .web_link{
    background: #207397;
    width: 800px;
    height: 150px; 
    display: flex;  
    justify-content: space-between;
    padding: 50px 30px 0 30px;
    margin: 0 auto 0  auto;
  }
  .web_link p{
    font-weight: normal;
    text-transform: uppercase;
    font-size: 35px;
    margin: 0;
    line-height: 1.2;
    color: #ffffff;
    text-decoration: none;
  }
  .web_link div{
    font-size: 31px !important;
    margin-top: 15px;
    color: #ffc722;
    margin: 0 0 60px 0;
  }
  #web_links p{
    text-align: center;
  }
  .circle{
    margin: 150px auto 0 auto;
    border: #ffffff 7px solid;
    border-radius: 100%;
    width: 115px;
    height: 115px;
    font-size: 80px;
    color: #ffffff;
  }
  #web_links{
    display: flex;
    background: linear-gradient(#2db3c8,#0081bc);
    flex-direction: column;
    width: 120%;
    text-align: center;
    position: fixed;
    height: 1920px;
    z-index: 1000;
    color: #ffffff;
    font-size: 30px;
    margin-left: -150px;
  }
  #web_links a{
    margin: 20px auto 20px auto;
    text-decoration: none;
  }
  .proj_link {
    font-size: 31px !important;
    margin-top: -80px!important;
    color: #ffc722;
    text-align: center;
    margin: 0 0 80px 0;
  }
</style>