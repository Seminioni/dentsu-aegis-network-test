<template>
  <Anchor class="anchor-logo" to="/">
    <img class="logo" :src="require('@/assets/images/logo.png')" alt="Article viewer's logo">
  </Anchor>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style scoped>
.logo {
  width: 140px;
  height: 140px;
}
</style>
