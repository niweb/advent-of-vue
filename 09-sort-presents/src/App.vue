<template>
  <div class="w-full h-full p-4 flex flex-col space-y-12 justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img v-for="present in (sort ? sortedPresents : presents)" :key="present.id" :src="present.src"
          :alt="`Present ${present.id}`" data-qa="present" />
      </div>
    </div>
    <button @click="sort = !sort" class="bg-green text-white py-2 px-4 rounded">Toggle sort</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import presents from './presents.json'

const sort = ref(false)
const sortedPresents = computed(() => [...presents].sort(
  (a, b) => (a.dimensions.width * a.dimensions.height) - (b.dimensions.width * b.dimensions.height)
))

</script>
