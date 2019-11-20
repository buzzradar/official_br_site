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
          <span class="text-muted">{{blogPostJSONContent.post_date}}<br><small>by {{blogPostJSONContent.author}}</small></span>
        </div>

        <!-- <div class="mb-5">

          <img class="img-fluid rounded" :src="require('@/assets/buzzradar/img/blog/cannes-banner.jpg')" :alt="blogPostJSONContent.post_title">

        </div> -->

        <div v-html="blogPostJSONContent.post_content" class="post-content">
          <!-- This will get loaded dynamically -->
        </div>



      <!--   <p>As all marketing tech companies tend to do every 18 months, we launched a website re-design to better reflect our ever developing offerings and improve the way we communicate with our audience.</p>

        <p>However there are two things that I’m really proud of with this website.</p>

        <p>We built the site entirely in-house from scratch using one designer, one developer and myself copywriting. I think it just proves that, with the right team, you can execute major projects to a really high standard without spending the earth. At the start of the year I was in conversation with the CEO of a similar company in our space, he divulged how much they where spending on their new website and I had to sit down and have a glass of water! If there is one thing it’s taught me is that you and your team understand your story, audience and product better than anyone else. It saves a lot of time and money because having someone else figure that out for you is expensive and never quite works out as well as you hoped.</p>

        <p>We used our own tools and processes at Buzz Radar to better understand our audience and tailor our messaging, tone and design. I think a lot of marketing technology companies and agencies are guilty of focusing their talents on their clients and almost entirely forgetting to turn those skills and technologies on themselves. Our new Audience AI technology presented us with an opportunity. We needed to see how effective it was so we used ourselves as the guinea pig! I’ll go into more detail in a future blog post, but essentially, we turned our platform on ourselves, the social intelligence category and our competitors to learn as much as we could about our audience. We profiled over 20k people who spoke about social intelligence tools and topics in 2019 and used that as our virtual audience. We tested our existing messaging and website against them to see what worked and what didn’t we even did the same with some of our biggest competitors! We learnt some key insights that became the bedrock of our new website the highlights I’ll share with you now.</p>

        <p class="ml-3"> <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3"><span class="fas fa-arrow-right btn-icon__inner"></span></span> <strong>Our target audience is a lot more emotionally intelligent than we were giving them credit for:</strong> highly empathetic and understanding of people's and organisational needs than we realised. They cared much more about how our tools would help them communicate with their team and consumers than we thought.</p>

        <p class="ml-3"> <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3"><span class="fas fa-arrow-right btn-icon__inner"></span></span> <strong>They are also a lot less impressed by tech and how things work on a functional level than we expected.</strong> As a team of technologist we love talking about the power of technology and how it can improve the world, however, we learnt that our target audience where much less interested in how it works and focused on how it could help them, their organisation and audience.</p>

        <p>There is MUCH more nuanced detail than just this that I’m happy to share with anyone who asks. However, in short it made us work on a much more empathetic, less tech-focused copy and imagery that I hope you can see reflected in the website. We’ve also used much more illustration and changed our tone to be more empathetic and friendly with more inclusive and less combative techy sounding language.</p>

        <img class="img-thumbnail mt-3 mb-3" src="https://3c90f21d2e52d99af65d-cc7a500d9b10d65e67a8ddf30b9c21f5.ssl.cf3.rackcdn.com/official_site_assets/blog/patrick_sitting_desk.jpg" />

        <p>We’ve tested the new website against our Audience AI and seen an uplift from 50% to 65% in content / audience resonance. Based on the work we’ve done with our clients and our research, we expect that to translate in a 30% uplift in time on site and post engagement. We’ll keep you posted and let you know how we are looking. The proof is in the pudding after all!</p>

        <p class="mt-7">
          Patrick Charlton<br>
          Director & Co-Founder - Buzz Radar
        </p> -->




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


      console.log("For each!",AllBlogPosts);

      AllBlogPosts.blogentries.forEach(function(item,index){

        // console.log("post"+item.ID, currentSlug);

        if ( currentSlug.includes('post'+item.ID) ) {
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

