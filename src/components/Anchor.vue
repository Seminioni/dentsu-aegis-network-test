<template>
  <router-link class="anchor" :to="to" v-bind="$attrs">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'Anchor',
  props: ['to'],
};
</script>

<style lang="scss" scoped>
.anchor:not(.anchor-logo) {
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  text-decoration: none;
  color: #2b1b7c;
  transition: color, background 0.25s linear;

  &:hover,
  &:focus {
    color: #90e0f1;
    background: #2b1b7c;
  }
}
</style>
