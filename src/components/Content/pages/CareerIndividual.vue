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
					
					<p>Buzz Radar has been leading the world of real-time data visualisation since 2012, delivering Command Centres and interactive live data visualisations to the world’s leading brands and events. With a client list, including Twitter, Burberry, Microsoft, Ogilvy, Samsung, IBM and Google, and as a winner of Tech City’s title of Most Disruptive Startup and Fastest Growing Startup, we’re excited to be at the forefront of social and audience intelligence.</p>
					<p>Thanks to an influx of new business, we’re looking for a Junior Social Media Analyst to research, monitor and report on a variety of global social and audience analysis projects, helping our team provide actionable insights and recommendations to many of our Fortune 500 clients. We’re seeking someone who is passionate about understanding audiences through the use of social data and cutting edge technology. The ideal candidate is someone who has an innate curiosity and the desire to uncover the "why?” from the data and help our clients discover game-changing insights. We’re working with some of the most advanced and innovative clients in both the technology and pharmaceutical sectors, alongside some of the world’s biggest brands.</p>
					<p><strong>The Role:</strong> Support the Audience Intelligence and Insights Team in producing analyses of social data across multiple projects and clients:</p>
					
					<ul class="list-unstyled mb-0">
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								xxxxxxxxxxx
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								xxxxxxxxxxxxx
								</div>
							</div>
						</li>
						
					</ul>

				</div>
			</div>


			<div class="w-lg-80 mx-auto">

				<div class="space-bottom-2">
					<div class="mb-4">
					<h3 class="h5">Key Qualifications:</h3>
					</div>

					<ul class="list-unstyled mb-0">
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								xxxxxxxxxxxx
								</div>
							</div>
						</li>
					</ul>

				</div>

			</div>

			<div class="w-lg-80 mx-auto">

				<div class="space-bottom-2">

					<div class="mb-4">
					<h3 class="h5">About Us:</h3>
					</div>

					<p>A small, but perfectly formed, team, we’re all about achievement at Buzz Radar. We turn things around quickly and with quality. We dream big, challenge our comfort zones and support each other when we fail. Culture is incredibly important, and we all thrive together. Coffee, cake and courage are the foundation of our success. Based in the heart of Primrose Hill, we benefit from great lunch options and even better scenery. Our team has the flexibility to work remote or from our office. All interviews will be conducted remotely via Zoom.</p>

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

