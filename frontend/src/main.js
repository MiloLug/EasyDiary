import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import MdIcons from 'vue-ionicons/dist/ionicons-md.js'
import IosIcons from 'vue-ionicons/dist/ionicons-ios.js'
import VueTouch from './modules/VueTouch'

createApp(App)
	.use(store)
	.use(MdIcons)
	.use(IosIcons)
	.use(VueTouch, {name: 'v-touch'})
	.mount('#app')
