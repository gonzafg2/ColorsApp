<template>
  <main class="colors-grid mx-md-5 mt-2">
    <header class="colors-grid--title">
      <h1>Colores</h1>
    </header>
    <section
      class="colors-tag-copy__copied"
      :style="{ 'background-color': $route.params.color }"
    >
      <div class="colors-tag--year">{{ $route.params.year }}</div>
      <div class="colors-tag--name-code">¡Copiado!</div>
      <div class="colors-tag--pvalue">{{ $route.params.pvalue }}</div>
    </section>

    <section class="colors-page">
      <router-link :to="{ name: 'MainP1' }">&#8592; Página 1</router-link>
      <div class="colors-page--site">
        {{ $route.params.name }}
      </div>
      <router-link :to="{ name: 'MainP2' }">Página 2 &#8594;</router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: "Copy",
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      col: [],
    };
  },
};
</script>
