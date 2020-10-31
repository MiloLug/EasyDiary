<template>
	<div class="work-viewer" v-bind:class="{show: shown}">
		<div class="body" ref="work-viewer-body">
			<div class="bg" v-on:click="hide"></div>
			<div class="box">
				<div class="title">
					{{subject_title}}
					<hr>
				</div>
				<div v-html="work_content"></div>
			</div>
		</div>
	</div>
</template>

<script>
let name = "WorkViewer";
export default {
	name,
	data(){
		return {};
	},
	watch: {
		shown: function () {
			this.$refs["work-viewer-body"].scrollTop = 0;
		}
	},
	computed: {
		shown(){
			return this.$store.state.WorkViewer.show;
		},
		subject_title(){
			return this.$store.state.WorkViewer.content.subject_title;
		},
		work_content(){
			return this.$store.state.WorkViewer.content.text.replace(/(\r\n|\n)/gmi, '<br>');
		}
	},
	methods: {
		hide(){
			this.$store.commit("WorkViewer/hide");
		}
	}
}
</script>

<style lang="scss" scoped>
	.work-viewer{
		z-index: $layers-sidebar;
		position:absolute;
		top:0;
		left:0;
		width:0;
		height:0;
	}
	.bg{
		background: $color-backdrop;
		display: none;
		position:fixed;
		width:100%;
		height:100%;
		top:0;
		left:0;
	}

	.body{
		width:100%;
		height:100%;
		overflow-y:auto;
		position:fixed;

		.box{
			.title{
				font-size: 22px;
				margin-bottom: 15px;
				text-align: center;
				hr {
					height: 1px;
					background: black;
				}
			}

			position: absolute;
			width: 90%;
			left: 5%;
			top: 10%;
			border-radius: $round-lg;
			padding: 10px 30px;
			display: inline-block;
			height: auto;
			background: $color-light;
			box-shadow: $shadow-light;
		}

		top:100%;
		transition: top .3s;
	}
	.work-viewer.show{
		.body{
			top: 0%;
		}
		.bg{
			display: block;
		}
	}
</style>