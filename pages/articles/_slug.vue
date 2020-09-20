<template>
  <div>
    <main
      class="mt-6 md:mt-12 px-6 sm:px-0 min-container container max-w-2xl mx-auto"
    >
      <article class="prose prose-sm sm:prose-xl">
        <div class="mx-auto text-left mb-12">
          <img
            :src="article.cover"
            class="object-cover bg-center h-64 w-full rounded-lg"
            alt="Kutty"
          />
          <p class="mt-6 mb-2 uppercase tracking-wider font-semibold text-xs">
            {{ article.category }}
          </p>
          <h1
            class="text-3xl md:text-4xl leading-tight mb-3 title"
            :title="article.title"
          >
            {{ article.title }}
          </h1>
          <div class="flex space-x-2 mb-6">
            <a
              v-for="(tag, idx) in article.tags"
              :key="idx + tag"
              class="badge badge-light"
              href="#"
            >
              {{ tag }}
            </a>
          </div>
        </div>
        <nuxt-content :document="article" />
      </article>
    </main>
    <div class="sm:flex">
      <nuxt-link
        v-if="prev"
        class="flex flex-1 h-64 text-center text-xl relative"
        :style="`background: url(${prev.cover}) no-repeat center center; background-size: cover`"
        :to="prev.path"
        tag="a"
      >
        <div class="flex justify-center items-center w-full h-full flex-col">
          <span class="badge z-10 mb-2">Read Prev</span>
          <span class="z-10">{{ prev.title }}</span>
          <div
            class="w-full h-full bg-gray-900 opacity-75 hover:bg-black absolute"
          />
        </div>
      </nuxt-link>
      <nuxt-link
        v-if="next"
        class="flex flex-1 h-64 text-center text-xl relative"
        :style="`background: url(${next.cover}) no-repeat center center; background-size: cover`"
        :to="next.path"
        tag="a"
      >
        <div class="flex justify-center items-center w-full h-full flex-col">
          <span class="badge z-10 mb-2">Read Next</span>
          <span class="z-10">{{ next.title }}</span>
          <div
            class="w-full h-full bg-gray-900 opacity-75 hover:bg-black absolute"
          />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  layout: 'empty',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'cover'])
      .sortBy('date', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
}
</script>

<style scoped>
.prose {
  overflow-wrap: anywhere;
}
.badge,
.prose a.badge {
  @apply text-center no-underline font-semibold relative;
  @apply overflow-hidden py-1 px-3 w-auto inline-flex items-center;
  @apply leading-none whitespace-no-wrap align-baseline text-xs font-medium;
  @apply rounded-full transition-colors duration-150 ease-in no-underline bg-gray-200 text-gray-900;
}

.dark-mode .badge,
.dark-mode .prose a.badge {
  @apply bg-gray-700 text-white;
}

.badge:hover,
.prose a.badge:hover {
  @apply opacity-75;
}

.prose .title {
  @apply mb-5;
}
</style>
