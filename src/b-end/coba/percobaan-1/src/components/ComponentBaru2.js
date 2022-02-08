// Deklarasi component baru
Vue.component("component-baru-2", {
  // Template hasil tampilan dituliskan di sini
  // Menggunakan data yang didefinisikan di bawah
  template: "<h1>{{cobaan}}</h1>",
  // PERHATIKAN bahwa penulisan data di dalam component ini sekarang
  // sudah dibuat dalam bentuk FUNCTION
  // bukan hanya sekedar return object saja

  // https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
  data: function () {
    return {
      cobaan: "Selipan baru kedua",
    };
  },
});
