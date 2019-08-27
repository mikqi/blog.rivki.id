---
title: "Apa itu Semantic Version (SemVer)?"
cover: "https://images.unsplash.com/14/unsplash_5243e9ef164a5_1.JPG?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
author: "mikqi"
date: "2019-06-11"
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

| 3   | . |   4 | . | 5   |
|:---:|:-:|:---:|:-:|:---:|
|Major|   |Minor|   |Patch|

Biasanya kalo kita sering menggunakan library orang kita secara tidak sadar pasti memperhatikan versi atau angka tersebut. Versi atau angka tersebut memberi tahu kita apaz sih yang di update oleh maintainer tersebut.

## How

## Summary || TLDR;

#### Credits
- https://unsplash.com/@dietmarbecker
