<template>
  

  <div>


    <div v-if="routeContains(this.$router.currentRoute.path,'blog/post')">

      <!-- ++++++++++++++++++++ -->
      <!-- Individual Blog Post -->
      <!-- ++++++++++++++++++++ -->
      <router-view />
      <!-- ++++++++++++++++++++ -->
      <!-- End Individual Blog Post -->
      <!-- ++++++++++++++++++++ -->

    </div>

    <div v-else>

      <!-- ++++++++++++++++++++ -->
      <!-- All Posts Blog Classic Section -->
      <!-- ++++++++++++++++++++ -->
      <div class="container space-2 space-top-md-5 space-top-lg-3">

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
        
      </div>
      <!-- ++++++++++++++++++++ -->
      <!-- End All Posts Blog Classic Section -->
      <!-- ++++++++++++++++++++ -->

    </div>




    



  </div>

</template>



<script>
	
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
      
    },
    methods: {
      routeContains(currentRoute,matchingRoute) {

        console.log('----------------------------------------');
        console.log(currentRoute, matchingRoute);
        return currentRoute.includes(matchingRoute);
      }
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

