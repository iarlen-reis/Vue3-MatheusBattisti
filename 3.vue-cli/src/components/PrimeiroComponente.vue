<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ name }}, e minha idade é {{ age }} anos.</p>
  </div>
</template>

<script>
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      name: "Iarlen",
      age: 21,
    };
  },
};
</script>
