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
          <ion-item class="nav-item">
            <button to="/home" class="nav-link active">
              <i class="bi bi-person-circle" id="menu-id"></i> {{ nom }} {{ prenom }} 
            </button>
          </ion-item>
          <ion-item class="nav-item">
            <router-link to="/home" class="nav-link active">
              <i class="bi bi-house" id="menu-id"></i>Accueil
            </router-link>
          </ion-item>
          <ion-item class="nav-item">
            <router-link to="/Fruit" class="nav-link active">
              <i class="bi bi-card-text" id="menu-id"></i>Crud fruit
            </router-link>
          </ion-item>
          <ion-item class="nav-item">
            <button @click="deconnexion()" class="nav-link active">
              <i class="bi bi-box-arrow-left" id="menu-id"></i>Deconnexion
            </button>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <!-- <router-view></router-view> -->
    <ion-router-outlet />
  </ion-app>
</template>
<script setup lang="ts">
import { ref} from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import {
  IonContent,
  IonHeader,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
const info = localStorage.getItem('info');
const nom = localStorage.getItem("nom");
const prenom = localStorage.getItem("prenom");

const deconnexion =()=>{
  localStorage.clear();
  window.window.location.href = '/login';
}
</script>
<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import 'bootstrap-icons/font/bootstrap-icons.css';
@font-face {
    font-family: 'Poppins';
    src: url('../assets/font/Poppins-Regular.ttf');
}
*{
  color: black;
  font-family: 'Poppins';
}
label{
  font-size: small;
}
#menu-id{
  margin-right: 16px;
  margin-left: 10px;
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

