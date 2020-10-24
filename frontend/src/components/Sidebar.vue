<template>
	<div class="sidebar" v-bind:class="{show: show}">
		<div class="bg" v-on:click="hide"></div>
		<div class="body">
			<ul>
				<li class="item name">
					Name<br>Lastname
				</li>
				<li class="item" v-for="(item,index) in items" :key="item.action" 
						v-bind:class="{active: item.selected}"
						v-on:click="$store.dispatch('Sidebar/onItemClick', index)">
					{{item.text}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
	computed: {
		show(){
			return this.$store.state.Sidebar.show;
		},
		items(){
			return this.$store.state.Sidebar.items;
		}
	},
	methods: {
		hide(){
			this.$store.commit("Sidebar/hide");
		}
	}
}
</script>

<style lang="scss" scoped>
.sidebar{
	z-index: $layers-sidebar;
	position:absolute;
	top:0;
	left:0;
	width:0;
	height:0;
}
.bg{
	background: rgba(0, 0, 0, .35);
	display: none;
	position:fixed;
	width:100%;
	height:100%;
	top:0;
	left:0;
}

.body{
	width: $sidebar-width;
	left: -$sidebar-width;
	position: fixed;
	height: 100%;
	background: $color-light;
	// border-radius: 0 $round-lg $round-lg 0;
	transition: left .3s;
	box-shadow: $shadow-light;

	.item{
		font-size: 18px;
		min-height: 34px;
		width: 220px;
		display: flex;
		align-items: center;
		padding: 10px;
		margin-bottom: 10px;

		&.active{
			background: $color-white;
			border-left: 6px solid black;
			border-radius: 0 1500px 1500px 0;
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
		}

		&.name{
			font-size: 25px;
			color: #7A7A7A;
		}
	}
}
.sidebar.show{
	.body{
		left: 0;
	}
	.bg{
		display: block;
	}
}
</style>