import Vue from 'vue'
import ElementUI  from 'element-ui'
import router from './router'
import store from './store'
import App from './App.vue'
import './assets/css/reset.css'

import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
