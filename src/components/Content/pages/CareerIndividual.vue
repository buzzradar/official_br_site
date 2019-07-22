<template>
  
	<div>

		<!-- Career Detail Section -->
	    <div class="container space-top-2 space-top-md-3">
	      <div class="w-lg-80 space-bottom-1 mx-auto">
	        <!-- Jobs Link -->
	        <div class="mb-6">
	          <a class="text-secondary" href="/careers">
	            <span class="fas fa-arrow-left small text-primary mr-2"></span>
	            See All Jobs
	          </a>
	        </div>
	        <!-- End Jobs Link -->

	        <!-- Title -->
	        <div class="row justify-content-md-between align-items-md-center mb-4">
	          <div class="col-md-9 mb-7 mb-md-0">
	            <h1 class="h3 font-weight-semi-bold">{{this.jobJSONContent.name}}</h1>
	            <p class="mb-0">{{this.jobJSONContent.location}}, {{this.jobJSONContent.shift}}. <!-- <span class="btn btn-xs btn-soft-danger ml-2">$50k-$75k</span> --></p>
	          </div>

	          <div class="col-md-3 text-md-right">
	            <a class="js-go-to btn btn-primary transition-3d-hover" href="javascript:;"
	               data-target="#applyForJob"
	               data-compensation="#header"
	               data-type="static">
	              Apply Now
	            </a>
	          </div>
	        </div>
	        <!-- End Title -->

	      </div>

	      <div v-html="this.jobJSONContent.description"></div>

	    </div>
	    <!-- End Career Detail Section -->

	     

	</div>

</template>



<script>

	import AllCareersEntries from '../../../statics/CareersEntries.json';
	
 	export default {

 		name : 'CareersIndividual',
 		data : function(){

 			var currentPath = this.$router.currentRoute.path;
 			var currentSlug = currentPath.split("/careers/")[1];
 			var jobItemMatched;

 			AllCareersEntries.jobs.forEach(function(item,index){
 				if (item.slug == currentSlug) jobItemMatched = item;
 			});

			return {
				jobJSONContent : jobItemMatched,
			};
	    },
	    mounted() {
	      
	    }
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

