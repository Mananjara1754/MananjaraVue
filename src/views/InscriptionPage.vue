<template>
  <ion-page>
    <ion-content :fullscreen="true" id="content-log">
      
<div class="container" id="box">
  <form @submit.prevent="submitForm" class="my-form">
        <div class="login-welcome-row">
            <a href="#" title="Logo">
                <img src="../assets/img/logo.svg" alt="Logo" class="logo">
            </a>
            <h3>Inscription</h3>
            <p style="font-size: smaller;">Veuillez bien remplir le formulaire si dessous</p>
        </div>
        <div class="input__wrapper">
            <input type="text" id="email" name="email" class="input__field" placeholder="Your Email" v-model="nom">
            <label for="email" class="input__label">Nom</label>
        </div>
        <div class="input__wrapper">
            <input type="text" id="email" name="email" class="input__field" placeholder="Your Email" v-model="prenom">
            <label for="email" class="input__label">Prenom</label>
        </div>
        <div class="input__wrapper">
            <input type="text" id="email" name="email" class="input__field" placeholder="Your Email" v-model="mail">
            <label for="email" class="input__label">Email:</label>
        </div>
        <div class="input__wrapper">
            <input id="password" type="password" class="input__field" placeholder="Your Password" v-model="mdp">
            <label for="password" class="input__label">
                Mot de passe
            </label>
        </div>
        <div class="input__wrapper">
            <input id="password" type="password" class="input__field" placeholder="Your Password" v-model="confMdp">
            <label for="password" class="input__label">
                Confirmation du mot de passe
            </label>
        </div>
        <button type="submit" class="my-form__button">
            Login
        </button>
      
        <div class="my-form__actions" style="font-size: smaller;">
            <div class="my-form__row">
                
            </div>
        </div>
    </form>

</div>

    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { ref} from 'vue';
import axios from 'axios';
import { getUrl } from '@/data/store';
import {
  IonContent,
  IonPage
} from '@ionic/vue';
//Parametre de dev
const nom = ref();
const prenom = ref();
const email = ref();
const mdp = ref();
const confMdp = ref();

const inscription = async () => {
  try {
    const formData = {
        nom:nom.value,
        prenom:prenom.value,
        mail: email.value,
        mdp: mdp.value
    };
    if(confMdp.value !== mdp.value){
        throw new Error("Erreur lors de la confirmation du mot de passe");
    }
    const url = getUrl();
    const response = await axios.post(url+'Utilisateur', formData);
    console.log('Réponse de l\'API:',response.data );
    localStorage.setItem('all', response.data);
    localStorage.setItem('nom', response.data.nom);
    localStorage.setItem('prenom', response.data.prenom);
    window.location.href = '/home';
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    alert(error.message);
  }
}

const submitForm = () => {
    inscription();
};

</script>
<style>
#content-log{
  --background: none;
    background-color: #08a778;
    position: relative;
}
#box{
  top: 37px;
    position: relative;
    display: flex;
    justify-content: center;
}
:root {
    --primary: #605DFF;
    --primary-dark: #4a00e0;
    --primary-light: #5DA8FF;
    --secondary: #1D1D1D;
    --text: #1F2346;
    --white: #FFFFFF;
    --violet: #8e2de2;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 16px;
    font-family: 'Work Sans', sans-serif;
    height: 100vh;
    padding: 1rem;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: var(--violet);
    background: -webkit-linear-gradient(to right, var(--violet),
            var(--primary-dark));
    background: linear-gradient(to right, var(--violet),
            var(--primary-dark));
}

.login-welcome-row {
    margin-bottom: 1rem;
    text-align: center;
}

.welcome-message {
    max-width: 24rem;
}

.logo {
    height: 4rem;
    margin: 0 auto;
}

.logo {
    color: var(--primary);
}

.my-form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    gap: 1rem;
    background: var(--white);
    width: 100%;
    max-width: 32rem;
    padding: 3rem 2rem;
    border-radius: 2rem;
    height: fit-content;
}

.my-form__button {
    background: var(--primary);
    color: white;
    white-space: nowrap;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    line-height: 3.125rem;
    outline: none;
    font-size: medium;
    letter-spacing: .025rem;
    text-decoration: none;
    cursor: pointer;
    /* font-weight: 800; */
    min-height: 3.125rem;
    width: 100%;
    border-radius: 10rem;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
}

.my-form__button:hover {
    background: var(--primary-dark);
}

/*? input wrapper */
.input__wrapper {
    position: relative;
    padding: 0.9375rem 0 0;
    margin-bottom: 0.5rem;
}

.input__field {

    color: var(--text);
    padding: 0.375rem 0;
    padding-right: 2rem;
    padding-bottom: 0.5rem;
    line-height: 2rem;
    height: 2rem;
    outline: 0;
    border: 0;
    width: 100%;
    vertical-align: middle;
    padding-bottom: 0.7rem;
    border-bottom: 2px solid rgb(170, 170, 170);
    background: transparent;
    transition: border-color 0.2s;
}

.input__field::placeholder {
    color: transparent;
}


.input__label {
    user-select: none;
    font-size: small;
}

.input__field:placeholder-shown~.input__label {
    cursor: text;
    color: var(--text);
    top: 0.8rem;
    font-size: smaller;
}

.input__label,
.input__field:focus~.input__label {
    position: absolute;
    top: -0.8rem;
    display: block;
    font-size: smaller;
    color: var(--text);
    transition: 0.3s;
}

.input__field:focus~.input__label {
    color: var(--primary);
}

.input__field:focus {
    border-bottom: 3px solid var(--primary);
}

.input__field:focus~svg {
    stroke: var(--primary);
}

.input__icon {
  position: absolute;
    right: -0.875rem;
    bottom: -0.6875rem;
    width: 1.75rem;
    height: 2.25rem;
    padding: 0.125rem;
    transform: translate(-50%, -50%);
    transform-origin: center;
    cursor: pointer;
    opacity: 0.7;
}

.input__icon:hover {
    border-radius: 50%;
}

/* my form actions */

.my-form__actions {
    display: flex;
    flex-direction: column;
    align-self: center;
    color: var(--secondary);
    gap: 1rem;
    margin-top: 0.5rem;
}

.my-form__actions a {
    color: var(--secondary);
    font-weight: 600;
    text-decoration: none;
}

.my-form__actions a:hover {
    text-decoration: underline;
}

.my-form__row {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
}
</style>