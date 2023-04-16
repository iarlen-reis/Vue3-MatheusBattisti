<template>
  <div>
    <h2>Essa é a descrição da pessoa: {{ name }}</h2>
    <Descricao />
  </div>
</template>
<script>
import Descricao from "./Descricao.vue";

export default {
  name: "Pessoa",
  components: {
    Descricao,
  },
};
</script>
