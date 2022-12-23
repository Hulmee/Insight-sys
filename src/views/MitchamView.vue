<template>
  <main class="">
    <Presention
      :HDMI="HDMI"
      :Airmedia="Airmedia" />
  </main>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import Presention from '../components/Presention.vue'
  import { usePresStore } from '@/stores/PresStore'

  const {
    Mitcham: { HDMI, Airmedia },
  } = usePresStore()
</script>

<style scoped>
  main {
    flex-direction: column;
  }
</style>
