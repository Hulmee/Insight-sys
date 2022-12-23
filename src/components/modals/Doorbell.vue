<template>
  <teleport to="body">
    <section
      class="modal"
      @click.self="$emit('close')">
      <div class="card">
        <h3 class="card-subtitle">Doorbell</h3>

        <iframe
          src="https://giphy.com/embed/3o7TKAXB6Kav3UdFVm"
          width="480"
          height="270"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen></iframe>
        <!-- <p>
          <a
            href="https://giphy.com/gifs/south-park-the-book-of-mormon-musical-3o7TKAXB6Kav3UdFVm"
            >via GIPHY</a
          >
        </p> -->
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
