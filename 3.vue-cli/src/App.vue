<template>
  <!-- <PrimeiroComponente /> -->
  <!-- <LifeCycle /> -->
  <Pessoa />
  <!-- <Praticando /> -->
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Pessoa from "./components/Pessoa.vue";
import Praticando from "./components/Praticando.vue";

export default {
  name: "App",
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Praticando,
  },
};
</script>
