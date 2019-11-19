<template>
  
  <div>

    <router-view></router-view>    

  </div>

</template>



<script>
  
  import AllCaseStudiesEntries from '../../../statics/CaseStudiesEntries.json';

 	export default {

 		name : 'StudiesLibrary',
    data : function(){
      return {
        caseStudies : AllCaseStudiesEntries.casesentries,
      };
    },
    mounted() {
      $.HSCore.components.HSCubeportfolio.init('.cbp',{"defaultFilter": '*'});
      $.HSCore.components.HSFancyBox.init('.js-fancybox');
    },
    updated() {
      
    }

 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

  h3{
    height: 45px;
    font-size:15px;
  }

</style>

