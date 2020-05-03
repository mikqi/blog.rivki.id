---
title: 'Belajar NodeJS: Membuat Web Server Sendiri Menggunakan NodeJS'
cover: '/images/posts/node-create-web-server/cover.jpg'
author: 'mikqi'
date: '2020-04-24'
category: 'Backend'
tags:
  - Backend
  - Javascript
  - NodeJS
---

Jika kamu pernah membuat sebuah statich HTML Website atau sebelumnya pernah menggunakan PHP atau ASP, kamu pasti pernah menggunakan Web Server seperti [Apache](https://httpd.apache.org/) atau [IIS](https://www.iis.net/) yang melayani _static files_ yang di request dari browser.

Contoh nih, jika kamu buat _about.html_ dan diletakan di folder yang benar (contoh: www/), maka kamu bisa mengakses halaman tersebut di url _http://localhost/about.html_. Tergantung dari konfigurasi web server, kamu dapat menghilangkan "_.html_".

Node memberikan pendekatan yang berbeda dari web server tradisional. Di Node sendiri, aplikasi yang kamu buat/tulis adalah web server itu sendiri. Tapi membuat web server di Node itu sederhana dan gak terlalu ribet. Jika kamu belum meng-_install_ Node di perangkat kamu, [ikuti artikel ini](/cara-install-node-js).

## Hello World NodeJS

Seperti biasa, jika kita ingin berkenalan dengan bahasa baru kita buat aplikasi "Hello World". _Lets get our hands dirty_.

Di favorit kode editor kamu, buatlah file _helloworld.js_, dan ketiklah _code_ seperti di bawah ini. Usahakan untuk diketik sendiri agar motorik dan otaknya digunakan. Jangan _copy paste_ jika sedang mengikuti tutorial.

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

Oke saya akan jelaskan maksud dari kode di atas satu-persatu.

- Untuk line 1 disini kita memanggil _module_ "_http_" bawaan dari NodeJS dan dimasukkan ke variable `http`. Module ini digunakan untuk HTTP server dan client.
- Di line 2 kita mendeklarasi variable port, dengan value `3000`
- di line 4 - 6 ini kita membuat HTTP Server sendiri yang dimasukkan ke dalam variable server. _Method_ `createServer` itu bawaan dari module _http_. Jika kamu ingin tahu ada apa saja di module _http_ bisa baca di [dokumentasi HTTP ini](https://nodejs.org/api/http.html). Argument yang dibutuhkan oleh method _createServer_ adalah function yang memiliki parameter `request` dan `response`.
- Di line 5 kita membuat response header dengan _status code_ 200, dan `Content-Type: text/plain`. Header seperti ini bisa kalian lihat di browser network request.

![Network-Tab](/images/posts/node-create-web-server/network-tab.png)
_Network Tab_

- Di line 6 kita memanggil method `response.end`. Method ini untuk menyelesaikan request dari client. Dan akan memunculkan `Hello world!` di browser. Method ini harus diletakan dipaling akhir dari sebuah _function_.
- Di line 9 - 12, kita memanggil _method listen_ dari _variable server_. Tugasnya untuk menjalankan server. Method ini membutuhkan 2 _argument_ sepert ini _(port: Number, callback: Function)_. Di _function callback_ kita memanggil log biasa.

Jika kamu menggunakan VSCode, bisa gunakan _shortcut_ `` cmd | ctrl + ` `` untuk memunculkan terminal di VSCode. Jika tidak dari VSCode, pastikan terminal kamu sudah berada di _folder_ yang benar. Setelah itu kita bisa jalankan file tersebut dengan mengetikan _command_ berikut.

```bash
$ node helloworld.js
```

Dan akan muncul seperti ini di _terminal/command line_ kamu.

![Start Server](/images/posts/node-create-web-server/start-server.png)

Lalu kamu bisa mengakses halaman web-nya ke http://localhost:3000/

![Results](/images/posts/node-create-web-server/result.png)
_Hasil_

## Summary

> Ya jadi kali ini kita belajar bagaimana membuat Web Server sendiri dengan menggunakan NodeJS hanya mengandalkan module 'http' bawaan dari NodeJS saja. Kedepannya kita akan memperluas _knowledge_ kita tidak berhenti di sini saja. Next-nya saya akan menambahkan _routing_ hanya menggunakan NodeJS. Jadi kamu harus memperkuat fondasi dulu dari belajar yang benar-benar basic terelbih dulu. Kita tidak langsung terjun menggunakan framework.

#### Credits

- https://nodejs.org/api/http.html
- Photo by [Jonathan](https://unsplash.com/@isodme) on [Unsplash](https://unsplash.com/)
