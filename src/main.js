import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import styles from './assets/styles/styles.scss'

Vue.config.productionTip = false
Vue.use(styles)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
