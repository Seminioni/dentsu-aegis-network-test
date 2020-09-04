import { ARTICLE_BODY_PREVIEW_LENGTH } from '@/modules/const.js';

const trimArticleBody = (string) => {
  return string && string.length <= ARTICLE_BODY_PREVIEW_LENGTH
    ? string
    : string.slice(0, ARTICLE_BODY_PREVIEW_LENGTH);
};

export class Article {
  constructor(article) {
    this.isArticleVisited = false;
    this.body = article.body;
    this.bodyPreview = trimArticleBody(article.body);
    this.title = article.title;
    this.id = article.id;
    this.userId = article.userId;
  }
}
