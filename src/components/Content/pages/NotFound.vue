<template>

  <div>

    <!-- ========== MAIN ========== -->
    <main id="content" role="main">
      <!-- Hero Section -->
      <div class="d-lg-flex">
        <div class="container d-lg-flex align-items-lg-center min-height-lg-100vh space-4">
          <div class="w-md-100 text-center mx-md-auto mb-5">
        

            <!-- Rocket -->
            <div class="relative">
              <img class="rocket" src="@/assets/buzzradar/img/404notfound/error_blank.svg" alt="Page Not Found">
            </div>
            <!-- End Rocket -->


            <!-- Overlay Text -->
            <div class="relative">

              <div class="error_wrap">
                <img class="mb-2" src="@/assets/buzzradar/img/404notfound/error_logo.svg" width="208" alt="BuzzRadar">
                <h1 class="text-primary font-weight-normal">404</h1>
                <h2 class="text-white font-weight-normal">Page not <span class="font-weight-semi-bold">found</span></h2>
                <p class="mb-0">Oops! Looks like you followed a bad link.</p>
                <p class="mb-0">If you think this is a problem with us,</p>
                <p class="mb-0">please <a href="mailto:info@buzzradar.com?subject=Problem with the site">contact us</a>.</p>
              </div>

            </div>
            <!-- End Overlay Text -->


          </div>
        </div>
      </div>
      <!-- End Hero Section -->
    </main>
    <!-- ========== END MAIN ========== -->



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

  #content{
    background:#404040;
  }

  .rocket{
    position: absolute;
    left: 0;
    top: -120px;
    z-index: 0;
    width:100%;
  }

  h1{
    font-size:70px;
    margin:0;
    padding:0;
    line-height:100px;
  }

  .relative{
    position:relative;
  }

  



  @media (max-width: 1024px) {
    .rocket{
      top: 0px;
      width:100%;
      opacity:0.3;
    }
  }

</style>





























