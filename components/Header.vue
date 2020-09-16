<template>
  <header class="bg-gray-900 mb-8">
    <nav
      class="flex flex-col sm:flex-row justify-between py-8 md:px-0 sm:px-6 container max-w-2xl mx-auto"
      role="navigation"
    >
      <div class="sm:self-center">
        <nuxt-link
          to="/"
          class="text-lg no-underline font-semibold rounded transition-colors text-white duration-300"
        >
          Rivki, Muhammad
        </nuxt-link>
      </div>
      <ul class="flex mt-2 sm:mt-0 space-x-4 sm:self-center">
        <li v-for="menu in listMenus" :key="menu.name">
          <nuxt-link
            class="duration-300 hover:bg-gray-800 hover:text-white text-white px-2 py-1 rounded transition-colors"
            :class="{ 'menu-active': menu.name === $nuxt.$route.name }"
            :to="menu.path"
            tag="a"
            >{{ menu.label }}</nuxt-link
          >
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
.menu-active {
  @apply bg-gray-800 px-2 py-1 rounded text-white;
}
</style>
