<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
    <section class="colors-page mx-5">
      <router-link to="/MainP1">Anterior</router-link>
      <router-link to="/MainP2">Siguiente</router-link>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
