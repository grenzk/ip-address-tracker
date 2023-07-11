<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'

const props = defineProps({
  location: {
    type: Object
  }
})

const zoom = ref(15)
const center = ref([40.748817, -73.985428])
const mapHeight = ref('100%')
const attribution = `
        <a href="https://www.stadiamaps.com/">&copy; Stadia Maps</a>
        <a href="https://openmaptiles.org/">&copy; OpenMapTiles</a>
        <a href="https://www.openstreetmap.org/about/">&copy; OpenStreetMap contributors</a>.`

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

watchEffect(() => {
  if (props.location) {
    center.value = [props.location.lat, props.location.lng]
  }
})
</script>

<template>
  <div class="map" :style="{ height: mapHeight }">
    <LMap :zoom="zoom" :center="center" :useGlobalLeaflet="false" :options="{ zoomControl: false }">
      <LTileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="Stadia Maps Basemap"
        :attribution="attribution"
      ></LTileLayer>
      <LMarker :lat-lng="center">
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
