<template>
  <ion-app>
    <ion-menu side="end" contentId="main-content">
      <ion-header>
        <ion-toolbar style="border:none;">
          <ion-title style="color: #12132d;">Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list lines="none" class="menu-items">
          <ion-item>
            <router-link to="message/0">
              <ion-icon name="home-outline"></ion-icon> Accueil
            </router-link>
          </ion-item>
          <ion-item>
            <router-link to="/home">
              <ion-icon name="home-outline"></ion-icon> home
            </router-link>
          </ion-item>
          <ion-item>
            <router-link to="/fruit">
              <ion-icon name="home-outline"></ion-icon> CRUD Fruit 
            </router-link>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <!-- <router-view></router-view> -->
    <ion-router-outlet />
  </ion-app>
</template>
<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

</script>
<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

@font-face {
    font-family: 'Poppins';
    src: url('../assets/font/Poppins-Regular.ttf');
}
*{
  color: black;
  font-family: 'Poppins';

}

.menu-items{
    margin: 0px;
    background-color: transparent;
    ion-icon{
        margin-right: 20px;
        color: #86919f;
    }
    ion-item{
        margin-bottom: 10px;
        --background: transparent;
        color: #000;
    }
}

ion-toolbar{
    --background: none;
    background-color: white;
    border: none;
}

ion-menu-button{
    font-size: x-large;
    color: #1A1313;
}
ion-content{
    --background:none;
    background-color: #fff;

    position: relative;
    
}
div.scrollmenu {
    overflow: auto;
    white-space: nowrap;
    
  }
  
  div.scrollmenu span {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    margin-left: 5px;
    background-color: #fff;
    color: black;
    border: 0.1px solid #ccbebe;
    font-weight: 100;
  }
  div.scrollmenu span:active{
    display: inline-block;
    text-align: center;
    text-decoration: none;
    margin-left: 5px;
    background-color: #000;
    color: #fff;
    border: 0.1px solid #ccbebe;
    font-weight: 100;
  }
  
  div.scrollmenu a:hover {
    background-color: #777;
  }
</style>

