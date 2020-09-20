<template>
  <header class="mb-8">
    <nav
      class="flex flex-col sm:flex-row justify-between py-4 md:px-0 px-6 container max-w-2xl mx-auto"
      role="navigation"
    >
      <div class="self-center">
        <nuxt-link to="/" class="text-lg no-underline font-semibold">
          Rivki, Muhammad
        </nuxt-link>
      </div>
      <ul class="flex mt-2 sm:mt-0 space-x-4 self-center">
        <li v-for="menu in listMenus" :key="menu.name">
          <nuxt-link
            class="duration-300 rounded no-underline bg-transparent nav px-2 py-1"
            :to="menu.path"
            tag="a"
          >
            {{ menu.label }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
  },
}
</script>

<style scoped>
.nav:hover {
  @apply bg-gray-200;
}

.dark-mode .nav:hover {
  @apply bg-gray-700;
}

.nav.nuxt-link-active {
  @apply bg-gray-200;
}

.dark-mode .nav.nuxt-link-active {
  @apply bg-gray-700;
}
</style>
