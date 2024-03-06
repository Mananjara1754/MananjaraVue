<template>
  <ion-page>

    <ion-content :fullscreen="true" id="main-content">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Logo</ion-title>
          <ion-buttons slot="end" class="menu">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <div class="container">
        <h1>Liste des Fruits</h1>
        <br>
        <router-link :to="'/home'">Accueil</router-link>
        <button class="btn btn-primary">Ajouter</button><br><br>
        <div class="row">
          <table class="table">
            <tbody>
              <tr>
                <td>Nom</td>
                <td></td>
                <td></td>
              </tr>
              <tr v-for="fruit in fruits" :key="fruit.idFruit">
                <td>{{ fruit.nomFruit }}</td>
                <td>
                </td>
                <td>
                  <button class="btn btn-danger">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { getUrl } from '@/data/store';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
const fruits = ref([]);

const fetchFruits = async () => {
  try {
        const url = getUrl();
        const response = await axios.get(url + 'Fruit');
        fruits.value = response.data; // Assuming the array of fruits is in the 'data' property
        console.log(response);      
      } catch (error) {
        console.error('Erreur lors de la récupération des fruits:', error);
      }
};

onMounted(() => {
  fetchFruits();
});

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

</script>
