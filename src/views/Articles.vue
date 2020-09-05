<template>
  <div class="articles-page">
    <List heading="Articles">
      <ListItem v-for="article in $store.state.articles" class="article-preview" :key="article.id">
        <h3 class="article-heading">
          <ArticleAnchor
            class="article-anchor"
            :to="`/articles/${article.id}`"
            :is-article-visited="article.isArticleVisited">
            {{ article.title | capitalize }}
          </ArticleAnchor>
        </h3>
        <div class="article-body">{{ article.bodyPreview | capitalize }}</div>
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
