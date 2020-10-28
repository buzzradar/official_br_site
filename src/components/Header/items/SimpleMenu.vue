/* eslint-disable */

<template>

        <!-- Simple Submenu -->
        <ul class="hs-sub-menu u-header__sub-menu" aria-labelledby="pagesMegaMenu" style="min-width: 230px;">
            <li v-for="childRoute in parentRoute.children" class="hs-has-sub-menu">
                <router-link @click.native="removeMenu" :to="childRoute.path" class="nav-link u-header__sub-menu-nav-link">{{childRoute.label}}</router-link>
            </li>				
        </ul>
        <!-- End Simple Submenu -->

</template>







<script>

	export default {
      name: 'SimpleMenu',
      props: {
        parentRoute: Object,
      },
	  data : function() {
	  	return {	
	  		
	  	}
	  },
	  mounted() {
	  	
	  },
	  created: function(){

	  },
	  methods : {
		removeMenu : function () {
			$('.hs-sub-menu').hide();
		}
	  }
	}

</script>








<style lang="scss" scoped>

	@import "compass";

	.router-link-exact-active,.router-link-active {
		//color: #ff0000;
		font-weight: bold;
	}		

</style>
































