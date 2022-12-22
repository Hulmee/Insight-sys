<template>
  <section
    @click.self="$emit('no')"
    class="modal">
    <div class="card">
      <h1 class="card-title">Reset Conections</h1>
      <p class="card-text">
        this action will disconect all device from the Airmedia in
        {{ $route.name }} room
      </p>
      <p class="card-text">would you like to contiue</p>

      <div class="btn-con">
        <div class="btn-rnd">
          <font-awesome-icon icon="fa-solid fa-check" />
        </div>
        <div
          @click.self="$emit('no')"
          class="btn-rnd">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
      </div>
      <small class="">
        action will be canceled in
        <span v-if="timeleft < 10">0</span>
        <span>{{ timeleft }}</span
        >s
      </small>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref } from '@vue/runtime-core'

  const emit = defineEmits(['yes', 'no']),
    timeleft = ref(10)
  onMounted(() => {
    const downloadTimer = setInterval(function () {
      if (timeleft.value <= 0) {
        clearInterval(downloadTimer)
        emit('no')
      }
      timeleft.value -= 1
    }, 1000)
  })
</script>

<style scoped>
  .card-text {
    margin: 1em;
    text-align: center;
  }
  .card {
    min-height: 300px;
    /* width: 150px; */
  }
</style>
