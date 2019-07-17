<template>
  
  <div>

    <!-- Hero Section -->
    <div class="gradient-overlay-half-primary-video-v1" data-vide-bg="assets/video/bg2" data-vide-options="position: 0% 50%;">
        
      <!-- Video Background -->

      <!-- <div class="js-bg-video d-none d-md-block position-absolute w-100 h-100"
           data-hs-bgv-type="youtube"
           data-hs-bgv-id="X4tUY12u2Nk"
           data-hs-bgv-loop="true">
      </div> -->

      <video class="" poster="" autoplay muted loop>
          <source src="@/assets/buzzradar/media/html5-video/test_universe.mp4" type="video/mp4">
          <!-- <source src="@/assets/buzzradar/media/html5-video/bg.webm" type="video/webm"> -->
          <!-- <source src="@/assets/buzzradar/media/html5-video/bg.ogv" type="video/ogg"> -->
          Your browser doesn\'t support HTML5 video.
      </video>

      <!-- End Video Background -->

      <div class="position-relative z-index-2">
        <!-- Content -->
        <div class="d-md-flex">
          <div class="container d-md-flex align-items-md-center min-height-md-100vh text-center space-3 space-top-md-4 space-top-lg-3">
            <div class="row justify-content-md-center w-100">
              <div class="col-md-12">
                
                <div class="container position-relative z-index-2">

                  <!-- Title -->
                  <div class="text-left mb-7">
                    <div class="circle"></div>
                    <div class="w-lg-80 mx-auto">
                      <h1 class="display-4 font-size-md-down-5 text-white mb-3"><span class="font-weight-semi-bold">Unlock</span> your social and audience data with smarter insights</h1>
                    </div>
                    <!-- <div class="w-md-80 w-lg-80 mx-auto">
                      <p class="lead text-white-70">Achieve virtually any design and layout from within the one template. Attract more visitors, and win more business with Front template.</p>
                    </div> -->
                  </div>
                  <!-- End Title -->

                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- End Content -->

      </div>

      <div class="d-lg-none position-absolute top-0 right-0 bottom-0 left-0 bg-img-hero" style="background-image: url(assets_theme/img/1920x1080/img20.jpg);"></div>
    </div>
    <!-- End Hero Section -->











    <!-- Mockup Block -->
    <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
      <!-- Apply your Parallax background image here -->
      <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>

      <div class="container space-2 space-md-3">
        <div class="row align-items-lg-center">
          <div class="col-lg-5 mb-7 mb-lg-0">
            <!-- Title -->
            <div class="pr-lg-4">
              <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
                <span class="small font-weight-semi-bold btn-icon__inner">01.</span>
              </span>
              <h2 class="h4 font-weight-semi-bold text-primary">Empower your team to make brillant data driven decisions</h2>
              <p class="mb-0">Using AI and Social data we can unlock powerful insights about your audience and then help communicate in straightforward engaging ways. Allowing anyone inside an organisation to gain understanding, make smarter decisions and improved results.</p>
            </div>
            <!-- End Title -->
          </div>



          <div id="SVGellipseMockup2" class="col-md-5 offset-md-1 svg-preloader">

            <!-- Play Button Js-Fancybox -->
            <a class="js-fancybox u-media-player u-media-player--centered" href="#"
              data-src="//vimeo.com/274111261"
               data-speed="700"
               data-animate-in="zoomIn"
               data-animate-out="zoomOut"
               data-caption="Front - Responsive Website Template"
                >
              <span class="u-media-player__icon">
                <span class="fas fa-play u-media-player__icon-inner"></span>
              </span>
            </a>
            <!-- Play Button Js-Fancybox -->


            <!-- SVG Mockup -->
            <figure class="ie-ellipse-mockup">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/ellipse-mockup.svg" alt="Image Description"
                   :data-img-paths="objDataImgMask3"
                   data-parent="#SVGellipseMockup2">
            </figure>
            <!-- End SVG Mockup -->
          </div>





        </div>
      </div>

    </div>
    <!-- End Mockup Block -->

    <!-- Mockup Block -->
    <div class="container space-1">
      <div class="row align-items-lg-center">
        <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
          <!-- Title -->
          <div class="pl-lg-4">
            <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
              <span class="small font-weight-semi-bold btn-icon__inner">02.</span>
            </span>
            <h2 class="h4 font-weight-semi-bold text-primary">Great insights can be hard to uncover and even harder to communicate</h2>
            <p class="mb-0">No matter how powerful the insight, if it’s not delivered to the right person at the right moment in the right way it can be rendered useless. We think this happens far too frequently so Buzz Radar’s smart alerts, real-time dashboards and  intuitive on demand reporting are focuses on making lost insights a thing of the past.</p>
          </div>
          <!-- End Title -->
        </div>

        <div id="SVGappDevelopment" class="col-lg-7 order-lg-1 svg-preloader">
          <!-- SVG Icon -->
          <figure class="ie-app-development">
            <img class="js-svg-injector" src="@/assets/svg/illustrations/app-development.svg" alt="SVG Illustration"
                 data-parent="#SVGappDevelopment">
          </figure>
          <!-- End SVG Icon -->
        </div>
      </div>
    </div>
    <!-- End Mockup Block -->

    <!-- Mockup Block -->
    <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
      <!-- Apply your Parallax background image here -->
      <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>
    
      <div class="container space-2 space-md-3">
        <div class="row align-items-lg-center">
          <div class="col-lg-5 mb-7 mb-lg-0">
            <!-- Title -->
            <div class="pr-lg-4">
              <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
                <span class="small font-weight-semi-bold btn-icon__inner">03.</span>
              </span>
              <h2 class="h4 font-weight-semi-bold text-primary">Groundbreaking AI driven Social Intelligence</h2>
              <p class="mb-0">Learn how we’ve built a psychometric AI to uncover the most intimate and powerful map of audience interests, personality traits and consumer preferences and how it can revolutionise your marketing.</p>
            </div>
            <!-- End Title -->
          </div>

          <div id="SVGbusinessAnalysis" class="col-lg-7 svg-preloader">
            <!-- SVG Icon -->
            <figure class="ie-business-analysis">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/business-analysis.svg" alt="SVG Illustration"
                   data-parent="#SVGbusinessAnalysis">
            </figure>
            <!-- End SVG Icon -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Mockup Block -->





    


    <!-- Testimonials Section -->
    <div class="bg-light">
      <div class="container space-2">
        <!-- Title -->
        <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-6">
          <h2 class="h3 font-weight-normal">What our clients think of us</h2>
        </div>
        <!-- End Title -->

        <!-- Slick Carousel -->
        <div class="js-slick-carousel u-slick u-slick-zoom u-slick--gutters-3"
             data-slides-show="3"
             data-center-mode="true"
             data-autoplay="true"
             data-speed="5000"
             data-pagi-classes="text-center u-slick__pagination mt-7 mb-0"
             data-responsive='[{
               "breakpoint": 992,
               "settings": {
                 "slidesToShow": 2
               }
             }, {
               "breakpoint": 768,
               "settings": {
                 "slidesToShow": 1
               }
             }]'>
          <div class="js-slide my-4">
            <!-- Testimonials -->
            <div class="u-slick-zoom__slide text-center">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-7">
                  <p class="mb-0">The template is really nice and offers quite a large set of options. It's beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                </div>
              </div>
              <div class="position-relative z-index-2 mt-n5 mb-3">
                <div class="u-avatar mx-auto">
                  <img class="img-fluid rounded-circle" src="@/assets/img/100x100/img1.jpg" alt="Image Description">
                </div>
              </div>
              <h4 class="h6 mb-0">Maria Muszynska</h4>
              <p class="small">Google</p>
            </div>
            <!-- End Testimonials -->
          </div>

          <div class="js-slide my-4">
            <!-- Testimonials -->
            <div class="u-slick-zoom__slide text-center">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-7">
                  <p class="mb-0">The template is really nice and offers quite a large set of options. It's beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                </div>
              </div>
              <div class="position-relative z-index-2 mt-n5 mb-3">
                <div class="u-avatar mx-auto">
                  <img class="img-fluid rounded-circle" src="@/assets/img/100x100/img2.jpg" alt="Image Description">
                </div>
              </div>
              <h4 class="h6 mb-0">Massalha Shady</h4>
              <p class="small">Apple</p>
            </div>
            <!-- End Testimonials -->
          </div>

          <div class="js-slide my-4">
            <!-- Testimonials -->
            <div class="u-slick-zoom__slide text-center">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-7">
                  <p class="mb-0">The template is really nice and offers quite a large set of options. It's beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                </div>
              </div>
              <div class="position-relative z-index-2 mt-n5 mb-3">
                <div class="u-avatar mx-auto">
                  <img class="img-fluid rounded-circle" src="@/assets/img/100x100/img3.jpg" alt="Image Description">
                </div>
              </div>
              <h4 class="h6 mb-0">Mark McManus</h4>
              <p class="small">Microsoft</p>
            </div>
            <!-- End Testimonials -->
          </div>

          <div class="js-slide my-4">
            <!-- Testimonials -->
            <div class="u-slick-zoom__slide text-center">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-7">
                  <p class="mb-0">The template is really nice and offers quite a large set of options. It's beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                </div>
              </div>
              <div class="position-relative z-index-2 mt-n5 mb-3">
                <div class="u-avatar mx-auto">
                  <img class="img-fluid rounded-circle" src="@/assets/img/100x100/img4.jpg" alt="Image Description">
                </div>
              </div>
              <h4 class="h6 mb-0">Alex Pottorf</h4>
              <p class="small">Github</p>
            </div>
            <!-- End Testimonials -->
          </div>
        </div>
        <!-- End Slick Carousel -->
      </div>
    </div>
    <!-- End Testimonials Section -->


























    <!-- Our Story Section -->
    <!-- <div id="ourStorySection" class="space-bottom-2 svg-preloader container space-top-1 space-top-md-3">
      <div class="w-lg-75 position-relative p-lg-9 mx-lg-auto">
        
        <div class="bg-white shadow rounded p-2">

          <div class="height-400 bg-img-hero-center" :style="bgImageVideoObject">

            <a class="js-fancybox u-media-player u-media-player--centered" href="javascript:;"
               data-src="//vimeo.com/274111261"
               data-speed="700"
               data-animate-in="zoomIn"
               data-animate-out="zoomOut"
               data-caption="Front - Responsive Website Template">
              <span class="u-media-player__icon u-media-player__icon--lg">
                <span class="fas fa-play u-media-player__icon-inner mr-1"></span>
              </span>
            </a>
          </div>
        </div>

        <div class="content-centered-y w-75 z-index-n1">
          <figure class="ie-abstract-shapes-7">
            <img class="js-svg-injector" src="@/assets/svg/components/abstract-shapes-7.svg" alt="Image Description"
                 data-parent="#ourStorySection">
          </figure>
        </div>
        
      </div>
    </div> -->
    <!-- Our Story Section -->










<!-- Clients Section -->
    <div class="container-fluid space-top-2 px-2">
      <div class="js-slick-carousel u-slick u-slick--gutters-1"
           data-autoplay="true"
           data-speed="5000"
           data-infinite="true"
           data-slides-show="6"
           data-responsive='[{
             "breakpoint": 1200,
             "settings": {
               "slidesToShow": 4
             }
           }, {
             "breakpoint": 992,
             "settings": {
               "slidesToShow": 4
             }
           }, {
             "breakpoint": 768,
             "settings": {
               "slidesToShow": 3
             }
           }, {
             "breakpoint": 576,
             "settings": {
               "slidesToShow": 3
             }
           }, {
             "breakpoint": 480,
             "settings": {
               "slidesToShow": 2
             }
           }]'>
        <div class="js-slide">
          <div class="py-9 px-3">
            <img class="u-clients" src="@/assets/svg/clients-logo/amazon.svg" alt="Image Description">
          </div>
        </div>
        <div class="js-slide">
          <div class="py-9 px-3">
            <img class="u-clients" src="@/assets/svg/clients-logo/shopify.svg" alt="Image Description">
          </div>
        </div>
        <div class="js-slide">
          <div class="py-9 px-3">
            <img class="u-clients" src="@/assets/svg/clients-logo/paypal.svg" alt="Image Description">
          </div>
        </div>
        <div class="js-slide">
          <div class="py-9 px-3">
            <img class="u-clients" src="@/assets/svg/clients-logo/slack.svg" alt="Image Description">
          </div>
        </div>
        <div class="js-slide">
          <div class="py-9 px-3">
            <img class="u-clients" src="@/assets/svg/clients-logo/samsung.svg" alt="Image Description">
          </div>
        </div>
        <div class="js-slide">
          <div class="py-9 px-3">
            <img class="u-clients" src="@/assets/svg/clients-logo/google.svg" alt="Image Description">
          </div>
        </div>
        <div class="js-slide">
          <div class="py-9 px-3">
            <img class="u-clients" src="@/assets/svg/clients-logo/lenovo.svg" alt="Image Description">
          </div>
        </div>
        <div class="js-slide">
          <div class="py-9 px-3">
            <img class="u-clients" src="@/assets/svg/clients-logo/spotify.svg" alt="Image Description">
          </div>
        </div>
      </div>
    </div>
    <!-- End Clients Section -->


















    

  </div>

</template>



<script>

  export default {

    name : 'Home',
    data () {
      return {

        objDataImgMask3: JSON.stringify([{ "targetId": "#SVGellipseMockupImg1", "newPath": require('@/assets/buzzradar/img/615x750/empower.jpg') }]),

        bgImageVideoObject : {
          backgroundImage : 'url('+require('@/assets/buzzradar/img/900x450/br_home_video_poster.jpg')+')',
        },
        testimonialBgImage : {
          backgroundImage : 'url('+require('@/assets/buzzradar/img/1920x600/jeremy.jpg')+')',
        },

        styleParallaxBg1 : {
          backgroundImage : 'url('+require('@/assets/buzzradar/svg/components/bg-elements-7.svg')+')',
          height : '120%',
        },
        




      }
    },
    mounted() {
      $('.js-bg-video').hsBgVideo();
      $.HSCore.components.HSFancyBox.init('.js-fancybox');
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    },
    
  }

 </script>








<style lang="scss" scoped>

  @import "compass";

  video {
    position:absolute;
    width:100%;
    height:100%;
    Background: black;
    object-fit: cover;
  }

  .circle{
    width:100px;
    height:100px;
    border-radius:50px;
    background:#07a9c2;
    position: absolute;
    left:0px;
  }
   

  @media (min-width: 320px) and (max-width: 480px) {
    
    video {
      //display: none;
    }
    
  }

</style>

