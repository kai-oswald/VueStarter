import Vue from 'vue'
import axios from 'axios'
import router from './router/index'
import App from 'components/layout'

Vue.prototype.$http = axios

const app = new Vue({
  router,
  ...App
})

export {
  app,
  router
}