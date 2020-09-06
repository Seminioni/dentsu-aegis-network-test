<template>
  <div class="article-page">
    <h2 class="article-title">{{ article.title | capitalize }}</h2>
    <div class="article-body">{{ article.body | capitalize }}</div>
    <Author class="article-author" :author="$store.getters.getUserById(article.userId)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Article',

  computed: {
    ...mapGetters(['getArticleById']),

    article() {
      return this.getArticleById(this.$route.params.id);
    },
  },

  created() {
    this.$route.meta.setTitle(this.article.title);
    this.$store.dispatch('checkArticleIsRead', this.article.id);
  },
};
</script>
