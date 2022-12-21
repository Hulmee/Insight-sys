<template>
  <div class="pres">
    <section class="card">
      <h1 class="card-title">HDMI Details</h1>
      <div class="btn-con">
        Conected:
        <div
          id="HDMI"
          class="btn-rnd btn-rnd-sm disabled"
          :class="{
            true: HDMI.conected,
            false: !HDMI.conected,
          }"></div>
      </div>
      <div class="btn-con">
        HDCP active:
        <div
          id="HDCP"
          class="btn-rnd btn-rnd-sm"
          :class="{
            true: HDMI.HDCP,
            false: !HDMI.HDCP,
          }"></div>
      </div>
      <p class="card-text">Input resolution: {{ HDMI.resolution }}</p>
    </section>
    <section class="card">
      <h1 class="card-title">AirMedia Details</h1>
      <p class="card-text">
        <span>IP Address:</span> <span>{{ Airmedia.IPadress }}</span>
      </p>
      <p class="card-text">
        <span>Code:</span> <span>{{ Airmedia.Code }}</span>
      </p>
      <p class="card-text">
        <span> Hostname:</span> <span>{{ Airmedia.Hostname }}</span>
      </p>
      <div class="btn-con">
        Conected users:
        <div
          id="AM"
          class="btn-rnd btn-rnd-sm"
          :class="{
            true: Airmedia.numUsers > 0,
            false: Airmedia.numUsers <= 0,
          }">
          {{ Airmedia.numUsers }}
        </div>
      </div>
      <div class="btn-con">
        <div class="btn-rec btn-rec-sm">
          <small>Reboot </small>
        </div>
        <div class="btn-rec btn-rec-sm"><small>Reset conections</small></div>
      </div>
    </section>
  </div>
</template>

<script setup>
  const props = defineProps({
    HDMI: { type: Object, required: true },
    Airmedia: { type: Object, required: true },
  })
</script>

<style scoped>
  .pres {
    height: 75%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .btn-rnd {
    box-shadow: none;
    cursor: not-allowed;
  }
  #HDMI.true {
    background: linear-gradient(145deg, #62be78, #53a065);
    color: var(--light);
  }
  #HDMI.false {
    background: linear-gradient(145deg, #ff7878, #e66565);
  }
  #HDCP.true {
    background: linear-gradient(145deg, #62be78, #53a065);
    color: var(--light);
  }
  #HDCP.false {
    background: linear-gradient(145deg, #ff7878, #e66565);
  }
  #AM.true {
    background: linear-gradient(145deg, #62be78, #53a065);
    color: var(--light);
  }
  #AM.false {
    background: linear-gradient(145deg, #ff7878, #e66565);
  }
  .btn-rnd:active {
    box-shadow: none;
  }
  .btn-rnd:active,
  .btn-sqr:active,
  .card > .btn-con > .btn-rnd:active,
  .card > .btn-rnd:active {
    box-shadow: none;
  }
</style>
