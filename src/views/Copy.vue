<template>
  <main class="colors-grid mx-5 mt-2">
    <header class="colors-grid--title">
      <h1>Colores</h1>
    </header>
    <section
      class="colors-tag-copy__copied"
      :style="{ 'background-color': '#aaaaaa' }"
    >
      <div class="colors-tag--year">color.year</div>
      <div class="colors-tag--name-code">
        ¡Copiado!
      </div>
      <div class="colors-tag--pvalue">color.pantone_value</div>
    </section>

    <section class="colors-page">
      <router-link to="/Page1">&#8592; Página 1</router-link>
      <div class="colors-page--site">color.name - color.color</div>
      <router-link to="/Page2">Página 2 &#8594;</router-link>
    </section>
  </main>
</template>

<script>
// Importo librería de Axios para traer datos de API como promesa.
import axios from "axios";

export default {
  data() {
    return {
      color: null,
      errored: false
    };
  },
  mounted() {
    axios
      .get("https://reqres.in/api/colors?page=1")
      .then(response => (this.color = response.data.data))
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
