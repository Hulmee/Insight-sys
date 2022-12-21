<template>
  <main>
    <header class="container">
      <h1 class="">Video Wall</h1>
      <div
        @click="mainPwwr"
        class="btn-rnd"
        :class="{ true: VWpower, false: !VWpower }">
        <font-awesome-icon
          icon="fa-solid fa-power-off"
          size="2x" />
      </div>
    </header>
    <div class="controls">
      <section
        id="LCD"
        class="card">
        <h1 class="card-title">Screen {{ screenCon }} control</h1>
        <div class="btn-con">
          <h3>Screen Power:</h3>
          <div
            @click="lcdsPwr(lcds[screenCon - 1])"
            id="con-pwr"
            class="btn-rnd btn-rnd-sm"
            :class="{
              true: lcds[screenCon - 1].on,
              false: !lcds[screenCon - 1].on,
            }">
            <font-awesome-icon icon="fa-solid fa-power-off" />
          </div>
        </div>
        <div class="btn-con">
          <h4>Input:</h4>
          <div class="select">
            <select
              name="input"
              id="input"
              v-model="lcds[screenCon - 1].input">
              <option value="1">HDMI 1</option>
              <option value="2">HDMI 2</option>
              <option value="3">RGBHV</option>
              <option value="4">Video</option>
            </select>
          </div>
        </div>
      </section>
      <section class="screens">
        <div
          v-for="LCD in lcds"
          :key="LCD.id"
          @click="screenCon = LCD.id"
          class="lcd"
          :class="{ active: screenCon == LCD.id }">
          <h2>{{ LCD.id }}</h2>
          <font-awesome-icon
            class="LCD-pwr"
            :class="{ on: LCD.on }"
            icon="fa-solid fa-power-off" />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const VWpower = ref(true),
    screenCon = ref(1),
    lcds = ref([
      {
        id: 1,
        on: false,
        input: 4,
      },
      {
        id: 2,
        on: true,
        input: 1,
      },
      {
        id: 3,
        on: true,
        input: 1,
      },
      {
        id: 4,
        on: false,
        input: 3,
      },
      {
        id: 5,
        on: true,
        input: 1,
      },
      {
        id: 6,
        on: true,
        input: 1,
      },
    ]),
    mainPwwr = () => {
      VWpower.value = !VWpower.value
      lcds.value.forEach(e => {
        e.on = VWpower.value
      })
    },
    lcdsPwr = e => {
      e.on = !e.on
      if (e.on) VWpower.value = true
    }
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column-reverse;
  }
  .screens {
    margin-left: 0.5em;
    /* height: 75%; */
    width: 50%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(150px 200px));
  }
  .lcd {
    width: 100%;
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid var(--light3);
  }
  .lcd > h2 {
    margin-left: auto;
  }
  .lcd > svg {
    margin: auto 1em 1em auto;
  }
  .LCD-pwr {
    color: var(--fail);
  }
  .LCD-pwr.on {
    color: var(--success);
  }
  #LCD {
    min-height: 250px;
    /* width: 100%; */
  }
  #con-pwr.true,
  .true {
    background: linear-gradient(145deg, #62be78, #53a065);
  }
  #con-pwr.false,
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
  .active {
    color: var(--gold);
    border-color: var(--gold);
  }
</style>
