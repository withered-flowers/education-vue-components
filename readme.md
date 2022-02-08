# Education Vue Components

## Table of Contents
1. [Persyaratan Dasar](#persyaratan-dasar)
1. [Intro to Component](#intro-to-component)
1. [Component How To](#component-how-to)
1. [Single File Components](#single-file-components)
1. [Intro to Build Tools - Parcel](#intro-to-build-tools---parcel)
1. [Referensi](#referensi)


## Persyaratan Dasar
- Mengerti dasar penggunaan nodejs
- Mengerti dasar penggunaan `live-server` dan `json-server`
- Mengerti dasar `Vue.js`, minimal `directives` dan `lifecycle`

## Intro to Component
Dislcaimer:  
- Pada pembelajaran ini yang digunakan adalah `Vue.js` versi 2.x.
- Untuk versi 3.x masih dalam tahap pengembangan yah !

Pernahkah kepikiran? 

Pada saat sebuah aplikasi sudah menjadi besar, dengan bermacam macam bagian yang ada di aplikasi tersebut, namun semuanya diletakkan di dalam satu file html saja?

Contoh:
- Imaginasikan saja, aplikasi e-commerce dari perusahaan yang berwarana hijau ataupun oranye, ataupun biru, hanya dibuat dalam sebuah file html saja?
- Bagian NavBar, bagian Login, bagian Card untuk barang belanjaan, dan bagian Card, semuanya ada di dalam satu file html saja
- Asumsikan misalnya ada 100 baris kode per bagian, kemudian dalam sebuah aplikasi besar memiliki 100 bagian itu, berarti satu file html nya memiliki total baris kode sebesar 10000 baris. *Enak kan bacanya*?

Nah pada pembelajaran ini, dengan menggunakan `Vue.js`, kita akan belajar untuk memecah bagian tersebut menjadi file file yang lebih kecil yang lebih mudah untuk diurus, atau istilah kerennya adalah membuat `component` dalam `Vue.js` itu sendiri.

## Component How to
Sekarang mari kita mencoba untuk membuat sebuah file component bagian kecil kecilnya tersebut

https://v2.vuejs.org/v2/guide/components.html

Langkah-langkahnya adalah sebagai berikut:

1. Membuat sebuah folder dengan nama `percobaan-1`
1. Membuat sebuah file baru dengan nama `index.html` di dalam folder tsb.
1. Menginisialisasi project node dengan menggunakan perintah `npm init -y`
1. Menginstall `live-server` dengan menggunakan perintah `npm i -D live-server`
1. Menuliskan kode sebagai berikut dalam file `index.html`
    ```html
    <!-- File: index.html -->

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cobain</title>
      </head>
      <body>
        <div id="app">
          <p>{{ message }}</p>

          <!-- 2. Menggunakan component-baru yang dideklarasikan di bawah -->
          <component-baru></component-baru>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
        <script>
          // 1. Membuat component baru
          Vue.component("component-baru", {
            template: "<h1>Selipan baru</h1>",
          });

          new Vue({
            el: "#app",
            data: {
              message: "Halo Dunia",
            },
          });
        </script>
      </body>
    </html>
    ```
1. Jalankan kode di atas dengan menggunakan perintah `npx live-server .`
1. Selamat sampai di titik ini kita sudah berhasil membuat component pertama di vue !

Namun hal ini masih kurang seru bukan? Masih ada pada satu file yang sama saja nih, bagaimana caranya kita membuat component ini ada pada file yang lainnya?

Untuk itu sekarang kita akan mencoba untuk membuat component lain, dengan meletakkannya pada tempat yang tidak sama dengan `index.html` yang sudah digunakan

Langkah-langkahnya adalah sebagai berikut:
1. Membuat sebuah folder baru lagi di dalam folder `percobaan-1` dengan nama `src/components`, di folder inilah tempat dimana component yang dibuat akan diletakkan
1. Membuat sebuah component baru dengan nama `ComponentBaru2.js`
1. Menuliskan kode berikut pada file `ComponentBaru2.js`
    ```js
    // File: src/components/ComponentBaru2.js

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
    ```
1. Memodifikasi file `index.html` untuk dapat menggunakan `ComponentBaru2.js`
    ```html
    <!-- File: index.html -->

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cobain</title>
      </head>
      <body>
        <div id="app">
          <p>{{ message }}</p>

          <!-- 2. Menggunakan component-baru yang dideklarasikan di bawah -->
          <component-baru></component-baru>
          <!-- 4. Menggunakan component-baru-2 yang dideklarasikan dari file lain -->
          <component-baru-2></component-baru-2>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
        <!-- 3. Mendeklarasikan / import ComponentBaru2.js -->
        <script src="./src/components/ComponentBaru2.js"></script>
        <script>
          // 1. Membuat component baru
          Vue.component("component-baru", {
            template: "<h1>Selipan baru</h1>",
          });

          new Vue({
            el: "#app",
            data: {
              message: "Halo Dunia",
            },
          });
        </script>
      </body>
    </html>

    ```
1. Menjalankan kembali `live-server` kemudian lihatlah perubahan kode yang terjadi

Voila ! sampai di titik ini kita sudah berhasil memecah file yang cukup panjang menjadi beberapa file dan tetap terhubung, mantap bukan !

Namun, dalam menuliskan kode ini, kita masih mengalami beberapa kendala:
- Template ini masih berupa "satu warna saja" atau dianggap menjadi "string" di dalam code yang dituliskan, sehingga terasa malah jadi sulit
- Adanya repetisi pada penulisan kode (`Vue.component` blablabla)

Nah bagaimanakah kita menyelesaikan hal tersebut?

Untuk menyelesaikan masalah ini kita harus mengetahui apa itu `Single File Components` dan `Bundler` terlebih dahulu.

## Single File Components
Seperti yang sudah kita coba di atas, atau di dalam `Vue.js` ini disebut dengan `Global Components` dimana component didefinisikan dengan `Vue.component`, memiliki keterbatasan sebagai berikut:
- Setiap nama komponen WAJIB unik
- Template dibuat dalam bentuk `string` sehingga susah karena tidak ada `syntax highlighting`
- Tidak adanya CSS support dalam component
- Tidak ada `build step` sehingga hanya membatasi kode dalam bentuk HTML dan JS saja, dan tidak bisa adanya preprocessor (seperti scss, pug, dsb) dan Babel

Semua permasalahan di atas ini bisa diselesaikan dengan cara menggunakan `Single File Components` dengan sebuah file yang memiliki ektensi `.vue`, 

Single File Components (SFC) a.k.a file `*.vue` adalah sebuah file spesial di dalam `Vue.js` yang memperbolehkan kita untuk membungkus template, logic, dan style dari sebuah Component Vue di DALAM SEBUAH FILE.

Contoh struktur file dengan ekstensi `.vue`
```vue
<template>
  ...
</template>

<script>
  ...
</script>

<style scoped>
  ...
</style>
```

Akan tetapi, di balik kespesialan hal yang disebutkan di atas, SFC ini HARUS diproses lagi menjadi javascript umumnya dengan menggunakan `build tools` seperti `Webpack` atau `Browserify` atau yang lain lain untuk menjadi file yang bisa dibaca oleh browser.

Nah dikarenakan `Webpack` maupun `Browserify` ini cukup sulit untuk melakukan konfigurasi awalnya, maka dalam pembelajaran ini kita akan menggunakan `build tools` yang cukup mudah bernama `Parcel`

## Intro to Build Tools - Parcel

Disclaimer:
- Parcel yang digunakan di pembelajaran ini adalah menggunakan Parcel v1 yang sudah deprecated
- Parcel v2 tidak support SFC untuk `Vue.js` v2.x

Dikutip dari web `Parcel` nya langsung, adalah suatu `bundler` aplikasi web yang tidak membutuhkan konfigurasi sama sekali. Berbeda dengan `Webpack` ataupun `Browserify` yang membutuhkan konfigurasi yang cukup ekstensif pada awal penggunaannya.

Langkah-langkah untuk menggunakan `Parcel` supaya bisa menggunakan Vue SFC adalah sebagai berikut:
1. Menginstall `parcel` secara global dengan menggunakan perintah `npm i -g parcel-bundler`
1. Membuat sebuah folder baru dengan nama `percobaan-2`
1. Membuat sebuah file baru dengan nama `index.html` di dalam folder tsb.
1. Menginisialisasi project node dengan menggunakan perintah `npm init -y`
1. Menginstall package Vue v2 dengan menggunakan perintah `npm i vue@2`
1. Menuliskan kode pada `index.html` sebagai berikut
    ```html
    <!-- File: index.html -->

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Percobaan Kedua</title>
      </head>
      <body>
        <div id="app"></div>
        <!-- import file javascript yang akan digunakan sebagai Vue -->
        <script src="src/main.js"></script>
      </body>
    </html>
    ```
1. Membuat folder baru di dalam folder `percobaan-2` dengan nama `src`
1. Membuat file baru dengan nama `main.js` dan `App.vue` pada folder `src` tersebut
1. Menuliskan kode pada file `App.vue` sebagai berikut
    ```html
    <!-- File: src/App.vue -->

    <template>
      <div>
        {{ iniDariData }}
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          iniDariData: "Halo Dunia",
        };
      },
      // memberikan nama dari Component-nya menjadi App
      // Bisa di-trace di Vue devtools
      name: "App",
    };
    </script>

    <style></style>
    ```
1. Menuliskan kode pada file `main.js` sebagai berikut
    ```js
    // File: src/main.js

    import Vue from "vue";
    import App from "./App.vue";

    // Ini adalah instance vue yang digunakan
    new Vue({
      // Fungsi untuk render template
      render: (createElement) => createElement(App),
    })
      // inject ke element html yang mana
      .$mount("#app");
    ```
1. Perhatikan dalam file `main.js` dan `App.vue` syntax penulisan sudah menggunakan syntax ES Modules, BUKAN CommonJS lagi.
    - `require()` digantikan dengan `import X from 'y'`;
    - `module.exports` digantikan dengan `exports default`
1. Menjalankan kode yang sudah dibuat ini dengan menggunakan `parcel index.html`

Selamat sampai dengan tahap ini kita sudah berhasil membuat file SFC pada `Vue.js` dengan menggunakan `parcel` sebagai bundler / build toolsnya !

## Let's Demo

Setelah selesai mempelajari ini semua, mari kita coba untuk melakukan pemecahan menjadi components dalam Aplikasi yang sudah dibuat:
- Aplikasi yang sudah dibuat merupakan sebuah aplikasi sederhana yang menembak data langsung dari json-server yang sudah ada.
- Aplikasi ini masih berupa sebuah file index.html yang sangat besar

Langkah 1 - Inisialisasi Server
1. Membuka folder `server` yang sudah disediakan
1. Menginstall package yang dibutuhkan dengan menggunakan perintah `npm i`
1. Menjalankan server dengan menggunakan perintah `npx json-server db.json`

Langkah 2 - Inisiaslisasi Client
1. Membuka folder `client` yang sudah disediakan
1. 

### Referensi
(Single File Components)
- https://v2.vuejs.org/v2/guide/components.html#Base-Example
- https://v3.vuejs.org/guide/single-file-component.html
- https://v2.vuejs.org/v2/guide/single-file-components.html
- https://v2.vuejs.org/v2/guide/index.html#Composing-with-Components
- https://v2.vuejs.org/v2/guide/components-registration.html

(Parcel)
- https://v1.parceljs.org/vue.html

(Vetur Extension)
- https://marketplace.visualstudio.com/items?itemName=octref.vetur