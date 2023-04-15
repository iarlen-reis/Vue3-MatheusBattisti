const MyNameApp = {
  data() {
    return {
      name: "",
      input__name: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      this.name = this.input__name;
    },
  },
};

Vue.createApp(MyNameApp).mount("#app");
