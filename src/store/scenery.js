export default {

    state: {
        all: require('./sceneries'),
    },

    getters: {
        all: state => state.all
            .filter((scenery, index) => index !== 'selection')
            .map(({ id, rules }) => ({ id, img: require('../assets/sceneries/' + id + '.jpg'), rules })),
        find: (state, getters) => id => getters.all.find(scenery => scenery.id === id),
    },

    mutations: {
    },

    actions: {
    },

}
