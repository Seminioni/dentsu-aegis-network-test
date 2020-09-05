<template>
  <List heading="Recent articles">
    <ListItem v-for="article in firstTenArticles" class="list-item" :key="article.id">
      <ArticleAnchor
        :to="`/articles/${article.id}`"
        :is-article-visited="article.isArticleVisited">
        {{ `${article.title}` | capitalize }}
      </ArticleAnchor>
    </ListItem>
  </List>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleAnchor from '@/components/ArticleAnchor.vue';

export default {
  name: 'ListOfFirstTenArticles',

  components: { ArticleAnchor },

  computed: {
    ...mapGetters([
      'trim',
    ]),
    firstTenArticles() {
      return this.trim('articles', 9);
    },
  },
};
</script>
