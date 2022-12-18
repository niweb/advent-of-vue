<script setup>
import { ref, watch } from 'vue'

const searchTerm = ref('')
const products = ref([])
const loading = ref(false)

const findProducts = async term => {
  loading.value = true;
  const response = await fetch(`https://dummyjson.com/products/search?q=${term}`);

  if (response.ok) {
    const result = await response.json()
    products.value = result.products
  } else {
    alert('Sorry, something went wrong')
  }

  loading.value = false;
}

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

const debouncedFindProducts = debounce(findProducts, 300)

watch(searchTerm, newTerm => {
  if (newTerm.length > 0) {
    debouncedFindProducts(newTerm)
  } else {
    products.value = []
  }
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <p v-if="loading">Loading...</p>
    <ul class="list-disc" v-else-if="products.length > 0">
      <li v-for="product in products">{{ product.title }}</li>
    </ul>
    <p v-else>No products</p>
  </div>
</template>
