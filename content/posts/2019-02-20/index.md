---
title: "Improve Your Code Quality With Linter"
cover: "https://i.github-camo.com/747890af1149385e1e7b5353c5d2b2133017b499/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f786f6a732f61746f6d2d6c696e7465722d786f2f76302e32392e302f73637265656e73686f742e706e67"
author: "mikqi"
date: "2019-02-20"
category: "tutorial"
tags:
    - tutorial
    - javascript
---

Lint atau linter adalah alat untuk menganalisa source code untuk menandai errors, bug, code convention dan memverifikasi kualitas kode. Seberapa penting sih linter dengan projek yang kita buat? Jawabannya menurut saya itu penting. Dengan adanya linter kita dipaksa untuk belajar dan disiplin untuk menulis kode yang bagus dan rapi tapi tetap tidak bugfree dan untuk projek skala besar linter sangat dianjurkan agar semua yang ikut berkontribusi menggunakan code convention yang sama dan tidak berbeda-beda. Disini akan berfokus pada 2 jenis linter, yaitu linter khusus JavaScript dan CSS.

### JavaScript Linter

Lalu *linter* untuk JavaScript  berikut adalah list linter yang terkenal dan sering dipakai:
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [StandardJS](https://standardjs.com)
* [JSLint](https://jslint.com/)
* [JSHint](https://jshint.com/)

Linter yang sering digunakan di projek Bukalapak adalah *ESLint*. Salah satu linter yang perkembangannya sangat pesat dan banyak di *support* oleh komunitas.

### CSS Linter

Berikut adalah *linter* untuk CSS yang terkenal dan sering dipakai:
* [StyleLint](https://stylelint.io/) 
* [SCSSLint](https://github.com/brigade/scss-lint)
* [Stylefmt](https://github.com/morishitter/stylefmt)
* [CSSLint](http://csslint.net/) 

Untuk linter CSS sendiri yang sering digunakan di projek Bukalapak adalah *scss-lint* karena base style yang digunakan oleh [Bukalapak Arin](https://github.com/bukalapak/arin) menggunakan SCSS tapi disini saya akan menjelaskan integrasi projek menggunakan *stylelint* karena linter ini sangatlah fleksibel dan memiliki banyak plugin serta rules.

## Integration Guide 

### ESLint Installation

Cara mengintegrasikan *ESLint* ke sebuah projekpun tidak begitu sulit. Jika sudah memiliki JavaScript projek di repository Bukalapak cara install-nya cukup mudah, tinggal menjalankan *script* di bawah.

```bash
### NPM
npm install -d eslint
### Yarn
yarn add --dev eslint
```

Setelah selesai install *ESLint* selanjutnya jalankan command berikut untuk menginisiasi projek menggunakan linter.

```bash
### NPM versi >= v5.2.0
npx eslint --init
```
Maka akan muncul seperti gambar di bawah ini.

![init](/images/posts/code-quality-linter/eslint-init.jpg)
*eslint init*

Kita diberikan 3 pilihan.
Yang pertama menggunakan 3 config yang sering dipakai yaitu:

* [Airbnb](https://github.com/airbnb/javascript) 
* [Standard](https://github.com/standard/standard)
* [Google](https://github.com/google/eslint-config-google)

Yang kedua kita define sendiri basic rules yang akan digunakan dan yang ketiga sesuai itu meng-inspect files JavaScript di-project. Disini saya sarankan menggunakan opsi kedua agar lebih mudah dan fleksible untuk custom-nya. Jika pilih yang ketiga akan diberikan pertanyaan seperti gambar di bawah ini.

![questions](/images/posts/code-quality-linter/eslint-question.jpg)
*eslint config*

Lalu kita akan dibuatkan files `.eslintrc.js`. Contoh isi file-nya seperti di bawah ini.

```javascript
module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
};
```

Di file tersebut kita bisa  meng-custom rules kita sendiri atau ambil rules yang sudah disediakan oleh komunitas. List rules dapat dilihat ditautan [berikut](https://eslint.org/docs/rules/).
Untuk melihat *command* apa saja yang dapat dilakukan oleh *ESLint* gunakan *command* `npx eslint --help`.

Setelah kita melakukan integrasi dengan projek ketika editor kita support dengan *ESLint* akan muncul *underscor* merah atau kuning seperti gambar di bawah ini.

![action](/images/posts/code-quality-linter/eslint-action.jpg)
*eslint in action*

Ini menandakan bahwa *code* yang kita buat tidak sesuai dengan aturan yang sudah di-*define* oleh *ESLint*. Kita dipaksa untuk ubah *code* tersebut agar *underscore* merah tersebut hilang.
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

Jika sudah ditambahkan script tersebut kita tinggal menjalankan command `yarn lint:scripts`  atau `npm run lint:scripts`pada *terminal*. Jika terdapat kesalahan pada kode yang sudah kita buat maka akan muncul *error* atau *warning* setelah menajalankan *linter*. Contoh error seperti gambar di bawah ini.

![init](/images/posts/code-quality-linter/eslint-terminal.jpg)
*error di terminal*

ps. Untuk flag `--fix` itu berfungsi untuk otomatis melakukan perbaikan terhadap kode yang dapat diperbaiki oleh *linte* sedangkan yang tidak bisa hanya akan dimunculkan dihasil terminal.
Untuk flag `--ext` untuk mem-*filter* *file* dengan *extension* apa saja yang akan dicek oleh *ESLint*.

### ESLint and Single Vue Component

Jika kita ingin *ESLint* dapat melakukan pengecekan terhadap file berekstensi `.vue` caranya tidak terlalu sulit.

* Pertama tambahkan [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) dengan cara command berikut `yarn add --dev eslint-plugin-vue`
* Setelah itu edit file `.eslintrc.js` di *property* `extends`. *Value* dari *property* ini dapat berupa *String* ataupun *Array*. Karena akan ditambahkan rules lain untuk `.vue` *file* maka kita menggunakan *value* *array*. Tambah `‘plugin:vue/strongly-recommended’` di *index* ke 1 maka akan seperti gambar di bawah ini. Untuk rules plugins dapat dilihat [di sini](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/README.md).

![init](/images/posts/code-quality-linter/eslint-extend.jpg)
*extend configs*

* Setelah itu edit sedikit *scripts* untuk menajalankan *ESLint* di file `package.json`. Tambahkan tipe *fil* `.vue` pada script-nya. Contoh akhir akan seperti gambar di bawah ini.

![init](/images/posts/code-quality-linter/eslint-update.jpg)
*update script*

Setelah itu jika kita jalankan `yarn lint` maka akan muncul *error* pada `.vue` *file* contohnya seperti gambar di bawah ini.

![init](/images/posts/code-quality-linter/eslint-more-warning.jpg)
*vue warning*

Setelah itu tinggal ikuti rules yang sudah ditentukan diawal oleh *ESLint*.

### Stylelint Installation

Cara mengintegrasikan *Stylelint* tidak begitu sulit, sama seperti mengintegrasikan *ESLint* sebelumnya. Kita hanya cukup menambahkan *dependecies* *stylelint* dan konfigurasinya. Contoh seperti berikut:

```bash
### NPM
npm install -d stylelint stylelint-config-standard
### Yarn
yarn add --dev stylelint stylelint-config-standard
```

Disini saya menggunakan *stylelint-config-standard* karena agar mudah diintegrasikan ke *Codeclimate* jika ingin mengintegrasikan dengan *Codeclimate* kedepannya. Jika ingin lihat *rules* dan *plugins* yang di-*support* oleh *Codeclimate* dapata dilihat pada [tautan ini](https://github.com/gilbarbara/codeclimate-stylelint).

Setelah *dependencies* ter-*install* kita hanya perlu menambahkan *file*  `.stylelintrc` untuk menambahkan *default config* ke *stylelint*.  Berikut isi file `.stylelintrc`:

```json
{
  "extends": [
    "stylelint-config-standard"
  ]
}
```

Jika akan menambahkan *config* yang tidak ada pada *stylelint* kita dapat menambahkan *config* tambahan di *fil* `.stylelintrc` untuk melihat apa saja *config* yang dapat ditambahkan dapat dilihat pada [tautan ini](https://stylelint.io/user-guide/rules/).
Setelah itu kita dapat menambahkan *script* untuk menjalankan *stylelint* di *package.json*. Berikut adalah *script* yang perlu ditambahkan di file *package.json*.

```json
"scripts": {
  //...
	"lint:style": "stylelint 'assets/styles/***.scss' --fix",
  "lint:vue": "stylelint '***.vue' --fix"
  //...
}
```

Disitu dibuat dua agar saat menjalankan lint `scss`  langsung fokus ke spesifik folder yang sudah didefinisikan di *script*. *Stylelint* juga *support* untuk melakukan *lint* *css*, *scss* di file `.vue`. 

## Bonus: Husky + Lint-Stage

Adakalanya kita lupa untuk menjalankan *linter* disini akan menjelaskan bagaimana menjalankan *script linter* ketika kita melakukan *commit* di projek kita. Kita hanya perlu menambahkan *dependency* baru yaitu *lint-staged* dan *husky*. Untuk menambahkannya kita hanya perlu menjalankan *script* di bawah ini pada *terminal*.

```bash
### NPM
npm install -d lint-staged husky
### Yarn
yarn add --dev lint-staged husky
```

Setelah menambahkan *dependencies* tersebut kita dapat menambahkan konfigurasi untuk menjalankan *linter* sebelum *commit* pada file `package.json`. Berikut adalah hal yang perlu ditambahkan.

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

Di-*property* *lint-staged* dibedakan sesuai jenis file yang akan di-*commit*. Script akan dijalankan tergantung file yang di-*stage* di *git*.  Jika *file* `.vue` saja, maka hanya akan dijalankan linter khusus `*.{js,vue}` saja. Jika file *css* dan *vue* berubah maka akan menjalankan kedua *linter* tersebut sebelum melakukan *commit*. Jika ada yang gagal saat menjalankan *linter* maka file tidak akan ter-*commit*.

