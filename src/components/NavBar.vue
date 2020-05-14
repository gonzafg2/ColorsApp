<template>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand :href="ColorsApp">
      <img
        src="@/assets/img/logo.png"
        class="d-inline-block align-top"
        alt="Vue-JS"
      />
      ColorsApp
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto mr-5 nav-items">
      <router-link to="/about" class="link-about"
        >Sobre esta Aplicación</router-link
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      ColorsApp: "/"
    };
  }
};
</script>
