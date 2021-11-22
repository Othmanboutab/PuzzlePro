<template>
  <navbar />

  <section class="allpost">
    <div class="card" v-for="post in posts" :key="post.id">
      <h1 class="card_title">{{ post.label }}</h1>
      <img
        class="card_img"
        src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg"
      />
      <p class="card_content">{{ post.content }}</p>

      <router-link :to= "{ name: 'viewarticle' , params :{id : post.id}}" class="card_btn">Découvrir</router-link>
    </div>
  </section>
</template>

<script>
import navbar from "../components/navbar.vue";

export default {
  name: "home",

  data() {
    return {
      posts: [
        {
          id: 1,
          label: "Les robots domineront le monde ?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit nam numquam error totam vitae! Molestias omnis nemo voluptate debitis vitae fugit et, ut facere unde? Quaerat ipsum cupiditate similique",
        },
        {
          id: 2,
          label: "Les robots domineront le monde ?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit nam numquam error totam vitae! Molestias omnis nemo voluptate debitis vitae fugit et, ut facere unde? Quaerat ipsum cupiditate similique?",
        },
        {
          id: 3,
          label: "Les robots domineront le monde ?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit nam numquam error totam vitae! Molestias omnis nemo voluptate debitis vitae fugit et, ut facere unde? Quaerat ipsum cupiditate similique?",
        },
        {
          id: 4,
          label: "Les robots domineront le monde ?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit nam numquam error totam vitae! Molestias omnis nemo voluptate debitis vitae fugit et, ut facere unde? Quaerat ipsum cupiditate similique?",
        },
        {
          id: 5,
          label: "Les robots domineront le monde ?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit nam numquam error totam vitae! Molestias omnis nemo voluptate debitis vitae fugit et, ut facere unde? Quaerat ipsum cupiditate similique?",
        },
        {
          id: 6,
          label: "Les robots domineront le monde ?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit nam numquam error totam vitae! Molestias omnis nemo voluptate debitis vitae fugit et, ut facere unde? Quaerat ipsum cupiditate similique?",
        },
      ],
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
  height: 500px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 40px;
}

.card_title {
  position: relative;
  margin-bottom: 10px;
}

.card_title::after {
  content: "";
  width: 6.5rem;
  height: 0.15rem;
  background-color: black;
  position: absolute;
  top: 38px;
  left: 1px;
}

.card_btn {
  color: black;
  position: absolute;
  bottom: -4%;
  left: 25%;
  background-color: yellow;
  padding: 15px 80px;
  border-radius: 10px;
  font-weight: bold;
}

.card_img{
margin-bottom: 10px;
align-items: center;

    }

.card_content {
  text-align: center;
  color: gray;
}

.card_btn:hover {
  color: black;
}
</style>
