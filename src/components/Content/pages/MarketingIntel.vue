<template>
  
  <div>

    <!-- Hero Section -->
    <div id="SVGheroBGShapes" class="svg-preloader position-relative overflow-hidden space-bottom-2 space-bottom-lg-5">
      <div class="gradient-half-warning-v2 space-bottom-2 space-bottom-lg-3">
        <!-- Content -->
        <div class="container space-top-3 space-top-md-5 space-top-lg-4">
          <div class="row">
            <div class="col-md-7 position-relative z-index-2">
              <div class="mb-4">
                <h1 class="display-4 text-white font-weight-normal">New Insights Platform</h1>
              </div>
              <div class="mb-7">
                <p class="lead text-white">Our all-new insights platform is the fastest, easiest way of gaining deep insight from your data.</p>
              </div>

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


    <!-- Marketing Intelligence -->
    <div class="container">
      <!-- Title -->
      <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-9 mt-6">
        <span class="btn btn-soft-success btn-pill mb-2">Marketing Intelligence</span>
        <h2 class="h3 font-weight-normal">With a few clicks connect your marketing platforms easily and securely in a unified space and then let our AI uncover powerful insights and display them with meaningful visualisations.</h2>
      </div>
      <!-- End Title -->

      <div class="row justify-content-between align-items-center">

        <div class="col-md-6 col-lg-5 mb-7 mb-md-0">
          <div class="pr-4">
            <!-- Info -->
            <div class="media mb-7">
              <span class="btn btn-sm btn-icon btn-soft-primary rounded-circle mr-3">
                <span class="btn-icon__inner">1.</span>
              </span>
              <div class="media-body">
                <h3 class="h5 text-primary">Easy to Use</h3>
                <p>With it’s easy-to-use, fast, intuitive UX any team member can jump in and gain deeper insight from across your marketing channels in moments.</p>
              </div>
            </div>
            <!-- End Info -->

            <!-- Info -->
            <div class="media mb-7">
              <span class="btn btn-sm btn-icon btn-soft-primary rounded-circle mr-3">
                <span class="btn-icon__inner">2.</span>
              </span>
              <div class="media-body">
                <h3 class="h5 text-primary">Different ways to view data</h3>
                <p>It’s packed full of different ways to view data so in a click can get context to what you are seeing and with AI analysis of peaks and dips you can get meaningful answers fast.</p>
              </div>
            </div>
            <!-- End Info -->

          </div>
        </div>

        <div class="col-lg-6 position-relative">
            <!-- Image Gallery -->
            <div class="row mx-gutters-2">
              <div class="col-5 align-self-end px-2 mb-3">
                <!-- Fancybox -->
                <a class="js-fancybox u-media-viewer" href="javascript:;"
                   data-src="@/assets/img/1920x1080/img2.jpg"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Front in frames - image #01"
                   data-speed="700">
                  <img class="img-fluid rounded" src="@/assets/img/320x320/img1.jpg" alt="Image Description">

                  <span class="u-media-viewer__container">
                    <span class="u-media-viewer__icon">
                      <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
                <!-- End Fancybox -->
              </div>

              <div class="col-7 px-2 mb-3">
                <!-- Fancybox -->
                <a class="js-fancybox u-media-viewer" href="javascript:;"
                   data-src="@/assets/img/1920x1080/img4.jpg"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Front in frames - image #02"
                   data-speed="700">
                  <img class="img-fluid rounded" src="@/assets/img/450x450/img1.jpg" alt="Image Description">

                  <span class="u-media-viewer__container">
                    <span class="u-media-viewer__icon">
                      <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
                <!-- End Fancybox -->
              </div>

              <div class="col-5 offset-1 px-2 mb-3">
                <!-- Fancybox -->
                <a class="js-fancybox u-media-viewer" href="javascript:;"
                   data-src="@/assets/img/1920x1920/img1.jpg"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Front in frames - image #03"
                   data-speed="700">
                  <img class="img-fluid rounded" src="@/assets/img/280x310/img1.jpg" alt="Image Description">

                  <span class="u-media-viewer__container">
                    <span class="u-media-viewer__icon">
                      <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
                <!-- End Fancybox -->
              </div>

              <div class="col-5 px-2 mb-3">
                <!-- Fancybox -->
                <a class="js-fancybox u-media-viewer" href="javascript:;"
                   data-src="@/assets/img/1920x1080/img3.jpg"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Front in frames - image #04"
                   data-speed="700">
                  <img class="img-fluid rounded" src="@/assets/img/300x180/img1.jpg" alt="Image Description">

                  <span class="u-media-viewer__container">
                    <span class="u-media-viewer__icon">
                      <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
                <!-- End Fancybox -->
              </div>
            </div>
            <!-- End Image Gallery -->

            <!-- SVG Background Shape -->
            <div id="SVGbgShapeID1" class="svg-preloader w-100 content-centered-y z-index-n1">
              <figure class="ie-soft-triangle-shape">
                <img class="js-svg-injector" src="@/assets/svg/components/soft-triangle-shape.svg" alt="Image Description"
                     data-parent="#SVGbgShapeID1">
              </figure>
            </div>
            <!-- End SVG Background Shape -->
          </div>
      </div>
    </div>
    <!-- Marketing Intelligence -->


    <!-- Social Tracking -->
    <div class="container">
      <!-- Title -->
      <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-9 space-top-2">
        <span class="btn btn-soft-success btn-pill mb-2">Social Tracking</span>
        <h2 class="h3 font-weight-normal">Access award-winning social tracking capability across nearly all major social channels.</h2>
      </div>
      <!-- End Title -->

      <div class="row justify-content-between align-items-center">

        

        <div class="col-lg-6 position-relative">
            <!-- Image Gallery -->
            <div class="row mx-gutters-2">
              <div class="col-5 align-self-end px-2 mb-3">
                <!-- Fancybox -->
                <a class="js-fancybox u-media-viewer" href="javascript:;"
                   data-src="@/assets/img/1920x1080/img2.jpg"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Front in frames - image #01"
                   data-speed="700">
                  <img class="img-fluid rounded" src="@/assets/img/320x320/img1.jpg" alt="Image Description">

                  <span class="u-media-viewer__container">
                    <span class="u-media-viewer__icon">
                      <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
                <!-- End Fancybox -->
              </div>

              <div class="col-7 px-2 mb-3">
                <!-- Fancybox -->
                <a class="js-fancybox u-media-viewer" href="javascript:;"
                   data-src="@/assets/img/1920x1080/img4.jpg"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Front in frames - image #02"
                   data-speed="700">
                  <img class="img-fluid rounded" src="@/assets/img/450x450/img1.jpg" alt="Image Description">

                  <span class="u-media-viewer__container">
                    <span class="u-media-viewer__icon">
                      <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
                <!-- End Fancybox -->
              </div>

              <div class="col-5 offset-1 px-2 mb-3">
                <!-- Fancybox -->
                <a class="js-fancybox u-media-viewer" href="javascript:;"
                   data-src="@/assets/img/1920x1920/img1.jpg"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Front in frames - image #03"
                   data-speed="700">
                  <img class="img-fluid rounded" src="@/assets/img/280x310/img1.jpg" alt="Image Description">

                  <span class="u-media-viewer__container">
                    <span class="u-media-viewer__icon">
                      <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
                <!-- End Fancybox -->
              </div>

              <div class="col-5 px-2 mb-3">
                <!-- Fancybox -->
                <a class="js-fancybox u-media-viewer" href="javascript:;"
                   data-src="@/assets/img/1920x1080/img3.jpg"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Front in frames - image #04"
                   data-speed="700">
                  <img class="img-fluid rounded" src="@/assets/img/300x180/img1.jpg" alt="Image Description">

                  <span class="u-media-viewer__container">
                    <span class="u-media-viewer__icon">
                      <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
                <!-- End Fancybox -->
              </div>
            </div>
            <!-- End Image Gallery -->

            <!-- SVG Background Shape -->
            <div id="SVGbgShapeID2" class="svg-preloader w-100 content-centered-y z-index-n1">
              <figure class="ie-soft-triangle-shape">
                <img class="js-svg-injector" src="@/assets/svg/components/soft-triangle-shape.svg" alt="Image Description"
                     data-parent="#SVGbgShapeID2">
              </figure>
            </div>
            <!-- End SVG Background Shape -->
          </div>



          <div class="col-md-6 col-lg-5 mb-7 mb-md-0 mt-7">
          <div class="pr-4">
            <!-- Info -->
            <div class="media mb-7">
              <span class="btn btn-sm btn-icon btn-soft-primary rounded-circle mr-3">
                <span class="btn-icon__inner">1.</span>
              </span>
              <div class="media-body">
                <h3 class="h5 text-primary">Capturing all the data available</h3>
                <p>Real-time tracking of every data point and mention accessible. Transparently, ethically and GDPR compliant.</p>
              </div>
            </div>
            <!-- End Info -->

            <!-- Info -->
            <div class="media mb-7">
              <span class="btn btn-sm btn-icon btn-soft-primary rounded-circle mr-3">
                <span class="btn-icon__inner">2.</span>
              </span>
              <div class="media-body">
                <h3 class="h5 text-primary">Advanced Multi Language Sentiment</h3>
                <p>Via Watson Alchemy Language API.
                Owned Channel Tracking: Best in class tracking measurement and visualisation of all social channel performance.</p>
              </div>
            </div>
            <!-- End Info -->

            <!-- Info -->
            <div class="media mb-7">
              <span class="btn btn-sm btn-icon btn-soft-primary rounded-circle mr-3">
                <span class="btn-icon__inner">3.</span>
              </span>
              <div class="media-body">
                <h3 class="h5 text-primary">Post Performance Monitoring</h3>
                <p>Measuring real-time and historical engagement of owned social content.</p>
              </div>
            </div>
            <!-- End Info -->

            <!-- Info -->
            <div class="media mb-7">
              <span class="btn btn-sm btn-icon btn-soft-primary rounded-circle mr-3">
                <span class="btn-icon__inner">4.</span>
              </span>
              <div class="media-body">
                <h3 class="h5 text-primary">Real-time Competitor Analysis</h3>
                <p>Across Twitter, Facebook and YouTube.</p>
              </div>
            </div>
            <!-- End Info -->

          </div>
        </div>


      </div>
    </div>
    <!-- Social Tracking -->






    <!-- Paid Media Analysis -->
    <div class="container">
      <!-- Title -->
      <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-9 mt-6">
        <span class="btn btn-soft-success btn-pill mb-2">Paid Media Analysis</span>
        <h2 class="h3 font-weight-normal">Receive insights and detailed reports on your performance for Facebook Ads and Google Adwords</h2>
      </div>
      <!-- End Title -->

      <div class="row justify-content-between align-items-center">

        <div class="col-md-6 col-lg-5 mb-7 mb-md-0">
          <div class="pr-4">
            <!-- Info -->
            <div class="media mb-7">
              <span class="btn btn-sm btn-icon btn-soft-primary rounded-circle mr-3">
                <span class="btn-icon__inner">1.</span>
              </span>
              <div class="media-body">
                <h3 class="h5 text-primary">Intelligent Alerts</h3>
                <p>Keep an eye on your paid media investments 24/7 and prevent costly anomalies like overspend or saturation.</p>
              </div>
            </div>
            <!-- End Info -->

            <!-- Info -->
            <div class="media mb-7">
              <span class="btn btn-sm btn-icon btn-soft-primary rounded-circle mr-3">
                <span class="btn-icon__inner">2.</span>
              </span>
              <div class="media-body">
                <h3 class="h5 text-primary">Analysis</h3>
                <p>Track all your campaigns, not only the top spenders.
                Recommendations: Receive proactive insights and actions to maximise ROI.</p>
              </div>
            </div>
            <!-- End Info -->

          </div>
        </div>

        <div class="col-lg-6 position-relative">
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

      </div>
    </div>
    <!-- Paid Media Analysis -->





    <!-- News & PR Monitoring -->
    <div class="container">
      <!-- Title -->
      <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-9 mt-6">
        <span class="btn btn-soft-success btn-pill mb-2">News & PR Monitoring</span>
        <h2 class="h3 font-weight-normal">Capture and analyse data from all your PR campaigns across over 3 Million news outlets and blogs.</h2>
      </div>
      <!-- End Title -->

      <div class="row justify-content-between align-items-center">

        <div class="col-md-6 col-lg-5 mb-7 mb-md-0">
          <div class="pr-4">
            
            <!-- List -->
          <ul class="list-unstyled mb-0">
            <li class="py-3">
              <div class="media">
                <span class="btn btn-xs btn-icon btn-soft-success rounded-circle mr-3">
                  <span class="fas fa-arrow-right btn-icon__inner"></span>
                </span>
                <div class="media-body text-secondary">
                  Quantify your PR impact
                </div>
              </div>
            </li>
            <li class="py-3">
              <div class="media">
                <span class="btn btn-xs btn-icon btn-soft-success rounded-circle mr-3">
                  <span class="fas fa-arrow-right btn-icon__inner"></span>
                </span>
                <div class="media-body text-secondary">
                  Know your share of voice
                </div>
              </div>
            </li>
            <li class="py-3">
              <div class="media">
                <span class="btn btn-xs btn-icon btn-soft-success rounded-circle mr-3">
                  <span class="fas fa-arrow-right btn-icon__inner"></span>
                </span>
                <div class="media-body text-secondary">
                  Understand how audience feel about your brand
                </div>
              </div>
            </li>
            <li class="py-3">
              <div class="media">
                <span class="btn btn-xs btn-icon btn-soft-success rounded-circle mr-3">
                  <span class="fas fa-arrow-right btn-icon__inner"></span>
                </span>
                <div class="media-body text-secondary">
                  Build Clippings lists in moments
                </div>
              </div>
            </li>
            <li class="py-3">
              <div class="media">
                <span class="btn btn-xs btn-icon btn-soft-success rounded-circle mr-3">
                  <span class="fas fa-arrow-right btn-icon__inner"></span>
                </span>
                <div class="media-body text-secondary">
                  Be Alerted to impending PR crisis
                </div>
              </div>
            </li>
          </ul>
          <!-- End List -->

          </div>
        </div>

        <div class="col-lg-6 position-relative">
            <!-- Mockup Browser -->
            <div class="u-browser-v1 mx-auto mb-4">
              <!-- SVG Background Shape -->
              <figure id="SVGbgShapeID1" class="svg-preloader ie-soft-triangle-shape">
                <img class="js-svg-injector" src="@/assets/svg/components/soft-triangle-shape.svg" alt="Image Description"
                     data-parent="#SVGbgShapeID1">
              </figure>
              <!-- End SVG Background Shape -->

              <!-- Mockup Browser -->
              <figure id="SVGBrowserShape2" class="svg-preloader ie-browser u-browser-v1__svg">
                <img class="js-svg-injector" src="@/assets/svg/illustrations/browser.svg" alt="Image Description"
                     :data-img-paths="objDataImgMaskBrowser"
                     data-parent="#SVGBrowserShape2">
              </figure>
              <!-- End Mockup Browser -->
            </div>
            <!-- End Mockup Browser -->
        </div>

      </div>
    </div>
    <!-- News and PR monitoring -->





  </div>

</template>



<script>

 	export default {

 		name : 'AudienceIntel',
    data () {
      return {
        objDataImgMaskIphone: JSON.stringify([{ "targetId": "#SVGiphoneImg1", "newPath": require('@/assets/buzzradar/img/282x500/iphone_insights.png') }]),
        objDataImgMaskTablet: JSON.stringify([{ "targetId": "#SVGtabletImg1", "newPath": require('@/assets/buzzradar/img/533x711/img3.jpg') }]),
        objDataImgMaskBrowser: JSON.stringify([{ "targetId": "#SVGBrowserShapeImg1", "newPath": require('@/assets/buzzradar/img/855x665/img1.jpg') }]),
      }
    },
    mounted() {
      
    },
    updated() {
      
    }
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

