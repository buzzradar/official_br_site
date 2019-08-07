<template>
  
  <div>

    <!-- Description Section -->
    <div class="container space-top-2 space-top-md-3">

      <div class="w-lg-60 mx-auto">

        <!-- Title -->
        <div class="w-md-100 w-lg-100 mb-2">
          <h1 class="font-weight-normal">{{blogPostJSONContent.title}}</h1>
        </div>
        <!-- End Title -->

        <div class="mb-4 text-right">
          <span class="text-muted">{{blogPostJSONContent.date}}<br><small>by {{blogPostJSONContent.author}}</small></span>
        </div>

        <div class="mb-5">

          <img class="img-fluid rounded" :src="require('@/assets/buzzradar/img/blog/'+blogPostJSONContent.imgName)" :alt="blogPostJSONContent.title">

        </div>

        <div v-html="blogPostJSONContent.description" class="post-content">
          <!-- This will get loaded dynamically -->
        </div>

        <!-- Jobs Link -->
        <div class="mt-6">
          <a class="text-secondary" href="/blog">
            <span class="fas fa-arrow-left small text-primary mr-2"></span>
            Back to Blog
          </a>
        </div>
        <!-- End Jobs Link -->





<!-- <p>Data is hidden within many sources. That’s why our Command Centres are expanding beyond social to give you deeper insights. With our new updates, we can integrate more data sources into our platform to give you a comprehensive view of your business. But we’re not stopping there.</p>

<p>We’ve partnered with IBM to bring you next-generation cognitive insights from Watson. Your sentiment is now analysed with Watson’s AI API. Meaning you can understand how your social media followers feel about your products or brand.</p>

<p>And want to know more about those discussing your brand? That’s where Watson comes in. We’re now able to run all your data through Watson Personality Insights to really understand more about your audience. Personality Insights extracts personality characteristics based on how a person writes. This is great for creating detailed personality portraits of individual customers for highly-targeted segmentation, improving lead quality based on “like” personality characteristics, personalizing recommendations, matching personality types, and more.</p>

<img class="img-fluid rounded" src="@/assets/buzzradar/img/blog/img3.jpg" alt="aaaaaaaaaaaaaa">

<p>From improving your experience visually to aggregating data and services that give you a better understanding, our goal is to make it easier for your team to truly be data-driven. Learn more about the science and methodology behind the tech here.</p>

<p>Give it a go and add it to your dashboard — then, let us know what you think!</p>

<p><em>If you haven’t tried Buzz Radar yet, take a free trial on us and let us know how you get on.</em></p>

<a class='btn btn-primary mt-3' href="http://credibleinfluence.com/' role='button' target='_blank'>Drive your business with Data</a> -->





      </div>
    </div>
    <!-- End Description Section -->

	</div>

</template>



<script>

  import AllBlogPosts from '../../../statics/BlogsEntries.json';
	
 	export default {

 		name : 'BlogIndividual',
 		data : function(){
  		
      var currentPath = this.$router.currentRoute.path;
      var currentSlug = currentPath.split("/blog/")[1];
      var blogPostMatched;

      AllBlogPosts.blogentries.forEach(function(item,index){

        console.log(item.slug, currentSlug);

        if (item.slug == currentSlug) {
          blogPostMatched = item;
        }

      });

      //If I have [[imghere]] inside the description that means the image will be attached
      //in between paragraphs.
      if (blogPostMatched.description.indexOf('[[')) {

        // var imgPath = require('@/assets/buzzradar/img/blog/'+blogPostMatched.imgName);
        // var imgTag = '<img class="img-fluid rounded mb-3" src="'+imgPath+'" alt="'+blogPostMatched.title+'" >';
        // blogPostMatched.description = blogPostMatched.description.replace('[[imghere]]',imgTag);

        // var imgHereTag = 
        // var posMatch = blogPostMatched.description.indexOf('[imghere:') + ('[imghere:').length;
        // var imgPath = '';

        // for (var i = posMatch; i < blogPostMatched.description.length; i++) { 
        //   var char = blogPostMatched.description[i];

        //   if (char == ']') {
        //     console.log("genial");
        //     console.log(char);
        //     break;
        //   }else{
        //     imgPath = imgPath + char;
        //   }

        // };

        // console.log(imgPath);
        
      }

      return {
        blogPostJSONContent : blogPostMatched,
      };

 		},
    mounted() {
      
    }
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

