<template>
  
  <div>

    
    <!-- Hero Section -->
    <div class="gradient-overlay-half-primary-video-v1" data-vide-bg="assets/video/bg2" data-vide-options="position: 0% 50%;">
        




      <!-- Video Background -->
      <div class="js-bg-video position-absolute top-0 right-0 bottom-0 left-0 w-100 h-100 d-none d-md-block"
                       :data-hs-bgv-path="videoBgURL"
                       data-hs-bgv-loop="1"></div>
      <!-- End Video Background -->





      <!-- Mobile Background -->
      <div class="position-absolute top-0 right-0 bottom-0 left-0 w-100 h-100 d-block d-md-none"
                       :style="heroBgImageMobile"></div>
      <!-- End Mobile Background -->






      <div class="position-relative z-index-2">   <!-- :style="heroBgImageMobile" -->
        <!-- Content -->
        <div class="container position-relative space-bottom-2 space-top-3 space-top-md-4 space-bottom-md-3 z-index-2 text-white">
          <div class="w-lg-75">


      <!-- <div class="divimage" :style="heroBgImageMobile"></div> -->


            <h1 class="display-5 font-size-md-down-5 font-weight-bold mb-2">
              
                Unlock the <br class="d-block d-md-none">secrets <br class="d-none d-md-block">of your <br class="d-block d-md-none">
                <span class="text-white">
                  <!-- <strong class="u-text-animation u-text-animation- -typing text-primary"></strong> -->
                  <span class="br-text-anim text-primary">
                    Audience
                  </span>
                </span>
                <br>
              
            </h1>
            <h3>with smarter, more <br class="d-block d-md-none">useful insights.</h3>

            
            <!-- Fancybox -->
            <a class="js-fancybox btn btn-primary transition-3d-hover mb-2 mb-sm-0 mr-sm-2" href="javascript:;"
               data-src="//vimeo.com/274111261"
               data-speed="700"
               data-animate-in="zoomIn"
               data-animate-out="zoomOut"
               data-caption="Buzz Radar">
              <small class="fas fa-play mr-2"></small>
              Play Video
            </a>
            <!-- End Fancybox -->

          </div>
        </div>
        <!-- End Content -->
      </div>

    </div>
    <!-- End Hero Section -->










    <!-- Clients Section -->
    <div class="bg-light">
      <div class="container space-2">

        <!-- Title -->
        <div class="w-md-100 text-center mx-md-auto mb-9">
          <h2 class="clients-title text-secondary">Trusted to by some of the <strong>world's biggest brands</strong> and organisations</h2>
        </div>
        <!-- End Title -->

        <div class="js-slick-carousel u-slick"
             data-autoplay="true"
             data-speed="5000"
             data-infinite="true"
             data-slides-show="5"
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
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_1.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_2.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_3.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_4.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_5.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_6.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_7.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_8.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_9.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_10.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_11.png" alt="Image Description">
          </div>
          <div class="js-slide">
            <img class="u-clients" src="@/assets/buzzradar/img/homepage/clients_logos/client_logo_12.png" alt="Image Description">
          </div>
        </div>
      </div>
    </div>
    <!-- End Clients Section -->

    










    <!-- Mockup Block -->
    <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
      <!-- Apply your Parallax background image here -->
      <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>

      <div class="container space-2 space-md-3">
        <div class="row align-items-lg-center">
          <div class="col-lg-5 mb-7 mb-lg-0">
            <!-- Title -->
            <div class="pr-lg-4">
              <!-- <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
                <span class="font-weight-semi-bold btn-icon__inner">1.</span>
              </span> -->
              <h2 class="h4 font-weight-semi-bold text-secondary">Empower your team to make brillant data-driven decisions</h2>
              <p class="mb-0">Combining AI with real-time social data and groundbreaking visualisations, we can unlock powerful insights about your audience. Communicate in straightforward, engaging ways, allowing anyone inside your organisation to make smarter decisons and improve results.</p>
              <a v-on:click="bookMeeting" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="#">Book a Demo</a>
            </div>
            <!-- End Title -->
          </div>


              
          <!-- <div id="SVGempowerteam" class="col-lg-7 svg-preloader">
            <figure class="ie-app-development">
              <img class="js-svg-injector" src="@/assets/buzzradar/svg/illustrations/homepage/empower_team.svg" alt="Empower Team"
                   data-parent="#SVGempowerteam">
            </figure>
          </div> -->

          <div class="col-lg-7">
            <img class="img-fluid" src="@/assets/buzzradar/svg/illustrations/homepage/empower_team.png" alt="Empower Team">
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
            <!-- <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
              <span class="font-weight-semi-bold btn-icon__inner">2.</span>
            </span> -->
            <h2 class="h4 font-weight-semi-bold text-secondary">Groundbreaking AI-driven Social Intelligence</h2>
            <p class="mb-0">Learn how we’ve built psychometric AI to uncover the most intimate and powerful map of audience interests, personality traits and consumer preferences  -- and how it can revolutionise your marketing.</p>
            <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="/aiaudienceanalysis">Find out More <span class="fas fa-angle-right ml-2"></span></a>
          </div>
          <!-- End Title -->
        </div>

        <div id="SVGappDevelopment" class="col-lg-7 order-lg-1 svg-preloader">
          <!-- SVG Icon -->
          <figure class="ie-app-development">
            <img class="js-svg-injector" src="@/assets/buzzradar/svg/illustrations/homepage/ai_social_intelligence.svg" alt="AI Social Intelligence"
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
              <!-- <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
                <span class="font-weight-semi-bold btn-icon__inner">3.</span>
              </span> -->
              <h2 class="h4 font-weight-semi-bold text-secondary">Great insights can be hard to uncover and even harder to communicate</h2>
              <p class="mb-0">No matter how powerful the insight, if it’s not delivered to the right person at the right moment in the right way, it can be rendered useless. We think this happens far too frequently; so Buzz Radar’s smart alerts, real-time dashboards and intuitive on demand reporting focus on making lost insights a thing of the past.</p>
              <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="/marketingintelplatform">Find out More <span class="fas fa-angle-right ml-2"></span></a>
            </div>
            <!-- End Title -->
          </div>

          <div id="SVGbusinessAnalysis" class="col-lg-7 svg-preloader">
            <!-- SVG Icon -->
            <figure class="ie-app-development">
              <img class="js-svg-injector" src="@/assets/buzzradar/svg/illustrations/homepage/great_insights.svg" alt="Great Insights"
                   data-parent="#SVGbusinessAnalysis">
            </figure>
            <!-- End SVG Icon -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Mockup Block -->








    <!-- Stats Section -->
    <div class="bg-light">
      <div class="container space-1">
        <!-- Title -->
        <div class="w-md-80 w-lg-80 text-center mx-md-auto">
          <div id="svgArrows" class="pt-7 mb-5">
            <h2 class="h3 font-weight-normal text-secondary">Stop making decisions based on guess work <br>
            Start delivering content you know your audience will love</h2>
          </div>
        </div>
        <!-- End Title -->

        <div class="row mb-5">
          <div class="col-sm-6 col-lg-3 mb-7 mb-lg-4">
            <div class="u-stats-progress position-relative d-flex align-items-center justify-content-center">
              <!-- Pie Circle -->
              <div class="js-pie text-center"
                   data-circles-text-class="u-stats-progress__info"
                   data-circles-value="31"
                   data-circles-max-value="100"
                   data-circles-bg-color="#ffffff"
                   data-circles-fg-color="#21c5c9"
                   data-circles-fg-stroke-linecap="round"
                   data-circles-fg-stroke-miterlimit="10"
                   data-circles-radius="100"
                   data-circles-stroke-width="12"
                   data-circles-additional-text="%"
                   data-circles-duration="2000"
                   data-circles-scroll-animate="true"
                   data-circles-color="#21c5c9"
                   data-circles-font-size="37"
                   data-circles-font-weight="700"
                   data-circles-secondary-text="Improvement in socially driven sales for companies after the first 3 months"
                   data-circles-secondary-color="#77838f"
                   data-circles-secondary-font-size="11"
                   data-circles-secondary-font-weight="400"
                   data-circles-divider-space="10"></div>
              <!-- End Pie Circle -->
            </div>
          </div>

          <div class="col-sm-6 col-lg-3 mb-7 mb-lg-4">
            <div class="u-stats-progress position-relative d-flex align-items-center justify-content-center">
              <!-- Pie Circle -->
              <div class="js-pie text-center"
                   data-circles-text-class="u-stats-progress__info"
                   data-circles-value="19"
                   data-circles-max-value="100"
                   data-circles-bg-color="#ffffff"
                   data-circles-fg-color="#f6921e"
                   data-circles-fg-stroke-linecap="round"
                   data-circles-fg-stroke-miterlimit="10"
                   data-circles-radius="100"
                   data-circles-stroke-width="12"
                   data-circles-additional-text="%"
                   data-circles-duration="2000"
                   data-circles-scroll-animate="true"
                   data-circles-color="#f6921e"
                   data-circles-font-size="37"
                   data-circles-font-weight="700"
                   data-circles-secondary-text="The average amount our clients save on their paid media and content production budget"
                   data-circles-secondary-color="#77838f"
                   data-circles-secondary-font-size="11"
                   data-circles-secondary-font-weight="400"
                   data-circles-divider-space="10"></div>
              <!-- End Pie Circle -->
            </div>
          </div>

          <div class="col-sm-6 col-lg-3 mb-7 mb-lg-4">
            <div class="u-stats-progress position-relative d-flex align-items-center justify-content-center">
              <!-- Pie Circle -->
              <div class="js-pie text-center"
                   data-circles-text-class="u-stats-progress__info"
                   data-circles-value="40"
                   data-circles-max-value="100"
                   data-circles-bg-color="#ffffff"
                   data-circles-fg-color="#f6921e"
                   data-circles-fg-stroke-linecap="round"
                   data-circles-fg-stroke-miterlimit="10"
                   data-circles-radius="100"
                   data-circles-stroke-width="12"
                   data-circles-additional-text="%"
                   data-circles-duration="2000"
                   data-circles-scroll-animate="true"
                   data-circles-color="#f6921e"
                   data-circles-font-size="37"
                   data-circles-font-weight="700"
                   data-circles-secondary-text="The amount our clients social audience grows on average annually with our help"
                   data-circles-secondary-color="#77838f"
                   data-circles-secondary-font-size="11"
                   data-circles-secondary-font-weight="400"
                   data-circles-divider-space="10"></div>
              <!-- End Pie Circle -->
            </div>
          </div>

          <div class="col-sm-6 col-lg-3 mb-7 mb-lg-4">
            <div class="u-stats-progress position-relative d-flex align-items-center justify-content-center">
              <!-- Pie Circle -->
              <div class="js-pie text-center"
                   data-circles-text-class="u-stats-progress__info"
                   data-circles-is-hide-value="true"
                   data-circles-value="65"
                   data-circles-max-value="100"
                   data-circles-bg-color="#ffffff"
                   data-circles-fg-color="#21c5c9"
                   data-circles-fg-stroke-linecap="round"
                   data-circles-fg-stroke-miterlimit="10"
                   data-circles-radius="100"
                   data-circles-stroke-width="12"
                   data-circles-additional-text="2.6x"

                   data-circles-duration="2000"
                   data-circles-scroll-animate="true"
                   data-circles-color="#21c5c9"
                   data-circles-font-size="37"
                   data-circles-font-weight="700"
                   data-circles-secondary-text="Better engagement with content after using our Audience AI technology for 6 months"
                   data-circles-secondary-color="#77838f"
                   data-circles-secondary-font-size="11"
                   data-circles-secondary-font-weight="400"
                   data-circles-divider-space="10"></div>
              <!-- End Pie Circle -->
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- End Stats Section -->















    <!-- Features Section -->
    <div class="bg-white">
      <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
        <!-- Apply your Parallax background image here -->
        <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>
        <div class="container space-1 space-lg-2">
          <!-- Title -->
          <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
            <h1 class="font-weight-medium">Powerful tools all in one easy-to-use platform</h1>
          </div>
          <!-- End Title -->

          <div class="row">
            <div class="col-lg-6 order-lg-2 mb-7 mb-lg-0">
              <!-- Nav -->
              <ul class="nav nav-box" role="tablist" id="powerful_tools">
                <li class="nav-item w-100 mx-0 mb-3">
                  <a class="nav-link p-4 active" id="pills-one-code-features-tab" data-toggle="pill" href="#pills-one-code-features" role="tab" aria-controls="pills-one-code-features" aria-selected="true">
                    <div class="media">
                      <!-- <figure id="icon45" class="svg-preloader ie-height-56 w-100 max-width-8 mt-2 mr-4">
                        <img class="js-svg-injector" src="@/assets/svg/icons/icon-45.svg" alt="SVG"
                             data-parent="#icon45">
                      </figure> -->
                      <span class="btn btn-icon btn-primary rounded-circle mr-3">
                        <span class="font-weight-semi-bold btn-icon__inner">1.</span>
                      </span>
                      <div class="media-body">
                        <h3 class="h6 text-secondary font-weight-bold">Get the big picture with real-time dashboards</h3>
                        <p class="mb-0">Set up, customise and deploy real-time dashboards using a selection of over 50 animated visualisations. All in moments.</p>
                      </div>
                    </div>
                  </a>
                </li>

                <li class="nav-item w-100 mx-0 mb-3">
                  <a class="nav-link p-4" id="pills-two-code-features-tab" data-toggle="pill" href="#pills-two-code-features" role="tab" aria-controls="pills-two-code-features" aria-selected="false">
                    <div class="media">
                      <!-- <figure id="icon23" class="svg-preloader ie-height-56 w-100 max-width-8 mt-2 mr-4">
                        <img class="js-svg-injector" src="@/assets/svg/icons/icon-23.svg" alt="SVG"
                             data-parent="#icon23">
                      </figure> -->
                      <span class="btn btn-icon btn-light rounded-circle mr-3">
                        <span class="font-weight-semi-bold btn-icon__inner">2.</span>
                      </span>
                      <div class="media-body">
                        <h4 class="h6 text-secondary font-weight-bold">Take a deeper dive using our insights platform</h4>
                        <p class="mb-0">A fast, intuitive way to dive into the data and discover game-changing insights. Find insights that create the biggest impact for your brand.</p>
                      </div>
                    </div>
                  </a>
                </li>

                <li class="nav-item w-100 mx-0">
                  <a class="nav-link p-4" id="pills-three-code-features-tab" data-toggle="pill" href="#pills-three-code-features" role="tab" aria-controls="pills-three-code-features" aria-selected="false">
                    <div class="media">
                      <!-- <figure id="icon44" class="svg-preloader ie-height-56 w-100 max-width-8 mt-2 mr-4">
                        <img class="js-svg-injector" src="@/assets/svg/icons/icon-23.svg" alt="SVG"
                             data-parent="#icon44">
                      </figure> -->
                      <span class="btn btn-icon btn-light rounded-circle mr-3">
                        <span class="font-weight-semi-bold btn-icon__inner">3.</span>
                      </span>
                      <div class="media-body">
                        <h4 class="h6 text-secondary font-weight-bold">Actionable intelligence with powerful one click reports and alerts</h4>
                        <p class="mb-0">Instantly create insightful, useful and actionable reports. Get alerted to insights that affect your brand the moment they happen.</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <!-- End Nav -->
            </div>

            <div class="col-lg-6 order-lg-1 align-self-lg-end">
              <!-- Tab Content -->
              <div class="tab-content pr-lg-4">
                <div class="tab-pane fade show active" id="pills-one-code-features" role="tabpanel" aria-labelledby="pills-one-code-features-tab">
                  <img class="img-fluid rounded-lg" src="@/assets/buzzradar/img/homepage/dashboard.jpg" alt="Image Description">
                </div>

                <div class="tab-pane fade" id="pills-two-code-features" role="tabpanel" aria-labelledby="pills-two-code-features-tab">
                  <div class="shadow-sm rounded">
                    <img class="img-fluid rounded-lg" src="@/assets/buzzradar/img/homepage/insights.jpg" alt="Image Description">
                  </div>
                </div>

                <div class="tab-pane fade" id="pills-three-code-features" role="tabpanel" aria-labelledby="pills-three-code-features-tab">
                  <img class="img-fluid rounded-lg" src="@/assets/buzzradar/img/homepage/reports.jpg" alt="Image Description">
                </div>
              </div>
              <!-- End Tab Content -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Features Section -->











    <!-- Use Cases -->
    
    <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
      <!-- Apply your Parallax background image here -->
      <div class="dzsparallaxer--target" :style="styleParallaxBg1"></div>

        <div class="bg-light">
          <div class="container space-1 space-lg-2">
            <!-- Title -->
            <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-4">
              <h1 class="font-weight-medium">Use Cases</h1>
            </div>
            <!-- End Title -->

            <!-- For Mobile Devices -->
            <div class="form-group d-block d-md-none">
              <select @change="onChange($event)" class="js-select selectpicker dropdown-select" data-style="btn-sm btn-block btn-secondary" data-width="100%">
                <option value="1" selected>Strategy and Planning</option>
                <option value="2">Content Optimisation</option>
                <option value="3">Brand Management</option>
                <option value="4">Influencer Identification</option>
                <option value="5">Competitor Analysis</option>
                <option value="6">Crisis Management</option>
                <option value="7">Events and Presentations</option>
              </select>
            </div>
            <!-- For Mobile Devices -->


            <!-- Fancy Tabs -->
            <div class="d-none d-md-block">
              <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                  <a class="nav-link transition-3d-hover text-dark use-case-link active" href="#tab_use_cases_1" data-toggle="tab">
                    <img class="img-fluid mt-4 mb-4" width="75" height="75" src="@/assets/buzzradar/img/homepage/emptypixel.png" :style="useCaseStrategy"><br>
                    <h6><strong>Strategy</strong> and<br>Planning</h6>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link transition-3d-hover text-dark use-case-link" href="#tab_use_cases_2" data-toggle="tab">
                    <img class="img-fluid mt-4 mb-4" width="75" height="75" src="@/assets/buzzradar/img/homepage/emptypixel.png" :style="useCaseContent"><br>
                    <h6><strong>Content</strong><br>Optimisation</h6>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link transition-3d-hover text-dark use-case-link" href="#tab_use_cases_3" data-toggle="tab">
                    <img class="img-fluid mt-4 mb-4" width="75" height="75" src="@/assets/buzzradar/img/homepage/emptypixel.png" :style="useCaseBrandManag"><br>
                    <h6>Brand<br><strong>Management</strong></h6>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link transition-3d-hover text-dark use-case-link" href="#tab_use_cases_4" data-toggle="tab">
                    <img class="img-fluid mt-4 mb-4" width="75" height="75" src="@/assets/buzzradar/img/homepage/emptypixel.png" :style="useCaseInfluencerId"><br>
                    <h6>Influencer<br><strong>Identification</strong></h6>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link transition-3d-hover text-dark use-case-link" href="#tab_use_cases_5" data-toggle="tab">
                    <img class="img-fluid mt-4 mb-4" width="75" height="75" src="@/assets/buzzradar/img/homepage/emptypixel.png" :style="useCaseCompetitor"><br>
                    <h6>Competitor<br><strong>Analysis</strong></h6>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link transition-3d-hover text-dark use-case-link" href="#tab_use_cases_6" data-toggle="tab">
                    <img class="img-fluid mt-4 mb-4" width="75" height="75" src="@/assets/buzzradar/img/homepage/emptypixel.png" :style="useCaseCrisis"><br>
                    <h6><strong>Crisis</strong><br>Management</h6>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link transition-3d-hover text-dark use-case-link" href="#tab_use_cases_7" data-toggle="tab">
                    <img class="img-fluid mt-4 mb-4" width="75" height="75" src="@/assets/buzzradar/img/homepage/emptypixel.png" :style="useCaseEvents"><br>
                    <h6><strong>Events</strong> and<br>presentations</h6>
                  </a>
                </li>
              </ul>
            </div>  
            <!-- End Fancy Tabs -->




            <!-- Fancy Tabs Content -->
            <div class="tab-content mt-4">
                <div class="tab-pane active in" id="tab_use_cases_1">
                    <div class="row mt-4">
                      <div class="col-md-5">
                        <h6 class="mt-md-4 mt-sm-0 animated fadeInUp" style="animation-delay: 0s;">Strategy & Planning</h6>
                        <h2 class="animated fadeInUp" style="animation-delay: 0.2s;">Predict how your audience will behave</h2>
                        <p class="animated fadeInUp" style="animation-delay: 0.4s;">Build a market-leading strategy based on an intimate and detailed knowledge of your audience: not just standard demographic data but personality, passions, preferences and interests.</p>
                        <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-1 animated fadeInUp" style="animation-delay: 0.8s;" href="/casestudies#strategy-research">See Case Studies <span class="fas fa-angle-right ml-2"></span></a>
                      </div>

                      <div class="col-md-7">
                        <img class="img-fluid rounded-lg animated fadeInUp" style="animation-delay: 0s;" src="@/assets/buzzradar/img/homepage/usecases/strategy.png" alt="Image Description">
                      </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab_use_cases_2">
                    <div class="row mt-4">
                      <div class="col-md-5">
                        <h6 class="mt-md-4 mt-sm-0 animated fadeInUp" style="animation-delay: 0s;">Content Optimisation</h6>
                        <h2 class="animated fadeInUp" style="animation-delay: 0.2s;">Know what content will drive results before posting</h2>
                        <p class="animated fadeInUp" style="animation-delay: 0.4s;">Optimise your marketing content by testing it on an AI model of your audience before they even see it!</p>
                        <a v-on:click="bookMeeting" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-1 animated fadeInUp" style="animation-delay: 0.8s;" href="#">Book a Demo <span class="fas fa-angle-right ml-2"></span></a>
                      </div>

                      <div class="col-md-7">
                        <img class="img-fluid rounded-lg animated fadeInUp" style="animation-delay: 0s;" src="@/assets/buzzradar/img/homepage/usecases/content.png" alt="Image Description">
                      </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab_use_cases_3">
                    <div class="row mt-4">
                      <div class="col-md-5">
                        <h6 class="mt-md-4 mt-sm-0 animated fadeInUp" style="animation-delay: 0s;">Brand Management</h6>
                        <h2 class="animated fadeInUp" style="animation-delay: 0.2s;">Understand and manage your brand performance with less stress</h2>
                        <p class="animated fadeInUp" style="animation-delay: 0.4s;">Real-time tracking and insight into your brand and product performance across all the major performance indicators you need.</p>
                        <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-1 animated fadeInUp" style="animation-delay: 0.8s;" href="/casestudies#brand-management">See Case Studies <span class="fas fa-angle-right ml-2"></span></a>
                      </div>

                      <div class="col-md-7">
                        <img class="img-fluid rounded-lg animated fadeInUp" style="animation-delay: 0s;" src="@/assets/buzzradar/img/homepage/usecases/brandmanag.png" alt="Image Description">
                      </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab_use_cases_4">
                    <div class="row mt-4">
                      <div class="col-md-5">
                        <h6 class="mt-md-4 mt-sm-0 animated fadeInUp" style="animation-delay: 0s;">Influencer & Partner Identification</h6>
                        <h2 class="animated fadeInUp" style="animation-delay: 0.2s;">Create deeper and more effective influencer and partner strategies</h2>
                        <p class="animated fadeInUp" style="animation-delay: 0.4s;">Automatically identify and verify the influencers and partners that will work best for your brand and campaign.</p>
                        <a v-on:click="bookMeeting" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-1 animated fadeInUp" style="animation-delay: 0.8s;" href="#">Book a Demo <span class="fas fa-angle-right ml-2"></span></a>
                      </div>

                      <div class="col-md-7">
                        <img class="img-fluid rounded-lg animated fadeInUp" style="animation-delay: 0s;" src="@/assets/buzzradar/img/homepage/usecases/influencer.png" alt="Image Description">
                      </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab_use_cases_5">
                    <div class="row mt-4">
                      <div class="col-md-5">
                        <h6 class="mt-md-4 mt-sm-0 animated fadeInUp" style="animation-delay: 0s;">Competitor Anaysis</h6>
                        <h2 class="animated fadeInUp" style="animation-delay: 0.2s;">Understand where you stand in your market</h2>
                        <p class="animated fadeInUp" style="animation-delay: 0.4s;">Gain insight on how to beat your competition by understanding what content is working for them and how their audience perceives them.</p>
                        <a v-on:click="bookMeeting" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-1 animated fadeInUp" style="animation-delay: 0.8s;" href="#">Book a Demo <span class="fas fa-angle-right ml-2"></span></a>
                      </div>

                      <div class="col-md-7">
                        <img class="img-fluid rounded-lg animated fadeInUp" style="animation-delay: 0s;" src="@/assets/buzzradar/img/homepage/usecases/competitor.png" alt="Image Description">
                      </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab_use_cases_6">
                    <div class="row mt-4">
                      <div class="col-md-5">
                        <h6 class="mt-md-4 mt-sm-0 animated fadeInUp" style="animation-delay: 0s;">Crisis Management</h6>
                        <h2 class="animated fadeInUp" style="animation-delay: 0.2s;">Monitor and protect your brand and campaigns in real-time</h2>
                        <p class="animated fadeInUp" style="animation-delay: 0.4s;">Be alerted to potential reputational issues and trends before they become a significant issue without even logging in.</p>
                        <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-1 animated fadeInUp" style="animation-delay: 0.8s;" href="/casestudies#crisis-manag">See Case Studies <span class="fas fa-angle-right ml-2"></span></a>
                      </div>

                      <div class="col-md-7">
                        <img class="img-fluid rounded-lg animated fadeInUp" style="animation-delay: 0s;" src="@/assets/buzzradar/img/homepage/usecases/crisismanag.png" alt="Image Description">
                      </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab_use_cases_7">
                    <div class="row mt-4">
                      <div class="col-md-5">
                        <h6 class="mt-md-4 mt-sm-0 animated fadeInUp" style="animation-delay: 0s;">Events and Presentations</h6>
                        <h2 class="animated fadeInUp" style="animation-delay: 0.2s;">Engage audiences and communicate insights with beautiful, real-time, interactive visualisations</h2>
                        <p class="animated fadeInUp" style="animation-delay: 0.4s;">No matter if you are on an exhibition stand or presenting insights to your colleagues, capture and hold thier attention with visualisations that educate and inspire.</p>
                        <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-1 animated fadeInUp" style="animation-delay: 0.8s;" href="/casestudies#events">See Case Studies <span class="fas fa-angle-right ml-2"></span></a>
                      </div>

                      <div class="col-md-7">
                        <img class="img-fluid rounded-lg animated fadeInUp" style="animation-delay: 0s;" src="@/assets/buzzradar/img/homepage/usecases/events.png" alt="Image Description">
                      </div>
                    </div>
                </div>
            </div>
            <!-- End Fancy Tabs Content -->

          </div>
        </div>
      
    </div>
    <!-- SVG Bottom Shape -->
    <figure>
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="64px"
           viewBox="0 0 1921 273" style="margin-bottom: -8px; enable-background:new 0 0 1921 273;" xml:space="preserve">
        <polygon class="fill-gray-100" points="1921,0 0,0 0,273 "/>
      </svg>
    </figure>
    <!-- End SVG Bottom Shape -->

    <!-- End Use Cases -->







    


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
                <blockquote class="h1">Buzz Radar has consistently been a valued partner for our organization. They are at the cutting edge of data and AI and bring expert analytics to any project we have worked on with them.</blockquote>
              </div>
              <div class="d-flex justify-content-center align-items-center w-lg-50 mx-auto">
                <div class="u-avatar">
                  <img class="img-fluid rounded-circle" src="@/assets/buzzradar/img/testimonials/tinaanthony.png" alt="Tina Anthony, Director, Digital Strategy at the Consumer Technology Association">
                </div>
                <div class="ml-3">
                  <h4 class="h6 mb-0">Tina Anthony</h4>
                  <small class="text-muted">Director, Digital Strategy at the Consumer Technology Association</small>
                </div>
              </div>
            </div>
            <!-- End Testimonial -->


            <!-- Testimonial -->
            <div class="js-slide">
              <div class="text-center mb-5">
                <blockquote class="h1">I need to be agile. The biggest selling point was the way we could quickly create and configure beautiful, useful real-time visualisations and dashboards ourselves.</blockquote>
              </div>
              <div class="d-flex justify-content-center align-items-center w-lg-50 mx-auto">
                <div class="u-avatar">
                  <img class="img-fluid rounded-circle" src="@/assets/buzzradar/img/testimonials/amygoodnow.png" alt="Amy Goodnow, Insights & Analytics Manager for Hallmark">
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
                <blockquote class="h1">The types of insight Buzz Radar gives us access to is really deep. At a glance the team see really powerful information communicated in an extremely attractive presentation.</blockquote>
              </div>
              <div class="d-flex justify-content-center align-items-center w-lg-50 mx-auto">
                <div class="u-avatar">
                  <img class="img-fluid rounded-circle" src="@/assets/buzzradar/img/testimonials/michaeldelacruz.png" alt="Michael de la Cruz, Director at FX Networks">
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

  export default {

    name : 'Home',
    data () {
      return {

        videoBgURL : process.env.BASE_URL + 'public_assets/html5-video/universe/universe',

        heroBgImageMobile : {
          height : '100%',
          backgroundImage : 'url("'+require('@/assets/buzzradar/img/homepage/heroImgMobile.jpg')+'")',
          backgroundPosition : 'top center',
        },

        styleParallaxBg1 : {
          backgroundImage : 'url('+require('@/assets/buzzradar/svg/components/bg-elements-7.svg')+')',
          height : '120%',
        },
        useCaseStrategy : {
          background: 'url('+require('@/assets/buzzradar/img/homepage/usecases/icons/strategy.png')+') no-repeat',
          backgroundPosition : '0px -75px', 
        },
        useCaseContent : {
          background: 'url('+require('@/assets/buzzradar/img/homepage/usecases/icons/useContent.png')+') no-repeat',
        },
        useCaseBrandManag : {
          background: 'url('+require('@/assets/buzzradar/img/homepage/usecases/icons/brandManag.png')+') no-repeat',
        },
        useCaseInfluencerId : {
          background: 'url('+require('@/assets/buzzradar/img/homepage/usecases/icons/influencerId.png')+') no-repeat',
        },
        useCaseCompetitor : {
          background: 'url('+require('@/assets/buzzradar/img/homepage/usecases/icons/competitor.png')+') no-repeat',
        },
        useCaseCrisis : {
          background: 'url('+require('@/assets/buzzradar/img/homepage/usecases/icons/crisis.png')+') no-repeat',
        },
        useCaseEvents : {
          background: 'url('+require('@/assets/buzzradar/img/homepage/usecases/icons/events.png')+') no-repeat',
        },
        
        publicPath: process.env.BASE_URL,

      }
    },
    watch: {
      
    },
    mounted() {

      $.HSCore.components.HSBgVideo.init('.js-bg-video');
      $.HSCore.components.HSFancyBox.init('.js-fancybox');
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
      $.HSCore.components.HSSelectPicker.init('.selectpicker');

      var items = $.HSCore.components.HSChartPie.init('.js-pie');

      dzsprx_init('.dzsparallaxer', { direction: "normal"} );

      $('.use-case-link').hover(
        function() {
          $( this ).find('img').css('background-position','0px -75px')
        }, function() {
          var isActive = $(this).closest('.nav-link').hasClass('active');
          if (!isActive) {
            $( this ).find('img').css('background-position','0px 0px')  
          }
        }
      );

      $('.use-case-link').click( function() {

        $('.use-case-link').find('img').css('background-position','0px 0px');
        $(this).find('img').css('background-position','0px -75px');

      });



      // initialization of text animation (typing)

      setTimeout(function() {

        $('.br-text-anim').html('<strong class="u-text-animation u-text-animation--typing text-primary"></strong>');

        var typed = new Typed(".u-text-animation.u-text-animation--typing", {
          strings: ["Data","Data", "Competitors", "Brands", "Audience"],
          typeSpeed: 70,
          loop: true,
          backSpeed: 40,
          backDelay: 2000
        });

      },4000);


      

      $('#powerful_tools').find('.nav-link').click(function(e){
        e.preventDefault();
        $('#powerful_tools').find('.rounded-circle').addClass('btn-light').removeClass('btn-primary');
        $(this).find('.rounded-circle').removeClass('btn-light').addClass('btn-primary');
      });


    },
    updated() {
      
    },
    methods : {
      bookMeeting : function(e) {
        e.preventDefault();
        Calendly.showPopupWidget('https://calendly.com/buzzradar/introduction-meeting');
        return false;
      },
      onChange(event) {
          $('a[href="#tab_use_cases_' + event.target.value + '"]').tab('show');
      }
    },

  }

 </script>








<style lang="scss" scoped>

  @import "compass";

  .clients-title{
    color:#8c8c8c;
  }

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

  .aiwatson_video{
      position:relative;
      width: 100%;
      @include border-radius(10px);
  }

  .bg-soft-dark {
    background-color: rgba(30, 32, 34, 0.5) !important;
    border:1px solid rgba(255, 2545, 255, 0.3);
    @include border-radius(10px);
  }
   

  .nav-pills {

    .nav-link {
      border:1px solid #eee;
      background: #fff;
      font-size:12px;
    }

    .nav-link.active {
      border: 1px solid #21c6ca;
      background: white;

      img{
        width:75px;
        height:75px;
      }

    }

  }

  blockquote {
    font-size: 2rem;
  }


  @media (max-width: 1024px) {
    .nav-pills>li {
      //width:100%;
      flex-basis: 32%;
      //margin-bottom: 5px;
    }

    .nav .nav-item {
      margin-right: 0rem !important;
      margin-left: 0rem !important;
    }
  }

</style>

