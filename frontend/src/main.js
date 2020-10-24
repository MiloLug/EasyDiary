import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import MdIcons from 'vue-ionicons/dist/ionicons-md.js'
import IosIcons from 'vue-ionicons/dist/ionicons-ios.js'

createApp(App)
	.use(store)
	.use(MdIcons)
	.use(IosIcons)
	.mount('#app')
