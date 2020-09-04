import { api } from '@/modules/api.js';
import { Article } from '@/entities/Article.js';
import { FetchArticlesError } from '@/modules/errors.js';

export const fetchArticles = async () => {
  try {
    const response = await api(`/posts`);

    return response.data.map((item) => {
      return new Article(item);
    });
  } catch (e) {
    throw new FetchArticlesError();
  }
};
