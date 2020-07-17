import Vue from 'vue'
import App from './App.vue'
import apolloProvider from './vue-apollo';
import store from './store';

Vue.config.productionTip = false

new Vue({
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
