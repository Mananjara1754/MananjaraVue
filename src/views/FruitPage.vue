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
          <!-- Popup traitement -->
            <ion-modal ref="modal">
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot="start">
                    <ion-button @click="cancel()">Cancel</ion-button>
                  </ion-buttons>
                  <ion-buttons slot="end">
                    <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <div class="container">
                  <label>Nom fruit</label>
                  <input type="text" class="form-control" v-model="selectedFruit.nomFruit">
                  <label>Couleur</label>
                  <input type="text" class="form-control" v-model="selectedFruit.couleur" >
                </div>
              </ion-content>
            </ion-modal>
          <!-- Popup traitement  -->
      <div class="container">
        <h1>Liste des Fruits</h1>
        <br>
        <button class="rounded-circle"  @click="showAdd()">
          <i class="bi bi-plus" style="color:white;"></i>
        </button>
    <br><br>
        <div v-if="ajout">
          <form @submit.prevent="submitForm">
            <label for="fruitName">Nom du Fruit:</label>
            <input class="form-control" type="text" id="fruitName" v-model="nom_fruit" />

            <label for="fruitColor">Couleur du Fruit:</label>
            <input class="form-control" type="text" id="fruitColor" v-model="couleur_fruit" />
            <br>
            <button class="btn btn-danger" @click="dismissAdd()" id="annuler">Annuler</button> 
            <button type="submit" class="btn btn-primary" id="add" style="margin-left: 10px;">Ajouter</button>
          </form>
        </div>
        <br>
        <div class="row">
          <ion-spinner v-if="isLoading"></ion-spinner>
          <table class="table" v-if="!isLoading">
            <tbody>
              <tr>
                <td>Nom</td>
                <td></td>
                <td></td>
              </tr>
              <tr v-for="fruit in fruits" :key="fruit.idFruit">
                <td>{{ fruit.nomFruit }}</td>
                <td>
                  <button class="btn btn-secondary" id="modif" @click="openModal(fruit)"><i class="bi bi-pencil-square"></i></button>
                </td>
                <td>
                  <button class="btn btn-danger" id="delete" @click="deleteFruit(fruit.idFruit)"><i class="bi bi-x"></i></button>
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
  IonButtons,
  IonButton,
  IonModal,
} from '@ionic/vue';
//Parametre de dev
const fruits = ref([]);
const isLoading = ref(true);
const ajout = ref(false);

//Parametre du class
const nom_fruit = ref();
const couleur_fruit = ref();

//Traitement du popup
const selectedFruit = ref(null);
const modal = ref();
const cancel = () => modal.value.$el.dismiss(null, 'cancel');

const confirm = () => {
 modifFruit();
  modal.value.$el.dismiss(name, 'confirm');
};

const openModal = (fruit) => {
  console.log(fruit);
  selectedFruit.value = fruit;
  modal.value.$el.present();
};
// fin Traitement du popup

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

const modifFruit = async () =>{
  try {
        const formData = {
          idFruit : selectedFruit.value.idFruit,
          nomFruit: selectedFruit.value.nomFruit,
          couleur: selectedFruit.value.couleur
        };
        const url = getUrl();
        const response = await axios.put(url+'Fruit', formData);

        console.log('Réponse de l\'API:', response.data);
        fetchFruits();
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
      }
}
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
<style>
.rounded-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #01C38D;
}
#add{
  background-color: #01C38D;
  border: none;
}
#annuler{
  background-color: #d0e0ea;
    border: none;
}
#delete{
  border-radius: 15px;
    background-color: #e3f4ff;
    border: none;
}
#delete i{
  color: #75787d;
}
#modif{
  border-radius: 15px;
    background-color: #bfe7ff;
    border: none;
}
#modif i{
  color: #1050af;
}
</style>