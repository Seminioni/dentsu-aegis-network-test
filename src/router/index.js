import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'Home | Articles Viewer' },
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/views/Articles.vue'),
    meta: { title: 'Articles | Articles Viewer' },
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: () => import('@/views/Article.vue'),
    meta: { title: 'Article | Articles Viewer' },
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/Users.vue'),
    meta: { title: 'Users | Articles Viewer' },
  },
  {
    path: '/users/:id',
    name: 'user',
    meta: { title: 'User Name | Articles Viewer' },
    component: {
      render(c) {
        return c('router-view');
      },
    },
    children: [
      {
        path: '',
        meta: { title: 'User Name | Articles Viewer' },
        component: () => import('@/views/User.vue'),
      },
      {
        path: 'articles',
        meta: { title: 'Articles | Articles Viewer' },
        component: () => import('@/components/UserArticles.vue'),
      },
    ],
  },
  {
    path: '*',
    props: true,
    name: 'page-not-found',
    meta: { title: 'Page Not Found | Articles Viewer' },
    component: () => import('@/components/NotFound.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || 'Article Viewer';

  if (store.state.users.length === 0 || store.state.articles.length === 0) {
    await store.dispatch('fetchPostsAndUsers');
  }
  next();
});

export default router;
