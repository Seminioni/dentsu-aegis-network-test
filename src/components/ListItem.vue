<template>
  <li class="list-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
};
</script>

<style scoped>
.list-item {
  list-style-type: none;
  font-size: 14px;
}

.list-item >>> .anchor {
  padding: 2px;
}

.list-item:not(:last-of-type) {
  margin-bottom: 20px
}
</style>
