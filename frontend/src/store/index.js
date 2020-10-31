import { createStore } from 'vuex'
import Sidebar from './modules/Sidebar';
import Fragments from './modules/Fragments';
import dataAPI from './modules/dataAPI';
import LoadingScreen from './modules/LoadingScreen';
import WorkViewer from './modules/WorkViewer';

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
		dataAPI,
		LoadingScreen,
		WorkViewer
	}
})