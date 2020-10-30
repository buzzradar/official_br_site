<template>
  
  <div>






    <!-- FAQ Topics Section -->
    <div class="container space-3">

      <!-- Title -->
      <div class="w-md-80 w-lg-60 mb-9">
        <h1 class="font-weight-normal">Welcome to <span class="text-primary font-weight-semi-bold">Buzz Radar</span></h1>
      </div>
      <!-- End Title -->

      <div class="row">
      
        <div class="col-lg-12">
          <div id="basics">
            <!-- Title -->
            <div class="mb-3">
              <h3 class="text-primary font-weight-semi-bold">Some of our frequently asked questions:</h3>
            </div>
            <!-- End Title -->

            <!-- Basics Accordion -->
            <div id="basicsAccordion">



              

              <!-- Card -->
              <div v-for="(faq,index) in allFaqs" class="card mb-3">
                <div class="card-header card-collapse" :id="`faq-card`+(index+1)">
                  <h5 class="mb-0">
                    <button class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed p-3"
                            data-toggle="collapse"
                            :data-target="`#faq-elem`+(index+1)"
                            aria-expanded="false"
                            :aria-controls="`faq-elem`+(index+1)">
                      {{faq.title}}

                      <span class="card-btn-arrow">
                        <span class="fas fa-arrow-down small"></span>
                      </span>
                    </button>
                  </h5>
                </div>
                <div :id="`faq-elem`+(index+1)" class="collapse"
                     :aria-labelledby="`faq-card`+(index+1)"
                     data-parent="#basicsAccordion">
                  <div v-html="faq.copy" class="card-body">
                    <!-- The copy will be rendered dynamically -->
                  </div>
                </div>
              </div>
              <!-- End Card -->
















            </div>
            <!-- End Basics Accordion -->
          </div>

          
        </div>
      </div>
    </div>
    <!-- End FAQ Topics Section -->

    <hr class="my-0">

    <!-- Contacts Section -->
    <div class="container">
      <div class="row space-2">
        <div class="col-lg-6 u-ver-divider u-ver-divider--none-lg mb-7 mb-lg-0">
          <!-- Contacts Info -->
          <div class="media pr-lg-9">
            <figure id="icon15" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
              <img class="js-svg-injector" src="@/assets/buzzradar/svg/icons/icon-15.svg" alt="SVG"
                   data-parent="#icon15">
            </figure>
            <div class="media-body">
              <h3 class="h5">Can't find your answer?</h3>
              <p class="mb-1">We want to answer all of your queries. Get in touch and we'll get back to you as soon as we can.</p>
              <a class="font-size-1" href="mailto:support@buzzradar.com?subject=I need help">Email us <span class="fas fa-angle-right align-middle ml-2"></span></a>
            </div>
          </div>
          <!-- End Contacts Info -->
        </div>

        <div class="col-lg-6">
          <!-- Contacts Info -->
          <div class="media pl-lg-9">
            <figure id="icon4" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
              <img class="js-svg-injector" src="@/assets/buzzradar/svg/icons/icon-4.svg" alt="SVG"
                   data-parent="#icon4">
            </figure>
            <div class="media-body">
              <h3 class="h5">Technical questions</h3>
              <p class="mb-1">Have some technical questions? Hit us with an email or just say hello on the bottom right corner of the page.</p>
              <a class="font-size-1" href="mailto:support@buzzradar.com?subject=Technical Question">Email us <span class="fas fa-angle-right align-middle ml-2"></span></a>
            </div>
          </div>
          <!-- End Contacts Info -->
        </div>
      </div>

      <hr class="my-0">
    </div>
    <!-- End Contacts Section -->


  </div>

</template>



<script>

  import AllFaqsEntries from '../../../../statics/Faqs.json';

 	export default {

 		name : 'Faq',
    data : function() {

      AllFaqsEntries.faqs.forEach(function(element) {
        //console.log( escape(element.copy));
      });

      return {
        allFaqs : AllFaqsEntries.faqs,
      }
    },
    mounted() {
      $.HSCore.components.HSStickyBlock.init('.js-sticky-block');   
    }, 
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

  ::v-deep li:first-of-type {
    margin-top:0px;
  }

  ::v-deep li {
    margin-top:20px;
    color: #77838f;
  }

</style>

