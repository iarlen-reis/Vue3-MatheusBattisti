<template>
  <h1>Olá Mundo!</h1>
  <PrimeiroComponente />
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
    }
  }
</script>