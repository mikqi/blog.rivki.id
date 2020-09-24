---
title: 'Belajar NodeJS: Memahami basic routing di NodeJS'
cover: '/images/posts/basic-routing/cover.jpg'
author: 'mikqi'
date: '2020-04-27'
category: 'Backend'
tags:
  - Backend
  - NodeJS
  - Javascript
---

<!-- WHAT + When + Intro + Latar Belakang masalah -->

_Routing_ mengacu pada bagaimana sebuah aplikasi _endpoint_/URL merespon apa yang diminta/_request_ oleh _client_/_browser_. Atau bisa juga _routing_ adalah mekanisme bagaimana sebuah aplikasi me-_response_ permintaan/_request_ client/browser ke endpoint/URL tertentu dan dengan spesifik HTTP request method seperti GET, POST, PUT, PATCH, DELETE dan lain-lain. HTTP request method singkatnya bisa [dibaca disini](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

## Contoh Routing di Website

![http request illustration](/images/posts/basic-routing/request.png)
_Illustrasi HTTP Request_

Illustrasi di atas menggambarkan bagaimana komunikasi _client - server_ bekerja. Illustrasi di atas juga bisa menggambarkan bagaimana _routing_ bekerja. Misal kita punya website 2 halaman atau biasanya saya sering menyebutnya _2 route_ yaitu "/home" dan "/about". Nah, ketika kita mengetikan "example.com/home" di-url browser kita, maka alur yang berjalan mirip dengan ilustrasi yang di atas. Jika kita jadikan poin maka akan seperti di bawah ini alur-nya.

1. User mengetikkan "example.com/home" di browser lalu menekan enter
2. Browser mengirimkan _request_ ke Web Server bahwa user meminta halaman "example.com/home"
3. Web Server melakukan pengecekan apakah ada halaman "example.com/home".
4. Setelah menemukannya maka Web Server mengembalikan _response_ sesuai yang sudah di define dan dikembalikan ke browser yang me-_request_
5. Browser menerima _response_ dari server, lalu menampilkan _response_ yang diteriman di _browser_.
6. Misal, _response_ dari server adalah menampilkan tulisan "Hello world", maka di _browser_ akan menampilkan "Hello world".
7. Misal, kita mengetikan url "example.com/asdwa" dan _web server_ tidak menemukkan hasil yang sesuai _request_ dari client. Maka akan me-_response_ bahwa yang di _request_ dari _client_ itu tidak ada.

Untuk lebih detail mari kita melanjutkan _helloworld.js_ kita dari artikel [sebelumnya](/belajar-node-js-membuat-web-server-sendiri-menggunakan-node-js)

Berikut adalah kode dari artikel sebelumnya. Sekarang kita akan mempelajari bagaimana sih membuat routing atau cara kerja routing sebenarnya tanpa framework/library. Kita akan membuat routing ke halaman "/", "/about" dan "/404" jika request yang dilakukan oleh browser tidak ditemukan oleh server atau aplikasi yang kita buat.

<div class="line-number"></div>

```js
const http = require('http')
const port = 3000

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello world!')
})

server.listen(port, () => {
  console.log(`server started on port ${port}`)
  console.log('press Ctrl-C to terminate....')
})
```

Kita coba hapus line 5-6 lalu diganti dengan code sebagai berikut.

```js
console.log(request.url)
```

Setelah itu kita coba jalankan di browser dan coba kamu ubah url setelah "localhost:3000/" dengan apapun maka akan memunculkan log seperti di bawah ini.

![sample request](/images/posts/basic-routing/sample-request.png#forty-percent)
_Log Request_

Bisa kita lihat, semua request yang dilakukan browser masuk semua ke _parameter request_. Jika dilihat dari screenshot di atas `request.url` menampilkan request path yang dilakukan browser secara detail.

Sekarang bagaimana caranya ketika _browser_ _request_ ke halaman "/" dikasih konten Home, "/about" dikasih konten About dan jika _borwser_ melakukan _request_ yang tidak ditemukan di-_redirect_ kehalaman "/404". Jawabannya simple, kita gunakan kondisional saja.

Sekarang kita tambahkan di bawah syntax `console.log(req.url)` code berikut. Tujuannya adalah untuk melakukan clean-up url atau membersihkan url dari _query string_.

```js
const path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
```

Setelah itu kita tambahkan kondisionalnya menggunakan _variable_ `path` yang sudah kita _define_ sebelumnya, jika ke "/" kita akan berikan _response_ Home, "/about" akan kita berikan _response_ About dan jika _request_-nya tidak tersedia maka akan diberikan "/404". Kita tambahkan syntax berikut setelah definisi variable `path`.

```js
switch (path) {
  case '':
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Homepage')
    break
  case '/about':
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('About Page')
    break
  case '/404':
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.end('Not Found')
    break
  default:
    response.writeHead(301, {
      'Content-Type': 'text/plain',
      Location: '/404',
    })
    response.end('Redirect to 404')
}
```

Jika sudah ditambahkan di _code_ sebelumnya terus coba dijalankan ulang `node helloworld.js` terus kamu coba ke halaman "/" seharusnya aka muncul tulisan "Homepage" di browser, lalu ketika ubah url browser ke halaman "/about" maka akan muncul tulisan "About Page" tapi ketika kamu coba asal-asal ke url yang tidak di define di atas, maka akan di _redirect_ ke halaman "/404" dengan konten "Not Found".

![demo](/images/posts/basic-routing/demo.gif)
_Demo_

Jika kita membuat aplikasi yang cukup besar, tidak mungkin kita hanya menggunakan NodeJS saja. Bayangkan saja jika kita memiliki 100 route, maka kita akan membuat 100 \* 4 line untuk simple response. Tapi tidak mungkin juga kita hanya memunculkan hal simple, pasti ada logic yang complex di setiap route.

Maka dari itu orang-orang membuat web framework untuk mempermudah kita membuat web aplikasi menggunakan NodeJS, contohnya yang paling terkenal dan banyak orang gunakan adalah [ExpressJS](https://expressjs.com/), [HapiJS](https://hapi.dev/), [Koa](https://koajs.com/) dan lain-lain.

Berikut adalah source code lengkap untuk _simple routing_ hanya menggunakan nodejs saja.

```js
const http = require('http')
const port = 3000

const server = http.createServer((request, response) => {
  const path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch (path) {
    case '':
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('Homepage')
      break
    case '/about':
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('About Page')
      break
    case '/404':
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('Not Found')
      break
    default:
      response.writeHead(301, {
        'Content-Type': 'text/plain',
        Location: '/404',
      })
      response.end()
  }
})

server.listen(port, () => {
  console.log(`server started on port ${port}`)
  console.log('press Ctrl-C to terminate....')
})
```

## Summary || TLDR;

> _Routing_ adalah mekanisme bagaimana sebuah aplikasi me-_response_ permintaan/_request_ client/browser ke endpoint/URL tertentu dan dengan spesifik HTTP request method seperti GET, POST, PUT, PATCH, DELETE dan lain-lain.

> Kita juga dapat membuat _routing_ dengan hanya menggunakan NodeJS. Disini juga kita memahami _basic_ konsep dari _routing_, kita hanya perlu mengamati setiap request yang dikirim dari client, lalu melakukan filter, jika ketemu maka diberikan _response_ ketemu jika tidak diberikan _response_ bahwa data yang diminta oleh client tidak ketemu.

> Konsep ini juga yang digunakan untuk membuat RESTful API kedepannya.

### Credits

- Photo by [Javier Allegue Barros](https://unsplash.com/@soymeraki) on [Unsplash](https://unsplash.com/)
- Illustration - <https://filipmolcik.com/>
