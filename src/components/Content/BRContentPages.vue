/* eslint-disable */

<template>

    <div>

      <main id="content" role="main">
        <router-view></router-view>
      </main>

      <BRFooter v-if="this.$route.path != '/404'"></BRFooter>

    </div>

</template>







<script>

  import BRFooter from '../Footer/BRFooter.vue';

	export default {
	  name: 'BuzzRadarContentPages',
    components: {
      BRFooter,
    },
    mounted(){
      $.HSCore.components.HSHeader.init($('#header'));  
      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
      $.HSCore.components.HSGoTo.init('.js-go-to');
    },
    updated() {
      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
    }
	}

</script>








<style lang="scss" scoped>

	@import "compass";

</style>
































