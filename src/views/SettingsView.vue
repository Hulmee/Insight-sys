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
  </main>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const devices = ref([
    {
      IPID: '11',
      name: 'LCD 1 TCP/IP',
      IPaddress: '10.100.0.2',
      conected: true,
    },
    {
      IPID: '12',
      name: 'LCD 2 TCP/IP',
      IPaddress: '10.100.0.3',
      conected: true,
    },
    {
      IPID: '13',
      name: 'LCD 3 TCP/IP',
      IPaddress: '10.100.0.4',
      conected: false,
    },
    {
      IPID: '14',
      name: 'LCD 4 TCP/IP',
      IPaddress: '10.100.0.5',
      conected: true,
    },
    {
      IPID: '15',
      name: 'LCD 5 TCP/IP',
      IPaddress: '10.100.0.6',
      conected: true,
    },
    {
      IPID: '16',
      name: 'LCD 6 TCP/IP',
      IPaddress: '10.100.0.7',
      conected: true,
    },
  ])
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
</style>
