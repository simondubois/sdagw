export default {

    state: {
        all: require('./sceneries'),
    },

    getters: {
        all: state => state.all
            .filter((scenery, index) => index !== 'selection')
            .map(({ id, rules }) => ({ id, img: require('../assets/sceneries/' + id + '.jpg'), rules })),
        find: (state, getters) => id => getters.all.find(scenery => scenery.id === id),
        selected: (state, getters) => getters.all.filter(scenery => getters['selection/find'](scenery.id)),
    },

    mutations: {
    },

    actions: {
        select: ({ dispatch }, id) => dispatch('selection/update', { id, quantity: 1 }),
        unselect: ({ dispatch }, id) => dispatch('selection/update', { id, quantity: 0 }),
    },

}
