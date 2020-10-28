<template>
  
  <div>

    <div v-if="routeContains(this.$router.currentRoute.path,'careers/job-')">

      <!-- +++++++++++++++++++++++ -->
      <!-- Individual Case Studies -->
      <!-- +++++++++++++++++++++++ -->
      <router-view />
      <!-- +++++++++++++++++++++++++++ -->
      <!-- End Individual Case Studies -->
      <!-- +++++++++++++++++++++++++++ -->

    </div>

    <div v-else>

      <!-- +++++++++++++++++++++++++++++++++ -->
      <!-- All Case Studies (Cube Portfolio) -->
      <!-- +++++++++++++++++++++++++++++++++ -->

      <div class="container space-2 space-top-md-5 space-top-lg-3">

        <div class="row">

          <!-- Job Positions -->
          <div id="jobPositions" class="container space-2 space-top-md-0">
            <!-- Title -->
            <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-5">
              
              <h1 class="font-weight-normal">Become part of the<br><span class="text-primary font-weight-semi-bold">Buzz Radar</span> team</h1>

              <p>People are at the centre of everything we do. We’re a creative, passionate and dedicated group, who live to create awesome stuff and have fun doing it. The team is tight-knit and excited about helping people gain insight from their data through innovative, creative solutions.</p>
            </div>
            <!-- End Title -->

            

            <!-- Job Position -->
            <div v-for="(job,index) in allJobs" class="mb-7">
              <span class="btn btn-xs btn-soft-secondary font-weight-semi-bold mb-2">{{job.section}}</span>

              <!-- Card -->
              <a class="card card-frame card-text-dark mb-2" :href="'/careers/'+job.slug">
                <div class="card-body p-4">
                  <span class="row justify-content-sm-between align-items-sm-center">
                    <span class="col-sm-6 mb-2 mb-sm-0 font-weight-semi-bold">
                      {{job.name}}
                    </span>
                    <span class="col-sm-6 text-primary text-sm-right">
                      {{job.location}}
                      <span class="fas fa-arrow-right small ml-2"></span>
                    </span>
                  </span>
                </div>
              </a>
              <!-- End Card -->

            </div>
            <!-- Job Position -->

          </div>
          <!-- End Job Positions -->


        </div>

      </div>

    </div>
    <!-- Careers Jobs List -->


  </div>

</template>



<script>

  import AllCareersEntries from '../../../../statics/CareersEntries.json';

 	export default {

 		name : 'CareersAllJobs',
    data : function(){
      return {
        allJobs : AllCareersEntries.jobs,
      };
    },
    mounted(){

    },
    methods: {
      routeContains(currentRoute,matchingRoute) {

        console.log('----------------------------------------');
        console.log(currentRoute, matchingRoute);
        return currentRoute.includes(matchingRoute);
      },
    }
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

