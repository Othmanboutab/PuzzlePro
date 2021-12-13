<template>
  <div>
    <navbar />

    <section class="main">
      <div class="hero">
        <h1 class="firstTitle">Bienvenue chez PuzzlePro</h1>
        <h2>10 ans d'expérience sur la création de puzzle</h2>
        <router-link to="/articles" class="btn"
          >Voir la liste des articles</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";

export default {
  name: "home",
  components: {
    navbar,
  },
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
</style>
