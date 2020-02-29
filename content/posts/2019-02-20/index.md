---
title: 'Improve Your Code Quality With Linter'
cover: '/images/posts/code-quality-linter/cover.jpg'
author: 'mikqi'
date: '2019-02-20'
category: 'tutorial'
tags:
  - tutorial
  - javascript
---

Lint atau linter adalah alat untuk menganalisa source code untuk menandai errors, bug, code convention dan memverifikasi kualitas kode. Seberapa penting sih linter dengan projek yang kita buat? Jawabannya menurut saya itu penting. Dengan adanya linter kita dipaksa untuk belajar dan disiplin untuk menulis kode yang bagus dan rapi tapi tetap tidak bugfree dan untuk projek skala besar linter sangat dianjurkan agar semua yang ikut berkontribusi menggunakan code convention yang sama dan tidak berbeda-beda. Disini akan berfokus pada 2 jenis linter, yaitu linter khusus JavaScript dan CSS.

### JavaScript Linter

Lalu _linter_ untuk JavaScript berikut adalah list linter yang terkenal dan sering dipakai:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [StandardJS](https://standardjs.com)
- [JSLint](https://jslint.com/)
- [JSHint](https://jshint.com/)

Linter yang sering digunakan di projek Bukalapak adalah _ESLint_. Salah satu linter yang perkembangannya sangat pesat dan banyak di _support_ oleh komunitas.

### CSS Linter

Berikut adalah _linter_ untuk CSS yang terkenal dan sering dipakai:

- [StyleLint](https://stylelint.io/)
- [SCSSLint](https://github.com/brigade/scss-lint)
- [Stylefmt](https://github.com/morishitter/stylefmt)
- [CSSLint](http://csslint.net/)

Untuk linter CSS sendiri yang sering digunakan di projek Bukalapak adalah _scss-lint_ karena base style yang digunakan oleh [Bukalapak Arin](https://github.com/bukalapak/arin) menggunakan SCSS tapi disini saya akan menjelaskan integrasi projek menggunakan _stylelint_ karena linter ini sangatlah fleksibel dan memiliki banyak plugin serta rules.

## Integration Guide

### ESLint Installation

Cara mengintegrasikan _ESLint_ ke sebuah projekpun tidak begitu sulit. Jika sudah memiliki JavaScript projek di repository Bukalapak cara install-nya cukup mudah, tinggal menjalankan _script_ di bawah.

```bash
### NPM
npm install -d eslint
### Yarn
yarn add --dev eslint
```

Setelah selesai install _ESLint_ selanjutnya jalankan command berikut untuk menginisiasi projek menggunakan linter.

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
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
```

Di file tersebut kita bisa meng-custom rules kita sendiri atau ambil rules yang sudah disediakan oleh komunitas. List rules dapat dilihat ditautan [berikut](https://eslint.org/docs/rules/).
Untuk melihat _command_ apa saja yang dapat dilakukan oleh _ESLint_ gunakan _command_ `npx eslint --help`.

Setelah kita melakukan integrasi dengan projek ketika editor kita support dengan _ESLint_ akan muncul _underscor_ merah atau kuning seperti gambar di bawah ini.

![eslint in action](/images/posts/code-quality-linter/eslint-action.jpg)
_eslint in action_

Ini menandakan bahwa _code_ yang kita buat tidak sesuai dengan aturan yang sudah di-_define_ oleh _ESLint_. Kita dipaksa untuk ubah _code_ tersebut agar _underscore_ merah tersebut hilang.
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

ps. Untuk flag `--fix` itu berfungsi untuk otomatis melakukan perbaikan terhadap kode yang dapat diperbaiki oleh _linte_ sedangkan yang tidak bisa hanya akan dimunculkan dihasil terminal.
Untuk flag `--ext` untuk mem-_filter_ _file_ dengan _extension_ apa saja yang akan dicek oleh _ESLint_.

### ESLint and Single Vue Component

Jika kita ingin _ESLint_ dapat melakukan pengecekan terhadap file berekstensi `.vue` caranya tidak terlalu sulit.

- Pertama tambahkan [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) dengan cara command berikut `yarn add --dev eslint-plugin-vue`
- Setelah itu edit file `.eslintrc.js` di _property_ `extends`. _Value_ dari _property_ ini dapat berupa _String_ ataupun _Array_. Karena akan ditambahkan rules lain untuk `.vue` _file_ maka kita menggunakan _value_ _array_. Tambah `‘plugin:vue/strongly-recommended’` di _index_ ke 1 maka akan seperti gambar di bawah ini. Untuk rules plugins dapat dilihat [di sini](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/README.md).

![extend config](/images/posts/code-quality-linter/eslint-extend.jpg)
_extend configs_

- Setelah itu edit sedikit _scripts_ untuk menajalankan _ESLint_ di file `package.json`. Tambahkan tipe _fil_ `.vue` pada script-nya. Contoh akhir akan seperti gambar di bawah ini.

![update script](/images/posts/code-quality-linter/eslint-update.jpg)
_update script_

Setelah itu jika kita jalankan `yarn lint` maka akan muncul _error_ pada `.vue` _file_ contohnya seperti gambar di bawah ini.

![vue warning](/images/posts/code-quality-linter/eslint-more-warning.jpg)
_vue warning_

Setelah itu tinggal ikuti rules yang sudah ditentukan diawal oleh _ESLint_.

### Stylelint Installation

Cara mengintegrasikan _Stylelint_ tidak begitu sulit, sama seperti mengintegrasikan _ESLint_ sebelumnya. Kita hanya cukup menambahkan _dependecies_ _stylelint_ dan konfigurasinya. Contoh seperti berikut:

```bash
### NPM
npm install -d stylelint stylelint-config-standard
### Yarn
yarn add --dev stylelint stylelint-config-standard
```

Disini saya menggunakan _stylelint-config-standard_ karena agar mudah diintegrasikan ke _Codeclimate_ jika ingin mengintegrasikan dengan _Codeclimate_ kedepannya. Jika ingin lihat _rules_ dan _plugins_ yang di-_support_ oleh _Codeclimate_ dapata dilihat pada [tautan ini](https://github.com/gilbarbara/codeclimate-stylelint).

Setelah _dependencies_ ter-_install_ kita hanya perlu menambahkan _file_ `.stylelintrc` untuk menambahkan _default config_ ke _stylelint_. Berikut isi file `.stylelintrc`:

```json
{
  "extends": ["stylelint-config-standard"]
}
```

Jika akan menambahkan _config_ yang tidak ada pada _stylelint_ kita dapat menambahkan _config_ tambahan di _fil_ `.stylelintrc` untuk melihat apa saja _config_ yang dapat ditambahkan dapat dilihat pada [tautan ini](https://stylelint.io/user-guide/rules/).
Setelah itu kita dapat menambahkan _script_ untuk menjalankan _stylelint_ di _package.json_. Berikut adalah _script_ yang perlu ditambahkan di file _package.json_.

```json
"scripts": {
  //...
	"lint:style": "stylelint 'assets/styles/***.scss' --fix",
  "lint:vue": "stylelint '***.vue' --fix"
  //...
}
```

Disitu dibuat dua agar saat menjalankan lint `scss` langsung fokus ke spesifik folder yang sudah didefinisikan di _script_. _Stylelint_ juga _support_ untuk melakukan _lint_ _css_, _scss_ di file `.vue`.

## Bonus: Husky + Lint-Stage

Adakalanya kita lupa untuk menjalankan _linter_ disini akan menjelaskan bagaimana menjalankan _script linter_ ketika kita melakukan _commit_ di projek kita. Kita hanya perlu menambahkan _dependency_ baru yaitu _lint-staged_ dan _husky_. Untuk menambahkannya kita hanya perlu menjalankan _script_ di bawah ini pada _terminal_.

```bash
### NPM
npm install -d lint-staged husky
### Yarn
yarn add --dev lint-staged husky
```

Setelah menambahkan _dependencies_ tersebut kita dapat menambahkan konfigurasi untuk menjalankan _linter_ sebelum _commit_ pada file `package.json`. Berikut adalah hal yang perlu ditambahkan.

```json
"lint-staged": {
	"*.{js,vue}": [
    "yarn lint:vue ",
    "yarn lint:script",
    "git add"
  ],
  "*.{scss,css}": [
    "yarn lint:style",
    "git add"
  ],
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

Di-_property_ _lint-staged_ dibedakan sesuai jenis file yang akan di-_commit_. Script akan dijalankan tergantung file yang di-_stage_ di _git_. Jika _file_ `.vue` saja, maka hanya akan dijalankan linter khusus `*.{js,vue}` saja. Jika file _css_ dan _vue_ berubah maka akan menjalankan kedua _linter_ tersebut sebelum melakukan _commit_. Jika ada yang gagal saat menjalankan _linter_ maka file tidak akan ter-_commit_.
