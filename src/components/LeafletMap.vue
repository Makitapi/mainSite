<template>
  <div :id="id" :class="customClass" :style="{ height: `${height ?? 300}px` }"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import 'leaflet/dist/leaflet.js'
import 'leaflet/dist/leaflet.css'

type PropType = {
  id: string
  customClass?: string
  height?: number
  options?: any
}

const props = defineProps<PropType>()

onMounted(() => {
  const mapEle = document.getElementById(props.id)

  const mapOptions = props.options ?? {}

  let map

  // Map options
  if (mapOptions) {
    const mapLayer = mapOptions.mapLayer || 'https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
    const mapCenter = mapOptions.center ? mapOptions.center : [0, 0]
    const mapZoom = mapOptions.zoom || 1
    const scrollWheelZoom = mapOptions.scrollWheelZoom !== false
    const markers = mapOptions.markers

    // Map setup
    // @ts-ignore
    map = L.map(mapEle, {
      scrollWheelZoom: scrollWheelZoom
    }).setView(mapCenter, mapZoom)

    // Tile layer
    // @ts-ignore
    L.tileLayer(mapLayer, {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution: '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
      crossOrigin: true
    }).addTo(map)

    // Markers
    if (markers) {
      for (let n = 0; n < markers.length; n++) {
        const iconUrl = markers[n].iconUrl,
          shadowUrl = markers[n].shadowUrl,
          // @ts-ignore
          markerIcon = L.icon({
            iconUrl: iconUrl || '../src/assets/img/map/marker-icon.png',
            iconSize: [30, 43],
            iconAnchor: [14, 43],
            shadowUrl: shadowUrl || '../src/assets/img/map/marker-shadow.png',
            shadowSize: [41, 41],
            shadowAnchor: [13, 41],
            popupAnchor: [1, -40]
          }),
          popup = markers[n].popup
        // @ts-ignore
        const marker = L.marker(markers[n].position, {
          icon: markerIcon
        }).addTo(map)

        if (popup) {
          marker.bindPopup(popup)
        }
      }
    }
  } else {
    // @ts-ignore
    map = L.map(mapEle).setView([0, 0], 1)

    // @ts-ignore
    L.tileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx', {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution: '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
      crossOrigin: true
    }).addTo(map)
  }
})
</script>
