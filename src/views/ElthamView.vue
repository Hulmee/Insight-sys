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

  // const details = ref({
  const HDMI = ref({
      conected: true,
      HDCP: false,
      resolution: '1920 x 1080',
    }),
    Airmedia = ref({
      IPadress: '10.0.0.xxx',
      Code: '1988',
      Hostname: 'Eltham-Room',
      numUsers: 2,
    })
  // })
</script>

<style scoped>
  main {
    flex-direction: column;
  }
</style>
