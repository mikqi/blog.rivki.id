---
title: "Apa itu Semantic Version (SemVer)?"
cover: "https://images.unsplash.com/14/unsplash_5243e9ef164a5_1.JPG?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
author: "mikqi"
date: "2020-02-19"
category: "Tools"
tags:
    - Tools
---

Ketika kalian sering membuat aplikasi menggunakan *npm* atau *yarn* pasti pernah mempertanyakan banyak hal. Apa gunanya `package.json`, kenapa ketika install ada `package-lock.json` ketika menggunakan `npm` dan `yarn.lock` ketika menggunakan `yarn`, apa bedanya `dependencies` dengan `devDependencies`, apa maksud angka dari `dependencies` dan masih banyak lagi.

Disini saya akan membahas apa sih fungsi dan kegunaan angka-angka dan symbol yang terdapat di sebelah `package.json` seperti gambar di bawah ini.

![Package List and Version](/images/posts/semver/package.png#forty-percent)
*Package List and Version*

Angka-angka tersebut dinamakkan [Semantic Versioning](https://semver.org) atau biasa di singkat *SemVer*.

## Apa sih maksud angka-angkanya?
Dalam *SemVer* dibagi menjadi 3 versi angka. Misalkan kita memiliki dependency sebagai berikut `typescript@3.4.5`. Angka tersebut menunjukan jenis atau apa saja yang berubah atau di update di dependency tersebut dan menyebut angka tersebut dari kiri ke kanan sebagai `Major`, `Minor` dan `Patch`.

| Major |       | Minor |       | Patch |
| :---: | :---: | :---: | :---: | :---: |
|   3   |   .   |   4   |   .   |   5   |

Biasanya kalo kita sering menggunakan library orang, kita secara tidak sadar pasti memperhatikan versi atau angka tersebut. Versi atau angka tersebut memberi tahu kita apa sih yang di update oleh maintainer tersebut. Nah jika kita akan membuat library, kita juga harus memperhatikan versi karena *versioning itu udah ada standar bakunya*.

## How

Ketika kita membuat library, contoh disini adalah library yang akan di publish ke **npm**, maka kita harus memikirkan versinya.

Misal, *package* kita sekarang **v0.0.1** maka ketika kita akan mem-*publish* versi selanjutnya maka harus dinaikkan versinya tidak boleh sama dan kurang dari **v0.0.1**. Untuk melihat versi package kita bisa dilihat di file **package.json**

![package.json](https://miro.medium.com/max/1832/1*SJ63Txi-IBaEKi0BTyKELw.png)
*package.json file*

Manualnya kita ubah versi di package.json file kita dan dinaikin secara manual lalu publish manual.

Daripada manual seperti itu sebenarnya sudah ada tools yang mempermudah untuk me-*manage* versi dari package kita hingga publish ke npm.

Kita dapat menggunakan [NP](https://github.com/sindresorhus/np) salah satu package milik [sindresorhus](https://github.com/sindresorhus) untuk mempermudah kita dalam me-*maintenance* *package* kita dari *bump version* hingga *push tags* dan *publsih* ke npm

![flow np](https://raw.githubusercontent.com/sindresorhus/np/master/screenshot.gif)
*flow np*

![choose version](https://raw.githubusercontent.com/sindresorhus/np/master/screenshot-ui.png)
*publish ke npm dengan spesifik versi*

Jadi ketika kita ingin mem-*publish package* kita tidak susah lagi, semuanya sudah di automasi oleh [np](https://github.com/sindresorhus/np).

## TLDR;
> Semver atau *semantic version* sangatlah penting ketika kita membuat sebuah *package* dan kita dapat melihat perubahan dari *package* atau *library* tersebut dari angkanya saja misal v3.2.1 dari angka paling kiri adalah **major**, **minor**, **patch**.

> Untuk mempermudah kita dalam me-*maintenance* versi dari *package* atau *library* dapat menggunakan *package* [NP](https://github.com/sindresorhus/np) yang dapat melakukan *task* mulai dari *bump version package* kita, hingga *publish* dan membuat *tags* lalu push ke *github*.

#### Credits
- https://semver.org/
- https://github.com/sindresorhus/np
- https://github.com/sindresorhus
- https://unsplash.com/@dietmarbecker
