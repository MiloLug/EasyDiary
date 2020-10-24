module.exports = {
	publicPath: './',
	css:{
		loaderOptions: {
			sass: {
				prependData:
`@import "@/scss/variables.scss";
@import "~vue-ionicons/ionicons.scss";`
			}
		}
	}
}