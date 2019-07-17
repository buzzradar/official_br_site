const path = require('path'); 

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/newbrsite/' : '/',

	css: {
		loaderOptions: {
			sass: {
				includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
			}
		}
	},
	
};



