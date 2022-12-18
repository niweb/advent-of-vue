<script setup>
defineProps({
  options: Array,
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <select :value="modelValue" @change="v => $emit('update:modelValue', v.target.value)" class="p-2 border-2 border-gray-dark">
    <option v-for="option in options" :value="option.id">{{ option.title }} - ${{ option.price }}</option>
  </select>
</template>
