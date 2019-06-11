---
title: "Kegunaan dan Seberapa Penting Sih .lock File"
cover: "https://images.unsplash.com/photo-1531417666976-ed2bdbeb043b"
author: "mikqi"
date: "2019-06-10"
category: "javascript"
tags:
    - javascript
---

Jika kalian pernah menggunakan *package manaager* seperti [npm](https://npmjs.org/) atau [yarn](https://yarnpkg.org) pasti sudah gak asing lagi dengan file yang di-*auto generate* oleh *package manager* tersebut, `package-lock.json` di-*generate* oleh *npm* dan `yarn.lock` di-*generate* oleh *yarn*.

![NPM and Yarn](https://cdn-images-1.medium.com/max/1600/1*7CVvXHPBFuC9SrYqgxgc8Q.jpeg)
*npm & yarn logo*

Nah, pasti diantara kalian banyak yang bertanya-tanya

> sebenarnya kegunaan *file* tersebut apasih?

> Kenapa **wajib** di-*commit* ke *git* kalau kalian menggunakan *git*?

> Apa sih efek sampingnya kalo `lockfile` dihapus atau gak diikut sertakan di git?

> Coba di-*delete* juga gak ada *impact*-nya.

Oke, saya coba jelaskan dan saya kasih sampel dari pengalaman saya di-*production* [Seller Center Bukalapak](https://seller.bukalapak.com/). Saya akan jelaskan sedikit tentang apa sih lockfile dan kapan itu mulai di-*implement* di dunia per-JS-an.

---

## Kapan dan Kenapa sih lockfile ada di dunia per-JS-an
Lockfile dikenalkan oleh *Yarn* saat pertama kali rilis, dan diikuti oleh *npm* di versi ke-5.

Awal mula kenapa ada hal bermula dari masalah seperti biasa. Jadi masalahnya adalah seperti ini, ketika kita membuat node project di komputer kita berjalan lancar tidak ada hambatan sama sekali setelah meng-*install* segala *dependency* yang dibutuhkan oleh project tersebut, namun ketika di komputer lain tidak bisa dijalankan padahal step yang dilakukan sama persis seperti di komputer sebelumnya. 

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

Di komputer pertama *exact* ter-*install* package `p1@v1.0.0` dan berjalan normal tidak ada kendala sama sekali. Tapi ketika di komputer kedua, package tersebut release versi baru di npm menjadi `p1@v1.1.0` dan memiliki *error* dimana-mana. Nah, kemungkinan besar yang membuat error adalah hal seperti itu. 

Yup, *lockfile* muncul untuk menangani masalah seperti itu. Untuk memastikan package yang ter-*install* adalah sesuai dari lockfile. Saya coba jelaskan dengan simpel.

* Misal kita meng-*install* dependency p1@v1.0.0 di komputer pertama, maka yarn/npm akan otomatis membuat lockfiles tersebut dengan isi, bahwa p1 harus v1.0.0
* Setelah itu commit terus push beserta lockfile tersebut
* Ketika komputer lain mencuba menjalankan untuk install dependency, yang pertama dilakukan adalah mengecek ada gak sih lockfile di projek tersebut? kalo ada maka akan menggunakan versi yang tertera di lockfile tersebut.
* Kalo gak ada maka akan membuat file lockfile baru.

## Kenapa Lockfile Wajib masuk daftar Commit?
Okelah, kalo kalian cuma ngoding sendirian. Takapa gak usah di-commit juga. Beda halnya ketika kalian masuk di dalam sebuah tim dan ngoding bareng, hukumnya wajib untuk masukkin ke daftar file yang wajib ikut di commit. Kenapa?

Ya seperti yang dijelaskan di atas, untuk mengurangi missmatch package dari komputer satu ke komputer lain yang akan menimbulkan kodingan kita gak jalan. Biar gak cuma jalan di komputer kalian doang, nanti kalian dikira egois mau ngodingnya sendiri aja. 🙊

---

## TLDR;
> Lockfile sangat penting ketika kita ngodingnya gak sendiri dan itu untuk menghindari missmatch dari versi *dependency* yang memungkinkan projek gak jalan ketika ada versi *dependency* yang berbeda. Jadi wajib banget untuk dimasukkan ke *commit*.


#### Credits
* https://unsplash.com/@mmayyer
* https://jpospisil.com/2017/06/02/understanding-lock-files-in-npm-5.html
