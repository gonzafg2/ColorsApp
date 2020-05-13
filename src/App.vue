<template>
  <div id="app">
    <NavBar></NavBar>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // HelloBar,
    NavBar,
    Main,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
