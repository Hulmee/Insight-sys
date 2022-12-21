<template>
  <div class="cam">
    <section class="card">
      <h1 class="card-title">Presets</h1>

      <div class="btn-rec">Home</div>
      <div class="btn-rec">Preset 1</div>
      <div class="btn-rec">Preset 2</div>
      <div class="btn-rec">Preset 3</div>
      <div class="btn-rec">Preset 4</div>
    </section>
    <section class="card ptz">
      <h1 class="card-title">pan tilt & zoom</h1>
      <div
        id="cam-up"
        class="btn-sqr">
        <font-awesome-icon
          icon="fa-solid fa-chevron-up"
          size="2x" />
      </div>
      <div
        id="cam-dwn"
        class="btn-sqr">
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          size="2x" />
      </div>
      <div
        id="cam-left"
        class="btn-sqr">
        <font-awesome-icon
          icon="fa-solid fa-chevron-left"
          size="2x" />
      </div>
      <div
        id="cam-right"
        class="btn-sqr">
        <font-awesome-icon
          icon="fa-solid fa-chevron-right"
          size="2x" />
      </div>
      <div
        id="zoom-in"
        class="btn-sqr">
        <font-awesome-icon
          icon="fa-solid fa-plus"
          size="2x" />
      </div>
      <div
        id="zoom-out"
        class="btn-sqr">
        <font-awesome-icon
          icon="fa-solid fa-minus"
          size="2x" />
      </div>
    </section>
  </div>
</template>

<script setup>
  //
</script>

<style scoped>
  .cam {
    height: 75%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .ptz {
    width: 600px;
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(9, 1fr);
  }
  .ptz > h1 {
    text-transform: uppercase;
    grid-column: 1/11;
    grid-row: 1/2;
  }
  #cam-up {
    grid-column: 5/7;
    grid-row: 2/4;
  }
  #cam-dwn {
    grid-column: 5/7;
    grid-row: 6/8;
  }
  #cam-left {
    grid-column: 3/5;
    grid-row: 4/6;
  }
  #cam-right {
    grid-column: 7/9;
    grid-row: 4/6;
  }
  #zoom-in {
    grid-column: 2/4;
    grid-row: 7/9;
  }
  #zoom-out {
    grid-column: 8/10;
    grid-row: 7/9;
  }
</style>
