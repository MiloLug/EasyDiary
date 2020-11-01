import Hammer from 'hammerjs'
import { h } from 'vue'

function assign(target) {
	let sources = [], len = arguments.length - 1;
	while (len-- > 0) sources[len] = arguments[len + 1];
	for (let i = 0; i < sources.length; i++) {
		let source = sources[i];
		let keys = Object.keys(source);
		for (let i$1 = 0; i$1 < keys.length; i$1++) {
			let key = keys[i$1];
			target[key] = source[key];
		}
	}
	return target
}
function createProp() {
	return {
		type: Object,
		default: function () { return {} }
	}
}
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}
let directions = {
	up: true,
	down: true,
	left: true,
	right: true,
	horizontal: true,
	vertical: true,
	all: true
};
function guardDirections(options) {
	let dir = options.direction;
	if (typeof dir === 'string') {
		let hammerDirection = 'DIRECTION_' + dir.toUpperCase();
		if (directions[dir] !== undefined && Hammer[hammerDirection] !== undefined) {
			options.direction = Hammer[hammerDirection];
		} else {
			console.warn('[vue-touch] invalid direction: ' + dir);
		}
	}
	return options
}
let config = {
};
let customEvents = {
};
let gestures = [
	'pan', 'panstart', 'panmove', 'panend', 'pancancel', 'panleft', 'panright', 'panup', 'pandown',
	'pinch', 'pinchstart', 'pinchmove', 'pinchend', 'pinchcancel', 'pinchin', 'pinchout',
	'press', 'pressup',
	'rotate', 'rotatestart', 'rotatemove', 'rotateend', 'rotatecancel',
	'swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown',
	'tap'
];

let gestureMap = {
	pan: 'pan',
	panstart: 'pan',
	panmove: 'pan',
	panend: 'pan',
	pancancel: 'pan',
	panleft: 'pan',
	panright: 'pan',
	panup: 'pan',
	pandown: 'pan',
	pinch: 'pinch',
	pinchstart: 'pinch',
	pinchmove: 'pinch',
	pinchend: 'pinch',
	pinchcancel: 'pinch',
	pinchin: 'pinch',
	pinchout: 'pinch',
	press: 'press',
	pressup: 'press',
	rotate: 'rotate',
	rotatestart: 'rotate',
	rotatemove: 'rotate',
	rotateend: 'rotate',
	rotatecancel: 'rotate',
	swipe: 'swipe',
	swipeleft: 'swipe',
	swiperight: 'swipe',
	swipeup: 'swipe',
	swipedown: 'swipe',
	tap: 'tap'
};

let Component = {
	props: {
		options: createProp(),
		tapOptions: createProp(),
		panOptions: createProp(),
		pinchOptions: createProp(),
		pressOptions: createProp(),
		rotateOptions: createProp(),
		swipeOptions: createProp(),
		tag: { type: String, default: 'div' },
		enabled: {
			default: true,
			type: [Boolean, Object],
		}
	},
	mounted() {
		if (!this.$isServer) {
			this.$hammer = new Hammer.Manager(this.$el, {...this.options, touchAction: "pan-y"});
			this.$recognizers = {};
			this.$setupBuiltinRecognizers();
			this.$setupCustomRecognizers();
			this.$updateEnabled(this.enabled);
		}
	},
	unmounted() {
		if (!this.$isServer) {
			this.$hammer.destroy();
		}
	},
	watch: {
		enabled: {
			deep: true,
			handler(...args) {
				let ref;
				(ref = this).$updateEnabled.apply(ref, args);
			}
		}
	},
	methods: {
		$setupBuiltinRecognizers() {
			let this_ = this;
			console.log(this);
			for (let gesture of gestures) {
				if (this_.$attrs["on" + capitalize(gesture)]) {
					let mainGesture = gestureMap[gesture];
					let options = {...(config[mainGesture] || {}), ...this_[mainGesture + "Options"]};
					this_.$addRecognizer(mainGesture, options);
					this_.$addEvent(gesture);
				}
			}
		},
		$setupCustomRecognizers() {
			let this_ = this;
			for (let gesture of Object.keys(customEvents)) {
				if (this_.$attrs["on" + capitalize(gesture)]) {
					let opts = customEvents[gesture];
					let localCustomOpts = this_[gesture + "Options"] || {};
					let options = {...opts, ...localCustomOpts};
					this_.$addRecognizer(gesture, options, { mainGesture: options.type });
					this_.$addEvent(gesture);
				}
			}
		},
		$addRecognizer(gesture, options, ref) {
			if (ref === void 0) ref = {};
			let mainGesture = ref.mainGesture;
			if (!this.$recognizers[gesture]) {
				let recognizer = new Hammer[capitalize(mainGesture || gesture)](guardDirections(options));
				this.$recognizers[gesture] = recognizer;
				this.$hammer.add(recognizer);
				recognizer.recognizeWith(this.$hammer.recognizers);
			}
		},
		$addEvent(gesture) {
			let this_ = this;
			this.$hammer.on(gesture, (e) => this_.$emit(gesture, e));
		},
		$updateEnabled(newVal) {
			let this_ = this;
			if (newVal === true) 
				this.$enableAllRecognizers();
			else if (newVal === false)
				this.$disableAllRecognizers();
			else if (typeof newVal === 'object') {
				let keys = Object.keys(newVal);
				for (let event of keys) {
					if (this_.$recognizers[event]) {
						newVal[event]
							? this_.$enableRecognizer(event)
							: this_.$disableRecognizer(event);
					}
				}
			}
		},
		$enableRecognizer(r) {
			let recognizer = this.$recognizers[r];
			if (!recognizer.options.enable) {
				recognizer.set({ enable: true });
			}
		},
		$disableRecognizer(r) {
			let recognizer = this.$recognizers[r];
			if (recognizer.options.enable) {
				recognizer.set({ enable: false });
			}
		},
		$toggleRecognizer(r) {
			let recognizer = this.$recognizers[r];
			if (recognizer) {
				recognizer.options.enable
					? this.$disableRecognizer(r)
					: this.$enableRecognizer(r);
			}
		},
		$enableAllRecognizers() {
			this.$toggleAllRecognizers({ enable: true });
		},
		$disableAllRecognizers() {
			this.$toggleAllRecognizers({ enable: false });
		},
		$toggleAllRecognizers(ref) {
			let this_ = this,
				enable = ref.enable,
				keys = Object.keys(this.$recognizers);
			for (let key of keys) {
				let r = this_.$recognizers[key];
				if (r.options.enable !== enable) {
					r.set({ enable: enable });
				}
			}
		},
		$isRecognizerEnabled(r) {
			return this.$recognizers[r] && this.$recognizers[r].options.enable
		}
	},
	render() {
		return h(this.tag, this.$attrs, this.$slots.default())
	}
};

let installed = false;
let vueTouch = {
	config,
	customEvents,
	component: Component,

	install(Vue, opts) {
		if (opts === void 0) opts = {};
		let name = opts.name || 'v-touch';
		Vue.component(name, assign(Component, { name: name }));
		installed = true;
	},
	registerCustomEvent(event, options) {
		if (options === void 0) options = {};
		if (installed) {
			console.warn(("\n      [vue-touch]: Custom Event '" + event + "' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      "));
			return
		}
		options.event = event;
		customEvents[event] = options;
		Component.props[(event + "Options")] = {
			type: Object,
			default: function default$1() { return {} }
		};
	}
};

export default vueTouch;