/* eslint-disable */

<template>

	<!-- Navigation -->
	<div id="navBar" class="navbar-collapse u-header__navbar-collapse">
		<ul class="navbar-nav u-header__navbar-nav">


 			<!-- Root Level Menu Option -->
			<li v-for="(route,index) in mainNavRoutesArray" v-if="route.hasChildren == true"

			class="nav-item hs-has-sub-menu u-header__nav-item"
			data-event="hover"
			data-animation-in="slideInUp"
			data-animation-out="fadeOut">

				<a class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="true" aria-labelledby="prodcutsSubMenu">{{route.alias}}</a>

				<!-- Submenu -->
				<ul class="hs-sub-menu u-header__sub-menu" aria-labelledby="pagesMegaMenu" style="min-width: 230px;">

					<li v-for="childRoute in route.children" class="hs-has-sub-menu">

						<router-link :to="childRoute.path" class="nav-link u-header__sub-menu-nav-link">{{childRoute.alias}}</router-link>

					</li>					

				</ul>
				<!-- End Submenu -->

			</li>
			<li v-else class="nav-item u-header__nav-item">

				<router-link :to="route.path" class="nav-link u-header__nav-link">{{route.alias}}</router-link>

			</li>
			<!-- End Root Level Menu Option -->


			<!-- Button -->
			<li class="nav-item u-header__nav-last-item">
				<a class="btn btn-sm btn-primary transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">
				Book a Meeting
				</a>
			</li>
			<!-- End Button -->

			<!-- Button -->
			<li class="nav-item u-header__nav-last-item">
				<a class="btn btn-sm btn-primary transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">
				Login
				</a>
			</li>
			<!-- End Button -->

		
		</ul>
	</div>
	<!-- End Navigation -->


</template>







<script>

	export default {
	  name: 'MainNav',
	  data : function() {
	  	return {
	  		mainNavRoutesArray : this.$router.options.routes.slice(2),	  		
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



	

</style>
































