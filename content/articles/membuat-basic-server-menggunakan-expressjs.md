---
title: 'Membuat Basic Server Menggunakan NodeJS dan ExpressJS'
cover: '/images/posts/node-create-web-server/cover.jpg'
author: 'mikqi'
date: '2020-05-03'
category: 'Javascript'
tags:
  - Javascript
  - Backend
---

[Sebelumnya](/articles/belajar-nodejs-membuat-web-server) kita sudah mempelajari bagaimana membuat Web Server sendiri dengan menggunakan NodeJS saja. Kali ini kita akan mencoba bagaimana membuat Web Server dengan menggunakan [ExpressJS](https://expressjs.com) salah satu _framework_ yang paling banyak digunakan di NodeJS.

Kenapa sih harus ExpressJS? Kalo menurut saya ExpressJS cepat, minimalis, simpel dan cukup mudah dipelajari. Terus, banyak _framework_ lain juga based on ExpressJS, bahasa gampangnya pondasinya itu ExpressJS.

## Membuat Projek

Hal-hal yang dibutuhkan untuk mengikuti tutorial ini adalah `node` dan `npm`. Jika kamu masih belum meng-install-nya di lokal kamu. [Kamu bisa baca tutorial ini](/articles/belajar-nodejs-cara-install).

Kita akan mulai dengan membuat _folder_ untuk aplikasi kita, lalu mengakses _folder_-nya dengan menggunakan _terminal_.

```batch
$ mkdir express-app
$ cd express-app
```

untuk membuat node app, kita akan menggunakan _command_ berikut:

```batch
$ npm init
```

Setelah itu akan muncul beberapa pertanyaan untuk informasi di `package.json`. Tekan `enter` saja terus untuk _default config_.

## Setting up Express

Sekarang kita akan meng-_install_ Express. Pergi ke _terminal_ dan masukkan command berikut.

```batch
$ npm install express
```

Ketika sudah selesai, buat file `index.js` di _root folder_ atau sejajar dengan file `package.json`. Setelah itu tambahkan syntax berikut di file `index.js`.

```js
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (request, response) => {
  response.end('Hello ExpressJS')
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})
```

Pertama kita define dulu Express menggunakan `require` dan membuat Express app dengan memanggil `express()`.

Lalu kita membuat variable `PORT` dengan value `3000`. Dengan men-define sebuah _variable_ agar mudah dibaca maksud dari angka `3000` itu apa. Di bawahnya kita panggil `app.get()` untuk set default route kita. Di parameter pertama itu path `/` dan parameter kedua itu _function callback_ dengan parameter _request_ dan _response_. Tidak terlalu beda dengan hanya menggunakan NodeJS saja. Di dalam _function_ kita panggil `response.end` untuk menngirimkan _response body_ ke client.

Di bawahnya kita memanggil `app.listen()` dengan `PORT` variable dengan _function_ simpel untuk melakukkan log di terminal, tujuannya biar kita tau beneran jalan gak sih aplikasi yang kita buat.

Jika sudah, coba jalankan aplikasi kita dengan menggunakan _command_ di bawah pada _terminal_, pastikan kamu ada di folder yang benar:

```batch
$ node index.js
```

![Result](/images/posts/express-web-server/hello-express.png)
_Hasil running_

Jika kamu melakukkannya dengan benar, maka akan muncul hasilnya seperti gambar di atas.

## Summary || TLDR;

> Membuat web app dengan menggunakan framework ExpressJS akan lebih mudah dan lebih cepat. Tapi tetap kita harus kuatkan pondasi basic dulu.

> Kenapa sih harus ExpressJS? Kalo menurut saya ExpressJS cepat, minimalis, simpel dan cukup mudah dipelajari. Terus, banyak _framework_ lain juga based on ExpressJS, bahasa gampangnya pondasinya itu ExpressJS.

## Credits

- ExpressJS - <https://expressjs.com>
