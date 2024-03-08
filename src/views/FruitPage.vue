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
        <button class="btn btn-primary" @click="showAdd()">Ajouter</button><br><br>
        <div v-if="ajout">
          <form @submit.prevent="submitForm">
            <label for="fruitName">Nom du Fruit:</label>
            <input class="form-control" type="text" id="fruitName" v-model="nom_fruit" />

            <label for="fruitColor">Couleur du Fruit:</label>
            <input class="form-control" type="text" id="fruitColor" v-model="couleur_fruit" />
            <br>
            <button class="btn btn-danger" @click="dismissAdd()">Annuler</button> 
            <button type="submit" class="btn btn-primary" style="margin-left: 10px;">Ajouter</button>
          </form>
        </div>
        <br>
        <div class="row">
          <ion-spinner v-if="isLoading"></ion-spinner>
          <table class="table" v-if="!isLoading">
            <tbody>
              <tr>
                <td>Nom</td>
                <td> <i class="bi bi-house"></i> </td>
                <td></td>
              </tr>
              <tr v-for="fruit in fruits" :key="fruit.idFruit">
                <td>{{ fruit.nomFruit }}</td>
                <td>
                  <button class="btn btn-secondary">Modifier</button>
                </td>
                <td>
                  <button class="btn btn-danger" @click="deleteFruit(fruit.idFruit)">Supprimer</button>
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
//Parametre de dev
const fruits = ref([]);
const isLoading = ref(true);
const ajout = ref(false);

//Parametre du class
const nom_fruit = ref();
const couleur_fruit = ref();

const showAdd = () =>{
  ajout.value = true;
}
const dismissAdd = () =>{
  ajout.value = false;
}
const fetchFruits = async () => {
  try {
        const url = getUrl();
        const response = await axios.get(url + 'Fruit');
        fruits.value = response.data; // Assuming the array of fruits is in the 'data' property
        isLoading.value = false;
        console.log(response);      
      } catch (error) {
        isLoading.value = false;
        console.error('Erreur lors de la récupération des fruits:', error);
      }
};
const deleteFruit = async (idFruit:any) => {
  try {
    const url = getUrl();
    const response = await axios.delete(`${url}Fruit?idFruit=${idFruit}`);
    console.log(response);
    fetchFruits();
  } catch (error) {
    console.error('Erreur lors de la suppression du fruit:', error);
  }
};
const insertFruit = async () =>{
  try {
        // Créer un objet avec les données du formulaire
        const formData = {
          nomFruit: nom_fruit.value,
          couleur: couleur_fruit.value,
        };
        // Envoyer la requête POST à votre API
        const url = getUrl();
        const response = await axios.post(url+'Fruit', formData);

        console.log('Réponse de l\'API:', response.data);
        fetchFruits();
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
      }
}

const submitForm = () => {
    // Vous pouvez accéder aux valeurs des champs du formulaire ici
    console.log('Nom du Fruit:', nom_fruit.value);
    console.log('Couleur du Fruit:', couleur_fruit.value);
    insertFruit();
   
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
