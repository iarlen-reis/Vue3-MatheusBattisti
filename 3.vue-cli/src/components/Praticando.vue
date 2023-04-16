<template>
  <main class="container">
    <h1>TarefaLists:</h1>
    <form @submit="add">
      <input type="text" placeholder="Adicione algo" v-model="input_value" />
      <input type="submit" value="Add" />
    </form>
    <div v-show="list.length > 0">
      <h2>Tarefas:</h2>
      <ul>
        <li v-for="some in list" :key="some">{{ some }}</li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "Praticando",
  data() {
    return {
      list: [],
      input_value: "",
      add(e) {
        e.preventDefault();

        if (!this.input_value) return;

        this.list.push(this.input_value);
        this.input_value = "";
      },
    };
  },
};
</script>

<style lang="css">
.container {
  width: 400px;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  border-radius: 4px;

  background: cadetblue;
}

h1 {
  color: #fff;
}

ul {
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  list-style: decimal-leading-zero;
}

li {
  font-size: 1.3rem;
  color: #111;
}

form {
  display: flex;
  gap: 1rem;
}

input[type="text"] {
  padding: 0.7rem 1rem;
  border-radius: 4px;
  border: 1px solid #aaa;

  outline: none;
}

input[type="submit"] {
  font-weight: bold;

  border: none;
  border-radius: 50%;

  padding: 0.5rem;

  cursor: pointer;

  color: #fff;
  background: #aaa;

  transition: 0.5s;
}

input[type="submit"]:hover {
  color: #000;
  background: #dfdfdf;
}
</style>
