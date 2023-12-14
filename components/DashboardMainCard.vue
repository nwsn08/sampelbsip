<template>
  <div>
    <v-sheet :height="200" :width="350" elevation="1">
      <div class="d-flex flex-column text-center">
        <span class="mt-6">{{title}}</span>
        <h1 class="mt-10">{{value}}</h1>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'value']);
</script>

