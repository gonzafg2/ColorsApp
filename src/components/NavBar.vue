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
    <b-nav-nav class="ml-auto mr-5 nav-items">
      <router-link to="/about">Sobre esta Aplicación</router-link>
    </b-nav-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      ColorsApp: "#"
    };
  }
};
</script>
