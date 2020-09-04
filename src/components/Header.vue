<template>
  <header class="header">
    <slot name="logo"></slot>

    <nav class="nav">
      <slot name="nav"></slot>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: flex-start;

    .nav {
      margin-top: 11px;
    }

    .anchor-logo {
      margin-right: 50px;
    }
  }

  .nav {
    padding: 20px 0px 0 0;

    *:not(:last-of-type) {
      margin-right: 20px;
    }
  }
</style>
