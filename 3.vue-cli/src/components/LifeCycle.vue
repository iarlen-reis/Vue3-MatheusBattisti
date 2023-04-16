<template>
  <h1>Meu nome: {{ name }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "Ainda não sei.",
    };
  },
  created() {
    setTimeout(() => {
      this.name = "Iarlen";
    }, 1000);
  },
  mounted() {
    setTimeout(() => {
      this.name = "Feliz";
    }, 2000);
  },
};
</script>
