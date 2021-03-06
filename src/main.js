// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import app from './components/app.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './commen/css/commen.styl'

Vue.use(Mint)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})

