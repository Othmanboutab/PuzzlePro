<template>
  <div>
     <nav id="nav">
        <h1 class="title"> <span class="pro"> Puzzle</span>Pro </h1>
      <ul class="links">
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
         <li>
          <router-link to="/articles">Listes des articles</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style >

#nav{
    background-color: black;
    color : white;
    display: flex;
    padding: 20px;
    
}

.pro{
  color: yellow;
}

.title{
font-size: 25px;
margin-left: 20px;
    }

.links{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    

    }

    a{
        color: white;
        text-decoration: none;
        }

        a:hover{
            color: yellow;
            }

    li{
        margin-left: 20px;
        list-style: none;
        font-size: 20px;
        
        }

        .main{
            background-color: gray;
            }


</style>
