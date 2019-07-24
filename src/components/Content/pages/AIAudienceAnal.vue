<template>
  
  <div>


    

    <!-- Hero Section -->
    <div class="container-fluid banner br">
      <div class="row">

        <div class="container p-6 space-1 space-md-3">
          <div class="row">
              
              <div class="col-md-12 position-relative z-index-2">
                <h1 class="display-5">Don’t just rely on gut instinct<br>Truly <strong class="text-warning">understand your audience</strong>.</h1>
                <p>Find what really makes your customers tick<br>with AI Audience Analysis.</p>
                <div class="mt-2">
                  <button type="button" class="btn btn-sm btn-warning transition-3d-hover" tabindex="0">Book a Meeting</button>
                </div>
              </div>

          </div>
        </div>

      </div>
    </div>
    <!-- End Hero Section -->





    <!-- The next Generation -->
    <div class="container space-2 space-md-3">
        <div class="row align-items-lg-center">
          <div class="col-lg-6 mb-7 mb-lg-0">
            <!-- Title -->
            <div class="pr-lg-4">
              <span class="btn btn-icon btn-soft-warning rounded-circle mb-3">
                <span class="font-weight-semi-bold btn-icon__inner">1.</span>
              </span>
              <h2 class="h4 font-weight-semi-bold text-warning">The next generation in audience analysis and content optimisation</h2>
              <p class="mb-0">Using our new Audience AI you can psychometrically profile your followers, influencers and those discussing your brand in a deeper more meaningful way than ever before.</p>

              <p>Learn about the fundamental personality traits that drive your audience, enabling you to tailor messaging that resonates and engages more effectively. Give our demo a try on your own profile and imagine having that level of understand for your entire audience!</p>
            </div>
            <!-- End Title -->
          </div>

          <div class="offset-lg-1 col-lg-5 order-lg-1">
            <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/ai_aud_analysis/devices_mockup.jpg" alt="The next generation in Audience and Content Optimisation">
          </div>

        </div>
      </div>
      <!-- The next Generation -->




      <!-- Helping Creatives -->
      <div class="container space-1">
        <div class="row align-items-lg-center">
          <div class="col-lg-6 offset-lg-1 order-lg-2 mb-7 mb-lg-0">
            <!-- Title -->
            <div class="pl-lg-4">
              <span class="btn btn-icon btn-soft-warning rounded-circle mb-3">
                <span class="font-weight-semi-bold btn-icon__inner">2.</span>
              </span>
              <h2 class="h4 font-weight-semi-bold text-warning">Helping creatives optimise content that your unique audience will love</h2>
              <p class="mb-0">A great understanding of your audience is the one thing, but how can you use that to create content that resonates?</p>

              <p>With Content Optimiser we capture your content and create a profile for your brand using the same AI driven psychometric analysis. This provides unique insight into your brand’s perceived personality, matching it up against your target audience. The results provides hugely powerful insights into how your creative content chimes with audiences. This is all provided alongside automatically tailored creative recommendations on how to adjust content for visibly better results!</p>
            </div>
            <!-- End Title -->
          </div>

          <div class="col-lg-5 order-lg-1">
            <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/ai_aud_analysis/man_touch_screen.jpg" alt="The next generation in Audience and Content Optimisation">
          </div>
        </div>
      </div>
      <!-- Helping Creatives -->





      <!-- Personas And Tribes -->
      <div class="container space-2 space-md-3">
          <div class="row align-items-lg-center">
            <div class="col-lg-6 mb-7 mb-lg-0">
              <!-- Title -->
              <div class="pr-lg-4">
                <span class="btn btn-icon btn-soft-warning rounded-circle mb-3">
                  <span class="font-weight-semi-bold btn-icon__inner">3.</span>
                </span>
                <h2 class="h4 font-weight-semi-bold text-warning">Map your brand’s personas and tribes to your real audience.</h2>
                <p class="mb-0">By detecting the profiles of everyone who interacts with your brand and competitors, Audience Analyser automatically captures all the publicly available social data from those mentioning and following your target audience across social media. It then analyses the personality of each individual and then assigns them to an audience segment that can be customised to your brands pre existing persona or tribe categories. It does this all while staying compliant with GDPR through a process of aggregation and anonymisation.</p>
              </div>
              <!-- End Title -->
            </div>

            <div class="offset-lg-1 col-lg-5 order-lg-1">
              <img class="img-fluid rounded d-md-block" src="@/assets/buzzradar/img/ai_aud_analysis/br_simple_diagram.jpg" alt="The next generation in Audience and Content Optimisation">
            </div>

          </div>
        </div>
        <!-- Personas And Tribes -->




        <!-- IBM Watson -->
        <div class="container space-1">
          <div class="row align-items-lg-center">
            <div class="col-lg-6 order-lg-2 mb-7 mb-lg-0">
              <!-- Title -->
              <div class="pl-lg-4">
                <span class="btn btn-icon btn-soft-warning rounded-circle mb-3">
                  <span class="font-weight-semi-bold btn-icon__inner">4.</span>
                </span>
                <h2 class="h4 font-weight-semi-bold text-warning">Our custom built AI psychometric analyser built with help from IBM Watson</h2>
                <p class="mb-0">Two years in development alongside our own and IBM watson AI engineers Audience Analyser psychometrically analyses millions of posts to create personalities maps around 50 core traits based around OCEAN (Big 5) and Myers Briggs Models. The result is to provide an incredibly accurate and detailed profiles of your audience’s personalities while simultaneously matching it against the tone of your brands content.</p>
              </div>
              <!-- End Title -->
            </div>

            <div class="col-lg-6 order-lg-1">

              <video loop="" muted="" autoplay="" poster="images/videoframe.jpg" class="aiwatson_video">
                  <source src="http://www.buzzradar.com/wp-content/uploads/2017/12/IBM-Watson_-Ambient-1.mp4" type="video/mp4">
              </video>
              
            </div>
          </div>
        </div>
        <!-- IBM Watson -->






  </div>

</template>



<script>

  export default {

    name : 'AudienceIntel',
    data () {
      return {
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

  .banner{

      .container{
          padding:8% 0;
      }

      &.br {
          background: url('~@/assets/buzzradar/img/1920x692/banner_minority.jpg') no-repeat white top center;
          @include background-size(cover);
      }

  }

  .aiwatson_video{
      width: 100%;
      @include border-radius(10px);
  }



</style>

