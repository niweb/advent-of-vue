<template>
    <li :class="`w-20 h-20 border rounded-xl flex justify-center items-center text-2xl bg-green text-white ${eliminated && 'grayscale'}`" >
        {{ value }}
    </li>
</template>

<script setup>
const props = defineProps({
    value: Number,
    eliminated: Boolean
})

</script>