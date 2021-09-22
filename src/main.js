import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: () => ({
    isMobile: true
  }),
  render: function (h) { return h(App) },
  created: function () {
    this.isMobile = /mobile/i.test(window.navigator.userAgent);
  }
}).$mount('#app')
