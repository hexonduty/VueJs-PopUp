const { createApp } = Vue;

createApp({
  data() {
    return {
      loginPage: false,
      registerPage: false,
    };
  },
  methods: {
    toggleLogin() {
      this.loginPage = !this.loginPage;
    },
    toggleRegister() {
      this.registerPage = !this.registerPage;
    },
    loginSubmit() {
      // Buraya giriş işlemleri eklenir.
      // Örnek olarak şu an sadece bir console.log yazdık.
      console.log("Login form submitted");
    },
    registerSubmit() {
      // Buraya giriş işlemleri eklenir.
      // Örnek olarak şu an sadece bir console.log yazdık.
      console.log("Login form submitted");
    },
  },
}).mount("#app");
