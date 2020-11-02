/*eslint-disable no-undef*/
let storage = typeof(InternalStorage) != 'undefined' ? {
	write(file, data){
		InternalStorage.write(file, JSON.stringify(data));
	},
	read(file){
		let r = JSON.parse(InternalStorage.read(file));
		if(r.ok)
			return JSON.parse(r.data);
		return null;
	},
	exists(file){
		return InternalStorage.exists(file);
	}
} : {
	write(file, data){
		localStorage.setItem(file, JSON.stringify(data));
	},
	read(file){
		let r = localStorage.getItem(file);
		if(r != null)
			return JSON.parse(r);
		return null;
	},
	exists(file){
		return localStorage.getItem(file) != null;
	}
};

/*eslint-enable no-undef*/
let API = {
	address: 'https://4417c1e5a732.ngrok.io/',
	async call(path, parameters = null){
		return fetch(API.address + path, {
			method:"POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(parameters || {})
		}).then(r=>{
			return r.json();
		});
	}
};

let storageAPIUtils = {
	mergeArraysById(a, b){
		let keys = {};
		let tmp = [...a];
		for(let i = 0, len = a.length; i < len; i++){
			keys[a[i].id] = i;
		}
		for(let item of b){
			if(keys[item.id] !== undefined){
				tmp[keys[item.id]] = item;
			}else{
				tmp.push(item);
			}
		}
		return tmp;
	},
	async getUpdates(dataClass){
		let tmp;
		let req;
		if(storage.exists(dataClass) && (tmp = storage.read(dataClass)).data){
			try{
				req = await API.call('student/get'+dataClass, {
					lastVersion: tmp.lastVersion || null
				});
				if(req.hasUpdates){
					if(Array.isArray(req.data)){
						tmp.data = storageAPIUtils.mergeArraysById(tmp.data, req.data);
					}else{
						Object.assign(tmp.data, req.data);
					}
					tmp.lastVersion = req.lastVersion;
				}
				storage.write(dataClass, tmp);
			// eslint-disable-next-line no-empty
			}catch(e){}
		}else{
			try{
				tmp = {};
				req = await API.call('student/get'+dataClass, {
					lastVersion: null
				});
				tmp.data = req.data;
				tmp.lastVersion = req.lastVersion;
				storage.write(dataClass, tmp);
			}catch(e){
				return false;
			}
		}
		return tmp;
	}
};

export default {
	namespaced: true,

	state: ()=>({
		subjects: {},
		works: {}
	}),

	mutations: {
		updateSubjects(state, subjects){
			state.subjects = subjects;
		},
		updateWorks(state, works){
			state.works = works;
		}
	},

	actions: {
		async updateSubjects(context){
			let tmp = await storageAPIUtils.getUpdates("Subjects");
			if(tmp){
				tmp = tmp.data.reduce((acc, item)=>(acc[item.id] = item, acc),{});
				context.commit('updateSubjects', tmp);
			}
		},
		async updateWorks(context){
			let tmp = await storageAPIUtils.getUpdates("Works");
			if(tmp){
				tmp = tmp.data.reduce((acc, item)=>(acc[item.id] = item, acc),{});
				context.commit('updateWorks', tmp);
			}
		}
	},

	getters:{
		getWorkById: (state, getters) => id => {
			return {
				data_text: state.works[id].data_text,
				subject: getters.getSubjectById(state.works[id].subj_id)
			};
		},
		getSubjectById: state => id => {
			return state.subjects[id];
		}
	}
}