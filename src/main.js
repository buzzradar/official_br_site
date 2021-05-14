import Vue from 'vue';
import App from './App.vue';
import router from './router';
//import VueIntercom from 'vue-intercom';







//Vue.use(VueIntercom, { appId: 'nn0o63ch' });


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  mounted() {

	  // this.$intercom.boot({
    //   name: 'Guest',
    // });
    
    // setTimeout(function() {
  		// this.$intercom.show();
    // }.bind(this),5000);

  
  },
  watch:{
	'$route' (to, from){
	   //console.log("Route Watcher----> From ", from.path, " to ", to.path);
	}
  }
}).$mount('#app');
