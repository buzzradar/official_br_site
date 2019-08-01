/* eslint-disable */

<template>

	<!-- Navigation -->
	<div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
		<ul class="navbar-nav u-header__navbar-nav">


 			<!-- Root Level Menu Option -->
			<li v-for="(route,index) in mainNavRoutesArray" v-if="route.hasChildren == true"

			class="nav-item hs-has-sub-menu u-header__nav-item"
			data-event="hover"
			data-animation-in="slideInUp"
			data-animation-out="fadeOut">

				<a class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="true" aria-labelledby="prodcutsSubMenu">{{route.router_config.label}}</a>

				<!-- Submenu -->
				<ul class="hs-sub-menu u-header__sub-menu" aria-labelledby="pagesMegaMenu" style="min-width: 230px;">

					<li v-for="childRoute in route.children" class="hs-has-sub-menu">

						<router-link :to="childRoute.path" class="nav-link u-header__sub-menu-nav-link">{{childRoute.label}}</router-link>

					</li>					

				</ul>
				<!-- End Submenu -->

			</li>
			<li v-else class="nav-item u-header__nav-item">

				<router-link :to="route.router_config.path" class="nav-link u-header__nav-link">{{route.router_config.label}}</router-link>

			</li>
			<!-- End Root Level Menu Option -->


			<!-- Login To Platform -->
			<li class="nav-item u-header__nav-last-item">
				<a class="btn btn-sm btn-primary transition-3d-hover" href="https://insights.buzzradar.com/" target="_blank">
				Login
				</a>
			</li>
			<!-- End Login To Platform -->

		
		</ul>
	</div>
	<!-- End Navigation -->


</template>







<script>

	export default {
	  name: 'MainNav',
	  data : function() {
	  	return {	
	  		mainNavRoutesArray : [
	  			{
	  				//Products
	  				router_config : this.$router.options.routes[3],
	  				children : this.$router.options.routes[3].children,
	  			},
	  			{
	  				//Services
	  				router_config : this.$router.options.routes[4],
	  			},
	  			{
	  				//Case Studies
	  				router_config : this.$router.options.routes[5],
	  			},
	  			{
	  				//About Us
	  				router_config : this.$router.options.routes[6],
	  			},
	  			{
	  				//FAQ
	  				router_config : this.$router.options.routes[7],
	  			},
	  			{
	  				//Blog
	  				router_config : this.$router.options.routes[8],
	  			},
	  			{
	  				//Careers
	  				router_config : this.$router.options.routes[9],
	  			}
	  		]
	  	}
	  },
	  created: function(){

	  	this.mainNavRoutesArray.forEach(function(route,index) {
	  		route.index = index;
			if (route.children){
	  			// console.log("It has CHILDREN!!!!!");
	  			route.hasChildren = true;
	  		}else{
	  			// console.log("It does NOT HAVE children");
	  			route.hasChildren = false;
	  		}
		});
		
	  },
	  methods : {

	  }
	}

</script>








<style lang="scss" scoped>

	@import "compass";


	nav {

		.router-link-exact-active,.router-link-active {
			//color: #ff0000;
			font-weight: bold;
		}		
		
	}
	

</style>
































