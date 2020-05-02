const Vue = require('vue').default
const VueRouter = require('vue-router').default

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/',
    },
]

const router = new VueRouter({
    linkActiveClass: 'active',
    routes,
})

export default router
