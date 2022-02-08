import Vue from "vue";
import App from "./App.vue";

// Ini adalah instance vue yang digunakan
new Vue({
  // Fungsi untuk render template
  render: (createElement) => createElement(App),
})
  // inject ke element html yang mana
  .$mount("#app");
