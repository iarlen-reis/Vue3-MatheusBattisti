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
      menu_link: 'https://iarlenreis.com.br'
    }
  },
};
</script>
