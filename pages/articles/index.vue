<template>
  <main class="mt-12 md:mt-24 px-6 sm:px-0">
    <h1
      class="p-name mb-4 text-3xl sm:text-4xl font-bold leading-none lg:max-w-90"
    >
      Articles
    </h1>
    <div>
      <article v-for="year in years" :key="year">
        <h3 class="mb-4 mt-10 text-2xl font-bold">{{ year }}</h3>
        <div
          v-for="(article, idx) in articlesGrouped[year]"
          :key="year + idx"
          class="md:flex justify-between mb-3"
        >
          <h3 :key="year + idx">
            <nuxt-link
              tag="a"
              :to="article.path"
              :aria-label="article.title"
              class="font-semibold no-underline hover:underline"
            >
              {{ article.title }}
            </nuxt-link>
          </h3>
          <div>{{ date(article.date) }}</div>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'ArticlesPage',
  async asyncData({ $content }) {
    const articlesData = await $content('articles')
      .sortBy('date', 'desc')
      .only(['date', 'path', 'title', 'tags', 'category'])
      .fetch()

    const articlesGrouped = {}
    // GROUP ARTICLE BY YEAR
    articlesData.forEach((article) => {
      const year = article.date.substr(0, 4)
      if (Object.keys(articlesGrouped).includes(year)) {
        articlesGrouped[year].push(article)
      } else {
        articlesGrouped[year] = [article]
      }
    })

    return {
      articlesGrouped,
      years: Object.keys(articlesGrouped).reverse(),
    }
  },
  methods: {
    date(val, locale = 'id') {
      return dayjs(val).locale(locale).format('MMM DD')
    },
  },
}
</script>
