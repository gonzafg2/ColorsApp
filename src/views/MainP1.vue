<template>
  <main class="colors-grid mx-5 mt-2">
    <header class="colors-grid--title">
      <h1>Colores</h1>
    </header>
    <section v-if="errored" style="grid-column: 1 / 4" class="display-4 mt-5">
      <p>
        Lo sentimos, no es posible obtener la información en este momento, por
        favor intente nuevamente mas tarde.
      </p>
    </section>
    <section
      v-else
      class="colors-tag"
      v-for="col in color"
      v-clipboard="col.color"
      :key="col.id"
      :style="{ 'background-color': col.color }"
    >
      <router-link to="/ColorCopied">
        <div class="colors-tag--year">{{ col.year }}</div>
        <div class="colors-tag--name-code">
          <div class="colors-tag--name">{{ col.name }}</div>
          <div class="colors-tag--code">
            {{ col.color }}
          </div>
        </div>
        <div class="colors-tag--pvalue">{{ col.pantone_value }}</div>
      </router-link>
    </section>
    <section class="colors-page">
      <router-link to="/Page1">&#8592; Anterior</router-link>
      <div class="colors-page--site">Página 1</div>
      <router-link to="/Page2">Siguiente &#8594;</router-link>
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
  },
  methods: {}
};
</script>
