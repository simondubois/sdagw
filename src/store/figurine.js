export default {

    state: require('./figurines'),

    getters: {
        all: state => Object.entries(state)
            .filter(([id]) => id !== 'selection' && id !== 'mounts')
            .map(
                ([force, figurines]) => Object.entries(figurines)
                    .map(
                        ([region, figurines]) => Object.entries(figurines)
                            .map(
                                ([army, { hero = false, spells = [], terrifying = false, ...figurines }]) => Object.entries(figurines)
                                    .map(([variant, { equipments = [], max = 1, mount, stats, value }]) => ({
                                        army,
                                        context: force === 'good' ? 'success' : 'danger',
                                        equipments,
                                        force,
                                        hero,
                                        id: region + '|' + army + '|' + variant,
                                        img: require('../assets/figurines/' + region + '|' + army + '|' + variant + '.png'),
                                        mount,
                                        max,
                                        region,
                                        single: Object.entries(figurines).length === 1,
                                        spells,
                                        stats,
                                        terrifying,
                                        value,
                                        variant,
                                    })),
                            )
                            .flat(1),
                    )
                    .flat(1),
            )
            .flat(1)
            .sort((a, b) => b.value - a.value),
        armies: (state, getters) => region => [
            ...new Set(getters.all.filter(figurine => figurine.region === region).map(figurine => figurine.army)),
        ],
        evil: (state, getters) => getters.all.filter(figurine => figurine.force === 'evil'),
        find: (state, getters) => id => getters.all.find(figurine => figurine.id === id) || console.log('Figurine ' + id + ' not found.'),
        findMount: (state, getters) => id => getters.mounts.find(mount => mount.id === id) || console.log('Mount ' + id + ' not found.'),
        good: (state, getters) => getters.all.filter(figurine => figurine.force === 'good'),
        inArmy: (state, getters) => army => getters.all.filter(figurine => figurine.army === army),
        mounts: state => Object.entries(state.mounts).map(
            ([id, stats]) => ({ id, img: require('../assets/figurines/mount|' + id + '.png'), stats }),
        ),
        regions: (state, getters) => force => [...new Set(getters[force].map(figurine => figurine.region))],
        selected: (state, getters) => getters.all
            .map(figurine => ({ ...figurine, quantity: getters['selection/quantity'](figurine.id) }))
            .filter(figurine => figurine.quantity),
        selectionValue: (state, getters) => force =>
            getters.selected
                .filter(figurine => figurine.force === force)
                .reduce((total, figurine) => total + figurine.value * figurine.quantity, 0),
    },

    mutations: {
    },

    actions: {
        select: ({ dispatch, getters }, { id, quantity }) => Promise
            .all(
                getters
                    .inArmy(getters.find(id).army)
                    .filter(figurine => figurine.hero && quantity)
                    .map(figurine => dispatch('selection/update', { id: figurine.id, quantity: 0 })),
            )
            .then(() => dispatch('selection/update', { id, quantity })),
    },

}
