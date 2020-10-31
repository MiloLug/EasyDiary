export default {
	namespaced: true,

	state: ()=>({
		show: false,
		content: {
			subject_title: "",
			text: ""
		}
	}),

	mutations: {
		setData(state, work){
			state.content.text = work.data_text;
			state.content.subject_title = work.subject.title;
		},
		show(state){
			state.show = true;
		},
		hide(state){
			state.show = false;
		}
	},

	actions: {
		async show(context, workId){
			let work = context.rootGetters["dataAPI/getWorkById"](workId);
			if(work){
				context.commit('setData', work);
				context.commit('show');
			}
		},
		async hide(context){
			context.commit('hide');
		}
	}
}