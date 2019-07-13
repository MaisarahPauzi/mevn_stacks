import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'
import moment from 'moment'
  
Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
