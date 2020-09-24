---
title: 'Apa itu Semantic Version (SemVer)?'
cover: '/images/posts/semver/cover.jpg'
author: 'mikqi'
date: '2020-02-19'
category: 'Tools'
tags:
  - Tools
---

Ketika kalian sering membuat aplikasi menggunakan _npm_ atau _yarn_ pasti pernah mempertanyakan banyak hal. Apa gunanya `package.json`, kenapa ketika install ada `package-lock.json` ketika menggunakan `npm` dan `yarn.lock` ketika menggunakan `yarn`, apa bedanya `dependencies` dengan `devDependencies`, apa maksud angka dari `dependencies` dan masih banyak lagi.

Disini saya akan membahas apa sih fungsi dan kegunaan angka-angka dan symbol yang terdapat di sebelah `package.json` seperti gambar di bawah ini.

![Package List and Version](/images/posts/semver/package.png#forty-percent)
_Package List and Version_

Angka-angka tersebut dinamakkan [Semantic Versioning](https://semver.org) atau biasa di singkat _SemVer_.

## Apa sih maksud angka-angkanya

Dalam _SemVer_ dibagi menjadi 3 versi angka. Misalkan kita memiliki dependency sebagai berikut `typescript@3.4.5`. Angka tersebut menunjukan jenis atau apa saja yang berubah atau di update di dependency tersebut dan menyebut angka tersebut dari kiri ke kanan sebagai `Major`, `Minor` dan `Patch`.

| Major |     | Minor |     | Patch |
| :---: | :-: | :---: | :-: | :---: |
|   3   |  .  |   4   |  .  |   5   |

Biasanya kalo kita sering menggunakan library orang, kita secara tidak sadar pasti memperhatikan versi atau angka tersebut. Versi atau angka tersebut memberi tahu kita apa sih yang di update oleh maintainer tersebut. Nah jika kita akan membuat library, kita juga harus memperhatikan versi karena _versioning itu udah ada standar bakunya_.

## How

Ketika kita membuat library, contoh disini adalah library yang akan di publish ke **npm**, maka kita harus memikirkan versinya.

Misal, _package_ kita sekarang **v0.0.1** maka ketika kita akan mem-_publish_ versi selanjutnya maka harus dinaikkan versinya tidak boleh sama dan kurang dari **v0.0.1**. Untuk melihat versi package kita bisa dilihat di file **package.json**

![package.json](https://miro.medium.com/max/1832/1*SJ63Txi-IBaEKi0BTyKELw.png)
_package.json file_

Manualnya kita ubah versi di package.json file kita dan dinaikin secara manual lalu publish manual.

Daripada manual seperti itu sebenarnya sudah ada tools yang mempermudah untuk me-_manage_ versi dari package kita hingga publish ke npm.

Kita dapat menggunakan [NP](https://github.com/sindresorhus/np) salah satu package milik [sindresorhus](https://github.com/sindresorhus) untuk mempermudah kita dalam me-_maintenance_ _package_ kita dari _bump version_ hingga _push tags_ dan _publsih_ ke npm

![flow np](https://raw.githubusercontent.com/sindresorhus/np/master/screenshot.gif)
_flow np_

![choose version](https://raw.githubusercontent.com/sindresorhus/np/master/screenshot-ui.png)
_publish ke npm dengan spesifik versi_

Jadi ketika kita ingin mem-_publish package_ kita tidak susah lagi, semuanya sudah di automasi oleh [np](https://github.com/sindresorhus/np).

## TLDR

> Semver atau _semantic version_ sangatlah penting ketika kita membuat sebuah _package_ dan kita dapat melihat perubahan dari _package_ atau _library_ tersebut dari angkanya saja misal v3.2.1 dari angka paling kiri adalah **major**, **minor**, **patch**.

> Untuk mempermudah kita dalam me-_maintenance_ versi dari _package_ atau _library_ dapat menggunakan _package_ [NP](https://github.com/sindresorhus/np) yang dapat melakukan _task_ mulai dari _bump version package_ kita, hingga _publish_ dan membuat _tags_ lalu push ke _github_.

### Credits

- <https://semver.org/>
- <https://github.com/sindresorhus/np>
- <https://github.com/sindresorhus>
- <https://unsplash.com/@dietmarbecker>
