<template>

  <div>

    <!-- ========== MAIN ========== -->
    <main id="content" role="main">
      <!-- Hero Section -->
      <div class="d-lg-flex">
        <div class="container d-lg-flex align-items-lg-center min-height-lg-100vh space-4">
          <div class="w-lg-60 w-xl-50">
            <!-- Title -->
            <div class="mb-5">
              <h1 class="text-primary font-weight-normal">Page not <span class="font-weight-semi-bold">found</span></h1>
              <p class="mb-0">Oops! Looks like you followed a bad link.</p>
              <p>If you think this is a problem with us, please <a href="#">tell us</a>.</p>
            </div>
            <!-- End Title -->

            <a class="btn btn-primary btn-wide transition-3d-hover" href="/">Go Back</a>
          </div>
        </div>
      </div>
      <!-- End Hero Section -->
    </main>
    <!-- ========== END MAIN ========== -->

    <!-- ========== FOOTER ========== -->
    <footer class="position-md-absolute right-md-0 bottom-md-0 left-md-0">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center space-1">
          <!-- Copyright -->
          <p class="small text-muted mb-0">&copy; Front. 2019 Htmlstream.</p>
          <!-- End Copyright -->

          <!-- Social Networks -->
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
                <span class="fab fa-facebook-f btn-icon__inner"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
                <span class="fab fa-google btn-icon__inner"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
                <span class="fab fa-twitter btn-icon__inner"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
                <span class="fab fa-github btn-icon__inner"></span>
              </a>
            </li>
          </ul>
          <!-- End Social Networks -->
        </div>
      </div>
    </footer>
    <!-- ========== END FOOTER ========== -->


  </div>


</template>










<script>

  export default {

    name : 'NotFound',
    created: function(){
        
    },

  }

 </script>








<style lang="scss" scoped>

  @import "compass";

</style>





























