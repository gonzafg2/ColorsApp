<template>
  <main>
    <section
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
