/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [
	{
		name: 'home',
		path: '/home',
		component: () => import('../views/Home'),
	},
]
const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
})

export default router
