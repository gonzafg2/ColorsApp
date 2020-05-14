<template>
  <main class="colors-grid mx-md-5 mt-2">
    <header class="colors-grid--title">
      <h1>Colores</h1>
    </header>

    <section class="colors-tag-copy__copied">
      <div class="colors-tag--name-code">
        Esta aplicación fue realizada tomando los datos de la paleta de colores
        obtenidos de esta API
        <a href="https://reqres.in/api/colors">https://reqres.in/api/colors</a>
        generada por nuestra empresa. Esto con el objetivo de facilitar la
        visualización y copiado de los códigos hexadecimales de colores dentro
        de la paleta institucional.
      </div>
    </section>

    <section class="colors-page">
      <router-link to="/Page1">&#8592; Página 1</router-link>
      <div class="colors-page--site">Sobre esta aplicación</div>
      <router-link to="/Page2">Página 2 &#8594;</router-link>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.colors-tag-copy__copied {
  color: #000;
  box-shadow: -2px 4px 1px #fff;
  .colors-tag--name-code {
    font-size: 3rem;
  }
  & a {
    text-decoration: underline;
  }
}
@media screen and (max-width: 767px) {
  .colors-tag-copy__copied {
    color: #000;
    box-shadow: -2px 4px 1px #fff;
    .colors-tag--name-code {
      font-size: 1rem;
    }
    & a {
      text-decoration: underline;
    }
  }
  .colors-page {
    grid-column: 1/2;
    font-size: 0.75rem;
    line-height: 1.8;
  }
  .colors-page--site {
    font-size: 0.8rem;
  }
  .nav-items a.link-about {
    font-size: 0.7rem;
  }
}
</style>
