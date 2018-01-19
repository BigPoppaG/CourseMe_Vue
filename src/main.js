// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import Objective from './Objectives/Objective.vue'
import ObjectiveList from './Objectives/ObjectiveList.vue'

Vue.use(VueResource);

Vue.config.productionTip = false

Vue.component('app-objective', Objective)
Vue.component('app-objective-list', ObjectiveList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(BootstrapVue);