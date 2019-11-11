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
	            <a class="btn btn-primary transition-3d-hover" :href="applyToJob">Apply Now</a>
	          </div>
	        </div>
	        <!-- End Title -->

	      </div>

	      <div v-html="this.jobJSONContent.description"></div>










			<!-- <div class="w-lg-80 mx-auto">
				<div class="space-bottom-1">
					
					<p>We’re excited to be able to offer a summer internship in our data science team at Buzz Radar's London office. </p>
 
					<p>Buzz Radar has been leading the world of real-time data visualisation since 2012, delivering command centres and interactive live data visualisations to the world’s leading, brands and events. With a client list, including Twitter, Burberry, Microsoft, Ogilvy, Samsung, IBM and Google. A winner of Tech City’s title of Most Disruptive Startup and Fastest Growing Startup, we’re excited to be at the forefront of social and marketing intelligence.</p>
					 
					<p>We’re looking for a talented analytically-minded person to work with our data science team over the summer, who isn’t afraid to roll up their sleeves, learns fast and lives for a challenge.</p>
					
				</div>
			</div>


			<div class="w-lg-80 mx-auto">

				<div class="space-bottom-2">
					<div class="mb-4">
					<h3 class="h5">What you’ll be doing:</h3>
					</div>

					<p>You’ll help support the Buzz Radar product roadmap by helping our data analysts research new data sources and latest analysis techniques. You'll also have a hand in testing all our platform functionality as well as helping build data visualisations/command centres for clients.
					</p>

				</div>

			</div>

			<div class="w-lg-80 mx-auto">

				<div class="space-bottom-2">

					<div class="mb-4">
					<h3 class="h5">What we are looking for:</h3>
					</div>

					<p>We're looking for someone with an aptitude for numeric and social media data. A critical thinker with an eye for detail. You'll understand what a boolean query is and how to write one. A basic understanding of Python is also a plus.
					</p>

				</div>

			</div>

			<div class="w-lg-80 mx-auto">

				<div class="space-bottom-2">

					<div class="mb-4">
					<h3 class="h5">What you’ll get in return:</h3>
					</div>

					<p>You’ll have the opportunity to learn from some of the world's leading talent in the field. Working in an awesome bright airy office based out of an old dairy in the centre of Primrose Hill. We'll take care of your travel expenses and bring you along to industry events and client meetings.
					</p>

				</div>

			</div> -->












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
				applyToJob : 'mailto:jobs@buzzradar.com?subject=JOB Application: '+jobItemMatched.name,
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

