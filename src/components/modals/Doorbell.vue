<template>
  <teleport to="body">
    <section
      class="modal"
      @click.self="$emit('close')">
      <div class="card">
        <h3 class="card-subtitle">Doorbell</h3>
        <iframe
          src="https://www.youtube-nocookie.com/embed/6My4Hdj5oW8?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <!-- <div class="btn-con">
          <div class="btn-rnd btn-rnd-sm"></div>
          <div class="btn-rnd btn-rnd-sm"></div>
        </div> -->
        <div
          @click="$emit('close')"
          class="btn-rec btn-rec-sm">
          <h2>Close</h2>
          <!-- <font-awesome-icon
            class=""
            icon="fa-solid fa-xmark" /> -->
        </div>
      </div>
    </section>
  </teleport>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const emit = defineEmits(['close'])
</script>

<style scoped>
  /* progress {
      width: 50%;
    } */
  .btn-con {
    width: 100%;
    justify-content: space-around;
  }
  .card {
    width: 500px;
    /* aspect-ratio: 1/1.25; */
  }
  .vol {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h3,
  label {
    color: var(--light);
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
  }
</style>
