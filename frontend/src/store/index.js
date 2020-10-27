import { createStore } from 'vuex'
import Sidebar from './modules/Sidebar';
import Fragments from './modules/Fragments';
import dataAPI from './modules/dataAPI';

export default createStore({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		Sidebar,
		Fragments,
		dataAPI
	}
})
