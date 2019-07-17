/* eslint-disable */

<template>






	<!-- ========== FOOTER ========== -->
	  <footer id="SVGfooterTopShape" class="svg-preloader position-relative gradient-half-primary-v5">
	    <div class="container space-top-4 space-bottom-1">
	      <div class="row justify-content-lg-start">

	        <div class="col-sm-9 col-lg-4">
	          <!-- Logo -->
	          <router-link to="/" class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-default u-header__navbar-brand-text-white">
				<img alt="Buzz Radar" src="@/assets/img/buzzradar_logo/buzzlogo_name_white.svg">
			  </router-link>
	          <!-- End Logo -->

	          <p class="small text-white-70">Buzz Radar is the leading social intelligence platform designed for marketers rather than analysts. Providing powerful, easy to digest actionable insights.</p>
	          <!-- Copyright -->
	          <p class="small text-white-70 mb-0">All Rights Reserved, © 2019 Buzz Radar Ltd</p>
	          <!-- End Copyright -->
	        </div>

	        <div class="col-6 col-sm-4 col-lg-3 ml-lg-auto mb-4">
	          <h3 class="h6 text-white">Contact Us</h3>

	          <!-- Address -->
	          <address class="list-group list-group-transparent list-group-white list-group-flush list-group-borderless mb-0">
	            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-phone-square"></i> +44 2032867369</a>
	            <a class="list-group-item list-group-item-action" href="mailto:info@buzzradar.com"><i class="fas fa-envelope-square"></i> info@buzzradar.com</a>
	            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-map-marker-alt"></i> 110 Gloucester Ave<br>Primrose Hill<br>London, NW1 8HX</a>
	          </address>
	          <!-- End Address -->
	        </div>

	        <div class="col-6 col-sm-4 col-lg-3 mb-4 ml-1">
	          <div class="mb-4">
	            <h4 class="h6 text-white mb-3">Subscribe</h4>

	            <!-- Subscribe Form -->
	            <form class="js-validate js-form-message">
	              <label class="sr-only" for="subscribeSrEmail">Your email</label>
	              <div class="input-group">
	                <input type="email" class="form-control" name="email" id="subscribeSrEmail" placeholder="Your email" aria-label="Your email" aria-describedby="subscribeButton" required
	                       data-msg="Please enter a valid email address.">
	                <div class="input-group-append">
	                  <button type="submit" class="btn btn-primary" id="subscribeButton">
	                    <span class="fas fa-paper-plane"></span>
	                  </button>
	                </div>
	              </div>
	            </form>
	            <!-- End Subscribe Form -->
	          </div>

	          <h4 class="h6 text-white-70 mb-3">Stay in touch</h4>

	          <!-- Social Networks -->
	          <ul class="list-inline mb-0">
	            <li class="list-inline-item">
	              <a class="btn btn-sm btn-icon btn-soft-secondary" target="_blank" href="https://www.facebook.com/BuzzRadar">
	                <span class="fab fa-facebook-f btn-icon__inner"></span>
	              </a>
	            </li>
	            <li class="list-inline-item">
	              <a class="btn btn-sm btn-icon btn-soft-secondary" target="_blank" href="https://twitter.com/buzzradar">
	                <span class="fab fa-twitter btn-icon__inner"></span>
	              </a>
	            </li>
	            <li class="list-inline-item">
	              <a class="btn btn-sm btn-icon btn-soft-secondary" target="_blank" href="https://www.linkedin.com/company/buzz-radar">
	                <span class="fab fa-linkedin btn-icon__inner"></span>
	              </a>
	            </li>
	          </ul>
	          <!-- End Social Networks -->
	        </div>

	      </div>

	    </div>

	    <!-- SVG Wave Shape -->
	    <figure class="position-absolute top-0 right-0 left-0">
	      <img class="js-svg-injector" src="@/assets/svg/components/wave-1-top-sm.svg" alt="Image Description"
	           data-parent="#SVGfooterTopShape">
	    </figure>
	    <!-- End SVG Wave Shape -->

	  </footer>
	  <!-- ========== END FOOTER ========== -->


</template>







<script>

	export default {
	  name: 'BRFooter',
	}

</script>








<style lang="scss" scoped>

	@import "compass";

	.navbar-brand{
		margin-bottom:10px;
	}

</style>
































