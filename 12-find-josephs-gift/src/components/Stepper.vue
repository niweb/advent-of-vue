<template>
    <div class="text-xl">
        <button class="disabled:grayscale emoji-button" :disabled="modelValue === 0" @click="emit('update:modelValue', 0)">⏮️</button>
        <button class="disabled:grayscale emoji-button" :disabled="modelValue === 0" @click="emit('update:modelValue', modelValue - 1)">◀️</button>
        {{ modelValue }}
        <button class="disabled:grayscale emoji-button" :disabled="modelValue === max" @click="emit('update:modelValue', modelValue + 1)">▶️</button>
        <button class="disabled:grayscale emoji-button" :disabled="modelValue === max" @click="emit('update:modelValue', max)">⏭️</button>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: Number,
    max: Number
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.emoji-button {
    filter: hue-rotate(319deg)
}
.emoji-button:hover {
    filter: hue-rotate(319deg) brightness(1.2) saturate(0.5);
}

</style>