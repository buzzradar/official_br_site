<template>
  
  <div id="app">
    
    <BRHeader></BRHeader>
    
    <BRContentPages></BRContentPages>

  </div>

</template>












<script>

import BRHeader from './components/Header/BRHeader.vue';
import BRContentPages from './components/Content/BRContentPages.vue';

export default {
  name: 'app',
  components: {
    BRHeader,
    BRContentPages,
  },
  mounted() {
    //We need this to display submenus in the Main Nav
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      pageContainer: $('.container'),
      breakpoint: 767.98,
      hideTimeOut: 0
    });
  } 

}
</script>











<style lang="scss">

  html,body{
    margin:0;
  }
  #app {

  }

</style>
