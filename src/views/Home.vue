<template>
  <div class="home-page">
    <ListOfFirstTenUsers />
    <ListOfFirstTenArticles />
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    ListOfFirstTenUsers: () => import('@/components/ListOfFirstTenUsers.vue'),
    ListOfFirstTenArticles: () => import('@/components/ListOfFirstTenArticles.vue'),
  },
};
</script>
