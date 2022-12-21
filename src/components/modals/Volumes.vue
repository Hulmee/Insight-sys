<template>
  <teleport to="body">
    <section
      class="modal"
      @click.self="$emit('close')">
      <div class="card">
        <div class="btn-con">
          <h3 class="card-subtitle">Volume zones</h3>
          <font-awesome-icon
            @click="$emit('close')"
            class="close"
            icon="fa-solid fa-xmark" />
        </div>
        <div
          v-for="vol in vols"
          :key="vol.id"
          class="btn-con">
          <div
            @click="vol.value--"
            class="btn-rnd btn-rnd-sm">
            <font-awesome-icon icon="fa-solid fa-volume-low" />
          </div>
          <div class="vol">
            <label>{{ vol.name }}</label>
            <progress
              max="100"
              :value="vol.value"></progress>
          </div>
          <div
            @click="vol.value++"
            class="btn-rnd btn-rnd-sm">
            <font-awesome-icon icon="fa-solid fa-volume-high" />
          </div>
        </div>
      </div>
    </section>
  </teleport>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const emit = defineEmits(['close']),
    vols = ref([
      {
        id: 1,
        name: 'zone 1',
        value: 75,
      },
      {
        id: 2,
        name: 'zone 2',
        value: 50,
      },
      {
        id: 3,
        name: 'zone 3',
        value: 50,
      },
    ])
</script>

<style scoped>
  /* progress {
    width: 50%;
  } */
  .btn-con {
    width: 100%;
    justify-content: center;
  }
  .vol {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h3,
  label,
  .close {
    color: var(--light);
  }
  .close {
    margin-left: auto;
    /* margin-right: 1em */
    transform: translateY(-40px);
  }
  .card-subtitle {
    margin-left: auto;
  }
</style>
