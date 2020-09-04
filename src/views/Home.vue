<template>
  <div class="home-page">
    <ListOfFirstTenUsers />
    <ListOfFirstTenArticles />
  </div>
</template>

<script>
import ListOfFirstTenUsers from '@/components/ListOfFirstTenUsers.vue';
import ListOfFirstTenArticles from '@/components/ListOfFirstTenArticles.vue';

export default {
  name: 'Home',

  components: {
    ListOfFirstTenUsers,
    ListOfFirstTenArticles,
  },
};
</script>
