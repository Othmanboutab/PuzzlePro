<template>
  <navbar />

  <section class="allpost">
    <div class="card" v-for="post in posts" :key="post.id">
      <h1 class="card_title">{{ post.label }}</h1>
      <img
        class="card_img"
        v-bind:src = "post.img">
      <p class="card_content">{{ post.content }}</p>

      <router-link :to= "{ name: 'viewarticle' , params :{id : post.id}}" class="card_btn">Découvrir</router-link>
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
      
    };
  },


  components: {
    navbar,
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

.card {
  background-color: white;
  width: 450px;
  height: 650px;
  margin: 20px;
  padding :20px 20px 0px 20px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 40px;
  box-shadow: 1px 1px 20px rgb(214, 213, 213);
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

.card_img{
display: flex;
width:250px;
margin:  20px auto;
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
