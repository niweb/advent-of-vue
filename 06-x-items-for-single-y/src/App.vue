<script setup>
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
import { computed, onMounted, ref } from 'vue';

const products = ref([])
const selectedIds = ref([])
const selectedProducts = computed(() => selectedIds.value.map(id => products.value.find(item => item.id === +id)))

onMounted(async () => {
  const response = await fetch('https://dummyjson.com/products')
  const result = await response.json()
  products.value = result.products
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect v-model="selectedIds[0]" :options="products" />
      <ItemSelect v-model="selectedIds[1]" :options="products" />
    </div>
    <ComparisonSummary :products="selectedProducts" />
  </div>
</template>
