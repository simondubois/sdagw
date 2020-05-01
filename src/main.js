const Vue = require('vue').default

Vue.config.productionTip = false

const files = require.context('./components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

new Vue({
    i18n: require('./i18n').default,
    render: h => h(require('./App.vue').default),
    router: require('./router').default,
    store: require('./store').default,
}).$mount('#app')
