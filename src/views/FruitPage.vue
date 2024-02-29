<template>
  <div>
    <h1>Liste des Fruits</h1>
    <ul>
      <li v-for="fruit in fruits.data" :key="fruit.id_fruit">{{fruit.nom_fruit}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

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
        const response = await axios.get('http://localhost:5153/api/Fruit/testbdd');
        this.fruits = response.data; // Suppose que la réponse est un tableau de fruits
      } catch (error) {
        console.error('Erreur lors de la récupération des fruits:', error);
      }
    },
  },
};
</script>
