const fs = require('fs');
const path = require('path'); 
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;


//This is only to add the info for each CASE Study
const readFileAsync = (FILE_NAME) => {
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

        //Run through all the case studies to create the slugs, titles and images
        dataJson.casesentries.forEach(function(caseStudy) {

		  //Slugs (Array)
		  SEORoutes.slugs.push('/casestudies/'+caseStudy.slug);
		  //Titles (Object)
		  SEORoutes.titles['/casestudies/'+caseStudy.slug] = caseStudy.title;
		  //Descriptions (Object)
		  SEORoutes.descriptions['/casestudies/'+caseStudy.slug] = 'Find out how Buzz Radar has helped a wide range of organisations gain critical insights from their data.';
		  //Sharer Images (Object)
		  SEORoutes.sharerImages['/casestudies/'+caseStudy.slug] = '/public_assets/casestudies/'+caseStudy.thumb;
		});

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

// After that we run the function readFileAsync to load all the Casestudies and 
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
	],
	titles : {
	    '/': 'Buzz Radar - Real Time Social Media Intelligence Made Easy',
	    '/realtimedashboard': 'Real-Time Dashboard',
	    '/aiaudienceanalysis': 'Audience AI',
	    '/marketingintelplatform': 'Marketing Intelligence Platform',	   
	  	'/marketingintelplatform/socialintelligence' : 'Social Intelligence',
	  	'/marketingintelplatform/paidmedia': 'Paid Media Analysis',
	  	'/marketingintelplatform/newspr': 'News & PR Monitoring',
	},
	descriptions : {
	    '/': 'Buzz Radar is the leading social intelligence platform designed for marketers rather than analysts. Providing powerful, easy to digest actionable insights.',
	    '/realtimedashboard': 'Easily turn your data into fast accessible and actionable data visualisations for your entire organisation.',
	    '/aiaudienceanalysis': 'Find out what really makes your customers tick with the psychometric audience analysis.',
	    '/marketingintelplatform': 'In a few clicks take your organisations marketing data and turn it into actionable, intelligent insights.',	   
	  	'/marketingintelplatform/socialintelligence' : 'Access award-winning social media listening and monitoring intelligence across the major networks.',
	  	'/marketingintelplatform/paidmedia': 'Smart easy to digest insights on your performance for Facebook Ads and Google Adwords.',
	  	'/marketingintelplatform/newspr': 'Capture and analyse data from all your PR campaigns from across over 3 Million news outlets and blogs.',
	},
	sharerImages : {

		//If you need to get the thumbs from public folder: /public_assets/...
		//To apply the sharer relative, you need to add ../ when there is one folder and ../../ where there are 2 folders into the tree.

	    '/': 'https://www.buzzradar.com/sharer.gif',
        '/realtimedashboard': 'https://www.buzzradar.com/sharer_dashboard.jpg',
        '/aiaudienceanalysis': 'https://www.buzzradar.com/sharer_ai_audience_analysis.gif',
        '/marketingintelplatform': 'https://www.buzzradar.com/sharer_marketing_platform.gif',
	  	'/marketingintelplatform/socialintelligence' : 'https://www.buzzradar.com/sharer_marketing_platform.gif',
	  	'/marketingintelplatform/paidmedia': 'https://www.buzzradar.com/sharer_marketing_platform.gif',
	  	'/marketingintelplatform/newspr': 'https://www.buzzradar.com/sharer_marketing_platform.gif',
	},
};
// readFileAsync('./src/statics/CaseStudiesEntries.json');






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
			  }),
			  minify : true,
			  postProcess: function (context) {

				  context.html = context.html.replace(
		            /<title>[^<]*<\/title>/i,
		            '<title>' + SEORoutes.titles[context.route] + '</title>'
		          );

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

		       //    if (renderedRoute.route == '/casestudies') {
			      // 	context.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
			      // }

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

















