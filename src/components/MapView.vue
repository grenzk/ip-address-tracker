<script setup>
import { ref, onMounted } from 'vue'
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'

let zoom = ref(12)
let center = ref([40.6782, -73.9442])
let markerCoordinates = ref([40.6782, -73.9442])
const mapHeight = ref('100%')

const adjustMapHeight = () => {
  const containerElement = document.querySelector('.container')
  const windowHeight = window.innerHeight

  const containerHeight = (containerElement.offsetHeight / windowHeight) * 100

  mapHeight.value = `${100 - containerHeight}%`
}

onMounted(() => {
  adjustMapHeight()
  window.addEventListener('resize', adjustMapHeight)
})
</script>

<template>
  <div class="map" :style="{ height: mapHeight }">
    <LMap :zoom="zoom" :center="center" :useGlobalLeaflet="false">
      <LTileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="Stadia Maps Basemap"
      ></LTileLayer>
      <LMarker :lat-lng="markerCoordinates">
        <LIcon icon-url="src/assets/img/icon-location.svg" />
      </LMarker>
    </LMap>
  </div>
</template>

<style scoped lang="scss">
.map {
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
}
</style>
