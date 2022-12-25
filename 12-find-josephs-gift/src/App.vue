<template>
  <div class="w-screen h-screen flex flex-col items-center">
    <div class="m-8 gap-4 flex flex-col items-center justify-center">
      <span class="text-3xl my-4">Find Joseph's present</span>
      <input class="accent-green" type="range" min="1" max="30" v-model="n" />
      <Stepper v-model="step" :max="n - 1" />
    </div>
    <ol class="flex flex-wrap p-10 gap-5 overflow-auto">
      <Present v-for="present in allPresents" :value="present" :eliminated="!(currentPresents.includes(present))" />
    </ol>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import Present from './components/Present.vue'
import Stepper from './components/Stepper.vue'

const n = ref(Math.ceil(Math.random() * 30))
const step = ref(0)

watch(n, () => step.value = 0)

const allPresents = computed(() => Array.from({ length: n.value }, (_, i) => i + 1))

const presentsByStep = computed(() => {
  let lastEliminatedIndex = 0
  let presents = [allPresents.value]

  for (let i = 0; i < n.value - 1; i++) {
    const lastPresents = presents[presents.length - 1]
    const nextEliminated = (lastEliminatedIndex + 1) % lastPresents.length;

    const newPresents = [...lastPresents]
    newPresents.splice(nextEliminated, 1)

    presents.push(newPresents)
    lastEliminatedIndex = nextEliminated
  }

  return presents;
})

const currentPresents = computed(() => presentsByStep.value[step.value])

</script>
