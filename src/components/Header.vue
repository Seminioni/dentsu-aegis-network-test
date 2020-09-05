<template>
  <header class="header">
    <slot name="logo"></slot>

    <nav class="nav">
      <h2>Navigation</h2>

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
  flex-direction: column;
  align-items: flex-start;

  .anchor-logo {
    margin-bottom: 20px;
    margin-right: 50px;
  }
}

.nav {
  *:not(:last-of-type) {
    margin-right: 20px;
  }
}
</style>
