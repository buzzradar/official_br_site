/* eslint-disable */

<template>

	<!-- Navigation -->
	<div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
		<ul class="navbar-nav u-header__navbar-nav">





 			<!-- Root Level Menu Option -->
			<li v-for="(route,index) in mainNavRoutesArray" v-if="route.hasChildren == true"

			:class="(route.megaMenu) ? 'nav-item hs-has-mega-menu u-header__nav-item' : 'nav-item hs-has-sub-menu u-header__nav-item'"
			data-event="hover"
			data-animation-in="slideInUp"
			data-animation-out="fadeOut"
			:data-max-width="route.megaMenuWidth"
			data-position="left">

				<a class="nav-link u-header__nav-link u-header__nav-link-toggle" :href="route.children[0].path" aria-haspopup="true" aria-expanded="false" aria-labelledby="prodcutsSubMenu">{{route.router_config.label}}</a>

				<mega-menu v-if="route.megaMenu" :parent-route="route" :num-columns="route.columns" :extra-column-layout="route.extraColumnLayout"></mega-menu>   
				<simple-menu v-else :parent-route="route"></simple-menu>

			</li>

			<!-- Standalone Link -->
			<li v-else class="nav-item u-header__nav-item nav-item-standalone">
				<router-link :to="route.router_config.path" class="nav-link u-header__nav-link">{{route.router_config.label}}</router-link>
			</li>
			<!-- End Standalone Link -->
			<!-- End Root Level Menu Option -->






			<!-- Book a Meeting -->
			<li class="nav-item u-header__nav-last-item">
				<a v-on:click="bookMeeting" class="btn btn-sm btn-secondary d-inline-block book-meeting" href="#" target="_blank">
				<span class="d-none d-lg-block">Book a Demo</span> <span class="d-block d-lg-none"><i class="fas fa-user-clock"></i></span>
				</a>
			</li>
			<!-- End Book a meeting -->


			<!-- Login To Platform -->
			<li class="nav-item u-header__nav-last-item">
				<a class="btn btn-sm btn-primary d-inline-block" href="https://insights.buzzradar.com/" target="_blank">
				Login
				</a>
			</li>
			<!-- End Login To Platform -->

		</ul>
	</div>
	<!-- End Navigation -->


</template>







<script>

	import MegaMenu from './items/MegaMenu';
	import SimpleMenu from './items/SimpleMenu';

	export default {
	  name: 'MainNav',
	  components: {
		MegaMenu,
		SimpleMenu,
	  },
	  data : function() {
	  	return {	
	  		mainNavRoutesArray : [
	  			{
	  				//Products
					  router_config : this.$router.options.routes[3],
					  children : this.$router.options.routes[3].children,
					  megaMenu : true,   
					  columns: 2,
					  extraColumnLayout : null,
					  megaMenuWidth : '700px'
	  			},
	  			{
	  				//Services
					  router_config : this.$router.options.routes[4],
					  children : this.$router.options.routes[4].children,
					  megaMenu : false,
	  			},
	  			{
	  				//Case Studies
					  router_config : this.$router.options.routes[5],
					  megaMenu : false, 
	  			},
	  			{
	  				//Blog
					  router_config : this.$router.options.routes[6],
					  megaMenu : false, 
	  			},
	   			{
	  				//About Us
					  router_config : this.$router.options.routes[7],
					  children : this.$router.options.routes[7].children,
					  megaMenu : false, 
	  			},
	  		]
	  	}
	  },
	  mounted() {
	  	//For mobile we need to make sure the panels get contracted when users taps on the menu.
	  	$(".u-header__sub-menu-nav-link,.nav-item-standalone").click(function(event) {
			$(".navbar-collapse").collapse('hide');
		});
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
	  	bookMeeting : function(e) {
	  		e.preventDefault();
	  		Calendly.showPopupWidget('https://calendly.com/buzzradar/introduction-meeting');
	  		return false;
		  }, 
		getFirstColumn : function(ChildRoutesArray){
			return [ChildRoutesArray[0],ChildRoutesArray[1]];
		},
		getSecondColumn : function(ChildRoutesArray){
			return [ChildRoutesArray[2],ChildRoutesArray[3]];
		},		
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

		.u-header__promo-title{
			font-size: 1rem;
		}

		.u-header__promo-text{
			font-size:70%;
		}

		.badge{
			font-size: 90%;
		}

		.badge-pill{
			background-color: #21C6CA;
		}
		
	}
	

</style>
































