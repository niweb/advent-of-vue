<script setup lang="ts">
import { getDistanceKm, getDistanceMiles } from '@/utils/distance'
import { useGeolocation } from '@vueuse/core'
import { ref, computed } from 'vue'

// hint: coords.latitude + cords.latitude
const { coords } = useGeolocation()

const unit = ref<'km' | 'mile'>('mile')
const metricSystem = computed(() => unit.value === 'km')

const toggleUnit = () => {
  unit.value = metricSystem.value ? 'mile' : 'km'
}

const distance = computed(() => {
  const distanceFunction = metricSystem.value ? getDistanceKm : getDistanceMiles
  return distanceFunction(coords.value.latitude, coords.value.longitude) 
})
</script>

<template>
  <!-- this should only render a slot -->
  <slot :distance="distance" :unit="unit" :toggleUnit="toggleUnit">
    <pre>
      {{distance}} {{ unit }}
    </pre>
    <button @click="toggleUnit">toggle unit ({{ unit }})</button>
  </slot>
</template>
