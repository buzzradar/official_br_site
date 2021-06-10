/* eslint-disable */

<template>

    <div>

      <div v-if="routeContains(this.$router.currentRoute.path,'srv-')">

        <!-- ++++++++++++++++++++ -->
        <!-- Individual Services Pages -->
        <!-- ++++++++++++++++++++ -->

      </div>

      <div v-else>

        <!-- ++++++++++++++++++++ -->
        <!-- Main Services Pages -->
        <!-- ++++++++++++++++++++ -->
        
        <!-- Hero Section -->
        <div id="parallaxDOM" class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll"
             data-options='{direction: "normal"}'>
          <!-- Apply your Parallax background image here -->
          <div class="divimage dzsparallaxer--target" :style="heroBgImage"></div>

          <!-- Content -->
          <div class="container position-relative space-3 space-top-md-4 space-bottom-md-3 text-white">
            <div class="w-lg-75">
              <!-- <img class="img-fluid" src="@/assets/buzzradar/img/ces/are_you_ces_ready.png" alt="Are you CES ready?">
              <p>
                <img class="img-fluid mt-3" src="@/assets/buzzradar/img/ces/ces_2020_date.png" alt="January 7-10 (Las Vegas)">
              </p> -->
              <h2 class="h1 display-5 font-size-md-down-5 font-weight-bold mb-2">
                Social Data + AI + Human Expertise = Game Changing Insights 
              </h2>
              <h3>Get data-driven insights, recommendations and strategy to your toughest marketing challenges - from start to finish</h3>
              
              <button v-on:click="bookMeeting" type="button" class="btn btn-sm btn-primary transition-3d-hover mt-2" tabindex="0">Book a Demo</button>
              

            </div>
          </div>
          <!-- End Content -->
        </div>
        <!-- End Hero Section -->











        <!-- Paragraph Section -->
        <div class="bg-light">
          <div class="container space-1">
            <!-- Title -->
            <div class="w-md-80 w-lg-80 text-center mx-md-auto">
              <div id="svgArrows" class="pt-3 mb-2">
                <h1 class="h2 text-primary">Intelligence Platform + Intelligent Humans</h1>
                <h2 class="h5 font-weight-normal text-secondary">As great as our platform is, on it's own it’s not enough. Data without context, expertise and experience can be hard to turn into meaningful insights and action. We’ve spent the last 9 years designing and developing Buzz Radar into a real-time insights platform for some of the biggest brands in the world. As well as providing cutting edge insight technology, we help translate that insight, provide context and give data-driven advice to guide their strategy. Our Insights and strategy team is here to help you do just that.<br><br></h2>
                <h2 class="h5 font-weight-normal text-secondary">From one off reports to helping major brands launch their global social channels, we can help. We have a range of services that can help no matter the size of your business. If they don’t fit, just ask us and we will find a way to help.</h2>
              </div>
            </div>
            <!-- End Title -->
          </div>
        </div>
        <!-- End Paragraph Section -->










        <!-- Small Icons Section -->
        <div class="bg-light">
          <div class="container space-1">
            <!-- Title -->
            <div class="w-md-100 w-lg-100 text-center mx-md-auto">
              
              <div class="row mx-n2 mb-3">

                <div v-for="(serviceItem,index) in listServicesArray" class="col-sm-6 col-md-4 px-2 mb-3">
                  <div class="card card-frame h-100">
                    <a class="card-body" href="#"><div class="media align-items-center">
                      <div class="u-sm-avatar mr-3">
                        <img width="160" height="160" :src="serviceItem.icon" class="img-fluid wp-post-image" alt="" srcset="https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg 160w, https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9-150x150.jpg 150w, https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9-24x24.jpg 24w, https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9-36x36.jpg 36w, https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9-48x48.jpg 48w, https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9-96x96.jpg 96w, https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9-50x50.jpg 50w" sizes="(max-width: 160px) 100vw, 160px"> </div>
                        <div class="media-body">
                          <div class="d-flex align-items-center">
                            <span class="d-block text-dark font-weight-medium text-left">{{serviceItem.name}}</span>
                          </div>
                          <!-- <small class="d-block text-secondary text-left">Design service</small>  -->
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
                
            </div>
            <!-- End Title -->
          </div>
        </div>
        <!-- End Small Icons Section -->












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
                  <h2 class="h4 font-weight-semi-bold text-secondary">Rapid Results</h2>
                  <p class="mb-0">Due to the advances in AI, a lot of the difficult, cost-prohibitive heavy lifting often created with audience projects producing huge amounts of data can be removed. This allows for our team to zero in quickly and focus on delivering great insight and strategy.</p>
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
                <img class="img-fluid" src="@/assets/buzzradar/img/campaigns/virtualevents/real_time_command.png" alt="Real Time Command">
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
                <h2 class="h4 font-weight-semi-bold text-secondary">Tool Agnostic</h2>
                <p class="mb-0">While our own cutting edge social media tools we have developed for the past eight years are available, we can also adopt our clients’ tools as needed.</p>
                <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" :href="pdfreportpath" target="_blank">Download a Sample Report <span class="fas fa-angle-right ml-2"></span></a>
              </div>
              <!-- End Title -->
            </div>

            <div class="col-lg-7">
              <img class="img-fluid" src="@/assets/buzzradar/img/campaigns/virtualevents/powerful_rep.png" alt="Real Time Command">
            </div>

          </div>
        </div>
        <!-- End Mockup Block -->




        



















        <!-- Testimonials Section -->
        <div class="bg-white">
          <div class="container space-2 space-lg-3">
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
                    <blockquote class="h3">Buzz Radar has consistently been a valued partner for our organization. They are at the cutting edge of data and AI and bring expert analytics to any project we have worked on with them.</blockquote>
                  </div>
                  <div class="d-flex justify-content-center align-items-center w-lg-50 mx-auto">
                    <div class="u-avatar">
                      <img class="img-fluid rounded-circle" src="@/assets/buzzradar/img/testimonials/tinaanthony.png" alt="Tina Anthony, Director, Digital Strategy at the Consumer Technology Association">
                    </div>
                    <div class="ml-3">
                      <h4 class="h6 mb-0">Tina Anthony</h4>
                      <small class="text-muted">Director, Digital Strategy at the CTA</small>
                    </div>
                  </div>
                </div>
                <!-- End Testimonial -->

              </div>
            </div>
          </div>
        </div>
        <!-- End Testimonials Section -->

        <!-- ++++++++++++++++++++ -->
        <!-- End Main Services Pages -->
        <!-- ++++++++++++++++++++ -->

      </div>


      <router-view />




    </div>

</template>







<script>

	export default {
	  name: 'Services',
    data() {
        return {
          heroBgImage : {
            height : '120%',
            backgroundImage : 'url("'+require('@/assets/buzzradar/img/campaigns/virtualevents/heroimage_virtualevents.jpg')+'")',
          },

          pdfreportpath : process.env.BASE_URL + 'public_assets/pdf/ces_2020_social_insight.pdf',

          styleParallaxBg1 : {
            backgroundImage : 'url('+require('@/assets/buzzradar/svg/components/bg-elements-7.svg')+')',
            height : '120%',
          },

 

          listServicesArray : [
            {
              name : "Deep audience insight",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
            {
              name : "Campaign monitoring",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
            {
              name : "Crisis monitoring",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
            {
              name : "Content analysis and recommendations",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
            {
              name : "Event monitoring and analysis",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
            {
              name : "Social channel audit",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
            {
              name : "Competition analysis",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
            {
              name : "Social media governance",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
            {
              name : "Global social media strategy",
              icon : "https://demo3.madrasthemes.com/front-demos/app-marketplace/wp-content/uploads/sites/11/2020/08/img9.jpg",
            },
          ],

          
        }
    },
    components: {
      
    },
    mounted(){

      $('.js-pagination').remove();
      $.HSCore.components.HSFancyBox.init('.js-fancybox');
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
      dzsprx_init('#parallaxDOM', { direction: "normal", mode_scroll:"fromtop"} );
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

    },
    methods: {
      launchPersonalityAnalyzer : function(e) {
        if (e) e.preventDefault();
        window.open('https://insights.buzzradar.com/preview/IDIVQYOP', '_blank');
        return false;
      },
      bookMeeting : function(e) {
        e.preventDefault();
        Calendly.showPopupWidget('https://calendly.com/buzzradar/introduction-meeting');
        return false;
      },
      routeContains(currentRoute,matchingRoute) {

        // console.log('----------------------------------------');
        // console.log(currentRoute, matchingRoute);
        // console.log('----------------------------------------');

        if (currentRoute.includes(matchingRoute)){
          //console.log("SERVICES PAGE: I am in!!!!!!", currentRoute);
        }else{
          //console.log("SERVICES PAGE: I am NOT in!!!!!!", currentRoute);
        }

        return currentRoute.includes(matchingRoute);
      },
      onChange(event) {
          $('a[href="#tab_use_cases_' + event.target.value + '"]').tab('show');
      },
    },
    updated() {
      
    }
	}

</script>








<style lang="scss" scoped>

	@import "compass";

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

  .card:hover{
    background:white;
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
































