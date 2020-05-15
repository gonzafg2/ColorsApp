<template>
  <main class="colors-grid mx-md-5 mt-2">
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
      :key="col.id"
      :style="{ 'background-color': col.color }"
      v-b-tooltip.hover
      title="Haz clic sobre el color para copiarlo al portapapeles."
    >
      <router-link
        :to="{
          name: 'Copy',
          params: {
            name: col.name,
            year: col.year,
            color: col.color,
            pvalue: col.pantone_value
          }
        }"
      >
        <div v-clipboard="col.color">
          <div class="colors-tag--year">{{ col.year }}</div>
          <div class="colors-tag--name-code">
            <div class="colors-tag--name">{{ col.name }}</div>
            <div class="colors-tag--code">
              {{ col.color }}
            </div>
          </div>
          <div class="colors-tag--pvalue">{{ col.pantone_value }}</div>
        </div>
      </router-link>
    </section>
    <section class="colors-page">
      <router-link :to="{ name: 'MainP1' }">&#8592; Anterior</router-link>
      <div class="colors-page--site">Página 2</div>
      <router-link :to="{ name: 'MainP2' }">Siguiente &#8594;</router-link>
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
      // Pruebo con datos de arreglo propio de forma exitosa.
      //
      // colors: [
      //   {
      //     id: 1,
      //     year: "2006",
      //     name: "Sand dollar",
      //     code: "#DECDBE",
      //     pvalue: "13-1106"
      //   },
      //   {
      //     id: 2,
      //     year: "2006",
      //     name: "Sand dollar",
      //     code: "#DECDBE",
      //     pvalue: "13-1106"
      //   },
      //   {
      //     id: 3,
      //     year: "2006",
      //     name: "Sand dollar",
      //     code: "#DECDBE",
      //     pvalue: "13-1106"
      //   },
      //   {
      //     id: 4,
      //     year: "2006",
      //     name: "Sand dollar",
      //     code: "#DECDBE",
      //     pvalue: "13-1106"
      //   },
      //   {
      //     id: 5,
      //     year: "2006",
      //     name: "Sand dollar",
      //     code: "#DECDBE",
      //     pvalue: "13-1106"
      //   }
      // ]
    };
  },
  mounted() {
    axios
      .get("https://reqres.in/api/colors?page=2")
      .then(response => (this.color = response.data.data))
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
