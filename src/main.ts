import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/plugins/composition-api'
import '@/plugins/relation-graph'

Vue.config.productionTip = false

new Vue({
    name: 'Root',
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
