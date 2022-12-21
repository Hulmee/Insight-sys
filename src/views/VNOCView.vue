<template>
  <main>
    <header class="container">
      <h1 class="">Video Wall</h1>
      <div
        @click="VWpower = !VWpower"
        class="btn-rnd"
        :class="{ true: VWpower, false: !VWpower }">
        <font-awesome-icon
          icon="fa-solid fa-power-off"
          size="2x" />
      </div>
    </header>
    <div class="container controls">
      <section class="card">
        <h1 class="card-title">Screen 1 control</h1>
        <div class="btn-con">
          HDCP active:
          <div class="btn-rnd btn-rnd-sm"></div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const VWpower = ref(true)
</script>

<style scoped>
  main {
    flex-direction: column;
  }
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .controls {
    height: 75%;
    width: 100%;
  }
  .true {
    background: linear-gradient(145deg, #62be78, #53a065);
  }
  .false {
    background: linear-gradient(145deg, #ff7878, #e66565);
  }

</style>
