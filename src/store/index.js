import Vue from 'vue';
import Vuex from 'vuex';
import { fetchArticles, fetchUsers } from '@/modules';
import { getArticleById, getUserById, getUserArticlesById } from './getters/getters.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    articles: [],
  },
  mutations: {
    UPDATE_USERS(state, users) {
      state.users = users;
    },
    UPDATE_ARTICLES(state, articles) {
      state.articles = articles;
    },
    UPDATE_ARTICLE(state, [index, article, payload]) {
      state.articles[index] = { ...article, ...payload };
    },
  },
  getters: {
    trim: state => (entity, length) => {
      if (typeof length !== 'number') throw new Error('Parameter length should be a number');

      if (Array.isArray(state[entity]) && state[entity].length <= length) return state[entity];

      return state[entity].slice(0, length);
    },
    getUserById,
    getArticleById,
    getUserArticlesById
  },
  actions: {
    checkArticleIsRead({ getters, state, commit }, articleId) {
      const article = getters.getArticleById(articleId);

      if (article.isArticleVisited) return;

      const index = state.articles.indexOf(article);

      commit('UPDATE_ARTICLE', [index, article, { isArticleVisited: true }]);
    },
    fetchArticles() {
      return fetchArticles();
    },
    fetchUsers() {
      return fetchUsers();
    },
    async fetchPostsAndUsers({ dispatch, commit }) {
      try {
        const [articles, users] = await Promise.all([
          dispatch('fetchArticles'),
          dispatch('fetchUsers'),
        ]);

        commit('UPDATE_ARTICLES', articles);
        commit('UPDATE_USERS', users);
      } catch (e) {
        console.warn(e);
      }
    },
  },
  modules: {},
});
