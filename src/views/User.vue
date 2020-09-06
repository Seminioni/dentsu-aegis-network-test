<template>
  <div class="user-page">
    <h1 class="user-name">{{ user.name | capitalize }}</h1>
    <p class="user-email">email: {{ user.email }}</p>
    <p class="user-phone">phone: {{ user.phone }}</p>
    <p class="user-username">username: {{ user.username }}</p>
    <p class="user-website">website: {{ user.website }}</p>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'User',

  computed: {
    ...mapGetters(['getUserById']),

    user() {
      return this.getUserById(this.$route.params.id);
    }
  },

  created() {
    this.$route.meta.setTitle(this.user.name)
  }
};
</script>
