const Vue = require('vue').default
const VueRouter = require('vue-router').default

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: require('../views/Home.vue').default,
    },
    {
        path: '/about',
        name: 'About',
        component: require('../views/About.vue').default,
    },
]

const router = new VueRouter({
    routes,
})

export default router
