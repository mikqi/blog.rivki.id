<template>
  <div>
    <Header />
    <div class="container max-w-2xl mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
  },
}
</script>
