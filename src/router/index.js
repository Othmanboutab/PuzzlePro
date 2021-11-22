import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home.vue";
import listarticles from "../components/listarticles.vue";
import article from "../components/article.vue";


const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
        path: "/articles",
        name: "article",
        component: listarticles,
      },
    
    {
      path: "/article/:id",
      name: "viewarticle",
      component: article,
      
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;