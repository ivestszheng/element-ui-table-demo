import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { createPinia, PiniaVuePlugin } from 'pinia';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(ElementUI);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  render: (h) => h(App),
  pinia,
}).$mount('#app');
