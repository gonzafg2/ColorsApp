<template>
  <main class="colors-grid mx-5 mt-2">
    <header class="colors-grid--title">
      <h1>Colores</h1>
    </header>
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
import axios from "axios";

export default {
  data() {
    return {
      color: null
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
      .get("https://reqres.in/api/colors")
      .then(response => (this.color = response.data.data));
  }
};
</script>
