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
        selected: (state, getters, rootState, rootGetters) => getters.all.find(scenario => {
            return rootGetters['figurine/selected'].length === scenario.figurines.filter(figurine => rootGetters['figurine/selection/quantity'](figurine.id) === figurine.quantity).length &&
                rootGetters['figurine/selected'].length === scenario.figurines.length
        }),
    },

    mutations: {
    },

    actions: {
        select: ({ dispatch, getters }, id) => dispatch('unselect').then(
            () => {
                getters.find(id).figurines.forEach(
                    figurine => dispatch(
                        'figurine/select',
                        { id: figurine.id, quantity: figurine.quantity },
                        { root: true },
                    ),
                )
                getters.find(id).sceneries.forEach(
                    scenery => dispatch('scenery/select', scenery.id, { root: true }),
                )
            },
        ),
        unselect: ({ dispatch, getters }, id) =>
            dispatch('figurine/selection/empty', {}, { root: true })
                .then(() => dispatch('scenery/selection/empty', {}, { root: true })),
    },

}
