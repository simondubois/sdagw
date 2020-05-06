export default prefix => ({

    state: {
        selections: new Array(localStorage.length)
            .fill(undefined)
            .map((value, index) => ({
                prefix: localStorage.key(index).substr(0, prefix.length),
                id: localStorage.key(index).substr(prefix.length),
                quantity: parseInt(localStorage.getItem(localStorage.key(index))),
            }))
            .filter(selection => selection.prefix === prefix && selection.quantity > 0)
            .map(({ prefix, ...selection }) => selection),
    },

    getters: {
        find: state => id => state.selections.find(selection => selection.id === id),
        quantity: (state, getters) => id => getters.find(id) ? getters.find(id).quantity : 0,
    },

    mutations: {
        add: (state, { id, quantity }) => {
            window.localStorage.setItem(prefix + id, quantity)
            state.selections = [...state.selections, { id, quantity }]
        },
        delete: (state, id) => {
            window.localStorage.removeItem(prefix + id)
            state.selections = state.selections.filter(selection => selection.id !== id)
        },
        update: (state, { id, quantity }) => {
            window.localStorage.setItem(prefix + id, quantity)
            state.selections = state.selections.map(selection => ({
                id: selection.id,
                quantity: selection.id === id ? quantity : selection.quantity,
            }))
        },
    },

    actions: {
        empty: ({ commit, state }) => state.selections.forEach(selection => commit('delete', selection.id)),
        update: ({ commit, getters }, { id, quantity }) => {
            if (quantity <= 0) {
                commit('delete', id)
            } else if (getters.find(id)) {
                commit('update', { id, quantity })
            } else {
                commit('add', { id, quantity })
            }
        },
    },

})
