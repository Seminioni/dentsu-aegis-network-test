import { api, FetchArticlesError } from '@/modules';
import { Article } from '@/entities/Article.js';

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
