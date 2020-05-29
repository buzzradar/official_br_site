const fs = require('fs');
const path = require('path'); 
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

//---------------------------------------------
// CASE STUDIES: To Add Specific Info for each 
//---------------------------------------------
const readFileAsyncCASESTUDIES = (FILE_NAME) => {
  fs.readFile(FILE_NAME, (error, data) => {
    console.log('Async Read: starting...');
    if (error) {
      console.log('Async Read: NOT successful!');
      console.log(error);
    } else {
      try {
        const dataJson = JSON.parse(data);
        console.log('Async Read: successful!');
        // console.log(dataJson);


        //Run through 10 Case Studies to create the slugs, titles and images for SEO
		var i = 0;
        while (i < 1) {
		  var caseStudy = dataJson.casesentries[i];

		  //Slugs (Array)
		  SEORoutes.slugs.push('/casestudies/'+caseStudy.slug);
		  //Titles (Object)
		  SEORoutes.titles['/casestudies/'+caseStudy.slug] = caseStudy.title;
		  //Descriptions (Object)
		  SEORoutes.descriptions['/casestudies/'+caseStudy.slug] = 'Find out how Buzz Radar has helped a wide range of organisations gain critical insights from their data.';
		  //Sharer Images (Object)
		  SEORoutes.sharerImages['/casestudies/'+caseStudy.slug] = 'https://www.buzzradar.com/public_assets/casestudies/'+caseStudy.thumb;

		  i++;
		};

		// console.clear();
		// console.log(" final SEORoutes --------->");
		// console.log(SEORoutes);


      } catch (error) {
        console.log(error);
      }
    }
  });
};




//---------------------------------------------
// BLOG POSTS: To Add Specific Info for each 
//---------------------------------------------
const readFileAsyncBLOGPOSTS = (FILE_NAME) => {
  fs.readFile(FILE_NAME, (error, data) => {
    console.log('Async Read: starting...');
    if (error) {
      console.log('Async Read: NOT successful!');
      console.log(error);
    } else {
      try {
        const dataJson = JSON.parse(data);
        console.log('Async Read: successful!');
        // console.log(dataJson);

		//Run through 10 Blog Posts to create the slugs, titles and images for SEO
		var i = 0;
        while (i < 1) {
		  var blogPost = dataJson.blogentries[i];

		  //Slugs (Array)
		  SEORoutes.slugs.push('/blog/post'+blogPost.ID);
		  //Titles (Object)
		  SEORoutes.titles['/blog/post'+blogPost.ID] = blogPost.post_title;
		  //Descriptions (Object)
		  SEORoutes.descriptions['/blog/post'+blogPost.ID] = 'Find out how Buzz Radar has helped a wide range of organisations gain critical insights from their data.';
		  //Sharer Images (Object)
		  SEORoutes.sharerImages['/blog/post'+blogPost.ID] = 'https://www.buzzradar.com/public_assets/blog/'+blogPost.thumb_name;

		  i++;
		}

		// console.clear();
		// console.log(" final SEORoutes --------->");
		// console.log(SEORoutes);

      } catch (error) {
        console.log(error);
      }
    }
  });
};









// ---------------------------------------------------- //
// Developer note: WE need to prerender all index.html to make them 
// SEO friendly. That will include a specific TITLE for each page, and specific
// SHARERE IMAGE for each page. The following object contains all the routes
// we want to make SEO friendly and the titles we want to use and the images.

// After that we run the function readFileAsyncCASESTUDIES to load all the Casestudies and 
// we will create all the SLUGS, TITLES and SHARERE IMAGES for each individual
// Case Study.
// ---------------------------------------------------- //

const SEORoutes = {
	slugs : [
		'/', 
	  	'/realtimedashboard', 
	  	'/aiaudienceanalysis', 
	  	'/marketingintelplatform',
	  	'/marketingintelplatform/socialintelligence',
	  	'/marketingintelplatform/paidmedia',
	  	'/marketingintelplatform/newspr',
	  	'/blog',
	  	'/casestudies',
	  	'/ces',
	  	'/virtualevents',
	  	'/credibleinfluence',
	],
	titles : {
	    '/': 'Buzz Radar - Real Time Social Media Intelligence Tool Made Easy',
	    '/realtimedashboard': 'Real-Time Dashboard - Buzz Radar',
	    '/aiaudienceanalysis': 'Audience AI - Buzz Radar',
	    '/marketingintelplatform': 'Marketing Intelligence Platform - Buzz Radar',	   
	  	'/marketingintelplatform/socialintelligence' : 'Social Intelligence - Buzz Radar',
	  	'/marketingintelplatform/paidmedia': 'Paid Media Analysis - Buzz Radar',
	  	'/marketingintelplatform/newspr': 'News & PR Monitoring - Buzz Radar',
	  	'/blog': 'Blog - Buzz Radar',
	  	'/casestudies': 'Case Studies - Buzz Radar',
	  	'/ces': 'CES 2020 - Buzz Radar',
	  	'/virtualevents': 'Make your Virtual Event count - Buzz Radar',
	  	'/credibleinfluence': 'Credible Influence - The AI Powered Audience Intelligence, Social Insight and Content Optimisation Agency',
	},
	descriptions : {
	    '/': 'Buzz Radar is the leading social intelligence platform designed for marketers rather than analysts. Providing powerful, easy to digest actionable insights.',
	    '/realtimedashboard': 'Easily turn your data into fast accessible and actionable data visualisations for your entire organisation.',
	    '/aiaudienceanalysis': 'Find out what really makes your customers tick with the psychometric audience analysis.',
	    '/marketingintelplatform': 'In a few clicks take your organisations marketing data and turn it into actionable, intelligent insights.',	   
	  	'/marketingintelplatform/socialintelligence' : 'Access award-winning social media listening and monitoring intelligence across the major networks.',
	  	'/marketingintelplatform/paidmedia': 'Smart easy to digest insights on your performance for Facebook Ads and Google Adwords.',
	  	'/marketingintelplatform/newspr': 'Capture and analyse data from all your PR campaigns from across over 3 Million news outlets and blogs.',
	  	'/blog': 'Capture and analyse data from all your PR campaigns from across over 3 Million news outlets and blogs.',
	  	'/casestudies': 'Find out how Buzz Radar has helped a wide range of organisations gain critical insights from their data.',
	  	'/ces': 'Buzz Radar is the leading social intelligence platform designed for marketers rather than analysts. Providing powerful, easy to digest actionable insights.',
	  	'/virtualevents': 'With the many events this year turning virtual, utilising and understanding the online conversation around them has become increasingly important. Virtual events have special needs; Buzz Radar’s Audience Analysis and Real-time Data Visualisation can help event organisers quickly fill gaps in several key areas.',
	  	'/credibleinfluence': 'Credible Influence - The AI Powered Audience Intelligence, Social Insight and Content Optimisation Agency',
	},
	sharerImages : {
	    '/': 'https://www.buzzradar.com/public_assets/images/sharers/sharer.jpg',
        '/realtimedashboard': 'https://www.buzzradar.com/public_assets/images/sharers/sharer_dashboard.jpg',
        '/aiaudienceanalysis': 'https://www.buzzradar.com/public_assets/images/sharers/sharer_ai_audience_analysis.jpg',
        '/marketingintelplatform': 'https://www.buzzradar.com/public_assets/images/sharers/sharer_mark_intelligence.jpg',
	  	'/marketingintelplatform/socialintelligence' : 'https://www.buzzradar.com/public_assets/images/sharers/sharer_mark_intelligence.jpg',
	  	'/marketingintelplatform/paidmedia': 'https://www.buzzradar.com/public_assets/images/sharers/sharer_mark_intelligence.jpg',
	  	'/marketingintelplatform/newspr': 'https://www.buzzradar.com/public_assets/images/sharers/sharer_mark_intelligence.jpg',
	  	'/blog': 'https://www.buzzradar.com/public_assets/images/sharers/sharer.jpg',
	  	'/casestudies': 'https://www.buzzradar.com/public_assets/images/sharers/sharer.jpg',
	  	'/ces': 'https://insights.buzzradar.com/bundles/api/images/ces2020_sharer.png',
	  	'/virtualevents': 'https://www.buzzradar.com/public_assets/images/sharers/sharer_virtualevents.jpg',
	  	'/credibleinfluence': 'https://www.buzzradar.com/public_assets/images/sharers/sharer_services.jpg',
	},
};
readFileAsyncCASESTUDIES('./src/statics/CaseStudiesEntries.json');
readFileAsyncBLOGPOSTS('./src/statics/WPPostsEntries.json');






// ---------------------------------------------------- //
// Developer note: The following function is created to Distribute the Vue-client project.
// The PrerenderSPAPlugin will create individual INDEX.HTML for each page we want to
// optimse for SEO. (new title, new sharer image);
// ---------------------------------------------------- //

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

	configureWebpack: {
		plugins: [
			new PrerenderSPAPlugin({
			  staticDir: path.join(__dirname, '.', 'dist'),
			  routes: SEORoutes.slugs,
			  renderer: new PuppeteerRenderer({
			    renderAfterElementExists: '#app',
			    timeout: 60000,
			  }),
			  minify : false,
			  postProcess: function (context) {

		          context.html = context.html.replace(
		            /T-I-T-L-E/g,
		            SEORoutes.titles[context.route]
		          );

		          context.html = context.html.replace(
		            /D-E-S-C-R-I-P-T-I-O-N/g,
		            SEORoutes.descriptions[context.route]
		          );

		          context.html = context.html.replace(
		            /S-H-A-R-E-I-M-G/g,
		            SEORoutes.sharerImages[context.route]
		          );

		          context.html = context.html.replace(
		            /U-R-L/g,
		            'https://www.buzzradar.com'+context.route
		          );

		          return context;
	          },

			})
		]
	},

	css: {
		loaderOptions: {
			sass: {
				includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
			}
		}
	},
	
};

















