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

<style lang="scss">
body {
  background-color: #90e0f1;
  font-size: 16px;
}

h1, h2, h3, h4 {
  margin-top: 2px;
  margin-bottom: 2px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b1b7c;
  text-align: left;
  padding: 10px;
}

.main {
  padding-left: 15px;
}
</style>
