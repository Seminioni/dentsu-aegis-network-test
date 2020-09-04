<template>
  <List heading="Recent articles">
    <ListItem  v-for="article in firstTenArticles" class="list-item" :key="article.id">
      <Anchor :to="`/articles/${article.id}`">{{ `${article.bodyPreview}` | capitalize }}</Anchor>
    </ListItem>
  </List>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListOfFirstTenArticles',

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
