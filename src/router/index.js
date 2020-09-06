import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';

Vue.use(VueRouter);

const setTitle = (page = 'home', postfix = 'Articles Viewer') => {
  document.title = `${page} | ${postfix}`;

  return setTitle;
};

const route = {
  meta: {
    setTitle,
  },
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    ...route,
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/views/Articles.vue'),
    ...route,
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: () => import('@/views/Article.vue'),
    ...route,
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/Users.vue'),
    ...route,
  },
  {
    path: '/users/:id',
    component: {
      render(c) {
        return c('router-view');
      },
    },
    children: [
      {
        path: '',
        name: 'user',
        ...route,
        component: () => import('@/views/User.vue'),
      },
      {
        path: 'articles',
        name: 'user articles',
        ...route,
        component: () => import('@/components/UserArticles.vue'),
      },
    ],
  },
  {
    path: '*',
    props: true,
    name: 'page-not-found',
    ...route,
    component: () => import('@/components/NotFound.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  to.meta.setTitle(to.name);

  if (store.state.users.length === 0 || store.state.articles.length === 0) {
    await store.dispatch('fetchPostsAndUsers');
  }
  next();
});

export default router;
