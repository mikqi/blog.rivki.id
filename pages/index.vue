<template>
  <div class="container">
    <NuxtContent
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="markdown"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const markdown = await $content('hello').fetch()

    console.log(markdown)
    return {
      markdown,
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
