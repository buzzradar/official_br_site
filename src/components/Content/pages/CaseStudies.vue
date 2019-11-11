<template>
  
  <div>

    <!-- Case Studies CubePortfolio List -->
    <div v-if="this.$router.currentRoute.path == '/casestudies' ">

    <!-- Testimonials Section -->

      <div class="container mt-0 mt-md-10 mb-5" :style="bannerBg" >
        <div class="row">
          <div class="col-md-6">

            <!-- Content -->
            <div class="container p-5">
              <div class="row">
                <div class="col-md-12 position-relative z-index-2">
                  <div class="mb-4">
                    <h1 class="display-5 text-white font-weight-normal">As soon I saw the platform I knew we had to have it.</h1>
                  </div>
                  
                  <p class="lead text-white">Jeremy Waite – Chief Strategy Officer at IBM</p>

                  <!-- Fancybox -->
                  <a class="js-fancybox btn btn-primary transition-3d-hover mb-2 mb-sm-0 mr-sm-2" href="javascript:;"
                     data-src="//vimeo.com/249392499"
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

          </div>
        </div>
      </div>
    
    <!-- End Testimonials Section -->























      
        <!-- Portfolio Section -->
        <div class="container space-bottom-md-3">
          <div class="u-cubeportfolio">

            <!-- Filter -->
            <ul id="filterControls" class="list-inline cbp-l-filters-alignRight text-center">
              <li class="list-inline-item cbp-filter-item cbp-filter-item-active u-cubeportfolio__item" data-filter="*">All</li>
              <li v-for="(filter,index) in casesFilters" class="list-inline-item cbp-filter-item u-cubeportfolio__item" :data-filter="`.`+filtersLibrary[filter].class">{{filtersLibrary[filter].label}}</li>
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
              <div v-for="(caseStudy,index) in caseStudies" :class="`cbp-item `+caseStudy.filterClass">
                <a class="cbp-caption" :href="'/casestudies/'+caseStudy.slug">
                  
                  <img class="rounded" :src=" './public_assets/casestudies/' + caseStudy.thumb " alt="Image Description">

                  <div class="py-3">
                    <h3 class="h6 text-dark mb-0">{{caseStudy.title}}</h3>
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
        bannerBg : {
          backgroundImage : 'url("./public_assets/casestudies/ibm_banner_case_study.jpg")',
          backgroundPosition: 'left',
        },
        filtersLibrary : {
          "brand-management" : {
            "label" : "Brand Management",
            "class" : "brand-management",
          },
          "events" : {
            "label" : "Events",
            "class" : "events",
          },
          "strategy-research" : {
            "label" : "Strategy & Planning",
            "class" : "strategy-research",
          },
          "crisis-manag" : {
            "label" : "Crisis Management",
            "class" : "crisis-manag",
          },
          "digital-trans" : {
            "label" : "Digital Transformation",
            "class" : "digi-transf",
          }
        },
        caseStudies : AllCaseStudiesEntries.casesentries,
      };
    },
    computed: {
      casesFilters : function() {

        function containsObject(obj, list) {
          var i;
          for (i = 0; i < list.length; i++) {
              if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
                  return true;
              }
          }
          return false;
        }

        var filtersArray = [];    //this is the array that will tell us how many filters there are available
        var _this = this;
        this.caseStudies.forEach(function(caseStudy) {

          var caseStudyFilters = caseStudy.filter.split(",");
          caseStudy["filterClass"] = '';
          caseStudyFilters.forEach(function(filter) {
            if ( !filtersArray.includes(filter) ) {
              filtersArray.push(filter);
            }

            //Just in case a case study has more than 1 filter we add the
            //relevant class for all the items. We need this to enable the filters
            caseStudy["filterClass"] += _this.filtersLibrary[filter].class + ' ';

          });

        });

        // console.log("Filters Array.......", filtersArray);
        // console.log("CaseStudies.......", this.caseStudies);

        return filtersArray;
      }
    },
    mounted() {
      var hash = window.location.hash;
      
      var defaultFilter = '*';
      if (hash){
        defaultFilter = hash.replace('#','.');
      }

      $.HSCore.components.HSCubeportfolio.init('.cbp',{"defaultFilter": defaultFilter});
      $.HSCore.components.HSFancyBox.init('.js-fancybox');
    },
    updated() {
      
    }

 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

  h3{
    height: 45px;
    font-size:15px;
  }

</style>

