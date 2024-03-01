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
        <button class="btn btn-primary" @click="presentModal">Ajouter</button><br><br>
        <div class="row">
          <table class="table">
          <tbody>
            <tr>
              <td>Nom</td>
              <td></td>
              <td></td>
            </tr>
            <tr v-for="fruit in fruits.data" :key="fruit.id_fruit">
              <td>{{fruit.nom_fruit}}</td>
              <td>Modifier</td>
              <td>Supprimer</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </ion-content>
    <my-modal ref="myModal"></my-modal>
  </ion-page>
</template>

<script>
import axios from 'axios';
import MyModal from '/src/components/MyModal.vue';
export default {
  components: {
    MyModal
  },
  data() {
    return {
      fruits: [],
    };
  },
  async mounted() {
    await this.fetchFruits();
  },
  methods: {
    presentModal() {
      this.$refs.myModal.presentModal(); // Assurez-vous que la référence est correcte
    },
    async fetchFruits() {
      try {
        const response = await axios.get('http://localhost:5153/api/Fruit/testbdd');
        this.fruits = response.data; // Suppose que la réponse est un tableau de fruits
      } catch (error) {
        console.error('Erreur lors de la récupération des fruits:', error);
      }
    },
    afficherFormulaire() {
          const modal = document.createElement('ion-modal');
          modal.component = 'app-ajout-fruit'; // Remplacez par le nom de votre composant de formulaire
          document.body.appendChild(modal);
          return modal.present();
        },
  },

};
</script>
