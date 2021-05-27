import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import dependencies from './plugins/dependencies'

Vue.config.productionTip = false

new Vue({
  vuetify,
  dependencies,
  render: (h) => h(App),
}).$mount('#app')
