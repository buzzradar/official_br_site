<template>
  
  <div>

    <!-- Job Positions -->
    <div id="jobPositions" class="container space-2 space-top-md-3">
      <!-- Title -->
      <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-5">
        <h2 class="text-primary">Become part of the
          <span class="font-weight-semi-bold">Buzz Radar</span> team
        </h2>
        <p>People are at the centre of everything we do. We’re a creative, passionate and dedicated group, who live to create awesome stuff and have fun doing it. The team is tight-knit and excited about helping people gain insight from their data through innovative, creative solutions.</p>
      </div>
      <!-- End Title -->

      

      <!-- Job Positions -->
      <div class="mb-7">
        <span class="btn btn-xs btn-soft-success mb-2">Analytics</span>

        <!-- Card -->
        <a class="card card-frame card-text-dark mb-2" href="careers-single.html">
          <div class="card-body p-4">
            <span class="row justify-content-sm-between align-items-sm-center">
              <span class="col-sm-6 mb-2 mb-sm-0">
                Analytics Product Designer
              </span>
              <span class="col-sm-6 text-primary text-sm-right">
                London, UK
                <span class="fas fa-arrow-right small ml-2"></span>
              </span>
            </span>
          </div>
        </a>
        <!-- End Card -->

      </div>

      <div class="mb-7">
        <span class="btn btn-xs btn-soft-warning btn-pill mb-2">Web</span>

        <!-- Card -->
        <a class="card card-frame card-text-dark mb-2" href="careers-single.html">
          <div class="card-body p-4">
            <span class="row justify-content-sm-between align-items-sm-center">
              <span class="col-sm-6 mb-2 mb-sm-0">
                Mid-level Backend Developer
              </span>
              <span class="col-sm-6 text-primary text-sm-right">
                London, UK
                <span class="fas fa-arrow-right small ml-2"></span>
              </span>
            </span>
          </div>
        </a>
        <!-- End Card -->

      </div>

     
    </div>
    <!-- End Job Positions -->

    <!-- Articles Section -->
    <div class="container space-2">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <!-- Card -->
          <article class="card h-100 shadow-soft">
            <div class="w-sm-65 p-5">
              <h3 class="h4 mb-3">Have a project?</h3>
              <div class="mb-4">
                <p>Hire us. Our top professionals are ready to help with your business.</p>
              </div>
              <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="hire-us.html">Hire Us</a>
            </div>

            <div class="position-absolute bottom-0 right-0 w-sm-35 max-width-27">
              <figure id="projectSVG" class="svg-preloader ie-support-man">
                <img class="js-svg-injector" src="@/assets/svg/illustrations/support-man.svg" alt="Image Description"
                     data-parent="#projectSVG">
              </figure>
            </div>
          </article>
          <!-- End Card -->
        </div>

        <div class="col-lg-6">
          <!-- Card -->
          <article class="card h-100 shadow-soft">
            <div class="w-sm-65 p-5">
              <h3 class="h4 mb-3">Get in touch</h3>
              <div class="mb-4">
                <p>If you would like to find out more about how we can help you, please give us a call or drop us an email.</p>
              </div>
              <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="contacts-agency.html">Contact Us</a>
            </div>

            <div class="position-absolute bottom-0 right-0 w-sm-35 max-width-27">
              <figure id="ContactsSVG" class="svg-preloader ie-list-app">
                <img class="js-svg-injector" src="@/assets/svg/illustrations/list-app.svg" alt="Image Description"
                     data-parent="#ContactsSVG">
              </figure>
            </div>
          </article>
          <!-- End Card -->
        </div>
      </div>
    </div>
    <!-- End Articles Section -->


  </div>

</template>



<script>

 	export default {

 		name : 'Careers',
    mounted() {
      
    }
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

