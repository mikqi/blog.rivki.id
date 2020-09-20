<template>
  <main class="mt-12 md:mt-24 px-6 sm:px-0">
    <h1
      class="p-name mb-4 text-3xl sm:text-4xl font-bold leading-none lg:max-w-90"
    >
      Articles
    </h1>
    <div>
      <article
        v-for="(article, idx) in articles"
        :key="idx"
        class="md:flex justify-between mb-3"
      >
        <h3>
          <a
            :href="article.path"
            :aria-label="article.title"
            class="font-semibold no-underline hover:underline"
          >
            {{ article.title }}
          </a>
        </h3>
        <div>{{ article.date }}</div>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ArticlesPage',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('date', 'desc')
      .only(['date', 'path', 'title', 'tags', 'category'])
      .fetch()

    return {
      articles,
    }
  },
}
</script>
