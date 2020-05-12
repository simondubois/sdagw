export default {

    state: require('./rules.js').default,

    getters: {
        all: (state, getters, rootState, rootGetters) => state
            .map(
                ({ actions, phase }) => actions.map(
                    ({ instructions, action }) => instructions.map(
                        ({ components = [], figurines = f => f, instruction, sceneries }) => ({
                            action: phase + '-' + action,
                            components: components
                                .map(
                                    ({ figurines: componentFigurines = f => f, ...component }) => ({
                                        ...component,
                                        figurines: componentFigurines(
                                            figurines(rootGetters['figurine/selected']),
                                        ),
                                    }),
                                )
                                .filter(({ figurines }) => figurines.length),
                            figurines: figurines(rootGetters['figurine/selected']),
                            id: phase + '-' + action + '-' + instruction,
                            instruction,
                            phase,
                            sceneries: sceneries ? sceneries(rootGetters['scenery/selected']) : undefined,
                        }),
                    ),
                ),
            )
            .flat(2)
            .filter(
                rule => rule.figurines.length && (rule.sceneries === undefined || rule.sceneries.length),
            ),
        actions: (state, getters) => phase => [
            ...new Set(getters.all.filter(rule => rule.phase === phase).map(rule => rule.action)),
        ],
        instructions: (state, getters) => action => getters.all.filter(rule => rule.action === action),
        phases: (state, getters) => [...new Set(getters.all.filter(rule => rule.action).map(rule => rule.phase))],
    },

    mutations: {
    },

    actions: {
    },

}
