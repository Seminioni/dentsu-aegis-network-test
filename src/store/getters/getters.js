import { cached } from '@/modules';

export const getUserById = state => cached(userId => {
  return state.users.find(user => +user.id === +userId);
});

export const getArticleById = state => cached(articleId => {
  return state.articles.find(article => +article.id === +articleId);
});

export const getUserArticlesById = state => cached(userId => {
  return state.articles.filter(article => +article.userId === +userId);
});
