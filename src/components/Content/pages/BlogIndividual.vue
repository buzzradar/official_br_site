<template>
  
  <div>

    <!-- Description Section -->
    <div class="container space-top-2 space-top-md-3">

      <div class="w-lg-60 mx-auto">

        <!-- Title -->
        <div class="w-md-100 w-lg-100 mb-9">
          <h1 class="font-weight-normal">Individual Blog Post - <span class="text-primary font-weight-semi-bold">Template</span></h1>
          <h5>{{this.$router.currentRoute.name}}</h5>
        </div>
        <!-- End Title -->

        <div class="mb-4">
          <span class="text-muted">April 15, 2018</span>
        </div>

        <div class="mb-5">
          <img class="img-fluid w-100 rounded" src="@/assets/img/900x450/img1.jpg" alt="Image Description">
        </div>

        <div class="mb-5">
          <p>At Front, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>
          <p>As we've grown, we've seen how Front has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>
          <p>That's why we are excited to share that we now have a <a href="#">free version of Front</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>
        </div>

        <h2 class="h5 mb-3">Bringing the culture of sharing to everyone.</h2>

        <p>Small teams and individual designers need a space where they can watch the design process unfold, both for themselves and for the people they work with – no matter if it's a fellow designer, product manager, developer or client. Front allows you to invite more people into the process, creating a central place for conversation around design. As those teams grow, transparency and collaboration becomes integrated in how they communicate and work together.</p>
      </div>
    </div>
    <!-- End Description Section -->

	</div>

</template>



<script>
	
 	export default {

 		name : 'BlogIndividual',
 		data : function(){
  		return {
				
 			};
 		},
    mounted() {
      
    }
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

