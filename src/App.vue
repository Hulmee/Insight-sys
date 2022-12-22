<template>
  <div
    id="theme"
    :class="{ 'dark-theme': darkMode, 'light-theme': !darkMode }">
    <header class="">
      <!-- <RouterLink> -->
      <Logo
        @click="bellFB = true"
        id="logo"
        :class="{ dark: darkMode, light: !darkMode }"
        class="" />
      <!-- </RouterLink> -->
      <h1>{{ $route.name }}</h1>
      <h2
        id="time"
        class="">
        12:00 PM
      </h2>
    </header>
    <section class="container">
      <nav class="">
        <RouterLink
          class="nav-item"
          to="/VNOC">
          VNOC
        </RouterLink>

        <RouterLink
          class="nav-item"
          to="/Eltham">
          Eltham
        </RouterLink>
        <RouterLink
          class="nav-item"
          to="/Mitcham">
          Mitcham
        </RouterLink>
        <RouterLink
          class="nav-item"
          to="/Melbourne">
          Melbourne
        </RouterLink>
        <RouterLink
          class="nav-item"
          to="/Vermont">
          Vermont
        </RouterLink>
        <RouterLink
          class="nav-item"
          to="/Victoria">
          Victoria
        </RouterLink>
        <div
          id="vol"
          class="container">
          <div
            @click="volFB = !volFB"
            class="btn-rnd btn-rnd-sm">
            <font-awesome-icon icon="fa-solid fa-volume-high" />
          </div>
          <div
            @click="themechange"
            class="btn-rnd btn-rnd-sm"
            id="th-btn">
            <font-awesome-icon
              v-if="darkMode"
              icon="fa-Solid fa-sun" />
            <font-awesome-icon
              v-if="!darkMode"
              icon="fa-solid fa-moon" />
          </div>
        </div>
      </nav>
      <RouterView class="container" />
    </section>
  </div>
  <Volumes
    v-if="volFB"
    @close="volFB = false" />
  <Doorbell
    v-if="bellFB"
    @close="bellFB = false" />
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import { RouterLink, RouterView } from 'vue-router'
  import { onMounted } from '@vue/runtime-core'

  import Logo from '@/components/Logo.vue'
  import Volumes from './components/modals/Volumes.vue'
  import Doorbell from './components/modals/Doorbell.vue'

  const darkMode = ref(false),
    volFB = ref(false),
    bellFB = ref(true),
    themechange = () => {
      darkMode.value = !darkMode.value
      localStorage.setItem('theme', JSON.stringify(darkMode.value))
      console.log(JSON.parse(localStorage.theme))
    }
  onMounted(() => {
    const val = JSON.parse(localStorage.theme)
    if (val === null) {
      localStorage.setItem('theme', JSON.stringify(darkMode.value))
    } else {
      darkMode.value = val
    }
  })
</script>

<style>
  #logo.dark > path {
    fill: #fff;
  }
</style>

<style scoped>
  main {
    height: 100%;
    width: 100%;
  }

  #theme {
    height: 100%;
    width: 100%;
    background-color: var(--BG);
    color: var(--CL);
  }
  header {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #logo {
    width: 200px;
    padding: 1em;
  }

  #time {
    /* margin-right: 2em; */
    width: 200px;
    height: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  section {
    /* height: 100%; */
    height: calc(100% - 100px);
  }
  nav {
    min-width: 200px;
    height: 100%;

    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .nav-item:first-child {
    margin-top: 1em;
  }
  .nav-item {
    width: 175px;
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    /* margin: 0 0 0.5em 1em; */
    margin-top: 0.5em;

    transition: 300ms;
    cursor: pointer;
    color: inherit;
  }

  .router-link-active {
    color: var(--gold);
    /* box-shadow: 10px 10px 60px #181a1a, -10px -10px 60px #606666; */
    box-shadow: var(--nav-shadow);
  }
  #vol {
    margin-top: auto;
    margin-bottom: 1em;
  }
  a {
    text-decoration: none;
  }
  #th-btn > svg {
    font-size: 1.5em;
  }
</style>
