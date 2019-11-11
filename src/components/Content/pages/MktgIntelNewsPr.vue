<template>
  
  <div>


    <!-- Content of The Page -->
    <div class="container space-2">

      <!-- Title -->
      <!-- <div class="w-md-80 w-lg-60 mb-9">
        <h1 class="font-weight-normal">Social Tracking</h1>
      </div> -->
      <!-- End Title -->

      <div class="row">
      
        <div class="col-lg-12">
          
          <!-- Features Section -->
          <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
            <!-- Apply your Parallax background image here -->
            <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>
            <div class="container space-2">
              <div class="row justify-content-lg-between align-items-lg-center">
                <div class="col-lg-5 mb-9 mb-lg-0">
                    
                  <div class="mb-4">
                    <h2 class="font-weight-medium mb-4">News & PR Monitoring</h2>
                    <p>Capture and analyse data from all your PR campaigns across over 3 Million news outlets and blogs.</p>
                  </div>

                  <ul class="list-unstyled">
                    <li class="media">
                      <span class="btn btn-icon btn-xs btn-primary rounded-circle mt-1 mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>
                      <div class="media-body">
                        <p>Quantify your PR impact</p>
                      </div>
                    </li>
                    <li class="media">
                      <span class="btn btn-icon btn-xs btn-primary rounded-circle mt-1 mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>
                      <div class="media-body">
                        <p>Know your share of voice</p>
                      </div>
                    </li>
                    <li class="media">
                      <span class="btn btn-icon btn-xs btn-primary rounded-circle mt-1 mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>
                      <div class="media-body">
                        <p>Understand how audience feel about your brand.</p>
                      </div>
                    </li>
                    <li class="media">
                      <span class="btn btn-icon btn-xs btn-primary rounded-circle mt-1 mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>
                      <div class="media-body">
                        <p>Build Clippings lists in moments.</p>
                      </div>
                    </li>
                    <li class="media">
                      <span class="btn btn-icon btn-xs btn-primary rounded-circle mt-1 mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>
                      <div class="media-body">
                        <p>Be Alerted to impending PR crisis.</p>
                      </div>
                    </li>
                  </ul>
                  <a v-on:click="bookMeeting" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-2" href="#">Book a Demo</a>
                

                </div>

                <div class="col-lg-6">
                  <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/marketingplatform/pr.jpg" alt="SVG Arrow">
                </div>
              </div>
            </div>
          </div>
          <!-- End Features Section -->
          
        </div>
      </div>
    </div>
    <!-- End Content of The Page -->




    <!-- Case Studies Section -->
    <div class="bg-light">
      <div class="container space-2">
        <!-- Title -->
        <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
          <h2 class="text-secondary">Check out our <span class="font-weight-semi-bold">Case Studies</span></h2>
          <p>See how others have gained a competitive advantage through understanding their audience and communicating insights using Buzz Radar.</p>
        </div>
        <!-- End Title -->


        <!-- Random Case Studies -->
        <div class="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-2"
             data-slides-show="4"
             data-slides-scroll="1"
             data-pagi-classes="text-center u-slick__pagination mt-7 mb-0"
             data-responsive='[{
               "breakpoint": 1200,
               "settings": {
                 "slidesToShow": 3
               }
             }, {
               "breakpoint": 992,
               "settings": {
                 "slidesToShow": 2
               }
             }, {
               "breakpoint": 768,
               "settings": {
                 "slidesToShow": 2
               }
             }, {
               "breakpoint": 554,
               "settings": {
                 "slidesToShow": 1
               }
             }]'>
          
          <!-- Blog Grid -->
          <div v-for="(caseStudy,index) in randomCaseStudiesArray" class="js-slide card border-0 mb-3">
            <div class="card-body p-5">
              <small class="d-block text-muted mb-2">{{caseStudy.date}}</small>
              <a :href="'/casestudies/'+caseStudy.slug"><img :src=" '../public_assets/casestudies/' + caseStudy.thumb " :alt="caseStudy.title" class="img-fluid rounded"></a>
              <h5 class="h6 mt-3">
                <a :href="'/casestudies/'+caseStudy.slug">{{caseStudy.title}}</a>
              </h5>
            </div>
          </div>
          <!-- End Blog Grid -->

        
        </div>
        <!-- End Random Case Studies -->
      </div>
    </div>
    <!-- End Case Studies Section -->







    <!-- Testimonials Section -->
    <div class="bg-white">
      <div class="container space-2 space-lg-2">
        <div class="w-md-80 w-lg-80 mx-md-auto">
          <!-- Quote -->
          <figure class="mx-auto text-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px"
               viewBox="0 0 8 8" style="enable-background:new 0 0 8 8;" xml:space="preserve">
              <path class="fill-gray-400" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
                C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
                c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
                C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"/>
            </svg>
          </figure>
          <!-- End Quote -->

          <div class="js-slick-carousel u-slick"
               data-fade="true"
               data-autoplay="true"
               data-autoplay-speed="7000"
               data-pagi-classes="text-center u-slick__pagination mt-4 mb-0">



            <!-- Testimonial -->
            <div class="js-slide">
              <div class="text-center mb-5">
                <blockquote class="h1">I need to be agile. The biggest selling point was the way we could quickly create and configure beautiful, useful real-time visualisations and dashboards ourselves.</blockquote>
              </div>
              <div class="d-flex justify-content-center align-items-center w-lg-50 mx-auto">
                <div class="u-avatar">
                  <img class="img-fluid rounded-circle" src="@/assets/buzzradar/img/testimonials/amygoodnow.png" alt="Jeremy Waite - Chief Strategy Officer at IBM">
                </div>
                <div class="ml-3">
                  <h4 class="h6 mb-0">Amy Goodnow</h4>
                  <small class="text-muted">Insights & Analytics Manager for Hallmark</small>
                </div>
              </div>
            </div>
            <!-- End Testimonial -->
            

            <!-- Testimonial -->
            <div class="js-slide">
              <div class="text-center mb-5">
                <blockquote class="h1">As soon as I saw the platform<br>I knew we had to have it.</blockquote>
              </div>
              <div class="d-flex justify-content-center align-items-center w-lg-50 mx-auto">
                <div class="u-avatar">
                  <img class="img-fluid rounded-circle" src="@/assets/buzzradar/img/testimonials/jeremy.jpg" alt="Jeremy Waite - Chief Strategy Officer at IBM">
                </div>
                <div class="ml-3">
                  <h4 class="h6 mb-0">Jeremy Waite</h4>
                  <small class="text-muted">Chief Strategy Officer at IBM</small>
                </div>
              </div>
            </div>
            <!-- End Testimonial -->


            <!-- Testimonial -->
            <div class="js-slide">
              <div class="text-center mb-5">
                <blockquote class="h1">The types of Insight Buzz Radar gives us access to is really deep. At a glance the team see really powerful information communicated in an extremely attractive presentation.</blockquote>
              </div>
              <div class="d-flex justify-content-center align-items-center w-lg-50 mx-auto">
                <div class="u-avatar">
                  <img class="img-fluid rounded-circle" src="@/assets/buzzradar/img/testimonials/michaeldelacruz.png" alt="Jeremy Waite - Chief Strategy Officer at IBM">
                </div>
                <div class="ml-3">
                  <h4 class="h6 mb-0">Michael de la Cruz</h4>
                  <small class="text-muted">Director at FX Networks</small>
                </div>
              </div>
            </div>
            <!-- End Testimonial -->

          </div>
        </div>
      </div>
    </div>
    <!-- End Testimonials Section -->
















  </div>

</template>



<script>

  import AllCaseStudiesEntries from '../../../statics/CaseStudiesEntries.json';

  export default {

    name : 'newspr',
    data : function() {
      return {
        styleParallaxBg1 : {
          backgroundImage : 'url('+require('@/assets/buzzradar/svg/components/bg-elements-7.svg')+')',
          height : '120%',
        },
        caseStudies : AllCaseStudiesEntries.casesentries
      }
    },
    mounted() {
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    },
    computed: {
      randomCaseStudiesArray : function() {

        var caseStudiesArray = [];    
        var _this = this;
        var arr = [];
        while(arr.length < 8){
            var r = Math.floor(Math.random() * (this.caseStudies.length-1) ) + 1;
            if(arr.indexOf(r) === -1) {
              arr.push(r);
              caseStudiesArray.push(this.caseStudies[r]);
            }
        }
        
        console.log(caseStudiesArray);

        return caseStudiesArray;
      }
    }, 
    methods : {
      bookMeeting : function(e) {
        e.preventDefault();
        Calendly.showPopupWidget('https://calendly.com/buzzradar/introduction-meeting');
        return false;
      }
    } 
    
  }

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

