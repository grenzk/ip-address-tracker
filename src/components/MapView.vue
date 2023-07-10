<script setup>
import { ref, onMounted, onBeforeUpdate } from 'vue'
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'

const props = defineProps({
  location: {
    type: Object
  }
})

const zoom = ref(12)
const center = ref([40.6782, -73.9442])
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

onBeforeUpdate(() => {
  if (props.location) {
    center.value = [props.location.lat, props.location.lng]
  }
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
