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
        <button class="btn btn-primary">Ajouter</button><br><br>
        <div class="row">
          <table class="table">
          <tbody>
            <tr>
              <td>Nom</td>
              <td></td>
              <td></td>
            </tr>
            <tr v-for="fruit in fruits" :key="fruit.id_fruit">
              <td>{{fruit.nom_fruit}}</td>
              <td><button class="btn btn-secondary" @click="modifierFruit(fruit)">Modifier</button></td>
              <td><button class="btn btn-danger">Supprimer</button></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';
import { getUrl} from '@/data/store';
export default {

  data() {
    return {
      fruits: [],
    };
  },
  async mounted() {
    await this.fetchFruits();
  },
  methods: {
    async fetchFruits() {
      try {
        const url = getUrl();
        // console.log(url+'Fruit');
        const response = await axios.get(url+'Fruit');
        this.fruits = response;
      } catch (error) {
        console.error('Erreur lors de la récupération des fruits:', error);
      }
    }
  },
};
</script>
