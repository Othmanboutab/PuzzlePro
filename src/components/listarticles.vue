<template>
  <navbar />
  <div class="search-barre">
    <div>
      <input
        v-model="searchkey"
        type="search"
        id="search"
        placeholder="Rechercher..."
      />
      <span class="result-count" v-if="searchkey && filteredlist.length >= 1">
        {{ filteredlist.length }} résultat<span
          v-if="searchkey && filteredlist.length > 1"
          >s</span
        >
      </span>
    </div>
    <div v-if="filteredlist.length == []" class="no-result">
      <h1>Désolé</h1>
      <h2>aucun résultat trouvé</h2>
    </div>
  </div>

  <section class="allpost">
    <div class="card" v-for="post in filteredlist" :key="post.id">
      <h1 class="card_title">{{ post.label }}</h1>
      <img class="card_img" v-bind:src="post.img" />
      <p class="card_content">{{ post.content }}</p>
      <input
        class="cheekbox"
        type="checkbox"
        name="checkbox"
        v-bind:id="post.id"
        :value="post.id"
        v-model="liked"
      />
      <label v-bind:for="post.id">
        <i class="fas fa-heart"></i>
      </label>

      <router-link
        :to="{ name: 'viewarticle', params: { id: post.id } }"
        class="card_btn"
        >Découvrir</router-link
      >
    </div>
  </section>
</template>

<script>
import navbar from "../components/navbar.vue";
import { posts } from "../data/data";

export default {
  name: "home",

  data() {
    return {
      posts: posts,
      searchkey: "",
      liked: [],
    };
  },

  components: {
    navbar,
  },

  computed: {
    filteredlist() {
      return this.posts.filter((post) => {
        return post.label.toLowerCase().includes(this.searchkey.toLowerCase());
      });
    },
  },
};
</script>

<style>
.allpost {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.search-barre {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  flex-direction: column;
}

.no-result {
  margin-top: 20px;
}

#search {
  width: 300px;
  height: 50px;
  border: none;
  box-shadow: 1px 1px 20px rgb(214, 213, 213);
  border-radius: 20px;
  padding: 0 20px;
}

.result-count {
  margin: 0 20px;
}

.card {
  background-color: white;
  width: 450px;
  height: 750px;
  margin: 20px;
  padding: 20px 20px 0px 20px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 40px;
  box-shadow: 1px 1px 20px rgb(214, 213, 213);
}

.cheekbox {
  display: none;
}

.cheekbox:checked + label i {
  color: red;
  animation: heart 1.3 ease;
  font-size: 30px;
  cursor: pointer;
}

@keyframes heart {
  0% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }
  50% {
    filter: hue-rotate(-270deg);
    transform: scale(1.3);
  }
  100% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }
}

.fa-heart {
  font-size: 26px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.card_title {
  position: relative;
  text-align: center;
}

.card_btn {
  color: black;
  position: absolute;
  bottom: -5%;
  left: 25%;
  background-color: yellow;
  padding: 15px 80px;
  border-radius: 10px;
  font-weight: bold;
}

.card_img {
  display: flex;
  width: 250px;
  margin: 20px auto;
  border-radius: 15px;
}

.card_content {
  text-align: center;
  color: gray;
}

.card_btn:hover {
  color: black;
}
</style>
