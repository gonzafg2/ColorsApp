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
      :key="col.id"
      :style="{ 'background-color': col.color }"
    >
      <div class="colors-tag--year">{{ col.year }}</div>
      <div class="colors-tag--name-code">
        <div class="colors-tag--name">{{ col.name }}</div>
        <div class="colors-tag--code">
          {{ col.color }}
        </div>
      </div>
      <div class="colors-tag--pvalue">{{ col.pantone_value }}</div>
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
      .get("https://areqres.in/api/colors")
      .then(response => (this.color = response.data.data))
      .catch(error => {
        console.log(error)
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
