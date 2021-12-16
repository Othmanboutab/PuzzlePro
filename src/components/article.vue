<template>
  <div>
    <navbar></navbar>
  </div>

<h1 class="card_titl">{{ post.label }}</h1>
  <section class="onepost">
   <div class="image">
    <img
      class="card_image"
      v-bind:src = "post.img">

   </div>


   <div class="description">
   <div class="desc">
    <p class="card_content">{{ post.content }}</p>
   </div>

   <div class="firststars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star white"></i>
    </div>

   <div class="Like">
     <input
        class="cheekbox"
        type="checkbox"
        name="checkbox"
        v-bind:id="post.id"
        :value="post.id"
        v-model="liked"
      />
      <label v-bind:for="post.id">
        <i class="fas fa-heart "></i>
      </label>

      <p> Ajouter au favoris </p>


   </div>


   </div>
  </section>

  <section class="onecomment">
    <form class="form" @submit.prevent="addtocomment()">
      <input type="text" v-model="comment" class="comment" id="comment" />
      <button class="btn" type="submit">Ajouter</button>
    </form>
    
  </section>
  <div class="all">
  <p class="listesofcomment">Listes des commentaires :</p>
    <div class="allcomment">
    <p class="cmt" v-for="comment in commentlist" :key="comment">
      {{ comment }}
    </p>
    </div>
  </div>
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
  background-color: rgb(209, 209, 209);
}

.onepost{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border-radius: 20px 0 0 20px;
  box-shadow: 1px 1px 20px rgb(214, 213, 213);
  width: max-content;
  margin:  40px auto;
}

.desc{
  width: 500px;
}

.Like{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  border: 1px solid yellow;
  padding: 20px;
}

.fa-heart{
  margin: 0px 20px;
  cursor: pointer;
}



.description{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fa-star{
  color: yellow;

}

.white{
  color:black;
}




.card_titl {
  color: black;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 40px;
} 

.card_image {
width: 600px;
object-fit: cover;
border-radius: 20px 0 0 20px;
display:flex;
align-content: center;
justify-content: center;
margin: auto;
  box-shadow: 1px 1px 20px rgb(214, 213, 213);}

.card_content {
  margin-top: 30px;
  padding: 10px;
  color: black;
  font-size: 17px;
} 



.form {
  display: flex;
align-content: center;
justify-content: center;
  

}

.listesofcomment {
  margin-top: 40px;
  color:black;
  padding: 20px;
  text-align: center;
}

.comment {
  width: 600px;
  height: 80px;
}

.all{
  display: flex;

}

.btn {
  background-color: yellow;
  padding: 10px 30px;
  color: white;  
  border: none;
  color: black;
  margin: 0 20px;
}

.cmt {
  color: black;
  padding-bottom: 20px;
  border-bottom: 1px solid yellow;
  padding: 20px;
  margin: 30px 30px;
}

.allcomment{
  width: 1000px;
  height: auto;
  margin:  30px auto;
  background: white;
border-radius: 20p}

input{
  box-shadow: 1px 1px 20px rgb(214, 213, 213);
  border:none;
  padding:20px;
}

@media screen and (max-width: 500px) {

.onepost{
  flex-direction: column;
  width: 90%;
  margin: 10px;
  border-radius: 20px;
}

.card_image{
  width: 100%;
  border-radius: 20px;
  margin: 10px;

}
.card_content{
  width: 100%;
  font-size: 16px;
  padding: 10px;
}

.desc{
  width: 100%;
}


.card_titl {
  font-size: 15px ;
}

.form{
  align-items: center;
  margin-left: 20px;
  
}

#comment{
  border-radius: 20px;
  margin-top: 20px;
}

.btn{
  padding: 0px 30px;
  margin: 0px 20px;
  height: 60px;
  border-radius: 30px;
}


.all{
  display: flex;
  flex-direction: column;
  width: auto;

}

.allcomment{
  width: 100%;
}
}
  

</style>
