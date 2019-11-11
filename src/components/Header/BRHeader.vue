/* eslint-disable */

<template>

	 	
	<!-- ========== HEADER ========== -->
	<header id="header"  

	class="u-header u-header--sticky-top u-header--show-hide"

	data-header-fix-moment="500" 
	data-header-fix-effect="slide">

	  <div class="u-header__section">
	      <div id="logoAndNav" class="container">
	        
	        <!-- Nav -->
	        <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
	          
				

				<!-- Logo -->
				<a href="/" class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-on-scroll">
					<img alt="Buzz Radar" src="@/assets/img/buzzradar_logo/buzzlogo_name_dark.svg">
				</a>
				<!-- End Logo -->



				<!-- Responsive Toggle Button -->
				<button type="button" 

					  class="navbar-toggler btn u-hamburger"

				      aria-label="Toggle navigation"
				      aria-expanded="false"
				      aria-controls="navBar"
				      data-toggle="collapse"
				      data-target="#navBar">
					<span id="hamburgerTrigger" class="u-hamburger__box">
						<span class="u-hamburger__inner"></span>
					</span>
				</button>
				<!-- End Responsive Toggle Button -->



				<MainNav></MainNav>


	        </nav>

	      </div>

	    </div>

	</header>
	<!-- ========== END HEADER ========== -->




</template>







<script>

	import MainNav from './MainNav.vue';

	export default {
		name: 'BRHeader',
		components: {
			MainNav,
		},
		data() {
			return {
				headerClass : 'u-header u-header--bg-transparent u-header--abs-top u-header--white-nav-links-md u-header--show-hide',
				hamburguerIconClass : 'navbar-toggler btn u-hamburger u-hamburger--white',
			};
		},
		watch: {
			$route (to, from){
				console.log('route has changed!!!');
				window.scrollTo(0,0);
			},
		},
		beforeMount() {
			$.HSCore.components.HSHeader.init($('#header'));
		},
		methods : {

		}
	}

</script>








<style lang="scss" scoped>

	@import "compass";

	.navbar-brand{
		margin-bottom: 10px;
	}	

</style>
































