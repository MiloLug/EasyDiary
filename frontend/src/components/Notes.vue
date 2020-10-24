<template>
	<div class="notes" v-if="show">Notes</div>
</template>

<script>
let name = "Notes";
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
	created(){
		this.$store.dispatch("Fragments/addFragment", {
			name,
			title: "записник",
			selected: this.isDefault
		});
		let th = this;
		th.$store.dispatch("Sidebar/addElement", {
			text: "записник",
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