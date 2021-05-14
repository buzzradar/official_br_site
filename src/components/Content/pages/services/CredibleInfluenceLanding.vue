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
              <h1 class="display-5 font-size-md-down-5 font-weight-bold mb-2 text-credibleinfluence">
                Credible Influence, AI Audience Intelligence
              </h1>
              <h3>The AI Powered Audience Intelligence,<br>Social Insight and Content Optimisation Agency</h3>
              <p><img src="@/assets/buzzradar/img/credibleinfluence/powered_buzzradar.png" width="150" /></p>

              <button v-on:click="learnMoreClicked" type="button" class="btn btn-sm btn-secondary transition-3d-hover try-now-btn mt-2 learn-more" tabindex="0">Learn More</button>

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

                <h2 class="h4 font-weight-semi-bold text-secondary">Human Expertise x Data x Machine Learning</h2>
                <p class="mb-0">Data without context and empathy is meaningless.</p>
                
                <p>We’ve spent the last 6 years designing and developing Buzz Radar a real-time insight platform for some of the biggest brands in the world. As well as providing cutting edge insight technology, our clients have often asked us to help translate that insight, provide context and data driven advice to inform their strategy. So we’ve created Credible Influence to do just that.</p>
            
                <p>Whether it’s helping guide engaging creative content or helping predict trends that provides a brand with game changing insight, everything we do is based on state of the art data science.</p>

                <button v-on:click="learnMoreClicked" type="button" class="btn btn-sm btn-outline-secondary transition-3d-hover try-now-btn mt-3" tabindex="0">Learn More<span class="fas fa-angle-right ml-2"></span></button>
              </div>
              <!-- End Title -->
            </div>

            <div class="offset-lg-1 col-lg-5 order-lg-1">
              <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/credibleinfluence/whoarethey.jpg" alt="Human Expertise x Data x Machine Learning">
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
                <h2 class="h4 font-weight-semi-bold text-secondary">Helping Brands Become Data Driven</h2>
                <p class="mb-0">Dashboards, algorithms and machine learning can only push data, correlations and insights to a certain point. In a world where technology has adapted faster than human behaviour, you need experts to provide a human touch to ensure you’re working with powerful insights that will help you to win.</p>
                <p>The engine that powers and supports our team of strategists, tacticians and analysts is our proprietary Buzz Radar platform. 6 years in the making and built using IBM Watson AI, it allows us to capture, analyse and visualise vast amounts of data quickly and extract deep meaningful insight.</p>
                <p>Combined with our industry leading team, we can quickly and easily uncover insights, spot trends and make predictions for our clients. Turning all that, unwieldy unconnected data into powerful actionable intelligence that drives ROI.</p>

                <a v-on:click="learnMoreClicked" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="/casestudies/cs-user-case-allianz">Learn More<span class="fas fa-angle-right ml-2"></span></a>
              </div>
              <!-- End Title -->
            </div>

            <div class="col-lg-5 order-lg-1">
              <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/credibleinfluence/advantage.jpg" alt="Helping Brands Become Data Driven">
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
                  <h2 class="h4 font-weight-semi-bold text-secondary">Our unique advantage: AI Audience Analysis + Human Expertise</h2>

                  <p class="mb-0">Having the most advanced tools and access to great data is often only part of the challenge when it comes to getting the most useful insights. Our experienced team of analysts work with clients to ask the right questions for their unique use case then let machine learning do the heavy lifting. This allows our specialists to focus on things humans do better than computers, providing context, interpretation, and recommendation. The results come in the form of beautiful easy to understand tailored reports and data driven strategies that transform performance. </p>

                  <button v-on:click="learnMoreClicked" type="button" class="btn btn-sm btn-outline-secondary transition-3d-hover try-now-btn mt-3" tabindex="0">Learn More<span class="fas fa-angle-right ml-2"></span></button>
                </div>
                <!-- End Title -->
              </div>

              <div class="offset-lg-1 col-lg-5 order-lg-1">
                <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/credibleinfluence/human.jpg" alt="Our unique advantage: AI Audience Analysis + Human Expertise">
              </div>

            </div>
          </div>
        </div>
        <!-- Personas And Tribes -->














































        <!-- 2 Choice Section -->
        <div class="bg-light">
          <div class="container">
            <div class="row space-2">
              <div class="col-lg-6 u-ver-divider u-ver-divider--none-lg mb-7 mb-lg-0">
                <!-- Contacts Info -->
                <div class="media pr-lg-9">
                  <figure id="icon15" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
                    <img class="js-svg-injector" src="@/assets/buzzradar/img/ces/icons/icon-11.svg" alt="Book a Meeting"
                         data-parent="#icon15">
                  </figure>
                  <div class="media-body">
                    <h3 class="h4">Book a Meeting</h3>
                    <p class="mb-1">We want to answer all of your queries. Get in touch and we'll get back to you as soon as we can.</p>
                    <a v-on:click="bookMeeting" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="/casestudies/cs-user-case-allianz">Book a Meeting<span class="fas fa-angle-right ml-2"></span></a>

                  </div>
                </div>
                <!-- End Contacts Info -->
              </div>

              <div class="col-lg-6">
                <!-- Contacts Info -->
                <div class="media pl-lg-9">
                  <figure id="icon4" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
                    <img class="js-svg-injector" src="@/assets/buzzradar/img/ces/icons/icon-1.svg" alt="Try the CES Attendee Analyer"
                         data-parent="#icon4">
                  </figure>
                  <div class="media-body">
                    <h3 class="h4">Are you Interested?</h3>
                    <p class="mb-1">If you want to know more about Credible Influence click here to find out more about them.</p>
                    <a v-on:click="learnMoreClicked" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="/casestudies/cs-user-case-allianz">Learn More<span class="fas fa-angle-right ml-2"></span></a>

                  </div>
                </div>
                <!-- End Contacts Info -->
              </div>
            </div>

          </div>
        </div>
        <!-- End 2 Choice Section -->













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
        name: 'CredibleInfluence',
        data() {
            return {
              heroBgImage : {
                height : '120%',
                backgroundImage : 'url("'+require('@/assets/buzzradar/img/credibleinfluence/heroimage.jpg')+'")',
              },

              styleParallaxBg1 : {
                backgroundImage : 'url('+require('@/assets/buzzradar/svg/components/bg-elements-7.svg')+')',
                height : '120%',
              },

            }
        },
        components: {

        },
        mounted(){

          dzsprx_init('#parallaxDOM', { direction: "normal", mode_scroll:"fromtop"} );
      	  dzsprx_init('.dzsparallaxer', { direction: "normal"} );
          $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
          $('.js-pagination').remove();

        },
        updated() {

        }, 
        methods : {

          bookMeeting : function(e) {
            e.preventDefault();
            Calendly.showPopupWidget('https://calendly.com/buzzradar/introduction-meeting');
            return false;
          },
          learnMoreClicked : function(e) {
            e.preventDefault();
            window.open('http://www.credibleinfluence.com/', '_blank');
            return false;
          },

        },
        
	}

</script>








<style lang="scss" scoped>

	@import "compass";

  .text-credibleinfluence{
    color: #21c6ca;
  }

  .text-credibleinfluence-pink{
    color: #f781dc;
  }

  .btn-credinflu{
    background: #21c6ca;
    color:white;
  }

  .btn-credinflu-purple{
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
      border:4px solid #21c6ca;
    }
  }


</style>
































