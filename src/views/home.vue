<template>
  <div>
    <navbar />

    <section class="slide">
      <vueper-slides fade :touchable="false" class="slide">
        <vueper-slide
          v-for="(slide, i) in carouselle"
          :key="i"
          :image="slide.img"
        />
      </vueper-slides>
    </section>

    <section class="main">
      <div class="hero">
        <h1 class="firstTitle">Bienvenue chez PuzzlePro</h1>
        <h2>10 ans d'expériences sur la création de puzzle</h2>
        <router-link to="/articles" class="btn"
          >Voir la liste des articles</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { carouselle } from "../data/data";

export default {
  name: "home",
  components: {
    navbar,
    VueperSlides,
    VueperSlide,
  },

  data: () => ({
    carouselle,
  }),
};
</script>

<style>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(219, 219, 219);
  height: 400px;
  object-fit: cover;
}


.slide {
  background-color: white;
}

.vueperslide {
  width: 600px;
  margin: auto;
  height: 500px;
  object-fit: cover;
}

.firstTitle {
  color: white;
  margin-bottom: 40px;
}

h2 {
  color: rgb(184, 184, 184);
}

.btn {
  padding: 20px;
  background-color: yellow;
  color: black;
  margin-top: 30px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.btn:hover {
  color: black;
  background-color: rgb(238, 238, 125);
}

@media screen and (max-width: 400px) {
  .main {
    height: 800px;
    background: black;
  }

  h2 {
    color: black;
    text-align: center;
  }

  .slide {
    display: none;
  }
}


</style>
