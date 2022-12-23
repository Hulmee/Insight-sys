<template>
  <main class="container">
    <!-- <h1>Settings</h1> -->
    <h2>IP Table</h2>
    <ul>
      <li class="container">
        <span class="ipid">IPID</span>
        <span class="dev-name">NAME </span>
        <span class="ip-add">IP Address</span>
        <span class="conected">
          Conection Status
          <!-- <div class="btn-rnd btn-rnd-sm success"></div> -->
        </span>
      </li>
      <!-- <li>IPID | NAME | IP Address</li> -->
      <li
        class="container"
        v-for="dev in devices"
        :key="dev.IPID">
        <span class="ipid">{{ dev.IPID }}</span>
        <span class="dev-name">{{ dev.name }}</span>
        <span class="ip-add">{{ dev.IPaddress }}</span>
        <span class="conected">
          <div
            class="btn-rnd btn-rnd-sm success"
            :class="{ success: dev.conected, fail: !dev.conected }"></div>
        </span>
      </li>
    </ul>
    <div
      v-if="shh"
      class="container shh">
      <iframe
        src="https://giphy.com/embed/MEMN2bdE4tB8Izd83r"
        width="480"
        height="271"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen></iframe>
      <iframe
        src="https://giphy.com/embed/H7r5XcQccQvlXPwUOR"
        width="480"
        height="289"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen></iframe>
    </div>

    <div
      @click="shh = !shh"
      class="btn-sqr btn-sqr-sm"></div>
  </main>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import { useIPTStore } from '@/stores/IPTStore'

  const { devices } = useIPTStore()

  const shh = ref(false)
</script>

<style scoped>
  main {
    flex-direction: column;
  }
  li {
    border-bottom: 1px solid var(--CL);
  }
  li > span {
    height: 3.5em;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  ul {
    height: 75%;
    width: 50%;
    overflow: auto;
  }
  .success {
    box-shadow: var(--shadow);
    background: linear-gradient(145deg, #62be78, #53a065);
  }
  .fail {
    box-shadow: var(--shadow);
    background: linear-gradient(145deg, #ff7878, #e66565);
  }
  .ipid {
    width: 25%;
    border-right: 1px solid var(--CL);
    padding: 0 0.5em 0 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dev-name {
    width: 25%;
    border-right: 1px solid var(--CL);
    padding: 0 0.5em 0 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ip-add {
    width: 25%;
    border-right: 1px solid var(--CL);
    padding: 0 0.5em 0 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .conected {
    width: 25%;
    /* border-right: 1px solid var(--CL); */
    padding: 0 0.5em 0 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .btn-sqr {
    border: none;
  }
  .shh {
    background: var(--dark);
  }
</style>
