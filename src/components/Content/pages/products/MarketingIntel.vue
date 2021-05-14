<template>
  
  <div>

    <!-- Hero Section -->
    <div id="parallaxDOM" class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll" data-options='{direction: "normal"}'>
    <!-- Apply your Parallax background image here -->
    <div class="divimage dzsparallaxer--target" :style="heroBgImage"></div>
    <!-- Content -->
    <div class="container space-3 space-top-md-4 space-bottom-md-3">
      <div class="w-lg-75">
        <h1 class="display-5 font-size-md-down-5 font-weight-bold mb-2 text-white">
          A faster, smarter way <br class="d-block d-md-none"><br class="d-none d-md-block">to run your <strong class="text-primary">marketing.</strong>
          <br>
        </h1>
        <h3 class="text-white">Buzz Radar connects the sea of marketing data created around your organisation and turns it into actionable, intelligent insights.</h3>
        <button v-on:click="bookMeeting" type="button" class="btn btn-sm btn-primary transition-3d-hover try-now-btn mt-2" tabindex="0">Book a Demo Now</button>
      </div>
    </div>
    <!-- End Content -->      
    </div>
    <!-- End Hero Section -->









    <!-- The next Generation -->
    <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
      <!-- Apply your Parallax background image here -->
      <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>
      <div class="container space-2 space-md-3">
          <div class="row align-items-lg-center">
            <div class="col-lg-6 mb-7 mb-lg-0">
              <!-- Title -->
              <div class="pr-lg-4">

                <h2 class="h4 font-weight-semi-bold text-secondary">Deep insight and context without the headaches</h2>
                <p class="mb-0">The Buzz Radar insights platform is the fastest, easiest way of gaining deep insight from your data. With it’s easy-to-use, fast, intuitive UX, any team member can jump in and gain deeper insight from across your marketing channels in moments.</p>
                <!-- <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="#">Try It for Free<span class="fas fa-angle-right ml-2"></span></a> -->
              </div>
              <!-- End Title -->
            </div>

            <div class="offset-lg-1 col-lg-5 order-lg-1">
              <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/marketingplatform/deepinsight.jpg" alt="The next generation in Audience and Content Optimisation">
            </div>

          </div>
        </div>
      </div>
      <!-- The next Generation -->




      <!-- Helping Creatives -->
      <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
        <!-- Apply your Parallax background image here -->
        <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>
        <div class="container space-1">
          <div class="row align-items-lg-center">
            <div class="col-lg-6 offset-lg-1 order-lg-2 mb-7 mb-lg-0">
              <!-- Title -->
              <div class="pl-lg-4">
                <!-- <span class="btn btn-icon btn-soft-warning rounded-circle mb-3">
                  <span class="font-weight-semi-bold btn-icon__inner">2.</span>
                </span> -->
                <h2 class="h4 font-weight-semi-bold text-secondary">Historical and predictive AI-driven insight</h2>
                <p class="mb-0">With the ability to jump backwards and forwards in time, It’s packed full of different ways to explore insights. No pivot tables or complex interpretations -- with a simple click, get context to what you are seeing. And with AI analysis of peaks and dips, you can get meaningful answers fast.</p>
                <!-- <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="#">See the Case Study<span class="fas fa-angle-right ml-2"></span></a> -->
              </div>
              <!-- End Title -->
            </div>

            <div class="col-lg-5 order-lg-1">
              <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/marketingplatform/historical.jpg" alt="The next generation in Audience and Content Optimisation">
            </div>
          </div>
        </div>
      </div>
      <!-- Helping Creatives -->





      <!-- Personas And Tribes -->
      <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
        <!-- Apply your Parallax background image here -->
        <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>
        <div class="container space-2 space-md-3">
            <div class="row align-items-lg-center">
              <div class="col-lg-6 mb-7 mb-lg-0">
                <!-- Title -->
                <div class="pr-lg-4">
                  <!-- <span class="btn btn-icon btn-soft-warning rounded-circle mb-3">
                    <span class="font-weight-semi-bold btn-icon__inner">3.</span>
                  </span> -->
                  <h2 class="h4 font-weight-semi-bold text-secondary">Rich, powerful reporting and actionable alerts</h2>
                  <p class="mb-0">Automatically generated and beautifully presented reports communicate all the critical insights to your organisation in a way that even the least data confident team member can gain understanding from -- all of which can be triggered and delivered based on events happening in real-time.</p>
                  <!-- <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="#">See the Case Study<span class="fas fa-angle-right ml-2"></span></a> -->
                </div>
                <!-- End Title -->
              </div>

              <div class="offset-lg-1 col-lg-5 order-lg-1">
                <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/marketingplatform/rich_powerful.jpg" alt="The next generation in Audience and Content Optimisation">
              </div>

            </div>
          </div>
        </div>
        <!-- Personas And Tribes -->














      <!-- Watson Image for Mobile -->
      <div class="container position-relative d-block d-md-none">
          <div class="row p-3">
            <div class="col-md-12">
                <div class="position-relative min-height-250">
                  <img class="img-fluid rounded" src="@/assets/buzzradar/img/marketingplatform/watsonibm.jpg" alt="Watson IBM">
                  <a class="u-media-player u-media-player--centered text-center" href="#">
                    <h2 class="text-primary text-white">AI-generated insights & recommendations</h2>
                    <h5 class="h6 text-white">Powered by IBM Watson</h5>
                  </a>
                </div>
            </div>

          </div>
      </div>
      <!-- Watson Image for Mobile -->









      <!-- Video Content Section -->
      <div id="SVGwave2Shape" class="svg-preloader position-relative min-height-450 d-none d-md-block">
        
        <div class="js-bg-video position-absolute w-100 h-100"
             :data-hs-bgv-path="watsonVideoURL"
             data-hs-bgv-loop="1">
        </div>

        <!-- Play Button Js-Fancybox -->
        <a class="u-media-player u-media-player--centered text-center" href="#">
          <h2 class="text-primary text-white">AI generated insights & recommendations</h2>
          <h5 class="text-white">Powered by Watson</h5>
          <a class="btn btn-sm btn-white btn-wide mt-3" href="/aiaudienceanalysis">Find out More <span class="fas fa-angle-right ml-2"></span></a>
        </a>
        <!-- Play Button Js-Fancybox -->

        <!-- SVG Top Shape -->
        <figure class="position-absolute top-0 right-0 left-0">
          <img class="js-svg-injector" src="@/assets/buzzradar/svg/components/wave-2-top.svg" alt="Image Description"
               data-parent="#SVGwave2Shape">
        </figure>
        <!-- End SVG Top Shape -->

        <!-- SVG Bottom Shape -->
        <figure class="position-absolute right-0 bottom-0 left-0">
          <img class="js-svg-injector" src="@/assets/buzzradar/svg/components/wave-2-bottom.svg" alt="Image Description"
               data-parent="#SVGwave2Shape">
        </figure>
        <!-- End SVG Bottom Shape -->
      </div>
      <!-- Video Content Section -->
      




















      <!-- Icon Blocks Section -->
      <div id="how-it-works" class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
        <!-- Apply your Parallax background image here -->
        <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>
        <div class="container space-top-1 space-bottom-md-3 space-bottom-">
          <!-- Title -->
          <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-4">
            <h2>How It Works</h2>
          </div>
          <!-- End Title -->

          <div class="row">
            <div class="col-md-4 mb-7">
              <div class="text-center px-lg-3">
                <!-- SVG Icon -->
                <figure @mouseover="overHowWorksIcon" @mouseleave="leaveHowWorksIcon" class="ie-app-development icon-clickable pl-9 pr-9" data-type="socialtracking">
                  <img class="js-svg-injector" src="@/assets/buzzradar/img/marketingplatform/svg/social_tracking.svg" alt="Social Tracking">
                </figure>
                <!-- End SVG Icon -->
                <h3 class="h5 mt-3">Social Intelligence</h3>
                <p class="mb-md-0">Access award-winning social tracking capability across nearly all major social channels.</p>
                <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="/marketingintelplatform/socialintelligence">Find out More <span class="fas fa-angle-right ml-2"></span></a>
              </div>
            </div>

            <div class="col-md-4 mb-7">
              <div class="text-center px-lg-3">
                <!-- SVG Icon -->
                <figure @mouseover="overHowWorksIcon" @mouseleave="leaveHowWorksIcon" class="ie-app-development icon-clickable pl-9 pr-9" data-type="paidmedia">
                  <img class="js-svg-injector" src="@/assets/buzzradar/img/marketingplatform/svg/paid_media.svg" alt="Paid Media">
                </figure>
                <!-- End SVG Icon -->
                <h3 class="h5 mt-3">Paid Media Analysis</h3>
                <p class="mb-md-0">Receive insights and detailed reports on your performance for Facebook Ads and Google Adwords.</p>
                <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="/marketingintelplatform/paidmedia">Find out More <span class="fas fa-angle-right ml-2"></span></a>
              </div>
            </div>

            <div class="col-md-4 mb-7">
              <div class="text-center px-lg-3">
                <!-- SVG Icon -->
                <figure @mouseover="overHowWorksIcon" @mouseleave="leaveHowWorksIcon" class="ie-app-development icon-clickable pl-9 pr-9" data-type="newspr">
                  <img class="js-svg-injector" src="@/assets/buzzradar/img/marketingplatform/svg/news_pr.svg" alt="News PR">
                </figure>
                <!-- End SVG Icon -->
                <h3 class="h5 mt-3">News & PR Monitoring</h3>
                <p class="mb-md-0">Capture and analyse data from all your PR campaigns across 3M+ news outlets and blogs.</p>
                <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="/marketingintelplatform/newspr">Find out More <span class="fas fa-angle-right ml-2"></span></a>
              </div>
            </div>
          </div>

          <img id="how-works-arrows" class="img-fluid d-none d-md-block w-75 mx-auto mb-7" src="@/assets/buzzradar/svg/components/pointer-arrows-socialtracking.svg" alt="SVG Arrow">

          <!-- Mockup Browser -->
          <div class="u-browser-v1 mx-auto mb-4">
            <!-- SVG Background Shape -->
            <figure id="SVGbgShapeID1" class="svg-preloader ie-soft-triangle-shape">
              <img class="js-svg-injector" src="@/assets/buzzradar/svg/components/soft-triangle-shape.svg" alt="Image Description"
                   data-parent="#SVGbgShapeID1">
            </figure>
            <!-- End SVG Background Shape -->

            <!-- Mockup Browser -->
            <figure id="SVGBrowserShape" class="svg-preloader ie-browser u-browser-v1__svg">
              <img class="js-svg-injector how-works-main-photo" src="@/assets/buzzradar/svg/illustrations/browser.svg" alt="Image Description"
                   :data-img-paths="objDataImgMaskBrowser"
                   data-parent="#SVGBrowserShape">
            </figure>
            <!-- End Mockup Browser -->


            <figure id="kk">
              
            </figure>


          </div>
          <!-- End Mockup Browser -->

        </div>
      </div>
      <!-- End Icon Blocks Section -->




  </div>

</template>



<script>

 	export default {

 		name : 'MarketingIntel',
    data () {
      return {
        watsonVideoURL : process.env.BASE_URL + 'public_assets/html5-video/ibm-watson/ibm-watson',
        heroBgImage : {
          height : '120%',
          backgroundImage : 'url("'+require('@/assets/buzzradar/img/marketingplatform/heroimage.jpg')+'")',
        },
        styleParallaxBg1 : {
          backgroundImage : 'url('+require('@/assets/buzzradar/svg/components/bg-elements-7.svg')+')',
          height : '120%',
        },
        objDataImgMaskBrowser: JSON.stringify([{ "targetId": "#SVGBrowserShapeImg1", "newPath": require('@/assets/buzzradar/img/marketingplatform/socialtracking-insights.jpg') }]),
      }
    },
    mounted() {
      if( $('#SVGwave2Shape').is(":visible") ){
        $.HSCore.components.HSBgVideo.init('.js-bg-video');
      }
      $.HSCore.components.HSFancyBox.init('.js-fancybox');
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
      dzsprx_init('#parallaxDOM', { direction: "normal", mode_scroll:"fromtop"} );
      dzsprx_init('.dzsparallaxer', { direction: "normal"} );
    },
    updated() {
      
    },
    methods : {
      bookMeeting : function(e) {
        e.preventDefault();
        Calendly.showPopupWidget('https://calendly.com/buzzradar/introduction-meeting');
        return false;
      },
      overHowWorksIcon : function(e){
        var newImgPath = require('@/assets/buzzradar/img/marketingplatform/'+$(e.currentTarget).data('type')+'-insights.jpg');
        $('#SVGBrowserShapeImg1').attr('xlink:href',newImgPath);

        //now change color of the arrow
        $('#how-works-arrows').attr('src',require('@/assets/buzzradar/svg/components/pointer-arrows-'+$(e.currentTarget).data('type')+'.svg'));
      },
      leaveHowWorksIcon : function(e){
        //console.log('leaveHowWorksIcon');
      }
    },
    
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

  .icon-clickable{
    cursor:pointer !important;
    text-align: center;
  }

</style>

