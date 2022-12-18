<script setup>
import { onMounted, ref } from 'vue';

const delivered = ref(false)
const joke = ref(null)

const loadJoke = async () => {
  delivered.value = false;
  joke.value = null;
  
  const reponse = await fetch('https://v2.jokeapi.dev/joke/christmas')
  joke.value = await reponse.json()
}

onMounted(() => loadJoke())

</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <template v-if="joke">
      <p class="text-lg m-2">{{ joke.setup }}</p>
      <p class="text-lg m-2" v-if="delivered">{{ joke.delivery }}</p>
      <button class="bg-green my-4 px-4 py-2 rounded-md" @click="delivered = true" v-if="!delivered">Tell Me!</button>
      <button class="bg-green my-4 px-4 py-2 rounded-md" @click="loadJoke" v-else>Another</button>
    </template>
    <template v-else>
      Wait a second...
    </template>
  </div>
</template>