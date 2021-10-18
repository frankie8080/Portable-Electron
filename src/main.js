import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import global from './components/index'
// import ElementUI from 'element-ui'
// import draggable from 'vuedraggable'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/global.scss'
// Vue.component('draggable', draggable)
// Vue.use(ElementUI)
// Vue.use(global)

Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
