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
  border: 1px solid var(--c-black);
  padding: 10px;
  text-decoration: none;
  color: var(--c-text);
  transition: color, background 0.25s linear;

  &:hover,
  &.router-link-exact-active,
  &:focus {
    color: var(--c-background);
    background: var(--c-text);
  }
}
</style>
