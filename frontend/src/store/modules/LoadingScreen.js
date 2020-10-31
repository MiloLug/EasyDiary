export default {
	namespaced: true,

	state: ()=>({
		show: false
	}),

	mutations: {
		show(state){
			state.show = true;
		},
		hide(state){
			state.show = false;
		}
	}
}