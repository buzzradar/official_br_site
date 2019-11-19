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
	            <!-- Images in Content -->
	            <div v-for="(image,index) in caseStudyJSONContent.content.photoArray" class="cbp-item">
	              <div class="cbp-caption">
	                <!-- <img class="rounded" :src="require('@/assets/buzzradar/img/casestudies/'+image)" :alt="caseStudyJSONContent.title"> -->
	                <!-- ********************** -->
	                <!-- DEVELOPER NOTE: This path must be absolute for SEO purposes and for the URL Preview -->
	                <!-- ********************** -->
	                <img class="rounded" :src="'https://www.buzzradar.com/public_assets/studies_library/'+image" :alt="caseStudyJSONContent.title">
	              </div>
	            </div>
	            <!-- End Images in Content -->

	            <!-- Videos in Content -->
	            <div v-if="caseStudyJSONContent.content.videoSrc" class="cbp-item">
	              <div class="cbp-caption">
	                <iframe title="vimeo-player" :src="caseStudyJSONContent.content.videoSrc" width="640" height="360" frameborder="0" allowfullscreen></iframe>
	              </div>
	            </div>
	            <!-- End Videos in Content -->

	            
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
	              <p v-html="caseStudyJSONContent.content.copy" class="mb-0"></p>
	            </div>



	            <a v-if="caseStudyJSONContent.content.PDF_path" :href="caseStudyJSONContent.content.PDF_path" class="btn btn-secondary" tabindex="-1" role="button" aria-disabled="true" download="">Download PDF</a>

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
 			var currentSlug = currentPath.split("/studies_library/")[1];
 			var caseStudyMatched;

 			console.log("All Case Studies", AllCaseStudiesEntries);

 			AllCaseStudiesEntries.casesentries.forEach(function(item,index){

 				// console.log(item.slug, "<-> ",currentSlug);

 				if ( currentSlug.includes(item.slug) ) {

 					console.log("--------------------i am in!--------------------");

 					caseStudyMatched = item;

 					//Create the PDF Path
 					if (caseStudyMatched.content.pdf) {
	 					caseStudyMatched.content['PDF_path'] = process.env.BASE_URL + 'public_assets/pdf/'+caseStudyMatched.content.pdf;
	 				}

	 				//Create the main images gallery
	 				if (caseStudyMatched.content.photoArray) {
	 					caseStudyMatched.content.photoArray = caseStudyMatched.content.photoArray.split(',');
	 				}	 

	 				//to create the Video Source
	 				if (caseStudyMatched.content.videoId) {
		 				caseStudyMatched.content["videoSrc"] = "https://player.vimeo.com/video/"+caseStudyMatched.content.videoId;
	 				}

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

