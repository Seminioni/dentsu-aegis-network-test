import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import Anchor from '@/components/Anchor.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
import Author from '@/components/Author.vue';
import ArticleAnchor from '@/components/ArticleAnchor.vue';
import { capitalize } from '@/modules';

Vue.config.productionTip = false;

Vue.filter('capitalize', capitalize);

Vue.component('Anchor', Anchor);
Vue.component('ArticleAnchor', ArticleAnchor);
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
