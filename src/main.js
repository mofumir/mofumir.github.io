import Vue from 'vue'
import VueMq from 'vue-mq'
import VueParticles from 'vue-particles'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueParticles)

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity
  }
})

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

// do this on last
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
