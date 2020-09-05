<template>
  <div class="articles-page">
    <List heading="Articles">
      <ListItem v-for="article in $store.state.articles" class="article-preview" :key="article.id">
        <ArticleAnchor
          :to="`/articles/${article.id}`"
          :is-article-visited="article.isArticleVisited">
          <h3 class="article-heading">{{ article.title | capitalize }}</h3>
        </ArticleAnchor>
        <div class="article-body">{{ article.bodyPreview }}</div>
        <Author class="article-author" :author="$store.getters.getUserById(article.userId)" />
      </ListItem>
    </List>
  </div>
</template>

<script>
export default {
  name: 'Articles',
};
</script>

<style lang="scss" scoped>
.article-preview {
  max-width: 700px;
}

.article-preview .article-author {
  margin-top: 10px;
}
</style>
