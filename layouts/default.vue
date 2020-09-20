<template>
  <div>
    <Header />
    <div class="min-container container max-w-2xl mx-auto">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
.min-container {
  min-height: calc(100vh - 400px);
}
</style>
