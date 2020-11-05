/* eslint-disable */

<template>

	

		<!-- Products - Mega Menu -->
		<div class="hs-mega-menu w-100 u-header__sub-menu">
			<div class="row no-gutters">

				<div v-for="columnRoutes in childRouteColumns" :class="getClassFromNumColumns()">
					<div v-for="childRoute in columnRoutes" class="u-header__promo-item">
						<router-link @click.native="removeMenu" :to="childRoute.path" class="u-header__promo-link">
						<div class="media align-items-center">
							<img class="js-svg-injector u-header__promo-icon" :src="getURLIcon(childRoute.icon_menu)" :alt="childRoute.label">
							<div class="media-body">
							<span class="u-header__promo-title">{{childRoute.label}}</span>
							<small class="u-header__promo-text">{{childRoute.description_menu}}</small>
							</div>
						</div>
						</router-link>
					</div>
				</div>





				<!-- Extra Column -->
				<div v-if="this.extraColumnLayout != null" :class="getClassFromNumColumns() + ' u-header__promo'">   

					<!-- Free Tools -->
					<div v-if="this.extraColumnLayout == 'freetools'" class="u-header__mega-menu-wrapper">

						<!-- <div class="position-relative">
							<img class="img-fluid rounded mb-3" src="@/assets/buzzradar/img/topMenu/freeToolsSmall.jpg" alt="Free Tools">
						</div> -->

						<span class="u-header__sub-menu-title">Free Tools</span>
						<div class="row">
							<div class="col-sm-12">
								<ul class="u-header__sub-menu-nav-group">
								<li><a class="nav-link u-header__sub-menu-nav-link" href="/aiaudienceanalysis">AI Audience Analysis</a></li>
								<li><a class="nav-link u-header__sub-menu-nav-link" href="/reports">Reports</a></li>
								<li><a class="nav-link u-header__sub-menu-nav-link" href="/realtimedashboard">Real-Time Dashboards</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- End - Free Tools -->

				</div>
				<!-- End Extra Column -->




			</div>
		</div>
		<!-- End Products - Mega Menu -->






</template>







<script>
	

	export default {
	  name: 'MegaMenu',
	  components: {
		
	  },
      props: {
        parentRoute: Object,
        numColumns: Number,
        extraColumnLayout: String,
      },
	  data : function() {
	  	return {	
	  		
	  	}
	  },
	  computed: {
		finalNumColumns : function() {
			//console.log("finalNumColumns->", Number(this.numColumns) + ((this.extraColumnLayout != null) ? 1 : 0) )
			return Number(this.numColumns) + ((this.extraColumnLayout != null) ? 1 : 0);
		},
		childRouteColumns : function() {

			var columnsChildrenArray = new Array();
			for (let index = 0; index < this.numColumns; index++) {
				columnsChildrenArray.push([]);	//add an empty array per column
			}

			var columnId = 0;
			var numColumns = this.numColumns;
			this.parentRoute.children.forEach(function(element, i){
				columnsChildrenArray[columnId].push(element);

				columnId ++;
				if (columnId >= numColumns) {
					columnId = 0;
				}
			});

			return columnsChildrenArray;  
		}
	  },
	  mounted() {
	  	
	  },
	  created: function(){

	  },
	  methods : {
	  	getURLIcon : function(nameIcon){
			//console.log("get Name of the Icon", nameIcon);
			return require('@/assets/buzzradar/svg/topMenu/'+nameIcon);
		},
		getClassFromNumColumns : function() {
			return "col-md-"+(12/this.finalNumColumns);
		},
		removeMenu : function () {
			$('.hs-mega-menu').hide();
		}
	  }
	}

</script>








<style lang="scss" scoped>

	@import "compass";

	.router-link-exact-active,.router-link-active {

		.u-header__promo-title{
			color: #F6921E;
			font-weight: bold;
		}
		
	}		

</style>
































