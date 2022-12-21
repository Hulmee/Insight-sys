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
      conected: false,
      HDCP: false,
      resolution: '1280 x 720',
    }),
    Airmedia = ref({
      IPadress: '10.0.0.xxx',
      Code: '1234',
      Hostname: 'Mitcham-Room',
      numUsers: 1,
    })
  // })
</script>

<style scoped>
  main {
    flex-direction: column;
  }
</style>
