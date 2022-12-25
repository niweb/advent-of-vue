<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1">
      <template v-for="(index, name) in $slots" v-slot:[name]="data">
        <slot :name="name" v-bind="data"></slot>
      </template>
    </ChristmasTree>

    <!-- Render the different things -->
    <div class="flex flex-row justify-center">
      <!-- Create the tree sections -->
      <div v-for="i in size" class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center">
        <!-- Add lights to each section -->
        <slot name="lights" />
        <template v-if="$slots.even && $slots.odd">
          <slot v-if="i % 2 === 0" name="even" />
          <slot v-else name="odd" />
        </template>
        <slot v-else-if="$slots.ornaments" name="ornaments" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>
