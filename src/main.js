import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
  

Vue.config.productionTip = false
Vue.use(Toasted, {
  duration: 1000
})
   
new Vue({
  render: h => h(App),
}).$mount('#app')