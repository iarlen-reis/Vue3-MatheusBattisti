<template>
  <div>
    <p v-if="isWorking">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades.</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>Javascript</li>
      <li v-show="showPHP">PHP</li>
      <li>Python</li>
    </ul>
    <ul>
      <li v-for="number in numbers" :key="number">
        Eu sou o número: {{ number }}
      </li>
    </ul>
  </div>
</template>

<script lang="js">
export default {
  name: "Descricao",

  data() {
    return {
      isWorking: false,
      showPHP: true,
      numbers: [1, 2, 3, 4, 5]
    }
  },
};
</script>
