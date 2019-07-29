<template>
  
	<div>

		<!-- Description Section -->
	    <div class="container space-2 space-top-md-3 space-bottom-md-3">
	      <div class="row">
	        <div class="col-lg-7 mb-7 mb-lg-0">



	          <!-- Cubeportfolio -->
	          <div class="cbp"
	               data-layout="grid"
	               data-animation="quicksand"
	               data-x-gap="32"
	               data-y-gap="32"
	               data-media-queries='[
	                {"width": 300, "cols": 1}
	              ]'>
	            <!-- Item -->
	            <div v-for="(image,index) in caseStudyJSONContent.imagesArray" class="cbp-item">
	              <div class="cbp-caption">
	                <img class="rounded" :src="require('@/assets/buzzradar/img/casestudies/'+image)" :alt="caseStudyJSONContent.title">
	              </div>
	            </div>
	            <!-- End Item -->
	            
	          </div>
	          <!-- End Cubeportfolio -->
	        </div>

	        <div id="stickyBlockStartPoint" class="col-lg-5">
	          <!-- Sticky Block -->
	          <div class="js-sticky-block pl-lg-4"
	               data-parent="#stickyBlockStartPoint"x
	               data-sticky-view="lg"
	               data-start-point="#stickyBlockStartPoint"
	               data-end-point="#stickyBlockEndPoint"
	               data-offset-top="80"
	               data-offset-bottom="130">
	            <div class="mb-6">
	              <h1 class="h4 text-primary font-weight-semi-bold">{{caseStudyJSONContent.title}}</h1>
	              <p v-html="caseStudyJSONContent.copy" class="mb-0"></p>
	            </div>



	            <a v-if="caseStudyJSONContent.PDF_path" :href="caseStudyJSONContent.PDF_path" class="btn btn-soft-warning" tabindex="-1" role="button" aria-disabled="true" download="">Download PDF</a>

	            <hr class="my-5">

	            <!-- Jobs Link -->
		        <div class="mb-6">
		          <a class="text-secondary" href="/casestudies">
		            <span class="fas fa-arrow-left small text-primary mr-2"></span>
		            Back to Case Studies
		          </a>
		        </div>
		        <!-- End Jobs Link -->
	            
	          </div>
	          <!-- End Sticky Block -->
	        </div>
	      </div>
	    </div>
	    <!-- End Description Section -->

    	<div id="stickyBlockEndPoint"></div>

	     

	</div>

</template>



<script>

	import AllCaseStudiesEntries from '../../../statics/CaseStudiesEntries.json';
	
 	export default {

 		name : 'CaseStudyIndividual',
 		data : function(){

 			var currentPath = this.$router.currentRoute.path;
 			var currentSlug = currentPath.split("/casestudies/")[1];
 			var caseStudyMatched;

 			AllCaseStudiesEntries.casesentries.forEach(function(item,index){
 				if (item.slug == currentSlug) {
 					caseStudyMatched = item;

 					//Create tthe PDF Path
 					if (caseStudyMatched.pdf != undefined) {
	 					caseStudyMatched['PDF_path'] = process.env.BASE_URL + 'public_assets/pdf/'+caseStudyMatched.pdf;
	 				}

	 				//Create the main images gallery
	 				var imagesArray = caseStudyMatched.imgName.split(',');
	 				caseStudyMatched["imagesArray"] = imagesArray;

 				}

 			});

			return {
				caseStudyJSONContent : caseStudyMatched,
			};
	    },
	    mounted() {
      		$.HSCore.components.HSStickyBlock.init('.js-sticky-block');
	    }
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

