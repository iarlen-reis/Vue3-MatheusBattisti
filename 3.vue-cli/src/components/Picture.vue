<template>
  <img :src="avatar" :alt="descricao" />
</template>

<script>
export default {
  name: "Picture",
  data() {
    return {
      avatar: "pessoa.jpg",
      descricao: "A imagem da pessoa",
    };
  },
};
</script>

<style scoped>
img {
  width: 250px;
  border-radius: 4px;
}
</style>
