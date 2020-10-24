export default {
	namespaced: true,

	state: ()=>({
		items: [],
		selected: -1,
		show: false
	}),

	mutations: {
		addElement(state, {item, callback}){
			item = {...item,
				selectable: !!item.selectable,
				selected: false
			};
			state.items.push(item);
			callback(state.items.length - 1);
		},
		selectItem(state, index){
			state.items[state.selected] && (state.items[state.selected].selected = false);
			state.items[index].selected = true;
			state.selected = index;
		},
		show(state){
			state.show = true;
		},
		hide(state){
			state.show = false;
		},
		switch(state){
			state.show = !state.show;
		}
	},

	actions: {
		onItemClick(context, index){
			let item = context.state.items[index];
			if(item.action() && item.selectable){
				context.commit('selectItem', index);
			}
			context.commit("hide");
		},
		addElement(context, item){
			context.commit("addElement", {item, callback:(index)=>{
				if(item.selected)
					context.commit('selectItem', index);
			}});
		}
	},
}