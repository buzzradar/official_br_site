<template>
  
  <div>

    <!-- Hero Section -->
    <div id="SVGheroBGShapes" class="svg-preloader position-relative overflow-hidden space-bottom-2 space-bottom-lg-4">
      <div class="gradient-half-warning-v2 space-bottom-2">
        <!-- Content -->
        <div class="container space-top-3 space-top-md-5 space-top-lg-4">
          <div class="row">
            <div class="col-md-6 position-relative z-index-2">
              <div class="mb-4">
                <h1 class="display-4 text-white font-weight-normal">A faster, smarter way to run your <strong>marketing</strong></h1>
              </div>
              <div class="mb-7">
                <p class="lead text-white">Buzz Radar connects the sea of marketing data created by your organization and with the help of IBM’s Watson AI turns it into actionable, intelligent insights.</p>
              </div>

              <!-- Fancybox -->
              <a class="js-fancybox btn btn-outline-light btn-wide  mb-2 mb-sm-0 mr-sm-2" href="javascript:;"
                 data-src="//vimeo.com/274111261"
                 data-speed="700"
                 data-animate-in="zoomIn"
                 data-animate-out="zoomOut"
                 data-caption="Front - Responsive Website Template">
                <small class="fas fa-play mr-2"></small>
                Play Video
              </a>
              <!-- End Fancybox -->

            </div>
          </div>
        </div>
        <!-- End Content -->

        <!-- Mockup Devices v1 -->
        <div class="d-none d-md-flex align-items-end u-devices-v1">
          <!-- SVG Phone Mockup -->
          <div class="u-devices-v1__phone">
            <div class="u-devices-v1__phone-svg">
              <figure class="ie-devices-v1-phone">
                <img class="js-svg-injector" src="@/assets/svg/components/iphone.svg" alt="Image Description"
                     :data-img-paths="objDataImgMaskIphone"
                     data-parent="#SVGheroBGShapes">
              </figure>
            </div>
          </div>
          <!-- End SVG Phone Mockup -->

          <!-- SVG Tablet Mockup -->
          <div class="u-devices-v1__tablet">
            <div class="u-devices-v1__tablet-svg">
              <figure class="ie-devices-v1-tablet">
                <img class="js-svg-injector" src="@/assets/svg/components/tablet.svg" alt="Image Description"
                     :data-img-paths="objDataImgMaskTablet"
                     data-parent="#SVGheroBGShapes">
              </figure>
            </div>
          </div>
          <!-- End SVG Tablet Mockup -->
        </div>
        <!-- End Mockup Devices v1 -->

        <!-- SVG Shapes -->
        <div class="w-25 position-absolute top-0 left-0">
          <figure class="ie-wave-6-top-left">
            <img class="js-svg-injector" src="@/assets/svg/components/wave-6-top-left.svg" alt="Image Description"
                 data-parent="#SVGheroBGShapes">
          </figure>
        </div>
        <!-- End SVG Shapes -->
      </div>
    </div>
    <!-- End Hero Section -->










    <!-- Blog News Section -->
    <div class="container space-bottom-lg-3 px-lg-7 p-5 p-md-0">

        <!-- Title -->
        <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
          <h2>How do we do It?</h2>
        </div>
        <!-- End Title -->

        <div class="row">

          <div class="card-deck card-sm-gutters-2 d-block d-md-flex">
            
            <!-- Card -->
            <div class="card text-center mb-4 mb-md-0">
              <div class="card-body space-1 px-5">
                <!-- Title -->
                <div class="pr-lg-4">
                  <!-- <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
                    <span class="small font-weight-semi-bold btn-icon__inner">01.</span>
                  </span> -->
                  <span class="btn btn-icon btn-lg btn-soft-danger rounded-circle mb-5">
                    <span class="fab fa-yelp fa-2x btn-icon__inner"></span>
                  </span>
                  <h2 class="h4 font-weight-semi-bold text-primary">Deep insight and context without the headaches</h2>
                  <p class="mb-0">The Buzz Radar insights platform is the fastest, easiest way of gaining deep insight from your data. with it’s easy-to-use, fast, intuitive UX any team member can jump in and gain deeper insight from across your marketing channels in moments.</p>
                </div>
                <!-- End Title -->
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div class="card text-center mb-4 mb-md-0">
              <div class="card-body space-1 px-5">
                <!-- Title -->
                <div class="pr-lg-4">
                  <span class="btn btn-icon btn-lg btn-soft-primary rounded-circle mb-5">
                    <span class="fas fa-fire fa-2x btn-icon__inner"></span>
                  </span>
                  <h2 class="h4 font-weight-semi-bold text-primary">Historical and predictive AI driven insight</h2>
                  <p class="mb-0">
                    With the ability to jump backwards and forwards in time It’s packed full of different ways to explore insights. No pivot tables or complex interpretations. With a simple click get context to what you are seeing and with AI analysis of peaks and dips you can get meaningful answers fast.
                  </p>
                </div>
                <!-- End Title -->
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div class="card text-center mb-4 mb-md-0">
              <div class="card-body space-1 px-5">
                <!-- Title -->
                <div class="pr-lg-4">
                  <span class="btn btn-icon btn-lg btn-soft-success rounded-circle mb-5">
                    <span class="fab fa-whmcs fa-2x btn-icon__inner"></span>
                  </span>
                  <h2 class="h4 font-weight-semi-bold text-primary">Rich, powerful reporting and actionable alerts</h2>
                  <p class="mb-0">With automatically generated and beautifully presented reports that communicate all the critical insights to your organisation in a way that even the least data confident team member can gain understanding from.  All of which can be triggered and delivered based on events happening in real-time.</p>
                </div>
                <!-- End Title -->
              </div>
            </div>
            <!-- End Card -->

           
          </div>
            
        </div>          
    </div>
    <!-- End Blog News Section -->





























    <!-- Video Content Section -->
    <div id="SVGwave2Shape" class="svg-preloader position-relative min-height-450 d-none d-md-block">
      
      <div class="js-bg-video position-absolute w-100 h-100"
           :data-hs-bgv-path="`${publicPath}public_assets/html5-video/ibm-watson/ibm-watson`"
           data-hs-bgv-loop="1">
      </div>

      <!-- Play Button Js-Fancybox -->
      <a class="u-media-player u-media-player--centered text-center" href="#">
        <h2 class="text-primary text-white">AI generated insights & recommendations</h2>
        <h5 class="text-white">Powered by Watson</h5>
      </a>
      <!-- Play Button Js-Fancybox -->

      <!-- SVG Top Shape -->
      <figure class="position-absolute top-0 right-0 left-0">
        <img class="js-svg-injector" src="@/assets/svg/components/wave-2-top.svg" alt="Image Description"
             data-parent="#SVGwave2Shape">
      </figure>
      <!-- End SVG Top Shape -->

      <!-- SVG Bottom Shape -->
      <figure class="position-absolute right-0 bottom-0 left-0">
        <img class="js-svg-injector" src="@/assets/svg/components/wave-2-bottom.svg" alt="Image Description"
             data-parent="#SVGwave2Shape">
      </figure>
      <!-- End SVG Bottom Shape -->
    </div>
    <!-- Video Content Section -->
    




















    <!-- Icon Blocks Section -->
    <div class="container space-top-3 space-bottom-md-3 space-bottom-">
      <!-- Title -->
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <h2>How It works</h2>
      </div>
      <!-- End Title -->

      <div class="row">
        <div class="col-md-4 mb-7">
          <div class="text-center px-lg-3">
            <span class="btn btn-icon btn-lg btn-soft-danger mb-5">
              <span class="fab fa-twitter fa-2x btn-icon__inner"></span>
            </span>
            <h3 class="h5">Social Tracking</h3>
            <p class="mb-md-0">Access award-winning social tracking capability across nearly all major social channels.</p>
          </div>
        </div>

        <div class="col-md-4 mb-7">
          <div class="text-center px-lg-3">
            <span class="btn btn-icon btn-lg btn-soft-primary mb-5">
              <span class="far fa-credit-card fa-2x btn-icon__inner"></span>
            </span>
            <h3 class="h5">Paid Media Analysis</h3>
            <p class="mb-md-0">Receive insights and detailed reports on your performance for Facebook Ads and Google Adwords.</p>
          </div>
        </div>

        <div class="col-md-4 mb-7">
          <div class="text-center px-lg-3">
            <span class="btn btn-icon btn-lg btn-soft-success mb-5">
              <span class="far fa-newspaper fa-2x btn-icon__inner"></span>
            </span>
            <h3 class="h5">News & PR Monitoring</h3>
            <p class="mb-md-0">Capture and analyse data from all your PR campaigns across over 3 Million news outlets and blogs.</p>
          </div>
        </div>
      </div>

      <img class="img-fluid d-none d-md-block w-75 mx-auto mb-7" src="@/assets/buzzradar/svg/components/pointer-1.svg" alt="SVG Arrow">

      <!-- Mockup Browser -->
      <div class="u-browser-v1 mx-auto mb-4">
        <!-- SVG Background Shape -->
        <figure id="SVGbgShapeID1" class="svg-preloader ie-soft-triangle-shape">
          <img class="js-svg-injector" src="@/assets/svg/components/soft-triangle-shape.svg" alt="Image Description"
               data-parent="#SVGbgShapeID1">
        </figure>
        <!-- End SVG Background Shape -->

        <!-- Mockup Browser -->
        <figure id="SVGBrowserShape" class="svg-preloader ie-browser u-browser-v1__svg">
          <img class="js-svg-injector" src="@/assets/svg/illustrations/browser.svg" alt="Image Description"
               :data-img-paths="objDataImgMaskBrowser"
               data-parent="#SVGBrowserShape">
        </figure>
        <!-- End Mockup Browser -->
      </div>
      <!-- End Mockup Browser -->

    </div>
    <!-- End Icon Blocks Section -->










    <!-- Features Section -->
    <div class="container space-2">
      <div class="row justify-content-lg-between align-items-lg-center">
        <div class="col-lg-5 mb-9 mb-lg-0">
            
          <div class="mb-4">
            <h2 class="font-weight-medium mb-4">Social Tracking</h2>
            <p>Access award-winning social tracking capability across nearly all major social channels.</p>
          </div>

          <ul class="list-unstyled">
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p><strong>Capturing all the data available:</strong> Real-time tracking of every data point and mention accessible. Transparently, ethically and GDPR compliant.</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p><strong>Advanced Multi Language Sentiment:</strong> Via Watson Alchemy Language API.</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p><strong>Owned Channel Tracking:</strong> Best in class tracking measurement and visualisation of all social channel performance.</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p><strong>Post Performance Monitoring:</strong> Measuring real-time and historical engagement of owned social content.</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p><strong>Real-time Competitor Analysis:</strong> Across Twitter, Facebook and YouTube.</p>
              </div>
            </li>
          </ul>

        </div>

        <div class="col-lg-6">
          <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/855x665/social_tracking.jpg" alt="SVG Arrow">
        </div>
      </div>
    </div>
    <!-- End Features Section -->

    <!-- Features Section -->
    <div class="container space-2 space-top-lg-3">
      <div class="row justify-content-lg-between align-items-lg-center">
        <div class="col-lg-5 order-lg-2 mb-9 mb-lg-0">
          <div class="mb-4">
            <h2 class="font-weight-medium mb-4">Paid Media Analysis</h2>
            <p>Receive insights and detailed reports on your performance for Facebook Ads and Google Adwords.</p>
          </div>

          <ul class="list-unstyled">
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p><strong>Intelligent Alerts:</strong> Keep an eye on your paid media investments 24/7 and prevent costly anomalies like overspend or saturation.</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p><strong>Analysis:</strong> Track all your campaigns, not only the top spenders.</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p><strong>Recommendations:</strong> Receive proactive insights and actions to maximise ROI.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-lg-6 order-lg-1">
          <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/855x665/paidmedia.jpg" alt="SVG Arrow">
        </div>
      </div>
    </div>
    <!-- End Features Section -->

    <!-- Features Section -->
    <div class="container space-2 space-top-lg-3">
      <div class="row justify-content-lg-between align-items-lg-center">
        <div class="col-lg-5 mb-9 mb-lg-0">
          <div class="mb-4">
            <h2 class="font-weight-medium mb-4">News & PR Monitoring</h2>
            <p>Capture and analyse data from all your PR campaigns across over 3 Million news outlets and blogs.</p>
          </div>

          <ul class="list-unstyled">
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p>Quantify your PR impact</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p>Know your share of voice</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p>Understand how audience feel about your brand.</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p>Build Clippings lists in moments.</p>
              </div>
            </li>
            <li class="media">
              <span class="btn btn-icon btn-xs btn-indigo rounded-circle mt-1 mr-3">
                <span class="fas fa-check btn-icon__inner"></span>
              </span>
              <div class="media-body">
                <p>Be Alerted to impending PR crisis.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-lg-6">
          <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/855x665/pr.jpg" alt="SVG Arrow">
        </div>
      </div>
    </div>
    <!-- End Features Section -->











   





  </div>

</template>



<script>

 	export default {

 		name : 'AudienceIntel',
    data () {
      return {
        objDataImgMaskIphone: JSON.stringify([{ "targetId": "#SVGiphoneImg1", "newPath": require('@/assets/buzzradar/img/282x500/iphone_insights.png') }]),
        objDataImgMaskTablet: JSON.stringify([{ "targetId": "#SVGtabletImg1", "newPath": require('@/assets/buzzradar/img/533x711/ipad_insights.png') }]),
        objDataImgMaskBrowser: JSON.stringify([{ "targetId": "#SVGBrowserShapeImg1", "newPath": require('@/assets/buzzradar/img/855x665/website-insights.png') }]),
        objWatsonIBMVideo : require('@/assets/buzzradar/media/html5-video/working-in-office/working-in-office.mp4'),
        publicPath: process.env.BASE_URL,
      }
    },
    mounted() {
      $.HSCore.components.HSBgVideo.init('.js-bg-video');
      $.HSCore.components.HSFancyBox.init('.js-fancybox');
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    },
    updated() {
      
    }
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

