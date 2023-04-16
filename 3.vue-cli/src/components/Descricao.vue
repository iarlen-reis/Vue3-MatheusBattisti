<template>
  <div>
    <Picture />
    <p v-if="isWorking">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades.</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>Javascript</li>
      <li v-show="showPHP">PHP</li>
      <li>Python</li>
    </ul>
    <div>
      <button @click="showEmail">
        {{ mostrarEmail ? "Esconder E-mail" : "Mostrar-Email" }}
      </button>
    </div>
    <p v-show="mostrarEmail">Meu E-mail é: iarlensr@gmail.com</p>
    <p>
      Para acessar meu portfolio
      <a v-bind:href="menu_link" target="_blank">clique aqui</a>
    </p>
  </div>
</template>

<script lang="js">
  import Picture from './Picture.vue';

export default {
  name: "Descricao",
  components: {
    Picture
  },

  data() {
    return {
      isWorking: false,
      showPHP: true,
      mostrarEmail: false,
      menu_link: 'https://iarlenreis.com.br'
    }
  },
  methods: {
    showEmail() {
      this.mostrarEmail = !this.mostrarEmail
    }
  }
};
</script>
