<template>
  <div class="users-page">
    <List heading="Users">
      <ListItem v-for="user in $store.state.users" class="list-item" :key="user.id">
        <Anchor :to="`/users/${user.id}`">{{ `${user.name}` }}</Anchor>
      </ListItem>
    </List>
  </div>
</template>

<script>
export default {
  name: 'Users'
};
</script>
