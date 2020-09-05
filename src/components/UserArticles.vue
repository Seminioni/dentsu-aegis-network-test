<template>
  <List :heading="`${user.name} articles`">
    <ListItem v-for="article in articles" class="article-preview" :key="article.id">
      <h3 class="article-heading">
        <Anchor :to="`/articles/${article.id}`">{{ article.title | capitalize }}</Anchor>
      </h3>
      <div class="article-body">{{ article.bodyPreview }}</div>
    </ListItem>
  </List>
</template>

<script>
import store from '@/store';

export default {
  name: 'UserArticles',

  data() {
    return {
      articles: [],
      user: {},
    };
  },

  beforeRouteEnter(to, from, next) {
    const articles = store.getters.getUserArticlesById(to.params.id);
    const user = store.getters.getUserById(to.params.id);

    next(vm => {
      vm.articles = articles;
      vm.user = user;
    });
  },
};
</script>
