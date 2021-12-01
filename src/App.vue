<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style></style>
