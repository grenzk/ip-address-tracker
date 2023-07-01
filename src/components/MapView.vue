<script setup>
import { ref } from 'vue'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

let zoom = ref(12)
let center = ref([40.6782, -73.9442])
</script>

<template>
  <div class="map">
    <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="Stadia Maps Basemap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<style scoped lang="scss">
.map {
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
}
</style>
