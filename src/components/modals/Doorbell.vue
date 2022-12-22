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
        <div
          @click="$emit('close')"
          class="btn-rec btn-rec-sm">
          <h2>Close</h2>
        </div>
      </div>
    </section>
  </teleport>
</template>

<script setup>
  const emit = defineEmits(['close'])
</script>

<style scoped>
  .card {
    width: 500px;
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
