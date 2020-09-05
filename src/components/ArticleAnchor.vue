<template>
  <Anchor
    :to="to"
    :class="{ 'isArticleVisited': isArticleVisited }">
    <slot></slot>
  </Anchor>
</template>

<script>
import Anchor from '@/components/Anchor.vue';

export default {
  name: 'ArticleAnchor',

  props: ['isArticleVisited'],

  extends: Anchor,
};
</script>

<style scoped>
  .isArticleVisited {
    opacity: 0.7;
  }
</style>
