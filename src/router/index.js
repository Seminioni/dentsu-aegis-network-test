import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Articles from '@/views/Articles.vue';
import Article from '@/views/Article.vue';
import Users from '@/views/Users.vue';
import User from '@/views/User.vue';
import UserArticles from '@/components/UserArticles.vue';

import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles,
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: Article,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  {
    path: '/users/:id',
    name: 'user',
    component: {
      render(c) {
        return c('router-view');
      },
    },
    children: [
      {
        path: '',
        component: User,
      },
      {
        path: 'articles',
        component: UserArticles,
      },
    ],
  },
  {
    path: '*',
    props: true,
    name: 'page-not-found',
    component: () => import('../components/NotFound.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (store.state.users.length === 0 || store.state.articles.length === 0) {
    await store.dispatch('fetchPostsAndUsers');
  }
  next();
});

export default router;
