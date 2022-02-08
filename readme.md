# Education Vue Components

## Table of Contents
1. [Persyaratan Dasar](#persyaratan-dasar)
1. [Intro to Component](#intro-to-component)
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
  
(Perkenalan ke parcel)

## Intro to Parcel

## Let's Demo

### Referensi
(Single File Components)
- https://v2.vuejs.org/v2/guide/components.html#Base-Example
- https://v2.vuejs.org/v2/guide/single-file-components.html
- https://v2.vuejs.org/v2/guide/index.html#Composing-with-Components
- https://v2.vuejs.org/v2/guide/components-registration.html

(Parcel)
- https://v1.parceljs.org/vue.html

(Vetur Extension)
- https://marketplace.visualstudio.com/items?itemName=octref.vetur