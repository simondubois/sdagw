const Vue = require('vue').default
const VueRouter = require('vue-router').default

Vue.use(VueRouter)

const routes = [
    {
        path: '/scenarios',
        name: 'scenario-index',
        component: require('../views/ScenarioIndex.vue').default,
        meta: { stickyHeader: true },
    },
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
        path: '/sceneries',
        name: 'scenery-index',
        component: require('../views/SceneryIndex.vue').default,
        meta: { stickyHeader: true },
    },
    {
        path: '*',
        redirect: '/scenarios',
    },
]

const router = new VueRouter({
    linkActiveClass: 'active',
    routes,
})

export default router
