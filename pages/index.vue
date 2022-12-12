<template>
  <div class="">
    <div class="text-2xl">
      Hello World, {{ value }}!
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
// Typescript ESLint check;
type Value = string;
const value: Ref<Value> = ref('Hello Nuxt3');
</script>

<style>

</style>