import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import msal from 'vue-msal'

Vue.config.productionTip = false
Vue.use(msal, {
  auth: {
    clientId: 'ea0f35d4-1b9d-407e-a67a-66b326af105b'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
