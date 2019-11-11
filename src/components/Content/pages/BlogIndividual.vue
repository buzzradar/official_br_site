<template>
  
  <div>

    <!-- Description Section -->
    <div class="container space-top-2 space-top-md-3">

      <div class="w-lg-60 mx-auto">

        <!-- Go back to Blog -->
        <div class="mt-3 mb-6">
          <a class="text-secondary" href="/blog">
            <span class="fas fa-arrow-left small text-primary mr-2"></span>
            Back to Blog
          </a>
        </div>
        <!-- End Go back to Blog -->

        <!-- Title -->
        <div class="w-md-100 w-lg-100 mb-2">
          <h1 class="font-weight-normal">{{blogPostJSONContent.post_title}}</h1>
        </div>
        <!-- End Title -->

        <div class="mb-4 text-right">
          <span class="text-muted">{{blogPostJSONContent.post_date}}<br><small>by Nicky Yates</small></span>
        </div>

        <!-- <div class="mb-5">

          <img class="img-fluid rounded" :src="require('@/assets/buzzradar/img/blog/cannes-banner.jpg')" :alt="blogPostJSONContent.post_title">

        </div> -->

        <div v-html="blogPostJSONContent.post_content" class="post-content">
          <!-- This will get loaded dynamically -->
        </div>



      </div>
    </div>
    <!-- End Description Section -->

	</div>

</template>



<script>

  import AllBlogPosts from '../../../statics/WPPostsEntries.json';
	
 	export default {

 		name : 'BlogIndividual',
 		data : function(){
  		
      var currentPath = this.$router.currentRoute.path;
      var currentSlug = currentPath.split("/blog/")[1];
      var blogPostMatched;

      AllBlogPosts.blogentries.forEach(function(item,index){

        //console.log("post"+item.post.ID, currentSlug);

        if ('post'+item.ID == currentSlug) {
          blogPostMatched = item;

          console.log("item matched", item);
        }

      });

      return {
        blogPostJSONContent : blogPostMatched,
      };

 		},
    mounted() {
      $('.post-content').find('img').css({'width' : '100%','height' : 'auto'});
    }
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

  .post-content{
    white-space: pre-wrap;
  }

</style>

