<template>
  <div class="list">
    <h2 class="list-heading">{{ heading }}</h2>

    <ul class="list-body">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',

  props: ['heading'],
};
</script>

<style lang="scss" scoped>
.list-body {
  padding: 3px;
}
</style>
