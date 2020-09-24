---
title: 'Belajar NodeJS: Cara Install NodeJS di Windows, MacOS, Linux Ubuntu'
cover: '/images/posts/install-nodejs/cover.jpg'
author: 'mikqi'
date: '2020-04-21'
category: 'Backend'
tags:
  - Javascript
  - NodeJS
---

<!-- WHAT + When + Intro + Latar Belakang masalah -->

Jika kamu ingin membuat sebuah web yang kekinian pasti tidak akan jauh-jauh membutuhkan yang namanya [NodeJS](https://nodejs.org). Di sini saya akan menjelaskan bagaimana cara meng-_install_ [NodeJS](https://nodejs.org) di Windows, MacOS dan Linux Ubuntu.

## Install NodeJS

Untuk pengguna Windows dan MacOS cukuplah mudah seperti meng-_install_ aplikasi lainnya, klik, next, next...

![NodeJS Homepage](/images/posts/install-nodejs/homepage.png)
_Nodejs Homepage_

Kamu hanya perlu ke halaman utama NodeJS lalu melakukan download dengan klik tombol hijau yang besar yang ada tulisan "**LTS (Recommended for Most Users)**". LTS kependekan dari _Long Time Support_. Versi LTS ini lebih stabil daripada versi yang berlabel _Current_ dan mendapatkan fitur dan improvement yang paling baru dan di-support cukup lama dibanding versi non LTS.

![NodeJS Homepage](/images/posts/install-nodejs/schedule.png)
_Jadwal release dan maintenance_

## Instalasi di Windows

Untuk meng-_install_ di Windows cukuplah mudah, seperti kamu melakukan instalasi aplikasi lain. Yang paling utama dibutuhkan adalah file _executeable_ dari NodeJS yang dapat kamu _download_ di halaman utmanya. Berikut adalah langkah-langkah yang dibutuhkan untuk install NodeJS di Windows.

1. Download NodeJS LTS di [halaman utama](https://nodejs.org/)
2. Setelah selesai _double click_ pada file _executeable_
3. Jika sudah ter-_install_ kamu dapat mengeceknya via _command prompt (cmd)_
4. Setelah _cmd_ terbuka kamu dapat mengetikan _command_ berikut untuk mengetahui versi berapa yang sudah terpasang di perangkat kamu.

```bash
node --version
# -> v12.9.1
```

Jika kamu mau install NodeJS di WSL, kamu bisa ikuti langkah-langkah [installasi di Ubuntu](#instalasi-di-ubuntu)

## Instalasi di MacOS

Untuk meng-_install_ di MacOS terdapat 2 cara, pertama mirip-mirip dengan Windows, yang kedua kita dapat meng-_install_-nya menggunakan [Homebrew](https://brew.sh). Tapi di sini saya menyarankan install menggunakan Homebrew karena lebih mudah. Berikut langkah-langkah jika kamu install menggunakan Homebrew.

1. Install [Homebrew](https://brew.sh) jika kamu masih belum ada. Ketikan _script_ ini di _terminal_ kamu.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

2. Jika sudah ter-_install_ kamu dapat check dengan mengetikan _script_ ini.

```bash
brew -v
# -> Homebrew 2.2.2
```

3. Setelah selesai kamu dapat mengetikan _command_ di bawah di terminal kamu.

```bash
brew install node
```

4. Jika installasi sukses maka kamu dapat cek di terminal seperti di bawah ini.

```bash
node -v
# -> v12.9.1
npm -v
# -> 6.10.2
```

Dan kamu sudah dapat bermain dengan NodeJS di Mac kamu.

## Instalasi di Ubuntu

Untuk pengguna Ubuntu atau WSL Ubuntu di Windows berikut adalah langkah-langkahnya.

1. Pertama kamu membutuhkan _curl_, jika belum ada _curl_ kamu dapat mengetikan _command_ ini di terminal kamu.

```bash
sudo apt-get install curl
```

2. Lalu tambahkan source NodeJS dengan _command_ berikut.

```bash
# setup_12.x 12 adalah versi NodeJS. Kalo kamu mau versi 14
# Kamu bisa ganti menjadi setup_14.x
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

3. Jika sudah menambahkan source NodeJS lalu ketikkan _command_ berikut untuk meng-_install_ NodeJS

```bash
sudo apt-get update
```

```bash
sudo apt-get install nodejs
```

4. Setelah meng-_install_ kamu dapat cek di terminal dengan menggunakan command berikut.

```bash
node -v
# -> v12.9.1
npm -v
# -> 6.10.2
```

## Summary

Di artikel ini saya sudah menjelaskan cara meng-_install_ NodeJS di Windows, Mac, dan Ubuntu. Jika kamu ingin ingin meng-_install_ NodeJS disarankan untuk memilih versi yang LTS. Karena versi LTS ini lebih stabil daripada versi yang lainnya dan kita mendapatkan fitur dan improvement yang paling baru dari NodeJS.
