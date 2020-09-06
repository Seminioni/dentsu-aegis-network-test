<template>
  <p class="author">
    <Anchor :to="`/users/${author.id}/articles`">
      {{author.name | capitalize}} — @{{author.username}}
    </Anchor>
  </p>

</template>

<script>
export default {
  name: 'Author',

  props: {
    author: {
      default: () => {}
    }
  },
};
</script>
