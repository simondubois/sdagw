const Vue = require('vue').default
const Vuex = require('vuex').default

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        figurine: {
            namespaced: true,
            ...require('./figurine.js').default,
            modules: {
                selection: {
                    namespaced: true,
                    ...require('./selection.js').default('figurine|'),
                },
            },
        },
        scenery: {
            namespaced: true,
            ...require('./scenery.js').default,
        },
    },
})
