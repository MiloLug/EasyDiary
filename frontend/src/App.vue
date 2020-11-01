<template>
<div id="app">
	<Header/>
	<Sidebar/>

	<Calendar v-bind:default="true"/>
	<Notes/>
	<WorkViewer/>

	<LoadingScreen/>
	<!-- <img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/> -->
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Calendar from './components/Calendar.vue'
import Notes from './components/Notes.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import WorkViewer from './components/WorkViewer.vue'

export default {
	name: 'App',
	components: {
		Sidebar,
		Calendar,
		Header,
		Notes,
		LoadingScreen,
		WorkViewer
	},
	methods:{
		async appLoading(){
			this.$store.commit('LoadingScreen/show');
			await Promise.all([
				this.$store.dispatch("dataAPI/updateWorks"),
				this.$store.dispatch("dataAPI/updateSubjects")
			]);
			this.$store.commit('LoadingScreen/hide');
		}
	},
	mounted(){
		window.gg = this.$store;
		window.app = this;
		this.appLoading();
	}
}
</script>

<style lang="scss">
@font-face {
	font-family: 'main';
	src: url('./assets/fonts/main/19847.eot');
	src: url('./assets/fonts/main/19847.woff') format('woff'), url('./assets/fonts/main/19847.ttf') format('truetype'), url('./assets/fonts/main/19847.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

*{
	font-family: 'main', Avenir, Helvetica, Arial, sans-serif;
	-webkit-tap-highlight-color: transparent;
	outline: none;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	z-index: $layers-default;
	background: none;
}


#app {
	background: $color-gray;
	position:absolute;
	width:100%;
	height:100%;
	top:0;
	left:0;

	// &>.content{
	// 	padding-top: 30px;
	// }
}
</style>
