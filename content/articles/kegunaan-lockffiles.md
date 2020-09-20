---
title: 'Kegunaan dan Seberapa Penting Sih .lock File'
cover: '/images/posts/lockfiles/cover.jpg'
author: 'mikqi'
date: '2019-06-10'
category: 'Javascript'
tags:
  - Javascript
---

Jika kalian pernah menggunakan _package manaager_ seperti [npm](https://npmjs.org/) atau [yarn](https://yarnpkg.org) pasti sudah gak asing lagi dengan file yang di-_auto generate_ oleh _package manager_ tersebut, `package-lock.json` di-_generate_ oleh _npm_ dan `yarn.lock` di-_generate_ oleh _yarn_.

![NPM and Yarn](https://cdn-images-1.medium.com/max/1600/1*7CVvXHPBFuC9SrYqgxgc8Q.jpeg)
_npm & yarn logo_

Nah, pasti diantara kalian banyak yang bertanya-tanya

> sebenarnya kegunaan _file_ tersebut apasih?

> Kenapa **wajib** di-_commit_ ke _git_ kalau kalian menggunakan _git_?

> Apa sih efek sampingnya kalo `lockfile` dihapus atau gak diikut sertakan di git?

> Coba di-_delete_ juga gak ada _impact_-nya.

Oke, saya coba jelaskan dan saya kasih sampel dari pengalaman saya di-_production_ [Seller Center Bukalapak](https://seller.bukalapak.com/). Saya akan jelaskan sedikit tentang apa sih lockfile dan kapan itu mulai di-_implement_ di dunia per-JS-an.

---

## Kapan dan Kenapa sih lockfile ada di dunia per-JS-an

Lockfile dikenalkan oleh _Yarn_ saat pertama kali rilis, dan diikuti oleh _npm_ di versi ke-5.

Awal mula kenapa ada hal bermula dari masalah seperti biasa. Jadi masalahnya adalah seperti ini, ketika kita membuat node project di komputer kita berjalan lancar tidak ada hambatan sama sekali setelah meng-_install_ segala _dependency_ yang dibutuhkan oleh project tersebut, namun ketika di komputer lain tidak bisa dijalankan padahal step yang dilakukan sama persis seperti di komputer sebelumnya.

> Loh kok bisa?

Oiya jelas bisa, kenapa hal ini bisa terjadi? Ada banyak kemungkinan, tapi kita fokus ke topik tentang `lockfile` saja. Ini bisa terjadi karena perkembangan JavaScript yang sangat pesat.

Misal, kita memiliki package sebut saja `p1` tertulis di `package.json` seperti ini.

```json
{
  "dependencies": {
    // ...
    "p1": "^1.0.0"
    // ...
  }
}
```

Di komputer pertama _exact_ ter-_install_ package `p1@v1.0.0` dan berjalan normal tidak ada kendala sama sekali. Tapi ketika di komputer kedua, package tersebut release versi baru di npm menjadi `p1@v1.1.0` dan memiliki _error_ dimana-mana. Nah, kemungkinan besar yang membuat error adalah hal seperti itu.

Yup, _lockfile_ muncul untuk menangani masalah seperti itu. Untuk memastikan package yang ter-_install_ adalah sesuai dari lockfile. Saya coba jelaskan dengan simpel.

- Misal kita meng-_install_ dependency p1@v1.0.0 di komputer pertama, maka yarn/npm akan otomatis membuat lockfiles tersebut dengan isi, bahwa p1 harus v1.0.0
- Setelah itu commit terus push beserta lockfile tersebut
- Ketika komputer lain mencuba menjalankan untuk install dependency, yang pertama dilakukan adalah mengecek ada gak sih lockfile di projek tersebut? kalo ada maka akan menggunakan versi yang tertera di lockfile tersebut.
- Kalo gak ada maka akan membuat file lockfile baru.

## Kenapa Lockfile Wajib masuk daftar Commit?

Okelah, kalo kalian cuma ngoding sendirian. Takapa gak usah di-commit juga. Beda halnya ketika kalian masuk di dalam sebuah tim dan ngoding bareng, hukumnya wajib untuk masukkin ke daftar file yang wajib ikut di commit. Kenapa?

Ya seperti yang dijelaskan di atas, untuk mengurangi missmatch package dari komputer satu ke komputer lain yang akan menimbulkan kodingan kita gak jalan. Biar gak cuma jalan di komputer kalian doang, nanti kalian dikira egois mau ngodingnya sendiri aja. 🙊

---

## TLDR;

> Lockfile sangat penting ketika kita ngodingnya gak sendiri dan itu untuk menghindari missmatch dari versi _dependency_ yang memungkinkan projek gak jalan ketika ada versi _dependency_ yang berbeda. Jadi wajib banget untuk dimasukkan ke _commit_.

#### Credits

- https://unsplash.com/@mmayyer
- https://jpospisil.com/2017/06/02/understanding-lock-files-in-npm-5.html
