/* eslint-disable */

<template>

	 	
	<!-- ========== HEADER ========== -->
	<header id="header"  

	:class="this.headerClass"

	data-header-fix-moment="500" 
	data-header-fix-effect="slide">

	  <div class="u-header__section">
	      <div id="logoAndNav" class="container">
	        
	        <!-- Nav -->
	        <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
	          
				


				<!-- ========================== -->
	        	<!-- TRANSPARNET NAV -->
				<!-- White Logo -->
				<router-link v-if="isTransparent" to="/" class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-default u-header__navbar-brand-text-white">

					<img alt="Buzz Radar" src="@/assets/img/buzzradar_logo/buzzlogo_name_white.svg">

				</router-link>
				<!-- End White Logo -->


				<!-- Default Logo -->
				<router-link v-if="isTransparent" to="/" class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed">

					<img alt="Buzz Radar" src="@/assets/img/buzzradar_logo/buzzlogo_name_dark.svg">

				</router-link>
				<!-- End Default Logo -->


				<!-- On Scroll Logo -->
				<router-link v-if="isTransparent" to="/" class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-on-scroll">

					<img alt="Buzz Radar" src="@/assets/img/buzzradar_logo/buzzlogo_name_dark.svg">
				</router-link>
				<!-- End On Scroll Logo -->
	        	<!-- TRANSPARNET NAV -->
	        	<!-- =============================== -->







	        	<!-- =============================== -->
	        	<!-- WHITE BG NAV -->
	        	<router-link v-if="isTransparent == false" to="/" class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-default u-header__navbar-brand-text-white">
					<img alt="Buzz Radar" src="@/assets/img/buzzradar_logo/buzzlogo_name_dark.svg">
	        	</router-link>

	        	<!-- WHITE BG NAV -->
	        	<!-- =============================== -->








				<!-- Responsive Toggle Button -->
				<button type="button" 

					  :class="this.hamburguerIconClass"

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
				isTransparent : true,
				headerClass : 'u-header u-header--bg-transparent u-header--abs-top u-header--white-nav-links-md u-header--show-hide',
				hamburguerIconClass : 'navbar-toggler btn u-hamburger u-hamburger--white',
			};
		},
		watch: {
			$route (to, from){
				console.log('route has changed!!!');
				window.scrollTo(0,0);
				this.checkIfTransparent();
			},
			// whenever question changes, this function will run
			isTransparent: function (newValue, oldValue) {
				console.log('isTransparent has changed!!!','New Value-->', newValue);
				if (newValue == true) {
					this.headerClass = 'u-header u-header--bg-transparent u-header--abs-top u-header--white-nav-links-md u-header--show-hide';
					this.hamburguerIconClass = 'navbar-toggler btn u-hamburger u-hamburger--white';
				}else{
					this.headerClass = 'u-header u-header--abs-top-md u-header--show-hide-md';
					this.hamburguerIconClass = 'navbar-toggler btn u-hamburger';
				}
				
				$.HSCore.components.HSHeader.init($('#header'));
			},
		},
		beforeMount() {
			this.checkIfTransparent();
		},
		methods : {
			checkIfTransparent() {
				if (this.$route.path != '/') {
					this.isTransparent = false;  		
				}else{
					this.isTransparent = true;
				}
			},
		}
	}

</script>








<style lang="scss" scoped>

	@import "compass";

	.navbar-brand{
		margin-bottom: 10px;
	}	

</style>
































