import Vue from 'vue'
import '@/plugins/composition-api'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/plugins/relation-graph'
import '@/plugins/element-ui'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
    name: 'Root',
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
