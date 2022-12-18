<template>
  <p class="mx-5 text-center" v-if="products.length === 2">
    <template v-if="isSame">
      These are the same items
    </template>
    <template v-else>
      You can get <strong>{{ Math.round(productsByPrice[1].price / productsByPrice[0].price) }}x</strong> <em>{{ productsByPrice[0].title }}</em> for about the same price as a single <em>{{ productsByPrice[1].title }}</em>
    </template>
  </p>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  products: Array
})

const isSame = computed(() => props.products[0]?.id === props.products[1]?.id)

const productsByPrice = computed(() => props.products.sort((a, b) => a.price - b.price))

</script>