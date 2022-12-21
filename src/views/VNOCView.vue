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
      <section
        id="LCD"
        class="card">
        <h1 class="card-title">Screen 1 control</h1>
        <div class="btn-con">
          <h3>Screen Power:</h3>
          <div class="btn-rnd btn-rnd-sm">
            <font-awesome-icon icon="fa-solid fa-power-off" />
          </div>
        </div>
        <div class="btn-con">
          <h4>Input:</h4>
          <div class="select">
            <select
              name="input"
              id="input">
              <option value="1">HDMI 1</option>
              <option value="2">HDMI 2</option>
              <option value="3">RGBHV</option>
              <option value="4">Video</option>
            </select>
          </div>
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
  #LCD {
    min-height: 250px;
    /* width: 100%; */
  }
  .true {
    background: linear-gradient(145deg, #62be78, #53a065);
  }
  .false {
    background: linear-gradient(145deg, #ff7878, #e66565);
  }
  select {
    /* // A reset of styles, including removing the default dropdown arrow */
    appearance: none;
    /* // Additional resets for further consistency */
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }

  .select {
    width: 75%;
    /* min-width: 15ch;
  max-width: 30ch; */
    border: 3px solid var(--btn-br);
    border-radius: 0.75em;
    padding: 0.25em 0.5em;
    font-size: 1.17em;
    cursor: pointer;
    background-color: var(--light3);
    color: var(--dark);

    display: grid;
    grid-template-areas: 'select';
    align-items: center;
  }
  .select::after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
  select,
  .select:after {
    grid-area: select;
    justify-self: end;
  }
</style>
