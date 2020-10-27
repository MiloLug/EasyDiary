<template>
	<div class="header">
		<div class="body">
			<button class="menu-btn" v-on:click="showSidebar">
				<ios-menu-icon/>
			</button>
			<div class="content">{{title}}</div>
			<div class="avatar"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	computed: {
		title(){
			let sel = this.$store.state.Fragments.selected;
			if(sel)
				return this.$store.state.Fragments.items[sel] && this.$store.state.Fragments.items[sel].title;
			else
				return "";		
		}
	},
	methods:{
		showSidebar(){
			this.$store.commit("Sidebar/show");
		}
	}
}
</script>

<style lang="scss" scoped>
.header{
	width: 100%;
	top:0;
	left:0;
	height: $header-height;

	position:absolute;
	background: $color-light;
	z-index: $layers-header;
	border-radius: 0 0 $round-xl $round-xl;
	box-shadow: $shadow-light;
	display: flex;
	
	.body{
		display: flex;
		align-items: center;
		padding: 0px 16px;
		width: 100%;

		.menu-btn{
			font-size: 50px;
			display: flex;
		}

		.content{
				width: 100%;
				position: absolute;
				text-align: center;
				left: 0;
				font-weight: 900;
				font-size: 28px;
				z-index: -1;
		}
	}
}
</style>