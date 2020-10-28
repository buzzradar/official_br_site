/* eslint-disable */

<template>

    <div>


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
              <h1 class="display-5 font-size-md-down-5 font-weight-bold mb-2">
                Make your Virtual Event count
              </h1>
              <h3>with Real-Time Social and Audience Intelligence<br>you can act on instantly</h3>
              
              <button v-on:click="bookMeeting" type="button" class="btn btn-sm btn-primary transition-3d-hover mt-2" tabindex="0">Book a Demo</button>
              

            </div>
          </div>
          <!-- End Content -->
        </div>
        <!-- End Hero Section -->











        <!-- Stats Section -->
        <div class="bg-light">
          <div class="container space-1">
            <!-- Title -->
            <div class="w-md-80 w-lg-80 text-center mx-md-auto">
              <div id="svgArrows" class="pt-3 mb-5">
                <h1 class="h2 text-primary">Make your virtual event count with Buzz Radar</h1>
                <h2 class="h5 font-weight-normal text-secondary">With the many events this year turning virtual, utilising and understanding the online conversation around them has become increasingly important. Virtual events have special needs; Buzz Radar’s Audience Analysis and Real-time Data Visualisation can help event organisers quickly fill gaps in several key areas:</h2>
              </div>
            </div>
            <!-- End Title -->
          </div>
        </div>
        <!-- End Stats Section -->
















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
                  <h2 class="h4 font-weight-semi-bold text-secondary">Real-time command of your event</h2>
                  <p class="mb-0">Live monitoring of every aspect of online conversation for your event. Get alerts to the most discussed topics, keynotes and speakers; repetitional issues; influencers; as well as the performance of your event messaging.</p>
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
                <h2 class="h4 font-weight-semi-bold text-secondary">Powerful reporting post-event</h2>
                <p class="mb-0">Detailed analysis of the online performance of your event based on audience conversations online. Understand the digital impact of the event alongside the ROI for sponsors and exhibitors. Learn what worked for your audience and what didn’t and which topics and speakers drove conversation and inspired attendees.</p>
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
                  <h2 class="h4 font-weight-semi-bold text-secondary">Interactive social content on display</h2>
                  <p class="mb-0">Help your attendees feel part of the conversation with a fully customisable real-time social wall enabling them to discover the conversations and feedback across social channels in a variety of engaging ways. All social walls are embeddable across your social channels or website.</p>
                  <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="https://insights.buzzradar.com/preview/IDJFFPAW" target="_blank">View a Dashboard<span class="fas fa-angle-right ml-2"></span></a>
                </div>
                <!-- End Title -->
              </div>

              <div class="col-lg-7">
                <img class="img-fluid" src="@/assets/buzzradar/img/campaigns/virtualevents/interactive_social_content.png" alt="Interactive Social Content">
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
                <h2 class="h4 font-weight-semi-bold text-secondary">In-event audience analysis</h2>
                <p class="mb-0">With a deeper understanding of their guest sentiment, trending topics, and deep audience psychographics allows the insights to communicate broadly with guests in real-time targeting their needs more closely in an effort to help manage their shift to virtual conferencing.</p>
                <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-4" href="/aiaudienceanalysis">Book a Demo<span class="fas fa-angle-right ml-2"></span></a>
              </div>
              <!-- End Title -->
            </div>

            <div class="col-lg-7">
              <img class="img-fluid" src="@/assets/buzzradar/img/campaigns/virtualevents/event_audience_analysis.png" alt="In-Event Audience Analysis">
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






    </div>

</template>







<script>

	export default {
        name: 'VirtualEvents',
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

        },
        updated() {

        }, 
        methods : {
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
          
          
        },
        
	}

</script>








<style lang="scss" scoped>

	@import "compass";

  .btn-primary{
    background:#fc069b;
    border:0px;
  }

  .text-ces{
    color: #fc069b;
  }

  .text-ces-pink{
    color: #f781dc;
  }

  .btn-ces{
    background: #fc069b;
    color:white;
  }

  .btn-ces-purple{
    background: #f781dc;
    color:white; 
  }

  .fill-primary{
    fill:#ff0000 !important;
  }


  .u-avatar {
    width: 5rem;
    height: 5rem;

    img {
      border:4px solid #f6921e;
    }
  }


</style>
































