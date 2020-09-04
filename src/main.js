import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import Anchor from '@/components/Anchor.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
import Author from '@/components/Author.vue';

Vue.config.productionTip = false;

Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
})

Vue.component('Anchor', Anchor);
Vue.component('List', List);
Vue.component('ListItem', ListItem);
Vue.component('Author', Author);

(async () => {
  return new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
})();
