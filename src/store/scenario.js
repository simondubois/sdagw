export default {

    state: require('./scenarios'),

    getters: {
        all: (state, getters, rootState, rootGetters) => state
            .map(({ figurines, id, ignoredRules = [], sceneries = [] }) => ({
                id,
                ignoredRules,
                img: require('../assets/scenarios/' + id + '.jpg'),
                figurines: Object
                    .entries(figurines)
                    .map(([id, quantity]) => ({ ...rootGetters['figurine/find'](id), quantity }))
                    .sort((a, b) => b.value - a.value),
                sceneries: sceneries.map(id => rootGetters['scenery/find'](id)),
            }))
            .reverse(),
        find: (state, getters) => id => getters.all.find(scenario => scenario.id === id),
    },

    mutations: {
    },

    actions: {
    },

}
