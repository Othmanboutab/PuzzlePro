<template>
  <div>
    <navbar></navbar>
  </div>

  <section class="onepost">
    <h1 class="card_titl">{{ post.label }}</h1>
    <img
      class="card_image"
      src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg"
    />
    <p class="card_content">{{ post.content }}</p>
  </section>

  <section class="onecomment">
    <form class="form" @submit.prevent="addtocomment()">
      <input type="text" v-model="comment" class="comment" id="comment" />
      <button class="btn" type="submit">Ajouter</button>
    </form>
    <p class="listesofcomment">Listes des commentaires :</p>
    <p class="cmt" v-for="comment in commentlist" :key="comment">
      {{ comment }}
    </p>
  </section>
</template>

<script>
import navbar from "../components/navbar.vue";
import { posts } from "../data/data";

export default {
  name: "article",
  components: {
    navbar,
  },

  data() {
    return {
      posts: posts,
      post: null,
      comment: "",
      commentlist: [],
    };
  },

  created() {
    let id = this.$route.params.id;
    this.post = this.getpost(id);
  },

  methods: {
    getpost(id) {
      let match = null;
      this.posts.forEach(function (post) {
        if (post.id == id) {
          match = post;
        }
      });
      return match;
    },

    addtocomment() {
      this.commentlist.push(this.comment);
      this.comment = null;
    },
  },
};
</script>

<style scoped>
body {
  background-color: rgb(31, 31, 31);
}

.onepost {
  max-width: 800px;
  margin: auto;
  margin-top: 40px;
}

.card_titl {
  color: white;
  margin-bottom: 20px;
}

.card_image {
  width: 800px;
  height: 300px;
}

.card_content {
  margin-top: 30px;
  color: white;
  font-size: 17px;
}

.onecomment {
  max-width: 800px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form {
  position: relative;
}

.listesofcomment {
  margin-top: 40px;
  color: white;
}

.comment {
  width: 600px;
  height: 80px;
}

.btn {
  background-color: yellow;
  padding: 10px 30px;
  color: white;
  position: absolute;
  right: 15px;
  bottom: 20px;
  border: none;
  color: black;
}

.cmt {
  color: white;
  margin-top: 30px;
  border-bottom: 1px solid rgb(83, 83, 83);
  padding-bottom: 10px;
}
</style>
