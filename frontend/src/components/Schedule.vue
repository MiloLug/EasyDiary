<template>
	<div class="calendar" v-if="show">
		<div class="header-sized"></div>
		
		<div class="day-list" id="block1">
			<div class="date-range-text active" v-on:click="goToBlock('#block1')">
				1 травня - 5 травня
			</div>
			<div class="day"><div class="dot"></div>понедылок</div>
			<div class="day warning"><div class="dot"></div>вывторок</div>
			<div class="day"><div class="dot"></div>середа</div>
			<div class="day active" v-on:click='$store.dispatch("WorkViewer/show", randomNumber(1,6))'><div class="dot"></div>четвер</div>
			<div class="day warning"><div class="dot"></div>пятниця</div>
		</div>
		<div class="day-list" id="block2">
			<div class="date-range-text"  v-on:click="goToBlock('#block2')">
				7 червень - 12 червень
			</div>
			<div class="day"><div class="dot"></div>понедылок</div>
			<div class="day warning"><div class="dot"></div>вывторок</div>
			<div class="day"><div class="dot"></div>середа</div>
			<div class="day"><div class="dot"></div>четвер</div>
			<div class="day warning"><div class="dot"></div>пятниця</div>
		</div>
		<div class="day-list" id="block3">
			<div class="date-range-text"  v-on:click="goToBlock('#block3')">
				1 травня - 5 травня
			</div>
			<div class="day"><div class="dot"></div>понедылок</div>
			<div class="day warning"><div class="dot"></div>вывторок</div>
			<div class="day"><div class="dot"></div>середа</div>
			<div class="day"><div class="dot"></div>четвер</div>
			<div class="day warning"><div class="dot"></div>пятниця</div>
		</div>
	</div>
</template>

<script>
let name = "Schedule";
export default {
	name,
	props: {
		default: Boolean
	},
	data(){
		return {
			isDefault: this.default
		};
	},
	computed: {
		show(){
			return this.$store.state.Fragments.items[name] && this.$store.state.Fragments.items[name].selected;
		}
	},
	methods: {
		goToBlock: function (selector) {
			document.querySelector(selector).scrollIntoView({ behavior: 'smooth', block: 'start'});
		}
	},
	created(){
		this.$store.dispatch("Fragments/addFragment", {
			name,
			title: "розклад",
			selected: this.isDefault
		});
		let th = this;
		th.$store.dispatch("Sidebar/addElement", {
			text: "розклад",
			action(){
				th.$store.commit("Fragments/selectFragment", name);
				return true;
			},
			selectable: true,
			selected: this.isDefault
		});
	}
}
</script>

<style lang="scss" scoped>

.calendar{
	display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    position: absolute;
    height: 100%;
	width: 100%;
	top: 0;

	.header-sized{
		height: $header-height;
		position: relative;
		background: $color-light;
		z-index: 2;
		flex: none;
	}

	.date-range-text{
		.header-sized{
			background: none;
		}

		margin-top: 50px;
		min-height: 60px;
		width: 92%;
		background: $color-light;
		font-size: 21px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: $shadow-superlight;
		position: relative;
		border-radius: $round-xl;
		z-index: 2;
		position: sticky;
		top: calc(#{$header-height} - 20px);
		border: 1px solid #8080802e;

		&.active{
			color:#4aa57b;
		}
	}

	.day-list{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		// &:first-child .date-range-text{
		// 	margin-top: 25px;
		// }

		.day{
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: $round-xl;
			margin-top: 25px;
			height: 50px;
			width: 290px;
			background: $color-white;
			font-size: 30px;
			box-shadow: $shadow-superlight;
			border: 1px solid #8080802e;
			&.active{
				color:#4aa57b;
			}

			.dot{
				position:absolute;
				height: 14px;
			}
			&.warning .dot::after{
				content: ' ';
				width: 14px;
				height: 14px;
				border-radius: 50%;
				background: #C27474;
				position: absolute;
				margin-left: 115px;
			}
		}
	}
}
</style>