<template>
  <List heading="Recent users">
    <ListItem v-for="user in firstTenUsers" class="list-item" :key="user.id">
      <Anchor :to="`/users/${user.id}`">{{ user.name | capitalize }} - {{ user.username }}</Anchor>
    </ListItem>
  </List>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListOfFirstTenUsers',

  computed: {
    ...mapGetters([
      'trim',
    ]),
    firstTenUsers() {
      return this.trim('users', 9);
    },
  },
};
</script>
