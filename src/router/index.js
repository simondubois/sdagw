const Vue = require('vue').default
const VueRouter = require('vue-router').default

Vue.use(VueRouter)

const routes = [
    {
        path: '/figurines',
        name: 'figurine',
        redirect: { name: 'figurine-index', params: { force: 'good' } },
    },
    {
        path: '/figurines/:force',
        name: 'figurine-index',
        component: require('../views/FigurineIndex.vue').default,
        meta: { stickyHeader: true },
    },
    {
        path: '*',
        redirect: '/figurines',
    },
]

const router = new VueRouter({
    linkActiveClass: 'active',
    routes,
})

export default router
