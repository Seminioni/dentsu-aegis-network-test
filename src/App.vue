<template>
  <div id="app">
    <Header>
      <template v-slot:logo>
        <Logo />
      </template>

      <template v-slot:nav>
        <Anchor to="/articles">Articles</Anchor>
        <Anchor to="/users">Users</Anchor>
      </template>
    </Header>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Logo from '@/components/Logo.vue';

export default {
  components: {
    Header,
    Logo,
  },
};
</script>

<style lang="scss" src="@/assets/styles.scss" />
