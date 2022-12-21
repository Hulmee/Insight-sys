<template>
  <main>
    <header>
      <div
        @click="camera = true"
        class="btn-rec"
        :class="{ linked: camera }">
        Camera Control
      </div>
      <div
        @click="camera = false"
        class="btn-rec"
        :class="{ linked: !camera }">
        Conection Details
      </div>
    </header>
    <Presention
      v-if="!camera"
      :HDMI="HDMI"
      :Airmedia="Airmedia" />
    <Camera v-if="camera" />
  </main>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import Presention from '../components/Presention.vue'
  import Camera from '../components/Camera.vue'

  const HDMI = ref({
      conected: false,
      HDCP: false,
      resolution: '1920 x 1080',
    }),
    Airmedia = ref({
      IPadress: '10.0.0.xxx',
      Code: '0000',
      Hostname: 'Melbourne-Room',
      numUsers: 0,
    }),
    camera = ref(true)
</script>

<style scoped>
  main {
    flex-direction: column;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
