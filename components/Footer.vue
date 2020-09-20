<template>
  <footer class="bg-gray-200 py-8 px-6 footer" lang="en">
    <div class="mx-auto max-w-2xl">
      <p class="font-sans text-sm mb-8">
        © {{ currentYear }} Muhammad Rivki. All rights reserved.
      </p>
      <p class="mb-1 font-sans text-sm">
        Connect with me on
        <a class="underline" href="https://twitter.com/__mikqi">Twitter</a>,
        <a class="underline" href="https://linkedin.com/in/muhammadrivki"
          >Linkedin</a
        >, or
        <a class="underline" href="https://github.com/mikqi">Github</a>
      </p>
      <p class="mb-10 font-sans text-sm">
        This site is built with
        <a class="underline" href="https://nuxtjs.org">NuxtJS</a>
        and hosted on
        <a class="underline" href="https://www.netlify.com">Netlify</a>. The
        source code is hosted on
        <a class="underline" href="https://github.com/mikqi/blog.rivki.id"
          >Github</a
        >.
      </p>
      <ul class="mb-5 flex items-center text-sm">
        <li v-for="menu in listMenus" :key="menu.name" class="pr-4">
          <nuxt-link :to="menu.path" class="underline" tag="a">{{
            menu.label
          }}</nuxt-link>
        </li>
        <li class="pr-4">
          <a href="/sitemap.xml" class="underline">Sitemap</a>
        </li>
        <li>
          <a href="/feed.xml" class="underline">RSS</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    listMenus() {
      const menus = [
        {
          name: 'about',
          label: 'About',
          path: '/about',
        },
        {
          name: 'portfolio',
          label: 'Portfolio',
          path: '/portfolio',
        },
        {
          name: 'articles',
          label: 'Articles',
          path: '/articles',
        },
        {
          name: 'uses',
          label: 'Uses',
          path: '/uses',
        },
      ]
      return menus
    },
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.footer {
  @apply bg-gray-200 text-gray-800;
}
.dark-mode .footer {
  @apply bg-gray-700 text-white;
}
</style>
