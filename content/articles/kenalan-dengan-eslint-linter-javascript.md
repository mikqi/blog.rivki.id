---
title: 'Kenalan dengan ESLint, Linter Javascript'
cover: '/images/posts/intro-eslint/cover.png'
author: 'mikqi'
date: '2020-05-02'
category: 'Tools'
tags:
  - Tools
  - Javascript
---

> Lint atau linter adalah alat untuk menganalisa source code untuk menandai errors, bug, code convention dan memverifikasi kualitas kode.

Di artikel kali ini saya akan menjelaskan salah satu _tools_ atau _module_ yang sangat membantu kita dalam mengerjakan sebuah projek yaitu [ESLint](https://eslint.org/) salah satu linter JavaScript yang terkenal.

Jika kamu belum tau apa itu [ESLint](https://eslint.org/), [ESLint](https://eslint.org/) adalah sebuah tools untuk melakukan _static analyzes_ kode kita agar kita tau dengan cepat menemukan masalah atau potensi _bug_ dari kode yang sudah kita buat.

## Kenapa Harus Pasang Linter

[ESLint](https://eslint.org/) adalah hal wajib bagi kamu yang mau membuat aplikasi Javascript, karena dengan kita mengintegrasi projek kita dengan [ESLint](https://eslint.org/) kode yang kita buat akan menjadi lebih konsisten dan minim dengan bug jika kita mengikuti anjuran dari [ESLint](https://eslint.org/). Berikut adalah keuntungan ketika kita mengintegrasikan projek kita dengan [ESLint](https://eslint.org/).

## Find Problems

[ESLint](https://eslint.org/) secara otomatis menganalisa kode kita apakah memiliki potensi bug, sesuai standar/konvesi yang sudah di define di konfigurasi [ESLint](https://eslint.org/) atau tidak. Keuntungannya disini kita cepat mendapatkan feedback loop yang diberikan oleh [ESLint](https://eslint.org/), kita tidak harus mengecek dulu kode kita sudah sesuai best practice belum atau adakah di kode kita ini yang akan berpotensi memunculkan bug kedepannya. Dan kita langsung diberitahu potensial error atau warning oleh [ESLint](https://eslint.org/) jika _code editor_ kita support.

![Warning & Error](/images/posts/code-quality-linter/cover.jpg)
_Sample Warning & Error [ESLint](https://eslint.org/)_

## Fix Automatically

Selain menganalisa dan memverifikasi kode kita apakah sudah sesuai dengan konvesi atau tidak memiliki potensi bug, fitur yang keren lainnya adalah [ESLint](https://eslint.org/) dapat membenarkan kode kita jika ada yang salah. Jika di VSCode akan ada icon lampu 💡, jika kita klik akan muncul sugesti untuk fix-nya seperti apa.

![Fix Automatically](/images/posts/intro-eslint/fix-ts.gif)
_Suggest & Fix_

## Customize

Dengan [ESLint](https://eslint.org/) juga kita bisa mengkustomisasi konfigurasi, _parser_ dan rules yang akan digabungkan dengan rules built-in dari [ESLint](https://eslint.org/) sesuai kebutuhan projek kita. [ESLint](https://eslint.org/) jgua sekarang sudah support dengan Typescript, jadi jika kamu ingin mencari linter untuk Typescript, tinggal gunakan saja [ESLint](https://eslint.org/). Dukungan komunitas untuk [ESLint](https://eslint.org/) juga banyak sekali, jadi kamu tidak usah bingung jika ingin menggabungkan React + [ESLint](https://eslint.org/) atau Vue + [ESLint](https://eslint.org/) kamu bisa [mencari plugin-nya disini](https://www.npmjs.com/search?q=keywords:eslint-plugin). Terdapat sekali banyak dukungan, kamu hanya tinggal mencarinya di [NPM](https://www.npmjs.com/).

![Typescript Support](/images/posts/intro-eslint/typescript-support.png)
_Typescript Support_

## Integrasi Ke Projek

Nah sekarang bagaimana sih cara mengintegrasikan [ESLint](https://eslint.org/) ke projek kita? Di sini saya akan memberitahukan cara dan step-by-step agar projek kalian bisa ter-install [ESLint](https://eslint.org/).

Cara mengintegrasikan [ESLint](https://eslint.org/) ke sebuah projekpun tidak begitu sulit. Jika sudah memiliki JavaScript projek di repository Bukalapak cara install-nya cukup mudah, tinggal menjalankan _script_ di bawah.

```bash
### NPM
npm install -d eslint
### Yarn
yarn add --dev eslint
```

Setelah selesai install [ESLint](https://eslint.org/) selanjutnya jalankan command berikut untuk menginisiasi projek menggunakan linter.

```bash
### NPM versi >= v5.2.0
npx eslint --init
```

Maka akan muncul seperti gambar di bawah ini.

![eslint init project](/images/posts/code-quality-linter/eslint-init.jpg)
_eslint init_

Kita diberikan 3 pilihan.
Yang pertama menggunakan 3 config yang sering dipakai yaitu:

- [Airbnb](https://github.com/airbnb/javascript)
- [Standard](https://github.com/standard/standard)
- [Google](https://github.com/google/eslint-config-google)

Yang kedua kita define sendiri basic rules yang akan digunakan dan yang ketiga sesuai itu meng-inspect files JavaScript di-project. Disini saya sarankan menggunakan opsi kedua agar lebih mudah dan fleksible untuk custom-nya. Jika pilih yang ketiga akan diberikan pertanyaan seperti gambar di bawah ini.

![eslint config questions](/images/posts/code-quality-linter/eslint-question.jpg)
_eslint config_

Lalu kita akan dibuatkan files `.eslintrc.js`. Contoh isi file-nya seperti di bawah ini.

```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
```

Di file tersebut kita bisa meng-custom rules kita sendiri atau ambil rules yang sudah disediakan oleh komunitas. List rules dapat dilihat ditautan [berikut](https://eslint.org/docs/rules/).
Untuk melihat _command_ apa saja yang dapat dilakukan oleh [ESLint](https://eslint.org/) gunakan _command_ `npx [eslint](https://eslint.org/) --help`.

Setelah kita melakukan integrasi dengan projek ketika editor kita support dengan [ESLint](https://eslint.org/) akan muncul _underscor_ merah atau kuning seperti gambar di bawah ini.

![eslint in action](/images/posts/code-quality-linter/eslint-action.jpg)
_eslint in action_

Ini menandakan bahwa _code_ yang kita buat tidak sesuai dengan aturan yang sudah di-_define_ oleh [ESLint](https://eslint.org/). Kita dipaksa untuk ubah _code_ tersebut agar _underscore_ merah tersebut hilang.

## Show Error And Fix

Tambahkan juga script di file `package.json` seperti script di bawah ini.

```json
/* package.json */
{
  // ...
  "scripts": {
    "lint:scripts": "eslint --fix --ext .js --ignore-path .gitignore ."
  }
  // ...
}
```

Jika sudah ditambahkan script tersebut kita tinggal menjalankan command `yarn lint:scripts` atau `npm run lint:scripts`pada _terminal_. Jika terdapat kesalahan pada kode yang sudah kita buat maka akan muncul _error_ atau _warning_ setelah menajalankan _linter_. Contoh error seperti gambar di bawah ini.

![error di terminal](/images/posts/code-quality-linter/eslint-terminal.jpg)
_error di terminal_

ps. Untuk flag `--fix` itu berfungsi untuk otomatis melakukan perbaikan terhadap kode yang dapat diperbaiki oleh _linter_ sedangkan yang tidak bisa hanya akan dimunculkan dihasil terminal.
Untuk flag `--ext` untuk mem-_filter_ _file_ dengan _extension_ apa saja yang akan dicek oleh [ESLint](https://eslint.org/).

> Flag `--fix` tidak 100% membenarkan kode kita, ada juga yang perlu dibenarkan manual. Tapi seenggaknya kita udah diingetin sama [ESLint](https://eslint.org/).

## Summary || TLDR;

> Lint atau linter adalah alat untuk menganalisa source code untuk menandai errors, bug, code convention dan memverifikasi kualitas kode.

> ESLint adalah salah satu tools JavaScript untuk melakukan static analyzes kode kita agar kita tau dengan cepat menemukan masalah atau potensi bug dari kode yang sudah kita buat.

> Kita dapat mengintegrasikan ESLint tidak hanya dengan JavaScript namun bisa juga dengan TypeScript.
> Kamu juga bisa menggunakan [boilerplate NodeJS yang sudah saya buat lengkap untuk bekerja dengan Tim atau sendiri. Fokus untuk projek skala kecil dan menengah](https://github.com/mikqi/express-awesome-boilerplate).

## Credits

- <https://eslint.org>
- <https://github.com/mikqi/express-awesome-boilerplate>
- <https://www.npmjs.com/search?q=keywords:eslint-plugin>
