export default {
	namespaced: true,

	state: ()=>({
		items: {},
		selected: ""
	}),

	mutations: {
		addFragment(state, item){
			item = {...item,
				selected: false
			};
			state.items[item.name] = item;
		},
		selectFragment(state, name){
			state.items[state.selected] && (state.items[state.selected].selected = false);
			state.items[name].selected = true;
			state.selected = name;
		}
	},

	actions: {
		// onItemClick(context, index){
		// 	let item = context.state.items[index];
		// 	if(item.action() && item.selectable){
		// 		context.commit('selectItem', index);
		// 	}
		// }
		addFragment(context, item){
			context.commit("addFragment", item);
			if(item.selected)
				context.commit("selectFragment", item.name);
		}
	},
}