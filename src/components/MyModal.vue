<!-- MyModal.vue -->
<template>
  <ion-modal :is-open="showModal">
    <ion-header>
      <ion-toolbar>
        <ion-title>Ma Pop-up <button @click="dismissModal" class="btn btn-danger"> Valider</button></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="hello">
        <h1>Hello popu test</h1>
      </div>
      <p>Ceci est le contenu de ma pop-up.</p>
      <ion-button @click="dismissModal">Fermer</ion-button>
    </ion-content>
  </ion-modal>
</template>
<style>
  .hello{
    height: 500px;
    width: 500px;
    background-color: red;
    position: absolute;
  }
</style>
<script>
export default {
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    presentModal() {
      this.showModal = true;
    },
    dismissModal() {
      this.showModal = false;
    }
  }
};
</script>
