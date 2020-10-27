/* eslint-disable */

<template>

	<!-- Navigation -->
	<div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
		<ul class="navbar-nav u-header__navbar-nav">





 			<!-- Root Level Menu Option -->
			<li v-for="(route,index) in mainNavRoutesArray" v-if="route.hasChildren == true"

			:class="route.subMenuClass"
			data-event="hover"
			data-animation-in="slideInUp"
			data-animation-out="fadeOut"
			data-max-width="900px"
			data-position="left">

				<a class="nav-link u-header__nav-link u-header__nav-link-toggle" :href="route.children[0].path" aria-haspopup="true" aria-expanded="false" aria-labelledby="prodcutsSubMenu">{{route.router_config.label}}</a>


				<!-- Products - Mega Menu -->
                <div v-if="route.mega_menu" class="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="demosMegaMenu">
                	<div class="row no-gutters">
                    	<div class="col-md-4">
							<!-- Mega Menu SubItem FIRST COLUMN -->
							<div v-for="childRoute in getFirstColumn(route.children)" class="u-header__promo-item">
								<router-link :to="childRoute.path" class="u-header__promo-link">
								<div class="media align-items-center">
									<img class="js-svg-injector u-header__promo-icon" :src="getURLIcon(childRoute.icon_menu)" :alt="childRoute.label">
									<div class="media-body">
									<span class="u-header__promo-title">{{childRoute.label}}</span>
									<small class="u-header__promo-text">{{childRoute.description_menu}}</small>
									</div>
								</div>
								</router-link>
							</div>
							<!-- End Mega Menu SubItem FIRST COLUMN -->
                    	</div>
						<div class="col-md-4">
							<!-- Mega Menu SubItem SECOND COLUMN -->
							<div v-for="childRoute in getSecondColumn(route.children)" class="u-header__promo-item">
								<router-link :to="childRoute.path" class="u-header__promo-link">
								<div class="media align-items-center">
									<img class="js-svg-injector u-header__promo-icon" :src="getURLIcon(childRoute.icon_menu)" :alt="childRoute.label">
									<div class="media-body">
									<span class="u-header__promo-title">{{childRoute.label}}</span>
									<small class="u-header__promo-text">{{childRoute.description_menu}}</small>

									</div>
								</div>
								</router-link>
							</div>
							<!-- End Mega Menu SubItem SECOND COLUMN -->
                    	</div>
						<!-- Free Tools -->
						<div class="col-md-4 u-header__promo">
						<a class="d-block u-header__promo-inner" href="#">
							<div class="position-relative">
							<img class="img-fluid rounded mb-3" src="@/assets/buzzradar/img/topMenu/freeTools.jpg" alt="Buzz Radar Free Tools">
							<span class="badge badge-success badge-pill badge-pos shadow-sm mt-3">New</span>
							</div>
							<span class="text-secondary font-size-1">Try some of our Free Tools for your organisation to see the potential of using Buzz Radar.</span>
						</a>
						</div>
						<!-- End Free Tools -->
					</div>
                </div>
                <!-- End Products - Mega Menu -->
              


				<!-- Regular Submenu -->
				<ul v-else class="hs-sub-menu u-header__sub-menu" aria-labelledby="pagesMegaMenu" style="min-width: 230px;">
					<li v-for="childRoute in route.children" class="hs-has-sub-menu">
						<router-link :to="childRoute.path" class="nav-link u-header__sub-menu-nav-link">{{childRoute.label}}</router-link>
					</li>				
				</ul>
				<!-- End Regular Submenu -->

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

	export default {
	  name: 'MainNav',
	  data : function() {
	  	return {	
	  		mainNavRoutesArray : [
	  			{
	  				//Products
					  router_config : this.$router.options.routes[3],
					  children : this.$router.options.routes[3].children,
					  subMenuClass : 'nav-item hs-has-mega-menu u-header__nav-item',
					  mega_menu : true,   
	  			},
	  			{
	  				//Services
					  router_config : this.$router.options.routes[4],
					  subMenuClass : 'nav-item hs-has-sub-menu u-header__nav-item',
					  mega_menu : false, 
	  			},
	  			{
	  				//Case Studies
					  router_config : this.$router.options.routes[5],
					  subMenuClass : 'nav-item hs-has-sub-menu u-header__nav-item',
					  mega_menu : false, 
	  			},
	  			{
	  				//Blog
					  router_config : this.$router.options.routes[6],
					  subMenuClass : 'nav-item hs-has-sub-menu u-header__nav-item',
					  mega_menu : false, 
	  			},
	   			{
	  				//About Us
					  router_config : this.$router.options.routes[7],
					  children : this.$router.options.routes[7].children,
					  subMenuClass : 'nav-item hs-has-sub-menu u-header__nav-item',
					  mega_menu : false, 
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
		getURLIcon : function(nameIcon){
			console.log("get Name of the Icon", nameIcon);
			return require('@/assets/buzzradar/svg/icons/'+nameIcon);
		}
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
































