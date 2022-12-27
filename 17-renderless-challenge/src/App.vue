<script setup>
import NorthPoleDistance from './components/NorthPoleDistance.vue'
</script>

<template>
  <div class="container mx-auto px-4">
    <h2>Example 1</h2>
    <NorthPoleDistance>
      <template #default="{distance, unit, toggleUnit}">
        <div class="my-2 gap-2 flex flex-col items-start">
          
        You are currently {{ distance }} {{ unit }}s away from the North Pole!
        <button class="bg-gray-dark text-white rounded px-4 py-1" @click="toggleUnit">Toggle Unit</button>
        </div>
      </template>
    </NorthPoleDistance>

    <h2 class="mt-16">Example 2</h2>
    <NorthPoleDistance>
      <template #default="{distance, unit, toggleUnit}">
        <div class="border rounded-lg my-4 p-8 flex flex-col gap-4 justify-center items-center text-center">
        🎅 The distance from you to Santa's home is a whopping {{ distance }} {{ unit }}s! 🎅
        <button @click="toggleUnit" class="bg-green text-white rounded p-2">Switch to {{ unit === 'km' ? 'miles' : 'kms'}}</button>
        </div>
      </template>
    </NorthPoleDistance>
  </div>
</template>
