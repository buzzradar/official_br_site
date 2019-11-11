<template>
  

  <div>

	  <!-- Blog Classic Section -->
    <div v-if="this.$router.currentRoute.path == '/blog' " class="container space-2 space-top-md-5 space-top-lg-3">

      <!-- Title -->
      <!-- <div class="w-md-80 w-lg-60 mb-9">
        <h1 class="font-weight-normal">Buzz Radar - <span class="text-primary font-weight-semi-bold">Blog</span></h1>
      </div> -->
      <!-- End Title -->

      <!-- All Blog Posts -->
      <div class="row">

        <!-- Blog Entry -->
        <div v-for="(blogPostEntry,index) in blogPosts" class="col-md-4">



          <article class="card border-0">
            <div class="card-body p-0">
              <div class="mb-5">
                <a :href="'/blog/post'+blogPostEntry.ID"><img class="img-fluid w-100 rounded" :src="require('@/assets/buzzradar/img/blog/'+blogPostEntry.thumb_name)" alt="Image Description"></a>
              </div>
              <small class="d-block text-secondary mb-1">{{blogPostEntry.post_date}}</small>
              <h2 class="h6 mb-6">
                <a :href="'/blog/post'+blogPostEntry.ID">{{blogPostEntry.post_title}}</a>
              </h2>
              <!-- <p>We've been working hard with our besties at Reuters to design a new reading experience for Reuters.com.</p> -->
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
	
  // import AllBlogEntries from '../../../statics/WPPostsEntries_original.json';
  import AllBlogEntries from '../../../statics/WPPostsEntries.json';
	
 	export default {

 		name : 'BlogAllPosts',
 		data : function(){


      // ==================================================
      // We use this code to clean up the JSON that comes 
      // from Buzz Radar.
      // ==================================================

      // var allPostsFromWP = {
      //   "blogentries": []
      // };

      // console.log(AllBlogEntries.post.posts);
      // for (var key in AllBlogEntries.post.posts) {
      //   var post = AllBlogEntries.post.posts[key].post;
      //   var meta = AllBlogEntries.post.posts[key].meta;
      //   var terms = AllBlogEntries.post.posts[key].terms;

      //   var content = post;
      //   content["thumb_name"] = 'blog-post-thumb.jpg';
      //   content["terms"] = terms;

      //   allPostsFromWP.blogentries.push(content);
      // };

      // allPostsFromWP.blogentries.reverse();
      // console.log( JSON.stringify(allPostsFromWP));

      // ==================================================




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

  .card{

    img{
      border: 1px solid #eee;        
    }
  }

</style>

