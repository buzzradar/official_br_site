<template>
  

  <div>

	  <!-- Blog Classic Section -->
    <div v-if="this.$router.currentRoute.path == '/blog' " class="container space-2 space-top-md-5 space-top-lg-3">

      <!-- Title -->
      <div class="w-md-80 w-lg-60 mb-9">
        <h1 class="font-weight-normal">Buzz Radar - <span class="text-primary font-weight-semi-bold">Blog</span></h1>
      </div>
      <!-- End Title -->

      <!-- All Blog Posts -->
      <div class="row">

        <!-- Blog Entry -->
        <div v-for="(blogPostEntry,index) in blogPosts" class="col-md-4 space-top-md-1">

          <article class="card border-0">
            <div class="card-body p-0">
              <div class="mb-5">
                <img class="img-fluid w-100 rounded" :src="require('@/assets/buzzradar/img/blog/500x280/'+blogPostEntry.imgName)" alt="Image Description">
              </div>
              <small class="d-block text-secondary mb-1">March 20, 2018</small>
              <h2 class="h5">
                <a :href="'/blog/'+blogPostEntry.slug">Remote workers, here's how to dodge distractions</a>
              </h2>
              <p>We've been working hard with our besties at Reuters to design a new reading experience for Reuters.com.</p>
            </div>
          </article>

        </div>
        <!-- End Blog Entry -->
        
      </div>
      <!-- End All Blog Posts -->
      
    </div>
    <!-- Blog Classic Section -->

    <!-- Individual Blog Post -->
    <div v-else>
      <router-view />
    </div>
    <!-- End Individual Blog Post -->

  </div>

</template>



<script>
	import AllBlogEntries from '../../../statics/BlogsEntries.json';
	
 	export default {

 		name : 'BlogAllPosts',
 		data : function(){
  		return {
				blogPosts : AllBlogEntries.blogentries,
 			};
 		},
    mounted() {
      
    }
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

