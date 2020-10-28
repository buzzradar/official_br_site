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

	      <div v-html="this.jobJSONContent.description"></div> <!-- v-html="this.jobJSONContent.description" -->










			<!-- <div class="w-lg-80 mx-auto">
				<div class="space-bottom-1">
					
					<p>Buzz Radar was founded in 2012 to try and figure out how to make social and audience data accessible, insightful and actionable for everyone Inside an organisation.</p>
					<p>We created a cutting edge intelligence platform driven by a team of expert analysts and strategists. It delivers valuable insights and recommendations to the right person at the right moment in ways that they can easily understand and act on.</p>
					<p>For the past 8 years we’ve been helping the world's biggest brands, events and broadcasters gain actionable intelligence from their data.</p>
					<p>On the way we’ve won multiple international awards for the work we’ve done and are lucky enough to be considered one of the most innovative intelligence companies in the world.</p>
					<p>Thanks to an influx of new business, we’re looking for a Junior Social Media Analyst to research, monitor and report on a variety of global social and audience analysis projects, helping our team provide actionable insights and recommendations to many of our Fortune 500 clients. We’re seeking someone who is passionate about understanding audiences through the use of social data and cutting edge technology. The ideal candidate is someone who has an innate curiosity and the desire to uncover the "why?” from the data and help our clients discover game-changing insights. We’re working with some of the most advanced and innovative clients in both the technology and pharmaceutical sectors, alongside some of the world’s biggest brands. </p>

					<ul class="list-unstyled mb-0">
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Collect and clean social data from a wide variety of sources. An understanding of boolean is very helpful. 
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Conduct audience profiling and segmentation.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Conduct market research.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Identify patterns and trends and develop insights that apply to our clients’ business.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Conduct evaluative volumetric and content analysis and provide recommendations to clients on these findings.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Provide monthly and yearly updates to internal teams and clients.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Help develop KPIs, dashboards and scorecards.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Liaise closely with client service teams to provide tangible client recommendations.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Manage day-to-day client relationships for analytics needs.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Work as a collaborative, decisive team player alongside the whole Buzz Radar team and it’s clients.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Stay current with the latest social measurement trends, as well as relevant industry trends.
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
								Minimum of 1-year experience in supporting brands with social and digital analytics, audience profiling/segmentation and insight development.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Proven success in understanding the social analysis needed by a business and experience developing analytical approaches tailored to them.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Strong understanding of consumer audience views and the perceptions of consumer technology, technology platforms and the opportunities and challenges this presents to brands.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Strong user knowledge and regular use of social analytics and market research tools.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Intermediate user of web analytics tools, including Google Analytics, Omniture and Webtrends.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Intermediate user of presentation tools, such as PowerPoint, Keynote and Microsoft Office, particularly Excel.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Strong analytical skill, with a key requirement of proficiency in analyzing and interpreting social-related data, ease in finding the meaning in data, and the ability to turn data into stories and presenting data in an easily understood manner.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Strong verbal and written communication skills to effectively communicate campaign performance to internal and external campaign stakeholders.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Ability to quickly pattern spot and surface actionable insights and separate signal from noise.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								A generic curiosity in web/social media trends, consumer segmentation and subcultures’ online behaviour.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Experience distilling complex and high volumes of data into simple KPIs and data visualizations / dashboards / scorecards.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Experience writing clear and concise presentations for clients summarizing data insights, outcomes and implications in a straightforward and enlightening way for clients.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Ability to collaborate and work well with others.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Demonstrated experience in working with remote, globally distributed teams.
								</div>
							</div>
						</li>
						<li class="py-3">
							<div class="media">
								<span class="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
								<span class="fas fa-arrow-right btn-icon__inner"></span>
								</span>
								<div class="media-body text-secondary">
								Ability for flex working hours to accommodate clients based in Asia and the Americas.
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

	import AllCareersEntries from '../../../../statics/CareersEntries.json';
	
 	export default {

 		name : 'CareersIndividual',
 		data : function(){

 			var currentPath = this.$router.currentRoute.path;
 			var currentSlug = currentPath.split("/careers/")[1];
 			var jobItemMatched;

 			AllCareersEntries.jobs.forEach(function(item,index){
				// console.log("------------>>>>???1>>>>>>",item.slug, currentSlug);
				if (currentSlug.charAt(currentSlug.length-1) == '/'){
					currentSlug = currentSlug.slice(0, -1);
				}
				// console.log("------------>>>>???2>>>>>>",item.slug, currentSlug);

 				if (item.slug.includes(currentSlug)) {
					jobItemMatched = item;
				}
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

