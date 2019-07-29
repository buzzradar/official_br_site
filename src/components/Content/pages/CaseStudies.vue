<template>
  
  <div>

    <!-- Case Studies CubePortfolio List -->
    <div v-if="this.$router.currentRoute.path == '/casestudies' ">


        <!-- Hero Section -->
        <!-- <div class="container space-top-3 space-bottom-2">
          <div class="row">
            <div class="col-md-12">
              <img class="img-fluid rounded-lg" src="@/assets/buzzradar/img/casestudies/ibm_banner_case_study.jpg" />
            </div>              
          </div>
        </div> -->
        <!-- End Hero Section -->






    <!-- Hero Section -->
    <div id="SVGheroBGShapes" class="svg-preloader container position-relative min-height-550 space-top-3 space-bottom-2">
      <div>
        


        <!-- Content -->
        <!-- <div class="container">
          <div class="row">
            <div class="col-md-6 position-relative z-index-2">
              <div class="mb-4">
                <h1 class="display-4 text-white font-weight-normal">A faster, smarter way to run your <strong>marketing</strong></h1>
              </div>
              
              <p class="lead text-white">Buzz Radar connects the sea of marketing data created by your organization and with the help of IBM’s Watson AI turns it into actionable, intelligent insights.</p>
              
            </div>
          </div>
        </div> -->
        <!-- End Content -->

        <!-- SVG Shapes -->
        <div class="w-100 position-absolute top-0 left-0">
            <img class="js-svg-injector rounded-lg" src="@/assets/buzzradar/img/casestudies/ibm_banner_case_study.jpg" alt="Image Description" data-parent="#SVGheroBGShapes">
        </div>
        <!-- End SVG Shapes -->
      </div>
    </div>
    <!-- End Hero Section -->























      
        <!-- Portfolio Section -->
        <div class="container space-bottom-md-3">
          <div class="u-cubeportfolio">

            <!-- Filter -->
            <ul id="filterControls" class="list-inline cbp-l-filters-alignRight text-center">
              <li class="list-inline-item cbp-filter-item cbp-filter-item-active u-cubeportfolio__item" data-filter="*">All</li>
              <li v-for="(filter,index) in casesFilters" class="list-inline-item cbp-filter-item u-cubeportfolio__item" :data-filter="`.`+filter">{{filter}}</li>
            </ul>
            <!-- End Filter -->

            <!-- Content -->
            <div class="cbp"
                 data-layout="grid"
                 data-controls="#filterControls"
                 data-animation="quicksand"
                 data-x-gap="32"
                 data-y-gap="32"
                 data-media-queries='[
                  {"width": 1500, "cols": 4},
                  {"width": 1100, "cols": 4},
                  {"width": 800, "cols": 3},
                  {"width": 480, "cols": 2},
                  {"width": 300, "cols": 1}
                ]'>

              <!-- Item -->
              <div v-for="(caseStudy,index) in caseStudies" :class="`cbp-item `+caseStudy.filter">
                <a class="cbp-caption" :href="'/casestudies/'+caseStudy.slug">
                  <img class="rounded" :src="require('@/assets/buzzradar/img/casestudies/'+caseStudy.THUMB_imgName)" alt="Image Description">
                  <div class="py-3">
                    <h4 class="h6 text-dark mb-0">{{caseStudy.title}}</h4>
                    <p class="small mb-0">
                      on {{caseStudy.date}}
                    </p>
                  </div>
                </a>
              </div>
              <!-- End Item -->
            
            </div>
            <!-- End Content -->
          </div>
        </div>
        <!--End Case Studies CubePortfolio List -->

    </div>

    <!-- Individual Job Item -->
    <div v-else>
      <router-view />
    </div>
    <!-- End Individual Job Item -->
    

  </div>

</template>



<script>
  
  import AllCaseStudiesEntries from '../../../statics/CaseStudiesEntries.json';

 	export default {

 		name : 'CaseStudies',
    data : function(){
      return {
        caseStudies : AllCaseStudiesEntries.casesentries,
      };
    },
    computed: {
      casesFilters : function() {

        var filtersArray = [];

        this.caseStudies.forEach(function(caseStudy) {
          console.log(caseStudy.filter);

          if ( !filtersArray.includes(caseStudy.filter) ) {
            filtersArray.push(caseStudy.filter);
          }

          //Let's prepare the thumb depending on the Main Photo name
          caseStudy['THUMB_imgName'] = caseStudy.imgName.split('.jpg')[0]+'-thumb.jpg';

        });

        return filtersArray;
      }
    },
    mounted() {
      $.HSCore.components.HSCubeportfolio.init('.cbp');
    },
    updated() {
      //$.HSCore.components.HSCubeportfolio.init('.cbp');
    }
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

